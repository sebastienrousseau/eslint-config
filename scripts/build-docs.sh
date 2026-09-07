#!/usr/bin/env bash

# SPDX-FileCopyrightText: 2026 Sebastien Rousseau <sebastian.rousseau@gmail.com>
# SPDX-License-Identifier: Apache-2.0 OR MIT

set -euo pipefail
cd "$(dirname "${BASH_SOURCE[0]}")/.."

OUT="public"

if ! command -v ssg >/dev/null 2>&1; then
  echo "error: no 'ssg' binary on PATH — install with: cargo binstall ssg" >&2
  exit 1
fi

echo "==> building the site"
rm -rf "${OUT}" public.build-tmp
ssg build -f web/ssg.toml

echo "==> copying theme assets"
for asset in styles.css main.js theme-init.js favicon.ico logo.svg; do
  if [ -f "web/_layouts/${asset}" ]; then
    cp -f "web/_layouts/${asset}" "${OUT}/${asset}"
  fi
done
mkdir -p "${OUT}/assets" "${OUT}/images"
if [ -d "web/assets" ]; then
  cp -R web/assets/. "${OUT}/assets/"
fi
if [ -d "web/images" ]; then
  cp -R web/images/. "${OUT}/images/"
fi

echo "==> anchoring headings"
if [ -f "scripts/anchor_headings.py" ]; then
  python3 scripts/anchor_headings.py "${OUT}"
fi

missing=0
for f in styles.css main.js theme-init.js favicon.ico assets/logo.svg; do
  [[ -s "${OUT}/${f}" ]] || { echo "missing or empty ${OUT}/${f}" >&2; missing=1; }
done
pages=$(find "${OUT}" -name index.html | wc -l | tr -d ' ')
[[ "${pages}" -ge 4 ]] || { echo "expected at least 4 pages, found ${pages}" >&2; missing=1; }
[[ "${missing}" -eq 0 ]] || exit 1

echo "==> ${pages} pages, assets present and verified"
