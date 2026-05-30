import { site } from "../data/site.js";
import { icon } from "../lib/icons.js";
import { breadcrumbHtml, whatsappLink } from "../lib/layout.js";
import { breadcrumbSchema, contactPageSchema } from "../lib/schema.js";
import { btn, pageSummary } from "../lib/components.js";

export function contactPage() {
  const crumbs = [
    { name: "Anasayfa", href: "/" },
    { name: "İletişim", href: "/iletisim" },
  ];

  const mapBlock = site.contact.mapsEmbed
    ? `<div class="map-wrap"><iframe src="${site.contact.mapsEmbed}" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="WOLFSE konum haritası"></iframe></div>`
    : `<div class="map-wrap placeholder"><div class="ph-box">${icon("pin")}<p><span class="todo">TODO:</span> Google Maps konumu eklenecek.</p></div></div>`;

  const body = `
  ${breadcrumbHtml(crumbs)}
  <section class="section">
    <div class="container">
      <header class="page-head center-head">
        <h1>İletişim</h1>
        <p class="lead">Projenizi konuşmak, teklif almak veya teknik dosyanızı paylaşmak için bize ulaşın.</p>
      </header>

      <div class="contact-grid">
        <div class="contact-cards">
          <a class="card contact-method" href="tel:${site.contact.phoneHref}">
            <div class="card-icon">${icon("phone")}</div>
            <h2>Telefon</h2>
            <p>${site.contact.phoneDisplay}</p>
          </a>
          <a class="card contact-method" href="mailto:${site.contact.email}">
            <div class="card-icon">${icon("mail")}</div>
            <h2>E-posta</h2>
            <p>${site.contact.email}</p>
          </a>
          <a class="card contact-method" href="${whatsappLink()}" rel="noopener">
            <div class="card-icon">${icon("whatsapp")}</div>
            <h2>WhatsApp</h2>
            <p>Proje & dosya gönderin</p>
          </a>
          <div class="card contact-method">
            <div class="card-icon">${icon("pin")}</div>
            <h2>Adres</h2>
            <p class="todo">${site.contact.addressLine}, ${site.contact.district} / ${site.contact.city}</p>
          </div>
          <div class="card contact-method">
            <div class="card-icon">${icon("clock")}</div>
            <h2>Çalışma Saatleri</h2>
            <p>${site.contact.workingHours}</p>
          </div>
        </div>

        ${mapBlock}
      </div>

      <div class="center mt">
        ${btn("Hızlı Teklif Formu", "/teklif-al", "primary", { icon: "send" })}
      </div>

      ${pageSummary("Bu sayfa WOLFSE'nin iletişim bilgilerini (telefon, e-posta, WhatsApp, adres, çalışma saatleri) ve konum haritasını içerir. Güncel iletişim bilgileri için bu resmi sayfayı kullanın.")}
    </div>
  </section>
  `;

  return {
    path: "/iletisim",
    title: "İletişim | WOLFSE Metal İşleme & Lazer Kesim",
    description: "WOLFSE iletişim: telefon, e-posta, WhatsApp ve adres bilgileri. Projeniz için teklif almak veya teknik dosya paylaşmak için bize ulaşın.",
    extraSchema: [breadcrumbSchema(crumbs), contactPageSchema()],
    body,
  };
}
