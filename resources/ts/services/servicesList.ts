// services-data/servicesList.ts
import seoIcon from '@assets/images/seo.png'
import webIcon from '@assets/images/webdesign1.png'
import auditIcon from '@assets/images/audit.png'

export const servicesList = [
  {
    id: "seo",
    title: "Web Development & SEO Audit",
    description: "At Varnarc, we craft high-performance websites tailored to your brand and optimize them with in-depth SEO audits that uncover hidden issues, boost rankings, and drive measurable growth.",
    price: "19",
    icon: seoIcon,
    features: [
      "✔ Actionable SEO Roadmaps",
      "✔ Instant Health Checks",
      "✔ Data You Can Trust",
      "✔ Built for Growth"
    ]
  },
  {
    id: "digital",
    title: "Digital Marketing",
    description: "Analyze and optimize your website for better search engine rankings",
    price: "29",
    icon: webIcon,
    features: ["✔ Up to 10 Projects"]
  },
  {
    id: "financial",
    title: "Financial & Taxation",
    description: "Analyze and optimize your website for better search engine rankings",
    price: "49",
    icon: auditIcon,
    features: ["✔ Unlimited Projects"]
  }
];
