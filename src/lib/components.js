import { esc } from "./layout.js";
import { icon } from "./icons.js";
import { site } from "../data/site.js";
import { whatsappLink } from "./layout.js";

export function btn(label, href, variant = "primary", opts = {}) {
  const ic = opts.icon ? icon(opts.icon) : "";
  const rel = href.startsWith("http") ? ' rel="noopener"' : "";
  const data = opts.data ? ` ${opts.data}` : "";
  return `<a class="btn btn-${variant}${opts.size ? " btn-" + opts.size : ""}" href="${href}"${rel}${data}>${ic}<span>${esc(label)}</span></a>`;
}

export function sectionHeader(eyebrow, title, lead, opts = {}) {
  const Tag = opts.as === "h1" ? "h1" : "h2";
  return `<div class="section-head">
    ${eyebrow ? `<p class="eyebrow">${esc(eyebrow)}</p>` : ""}
    <${Tag}>${esc(title)}</${Tag}>
    ${lead ? `<p class="lead">${esc(lead)}</p>` : ""}
  </div>`;
}

// Görünür "Sayfa Özeti" — kullanıcıya açık, AI okunabilirliği için (gizli spam değil)
export function pageSummary(text) {
  return `<aside class="page-summary" aria-label="Sayfa özeti">
    <h2 class="visually-strong">Sayfa Özeti</h2>
    <p>${esc(text)}</p>
  </aside>`;
}

export function serviceCard(svc) {
  return `<article class="card service-card">
    <div class="card-icon">${icon(svc.icon)}</div>
    <h3><a href="/hizmetler/${svc.slug}">${esc(svc.title)}</a></h3>
    <p>${esc(svc.cardText)}</p>
    <a class="card-link" href="/hizmetler/${svc.slug}">Detaylı İncele ${icon("arrow")}</a>
  </article>`;
}

export function sectorCard(sec) {
  return `<article class="card sector-card">
    <div class="card-icon">${icon(sec.icon)}</div>
    <h3><a href="/sektorler/${sec.slug}">${esc(sec.title)}</a></h3>
    <p>${esc(sec.short)}</p>
  </article>`;
}

export function advantageCard({ icon: ic, title, text }) {
  return `<article class="card advantage-card">
    <div class="card-icon">${icon(ic)}</div>
    <h3>${esc(title)}</h3>
    <p>${esc(text)}</p>
  </article>`;
}

export function machineCard(m) {
  const rows = m.specs
    .map(([k, v]) => {
      const todo = String(v).startsWith("TODO");
      return `<tr><th scope="row">${esc(k)}</th><td${todo ? ' class="todo"' : ""}>${esc(v)}</td></tr>`;
    })
    .join("");
  return `<article class="card machine-card">
    <div class="card-icon">${icon(m.icon)}</div>
    <h3>${esc(m.name)}</h3>
    <p class="muted">${esc(m.note)}</p>
    <table class="spec-table"><tbody>${rows}</tbody></table>
  </article>`;
}

export function blogCard(post) {
  return `<article class="card blog-card">
    <div class="blog-meta"><span class="tag">${esc(post.category)}</span><time datetime="${post.date}">${formatDate(post.date)}</time></div>
    <h3><a href="/blog/${post.slug}">${esc(post.title)}</a></h3>
    <p>${esc(post.excerpt)}</p>
    <a class="card-link" href="/blog/${post.slug}">Devamını Oku ${icon("arrow")}</a>
  </article>`;
}

export function formatDate(iso) {
  const months = ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"];
  const d = new Date(iso);
  return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
}

export function faqAccordion(faqs, idPrefix = "faq") {
  const items = faqs
    .map((f, i) => {
      const id = `${idPrefix}-${i}`;
      return `<div class="faq-item">
        <button class="faq-q" aria-expanded="false" aria-controls="${id}">
          <span>${esc(f.q)}</span><span class="faq-ic" aria-hidden="true">+</span>
        </button>
        <div class="faq-a" id="${id}" hidden><p>${esc(f.a)}</p></div>
      </div>`;
    })
    .join("");
  return `<div class="faq">${items}</div>`;
}

export function processSteps(steps) {
  const items = steps
    .map(
      (s, i) => `<li class="step">
      <span class="step-num">${i + 1}</span>
      <div><h3>${esc(s.title)}</h3><p>${esc(s.text)}</p></div>
    </li>`
    )
    .join("");
  return `<ol class="process-steps">${items}</ol>`;
}

export function ctaBand(title, text, primary = { label: "Hızlı Teklif Al", href: "/teklif-al" }) {
  return `<section class="cta-band">
    <div class="container cta-inner">
      <div>
        <h2>${esc(title)}</h2>
        ${text ? `<p>${esc(text)}</p>` : ""}
      </div>
      <div class="cta-actions">
        ${btn(primary.label, primary.href, "primary", { icon: "send" })}
        ${btn("WhatsApp'tan Dosya Gönder", whatsappLink(), "wa", { icon: "whatsapp" })}
      </div>
    </div>
  </section>`;
}

export function trustBar(items) {
  return `<ul class="trust-bar">${items
    .map((t) => `<li>${icon("check")}<span>${esc(t)}</span></li>`)
    .join("")}</ul>`;
}

export function checkList(items) {
  return `<ul class="check-list">${items
    .map((t) => `<li>${icon("check")}<span>${esc(t)}</span></li>`)
    .join("")}</ul>`;
}

export function relatedLinks(title, links) {
  return `<div class="related">
    <h3>${esc(title)}</h3>
    <ul class="related-list">${links
      .map((l) => `<li><a href="${l.href}">${icon("arrow")}<span>${esc(l.label)}</span></a></li>`)
      .join("")}</ul>
  </div>`;
}

export { whatsappLink };
