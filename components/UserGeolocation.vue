<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12">
                <div class="col-12 d-flex text-center justify-content-center w-100 p-1" style="font-size: 12px;">
                    userLat: {{ this.userLat }} userLon: {{ this.userLong }}
                </div>
            </div>
        </div>
    </div>
</template>


<script>
    export default {
        name: 'UserGeolocation',
    }
</script>


<script>
	import axios from 'axios'
	export default {
		name: 'default',
		/* watch: {
			$route() {
				console.log('Cambio URL')
				this.urlChange()
			}
		}, */
		data() {
			return {
				userLat: null,
				userLong: null,
				userPos: null,
			}
		},
		methods: {
			// url change
			/* urlChange() {
				console.log('Cambio URL')
				if ($nuxt.$route.name.includes('service-area')) {
					console.log('service-area')
				} else {
					console.log('!service-area')

					
				}
			}, */
			// getting the location
			getUserLocation() {
				console.log('f:getUserLocation')
				if (navigator.geolocation) {
					navigator.geolocation.getCurrentPosition(this.storePosition)
				} else {
					alert("Geolocation is not supported by this browser.")
				}
			},
			// store the location
			storePosition(position) {
				console.log('f:storePosition')
				localStorage.setItem("usrLt", position.coords.latitude)
				localStorage.setItem("usrLn", position.coords.longitude)
				this.userLat = localStorage.getItem('usrLt')
				this.userLong = localStorage.getItem('usrLn')
				//console.log('f:storePosition:lat:' + this.userLat + 'long:' + this.userLong)
				this.getUserReverseLocation()
			},
			// set Lat Long from localStorage
			setLatLongFromLS() {
				this.userLat = localStorage.getItem('usrLt')
				this.userLong = localStorage.getItem('usrLn')
			},
			// getting the reverse geolocation
			async getUserReverseLocation() {
				console.log('f:getUserReverseLocation')
				var pos = await this.$axios.$get('https://api.bigdatacloud.net/data/reverse-geocode-client?latitude='+ this.userLat + '&longitude=' + this.userLong)
				console.log('f:getUserReverseLocation:' + pos.city)
				localStorage.setItem("usrPs", JSON.stringify(pos))
				this.userPos = localStorage.getItem('usrPs')
				console.log('f:getUserReverseLocation:' + JSON.parse(this.userPos))
			}
		},
		mounted: function() {
			console.log('default:mounted')

			// verify vars and localstorage
			if ( (this.userLat === null && this.userLong === null) ) {
						console.log('variables nulas')
						if (!localStorage.getItem('usrLt') && !localStorage.getItem('usrLn')) {
							console.log('no localstore')
							this.getUserLocation()
						} else {
							console.log('si localstore')
							this.setLatLongFromLS()
						}
					}
		}
	}
</script>