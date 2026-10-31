<template>
  <article v-if="product" class="ac-page product-story" :lang="lang">
    <section class="ac-wrap ac-hero detail-hero">
      <div>
        <RouterLink class="detail-back" to="/products"
          >← {{ t("全部产品与方案", "All products and solutions") }}</RouterLink
        >
        <p class="ac-kicker">{{ product.label[lang] }}</p>
        <h1>{{ product.name[lang] }}</h1>
        <h2 class="detail-tagline">{{ product.tagline[lang] }}</h2>
        <p class="ac-lead">{{ product.description[lang] }}</p>
        <RouterLink class="ac-button" to="/contact"
          >{{ t("聊聊业务需求", "Let’s talk business") }}
          <span aria-hidden="true">→</span></RouterLink
        >
      </div>
      <div class="detail-scope">
        <p class="detail-mini">{{ t("从业务出发", "BUSINESS FIRST") }}</p>
        <div
          v-for="(item, index) in product.features[lang]"
          :key="index"
          class="detail-scope-row"
        >
          <span>0{{ index + 1 }}</span>
          <p>{{ item }}</p>
        </div>
        <p class="ac-note">
          {{
            t(
              "场景范围示意 · 非产品界面",
              "Illustrative scope · Not a product screen",
            )
          }}
        </p>
      </div>
    </section>
    <section class="detail-scenario-band">
      <div class="ac-wrap ac-section detail-scenario">
        <div>
          <p class="ac-kicker">{{ t("适合谁", "WHO IT IS FOR") }}</p>
          <h2>{{ product.audience[lang] }}</h2>
        </div>
        <div>
          <p class="ac-kicker">
            {{ t("从一个问题开始", "START WITH A PROBLEM") }}
          </p>
          <p class="ac-lead">{{ product.scenario[lang] }}</p>
        </div>
      </div>
    </section>
    <section class="ac-wrap ac-section">
      <p class="ac-kicker">{{ t("落地之前", "BEFORE IMPLEMENTATION") }}</p>
      <h2>
        {{ t("先把关键问题，问清楚。", "Ask the important questions first.") }}
      </h2>
      <div class="detail-questions">
        <div v-for="(item, index) in product.considerations[lang]" :key="index">
          <span>0{{ index + 1 }}</span>
          <h3>{{ item }}</h3>
        </div>
      </div>
    </section>
    <section class="ac-wrap detail-boundary">
      <div class="detail-boundary-copy">
        <p class="ac-kicker">{{ t("范围与可用性", "SCOPE & AVAILABILITY") }}</p>
        <p>{{ product.availability[lang] }}</p>
        <template v-if="product.evidence"
          ><a
            class="ac-link"
            :href="product.evidence.url"
            target="_blank"
            rel="noopener noreferrer"
            >{{ product.evidence.label[lang] }} ↗</a
          >
          <p class="ac-note">{{ product.evidence.note[lang] }}</p></template
        ><RouterLink
          v-else-if="product.category === 'developer'"
          class="ac-link"
          to="/developers"
          >{{ t("前往开发者入口", "Go to the developer hub") }} →</RouterLink
        >
      </div>
      <div class="detail-next">
        <h3>{{ t("一起确定下一步。", "Define the next step together.") }}</h3>
        <p>
          {{
            t(
              "带上现有流程、想改善的问题和数据来源，我们从可验证的小范围开始。",
              "Bring your current workflow, the problem to improve and your data sources. Start with a small, verifiable scope.",
            )
          }}
        </p>
        <RouterLink class="ac-button" to="/contact"
          >{{
            t("准备需求与联系团队", "Prepare a brief and contact us")
          }}
          →</RouterLink
        >
      </div>
    </section>
    <section class="ac-wrap ac-section detail-related">
      <h2>{{ t("也许还需要这些连接。", "Related building blocks.") }}</h2>
      <div>
        <RouterLink
          v-for="item in related"
          :key="item.slug"
          :to="`/products/${item.slug}`"
          ><span>{{ item.name[lang] }}</span
          ><span aria-hidden="true">↗</span></RouterLink
        >
      </div>
    </section>
  </article>
  <section v-else class="ac-page ac-wrap ac-hero" :lang="lang">
    <p class="ac-kicker">404</p>
    <h1>{{ t("暂未找到这个产品。", "This product was not found.") }}</h1>
    <p class="ac-lead">
      {{
        t(
          "可以回到产品目录，或联系我们讨论你的业务场景。",
          "Return to the product catalog or contact us to discuss your use case.",
        )
      }}
    </p>
    <RouterLink class="ac-button" to="/products">{{
      t("查看产品目录", "Explore the catalog")
    }}</RouterLink>
  </section>
</template>
<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useI18n } from "vue-i18n";
import { getProductBySlug, listProducts } from "../data/products";
const route = useRoute();
const { locale } = useI18n();
const lang = computed(() => (locale.value === "en" ? "en" : "zh"));
const t = (zh: string, en: string) => (lang.value === "en" ? en : zh);
const product = computed(() =>
  getProductBySlug(String(route.params.slug || "")),
);
const related = computed(() =>
  listProducts()
    .filter(
      (item) =>
        item.slug !== product.value?.slug &&
        ["powerx-base", "crm", "mediax"].includes(item.slug),
    )
    .slice(0, 3),
);
</script>
<style scoped>
.detail-hero {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 80px;
  align-items: center;
}
.detail-back {
  display: inline-block;
  margin-bottom: 35px;
  font-size: 12px;
  color: #667d6c;
  text-decoration: none;
}
.detail-tagline {
  font-size: clamp(23px, 2.5vw, 34px);
  line-height: 1.5;
  font-weight: 500;
  margin: 20px 0;
}
.detail-hero .ac-button {
  margin-top: 22px;
}
.detail-scope {
  border: 1px solid #e3e9e4;
  padding: 32px;
  border-radius: 22px;
  background: linear-gradient(135deg, #f4f8f4, #f0f1fa 75%, #eaf6f2);
  box-shadow: 0 24px 65px #76978b0b;
}
.detail-mini {
  font-size: 11px;
  color: #687b70;
  letter-spacing: 0.08em;
  margin-bottom: 25px;
}
.detail-scope-row {
  padding: 17px 0;
  border-top: 1px solid #dbe5dd;
  display: flex;
  gap: 20px;
  align-items: center;
}
.detail-scope-row > span {
  color: #7b9b86;
  font-size: 10px;
}
.detail-scope-row p {
  color: #455e4e;
  margin: 0;
  font-size: 15px;
  line-height: 1.7;
}
.detail-scope .ac-note {
  margin-top: 23px;
}
.detail-scenario-band {
  background: #f6f8f5;
}
.detail-scenario {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 100px;
}
.detail-scenario h2 {
  font-size: clamp(25px, 2.5vw, 34px);
  line-height: 1.5;
  max-width: 470px;
}
.detail-scenario .ac-lead {
  margin-top: 0;
}
.detail-questions {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 36px;
  margin-top: 40px;
}
.detail-questions > div {
  border-top: 1px solid #dbe5dd;
  padding-top: 23px;
}
.detail-questions span {
  color: #7b9482;
  font-size: 11px;
}
.detail-questions h3 {
  font-size: 19px;
  line-height: 1.7;
  font-weight: 500;
  margin-top: 22px;
}
.detail-boundary {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 65px;
  padding: 38px;
  background: #f5f8f5;
  border-radius: 18px;
}
.detail-boundary-copy > p:not(.ac-kicker):not(.ac-note),
.detail-next p {
  font-size: 14px;
  color: #66796a;
  line-height: 1.9;
}
.detail-boundary .ac-link {
  display: inline-block;
  margin-top: 12px;
}
.detail-next {
  padding-left: 35px;
  border-left: 1px solid #dde5dd;
}
.detail-next h3 {
  font-size: 22px;
  font-weight: 500;
}
.detail-next .ac-button {
  margin-top: 12px;
  font-size: 12px;
}
.detail-related h2 {
  font-size: 28px;
}
.detail-related > div {
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  margin-top: 26px;
}
.detail-related a {
  display: flex;
  justify-content: space-between;
  gap: 50px;
  color: #33694c;
  text-decoration: none;
  border: 1px solid #dce7df;
  padding: 20px;
  border-radius: 10px;
  flex: 1;
  min-width: 180px;
}
@media (max-width: 850px) {
  .detail-hero {
    gap: 35px;
  }
  .detail-scenario {
    gap: 40px;
  }
  .detail-boundary {
    gap: 30px;
    padding: 28px;
  }
  .detail-questions {
    gap: 24px;
  }
}
@media (max-width: 650px) {
  .detail-hero,
  .detail-scenario,
  .detail-boundary {
    grid-template-columns: 1fr;
    gap: 30px;
  }
  .detail-back {
    margin-bottom: 28px;
  }
  .detail-scope {
    padding: 25px;
  }
  .detail-questions {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  .detail-questions h3 {
    margin-top: 14px;
  }
  .detail-next {
    padding: 24px 0 0;
    border-left: 0;
    border-top: 1px solid #dde5dd;
  }
  .detail-related h2 {
    font-size: 24px;
  }
}
</style>
