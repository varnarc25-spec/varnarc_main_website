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
                  <p class="text-muted mb-0">
                    VARNARC PRIVATE LIMITED (MARG) | Last updated: 09 Apr, 2026
                  </p>
                </div>

                <p class="text-muted">
                  These Terms &amp; Conditions govern access to and use of the MARG fintech application and related
                  services provided by VARNARC PRIVATE LIMITED ("Varnarc", "we", "our", "us"). By registering for,
                  accessing, or using MARG, you agree to be bound by these terms and applicable laws.
                </p>

                <h5 class="mt-4">1. Eligibility and account responsibility</h5>
                <ul class="text-muted mb-0 vstack gap-2">
                  <li>You must be legally eligible to enter into a binding contract under applicable law.</li>
                  <li>You must provide accurate, complete, and updated information during onboarding and use.</li>
                  <li>You are solely responsible for maintaining confidentiality of credentials, OTPs, and device access.</li>
                  <li>You must immediately report unauthorized activity or suspected compromise of your account.</li>
                </ul>

                <h5 class="mt-4">2. Nature of service</h5>
                <p class="text-muted">
                  MARG is a fintech platform that enables digital financial workflows through integrated ecosystem
                  partners. Varnarc is a technology service provider and does not represent itself as a bank.
                </p>

                <h5 class="mt-4">3. Permitted and prohibited use</h5>
                <ul class="text-muted mb-0 vstack gap-2">
                  <li>You may use the platform only for lawful and authorized personal or business purposes.</li>
                  <li>You must not engage in fraud, abuse, money-laundering activities, or any prohibited conduct.</li>
                  <li>You must not reverse engineer, tamper with, or attempt unauthorized access to systems.</li>
                  <li>You must not use another person’s identity, credentials, or payment instrument without authority.</li>
                </ul>

                <h5 class="mt-4">4. KYC, compliance, and monitoring</h5>
                <p class="text-muted">
                  You agree to provide KYC and verification information as required by law, partner obligations, and
                  internal risk controls. Varnarc may perform screening, fraud checks, and transaction monitoring, and
                  may suspend or restrict access where compliance concerns arise.
                </p>

                <h5 class="mt-4">5. Third-party services and availability</h5>
                <p class="text-muted">
                  Certain services depend on banks, payment processors, network providers, and other third-party
                  systems. Service availability may vary due to downtime, technical issues, maintenance, or regulatory
                  restrictions outside Varnarc’s direct control.
                </p>

                <h5 class="mt-4">6. Fees, charges, and taxes</h5>
                <p class="text-muted">
                  Applicable fees, charges, or taxes (if any) will be displayed in line with service configuration and
                  legal requirements. You authorize Varnarc and ecosystem partners to process such charges as relevant.
                </p>

                <h5 class="mt-4">7. Suspension and termination</h5>
                <p class="text-muted">
                  Varnarc may suspend, limit, or terminate access to MARG where required for security, compliance,
                  legal/regulatory direction, policy violations, payment risk, or suspected unauthorized activity.
                </p>

                <h5 class="mt-4">8. Limitation of liability</h5>
                <p class="text-muted">
                  To the extent permitted by law, Varnarc is not liable for indirect, incidental, special, or
                  consequential losses arising from platform use, third-party failures, network outages, user errors,
                  or events beyond reasonable control.
                </p>

                <h5 class="mt-4">9. Indemnity</h5>
                <p class="text-muted">
                  You agree to indemnify and hold harmless Varnarc, its directors, officers, employees, and partners
                  from claims, losses, or liabilities arising out of misuse of services, legal non-compliance, or
                  breach of these terms.
                </p>

                <h5 class="mt-4">10. Governing law and jurisdiction</h5>
                <p class="text-muted">
                  These Terms are governed by the laws of India. Subject to applicable statutory remedies, courts in
                  Hyderabad, Telangana will have jurisdiction for disputes arising from these terms.
                </p>

                <h5 class="mt-4">11. Updates to terms</h5>
                <p class="text-muted mb-0">
                  We may modify these Terms &amp; Conditions from time to time. Updated terms become effective when
                  published on the platform. Continued use of MARG after updates constitutes acceptance.
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
