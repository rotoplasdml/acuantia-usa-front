<template>
<div>
	<!-- no service -->
	<div id="no-service" v-if="this.userServiceArea == 0 || this.userServiceArea == null" class="container-fluid">
		<div class="row">
			<div class="col-12 offset-0 | col-md-8 offset-md-2 | text-center fs-4">
				<img class="mb-3" src="~/assets/images/common/icon-no-service.svg" alt="Icon" style="width: 100px;">
				<p>At <span class="bold">Acuantia</span>, we strive to provide exceptional septic services to our customers, but unfortunately, due to logistical constraints or other factors, we are unable to extend our services to your location at this time.</p>
				<p>You can choose another location by clicking on the "Change location" button or by changing zip code in the corresponding text box. Also you can turn on the location services on your device.</p>
			</div>
		</div>
		<div class="col-12 text-center my-3 py-3">
			
			<div class="input-group">
				<button class="btn btn-outline-secondary" type="button" id="button-addon1">
					Change Location
					<svg class="me-2" style="width: 18px;" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 16 16" xml:space="preserve">
						<path d="M8,0C3.6,0,0,3.6,0,8c0,4.4,3.6,8,8,8c4.4,0,8-3.6,8-8C16,3.6,12.4,0,8,0z M8,14.5c-3.6,0-6.5-2.9-6.5-6.5c0-3.6,2.9-6.5,6.5-6.5c3.6,0,6.5,2.9,6.5,6.5C14.5,11.6,11.6,14.5,8,14.5z" class="st0"></path> <path d="M11.6,7.6c0-0.1-0.1-0.2-0.2-0.2L8.5,4.4c-0.3-0.3-0.7-0.3-1,0c-0.3,0.3-0.3,0.7,0,1l1.7,1.7H5.1c-0.4,0-0.7,0.3-0.7,0.7c0,0.4,0.3,0.7,0.7,0.7h4.1l-1.7,1.7c-0.3,0.3-0.3,0.7,0,1c0.1,0.1,0.3,0.2,0.5,0.2c0.2,0,0.4-0.1,0.5-0.2l2.9-2.9c0.1-0.1,0.1-0.1,0.2-0.2C11.7,7.9,11.7,7.7,11.6,7.6z" class="st0"></path>
					</svg>
				</button>
				<input type="text" class="form-control" placeholder="Enter Zip Code" aria-label="Example text with button addon" aria-describedby="button-addon1">
			</div>
		</div>
		<!-- btn -->
		<div class="col-12 text-center">
			<NuxtLink class="ac-btn my-3 hvr-forward" to="/">
				<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 16 16" xml:space="preserve" class="me-2" style="transform: rotate(180deg);">
					<path d="M8,0C3.6,0,0,3.6,0,8c0,4.4,3.6,8,8,8c4.4,0,8-3.6,8-8C16,3.6,12.4,0,8,0z M8,14.5c-3.6,0-6.5-2.9-6.5-6.5c0-3.6,2.9-6.5,6.5-6.5c3.6,0,6.5,2.9,6.5,6.5C14.5,11.6,11.6,14.5,8,14.5z" class="st0"></path> <path d="M11.6,7.6c0-0.1-0.1-0.2-0.2-0.2L8.5,4.4c-0.3-0.3-0.7-0.3-1,0c-0.3,0.3-0.3,0.7,0,1l1.7,1.7H5.1c-0.4,0-0.7,0.3-0.7,0.7c0,0.4,0.3,0.7,0.7,0.7h4.1l-1.7,1.7c-0.3,0.3-0.3,0.7,0,1c0.1,0.1,0.3,0.2,0.5,0.2c0.2,0,0.4-0.1,0.5-0.2l2.9-2.9c0.1-0.1,0.1-0.1,0.2-0.2C11.7,7.9,11.7,7.7,11.6,7.6z" class="st0"></path>
				</svg>
				Return to homepage
			</NuxtLink>
		</div>
	</div>
	<!-- service -->
	<div v-else class="container-fluid">
		<!-- <UserGeolocation @senduserdataservicearea="captureData"/> -->
		<!-- header -->
		<div id="header" class="row align-items-center">
			<div class="col-12 | col-md-8 offset-md-2 | col-lg-6  offset-lg-0 | col-xl-3 offset-xl-1 | p-3">
				<h2 class="mb-3 extra-bold fs-1">We've got you Covered in {{ this.userCity }}</h2>
				<p class="my-3">Talk to a Local Expert:</p>
				<a class="ac-btn my-3 hvr-forward" href="">
					Submit Your Project
					<svg class="ms-2" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 16 16" style="enable-background:new 0 0 16 16;" xml:space="preserve">
						<path class="st0" d="M8,0C3.6,0,0,3.6,0,8c0,4.4,3.6,8,8,8c4.4,0,8-3.6,8-8C16,3.6,12.4,0,8,0z M8,14.5c-3.6,0-6.5-2.9-6.5-6.5c0-3.6,2.9-6.5,6.5-6.5c3.6,0,6.5,2.9,6.5,6.5C14.5,11.6,11.6,14.5,8,14.5z"/>
						<path class="st0" d="M11.6,7.6c0-0.1-0.1-0.2-0.2-0.2L8.5,4.4c-0.3-0.3-0.7-0.3-1,0c-0.3,0.3-0.3,0.7,0,1l1.7,1.7H5.1c-0.4,0-0.7,0.3-0.7,0.7c0,0.4,0.3,0.7,0.7,0.7h4.1l-1.7,1.7c-0.3,0.3-0.3,0.7,0,1c0.1,0.1,0.3,0.2,0.5,0.2c0.2,0,0.4-0.1,0.5-0.2
						l2.9-2.9c0.1-0.1,0.1-0.1,0.2-0.2C11.7,7.9,11.7,7.7,11.6,7.6z"/>
					</svg>
				</a>
			</div>
			<!-- Map -->
			<div class="col-12 | col-sm-12 offset-sm-0 | col-lg-6 offset-lg-0 | col-xl-7 offset-xl-1 | p-0">
				<div id="map"></div>
			</div>
		</div>
		<!-- services -->
		<div id="services" class="row">
			<div class="col-12 offset-0 | col-md-8 offset-md-2 | text-center">
				<h2 class="extra-bold fs-1 ac-1 mb-3">Septic Services in Your Area</h2>
			</div>
			<!-- slider -->
			<div class="col-12 offset-0 | col-md-10 offset-md-1 | p-3">
				<!-- Slider main container -->
				<div class="swiper">
					<!-- Additional required wrapper -->
					<div class="swiper-wrapper">
						<!-- Slides -->
						<div class="swiper-slide home-slide text-center p-3">
							<img class="mb-3" src="~/assets/images/home/home-slider-site-soil.svg" alt="Image">
							<h3 class="extra-bold ac-1 mb-3">Site & Soil Evaluation</h3>
							<p class="light">We evaluate your site and soils to make sure it can support a repair, expanded, or new septic system.</p>
						</div>
						<div class="swiper-slide home-slide text-center p-3">
							<img class="mb-3" src="~/assets/images/home/home-slider-system-design.svg" alt="Image">
							<h3 class="extra-bold ac-1 mb-3">System Design</h3>
							<p class="light">Our team provides you with septic design options that best fit your site needs, within your budget.</p>
						</div>
						<div class="swiper-slide home-slide text-center p-3">
							<img class="mb-3" src="~/assets/images/home/home-slider-installation.svg" alt="Image">
							<h3 class="extra-bold ac-1 mb-3">Installation</h3>
							<p class="light">We work closely with you to have a septic system installed within budget and in your timeline.</p>
						</div>

						<div class="swiper-slide home-slide text-center p-3">
							<img class="mb-3" src="~/assets/images/home/home-slider-site-soil.svg" alt="Image">
							<h3 class="extra-bold ac-1 mb-3">Site & Soil Evaluation</h3>
							<p class="light">We evaluate your site and soils to make sure it can support a repair, expanded, or new septic system.</p>
						</div>
					</div>
					<!-- If we need navigation buttons -->
					<div class="swiper-button-prev"></div>
					<div class="swiper-button-next"></div>
				</div>
			</div>
		</div>
	</div>
</div>
</template>


<style>
	#no-service {
		padding-top: 3rem;
		padding-bottom: 3rem;
		background: url(~assets/images/service-area/background.jpg) no-repeat;
		background-size: cover;
	}


	/* ---------------- */
	/*	Mapa
	/* ---------------- */
		#map {
			width: 100%;
			height: 500px;
		}


	/* ---------------- */
	/*	Slider
	/* ---------------- */
		.swiper {
				width: 100%;
			}

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

			.home-slide img {
				width: 200px;
			}
</style>


<script>
	import UserGeolocation from '~/components/UserGeolocation.vue'
	export default {
    name: "service-area",
	/* components: {
		UserGeolocation
	}, */
    head() {
        return {
            title: "Service Area | Acuantia",
            link: [
                {
                    rel: "stylesheet",
                    href: "https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css"
                },
            ],
            script: [
                {
                    src: "https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js"
                },
            ]
        };
    },
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
		/* captureData(mess) {
			console.log('m' + mess.userLatitude)
			this.userLatitude = mess.userLatitude
			this.userLongitude = mess.userLongitude
			this.userFullData = mess.userFullData
			this.userCountry = mess.userCountry
			this.userCity = mess.userCity
			this.userLocality = mess.userLocality
			this.userZipcode = mess.userZipcode
			this.userState = mess.userState
			this.userServiceArea = mess.userServiceArea
			this.userServiceAreaPhone = mess.userServiceAreaPhone
			this.userServiceAreaServices = mess.userServiceAreaServices
			
		}, */
    },
    mounted: function () {
        console.log("service-area:mounted")
		//this.$generateUserMap()
    }
}
</script>