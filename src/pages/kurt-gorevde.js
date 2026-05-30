import { site } from "../data/site.js";
import { breadcrumbHtml } from "../lib/layout.js";
import { breadcrumbSchema } from "../lib/schema.js";

export function kurtGorevdePage() {
  const crumbs = [
    { name: "Anasayfa", href: "/" },
    { name: "Kurt Görevde", href: "/kurt-gorevde" },
  ];

  const body = `
  ${breadcrumbHtml(crumbs)}
  <section class="section kurt-gorevde-section" style="padding: 0;">
    <div class="kurt-video-container" style="width: 100%; background: #000; display: flex; justify-content: center; align-items: center; min-height: 80vh;">
      <video width="100%" height="auto" controls autoplay style="width: 100%; height: auto; max-width: 100%;">
        <source src="/assets/video/wolfse-anim.mp4" type="video/mp4">
        Tarayıcınız video oynatmayı desteklemiyor.
      </video>
    </div>
  </section>
  `;

  return {
    path: "/kurt-gorevde",
    title: "Kurt Görevde | Video | WOLFSE",
    description: "WOLFSE Kurt Görevde video.",
    extraSchema: [breadcrumbSchema(crumbs)],
    body,
  };
}
