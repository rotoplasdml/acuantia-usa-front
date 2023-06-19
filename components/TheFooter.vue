<template>
    <footer class="container-fluid text-white py-3 bg-ac1">
        <div class="row">
            <!-- getintouch -->
            <div class="col-12 p-3 text-center ofsset-0 | col-md-5 offset-md-1 text-md-start | col-lg-3 offset-lg-1" id="getintouch">
                <h2 class="fs-6 bold mb-3">Get In Touch</h2>
                <a class="d-flex justify-content-center align-items-start | justify-content-md-start | hvr-forward" href="tel:8882709698">
                    <img src="~/assets/images/common/icon-phone.svg" alt="Icon" title="Phone">
                    <p class="mb-0">(888) 270-9698</p>
                </a>
                <br>
                <a class="d-flex justify-content-center align-items-start | justify-content-md-start | hvr-forward" href="mailto:sepctic@acuantia.com">
                    <img src="~/assets/images/common/icon-email.svg" alt="Icon" title="Email">
                    <p class="mb-0">sepctic@acuantia.com</p>
                </a>
                <br>
                <a class="d-flex justify-content-center align-items-start | justify-content-md-start | hvr-forward" href="">
                    <img src="~/assets/images/common/icon-location.svg" alt="Icon" title="Location">
                    <p class="mb-0">685 John B Sias Memorial Parkway STE 330 San Antonio, TX 76134</p>
                </a>
            </div>
            <!-- usefullinks -->
            <div class="col-12 p-3 text-center          | col-md-5 text-md-start             | col-lg-2" id="usefullinks">
                <h2 class="fs-6 bold mb-3">Useful Links</h2>
                <NuxtLink class="hvr-forward" to="/about-us/faq">FAQs</NuxtLink>
                <!-- <NuxtLink class="hvr-forward" to="/blog">Blog</NuxtLink> -->
                <NuxtLink class="hvr-forward" to="/services/for-my-home">For Your Home</NuxtLink>
                <NuxtLink class="hvr-forward" to="/services/residential-and-development">For Residential</NuxtLink>
                <NuxtLink class="hvr-forward" to="/">Commercial</NuxtLink>
                <NuxtLink class="hvr-forward" to="/">Development</NuxtLink>
                <NuxtLink class="hvr-forward" to="/become-a-partner">Become a Partner</NuxtLink>
                <NuxtLink class="hvr-forward" to="/service-area">Service Area</NuxtLink>
            </div>
            <!-- follow us -->
            <div class="col-12 p-3 text-center offset-0 | col-md-5 offset-md-1 text-md-start | col-lg-2 offset-lg-0" id="followus">
                <h2 class="fs-6 bold mb-3">Follow Us</h2>
                <a class="hvr-float me-2" href="https://www.facebook.com/Acuantia/" target="_blank">
                    <img src="~/assets/images/common/icon-facebook.svg" alt="Icon" title="Facebook">
                </a>
                <a class="hvr-float me-2" href="https://www.linkedin.com/company/acuantia/" target="_blank">
                    <img src="~/assets/images/common/icon-linkedin.svg" alt="Icon" title="LinkedIn">
                </a>
                <a class="hvr-float" href="https://www.instagram.com/acuantia/" target="_blank">
                    <img src="~/assets/images/common/icon-instagram.svg" alt="Icon" title="Instagram">
                </a>
            </div>
            <!-- contactus -->
            <div class="col-12 p-3 text-center          | col-md-5  text-md-start            | col-lg-3" id="contactus">
                <h2 class="fs-6 bold mb-3">Suscribe to our Newsletter</h2>
                <div class="d-flex flex-row">
                    <input id="footer-newsletter-input" class="form-control" placeholder="Enter email adress" type="search">
                    <button id="footer-newsletter-btn" class="btn btn-outline-secondary" type="button" @click="search(busqueda)">
                        <svg class="" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 16 16" style="enable-background:new 0 0 16 16; width: 18px;" xml:space="preserve">
                            <path class="st0" d="M8,0C3.6,0,0,3.6,0,8c0,4.4,3.6,8,8,8c4.4,0,8-3.6,8-8C16,3.6,12.4,0,8,0z M8,14.5c-3.6,0-6.5-2.9-6.5-6.5c0-3.6,2.9-6.5,6.5-6.5c3.6,0,6.5,2.9,6.5,6.5C14.5,11.6,11.6,14.5,8,14.5z"/>
                            <path class="st0" d="M11.6,7.6c0-0.1-0.1-0.2-0.2-0.2L8.5,4.4c-0.3-0.3-0.7-0.3-1,0c-0.3,0.3-0.3,0.7,0,1l1.7,1.7H5.1c-0.4,0-0.7,0.3-0.7,0.7c0,0.4,0.3,0.7,0.7,0.7h4.1l-1.7,1.7c-0.3,0.3-0.3,0.7,0,1c0.1,0.1,0.3,0.2,0.5,0.2c0.2,0,0.4-0.1,0.5-0.2l2.9-2.9c0.1-0.1,0.1-0.1,0.2-0.2C11.7,7.9,11.7,7.7,11.6,7.6z"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
        <div class="row my-3">
            <div class="col-12 offset-0 text-center | col-lg-3 offset-lg-1 text-lg-start">
                <img id="footer-logo" src="~/assets/images/common/acuantia-logo-negative.svg" alt="Acuantia Logo" title="Acuantia">
            </div>
            <div class="col-12 d-flex align-items-center justify-content-center | col-lg-3 justify-content-lg-start">
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

    #footer-newsletter-input {
        border: none;
        border-radius: 2rem 0 0 2rem;
    }

    #footer-newsletter-btn {
        padding-left: 0.5rem;
        padding-right: 1rem;
        padding-top: 0;
        padding-bottom: 0.25rem;
        border: none;
        background: #fff;
        border-radius: 0 2rem 2rem 0;
    }
    #footer-newsletter-btn svg {
        fill: #2b73ff;
        transition: all ease .3s;
    }
    #footer-newsletter-btn:hover svg {
        fill: #242c36;
    }
</style>