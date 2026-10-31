<template>
  <div class="layout" :class="{ 'powerx-layout': isPowerX }" :lang="lang">
    <a class="skip-link" href="#main-content">{{
      zh ? "跳到主要内容" : "Skip to content"
    }}</a>
    <header class="site-header">
      <nav
        class="ac-wrap site-nav"
        :aria-label="zh ? '主导航' : 'Main navigation'"
      >
        <RouterLink class="brand" to="/" aria-label="ArtisanCloud"
          ><span>Artisan<span class="brand-cloud">Cloud</span></span
          ><small>{{
            zh ? "元匠科技" : "Build with purpose"
          }}</small></RouterLink
        >
        <div
          class="site-links"
          :class="{ 'is-open': menuOpen }"
          id="site-navigation"
        >
          <RouterLink v-for="item in navigation" :key="item.to" :to="item.to">{{
            zh ? item.zh : item.en
          }}</RouterLink>
        </div>
        <div class="site-tools">
          <label class="ac-sr-only" for="site-language">{{
            zh ? "语言" : "Language"
          }}</label>
          <select
            id="site-language"
            v-model="currentLocale"
            @change="onChangeLocale"
          >
            <option value="zh">中文</option>
            <option value="en">EN</option>
          </select>
          <ElButton
            class="menu-toggle"
            :aria-expanded="menuOpen"
            aria-controls="site-navigation"
            @click="menuOpen = !menuOpen"
            >{{
              menuOpen ? (zh ? "关闭" : "Close") : zh ? "菜单" : "Menu"
            }}</ElButton
          >
        </div>
      </nav>
    </header>
    <main id="main-content" tabindex="-1"><RouterView /></main>
    <footer class="site-footer">
      <div class="ac-wrap footer-grid">
        <div>
          <span class="footer-name">{{
            zh ? "一起把下一步做好。" : "Build the next step together."
          }}</span>
          <p>
            {{
              zh
                ? "让想法成为可以持续演进的业务。"
                : "Build ideas into a business that can keep evolving."
            }}
          </p>
        </div>
        <div>
          <span>{{ zh ? "认识我们" : "Explore" }}</span
          ><RouterLink to="/services">{{
            zh ? "服务与交付" : "Services & delivery"
          }}</RouterLink
          ><RouterLink to="/products">{{
            zh ? "产品与方案" : "Products & solutions"
          }}</RouterLink
          ><RouterLink to="/cases">{{
            zh ? "业务场景" : "Business scenarios"
          }}</RouterLink>
        </div>
        <div>
          <span>{{ zh ? "开始连接" : "Connect" }}</span
          ><RouterLink to="/developers">{{
            zh ? "开发者入口" : "For developers"
          }}</RouterLink
          ><RouterLink to="/contact">{{
            zh ? "聊聊业务需求" : "Let’s talk business"
          }}</RouterLink
          ><a
            href="https://github.com/ArtisanCloud"
            target="_blank"
            rel="noopener noreferrer"
            >GitHub ↗</a
          >
        </div>
      </div>
      <div class="ac-wrap footer-bottom">
        <span>© {{ year }} ArtisanCloud</span
        ><span>{{
          zh
            ? "产品能力与交付范围以具体评估为准。"
            : "Product capabilities and delivery scope are subject to assessment."
        }}</span>
      </div>
    </footer>
  </div>
</template>
<script setup lang="ts">
import { computed, ref, watch } from "vue";
import { useRoute } from "vue-router";
import { useI18n } from "vue-i18n";
import { ElButton } from "element-plus";
import "element-plus/es/components/button/style/css";
import "./styles/site.css";
const route = useRoute();
const { locale } = useI18n();
const zh = computed(() => locale.value !== "en");
const lang = computed(() => (zh.value ? "zh-CN" : "en"));
const currentLocale = ref(String(locale.value));
const isPowerX = computed(() => route.name === "powerx");
const menuOpen = ref(false);
const year = new Date().getFullYear();
const navigation = [
  { to: "/", zh: "首页", en: "Home" },
  { to: "/services", zh: "服务", en: "Services" },
  { to: "/products", zh: "产品", en: "Products" },
  { to: "/cases", zh: "场景", en: "Scenarios" },
  { to: "/developers", zh: "开发者", en: "Developers" },
  { to: "/contact", zh: "联系我们", en: "Contact" },
];
function onChangeLocale() {
  locale.value = currentLocale.value;
  try {
    localStorage.setItem("locale", currentLocale.value);
  } catch {
    /* Storage is optional. */
  }
}
watch(
  () => route.fullPath,
  () => {
    menuOpen.value = false;
  },
);
watch(
  [lang, () => route.name],
  () => {
    document.documentElement.lang = lang.value;
    const nav = navigation.find((item) => item.to === route.path);
    document.title = `${isPowerX.value ? "PowerX" : nav ? (zh.value ? nav.zh : nav.en) : zh.value ? "产品与业务" : "Products & business"} · ArtisanCloud`;
  },
  { immediate: true },
);
</script>
