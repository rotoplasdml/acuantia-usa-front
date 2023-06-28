<template>
    <div class="container-fluid">
        <div class="row my-3 py-3">
            <div class="col-6 offset-1">
                <h1 class="mb-3">{{ post.data[0].attributes.title }}</h1>                
                <div v-html="$md.render(post.data[0].attributes.body)"></div>
                <!-- Sharing -->
                <div class="d-flex gap-3">
                    <h3>Share this post:</h3>
                    <div class="mt-auto">
                        <a id="share-btn-facebook" class="share-btn" target="_blank" 
                        :href="'https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Facuantia.com%2Fblog%2F' + post.data[0].attributes.slug">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"/>
                            </svg>
                        </a>
                        <a id="share-btn-linkedin" class="share-btn" target="_blank" 
                        :href="'https://www.linkedin.com/sharing/share-offsite/?url=https%3a%2f%2facuantia.com%2fblog%2f' + post.data[0].attributes.slug">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
            <div class="col-3">
                <img class="w-100 mb-3" :src="'http://localhost:1337' + post.data[0].attributes.main_image.data.attributes.formats.small.url" alt="Imagen" :title="post.data[0].attributes.main_image.data.attributes.caption">
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        data() {
            return {
				//post: '',
            }
        },
        async asyncData({ params, $axios }) {
            const post = await $axios.$get( `http://localhost:1337/api/posts?&filters[slug][$eq]=${params.slug}&populate=*`)
            return {
                post
            }
        },
        head () {
            return {
                title: this.post.data[0].attributes.titulo + ' | Rotoplas',
            }
        },
        mounted() {
            console.log('single-post:mounted')
        }
    }
</script>