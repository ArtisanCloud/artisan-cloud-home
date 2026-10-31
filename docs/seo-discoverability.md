# Discoverability and documentation links

## Scope

This change connects the company site, product pages and the existing PowerX documentation, and makes the main site's meaningful content available in initial HTML. It does not add analytics, cookies, tracking pixels, hidden keywords, invented testimonials, prices, ratings or ranking promises. “GEO” here means clear, readable, source-linked information—not a special AI-ranking mechanism.

## Route and environment contract

- Production company origin: `https://artisan-cloud.com`.
- Production documentation origin: `https://powerx-doc.artisan-cloud.com`.
- Default build: `npm run build` (production). Production origin overrides that differ from these approved origins fail closed.
- Preview build: `VITE_SITE_ENV=preview VITE_SITE_ORIGIN=<private-main-origin> VITE_DOCS_ORIGIN=<private-docs-origin> npm run build:preview`.
- Preview requires explicit, validated HTTPS origins (HTTP allowed only for localhost). The private Site audience remains the actual access control. `noindex` is not privacy protection.
- Do not publish a production artifact into a private preview or a preview artifact into production. The parent must use the correct checked `dist/` for each destination.
- Production emits `robots.txt` with the production sitemap URL and `sitemap.xml` containing 15 canonical routes. Preview emits no sitemap and no Sitemap robots entry. All preview HTML has build-time `noindex, nofollow`.
- Preview robots allows crawling so any authorized crawler can read the HTML noindex directive. Blocking in robots alone would not guarantee de-indexing. Owner-private hosting still prevents unauthenticated access.

Documentation routes agreed with the docs worker: `/zh/overview/`, `/zh/guides/`, `/zh/plugins/`, `/zh/developers/`. Main preferred PowerX route: `/products/powerx-base`; aliases `/products/powerx`, `/products/mediaxstudio`, `/contact-by-email` canonicalize to their established preferred pages.

## Rendering and metadata

`scripts/build-site.mjs` runs the existing Vite build, then uses Vue's server renderer and a fresh memory router / i18n instance for each route. It writes 19 complete HTML files: 15 canonical pages, 3 aliases and a 404 recovery page. There is no runtime SSR server or framework migration. Each page includes visible initial body content, one title/description/canonical, OG/Twitter summary metadata and truthful JSON-LD. Unknown pages omit canonical and use noindex.

Initial static content is Chinese. Existing English UI switching remains available; client navigation and locale changes update title, description, canonical and structured data. There are no separate English URLs, so no invented hreflang alternatives are emitted. Language-specific static routes could be a later scoped enhancement.

The client mounts the existing Vue application after the initial route resolves, rather than hydrating a potentially different stored locale. This preserves no-JavaScript readability without claiming hydration acceptance. All emitted route CSS is linked in the initial HTML so lazy-route content is styled before JavaScript loads.

The container Nginx serves the prerendered route HTML and returns real 404 responses for unknown paths; it no longer serves the home page for every unknown URL. Missing assets remain 404. Static hosting still needs to honor generated route directories and `404.html`; actual host behavior must be verified independently.

## Truthful machine-readable entities

Organization, WebSite, WebPage/CollectionPage/ContactPage and breadcrumbs describe visible entities and hierarchy. Products are identified as Things with their visible product descriptions, not embellished with invented offers, customer ratings, certifications, dates or contact availability. Business scenarios stay explicitly illustrative, not case-study proof. Public source links and Beta qualifications remain intact.

## Checks

- `npm test`: existing 10 data/navigation/contact-safety checks.
- `npm run test:seo`: 8 artifact checks for meaningful prerendered content; per-route metadata; parseable and constrained JSON-LD; production sitemap vs preview noindex; absence of private hosts in production HTML/bundles; real documentation anchors; built asset existence; alias canonicals and static 404 configuration.
- For preview artifact tests, pass the same `VITE_SITE_ENV`, `VITE_SITE_ORIGIN` and `VITE_DOCS_ORIGIN` used to build it.
- TypeScript, Vue type-check and diff checks remain required.
- Inspect the built HTML directly, not only the JavaScript-rendered DOM. No search-engine indexing, rich result eligibility or AI citation is guaranteed by passing these checks.

## Source guidance

- Google JavaScript SEO: https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics
- Google noindex guidance: https://developers.google.com/search/docs/crawling-indexing/block-indexing
- Google AI features guidance: https://developers.google.com/search/docs/appearance/ai-features

Private previews are not submitted to search engines. Production deployment, Search Console/Bing ownership verification, index submission and real search performance monitoring are outside this branch-only implementation.

## CI compatibility

The independent branch changes only the existing workflow's smoke-test assertions: homepage byte comparisons are replaced by route-specific body/canonical/robots checks, sitemap/robots checks and HTTP 404 checks for unknown routes and missing assets. Triggers, credentials, permissions, image targets and publishing steps are unchanged. No workflow was dispatched. Local generated-artifact assertions pass; actual container/Nginx response checks require the authorized CI/runtime and are not claimed locally.
