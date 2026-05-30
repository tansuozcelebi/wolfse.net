import { services, sectors } from "../data/site.js";
import { icon } from "../lib/icons.js";
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
import { breadcrumbHtml } from "../lib/layout.js";
import {
  serviceSchema,
  faqSchema,
  breadcrumbSchema,
} from "../lib/schema.js";

export function servicesIndexPage() {
  const crumbs = [
    { name: "Anasayfa", href: "/" },
    { name: "Hizmetler", href: "/hizmetler" },
  ];
  const body = `
  ${breadcrumbHtml(crumbs)}
  <section class="section">
    <div class="container">
      ${sectionHeader("Hizmetler", "CNC Lazer Kesim ve Fason Metal İşleme Hizmetleri", "Lazer kesim, abkant büküm, kaynaklı imalat ve yüzey işlemlerini tek tedarikçide birleştiriyoruz.", { as: "h1" })}
      <div class="grid grid-3">
        ${services.map(serviceCard).join("\n        ")}
      </div>
      ${pageSummary("Bu sayfa WOLFSE'nin sunduğu CNC fiber lazer kesim, sac lazer kesim, boru-profil lazer kesim, CNC abkant büküm, kaynaklı imalat, metal yüzey işlemleri ve projeye özel fason imalat hizmetlerini listeler.")}
    </div>
  </section>
  ${ctaBand("Hangi Hizmete İhtiyacınız Var?", "Projenizi anlatın; doğru süreç kombinasyonunu birlikte belirleyelim.")}
  `;
  return {
    path: "/hizmetler",
    title: "Hizmetler | CNC Lazer Kesim, Büküm & Fason İmalat | WOLFSE",
    description: "WOLFSE hizmetleri: CNC fiber lazer kesim, sac lazer kesim, boru-profil lazer kesim, CNC abkant büküm, kaynaklı imalat, metal yüzey işlemleri ve projeye özel fason metal imalat.",
    extraSchema: [breadcrumbSchema(crumbs)],
    body,
  };
}

export function servicePages() {
  return services.map((svc) => {
    const crumbs = [
      { name: "Anasayfa", href: "/" },
      { name: "Hizmetler", href: "/hizmetler" },
      { name: svc.title, href: "/hizmetler/" + svc.slug },
    ];

    const svcSectors = svc.sectors
      .map((slug) => sectors.find((s) => s.slug === slug))
      .filter(Boolean);

    // İç linkleme: diğer hizmetler + makine + teklif + ilgili blog
    const otherServices = services.filter((s) => s.slug !== svc.slug).slice(0, 3);
    const related = [
      ...otherServices.map((s) => ({ label: s.title, href: "/hizmetler/" + s.slug })),
      { label: "Makine Parkuru", href: "/makine-parkuru" },
      { label: "Teklif Al", href: "/teklif-al" },
      { label: "DXF/DWG Dosya Hazırlama Rehberi", href: "/blog/dxf-dwg-dosya-hazirlama-rehberi" },
    ];

    const body = `
  ${breadcrumbHtml(crumbs)}
  <section class="section service-detail">
    <div class="container narrow">
      <header class="page-head">
        <div class="page-head-icon">${icon(svc.icon)}</div>
        <h1>${svc.h1}</h1>
        <p class="lead">${svc.intro}</p>
        <div class="page-head-cta">
          ${btn("Hızlı Teklif Al", "/teklif-al", "primary", { icon: "send" })}
          ${btn("Dosya Gereklilikleri", "#dosya", "ghost")}
        </div>
      </header>

      <h2>${svc.title} Nedir?</h2>
      <p>${svc.short}</p>

      <h2 id="malzeme">Hangi Malzemeler İşlenir?</h2>
      ${checkList(svc.materials)}

      <h2>Hangi Sektörlere Uygundur?</h2>
      <div class="chips">
        ${svcSectors.map((s) => `<a class="chip" href="/sektorler/${s.slug}">${s.title}</a>`).join("\n        ")}
      </div>

      <h2>Avantajlar</h2>
      ${checkList(svc.advantages)}

      <h2 id="dosya">Dosya Gönderme Gereklilikleri</h2>
      ${checkList(svc.fileReqs)}

      <h2>Tolerans ve Kalite Yaklaşımı</h2>
      <p>${svc.quality}</p>

      <h2 id="sss">Sık Sorulan Sorular</h2>
      ${faqAccordion(svc.faqs, "svc-" + svc.slug)}

      ${relatedLinks("İlgili Sayfalar", related)}

      ${pageSummary(svc.summary)}
    </div>
  </section>
  ${ctaBand(`${svc.title} İçin Teklif Alın`, "Teknik dosyanızı gönderin; üretilebilirlik, maliyet ve termin bilgisini hızlıca paylaşalım.")}
  `;

    return {
      path: "/hizmetler/" + svc.slug,
      title: svc.seoTitle,
      description: svc.metaDescription,
      ogType: "website",
      extraSchema: [
        serviceSchema(svc),
        breadcrumbSchema(crumbs),
        faqSchema(svc.faqs),
      ],
      body,
    };
  });
}
