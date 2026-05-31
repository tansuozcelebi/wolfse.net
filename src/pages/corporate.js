import { site, services } from "../data/site.js";
import { icon } from "../lib/icons.js";
import { breadcrumbHtml } from "../lib/layout.js";
import { breadcrumbSchema } from "../lib/schema.js";
import { btn, sectionHeader, advantageCard, checkList, ctaBand } from "../lib/components.js";

function corpCrumbs(name, href) {
  return [
    { name: "Anasayfa", href: "/" },
    { name: "Kurumsal", href: "/kurumsal" },
    { name, href },
  ];
}

export function kurumsalIndexPage() {
  const crumbs = [
    { name: "Anasayfa", href: "/" },
    { name: "Kurumsal", href: "/kurumsal" },
  ];
  const links = [
    { href: "/hakkimizda", t: "Hakkımızda", d: "WOLFSE'nin üretim yaklaşımı ve uzmanlık alanları." },
    { href: "/vizyon-misyon", t: "Vizyon & Misyon", d: "Nereye gidiyoruz ve neyi taahhüt ediyoruz." },
    { href: "/degerlerimiz", t: "Değerlerimiz", d: "Çalışma kültürümüzü belirleyen ilkeler." },
    { href: "/kalite-yaklasimi", t: "Kalite Yaklaşımı", d: "Tekrarlanabilir kalite için süreç disiplini." },
  ];
  const body = `
  ${breadcrumbHtml(crumbs)}
  <section class="section">
    <div class="container">
      ${sectionHeader("Kurumsal", "WOLFSE Hakkında", "Metalde keskin güç: hassasiyet, hız ve güvenilirlik odaklı bir üretim partneri.", { as: "h1" })}
      <div class="grid grid-2">
        ${links
          .map(
            (l) => `<a class="card link-card" href="${l.href}"><h3>${l.t} ${icon("arrow")}</h3><p>${l.d}</p></a>`
          )
          .join("\n        ")}
      </div>
    </div>
  </section>
  ${ctaBand("WOLFSE ile Çalışmaya Hazır mısınız?")}
  `;
  return {
    path: "/kurumsal",
    title: "Kurumsal | WOLFSE Hakkında",
    description: "WOLFSE kurumsal: hakkımızda, vizyon & misyon, değerlerimiz ve kalite yaklaşımı. Hassasiyet, hız ve güvenilirlik odaklı B2B metal işleme partneri.",
    extraSchema: [breadcrumbSchema(crumbs)],
    body,
  };
}

export function hakkimizdaPage() {
  const crumbs = corpCrumbs("Hakkımızda", "/hakkimizda");
  const body = `
  ${breadcrumbHtml(crumbs)}
  <section class="section">
    <div class="container narrow">
      <div style="display: flex; align-items: center; gap: 2rem; margin-bottom: 2rem;">
        <img src="/assets/logo/wolfse-logo.png" alt="WOLFSE" style="width: 200px; height: auto; flex-shrink: 0;">
        <h1 style="margin: 0;">Hakkımızda</h1>
      </div>
      <p class="lead">${site.brand}, sac ve profil metal işleme alanında hız, hassasiyet ve güvenilirliği bir araya getiren modern bir fason üretim partneridir.</p>
      <p>${site.brand}; CNC fiber lazer kesim, sac lazer kesim, boru-profil lazer kesim, CNC abkant büküm, kaynaklı imalat ve metal yüzey işlemlerini tek çatı altında sunar. Teknik resimden montaja hazır parçaya kadar tüm süreci yönetir; sanayi müşterilerinin tedarik zincirini sadeleştirir.</p>
      <p>Yaklaşımımız üç temele dayanır: <strong>ölçülebilir kapasite</strong>, <strong>net proses</strong> ve <strong>hızlı geri dönüş</strong>. "Biz en iyisiyiz" söylemi yerine; şeffaf maliyet, tekrarlanabilir kalite ve zamanında teslimat taahhüt ederiz.</p>

      <h2>Ne Yapıyoruz?</h2>
      ${checkList(services.map((s) => s.title))}

      <h2>Çalışma Biçimimiz</h2>
      <p>Teknik dosyanızı (DXF, DWG, STEP, PDF) aldığımızda üretilebilirlik analizini yapar; malzeme, kalınlık, tolerans ve termin konularını netleştirerek size şeffaf bir teklif sunarız. Onay sonrası kesim, büküm, kaynak ve yüzey işlemlerini koordine ederek parçanızı montaja hazır teslim ederiz.</p>

    </div>
  </section>
  ${ctaBand("Projenizi Konuşalım")}
  `;
  return {
    path: "/hakkimizda",
    title: "Hakkımızda | WOLFSE Metal İşleme & Lazer Kesim",
    description: "WOLFSE hakkında: CNC lazer kesim, abkant büküm ve kaynaklı imalatı tek tedarikçide birleştiren, hız, hassasiyet ve güvenilirlik odaklı B2B fason üretim partneri.",
    extraSchema: [breadcrumbSchema(crumbs)],
    body,
  };
}

export function vizyonMisyonPage() {
  const crumbs = corpCrumbs("Vizyon & Misyon", "/vizyon-misyon");
  const body = `
  ${breadcrumbHtml(crumbs)}
  <section class="section">
    <div class="container narrow">
      <h1>Vizyon & Misyon</h1>
      <div class="grid grid-2 mt">
        <article class="card pillar-card">
          <div class="card-icon">${icon("target")}</div>
          <h2>Vizyonumuz</h2>
          <p>Metal işleme ve lazer kesimde teknoloji, hız ve güveni standart haline getirerek; sanayi müşterilerinin ilk tercih ettiği çevik üretim partneri olmak.</p>
        </article>
        <article class="card pillar-card">
          <div class="card-icon">${icon("bolt")}</div>
          <h2>Misyonumuz</h2>
          <p>Teknik resme birebir uygun, tekrarlanabilir kalitede üretimi; şeffaf maliyet ve net terminle birleştirerek müşterilerimize ölçülebilir değer sunmak.</p>
        </article>
      </div>
    </div>
  </section>
  ${ctaBand("WOLFSE ile Üretin")}
  `;
  return {
    path: "/vizyon-misyon",
    title: "Vizyon & Misyon | WOLFSE",
    description: "WOLFSE vizyon ve misyonu: metal işlemede teknoloji, hız ve güveni standartlaştırmak; şeffaf maliyet ve net terminle ölçülebilir değer sunmak.",
    extraSchema: [breadcrumbSchema(crumbs)],
    body,
  };
}

export function degerlerimizPage() {
  const crumbs = corpCrumbs("Değerlerimiz", "/degerlerimiz");
  const values = [
    { icon: "target", title: "Hassasiyet", text: "Teknik resme birebir uygunluk ve mikron seviyesinde özen." },
    { icon: "bolt", title: "Hız", text: "Hızlı teklif, hızlı üretim, zamanında teslimat." },
    { icon: "handshake", title: "Güven", text: "Şeffaf süreç, net iletişim ve verilen sözün tutulması." },
    { icon: "layers", title: "Çeviklik", text: "Değişen ihtiyaçlara esnek, çözüm odaklı yaklaşım." },
    { icon: "check", title: "Tutarlılık", text: "Seri üretimde tekrarlanabilir kalite disiplini." },
    { icon: "shield", title: "Sorumluluk", text: "İş güvenliği, kalite ve müşteri gizliliğine bağlılık." },
  ];
  const body = `
  ${breadcrumbHtml(crumbs)}
  <section class="section">
    <div class="container">
      ${sectionHeader("Değerlerimiz", "Çalışma Kültürümüzü Belirleyen İlkeler", "", { as: "h1" })}
      <div class="grid grid-3">
        ${values.map(advantageCard).join("\n        ")}
      </div>
    </div>
  </section>
  ${ctaBand("Değerlerimizi Üretimde Görün")}
  `;
  return {
    path: "/degerlerimiz",
    title: "Değerlerimiz | WOLFSE",
    description: "WOLFSE değerleri: hassasiyet, hız, güven, çeviklik, tutarlılık ve sorumluluk. Sanayi müşterileri için güvenilir ve şeffaf üretim kültürü.",
    extraSchema: [breadcrumbSchema(crumbs)],
    body,
  };
}

export function kaliteYaklasimiPage() {
  const crumbs = corpCrumbs("Kalite Yaklaşımı", "/kalite-yaklasimi");
  const body = `
  ${breadcrumbHtml(crumbs)}
  <section class="section">
    <div class="container narrow">
      <h1>Kalite Yaklaşımı</h1>
      <p class="lead">Kalite; tek bir kontrol değil, baştan sona tasarlanmış bir süreçtir. WOLFSE'de kalite, teklif aşamasındaki üretilebilirlik analiziyle başlar.</p>

      <h2>Süreç Bazlı Kalite</h2>
      ${checkList([
        "Teklif öncesi üretilebilirlik (DFM) değerlendirmesi",
        "Doğru malzeme, kalınlık ve tolerans planlaması",
        "Kesim, büküm ve kaynak parametrelerinin standardizasyonu",
        "Ölçüsel kontrol ve ara/son kontrol adımları",
        "Tekrarlanabilirlik için fikstür ve aparat kullanımı",
        "Sevkiyat öncesi görsel ve ölçüsel son kontrol",
      ])}

      <h2>Şeffaflık ve İzlenebilirlik</h2>
      <p>Kritik ölçüler teknik resimde tanımlanır ve üretim boyunca takip edilir. Olası sapmalar şeffaf şekilde paylaşılır; sürpriz yerine çözüm odaklı iletişim önceliğimizdir.</p>

      <div class="callout">
        <p><strong>Belgelendirme:</strong> Sahip olunan kalite/yönetim sistem belgeleri (varsa) burada listelenecektir. <span class="todo">TODO: kalite belgeleri (ISO vb.) doğrulanıp eklenecek — uydurma beyan yapılmaz.</span></p>
      </div>
    </div>
  </section>
  ${ctaBand("Kaliteli Üretim İçin Teklif Alın")}
  `;
  return {
    path: "/kalite-yaklasimi",
    title: "Kalite Yaklaşımı | WOLFSE",
    description: "WOLFSE kalite yaklaşımı: üretilebilirlik analizi, ölçüsel kontrol, tekrarlanabilirlik ve şeffaf izlenebilirlik ile süreç bazlı kalite yönetimi.",
    extraSchema: [breadcrumbSchema(crumbs)],
    body,
  };
}
