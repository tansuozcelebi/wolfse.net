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

  const body = `
  ${breadcrumbHtml(crumbs)}
  <section class="section">
    <div class="container">
      <header class="page-head center-head">
        <img src="/assets/logo/wolfse-logo.png" alt="WOLFSE" style="height: 320px; width: auto; margin: 0 auto 1.5rem; display: block;">
        <h1>İletişim</h1>
        <p class="lead">Projenizi konuşmak, teklif almak veya teknik dosyanızı paylaşmak için bize ulaşın.</p>
      </header>

      <div class="contact-cards wide">
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
          <a class="card contact-method video-trigger" href="/kurt-gorevde">
            <div class="card-icon">${icon("play")}</div>
            <h2>Kurt Görevde</h2>
            <p>Videoyu izlemek için tıklayın</p>
          </a>
      </div>

      <div class="center mt">
        ${btn("Hızlı Teklif Formu", "/teklif-al", "primary", { icon: "send" })}
      </div>
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
