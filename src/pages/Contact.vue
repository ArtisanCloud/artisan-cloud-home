<template>
  <section class="contact">
    <h1 class="gradient-text">{{ $t('contact.title') }}</h1>
    <p class="intro text-muted">{{ $t('contact.intro') }}</p>

    <div class="grid">
      <div class="card">
        <h3>{{ $t('contact.infoLabel') }}</h3>
        <ul class="info">
          <li><strong>{{ $t('contact.email') }}:</strong> contact@artisancloud.com</li>
          <li><strong>{{ $t('contact.phone') }}:</strong> +86-010-12345678</li>
        </ul>
      </div>

      <form class="card form" @submit.prevent="onSubmit">
        <h3>{{ $t('contact.messageLabel') }}</h3>
        <div class="row">
          <label>{{ $t('contact.form.name') }}</label>
          <input v-model="form.name" :placeholder="$t('contact.form.name')" required />
        </div>
        <div class="row">
          <label>{{ $t('contact.form.email') }}</label>
          <input v-model="form.email" type="email" :placeholder="$t('contact.form.email')" required />
        </div>
        <div class="row">
          <label>{{ $t('contact.form.message') }}</label>
          <textarea v-model="form.message" rows="4" :placeholder="$t('contact.form.message')" required></textarea>
        </div>
        <button class="btn btn-primary" type="submit">{{ $t('contact.form.submit') }}</button>
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
import { reactive } from 'vue';

const form = reactive({
  name: '',
  email: '',
  message: ''
});

function onSubmit() {
  // 仅重置表单，真实提交逻辑可后续接入后端或第三方表单服务
  form.name = '';
  form.email = '';
  form.message = '';
}
</script>

<style scoped>
.contact h1 {
  margin: 0 0 10px;
}
.intro {
  margin-bottom: 24px;
}
.grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 20px;
}
.card {
  grid-column: span 12;
}
.info {
  margin: 12px 0 0;
  padding: 0 0 0 16px;
  color: var(--text);
}
.info li {
  margin-bottom: 8px;
  line-height: 1.6;
}
.info strong {
  color: var(--primary);
}
.form .row {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 16px;
}
.form label {
  color: var(--text);
  font-weight: 500;
}
input, textarea {
  padding: 10px 12px;
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  background: rgba(255,255,255,0.03);
  color: var(--text);
  font: inherit;
  transition: border-color .2s ease, box-shadow .2s ease;
}
input:focus, textarea:focus {
  outline: none;
  border-color: var(--primary);
  box-shadow: 0 0 0 2px rgba(34,211,238,0.15);
}
input::placeholder, textarea::placeholder {
  color: var(--muted);
}
@media (min-width: 768px) {
  .card:first-child { grid-column: span 4; }
  .form { grid-column: span 8; }
}
</style>