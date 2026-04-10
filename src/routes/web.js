const express = require("express");
const {
  homePage,
  privacyPolicyPage,
  termsConditionsPage,
  refundPolicyPage,
  jobLandingPage,
  nftLandingPage
} = require("../controllers/homeController");

const router = express.Router();

router.get("/", homePage);
router.get("/home", homePage);
router.get("/pages/privacy-policy", privacyPolicyPage);
router.get("/pages/term-conditions", termsConditionsPage);
router.get("/pages/refund-policy", refundPolicyPage);
router.get("/job-landing", jobLandingPage);
router.get("/nft-landing", nftLandingPage);

module.exports = router;
