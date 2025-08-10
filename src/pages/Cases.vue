<template>
  <section class="cases">
    <h1 class="gradient-text">{{ $t('cases.title') }}</h1>
    <div class="grid">
      <RouterLink
        v-for="c in list"
        :key="c.slug"
        class="card case-card"
        :to="`/cases/${c.slug}`"
      >
        <h3>{{ c.title[currentLang] }}</h3>
        <p class="text-muted">{{ c.summary[currentLang] }}</p>
        <div class="meta">
          <span class="pill">{{ c.industry[currentLang] }}</span>
          <span v-for="(t, i) in c.tags?.[currentLang] || []" :key="i" class="pill">{{ t }}</span>
        </div>
      </RouterLink>
    </div>
  </section>
</template>

<script setup lang="ts">
// 案例列表：从数据源渲染，支持点击进入详情页
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { listCases } from '../data/cases';

const { locale } = useI18n();
const list = computed(() => listCases());
const currentLang = computed(() => locale.value as 'zh' | 'en');
</script>

<style scoped>
.cases h1 { margin: 0 0 14px; }
.grid {
  margin-top: 12px;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 14px;
}
.case-card {
  grid-column: span 12;
  display: block;
  text-decoration: none;
  transition: transform .15s ease, box-shadow .2s ease;
}
.case-card:hover { transform: translateY(-2px); }
.case-card h3 { margin: 0 0 6px; color: #fff; }
.case-card p { margin: 0; }
.meta { margin-top: 10px; display: flex; gap: 8px; flex-wrap: wrap; }
.pill {
  padding: 4px 10px;
  border-radius: 999px;
  border: 1px solid rgba(255,255,255,0.18);
  background: rgba(255,255,255,0.06);
  color: #E5E7EB;
  font-size: 12px;
}
@media (min-width: 640px) {
  .case-card { grid-column: span 6; }
}
@media (min-width: 1024px) {
  .case-card { grid-column: span 4; }
}
</style>