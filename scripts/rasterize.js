// SVG marka varlıklarını PNG'ye çevirir (OG görseli, logo, apple-touch icon).
// sharp varsa çalışır; yoksa sessizce atlar (build yine de tamamlanır).
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const LOGO_DIR = path.resolve(__dirname, "..", "public", "assets", "logo");

let sharp;
try {
  sharp = (await import("sharp")).default;
} catch (e) {
  console.warn("ℹ sharp bulunamadı, PNG üretimi atlandı (SVG'ler kullanılacak).");
  process.exit(0);
}

const jobs = [
  { in: "wolfse-og.svg", out: "wolfse-og.png", w: 1200, h: 630 },
  { in: "wolfse-logo.svg", out: "wolfse-logo.png", w: 720, h: 192 },
  { in: "favicon.svg", out: "apple-touch-icon.png", w: 180, h: 180 },
];

for (const j of jobs) {
  const src = path.join(LOGO_DIR, j.in);
  if (!fs.existsSync(src)) continue;
  const svg = fs.readFileSync(src);
  await sharp(svg, { density: 200 })
    .resize(j.w, j.h, { fit: "contain", background: { r: 11, g: 14, b: 19, alpha: 1 } })
    .png()
    .toFile(path.join(LOGO_DIR, j.out));
  console.log("✓ PNG:", j.out);
}
