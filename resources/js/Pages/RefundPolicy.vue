<script setup>
import { Head } from '@inertiajs/vue3';

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
    <Head title="Refund Policy" />
    <BContainer>
        <BRow class="justify-content-center">
            <BCol col lg="10">
                <BCard no-body>
                    <div class="bg-warning-subtle position-relative">
                        <BCardBody class="p-5">
                            <div class="text-center">
                                <h3>Cancellation &amp; Refund Policy</h3>
                                <p class="mb-0 text-muted">Last update: 09 Apr, 2026</p>
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
                    <BCardBody class="p-4">
                        <div class="d-flex">
                            <div class="flex-shrink-0 me-3">
                                <CheckCircleIcon class="text-success icon-dual-success icon-xs" />
                            </div>
                            <div class="flex-grow-1">
                                <h5>Cancellation policy</h5>
                                <p class="text-muted">
                                    Cancellation requests are considered only when raised immediately after placing
                                    the order. Requests may not be accepted once vendors or merchants begin processing.
                                </p>
                                <p class="text-muted">
                                    Cancellation requests are not accepted for perishable items. Refund or replacement
                                    may be considered when product quality issues are established.
                                </p>
                            </div>
                        </div>

                        <div class="d-flex">
                            <div class="flex-shrink-0 me-3">
                                <CheckCircleIcon class="text-success icon-dual-success icon-xs" />
                            </div>
                            <div class="flex-grow-1">
                                <h5>Damaged, defective, and mismatch products</h5>
                                <p class="text-muted">
                                    Report damaged or defective items to customer support within 7 days of delivery.
                                    Requests are processed after merchant-side verification.
                                </p>
                                <p class="text-muted">
                                    If the product is not as shown or expected, report within 7 days of receipt for
                                    review and resolution by customer service.
                                </p>
                            </div>
                        </div>

                        <div class="d-flex">
                            <div class="flex-shrink-0 me-3">
                                <CheckCircleIcon class="text-success icon-dual-success icon-xs" />
                            </div>
                            <div class="flex-grow-1">
                                <h5>Warranty and refund timeline</h5>
                                <p class="text-muted">
                                    For products covered by manufacturer warranty, please contact the manufacturer
                                    directly for warranty claims.
                                </p>
                                <p class="text-muted">
                                    Approved refunds are generally processed within 3 to 5 days.
                                </p>
                            </div>
                        </div>

                        <div class="text-end">
                            <BLink href="#!" class="btn btn-danger">I Understand</BLink>
                        </div>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>
    </BContainer>
</template>
