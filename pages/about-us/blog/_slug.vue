<template>
    <div class="container">
        <div class="row my-3 py-3">
            <div class="col-9">
                <!-- Titulo -->
                <h1 class="mb-3">{{ articulo.data[0].attributes.titulo }}</h1>
                <!-- Imagen -->
                <img class="w-100 mb-3" :src="'http://localhost:1337' + articulo.data[0].attributes.imagen_principal.data.attributes.formats.small.url" alt="Imagen" :title="articulo.data[0].attributes.imagen_principal.data.attributes.caption">
                <!-- Cuerpo -->
                <div v-html="$md.render(articulo.data[0].attributes.cuerpo)"></div>
            </div>
            <div class="col-3">
                Sidebar
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        async asyncData({ params, $axios }) {
            const articulo = await $axios.$get( `http://localhost:1337/api/articulos?&filters[slug][$eq]=${params.slug}&populate=*`)
            return {
                articulo
            }
        },
        head () {
            return {
                title: this.articulo.data[0].attributes.titulo + ' | Rotoplas',
            }
        }
    }
</script>