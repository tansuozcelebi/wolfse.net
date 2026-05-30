import { sectors, services } from "../data/site.js";
import { icon } from "../lib/icons.js";
import { breadcrumbHtml } from "../lib/layout.js";
import { breadcrumbSchema } from "../lib/schema.js";
import { btn, sectionHeader, sectorCard, checkList, relatedLinks, ctaBand, pageSummary } from "../lib/components.js";

export function sectorsIndexPage() {
  const crumbs = [
    { name: "Anasayfa", href: "/" },
    { name: "Sektörler", href: "/sektorler" },
  ];
  const body = `
  ${breadcrumbHtml(crumbs)}
  <section class="section">
    <div class="container">
      ${sectionHeader("Sektörler", "Sektörlere Göre Metal İşleme Çözümleri", "Her sektörün teknik beklentisine uygun, esnek ve güvenilir üretim.", { as: "h1" })}
      <div class="grid grid-3">
        ${sectors.map(sectorCard).join("\n        ")}
      </div>
      ${pageSummary("Bu sayfa WOLFSE'nin hizmet verdiği sektörleri (makine imalatı, otomotiv yan sanayi, çelik konstrüksiyon, enerji, tarım makineleri, mobilya & dekoratif metal, savunma & endüstriyel) listeler.")}
    </div>
  </section>
  ${ctaBand("Sektörünüze Özel Çözüm İçin Teklif Alın")}
  `;
  return {
    path: "/sektorler",
    title: "Sektörler | Metal İşleme Çözümleri | WOLFSE",
    description: "WOLFSE'nin hizmet verdiği sektörler: makine imalatı, otomotiv yan sanayi, çelik konstrüksiyon, enerji, tarım makineleri, mobilya & dekoratif metal, savunma & endüstriyel parçalar.",
    extraSchema: [breadcrumbSchema(crumbs)],
    body,
  };
}

export function sectorPages() {
  return sectors.map((sec) => {
    const crumbs = [
      { name: "Anasayfa", href: "/" },
      { name: "Sektörler", href: "/sektorler" },
      { name: sec.title, href: "/sektorler/" + sec.slug },
    ];
    // İlgili hizmetler: bu sektörü listeleyen hizmetler
    const relatedServices = services.filter((s) => s.sectors.includes(sec.slug));
    const related = [
      ...relatedServices.slice(0, 4).map((s) => ({ label: s.title, href: "/hizmetler/" + s.slug })),
      { label: "Makine Parkuru", href: "/makine-parkuru" },
      { label: "Teklif Al", href: "/teklif-al" },
    ];

    const body = `
  ${breadcrumbHtml(crumbs)}
  <section class="section">
    <div class="container narrow">
      <header class="page-head">
        <div class="page-head-icon">${icon(sec.icon)}</div>
        <h1>${sec.title} için Metal İşleme Çözümleri</h1>
        <p class="lead">${sec.text}</p>
        <div class="page-head-cta">${btn("Hızlı Teklif Al", "/teklif-al", "primary", { icon: "send" })}</div>
      </header>

      <h2>Bu Sektörde Sunduğumuz Hizmetler</h2>
      ${checkList(relatedServices.length ? relatedServices.map((s) => s.title) : services.map((s) => s.title))}

      <h2>Neden WOLFSE?</h2>
      <p>${sec.title} alanında; teknik resme uygun üretim, tekrarlanabilir kalite ve hızlı termin ile tedarik zincirinizi sadeleştiriyoruz. Kesim, büküm, kaynak ve yüzey işlemlerini tek tedarikçide birleştirerek montaja hazır parça teslim ediyoruz.</p>

      ${relatedLinks("İlgili Sayfalar", related)}

      ${pageSummary(`Bu sayfa WOLFSE'nin ${sec.title} sektörüne yönelik metal işleme ve lazer kesim çözümlerini, uygun hizmetleri ve avantajlarını açıklar.`)}
    </div>
  </section>
  ${ctaBand(`${sec.title} Projeniz İçin Teklif Alın`)}
  `;

    return {
      path: "/sektorler/" + sec.slug,
      title: `${sec.title} | Metal İşleme & Lazer Kesim | WOLFSE`,
      description: `${sec.title} için WOLFSE metal işleme çözümleri: ${sec.short} Lazer kesim, büküm ve kaynaklı imalatı tek tedarikçide birleştiriyoruz.`,
      extraSchema: [breadcrumbSchema(crumbs)],
      body,
    };
  });
}
