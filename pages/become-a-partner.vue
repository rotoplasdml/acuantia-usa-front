<template>
	<div class="container-fluid">
		<!-- header -->
		<div id="header" class="row bg-ac2 align-items-center">
			<div class="col-12 | col-md-8 offset-md-2 | col-lg-6  offset-lg-0 | col-xl-3 offset-xl-1 | p-3 text-white">
				<img class="my-2 me-2" src="~/assets/images/become-a-partner/head-icon.svg" alt="Icon" title="For my home" style="width: 120px;">
				<h2 class="mb-3 extra-bold fs-1">Become a partner</h2>
				<p class="my-3">We help homeowners solve their septic needs in our seamless, cost-effective, One Stop Shop Process. Choose Acuantia for your first & last stop for everything septic.</p>
				<a class="ac-btn my-3 hvr-forward" href="#form">
					Talk to An Expert Today
					<svg class="ms-2" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 16 16" style="enable-background:new 0 0 16 16;" xml:space="preserve">
						<path class="st0" d="M8,0C3.6,0,0,3.6,0,8c0,4.4,3.6,8,8,8c4.4,0,8-3.6,8-8C16,3.6,12.4,0,8,0z M8,14.5c-3.6,0-6.5-2.9-6.5-6.5c0-3.6,2.9-6.5,6.5-6.5c3.6,0,6.5,2.9,6.5,6.5C14.5,11.6,11.6,14.5,8,14.5z"/>
						<path class="st0" d="M11.6,7.6c0-0.1-0.1-0.2-0.2-0.2L8.5,4.4c-0.3-0.3-0.7-0.3-1,0c-0.3,0.3-0.3,0.7,0,1l1.7,1.7H5.1c-0.4,0-0.7,0.3-0.7,0.7c0,0.4,0.3,0.7,0.7,0.7h4.1l-1.7,1.7c-0.3,0.3-0.3,0.7,0,1c0.1,0.1,0.3,0.2,0.5,0.2c0.2,0,0.4-0.1,0.5-0.2
						l2.9-2.9c0.1-0.1,0.1-0.1,0.2-0.2C11.7,7.9,11.7,7.7,11.6,7.6z"/>
					</svg>
				</a>
			</div>
			<div class="col-12 | col-sm-12 offset-sm-0 | col-lg-6 offset-lg-0 | col-xl-7 offset-xl-1 | p-0">
				<img class="w-100" src="~/assets/images/become-a-partner/head.jpg" alt="Image">
			</div>
		</div>
		<!-- services -->
		<div id="services" class="row">
			<div class="col-12 offset-0 | col-md-8 offset-md-2 | text-center">
				<h2 class="extra-bold fs-1 ac-1 mb-3">Benefits of Working With Acuantia</h2>
			</div>
			<!-- slider -->
			<div class="col-12 offset-0 | col-md-10 offset-md-1 | p-3">
				<!-- Slider main container -->
				<div class="swiper">
					<!-- Additional required wrapper -->
					<div class="swiper-wrapper">
						<!-- Slides -->
						<div class="swiper-slide home-slide text-center p-3">
							<img class="mb-3" src="~/assets/images/become-a-partner/slide-1.svg" alt="Image">
							<h3 class="extra-bold ac-1 mb-3">Qualified Jobs</h3>
							<p class="light">Our sales & marketing team brings in qualified leads to expand our client base.</p>
						</div>
						<div class="swiper-slide home-slide text-center p-3">
							<img class="mb-3" src="~/assets/images/become-a-partner/slide-2.svg" alt="Image">
							<h3 class="extra-bold ac-1 mb-3">Admin Support</h3>
							<p class="light">Our team handles the busy administrative work to provide a streamlined experience for our clients and partners.</p>
						</div>
						<div class="swiper-slide home-slide text-center p-3">
							<img class="mb-3" src="~/assets/images/become-a-partner/slide-3.svg" alt="Image">
							<h3 class="extra-bold ac-1 mb-3">Client Management</h3>
							<p class="light">To save you time and effort, we manage everything on the client's end.</p>
						</div>

						<div class="swiper-slide home-slide text-center p-3">
							<img class="mb-3" src="~/assets/images/become-a-partner/slide-3.svg" alt="Image">
							<h3 class="extra-bold ac-1 mb-3">Client Management</h3>
							<p class="light">To save you time and effort, we manage everything on the client's end.</p>
						</div>

					</div>
					<!-- If we need navigation buttons -->
					<div class="swiper-button-prev"></div>
					<div class="swiper-button-next"></div>
				</div>
			</div>
		</div>
		<!-- form -->
		<div id="form" class="row bg-ac4">
			<div class="col-12 | col-md-7 | p-0">
				<div id="form-text" class="p-3">
					<h2 class="extra-bold fs-1 ac-1 my-3">Partner with Acuantia and grow your septic business!</h2>
					<p>We will help you save time & money on your projects.</p>
				</div>
				<img class="w-100" src="~/assets/images/become-a-partner/partner.jpg" alt="image">
			</div>
			<div class="col-12 | col-md-5 | bg-ac1 text-white d-flex justify-content-center align-items-center">
				
				
				<form action="/partner" method="post">
					<input name="__RequestVerificationToken" type="hidden" value="ylQ8ch9c59HYeeUxtcWAgF3IG1vfz_jyszMKEfmH-VU6uG_raiM7ReYgfChxJGQnjQ2tiSYq0aJfFSzYzyzfQTH6ECa4PzzI4-I8jjU9lPc1">

					<h4 class="has-text-white">Services provided</h4>
					<label class="label">First Name</label>
					<input class="input text-box single-line" id="FirstName" name="FirstName" type="text" value="">
						
					<label class="label">Last Name</label>
					<input class="input text-box single-line" id="LastName" name="LastName" type="text" value="">

					<label class="label">Phone Number <span class="field-validation-valid text-danger" data-valmsg-for="Phone" data-valmsg-replace="true"></span></label>
					<input class="input text-box single-line" data-val="true" data-val-required="required" id="Phone" name="Phone" type="text" value="">

					<label class="label">Email Address <span class="field-validation-valid text-danger" data-valmsg-for="Email" data-valmsg-replace="true"></span></label>
					<input class="input text-box single-line" data-val="true" data-val-email="The Email field is not a valid e-mail address." data-val-required="required" id="Email" name="Email" type="email" value="">

					<p>Septic services you can supply</p>
					<label class="checkbox is-flex is-align-items-center">
					<input type="checkbox" name="ServicesNeeded" value="Site &amp; Soil Evaluation"> <span>Site &amp; Soil Evaluation</span>
					</label>
					
					<label class="checkbox is-flex is-align-items-center">
					<input type="checkbox" name="ServicesNeeded" value="System Design"> <span>System Design</span>
					</label>
					
					<label class="checkbox is-flex is-align-items-center">
					<input type="checkbox" name="ServicesNeeded" value="Installation"> <span>Installation</span>
					</label>
					
					<label class="checkbox is-flex is-align-items-center">
					<input type="checkbox" name="ServicesNeeded" value="Maintenance"> <span>Maintenance</span>
					</label>
					
					<label class="checkbox is-flex is-align-items-center">
					<input type="checkbox" name="ServicesNeeded" value="Pumping"> <span>Pumping</span>
					</label>
					
					<label class="checkbox is-flex is-align-items-center">
					<input type="checkbox" name="ServicesNeeded" value="Inspection"> <span>Inspection</span>
					</label>

					<label class="label">Please share more detail on your expertise including states and counties where you work <span class="field-validation-valid text-danger" data-valmsg-for="ProjectDescription" data-valmsg-replace="true"></span></label>
					<textarea class="textarea" cols="20" data-val="true" data-val-length="Over max characters" data-val-length-max="256" id="ProjectDescription" name="ProjectDescription" placeholder="Share more detail (Optional)" rows="2"></textarea>
					<p class="has-text-right is-size-7 input-label">Max 256 characters</p>

					<button>Submit</button>
				</form>



				
			</div>
		</div>
	</div>
</template>


<style>
	/* ---------------- */
	/*	General
	/* ---------------- */
		#services {
			padding: 3rem 0;
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
	/* ---------------- */
	/*	Form
	/* ---------------- */
		#form-text {
			width: 80%;
			margin: auto;
		}
</style>


<script>
	export default {
		name: 'become-a-partner',
		mounted: function() {
			console.log('mounted')
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
		},
		head() {
			return {
				title: 'Become a Partner | Acuantia',
				link: [
					{ 
						rel: 'stylesheet', 
						href: 'https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css' 
					}
				],
				script: [
					{ 
						src: 'https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js' 
					}
				]
			}
		}
	}
</script>