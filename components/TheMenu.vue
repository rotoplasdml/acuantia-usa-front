<template>
	<div class="container">
		<nav class="navbar navbar-expand-lg">
			<NuxtLink class="navbar-brand" to="/">
				<img id="nav-logo" src="http://127.0.0.1:5500/images/rotoplas_logo_blanco_azul.svg" alt="Acuantia Logo" title="Acuantia">
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
				</ul>
			</div>
		</nav>
	</div>
</template>

<script>
	export default {
		name: 'TheMenu'
	}
</script>