<template>
  <section v-if="item" class="case-detail">
    <!-- Story Header -->
    <div class="story-header">
      <div class="container">
        <div class="header-content">
          <div class="story-meta">
            <div class="industry-pill">
              <span>{{ item.industry[currentLang] }}</span>
            </div>
            <div class="story-tags">
              <span v-for="(t, i) in item.tags?.[currentLang] || []" :key="i" class="tag">{{ t }}</span>
            </div>
          </div>
          
          <h1 class="story-title">{{ item.title[currentLang] }}</h1>
          <div class="client-showcase">
            <div class="client-avatar">
              <div class="avatar-bg"></div>
              <span class="client-initial">{{ getClientInitial(item.clientName[currentLang]) }}</span>
            </div>
            <div class="client-info">
              <h2 class="client-name gradient-text">{{ item.clientName[currentLang] }}</h2>
              <p class="story-tagline text-muted">{{ item.summary[currentLang] }}</p>
            </div>
          </div>
          
          <div class="header-actions">
            <RouterLink class="btn btn-primary" to="/contact">{{ $t('home.ctaContact') }}</RouterLink>
            <RouterLink class="btn btn-outline" to="/cases">{{ $t('cases.detail.backToList') }}</RouterLink>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <!-- Story Journey -->
      <div class="story-journey">
        <div class="journey-step">
          <div class="step-indicator">
            <div class="step-number">01</div>
            <div class="step-line"></div>
          </div>
          <div class="step-content">
            <h3 class="step-title">{{ $t('cases.detail.challenge') }}</h3>
            <div class="challenge-card">
              <div class="challenge-icon">⚠️</div>
              <p class="challenge-text">{{ item.challenge[currentLang] }}</p>
            </div>
          </div>
        </div>

        <div class="journey-step">
          <div class="step-indicator">
            <div class="step-number">02</div>
            <div class="step-line"></div>
          </div>
          <div class="step-content">
            <h3 class="step-title">{{ $t('cases.detail.solution') }}</h3>
            <div class="solution-card">
              <div class="solution-visual">
                <div class="solution-flow">
                  <div class="flow-node" v-for="i in 3" :key="i">
                    <div class="node-dot"></div>
                    <div v-if="i < 3" class="node-connector"></div>
                  </div>
                </div>
              </div>
              <p class="solution-text">{{ item.solution[currentLang] }}</p>
            </div>
          </div>
        </div>

        <div class="journey-step">
          <div class="step-indicator">
            <div class="step-number">03</div>
          </div>
          <div class="step-content">
            <h3 class="step-title">{{ $t('cases.detail.results') }}</h3>
            <div class="results-showcase">
              <div 
                v-for="(result, i) in item.results[currentLang]" 
                :key="i" 
                class="result-metric"
                :class="`metric-${i % 3}`"
              >
                <div class="metric-icon">
                  <div class="icon-bg"></div>
                  <span class="metric-symbol">{{ getMetricIcon(i) }}</span>
                </div>
                <div class="metric-content">
                  <div class="metric-value">{{ extractMetricValue(result) }}</div>
                  <div class="metric-label">{{ extractMetricLabel(result) }}</div>
                </div>
                <div class="metric-glow"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Client Testimonial -->
      <div class="testimonial-section" v-if="item.testimonial">
        <div class="testimonial-card">
          <div class="testimonial-header">
            <h3 class="section-title gradient-text">{{ $t('cases.detail.testimonial') }}</h3>
            <div class="quote-decoration">
              <div class="quote-mark">"</div>
            </div>
          </div>
          
          <blockquote class="testimonial-quote">
            {{ item.testimonial?.content[currentLang] }}
          </blockquote>
          
          <div class="testimonial-author">
            <div class="author-avatar">
              <div class="avatar-ring"></div>
              <span class="author-initial">{{ getAuthorInitial(item.testimonial?.author) }}</span>
            </div>
            <div class="author-info">
              <div class="author-name">{{ item.testimonial?.author }}</div>
              <div class="author-role text-muted" v-if="item.testimonial?.role">
                {{ item.testimonial?.role[currentLang] }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Related Products -->
      <div class="related-section" v-if="item.relatedProducts?.length">
        <h3 class="section-title gradient-text">相关产品</h3>
        <div class="related-products">
          <RouterLink 
            v-for="productSlug in item.relatedProducts" 
            :key="productSlug"
            :to="`/products/${productSlug}`"
            class="related-product"
          >
            <div class="product-icon-small">{{ getProductIcon(productSlug) }}</div>
            <span class="product-name-small">{{ getProductName(productSlug) }}</span>
          </RouterLink>
        </div>
      </div>

      <!-- CTA Section -->
      <div class="case-cta">
        <div class="cta-content">
          <h3>{{ currentLang === 'zh' ? '获取类似成功案例' : 'Get Similar Success Story' }}</h3>
          <p class="text-muted">
            {{ currentLang === 'zh' ? '联系我们的专家，了解如何为您的业务定制智能体解决方案' : 'Contact our experts to learn how to customize agent solutions for your business' }}
          </p>
          <RouterLink class="btn btn-primary btn-large" to="/contact">{{ $t('cases.detail.cta') }}</RouterLink>
        </div>
        <div class="cta-visual">
          <div class="success-animation">
            <div class="success-ring" v-for="i in 3" :key="i"></div>
          </div>
        </div>
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
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { getCaseBySlug } from '../data/cases';
import { getProductBySlug } from '../data/products';

const route = useRoute();
const { locale } = useI18n();
const slug = computed(() => String(route.params.slug || ''));
const item = computed(() => getCaseBySlug(slug.value));
const currentLang = computed(() => locale.value as 'zh' | 'en');

function getClientInitial(name: string): string {
  return name.charAt(0).toUpperCase();
}

function getAuthorInitial(name?: string): string {
  return name ? name.charAt(0).toUpperCase() : 'A';
}

function getMetricIcon(index: number): string {
  const icons = ['📈', '💰', '⚡', '🎯', '🚀'];
  return icons[index % icons.length];
}

function extractMetricValue(result: string): string {
  const match = result.match(/(\d+\.?\d*%?)/);
  return match ? match[1] : '✓';
}

function extractMetricLabel(result: string): string {
  return result.replace(/(\d+\.?\d*%?\s*)/, '').trim();
}

function getProductIcon(slug: string): string {
  const icons: Record<string, string> = {
    'corex': '⚡',
    'powerx': '🚀',
    'mediax': '🎬',
    'powerwechat': '💬'
  };
  return icons[slug] || '🔧';
}

function getProductName(slug: string): string {
  const product = getProductBySlug(slug);
  return product ? product.name[currentLang.value].split('·')[0].trim() : slug;
}
</script>

<style scoped>
/* Story Header */
.story-header {
  padding: 60px 0 40px;
  background: 
    radial-gradient(600px 300px at 30% 0%, rgba(167,139,250,0.12), transparent 70%),
    radial-gradient(400px 200px at 70% 100%, rgba(34,211,238,0.08), transparent 70%);
}

.header-content {
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}

.story-meta {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  margin-bottom: 20px;
  flex-wrap: wrap;
}

.industry-pill {
  padding: 8px 16px;
  background: linear-gradient(135deg, rgba(167,139,250,0.2), rgba(34,211,238,0.2));
  border: 1px solid rgba(255,255,255,0.2);
  border-radius: 20px;
  backdrop-filter: blur(8px);
}

.industry-pill span {
  color: var(--secondary);
  font-size: 13px;
  font-weight: 600;
}

.story-tags {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.tag {
  padding: 4px 10px;
  background: rgba(255,255,255,0.08);
  border: 1px solid rgba(255,255,255,0.15);
  border-radius: 12px;
  color: var(--muted);
  font-size: 11px;
  font-weight: 500;
}

.story-title {
  margin: 0 0 32px;
  color: #fff;
  font-size: 32px;
  font-weight: 700;
  line-height: 1.3;
}

.client-showcase {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-bottom: 32px;
  padding: 24px;
  background: linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02));
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 16px;
  backdrop-filter: blur(12px);
}

.client-avatar {
  position: relative;
  width: 60px;
  height: 60px;
  flex-shrink: 0;
}

.avatar-bg {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  border-radius: 50%;
}

.client-initial {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 24px;
  font-weight: 700;
}

.client-info {
  text-align: left;
}

.client-name {
  margin: 0 0 4px;
  font-size: 20px;
}

.story-tagline {
  margin: 0;
  font-size: 14px;
  line-height: 1.5;
}

.header-actions {
  display: flex;
  gap: 12px;
  justify-content: center;
  flex-wrap: wrap;
}

/* Story Journey */
.story-journey {
  margin: 60px 0;
}

.journey-step {
  display: grid;
  grid-template-columns: 80px 1fr;
  gap: 32px;
  margin-bottom: 60px;
}

.step-indicator {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.step-number {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  border-radius: 50%;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 16px;
}

.step-line {
  width: 2px;
  height: 60px;
  background: linear-gradient(180deg, var(--primary), transparent);
  opacity: 0.3;
}

.journey-step:last-child .step-line {
  display: none;
}

.step-title {
  margin: 0 0 20px;
  color: var(--primary);
  font-size: 20px;
  font-weight: 600;
}

.challenge-card, .solution-card {
  padding: 24px;
  background: linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02));
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 12px;
  backdrop-filter: blur(12px);
}

.challenge-card {
  display: flex;
  align-items: flex-start;
  gap: 16px;
}

.challenge-icon {
  font-size: 24px;
  flex-shrink: 0;
}

.challenge-text, .solution-text {
  margin: 0;
  color: var(--text);
  line-height: 1.6;
}

.solution-visual {
  margin-bottom: 16px;
}

.solution-flow {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.flow-node {
  display: flex;
  align-items: center;
}

.node-dot {
  width: 12px;
  height: 12px;
  background: var(--primary);
  border-radius: 50%;
  box-shadow: var(--glow-cyan);
}

.node-connector {
  width: 40px;
  height: 2px;
  background: linear-gradient(90deg, var(--primary), var(--secondary));
  margin: 0 8px;
}

/* Results Showcase */
.results-showcase {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
}

.result-metric {
  position: relative;
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 20px;
  background: linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02));
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 12px;
  backdrop-filter: blur(12px);
  overflow: hidden;
}

.metric-icon {
  position: relative;
  width: 48px;
  height: 48px;
  flex-shrink: 0;
}

.icon-bg {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(34,211,238,0.2), rgba(167,139,250,0.2));
  border-radius: 50%;
  border: 1px solid rgba(255,255,255,0.15);
}

.metric-symbol {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
}

.metric-content {
  flex: 1;
}

.metric-value {
  color: var(--primary);
  font-size: 24px;
  font-weight: 800;
  margin-bottom: 4px;
}

.metric-label {
  color: var(--text);
  font-size: 14px;
  line-height: 1.4;
}

.metric-glow {
  position: absolute;
  top: 0;
  right: 0;
  width: 60px;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(34,211,238,0.1));
  opacity: 0.6;
}

/* Testimonial */
.testimonial-section {
  margin: 60px 0;
}

.testimonial-card {
  padding: 40px 32px;
  background: linear-gradient(135deg, rgba(167,139,250,0.08), rgba(34,211,238,0.08));
  border: 1px solid rgba(255,255,255,0.15);
  border-radius: 16px;
  backdrop-filter: blur(12px);
  text-align: center;
}

.testimonial-header {
  position: relative;
  margin-bottom: 24px;
}

.quote-decoration {
  position: absolute;
  top: -10px;
  right: 20px;
}

.quote-mark {
  font-size: 60px;
  color: var(--primary);
  opacity: 0.3;
  font-family: serif;
}

.testimonial-quote {
  margin: 0 0 24px;
  color: #fff;
  font-size: 18px;
  font-style: italic;
  line-height: 1.6;
}

.testimonial-author {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
}

.author-avatar {
  position: relative;
  width: 48px;
  height: 48px;
}

.avatar-ring {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, var(--secondary), var(--primary));
  border-radius: 50%;
}

.author-initial {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 18px;
  font-weight: 700;
}

.author-info {
  text-align: left;
}

.author-name {
  color: #fff;
  font-weight: 600;
  margin-bottom: 2px;
}

.author-role {
  font-size: 13px;
}

/* Related Products */
.related-section {
  margin: 60px 0;
  text-align: center;
}

.related-products {
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-top: 20px;
  flex-wrap: wrap;
}

.related-product {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02));
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 20px;
  text-decoration: none;
  color: var(--text);
  font-size: 14px;
  transition: all 0.2s ease;
  backdrop-filter: blur(8px);
}

.related-product:hover {
  transform: translateY(-2px);
  border-color: rgba(255,255,255,0.2);
}

.product-icon-small {
  font-size: 16px;
}

/* CTA */
.case-cta {
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
  margin: 60px 0;
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

.success-animation {
  position: relative;
  width: 80px;
  height: 80px;
  margin: 0 auto;
}

.success-ring {
  position: absolute;
  inset: 0;
  border: 2px solid var(--primary);
  border-radius: 50%;
  opacity: 0.3;
  animation: ripple 2s ease-out infinite;
}

.success-ring:nth-child(2) {
  animation-delay: 0.5s;
}

.success-ring:nth-child(3) {
  animation-delay: 1s;
}

@keyframes ripple {
  0% { transform: scale(0.5); opacity: 0.8; }
  100% { transform: scale(1.2); opacity: 0; }
}

/* Responsive */
@media (min-width: 768px) {
  .results-showcase {
    grid-template-columns: 1fr;
  }
  
  .case-cta {
    grid-template-columns: 1fr auto;
    text-align: left;
  }
}

@media (max-width: 640px) {
  .journey-step {
    grid-template-columns: 60px 1fr;
    gap: 20px;
  }
  
  .client-showcase {
    flex-direction: column;
    text-align: center;
  }
  
  .client-info {
    text-align: center;
  }
}
</style>