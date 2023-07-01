<template>
<div>
	<div class="text-center w-100">{{ 'SA:' + userServiceArea + ' lat:' + userLatitude + ' lon:' + userLongitude }}</div>
	<!-- no service -->
	<div id="no-service" v-if="userServiceArea == 0 || userServiceArea == null" class="container-fluid">
		<div class="row">
			<div class="col-12 offset-0 | col-md-8 offset-md-2 | text-center fs-4">
				<img class="mb-3" src="~/assets/images/common/icon-no-service.svg" alt="Icon" style="width: 100px;">
				<p>At <span class="bold">Acuantia</span>, we strive to provide exceptional septic services to our customers, but unfortunately, due to logistical constraints or other factors, we are unable to extend our services to your location at this time.</p>
				<p>You can choose another location by clicking on the "Change location" button or by changing zip code in the corresponding text box. Also you can turn on the location services on your device.</p>
			</div>
		</div>
		<div class="col-12 text-center my-3 py-3 d-flex justify-content-center align-items-center">
			<button id="change-location-btn" class="btn hvr-forward" type="button">
				Change Location
				<svg class="me-2" style="width: 18px;" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 16 16" xml:space="preserve">
					<path d="M8,0C3.6,0,0,3.6,0,8c0,4.4,3.6,8,8,8c4.4,0,8-3.6,8-8C16,3.6,12.4,0,8,0z M8,14.5c-3.6,0-6.5-2.9-6.5-6.5c0-3.6,2.9-6.5,6.5-6.5c3.6,0,6.5,2.9,6.5,6.5C14.5,11.6,11.6,14.5,8,14.5z" class="st0"></path> <path d="M11.6,7.6c0-0.1-0.1-0.2-0.2-0.2L8.5,4.4c-0.3-0.3-0.7-0.3-1,0c-0.3,0.3-0.3,0.7,0,1l1.7,1.7H5.1c-0.4,0-0.7,0.3-0.7,0.7c0,0.4,0.3,0.7,0.7,0.7h4.1l-1.7,1.7c-0.3,0.3-0.3,0.7,0,1c0.1,0.1,0.3,0.2,0.5,0.2c0.2,0,0.4-0.1,0.5-0.2l2.9-2.9c0.1-0.1,0.1-0.1,0.2-0.2C11.7,7.9,11.7,7.7,11.6,7.6z" class="st0"></path>
				</svg>
			</button>
			<input type="text" class="form-control w-auto" placeholder="Enter Zip Code" aria-label="Example text with button addon" aria-describedby="button-addon1">
		</div>
		<!-- btn -->
		<div class="col-12 text-center">
			<NuxtLink class="ac-btn my-3 hvr-float" to="/">
				<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 16 16" xml:space="preserve" class="me-2" style="transform: rotate(180deg);">
					<path d="M8,0C3.6,0,0,3.6,0,8c0,4.4,3.6,8,8,8c4.4,0,8-3.6,8-8C16,3.6,12.4,0,8,0z M8,14.5c-3.6,0-6.5-2.9-6.5-6.5c0-3.6,2.9-6.5,6.5-6.5c3.6,0,6.5,2.9,6.5,6.5C14.5,11.6,11.6,14.5,8,14.5z" class="st0"></path> <path d="M11.6,7.6c0-0.1-0.1-0.2-0.2-0.2L8.5,4.4c-0.3-0.3-0.7-0.3-1,0c-0.3,0.3-0.3,0.7,0,1l1.7,1.7H5.1c-0.4,0-0.7,0.3-0.7,0.7c0,0.4,0.3,0.7,0.7,0.7h4.1l-1.7,1.7c-0.3,0.3-0.3,0.7,0,1c0.1,0.1,0.3,0.2,0.5,0.2c0.2,0,0.4-0.1,0.5-0.2l2.9-2.9c0.1-0.1,0.1-0.1,0.2-0.2C11.7,7.9,11.7,7.7,11.6,7.6z" class="st0"></path>
				</svg>
				Return to homepage
			</NuxtLink>
		</div>
	</div>
	<!-- service -->
	<div v-else class="container-fluid">
		<!-- header -->
		<div id="header" class="row align-items-center">
			<div class="col-12 | col-md-8 offset-md-2 | col-lg-6  offset-lg-0 | col-xl-3 offset-xl-1 | p-3">
				<h2 class="mb-3 extra-bold fs-1">We've got you Covered in {{ userLatitude }}</h2>
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
	/** */


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
	/** */
	
	#change-location-btn svg {
		fill: #2b73ff;
        transition: all ease .3s;
	}
	#change-location-btn:hover svg {
        fill: #242c36;
    }

</style>


<script>
	export default {
    name: "service-area",
	props: [
		'userServiceArea',
		'userLatitude',
		'userLongitude',
	],
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
        }
    },
	methods: {
		generateUserMap() {
			if(this.userServiceArea == 1) {
				console.log('sa:m:generateUserMap')

				var zc94043 = {
					"type": "FeatureCollection",
					"features": [
						{
						"type": "Feature",
						"properties": {
							"zipCode": "94043",
							"country": "US",
							"city": "Mountain view",
							"county": "Santa clara",
							"state": "CA"
						},
						"geometry": {
							"type": "Polygon",
							"coordinates": [
							[
								[
								-122.106522,
								37.411193
								],
								[
								-122.103285,
								37.413211
								],
								[
								-122.101189,
								37.412084
								],
								[
								-122.10203,
								37.41552
								],
								[
								-122.10025,
								37.42177
								],
								[
								-122.09732,
								37.42161
								],
								[
								-122.097946,
								37.422346
								],
								[
								-122.09697,
								37.42417
								],
								[
								-122.10146,
								37.42821
								],
								[
								-122.10063,
								37.43011
								],
								[
								-122.09981,
								37.43499
								],
								[
								-122.0954,
								37.43488
								],
								[
								-122.09609,
								37.43328
								],
								[
								-122.094226,
								37.433361
								],
								[
								-122.093648,
								37.432876
								],
								[
								-122.093415,
								37.432138
								],
								[
								-122.0866,
								37.431737
								],
								[
								-122.08589,
								37.434374
								],
								[
								-122.085199,
								37.434967
								],
								[
								-122.088704,
								37.435914
								],
								[
								-122.093346,
								37.436159
								],
								[
								-122.097613,
								37.43587
								],
								[
								-122.090964,
								37.43939
								],
								[
								-122.088718,
								37.44308
								],
								[
								-122.088088,
								37.446532
								],
								[
								-122.08848,
								37.447962
								],
								[
								-122.086207,
								37.450275
								],
								[
								-122.082849,
								37.451257
								],
								[
								-122.083004884195,
								37.451715579236
								],
								[
								-122.080096874365,
								37.451435979476
								],
								[
								-122.078052,
								37.448225
								],
								[
								-122.077329,
								37.44984
								],
								[
								-122.075571,
								37.449895
								],
								[
								-122.073628,
								37.449027
								],
								[
								-122.07154,
								37.450319
								],
								[
								-122.06991046352,
								37.450456574937
								],
								[
								-122.06849,
								37.45032
								],
								[
								-122.066995515571,
								37.4498001537323
								],
								[
								-122.064759,
								37.44766
								],
								[
								-122.064717,
								37.447253
								],
								[
								-122.06429,
								37.445857
								],
								[
								-122.059936,
								37.445624
								],
								[
								-122.059673,
								37.434039
								],
								[
								-122.059772,
								37.426839
								],
								[
								-122.058005,
								37.426614
								],
								[
								-122.057368,
								37.426549
								],
								[
								-122.05533,
								37.42744
								],
								[
								-122.05494,
								37.42912
								],
								[
								-122.05201,
								37.42971
								],
								[
								-122.049826,
								37.426171
								],
								[
								-122.049172,
								37.426139
								],
								[
								-122.043572,
								37.427239
								],
								[
								-122.041135,
								37.427012
								],
								[
								-122.040418,
								37.426947
								],
								[
								-122.037118,
								37.426649
								],
								[
								-122.034672,
								37.426438
								],
								[
								-122.036924,
								37.420102
								],
								[
								-122.03711,
								37.41818
								],
								[
								-122.037273,
								37.401432
								],
								[
								-122.037361,
								37.400906
								],
								[
								-122.046534,
								37.40293
								],
								[
								-122.046984,
								37.401425
								],
								[
								-122.044473,
								37.399732
								],
								[
								-122.045944,
								37.395333
								],
								[
								-122.050072,
								37.392977
								],
								[
								-122.04844,
								37.39117
								],
								[
								-122.045689,
								37.392681
								],
								[
								-122.046665,
								37.393746
								],
								[
								-122.045756,
								37.394392
								],
								[
								-122.045001,
								37.394388
								],
								[
								-122.045638,
								37.392556
								],
								[
								-122.046597,
								37.390507
								],
								[
								-122.047257,
								37.390592
								],
								[
								-122.0478,
								37.38633
								],
								[
								-122.05218,
								37.38615
								],
								[
								-122.05227,
								37.38597
								],
								[
								-122.05727,
								37.3876
								],
								[
								-122.057857,
								37.387535
								],
								[
								-122.06291,
								37.38909
								],
								[
								-122.091312,
								37.400534
								],
								[
								-122.1045,
								37.40582
								],
								[
								-122.10831,
								37.40808
								],
								[
								-122.106522,
								37.411193
								]
							]
							]
						}
						}
					]
				}

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
			}
		}
	},
    mounted: function () {
        console.log("service-area:mounted")
		this.generateUserMap()
    }
}
</script>