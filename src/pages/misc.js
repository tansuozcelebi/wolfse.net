import { site, generalFaqs, services } from "../data/site.js";
import { icon } from "../lib/icons.js";
import { breadcrumbHtml } from "../lib/layout.js";
import { breadcrumbSchema, faqSchema } from "../lib/schema.js";
import { btn, sectionHeader, faqAccordion, ctaBand, pageSummary } from "../lib/components.js";

// ---- SSS sayfası ----
export function sssPage() {
  const crumbs = [
    { name: "Anasayfa", href: "/" },
    { name: "Sık Sorulan Sorular", href: "/sss" },
  ];
  const body = `
  ${breadcrumbHtml(crumbs)}
  <section class="section">
    <div class="container narrow">
      ${sectionHeader("Yardım", "Sık Sorulan Sorular", "Teklif, dosya, malzeme ve süreçler hakkında merak edilenler.", { as: "h1" })}
      ${faqAccordion(generalFaqs, "general")}

    </div>
  </section>
  ${ctaBand("Sorunuz Yanıtlanmadı mı? Bize Yazın", "İletişim sayfasından veya WhatsApp'tan bize ulaşın.")}
  `;
  return {
    path: "/sss",
    title: "Sık Sorulan Sorular | Lazer Kesim & Fason İmalat | WOLFSE",
    description: "WOLFSE SSS: teklif alma, kabul edilen dosya formatları (DXF/DWG/STEP/PDF), minimum adet, malzeme türleri ve üretim süreçleri hakkında sık sorulan sorular.",
    extraSchema: [breadcrumbSchema(crumbs), faqSchema(generalFaqs)],
    body,
  };
}

// ---- Galeri sayfası ----
export function galleryPage() {
  const crumbs = [
    { name: "Anasayfa", href: "/" },
    { name: "Galeri", href: "/galeri" },
  ];
  const placeholders = (label, n) =>
    Array.from({ length: n })
      .map(
        (_, i) =>
          `<figure class="gallery-item placeholder"><div class="ph-box">${icon("custom")}</div><figcaption>${label} ${i + 1} <span class="todo">TODO: görsel</span></figcaption></figure>`
      )
      .join("\n        ");

  const body = `
  ${breadcrumbHtml(crumbs)}
  <section class="section">
    <div class="container">
      <header class="page-head center-head">
        <h1>Galeri</h1>
        <p class="lead">Üretim sürecimizden, makine parkurumuzdan ve kesim örneklerinden kareler. Gerçek görseller eklendikçe bu sayfa güncellenecektir.</p>
      </header>

      <h2 id="foto">Foto Galeri</h2>
      <div class="gallery-grid">
        ${placeholders("Üretim Fotoğrafı", 6)}
      </div>

      <h2 id="kesim-ornekleri" class="mt">Kesim Örnekleri</h2>
      <div class="gallery-grid">
        ${placeholders("Kesim Örneği", 6)}
      </div>

      <h2 id="video" class="mt">Video Galeri</h2>
      <div class="notice">${icon("bolt")}<p><span class="todo">TODO:</span> Üretim ve makine videoları (lazy-load / poster image ile) eklenecek. Performans için videolar tıklamayla yüklenecek şekilde hazırlanacaktır.</p></div>

      ${pageSummary("Bu sayfa WOLFSE'nin foto galeri, kesim örnekleri ve video galeri bölümlerini içerir. Gerçek üretim görselleri eklendikçe güncellenir.")}
    </div>
  </section>
  ${ctaBand("Sizin Projeniz de Galerimize Girsin")}
  `;
  return {
    path: "/galeri",
    title: "Galeri | Üretim, Makine Parkuru & Kesim Örnekleri | WOLFSE",
    description: "WOLFSE galeri: üretim fotoğrafları, makine parkuru görselleri, lazer kesim örnekleri ve video galeri. Çevik ve hassas metal işleme süreçlerimizden kareler.",
    extraSchema: [breadcrumbSchema(crumbs)],
    body,
  };
}

// ---- Teşekkürler sayfası ----
export function thankYouPage() {
  const body = `
  <section class="section thankyou">
    <div class="container narrow center">
      <div class="success-icon">${icon("check")}</div>
      <h1>Teklif Talebiniz Alındı</h1>
      <p class="lead">Teklif talebiniz alınmıştır. Ekibimiz teknik dosyanızı inceleyerek en kısa sürede sizinle iletişime geçecektir.</p>
      <p>Acil bir talebiniz varsa WhatsApp veya telefon ile de bize ulaşabilirsiniz.</p>
      <div class="page-head-cta center-cta">
        ${btn("Anasayfaya Dön", "/", "ghost", { icon: "arrow" })}
        ${btn("WhatsApp ile Yazın", `https://wa.me/${site.contact.whatsappNumber.replace(/\D/g, "")}`, "wa", { icon: "whatsapp" })}
      </div>
    </div>
  </section>
  `;
  return {
    path: "/tesekkurler",
    title: "Teşekkürler | Teklif Talebiniz Alındı | WOLFSE",
    description: "Teklif talebiniz alınmıştır. WOLFSE ekibi teknik dosyanızı inceleyerek en kısa sürede sizinle iletişime geçecektir.",
    robots: "noindex, follow",
    extraSchema: [],
    body,
  };
}
