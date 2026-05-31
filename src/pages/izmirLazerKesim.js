import { site, services, sectors } from "../data/site.js";
import { icon } from "../lib/icons.js";
import { breadcrumbHtml, whatsappLink } from "../lib/layout.js";
import { breadcrumbSchema, faqSchema, serviceSchema } from "../lib/schema.js";
import {
  btn,
  sectionHeader,
  serviceCard,
  faqAccordion,
  checkList,
  relatedLinks,
  ctaBand,
  pageSummary,
} from "../lib/components.js";

// İzmir'e özel yerel SEO landing sayfası — "izmir lazer kesim" odaklı.
const izmirFaqs = [
  { q: "İzmir'de lazer kesim hizmetini nasıl alabilirim?", a: "Teknik dosyanızı (DXF, DWG, STEP veya PDF) teklif formundan yükleyin ya da WhatsApp ile gönderin. Malzeme, kalınlık ve adet bilgisiyle birlikte hızlıca üretilebilirlik, maliyet ve termin teklifi sunarız." },
  { q: "İzmir ve çevresine teslimat yapıyor musunuz?", a: "İzmir ve çevre sanayi bölgelerine üretim ve teslimat seçeneklerini teklif aşamasında netleştiriyoruz. Detaylar için iletişime geçin." },
  { q: "İzmir'de hangi metal işleme hizmetlerini sunuyorsunuz?", a: "CNC fiber lazer kesim, sac lazer kesim, boru-profil lazer kesim, CNC abkant büküm, kaynaklı imalat, metal yüzey işlemleri ve projeye özel fason imalatı tek tedarikçide sunuyoruz." },
  { q: "Minimum sipariş adediniz var mı?", a: "Hayır. Tek parça prototipten seri üretime kadar İzmir'deki sanayi müşterilerine esnek üretim sağlıyoruz." },
  { q: "Teklif ne kadar sürede dönüyor?", a: "Dosyanız eksiksizse hızlı geri dönüş hedefliyoruz. Net süre için projenizi paylaşın." },
];

export function izmirLazerKesimPage() {
  const crumbs = [
    { name: "Anasayfa", href: "/" },
    { name: "İzmir Lazer Kesim", href: "/izmir-lazer-kesim" },
  ];

  const related = [
    { label: "CNC Fiber Lazer Kesim", href: "/hizmetler/cnc-fiber-lazer-kesim" },
    { label: "Sac Lazer Kesim", href: "/hizmetler/sac-lazer-kesim" },
    { label: "Boru ve Profil Lazer Kesim", href: "/hizmetler/boru-profil-lazer-kesim" },
    { label: "CNC Abkant Büküm", href: "/hizmetler/cnc-abkant-bukum" },
    { label: "Teklif Al", href: "/teklif-al" },
    { label: "İletişim", href: "/iletisim" },
  ];

  const body = `
  ${breadcrumbHtml(crumbs)}
  <section class="section">
    <div class="container narrow">
      <header class="page-head">
        <div class="page-head-icon">${icon("laser")}</div>
        <h1>İzmir Lazer Kesim ve Fason Metal İşleme</h1>
        <p class="lead">${site.brand}, İzmir merkezli CNC fiber lazer kesim, sac ve boru-profil lazer kesim, abkant büküm ve kaynaklı imalat hizmetleriyle sanayi müşterilerine hız, hassasiyet ve güvenilir teslimat sunar.</p>
        <div class="page-head-cta">
          ${btn("Hızlı Teklif Al", "/teklif-al", "primary", { icon: "send" })}
          ${btn("WhatsApp ile Proje Gönder", whatsappLink(), "wa", { icon: "whatsapp" })}
        </div>
      </header>

      <h2>İzmir'de Lazer Kesim İçin Neden WOLFSE?</h2>
      <p>İzmir ve çevresindeki üretici firmalar; kesim, büküm ve kaynak süreçlerini tek tedarikçide birleştirerek tedarik zincirini sadeleştirmek ister. ${site.brand}, teknik resme birebir uygun üretim, tekrarlanabilir kalite ve hızlı teklif süreciyle bu ihtiyaca yanıt verir.</p>
      ${checkList([
        "CNC fiber lazer ile siyah sac, paslanmaz, alüminyum ve galvaniz kesim",
        "Boru ve profilde 3B hassas lazer kesim",
        "CNC abkant büküm ile montaja hazır parça",
        "MIG/MAG ve TIG kaynaklı imalat",
        "Tek parça prototipten seri üretime esneklik",
        "DXF · DWG · STEP · PDF teknik dosya ile çalışma",
      ])}

      <h2>İzmir'de Sunduğumuz Metal İşleme Hizmetleri</h2>
      <div class="grid grid-3">
        ${services.map(serviceCard).join("\n        ")}
      </div>

      <h2 class="mt">Hizmet Verdiğimiz Sektörler</h2>
      <div class="chips">
        ${sectors.map((s) => `<a class="chip" href="/sektorler/${s.slug}">${s.title}</a>`).join("\n        ")}
      </div>

      <h2 id="sss">İzmir Lazer Kesim — Sık Sorulan Sorular</h2>
      ${faqAccordion(izmirFaqs, "izmir")}

      ${relatedLinks("İlgili Sayfalar", related)}

      ${pageSummary("Bu sayfa, İzmir merkezli WOLFSE'nin lazer kesim, abkant büküm, kaynaklı imalat ve fason metal işleme hizmetlerini; avantajlarını, sektörlerini ve teklif sürecini açıklar.")}
    </div>
  </section>
  ${ctaBand("İzmir'de Lazer Kesim Projeniz İçin Teklif Alın", "Teknik dosyanızı gönderin; üretilebilirlik, maliyet ve termin için hızlı geri dönüş alın.")}
  `;

  return {
    path: "/izmir-lazer-kesim",
    title: "İzmir Lazer Kesim | CNC Fiber, Sac & Profil Kesim | WOLFSE",
    description:
      "İzmir lazer kesim hizmeti: WOLFSE ile CNC fiber lazer kesim, sac ve boru-profil lazer kesim, abkant büküm ve kaynaklı imalat. Hızlı teklif için teknik dosyanızı gönderin.",
    extraSchema: [
      breadcrumbSchema(crumbs),
      faqSchema(izmirFaqs),
      {
        "@context": "https://schema.org",
        "@type": "Service",
        serviceType: "Lazer Kesim",
        name: "İzmir Lazer Kesim",
        description:
          "İzmir merkezli CNC fiber lazer kesim, sac ve boru-profil lazer kesim, abkant büküm ve kaynaklı imalat hizmetleri.",
        url: site.domain + "/izmir-lazer-kesim",
        provider: { "@id": site.domain + "/#organization" },
        areaServed: { "@type": "City", name: "İzmir" },
        category: "Metal işleme / Lazer kesim",
      },
    ],
    body,
  };
}
