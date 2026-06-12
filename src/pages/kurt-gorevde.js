import { site } from "../data/site.js";
import { breadcrumbHtml } from "../lib/layout.js";
import { breadcrumbSchema, videoObjectSchema } from "../lib/schema.js";
import { btn } from "../lib/components.js";

// Tek video izleme sayfası (watch page). Sitenin tek VideoObject kaynağıdır.
export function kurtGorevdePage() {
  const crumbs = [
    { name: "Anasayfa", href: "/" },
    { name: "Kurt Görevde", href: "/kurt-gorevde" },
  ];

  const body = `
  ${breadcrumbHtml(crumbs)}
  <section class="section">
    <div class="container narrow">
      <header class="page-head center-head">
        <h1>Kurt Görevde — WOLFSE Tanıtım Videosu</h1>
        <p class="lead">WOLFSE'nin CNC fiber lazer kesim, sac ve boru-profil lazer kesim, abkant büküm ve kaynaklı imalat süreçlerini gösteren kısa tanıtım videosu.</p>
      </header>
      <div class="kurt-video-container" style="width:100%;background:#000;border-radius:14px;overflow:hidden;display:flex;justify-content:center;align-items:center;">
        <video width="100%" height="auto" controls preload="none" poster="/assets/logo/wolfse-og.png" style="width:100%;height:auto;max-width:100%;display:block;">
          <source src="/assets/video/wolfse-anim.mp4" type="video/mp4">
          Tarayıcınız video oynatmayı desteklemiyor.
        </video>
      </div>
      <p class="mt">WOLFSE; İzmir merkezli, metalde keskin güç. Projeniz için hızlı teklif alın.</p>
      <div class="page-head-cta">
        ${btn("Hızlı Teklif Al", "/teklif-al", "primary", { icon: "send" })}
        ${btn("Hizmetleri İncele", "/hizmetler", "ghost", { icon: "gear" })}
      </div>
    </div>
  </section>
  `;

  return {
    path: "/kurt-gorevde",
    title: "Kurt Görevde — WOLFSE Tanıtım Videosu | İzmir Lazer Kesim",
    description:
      "WOLFSE tanıtım videosu: İzmir merkezli CNC fiber lazer kesim, sac ve profil lazer kesim, abkant büküm ve kaynaklı imalat süreçleri.",
    extraSchema: [
      breadcrumbSchema(crumbs),
      videoObjectSchema({
        name: "WOLFSE — Metalde Keskin Güç (Tanıtım)",
        description:
          "WOLFSE'nin CNC fiber lazer kesim, sac ve boru-profil lazer kesim, abkant büküm ve kaynaklı imalat süreçlerini gösteren kısa tanıtım videosu.",
        contentPath: "/assets/video/wolfse-anim.mp4",
        pagePath: "/kurt-gorevde",
      }),
    ],
    body,
  };
}
