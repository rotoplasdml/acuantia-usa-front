<template>
	<div>
		<!-- <div class="text-center w-100">{{ 'lat:' + this.userCity + ' long:' + this.userState }}</div> -->
		<TheMenu
			v-bind:user-service-area="userServiceArea"
			v-bind:user-location="userLocation"
		/>
		<nuxt-child 
			v-bind:user-service-area="userServiceArea"
			v-bind:user-latitude="userLatitude"
			v-bind:user-longitude="userLongitude"
			v-bind:slider-services="sliderServices"
		/>
		<TheFooter />
	</div>
</template>


<script>
	import axios from 'axios'
	import TheMenu from '~/components/TheMenu.vue'
	import TheFooter from '~/components/TheFooter.vue'
	export default {
		name: 'default',
		components: {
			TheMenu,
			TheFooter,
		},
		data() {
			return {
				//
				userLatitude: null,
				userLongitude: null,
				userFullData: null,
				userZipcode: null,
				userServiceArea: null,
				//
				userStrapiInfo: null,
				//userCountySeat: null,
				//countyServices: null,
				userLocation: null,
				sliderServices: null,
			}
		},
		methods: {
			getPosition() {
				return new Promise((resolve, reject) => {
					navigator.geolocation.getCurrentPosition(resolve, reject)
				});
			},
			async main() {
				// obtain the user geolocation
				var position = await this.getPosition()
				this.userLatitude = position.coords.latitude
				this.userLongitude = position.coords.longitude

				// whit geolocation get reverse info from Big Data Cloud
				console.log('s:reversegeo:lat:'+this.userLatitude+'long:'+this.userLongitude)
				const responseBigDataCloud = await axios.get('https://api.bigdatacloud.net/data/reverse-geocode-client?latitude='+ this.userLatitude + '&longitude=' + this.userLongitude)
				//const responseBigDataCloud = await axios.get('https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=37.42159&longitude=-122.0837')
				console.log(responseBigDataCloud.data)

				// if get user on US
				if (responseBigDataCloud.data.countryCode == 'US') {

					// responseBigDataCloud reverse geolocation
					this.userFullData = JSON.stringify(responseBigDataCloud.data)
					this.userCountry = responseBigDataCloud.data.countryCode
					this.userZipcode = responseBigDataCloud.data.postcode

					// check if its an area with service on a county
					console.log('s:county')
					const responseStrapi = await axios.get('http://localhost:1337/api/counties?&filters[$or][0][zipcodes][$containsi]=' + responseBigDataCloud.data.postcode)

						// if its an area with service get values an mark service area 1
						if(responseStrapi.data.data.length == 1) {
							console.log(responseStrapi.data.data)

							// responseStrapi
							this.userStrapiInfo = JSON.stringify(responseStrapi.data.data[0])
							this.userLocation = responseStrapi.data.data[0].attributes.city
							this.sliderServices = responseStrapi.data.data[0].attributes.county_services
							// service area
							this.userServiceArea = 1

						// if not a area with service get values an mark service area 0
						} else if (responseStrapi.data.data.length == 0) {

							// check if its an area with service on a state
							console.log('s:state')
							const responseStrapi = await axios.get('http://localhost:1337/api/states?&filters[zipcodes][$containsi]=' + responseBigDataCloud.data.postcode)

							if(responseStrapi.data.data.length == 1) {
								console.log(responseStrapi.data.data)

								// responseStrapi
								this.userStrapiInfo = JSON.stringify(responseStrapi.data.data[0])
								this.userLocation = responseStrapi.data.data[0].attributes.state
								this.sliderServices = responseStrapi.data.data[0].attributes.state_services
								// service area
								this.userServiceArea = 1

							} else {
								this.userServiceArea = 0
							}
						} else {
							this.userServiceArea = 0
						}

				} else {

					this.userServiceArea = 0

				}
			}
		},
		mounted: function () {
			this.main()
		},
		watch: {
			$route (to, from) {
				//console.log('Route changed', from, 'to', to)
			}
		}
	}
</script>


<style></style>