<template>
  <aside
    class="docs-links"
    :aria-label="zh ? 'PowerX 文档入口' : 'PowerX documentation'"
  >
    <div>
      <h3>
        {{
          zh ? "从产品认识，到实际接入。" : "From understanding to integration."
        }}
      </h3>
      <p>
        {{
          zh
            ? "PowerX 是企业 AI 应用与插件生态的 AgentOS 底座；CRM 与 MediaXStudio 是面向具体业务的核心付费插件。按你现在的问题，继续阅读文档。"
            : "PowerX is an AgentOS foundation for enterprise AI applications and plugins. CRM and MediaXStudio are core paid plugins for specific business workflows. Follow the documentation that fits your next question."
        }}
      </p>
    </div>
    <nav :aria-label="zh ? '相关技术文档' : 'Related documentation'">
      <a v-for="item in links" :key="item.path" :href="docsUrl(item.path)"
        >{{ zh ? item.zh : item.en }} <span aria-hidden="true">↗</span></a
      >
    </nav>
  </aside>
</template>
<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import { docsUrl } from "../site-config";
const { locale } = useI18n();
const zh = computed(() => locale.value !== "en");
const links = [
  { path: "/zh/overview/", zh: "认识 PowerX", en: "Understand PowerX" },
  {
    path: "/zh/guides/",
    zh: "开始使用与部署",
    en: "Getting started & deployment",
  },
  { path: "/zh/plugins/", zh: "了解业务插件", en: "Explore business plugins" },
  { path: "/zh/developers/", zh: "插件开发入口", en: "Plugin development" },
];
</script>
<style scoped>
.docs-links {
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: 50px;
  padding: 32px 0;
  border-top: 1px solid #dce6df;
  margin-top: 34px;
}
.docs-links h3 {
  font-size: 19px;
  font-weight: 500;
  letter-spacing: -0.025em;
  margin: 0 0 12px;
}
.docs-links p {
  font-size: 13px;
  color: #60766a;
  line-height: 1.85;
  margin: 0;
  max-width: 650px;
}
.docs-links nav {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px 20px;
  align-content: center;
}
.docs-links a {
  font-size: 12px;
  color: #16734d;
  display: flex;
  gap: 10px;
  justify-content: space-between;
  line-height: 1.6;
}
.docs-links a:focus-visible {
  outline: 3px solid #16734d;
  outline-offset: 4px;
}
@media (max-width: 700px) {
  .docs-links {
    grid-template-columns: 1fr;
    gap: 24px;
  }
  .docs-links nav {
    gap: 16px;
  }
}
</style>
