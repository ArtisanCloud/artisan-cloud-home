import { createI18n } from "vue-i18n";

// Page copy lives beside each page or in typed product/scenario data.
// Keep the shared locale source small; retired marketing claims are not reused.
const messages = {
  zh: {
    brand: { name: "ArtisanCloud 元匠科技" },
    nav: {
      home: "首页",
      products: "产品",
      cases: "场景",
      contact: "联系我们",
      language: "语言",
    },
  },
  en: {
    brand: { name: "ArtisanCloud" },
    nav: {
      home: "Home",
      products: "Products",
      cases: "Scenarios",
      contact: "Contact",
      language: "Language",
    },
  },
};
export function preferredLocale(): "zh" | "en" {
  if (typeof window === "undefined") return "zh";
  try {
    const saved = localStorage.getItem("locale");
    if (saved === "zh" || saved === "en") return saved;
  } catch {
    /* Storage is optional. */
  }
  return navigator.language?.toLowerCase().startsWith("zh") ? "zh" : "en";
}
export const createSiteI18n = (locale: "zh" | "en" = preferredLocale()) =>
  createI18n({
    legacy: false,
    globalInjection: true,
    locale,
    fallbackLocale: "en",
    messages,
  });
