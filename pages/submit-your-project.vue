<template>
	<div class="container-fluid">
		<div id="submit" class="row bg-ac4">
			<div class="text-white col-12 | col-md-6 | col-lg-5">
				<div class="row h-100 bg-ac1-t">
					<div class="h-100 d-flex flex-column justify-content-evenly | col-12 offset-0 | col-sm-10 offset-sm-1 | col-md-9 offset-md-2">
						<div>
							<h2 class="extra-bold fs-1 mb-3">Submit your project</h2>
							<p>Please provide us with some information about your project or needs and a qualified Acuantia expert will contact you as sooon as possible.</p>
							<p>You can also explore our Facts and Questions page and our Blog page for more resources regarding septic systems.</p>
						</div>
						<div>
							<NuxtLink class="hvr-forward w-100" to="/about-us/faq">
								<img src="~/assets/images/common/icon-faq.svg" alt="Icon">
								Service FAQs
							</NuxtLink>
							<NuxtLink class="hvr-forward w-100" to="/about-us/blog">
								<img src="~/assets/images/common/icon-blog.svg" alt="Icon">
								Blog
							</NuxtLink>
						</div>
					</div>
				</div>
			</div>
			<div class="col-12 | col-md-6 | col-lg-7">
				Form
			</div>
		</div>
	</div>
</template>


<style>
	#submit {
		height: 600px;
		background: url('~assets/images/submit-your-project/head-background.jpg');
		background-size: cover;
		background-position: center center;
	}

	#submit a {
		color: #fff;
		transition: all ease .3s;
		margin-bottom: .5rem;
	}
	#submit a:hover {
		color: #a0daf6;
	}
	#submit a img {
		width: 30px;
	}

	.bg-ac1-t {
		background: rgb(0 24 70 / 80%);
	}
</style>


<script>
	export default {
		name: 'submit-your-project',
		head() {
			return {
				title: 'Submit your project | Acuantia',
			}
		}
	}
</script>