<template>
  <div class="layout">
    <header class="site-header">
      <nav class="nav container">
        <RouterLink class="brand" to="/">ArtisanCloud</RouterLink>
        <div class="links">
          <RouterLink to="/">{{ $t('nav.home') }}</RouterLink>
          <RouterLink to="/products">{{ $t('nav.products') }}</RouterLink>
          <RouterLink to="/cases">{{ $t('nav.cases') }}</RouterLink>
          <RouterLink to="/contact">{{ $t('nav.contact') }}</RouterLink>
        </div>
        <div class="lang">
          <label class="lang-label">{{ $t('nav.language') }}:</label>
          <select v-model="currentLocale" @change="onChangeLocale">
            <option value="zh">中文</option>
            <option value="en">English</option>
          </select>
        </div>
      </nav>
    </header>

    <main class="container">
      <RouterView />
    </main>

    <footer class="site-footer">
      <div class="container">© {{ year }} ArtisanCloud</div>
    </footer>
  </div>
</template>

<script setup lang="ts">
// 布局与多语言切换
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();
const currentLocale = ref<string>(locale.value as string);
const year = computed(() => new Date().getFullYear());

function onChangeLocale() {
  locale.value = currentLocale.value;
  try {
    localStorage.setItem('locale', currentLocale.value);
  } catch (e) {
    // 忽略本地存储异常
  }
}
</script>

<style>
:root {
  --bg: #ffffff;
  --text: #1f2937;
  --muted: #6b7280;
  --primary: #2563eb;
  --border: #e5e7eb;
}

* { box-sizing: border-box; }
html, body, #app { height: 100%; }
body {
  margin: 0;
  background: var(--bg);
  color: var(--text);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", sans-serif;
}

.container {
  width: 100%;
  max-width: 1080px;
  margin: 0 auto;
  padding: 0 20px;
}

.site-header {
  position: sticky;
  top: 0;
  background: rgba(255,255,255,0.8);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid var(--border);
}

.nav {
  height: 60px;
  display: flex;
  align-items: center;
  gap: 16px;
}

.brand {
  font-weight: 700;
  text-decoration: none;
  color: var(--text);
  margin-right: 12px;
}

.links {
  display: flex;
  gap: 14px;
  flex: 1;
}

.links a {
  text-decoration: none;
  color: var(--text);
  padding: 6px 8px;
  border-radius: 6px;
}

.links a.router-link-active {
  background: rgba(37, 99, 235, 0.1);
  color: var(--primary);
}

.lang {
  display: flex;
  align-items: center;
  gap: 8px;
}

.lang-label {
  color: var(--muted);
  font-size: 14px;
}

main.container {
  padding: 28px 20px 48px;
}

.site-footer {
  border-top: 1px solid var(--border);
  padding: 16px 0;
  color: var(--muted);
  font-size: 14px;
}
</style>