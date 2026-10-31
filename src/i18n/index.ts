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
const defaultLocale = (() => {
  try {
    const saved = localStorage.getItem("locale");
    if (saved === "zh" || saved === "en") return saved;
  } catch {
    /* Locale switching works when storage is unavailable. */
  }
  return navigator.language?.toLowerCase().startsWith("zh") ? "zh" : "en";
})();
export const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: defaultLocale,
  fallbackLocale: "en",
  messages,
});
