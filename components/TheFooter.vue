<template>
    <footer class="container-fluid text-white py-3 bg-ac1">
        <div class="row">
            <!-- getintouch -->
            <div class="col-12 p-3 text-center ofsset-0 | col-md-5 offset-md-1 text-md-start | col-lg-3 offset-lg-1" id="getintouch">
                <h2 class="fs-6 bold mb-3">Get In Touch</h2>
                <NuxtLink class="d-flex justify-content-center align-items-start | justify-content-md-start | hvr-forward" to="/">
                    <img src="~/assets/images/common/icon-phone.svg" alt="Icon" title="Phone">
                    <p class="mb-0">(888) 270-9698</p>
                </NuxtLink>
                <br>
                <NuxtLink class="d-flex justify-content-center align-items-start | justify-content-md-start | hvr-forward" to="/">
                    <img src="~/assets/images/common/icon-email.svg" alt="Icon" title="Email">
                    <p class="mb-0">sepctic@acuantia.com</p>
                </NuxtLink>
                <br>
                <NuxtLink class="d-flex justify-content-center align-items-start | justify-content-md-start | hvr-forward" to="/">
                    <img src="~/assets/images/common/icon-location.svg" alt="Icon" title="Location">
                    <p class="mb-0">685 John B Sias Memorial Parkway STE 330 San Antonio, TX 76134</p>
                </NuxtLink>
            </div>
            <!-- usefullinks -->
            <div class="col-12 p-3 text-center          | col-md-5 text-md-start             | col-lg-2" id="usefullinks">
                <h2 class="fs-6 bold mb-3">Useful Links</h2>
                <NuxtLink class="hvr-forward" to="/">About Us</NuxtLink>
                <NuxtLink class="hvr-forward" to="/">FAQs</NuxtLink>
                <NuxtLink class="hvr-forward" to="/">Blog</NuxtLink>
                <NuxtLink class="hvr-forward" to="/">For Your Home</NuxtLink>
                <NuxtLink class="hvr-forward" to="/">For Residential</NuxtLink>
                <NuxtLink class="hvr-forward" to="/">Commercial</NuxtLink>
                <NuxtLink class="hvr-forward" to="/">Development</NuxtLink>
                <NuxtLink class="hvr-forward" to="/">Become a Partner</NuxtLink>
                <NuxtLink class="hvr-forward" to="/">Service Area</NuxtLink>
            </div>
            <!-- followus -->
            <div class="col-12 p-3 text-center offset-0 | col-md-5 offset-md-1 text-md-start | col-lg-2 offset-lg-0" id="followus">
                <h2 class="fs-6 bold mb-3">Follow Us</h2>
                <NuxtLink class="hvr-float me-2" to="/">
                    <img src="~/assets/images/common/icon-facebook.svg" alt="Icon" title="Facebook">
                </NuxtLink>

                <NuxtLink class="hvr-float me-2" to="/">
                    <img src="~/assets/images/common/icon-linkedin.svg" alt="Icon" title="LinkedIn">
                </NuxtLink>

                <NuxtLink class="hvr-float" to="/">
                    <img src="~/assets/images/common/icon-instagram.svg" alt="Icon" title="Instagram">
                </NuxtLink>
            </div>
            <!-- contactus -->
            <div class="col-12 p-3 text-center          | col-md-5  text-md-start            | col-lg-3" id="contactus">
                <h2 class="fs-6 bold mb-3">Suscribe to our Newsletter</h2>
                <div class="d-flex flex-row">
                    <input class="form-control" id="busqueda" placeholder="Enter email adress" type="search">
                    <button class="btn btn-outline-secondary" type="button" @click="search(busqueda)">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                            <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
        <div class="row my-3">
            <div class="col-12 offset-0 text-center                                  | col-lg-3 offset-lg-1 text-lg-start">
                <img id="footer-logo" src="~/assets/images/common/acuantia-logo-negative.svg" alt="Acuantia Logo" title="Acuantia">
            </div>
            <div class="col-12 d-flex align-items-center justify-content-center      | col-lg-3 justify-content-lg-start">
                <p class="mb-0">Copyright © 2023. All rights reserved.</p>
            </div>
            <div class="col-12 d-flex align-items-center justify-content-center pt-3 | col-lg-3 justify-content-lg-start pt-lg-0">
                <NuxtLink class="hvr-forward" to="/">
                    Privacy Policy
                </NuxtLink>
            </div>
        </div>
    </footer>
</template>

<script>
    export default {
        name: 'TheFooter'
    }
</script>

<style>
    footer h2 {
        color: #2b73ff;
        font-size: 18px;
    }


    footer a {
        color: #fff;
        transition: all ease .3s;
    }
    footer a:hover,
    footer a:hover p {
        color: #a0daf6;
    }


    #getintouch a {
        width: 100%;
    }
    #getintouch a img {
        width: 20px;
        margin-right: .5rem;
    }
    #getintouch a p {
        width: auto;
    }


    #usefullinks a {
        width: 100%;
        margin: .25rem 0;
        transition: all ease .3s;
    }
    #usefullinks a:hover {
        color: #a0daf6;
    }

    #footer-logo {
        width: 150px;
    }


    #followus a img {
        width: 40px;
    }
</style>