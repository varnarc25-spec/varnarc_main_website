<script lang="ts" setup>
import { Head } from "@inertiajs/vue3";
import LandingNavbar from "../Components/LandingNavbar.vue";
import LandingFooter from "../Components/LandingFooter.vue";
</script>

<template>
  <div class="layout-wrapper landing">
    <Head title="Refund &amp; Cancellation Policy" />
    <LandingNavbar />

    <section class="section bg-light" style="padding-top: 130px;">
      <BContainer>
        <BRow class="justify-content-center">
          <BCol lg="10">
            <BCard no-body>
              <BCardBody class="p-4 p-md-5">
                <div class="text-center mb-4">
                  <h2 class="mb-2">Refund &amp; Cancellation Policy</h2>
                  <p class="text-muted mb-0"><strong>Varnarc Private Limited</strong></p>
                  <p class="text-muted mb-0">Last updated: 10 April 2026</p>
                </div>

                <h5 class="mt-4">1. General Policy</h5>
                <p class="text-muted mb-0">
                  All transactions are processed through third-party providers (Cashfree, Kwik API, banks, BBPS network).
                </p>

                <h5 class="mt-4">2. Recharge Transactions</h5>
                <ul class="text-muted mb-0">
                  <li>Successful recharges are <strong>non-refundable</strong>.</li>
                  <li>
                    If recharge fails but money is deducted:
                    <ul class="mt-2 mb-0">
                      <li>Refund will be processed within <strong>5–7 business days</strong>.</li>
                    </ul>
                  </li>
                </ul>

                <h5 class="mt-4">3. BBPS Bill Payments</h5>
                <ul class="text-muted mb-0">
                  <li>Once bill payment is successful → <strong>no cancellation allowed</strong>.</li>
                  <li>Failed transactions will be auto-refunded.</li>
                </ul>

                <h5 class="mt-4">4. Duplicate Transactions</h5>
                <ul class="text-muted mb-0">
                  <li>Duplicate payments will be refunded after verification.</li>
                </ul>

                <h5 class="mt-4">5. Failed / Pending Transactions</h5>
                <ul class="text-muted mb-0">
                  <li>
                    If transaction status is pending:
                    <ul class="mt-2 mb-0">
                      <li>Wait for up to 24 hours.</li>
                    </ul>
                  </li>
                  <li>
                    If failed:
                    <ul class="mt-2 mb-0">
                      <li>Refund initiated automatically.</li>
                    </ul>
                  </li>
                </ul>

                <h5 class="mt-4">6. Refund Timeline</h5>
                <ul class="text-muted mb-0">
                  <li>Wallet / UPI: 1–3 days</li>
                  <li>Bank/Card: 5–7 business days</li>
                </ul>

                <h5 class="mt-4">7. Refund Mode</h5>
                <p class="text-muted mb-2">Refunds will be processed:</p>
                <ul class="text-muted mb-0">
                  <li>To original payment method only</li>
                </ul>

                <h5 class="mt-4">8. Disputes</h5>
                <p class="text-muted mb-0">
                  Users must report disputes within <strong>7 days</strong> of transaction.
                </p>

                <h5 class="mt-4">9. Exceptions</h5>
                <p class="text-muted mb-2">Refunds may be denied if:</p>
                <ul class="text-muted mb-0">
                  <li>Incorrect details entered by user</li>
                  <li>Successful transaction confirmed by operator</li>
                </ul>

                <h5 class="mt-4">10. Contact</h5>
                <p class="text-muted mb-0">
                  Email:
                  <a href="mailto:admin@varnarc.com">admin@varnarc.com</a><br />
                  Phone: 9739723973
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
