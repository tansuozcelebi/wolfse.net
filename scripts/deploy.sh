#!/usr/bin/env bash
# ---------------------------------------------------------------------------
# WOLFSE — SiteGround manuel deploy betiği (kendi makinenizden çalıştırın)
# Siteyi derler ve dist/ klasörünü SiteGround'a rsync ile yükler.
#
# Kullanım:
#   SG_HOST=ssh.example.com SG_USER=kullanici SG_DEST='~/www/wolfse.net/public_html/' \
#   [SG_PORT=18765] [SG_KEY=~/.ssh/siteground] ./scripts/deploy.sh
#
# Ön koşullar: node, rsync, ssh kurulu olmalı; SiteGround Site Tools →
# Devs → SSH Keys Manager üzerinden public anahtarınız ekli olmalı.
# ---------------------------------------------------------------------------
set -euo pipefail

: "${SG_HOST:?SG_HOST gerekli (ör. ssh.wolfse.net veya gvamXXXX.siteground.biz)}"
: "${SG_USER:?SG_USER gerekli (SiteGround SSH kullanıcı adınız)}"
: "${SG_DEST:?SG_DEST gerekli (ör. ~/www/wolfse.net/public_html/)}"
SG_PORT="${SG_PORT:-18765}"
SG_KEY="${SG_KEY:-}"

cd "$(dirname "$0")/.."

echo "▶ Derleniyor…"
npm install --no-audit --no-fund >/dev/null 2>&1 || true
npm run build:html

SSH_OPTS="-p ${SG_PORT} -o StrictHostKeyChecking=accept-new"
if [ -n "$SG_KEY" ]; then
  SSH_OPTS="-i ${SG_KEY} ${SSH_OPTS}"
fi

echo "▶ Yükleniyor: dist/ → ${SG_USER}@${SG_HOST}:${SG_DEST} (port ${SG_PORT})"
rsync -avz --delete \
  --exclude '.well-known/' \
  -e "ssh ${SSH_OPTS}" \
  dist/ "${SG_USER}@${SG_HOST}:${SG_DEST}"

echo "✅ Deploy tamamlandı."
