import { createApp } from "vue";
import App from "./App.vue";
import { createSiteRouter } from "./router";
import { createSiteI18n } from "./i18n";

// 创建并挂载应用，接入路由与多语言
const app = createApp(App);
const router = createSiteRouter();
app.use(router);
app.use(createSiteI18n());
router.isReady().then(() => app.mount("#app"));
