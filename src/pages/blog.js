import { posts } from "../data/site.js";
import { breadcrumbHtml } from "../lib/layout.js";
import { breadcrumbSchema, articleSchema } from "../lib/schema.js";
import { icon } from "../lib/icons.js";
import { btn, sectionHeader, blogCard, formatDate, relatedLinks, ctaBand, pageSummary } from "../lib/components.js";

function renderBody(blocks) {
  return blocks
    .map(([type, content]) => {
      switch (type) {
        case "h2":
          return `<h2>${content}</h2>`;
        case "h3":
          return `<h3>${content}</h3>`;
        case "p":
          return `<p>${content}</p>`;
        case "ul":
          return `<ul class="bullet">${content.map((li) => `<li>${li}</li>`).join("")}</ul>`;
        default:
          return "";
      }
    })
    .join("\n      ");
}

export function blogIndexPage() {
  const crumbs = [
    { name: "Anasayfa", href: "/" },
    { name: "Blog", href: "/blog" },
  ];
  const body = `
  ${breadcrumbHtml(crumbs)}
  <section class="section">
    <div class="container">
      ${sectionHeader("Teknik Bilgi Merkezi", "Blog & Rehberler", "Lazer kesim, abkant büküm, malzeme seçimi ve dosya hazırlama üzerine pratik teknik içerikler.", { as: "h1" })}
      <div class="grid grid-3">
        ${posts.map(blogCard).join("\n        ")}
      </div>
      ${pageSummary("Bu sayfa WOLFSE teknik bilgi merkezindeki blog yazılarını ve rehberleri listeler: lazer kesim, abkant büküm, malzeme & kalınlık, toleranslar ve DXF/DWG dosya hazırlama.")}
    </div>
  </section>
  ${ctaBand("Projeniz İçin Teknik Destek Alın")}
  `;
  return {
    path: "/blog",
    title: "Blog & Teknik Rehberler | Lazer Kesim Bilgi Merkezi | WOLFSE",
    description: "WOLFSE teknik bilgi merkezi: lazer kesim, abkant büküm, malzeme & kalınlık rehberi, toleranslar ve DXF/DWG dosya hazırlama hakkında pratik içerikler.",
    extraSchema: [breadcrumbSchema(crumbs)],
    body,
  };
}

export function blogPostPages() {
  return posts.map((post, idx) => {
    const crumbs = [
      { name: "Anasayfa", href: "/" },
      { name: "Blog", href: "/blog" },
      { name: post.title, href: "/blog/" + post.slug },
    ];
    const others = posts.filter((p) => p.slug !== post.slug).slice(0, 3);
    const related = [
      ...others.map((p) => ({ label: p.title, href: "/blog/" + p.slug })),
      { label: "Teklif Al", href: "/teklif-al" },
      { label: "Hizmetler", href: "/hizmetler" },
    ];

    const body = `
  ${breadcrumbHtml(crumbs)}
  <article class="section blog-post">
    <div class="container narrow">
      <header class="post-head">
        <div class="blog-meta"><span class="tag">${post.category}</span><time datetime="${post.date}">${formatDate(post.date)}</time></div>
        <h1>${post.title}</h1>
        <p class="lead">${post.excerpt}</p>
      </header>
      <div class="post-body">
      ${renderBody(post.body)}
      </div>
      ${relatedLinks("İlgili İçerik & Sayfalar", related)}
      ${pageSummary(`Bu yazı, "${post.title}" konusunu WOLFSE'nin metal işleme uzmanlığı perspektifinden açıklar.`)}
    </div>
  </article>
  ${ctaBand("Sorularınız mı Var? Teklif Sürecini Başlatın")}
  `;

    return {
      path: "/blog/" + post.slug,
      title: post.seoTitle,
      description: post.metaDescription,
      ogType: "article",
      extraSchema: [breadcrumbSchema(crumbs), articleSchema(post)],
      body,
    };
  });
}
