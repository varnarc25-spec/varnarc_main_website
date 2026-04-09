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
    <Head title="Terms & Conditions" />
    <BContainer>
        <BRow class="justify-content-center">
            <BCol col lg="10">
                <BCard no-body>
                    <div class="bg-warning-subtle position-relative">
                        <BCardBody class="p-5">
                            <div class="text-center">
                                <h3>Terms &amp; Conditions</h3>
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
                                <h5>Acceptance of terms</h5>
                                <p class="text-muted">
                                    By accessing and using Varnarc services, you agree to comply with these Terms
                                    &amp; Conditions and all applicable laws.
                                </p>
                                <p class="text-muted">
                                    You are responsible for maintaining accurate account information and safeguarding
                                    your login credentials.
                                </p>
                            </div>
                        </div>

                        <div class="d-flex">
                            <div class="flex-shrink-0 me-3">
                                <CheckCircleIcon class="text-success icon-dual-success icon-xs" />
                            </div>
                            <div class="flex-grow-1">
                                <h5>Service and user responsibilities</h5>
                                <ul class="text-muted vstack gap-2">
                                    <li>Use the platform only for lawful transactions and activities.</li>
                                    <li>Do not misuse the platform for fraud, abuse, or unauthorized access.</li>
                                    <li>Transaction processing depends on payment partners and network availability.</li>
                                    <li>Varnarc may suspend or restrict service in case of policy violations.</li>
                                </ul>
                            </div>
                        </div>

                        <div class="d-flex">
                            <div class="flex-shrink-0 me-3">
                                <CheckCircleIcon class="text-success icon-dual-success icon-xs" />
                            </div>
                            <div class="flex-grow-1">
                                <h5>Liability and updates</h5>
                                <p class="text-muted">
                                    Varnarc is not liable for outages or failures caused by third-party payment
                                    providers, networks, or banks.
                                </p>
                                <p class="text-muted">
                                    These terms may be revised from time to time. Continued use of services after
                                    updates indicates acceptance of revised terms.
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
