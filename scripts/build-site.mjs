import { build, createServer } from "vite";
import { readFile, writeFile, mkdir, readdir } from "node:fs/promises";
import path from "node:path";

const preview = process.argv.includes("--preview");
process.env.VITE_SITE_ENV = preview
  ? "preview"
  : process.env.VITE_SITE_ENV || "production";
const mode = process.env.VITE_SITE_ENV;
if (!["preview", "production"].includes(mode))
  throw new Error("VITE_SITE_ENV must be preview or production");
if (
  mode === "preview" &&
  (!process.env.VITE_SITE_ORIGIN || !process.env.VITE_DOCS_ORIGIN)
) {
  throw new Error(
    "Preview builds require explicit VITE_SITE_ORIGIN and VITE_DOCS_ORIGIN",
  );
}
await build({ mode });
const dist = path.resolve("dist");
const template = await readFile(path.join(dist, "index.html"), "utf8");
const cssFiles = (await readdir(path.join(dist, "assets"))).filter((file) =>
  file.endsWith(".css"),
);
const extraStyles = cssFiles
  .filter((file) => !template.includes(`/assets/${file}`))
  .map((file) => `<link rel="stylesheet" href="/assets/${file}">`)
  .join("\n");
const server = await createServer({
  mode,
  optimizeDeps: { noDiscovery: true, include: [], entries: [] },
  ssr: { noExternal: ["element-plus"] },
  server: { middlewareMode: true, hmr: false, open: false },
  appType: "custom",
});
const escape = (value) =>
  String(value).replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ],
  );
try {
  const { render, routeSeo, seoRoutes, siteConfig } =
    await server.ssrLoadModule("/src/entry-server.ts");
  const aliases = [
    "/products/powerx",
    "/products/mediaxstudio",
    "/contact-by-email",
  ];
  const pages = [...new Set([...seoRoutes, ...aliases, "/404"])];
  const report = [];
  for (const route of pages) {
    const body = await render(route);
    const seo = routeSeo(route, "zh");
    const metadata = [
      `<title>${escape(seo.title)}</title>`,
      `<meta name="description" content="${escape(seo.description)}">`,
      `<meta name="robots" content="${escape(seo.robots)}">`,
      ...(seo.known
        ? [`<link rel="canonical" href="${escape(seo.canonical)}">`]
        : []),
      `<meta property="og:title" content="${escape(seo.title)}">`,
      `<meta property="og:description" content="${escape(seo.description)}">`,
      ...(seo.known
        ? [`<meta property="og:url" content="${escape(seo.canonical)}">`]
        : []),
      '<meta property="og:type" content="website">',
      '<meta property="og:site_name" content="ArtisanCloud">',
      '<meta property="og:locale" content="zh_CN">',
      '<meta name="twitter:card" content="summary">',
      `<meta name="twitter:title" content="${escape(seo.title)}">`,
      `<meta name="twitter:description" content="${escape(seo.description)}">`,
      ...seo.jsonLd.map(
        (entity) =>
          `<script type="application/ld+json" data-site-schema>${JSON.stringify(entity).replace(/</g, "\\u003c")}</script>`,
      ),
    ].join("\n");
    const html = template
      .replace(/<title>[\s\S]*?<\/title>/, "")
      .replace(/<meta\s+name="description"[\s\S]*?>/, "")
      .replace("</head>", `${extraStyles}\n${metadata}\n</head>`)
      .replace('<div id="app"></div>', `<div id="app">${body}</div>`);
    const file =
      route === "/404"
        ? path.join(dist, "404.html")
        : path.join(dist, route.slice(1), "index.html");
    await mkdir(path.dirname(file), { recursive: true });
    await writeFile(file, html);
    report.push({
      route,
      file: path.relative(dist, file),
      canonical: seo.canonical,
      title: seo.title,
      robots: seo.robots,
    });
  }
  if (siteConfig.indexable) {
    const urls = seoRoutes
      .map(
        (route) =>
          `<url><loc>${escape(new URL(route, siteConfig.siteOrigin).href)}</loc></url>`,
      )
      .join("\n");
    await writeFile(
      path.join(dist, "sitemap.xml"),
      `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
    );
    await writeFile(
      path.join(dist, "robots.txt"),
      `User-agent: *\nAllow: /\nSitemap: ${siteConfig.siteOrigin}/sitemap.xml\n`,
    );
  } else {
    // Crawlers that can access a preview must see its HTML noindex directive.
    // Privacy is enforced by the hosting audience, not robots.txt.
    await writeFile(
      path.join(dist, "robots.txt"),
      "User-agent: *\nAllow: /\n# Private preview: all HTML is noindex; no sitemap is published.\n",
    );
  }
  // Build report is local QA evidence, deliberately kept outside the public artifact.
  await mkdir(".build-reports", { recursive: true });
  await writeFile(
    `.build-reports/${mode}.json`,
    JSON.stringify({ environment: mode, routes: report }, null, 2),
  );
  console.log(
    `Prerendered ${pages.length} routes (${mode}); full HTML, metadata and ${siteConfig.indexable ? "production sitemap" : "preview noindex"}.`,
  );
} finally {
  await server.close();
}
