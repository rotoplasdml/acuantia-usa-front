<template>
<div>
	<div class="text-center w-100">{{ 'MENU: userLocation: ' + userLocation + ' userServiceArea: ' + userServiceArea }}</div>
	<nav class="navbar navbar-expand-lg navbar-dark bg-ac1 px-3">
		<NuxtLink class="navbar-brand" to="/">
			<img id="nav-logo" src="~/assets/images/common/acuantia-logo-negative.svg" alt="Acuantia Logo" title="Acuantia">
		</NuxtLink>
		<button 
			id="navegacion-toggler" 
			class="navbar-toggler" 
			type="button" 
			data-bs-toggle="collapse" 
			data-bs-target="#toggleMobileMenu" 
			aria-controls="toggleMobileMenu" 
			aria-expanded="false" 
			aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse flex-column" id="toggleMobileMenu">
			<ul class="navbar-nav ms-auto text-center mt-2">
				<li class="nav-item mx-xl-1">
					<NuxtLink class="nav-link" to="/">Home</NuxtLink>
				</li>
				<li class="nav-item dropdown">
					<a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Services</a>
					<ul class="dropdown-menu">
						<li>
							<NuxtLink class="dropdown-item" to="/services/for-my-home">For my home</NuxtLink>
						</li>
						<li>
							<NuxtLink class="dropdown-item" to="/services/residential-and-development">Residential & Development</NuxtLink>
						</li>
					</ul>
				</li>
				<li class="nav-item mx-xl-1">
					<NuxtLink class="nav-link" to="/service-area">Service Area</NuxtLink>
				</li>
				<li class="nav-item mx-xl-1">
					<NuxtLink class="nav-link" to="/become-a-partner">Become a partner</NuxtLink>
				</li>
				<li class="nav-item mx-xl-1">
					<NuxtLink class="nav-link" to="/submit-your-project">Submit your project</NuxtLink>
				</li>
				<li class="nav-item dropdown">
					<a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">About Us</a>
					<ul class="dropdown-menu">
						<li>
							<NuxtLink class="dropdown-item" to="/about-us/company">Company</NuxtLink>
						</li>
						<!--  -->
						<li>
							<NuxtLink class="dropdown-item" to="/about-us/blog">Blog</NuxtLink>
						</li>
						<li>
							<NuxtLink class="dropdown-item" to="/about-us/contact-us">Contact Us</NuxtLink>
						</li>
						<li>
							<NuxtLink class="dropdown-item" to="/about-us/faq">FAQ</NuxtLink>
						</li>
						<li>
							<NuxtLink class="dropdown-item" to="/about-us/shop-our-brands">Shop our brands</NuxtLink>
						</li>
					</ul>
				</li>
				<li class="nav-item mx-xl-1">
					<!-- Dinamic Phone -->
					<a v-if="userServiceArea == 1" :href="'tel:'" class="nav-link menu-dinamyc-phone">
						<img src="~/assets/images/common/icon-menu-phone.svg" alt="Icon" title="Phone">
						<!-- {{ this.userServiceAreaPhone }} -->
					</a>
					<!-- Default Btn -->
					<a v-else href="tel:123456789" class="nav-link menu-dinamyc-phone">
						<img src="~/assets/images/common/icon-menu-phone.svg" alt="Icon" title="Phone">
						123456789
					</a>
				</li>
				<li class="nav-item my-2 mx-xl-1 d-flex justify-content-center align-items-center">
					<div v-if="userServiceArea == 1" class="text-white">
						{{ userLocation }}
					</div>
				</li>
			</ul>
		</div>
	</nav>
</div>
</template>


<script>
	export default {
		name: 'TheMenu',
		props: [
			'userLocation',
			'userServiceArea',
		],
		mounted: function() {
			console.log('themenu:mounted')
		}
	}
</script>


<style>
	nav {
		font-size: 14px;
	}
	
	.navbar-brand img {
		width: 200px;
	}

	.navbar-dark .navbar-nav .nav-link {
		color: rgba(255,255,255,.75);
	}
	.navbar-dark .navbar-nav .nav-link:hover {
		color: rgba(255,255,255,1);
	}

	
	.menu-dinamyc-phone {
		background: #2b73ff;
		color: #fff;
		border-radius: 2rem;
		padding: 0.5rem 1rem;
		transition: all ease .3s;
	}
	.menu-dinamyc-phone img {
		width: 18px;
	}
	.menu-dinamyc-phone:hover {
		background: #a0daf6;
		color: #2b73ff !important;
	}
</style>