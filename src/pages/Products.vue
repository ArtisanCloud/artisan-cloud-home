<template>
  <article class="ac-page product-catalog" :lang="lang">
    <section class="ac-hero ac-wrap">
      <p class="ac-kicker">{{ t("产品与解决方案", "Products & solutions") }}</p>
      <h1>
        {{
          t(
            "选对起点，\n组合更多可能。",
            "Find your starting point.\nBuild from there.",
          )
        }}
      </h1>
      <p class="ac-lead">
        {{
          t(
            "开放底座、业务插件与开发者工具，各有自己的角色。先找到要解决的问题，再选择适合的组合。",
            "An open foundation, business plugins and developer tools each have a role. Start with the problem, then choose the right combination.",
          )
        }}
      </p>
    </section>
    <section
      class="ac-wrap catalog-body"
      :aria-label="t('产品目录', 'Product catalog')"
    >
      <div
        class="catalog-filters"
        role="group"
        :aria-label="t('按类型筛选产品', 'Filter products by type')"
      >
        <ElButton
          v-for="filter in filters"
          :key="filter.key"
          :aria-pressed="selected === filter.key"
          :class="{ active: selected === filter.key }"
          @click="selected = filter.key"
          >{{ filter.label[lang] }}</ElButton
        >
      </div>
      <p class="catalog-count" aria-live="polite">
        {{ t(`显示 ${filtered.length} 项`, `${filtered.length} items shown`) }}
      </p>
      <div class="catalog-grid">
        <RouterLink
          v-for="product in filtered"
          :key="product.slug"
          :to="`/products/${product.slug}`"
          class="catalog-card"
          :class="`catalog-${product.category}`"
        >
          <div class="catalog-card-top">
            <span>{{ product.label[lang] }}</span
            ><span aria-hidden="true">↗</span>
          </div>
          <div class="catalog-art" aria-hidden="true">
            <i></i><i></i><i></i>
          </div>
          <h2>{{ product.name[lang] }}</h2>
          <p>{{ product.tagline[lang] }}</p>
          <span class="catalog-detail"
            >{{ t("了解定位与适用场景", "Explore purpose and fit") }}
            <span aria-hidden="true">→</span></span
          >
        </RouterLink>
      </div>
      <p class="ac-note catalog-note">
        {{
          t(
            "付费插件的功能、授权与交付范围需咨询确认。方案方向不等于现成插件；本页不提供在线试用或自动开通。",
            "Confirm paid-plugin features, licensing and delivery with the team. Solution directions are not ready-made plugins. This page offers no online trial or automatic activation.",
          )
        }}
      </p>
    </section>
    <section class="ac-wrap ac-section catalog-help">
      <div>
        <p class="ac-kicker">
          {{ t("不必一次选完", "One decision at a time") }}
        </p>
        <h2>
          {{ t("先说说，你想改善什么。", "What would you like to improve?") }}
        </h2>
        <p class="ac-lead">
          {{
            t(
              "是客户跟进、内容生产，还是现有系统之间的连接？从一项具体工作开始。",
              "Customer follow-up, content production or connecting existing systems? Start with one concrete workflow.",
            )
          }}
        </p>
      </div>
      <RouterLink class="ac-button" to="/contact"
        >{{ t("聊聊业务需求", "Let’s talk business") }}
        <span aria-hidden="true">→</span></RouterLink
      >
    </section>
    <div class="ac-wrap"><DocsLinks /></div>
  </article>
</template>
<script setup lang="ts">
import DocsLinks from "../components/DocsLinks.vue";
import { computed, ref } from "vue";
import { useI18n } from "vue-i18n";
import { ElButton } from "element-plus";
import "element-plus/es/components/button/style/css";
import { listProducts, type ProductCategory } from "../data/products";
const { locale } = useI18n();
const lang = computed(() => (locale.value === "en" ? "en" : "zh"));
const t = (zh: string, en: string) => (lang.value === "en" ? en : zh);
const selected = ref<ProductCategory | "all">("all");
const filters: {
  key: ProductCategory | "all";
  label: { zh: string; en: string };
}[] = [
  { key: "all", label: { zh: "全部", en: "All" } },
  { key: "foundation", label: { zh: "开放底座", en: "Foundation" } },
  { key: "plugin", label: { zh: "业务插件", en: "Plugins" } },
  { key: "solution", label: { zh: "解决方案", en: "Solutions" } },
  { key: "developer", label: { zh: "开发者工具", en: "Developer tools" } },
];
const filtered = computed(() =>
  listProducts().filter(
    (product) =>
      selected.value === "all" || product.category === selected.value,
  ),
);
</script>
<style scoped>
.product-catalog h1 {
  white-space: pre-line;
}
.catalog-body {
  padding-bottom: 30px;
}
.catalog-filters {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding-bottom: 10px;
}
.catalog-filters .el-button {
  margin: 0;
  border-radius: 24px;
  border-color: #dce5df;
  color: #586e61;
  background: #fff;
  padding: 20px 18px;
}
.catalog-filters .el-button.active {
  color: #fff;
  background: #16734d;
  border-color: #16734d;
}
.catalog-count {
  font-size: 12px;
  color: #5f7168;
  margin: 10px 0 22px;
}
.catalog-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 22px;
}
.catalog-card {
  display: flex;
  flex-direction: column;
  min-height: 365px;
  border: 1px solid #e0e8e1;
  border-radius: 18px;
  padding: 26px;
  color: #2c4036;
  text-decoration: none;
  background: linear-gradient(135deg, #fff 25%, #f1f6f3);
  transition:
    border-color 0.2s,
    transform 0.2s;
}
.catalog-card:hover {
  border-color: #a8c6b3;
  transform: translateY(-3px);
  text-decoration: none;
}
.catalog-card-top {
  display: flex;
  justify-content: space-between;
  gap: 15px;
  font-size: 10px;
  color: #5f7168;
}
.catalog-card h2 {
  font-size: 25px;
  font-weight: 500;
  letter-spacing: -0.04em;
  margin: 25px 0 10px;
}
.catalog-card p {
  font-size: 14px;
  color: #68796e;
  line-height: 1.8;
  margin: 0 0 24px;
}
.catalog-detail {
  margin-top: auto;
  font-size: 11px;
  color: #246b4b;
  display: flex;
  justify-content: space-between;
}
.catalog-art {
  position: relative;
  height: 65px;
  width: 100px;
  margin-top: 30px;
}
.catalog-art i {
  position: absolute;
  left: 2px;
  top: 10px;
  width: 43px;
  height: 43px;
  border-radius: 12px;
  transform: rotate(-13deg);
  border: 1px solid #fff;
  background: linear-gradient(135deg, #d5e9e7, #93b8cb);
  box-shadow: 0 5px 12px #79989a14;
}
.catalog-art i:nth-child(2) {
  left: 23px;
  top: 4px;
  background: linear-gradient(135deg, #e0def9, #a4a6da);
}
.catalog-art i:nth-child(3) {
  left: 45px;
  top: 13px;
  background: linear-gradient(135deg, #d4eee3, #8bbeb7);
}
.catalog-plugin {
  background: linear-gradient(135deg, #fff 25%, #f4f2fa);
}
.catalog-solution .catalog-art i {
  border-radius: 50%;
}
.catalog-developer .catalog-art i {
  border-radius: 4px;
  transform: rotate(0);
}
.catalog-note {
  max-width: 800px;
  margin-top: 25px;
}
.catalog-help {
  display: flex;
  justify-content: space-between;
  gap: 35px;
  align-items: center;
}
.catalog-help .ac-lead {
  max-width: 600px;
}
.catalog-help .ac-button {
  flex-shrink: 0;
}
@media (max-width: 1000px) {
  .catalog-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
@media (max-width: 620px) {
  .catalog-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }
  .catalog-card {
    min-height: 320px;
  }
  .catalog-filters .el-button {
    font-size: 12px;
    padding: 17px 13px;
  }
  .catalog-help {
    align-items: flex-start;
    flex-direction: column;
  }
}
@media (prefers-reduced-motion: reduce) {
  .catalog-card {
    transition: none;
  }
  .catalog-card:hover {
    transform: none;
  }
}
</style>
