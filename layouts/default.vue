<template>
	<div>
		<!-- <UserGeolocation /> -->
		<TheMenu />
			<Nuxt />
		<TheFooter />
	</div>
</template>


<script>
	import TheMenu from '~/components/TheMenu.vue'
	import TheFooter from '~/components/TheFooter.vue'
	import UserGeolocation from '../components/UserGeolocation.vue'
	export default {
		name: 'default',
		components: {
			TheMenu,
			TheFooter,
			UserGeolocation,
		}
	}
</script>