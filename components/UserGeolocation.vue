<template>
    <div class="text-center w-100">Lat:{{ this.userLatitude }} - Lon: {{ this.userLongitude }}</div>
</template>


<script>
    export default {
        name: 'UserGeolocation',
		data() {
			return {
				userLatitude: null,
				userLongitude: null,
				//
				userFullData: null,
				userCountry: null,
				userCity: null,
				userLocality: null,
				userZipcode: null,
				userState: null,
				//
				userServiceArea: null,
				userServiceAreaPhone: null,
				userServiceAreaServices: null,
			}
		},
		methods: {
			initialData() {
				console.log('p:initalData')
				// Verify if exists data on localstorage
				if (localStorage.getItem('userLatitude') && localStorage.getItem('userLongitude')) {
					console.log('p:initialData:yes')
					return true
				// If no data on localstorage
				} else {
					localStorage.removeItem('userServiceArea')
					console.log('p:initialData:no')
					return false
				}
			},
			generateUserMap() {},
			startFunctions() {
				console.log('startFunctions')				
				if(this.$initialData()) {
					console.log('localstorage:yes')
					if(this.$setUserData()) {
						console.log('setUserData:yes')
						//this.sendDataToParent()
					}
				} else {
					console.log('localstorage:no')
					if(this.$getUserData()) {
						console.log('getUserData:yes')
						this.$setUserData()
						//this.sendDataToParent()
					}
				}
			},
			/* sendDataToParent() {
				console.log('senduserdatamenu')
				this.$emit('senduserdatamenu',{
					userLatitude: this.userLatitude,
					userLongitude: this.userLongitude,
					userFullData: this.userFullData,
					userCountry: this.userCountry,
					userCity: this.userCity,
					userLocality: this.userLocality,
					userZipcode: this.userZipcode,
					userState: this.userState,
					userServiceArea: this.userServiceArea,
					userServiceAreaPhone: this.userServiceAreaPhone,
					userServiceAreaServices: this.userServiceAreaServices,
				})
			} */
		},
		mounted: function() {
			console.log('mounted:UserGeolocation')
			this.startFunctions()
		}
    }
</script>