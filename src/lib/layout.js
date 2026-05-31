import { site, nav, services, sectors } from "../data/site.js";
import { icon } from "./icons.js";
import {
  jsonLd,
  organizationSchema,
  websiteSchema,
  webPageSchema,
  breadcrumbSchema,
} from "./schema.js";

const esc = (str = "") =>
  String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const abs = (path = "/") => (path.startsWith("http") ? path : site.domain + path);

// WhatsApp linki (placeholder numara varsa yine de iletişime yönlendirir)
export function whatsappLink(prefill = "Merhaba, WOLFSE için bir proje hakkında teklif almak istiyorum.") {
  const num = site.contact.whatsappNumber.replace(/\D/g, "");
  return `https://wa.me/${num}?text=${encodeURIComponent(prefill)}`;
}

// Dinamik alt menüleri doldur
function navWithChildren() {
  return nav.map((item) => {
    if (item.label === "Hizmetler") {
      return { ...item, children: services.map((s) => ({ label: s.title, href: "/hizmetler/" + s.slug })) };
    }
    if (item.label === "Sektörler") {
      return { ...item, children: sectors.map((s) => ({ label: s.title, href: "/sektorler/" + s.slug })) };
    }
    return item;
  });
}

function headerHtml(currentPath) {
  const items = navWithChildren();
  const links = items
    .map((item) => {
      const active = item.href === currentPath ? ' aria-current="page"' : "";
      if (item.children && item.children.length) {
        const sub = item.children
          .map((c) => `<li><a href="${c.href}">${esc(c.label)}</a></li>`)
          .join("");
        return `<li class="has-sub">
          <a href="${item.href}"${active}>${esc(item.label)}<span class="caret" aria-hidden="true">▾</span></a>
          <ul class="submenu">${sub}</ul>
        </li>`;
      }
      const cls = item.cta ? ' class="nav-cta"' : "";
      return `<li${cls}><a href="${item.href}"${active}>${esc(item.label)}</a></li>`;
    })
    .join("");

  return `<header class="site-header" id="top">
  <div class="container header-inner">
    <a class="brand" href="/" aria-label="${site.brand} anasayfa">
      <img class="brand-img" src="/assets/logo/wolfse_logo_120.png" alt="${site.brand} — Lazer Kesim" width="200" height="200" fetchpriority="high">
    </a>
    <button class="nav-toggle" aria-label="Menüyü aç/kapat" aria-expanded="false" aria-controls="primary-nav">
      ${icon("menu", "icon nav-open-ic")}${icon("close", "icon nav-close-ic")}
    </button>
    <nav class="primary-nav" id="primary-nav" aria-label="Ana menü">
      <ul class="nav-list">${links}</ul>
    </nav>
    <a class="header-phone" href="tel:${site.contact.phoneHref}">${icon("phone")}<span>${esc(site.contact.phoneDisplay)}</span></a>
  </div>
</header>`;
}

function footerHtml() {
  const svcLinks = services
    .map((s) => `<li><a href="/hizmetler/${s.slug}">${esc(s.title)}</a></li>`)
    .join("");
  const secLinks = sectors
    .map((s) => `<li><a href="/sektorler/${s.slug}">${esc(s.title)}</a></li>`)
    .join("");
  const social = [
    site.social.linkedin && `<a href="${site.social.linkedin}" rel="noopener" aria-label="LinkedIn">in</a>`,
    site.social.instagram && `<a href="${site.social.instagram}" rel="noopener" aria-label="Instagram">ig</a>`,
    site.social.youtube && `<a href="${site.social.youtube}" rel="noopener" aria-label="YouTube">yt</a>`,
  ]
    .filter(Boolean)
    .join("");

  return `<footer class="site-footer">
  <div class="container footer-grid">
    <div class="footer-col footer-brand">
      <a class="brand" href="/"><img class="brand-img" src="/assets/logo/wolfse_logo_120.png" alt="${site.brand} — Lazer Kesim" width="160" height="160" loading="lazy"></a>
      <p>${esc(site.description)}</p>
      <p class="footer-slogan">“${esc(site.slogan)}”</p>
      ${social ? `<div class="social">${social}</div>` : ""}
    </div>
    <div class="footer-col">
      <h2>Hizmetler</h2>
      <ul>${svcLinks}</ul>
    </div>
    <div class="footer-col">
      <h2>Sektörler</h2>
      <ul>${secLinks}</ul>
    </div>
    <div class="footer-col">
      <h2>İletişim</h2>
      <ul class="contact-list">
        <li>${icon("phone")}<a href="tel:${site.contact.phoneHref}">${esc(site.contact.phoneDisplay)}</a></li>
        <li>${icon("mail")}<a href="mailto:${site.contact.email}">${esc(site.contact.email)}</a></li>
        <li>${icon("whatsapp")}<a href="${whatsappLink()}" rel="noopener">WhatsApp ile Proje Gönder</a></li>
      </ul>
      <a class="btn btn-primary btn-sm" href="/teklif-al">Hızlı Teklif Al</a>
    </div>
  </div>
  <div class="container footer-bottom">
    <p>© ${new Date().getFullYear()} ${esc(site.brand)}. Tüm hakları saklıdır.</p>
    <nav class="footer-legal" aria-label="Yasal">
      <a href="/kvkk">KVKK</a>
      <a href="/cerez-politikasi">Çerez Politikası</a>
      <a href="/gizlilik-politikasi">Gizlilik Politikası</a>
      <a href="/sitemap.xml">Sitemap</a>
      <a href="/llms.txt">llms.txt</a>
      <a href="/robots.txt">robots.txt</a>
    </nav>
  </div>
</footer>`;
}

// Yüzen WhatsApp butonu
function floatingWhatsApp() {
  return `<a class="wa-float" href="${whatsappLink()}" rel="noopener" aria-label="WhatsApp ile yazın">${icon("whatsapp", "icon")}<span>Proje Gönder</span></a>`;
}

// Çerez bildirimi
function cookieBanner() {
  return `<div class="cookie-banner" id="cookie-banner" hidden>
    <p>Bu sitede deneyiminizi iyileştirmek ve analiz için çerezler kullanılır. Detaylar için <a href="/cerez-politikasi">Çerez Politikası</a>.</p>
    <div class="cookie-actions">
      <button class="btn btn-sm btn-ghost" data-cookie="reddet">Reddet</button>
      <button class="btn btn-sm btn-primary" data-cookie="kabul">Kabul Et</button>
    </div>
  </div>`;
}

function metaHead(page) {
  const {
    title,
    description,
    path = "/",
    ogType = "website",
    image = "/assets/logo/wolfse-og.png",
    robots = "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    extraSchema = [],
    extraHead = "",
  } = page;

  const canonical = abs(path);
  const ogImage = abs(image);

  // Her sayfada ortak schema: Organization + WebSite + WebPage
  const baseSchema = [
    organizationSchema(),
    websiteSchema(),
    webPageSchema({ url: path, name: title, description }),
  ];
  const allSchema = [...baseSchema, ...extraSchema].map(jsonLd).join("\n  ");

  return `<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${esc(title)}</title>
  <meta name="description" content="${esc(description)}">
  <meta name="robots" content="${esc(robots)}">
  <link rel="canonical" href="${canonical}">
  <link rel="alternate" hreflang="tr" href="${canonical}">
  <link rel="alternate" hreflang="x-default" href="${canonical}">
  <meta name="theme-color" content="#0b0e13">
  <meta name="author" content="${esc(site.brand)}">
  <meta name="publisher" content="${esc(site.brand)}">

  <!-- Open Graph -->
  <meta property="og:type" content="${ogType}">
  <meta property="og:site_name" content="${esc(site.brand)}">
  <meta property="og:locale" content="${site.locale}">
  <meta property="og:title" content="${esc(title)}">
  <meta property="og:description" content="${esc(description)}">
  <meta property="og:url" content="${canonical}">
  <meta property="og:image" content="${ogImage}">
  <meta property="og:image:alt" content="${esc(site.brand)} — ${esc(site.slogan)}">

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${esc(title)}">
  <meta name="twitter:description" content="${esc(description)}">
  <meta name="twitter:image" content="${ogImage}">

  <link rel="icon" href="/assets/logo/favicon.svg" type="image/svg+xml">
  <link rel="apple-touch-icon" href="/assets/logo/apple-touch-icon.png">
  <link rel="preload" href="/css/styles.css" as="style">
  <link rel="stylesheet" href="/css/styles.css">
  <link rel="sitemap" type="application/xml" href="/sitemap.xml">

  ${allSchema}
  ${extraHead}
</head>`;
}

// Breadcrumb görünür bileşeni (+ schema'sı çağıran tarafça eklenir)
export function breadcrumbHtml(crumbs) {
  const items = crumbs
    .map((c, i) => {
      const last = i === crumbs.length - 1;
      return last
        ? `<li aria-current="page">${esc(c.name)}</li>`
        : `<li><a href="${c.href}">${esc(c.name)}</a></li>`;
    })
    .join('<li class="sep" aria-hidden="true">/</li>');
  return `<nav class="breadcrumb" aria-label="Site haritası"><div class="container"><ol>${items}</ol></div></nav>`;
}

export { breadcrumbSchema };

// Ana sayfa iskeleti
export function renderPage(page, bodyHtml) {
  return `${metaHead(page)}
<body${page.bodyClass ? ` class="${page.bodyClass}"` : ""}>
  <a class="skip-link" href="#main">İçeriğe geç</a>
  ${headerHtml(page.path)}
  <main id="main">
${bodyHtml}
  </main>
  ${footerHtml()}
  ${floatingWhatsApp()}
  ${cookieBanner()}
  <!-- Video Modal -->
  <div class="video-modal" id="video-modal">
    <div class="video-modal-content">
      <video id="intro-video" controls preload="metadata">
        <source src="/assets/video/wolfse-anim.mp4" type="video/mp4">
        Tarayıcınız video oynatmayı desteklemiyor.
      </video>
      <button class="video-close-btn" aria-label="Videoyu kapat">×</button>
    </div>
  </div>
  <script>window.WOLFSE_IDS=${JSON.stringify({
    ga4: site.analytics.ga4,
    adsId: site.analytics.googleAdsConversionId,
    adsLabel: site.analytics.googleAdsConversionLabel,
    metaPixel: site.analytics.metaPixelId,
    linkedin: site.analytics.linkedinPartnerId,
  })};</script>
  <script src="/js/main.js" defer></script>
</body>
</html>`;
}

export { esc, abs };
