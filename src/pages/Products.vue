<template>
  <section class="products">
    <h1>{{ $t('products.title') }}</h1>
    <div class="grid">
      <article class="card">
        <h3>{{ $t('products.list.corex.name') }}</h3>
        <p>{{ $t('products.list.corex.desc') }}</p>
      </article>
      <article class="card">
        <h3>{{ $t('products.list.powerx.name') }}</h3>
        <p>{{ $t('products.list.powerx.desc') }}</p>
      </article>
      <article class="card">
        <h3>{{ $t('products.list.mediax.name') }}</h3>
        <p>{{ $t('products.list.mediax.desc') }}</p>
      </article>
      <article class="card">
        <h3>{{ $t('products.list.powerwechat.name') }}</h3>
        <p>{{ $t('products.list.powerwechat.desc') }}</p>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped>
.products h1 {
  margin: 0 0 14px;
}
.grid {
  margin-top: 10px;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 14px;
}
.card {
  grid-column: span 12;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  padding: 14px;
}
.card h3 {
  margin: 0 0 6px;
}
@media (min-width: 640px) {
  .card { grid-column: span 6; }
}
@media (min-width: 1024px) {
  .card { grid-column: span 3; }
}
</style>