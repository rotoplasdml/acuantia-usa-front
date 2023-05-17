<template>
	<nav class="navbar navbar-expand-lg navbar-dark bg-ac1 px-3">
		<NuxtLink class="navbar-brand" to="/">
			<img id="nav-logo" src="images/acuantia-logo-negative.svg" alt="Acuantia Logo" title="Acuantia">
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
				<li class="nav-item mx-xl-1">
					<NuxtLink class="nav-link" to="services">Services</NuxtLink>
				</li>
				<li class="nav-item mx-xl-1">
					<a class="nav-link" href="#">Service Area</a>
				</li>
				<li class="nav-item mx-xl-1">
					<a class="nav-link" href="#">Become a partner</a>
				</li>
				<li class="nav-item mx-xl-1">
					<a class="nav-link" href="#">Submit your project</a>
				</li>
				<li class="nav-item dropdown">
					<a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">About Us</a>
					<ul class="dropdown-menu dropdown-menu-lg-end">
						<li>
							<NuxtLink class="dropdown-item" to="/empresa/">Company</NuxtLink>
						</li>
						<li>
							<NuxtLink class="dropdown-item" to="/empresa/">Blog</NuxtLink>
						</li>
						<li>
							<NuxtLink class="dropdown-item" to="/empresa/">Contact Us</NuxtLink>
						</li>
						<li>
							<NuxtLink class="dropdown-item" to="/empresa/">FAQ</NuxtLink>
						</li>
						<li>
							<NuxtLink class="dropdown-item" to="/empresa/">Shop our brands</NuxtLink>
						</li>
					</ul>
				</li>
				<li class="nav-item mx-xl-1">
					<NuxtLink class="nav-link menu-dinamyc-phone" to="/">
						<img src="/images/icon-menu-phone.svg" alt="Icon" title="Phone">
						Dynamic Btn
					</NuxtLink>
				</li>
				<li class="nav-item mx-xl-1">
					<NuxtLink class="nav-link" to="/">Dynamic Txt</NuxtLink>
				</li>
			</ul>
		</div>
	</nav>
</template>


<script>
	export default {
		name: 'TheMenu'
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