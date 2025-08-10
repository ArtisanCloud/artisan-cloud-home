<template>
  <section v-if="item" class="case-detail">
    <div class="hero">
      <div class="container">
        <h1 class="gradient-text">{{ item.clientName[currentLang] }}</h1>
        <p class="subtitle">{{ item.title[currentLang] }}</p>
        <div class="meta">
          <span class="pill">{{ item.industry[currentLang] }}</span>
          <span v-for="(t, i) in item.tags?.[currentLang] || []" :key="i" class="pill">{{ t }}</span>
        </div>
        <div class="actions">
          <RouterLink class="btn btn-primary" to="/contact">{{ $t('home.ctaContact') }}</RouterLink>
          <RouterLink class="btn btn-outline" to="/cases">{{ $t('cases.detail.backToList') }}</RouterLink>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="section">
        <div class="card">
          <h2>{{ $t('cases.detail.summary') }}</h2>
          <p class="text-muted">{{ item.summary[currentLang] }}</p>
        </div>
      </div>

      <div class="section">
        <div class="grid">
          <div class="card">
            <h3>{{ $t('cases.detail.challenge') }}</h3>
            <p>{{ item.challenge[currentLang] }}</p>
          </div>
          <div class="card">
            <h3>{{ $t('cases.detail.solution') }}</h3>
            <p>{{ item.solution[currentLang] }}</p>
          </div>
        </div>
      </div>

      <div class="section">
        <div class="card">
          <h2>{{ $t('cases.detail.results') }}</h2>
          <ul class="result-list">
            <li v-for="(r, i) in item.results[currentLang]" :key="i">{{ r }}</li>
          </ul>
        </div>
      </div>

      <div class="section" v-if="item.testimonial">
        <div class="card">
          <h3>{{ $t('cases.detail.testimonial') }}</h3>
          <blockquote class="quote">
            "{{ item.testimonial?.content[currentLang] }}"
            <footer>—— {{ item.testimonial?.author }}<span v-if="item.testimonial?.role">，{{ item.testimonial?.role[currentLang] }}</span></footer>
          </blockquote>
        </div>
      </div>

      <div class="section cta">
        <RouterLink class="btn btn-primary" to="/contact">{{ $t('cases.detail.cta') }}</RouterLink>
      </div>
    </div>
  </section>

  <section v-else class="container section">
    <div class="card">
      <h2>{{ $t('cases.detail.notFound') }}</h2>
      <p class="text-muted">{{ $t('cases.detail.backToList') }}</p>
      <RouterLink class="btn btn-outline" to="/cases">{{ $t('nav.cases') }}</RouterLink>
    </div>
  </section>
</template>

<script setup lang="ts">
// 案例详情页：根据路由 slug 加载案例数据
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { getCaseBySlug } from '../data/cases';

const route = useRoute();
const { locale } = useI18n();
const slug = computed(() => String(route.params.slug || ''));
const item = computed(() => getCaseBySlug(slug.value));
const currentLang = computed(() => locale.value as 'zh' | 'en');
</script>

<style scoped>
.subtitle { margin-top: 8px; color: var(--muted); }
.meta { margin-top: 10px; display: flex; gap: 8px; justify-content: center; flex-wrap: wrap; }
.pill {
  padding: 4px 10px;
  border-radius: 999px;
  border: 1px solid rgba(255,255,255,0.18);
  background: rgba(255,255,255,0.06);
  color: #E5E7EB;
  font-size: 12px;
}
.actions { margin-top: 14px; display: flex; gap: 12px; justify-content: center; }
.grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 14px;
}
@media (min-width: 768px) {
  .grid { grid-template-columns: 1fr 1fr; }
}
.result-list { margin: 8px 0 0; padding-left: 18px; line-height: 1.9; }
.quote { margin: 0; font-style: italic; color: var(--text); }
.quote footer { margin-top: 8px; color: var(--muted); font-style: normal; }
.cta { text-align: center; }
</style>