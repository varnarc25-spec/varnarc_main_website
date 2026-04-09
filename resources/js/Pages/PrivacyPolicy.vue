<script lang="ts" setup>
import { Head } from "@inertiajs/vue3";
import LandingNavbar from "../Components/LandingNavbar.vue";
import LandingFooter from "../Components/LandingFooter.vue";
</script>

<template>
  <div class="layout-wrapper landing">
    <Head title="Privacy Policy" />
    <LandingNavbar />

    <section class="section bg-light" style="padding-top: 130px;">
      <BContainer>
        <BRow class="justify-content-center">
          <BCol lg="10">
            <BCard no-body>
              <BCardBody class="p-4 p-md-5">
                <div class="text-center mb-4">
                  <h2 class="mb-2">Privacy Policy</h2>
                  <p class="text-muted mb-0">Last updated: 09 Apr, 2026</p>
                </div>

                <p class="text-muted">
                  This Privacy Policy explains how Varnarc collects, uses, and protects your information when you use
                  our services.
                </p>

                <h5 class="mt-4">Information we collect</h5>
                <ul class="text-muted mb-0">
                  <li>Basic account details such as name, email, and phone number.</li>
                  <li>Usage information to improve performance and user experience.</li>
                  <li>Transaction-related data needed to provide our services.</li>
                </ul>

                <h5 class="mt-4">How we use information</h5>
                <ul class="text-muted mb-0">
                  <li>To provide, maintain, and improve our platform.</li>
                  <li>To communicate updates and important service notices.</li>
                  <li>To detect, prevent, and address security or fraud issues.</li>
                </ul>

                <h5 class="mt-4">Data security</h5>
                <p class="text-muted mb-0">
                  We use reasonable technical and organizational safeguards to protect your personal information.
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
