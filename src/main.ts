import { createApp } from 'vue';
import App from './App.vue';
import { router } from './router';
import { i18n } from './i18n';

// 创建并挂载应用，接入路由与多语言
const app = createApp(App);
app.use(router);
app.use(i18n);
app.mount('#app');