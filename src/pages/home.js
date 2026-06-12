import { site, services, sectors, posts } from "../data/site.js";
import { icon } from "../lib/icons.js";
import { whatsappLink } from "../lib/layout.js";
import {
  btn,
  sectionHeader,
  serviceCard,
  sectorCard,
  advantageCard,
  blogCard,
  processSteps,
  ctaBand,
  trustBar,
} from "../lib/components.js";
import { faqSchema } from "../lib/schema.js";
import { generalFaqs } from "../data/site.js";

const advantages = [
  { icon: "clock", title: "Hızlı Teklif Süreci", text: "Eksiksiz teknik dosya ile hızlı geri dönüş; üretilebilirlik, maliyet ve termin tek seferde netleşir." },
  { icon: "file", title: "Teknik Dosya ile Çalışma", text: "DXF, DWG, STEP ve PDF dosyalarıyla teknik resme birebir uygun, hatasız üretim." },
  { icon: "target", title: "Hassas ve Tekrarlanabilir", text: "Mikron seviyesinde hassasiyet ve seri üretimde tekrarlanabilir kalite disiplini." },
  { icon: "layers", title: "Esnek Fason Üretim", text: "Tek parça prototipten seri üretime; kesim, büküm, kaynak entegre tek tedarikçi." },
  { icon: "cube", title: "Malzeme & Kalınlık Çeşitliliği", text: "Siyah sac, paslanmaz, alüminyum ve galvaniz başta olmak üzere geniş malzeme yelpazesi." },
  { icon: "handshake", title: "Sanayiye Uygun Süreç", text: "Şeffaf maliyet, net termin ve B2B beklentilerine uygun güvenilir süreç yönetimi." },
];

const steps = [
  { title: "Teknik dosyanızı gönderin", text: "DXF, DWG, STEP veya PDF dosyanızı teklif formundan yükleyin ya da WhatsApp ile iletin." },
  { title: "Malzeme, kalınlık ve adet paylaşın", text: "Malzeme cinsi, sac kalınlığı, adet ve termin beklentinizi belirtin." },
  { title: "Üretilebilirlik ve maliyet analizi", text: "Ekibimiz dosyanızı inceler, üretilebilirliği ve maliyeti değerlendirir." },
  { title: "Teklif ve termin bilgisini alın", text: "Net fiyat ve termin teklifimizle üretime hızlıca başlayın." },
];

export function homePage() {
  const heroTrust = [
    "Hızlı teklif dönüşü",
    "Hassas kesim",
    "Projeye özel üretim",
    "Sac, boru ve profil işleme",
    "B2B fason üretim",
    "DXF · DWG · STEP · PDF ile çalışma",
  ];

  const body = `
  <section class="hero">
    <div class="hero-bg" aria-hidden="true"><span class="laser-beam"></span><span class="grid-overlay"></span></div>
    <div class="container hero-inner">
      <h1>Çeliğe keskin bir diş: CNC Lazer Kesim ve Fason Metal İşleme Çözümleri</h1>
      <p class="hero-lead">${site.brand}; sac lazer kesim, boru-profil lazer kesim, abkant büküm ve kaynaklı imalat süreçlerinde hızlı teklif, hassas üretim ve güvenilir teslimat sunan modern metal işleme partnerinizdir.</p>
      <div class="hero-cta">
        ${btn("Hızlı Teklif Al", "/teklif-al", "primary", { icon: "send" })}
        ${btn("Hizmetleri İncele", "/hizmetler", "ghost", { icon: "gear" })}
        ${btn("WhatsApp ile Proje Gönder", whatsappLink(), "wa", { icon: "whatsapp" })}
      </div>
      ${trustBar(heroTrust)}
    </div>
  </section>

  <section class="section">
    <div class="container">
      ${sectionHeader("Hizmetlerimiz", "Uçtan Uca Metal İşleme Çözümleri", "Lazer kesimden kaynaklı imalata, tek tedarikçide montaja hazır üretim.")}
      <div class="grid grid-3">
        ${services.map(serviceCard).join("\n        ")}
      </div>
    </div>
  </section>

  <section class="section section-alt">
    <div class="container">
      ${sectionHeader("Neden WOLFSE?", "Sanayinin Çevik ve Güvenilir Üretim Ortağı", "Ölçülebilir kapasite, net proses ve hızlı geri dönüş.")}
      <div class="grid grid-3">
        ${advantages.map(advantageCard).join("\n        ")}
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      ${sectionHeader("Sektörler", "Sektörlere Göre Çözümler", "Farklı sektörlerin teknik beklentilerine uygun, esnek metal işleme.")}
      <div class="grid grid-3">
        ${sectors.map(sectorCard).join("\n        ")}
      </div>
    </div>
  </section>

  <section class="section section-alt">
    <div class="container">
      ${sectionHeader("Nasıl Çalışırız?", "4 Adımda Teklif Alma Süreci", "Dosyadan teslimat planına; şeffaf ve hızlı.")}
      ${processSteps(steps)}
      <div class="center mt">${btn("Teklif Formunu Doldur", "/teklif-al", "primary", { icon: "send" })}</div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      ${sectionHeader("Teknik Bilgi Merkezi", "Blog & Rehberler", "Lazer kesim, büküm ve dosya hazırlama hakkında pratik bilgiler.")}
      <div class="grid grid-3">
        ${posts.slice(0, 3).map(blogCard).join("\n        ")}
      </div>
      <div class="center mt">${btn("Tüm Yazıları Görün", "/blog", "ghost", { icon: "arrow" })}</div>
    </div>
  </section>

  ${ctaBand("Projenizi WOLFSE ile Keskinleştirin", "Teknik dosyanızı gönderin; üretilebilirlik, maliyet ve termin için hızlı geri dönüş alın.")}
  `;

  return {
    path: "/",
    title: `${site.brand} | İzmir Lazer Kesim & Fason Metal İşleme — ${site.slogan}`,
    description: site.description,
    ogType: "website",
    extraSchema: [faqSchema(generalFaqs)],
    body,
  };
}
