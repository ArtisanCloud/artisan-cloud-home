<template>
  <article class="ac-page scenario-detail" :lang="lang">
    <template v-if="item">
      <header class="ac-wrap ac-hero">
        <RouterLink class="ac-link scenario-back" to="/cases"
          >← {{ text("所有场景", "All scenarios") }}</RouterLink
        >
        <p class="ac-kicker">{{ item.category[lang] }}</p>
        <h1>{{ item.title[lang] }}</h1>
        <p class="ac-lead">{{ item.summary[lang] }}</p>
        <p class="scenario-disclaimer">
          {{
            text(
              "方案场景 · 非客户交付案例 · 不代表功能已端到端实现",
              "Solution scenario · Not a customer case study · Not a claim of end-to-end implementation",
            )
          }}
        </p>
      </header>
      <section class="ac-wrap scenario-context">
        <div>
          <span class="scenario-number"
            >01 / {{ text("工作中的问题", "THE WORKFLOW CHALLENGE") }}</span
          >
          <h2>
            {{
              text(
                "先理解，为什么需要改变。",
                "Understand what needs to change.",
              )
            }}
          </h2>
          <p>{{ item.challenge[lang] }}</p>
        </div>
        <div>
          <span class="scenario-number"
            >02 / {{ text("方案思路", "A POSSIBLE APPROACH") }}</span
          >
          <h2>
            {{
              text(
                "把讨论落在具体的工作上。",
                "Ground the discussion in real work.",
              )
            }}
          </h2>
          <p>{{ item.approach[lang] }}</p>
        </div>
      </section>
      <section class="scenario-flow-band">
        <div class="ac-wrap ac-section">
          <p class="ac-kicker">
            {{ text("流程示意", "ILLUSTRATIVE WORKFLOW") }}
          </p>
          <h2>
            {{ text("三个环节，逐步确认。", "Three steps to work through.") }}
          </h2>
          <ol class="scenario-flow">
            <li v-for="(step, index) in item.steps" :key="index">
              <span>0{{ index + 1 }}</span>
              <h3>{{ step.title[lang] }}</h3>
              <p>{{ step.description[lang] }}</p>
            </li>
          </ol>
        </div>
      </section>
      <section class="ac-wrap ac-section scenario-validation">
        <div>
          <p class="ac-kicker">{{ text("开始之前", "BEFORE YOU START") }}</p>
          <h2>{{ text("先准备这些信息。", "Prepare the essentials.") }}</h2>
          <ul>
            <li v-for="(line, index) in item.prerequisites" :key="index">
              {{ line[lang] }}
            </li>
          </ul>
        </div>
        <div>
          <p class="ac-kicker">
            {{ text("如何判断方向", "HOW TO ASSESS THE APPROACH") }}
          </p>
          <h2>
            {{
              text(
                "用问题来验证，\n不预设漂亮的数字。",
                "Validate with questions,\nnot assumed results.",
              )
            }}
          </h2>
          <ul>
            <li v-for="(line, index) in item.reviewQuestions" :key="index">
              {{ line[lang] }}
            </li>
          </ul>
        </div>
      </section>
      <section class="ac-wrap scenario-related">
        <div>
          <h2>
            {{
              text(
                "可以一起了解的产品",
                "Products to explore alongside this scenario",
              )
            }}
          </h2>
          <p>
            {{
              text(
                "产品范围、集成方式和可交付能力，需结合项目进一步确认。",
                "Confirm product scope, integration and deliverable capabilities for the specific project.",
              )
            }}
          </p>
        </div>
        <div class="scenario-product-links">
          <RouterLink
            v-for="product in item.relatedProducts"
            :key="product.slug"
            :to="`/products/${product.slug}`"
            >{{ product.name }} <span aria-hidden="true">↗</span></RouterLink
          >
        </div>
      </section>
      <section class="ac-wrap ac-section scenario-contact">
        <h2>
          {{
            text(
              "把你的工作流程，带进来聊聊。",
              "Bring your workflow into the conversation.",
            )
          }}
        </h2>
        <p class="ac-lead">
          {{
            text(
              "从一个问题开始，先明确边界与下一步。",
              "Start with one problem. Define the boundaries and the next step.",
            )
          }}
        </p>
        <RouterLink class="ac-button" to="/contact"
          >{{ text("聊聊业务需求", "Discuss your needs") }}
          <span aria-hidden="true">→</span></RouterLink
        >
      </section>
    </template>
    <section v-else class="ac-wrap ac-hero">
      <p class="ac-kicker">{{ text("业务场景", "BUSINESS SCENARIOS") }}</p>
      <h1>
        {{ text("这个场景暂未收录。", "This scenario is not available.") }}
      </h1>
      <p class="ac-lead">
        {{
          text(
            "可以返回场景列表，或和我们讨论你的业务问题。",
            "Return to the scenario collection, or discuss your business question with us.",
          )
        }}
      </p>
      <RouterLink class="ac-button" to="/cases">{{
        text("返回场景列表", "Explore scenarios")
      }}</RouterLink>
    </section>
  </article>
</template>
<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useI18n } from "vue-i18n";
import { getCaseBySlug } from "../data/cases";
const route = useRoute();
const { locale } = useI18n();
const lang = computed(() => (locale.value === "en" ? "en" : "zh"));
const text = (zh: string, en: string) => (lang.value === "en" ? en : zh);
const item = computed(() => getCaseBySlug(String(route.params.slug || "")));
</script>
<style scoped>
.scenario-back {
  display: inline-block;
  margin-bottom: 34px;
  font-size: 13px;
}
.scenario-detail h1 {
  max-width: 940px;
}
.scenario-disclaimer {
  font-size: 11px;
  color: #66806f;
  border-left: 2px solid #aac4b3;
  padding-left: 14px;
  margin-top: 28px;
}
.scenario-context {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  padding-bottom: 80px;
}
.scenario-number {
  font-size: 11px;
  letter-spacing: 0.06em;
  color: #5f7168;
  display: block;
  margin-bottom: 22px;
}
.scenario-context h2 {
  font-size: 28px;
}
.scenario-context p {
  font-size: 15px;
}
.scenario-flow-band {
  background: linear-gradient(125deg, #f3f8f5, #f3f5fa);
}
.scenario-flow {
  list-style: none;
  padding: 0;
  margin: 42px 0 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 38px;
}
.scenario-flow li {
  border-top: 1px solid #cdded3;
  padding-top: 24px;
}
.scenario-flow li > span {
  display: inline-flex;
  width: 34px;
  height: 34px;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: #527a62;
  background: #e1eee4;
  font-size: 10px;
  margin-bottom: 24px;
}
.scenario-flow h3 {
  font-size: 22px;
}
.scenario-flow p {
  font-size: 14px;
}
.scenario-validation {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
}
.scenario-validation h2 {
  font-size: 30px;
  white-space: pre-line;
}
.scenario-validation ul {
  list-style: none;
  margin: 28px 0 0;
  padding: 0;
}
.scenario-validation li {
  border-top: 1px solid #e2e9e3;
  padding: 16px 0 16px 22px;
  position: relative;
  font-size: 14px;
  line-height: 1.8;
  color: #64756f;
}
.scenario-validation li::before {
  content: "";
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: #7c9f87;
  position: absolute;
  left: 1px;
  top: 27px;
}
.scenario-related {
  border-top: 1px solid #e1e8e2;
  border-bottom: 1px solid #e1e8e2;
  padding-block: 30px;
  display: flex;
  gap: 30px;
  align-items: center;
  justify-content: space-between;
}
.scenario-related h2 {
  font-size: 20px;
}
.scenario-related p {
  font-size: 12px;
  margin-bottom: 0;
}
.scenario-product-links {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
}
.scenario-product-links a {
  background: #f0f6f1;
  border: 1px solid #deeadf;
  border-radius: 8px;
  padding: 12px 18px;
  color: #326f4f;
  text-decoration: none;
  font-size: 13px;
}
.scenario-product-links a:hover {
  border-color: #9cbaa6;
}
.scenario-contact {
  text-align: center;
}
.scenario-contact .ac-lead {
  margin-inline: auto;
  margin-bottom: 28px;
}
@media (max-width: 760px) {
  .scenario-context,
  .scenario-validation,
  .scenario-flow {
    grid-template-columns: 1fr;
    gap: 34px;
  }
  .scenario-context {
    padding-bottom: 55px;
  }
  .scenario-flow {
    margin-top: 30px;
  }
  .scenario-flow li > span {
    margin-bottom: 16px;
  }
  .scenario-related {
    flex-direction: column;
    align-items: flex-start;
  }
  .scenario-validation h2 {
    font-size: 27px;
  }
}
</style>
