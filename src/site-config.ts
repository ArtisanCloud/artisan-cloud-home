export type SiteEnvironment = "production" | "preview";

const productionSiteOrigin = "https://artisan-cloud.com";
const productionDocsOrigin = "https://powerx-doc.artisan-cloud.com";

function validateOrigin(value: string, key: string): string {
  let url: URL;
  try {
    url = new URL(value);
  } catch {
    throw new Error(`${key} must be an absolute origin.`);
  }
  const local = ["localhost", "127.0.0.1", "[::1]"].includes(url.hostname);
  if (
    (url.protocol !== "https:" && !(local && url.protocol === "http:")) ||
    url.username ||
    url.password ||
    url.search ||
    url.hash ||
    url.pathname !== "/"
  ) {
    throw new Error(
      `${key} must be an HTTPS origin (HTTP is allowed only for local preview).`,
    );
  }
  return url.origin;
}

const environment = import.meta.env.VITE_SITE_ENV || "production";
if (environment !== "production" && environment !== "preview") {
  throw new Error("VITE_SITE_ENV must be production or preview.");
}

function configuredOrigin(
  key: "VITE_SITE_ORIGIN" | "VITE_DOCS_ORIGIN",
  production: string,
): string {
  const provided = import.meta.env[key];
  if (environment === "preview") {
    if (!provided) throw new Error(`${key} is required for a preview build.`);
    return validateOrigin(provided, key);
  }
  // A production build cannot accidentally publish a private preview canonical or link.
  if (provided && validateOrigin(provided, key) !== production) {
    throw new Error(
      `${key} cannot override the approved production origin in production mode.`,
    );
  }
  return production;
}

export const siteConfig: Readonly<{
  environment: SiteEnvironment;
  siteOrigin: string;
  docsOrigin: string;
  indexable: boolean;
}> = Object.freeze({
  environment,
  siteOrigin: configuredOrigin("VITE_SITE_ORIGIN", productionSiteOrigin),
  docsOrigin: configuredOrigin("VITE_DOCS_ORIGIN", productionDocsOrigin),
  indexable: environment === "production",
});

export function docsUrl(path = "/"): string {
  if (!path.startsWith("/") || path.startsWith("//")) {
    throw new Error(
      "Documentation links must use an absolute path on the configured documentation origin.",
    );
  }
  const resolved = new URL(path, siteConfig.docsOrigin);
  if (resolved.origin !== siteConfig.docsOrigin) {
    throw new Error(
      "Documentation links cannot leave the configured documentation origin.",
    );
  }
  return resolved.href;
}
