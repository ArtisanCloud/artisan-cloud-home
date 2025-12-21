<template>
  <section v-if="product" class="product-detail">
    <!-- Hero Section -->
    <div class="hero">
      <div class="container">
        <div class="hero-content">
          <div class="hero-text">
            <h1 class="gradient-text">{{ product.name[currentLang] }}</h1>
            <p class="subtitle text-muted">{{ product.tagline[currentLang] }}</p>
            <div v-if="product.highlights?.[currentLang]?.length" class="hero-highlights">
              <span v-for="(h, i) in product.highlights[currentLang]" :key="i" class="hero-tag">{{ h }}</span>
            </div>
            <div class="actions">
              <RouterLink class="btn btn-primary" to="/contact">{{ product.cta?.[currentLang] || $t('home.ctaContact') }}</RouterLink>
              <RouterLink class="btn btn-outline" to="/products">{{ $t('products.detail.backToList') }}</RouterLink>
            </div>
          </div>
          <div class="hero-visual">
            <div v-if="product.heroImage" class="product-hero-image">
              <img :src="product.heroImage" :alt="product.name[currentLang]" />
              <div class="image-glow"></div>
            </div>
            <div v-else class="product-icon-large">
              <div class="icon-bg"></div>
              <div class="icon-content">{{ getProductIcon(product.slug) }}</div>
              <div class="icon-glow"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <!-- Product Overview -->
      <div class="section">
        <div class="overview-card">
          <div class="overview-content">
            <h2>{{ $t('products.detail.intro') }}</h2>
            <p class="overview-text">{{ product.description[currentLang] }}</p>
          </div>
          <div class="overview-visual">
            <div class="feature-preview">
              <div class="preview-item" v-for="(_, i) in 3" :key="i">
                <div class="preview-dot"></div>
                <div class="preview-line"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Features Grid -->
      <div class="section">
        <h2 class="section-title gradient-text">{{ $t('products.detail.features') }}</h2>
        <div class="features-grid">
          <div 
            v-for="(feature, i) in product.features[currentLang]" 
            :key="i" 
            class="feature-card"
            :class="`feature-${i % 4}`"
          >
            <div class="feature-icon">
              <div class="feature-icon-bg"></div>
              <span class="feature-number">{{ String(i + 1).padStart(2, '0') }}</span>
            </div>
            <div class="feature-content">
              <p>{{ feature }}</p>
            </div>
            <div class="feature-decoration"></div>
          </div>
        </div>
      </div>

      <!-- Architecture Diagram Placeholder -->
      <div class="section">
        <div class="architecture-card">
          <h2 class="section-title gradient-text">产品架构</h2>
          <div class="architecture-visual">
            <div class="arch-layer" v-for="(layer, i) in architectureLayers" :key="i">
              <div class="layer-box">
                <span class="layer-name">{{ layer }}</span>
              </div>
              <div v-if="i < architectureLayers.length - 1" class="layer-connector"></div>
            </div>
          </div>
          <p class="arch-description text-muted">
            {{ currentLang === 'zh' ? '企业级架构设计，支持高并发、高可用、可扩展的智能体运行环境' : 'Enterprise architecture design supporting high concurrency, availability, and scalable agent runtime environment' }}
          </p>
        </div>
      </div>

      <!-- CTA Section -->
      <div class="section cta-section">
        <div class="cta-card">
          <div class="cta-content">
            <h3>{{ currentLang === 'zh' ? '准备开始了吗？' : 'Ready to Get Started?' }}</h3>
            <p class="text-muted">
              {{ currentLang === 'zh' ? '联系我们的专家团队，获取定制化解决方案和技术支持' : 'Contact our expert team for customized solutions and technical support' }}
            </p>
            <RouterLink class="btn btn-primary btn-large" to="/contact">{{ $t('products.detail.cta') }}</RouterLink>
          </div>
          <div class="cta-visual">
            <div class="cta-decoration">
              <div class="decoration-circle" v-for="i in 3" :key="i"></div>
            </div>
          </div>
        </div>
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
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { getProductBySlug } from '../data/products';

const route = useRoute();
const { locale } = useI18n();
const slug = computed(() => String(route.params.slug || ''));
const product = computed(() => getProductBySlug(slug.value));
const currentLang = computed(() => locale.value as 'zh' | 'en');

const architectureLayers = computed(() => 
  currentLang.value === 'zh' 
    ? ['用户界面层', '业务逻辑层', '智能体引擎', '数据存储层']
    : ['UI Layer', 'Business Logic', 'Agent Engine', 'Data Storage']
);

function getProductIcon(slug: string): string {
  const icons: Record<string, string> = {
    'powerx-base': '⚡',
    'scrm': '🚀',
    'mediax': '🎬',
    'mall': '🛍️'
  };
  return icons[slug] || '🔧';
}
</script>

<style scoped>
/* Hero Section */
.hero {
  padding: 60px 0 40px;
  background: 
    radial-gradient(600px 300px at 50% 0%, rgba(34,211,238,0.1), transparent 70%),
    radial-gradient(400px 200px at 80% 100%, rgba(167,139,250,0.08), transparent 70%);
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  align-items: center;
}

.hero-text h1 {
  margin-bottom: 12px;
  font-size: 36px;
}

.subtitle {
  margin-bottom: 20px;
  font-size: 18px;
  line-height: 1.6;
}

.hero-highlights {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 24px;
}

.hero-tag {
  padding: 6px 14px;
  border-radius: 20px;
  background: linear-gradient(135deg, rgba(34,211,238,0.15), rgba(167,139,250,0.15));
  border: 1px solid rgba(255,255,255,0.2);
  color: #fff;
  font-size: 13px;
  font-weight: 500;
}

.actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.hero-visual {
  display: flex;
  justify-content: center;
}

.product-icon-large {
  position: relative;
  width: 160px;
  height: 160px;
}

.product-hero-image {
  position: relative;
  width: 100%;
  max-width: 500px;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid rgba(255,255,255,0.15);
  box-shadow: var(--shadow-md);
}

.product-hero-image img {
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.5s ease;
}

.product-hero-image:hover img {
  transform: scale(1.02);
}

.image-glow {
  position: absolute;
  inset: 0;
  box-shadow: inset 0 0 40px rgba(34,211,238,0.1);
  pointer-events: none;
}

.icon-bg {
  position: absolute;
  inset: 0;
  border-radius: 24px;
  background: linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05));
  border: 1px solid rgba(255,255,255,0.15);
  backdrop-filter: blur(12px);
}

.icon-content {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 64px;
  z-index: 2;
}

.icon-glow {
  position: absolute;
  inset: -2px;
  border-radius: 26px;
  background: linear-gradient(135deg, rgba(34,211,238,0.3), rgba(167,139,250,0.3));
  filter: blur(8px);
  opacity: 0.6;
  animation: pulse 3s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 0.6; transform: scale(1); }
  50% { opacity: 0.8; transform: scale(1.05); }
}

/* Overview Card */
.overview-card {
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;
  background: linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02));
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 16px;
  padding: 32px;
  backdrop-filter: blur(12px);
}

.overview-text {
  font-size: 16px;
  line-height: 1.7;
  color: var(--text);
}

.overview-visual {
  display: flex;
  justify-content: center;
}

.feature-preview {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.preview-item {
  display: flex;
  align-items: center;
  gap: 12px;
}

.preview-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--primary);
  box-shadow: var(--glow-cyan);
}

.preview-line {
  width: 60px;
  height: 2px;
  background: linear-gradient(90deg, var(--primary), transparent);
}

/* Features Grid */
.section-title {
  text-align: center;
  margin-bottom: 32px;
  font-size: 28px;
}

.features-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
}

.feature-card {
  position: relative;
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 24px;
  background: linear-gradient(135deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01));
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 12px;
  backdrop-filter: blur(8px);
  transition: all 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-2px);
  border-color: rgba(255,255,255,0.15);
}

.feature-icon {
  position: relative;
  width: 40px;
  height: 40px;
  flex-shrink: 0;
}

.feature-icon-bg {
  position: absolute;
  inset: 0;
  border-radius: 8px;
  background: linear-gradient(135deg, rgba(34,211,238,0.2), rgba(167,139,250,0.2));
  border: 1px solid rgba(255,255,255,0.15);
}

.feature-number {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: 700;
  font-size: 14px;
}

.feature-content p {
  margin: 0;
  line-height: 1.6;
  color: var(--text);
}

.feature-decoration {
  position: absolute;
  top: 12px;
  right: 12px;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: var(--primary);
  opacity: 0.6;
}

/* Architecture */
.architecture-card {
  text-align: center;
  padding: 40px 32px;
  background: linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02));
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 16px;
  backdrop-filter: blur(12px);
}

.architecture-visual {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin: 32px 0;
}

.arch-layer {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.layer-box {
  padding: 12px 24px;
  background: linear-gradient(135deg, rgba(34,211,238,0.1), rgba(167,139,250,0.1));
  border: 1px solid rgba(255,255,255,0.15);
  border-radius: 8px;
  backdrop-filter: blur(8px);
}

.layer-name {
  color: #fff;
  font-weight: 500;
  font-size: 14px;
}

.layer-connector {
  width: 2px;
  height: 20px;
  background: linear-gradient(180deg, var(--primary), var(--secondary));
  margin: 8px 0;
}

.arch-description {
  margin-top: 24px;
  font-size: 14px;
}

/* CTA Section */
.cta-section {
  margin-top: 40px;
}

.cta-card {
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;
  align-items: center;
  padding: 40px 32px;
  background: linear-gradient(135deg, rgba(34,211,238,0.08), rgba(167,139,250,0.08));
  border: 1px solid rgba(255,255,255,0.15);
  border-radius: 16px;
  backdrop-filter: blur(12px);
  text-align: center;
}

.cta-content h3 {
  margin: 0 0 12px;
  color: #fff;
  font-size: 24px;
}

.cta-content p {
  margin: 0 0 24px;
  font-size: 16px;
}

.btn-large {
  padding: 12px 24px;
  font-size: 16px;
}

.cta-visual {
  display: flex;
  justify-content: center;
}

.cta-decoration {
  display: flex;
  gap: 12px;
}

.decoration-circle {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  animation: float 2s ease-in-out infinite;
}

.decoration-circle:nth-child(2) {
  animation-delay: 0.5s;
}

.decoration-circle:nth-child(3) {
  animation-delay: 1s;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}

/* Responsive */
@media (min-width: 768px) {
  .hero-content {
    grid-template-columns: 1fr 300px;
  }
  
  .overview-card {
    grid-template-columns: 2fr 1fr;
  }
  
  .features-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .cta-card {
    grid-template-columns: 1fr auto;
    text-align: left;
  }
  
  .architecture-visual {
    flex-direction: row;
    justify-content: center;
  }
  
  .layer-connector {
    width: 40px;
    height: 2px;
    margin: 0 8px;
  }
}

@media (min-width: 1024px) {
  .hero-text h1 {
    font-size: 42px;
  }
}
</style>