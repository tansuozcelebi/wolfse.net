import { icon } from "../lib/icons.js";
import { btn } from "../lib/components.js";

export function notFoundPage() {
  const body = `
  <section class="section notfound">
    <div class="container narrow center">
      <div class="success-icon">${icon("wolf")}</div>
      <h1>404 — Sayfa Bulunamadı</h1>
      <p class="lead">Aradığınız sayfa taşınmış veya hiç var olmamış olabilir. İz sürmeye devam edelim.</p>
      <div class="page-head-cta center-cta">
        ${btn("Anasayfaya Dön", "/", "primary", { icon: "arrow" })}
        ${btn("Hizmetler", "/hizmetler", "ghost")}
        ${btn("Teklif Al", "/teklif-al", "ghost")}
      </div>
    </div>
  </section>
  `;
  return {
    path: "/404",
    title: "404 — Sayfa Bulunamadı | WOLFSE",
    description: "Aradığınız sayfa bulunamadı. WOLFSE anasayfasına dönün veya hizmetlerimizi inceleyin.",
    robots: "noindex, follow",
    extraSchema: [],
    body,
  };
}
