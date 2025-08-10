<template>
  <section class="home">
    <!-- Hero -->
    <div class="hero">
      <div class="container">
        <h1 class="gradient-text">{{ $t('home.hero.title') }}</h1>
        <p class="subtitle text-muted">
          {{ $t('home.hero.subtitle') }}
        </p>
        <div class="actions">
          <RouterLink class="btn btn-primary" to="/products">{{ $t('home.hero.ctaProducts') }}</RouterLink>
          <RouterLink class="btn btn-outline" to="/contact">{{ $t('home.hero.ctaContact') }}</RouterLink>
        </div>
      </div>
    </div>

    <!-- Mission -->
    <div class="section mission">
      <div class="container">
        <h2 class="gradient-text section-title">{{ $t('home.mission.title') }}</h2>
        <div class="mission-grid">
          <div class="card mission-card">
            <div class="icon">🎯</div>
            <h3>{{ $t('home.mission.lowBarrier.title') }}</h3>
            <p>{{ $t('home.mission.lowBarrier.desc') }}</p>
          </div>
          <div class="card mission-card">
            <div class="icon">📊</div>
            <h3>{{ $t('home.mission.observable.title') }}</h3>
            <p>{{ $t('home.mission.observable.desc') }}</p>
          </div>
          <div class="card mission-card">
            <div class="icon">🚀</div>
            <h3>{{ $t('home.mission.scalable.title') }}</h3>
            <p>{{ $t('home.mission.scalable.desc') }}</p>
          </div>
        </div>
        <div class="mission-statement">
          <div class="statement-card">
            <h3>{{ $t('home.mission.statement') }}</h3>
            <div class="metrics">
              <div class="metric">
                <span class="number gradient-text">85%</span>
                <span class="label">{{ $t('home.mission.metrics.efficiency') }}</span>
              </div>
              <div class="metric">
                <span class="number gradient-text">60%</span>
                <span class="label">{{ $t('home.mission.metrics.cost') }}</span>
              </div>
              <div class="metric">
                <span class="number gradient-text">24/7</span>
                <span class="label">{{ $t('home.mission.metrics.service') }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped>
.home { padding: 0; }
.hero { padding: 80px 0 40px; text-align: center; }
.subtitle { margin-top: 10px; }
.actions { margin-top: 18px; display: flex; gap: 12px; justify-content: center; }

.mission { text-align: center; }
.section-title { margin-bottom: 32px; }
.mission-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  margin-bottom: 40px;
}
.mission-card {
  text-align: center;
  padding: 24px 20px;
  transition: transform .2s ease, box-shadow .3s ease;
}
.mission-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--glow-cyan);
}
.mission-card .icon {
  font-size: 32px;
  margin-bottom: 12px;
  filter: drop-shadow(0 0 8px rgba(34,211,238,0.4));
}
.mission-card h3 {
  margin: 0 0 8px;
  color: #fff;
}
.mission-card p {
  margin: 0;
  color: var(--muted);
  line-height: 1.6;
}

.mission-statement {
  margin-top: 48px;
}
.statement-card {
  background: linear-gradient(135deg, rgba(34,211,238,0.08), rgba(167,139,250,0.08));
  border: 1px solid rgba(255,255,255,0.15);
  border-radius: var(--radius-md);
  padding: 32px 24px;
  backdrop-filter: blur(12px);
}
.statement-card h3 {
  margin: 0 0 24px;
  color: #fff;
  font-size: 24px;
}
.metrics {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 24px;
}
.metric {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.metric .number {
  font-size: 28px;
  font-weight: 800;
  margin-bottom: 4px;
}
.metric .label {
  color: var(--muted);
  font-size: 14px;
}

@media (max-width: 640px) {
  .actions { flex-direction: column; align-items: center; }
  .mission-grid { grid-template-columns: 1fr; }
  .metrics { grid-template-columns: 1fr; gap: 16px; }
}
</style>