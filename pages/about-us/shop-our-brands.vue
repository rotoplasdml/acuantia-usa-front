<template>
	<div class="container-fluid">
		<div id="shop-our-brands" class="row">
			<div class="p-3 text-center | col-12 offset-0 | col-sm-10 offset-sm-1 | col-md-8 offset-md-2 | col-lg-6 offset-lg-3">
				<h2 class="extra-bold fs-1 mb-3">Shop our brands</h2>
				<p>Acuantia. is a collection of brands focused on providing comprehensive solutions to care for and accompany water in its natural cycle. Our main goal is to ensure access to water for future generations and to promote water independence through the availability of quality products and consolidated services. Our brands consist of Acuantia Septic, Tank Depot, and BIOROCK. Through each of these brands we provide an essential part of responsible and effective water management.</p>
				<p>Click a logo below to learn more.</p>
			</div>
			<div class="col-12 offset-0 | col-md-6 offset-0 | col-lg-4 offset-lg-2 | col-xl-3 offset-xl-3 | text-center p-3 h-100">
				<NuxtLink class="hvr-float" to="">
					<div>
						<img class="mb-3 w-auto" src="~/assets/images/about-us/shop-our-brands/logo-thetankdepot.jpg" alt="Logo">
					</div>
						<p class="bold fs-5">The Largest Selection of Tanks</p>
						<p>Quality Service, Unbeatable Pricing, Fast shiping.</p>
				</NuxtLink>
			</div>
			<div class="col-12 offset-0 | col-md-6 offset-0 | col-lg-4 offset-lg-0 | col-xl-3 offset-xl-0 | text-center p-3 h-100">
				<NuxtLink class="hvr-float" to="">
					<div>
						<img class="mb-3 w-auto" src="~/assets/images/about-us/shop-our-brands/logo-biorock.jpg" alt="Logo">
					</div>
						<p class="bold fs-5">Septic That Saves The World</p>
						<p>The best choice in green innovation for septic tanks.</p>
				</NuxtLink>
			</div>
			<div class="col-12 offset-0 | col-md-6 offset-0 | col-lg-4 offset-lg-2 | col-xl-3 offset-xl-3 | text-center p-3 h-100">
				<NuxtLink class="hvr-float" to="">
					<div>
						<img class="mb-3 w-auto" src="~/assets/images/about-us/shop-our-brands/logo-plasti-mart.jpg" alt="Logo">
					</div>
						<p class="bold fs-5">The best Online Choice for plastic tanks</p>
						<p>Large distribution of rotationally molded tanks.</p>
				</NuxtLink>
			</div>
			<div class="col-12 offset-0 | col-md-6 offset-0 | col-lg-4 offset-lg-0 | col-xl-3 offset-xl-0 | text-center p-3 h-100">
				<NuxtLink class="hvr-float" to="">
					<div>
						<img class="mb-3 w-auto" src="~/assets/images/about-us/shop-our-brands/logo-rotoplas.jpg" alt="Logo">
					</div>
						<p class="bold fs-5">Our Parent Company</p>
						<p>A global leader for sustainable water solutions.</p>
				</NuxtLink>
			</div>
		</div>
	</div>
</template>


<style>
	#shop-our-brands {
		padding: 3rem 0;
	}

	#shop-our-brands a {
		color: #242c36;
		transition: all ease .3s;
	}
	#shop-our-brands a:hover {
		color: #2b73ff ;
	}
</style>


<script>
	export default {
		name: 'shop-our-brands',
		head() {
			return {
				title: 'Shop our brands | Acuantia',
			}
		}
	}
</script>