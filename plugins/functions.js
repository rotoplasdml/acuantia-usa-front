export default ({ $axios, app }, inject) => {
    inject('initialData', function(){
        console.log('p:initalData')
        // Verify if exists data on localstorage
        if (localStorage.getItem('userLatitude')) {
            console.log('p:initialData:yes')
            return true
        // If no data on localstorage
        } else {
            console.log('p:initialData:no')
            return false
        }
    })

    inject('getUserData', function(){
        console.log('p:getUserData')
        // Get geolocation
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                // Get reverse geolocation to get Zipcode and other data
                $axios.get('https://api.bigdatacloud.net/data/reverse-geocode-client?latitude='+ position.coords.latitude + '&longitude=' + position.coords.longitude)
                .then(function(response){
                    // If countryCode is US verify data on strapi and store the info
                    if (response.data.countryCode == 'US') {
                        /* console.log('user:usa:yes') */
                        // store data in localstorage
                        /* 
                        console.log(position.coords.latitude)
                        console.log(position.coords.longitude)

                        console.log(response.data)
                        console.log(response.data.countryCode)
                        console.log(response.data.city)
                        console.log(response.data.locality)
                        console.log(response.data.localityInfo.informative[3].name)
                        console.log(response.data.principalSubdivision)
                        */
                        localStorage.setItem('userLatitude', position.coords.latitude)
                        localStorage.setItem('userLongitude', position.coords.longitude)
                        localStorage.setItem('userFullData', JSON.stringify(response.data))
                        localStorage.setItem('userCountry', response.data.countryCode)
                        localStorage.setItem('userCity', response.data.city)
                        localStorage.setItem('userLocality', response.data.locality)
                        localStorage.setItem('userZipcode', response.data.localityInfo.informative[3].name)
                        localStorage.setItem('userState', response.data.principalSubdivision)
                        
                        // Verify if exists on Strapi
                        $axios.get('http://localhost:1337/api/zipcodes?&filters[$or][0][zipcode]='+ response.data.localityInfo.informative[3].name)
                        .then(function(info){
                            /* console.log(info.data.data.length) */
                            //console.log(info.data.data[0])
                            // If data is 1 or more userServiceArea = 1
                            if (info.data.data.length >= 1){
                                /*
                                console.log(info.data.data[0].attributes.phone)
                                console.log(info.data.data[0].attributes.services)
                                */
                                localStorage.setItem('userServiceAreaPhone', info.data.data[0].attributes.phone)
                                localStorage.setItem('userServiceAreaServices', info.data.data[0].attributes.services)
                                localStorage.setItem('userServiceArea', 1)
                            // If data is 1 or more userServiceArea = 0
                            } else {
                                localStorage.setItem('userServiceArea', 0)
                            }
                        })
                    // Else set serviceArea = 0, means no service for the user location
                    } else {
                        /* console.log('user:usa:no') */
                        localStorage.setItem('userServiceArea', 0)
                    }
                })
            })
        // If can't get geolocation UserServiceArea = 0
        } else {
            alert("Geolocation is not supported by this browser.")
            localStorage.setItem('userServiceArea', 0)
        }
        //localStorage.setItem('initialData', true)
        return true
    })

    /*
    inject('getUserData', function(){
        console.log('p:getUserData')
        // Get geolocation
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {

                localStorage.setItem('userLatitude', position.coords.latitude)
                localStorage.setItem('userLatitude', position.coords.longitude)
                                
            })
        // If can't get geolocation UserServiceArea = 0
        } else {
            alert("Geolocation is not supported by this browser.")
            localStorage.setItem('userServiceArea', 0)
        }
        localStorage.setItem('initialData', true)
        return true
    })
    */

    inject('setUserData', function(){
        console.log('p:setUserData')
        this.userLatitude = localStorage.getItem('userLatitude')
        this.userLongitude = localStorage.getItem('userLongitude')
        this.userFullData = localStorage.getItem('userFullData')
        this.userCountry = localStorage.getItem('userCountry')
        this.userCity = localStorage.getItem('userCity')
        this.userLocality = localStorage.getItem('userLocality')
        this.userZipcode = localStorage.getItem('userZipcode')
        this.userState = localStorage.getItem('userState')
        this.userServiceArea = localStorage.getItem('userServiceArea')
        this.userServiceAreaPhone = localStorage.getItem('userServiceAreaPhone')
        this.userServiceAreaServices = localStorage.getItem('userServiceAreaServices')
        return true
    })

    inject('generateUserMap', function(){
        console.log('p:generateUserMap')
        if (localStorage.getItem('userServiceArea') == 1) {
            console.log('p:service-area:1')
            var map = L.map('map').setView([this.userLatitude, this.userLongitude], 13)
            var iconUser = L.icon({
                iconUrl: 'https://rotoplas.com.mx/mapa/location-dot-solid.svg',
                iconSize: [35, 38],
                iconAnchor: [22, 35],
            })
            L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19,
                attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            }).addTo(map)
            var marker = L.marker([this.userLatitude, this.userLongitude], {icon: iconUser}).addTo(map)
        } else {
            console.log('p:service-area:0')
        }
    })
}