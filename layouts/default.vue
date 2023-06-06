<template>
	<div>
		<div class="d-flex text-center justify-content-center w-100 p-1" style="font-size: 12px;">
			<div v-if="this.$store.state.userLat === null">userLat null</div>
			<div v-else>Lat: {{this.$store.state.userLat}}</div>
			&nbsp;
			<div v-if="this.$store.state.userLong === null">userLong null</div>
			<div v-else>Long: {{this.$store.state.userLong}}</div>
			&nbsp;
			<div v-if="this.$store.state.userPos === null">userPos null</div>
			<div v-else>userPos: {{this.$store.state.userPos.city}}</div>
		</div>

		<div>
			<!-- <pre>{{ this.userGeoLocation }}</pre> -->
		</div>
			
		<TheMenu />
			<Nuxt />
		<TheFooter />
	</div>
</template>


<script>
	import TheMenu from '~/components/TheMenu.vue'
	import TheFooter from '~/components/TheFooter.vue'
	//import axios from 'axios'
	export default {
		name: 'default',
		components: {
			TheMenu,
			TheFooter
		},
		data() {
            return {
				userGeoLocation: '',
				ip: ''
            }
        },
		methods: {
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
				this.$store.commit('SET_USER_LAT', position.coords.latitude)
				this.$store.commit('SET_USER_LONG', position.coords.longitude)
				this.getUserReverseLocation()
			},
			// getting the reverse geolocation
			async getUserReverseLocation() {
				console.log('f:getUserReverseLocation')
				var pos = await this.$axios.$get('https://api.bigdatacloud.net/data/reverse-geocode-client?latitude='+ this.$store.state.userLat + '&longitude=' + this.$store.state.userLong)
				this.$store.commit('SET_USER_REVERSE_LOCATION', pos)
			}
		},
		created: function() {
			console.log('default:created')
		},
		mounted: function() {
			console.log('default:mounted')
			if (this.$store.state.userLat === null && this.$store.state.userLong === null) {
				this.getUserLocation()
			}
		},
		watch: {
			$route() {
				console.log('Cambio URL')
			}
		},
		fetchOnServer: false
	}
</script>