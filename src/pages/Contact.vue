<template>
  <section class="contact">
    <h1>{{ $t('contact.title') }}</h1>
    <p class="intro">{{ $t('contact.intro') }}</p>

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
        <button class="btn" type="submit">{{ $t('contact.form.submit') }}</button>
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
  color: #6b7280;
  margin-bottom: 16px;
}
.grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 12px;
}
.card {
  grid-column: span 12;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  padding: 14px;
  background: #fff;
}
.info {
  margin: 8px 0 0;
  padding: 0 0 0 16px;
}
.form .row {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 10px;
}
input, textarea {
  padding: 8px 10px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  font: inherit;
}
.btn {
  padding: 10px 14px;
  border: none;
  border-radius: 8px;
  background: #2563eb;
  color: #fff;
  cursor: pointer;
}
@media (min-width: 768px) {
  .card:first-child { grid-column: span 4; }
  .form { grid-column: span 8; }
}
</style>