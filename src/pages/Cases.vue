<template>
  <section class="cases">
    <div class="hero-section">
      <div class="container">
        <h1 class="gradient-text">{{ $t('cases.title') }}</h1>
        <p class="subtitle text-muted">真实客户案例，见证智能体如何驱动业务增长与效率提升</p>
      </div>
    </div>

    <div class="container">
      <div class="cases-timeline">
        <RouterLink
          v-for="(c, index) in list"
          :key="c.slug"
          class="case-story"
          :class="{ 'story-reverse': index % 2 === 1 }"
          :to="`/cases/${c.slug}`"
        >
          <div class="story-visual">
            <div class="industry-badge">
              <div class="badge-bg"></div>
              <span class="industry-text">{{ c.industry[currentLang] }}</span>
            </div>
            <div class="story-illustration">
              <div class="illustration-bg"></div>
              <div class="story-icon">{{ getCaseIcon(c.slug) }}</div>
              <div class="success-metrics">
                <div class="metric-dot" v-for="i in 3" :key="i"></div>
              </div>
            </div>
          </div>
          
          <div class="story-content">
            <div class="client-info">
              <h3 class="client-name">{{ c.clientName[currentLang] }}</h3>
              <div class="story-tags">
                <span v-for="(t, i) in c.tags?.[currentLang] || []" :key="i" class="story-tag">{{ t }}</span>
              </div>
            </div>
            
            <h4 class="story-title">{{ c.title[currentLang] }}</h4>
            <p class="story-summary">{{ c.summary[currentLang] }}</p>
            
            <div class="story-preview">
              <div class="preview-item">
                <span class="preview-label">挑战</span>
                <span class="preview-text">{{ truncateText(c.challenge[currentLang], 50) }}</span>
              </div>
              <div class="preview-item">
                <span class="preview-label">成果</span>
                <span class="preview-text">{{ c.results[currentLang][0] || '显著提升' }}</span>
              </div>
            </div>
            
            <div class="story-action">
              <span class="action-text">查看完整案例</span>
              <div class="action-arrow">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10m-3-3l3 3-3 3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
          
          <div class="story-connector" v-if="index < list.length - 1"></div>
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// 案例列表：时间线故事布局，强调成果展示
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { listCases } from '../data/cases';

const { locale } = useI18n();
const list = computed(() => listCases());
const currentLang = computed(() => locale.value as 'zh' | 'en');

function getCaseIcon(slug: string): string {
  const icons: Record<string, string> = {
    'retail-growth-agent': '📈',
    'media-intl-distribution': '🌐'
  };
  return icons[slug] || '✨';
}

function truncateText(text: string, maxLength: number): string {
  return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
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

.cases-timeline {
  position: relative;
  margin-top: 48px;
  padding-bottom: 40px;
}

.cases-timeline::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(180deg, var(--primary), var(--secondary), var(--primary));
  transform: translateX(-50%);
  opacity: 0.3;
}

.case-story {
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: center;
  margin-bottom: 80px;
  text-decoration: none;
  transition: all 0.3s ease;
}

.case-story:hover {
  transform: scale(1.02);
}

.story-reverse {
  direction: rtl;
}

.story-reverse > * {
  direction: ltr;
}

.story-visual {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}

.industry-badge {
  position: relative;
  z-index: 2;
}

.badge-bg {
  position: absolute;
  inset: -4px;
  background: linear-gradient(135deg, rgba(34,211,238,0.2), rgba(167,139,250,0.2));
  border-radius: 20px;
  filter: blur(8px);
}

.industry-text {
  position: relative;
  display: inline-block;
  padding: 6px 16px;
  background: linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05));
  border: 1px solid rgba(255,255,255,0.2);
  border-radius: 16px;
  color: var(--primary);
  font-size: 12px;
  font-weight: 600;
  backdrop-filter: blur(8px);
}

.story-illustration {
  position: relative;
  width: 120px;
  height: 120px;
}

.illustration-bg {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03));
  border: 1px solid rgba(255,255,255,0.15);
  border-radius: 20px;
  backdrop-filter: blur(12px);
}

.story-icon {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  z-index: 2;
}

.success-metrics {
  position: absolute;
  bottom: -8px;
  right: -8px;
  display: flex;
  gap: 4px;
}

.metric-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--primary);
  box-shadow: 0 0 8px rgba(34,211,238,0.6);
  animation: pulse-dot 2s ease-in-out infinite;
}

.metric-dot:nth-child(2) {
  animation-delay: 0.5s;
}

.metric-dot:nth-child(3) {
  animation-delay: 1s;
}

@keyframes pulse-dot {
  0%, 100% { opacity: 0.6; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.2); }
}

.story-content {
  padding: 24px;
  background: linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02));
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 16px;
  backdrop-filter: blur(12px);
}

.client-info {
  margin-bottom: 16px;
}

.client-name {
  margin: 0 0 8px;
  color: #fff;
  font-size: 18px;
  font-weight: 700;
}

.story-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.story-tag {
  padding: 3px 8px;
  background: rgba(255,255,255,0.08);
  border: 1px solid rgba(255,255,255,0.15);
  border-radius: 12px;
  color: var(--muted);
  font-size: 11px;
  font-weight: 500;
}

.story-title {
  margin: 0 0 12px;
  color: var(--primary);
  font-size: 16px;
  font-weight: 600;
  line-height: 1.4;
}

.story-summary {
  margin: 0 0 20px;
  color: var(--text);
  font-size: 14px;
  line-height: 1.6;
}

.story-preview {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 20px;
  padding: 16px;
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 8px;
}

.preview-item {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.preview-label {
  color: var(--secondary);
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.preview-text {
  color: var(--text);
  font-size: 13px;
  line-height: 1.4;
}

.story-action {
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--primary);
  font-size: 14px;
  font-weight: 500;
  transition: all 0.2s ease;
}

.case-story:hover .story-action {
  color: #fff;
  transform: translateX(4px);
}

.action-arrow {
  transition: transform 0.2s ease;
}

.case-story:hover .action-arrow {
  transform: translateX(2px);
}

.story-connector {
  position: absolute;
  left: 50%;
  bottom: -40px;
  width: 12px;
  height: 12px;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  border: 2px solid var(--bg);
  border-radius: 50%;
  transform: translateX(-50%);
  z-index: 3;
}

/* Mobile Layout */
@media (max-width: 768px) {
  .cases-timeline::before {
    left: 24px;
  }
  
  .case-story {
    grid-template-columns: 1fr;
    gap: 24px;
    margin-left: 48px;
    margin-bottom: 60px;
  }
  
  .story-reverse {
    direction: ltr;
  }
  
  .story-connector {
    left: 24px;
  }
}
</style>