#!/usr/bin/env bash
set -euo pipefail

image="${1:?usage: smoke-container.sh IMAGE}"
container="artisan-home-smoke-$$"
response_dir="$(mktemp -d)"
origin="http://127.0.0.1:8080"
cleanup() {
  docker logs "$container" || true
  docker rm -f "$container" >/dev/null || true
  rm -rf "$response_dir"
}
trap cleanup EXIT

docker run -d --platform linux/amd64 --name "$container" -p 127.0.0.1:8080:80 "$image"
docker exec "$container" nginx -t
curl --retry 15 --retry-all-errors --retry-delay 1 --max-time 5 -fsS \
  "$origin/" --output "$response_dir/home.html"
grep -Fq ArtisanCloud "$response_dir/home.html"
for route in services products products/powerx-base products/powerx products/crm products/mediax products/mediaxstudio products/powerwechat cases developers contact contact-by-email; do
  canonical="$route"
  case "$route" in
    products/powerx) canonical="products/powerx-base" ;;
    products/mediaxstudio) canonical="products/mediax" ;;
    contact-by-email) canonical="contact" ;;
  esac
  curl --max-time 10 -fsS "$origin/$route" --output "$response_dir/route.html"
  grep -q '<h1' "$response_dir/route.html"
  grep -Fq "rel=\"canonical\" href=\"https://artisan-cloud.com/$canonical\"" "$response_dir/route.html"
  grep -Fq 'name="robots" content="index, follow"' "$response_dir/route.html"
done
curl --max-time 10 -fsS "$origin/sitemap.xml" --output "$response_dir/sitemap.xml"
grep -Fq 'https://artisan-cloud.com/products/powerx-base' "$response_dir/sitemap.xml"
curl --max-time 10 -fsS "$origin/robots.txt" --output "$response_dir/robots.txt"
grep -Fq 'Sitemap: https://artisan-cloud.com/sitemap.xml' "$response_dir/robots.txt"
test "$(curl --max-time 10 -sS -o "$response_dir/missing.html" -w '%{http_code}' "$origin/ci-missing-route")" = 404
grep -Fq 'name="robots" content="noindex, nofollow"' "$response_dir/missing.html"
curl --max-time 10 -fsS "$origin/ads.txt" --output /dev/null
curl --max-time 10 -fsS "$origin/images/products/px-home.png" --output /dev/null
test "$(curl --max-time 10 -sS -o /dev/null -w '%{http_code}' "$origin/assets/ci-missing.js")" = 404
echo 'Website container smoke checks passed.'
