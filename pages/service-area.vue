<template>
	<div class="container-fluid">
		<!-- header -->
		<div id="header" class="row align-items-center">
			<div class="col-12 | col-md-8 offset-md-2 | col-lg-6  offset-lg-0 | col-xl-3 offset-xl-1 | p-3">
				<h2 class="mb-3 extra-bold fs-1">We've got you Covered in <!-- {{this.$store.state.userLat}} --></h2>
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
				<div id="map" class=""></div>
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
</template>


<style>
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
	//import { mapState } from "vuex"
	export default {
		name: 'service-area',
		watch: {
			$route() {
				console.log('Cambio URL')
				this.urlChange()
			}
		},
		head() {
			return {
				title: 'Service Area | Acuantia',
				link: [
					{ 
						rel: 'stylesheet', 
						href: 'https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css' 
					},
					
				],
				script: [
					{ 
						src: 'https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js' 
					},
					
				]
			}
		},
		data() {
            return {
				userLat: null,
				userLong: null,
				userPos: null,
			}
        },
		methods: {
			// url change
			urlChange() {
				console.log('Cambio URL')
				
			},
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
			},
			// configure Swiper
			configureSwiper() {
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
				})
			},
			// generate Map
			generateUserMap() {
				console.log('f:generateUserMap')

				if ( (this.userLat === null && this.userLong === null) ) {

					console.log('sa:variables:nulas')
					if (!localStorage.getItem('usrLt') && !localStorage.getItem('usrLn')) {
						console.log('sa:no:localstore')
						this.getUserLocation()
					} else {
						console.log('si localstore')
						this.setLatLongFromLS()
					}

				}

				var map = L.map('map').setView([this.userLat,this.userLong], 13)
				L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
					maxZoom: 19,
					attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
				}).addTo(map)
			},
			
		},
		mounted: function() {
			console.log('service-area:mounted')
			// verify vars and localstorage
			/* if ( (this.userLat === null && this.userLong === null) ) {
				console.log('sa:variables:nulas')
				if (!localStorage.getItem('usrLt') && !localStorage.getItem('usrLn')) {
					console.log('sa:no:localstore')
					this.getUserLocation()
				} else {
					console.log('si localstore')
					this.setLatLongFromLS()
				}
			} */
			// create the user map
			//this.generateUserMap()

			/* if ($nuxt.$route.name.includes('service-area')) {
				console.log('service-area')
			} else {
				console.log('!service-area')
			} */

			if ($nuxt.$route.name.includes('service-area')) {
				console.log('service-area')

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

				this.generateUserMap()
			}
		}
	}
</script>