<script lang="ts" setup>
import { Head } from "@inertiajs/vue3";
import LandingNavbar from "../Components/LandingNavbar.vue";
import LandingFooter from "../Components/LandingFooter.vue";
</script>

<template>
  <div class="layout-wrapper landing">
    <Head title="Refund Policy" />
    <LandingNavbar />

    <section class="section bg-light" style="padding-top: 130px;">
      <BContainer>
        <BRow class="justify-content-center">
          <BCol lg="10">
            <BCard no-body>
              <BCardBody class="p-4 p-md-5">
                <div class="text-center mb-4">
                  <h2 class="mb-2">Cancellation &amp; Refund Policy</h2>
                  <p class="text-muted mb-0">Last updated: 09 Apr, 2026</p>
                </div>

                <p class="text-muted">
                  Varnarc believes in helping customers as far as possible and follows a fair cancellation and refund
                  process.
                </p>

                <h5 class="mt-4">Cancellation</h5>
                <ul class="text-muted mb-0">
                  <li>Cancellations are considered only if requested immediately after placing an order.</li>
                  <li>Requests may not be accepted once processing or shipping has started.</li>
                  <li>Perishable items are generally not eligible for cancellation.</li>
                </ul>

                <h5 class="mt-4">Damaged or defective items</h5>
                <p class="text-muted mb-0">
                  Report damaged or defective items to customer service within 7 days of delivery. Requests are
                  reviewed after merchant verification.
                </p>

                <h5 class="mt-4">Refund processing</h5>
                <p class="text-muted mb-0">
                  Approved refunds are usually processed within 3 to 5 days to the original payment source.
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
