const landingData = require("../data/landingData");

function homePage(req, res) {
  res.render("index", { title: "Homepage", ...landingData });
}

function privacyPolicyPage(req, res) {
  res.render("privacy-policy", { title: "Privacy Policy" });
}

function termsConditionsPage(req, res) {
  res.render("terms-conditions", { title: "Terms & Conditions" });
}

function refundPolicyPage(req, res) {
  res.render("refund-policy", { title: "Refund Policy" });
}

function jobLandingPage(req, res) {
  res.render("job-landing", { title: "Job Landing" });
}

function nftLandingPage(req, res) {
  res.render("nft-landing", { title: "NFT Landing" });
}

module.exports = {
  homePage,
  privacyPolicyPage,
  termsConditionsPage,
  refundPolicyPage,
  jobLandingPage,
  nftLandingPage
};
