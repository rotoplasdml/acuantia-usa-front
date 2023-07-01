<template>
	<div class="container-fluid">
		<div class="row my-3 py-3">
			<!-- Contenidos -->
			<div class="col-12">
				<!-- Index -->
				<div class="row">
					<!-- Index nodos -->
					<div v-if="posts.data.length >= 1" class="col-12 d-flex flex-wrap justify-content-start">
						<div class="nodo-articulo"
						v-for="post in posts.data"
						v-bind:key="post.id" 
						:id="'articulo-' + post.id">
							<NuxtLink 
							:to="`/about-us/blog/${post.attributes.slug}`">
								<!-- Image -->
								<img class="w-100 mb-3" :src="'http://localhost:1337' + post.attributes.main_image.data.attributes.formats.small.url" alt="Imagen" :title="post.attributes.main_image.data.attributes.caption">
								<!-- Title -->
								<h2 class="mb-3">{{ post.attributes.title }}</h2>
							</NuxtLink>
							<!-- Extract -->
							<div class="nodo-articulo-contenido" v-html="$md.render(post.attributes.body.slice(0,150) + '...')"></div>
							<!-- Continue -->
							<NuxtLink class="mt-auto nodo-articulo-leer align-self-center text-center" 
							:to="`/about-us/blog/${post.attributes.slug}`">
								Continue Reading
							</NuxtLink>
							<!-- Sharing -->
							<div>
								<a id="share-btn-facebook" class="share-btn" target="_blank" 
								:href="'https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Facuantia.com%2Fblog%2F' + post.attributes.slug">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
										<!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"/>
									</svg>
								</a>
								<a id="share-btn-linkedin" class="share-btn" target="_blank" 
								:href="'https://www.linkedin.com/sharing/share-offsite/?url=https%3a%2f%2facuantia.com%2fblog%2f' + post.attributes.slug">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
										<!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/>
									</svg>
								</a>
							</div>
						</div>
					</div>
					<div v-else class="col-12 text-center">
						No posts found.
					</div>
					<!-- Paginación -->
					<div v-if="posts.meta.pagination.pageCount > 1" class="col-12 py-3 text-center">
						<!-- Previo -->
						<button :disabled="pageCurrent === 1" @click="prevPage()" :class="(i == posts.meta.pagination.page) ? 'paginacion-btn-prev-sig' : 'paginacion-btn-prev-sig'">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style="width: .65rem;">
								<!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
								<path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/>
							</svg>
							Previos
						</button>
						<!-- Paginas -->
						<button v-for="i in posts.meta.pagination.pageCount" :data="i" :key="i" :class="(i == posts.meta.pagination.page) ? 'paginacion-btn paginacion-btn--activo' : 'paginacion-btn'" @click="getPage(i)">
							{{ i }}
						</button>
						<!-- Siguiente -->
						<button :disabled="pageCurrent >= posts.meta.pagination.pageCount" @click="nextPage()" :class="(i == posts.meta.pagination.page) ? 'paginacion-btn-prev-sig' : 'paginacion-btn-prev-sig'">
							Siguientes
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style="width: .65rem;">
								<!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
								<path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/>
							</svg>
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>


<style>
	.nodo-articulo {
		width: 33.33%;
		padding: 1rem;

		display: inline-flex;
		flex-direction: column;
		transition: all ease .6s;
	}
	.nodo-articulo h2 {
		color: #002554;
		font-size: 1.3rem;
	}
	.nodo-articulo:hover {
		background-color: #eee;
	}

	.nodo-articulo-contenido {
		color: #999999;
	}
	.nodo-articulo-contenido h2 {
		color: #999999;
		font-size: 1rem;
	}

	.nodo-articulo-leer {
		padding: 0.5rem 1rem;
		background-color: #009cde;
		color: #fff;
		border-radius: 0.18rem;
		margin-bottom: 1rem;
		transition: all ease .3s;
	}
	.nodo-articulo-leer:hover {
		background-color: #002554;
		color: #fff;
	}
	

	/* Paginacion */
		.paginacion-btn {
			border: none;
			background: transparent;
			color: #009cde;
			margin-left: 3px;
			padding: 5px 10px;
			transition: all ease .3s;
		}
		.paginacion-btn:hover {
			background: #009cde;
			color: #fff;
		}
		.paginacion-btn--activo {
			background: #009cde;
			color: #fff;
		}

		.paginacion-btn-prev-sig {
			border: none;
			background: transparent;
			color: #009cde;
			transition: all ease .3s;
		}
		.paginacion-btn-prev-sig svg {
			fill: #009cde;
			transition: all ease .3s;
		}
		.paginacion-btn-prev-sig:disabled {
			opacity: .5;
		}
		.paginacion-btn-prev-sig:hover:enabled {
			color: #002554;
		}
		.paginacion-btn-prev-sig:hover:enabled svg {
			fill: #002554;
		}
	/** */
	/* Animacion */
		.fade-enter-from {
			opacity: 0;
		}
		.fade-enter-to {
			opacity: 1;
		}
		.fade-enter-active {
			transition: all ease .3s;
		}
		.fade-leave-from {
			opacity: 1;
		}
		.fade-leave-to {
			opacity: 0;
		}
		.fade-leave-active {
			transition: all ease;
		}
	/** */

	@media screen and (max-width: 576px) {
		.nodo-articulo {
			width: 50%;
		}
	}
</style>


<script>
	import axios from 'axios'
	export default {
		name: 'blog-index',
		head() {
			return {
				title: 'Blog | Acuantia',
			}
		},
		data() {
			return {
				posts: '',
				numberPosts: '',
				busqueda: '',
				pageNumber: '',
				pageSize: 1,
				pageCurrent: 1,
				i: ''
			}
		},
		methods: {
			getPage(page) {
				axios.get(`http://localhost:1337/api/posts?pagination[page]=${page}&pagination[pageSize]=${this.pageSize}&populate=*`)
				.then(response => (this.posts = response.data))
				.then(() => this.pageCurrent = page)
			},
			prevPage() {
				this.getPage(this.pageCurrent - 1)
			},
			nextPage() {
				this.getPage(this.pageCurrent + 1)
			}
		},
		mounted() {
			console.info('blog:index:mounted:' + this.posts)
		},
		async asyncData({ $axios }) {
			try {
				const posts = await $axios.$get(`http://localhost:1337/api/posts?pagination[page]=1&pagination[pageSize]=6&populate=*`)
				return {
					posts
				}
			} catch (error) {
				console.log(error)
			}
		}
	}
</script>