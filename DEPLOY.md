# WOLFSE — Yayınlama (Deploy) Rehberi

Site statik (`dist/`) olduğundan SiteGround'a SSH/rsync ile yüklenir.
İki yöntem vardır: **(A) Otomatik — GitHub Actions (önerilen)** ve **(B) Manuel — kendi makinenizden**.

---

## 0) Önce: `main` dalını varsayılan yapın (tek seferlik)

Depo ilk push'ta varsayılan dalı otomatik atadığı için varsayılan henüz `main`
olmayabilir. GitHub'da:

> **Settings → General → Default branch → kalem ikonu → `main` seç → Update**

(Bu adım için API erişimim yok; tek tıkla sizin yapmanız gerekiyor.)

---

## 1) SiteGround SSH anahtarı oluşturma (tek seferlik)

1. Kendi makinenizde anahtar üretin:
   ```bash
   ssh-keygen -t ed25519 -f ~/.ssh/siteground_wolfse -C "wolfse-deploy"
   ```
2. **Public** anahtarı (`~/.ssh/siteground_wolfse.pub`) SiteGround'a ekleyin:
   **Site Tools → Devs → SSH Keys Manager → Import/Generate** ile public key'i yapıştırın.
3. SSH bağlantı bilgilerinizi not edin (Site Tools → SSH Keys Manager üzerinde görünür):
   - **Host** (ör. `gvamXXXX.siteground.biz` veya `ssh.wolfse.net`)
   - **Username**
   - **Port** (genellikle `18765`)
   - **Hedef dizin**: genellikle `~/www/wolfse.net/public_html/`

> ⚠️ **Private** anahtarınızı (`siteground_wolfse`) kimseyle paylaşmayın, sohbete yapıştırmayın.

---

## A) Otomatik deploy — GitHub Actions (önerilen)

`.github/workflows/deploy.yml` hazır. `main`'e her push'ta site derlenir ve yüklenir.
Çalışması için **repo secrets** ekleyin:

> **Settings → Secrets and variables → Actions → New repository secret**

| Secret adı | Değer / örnek |
| --- | --- |
| `SITEGROUND_SSH_HOST` | `gvamXXXX.siteground.biz` |
| `SITEGROUND_SSH_USER` | SiteGround SSH kullanıcı adınız |
| `SITEGROUND_SSH_PORT` | `18765` (farklıysa değiştirin) |
| `SITEGROUND_SSH_KEY` | **private** anahtarın TAM içeriği (`-----BEGIN…END-----` dahil) |
| `SITEGROUND_DEPLOY_PATH` | `~/www/wolfse.net/public_html/` (sondaki `/` önemli) |
| `SITEGROUND_SSH_PASSPHRASE` | *(opsiyonel)* anahtar passphrase'li ise (SiteGround'da üretilen anahtarlar zorunlu passphrase ister) |

> **SiteGround'da üretilen anahtarlar passphrase zorunludur.** Bu durumda anahtarı
> olduğu gibi kullan ve `SITEGROUND_SSH_PASSPHRASE` secret'ını ekle — workflow,
> passphrase'i yalnızca runner içinde kaldırıp bağlanır. Public anahtar SiteGround'da
> zaten otomatik yetkilidir.

Secrets eklenmeden önceki çalışmalar deploy adımını **atlar** (hata vermez, uyarı yazar).
Eklendikten sonra: **Actions → Deploy to SiteGround → Run workflow** ile elle de tetikleyebilirsiniz.

> `rsync --delete` kullanılır: `SITEGROUND_DEPLOY_PATH` **yalnızca bu siteye ait** dizin
> olmalıdır; oradaki fazladan dosyalar silinir. Yanlış yol vermeyin.

---

## B) Manuel deploy — kendi makinenizden

`node`, `rsync`, `ssh` kurulu bir makinede depo kökünde:

```bash
SG_HOST=gvamXXXX.siteground.biz \
SG_USER=KULLANICI_ADINIZ \
SG_PORT=18765 \
SG_KEY=~/.ssh/siteground_wolfse \
SG_DEST='~/www/wolfse.net/public_html/' \
./scripts/deploy.sh
```

Betik önce `npm run build:html` ile `dist/`'i tazeleyip rsync ile yükler.

---

## Sitemap güncelleme

Sitemap her `npm run build`'de otomatik üretilir. Bağımsız güncellemek için:

```bash
npm run sitemap        # dist/ tarayıp sitemap'leri güncel tarihle yeniden yaz
npm run sitemap:ping   # + IndexNow ile Bing/Yandex'e "güncellendi" bildir
```

- `noindex` sayfalar (ör. /tesekkurler) otomatik hariç tutulur.
- IndexNow için `src/data/site.js` içinde `indexNowKey` ayarlayın ya da
  `INDEXNOW_KEY=...` ortam değişkeni verin. Anahtar dosyası (`<key>.txt`)
  otomatik üretilir ve site kökünden erişilebilir olmalıdır.
- Google: sitemap ping kaldırıldığı için Search Console'a tek sefer gönderim
  yeterlidir; Google kendi takvimiyle yeniden tarar.

## 3) Yayın sonrası kontrol

- `https://www.wolfse.net/` açılıyor mu?
- `https://www.wolfse.net/robots.txt`, `/sitemap.xml`, `/llms.txt` erişilebilir mi?
- HTTPS aktif mi (SiteGround'da Let's Encrypt)?
- Google Search Console'a `sitemap.xml` gönderildi mi?

## Not — gerçek veriler

Yayından önce `src/data/site.js` içindeki `TODO` alanlarını (iletişim, makine
kapasiteleri, analitik ID'leri, sosyal medya) gerçek bilgilerle doldurun:
`grep -rn "TODO" src/`
