import { site, quoteServiceOptions, quoteMaterialOptions } from "../data/site.js";
import { icon } from "../lib/icons.js";
import { breadcrumbHtml, whatsappLink } from "../lib/layout.js";
import { breadcrumbSchema } from "../lib/schema.js";
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
      <div class="quote-grid">
        <div class="quote-info">
          <h1>Hızlı Teklif Al</h1>
          <p class="lead">Teknik dosyanızı ve proje bilgilerinizi gönderin; üretilebilirlik, maliyet ve termin için hızlı geri dönüş alın.</p>
          <h2>Süreç</h2>
          ${processSteps(steps)}
          <div class="quote-contact-alt">
            <p><strong>Daha hızlı iletişim:</strong></p>
            ${btn("WhatsApp ile Proje Gönder", whatsappLink(), "wa", { icon: "whatsapp" })}
            <a class="text-link" href="tel:${site.contact.phoneHref}">${icon("phone")} ${site.contact.phoneDisplay}</a>
            <a class="text-link" href="mailto:${site.contact.salesEmail}">${icon("mail")} ${site.contact.salesEmail}</a>
          </div>
        </div>

        <div class="quote-form-wrap">
          <form id="quote-form" class="quote-form" action="${action}" method="post" enctype="multipart/form-data" novalidate data-mailto="${site.contact.salesEmail}">
            <p class="form-intro">Yıldız (<span class="req">*</span>) ile işaretli alanlar zorunludur.</p>

            <div class="form-row two">
              <div class="field">
                <label for="ad">Ad Soyad <span class="req">*</span></label>
                <input type="text" id="ad" name="ad_soyad" required autocomplete="name">
                <span class="error" data-for="ad"></span>
              </div>
              <div class="field">
                <label for="firma">Firma Adı</label>
                <input type="text" id="firma" name="firma" autocomplete="organization">
              </div>
            </div>

            <div class="form-row two">
              <div class="field">
                <label for="telefon">Telefon <span class="req">*</span></label>
                <input type="tel" id="telefon" name="telefon" required autocomplete="tel" placeholder="05xx xxx xx xx">
                <span class="error" data-for="telefon"></span>
              </div>
              <div class="field">
                <label for="email">E-posta <span class="req">*</span></label>
                <input type="email" id="email" name="email" required autocomplete="email">
                <span class="error" data-for="email"></span>
              </div>
            </div>

            <div class="form-row two">
              <div class="field">
                <label for="sehir">Şehir</label>
                <input type="text" id="sehir" name="sehir" autocomplete="address-level1">
              </div>
              <div class="field">
                <label for="hizmet">Hizmet Türü <span class="req">*</span></label>
                <select id="hizmet" name="hizmet_turu" required>
                  <option value="">Seçiniz…</option>
                  ${serviceOpts}
                </select>
                <span class="error" data-for="hizmet"></span>
              </div>
            </div>

            <div class="form-row two">
              <div class="field">
                <label for="malzeme">Malzeme Türü</label>
                <select id="malzeme" name="malzeme_turu">
                  <option value="">Seçiniz…</option>
                  ${materialOpts}
                </select>
              </div>
              <div class="field">
                <label for="kalinlik">Kalınlık (mm)</label>
                <input type="text" id="kalinlik" name="kalinlik" inputmode="decimal" placeholder="ör. 3">
              </div>
            </div>

            <div class="form-row two">
              <div class="field">
                <label for="adet">Adet</label>
                <input type="text" id="adet" name="adet" inputmode="numeric" placeholder="ör. 50">
              </div>
              <div class="field">
                <label for="termin">Termin Beklentisi</label>
                <input type="text" id="termin" name="termin" placeholder="ör. 2 hafta">
              </div>
            </div>

            <div class="field">
              <label for="aciklama">Açıklama</label>
              <textarea id="aciklama" name="aciklama" rows="4" placeholder="Proje detayları, tolerans, yüzey/boya istekleri…"></textarea>
            </div>

            <div class="field">
              <label for="dosya">Teknik Dosya (PDF, DXF, DWG, STEP, JPG, PNG)</label>
              <input type="file" id="dosya" name="dosya" multiple accept=".pdf,.dxf,.dwg,.step,.stp,.jpg,.jpeg,.png">
              <span class="form-hint">Maks. dosya boyutu: 25 MB. Birden fazla dosya seçebilirsiniz.</span>
              <span class="error" data-for="dosya"></span>
            </div>

            <!-- Honeypot (spam koruması) -->
            <div class="hp-field" aria-hidden="true">
              <label for="website">Web Siteniz (boş bırakın)</label>
              <input type="text" id="website" name="website" tabindex="-1" autocomplete="off">
            </div>

            ${turnstile}

            <div class="field checkbox">
              <input type="checkbox" id="kvkk" name="kvkk_onay" required>
              <label for="kvkk"><a href="/kvkk" target="_blank" rel="noopener">KVKK Aydınlatma Metni</a>'ni okudum, kişisel verilerimin işlenmesini kabul ediyorum. <span class="req">*</span></label>
              <span class="error" data-for="kvkk"></span>
            </div>

            <div class="field checkbox">
              <input type="checkbox" id="pazarlama" name="pazarlama_izni">
              <label for="pazarlama">Kampanya ve bilgilendirmeler için ticari elektronik ileti almak istiyorum. (İsteğe bağlı)</label>
            </div>

            <button type="submit" class="btn btn-primary btn-lg btn-block">${icon("send")}<span>Teklif Talebini Gönder</span></button>
            <p class="form-success" id="form-success" hidden>Teşekkürler! Talebiniz gönderiliyor…</p>
          </form>
        </div>
      </div>

      ${pageSummary("Bu sayfa WOLFSE'den hızlı teklif almak için kullanılan formu içerir: iletişim bilgileri, hizmet ve malzeme türü, kalınlık, adet, termin ve teknik dosya yükleme alanlarıyla. KVKK onayı ve isteğe bağlı pazarlama izni ayrı alanlardır.")}
    </div>
  </section>
  `;

  return {
    path: "/teklif-al",
    title: "Hızlı Teklif Al | Lazer Kesim & Fason İmalat Teklifi | WOLFSE",
    description: "WOLFSE'den hızlı teklif alın: teknik dosyanızı (DXF/DWG/STEP/PDF) yükleyin; malzeme, kalınlık, adet ve termin bilgisiyle üretilebilirlik ve maliyet teklifini alın.",
    extraSchema: [breadcrumbSchema(crumbs)],
    body,
  };
}
