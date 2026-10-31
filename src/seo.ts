import { products, getProductBySlug } from "./data/products";
import { cases, getCaseBySlug } from "./data/cases";
import { siteConfig } from "./site-config";

export type SeoLanguage = "zh" | "en";
export type JsonLd = Record<string, unknown>;
export type RouteSeo = {
  title: string;
  description: string;
  canonical: string;
  robots: string;
  jsonLd: JsonLd[];
  known: boolean;
};
type Copy = { zh: string; en: string };
type PageDefinition = { title: Copy; description: Copy; type?: string };

const pageDefinitions: Record<string, PageDefinition> = {
  "/": {
    title: {
      zh: "ArtisanCloud 元匠科技｜企业产品、工程与交付",
      en: "ArtisanCloud | Enterprise products, engineering & delivery",
    },
    description: {
      zh: "ArtisanCloud 元匠科技连接产品、工程与交付。探索 PowerX 企业 AI 底座、CRM、MediaXStudio、PowerWeChat，以及适合业务的集成与定制方案。",
      en: "Explore ArtisanCloud products, engineering and delivery: PowerX, CRM, MediaXStudio, PowerWeChat, and business-focused integration and custom services.",
    },
  },
  "/services": {
    title: {
      zh: "服务与交付｜业务梳理、集成与定制开发",
      en: "Services & delivery | Discovery, integration & custom engineering",
    },
    description: {
      zh: "从业务问题出发，了解 ArtisanCloud 的试点规划、产品集成与定制开发方式，以及范围、验证、交接与运行责任如何共同确认。",
      en: "Explore ArtisanCloud discovery, pilot planning, product integration and custom engineering, with shared scope, validation and delivery checkpoints.",
    },
  },
  "/products": {
    title: {
      zh: "产品与方案｜PowerX、CRM、MediaXStudio 与开发工具",
      en: "Products & solutions | PowerX, CRM, MediaXStudio & developer tools",
    },
    description: {
      zh: "比较 ArtisanCloud 开放底座、核心付费插件、客户与电商方案方向和开发者工具，按业务问题选择合适的产品组合。",
      en: "Explore ArtisanCloud foundations, core paid plugins, customer and commerce solution directions, and developer tools. Choose a starting point for your business.",
    },
    type: "CollectionPage",
  },
  "/cases": {
    title: {
      zh: "业务场景｜客户跟进、内容协作与交易交接",
      en: "Business scenarios | Customer follow-up, content & commerce",
    },
    description: {
      zh: "通过客户跟进、内容协作与交易交接场景，讨论产品与服务怎样组合。以下为方案示意，不是客户交付案例或实际业绩。",
      en: "Explore illustrative customer, content and commerce workflows to discuss products and services. These are solution scenarios, not customer case studies.",
    },
    type: "CollectionPage",
  },
  "/developers": {
    title: {
      zh: "开发者入口｜PowerX 与 PowerWeChat 文档和源码",
      en: "For developers | PowerX & PowerWeChat documentation and source",
    },
    description: {
      zh: "从 ArtisanCloud 开发者入口查阅 PowerX 与 PowerWeChat 官方文档、公开源码和教程，确认版本、权限与集成边界。",
      en: "Find PowerX and PowerWeChat documentation, public source and tutorials. Check versions, permissions and integration boundaries at the source.",
    },
    type: "CollectionPage",
  },
  "/contact": {
    title: {
      zh: "联系 ArtisanCloud｜微信沟通与需求简报",
      en: "Contact ArtisanCloud | WeChat & inquiry brief",
    },
    description: {
      zh: "通过现有微信入口联系 ArtisanCloud，或在浏览器本地整理需求简报并自行复制、下载。网页不会代你发送消息或提交线索。",
      en: "Connect through ArtisanCloud's existing WeChat channel, or prepare a local inquiry brief to copy or download. This page does not send or submit your inquiry.",
    },
    type: "ContactPage",
  },
};

export const seoAliases: Readonly<Record<string, string>> = Object.freeze({
  "/products/powerx": "/products/powerx-base",
  "/products/mediaxstudio": "/products/mediax",
  "/contact-by-email": "/contact",
});

export const seoRoutes: readonly string[] = Object.freeze([
  ...Object.keys(pageDefinitions),
  ...products.map((product) => `/products/${product.slug}`),
  ...cases.map((scenario) => `/cases/${scenario.slug}`),
]);

function normalizePath(path: string): string {
  const clean = path.split(/[?#]/, 1)[0].replace(/\/+$/, "") || "/";
  return seoAliases[clean] || clean;
}

function definePage(
  path: string,
  language: SeoLanguage,
):
  | { title: string; description: string; type: string; subject?: JsonLd }
  | undefined {
  const fixed = pageDefinitions[path];
  if (fixed)
    return {
      title: fixed.title[language],
      description: fixed.description[language],
      type: fixed.type || "WebPage",
    };
  if (path.startsWith("/products/")) {
    const product = getProductBySlug(path.slice("/products/".length));
    if (!product) return;
    return {
      title: `${product.name[language]}｜${product.label[language]}`,
      description: `${product.tagline[language]} ${product.audience[language]}`,
      type: "WebPage",
      subject: {
        "@type": "Thing",
        name: product.name[language],
        description: product.description[language],
      },
    };
  }
  if (path.startsWith("/cases/")) {
    const scenario = getCaseBySlug(path.slice("/cases/".length));
    if (!scenario) return;
    const label = language === "zh" ? "方案场景" : "Illustrative scenario";
    return {
      title: `${label}｜${scenario.title[language]}`,
      description: `${label}：${scenario.summary[language]}`,
      type: "WebPage",
    };
  }
}

export function routeSeo(path: string, language: SeoLanguage = "zh"): RouteSeo {
  const normalized = normalizePath(path);
  const definition = definePage(normalized, language);
  if (!definition) {
    return {
      title:
        language === "zh"
          ? "页面未找到 · ArtisanCloud"
          : "Page not found · ArtisanCloud",
      description:
        language === "zh"
          ? "返回 ArtisanCloud 首页，探索产品、服务与业务场景。"
          : "Return to ArtisanCloud to explore products, services and business scenarios.",
      canonical: "",
      robots: "noindex, nofollow",
      jsonLd: [],
      known: false,
    };
  }
  const canonical = new URL(normalized, siteConfig.siteOrigin).href;
  const organizationId = `${siteConfig.siteOrigin}/#organization`;
  const websiteId = `${siteConfig.siteOrigin}/#website`;
  const title =
    normalized === "/"
      ? definition.title
      : `${definition.title} · ArtisanCloud`;
  const organization: JsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": organizationId,
    name: "ArtisanCloud",
    alternateName: "元匠科技",
    url: `${siteConfig.siteOrigin}/`,
    sameAs: ["https://github.com/ArtisanCloud"],
  };
  const website: JsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": websiteId,
    url: `${siteConfig.siteOrigin}/`,
    name: "ArtisanCloud",
    publisher: { "@id": organizationId },
    inLanguage: ["zh-CN", "en"],
  };
  const page: JsonLd = {
    "@context": "https://schema.org",
    "@type": definition.type,
    "@id": `${canonical}#webpage`,
    url: canonical,
    name: title,
    description: definition.description,
    inLanguage: language === "zh" ? "zh-CN" : "en",
    isPartOf: { "@id": websiteId },
    publisher: { "@id": organizationId },
    ...(definition.subject ? { about: definition.subject } : {}),
  };
  const jsonLd: JsonLd[] = [organization, website, page];
  if (normalized !== "/") {
    const parentPath = normalized.startsWith("/products/")
      ? "/products"
      : normalized.startsWith("/cases/")
        ? "/cases"
        : undefined;
    const entries = [
      {
        name: language === "zh" ? "首页" : "Home",
        url: `${siteConfig.siteOrigin}/`,
      },
    ];
    if (parentPath)
      entries.push({
        name: pageDefinitions[parentPath].title[language]
          .split(/[|｜]/)[0]
          .trim(),
        url: new URL(parentPath, siteConfig.siteOrigin).href,
      });
    entries.push({ name: definition.title, url: canonical });
    jsonLd.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: entries.map((entry, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: entry.name,
        item: entry.url,
      })),
    });
  }
  return {
    title,
    description: definition.description,
    canonical,
    robots: siteConfig.indexable ? "index, follow" : "noindex, nofollow",
    jsonLd,
    known: true,
  };
}
