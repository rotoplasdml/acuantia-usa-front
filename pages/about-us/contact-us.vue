<template>
	<div class="container-fluid">
		<!-- header -->
		<div id="header" class="row bg-ac2 align-items-center">
			<div class="col-12 | col-md-8 offset-md-2 | col-lg-6  offset-lg-0 | col-xl-3 offset-xl-1 | p-3 text-white">
				<h2 class="mb-3 extra-bold fs-1">Contact Us</h2>
				<p class="my-3">We'll help you find the right service for your home or business.</p>
			</div>
			<div class="col-12 | col-sm-12 offset-sm-0 | col-lg-6 offset-lg-0 | col-xl-7 offset-xl-1 | p-0">
				<img class="w-100" src="~/assets/images/about-us/contact-us/header.jpg" alt="Image">
			</div>
		</div>
		<!-- help -->
		<div id="help" class="row bg-ac4">
			<div class="col-12 | col-md-4 offset-md-1">
				<h2 class="extra-bold fs-1">We're here to help</h2>
				<p>Acuantia provide you with a one stop shop for all your septic needs. Our services include site and soil evaluation, engineering and design, installation, maintenance, and repair for your septic system.</p>
				<!-- Address -->
				<h3 class="extra-bold fs-2">Address</h3>
				<p>
					Location pin icon685 John B Sias Memorial Pkwy
					Ste 330 Fort Worth, TX,
					76134-1304 United States
				</p>
				<!-- Contact Information -->
				<h3 class="extra-bold fs-2">Contact Information</h3>
				<a href="">(888) 702-2502</a>
				<a href="">Mail iconseptic@acuantia.com</a>
				<!-- Service FAQS -->
				<h3 class="extra-bold fs-2">Service FAQS</h3>
				<p>
					Find answers now
				</p>
			</div>
			<!-- form -->
			<div class="col-12 | col-md-6 offset-md-1 | bg-ac5 text-white">
				<div class="row">
					<div class="col-12 | col-md-10 offset-1 | text-center">
						<h3 class="extra-bold fs-3">Get a call from our septic experts</h3>



						<form id="contact-us-form" @submit.prevent="sendForm" method="post">
								<input name="__RequestVerificationToken" type="hidden" value="iVuJIux5MsbXFf7FGu1AMeUcq0IkGEgcoUDfk3g-rdXOyjdpfbR_nKu7Y4afTAGLt2gRZT1JV7TKyuitLuVGCI3tABdTb1ZEnBK3grt11xg1">                    <div id="form-container" class="form-container is-hidden-touch mt-3 mr-auto mb-0 ml-auto">
								<h4 class="has-text-white">Get in touch!</h4>
								<div class="pt-4 pr-4 pb-4 pl-5">
								<div class="field is-grouped">
									<div class="control">
									<label class="label">First Name</label>
									<input class="input text-box single-line" id="FirstName" name="FirstName" type="text" value="">
									</div>
									<div class="control">
									<label class="label">Last Name</label>
									<input class="input text-box single-line" id="LastName" name="LastName" type="text" value="">
									</div>
								</div>
								<div class="field is-grouped">
									<div class="control">
									<label class="label">Phone Number <span class="field-validation-error text-danger" data-valmsg-for="Phone" data-valmsg-replace="true">required</span></label>
									<input class="input-validation-error input text-box single-line" data-val="true" data-val-required="required" id="Phone" name="Phone" type="text" value="">
									</div>
									<div class="control">
									<label class="label">Email Address <span class="field-validation-error text-danger" data-valmsg-for="Email" data-valmsg-replace="true">required</span></label>
									<input class="input-validation-error input text-box single-line" data-val="true" data-val-email="The Email field is not a valid e-mail address." data-val-required="required" id="Email" name="Email" type="email" value="">
									</div>
								</div>
								<div class="field is-grouped">
									<div class="control">
										<label class="label">Zip Code <span class="field-validation-error text-danger" data-valmsg-for="PostalCode" data-valmsg-replace="true">required</span></label>
										<input class="input-validation-error input text-box single-line" data-val="true" data-val-required="required" id="PostalCode" name="PostalCode" type="text" value="">
									</div>
								</div>

									<p class="label pt-3">Septic Services Needed</p>
									<div class="is-flex checkbox-container">
										<div class="">
											<div class="field">
													<div class="control check">
														<label class="checkbox is-flex is-align-items-center">
														<input type="checkbox" name="ServicesNeeded" value="Site &amp; Soil Evaluation"> <span>Site &amp; Soil Evaluation</span>
														</label>
													</div>
													<div class="control check">
														<label class="checkbox is-flex is-align-items-center">
														<input type="checkbox" name="ServicesNeeded" value="System Design"> <span>System Design</span>
														</label>
													</div>
													<div class="control check">
														<label class="checkbox is-flex is-align-items-center">
														<input type="checkbox" name="ServicesNeeded" value="Installation"> <span>Installation</span>
														</label>
													</div>
											</div>
										</div>
									<div class="checkbox-column2">
									<div class="field">
											<div class="control check">
												<label class="checkbox is-flex is-align-items-center">
												<input type="checkbox" name="ServicesNeeded" value="Maintenance"> <span>Maintenance</span>
												</label>
											</div>
											<div class="control check">
												<label class="checkbox is-flex is-align-items-center">
												<input type="checkbox" name="ServicesNeeded" value="Repair"> <span>Repair</span>
												</label>
											</div>
											<div class="control check">
												<label class="checkbox is-flex is-align-items-center">
												<input type="checkbox" name="ServicesNeeded" value="Inspection"> <span>Inspection</span>
												</label>
											</div>
									</div>
									</div>
								</div>

								<!-- <div class="field is-grouped is-grouped-right-desktop pb-3">
									<label class="label"><span class="field-validation-valid text-danger is-size-7" data-valmsg-for="Recaptcha" data-valmsg-replace="true"></span></label>
									<div class="control">
									<div class="g-recaptcha" data-sitekey="6LdHTTUcAAAAAL-3uTsDtfYhSnX_YRJzDMrYVCPA"><div style="width: 304px; height: 78px;"><div><iframe title="reCAPTCHA" src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6LdHTTUcAAAAAL-3uTsDtfYhSnX_YRJzDMrYVCPA&amp;co=aHR0cHM6Ly9hY3VhbnRpYS5jb206NDQz&amp;hl=es-419&amp;v=SglpK98hSCn2CroR0bKRSJl5&amp;size=normal&amp;cb=4ym6kapp3lhv" width="304" height="78" role="presentation" name="a-5n1rhoxdphc0" frameborder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox"></iframe></div><textarea id="g-recaptcha-response" name="g-recaptcha-response" class="g-recaptcha-response" style="width: 250px; height: 40px; border: 1px solid rgb(193, 193, 193); margin: 10px 25px; padding: 0px; resize: none; display: none;"></textarea></div><iframe style="display: none;"></iframe></div>
									</div>
								</div> -->

								<div class="field is-grouped is-grouped-right pb-3">
									<div class="control">
									<a id="cancel-form" class="btn-cancel is-hidden-desktop mr-3 button is-background-white has-text-primary">Cancel</a>
									<button class="btn-submit button is-primary">Submit</button>
									</div>
								</div>

								</div>
							</div>
						</form>



					</div>
				</div>
			</div>
		</div>
		<!-- reasons -->
		<div id="reasons" class="row bg-ac2">
			<div class="col-12 offset-0 | col-md-8 offset-md-2 | text-white text-center light">
				<h2 class="extra-bold fs-1 mb-3">Great reasons to choose Acuantia</h2>
				<p>We provide you with a simplified, hassle-free experience to take the headache out of dealing with septic installations, maintenance, and issues. By partnering with a variety of the best local service providers, we help you relax and save time instead of worrying about the contractor, regulations, or roadblocks.</p>
				<p>Take it from some of our recent customers.</p>
			</div>
			<!-- reasons cards -->
			<div id="reasons-cards" class="my-3 py-3 | col-12 offset-0 | col-md-10 offset-md-1">
				<!-- 1 -->
				<div class="reasons-card">
					<div class="reasons-card-client">
						<img src="~/assets/images/common/client-1.jpg" alt="Portrait">
						<p class="mb-0">
							<span>JEFF, CA</span><br>
							<span>Client</span>
						</p>
					</div>
					<div class="reasons-card-stars my-3">
						<img src="~/assets/images/common/icon-star.svg" alt="Portrait">
						<img src="~/assets/images/common/icon-star.svg" alt="Portrait">
						<img src="~/assets/images/common/icon-star.svg" alt="Portrait">
						<img src="~/assets/images/common/icon-star.svg" alt="Portrait">
						<img src="~/assets/images/common/icon-star.svg" alt="Portrait">
					</div>
					<p class="mb-0">I selected Acuantia because of their engineering expertise i.e. Les Miyashiro, consulting engineer. Les is recognized for his ability to engineer for even the most complicated situations. He’s done work for me in the past. I’d bet on Les to get just about any project approved.</p>
				</div>
				<!-- 2 -->
				<div class="reasons-card">
					<div class="reasons-card-client">
						<img src="~/assets/images/common/client-2.jpg" alt="Portrait">
						<p class="mb-0">
							<span>LORRAINE, CA</span><br>
							<span>Client</span>
						</p>
					</div>
					<div class="reasons-card-stars my-3">
						<img src="~/assets/images/common/icon-star.svg" alt="Portrait">
						<img src="~/assets/images/common/icon-star.svg" alt="Portrait">
						<img src="~/assets/images/common/icon-star.svg" alt="Portrait">
						<img src="~/assets/images/common/icon-star.svg" alt="Portrait">
						<img src="~/assets/images/common/icon-star.svg" alt="Portrait">
					</div>
					<p class="mb-0">Acuantia’s pro did an outstanding job assisting our family with all the septic and environmental issues we faced over several years. We would not have had the successful subdivision without his caring support and expertise. He is committed loyal and one of the best, I highly recommend his services.</p>
				</div>
				<!-- 3 -->
				<div class="reasons-card">
					<div class="reasons-card-client">
						<img src="~/assets/images/common/client-3.jpg" alt="Portrait">
						<p class="mb-0">
							<span>JACOB, CA</span><br>
							<span>Client</span>
						</p>
					</div>
					<div class="reasons-card-stars my-3">
						<img src="~/assets/images/common/icon-star.svg" alt="Portrait">
						<img src="~/assets/images/common/icon-star.svg" alt="Portrait">
						<img src="~/assets/images/common/icon-star.svg" alt="Portrait">
						<img src="~/assets/images/common/icon-star.svg" alt="Portrait">
						<img src="~/assets/images/common/icon-star.svg" alt="Portrait">
					</div>
					<p class="mb-0">I’ve worked on three projects, two in Fairfield and one in the mountains (Calaveras County). Acuantia’s team are my “Go to” whenever I have a project. Sound advice, great engineering, solid installs – what else is there!</p>
				</div>
			</div>
			<!-- btn -->
			<div class="col-12 text-center">
				<a class="ac-btn mt-3 hvr-forward" href="">
					Submit Your Project
					<svg class="ms-2" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 30 30" style="enable-background:new 0 0 30 30;" xml:space="preserve">
						<path class="st0" d="M15,15c-3.8,0-7-3.1-7-6.9c0-3.1,3.1-6.9,7-6.9c3.8,0,7,3.8,7,6.9C22,11.9,18.8,15,15,15z M15,3.9c-2.3,0-4.2,1.9-4.2,4.1c0,2.3,1.9,4.5,4.2,4.5c2.3,0,4.2-2.2,4.2-4.5C19.2,5.8,17.3,3.9,15,3.9z"/>
						<path class="st1" d="M20.6,17.8H15h-1H9.4c-3.8,0-7,3.1-7,6.9v2.8c0,1,0.6,1.4,1.4,1.4s1.4-0.4,1.4-1.4v-2.8c0-2.3,1.9-4.2,4.2-4.2H14h1h5.6c2.3,0,4.2,1.9,4.2,4.2v2.8c0,1,0.6,1.4,1.4,1.4s1.4-0.4,1.4-1.4v-2.8C27.5,20.9,24.4,17.8,20.6,17.8z"/>
					</svg>
				</a>
			</div>
		</div>
	</div>
</template>


<style>
	/* ---------------- */
	/*	General
	/* ---------------- */
		#we-are,
		#accreditations,
		#more-resources,
		#reasons,
		#our-network {
			padding: 3rem 0;
		}
	/** */


	/* ---------------- */
	/*	Reasons
	/* ---------------- */
		#reasons-cards {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
		}

		.reasons-card {
			width: 30%;
			background: #fff;
			border-radius: 1rem;
			padding: 3rem 2rem;
		}


		.reasons-card-client {
			display: flex;
			justify-content: flex-start;
			align-items: center;
		}
		.reasons-card-client img {
			border-radius: 50%;
			margin-right: .5rem;
		}


		.reasons-card-stars img {
			width: 26px;
			margin-right: .5rem;
		}

		@media screen and (max-width: 1023px) {
			#reasons-cards {
				justify-content: center;
				flex-wrap: wrap;
				gap: 1rem;
			}

			.reasons-card {
				width: 45%;
			}
		}

		@media screen and (max-width: 768px) {
			.reasons-card {
				width: 45%;
			}
		}

		@media screen and (max-width: 576px) {
			.reasons-card {
				width: 90%;
			}
		}
	/** */	
</style>


<script>
	import axios from 'axios'
	export default {
		name: 'contact-us',
		head() {
			return {
				title: 'Contact Us | Acuantia',
			}
		},
		data() {
			return {
				//
			}
		},
		methods: {
			sendForm() {
				console.log('m:sendForm')
				var form = document.getElementById('contact-us-form')
				var params = new FormData(form)
				console.log('m:sendForm:' + params)
				axios.post('https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8',params)
				.then((Response) => {
					console.log(Response)
				})
				.catch((err) => {
					this.errors.push(err)
				})
			}
		}
	}
</script>