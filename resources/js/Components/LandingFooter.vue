<script setup lang="ts">
import { onMounted, onUnmounted } from "vue";
import { Link, Head } from "@inertiajs/vue3";

const topFunction = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const handleScroll = () => {
  const navbar = document.getElementById("navbar");
  const backtoTop = document.getElementById("back-to-top");

  if (navbar) {
    if (document.documentElement.scrollTop >= 50) {
      navbar.classList.add("is-sticky");
    } else {
      navbar.classList.remove("is-sticky");
    }
  }

  if (backtoTop) {
    if (document.documentElement.scrollTop > 100) {
      backtoTop.style.display = "block";
    } else {
      backtoTop.style.display = "none";
    }
  }
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);

  const copyright = document.querySelector(".currentyear");
  if (copyright) {
    copyright.innerHTML = `${new Date().getFullYear()} © Velzon - Themesbrand`;
  }
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <footer class="custom-footer bg-secondary py-5 position-relative">
      <BContainer>
        <BRow>
          <BCol lg="4" class="mt-4">
            <div>
              <div>
                <img
                  src="@assets/images/logo-light.png"
                  alt="logo light"
                  height="50"
                />
              </div>
              <div class="mt-4 fs-13">
                <p>Varnarc | SEO, Digital Marketing and Financial Services</p>
                <p class="ff-secondary">
                  At Varnarc, we provide custom tools for SEO audits, digital
                  marketing, and website optimization to help businesses grow
                  and enhance their digital presence
                </p>
              </div>
            </div>
          </BCol>

          <BCol lg="7" class="ms-lg-auto">
            <BRow>
              <BCol sm="4" class="mt-4">
                <h5 class="text-white mb-0">Company</h5>
                <div class="text-muted mt-3">
                  <ul class="list-unstyled ff-secondary footer-list">
                    <li>
                      <Link href="/aboutus">About US</Link>
                    </li>
                    <li>
                      <BLink href="#">Gallery</BLink>
                    </li>
                    <li>
                      <Link href="/apps/projects-list">Projects</Link>
                    </li>
                    <li>
                      <Link href="/pages/timeline">Timeline</Link>
                    </li>
                  </ul>
                </div>
              </BCol>
              <BCol sm="4" class="mt-4">
                <h5 class="text-white mb-0">Apps Pages</h5>
                <div class="text-muted mt-3">
                  <ul class="list-unstyled ff-secondary footer-list">
                    <li>
                      <Link href="/calendar">Calendar</Link>
                    </li>
                    <li>
                      <Link href="/mailbox">Mailbox</Link>
                    </li>
                    <li>
                      <Link href="/chat">Chat</Link>
                    </li>
                    <li>
                      <Link href="/apps/crm-deals">Deals</Link>
                    </li>
                    <li>
                      <Link href="/apps/tasks-kanban">kanban board</Link>
                    </li>
                  </ul>
                </div>
              </BCol>
              <BCol sm="4" class="mt-4">
                <h5 class="text-white mb-0">Support</h5>
                <div class="text-muted mt-3">
                  <ul class="list-unstyled ff-secondary footer-list">
                    <li>
                      <Link href="/pages/faqs">FAQ's</Link>
                    </li>
                    <li>
                      <Link href="/pages/faqs">Contacts</Link>
                    </li>
                  </ul>
                </div>
              </BCol>
            </BRow>
          </BCol>
        </BRow>

        <BRow class="text-center text-sm-start align-items-center mt-5">
          <BCol sm="6">
            <div>
              <p class="copy-rights mb-0 currentyear">
                {{ new Date().getFullYear() }} © Velzon - Themesbrand
              </p>
            </div>
          </BCol>
          <BCol sm="6">
            <div class="text-sm-end mt-3 mt-sm-0">
              <ul class="list-inline mb-0 footer-social-link">
                <li class="list-inline-item">
                  <BLink href="javascript: void(0);" class="avatar-xs d-block">
                    <div class="avatar-title rounded-circle">
                      <i class="ri-facebook-fill"></i>
                    </div>
                  </BLink>
                </li>
                <li class="list-inline-item">
                  <BLink href="javascript: void(0);" class="avatar-xs d-block">
                    <div class="avatar-title rounded-circle">
                      <i class="ri-github-fill"></i>
                    </div>
                  </BLink>
                </li>
                <li class="list-inline-item">
                  <BLink href="javascript: void(0);" class="avatar-xs d-block">
                    <div class="avatar-title rounded-circle">
                      <i class="ri-linkedin-fill"></i>
                    </div>
                  </BLink>
                </li>
                <li class="list-inline-item">
                  <BLink href="javascript: void(0);" class="avatar-xs d-block">
                    <div class="avatar-title rounded-circle">
                      <i class="ri-google-fill"></i>
                    </div>
                  </BLink>
                </li>
                <li class="list-inline-item">
                  <BLink href="javascript: void(0);" class="avatar-xs d-block">
                    <div class="avatar-title rounded-circle">
                      <i class="ri-dribbble-line"></i>
                    </div>
                  </BLink>
                </li>
              </ul>
            </div>
          </BCol>
        </BRow>
      </BContainer>
    </footer>
    <BButton
      variant="danger"
      @click="topFunction"
      class="btn-icon"
      id="back-to-top"
    >
      <i class="ri-arrow-up-line"></i>
    </BButton>
</template>