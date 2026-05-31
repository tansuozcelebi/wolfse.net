// ---------------------------------------------------------------------------
// WOLFSE — Sitemap güncelleme scripti
//
// dist/ klasörünü tarayıp sitemap dosyalarını güncel lastmod ile yeniden üretir
// (noindex sayfaları hariç tutar). İsteğe bağlı olarak IndexNow ile Bing/Yandex'e
// "içerik güncellendi" bildirimi gönderir.
//
// Kullanım:
//   node scripts/sitemap.js            # sitemap'leri güncelle (ping yok)
//   node scripts/sitemap.js --ping     # güncelle + IndexNow bildirimi gönder
//   INDEXNOW_KEY=xxprint node scripts/sitemap.js --ping
//
// Not: Google, sitemap ping endpoint'ini 2023'te kaldırdı. Google için sitemap
// Search Console'a bir kez gönderilir; Google kendi takvimiyle yeniden tarar.
// IndexNow ise Bing ve Yandex'te anında bildirim için çalışır.
// ---------------------------------------------------------------------------
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { site } from "../src/data/site.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const DIST = path.join(ROOT, "dist");
const PUBLIC = path.join(ROOT, "public");

const today = new Date().toISOString().slice(0, 10);
const PING = process.argv.includes("--ping");
const INDEXNOW_KEY = process.env.INDEXNOW_KEY || site.indexNowKey || "";

if (!fs.existsSync(DIST)) {
  console.error("✗ dist/ bulunamadı. Önce `npm run build` çalıştırın.");
  process.exit(1);
}

// ---- dist/ içindeki tüm HTML sayfalarını topla ----
function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    const fp = path.join(dir, e.name);
    return e.isDirectory() ? walk(fp) : [fp];
  });
}

const htmlFiles = walk(DIST).filter((f) => f.endsWith(".html") && path.basename(f) !== "404.html");

// Her sayfadan canonical URL + robots + son değişiklik tarihini çıkar
const pages = [];
for (const f of htmlFiles) {
  const html = fs.readFileSync(f, "utf8");
  // noindex sayfaları sitemap'e girmez
  const robots = (html.match(/<meta name="robots" content="([^"]*)"/) || [])[1] || "";
  if (/noindex/i.test(robots)) continue;
  // canonical URL (yoksa dosya yolundan türet)
  let url = (html.match(/<link rel="canonical" href="([^"]+)"/) || [])[1];
  if (!url) {
    let rel = path.relative(DIST, f).replace(/index\.html$/, "").replace(/\\/g, "/");
    url = site.domain + "/" + rel;
  }
  url = url.replace(/\/index\.html$/, "/");
  const lastmod = fs.statSync(f).mtime.toISOString().slice(0, 10);
  pages.push({ url, lastmod });
}

// Tekilleştir + sırala
const seen = new Set();
const allPages = pages.filter((p) => (seen.has(p.url) ? false : seen.add(p.url)));
allPages.sort((a, b) => a.url.localeCompare(b.url));

// ---- Öncelik / sıklık ----
const pathOf = (u) => u.replace(site.domain, "") || "/";
function priorityFor(u) {
  const p = pathOf(u);
  if (p === "/") return "1.0";
  if (["/teklif-al", "/hizmetler", "/iletisim", "/izmir-lazer-kesim"].includes(p)) return "0.9";
  if (p.startsWith("/hizmetler/")) return "0.8";
  if (p.startsWith("/sektorler") || p.startsWith("/blog")) return "0.7";
  if (["/kvkk", "/cerez-politikasi", "/gizlilik-politikasi"].includes(p)) return "0.3";
  return "0.6";
}
function changefreqFor(u) {
  const p = pathOf(u);
  if (p === "/" || p.startsWith("/blog")) return "weekly";
  if (["/kvkk", "/cerez-politikasi", "/gizlilik-politikasi"].includes(p)) return "yearly";
  return "monthly";
}

const urlEntry = (p, images = []) => {
  const imgs = images.map((i) => `<image:image><image:loc>${site.domain}${i}</image:loc></image:image>`).join("");
  return `  <url><loc>${p.url}</loc><lastmod>${p.lastmod}</lastmod><changefreq>${changefreqFor(p.url)}</changefreq><priority>${priorityFor(p.url)}</priority>${imgs}</url>`;
};
const wrap = (inner, withImage = false) =>
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"${
    withImage ? ' xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"' : ""
  }>\n${inner}\n</urlset>\n`;

const blogPages = allPages.filter((p) => pathOf(p.url).startsWith("/blog"));
const nonBlog = allPages.filter((p) => !pathOf(p.url).startsWith("/blog"));

const writeBoth = (rel, content) => {
  fs.writeFileSync(path.join(DIST, rel), content);
  // public/ varsa oraya da yaz ki bir sonraki build kopyalasın (kaynak tutarlılığı)
  if (fs.existsSync(PUBLIC)) fs.writeFileSync(path.join(PUBLIC, rel), content);
};

writeBoth("sitemap-pages.xml", wrap(nonBlog.map((p) => urlEntry(p)).join("\n")));
writeBoth("sitemap-blog.xml", wrap(blogPages.map((p) => urlEntry(p)).join("\n")));
writeBoth(
  "sitemap-images.xml",
  wrap(urlEntry({ url: site.domain + "/", lastmod: today }, ["/assets/logo/wolfse-og.png", "/assets/logo/wolfse_logo_120.png"]), true)
);
writeBoth(
  "sitemap.xml",
  `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap><loc>${site.domain}/sitemap-pages.xml</loc><lastmod>${today}</lastmod></sitemap>
  <sitemap><loc>${site.domain}/sitemap-blog.xml</loc><lastmod>${today}</lastmod></sitemap>
  <sitemap><loc>${site.domain}/sitemap-images.xml</loc><lastmod>${today}</lastmod></sitemap>
</sitemapindex>
`
);

console.log(`✓ Sitemap güncellendi — ${allPages.length} URL (${blogPages.length} blog), lastmod ${today}`);
console.log(`  ${site.domain}/sitemap.xml`);

// ---- IndexNow anahtar dosyası (varsa) ----
if (INDEXNOW_KEY) {
  const keyFile = `${INDEXNOW_KEY}.txt`;
  writeBoth(keyFile, INDEXNOW_KEY + "\n");
  console.log(`✓ IndexNow anahtar dosyası: ${site.domain}/${keyFile}`);
}

// ---- Arama motorlarına bildirim (--ping) ----
if (PING) {
  if (!INDEXNOW_KEY) {
    console.warn("ℹ IndexNow atlandı: anahtar yok. site.indexNowKey ayarlayın veya INDEXNOW_KEY verin.");
  } else {
    const host = new URL(site.domain).host;
    const payload = {
      host,
      key: INDEXNOW_KEY,
      keyLocation: `${site.domain}/${INDEXNOW_KEY}.txt`,
      urlList: allPages.map((p) => p.url),
    };
    try {
      const res = await fetch("https://api.indexnow.org/IndexNow", {
        method: "POST",
        headers: { "Content-Type": "application/json; charset=utf-8" },
        body: JSON.stringify(payload),
      });
      console.log(`✓ IndexNow bildirimi gönderildi → HTTP ${res.status} (${allPages.length} URL)`);
      if (res.status >= 400) {
        console.warn("  Uyarı: Anahtar dosyası canlıda erişilebilir olmalı:", payload.keyLocation);
      }
    } catch (e) {
      console.error("✗ IndexNow bildirimi başarısız:", e.message);
    }
  }
  console.log("ℹ Google: sitemap ping kaldırıldı; Search Console'a gönderim + doğal tarama geçerlidir.");
}
