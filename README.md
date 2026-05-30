# WOLFSE — wolfse.net

> **Metalde Keskin Güç** — CNC lazer kesim ve fason metal işleme firma tanıtım sitesi.

B2B endüstriyel bir metal işleme firması (sac/boru-profil lazer kesim, abkant büküm,
kaynaklı imalat, fason üretim) için **SEO** ve **AI cevap motoru (GEO)** optimizasyonlu,
hızlı ve modern statik web sitesi.

Site, bağımlılıksız bir **Node statik site jeneratörü** ile üretilir. Çıktı saf
HTML/CSS/JS'tir ve herhangi bir statik barındırmada (Nginx, Apache, Netlify, Vercel,
Cloudflare Pages, S3 + CDN) yayınlanabilir.

---

## Hızlı başlangıç

```bash
npm run build      # PNG varlıkları üret + siteyi dist/ altına derle
npm run serve      # dist/ klasörünü http://localhost:4321 üzerinde sun
npm run dev        # build + serve
```

> `npm run build` PNG (OG/logo) üretimi için `sharp` kullanır. `sharp` kurulu değilse
> bu adım atlanır ve mevcut SVG/PNG varlıklar kullanılır (`npm run build:html`).

## Mimari

```
src/
  data/site.js        # TEK İÇERİK KAYNAĞI — metin, hizmet, sektör, blog, iletişim, makine
  lib/
    layout.js         # HTML iskeleti, <head> SEO/meta, header, footer, schema enjeksiyonu
    components.js      # yeniden kullanılabilir UI bileşenleri (kart, CTA, SSS, form…)
    schema.js          # JSON-LD üreticileri (Organization, Service, FAQPage, …)
    icons.js           # inline SVG ikon seti
  pages/              # her sayfa türü için içerik üreticileri
scripts/
  build.js            # tüm sayfaları render eder, sitemap/robots/llms üretir
  rasterize.js        # SVG → PNG (OG görseli, logo)
  serve.js            # bağımlılıksız önizleme sunucusu
public/               # statik varlıklar (css, js, logo) — dist'e kopyalanır
dist/                 # ÜRETİLEN ÇIKTI (yayınlanacak klasör)
```

İçeriği güncellemek için çoğunlukla yalnızca **`src/data/site.js`** düzenlenir.

---

## Seçilen slogan ve gerekçesi

**Ana slogan: “Metalde Keskin Güç”**

| Kriter | Değerlendirme |
| --- | --- |
| Marka uyumu | “Keskin” → lazer hassasiyeti; “Güç” → kurt + üretim kapasitesi. İki metaforu tek cümlede birleştirir. |
| Kısalık & akılda kalıcılık | 3 kelime, ritmik, logo altı kullanımına uygun. |
| Ayrışma | Rakiplerin tarifsel sloganlarından (“…lazer kesim hizmetleri”) farklı, karakterli ve agresif-profesyonel. |
| B2B tonu | Abartı reklam dili değil; güç ve hassasiyet vaadini net verir. |

Destekleyici alt başlık (tagline): **“Lazer Kesimde Hız, Hassasiyet ve Güven”** —
SEO ve açıklama metinlerinde hizmet + fayda netliği sağlar.

---

## SEO & GEO (AI görünürlüğü) özellikleri

- Her sayfada **benzersiz** `title`, `meta description`, `canonical`, Open Graph, Twitter Card, `robots`, `hreflang`.
- Tek `H1` + semantik `H2/H3` mimarisi (otomatik doğrulanır).
- **JSON-LD**: Organization + LocalBusiness + ProfessionalService, WebSite, WebPage,
  BreadcrumbList, Service, FAQPage, BlogPosting, ContactPage.
- `sitemap.xml` (index) + `sitemap-pages.xml`, `sitemap-blog.xml`, `sitemap-images.xml`.
- `robots.txt` — arama motorlarına ve saygın AI crawler'lara (GPTBot, OAI-SearchBot,
  PerplexityBot, ClaudeBot, Google-Extended, Applebot-Extended) kontrollü izin.
- **`llms.txt`** ve **`llms-full.txt`** — AI modellerinin markayı doğru anlaması için
  yapılandırılmış özet + “Do Not Infer” (uydurma yasağı) bloğu.
- Her sayfada kullanıcıya **görünür** “Sayfa Özeti” bloğu (gizli spam değil).
- İç linkleme: hizmet ↔ sektör ↔ makine parkuru ↔ blog ↔ teklif.

## Dönüşüm

- `/teklif-al` formu: doğrulama, honeypot + Turnstile/reCAPTCHA'ya hazır alan, dosya
  yükleme (PDF/DXF/DWG/STEP/JPG/PNG, 25 MB limit), KVKK ve ayrı pazarlama izni.
- Backend yoksa **mailto fallback**; `site.formEndpoint` tanımlanınca `fetch` + `/tesekkurler`.
- GA4 `generate_lead`, Google Ads/ Meta Pixel/ LinkedIn dönüşüm kancaları (çerez onayı sonrası).
- Yüzen WhatsApp butonu, header telefon, footer e-posta.

---

## ⚠️ Yayın öncesi doldurulacak GERÇEK veriler (TODO)

Aşağıdaki alanlar **bilerek placeholder** bırakılmıştır — uydurma bilgi üretilmez.
Çoğu `src/data/site.js` içindedir; kodda `TODO` ile aranabilir.

- **İletişim:** telefon, WhatsApp numarası, e-posta, açık adres, il/ilçe, harita, çalışma saatleri, koordinatlar.
- **Kurumsal künye:** resmi ünvan, kuruluş yılı, üretim alanı, ekip, varsa kalite belgeleri (ISO vb.).
- **Makine parkuru:** lazer gücü (kW), çalışma alanı (mm), abkant tonaj/uzunluk, boru-profil çap aralığı, kaynak istasyon sayısı, ölçüm ekipmanları.
- **Malzeme/kalınlık aralıkları** ve **garanti edilen tolerans değerleri.**
- **Sosyal medya** URL'leri (LinkedIn, Instagram, YouTube).
- **Analitik kimlikleri:** GA4, Google Ads, Meta Pixel, LinkedIn Insight.
- **Form backend** (`formEndpoint`) ve **Turnstile/reCAPTCHA** anahtarı.
- **Görseller:** gerçek üretim/makine/kesim fotoğrafları ve videolar (galeri).
- **Yasal metinler:** KVKK, Çerez, Gizlilik — hukuki inceleme gerekir.

> `grep -rn "TODO" src/` ile tüm placeholder'lar listelenebilir.

## Yayınlama

`npm run build` çıktısı olan **`dist/`** klasörünü statik olarak sunun.
`www.wolfse.net` kök dizinine `dist/` içeriği yüklenir. URL'ler `/dizin/index.html`
yapısında olduğundan temiz URL'ler ek yapılandırma gerektirmez.
