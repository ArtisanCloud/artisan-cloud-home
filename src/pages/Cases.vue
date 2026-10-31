<template>
  <article class="ac-page scenarios-page" :lang="lang">
    <header class="ac-wrap ac-hero">
      <p class="ac-kicker">{{ text("业务场景", "BUSINESS SCENARIOS") }}</p>
      <h1>
        {{
          text(
            "先看一个问题，\n再找到合适的做法。",
            "Start with a problem.\nFind the right approach.",
          )
        }}
      </h1>
      <p class="ac-lead">
        {{
          text(
            "客户沟通、内容协作、业务交接。用具体工作场景，讨论产品与服务应该怎样组合。",
            "Customer conversations, content collaboration, operational handoffs. Use a concrete workflow to explore how products and services could work together.",
          )
        }}
      </p>
    </header>
    <section
      class="ac-wrap scenario-collection"
      :aria-label="text('场景构想', 'Scenario concepts')"
    >
      <div class="scenario-notice">
        <span aria-hidden="true">↗</span>
        <p>
          {{
            text(
              "以下是用于讨论产品与服务组合的方案场景，并非客户交付案例。真实客户成果需经授权与核验后公开。",
              "These solution scenarios help explore how products and services could work together. They are not customer case studies; customer results require verification and permission to publish.",
            )
          }}
        </p>
      </div>
      <div class="scenario-cards">
        <RouterLink
          v-for="(item, index) in cases"
          :key="item.slug"
          :to="`/cases/${item.slug}`"
          class="scenario-card"
        >
          <div
            class="scenario-art"
            :class="`scenario-art-${index}`"
            aria-hidden="true"
          >
            <i></i><i></i><i></i><span>0{{ index + 1 }}</span>
          </div>
          <div class="scenario-card-body">
            <p class="scenario-type">{{ item.category[lang] }}</p>
            <h2>{{ item.title[lang] }}</h2>
            <p>{{ item.summary[lang] }}</p>
            <span class="scenario-read"
              >{{ text("展开场景", "Explore the scenario") }}
              <span aria-hidden="true">↗</span></span
            >
          </div>
        </RouterLink>
      </div>
    </section>
    <section class="ac-wrap ac-section scenario-next">
      <div>
        <p class="ac-kicker">
          {{ text("从构想到验证", "FROM CONCEPT TO VALIDATION") }}
        </p>
        <h2>
          {{
            text(
              "你的场景，\n可以从更小的一步开始。",
              "Your scenario can start\nwith a smaller first step.",
            )
          }}
        </h2>
        <p class="ac-lead">
          {{
            text(
              "带上现有流程、最想改善的环节，以及暂时不能改变的限制。先确认可行范围，再讨论交付。",
              "Bring your current workflow, the step you want to improve and the constraints you cannot change yet. Define what is feasible before planning delivery.",
            )
          }}
        </p>
      </div>
      <RouterLink class="ac-button" to="/contact"
        >{{ text("聊聊你的场景", "Discuss your scenario") }}
        <span aria-hidden="true">→</span></RouterLink
      >
    </section>
  </article>
</template>
<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import { cases } from "../data/cases";
const { locale } = useI18n();
const lang = computed(() => (locale.value === "en" ? "en" : "zh"));
const text = (zh: string, en: string) => (lang.value === "en" ? en : zh);
</script>
<style scoped>
.scenarios-page h1 {
  white-space: pre-line;
}
.scenario-collection {
  padding-bottom: 30px;
}
.scenario-notice {
  display: flex;
  align-items: flex-start;
  gap: 18px;
  padding: 22px 26px;
  border: 1px solid #e1e9e2;
  background: #f7faf7;
  border-radius: 12px;
  margin: 0 0 34px;
}
.scenario-notice > span {
  color: #4a7d60;
  padding-top: 4px;
}
.scenario-notice p {
  font-size: 13px;
  margin: 0;
  max-width: 900px;
}
.scenario-cards {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;
}
.scenario-card {
  display: flex;
  flex-direction: column;
  border: 1px solid #e0e8e2;
  border-radius: 17px;
  overflow: hidden;
  color: inherit;
  text-decoration: none;
  background: #fff;
  transition:
    border-color 0.2s ease,
    transform 0.2s ease;
}
.scenario-card:hover {
  border-color: #9cbba8;
  transform: translateY(-3px);
  text-decoration: none;
}
.scenario-art {
  height: 190px;
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, #edf5f4, #e9edf9);
}
.scenario-art i {
  position: absolute;
  width: 85px;
  height: 105px;
  border: 1px solid #fff;
  border-radius: 14px;
  left: 24%;
  top: 52px;
  background: linear-gradient(135deg, #ffffffdd, #97b9d9aa);
  transform: rotate(-14deg);
  box-shadow: 7px 12px 20px #60809e16;
}
.scenario-art i:nth-child(2) {
  left: 42%;
  top: 36px;
  background: linear-gradient(130deg, #d5e6f6, #9f9bd7a6);
}
.scenario-art i:nth-child(3) {
  left: 58%;
  top: 60px;
  background: linear-gradient(130deg, #dff1e8, #95c2bbba);
}
.scenario-art > span {
  position: absolute;
  top: 20px;
  left: 22px;
  color: #759084;
  font-size: 11px;
}
.scenario-art-1 {
  background: linear-gradient(135deg, #f1edf8, #eaf3f8);
}
.scenario-art-1 i {
  height: 80px;
  top: 75px;
  transform: rotate(-20deg);
}
.scenario-art-1 i:nth-child(2) {
  top: 35px;
}
.scenario-art-2 {
  background: linear-gradient(135deg, #edf5ed, #f1f2ec);
}
.scenario-art-2 i {
  width: 65px;
  height: 65px;
  border-radius: 10px;
  transform: rotate(-12deg);
}
.scenario-art-2 i:nth-child(3) {
  top: 100px;
  left: 43%;
}
.scenario-card-body {
  padding: 25px;
  display: flex;
  flex-direction: column;
  flex: 1;
}
.scenario-card-body .scenario-type {
  color: #5c806b;
  font-size: 11px;
  margin: 0 0 14px;
}
.scenario-card-body h2 {
  font-size: 23px;
  line-height: 1.45;
  margin: 0 0 15px;
}
.scenario-card-body > p:not(.scenario-type) {
  font-size: 14px;
  margin: 0 0 24px;
}
.scenario-read {
  font-size: 13px;
  color: #16734d;
  display: flex;
  justify-content: space-between;
  margin-top: auto;
}
.scenario-next {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 50px;
}
.scenario-next h2 {
  white-space: pre-line;
}
.scenario-next .ac-lead {
  max-width: 670px;
}
.scenario-next .ac-button {
  flex-shrink: 0;
}
@media (max-width: 850px) {
  .scenario-cards {
    grid-template-columns: 1fr;
  }
  .scenario-card {
    display: grid;
    grid-template-columns: 0.7fr 1fr;
  }
  .scenario-art {
    height: 100%;
    min-height: 230px;
  }
  .scenario-next {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  }
}
@media (max-width: 520px) {
  .scenario-card {
    display: flex;
  }
  .scenario-art {
    height: 180px;
    min-height: 180px;
  }
  .scenario-notice {
    padding: 20px;
    gap: 12px;
  }
}
@media (prefers-reduced-motion: reduce) {
  .scenario-card {
    transition: none;
  }
  .scenario-card:hover {
    transform: none;
  }
}
</style>
