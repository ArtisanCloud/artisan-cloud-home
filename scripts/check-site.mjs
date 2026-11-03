import assert from "node:assert/strict";
import { readFile, readdir, access } from "node:fs/promises";
import { test } from "node:test";
import ts from "typescript";

const read = (path) => readFile(new URL(`../${path}`, import.meta.url), "utf8");
const loadData = async (path) => {
  const source = await read(path);
  const output = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.ESNext,
      target: ts.ScriptTarget.ES2020,
    },
  }).outputText;
  return import(
    `data:text/javascript;base64,${Buffer.from(output).toString("base64")}`
  );
};
const products = await loadData("src/data/products.ts");
const scenarios = await loadData("src/data/cases.ts");
const powerx = await loadData("src/data/powerx.ts");
const pages = await readdir(new URL("../src/pages/", import.meta.url));
const sources = await Promise.all(
  pages
    .filter((p) => p.endsWith(".vue"))
    .map(async (p) => [p, await read(`src/pages/${p}`)]),
);
const router = await read("src/router/index.ts");
const staticRoutes = new Set(
  [...router.matchAll(/path: ["']([^"':]*)["']/g)].map((m) => m[1]),
);
const validRoute = (route) =>
  staticRoutes.has(route) ||
  route === "/products/powerx" ||
  (route.startsWith("/products/") &&
    Boolean(products.getProductBySlug(route.slice(10)))) ||
  (route.startsWith("/cases/") &&
    Boolean(scenarios.getCaseBySlug(route.slice(7))));

function checkTranslations(value, path = "root") {
  if (!value || typeof value !== "object") return;
  if ("zh" in value || "en" in value) {
    assert.ok(
      "zh" in value && "en" in value,
      `${path}: incomplete translation pair`,
    );
    assert.equal(
      typeof value.zh,
      typeof value.en,
      `${path}: mismatched translation types`,
    );
    if (Array.isArray(value.zh))
      assert.equal(
        value.zh.length,
        value.en.length,
        `${path}: mismatched list lengths`,
      );
    else {
      assert.ok(value.zh.trim(), path);
      assert.ok(value.en.trim(), path);
    }
  }
  for (const [key, child] of Object.entries(value))
    checkTranslations(child, `${path}.${key}`);
}
test("six unique products and known/unknown lookups", () => {
  assert.equal(products.products.length, 6);
  assert.equal(new Set(products.products.map((p) => p.slug)).size, 6);
  assert.equal(products.getProductBySlug("mediaxstudio").slug, "mediax");
  assert.equal(products.getProductBySlug("missing"), undefined);
});
test("product and scenario bilingual data is complete", () => {
  checkTranslations(products.products);
  checkTranslations(scenarios.cases);
  checkTranslations(powerx.powerxCopy);
  checkTranslations(powerx.scenarioSteps);
});
test("historical PawX URL remains an explicitly illustrative scenario", () => {
  assert.ok(scenarios.getCaseBySlug("pawx-marketing-agent"));
  const content = JSON.stringify(scenarios.cases);
  assert.doesNotMatch(content, /500%|testimoni|clientName|CMO/);
  assert.equal(scenarios.getCaseBySlug("missing"), undefined);
});
test("literal internal navigation targets resolve", async () => {
  for (const [path, source] of [
    ...sources,
    ["App.vue", await read("src/App.vue")],
  ]) {
    for (const [, target] of source.matchAll(/\bto="(\/[^"`]+)"/g))
      assert.ok(validRoute(target), `${path}: ${target}`);
  }
});
test("scenario related products resolve", () => {
  for (const scenario of scenarios.cases)
    for (const product of scenario.relatedProducts)
      assert.ok(products.getProductBySlug(product.slug), product.slug);
});
test("contact draft has no fake submit, transport or persistence", async () => {
  const source = await read("src/pages/Contact.vue");
  assert.doesNotMatch(
    source,
    /fetch\(|axios|localStorage|sessionStorage|@submit|type="submit"|contact@artisancloud|12345678/,
  );
  assert.match(source, /navigator\.clipboard\.writeText/);
  assert.match(source, /URL\.createObjectURL/);
  assert.match(source, /尚未发送/);
  assert.match(source, /Not sent/);
  assert.match(await read("src/pages/ContactByEmail.vue"), /Contact/);
});
test("retired metrics and placeholder contact facts are absent from rendered source", async () => {
  const all =
    sources
      .map(([, s]) => s.replace(/<style[\s\S]*?<\/style>/g, ""))
      .join("\n") + (await read("src/i18n/index.ts"));
  assert.doesNotMatch(all, /85%|60%|500%|24\/7|12345678|contact@artisancloud/);
});
test("router preserves deep product URL and adds recovery/scroll handling", () => {
  assert.match(router, /path: ["']\/products\/powerx-base["']/);
  assert.match(router, /pathMatch/);
  assert.match(router, /if \(savedPosition\) return savedPosition/);
  assert.match(router, /return \{ top: 0 \}/);
});
test("referenced local images exist", async () => {
  for (const [path, source] of sources)
    for (const [, asset] of source.matchAll(
      /(?:src|href)="(\/images\/[^"?]+)"/g,
    ))
      await access(new URL(`../public${asset}`, import.meta.url)).catch(() => {
        throw new Error(`${path}: missing ${asset}`);
      });
});
test("only approved public repository links appear in new data", () => {
  for (const product of products.products)
    if (product.evidence) {
      const url = new URL(product.evidence.url);
      assert.equal(url.protocol, "https:");
      assert.equal(url.hostname, "github.com");
      assert.match(url.pathname, /^\/ArtisanCloud\/(PowerX|PowerWeChat)(\/|$)/);
    }
});

test("product screenshots have bilingual matching copy and verified image files", async () => {
  const { productScreens } = await loadData("src/data/product-screens.ts");
  assert.equal(productScreens.length, 3);
  checkTranslations(productScreens);
  for (const screen of productScreens) {
    const image = await readFile(new URL(`../public${screen.src}`, import.meta.url));
    assert.equal(image.subarray(1, 4).toString(), "PNG");
    assert.equal(image.readUInt32BE(16), screen.width);
    assert.equal(image.readUInt32BE(20), screen.height);
    assert.ok(screen.alt.zh && screen.openLabel.en);
  }
  const detail = await read("src/pages/PowerX.vue");
  assert.match(detail, /v-for="screen in productScreens"/);
  assert.match(detail, /2026 年 5 月/);
  assert.match(detail, /loading="lazy"/);
  assert.match(await read("src/pages/Home.vue"), /images\/powerx-ui\/plugin-market\.png/);
});
