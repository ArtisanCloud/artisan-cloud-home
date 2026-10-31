import { routeSeo } from "./seo";

export function applySeo(path: string, language: "zh" | "en") {
  const seo = routeSeo(path, language);
  document.title = seo.title;
  const meta = (key: string, content: string, property = false) => {
    const attr = property ? "property" : "name";
    let tag = document.head.querySelector<HTMLMetaElement>(
      `meta[${attr}="${key}"]`,
    );
    if (!tag) {
      tag = document.createElement("meta");
      tag.setAttribute(attr, key);
      document.head.append(tag);
    }
    tag.content = content;
  };
  meta("description", seo.description);
  meta("robots", seo.robots);
  meta("og:title", seo.title, true);
  meta("og:description", seo.description, true);
  if (seo.canonical) meta("og:url", seo.canonical, true);
  else document.head.querySelector('meta[property="og:url"]')?.remove();
  meta("og:type", "website", true);
  meta("og:site_name", "ArtisanCloud", true);
  meta("og:locale", language === "zh" ? "zh_CN" : "en_US", true);
  meta("twitter:card", "summary");
  meta("twitter:title", seo.title);
  meta("twitter:description", seo.description);
  let canonical = document.head.querySelector<HTMLLinkElement>(
    'link[rel="canonical"]',
  );
  if (!canonical) {
    canonical = document.createElement("link");
    canonical.rel = "canonical";
    document.head.append(canonical);
  }
  if (seo.canonical) canonical.href = seo.canonical;
  else canonical.remove();
  document.head
    .querySelectorAll("script[data-site-schema]")
    .forEach((tag) => tag.remove());
  for (const entity of seo.jsonLd) {
    const tag = document.createElement("script");
    tag.type = "application/ld+json";
    tag.dataset.siteSchema = "";
    tag.textContent = JSON.stringify(entity);
    document.head.append(tag);
  }
}
