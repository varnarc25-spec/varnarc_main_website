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
                  <p class="text-muted mb-0">Varnarc Private Limited</p>
                  <p class="text-muted mb-0"><strong>Effective Date:</strong> [Insert Date]</p>
                </div>

                <p class="text-muted">
                  Varnarc Private Limited ("Company", "we", "our", or "us") operates a financial technology platform
                  ("App" / "Services"). We are committed to protecting your privacy and ensuring transparency in how
                  your information is collected, used, and shared.
                </p>
                <p class="text-muted">
                  This Privacy Policy describes how we handle your personal data when you use our services.
                </p>

                <h5 class="mt-4">1. Information we collect</h5>
                <h6 class="mt-3">a. Personal Information</h6>
                <ul class="text-muted mb-0">
                  <li>Full Name</li>
                  <li>Mobile Number</li>
                  <li>Email Address</li>
                  <li>Date of Birth</li>
                  <li>Government-issued ID (PAN, Aadhaar, etc.)</li>
                  <li>Bank account details (for transactions)</li>
                </ul>
                <h6 class="mt-3">b. Financial Information</h6>
                <ul class="text-muted mb-0">
                  <li>Transaction history</li>
                  <li>Payment details</li>
                  <li>Billing information</li>
                </ul>
                <h6 class="mt-3">c. Device &amp; Technical Data</h6>
                <ul class="text-muted mb-0">
                  <li>IP address</li>
                  <li>Device type and OS</li>
                  <li>App usage data</li>
                  <li>Cookies and tracking technologies</li>
                </ul>
                <h6 class="mt-3">d. KYC Information</h6>
                <p class="text-muted mb-2">To comply with regulations, we may collect:</p>
                <ul class="text-muted mb-0">
                  <li>Identity proof</li>
                  <li>Address proof</li>
                  <li>Selfie/photo verification</li>
                </ul>

                <h5 class="mt-4">2. How we use information</h5>
                <ul class="text-muted mb-0">
                  <li>Provide and improve our services</li>
                  <li>Process transactions and payments</li>
                  <li>Verify identity (KYC compliance)</li>
                  <li>Prevent fraud and unauthorized activities</li>
                  <li>Communicate updates, offers, and alerts</li>
                  <li>Comply with legal and regulatory requirements</li>
                </ul>

                <h5 class="mt-4">4. Data sharing and disclosure</h5>
                <h6 class="mt-3">a. Service Providers</h6>
                <ul class="text-muted mb-0">
                  <li>Payment gateways</li>
                  <li>Banking partners</li>
                  <li>KYC verification providers</li>
                  <li>Cloud hosting services</li>
                </ul>
                <h6 class="mt-3">b. Regulatory Authorities</h6>
                <p class="text-muted mb-0">When required under applicable laws (RBI, IT Act, etc.)</p>
                <h6 class="mt-3">c. Business Transfers</h6>
                <p class="text-muted mb-0">In case of merger, acquisition, or sale of assets</p>
                <p class="text-muted mt-2 mb-0"><strong>We do not sell your personal data to third parties.</strong></p>
                
                <h5 class="mt-4">5. Data security</h5>
                <p class="text-muted mb-2">We implement industry-standard security measures:</p>
                <ul class="text-muted mb-0">
                  <li>Encryption of sensitive data</li>
                  <li>Secure APIs and authentication</li>
                  <li>Regular security audits</li>
                </ul>
                <p class="text-muted mt-2 mb-0">
                  However, no system is 100% secure, and we cannot guarantee absolute security.
                </p>

                <h5 class="mt-4">6. Data retention</h5>
                <p class="text-muted mb-2">We retain your data:</p>
                <ul class="text-muted mb-0">
                  <li>As long as your account is active</li>
                  <li>As required under legal obligations (e.g., financial regulations)</li>
                </ul>
                <p class="text-muted mt-2 mb-0">
                  After this period, data is securely deleted or anonymized.
                </p>

                <h5 class="mt-4">7. Your rights</h5>
                <p class="text-muted mb-2">You have the right to:</p>
                <ul class="text-muted mb-0">
                  <li>Access your personal data</li>
                  <li>Request correction of inaccurate data</li>
                  <li>Request deletion (subject to legal requirements)</li>
                  <li>Withdraw consent where applicable</li>
                </ul>
                <p class="text-muted mt-2 mb-0">
                  To exercise your rights, contact us at:<br />
                  📧 <strong>[Insert Email Address]</strong>
                </p>

                <h5 class="mt-4">8. Cookies &amp; tracking</h5>
                <p class="text-muted mb-2">We use cookies and similar technologies to:</p>
                <ul class="text-muted mb-0">
                  <li>Improve user experience</li>
                  <li>Analyze usage patterns</li>
                  <li>Provide personalized content</li>
                </ul>
                <p class="text-muted mt-2 mb-0">You can control cookies through your browser settings.</p>

                <h5 class="mt-4">9. Third-party links</h5>
                <p class="text-muted mb-0">
                  Our app may contain links to third-party websites or services. We are not responsible for their
                  privacy practices.
                </p>

                <h5 class="mt-4">10. Children's privacy</h5>
                <p class="text-muted mb-0">
                  Our services are not intended for individuals under 18 years of age. We do not knowingly collect data
                  from minors.
                </p>

                <h5 class="mt-4">11. Updates to this policy</h5>
                <p class="text-muted mb-0">
                  We may update this Privacy Policy periodically. Changes will be posted on this page with an updated
                  effective date.
                </p>

                <h5 class="mt-4">12. Contact us</h5>
                <p class="text-muted mb-0">
                  <strong>Varnarc Private Limited</strong><br />
                  #153, Bileshivelle Village, Kothanur, Bangalore, KA 560077<br />
                  📧 Email: admin@varnarc.com<br />
                  📞 Phone: 9739723973
                </p>

                <h5 class="mt-4">13. Consent</h5>
                <p class="text-muted mb-0">
                  By using our App, you agree to the terms of this Privacy Policy.
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
