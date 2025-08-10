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
  --bg: #0B0E1A;           /* 深色科技背景 */
  --surface: rgba(255,255,255,0.05);
  --text: #E5E7EB;         /* 主文字 */
  --muted: #9CA3AF;        /* 次级文字 */
  --primary: #22D3EE;      /* 霓青 */
  --secondary: #A78BFA;    /* 霓紫 */
  --border: #1F2430;       /* 深色描边 */
  --radius-sm: 8px;
  --radius-md: 12px;
  --shadow-sm: 0 1px 0 rgba(255,255,255,0.03);
  --shadow-md: 0 1px 0 rgba(255,255,255,0.03), 0 8px 24px rgba(0,0,0,0.35);
  --glow-cyan: 0 0 12px rgba(34,211,238,0.35), 0 0 28px rgba(34,211,238,0.18);
  --glow-purple: 0 0 12px rgba(167,139,250,0.35), 0 0 28px rgba(167,139,250,0.18);
}

/* Reset */
* { box-sizing: border-box; }
html, body, #app { height: 100%; }
body {
  margin: 0;
  color: var(--text);
  background:
    radial-gradient(800px 400px at 20% 0%, rgba(34,211,238,0.08), transparent 60%),
    radial-gradient(800px 400px at 80% 0%, rgba(167,139,250,0.08), transparent 60%),
    radial-gradient(2px 2px at 30% 20%, rgba(255,255,255,0.07), transparent 50%),
    linear-gradient(#0B0E1A, #0B0E1A);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial,
    "Noto Sans", "Noto Sans CJK SC", "Noto Sans SC", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* 排版 */
h1, h2, h3 {
  margin: 0 0 12px;
  letter-spacing: 0.01em;
}
h1 { font-size: 42px; line-height: 1.15; font-weight: 800; }
h2 { font-size: 28px; line-height: 1.25; font-weight: 700; }
h3 { font-size: 20px; line-height: 1.35; font-weight: 600; }
p { line-height: 1.8; color: var(--text); }

.gradient-text {
  background: linear-gradient(90deg, var(--primary), var(--secondary));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

/* 容器 */
.container {
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 20px;
}

/* 顶栏 */
.site-header {
  position: sticky;
  top: 0;
  background: rgba(9, 12, 22, 0.65);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border);
}

.nav {
  height: 64px;
  display: flex;
  align-items: center;
  gap: 16px;
}

.brand {
  font-weight: 800;
  text-decoration: none;
  color: #fff;
  letter-spacing: 0.04em;
  margin-right: 12px;
  text-shadow: var(--glow-purple);
}

.links {
  display: flex;
  gap: 14px;
  flex: 1;
}

.links a {
  text-decoration: none;
  color: var(--text);
  padding: 8px 10px;
  border-radius: var(--radius-sm);
  border: 1px solid transparent;
  transition: all .2s ease;
}
.links a:hover {
  color: #fff;
  text-shadow: var(--glow-cyan);
}
.links a.router-link-active {
  background: linear-gradient(90deg, rgba(34,211,238,0.12), rgba(167,139,250,0.12));
  color: #fff;
  border-color: rgba(255,255,255,0.12);
  box-shadow: var(--glow-cyan);
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

.lang select {
  appearance: none;
  padding: 6px 28px 6px 10px;
  border-radius: var(--radius-sm);
  border: 1px solid var(--border);
  background: rgba(255,255,255,0.03);
  color: var(--text);
  font-size: 14px;
  background-image:
    linear-gradient(45deg, transparent 50%, var(--muted) 50%),
    linear-gradient(135deg, var(--muted) 50%, transparent 50%);
  background-position:
    calc(100% - 18px) calc(50% - 3px),
    calc(100% - 12px) calc(50% - 3px);
  background-size: 6px 6px, 6px 6px;
  background-repeat: no-repeat;
}

/* 主体与页脚 */
main.container {
  padding: 28px 20px 64px;
}

.site-footer {
  border-top: 1px solid var(--border);
  padding: 16px 0;
  color: var(--muted);
  font-size: 14px;
}

/* 按钮 */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 10px 16px;
  font-size: 14px;
  border-radius: var(--radius-sm);
  border: 1px solid transparent;
  cursor: pointer;
  transition: all .2s ease;
}
.btn-primary {
  background: linear-gradient(90deg, rgba(34,211,238,0.15), rgba(167,139,250,0.15));
  color: #fff;
  border-color: rgba(255,255,255,0.16);
  box-shadow: var(--glow-cyan);
}
.btn-primary:hover {
  background: linear-gradient(90deg, rgba(34,211,238,0.25), rgba(167,139,250,0.25));
  transform: translateY(-1px);
}
.btn-outline {
  background: transparent;
  color: var(--text);
  border-color: rgba(255,255,255,0.18);
}
.btn-outline:hover {
  border-color: rgba(255,255,255,0.28);
  box-shadow: var(--glow-purple);
}

/* 卡片 */
.card {
  background: linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.03));
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-md);
  backdrop-filter: blur(8px);
  padding: 16px;
}

/* 英雄与分区 */
.section {
  padding: 56px 0;
  border-top: 1px solid rgba(255,255,255,0.06);
}
.hero {
  padding: 80px 0 40px;
  text-align: center;
}
.hero p {
  color: var(--muted);
  max-width: 760px;
  margin: 12px auto 0;
}

/* 工具类 */
.text-muted { color: var(--muted); }
.text-primary { color: var(--primary); }
.text-secondary { color: var(--secondary); }
.border { border: 1px solid var(--border); border-radius: var(--radius-sm); }
.rounded { border-radius: var(--radius-sm); }
.shadow-sm { box-shadow: var(--shadow-sm); }
.shadow-md { box-shadow: var(--shadow-md); }
</style>
