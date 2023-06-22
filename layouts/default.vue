<template>
	<div>
		<!-- <div class="text-center w-100">{{ 'lat:' + this.userCity + ' long:' + this.userState }}</div> -->

		<TheMenu
			v-bind:user-service-area="userServiceArea"
			v-bind:user-city="userCity"
			v-bind:user-state="userState"
		/>
		<nuxt-child 
			v-bind:user-service-area="userServiceArea"
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
				userServiceAreaPhone: null,
				userServiceAreaServices: null,
			}
		},
		methods: {
			getPosition() {
				return new Promise((resolve, reject) => {
					navigator.geolocation.getCurrentPosition(resolve, reject)
				});
			},
			async main() {
				var position = await this.getPosition();
				localStorage.setItem('userLatitude' , position.coords.latitude)
				this.userLatitude = localStorage.getItem('userLatitude')

				localStorage.setItem('userLongitude' , position.coords.longitude)
				this.userLongitude = localStorage.getItem('userLongitude')

				const responseAxios = await axios.get('https://api.bigdatacloud.net/data/reverse-geocode-client?latitude='+ this.userLatitude + '&longitude=' + this.userLongitude)
				console.log(responseAxios.data)

				if (responseAxios.data.countryCode == 'US') {

					console.log(responseAxios.data.countryCode)
					localStorage.setItem('userFullData', JSON.stringify(responseAxios.data))
					localStorage.setItem('userCountry', responseAxios.data.countryCode)
					localStorage.setItem('userCity', responseAxios.data.city)
					localStorage.setItem('userLocality', responseAxios.data.locality)
					localStorage.setItem('userZipcode', responseAxios.data.localityInfo.informative[3].name)
					localStorage.setItem('userState', responseAxios.data.principalSubdivision)
					this.userFullData = localStorage.getItem('userFullData')
					this.userCountry = localStorage.getItem('userCountry')
					this.userCity = localStorage.getItem('userCity')
					this.userLocality = localStorage.getItem('userLocality')
					this.userZipcode = localStorage.getItem('userZipcode')
					this.userState = localStorage.getItem('userState')

					localStorage.setItem('userServiceArea', 1)
					this.userServiceArea = localStorage.getItem('userServiceArea')

				} else {

					localStorage.setItem('userServiceArea', 0)
					this.userServiceArea = localStorage.getItem('userServiceArea')

				}
			}
		},
		mounted: function () {
			this.main()
		}
	}
</script>