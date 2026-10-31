# PowerX product page: scope and staging handoff

## Specification

- Rebuild only `/products/powerx-base`; `/products/powerx` is an alias.
- ArtisanCloud remains the company website. Other pages, product records, contact flows and deployment automation are unchanged.
- Business-first, bilingual (Chinese / English), responsive, light headings, green actions and selection, blue/purple/teal artwork.
- The customer-follow-up story is a labelled illustrative workflow, not a live demo or a promise that CRM is integrated end to end.
- CRM and MediaXStudio are positioned as core paid plugins; availability, scope, integration and pricing require consultation. Do not advertise a working SaaS trial.
- Contact CTAs link to the existing `/contact` WeChat QR page, not the non-delivering email form.

## Implementation plan

1. Add a lazy-loaded dedicated route, preserving the existing product URL.
2. Apply a route-scoped light shell and a dedicated product component; preserve all other global styling.
3. Use the existing Element Plus button component for the interactive scenario selector. Use semantic links, native details, visible focus and reduced-motion behavior.
4. Keep bilingual page copy in a typed data module. Label evidence and maturity; link to a pinned public source instead of representing illustrations as screenshots.
5. Build, type-check and browser-test desktop/mobile, locale, navigation and interactions; independent review before committing/pushing.

## Content evidence

PowerX source baseline: `f99333ccd80eb3c2467fe6cc9009917340556424` (develop, 2026-10-28).

- `README.md`: enterprise AI application / plugin ecosystem AgentOS foundation; maturity qualifiers.
- `backend/internal/transport/http/admin/routes.go`: IAM, plugins, model and knowledge routes.
- `backend/internal/transport/http/admin/scheduler/routes.go`: persistent jobs, pause/resume/trigger and run records.
- `backend/internal/transport/http/openapi/integration_gateway/routes.go`: tenant capability routes and invocation.
- `backend/internal/transport/http/openapi/knowledge_space/routes.go`: ingestion, search and semantic retrieval routes.

Source/API presence is not an end-to-end acceptance test or production guarantee. AI/knowledge and plugin release governance retain Beta qualifiers. CRM/MediaXStudio commercial positioning follows the product-owner brief; no price or availability is invented. SCRM and e-commerce are existing website solution entries, not asserted to be ready-to-install PowerX plugins.

The Oct 12 concept image was visually inspected as composition inspiration only. The page uses native CSS artwork, not generated or fabricated product screenshots.

## Branch and stage

- Branch: `feat/powerx-marketing-stage`
- Base: `30b8b4a17f575f44552dd75c05b3d737694d2137` (website develop)
- Build: `npm ci --no-audit --no-fund && npm run build`; artifact: `dist/`.
- Preview: `npm run preview -- --host 127.0.0.1`.
- Browser-history routes require the existing Nginx SPA fallback; retain missing-asset 404s.
- No deployment, image publication, DNS or credentials are changed by this work. DNS alone does not provision or deploy a stage service.
- After separate approval, choose a staging host/service, deploy a reviewed artifact/image, configure TLS and then point the stage domain to it. Verify the deep link, refresh, contact QR and static assets on the actual staging origin.
- Existing publishing workflow runs on develop pushes / v* tags or manual dispatch. Do not dispatch it as part of this branch-only task.

## Verification (2026-10-31)

- Passed: dependency installation using `npm ci --cache /tmp/powerx-npm-cache --no-audit --no-fund` (default cache path was not writable in this environment).
- Passed: `npm run build`, `tsc --noEmit`, and a temporary `vue-tsc --noEmit` invocation (no project dependency or lockfile changes).
- Passed: `git diff --check` and independent static review of routing, copy, evidence paths and contact targets.
- Review fixes: product-specific scroll reset/restoration, page-level locale `lang`, earlier product-header wrapping for tablet widths, narrow subnav spacing.
- Not completed: rendered browser / responsive / keyboard / screen-reader acceptance. Local Chromium startup was blocked by process-socket restrictions; the separate cloud browser could not reach the local Vite server. No screenshots were produced. Build success is not visual acceptance.
- No lint or test script is configured in the existing package. No staging/container/TLS/DNS checks were performed.
- Before release, inspect Chinese and English at 320/390/768/1440px, all three scenario states, keyboard focus, expanded disclosures, bottom CTA to contact (including Back), QR rendering, deep-link refresh and reduced motion on a reachable preview/stage.

---

## Full-site draft phase — 2026-10-31

The sections above describe the initial PowerX-only phase. The owner subsequently approved extending the accepted clean/light/green design across the company site, in this order: company home, services/contact, products, scenarios and developer entry. This phase supersedes the earlier “other pages unchanged” scope for the website UI only; production, deployment workflows, DNS, credentials and server configuration remain outside scope.

### Delivered routes

- `/`: company positioning, three business needs, product entry points, delivery approach. Removed unsupported 85% / 60% / 24/7 claims.
- `/services`: proposed discovery, integration and engineering engagement, delivery checkpoints and responsibility boundaries.
- `/products`: filterable six-product catalog; existing PowerX route preserved.
- `/products/crm`, `/products/mediax` (lookup alias `mediaxstudio`), `/products/scrm`, `/products/mall`, `/products/powerwechat`: bilingual purpose, fit, discussion scope and prerequisites; no private repository links.
- `/cases` and preserved `/cases/pawx-marketing-agent`: clearly labelled illustrative scenarios, plus customer-follow-up and commerce scenarios. Removed anonymous testimonial and unsupported 500% claim; none is presented as a verified customer result.
- `/developers`: existing public PowerX and PowerWeChat documentation, repositories and tutorial entry points.
- `/contact`: existing QR channel plus browser-local inquiry brief preview/copy/TXT download. `/contact-by-email` now safely reuses this page; it no longer clears a bogus submission form.
- Unknown routes have a useful recovery page. Shared mobile menu, locale selection, footer, skip link and route scroll restoration apply across the site.

### Evidence and publication boundaries

- Public PowerX positioning and maturity: same pinned `f99333ccd80eb3c2467fe6cc9009917340556424` sources above.
- Public PowerWeChat overview: `https://github.com/ArtisanCloud/PowerWeChat/blob/64653fe2163972c4d6bf84b2222872596a156545/README.md`; docs `https://powerwechat.artisan-cloud.com/zh/start/`; tutorial `https://github.com/ArtisanCloud/power-wechat-tutorial`.
- CRM and MediaXStudio paid positioning is owner-confirmed. No unverified feature readiness, automated-channel coverage, pricing, licensed availability or private source details are published.
- Existing website case data lacked verifiable attribution and permission; retained material is reframed as a scenario, not customer proof. Real case publication requires customer permission, attributable facts and measurement context.
- The QR image is a pre-existing contact asset. Its display/download works; actual WeChat identity, account availability, receipt and response time are not proven by the website.

### Contact closure still requiring decisions

There is no approved lead-receipt backend in this draft. A real inquiry pipeline needs a verified receiving destination or CRM endpoint; authorization and secure server-side credentials; field/consent/retention requirements; an assigned owner; delivery failure handling; and receipt/status semantics. No external lead service, database, email recipient or account was invented. The current brief is explicitly unsent, not uploaded or persisted, and under the visitor's control.

### Checks and review

- `npm test`: ten Node tests cover catalog identity, bilingual data completeness, historical route preservation, literal navigation targets, related products, contact no-transport/no-persistence contract, removal of unsupported claims, scroll/recovery routing, local assets and public source-link allowlist.
- `npm run build`, `tsc --noEmit`, temporary `vue-tsc --noEmit`, `git diff --check`.
- Independent review identified low-contrast small labels; shared notes/footer/contact placeholders and informational labels were darkened without changing the light visual direction.
- Supported Sites preview at the daemon-returned URL became available for this phase. Parent observed desktop home rendering, Chinese/English switch, inquiry draft/copy with explicit unsent status, and navigation-to-services scroll reset. These checks supersede the initial phase's total browser-blocked status, but do not imply full device/accessibility/backend acceptance.
- Narrow-device QA was attempted through supported browser tooling, but the exposed browser has no viewport resize API and organization policy blocks DevTools device emulation. No mobile pass is claimed. Full responsive/device verification, external QR/account receipt and production deployment remain separate checks. No browser screenshot deliverable was requested.

No GitHub Actions dispatch, production deploy, DNS change, PR or merge is part of this phase. Parent owns synchronization and publication to the existing private Site identity; do not create a new Site for this update.
- Final parent desktop pass additionally verified services, product catalog and plugin filter (2 results), CRM, MediaXStudio, PowerWeChat, scenarios, legacy contact and developer routes after rendering; no desktop horizontal overflow observed. Mobile remains unverified for the environment reason above. Product/scenario browser titles are currently generic (nonblocking draft limitation).

## SEO and reciprocal documentation phase — 2026-10-31

The owner additionally authorized company/product/documentation crosslinks and SEO/AI-readable information. See `docs/seo-discoverability.md` for the production/preview build contract, prerendered HTML, truthful structured data, canonical routes, noindex safeguards and verification limits. This phase includes the separately approved adaptation of workflow smoke-test assertions for route-specific HTML; triggers, publishing targets, permissions and secrets are unchanged, and no workflow is dispatched.
