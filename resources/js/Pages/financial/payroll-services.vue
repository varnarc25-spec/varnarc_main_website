<script type="ts" setup>
import { Head } from '@inertiajs/vue3';
import LandingNavbar from "../../Components/LandingNavbar.vue";
import LandingFooter from "../../Components/LandingFooter.vue";
import PayrollOfferings from "../../../ts/services/PayrollOfferings"
defineProps({
    policy: String,
});
</script>

<script>
import { CheckCircleIcon } from "@zhuowenli/vue-feather-icons";

export default {
  components: {
    CheckCircleIcon
  },
};
</script>

<template>
  <Head title="Payroll Services" />
  <div class="layout-wrapper landing">
    <LandingNavbar />
    <section class="section pb-0 hero-section" id="hero">
      <BRow class="justify-content-center">
        <BCol col lg="10">
          <BCard no-body>
            <div class="bg-warning-subtle position-relative">
              <BCardBody class="p-5">
                <div class="text-center">
                  <h3>Payroll Services</h3>
                  <p class="mb-0 text-muted">Simplify Payroll, Amplify Productivity</p>
                </div>
              </BCardBody>
              <div class="shape">
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" width="1440" height="60" preserveAspectRatio="none" viewBox="0 0 1440 60">
                  <g mask="url(&quot;#SvgjsMask1001&quot;)" fill="none">
                    <path d="M 0,4 C 144,13 432,48 720,49 C 1008,50 1296,17 1440,9L1440 60L0 60z" style="fill: var(--vz-secondary-bg);"></path>
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
              <!-- Services Offered -->
              <section class="px-12 py-12">
                <h2 class="text-3xl font-semibold text-center mb-8">What We Offer</h2>
                <div class="d-flex flex-wrap justify-content-center">
                  <div v-for="offer in PayrollOfferings" :key="offer.title" class="p-3" style="width: 25%">
                    <BCard no-body class="card-body h-100 align-items-center">
                      <div class="avatar-sm mb-3">
                        <div class="avatar-title bg-secondary-subtle text-secondary fs-17 rounded">
                          <i :class="offer.icon"></i>
                        </div>
                      </div>
                      <BCardTitle>{{ offer.title }}</BCardTitle>
                      <p class="card-text text-muted">{{ offer.short }}</p>
                      <details class="text-sm text-gray-700">
                        <summary class="cursor-pointer text-blue-500">Learn more</summary>
                        <p class="mt-2">{{ offer.details }}</p>
                      </details>
                    </BCard>
                  </div>
                </div>
              </section>
              <!-- Testimonial Section -->
              <section class="bg-gray-50 px-4 py-12">
                <div class="max-w-4xl mx-auto text-center">
                  <img
                    src="/images/client-testimonial.jpg"
                    alt="Happy client testimonial for payroll services"
                    class="w-24 h-24 rounded-full mx-auto mb-4"
                  />
                  <blockquote class="italic text-lg text-gray-700">
                    “Their payroll services have streamlined our business operations. Highly recommend!”
                  </blockquote>
                  <p class="mt-2 font-semibold text-blue-800">— John D., Business Owner</p>
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
