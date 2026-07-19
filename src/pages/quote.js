import { site, quoteServiceOptions, quoteMaterialOptions } from "../data/site.js";
import { icon } from "../lib/icons.js";
import { breadcrumbHtml, whatsappLink } from "../lib/layout.js";
import { breadcrumbSchema, howToSchema } from "../lib/schema.js";
import { btn, processSteps, pageSummary } from "../lib/components.js";

const steps = [
  { title: "Teknik dosyanızı gönderin", text: "DXF, DWG, STEP, PDF veya görsel dosyalarınızı yükleyin." },
  { title: "Malzeme, kalınlık ve adet", text: "Malzeme cinsi, sac kalınlığı ve üretim adedini belirtin." },
  { title: "Üretilebilirlik & maliyet analizi", text: "Dosyanızı inceleyip üretilebilirliği ve maliyeti değerlendirelim." },
  { title: "Teklif & termin", text: "Net fiyat ve termin teklifimizi size iletelim." },
];

export function quotePage() {
  const crumbs = [
    { name: "Anasayfa", href: "/" },
    { name: "Teklif Al", href: "/teklif-al" },
  ];

  const serviceOpts = quoteServiceOptions
    .map((o) => `<option value="${o}">${o}</option>`)
    .join("");
  const materialOpts = quoteMaterialOptions
    .map((o) => `<option value="${o}">${o}</option>`)
    .join("");

  // form action: endpoint varsa POST, yoksa JS mailto fallback (data-* ile)
  const action = site.formEndpoint || "#";
  const turnstile = site.turnstileSiteKey
    ? `<div class="cf-turnstile" data-sitekey="${site.turnstileSiteKey}"></div>`
    : `<p class="form-note">${icon("shield")} Spam koruması: Bu form Cloudflare Turnstile / reCAPTCHA ile korunmaya hazırdır. <span class="todo">TODO: site anahtarı eklenecek.</span></p>`;

  const body = `
  ${breadcrumbHtml(crumbs)}
  <section class="section quote-section">
    <div class="container">
      <div class="quote-grid quote-grid-centered">
        <div class="quote-info">
          <h1>Hızlı Teklif Al</h1>
          <p class="lead">Teknik dosyanızı ve proje bilgilerinizi gönderin; üretilebilirlik, maliyet ve termin için hızlı geri dönüş alın.</p>
          <h2>Süreç</h2>
          ${processSteps(steps)}
          <div class="quote-contact-alt">
            <p><strong>Daha hızlı iletişim:</strong></p>
            ${btn("WhatsApp ile Proje Gönder", whatsappLink(), "wa", { icon: "whatsapp" })}
            <a class="text-link" href="tel:${site.contact.phoneHref}">${icon("phone")} ${site.contact.phoneDisplay}</a>
            <a class="text-link" href="mailto:${site.contact.email}">${icon("mail")} ${site.contact.email}</a>
          </div>
        </div>
      </div>
    </div>
  </section>
  `;

  return {
    path: "/teklif-al",
    title: "Hızlı Teklif Al | Lazer Kesim & Fason İmalat Teklifi | WOLFSE",
    description: "WOLFSE'den hızlı teklif alın: teknik dosyanızı (DXF/DWG/STEP/PDF) yükleyin; malzeme, kalınlık, adet ve termin bilgisiyle üretilebilirlik ve maliyet teklifini alın.",
    extraSchema: [
      breadcrumbSchema(crumbs),
      howToSchema({
        name: "WOLFSE'den lazer kesim / fason imalat teklifi nasıl alınır?",
        description:
          "Teknik dosyanızı gönderip malzeme, kalınlık ve adet bilgisiyle WOLFSE'den hızlı üretilebilirlik, maliyet ve termin teklifi alma adımları.",
        steps,
        url: "/teklif-al",
      }),
    ],
    body,
  };
}
