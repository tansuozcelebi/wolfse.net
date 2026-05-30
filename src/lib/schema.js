// JSON-LD schema üreticileri. Gerçek olmayan veri uydurulmaz; bilinmeyenler atlanır.
import { site } from "../data/site.js";

const abs = (path) => (path.startsWith("http") ? path : site.domain + path);

// Placeholder/boş değerleri JSON-LD'ye koymamak için temizleyici
const clean = (obj) => {
  if (Array.isArray(obj)) {
    const a = obj.map(clean).filter((v) => v !== undefined && v !== null && v !== "");
    return a.length ? a : undefined;
  }
  if (obj && typeof obj === "object") {
    const o = {};
    for (const [k, v] of Object.entries(obj)) {
      const c = clean(v);
      const isTodo = typeof c === "string" && (c.startsWith("TODO") || c.includes("XXXX") || /[_]{3,}/.test(c));
      if (c !== undefined && c !== null && c !== "" && !isTodo) o[k] = c;
    }
    return Object.keys(o).length ? o : undefined;
  }
  return obj;
};

export function jsonLd(obj) {
  const cleaned = clean(obj) || {};
  return `<script type="application/ld+json">${JSON.stringify(cleaned)}</script>`;
}

export const orgId = site.domain + "/#organization";
export const websiteId = site.domain + "/#website";

export function organizationSchema() {
  const sameAs = [site.social.linkedin, site.social.instagram, site.social.youtube].filter(Boolean);
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness", "ProfessionalService"],
    "@id": orgId,
    name: site.brand,
    legalName: site.legalName,
    url: site.domain,
    logo: abs("/assets/logo/wolfse-logo.png"),
    image: abs("/assets/logo/wolfse-og.png"),
    description: site.description,
    slogan: site.slogan,
    ...(sameAs.length ? { sameAs } : {}),
    address: {
      "@type": "PostalAddress",
      streetAddress: site.contact.addressLine,
      addressLocality: site.contact.city,
      addressRegion: site.contact.city,
      postalCode: site.contact.postalCode,
      addressCountry: site.contact.countryCode,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.contact.geo.lat,
      longitude: site.contact.geo.lng,
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      telephone: site.contact.phoneHref,
      email: site.contact.email,
      availableLanguage: ["tr", "en"],
    },
    areaServed: { "@type": "Country", name: "Türkiye" },
    knowsAbout: [
      "CNC fiber lazer kesim",
      "Sac lazer kesim",
      "Boru profil lazer kesim",
      "CNC abkant büküm",
      "Kaynaklı imalat",
      "Fason metal imalat",
    ],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": websiteId,
    url: site.domain,
    name: site.brand,
    inLanguage: "tr-TR",
    publisher: { "@id": orgId },
    potentialAction: {
      "@type": "SearchAction",
      target: site.domain + "/blog?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };
}

export function webPageSchema({ url, name, description }) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": abs(url) + "#webpage",
    url: abs(url),
    name,
    description,
    inLanguage: "tr-TR",
    isPartOf: { "@id": websiteId },
    about: { "@id": orgId },
  };
}

export function breadcrumbSchema(crumbs) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: abs(c.href),
    })),
  };
}

export function serviceSchema(svc) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: svc.title,
    name: svc.title,
    description: svc.metaDescription,
    url: abs("/hizmetler/" + svc.slug),
    provider: { "@id": orgId },
    areaServed: { "@type": "Country", name: "Türkiye" },
    category: "Metal işleme / Lazer kesim",
  };
}

export function faqSchema(faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function articleSchema(post) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription || post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: "tr-TR",
    url: abs("/blog/" + post.slug),
    mainEntityOfPage: abs("/blog/" + post.slug),
    author: { "@id": orgId },
    publisher: { "@id": orgId },
    image: abs("/assets/logo/wolfse-og.png"),
    articleSection: post.category,
  };
}

export function contactPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    url: abs("/iletisim"),
    name: "İletişim — " + site.brand,
    about: { "@id": orgId },
    inLanguage: "tr-TR",
  };
}
