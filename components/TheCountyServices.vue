<template>
	<!-- slider -->
	<div class="col-12 offset-0 | col-md-10 offset-md-1 | p-3">
		<!--
			<div>serviceArea {{ userServiceArea }}</div>
			<div>contyServices {{ countyServices }}</div>
			<div>route {{ $nuxt.$route.name }}</div>
			<div>servicesContents: {{ this.servicesContents[0] }}</div>
			<br>
		-->
		<!-- Slider main container -->
		<div class="swiper">
			<!-- Additional required wrapper -->
			<div class="swiper-wrapper" v-if="( $nuxt.$route.name.includes('index') || $nuxt.$route.name.includes('for-my-home') || $nuxt.$route.name.includes('service-area') ) && userServiceArea == 1">
				<!-- Slides -->
				<div class="swiper-slide home-slide text-center p-3" v-for="service in this.countyServices">
					<!-- images -->
					<img class="mb-3" :src="require(`../assets/images/services-slider/${service}.svg`)" alt="Image">
					<!-- titles -->
					<h3 v-if="service == 'site-soil'" class="extra-bold ac-1 mb-3">Site & Soil Evaluation</h3>
					<h3 v-if="service == 'design'" class="extra-bold ac-1 mb-3">System Design</h3>
					<h3 v-if="service == 'installation'" class="extra-bold ac-1 mb-3">Installation</h3>
					<h3 v-if="service == 'pumping'" class="extra-bold ac-1 mb-3">Pumping</h3>
					<h3 v-if="service == 'maintenance-repair-replace'" class="extra-bold ac-1 mb-3">Maintenance / Repair / Replace</h3>
					<h3 v-if="service == 'inspection'" class="extra-bold ac-1 mb-3">Inspection</h3>
					<!-- texts -->
					<p v-if="service == 'site-soil'" class="light">
						We evaluate your site and soils to make sure it can support a repair, expanded, or new septic system.
					</p>
					<p v-if="service == 'design'" class="light">
						Our team provides you with septic design options that best fit your site needs, within your budget.
					</p>
					<p v-if="service == 'installation'" class="light">
						We work closely with you to have a septic system installed within budget and in your timeline.
					</p>
					<p v-if="service == 'pumping'" class="light">
						We evaluate your site and soils to make sure it can support a repair, expanded, or new septic system.
					</p>
					<p v-if="service == 'maintenance-repair-replace'" class="light">
						Our team provides you with septic design options that best fit your site needs, within your budget.
					</p>
					<p v-if="service == 'inspection'" class="light">
						We work closely with you to have a septic system installed within budget and in your timeline.
					</p>
				</div>
			</div>
			<div class="swiper-wrapper" v-else>
				<!-- Slides -->
				<div class="swiper-slide home-slide text-center p-3" v-for="content in this.servicesContents">
					<!-- image -->
					<img class="mb-3" :src="require(`@/assets/images/services-slider/${content.image}.svg`)" :alt="content.title">
					<!-- titles -->
					<h3 class="extra-bold ac-1 mb-3">{{content.title}}</h3>
					<!-- texts -->
					<p class="light">{{content.text}}</p>
				</div>
			</div>
			<!-- If we need navigation buttons -->
			<div class="swiper-button-prev"></div>
			<div class="swiper-button-next"></div>
		</div>

	</div>
</template>


<script>
	export default {
		name: 'TheCountyServices',
		props: [
			'userServiceArea',
			'countyServices',
		],
		data() {
			return {
				servicesContents: [
					{
						'image': 'site-soil',
						'title': 'Site & Soil Evaluation',
						'text': 'We evaluate your site and soils to make sure it can support a repair, expanded, or new septic system.'
					},
					{
						'image': 'design',
						'title': 'System Design',
						'text': 'Our team provides you with septic design options that best fit your site needs, within your budget.'
					},
					{
						'image': 'installation',
						'title': 'Installation',
						'text': 'We work closely with you to have a septic system installed within budget and in your timeline.'
					},
					{
						'image': 'pumping',
						'title': 'Pumping',
						'text': 'Test: We work closely with you to have a septic system installed within budget and in your timeline.'
					},
					{
						'image': 'maintenance-repair-replace',
						'title': 'Maintenance / Repair / Replace',
						'text': 'Test: We work closely with you to have a septic system installed within budget and in your timeline.'
					},
					{
						'image': 'inspection',
						'title': 'Inspection',
						'text': 'Test: We work closely with you to have a septic system installed within budget and in your timeline.'
					},
				],
			}
		},
		mounted: function() {
			console.log('TheCountyServices:mounted')
			// configuracion del slider
			const swiper = new Swiper('.swiper', {
				// * Optional parameters
				slidesPerView: 1,
				spaceBetween: 0,
				//direction: 'vertical',
				loop: true,
				// * Navigation arrows
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},
				// * Responsive breakpoints
				breakpoints: {
					// when window width is >= XXXpx
					576: {
						slidesPerView: 2,
						spaceBetween: 16
					},
					992: {
						slidesPerView: 3,
						spaceBetween: 16
					}
				}
			});
		}
	}
</script>


<style>
	.swiper-button-next,
    .swiper-button-prev {
        background-color: transparent;
        background-position: center;
        background-size: 100%;
        background-repeat: no-repeat;
        
    }

    .swiper-button-prev {
        background-image: url("~assets/images/common/icon-arrow-prev.svg");
    }

    .swiper-button-next {
        background-image: url("~assets/images/common/icon-arrow-next.svg");
    }

    .swiper-button-next::after,
    .swiper-button-prev::after {
    content: "";
    }
</style>