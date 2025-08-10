<template>
  <section v-if="product" class="product-detail">
    <div class="hero">
      <div class="container">
        <h1 class="gradient-text">{{ product.name[currentLang] }}</h1>
        <p class="subtitle text-muted">{{ product.tagline[currentLang] }}</p>
        <div class="actions">
          <RouterLink class="btn btn-primary" to="/contact">{{ product.cta?.[currentLang] || $t('home.ctaContact') }}</RouterLink>
          <RouterLink class="btn btn-outline" to="/products">{{ $t('products.detail.backToList') }}</RouterLink>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="section">
        <div class="card">
          <h2>{{ $t('products.detail.intro') }}</h2>
          <p>{{ product.description[currentLang] }}</p>
          <div v-if="product.highlights?.[currentLang]?.length" class="chips">
            <span v-for="(h, i) in product.highlights[currentLang]" :key="i" class="chip">{{ h }}</span>
          </div>
        </div>
      </div>

      <div class="section">
        <div class="card">
          <h2>{{ $t('products.detail.features') }}</h2>
          <ul class="feature-list">
            <li v-for="(f, i) in product.features[currentLang]" :key="i">{{ f }}</li>
          </ul>
        </div>
      </div>

      <div class="section cta">
        <RouterLink class="btn btn-primary" to="/contact">{{ $t('products.detail.cta') }}</RouterLink>
      </div>
    </div>
  </section>

  <section v-else class="container section">
    <div class="card">
      <h2>{{ $t('products.detail.notFound') }}</h2>
      <p class="text-muted">{{ $t('products.detail.backToList') }}</p>
      <RouterLink class="btn btn-outline" to="/products">{{ $t('nav.products') }}</RouterLink>
    </div>
  </section>
</template>

<script setup lang="ts">
// 产品详情页：根据路由 slug 加载产品数据
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { getProductBySlug } from '../data/products';

const route = useRoute();
const { locale } = useI18n();
const slug = computed(() => String(route.params.slug || ''));
const product = computed(() => getProductBySlug(slug.value));
const currentLang = computed(() => locale.value as 'zh' | 'en');
</script>

<style scoped>
.subtitle { margin-top: 8px; }
.actions { margin-top: 16px; display: flex; gap: 12px; justify-content: center; }

.chips { margin-top: 12px; display: flex; flex-wrap: wrap; gap: 8px; }
.chip {
  padding: 4px 10px;
  border-radius: 999px;
  border: 1px solid rgba(255,255,255,0.18);
  background: rgba(255,255,255,0.06);
  color: #E5E7EB;
  font-size: 12px;
}

.feature-list { margin: 8px 0 0; padding-left: 18px; line-height: 1.9; }
.cta { text-align: center; }
</style>