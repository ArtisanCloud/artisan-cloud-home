<template>
  <section class="ac-page ac-hero">
    <div class="ac-wrap">
      <p class="ac-kicker">404</p>
      <h1>{{ zh ? "这个页面暂时不在这里。" : "This page is not here." }}</h1>
      <p class="ac-lead">
        {{
          zh
            ? "你可以回到首页，或者从产品与方案重新开始。"
            : "Return home or explore our products and solutions."
        }}
      </p>
      <div class="ac-actions">
        <RouterLink class="ac-button" to="/"
          >{{ zh ? "回到首页" : "Back home" }} →</RouterLink
        ><RouterLink to="/products">{{
          zh ? "产品与方案" : "Products & solutions"
        }}</RouterLink>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";
const { locale } = useI18n();
const zh = computed(() => locale.value !== "en");
</script>
