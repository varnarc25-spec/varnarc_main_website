<script type="ts" setup>
import { Head } from "@inertiajs/vue3";
import NavbarDefault from "@assets/js/Components/NavbarDefault.vue";
import LandingFooter from "@assets/js/Components/LandingFooter.vue";
</script>

<script>
import { CheckCircleIcon } from "@zhuowenli/vue-feather-icons";

export default {
  components: {
    CheckCircleIcon,
  },
};
</script>

<template>
    <Head title="About Us" />
    <div class="layout-wrapper landing">
        <NavbarDefault />
        <section class="section pb-0 hero-section" id="hero">
            <BRow class="justify-content-center">
                <BCol col lg="10">
                    <BCard no-body>
                        <div class="bg-secondary-subtle position-relative">
                            <BCardBody class="p-5">
                                <div class="text-center">
                                    <h2 class="text-3xl font-semibold text-center mb-8">About Us</h2>
                                    <p class="mb-0">Varnarc helps businesses grow with expert Web, SEO, Marketing, and Financial Compliance services—all in one place.</p>
                                </div>
                            </BCardBody>
                            <div class="shape">
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                version="1.1"
                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                xmlns:svgjs="http://svgjs.com/svgjs"
                                width="1440"
                                height="60"
                                preserveAspectRatio="none"
                                viewBox="0 0 1440 60"
                                >
                                <g mask='url("#SvgjsMask1001")' fill="none">
                                    <path
                                    d="M 0,4 C 144,13 432,48 720,49 C 1008,50 1296,17 1440,9L1440 60L0 60z"
                                    style="fill: var(--vz-secondary-bg)"
                                    ></path>
                                </g>
                                <defs>
                                    <mask id="SvgjsMask1001">
                                    <rect width="1440" height="60" fill="#ffffff"></rect>
                                    </mask>
                                </defs>
                                </svg>
                            </div>
                        </div>
                        <div class="services-section">
                            <section class="px-12 py-12">
                                <div class="card">
                                    <div class="card-body">
                                        <div class="text-center mb-4">
                                            <p class="mb-4">
                                                Varnarc At Varnarc, we are passionate about helping
                                                businesses succeed both digitally and financially.
                                                Founded with a vision to simplify growth for startups,
                                                SMEs, and enterprises, we bring together expert
                                                solutions across Web Development, SEO, Digital
                                                Marketing, and Financial Compliance—all under one roof.
                                            </p>
                                        </div>
                                        <img src="/velzon/vue/default/img/overview.54700485.jpg" alt="" class="img-thumbnail"/>
                                        <div class="row justify-content-center mt-5">
                                            <div class="col-lg-5">
                                                <div class="text-center mb-4 pb-2">
                                                    <h4 class="fw-semibold fs-22 mb-5"> 🚀 Our Mission </h4>
                                                    <p class="mb-4 fs-15">To empower businesses with reliable, innovative, and scalable digital and financial services that fuel long-term success and compliance.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row justify-content-center mt-5">
                                            <div class="col-lg-5">
                                                <div class="text-center mb-4 pb-2">
                                                    <h4 class="fw-semibold fs-22 mb-5"> 🌐 What We Do </h4>
                                                    <p class="mb-4 fs-15">We understand that every business is unique. That’s why we offer a diverse range of services designed to support your journey from launch to scale:</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-lg-4">
                                                <div class="card pricing-box">
                                                    <div class="card-body p-4 m-2">
                                                        <div class="d-flex align-items-center">
                                                            <div class="flex-grow-1">
                                                                <h5 class="mb-1 fw-semibold"> Website Development</h5>
                                                            </div>
                                                            <div class="avatar-sm">
                                                                <div class="avatar-title bg-light rounded-circle text-primary">🔧</div>
                                                            </div>
                                                        </div>
                                                        <hr class="my-4" />
                                                        <div>
                                                            <div class="flex-grow-1">
                                                                Crafting responsive, fast, and user-friendly websites tailored to your goals—whether you need a corporate site, eCommerce platform, or a custom web app.
                                                            </div>
                                                            <div class="mt-4">
                                                                <a class="btn btn-soft-primary w-100 waves-effect waves-light" href="/webdevelopment-seo">Get started</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-4">
                                                <div class="card pricing-box ribbon-box right">
                                                    <div class="card-body p-4 m-2">
                                                        <div>
                                                            <div class="d-flex align-items-center">
                                                                <div class="flex-grow-1">
                                                                    <h5 class="mb-1 fw-semibold"> SEO & Digital Marketing</h5>
                                                                </div>
                                                                <div class="avatar-sm">
                                                                    <div class="avatar-title bg-light rounded-circle text-primary">📈</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <hr class="my-4" />
                                                        <div>
                                                            <div class="flex-grow-1">
                                                                We drive real results through data-backed <b>SEO, Google Ads, social media campaigns,</b> and <b>performance marketing</b>. Our strategies are built to boost visibility, leads, and conversions.
                                                            </div>
                                                            <div class="mt-4">
                                                                <a class="btn btn-soft-primary w-100 waves-effect waves-light" href="javascript:void(0);">Get started</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-4">
                                                <div class="card pricing-box">
                                                    <div class="card-body p-4 m-2">
                                                        <div>
                                                            <div class="d-flex align-items-center">
                                                                <div class="flex-grow-1">
                                                                    <h5 class="mb-1 fw-semibold">Financial & Compliance Services</h5>
                                                                </div>
                                                                <div class="avatar-sm">
                                                                    <div class="avatar-title bg-light rounded-circle text-primary">📊</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <hr class="my-4" />
                                                        <div>
                                                            <div class="flex-grow-1">
                                                                From <b>GST filing</b> and <b>accounting</b> to <b>payroll, TDS</b>, and <b>business registration</b>, we ensure your business stays compliant and financially healthy.
                                                            </div>
                                                            <div class="mt-4">
                                                                <a class="btn btn-soft-primary w-100 waves-effect waves-light" href="javascript:void(0);" >Get started</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row justify-content-center mt-5">
                                            <div class="col-lg-5">
                                                <div class="text-center mb-4 pb-2">
                                                    <h4 class="fw-semibold fs-22 mb-5"> 💼 Why Choose Varnarc? </h4>
                                                    <ul class="about-choose justify-content-center">
                                                        <li><i class="ri-checkbox-circle-fill text-primary me-2"></i>Experienced professionals across tech, marketing, and finance</li>
                                                        <li><i class="ri-checkbox-circle-fill text-primary me-2"></i>Transparent pricing with no hidden charges </li>
                                                        <li><i class="ri-checkbox-circle-fill text-primary me-2"></i>Personalized support and strategy for every client</li>
                                                        <li><i class="ri-checkbox-circle-fill text-primary me-2"></i>Complete digital & compliance solutions in one place</li>
                                                        <li><i class="ri-checkbox-circle-fill text-primary me-2"></i>Serving clients across India and globally</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row justify-content-center mt-5">
                                            <div class="col-lg-5">
                                                <div class="text-center mb-4 pb-2">
                                                    <h4 class="fw-semibold fs-22 mb-5"> 🤝 Our Clients </h4>
                                                    <p class="mb-4 fs-15">We work with a wide range of
                                                        industries—from startups and local businesses to corporates and
                                                        eCommerce brands—helping them streamline operations and scale
                                                        confidently.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row justify-content-center mt-5">
                                    <div class="col-lg-5">
                                        <div class="text-center mb-4 pb-2">
                                            <h4 class="fw-semibold fs-22 mb-5"> Let's Grow Together </h4>
                                            <p class="mb-4 fs-15">At Varnarc, your growth is our
                                                mission. Whether you’re building your online presence or
                                                managing financial compliance, we’re here to simplify the
                                                process. 📞 Need help? Reach out to us at support@varnarc.com or
                                                call us at +91-9739723973
                                                confidently.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </BCard>
                </BCol>
            </BRow>
        </section>
    </div>
    <LandingFooter />
</template>
