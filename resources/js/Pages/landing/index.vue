<script lang="ts" setup>
import { computed, onMounted, onUnmounted, ref } from "vue";
import { Link, Head } from "@inertiajs/vue3";
import { CountTo } from "vue3-count-to";
import LandingNavbar from "../../Components/LandingNavbar.vue";
import LandingFooter from "../../Components/LandingFooter.vue";
import {
  Autoplay,
  Thumbs,
  Pagination,
  Navigation,
  EffectCoverflow,
  Mousewheel,
  Scrollbar,
  EffectFade,
  EffectFlip,
  EffectCreative,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/mousewheel";
import "swiper/css/effect-fade";
import "swiper/css/effect-creative";
import "swiper/css/effect-flip";
import "swiper/css/effect-coverflow";

// Web page Data
import { servicesList } from "@assets/ts/services/servicesList";
import { webSeoServices } from "@assets/ts/services/webSeoServices";
import { digitalMarketingServices } from "@assets/ts/services/digitalMarketingServices";
import { financeServices } from "@assets/ts/services/financeServices";

// API
import { fetchSeoAudit } from "@assets/ts/services/seo";

const domainName = ref("");

// Refs for Swiper modules and images
const swiperModules = { Autoplay, Navigation, Pagination };

// Modules for different Swiper effects
const coverflowModules = [EffectCoverflow, Pagination];
const mousewheelModules = [Mousewheel, Pagination];
const scrollbarModules = [Scrollbar, Navigation, Pagination];
const effectFadeModules = [EffectFade, Pagination];
const effectFlipModules = [EffectFlip, Pagination];

// Pagination config
const pagination = {
  clickable: true,
  el: ".swiper-pagination",
  renderBullet: function (index: number, className: string) {
    return "<span class=" + className + ">" + (index + 1) + "</span>";
  },
};

// Make components available to the template
defineExpose({
  Swiper,
  SwiperSlide,
  Link,
  Head,
});

const monthly = () => {
  document.querySelectorAll(".month").forEach((el) => {
    (el as HTMLElement).style.display = "block";
  });
  document.querySelectorAll(".annual").forEach((el) => {
    (el as HTMLElement).style.display = "none";
  });
};

const anually = () => {
  document.querySelectorAll(".month").forEach((el) => {
    (el as HTMLElement).style.display = "none";
  });
  document.querySelectorAll(".annual").forEach((el) => {
    (el as HTMLElement).style.display = "block";
  });
};

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const setActiveSection = () => {
  // your logic to track scroll active section if needed
};

onMounted(() => {
  window.addEventListener("scroll", setActiveSection);

  const backtoTop = document.getElementById("back-to-top");
  window.onscroll = () => {
    if (!backtoTop) return;
    if (
      document.body.scrollTop > 100 ||
      document.documentElement.scrollTop > 100
    ) {
      backtoTop.style.display = "block";
    } else {
      backtoTop.style.display = "none";
    }
  };

  monthly();

  const planSwitch = document.getElementById(
    "plan-switch"
  ) as HTMLInputElement | null;
  if (planSwitch) {
    planSwitch.addEventListener("change", () => {
      if (planSwitch.checked) {
        anually();
      } else {
        monthly();
      }
    });
  }

  window.addEventListener("scroll", (ev) => {
    ev.preventDefault();
    const navbar = document.getElementById("navbar");
    if (!navbar) return;
    if (
      document.body.scrollTop >= 50 ||
      document.documentElement.scrollTop >= 50
    ) {
      navbar.classList.add("is-sticky");
    } else {
      navbar.classList.remove("is-sticky");
    }
  });

  const copyright = document.querySelector(".currentyear");
  if (copyright) {
    copyright.innerHTML = `${new Date().getFullYear()} © Velzon - Themesbrand`;
  }
});

onUnmounted(() => {
  window.removeEventListener("scroll", setActiveSection);
});
const data = ref(null);
const error = ref<string | null>(null);
async function onGenerate() {
  window.location.href = `/seo-report/${encodeURIComponent(domainName.value)}`;
}

const swiperRef = ref<any>(null);
const onSwiper = (swiper: any) => {
  swiperRef.value = swiper;
};
// Swiper config
const modules = [Autoplay, Mousewheel, Pagination, EffectCoverflow];
const coverflowEffect = {
  rotate: 80,
  stretch: 0,
  depth: 50,
  modifier: 1,
  slideShadows: true,
};
const autoplay = {
  delay: 2500,
  disableOnInteraction: true,
};
const paginationOptions = {
  el: ".swiper-pagination",
  clickable: true,
  dynamicBullets: true,
};

// Pause/resume handlers
const pauseAutoplay = () => {
  if (swiperRef.value?.autoplay) {
    swiperRef.value.autoplay.stop();
  }
};

const resumeAutoplay = () => {
  if (swiperRef.value?.autoplay) {
    swiperRef.value.autoplay.start();
  }
};

const slides = [
  {
    image: new URL("@assets/images/small/img-4.jpg", import.meta.url).href,
    title: "Title 1",
    message: "This is the first slide's message.",
    buttonText: "Learn More",
  },
  {
    image: new URL("@assets/images/small/img-5.jpg", import.meta.url).href,
    title: "Title 2",
    message: "This is the second slide's message.",
    buttonText: "Get Started",
  },
  {
    image: new URL("@assets/images/small/img-6.jpg", import.meta.url).href,
    title: "Title 3",
    message: "This is the third slide's message.",
    buttonText: "Explore",
  },
  {
    image: new URL("@assets/images/small/img-7.jpg", import.meta.url).href,
    title: "Title 4",
    message: "This is the fourth slide's message.",
    buttonText: "Read More",
  },
  {
    image: new URL("@assets/images/small/img-8.jpg", import.meta.url).href,
    title: "Title 5",
    message: "This is the fifth slide's message.",
    buttonText: "Discover",
  },
  {
    image: new URL("@assets/images/small/img-9.jpg", import.meta.url).href,
    title: "Title 6",
    message: "This is the sixth slide's message.",
    buttonText: "Details",
  },
];
const selectedId = ref<string | null>(null);

const selectedPlan = computed(
  () => servicesList.find((p) => p.id === selectedId.value) || null
);

function selectPlan(id: string) {
  selectedId.value = id;
}

function resetSelection() {
  selectedId.value = null;
}

function getCardClass(id: string, index: number) {
  if (!selectedId.value) return "fade-in";

  if (selectedId.value === id) {
    return index === 0 ? "selected" : "selected move-left";
  }

  return "fade-out hide-card";
}

// Helper to resolve image paths dynamically
const resolveIcon = (path: string) => {
  return new URL(path, import.meta.url).href;
};
</script>
<template>
    <Head title="Homepage" />
    <div class="layout-wrapper landing">
        <LandingNavbar />
        <section class="section pb-0 hero-section" id="hero">
            <div class="bg-overlay bg-overlay-pattern"></div>
            <BRow class="justify-content-center">
                <BCol lg="8" sm="10">
                    <div class="text-center mt-lg-5 pt-5">
                        <h1 class="display-6 fw-semibold mb-3 lh-base">
                            Amplify Your Digital Presence with
                            <span class="text-secondary">Varnarc </span>
                        </h1>
                        <p class="lead text-muted lh-base">
                            Unlock your brand’s full potential with our cutting-edge digital
                            solutions. Whether you need a stunning website, a powerful
                            marketing strategy, or seamless user experiences, we help you
                            stand out in a competitive digital world. Elevate your online
                            presence and drive meaningful engagement with strategies
                            designed for success.
                        </p>
                    </div>
                </BCol>
            </BRow>
            <BContainer>
                <div class="plans-container">
                    <div class="plans-wrapper">
                        <div class="container1 mt-5">
                            <div class="d-flex gap-4 position-relative justify-content-center plan-wrapper">
                                <!-- Plan Cards -->
                                <div v-for="(service, index) in servicesList" :key="service.id" class="plan-box" :class="getCardClass(service.id, index)"
                                    @click="selectPlan(service.id)">
                                    <div class="plan-card d-flex flex-column">
                                        <div class="plan-card-body">
                                            <div class="plan-header flex-column">
                                                <div data-v-43e89395="" class="avatar-lg mb-3">
                                                    <div data-v-43e89395="" class="avatar-title bg-secondary-subtle text-secondary fs-17 rounded p-2">
                                                        <img :src="service.icon" alt="service-img" class="mx-auto img-fluid d-block"/>
                                                    </div>
                                                </div>
                                                <div class="text-center">
                                                    <h3 class="mb-1 fw-semibold">{{service.title}}</h3>
                                                    <!-- <p class="text-muted mb-0">For Startup</p> -->
                                                </div>
                                            </div>
                                            <p class="text-center">{{service.description}}</p>
                                            <!-- <div class="mt-3">
                                                <BLink href="javascript:void(0);" class="btn btn-soft-success w-100">Get Started</BLink>
                                            </div> -->
                                    </div>
                                </div>
                            </div>
                            <div v-if="selectedPlan" class="detail-box fade-in">
                                <b-card v-if="selectedPlan.id=='seo'" class="text-bg-white">
                                    <div class="right-content-section-column">
                                        <b-button variant="secondary" @click="resetSelection">Back</b-button>
                                        <h4 class="mb-3">{{ selectedPlan.title }}</h4>
                                        <BRow class="justify-content-center">
                                            <BCol lg="12">
                                                <BRow class="g-2">
                                                    <BCol>
                                                        <div class="position-relative">
                                                            <input
                                                            type="text"
                                                            class="form-control form-control-lg bg-light border-light"
                                                            placeholder="yourdomain.com"
                                                            name="domainname"
                                                            id="domainname"
                                                            v-model="domainName"
                                                            />
                                                        </div>
                                                    </BCol>
                                                    <div class="col-auto">
                                                        <BButton type="submit" variant="primary" size="lg" @click="onGenerate">
                                                            <i class="mdi mdi-magnify me-1"></i> Generate
                                                        </BButton>
                                                    </div>
                                                </BRow>
                                            </BCol>
                                        </BRow>
                                        <div class="service-item">
                                            <BListGroup tag="ul" class="mb-1">
                                                <div v-for="(service, index) in webSeoServices" :key="index" class="border-b pb-2">
                                                    <BListGroupItem tag="li" class="listcard">
                                                      <a :href="service.link" target="_blank" rel="noopener">
                                                        <div class="d-flex align-items-center">
                                                            <div class="flex-grow-1">
                                                                <div class="d-flex">
                                                                    <i class="mdi mdi-check-bold align-middle lh-1 me-2"></i>
                                                                    <div class="flex-shrink-0 ms-2">
                                                                        <h6 class="fs-md mb-0">{{ service.title }}</h6>
                                                                        <small class="text-muted">{{ service.description }}</small>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                      </a>
                                                    </BListGroupItem>
                                                </div>
                                            </BListGroup>
                                        </div>
                                    </div>
                                </b-card>
                                <b-card v-if="selectedPlan.id=='digital'" class="text-bg-white">
                                    <div class="right-content-section-column">
                                      <b-button variant="secondary" @click="resetSelection">Back</b-button>
                                        <h4 class="mb-3">{{ selectedPlan.title }}</h4>
                                        <p>Analyze and optimize your website for better search engine rankings. We offer comprehensive digital marketing services to grow your brand online and drive targeted traffic.</p>
                                        <div class="service-item">
                                            <BListGroup tag="ul" class="mb-1">
                                                <div v-for="(service, index) in digitalMarketingServices" :key="index" class="border-b pb-2">
                                                    <BListGroupItem tag="li" class="listcard">
                                                      <a :href="service.link" target="_blank" rel="noopener">
                                                        <div class="d-flex align-items-center">
                                                            <div class="flex-grow-1">
                                                                <div class="d-flex">
                                                                  <img :src=service.icon />
                                                                    <i class="mdi mdi-check-bold align-middle lh-1 me-2"></i>
                                                                    <div class="flex-shrink-0 ms-2">
                                                                        <h6 class="fs-md mb-0">{{ service.title }}</h6>
                                                                        <small class="text-muted">{{ service.description }}</small>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                      </a>
                                                    </BListGroupItem>
                                                </div>
                                            </BListGroup>
                                        </div>
                                        
                                    </div>
                                </b-card>
                                <b-card v-if="selectedPlan.id=='financial'" class="text-bg-white">
                                    <div class="right-content-section-column">
                                      <b-button variant="secondary" @click="resetSelection">Back</b-button>
                                        <h4 class="mb-3">{{ selectedPlan.title }}</h4>
                                        <p>We provide end-to-end financial and taxation services designed to support individuals and businesses in maintaining compliance and simplifying financial operations.</p>
                                        <div class="service-item">
                                            <BListGroup tag="ul" class="mb-1">
                                                <div v-for="(service, index) in financeServices" :key="index" class="border-b pb-2">
                                                    <BListGroupItem tag="li" class="listcard">
                                                      <a :href="service.link" target="_blank" rel="noopener">
                                                        <div class="d-flex align-items-center">
                                                            <div class="flex-grow-1">
                                                                <div class="d-flex">
                                                                    <i class="mdi mdi-check-bold align-middle lh-1 me-2"></i>
                                                                    <div class="flex-shrink-0 ms-2">
                                                                        <h6 class="fs-md mb-0">{{ service.title }}</h6>
                                                                        <small class="text-muted">{{ service.description }}</small>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                      </a>
                                                    </BListGroupItem>
                                                </div>
                                            </BListGroup>
                                        </div>
                                    </div>
                                </b-card>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </BContainer>
    </section>
    <section class="section pb-0 hero-section" id="hero">
      <BContainer>
        <BRow class="justify-content-center">
          <BCol lg="8" sm="10">
            <div class="mt-4 mt-sm-5 pt-sm-5 mb-sm-n5 demo-carousel">
              <div class="demo-img-patten-top d-none d-sm-block">
                <img
                  src="@assets/images/landing/img-pattern.png"
                  class="d-block img-fluid"
                  alt="..."
                />
              </div>
              <div class="demo-img-patten-bottom d-none d-sm-block">
                <img
                  src="@assets/images/landing/img-pattern.png"
                  class="d-block img-fluid"
                  alt="..."
                />
              </div>
              <!-- <BCarousel class="carousel slide carousel-fade" ride="carousel" :interval="2000" >
                                <BCarouselSlide active :img-src="Img1" />
                                <BCarouselSlide :img-src="Img2" />
                                <BCarouselSlide :img-src="Img3" />
                            </BCarousel> -->
            </div>
          </BCol>
        </BRow>
      </BContainer>
      <div class="position-absolute start-0 end-0 bottom-0 hero-shape-svg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 1440 120"
        >
          <g mask='url("#SvgjsMask1003")' fill="none">
            <path
              d="M 0,118 C 288,98.6 1152,40.4 1440,21L1440 140L0 140z"
            ></path>
          </g>
        </svg>
      </div>
    </section>

    <div class="pt-5 mt-5">
      <BContainer>
        <BRow>
          <BCol lg="12">
            <div class="text-center mt-5">
              <h5 class="fs-20">
                Trusted
                <span class="text-primary text-decoration-underline">by</span>
                the world's best
              </h5>
              <div class="trusted-client-slider mt-sm-5 mt-4 mb-sm-5 mb-4">
                <swiper
                  class="swiper responsive-swiper rounded gallery-light pb-4"
                  :loop="true"
                  :autoplay="true"
                  :modules="[Autoplay]"
                  :slidesPerView="1"
                  :spaceBetween="10"
                  :breakpoints="{
                    640: { slidesPerView: 2, spaceBetween: 20 },
                    768: { slidesPerView: 3, spaceBetween: 40 },
                    1200: { slidesPerView: 4, spaceBetween: 50 },
                  }"
                >
                  <swiper-slide>
                    <div class="swiper-slide">
                      <div class="client-images">
                        <img
                          src="@assets/images/clients/amazon.svg"
                          alt="client-img"
                          class="mx-auto img-fluid d-block"
                        />
                      </div>
                    </div>
                  </swiper-slide>

                  <swiper-slide>
                    <div class="swiper-slide">
                      <div class="client-images">
                        <img
                          src="@assets/images/clients/walmart.svg"
                          alt="client-img"
                          class="mx-auto img-fluid d-block"
                        />
                      </div>
                    </div>
                  </swiper-slide>

                  <swiper-slide>
                    <div class="swiper-slide">
                      <div class="client-images">
                        <img
                          src="@assets/images/clients/lenovo.svg"
                          alt="client-img"
                          class="mx-auto img-fluid d-block"
                        />
                      </div>
                    </div>
                  </swiper-slide>
                  <swiper-slide>
                    <div class="swiper-slide">
                      <div class="client-images">
                        <img
                          src="@assets/images/clients/paypal.svg"
                          alt="client-img"
                          class="mx-auto img-fluid d-block"
                        />
                      </div>
                    </div>
                  </swiper-slide>
                  <swiper-slide>
                    <div class="swiper-slide">
                      <div class="client-images">
                        <img
                          src="@assets/images/clients/shopify.svg"
                          alt="client-img"
                          class="mx-auto img-fluid d-block"
                        />
                      </div>
                    </div>
                  </swiper-slide>
                  <swiper-slide>
                    <div class="swiper-slide">
                      <div class="client-images">
                        <img
                          src="@assets/images/clients/verizon.svg"
                          alt="client-img"
                          class="mx-auto img-fluid d-block"
                        />
                      </div>
                    </div>
                  </swiper-slide>
                </swiper>
              </div>
            </div>
          </BCol>
        </BRow>
      </BContainer>
    </div>

    <section class="section" id="services">
      <BContainer>
        <BRow class="justify-content-center">
          <BCol lg="8">
            <div class="text-center mb-5">
              <h1 class="mb-3 ff-secondary fw-semibold lh-base">
                Connecting your business with the world
              </h1>
              <p class="text-muted">
                At Varnarc, we empower businesses with cutting-edge digital
                solutions. From marketing to financial insights, we help you
                thrive in the digital landscape.
              </p>
            </div>
          </BCol>
        </BRow>

        <BRow class="g-3">
          <BCol lg="3">
            <div class="d-flex p-3">
              <div class="flex-shrink-0 me-3">
                <div class="avatar-sm icon-effect">
                  <div
                    class="avatar-title bg-transparent text-success rounded-circle"
                  >
                    <i class="ri-slideshow-line fs-36"></i>
                  </div>
                </div>
              </div>
              <div class="flex-grow-1">
                <h5 class="fs-18">Responsive & Clean Design</h5>
                <p class="text-muted my-3 ff-secondary">
                  Responsive design is a graphic user interface (GUI) design
                  approach used to create content.
                </p>
                <div>
                  <BLink to="#" class="fs-13 fw-medium"
                    >Learn More
                    <i class="ri-arrow-right-s-line align-bottom"></i
                  ></BLink>
                </div>
              </div>
            </div>
          </BCol>
          <BCol lg="3">
            <div class="d-flex p-3">
              <div class="flex-shrink-0 me-3">
                <div class="avatar-sm icon-effect">
                  <div
                    class="avatar-title bg-transparent text-success rounded-circle"
                  >
                    <i class="ri-pencil-ruler-2-line fs-36"></i>
                  </div>
                </div>
              </div>
              <div class="flex-grow-1">
                <h5 class="fs-18">Digital Advertising</h5>
                <p class="text-muted my-3 ff-secondary">
                  Boost brand awareness and drive engagement with Varnarc’s
                  targeted digital ad strategies. We optimize campaigns to
                  maximize your ROI.
                </p>
                <div>
                  <BLink to="#" class="fs-13 fw-medium"
                    >Learn More
                    <i class="ri-arrow-right-s-line align-bottom"></i
                  ></BLink>
                </div>
              </div>
            </div>
          </BCol>
          <BCol lg="3">
            <div class="d-flex p-3">
              <div class="flex-shrink-0 me-3">
                <div class="avatar-sm icon-effect">
                  <div
                    class="avatar-title bg-transparent text-success rounded-circle"
                  >
                    <i class="ri-palette-line fs-36"></i>
                  </div>
                </div>
              </div>
              <div class="flex-grow-1">
                <h5 class="fs-18">SEO Audit</h5>
                <p class="text-muted my-3 ff-secondary">
                  Enhance your online presence with Varnarc’s in-depth SEO
                  audit. We identify areas for improvement and implement
                  strategies to increase your search rankings.
                </p>
                <div>
                  <BLink to="#" class="fs-13 fw-medium"
                    >Learn More
                    <i class="ri-arrow-right-s-line align-bottom"></i
                  ></BLink>
                </div>
              </div>
            </div>
          </BCol>
          <BCol lg="3">
            <div class="d-flex p-3">
              <div class="flex-shrink-0 me-3">
                <div class="avatar-sm icon-effect">
                  <div
                    class="avatar-title bg-transparent text-success rounded-circle"
                  >
                    <i class="ri-lightbulb-flash-line fs-36"></i>
                  </div>
                </div>
              </div>
              <div class="flex-grow-1">
                <h5 class="fs-18">Finance Solutions</h5>
                <p class="text-muted my-3 ff-secondary">
                  Simplify financial management with Varnarc’s smart digital
                  solutions. From automated invoicing to insightful analytics,
                  we streamline your business operations.
                </p>
                <div>
                  <BLink to="#" class="fs-13 fw-medium"
                    >Learn More
                    <i class="ri-arrow-right-s-line align-bottom"></i
                  ></BLink>
                </div>
              </div>
            </div>
          </BCol>
        </BRow>
      </BContainer>
    </section>

    <section class="section" id="tools">
      <BContainer>
        <BRow class="justify-content-center">
          <BCol lg="8">
            <div class="text-center mb-5">
              <h1 class="mb-3 ff-secondary fw-semibold lh-base">
                Our Custom Tools
              </h1>
              <h2 class="mb-3 ff-secondary fw-semibold lh-base">
                Increase your productivity with digital tools created for you
              </h2>
              <p class="text-muted">
                At Varnarc, we provide custom-built digital solutions to help
                businesses thrive in the online world. Whether you’re looking to
                enhance your website’s visibility, optimize your marketing
                strategy, or improve your digital presence, our tools are
                tailored to meet your needs.
              </p>
            </div>
          </BCol>
        </BRow>
        <BRow>
          <BCol xxl="3" lg="6">
            <BCard no-body class="card-body">
              <div class="avatar-sm mb-3">
                <div
                  class="avatar-title bg-secondary-subtle text-secondary fs-17 rounded"
                >
                  <i class="ri-file-search-line"></i>
                </div>
              </div>
              <BCardTitle>SEO Audit Tool</BCardTitle>
              <p class="card-text text-muted">
                Analyze and optimize your website for better search engine
                rankings
              </p>
              <BLink href="javascript:void(0);" class="btn btn-secondary"
                >Coming Soon</BLink
              >
            </BCard>
          </BCol>
          <BCol xxl="3" lg="6">
            <BCard no-body class="card-body text-center">
              <div class="avatar-sm mx-auto mb-3">
                <div
                  class="avatar-title bg-secondary-subtle text-secondary fs-17 rounded"
                >
                  <i class="ri-megaphone-line"></i>
                </div>
              </div>
              <BCardTitle>Digital Marketing Suite</BCardTitle>
              <p class="card-text text-muted">
                Track campaigns, manage ads, and engage with your audience
                effectively
              </p>
              <BLink href="javascript:void(0);" class="btn btn-secondary"
                >Coming Soon</BLink
              >
            </BCard>
          </BCol>
          <BCol xxl="3" lg="6">
            <BCard no-body class="card-body text-center">
              <div class="avatar-sm mx-auto mb-3">
                <div
                  class="avatar-title bg-secondary-subtle text-secondary fs-17 rounded"
                >
                  <i class="ri-bar-chart-line"></i>
                </div>
              </div>
              <BCardTitle>Digital Score Improvement</BCardTitle>
              <p class="card-text text-muted">
                Get insights on your online performance and actionable
                recommendations.
              </p>
              <BLink href="javascript:void(0);" class="btn btn-secondary"
                >Coming Soon</BLink
              >
            </BCard>
          </BCol>
          <BCol xxl="3" lg="6">
            <BCard no-body class="card-body text-end">
              <div class="avatar-sm ms-auto mb-3">
                <div
                  class="avatar-title bg-secondary-subtle text-secondary fs-17 rounded"
                >
                  <i class="ri-money-dollar-circle-line"></i>
                </div>
              </div>
              <BCardTitle>Financial & Taxation Tools</BCardTitle>
              <p class="card-text text-muted">
                Manage budgets, track income, and stay tax-compliant with ease —
                for individuals and businesses alike.
              </p>
              <BLink href="javascript:void(0);" class="btn btn-secondary"
                >Coming Soon</BLink
              >
            </BCard>
          </BCol>
        </BRow>
        <BRow class="justify-content-center">
          <BCol lg="8">
            <div class="text-center mb-5">
              <p class="text-muted">
                With <span class="text-secondary fw-semibold">Varnarc</span>,
                you don’t just compete—you lead. Our digital solutions are
                designed to
                <span class="text-tertiary fw-semibold"
                  >increase your efficiency, boost your online reach, and
                  maximize your business growth.</span
                >
              </p>
            </div>
          </BCol>
        </BRow>
      </BContainer>
    </section>

    <section class="py-5 bg-primary position-relative">
      <div class="bg-overlay bg-overlay-pattern opacity-50"></div>
      <BContainer>
        <BRow class="align-items-center gy-4">
          <BCol sm>
            <div>
              <h4 class="text-white mb-0 fw-semibold">
                Build your web App/SaaS with Velzon dashboard
              </h4>
            </div>
          </BCol>
          <BCol sm="auto">
            <div>
              <Link
                href="https://1.envato.market/velzon-admin"
                target="_blank"
                class="btn bg-gradient btn-danger"
                ><i class="ri-shopping-cart-2-line align-middle me-1"></i> Buy
                Now</Link
              >
            </div>
          </BCol>
        </BRow>
      </BContainer>
    </section>

    <section class="section bg-light" id="features">
      <BContainer>
        <BRow class="align-items-center gy-4">
          <BCol lg="6" sm="7" class="mx-auto">
            <div>
              <img
                src="@assets/images/landing/features/img-1.png"
                alt=""
                class="img-fluid mx-auto"
              />
            </div>
          </BCol>
          <BCol lg="6">
            <div class="text-muted">
              <div class="avatar-sm icon-effect mb-4">
                <div
                  class="avatar-title bg-transparent rounded-circle text-success h1"
                >
                  <i class="ri-collage-line fs-36"></i>
                </div>
              </div>
              <h3 class="mb-3 fs-20">
                SEO Audit Tool – Smarter Optimization Starts Here
              </h3>
              <p class="mb-4 ff-secondary fs-16">
                Varnarc’s SEO Audit Tool is your intelligent assistant for
                uncovering hidden SEO issues, optimizing your content, and
                outperforming competitors in search rankings. Designed with
                precision and powered by real-time analysis, it delivers a clear
                roadmap to higher visibility and faster growth.
              </p>
              <p class="mb-4 ff-secondary fs-16">
                From technical audits to keyword insights, Varnarc doesn't just
                check your site — it translates data into action. Whether you're
                a solo creator, a digital agency, or managing enterprise
                websites, our tool adapts to your workflow and helps you stay
                ahead in the search game.
              </p>

              <BRow>
                <BCol sm="5">
                  <div class="vstack gap-2">
                    <div class="d-flex align-items-center">
                      <div class="flex-shrink-0 me-2">
                        <div class="avatar-xs icon-effect">
                          <div
                            class="avatar-title bg-transparent text-success rounded-circle h2"
                          >
                            <i class="ri-check-fill"></i>
                          </div>
                        </div>
                      </div>
                      <div class="flex-grow-1">
                        <h5 class="fs-14 mb-0">Actionable SEO Roadmaps</h5>
                      </div>
                    </div>
                    <div class="d-flex align-items-center">
                      <div class="flex-shrink-0 me-2">
                        <div class="avatar-xs icon-effect">
                          <div
                            class="avatar-title bg-transparent text-success rounded-circle h2"
                          >
                            <i class="ri-check-fill"></i>
                          </div>
                        </div>
                      </div>
                      <div class="flex-grow-1">
                        <h5 class="fs-14 mb-0">Instant Health Checks</h5>
                      </div>
                    </div>
                  </div>
                </BCol>
                <BCol sm="5">
                  <div class="vstack gap-2">
                    <div class="d-flex align-items-center">
                      <div class="flex-shrink-0 me-2">
                        <div class="avatar-xs icon-effect">
                          <div
                            class="avatar-title bg-transparent text-success rounded-circle h2"
                          >
                            <i class="ri-check-fill"></i>
                          </div>
                        </div>
                      </div>
                      <div class="flex-grow-1">
                        <h5 class="fs-14 mb-0">Data You Can Trust</h5>
                      </div>
                    </div>
                    <div class="d-flex align-items-center">
                      <div class="flex-shrink-0 me-2">
                        <div class="avatar-xs icon-effect">
                          <div
                            class="avatar-title bg-transparent text-success rounded-circle h2"
                          >
                            <i class="ri-check-fill"></i>
                          </div>
                        </div>
                      </div>
                      <div class="flex-grow-1">
                        <h5 class="fs-14 mb-0">Built for Growth</h5>
                      </div>
                    </div>
                  </div>
                </BCol>
              </BRow>
            </div>
          </BCol>
        </BRow>
      </BContainer>
    </section>

    <section class="section">
      <BContainer>
        <BRow class="align-items-center gy-4">
          <BCol lg="6" order="2" order-lg="1">
            <div class="text-muted">
              <h5 class="fs-12 text-uppercase text-success">Design</h5>
              <h4 class="mb-3">
                Digital Marketing Suite – AI-Powered Insights for Smarter
                Strategy
              </h4>
              <p class="mb-4 ff-secondary">
                The Digital Marketing Suite is your all-in-one analytics and
                optimization platform, designed to unify performance data from
                social media networks and Google Analytics, and turn them into
                actionable strategies with the help of Prompt AI.
              </p>

              <BRow>
                <BCol sm="5">
                  <div class="vstack gap-2">
                    <div class="d-flex align-items-center">
                      <div class="flex-shrink-0 me-2">
                        <div class="avatar-xs icon-effect">
                          <div
                            class="avatar-title bg-transparent text-success rounded-circle h2"
                          >
                            <i class="ri-check-fill"></i>
                          </div>
                        </div>
                      </div>
                      <div class="flex-grow-1">
                        <h5 class="fs-14 mb-0">Unified Analytics Dashboard</h5>
                      </div>
                    </div>
                    <div class="d-flex align-items-center">
                      <div class="flex-shrink-0 me-2">
                        <div class="avatar-xs icon-effect">
                          <div
                            class="avatar-title bg-transparent text-success rounded-circle h2"
                          >
                            <i class="ri-check-fill"></i>
                          </div>
                        </div>
                      </div>
                      <div class="flex-grow-1">
                        <h5 class="fs-14 mb-0">
                          Prompt AI-Powered Suggestions
                        </h5>
                      </div>
                    </div>
                  </div>
                </BCol>
                <BCol sm="5">
                  <div class="vstack gap-2">
                    <div class="d-flex align-items-center">
                      <div class="flex-shrink-0 me-2">
                        <div class="avatar-xs icon-effect">
                          <div
                            class="avatar-title bg-transparent text-success rounded-circle h2"
                          >
                            <i class="ri-check-fill"></i>
                          </div>
                        </div>
                      </div>
                      <div class="flex-grow-1">
                        <h5 class="fs-14 mb-0">
                          Social Media Performance Tracking
                        </h5>
                      </div>
                    </div>
                    <div class="d-flex align-items-center">
                      <div class="flex-shrink-0 me-2">
                        <div class="avatar-xs icon-effect">
                          <div
                            class="avatar-title bg-transparent text-success rounded-circle h2"
                          >
                            <i class="ri-check-fill"></i>
                          </div>
                        </div>
                      </div>
                      <div class="flex-grow-1">
                        <h5 class="fs-14 mb-0">
                          Smart Campaign Recommendations
                        </h5>
                      </div>
                    </div>
                  </div>
                </BCol>
              </BRow>

              <div class="mt-4">
                <Link href="/" class="btn btn-primary"
                  >Learn More
                  <i class="ri-arrow-right-line align-middle ms-1"></i
                ></Link>
              </div>
            </div>
          </BCol>
          <BCol lg="6" sm="7" cols="10" order="1" order-lg="2" class="ms-auto">
            <div>
              <img
                src="@assets/images/landing/features/img-2.png"
                alt=""
                class="img-fluid"
              />
            </div>
          </BCol>
        </BRow>

        <BRow class="align-items-center mt-5 pt-lg-5 gy-4">
          <BCol lg="6" sm="7" cols="10" class="mx-auto">
            <div>
              <img
                src="@assets/images/landing/features/img-3.png"
                alt=""
                class="img-fluid"
              />
            </div>
          </BCol>
          <BCol lg="6">
            <div class="text-muted ps-lg-5">
              <h5 class="fs-12 text-uppercase text-success">social</h5>
              <h4 class="mb-3">Digital Score Improvement</h4>
              <p class="mb-4">
                Track your overall digital performance across SEO, social media,
                website analytics, and engagement — all boiled down into a
                single unified score.
              </p>

              <div class="vstack gap-2">
                <div class="d-flex align-items-center">
                  <div class="flex-shrink-0 me-2">
                    <div class="avatar-xs icon-effect">
                      <div
                        class="avatar-title bg-transparent text-success rounded-circle h2"
                      >
                        <i class="ri-check-fill"></i>
                      </div>
                    </div>
                  </div>
                  <div class="flex-grow-1">
                    <p class="mb-0">AI-Powered Scoring Logic</p>
                  </div>
                </div>
                <div class="d-flex align-items-center">
                  <div class="flex-shrink-0 me-2">
                    <div class="avatar-xs icon-effect">
                      <div
                        class="avatar-title bg-transparent text-success rounded-circle h2"
                      >
                        <i class="ri-check-fill"></i>
                      </div>
                    </div>
                  </div>
                  <div class="flex-grow-1">
                    <p class="mb-0">Score Breakdown</p>
                  </div>
                </div>
                <div class="d-flex align-items-center">
                  <div class="flex-shrink-0 me-2">
                    <div class="avatar-xs icon-effect">
                      <div
                        class="avatar-title bg-transparent text-success rounded-circle h2"
                      >
                        <i class="ri-check-fill"></i>
                      </div>
                    </div>
                  </div>
                  <div class="flex-grow-1">
                    <p class="mb-0">Improvement Suggestions</p>
                  </div>
                </div>
                <div class="d-flex align-items-center">
                  <div class="flex-shrink-0 me-2">
                    <div class="avatar-xs icon-effect">
                      <div
                        class="avatar-title bg-transparent text-success rounded-circle h2"
                      >
                        <i class="ri-check-fill"></i>
                      </div>
                    </div>
                  </div>
                  <div class="flex-grow-1">
                    <p class="mb-0">Auto-Recalculation</p>
                  </div>
                </div>
              </div>
            </div>
          </BCol>
        </BRow>
      </BContainer>
    </section>

    <section class="section bg-light" id="plans">
      <div class="bg-overlay bg-overlay-pattern"></div>
      <BContainer>
        <BRow class="justify-content-center">
          <BCol lg="12">
            <div class="text-center mb-5">
              <h3 class="mb-3 fw-semibold">
                Choose the plan that's right for you
              </h3>
              <p class="text-muted mb-4">
                Simple pricing. No hidden fees. Advanced features for you
                business.
              </p>
              <!-- <h1 class="display-2 coming-soon-text">Coming Soon</h1> -->
              <BCard no-body style="background: none; box-shadow: none">
                <BCardBody>
                  <BTabs nav-class="mb-3" justified>
                    <BTab title="SEO Audit Tool" active class="mt-5">
                      <div
                        class="d-flex justify-content-center align-items-center mb-5"
                      >
                        <div><h5 class="fs-14 mb-0">Month</h5></div>
                        <div class="form-check form-switch fs-20 ms-3">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="plan-switch"
                          />
                          <label
                            class="form-check-label"
                            for="plan-switch"
                          ></label>
                        </div>
                        <div>
                          <h5 class="fs-14 mb-0">
                            Annual
                            <BBadge
                              variant="success-subtle"
                              class="bg-success-subtle text-success"
                              >Save 20%</BBadge
                            >
                          </h5>
                        </div>
                      </div>
                      <div
                        class="d-flex flex-wrap gap-4 justify-content-center"
                      >
                        <!-- Plan Card -->
                        <div class="plan-card d-flex flex-column">
                          <div class="plan-card-body">
                            <div class="plan-header">
                              <div>
                                <h5 class="mb-1 fw-semibold">
                                  Free Basic Audit
                                </h5>
                                <p class="text-muted mb-0">For Startup</p>
                              </div>
                              <div class="avatar-sm">
                                <div
                                  class="avatar-title bg-light rounded-circle text-primary"
                                >
                                  <i class="ri-book-mark-line fs-20"></i>
                                </div>
                              </div>
                            </div>
                            <ul class="plan-feature-list">
                              <li>
                                <i
                                  class="ri-checkbox-circle-fill text-primary me-2"
                                ></i
                                >Website health score
                              </li>
                              <li>
                                <i
                                  class="ri-checkbox-circle-fill text-primary me-2"
                                ></i
                                >Top 5 critical SEO issues
                              </li>
                              <li>
                                <i
                                  class="ri-checkbox-circle-fill text-primary me-2"
                                ></i
                                >Mobile responsiveness check
                              </li>
                              <li>
                                <i
                                  class="ri-checkbox-circle-fill text-primary me-2"
                                ></i
                                >Basic keyword performance
                              </li>
                              <li>
                                <i
                                  class="ri-checkbox-circle-fill text-primary me-2"
                                ></i
                                >Simple PDF report download
                              </li>
                            </ul>
                            <div class="mt-3">
                              <BLink
                                href="javascript:void(0);"
                                class="btn btn-soft-success w-100"
                                >Get Started</BLink
                              >
                            </div>
                          </div>
                        </div>

                        <!-- Standard Plan -->
                        <div class="plan-card d-flex flex-column">
                          <div class="plan-card-body">
                            <div class="plan-header">
                              <div>
                                <h5 class="mb-1 fw-semibold">Standard Plan</h5>
                                <p class="text-muted mb-0">For Startup</p>
                              </div>
                              <div class="avatar-sm">
                                <div
                                  class="avatar-title bg-light rounded-circle text-primary"
                                >
                                  <i class="ri-briefcase-line fs-20"></i>
                                </div>
                              </div>
                            </div>
                            <div class="text-center my-3">
                              <h1 class="mb-0">
                                <sup><small>$</small></sup
                                >19<span class="fs-14 text-muted">/Month</span>
                              </h1>
                            </div>
                            <ul class="plan-feature-list">
                              <li>
                                <i
                                  class="ri-checkbox-circle-fill text-primary me-2"
                                ></i
                                >Complete on-page SEO audit
                              </li>
                              <li>
                                <i
                                  class="ri-checkbox-circle-fill text-primary me-2"
                                ></i
                                >Keyword analysis (up to 50 keywords)
                              </li>
                              <li>
                                <i
                                  class="ri-checkbox-circle-fill text-primary me-2"
                                ></i
                                >Site speed and Core Web Vitals check
                              </li>
                              <li>
                                <i
                                  class="ri-checkbox-circle-fill text-primary me-2"
                                ></i
                                >Mobile & desktop SEO comparison
                              </li>
                              <li>
                                <i
                                  class="ri-checkbox-circle-fill text-primary me-2"
                                ></i
                                >Competitor analysis (1 site)
                              </li>
                              <li>
                                <i
                                  class="ri-checkbox-circle-fill text-primary me-2"
                                ></i
                                >Actionable checklist with priority rating
                              </li>
                            </ul>
                            <div class="mt-3">
                              <BLink
                                href="javascript:void(0);"
                                class="btn btn-soft-success w-100"
                                >Get Started</BLink
                              >
                            </div>
                          </div>
                        </div>

                        <!-- Pro Plan -->
                        <div
                          class="plan-card d-flex flex-column position-relative"
                        >
                          <!-- Popular Ribbon -->
                          <div
                            class="position-absolute top-0 end-0 bg-danger text-white px-2 py-1 small rounded-bottom"
                          >
                            Popular
                          </div>
                          <div class="plan-card-body">
                            <div class="plan-header">
                              <div>
                                <h5 class="mb-1 fw-semibold">Pro Plan</h5>
                                <p class="text-muted mb-0">
                                  Professional Plans
                                </p>
                              </div>
                              <div class="avatar-sm">
                                <div
                                  class="avatar-title bg-light rounded-circle text-primary"
                                >
                                  <i class="ri-award-line fs-20"></i>
                                </div>
                              </div>
                            </div>
                            <div class="text-center my-3">
                              <h1 class="mb-0">
                                <sup><small>$</small></sup
                                >29<span class="fs-14 text-muted">/Month</span>
                              </h1>
                            </div>
                            <ul class="plan-feature-list">
                              <li>
                                <i
                                  class="ri-checkbox-circle-fill text-primary me-2"
                                ></i
                                >Backlink audit & domain authority check
                              </li>
                              <li>
                                <i
                                  class="ri-checkbox-circle-fill text-primary me-2"
                                ></i
                                >Technical SEO checks (crawl errors, redirects,
                                robots.txt, sitemap)
                              </li>
                              <li>
                                <i
                                  class="ri-checkbox-circle-fill text-primary me-2"
                                ></i
                                >SEO score tracker with historical progress
                              </li>
                              <li>
                                <i
                                  class="ri-checkbox-circle-fill text-primary me-2"
                                ></i
                                >Competitor analysis (up to 3 sites)
                              </li>
                              <li>
                                <i
                                  class="ri-checkbox-circle-fill text-primary me-2"
                                ></i
                                >Exportable reports with branding
                              </li>
                            </ul>
                            <div class="mt-3">
                              <BLink
                                href="javascript:void(0);"
                                class="btn btn-soft-success w-100"
                                >Get Started</BLink
                              >
                            </div>
                          </div>
                        </div>
                      </div>
                    </BTab>
                    <BTab title="Digital Marketing Suite">
                      <div
                        class="d-flex justify-content-center align-items-center mb-5"
                      >
                        <div><h5 class="fs-14 mb-0">Month</h5></div>
                        <div class="form-check form-switch fs-20 ms-3">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="plan-switch"
                          />
                          <label
                            class="form-check-label"
                            for="plan-switch"
                          ></label>
                        </div>
                        <div>
                          <h5 class="fs-14 mb-0">
                            Annual
                            <BBadge
                              variant="success-subtle"
                              class="bg-success-subtle text-success"
                              >Save 20%</BBadge
                            >
                          </h5>
                        </div>
                      </div>
                      <div
                        class="d-flex flex-wrap gap-4 justify-content-center"
                      >
                        <!-- Plan Card -->
                        <div class="plan-card d-flex flex-column">
                          <div class="plan-card-body">
                            <div class="plan-header">
                              <div>
                                <h5 class="mb-1 fw-semibold">
                                  Starter Plan (Free Forever)
                                </h5>
                                <p class="text-muted mb-0">For Startup</p>
                              </div>
                              <div class="avatar-sm">
                                <div
                                  class="avatar-title bg-light rounded-circle text-primary"
                                >
                                  <i class="ri-book-mark-line fs-20"></i>
                                </div>
                              </div>
                            </div>
                            <ul class="plan-feature-list">
                              <li>
                                <i
                                  class="ri-checkbox-circle-fill text-primary me-2"
                                ></i
                                >Connect up to 1 social media account
                              </li>
                              <li>
                                <i
                                  class="ri-checkbox-circle-fill text-primary me-2"
                                ></i
                                >Weekly performance summary (basic)
                              </li>
                              <li>
                                <i
                                  class="ri-checkbox-circle-fill text-primary me-2"
                                ></i
                                >Limited Google Analytics insights
                              </li>
                              <li>
                                <i
                                  class="ri-checkbox-circle-fill text-primary me-2"
                                ></i
                                >Prompt AI tips (up to 3 per week)
                              </li>
                              <li>
                                <i
                                  class="ri-checkbox-circle-fill text-primary me-2"
                                ></i
                                >Basic dashboard access
                              </li>
                            </ul>
                            <div class="mt-3">
                              <BLink
                                href="javascript:void(0);"
                                class="btn btn-soft-success w-100"
                                >Get Started</BLink
                              >
                            </div>
                          </div>
                        </div>

                        <!-- Standard Plan -->
                        <div class="plan-card d-flex flex-column">
                          <div class="plan-card-body">
                            <div class="plan-header">
                              <div>
                                <h5 class="mb-1 fw-semibold">Standard Plan</h5>
                                <p class="text-muted mb-0">For Startup</p>
                              </div>
                              <div class="avatar-sm">
                                <div
                                  class="avatar-title bg-light rounded-circle text-primary"
                                >
                                  <i class="ri-briefcase-line fs-20"></i>
                                </div>
                              </div>
                            </div>
                            <div class="text-center my-3">
                              <h1 class="mb-0">
                                <sup><small>$</small></sup
                                >19<span class="fs-14 text-muted">/Month</span>
                              </h1>
                            </div>
                            <ul class="plan-feature-list">
                              <li>
                                <i
                                  class="ri-checkbox-circle-fill text-primary me-2"
                                ></i
                                >Connect up to 5 social profiles
                              </li>
                              <li>
                                <i
                                  class="ri-checkbox-circle-fill text-primary me-2"
                                ></i
                                >Full Google Analytics + Social integration
                              </li>
                              <li>
                                <i
                                  class="ri-checkbox-circle-fill text-primary me-2"
                                ></i
                                >Daily performance insights
                              </li>
                              <li>
                                <i
                                  class="ri-checkbox-circle-fill text-primary me-2"
                                ></i
                                >Prompt AI marketing tips & post suggestions
                              </li>
                              <li>
                                <i
                                  class="ri-checkbox-circle-fill text-primary me-2"
                                ></i
                                >Campaign performance comparison
                              </li>
                              <li>
                                <i
                                  class="ri-checkbox-circle-fill text-primary me-2"
                                ></i
                                >SEO score monitoring
                              </li>
                            </ul>
                            <div class="mt-3">
                              <BLink
                                href="javascript:void(0);"
                                class="btn btn-soft-success w-100"
                                >Get Started</BLink
                              >
                            </div>
                          </div>
                        </div>

                        <!-- Pro Plan -->
                        <div
                          class="plan-card d-flex flex-column position-relative"
                        >
                          <!-- Popular Ribbon -->
                          <div
                            class="position-absolute top-0 end-0 bg-danger text-white px-2 py-1 small rounded-bottom"
                          >
                            Popular
                          </div>
                          <div class="plan-card-body">
                            <div class="plan-header">
                              <div>
                                <h5 class="mb-1 fw-semibold">Pro Plan</h5>
                                <p class="text-muted mb-0">
                                  Enterprise Businesses
                                </p>
                              </div>
                              <div class="avatar-sm">
                                <div
                                  class="avatar-title bg-light rounded-circle text-primary"
                                >
                                  <i class="ri-award-line fs-20"></i>
                                </div>
                              </div>
                            </div>
                            <div class="text-center my-3">
                              <h1 class="mb-0">
                                <sup><small>$</small></sup
                                >29<span class="fs-14 text-muted">/Month</span>
                              </h1>
                            </div>
                            <ul class="plan-feature-list">
                              <li>
                                <i
                                  class="ri-checkbox-circle-fill text-primary me-2"
                                ></i
                                >Unlimited social profiles
                              </li>
                              <li>
                                <i
                                  class="ri-checkbox-circle-fill text-primary me-2"
                                ></i
                                >Competitor performance analysis
                              </li>
                              <li>
                                <i
                                  class="ri-checkbox-circle-fill text-primary me-2"
                                ></i
                                >Ad campaign ROI tracking
                              </li>
                              <li>
                                <i
                                  class="ri-checkbox-circle-fill text-primary me-2"
                                ></i
                                >AI-driven content planner & calendar
                              </li>
                              <li>
                                <i
                                  class="ri-checkbox-circle-fill text-primary me-2"
                                ></i
                                >Downloadable branded reports
                              </li>
                              <li>
                                <i
                                  class="ri-checkbox-circle-fill text-primary me-2"
                                ></i
                                >Email + WhatsApp support
                              </li>
                            </ul>
                            <div class="mt-3">
                              <BLink
                                href="javascript:void(0);"
                                class="btn btn-soft-success w-100"
                                >Get Started</BLink
                              >
                            </div>
                          </div>
                        </div>
                      </div>
                    </BTab>
                    <BTab title="Financial & Taxation Tools">
                      <div
                        class="d-flex flex-wrap gap-4 justify-content-center"
                      >
                        <!-- Plan Card -->
                        <div class="plan-card d-flex flex-column">
                          <div class="plan-card-body">
                            <div class="plan-header">
                              <div>
                                <h5 class="mb-1 fw-semibold">Basic Plan</h5>
                                <p class="text-muted mb-0">
                                  Salaried Individuals
                                </p>
                              </div>
                              <div class="avatar-sm">
                                <div
                                  class="avatar-title bg-light rounded-circle text-primary"
                                >
                                  <i class="ri-book-mark-line fs-20"></i>
                                </div>
                              </div>
                            </div>
                            <ul class="plan-feature-list">
                              <li>
                                <i
                                  class="ri-checkbox-circle-fill text-primary me-2"
                                ></i
                                >ITR-1 filing
                              </li>
                              <li>
                                <i
                                  class="ri-checkbox-circle-fill text-primary me-2"
                                ></i
                                >Salary income + savings interest
                              </li>
                              <li>
                                <i
                                  class="ri-checkbox-circle-fill text-primary me-2"
                                ></i
                                >Tax computation summary
                              </li>
                              <li>
                                <i
                                  class="ri-checkbox-circle-fill text-primary me-2"
                                ></i
                                >E-verification assistance
                              </li>
                            </ul>
                            <div class="mt-3">
                              <BLink
                                href="javascript:void(0);"
                                class="btn btn-soft-success w-100"
                                >Get Started</BLink
                              >
                            </div>
                          </div>
                        </div>

                        <!-- Standard Plan -->
                        <div class="plan-card d-flex flex-column">
                          <div class="plan-card-body">
                            <div class="plan-header">
                              <div>
                                <h5 class="mb-1 fw-semibold">Standard Plan</h5>
                                <p class="text-muted mb-0">
                                  Freelancers / Multiple Incomes
                                </p>
                              </div>
                              <div class="avatar-sm">
                                <div
                                  class="avatar-title bg-light rounded-circle text-primary"
                                >
                                  <i class="ri-briefcase-line fs-20"></i>
                                </div>
                              </div>
                            </div>
                            <div class="text-center my-3">
                              <h1 class="mb-0">
                                <sup><small>$</small></sup
                                >19<span class="fs-14 text-muted">/Month</span>
                              </h1>
                            </div>
                            <ul class="plan-feature-list">
                              <li>
                                <i
                                  class="ri-checkbox-circle-fill text-primary me-2"
                                ></i
                                ><span class="text">ITR-3 or ITR-4 filing</span>
                              </li>
                              <li>
                                <i
                                  class="ri-checkbox-circle-fill text-primary me-2"
                                ></i
                                ><span class="text"
                                  >Salary, business/professional income</span
                                >
                              </li>
                              <li>
                                <i
                                  class="ri-checkbox-circle-fill text-primary me-2"
                                ></i
                                ><span class="text"
                                  >House property + bank interest</span
                                >
                              </li>
                              <li>
                                <i
                                  class="ri-checkbox-circle-fill text-primary me-2"
                                ></i
                                ><span class="text"
                                  >80C deductions + expense tracking</span
                                >
                              </li>
                              <li>
                                <i
                                  class="ri-checkbox-circle-fill text-primary me-2"
                                ></i
                                ><span class="text"
                                  >Tax saving recommendations</span
                                >
                              </li>
                            </ul>
                            <div class="mt-3">
                              <BLink
                                href="javascript:void(0);"
                                class="btn btn-soft-success w-100"
                                >Get Started</BLink
                              >
                            </div>
                          </div>
                        </div>

                        <!-- Pro Plan -->
                        <div
                          class="plan-card d-flex flex-column position-relative"
                        >
                          <!-- Popular Ribbon -->
                          <div
                            class="position-absolute top-0 end-0 bg-danger text-white px-2 py-1 small rounded-bottom"
                          >
                            Popular
                          </div>
                          <div class="plan-card-body">
                            <div class="plan-header">
                              <div>
                                <h5 class="mb-1 fw-semibold">Advanced Plan</h5>
                                <p class="text-muted mb-0">
                                  Capital Gains & Investments
                                </p>
                              </div>
                              <div class="avatar-sm">
                                <div
                                  class="avatar-title bg-light rounded-circle text-primary"
                                >
                                  <i class="ri-award-line fs-20"></i>
                                </div>
                              </div>
                            </div>
                            <div class="text-center my-3">
                              <h1 class="mb-0">
                                <sup><small>$</small></sup
                                >29<span class="fs-14 text-muted">/Month</span>
                              </h1>
                            </div>
                            <ul class="plan-feature-list">
                              <li>
                                <i
                                  class="ri-checkbox-circle-fill text-primary me-2"
                                ></i
                                >ITR-2 or ITR-3 filing
                              </li>
                              <li>
                                <i
                                  class="ri-checkbox-circle-fill text-primary me-2"
                                ></i
                                >Capital gains from stocks, mutual funds, crypto
                              </li>
                              <li>
                                <i
                                  class="ri-checkbox-circle-fill text-primary me-2"
                                ></i
                                >Dividend income, foreign assets (if any)
                              </li>
                              <li>
                                <i
                                  class="ri-checkbox-circle-fill text-primary me-2"
                                ></i
                                >Loss carry-forward support
                              </li>
                              <li>
                                <i
                                  class="ri-checkbox-circle-fill text-primary me-2"
                                ></i
                                >Tax-saving strategies with reports
                              </li>
                            </ul>
                            <div class="mt-3">
                              <BLink
                                href="javascript:void(0);"
                                class="btn btn-soft-success w-100"
                                >Get Started</BLink
                              >
                            </div>
                          </div>
                        </div>
                      </div>
                    </BTab>
                  </BTabs>
                </BCardBody>
              </BCard>
            </div>
          </BCol>
        </BRow>
      </BContainer>
    </section>

    <section class="section">
      <BContainer>
        <BRow class="justify-content-center">
          <BCol lg="8">
            <div class="text-center mb-5">
              <h3 class="mb-3 fw-semibold">Frequently Asked Questions</h3>
              <p class="text-muted mb-4 ff-secondary">
                If you can not find answer to your question in our FAQ, you can
                always contact us or email us. We will answer you shortly!
              </p>

              <div class="hstack gap-2 justify-content-center">
                <BButton type="button" pill variant="primary" class="btn-label"
                  ><i
                    class="ri-mail-line label-icon align-middle rounded-pill fs-16 me-2"
                  ></i>
                  Email Us</BButton
                >
                <BButton type="button" pill variant="info" class="btn-label"
                  ><i
                    class="ri-twitter-line label-icon align-middle rounded-pill fs-16 me-2"
                  ></i>
                  Send Us Tweet</BButton
                >
              </div>
            </div>
          </BCol>
        </BRow>

        <BRow class="g-lg-5 g-4">
          <BCol lg="6">
            <div class="d-flex align-items-center mb-2">
              <div class="flex-shrink-0 me-1">
                <i
                  class="ri-question-line fs-24 align-middle text-success me-1"
                ></i>
              </div>
              <div class="flex-grow-1">
                <h5 class="mb-0 fw-semibold">General Questions</h5>
              </div>
            </div>
            <BAccordion
              class="custom-accordionwithicon custom-accordion-border accordion-border-box"
              id="genques-accordion"
            >
              <BAccordionItem
                title="What kind of personal information do you collect?"
              >
                <div class="ff-secondary">
                  We collect basic user information such as your name, email
                  address, phone number, and account credentials. Depending on
                  the services you use, we may also collect location data, IP
                  address, and device information for security and
                  personalization purposes.
                </div>
              </BAccordionItem>
              <BAccordionItem
                title="Do you collect or store my financial information?"
              >
                <div class="ff-secondary">
                  Yes, if you make purchases or subscribe to paid features, we
                  may collect your payment details (e.g., credit/debit card
                  number or bank information) through a secure third-party
                  payment processor. We do not store full card details on our
                  servers.
                </div>
              </BAccordionItem>
              <BAccordionItem title="How is my information secured?">
                <div class="ff-secondary">
                  We use industry-standard security measures including SSL/TLS
                  encryption, firewalls, and secure authentication to protect
                  your data. Financial transactions are handled via PCI-DSS
                  compliant payment gateways.
                </div>
              </BAccordionItem>
              <BAccordionItem
                title="Will my personal or financial information be shared with third parties?"
              >
                <div class="ff-secondary">
                  No, we do not sell or rent your personal or financial
                  information. We only share data with trusted partners or
                  services necessary to operate our platform (e.g., payment
                  processors), and always under strict confidentiality
                  agreements.
                </div>
              </BAccordionItem>
              <BAccordionItem
                title="How can I update or delete my personal information?"
              >
                <div class="ff-secondary">
                  You can update your personal details anytime through your
                  account settings. To request deletion of your account and
                  associated data, please contact our support team.
                </div>
              </BAccordionItem>
            </BAccordion>
          </BCol>
          <BCol lg="6">
            <div class="d-flex align-items-center mb-2">
              <div class="flex-shrink-0 me-1">
                <i
                  class="ri-shield-keyhole-line fs-24 align-middle text-success me-1"
                ></i>
              </div>
              <div class="flex-grow-1">
                <h5 class="mb-0 fw-semibold">Privacy &amp; Security</h5>
              </div>
            </div>

            <BAccordion
              class="custom-accordionwithicon custom-accordion-border accordion-border-box"
              id="privacy-accordion"
            >
              <BAccordionItem
                title="What steps do you take in case of a data breach?"
              >
                <div class="ff-secondary">
                  In the event of a data breach, we will immediately investigate
                  the issue, notify affected users, and take all necessary steps
                  to contain the incident and prevent future occurrences.
                </div>
              </BAccordionItem>
              <BAccordionItem title="Can I opt out of data collection?">
                <div class="ff-secondary">
                  Yes, you can control what data you share in your account
                  settings. However, please note that opting out of certain data
                  collection may affect the functionality of our services.
                </div>
              </BAccordionItem>
              <BAccordionItem
                title="Is my financial data shared with marketing or analytics platforms?"
              >
                <div class="ff-secondary">
                  Absolutely not. We do not share sensitive financial data with
                  any marketing or analytics services.
                </div>
              </BAccordionItem>
              <BAccordionItem
                title="Do you use cookies or tracking technologies?"
              >
                <div class="ff-secondary">
                  Yes, we use cookies to enhance your browsing experience and
                  improve our services. You can manage cookie preferences in
                  your browser settings.
                </div>
              </BAccordionItem>
              <BAccordionItem
                title="Who can I contact if I have privacy concerns?"
              >
                <div class="ff-secondary">
                  If you have any questions or concerns about your privacy or
                  data security, please contact our Privacy Officer at
                  [privacy@varnarc.com].
                </div>
              </BAccordionItem>
            </BAccordion>
          </BCol>
        </BRow>
      </BContainer>
    </section>

    <section class="section bg-primary" id="reviews">
      <div class="bg-overlay bg-overlay-pattern"></div>
      <BContainer>
        <BRow class="justify-content-center">
          <BCol lg="10">
            <div class="text-center">
              <div>
                <i class="ri-double-quotes-l text-success display-3"></i>
              </div>
              <h4 class="text-white mb-5">
                <span class="text-success">19k</span>+ Satisfied clients
              </h4>

              <div class="client-review-swiper rounded">
                <swiper
                  class="navigation-swiper rounded"
                  :loop="true"
                  :modules="[Autoplay, Navigation, Pagination]"
                  :autoplay="{ delay: 2500, disableOnInteraction: false }"
                  :navigation="{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                  }"
                  :pagination="{ clickable: true, el: '.swiper-pagination' }"
                >
                  <swiper-slide>
                    <div class="swiper-slide">
                      <BRow class="justify-content-center">
                        <BCol cols="10">
                          <div class="text-white-50">
                            <p class="fs-20 ff-secondary mb-4">
                              " I am givng 5 stars. Theme is great and everyone
                              one stuff everything in theme. Future request
                              should not affect current state of theme. "
                            </p>

                            <div>
                              <h5 class="text-white">gregoriusus</h5>
                              <p>- Skote User</p>
                            </div>
                          </div>
                        </BCol>
                      </BRow>
                    </div>
                  </swiper-slide>

                  <swiper-slide>
                    <div class="swiper-slide">
                      <BRow class="justify-content-center">
                        <BCol cols="10">
                          <div class="text-white-50">
                            <p class="fs-20 ff-secondary mb-4">
                              " Awesome support. Had few issues while setting up
                              because of my device, the support team helped me
                              fix them up in a day. Everything looks clean and
                              good. Highly recommended! "
                            </p>

                            <div>
                              <h5 class="text-white">GeekyGreenOwl</h5>
                              <p>- Skote User</p>
                            </div>
                          </div>
                        </BCol>
                      </BRow>
                    </div>
                  </swiper-slide>

                  <swiper-slide>
                    <div class="swiper-slide">
                      <BRow class="justify-content-center">
                        <BCol cols="10">
                          <div class="text-white-50">
                            <p class="fs-20 ff-secondary mb-4">
                              " Amazing template, Redux store and components is
                              nicely designed. It's a great start point for an
                              admin based project. Clean Code and good
                              documentation. Template is completely in React and
                              absolutely no usage of jQuery "
                            </p>

                            <div>
                              <h5 class="text-white">sreeks456</h5>
                              <p>- Veltrix User</p>
                            </div>
                          </div>
                        </BCol>
                      </BRow>
                    </div>
                  </swiper-slide>
                  <div class="swiper-button-next bg-white rounded-circle"></div>
                  <div class="swiper-button-prev bg-white rounded-circle"></div>
                  <div class="swiper-pagination position-relative mt-2"></div>
                </swiper>
              </div>
            </div>
          </BCol>
        </BRow>
      </BContainer>
    </section>

    <section class="py-5 position-relative">
      <BContainer>
        <BRow class="text-center gy-4">
          <BCol lg="3" cols="6">
            <div>
              <h2 class="mb-2">
                <count-to :startVal="0" :endVal="100" :duration="5000"
                  >0</count-to
                >+
              </h2>
              <div class="text-muted">Projects Completed</div>
            </div>
          </BCol>

          <BCol lg="3" cols="6">
            <div>
              <h2 class="mb-2">
                <count-to :startVal="0" :endVal="24" :duration="5000"
                  >0</count-to
                >
              </h2>
              <div class="text-muted">Win Awards</div>
            </div>
          </BCol>

          <BCol lg="3" cols="6">
            <div>
              <h2 class="mb-2">
                <count-to :startVal="0" :endVal="20" :duration="5000"
                  >0</count-to
                >k
              </h2>
              <div class="text-muted">Satisfied Clients</div>
            </div>
          </BCol>
          <BCol lg="3" cols="6">
            <div>
              <h2 class="mb-2">
                <count-to :startVal="0" :endVal="50" :duration="5000"
                  >0</count-to
                >
              </h2>
              <div class="text-muted">Employees</div>
            </div>
          </BCol>
        </BRow>
      </BContainer>
    </section>

    <section class="section bg-light">
      <BContainer>
        <BRow class="justify-content-center">
          <BCol lg="8">
            <div class="text-center mb-5">
              <h3 class="mb-3 fw-semibold">Our Work Process</h3>
              <p class="text-muted mb-4 ff-secondary">
                In an ideal world this website wouldn’t exist, a client would
                acknowledge the importance of having web copy before the Proin
                vitae ipsum vel ex finibus semper design starts.
              </p>
            </div>
          </BCol>
        </BRow>

        <BRow class="text-center">
          <BCol lg="4">
            <div class="process-card mt-4">
              <div class="process-arrow-img d-none d-lg-block">
                <img
                  src="@assets/images/landing/process-arrow-img.png"
                  alt=""
                  class="img-fluid"
                />
              </div>
              <div class="avatar-sm icon-effect mx-auto mb-4">
                <div
                  class="avatar-title bg-transparent text-success rounded-circle h1"
                >
                  <i class="ri-quill-pen-line"></i>
                </div>
              </div>

              <h5>Tell us what you need</h5>
              <p class="text-muted ff-secondary">
                The profession and the employer and your desire to make your
                mark.
              </p>
            </div>
          </BCol>
          <BCol lg="4">
            <div class="process-card mt-4">
              <div class="process-arrow-img d-none d-lg-block">
                <img
                  src="@assets/images/landing/process-arrow-img.png"
                  alt=""
                  class="img-fluid"
                />
              </div>
              <div class="avatar-sm icon-effect mx-auto mb-4">
                <div
                  class="avatar-title bg-transparent text-success rounded-circle h1"
                >
                  <i class="ri-user-follow-line"></i>
                </div>
              </div>

              <h5>Get free quotes</h5>
              <p class="text-muted ff-secondary">
                The most important aspect of beauty was, therefore, an inherent
                part.
              </p>
            </div>
          </BCol>
          <BCol lg="4">
            <div class="process-card mt-4">
              <div class="avatar-sm icon-effect mx-auto mb-4">
                <div
                  class="avatar-title bg-transparent text-success rounded-circle h1"
                >
                  <i class="ri-book-mark-line"></i>
                </div>
              </div>

              <h5>Deliver high quality product</h5>
              <p class="text-muted ff-secondary">
                We quickly learn to fear and thus automatically avoid
                potentially.
              </p>
            </div>
          </BCol>
        </BRow>
      </BContainer>
    </section>

    <!-- <section class="section bg-light" id="team">
            <BContainer>
                <BRow class="justify-content-center">
                    <BCol lg="8">
                        <div class="text-center mb-5">
                            <h3 class="mb-3 fw-semibold">Our <span class="text-danger">Team</span></h3>
                            <p class="text-muted mb-4 ff-secondary">To achieve this, it would be necessary to have
                                uniform grammar,
                                pronunciation and more common words. If several languages coalesce the grammar.</p>
                        </div>
                    </BCol>
                </BRow>
                <BRow>
                    <BCol lg="3" sm="6">
                        <BCard n-body>
                            <BCardBody class="text-center p-4">
                                <div class="avatar-xl mx-auto mb-4 position-relative">
                                    <img src="@assets/images/users/avatar-2.jpg" alt="" class="img-fluid rounded-circle">
                                    <Link href="/mailbox"
                                        class="btn btn-success btn-sm position-absolute bottom-0 end-0 rounded-circle avatar-xs">
                                        <div class="avatar-title bg-transparent">
                                            <i class="ri-mail-fill align-bottom"></i>
                                        </div>
                                    </Link>
                                </div>
                                <h5 class="mb-1">
                                    <Link href="/pages/profile" class="text-body">Nancy Martino</Link>
                                </h5>
                                <p class="text-muted mb-0 ff-secondary">Team Leader</p>
                            </BCardBody>
                        </BCard>
                    </BCol>
                    <BCol lg="3" sm="6">
                        <BCard n-body>
                            <BCardBody class="text-center p-4">
                                <div class="avatar-xl mx-auto mb-4 position-relative">
                                    <img src="@assets/images/users/avatar-10.jpg" alt="" class="img-fluid rounded-circle">
                                    <Link href="/mailbox"
                                        class="btn btn-success btn-sm position-absolute bottom-0 end-0 rounded-circle avatar-xs">
                                        <div class="avatar-title bg-transparent">
                                            <i class="ri-mail-fill align-bottom"></i>
                                        </div>
                                    </Link>
                                </div>
                                <h5 class="mb-1">
                                    <Link href="/pages/profile" class="text-body">Henry Baird</Link>
                                </h5>
                                <p class="text-muted mb-0 ff-secondary">Full Stack Developer</p>
                            </BCardBody>
                        </BCard>
                    </BCol>
                    <BCol lg="3" sm="6">
                        <BCard n-body>
                            <BCardBody class="text-center p-4">
                                <div class="avatar-xl mx-auto mb-4 position-relative">
                                    <img src="@assets/images/users/avatar-3.jpg" alt="" class="img-fluid rounded-circle">
                                    <Link href="/mailbox"
                                        class="btn btn-success btn-sm position-absolute bottom-0 end-0 rounded-circle avatar-xs">
                                        <div class="avatar-title bg-transparent">
                                            <i class="ri-mail-fill align-bottom"></i>
                                        </div>
                                    </Link>
                                </div>
                                <h5 class="mb-1">
                                    <Link href="/pages/profile" class="text-body">Frank Hook</Link>
                                </h5>
                                <p class="text-muted mb-0 ff-secondary">Project Manager</p>
                            </BCardBody>
                        </BCard>
                    </BCol>
                    <BCol lg="3" sm="6">
                        <BCard n-body>
                            <BCardBody class="text-center p-4">
                                <div class="avatar-xl mx-auto mb-4 position-relative">
                                    <img src="@assets/images/users/avatar-8.jpg" alt="" class="img-fluid rounded-circle">
                                    <Link href="/mailbox"
                                        class="btn btn-success btn-sm position-absolute bottom-0 end-0 rounded-circle avatar-xs">
                                        <div class="avatar-title bg-transparent">
                                            <i class="ri-mail-fill align-bottom"></i>
                                        </div>
                                    </Link>
                                </div>
                                <h5 class="mb-1">
                                    <Link href="/pages/profile" class="text-body">Donald Palmer</Link>
                                </h5>
                                <p class="text-muted mb-0 ff-secondary">UI/UX Designer</p>
                            </BCardBody>
                        </BCard>
                    </BCol>
                </BRow>
                <BRow>
                    <BCol lg="3" sm="6">
                        <BCard n-body>
                            <BCardBody class="text-center p-4">
                                <div class="avatar-xl mx-auto mb-4 position-relative">
                                    <img src="@assets/images/users/avatar-5.jpg" alt="" class="img-fluid rounded-circle">
                                    <Link href="/mailbox"
                                        class="btn btn-success btn-sm position-absolute bottom-0 end-0 rounded-circle avatar-xs">
                                        <div class="avatar-title bg-transparent">
                                            <i class="ri-mail-fill align-bottom"></i>
                                        </div>
                                    </Link>
                                </div>
                                <h5 class="mb-1">
                                    <Link href="/pages/profile" class="text-body">Erica Kernan</Link>
                                </h5>
                                <p class="text-muted mb-0 ff-secondary">Web Designer</p>
                            </BCardBody>
                        </BCard>
                    </BCol>
                    <BCol lg="3" sm="6">
                        <BCard n-body>
                            <BCardBody class="text-center p-4">
                                <div class="avatar-xl mx-auto mb-4 position-relative">
                                    <img src="@assets/images/users/avatar-4.jpg" alt="" class="img-fluid rounded-circle">
                                    <Link href="/mailbox"
                                        class="btn btn-success btn-sm position-absolute bottom-0 end-0 rounded-circle avatar-xs">
                                        <div class="avatar-title bg-transparent">
                                            <i class="ri-mail-fill align-bottom"></i>
                                        </div>
                                    </Link>
                                </div>
                                <h5 class="mb-1">
                                    <Link href="/pages/profile" class="text-body">Alexis Clarke</Link>
                                </h5>
                                <p class="text-muted mb-0 ff-secondary">Backend Developer</p>
                            </BCardBody>
                        </BCard>
                    </BCol>
                    <BCol lg="3" sm="6">
                        <BCard n-body>
                            <BCardBody class="text-center p-4">
                                <div class="avatar-xl mx-auto mb-4 position-relative">
                                    <img src="@assets/images/users/avatar-6.jpg" alt="" class="img-fluid rounded-circle">
                                    <Link href="/mailbox"
                                        class="btn btn-success btn-sm position-absolute bottom-0 end-0 rounded-circle avatar-xs">
                                        <div class="avatar-title bg-transparent">
                                            <i class="ri-mail-fill align-bottom"></i>
                                        </div>
                                    </Link>
                                </div>
                                <h5 class="mb-1">
                                    <Link href="/pages/profile" class="text-body">Marie Ward</Link>
                                </h5>
                                <p class="text-muted mb-0 ff-secondary">Full Stack Developer</p>
                            </BCardBody>
                        </BCard>
                    </BCol>

                    <BCol lg="3" sm="6">
                        <BCard n-body>
                            <BCardBody class="text-center p-4">
                                <div class="avatar-xl mx-auto mb-4 position-relative">
                                    <img src="@assets/images/users/avatar-7.jpg" alt="" class="img-fluid rounded-circle">
                                    <Link href="/mailbox"
                                        class="btn btn-success btn-sm position-absolute bottom-0 end-0 rounded-circle avatar-xs">
                                        <div class="avatar-title bg-transparent">
                                            <i class="ri-mail-fill align-bottom"></i>
                                        </div>
                                    </Link>
                                </div>
                                <h5 class="mb-1">
                                    <Link href="/pages/profile" class="text-body">Jack Gough</Link>
                                </h5>
                                <p class="text-muted mb-0 ff-secondary">React Js Developer</p>
                            </BCardBody>
                        </BCard>
                    </BCol>
                </BRow>
                <BRow>
                    <BCol lg="12">
                        <div class="text-center mt-2">
                            <Link href="/pages/team" class="btn btn-primary">View All Members <i
                                    class="ri-arrow-right-line ms-1 align-bottom"></i></Link>
                        </div>
                    </BCol>
                </BRow>
            </BContainer>
        </section> -->

    <section class="section" id="contact">
      <BContainer>
        <BRow class="justify-content-center">
          <BCol lg="8">
            <div class="text-center mb-5">
              <h3 class="mb-3 fw-semibold">Get In Touch</h3>
              <p class="text-muted mb-4 ff-secondary">
                We thrive when coming up with innovative ideas but also
                understand that a smart concept should be supported with
                faucibus sapien odio measurable results.
              </p>
            </div>
          </BCol>
        </BRow>

        <BRow class="gy-4">
          <BCol lg="4">
            <div>
              <div class="mt-4">
                <h5 class="fs-13 text-muted text-uppercase">Reg Address:</h5>
                <div class="ff-secondary fw-semibold">
                  #153, Bileshivelle Village, Kothanur, Bangalore<br />KA 560077
                </div>
              </div>
              <div class="mt-4">
                <h5 class="fs-13 text-muted text-uppercase">
                  Communication Address:
                </h5>
                <div class="ff-secondary fw-semibold">
                  #004, AKRH, 4th Cross, Esther Enclave, Jayanthi Nagar,
                  Horamavu, Bangalore <br />KA 560043
                </div>
              </div>
              <div class="mt-4">
                <h5 class="fs-13 text-muted text-uppercase">Working Hours:</h5>
                <div class="ff-secondary fw-semibold">9:00am to 6:00pm</div>
              </div>
            </div>
          </BCol>
          <BCol lg="8">
            <div>
              <form>
                <BRow>
                  <BCol lg="6">
                    <div class="mb-4">
                      <label for="name" class="form-label fs-13">Name</label>
                      <input
                        name="name"
                        id="name"
                        type="text"
                        class="form-control bg-light border-light"
                        placeholder="Your name*"
                      />
                    </div>
                  </BCol>
                  <BCol lg="6">
                    <div class="mb-4">
                      <label for="email" class="form-label fs-13">Email</label>
                      <input
                        name="email"
                        id="email"
                        type="email"
                        class="form-control bg-light border-light"
                        placeholder="Your email*"
                      />
                    </div>
                  </BCol>
                </BRow>
                <BRow>
                  <BCol lg="12">
                    <div class="mb-4">
                      <label for="subject" class="form-label fs-13"
                        >Subject</label
                      >
                      <input
                        type="text"
                        class="form-control bg-light border-light"
                        id="subject"
                        name="subject"
                        placeholder="Your Subject.."
                      />
                    </div>
                  </BCol>
                </BRow>
                <BRow>
                  <BCol lg="12">
                    <div class="mb-3">
                      <label for="comments" class="form-label fs-13"
                        >Message</label
                      >
                      <textarea
                        name="comments"
                        id="comments"
                        rows="3"
                        class="form-control bg-light border-light"
                        placeholder="Your message..."
                      ></textarea>
                    </div>
                  </BCol>
                </BRow>
                <BRow>
                  <BCol lg="12" class="text-end">
                    <input
                      type="submit"
                      id="submit"
                      name="send"
                      class="submitBnt btn btn-primary"
                      value="Send Message"
                    />
                  </BCol>
                </BRow>
              </form>
            </div>
          </BCol>
        </BRow>
      </BContainer>
    </section>

    <section class="py-5 bg-primary position-relative">
      <div class="bg-overlay bg-overlay-pattern opacity-50"></div>
      <BContainer>
        <BRow class="align-items-center gy-4">
          <BCol sm>
            <div>
              <h4 class="text-white mb-0 fw-semibold">
                Build your web App/SaaS with Velzon dashboard
              </h4>
            </div>
          </BCol>
          <BCol sm="auto">
            <div>
              <BLink
                href="https://1.envato.market/velzon-admin"
                target="_blank"
                class="btn bg-gradient btn-danger"
                ><i class="ri-shopping-cart-2-line align-middle me-1"></i> Buy
                Now</BLink
              >
            </div>
          </BCol>
        </BRow>
      </BContainer>
    </section>

    <LandingFooter />
  </div>
</template>

<style scoped>
    .container1 { max-width: 100%;}
    .effect-coverflow-swiper .swiper-slide { transition: transform 0.3s ease, box-shadow 0.3s ease; }
    .effect-coverflow-swiper .swiper-slide-active { transform: scale(1.5); z-index: 10; box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2); }
    .swiper-slide-active { transform: scale(1.5) !important; z-index: 2; }
    .plan-wrapper { min-height: 280px; align-items: flex-start; position: relative; }

    /* Layout */
    .plan-box { flex: 0 0 33%; transition: transform 0.5s ease, opacity 0.5s ease; z-index: 1; max-width: 100%; }
    .detail-box { flex: 1 1 100%; max-width: 100%; animation: fadeIn 0.5s ease forwards; }

    /* Animation States */
    .fade-in { animation: fadeIn 0.4s ease forwards; }
    .fade-out { animation: fadeOut 0.4s ease forwards; }
    .move-left { animation: slideLeft 0.4s ease forwards; }
    .hide-card { visibility: hidden; position: absolute; pointer-events: none; }

    /* Animations */
    @keyframes fadeIn { 
        from { opacity: 0; transform: scale(0.95); }
        to { opacity: 1; transform: scale(1); }
    }

    @keyframes fadeOut { 
        from { opacity: 1; transform: translateX(0); }
        to { opacity: 0; transform: translateX(-30px); }
    }

    @keyframes slideLeft {
        from { transform: translateX(100%); }
        to { transform: translateX(0%); }
    }

    /* Cards */
    .plan-card { cursor: pointer; max-width: 100%; min-height: 350px;}
    .selected { z-index: 2; }

    .right-content-section-column {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
</style>