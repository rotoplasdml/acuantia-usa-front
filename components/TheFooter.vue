<template>
    <footer class="container-fluid text-white py-3 bg-ac1">
        <div class="row">
            <!-- getintouch -->
            <div class="col-12 p-3 text-center | col-md-3 text-md-start" id="getintouch">
                <h2 class="fs-6 bold mb-3">Get In Touch</h2>
                <NuxtLink class="d-flex justify-content-center align-items-start | justify-content-md-start | hvr-forward" to="/">
                    <img src="/images/icon-phone.svg" alt="Icon" title="Phone">
                    <p class="mb-0">(888) 270-9698</p>
                </NuxtLink>
                <br>
                <NuxtLink class="d-flex justify-content-center align-items-start | justify-content-md-start | hvr-forward" to="/">
                    <img src="/images/icon-email.svg" alt="Icon" title="Email">
                    <p class="mb-0">sepctic@acuantia.com</p>
                </NuxtLink>
                <br>
                <NuxtLink class="d-flex justify-content-center align-items-start | justify-content-md-start | hvr-forward" to="/">
                    <img src="/images/icon-location.svg" alt="Icon" title="Location">
                    <p class="mb-0">685 John B Sias Memorial Parkway STE 330 San Antonio, TX 76134</p>
                </NuxtLink>
            </div>
            <!-- usefullinks -->
            <div class="col-12 p-3 text-center | col-md-3 text-md-start" id="usefullinks">
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
            <div class="col-12 p-3 text-center | col-md-3 text-md-start" id="followus">
                <h2 class="fs-6 bold mb-3">Follow Us</h2>
                <NuxtLink class="hvr-float me-2" to="/">
                    <img src="/images/icon-facebook.svg" alt="Icon" title="Facebook">
                </NuxtLink>

                <NuxtLink class="hvr-float me-2" to="/">
                    <img src="/images/icon-linkedin.svg" alt="Icon" title="LinkedIn">
                </NuxtLink>

                <NuxtLink class="hvr-float" to="/">
                    <img src="/images/icon-instagram.svg" alt="Icon" title="Instagram">
                </NuxtLink>
            </div>
            <!-- contactus -->
            <div class="col-12 p-3 text-center | col-md-3 text-md-start" id="contactus">
                <h2 class="fs-6 bold mb-3">Suscribe to our Newsletter</h2>
            </div>
        </div>
        <div class="row my-3">
            <div class="col-12 text-center | col-md-3 text-md-start">
                <img id="footer-logo" src="images/acuantia-logo-negative.svg" alt="Acuantia Logo" title="Acuantia">
            </div>
            <div class="col-12 d-flex align-items-center justify-content-center | col-md-3 justify-content-md-start">
                <p class="mb-0">Copyright © 2023. All rights reserved.</p>
            </div>
            <div class="col-12 d-flex align-items-center justify-content-center pt-3 | col-md-3 justify-content-md-start pt-md-0">
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