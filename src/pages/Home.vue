<template>
  <section class="home">
    <h1>{{ $t('home.title') }}</h1>
    <p class="subtitle">{{ $t('home.subtitle') }}</p>
    <div class="actions">
      <RouterLink class="btn primary" to="/products">{{ $t('home.ctaProducts') }}</RouterLink>
      <RouterLink class="btn" to="/contact">{{ $t('home.ctaContact') }}</RouterLink>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped>
.home {
  padding: 40px 24px;
}
.subtitle {
  margin-top: 8px;
  color: #6b7280;
}
.actions {
  margin-top: 20px;
  display: flex;
  gap: 12px;
}
.btn {
  padding: 8px 14px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  text-decoration: none;
  color: #1f2937;
}
.btn.primary {
  background: #2563eb;
  color: #fff;
  border-color: #2563eb;
}
</style>