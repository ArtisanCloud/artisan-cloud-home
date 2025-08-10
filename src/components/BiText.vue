<template>
  <component :is="tag" class="bi-text" :style="{ textAlign: align }">
    <span class="bi-zh">{{ t(k, {}, { locale: 'zh' }) }}</span>
    <br />
    <span class="bi-en">{{ t(k, {}, { locale: 'en' }) }}</span>
  </component>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';

defineProps<{
  k: string;       // i18n 文案键
  tag?: string;    // 包裹标签，如 h1/h3/p，默认 p
  align?: 'left' | 'center' | 'right';
}>();

const { t } = useI18n();
</script>

<style scoped>
.bi-text .bi-en {
  color: #6b7280;
  font-size: 0.92em;
}
</style>