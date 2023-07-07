<template>
	<div>
		<!-- <div class="text-center w-100">{{ 'lat:' + this.userCity + ' long:' + this.userState }}</div> -->
		<TheMenu
			v-bind:user-service-area="userServiceArea"
			v-bind:user-county-seat="userCountySeat"
		/>
		<nuxt-child 
			v-bind:user-service-area="userServiceArea"
			v-bind:user-latitude="userLatitude"
			v-bind:user-longitude="userLongitude"
			v-bind:county-services="countyServices"
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
				userCountry: null,
				userCity: null,
				userLocality: null,
				userZipcode: null,
				userState: null,
				userServiceArea: null,
				//
				userStrapiInfo: null,
				userCountySeat: null,
				countyServices: null,
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
				const responseBigDataCloud = await axios.get('https://api.bigdatacloud.net/data/reverse-geocode-client?latitude='+ this.userLatitude + '&longitude=' + this.userLongitude)
				console.log(responseBigDataCloud.data)

				// if get user on US
				if (responseBigDataCloud.data.countryCode == 'US') {

					// check if its an area with service
					const responseStrapi = await axios.get('http://localhost:1337/api/counties?&filters[$or][0][zipcodes][$containsi]=' + responseBigDataCloud.data.localityInfo.informative[3].name)
					console.log(responseStrapi.data.data)

						// if its an area with service get values an mark service area 1
						if(responseStrapi.data.data.length == 1) {

							// responseBigDataCloud reverse geolocation
							this.userFullData = JSON.stringify(responseBigDataCloud.data)
							this.userCountry = responseBigDataCloud.data.countryCode
							this.userCity = responseBigDataCloud.data.city
							this.userLocality = responseBigDataCloud.data.locality
							this.userZipcode = responseBigDataCloud.data.localityInfo.informative[3].name
							this.userState = responseBigDataCloud.data.principalSubdivision
							// responseStrapi
							this.userStrapiInfo = JSON.stringify(responseStrapi.data.data[0])
							this.userCountySeat = responseStrapi.data.data[0].attributes.county_seat
							this.countyServices = responseStrapi.data.data[0].attributes.county_services
							// service area
							this.userServiceArea = 1

						// if not a area with service get values an mark service area 0
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