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
