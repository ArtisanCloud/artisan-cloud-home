<template>
  <section class="products">
    <h1 class="gradient-text">{{ $t('products.title') }}</h1>
    <div class="grid">
      <RouterLink
        v-for="p in list"
        :key="p.slug"
        class="card product-card"
        :to="`/products/${p.slug}`"
      >
        <h3>{{ p.name[currentLang] }}</h3>
        <p class="text-muted">{{ p.tagline[currentLang] }}</p>
        <div v-if="p.highlights?.[currentLang]?.length" class="chips">
          <span v-for="(h, i) in p.highlights[currentLang]" :key="i" class="pill">{{ h }}</span>
        </div>
      </RouterLink>
    </div>
  </section>
</template>

<script setup lang="ts">
// 产品列表：从数据源渲染，支持点击进入详情页
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { listProducts } from '../data/products';

const { locale } = useI18n();
const list = computed(() => listProducts());
const currentLang = computed(() => locale.value as 'zh' | 'en');
</script>

<style scoped>
.products h1 { margin: 0 0 14px; }
.grid {
  margin-top: 12px;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 14px;
}
.product-card {
  grid-column: span 12;
  display: block;
  text-decoration: none;
  transition: transform .15s ease, box-shadow .2s ease;
}
.product-card:hover { transform: translateY(-2px); }
.product-card h3 { margin: 0 0 6px; color: #fff; }
.product-card p { margin: 0; }
.chips { margin-top: 10px; display: flex; flex-wrap: wrap; gap: 8px; }
.pill {
  padding: 4px 10px;
  border-radius: 999px;
  border: 1px solid rgba(255,255,255,0.18);
  background: rgba(255,255,255,0.06);
  color: #E5E7EB;
  font-size: 12px;
}
@media (min-width: 640px) {
  .product-card { grid-column: span 6; }
}
@media (min-width: 1024px) {
  .product-card { grid-column: span 3; }
}
</style>