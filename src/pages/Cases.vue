<template>
  <section class="cases">
    <h1>{{ $t('cases.title') }}</h1>
    <p class="intro">{{ $t('cases.intro') }}</p>

    <ul class="list">
      <li class="item">
        <div class="badge">{{ $t('cases.list.a.category') }}</div>
        <div class="detail">
          <h3>{{ $t('cases.list.a.name') }}</h3>
          <p>{{ $t('cases.list.a.desc') }}</p>
        </div>
      </li>
      <li class="item">
        <div class="badge">{{ $t('cases.list.b.category') }}</div>
        <div class="detail">
          <h3>{{ $t('cases.list.b.name') }}</h3>
          <p>{{ $t('cases.list.b.desc') }}</p>
        </div>
      </li>
      <li class="item">
        <div class="badge">{{ $t('cases.list.c.category') }}</div>
        <div class="detail">
          <h3>{{ $t('cases.list.c.name') }}</h3>
          <p>{{ $t('cases.list.c.desc') }}</p>
        </div>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped>
.cases h1 {
  margin: 0 0 10px;
}
.intro {
  color: #6b7280;
  margin-bottom: 16px;
}
.list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 12px;
}
.item {
  grid-column: span 12;
  display: flex;
  gap: 12px;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  padding: 14px;
  background: #fff;
}
.badge {
  flex: 0 0 auto;
  padding: 6px 10px;
  border-radius: 999px;
  background: rgba(37,99,235,0.1);
  color: #2563eb;
  font-size: 12px;
  height: fit-content;
}
.detail h3 {
  margin: 0 0 6px;
}
.detail p {
  margin: 0;
  color: #374151;
}
@media (min-width: 768px) {
  .item { grid-column: span 6; }
}
</style>