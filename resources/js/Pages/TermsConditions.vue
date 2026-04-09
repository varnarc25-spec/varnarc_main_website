<script lang="ts" setup>
import { Head } from "@inertiajs/vue3";
import LandingNavbar from "../Components/LandingNavbar.vue";
import LandingFooter from "../Components/LandingFooter.vue";
</script>

<template>
  <div class="layout-wrapper landing">
    <Head title="Terms & Conditions" />
    <LandingNavbar />

    <section class="section bg-light" style="padding-top: 130px;">
      <BContainer>
        <BRow class="justify-content-center">
          <BCol lg="10">
            <BCard no-body>
              <BCardBody class="p-4 p-md-5">
                <div class="text-center mb-4">
                  <h2 class="mb-2">Terms &amp; Conditions</h2>
                  <p class="text-muted mb-0">Last updated: 09 Apr, 2026</p>
                </div>

                <p class="text-muted">
                  By accessing and using Varnarc services, you agree to comply with these Terms &amp; Conditions and
                  applicable laws.
                </p>

                <h5 class="mt-4">Use of service</h5>
                <ul class="text-muted mb-0">
                  <li>Use the platform only for lawful activities.</li>
                  <li>Do not attempt unauthorized access to any system or account.</li>
                  <li>Keep your account credentials confidential and secure.</li>
                </ul>

                <h5 class="mt-4">Service availability</h5>
                <p class="text-muted mb-0">
                  Availability may depend on third-party systems and network conditions. We may update or suspend
                  features when required for maintenance or compliance.
                </p>

                <h5 class="mt-4">Policy updates</h5>
                <p class="text-muted mb-0">
                  We may revise these terms from time to time. Continued use of the services means you accept the
                  updated terms.
                </p>
              </BCardBody>
            </BCard>
          </BCol>
        </BRow>
      </BContainer>
    </section>

    <LandingFooter />
  </div>
</template>
