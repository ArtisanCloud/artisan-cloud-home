import { createSSRApp } from "vue";
import { renderToString } from "vue/server-renderer";
import App from "./App.vue";
import { createSiteRouter } from "./router";
import { createSiteI18n } from "./i18n";
export { routeSeo, seoRoutes } from "./seo";
export { siteConfig } from "./site-config";

export async function render(path: string) {
  const router = createSiteRouter(true);
  const app = createSSRApp(App);
  app.use(router);
  app.use(createSiteI18n("zh"));
  await router.push(path);
  await router.isReady();
  return renderToString(app);
}
