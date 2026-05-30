// Basit statik dosya sunucusu (geliştirme/önizleme için). Bağımlılıksız.
import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.resolve(__dirname, "..", "dist");
const PORT = process.env.PORT || 4321;

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
};

function resolveFile(urlPath) {
  let p = decodeURIComponent(urlPath.split("?")[0]);
  if (p.endsWith("/")) p += "index.html";
  let file = path.join(DIST, p);
  if (fs.existsSync(file) && fs.statSync(file).isDirectory()) file = path.join(file, "index.html");
  if (!path.extname(file)) {
    const asDir = path.join(DIST, p, "index.html");
    if (fs.existsSync(asDir)) return asDir;
  }
  return file;
}

http
  .createServer((req, res) => {
    let file = resolveFile(req.url);
    if (!fs.existsSync(file)) {
      file = path.join(DIST, "404.html");
      res.statusCode = 404;
    }
    const ext = path.extname(file);
    res.setHeader("Content-Type", MIME[ext] || "application/octet-stream");
    fs.createReadStream(file).pipe(res);
  })
  .listen(PORT, () => {
    console.log(`WOLFSE önizleme: http://localhost:${PORT}`);
  });
