import { machines } from "../data/site.js";
import { icon } from "../lib/icons.js";
import { breadcrumbHtml } from "../lib/layout.js";
import { breadcrumbSchema, faqSchema } from "../lib/schema.js";
import { btn, sectionHeader, machineCard, faqAccordion, checkList, ctaBand, pageSummary } from "../lib/components.js";

const machineFaqs = [
  { q: "Makine kapasiteniz nedir?", a: "Gerçek makine kapasitelerimiz (lazer gücü, çalışma alanı, tonaj, profil aralığı) doğrulandıkça bu sayfada paylaşılacaktır. Projeniz için uygunluğu teklif aşamasında netleştiririz." },
  { q: "Hangi operasyonları tek tedarikçide yapabiliyorsunuz?", a: "Lazer kesim, boru-profil kesim, CNC abkant büküm, kaynaklı imalat ve yüzey işlemleri hazırlığını koordineli şekilde yürütüyoruz." },
  { q: "Maksimum sac/profil ölçüleriniz nedir?", a: "Çalışma alanı ve profil boyu kapasiteleri makine bazında belirlenir. TODO: gerçek değerler girilecek." },
];

export function machineParkPage() {
  const crumbs = [
    { name: "Anasayfa", href: "/" },
    { name: "Makine Parkuru", href: "/makine-parkuru" },
  ];

  const operations = [
    "CNC fiber lazer ile sac kesim",
    "Boru ve profil 3B lazer kesim",
    "CNC abkant ile hassas büküm",
    "MIG/MAG ve TIG kaynaklı imalat",
    "Çapak alma ve yüzey hazırlığı",
    "Ölçüsel kontrol ve kalite güvence",
  ];

  const body = `
  ${breadcrumbHtml(crumbs)}
  <section class="section">
    <div class="container">
      <header class="page-head center-head">
        <h1>WOLFSE Makine Parkuru</h1>
        <p class="lead">Fiber lazer kesimden kaynaklı imalata; sac ve profil işlemeyi tek çatı altında toplayan üretim altyapımız. Aşağıdaki kapasite alanları, gerçek makine bilgilerimizle güncellenecektir.</p>
      </header>

      <div class="notice">
        ${icon("bolt")}
        <p>Kapasite değerleri <span class="todo">TODO</span> olarak işaretli alanlarda gerçek makine bilgileriyle doldurulacaktır. WOLFSE, doğrulanmamış kapasite beyan etmez.</p>
      </div>

      <div class="grid grid-3 mt">
        ${machines.map(machineCard).join("\n        ")}
      </div>
    </div>
  </section>

  <section class="section section-alt">
    <div class="container narrow">
      ${sectionHeader("Operasyonlar", "Hangi Operasyonları Yapabiliyoruz?")}
      ${checkList(operations)}

      <h2 class="mt">Malzeme ve Kalınlık</h2>
      <p>Siyah sac, paslanmaz çelik, alüminyum ve galvaniz başta olmak üzere farklı malzemeleri işliyoruz. İşlenebilen kalınlık aralıkları malzeme ve makineye göre değişir. <span class="todo">TODO: malzeme bazında kalınlık aralıkları girilecek.</span></p>

      <h2 class="mt">Fotoğraf Galerisi</h2>
      <p>Makine parkuru ve üretim görsellerimiz <a href="/galeri">Galeri</a> sayfasında yer alacaktır. <span class="todo">TODO: gerçek üretim fotoğrafları eklenecek.</span></p>

      <h2 class="mt" id="sss">Makine Parkuru — Sık Sorulan Sorular</h2>
      ${faqAccordion(machineFaqs, "machine")}

      ${pageSummary("Bu sayfa WOLFSE'nin makine parkurunu (fiber lazer, boru-profil lazer, CNC abkant pres, kaynak ve ölçüm ekipmanları), yapılabilen operasyonları ve işlenen malzemeleri açıklar. Kapasite değerleri doğrulandıkça güncellenir.")}
    </div>
  </section>
  ${ctaBand("Üretim Kapasitemizi Projenize Yönlendirin", "Parçanız için doğru makine ve süreci birlikte belirleyelim.")}
  `;

  return {
    path: "/makine-parkuru",
    title: "Makine Parkuru | Fiber Lazer, Abkant & Kaynak | WOLFSE",
    description: "WOLFSE makine parkuru: CNC fiber lazer kesim, boru-profil lazer, CNC abkant pres, kaynak ve ölçüm ekipmanları. Sac ve profil işlemeyi tek tedarikçide birleştiriyoruz.",
    extraSchema: [breadcrumbSchema(crumbs), faqSchema(machineFaqs)],
    body,
  };
}
