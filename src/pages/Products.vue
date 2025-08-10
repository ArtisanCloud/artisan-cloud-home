<template>
  <section class="products">
    <div class="hero-section">
      <div class="container">
        <h1 class="gradient-text">{{ $t('products.title') }}</h1>
        <p class="subtitle text-muted">企业级智能体产品矩阵，覆盖编排、业务、媒体与生态场景</p>
      </div>
    </div>

    <div class="container">
      <div class="products-grid">
        <RouterLink
          v-for="(p, index) in list"
          :key="p.slug"
          class="product-card"
          :class="`card-${index % 4}`"
          :to="`/products/${p.slug}`"
        >
          <div class="card-background"></div>
          <div class="card-content">
            <div class="product-icon">
              <div class="icon-wrapper">
                {{ getProductIcon(p.slug) }}
              </div>
            </div>
            <div class="product-info">
              <h3 class="product-name">{{ p.name[currentLang] }}</h3>
              <p class="product-tagline">{{ p.tagline[currentLang] }}</p>
              <div v-if="p.highlights?.[currentLang]?.length" class="highlights">
                <span v-for="(h, i) in p.highlights[currentLang]" :key="i" class="highlight-tag">{{ h }}</span>
              </div>
            </div>
            <div class="card-arrow">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M4.16667 10H15.8333M15.8333 10L10.8333 5M15.8333 10L10.8333 15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </div>
          <div class="card-glow"></div>
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// 产品列表：大卡片展示，科技感设计
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { listProducts } from '../data/products';

const { locale } = useI18n();
const list = computed(() => listProducts());
const currentLang = computed(() => locale.value as 'zh' | 'en');

function getProductIcon(slug: string): string {
  const icons: Record<string, string> = {
    'corex': '⚡',
    'powerx': '🚀',
    'mediax': '🎬',
    'powerwechat': '💬'
  };
  return icons[slug] || '🔧';
}
</script>

<style scoped>
.hero-section {
  padding: 40px 0 20px;
  text-align: center;
}
.subtitle {
  margin-top: 8px;
  font-size: 16px;
}

.products-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  margin-top: 32px;
  padding-bottom: 40px;
}

.product-card {
  position: relative;
  display: block;
  text-decoration: none;
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  min-height: 200px;
}

.product-card:hover {
  transform: translateY(-8px);
}

.card-background {
  position: absolute;
  inset: 0;
  opacity: 0.8;
  transition: opacity 0.3s ease;
}

.product-card.card-0 .card-background {
  background: linear-gradient(135deg, rgba(34,211,238,0.1) 0%, rgba(167,139,250,0.1) 100%);
}
.product-card.card-1 .card-background {
  background: linear-gradient(135deg, rgba(167,139,250,0.1) 0%, rgba(236,72,153,0.1) 100%);
}
.product-card.card-2 .card-background {
  background: linear-gradient(135deg, rgba(236,72,153,0.1) 0%, rgba(251,146,60,0.1) 100%);
}
.product-card.card-3 .card-background {
  background: linear-gradient(135deg, rgba(251,146,60,0.1) 0%, rgba(34,211,238,0.1) 100%);
}

.product-card:hover .card-background {
  opacity: 1;
}

.card-content {
  position: relative;
  z-index: 2;
  padding: 32px 28px;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02));
  border: 1px solid rgba(255,255,255,0.12);
  backdrop-filter: blur(12px);
}

.product-icon {
  margin-bottom: 20px;
}

.icon-wrapper {
  width: 56px;
  height: 56px;
  border-radius: 12px;
  background: linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05));
  border: 1px solid rgba(255,255,255,0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  backdrop-filter: blur(8px);
  transition: all 0.3s ease;
}

.product-card:hover .icon-wrapper {
  transform: scale(1.1);
  box-shadow: var(--glow-cyan);
}

.product-info {
  flex: 1;
}

.product-name {
  margin: 0 0 8px;
  color: #fff;
  font-size: 20px;
  font-weight: 700;
  line-height: 1.3;
}

.product-tagline {
  margin: 0 0 16px;
  color: var(--muted);
  font-size: 14px;
  line-height: 1.5;
}

.highlights {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: auto;
}

.highlight-tag {
  padding: 4px 10px;
  border-radius: 20px;
  background: rgba(255,255,255,0.08);
  border: 1px solid rgba(255,255,255,0.15);
  color: var(--text);
  font-size: 12px;
  font-weight: 500;
  transition: all 0.2s ease;
}

.product-card:hover .highlight-tag {
  background: rgba(255,255,255,0.12);
  border-color: rgba(255,255,255,0.25);
}

.card-arrow {
  position: absolute;
  top: 28px;
  right: 28px;
  color: var(--muted);
  transition: all 0.3s ease;
  opacity: 0.6;
}

.product-card:hover .card-arrow {
  color: var(--primary);
  transform: translateX(4px);
  opacity: 1;
}

.card-glow {
  position: absolute;
  inset: -1px;
  border-radius: 16px;
  padding: 1px;
  background: linear-gradient(135deg, transparent, rgba(255,255,255,0.1), transparent);
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: xor;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.product-card:hover .card-glow {
  opacity: 1;
}

@media (min-width: 768px) {
  .products-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 28px;
  }
}

@media (min-width: 1024px) {
  .products-grid {
    gap: 32px;
  }
  .product-card {
    min-height: 220px;
  }
  .card-content {
    padding: 36px 32px;
  }
}
</style>