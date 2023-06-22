<template>
	<div class="container-fluid">
		<div class="row my-3 py-3">
            <!-- Contenidos -->
			<div class="col-9">
                <!-- Index -->
                <div class="row">
					<div class="col-12">
						<pre>{{ this.posts.data.length }}</pre>
					</div>
                    <!-- Index nodos -->
					<div v-if="posts.data.length >= 1" class="col-12 d-flex flex-wrap justify-content-start">
                            
						<div class="nodo-articulo"
						v-for="post in posts.data"
						v-bind:key="post.id" 
						:id="'articulo-' + post.id">
							<NuxtLink 
							:to="`/blog/${post.attributes.slug}`">
								<!-- Imagen -->
								<img class="w-100 mb-3" :src="'http://localhost:1337' + post.attributes.main_image.data.attributes.formats.small.url" alt="Imagen" :title="post.attributes.main_image.data.attributes.caption">
								<!-- Titulo -->
								<h2 class="mb-3">{{ post.attributes.title }}</h2>
							</NuxtLink>
						</div>
                            
                    </div>
                    <div v-else class="col-12 text-center">
                        No se encontraron posts.
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
            <!-- Sidebar -->
            <div class="col-3">
                <h3>Sidebar</h3>
                <pre>{{ this.posts.meta }}</pre>
                <pre>{{ this.posts.meta.pagination.page }}</pre>
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
    /* Redes sociales */
        .share-btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 2.5rem;
            height: 2.5rem;
            padding: .7rem;
            border-radius: 50%;
            border: 1px solid #cccccc;
        }
        .share-btn svg {
            width: 1.5rem;
            fill: #009cde;
            transition: all ease .3s;
        }
        .share-btn:hover svg {
            fill: #fff;
        }

        #share-btn-facebook,
        #share-btn-twitter,
        #share-btn-linkedin,
        #share-btn-pinterest {
            background-color: #ffffff00;
            transition: all ease .3s;
        }
        #share-btn-facebook:hover {
            background-color: #3a589d;
            border-color: #3a589d;
        }
        #share-btn-twitter:hover {
            background-color: #5EA9DD;
            border-color: #5EA9DD;
        }
        #share-btn-linkedin:hover {
            background-color: #0177B5;
            border-color: #0177B5;
        }
        #share-btn-pinterest:hover {
            background-color: #cb2320;
            border-color: #cb2320;
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
                const posts = await $axios.$get(`http://localhost:1337/api/posts?pagination[page]=1&pagination[pageSize]=1&populate=*`)
                return {
                    posts
                }
            } catch (error) {
                console.log(error)
            }
        }
	}
</script>