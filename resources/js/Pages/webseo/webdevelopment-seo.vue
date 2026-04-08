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
    <Head title="Our Web Services at Varnarc" />
    <div class="layout-wrapper landing">
        <NavbarDefault />
        <section class="section pb-0 hero-section" id="hero">
            <BRow class="justify-content-center">
                <BCol col lg="10">
                    <BCard no-body>
                        <div class="bg-secondary-subtle position-relative">
                            <BCardBody class="p-5">
                                <div class="text-center">
                                    <h2 class="text-3xl font-semibold text-center mb-8">Our Web Services at Varnarc</h2>
                                    <p class="mb-0">We help businesses grow with cutting-edge <b>Website Development</b> and in-depth <b>SEO Audit Reports</b>—designed to boost your online presence, performance, and profitability.</p>
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
                        
                        <hr data-start="507" data-end="510">
                        <div class="services-section">
                            <section class="px-12 py-12">
                                <div class="row">
                                    <div class="col-lg-6">
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
                                                    <img src="@assets/images/webdev_hero.png" alt="" class="img-thumbnail mt-3"/>
                                                    <div class="row justify-content-start mt-4">
                                                        <div class="col-lg-12">
                                                            <div class="mb-4 pb-2">
                                                                <h4 class="fw-semibold fs-22 mb-3"> 💡 Features: </h4>
                                                                <ul class="webdev-seo-choose justify-content-start">
                                                                    <li><i class="ri-checkbox-circle-fill text-primary me-2"></i>Custom Website Design</li>
                                                                    <li><i class="ri-checkbox-circle-fill text-primary me-2"></i>eCommerce Platforms & Payment Integration </li>
                                                                    <li><i class="ri-checkbox-circle-fill text-primary me-2"></i>Corporate & Business Sites</li>
                                                                    <li><i class="ri-checkbox-circle-fill text-primary me-2"></i>CMS Integration (WordPress, Laravel Nova, etc.)</li>
                                                                    <li><i class="ri-checkbox-circle-fill text-primary me-2"></i>Landing Pages & Funnels</li>
                                                                    <li><i class="ri-checkbox-circle-fill text-primary me-2"></i>Ongoing Maintenance & Security Updates</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="row justify-content-center mt-2">
                                                        <div class="col-lg-12">
                                                            <div class="mb-4 pb-2">
                                                                <h4 class="fw-semibold fs-22 mb-3"> 🚀 Why Choose Us? </h4>
                                                                <ul class="webdev-seo-choose justify-content-center">
                                                                    <li><i class="ri-checkbox-circle-fill text-primary me-2"></i>SEO-ready, fast-loading websites</li>
                                                                    <li><i class="ri-checkbox-circle-fill text-primary me-2"></i>Mobile-first & responsive designs</li>
                                                                    <li><i class="ri-checkbox-circle-fill text-primary me-2"></i>API & CRM integration</li>
                                                                    <li><i class="ri-checkbox-circle-fill text-primary me-2"></i>Clean UI/UX with conversion-focused layouts</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="card pricing-box ribbon-box right">
                                            <div class="card-body p-4 m-2">
                                                <div>
                                                    <div class="d-flex align-items-center">
                                                        <div class="flex-grow-1">
                                                            <h5 class="mb-1 fw-semibold"> SEO Audit Report</h5>
                                                        </div>
                                                        <a class="btn btn-soft-primary waves-effect waves-light mx-3" href="javascript:void(0);">Get your full audit report now</a>
                                                        <div class="avatar-sm">
                                                            <div class="avatar-title bg-light rounded-circle text-primary">📊</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <hr class="my-4" />
                                                <div>
                                                    <div class="flex-grow-1">
                                                        Identify and fix the SEO issues that hold your website back.
                                                        Our audit gives you a clear score and actionable insights to improve rankings, traffic, and performance.
                                                    </div>
                                                    <img src="@assets/images/seoreport_hero.png" alt="" class="img-thumbnail mt-3"/>
                                                    <div class="row justify-content-center mt-4">
                                                        <div class="col-lg-12">
                                                            <div class="mb-4 pb-2">
                                                                <h4 class="fw-semibold fs-22 mb-3"> 🔍 What’s Included </h4>
                                                                <ul class="webdev-seo-choose justify-content-center">
                                                                    <li><i class="ri-checkbox-circle-fill text-primary me-2"></i>On-page SEO review (meta, headings, structure)</li>
                                                                    <li><i class="ri-checkbox-circle-fill text-primary me-2"></i>Technical SEO (speed, mobile, crawl errors)</li>
                                                                    <li><i class="ri-checkbox-circle-fill text-primary me-2"></i>Core Web Vitals and PageSpeed analysis</li>
                                                                    <li><i class="ri-checkbox-circle-fill text-primary me-2"></i>Keyword & content optimization</li>
                                                                    <li><i class="ri-checkbox-circle-fill text-primary me-2"></i>Backlink & competitor analysis</li>
                                                                    <li><i class="ri-checkbox-circle-fill text-primary me-2"></i>Sitemap, robots.txt & canonical checks</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="row justify-content-center mt-2">
                                                        <div class="col-lg-12">
                                                            <div class="mb-4 pb-2">
                                                                <h4 class="fw-semibold fs-22 mb-3"> 🛠️ Tools We Use </h4>
                                                                <ul class="webdev-seo-choose justify-content-center">
                                                                    <li><i class="ri-checkbox-circle-fill text-primary me-2"></i>Google Lighthouse</li>
                                                                    <li><i class="ri-checkbox-circle-fill text-primary me-2"></i>Search Console</li>
                                                                    <li><i class="ri-checkbox-circle-fill text-primary me-2"></i>Screaming Frog</li>
                                                                    <li><i class="ri-checkbox-circle-fill text-primary me-2"></i>Ahrefs/SEMrush</li>
                                                                    <li><i class="ri-checkbox-circle-fill text-primary me-2"></i>Varnarc Audit Engine</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row justify-content-center mt-5">
                                    <div class="col-lg-5">
                                        <div class="text-center mb-4 pb-2">
                                            <h4 class="fw-semibold fs-22 mb-5"> ✨ Ready to Boost Your Online Presence? </h4>
                                            <p class="mb-4 fs-15">Whether you're starting fresh or looking to improve an existing site, Varnarc is your trusted digital growth partner.</p>
                                            <h4 class="fw-semibold fs-22 mb-5"> 👉 Contact us for a free consultation at support@varnarc.com or call us at +91-9739723973</h4>
                                            <a href="/contact" class="btn btn-primary mt-4">Get Started Today</a>
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
