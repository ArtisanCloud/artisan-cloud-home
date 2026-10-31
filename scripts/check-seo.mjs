import assert from "node:assert/strict";
import { readFile, readdir, access } from "node:fs/promises";
import { test } from "node:test";
import path from "node:path";
const environment = process.env.VITE_SITE_ENV || "production";
const origin =
  environment === "preview"
    ? process.env.VITE_SITE_ORIGIN
    : "https://artisan-cloud.com";
assert.ok(origin, "preview verification requires VITE_SITE_ORIGIN");
const report = JSON.parse(
  await readFile(`.build-reports/${environment}.json`, "utf8"),
);
const pages = await Promise.all(
  report.routes.map(async (item) => ({
    ...item,
    html: await readFile(path.join("dist", item.file), "utf8"),
  })),
);
const robots = await readFile("dist/robots.txt", "utf8");
const matchMeta = (html, key) =>
  html.match(
    new RegExp(`<meta (?:name|property)="${key}" content="([^"]*)"`),
  )?.[1];
test("all 19 canonical/alias/recovery pages contain server-rendered meaningful content", () => {
  assert.equal(pages.length, 19);
  for (const page of pages) {
    assert.match(page.html, /<h1\b/);
    assert.ok(page.html.includes("<nav"), page.route);
    assert.ok(
      page.html
        .match(/<main[^>]*>([\s\S]*?)<\/main>/)?.[1]
        .replace(/<[^>]+>/g, "").length > 30,
      page.route,
    );
    assert.doesNotMatch(page.html, /\[object Object\]|undefined<\/h1/);
  }
});
test("per-route head has one title, description and expected canonical, with no unknown-page canonical", () => {
  for (const page of pages) {
    assert.equal((page.html.match(/<title>/g) || []).length, 1, page.route);
    assert.ok(matchMeta(page.html, "description")?.length > 25, page.route);
    assert.equal(
      (page.html.match(/rel="canonical"/g) || []).length,
      page.route === "/404" ? 0 : 1,
      page.route,
    );
    if (page.route !== "/404")
      assert.ok(page.html.includes(`href="${page.canonical}"`), page.route);
    assert.ok(matchMeta(page.html, "og:title"), page.route);
    assert.ok(matchMeta(page.html, "twitter:description"), page.route);
  }
  const canonical = pages.filter(
    (p) =>
      p.route !== "/404" &&
      ![
        "/products/powerx",
        "/products/mediaxstudio",
        "/contact-by-email",
      ].includes(p.route),
  );
  assert.equal(new Set(canonical.map((p) => p.title)).size, 15);
});
test("structured data is parseable, no invented offers, ratings, dates or contact details", () => {
  for (const page of pages)
    for (const match of page.html.matchAll(
      /<script type="application\/ld\+json" data-site-schema>([\s\S]*?)<\/script>/g,
    )) {
      const entity = JSON.parse(match[1]);
      assert.equal(entity["@context"], "https://schema.org");
      assert.doesNotMatch(
        match[1],
        /aggregateRating|reviewCount|priceCurrency|datePublished|telephone|email|openingHours/,
      );
    }
});
test("production sitemap is canonical-only, or preview publishes no sitemap and all pages noindex", async () => {
  if (environment === "preview") {
    for (const page of pages)
      assert.match(matchMeta(page.html, "robots"), /noindex/);
    await assert.rejects(access("dist/sitemap.xml"));
    assert.doesNotMatch(robots, /^Sitemap:/m);
  } else {
    const sitemap = await readFile("dist/sitemap.xml", "utf8");
    assert.equal((sitemap.match(/<loc>/g) || []).length, 15);
    assert.doesNotMatch(
      sitemap,
      /chatgpt\.site|contact-by-email|mediaxstudio|\/products\/powerx<|\/404/,
    );
    for (const page of pages.filter((p) => p.route !== "/404"))
      assert.doesNotMatch(matchMeta(page.html, "robots"), /noindex/);
    assert.match(robots, /Sitemap: https:\/\/artisan-cloud\.com\/sitemap.xml/);
  }
  assert.match(
    matchMeta(pages.find((p) => p.route === "/404").html, "robots"),
    /noindex/,
  );
});
test("production HTML and bundles contain no private preview hosts", async () => {
  if (environment !== "production") return;
  for (const page of pages) assert.doesNotMatch(page.html, /chatgpt\.site/);
  for (const file of await readdir("dist/assets"))
    if (file.endsWith(".js"))
      assert.doesNotMatch(
        await readFile(`dist/assets/${file}`, "utf8"),
        /chatgpt\.site/,
      );
});
test("contextual docs links are actual server-rendered anchors with approved routes", () => {
  const docsOrigin =
    environment === "preview"
      ? process.env.VITE_DOCS_ORIGIN
      : "https://powerx-doc.artisan-cloud.com";
  for (const route of [
    "/",
    "/products",
    "/products/powerx-base",
    "/products/crm",
    "/products/mediax",
  ]) {
    const html = pages.find((p) => p.route === route).html;
    for (const target of ["overview", "guides", "plugins", "developers"])
      assert.ok(
        html.includes(`href="${docsOrigin}/zh/${target}/"`),
        `${route} → ${target}`,
      );
  }
});
test("all HTML JS/CSS/image references point to built assets", async () => {
  for (const page of pages)
    for (const [, asset] of page.html.matchAll(
      /(?:src|href)="(\/(?:assets|images)\/[^"#?]+)"/g,
    ))
      await access(path.join("dist", asset));
});
test("canonical aliases point to their preferred route and unknown URLs return static 404 under Nginx", async () => {
  for (const [alias, target] of Object.entries({
    "/products/powerx": "/products/powerx-base",
    "/products/mediaxstudio": "/products/mediax",
    "/contact-by-email": "/contact",
  }))
    assert.equal(
      pages.find((p) => p.route === alias).canonical,
      new URL(target, origin).href,
    );
  const nginx = await readFile("docker/nginx.conf", "utf8");
  assert.match(nginx, /error_page 404 \/404.html/);
  assert.match(nginx, /try_files \$uri \$uri\/index.html =404/);
});
