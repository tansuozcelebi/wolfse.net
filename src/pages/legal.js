import { site } from "../data/site.js";
import { breadcrumbHtml } from "../lib/layout.js";
import { breadcrumbSchema } from "../lib/schema.js";
import { pageSummary } from "../lib/components.js";

function legalShell({ path, name, h1, lead, sections, title, description }) {
  const crumbs = [
    { name: "Anasayfa", href: "/" },
    { name, href: path },
  ];
  const content = sections
    .map((s) => `<h2>${s.h}</h2>${s.p.map((para) => `<p>${para}</p>`).join("\n      ")}`)
    .join("\n      ");
  const body = `
  ${breadcrumbHtml(crumbs)}
  <section class="section">
    <div class="container narrow legal">
      <h1>${h1}</h1>
      <p class="lead">${lead}</p>
      <div class="callout">
        <p><strong>Yasal uyarı:</strong> Bu metin genel bir şablondur ve yürürlüğe girmeden önce şirket bilgileriyle güncellenmeli, bir hukuk danışmanı tarafından gözden geçirilmelidir. <span class="todo">TODO: hukuki inceleme ve şirket künyesi.</span></p>
      </div>
      ${content}
      <p class="muted">Son güncelleme: ${site.buildDate}</p>
      ${pageSummary(`Bu sayfa ${site.brand} ${name.toLowerCase()} metnini içerir.`)}
    </div>
  </section>
  `;
  return {
    path,
    title,
    description,
    robots: "index, follow",
    extraSchema: [breadcrumbSchema(crumbs)],
    body,
  };
}

export function kvkkPage() {
  return legalShell({
    path: "/kvkk",
    name: "KVKK Aydınlatma Metni",
    h1: "KVKK Aydınlatma Metni",
    lead: `6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") kapsamında, ${site.brand} olarak veri sorumlusu sıfatıyla kişisel verilerinizin işlenmesine ilişkin sizi bilgilendiririz.`,
    title: "KVKK Aydınlatma Metni | WOLFSE",
    description: "WOLFSE KVKK aydınlatma metni: 6698 sayılı Kanun kapsamında kişisel verilerin işlenme amaçları, hukuki sebepleri ve ilgili kişi hakları.",
    sections: [
      { h: "1. Veri Sorumlusu", p: [`Kişisel verileriniz, veri sorumlusu sıfatıyla ${site.legalName} tarafından aşağıda açıklanan kapsamda işlenmektedir. TODO: resmi ünvan, adres ve iletişim bilgileri eklenecek.`] },
      { h: "2. İşlenen Kişisel Veriler", p: ["Teklif ve iletişim formları aracılığıyla; ad-soyad, firma adı, telefon, e-posta, şehir, proje/teknik dosya bilgileri ve mesaj içeriği gibi veriler işlenebilir."] },
      { h: "3. İşleme Amaçları", p: ["Kişisel verileriniz; teklif taleplerinin değerlendirilmesi, sizinle iletişim kurulması, sözleşmesel süreçlerin yürütülmesi, hizmet kalitesinin artırılması ve yasal yükümlülüklerin yerine getirilmesi amaçlarıyla işlenir."] },
      { h: "4. Hukuki Sebepler", p: ["Verileriniz; bir sözleşmenin kurulması veya ifasıyla doğrudan ilgili olması, meşru menfaat ve açık rıza (pazarlama izni gibi) hukuki sebeplerine dayanılarak işlenir."] },
      { h: "5. Aktarım", p: ["Kişisel verileriniz, yasal yükümlülükler ve hizmetin gerektirdiği ölçüde yetkili kurumlara ve hizmet sağlayıcılara aktarılabilir. TODO: kullanılan hizmet sağlayıcılar (e-posta, form, analitik) netleştirilecek."] },
      { h: "6. Saklama Süresi", p: ["Verileriniz, işleme amacının gerektirdiği ve mevzuatın öngördüğü süre boyunca saklanır; süre sonunda silinir, yok edilir veya anonim hale getirilir."] },
      { h: "7. İlgili Kişi Hakları", p: [`KVKK m.11 kapsamında; verilerinize erişme, düzeltilmesini/silinmesini isteme ve işlenmesine itiraz etme gibi haklara sahipsiniz. Taleplerinizi ${site.contact.email} adresine iletebilirsiniz.`] },
    ],
  });
}

export function cerezPage() {
  return legalShell({
    path: "/cerez-politikasi",
    name: "Çerez Politikası",
    h1: "Çerez Politikası",
    lead: "Bu Çerez Politikası, web sitemizde çerezlerin nasıl ve hangi amaçlarla kullanıldığını açıklar.",
    title: "Çerez Politikası | WOLFSE",
    description: "WOLFSE çerez politikası: web sitesinde kullanılan zorunlu, analitik ve pazarlama çerezleri, amaçları ve çerez tercihlerinin yönetimi.",
    sections: [
      { h: "Çerez Nedir?", p: ["Çerezler, ziyaret ettiğiniz web siteleri tarafından tarayıcınıza kaydedilen küçük metin dosyalarıdır. Sitenin düzgün çalışmasını ve deneyiminizin iyileştirilmesini sağlar."] },
      { h: "Kullandığımız Çerez Türleri", p: [
        "Zorunlu çerezler: Sitenin temel işlevleri için gereklidir.",
        "Analitik çerezler: Ziyaretçi davranışını anlamak ve siteyi geliştirmek için kullanılır (ör. Google Analytics 4). TODO: kullanılan araçlar netleştirilecek.",
        "Pazarlama çerezleri: Reklam ve yeniden pazarlama için kullanılabilir (ör. Google Ads, Meta Pixel, LinkedIn Insight Tag). Bu çerezler yalnızca onayınızla çalıştırılır.",
      ] },
      { h: "Çerez Tercihlerinizi Yönetme", p: ["Site üzerindeki çerez bildirimi aracılığıyla tercihlerinizi belirleyebilir; ayrıca tarayıcı ayarlarınızdan çerezleri silebilir veya engelleyebilirsiniz. Zorunlu çerezlerin engellenmesi bazı işlevleri etkileyebilir."] },
    ],
  });
}

export function gizlilikPage() {
  return legalShell({
    path: "/gizlilik-politikasi",
    name: "Gizlilik Politikası",
    h1: "Gizlilik Politikası",
    lead: `${site.brand} olarak ziyaretçilerimizin ve müşterilerimizin gizliliğine önem veriyoruz. Bu politika, bilgilerinizin nasıl toplandığını ve korunduğunu açıklar.`,
    title: "Gizlilik Politikası | WOLFSE",
    description: "WOLFSE gizlilik politikası: toplanan bilgiler, kullanım amaçları, veri güvenliği ve üçüncü taraf hizmetlerle ilgili gizlilik esasları.",
    sections: [
      { h: "Topladığımız Bilgiler", p: ["Teklif ve iletişim formları aracılığıyla paylaştığınız iletişim ve proje bilgileri ile site kullanımına ilişkin teknik veriler (analitik) toplanabilir."] },
      { h: "Bilgilerin Kullanımı", p: ["Bilgileriniz; talebinizi yanıtlamak, hizmet sunmak, siteyi iyileştirmek ve yasal yükümlülükleri yerine getirmek için kullanılır. Açık rızanız olmadan pazarlama amacıyla kullanılmaz."] },
      { h: "Veri Güvenliği", p: ["Verilerinizin yetkisiz erişime karşı korunması için makul teknik ve idari önlemler alınır. TODO: barındırma ve güvenlik altyapısı netleştirilecek."] },
      { h: "Üçüncü Taraf Hizmetleri", p: ["Site; form gönderimi, analitik ve reklam ölçümü için üçüncü taraf hizmetleri kullanabilir. Bu hizmetlerin kendi gizlilik politikaları geçerlidir."] },
      { h: "İletişim", p: [`Gizlilikle ilgili sorularınız için ${site.contact.email} adresinden bize ulaşabilirsiniz.`] },
    ],
  });
}
