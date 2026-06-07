#!/usr/bin/env bash
# ---------------------------------------------------------------------------
# WOLFSE — GitHub Actions deploy secret'larını üretir / hazırlar.
#
# - Passphrase'SİZ ed25519 SSH anahtarı üretir (GitHub Actions otomatik bağlanır;
#   SiteGround'un panelde ürettiği anahtarlar passphrase zorunlu kıldığı için bu
#   yöntem daha temizdir: public'i SiteGround'a, private'ı GitHub secret'ına koy).
# - IndexNow anahtarı üretir.
# - Eklenmesi gereken tüm secret'ları listeler.
# - `gh` CLI kuruluysa --set ile secret'ları otomatik GitHub'a yazabilir.
#
# Kullanım:
#   bash scripts/gen-secrets.sh                 # üret + ekrana yazdır
#   bash scripts/gen-secrets.sh --set           # üret + gh ile GitHub'a yaz
#
# Gereksinim: ssh-keygen (macOS/Linux'ta var; Windows'ta Git Bash ile gelir),
# node (IndexNow anahtarı için). `--set` için: gh CLI kurulu ve `gh auth login`.
# ---------------------------------------------------------------------------
set -euo pipefail

cd "$(dirname "$0")/.."
SECRETS_DIR=".secrets"
KEY_FILE="$SECRETS_DIR/siteground_deploy"          # private
PUB_FILE="$SECRETS_DIR/siteground_deploy.pub"      # public
REPO="tansuozcelebi/wolfse.net"
SET=0
[ "${1:-}" = "--set" ] && SET=1

mkdir -p "$SECRETS_DIR"
chmod 700 "$SECRETS_DIR"

bold() { printf "\033[1m%s\033[0m\n" "$1"; }
line() { printf '%s\n' "----------------------------------------------------------------------"; }

# 1) SSH anahtarı (passphrase'siz) -------------------------------------------
if [ -f "$KEY_FILE" ]; then
  echo "ℹ Mevcut anahtar kullanılıyor: $KEY_FILE (yeniden üretmek için sil)"
else
  command -v ssh-keygen >/dev/null 2>&1 || { echo "✗ ssh-keygen bulunamadı (Windows'ta Git Bash kullanın)."; exit 1; }
  ssh-keygen -t ed25519 -N "" -C "wolfse-github-actions-deploy" -f "$KEY_FILE" >/dev/null
  echo "✓ Passphrase'siz SSH anahtarı üretildi: $KEY_FILE"
fi
chmod 600 "$KEY_FILE"

# 2) IndexNow anahtarı --------------------------------------------------------
INDEXNOW_KEY=$(node -e "console.log((require('crypto').randomUUID()+require('crypto').randomUUID()).replace(/-/g,'').slice(0,32))")

PUBKEY_CONTENT=$(cat "$PUB_FILE")
PRIVKEY_CONTENT=$(cat "$KEY_FILE")

# ---- Çıktı ----
echo
line
bold "1) SiteGround'a EKLENECEK public anahtar"
echo "   Site Tools → Devs → SSH Keys Manager → Import → şu public anahtarı yapıştır:"
echo
echo "$PUBKEY_CONTENT"
echo
line
bold "2) GitHub Repository Secrets (Settings → Secrets and variables → Actions)"
echo
echo "  SITEGROUND_SSH_KEY        = (aşağıdaki private anahtarın TAMAMI)"
echo "  SITEGROUND_SSH_HOST       = <SiteGround SSH host, ör. gvamXXXX.siteground.biz>"
echo "  SITEGROUND_SSH_USER       = <SiteGround SSH kullanıcı adı>"
echo "  SITEGROUND_SSH_PORT       = 18765"
echo "  SITEGROUND_DEPLOY_PATH    = ~/www/wolfse.net/public_html/"
echo "  SITEGROUND_SSH_PASSPHRASE = (BU YÖNTEMDE BOŞ BIRAK / ekleme — anahtar passphrase'siz)"
echo
echo "  --- SITEGROUND_SSH_KEY değeri (private anahtar) ---"
echo "$PRIVKEY_CONTENT"
echo "  --- private anahtar sonu ---"
echo
line
bold "3) IndexNow"
echo "  Üretilen anahtar: $INDEXNOW_KEY"
echo "  Not: src/data/site.js içindeki indexNowKey zaten ayarlıysa değiştirmen şart değil."
echo "  Değiştirirsen public/<key>.txt dosyasını da güncelle ve yeniden build et."
echo
line
echo "⚠ Güvenlik: .secrets/ klasörü .gitignore'da; private anahtarı kimseyle paylaşma."
echo

# 3) gh ile otomatik set ------------------------------------------------------
if [ "$SET" = "1" ]; then
  command -v gh >/dev/null 2>&1 || { echo "✗ gh CLI yok; --set atlanıyor. https://cli.github.com"; exit 1; }
  echo "→ gh ile secret yazılıyor ($REPO)…"
  gh secret set SITEGROUND_SSH_KEY --repo "$REPO" --body "$PRIVKEY_CONTENT"
  gh secret set SITEGROUND_SSH_PORT --repo "$REPO" --body "18765"
  gh secret set SITEGROUND_DEPLOY_PATH --repo "$REPO" --body "~/www/wolfse.net/public_html/"
  echo "✓ SSH_KEY, SSH_PORT, DEPLOY_PATH yazıldı."
  echo "ℹ HOST ve USER'ı sen gir:"
  echo "    gh secret set SITEGROUND_SSH_HOST --repo $REPO"
  echo "    gh secret set SITEGROUND_SSH_USER --repo $REPO"
  echo "  (public anahtarı SiteGround'a eklemeyi unutma — yukarıdaki adım 1.)"
fi
