<template>
  <article class="px-page" :lang="lang">
    <nav class="px-subnav" :aria-label="c.overview">
      <div class="px-wrap px-subnav-inner">
        <span class="px-wordmark">PowerX</span>
        <div class="px-section-links">
          <a href="#px-overview">{{ c.overview }}</a>
          <a href="#px-scenario">{{ c.scenario }}</a>
          <a href="#px-ecosystem">{{ c.ecosystem }}</a>
        </div>
        <RouterLink class="px-nav-cta" to="/contact"
          >{{ c.contact }} <span aria-hidden="true">↗</span></RouterLink
        >
      </div>
    </nav>

    <section id="px-overview" class="px-hero">
      <div class="px-wrap px-hero-grid">
        <div class="px-hero-copy">
          <p class="px-eyebrow">{{ c.eyebrow }}</p>
          <h1>{{ c.title }}</h1>
          <p class="px-intro">{{ c.intro }}</p>
          <div class="px-actions">
            <RouterLink class="px-button" to="/contact"
              >{{ c.contact }} <span aria-hidden="true">→</span></RouterLink
            >
            <a class="px-text-link" href="#px-core"
              >{{ c.core }} <span aria-hidden="true">↗</span></a
            >
          </div>
          <p class="px-audience">{{ c.forWho }}</p>
        </div>
        <figure class="px-art">
          <div class="px-orbit px-orbit-one" aria-hidden="true"></div>
          <div class="px-orbit px-orbit-two" aria-hidden="true"></div>
          <div class="px-glass px-input">
            <span class="px-dot" aria-hidden="true"></span
            ><small>{{ c.input }}</small>
            <p>{{ c.prompt }}</p>
          </div>
          <div class="px-glass px-center">
            <div class="px-art-icon" aria-hidden="true">
              <i></i><i></i><i></i>
            </div>
            <p>{{ c.center }}</p>
            <span class="px-review"
              ><span aria-hidden="true">✓</span> {{ c.human }}</span
            >
          </div>
          <div class="px-glass px-output">
            <span class="px-check" aria-hidden="true">✓</span>
            <p>{{ c.output }}</p>
          </div>
          <figcaption>{{ c.diagram }}</figcaption>
        </figure>
      </div>
    </section>

    <section id="px-scenario" class="px-wrap px-story px-section">
      <div class="px-story-heading">
        <div>
          <p class="px-eyebrow">{{ c.storyLabel }}</p>
          <h2>{{ c.storyTitle }}</h2>
        </div>
        <p class="px-lead">{{ c.storyIntro }}</p>
      </div>
      <div class="px-story-stage">
        <div class="px-steps" role="group" :aria-label="c.previewLabel">
          <ElButton
            v-for="(step, index) in scenarioSteps"
            :key="index"
            class="px-step"
            :class="{ selected: activeStep === index }"
            :aria-pressed="activeStep === index"
            aria-controls="px-step-content"
            @click="activeStep = index"
          >
            <span class="px-step-number">0{{ index + 1 }}</span
            ><span>{{ tr(step.title) }}</span
            ><span class="px-step-arrow" aria-hidden="true">↗</span>
          </ElButton>
        </div>
        <div
          id="px-step-content"
          class="px-step-content"
          aria-live="polite"
          aria-atomic="true"
        >
          <div class="px-step-description">
            <span class="px-small-label"
              >{{ c.previewLabel }} / 0{{ activeStep + 1 }}</span
            >
            <h3>{{ tr(currentStep.heading) }}</h3>
            <p>{{ tr(currentStep.body) }}</p>
          </div>
          <div class="px-plan">
            <span class="px-small-label">{{ tr(currentStep.label) }}</span>
            <ul>
              <li v-for="(item, index) in currentStep.items" :key="index">
                <span aria-hidden="true">{{
                  String(index + 1).padStart(2, "0")
                }}</span
                >{{ tr(item) }}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p class="px-note">{{ c.storyNote }}</p>
    </section>

    <section class="px-value-section">
      <div class="px-wrap px-section">
        <div class="px-centered">
          <p class="px-eyebrow">POWERX / AGENTOS</p>
          <h2>{{ c.valueTitle }}</h2>
          <p class="px-lead">{{ c.valueIntro }}</p>
        </div>
        <div class="px-values">
          <div v-for="(value, index) in values" :key="index" class="px-value">
            <div
              class="px-value-art"
              :class="`px-value-art-${index}`"
              aria-hidden="true"
            >
              <i></i><i></i><i></i>
            </div>
            <h3>{{ tr(value.title) }}</h3>
            <p>{{ tr(value.text) }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="px-wrap px-section px-evidence">
      <div class="px-section-heading">
        <h2>{{ c.evidenceTitle }}</h2>
        <p class="px-lead">{{ c.evidenceIntro }}</p>
      </div>
      <div class="px-capabilities">
        <div
          v-for="(capability, index) in capabilities"
          :key="index"
          class="px-capability"
        >
          <div class="px-capability-top">
            <span>0{{ index + 1 }}</span
            ><span v-if="capability.beta" class="px-beta">Beta</span>
          </div>
          <h3>{{ tr(capability.title) }}</h3>
          <p>{{ tr(capability.text) }}</p>
          <a
            :href="sourceRoot + capability.path"
            target="_blank"
            rel="noopener noreferrer"
            >{{ c.evidenceLink }} <span aria-hidden="true">↗</span
            ><span class="px-sr-only"> — {{ tr(capability.title) }}</span></a
          >
        </div>
      </div>
    </section>

    <section id="px-ecosystem" class="px-ecosystem">
      <div class="px-wrap px-section">
        <div class="px-section-heading">
          <p class="px-eyebrow">POWERX ECOSYSTEM</p>
          <h2>{{ c.pluginsTitle }}</h2>
          <p class="px-lead">{{ c.pluginsIntro }}</p>
        </div>
        <div class="px-plugins">
          <div class="px-plugin px-plugin-crm">
            <div class="px-plugin-top">
              <span class="px-plugin-mark" aria-hidden="true">C</span
              ><span class="px-paid">{{ c.paid }}</span>
            </div>
            <h3>CRM</h3>
            <p>{{ c.crm }}</p>
            <RouterLink to="/products/crm"
              >{{ c.exploreProduct }}
              <span aria-hidden="true">↗</span></RouterLink
            >
            <div class="px-plugin-lines" aria-hidden="true">
              <i></i><i></i><i></i>
            </div>
          </div>
          <div class="px-plugin px-plugin-media">
            <div class="px-plugin-top">
              <span class="px-plugin-mark" aria-hidden="true">M</span
              ><span class="px-paid">{{ c.paid }}</span>
            </div>
            <h3>MediaXStudio</h3>
            <p>{{ c.media }}</p>
            <RouterLink to="/products/mediax"
              >{{ c.exploreProduct }}
              <span aria-hidden="true">↗</span></RouterLink
            >
            <div class="px-media-tiles" aria-hidden="true">
              <i></i><i></i><i></i>
            </div>
          </div>
        </div>
        <p class="px-note">{{ c.pluginNote }}</p>
        <div class="px-solutions">
          <div>
            <h3>{{ c.solutions }}</h3>
            <p>{{ c.solutionNote }}</p>
          </div>
          <div class="px-solution-links">
            <RouterLink to="/products/scrm"
              >{{ c.scrm }} <span aria-hidden="true">↗</span></RouterLink
            ><RouterLink to="/products/mall"
              >{{ c.commerce }} <span aria-hidden="true">↗</span></RouterLink
            >
          </div>
        </div>
      </div>
    </section>

    <section id="px-core" class="px-wrap px-core px-section">
      <details open>
        <summary>{{ c.openTitle }}</summary>
        <div>
          <p>{{ c.openText }}</p>
          <a
            href="https://github.com/ArtisanCloud/PowerX"
            target="_blank"
            rel="noopener noreferrer"
            >{{ c.sourceLink }}</a
          >
        </div>
      </details>
      <details>
        <summary>{{ c.deployTitle }}</summary>
        <div>
          <p>{{ c.deployText }}</p>
        </div>
      </details>
    </section>

    <section class="px-closing">
      <div class="px-wrap">
        <p class="px-eyebrow">LET’S BUILD WHAT’S NEXT</p>
        <h2>{{ c.closing }}</h2>
        <p class="px-lead">{{ c.closingText }}</p>
        <RouterLink class="px-button" to="/contact"
          >{{ c.contact }} <span aria-hidden="true">→</span></RouterLink
        >
        <p class="px-note">{{ c.contactNote }}</p>
      </div>
    </section>
  </article>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { useI18n } from "vue-i18n";
import { ElButton } from "element-plus";
import "element-plus/es/components/button/style/css";
import {
  capabilities,
  powerxCopy,
  scenarioSteps,
  sourceRoot,
  values,
  type Copy,
} from "../data/powerx";

const { locale } = useI18n();
const lang = computed(() => (locale.value === "en" ? "en" : "zh"));
const tr = (text: Copy) => text[lang.value];
const c = computed(
  () =>
    Object.fromEntries(
      Object.entries(powerxCopy).map(([key, value]) => [key, tr(value)]),
    ) as Record<keyof typeof powerxCopy, string>,
);
const activeStep = ref(0);
const currentStep = computed(() => scenarioSteps[activeStep.value]);
</script>

<style scoped>
.px-page {
  --px-ink: #263c35;
  --px-muted: #64756f;
  --px-green: #16734d;
  color: var(--px-ink);
  background: #fff;
  font-size: 16px;
}
.px-wrap {
  width: min(1160px, 100% - 64px);
  margin-inline: auto;
}
.px-page h1,
.px-page h2,
.px-page h3 {
  font-weight: 500;
  letter-spacing: -0.045em;
  text-wrap: balance;
}
.px-page h1 {
  font-size: clamp(40px, 4.2vw, 62px);
  line-height: 1.24;
  white-space: pre-line;
  margin: 18px 0 24px;
}
.px-page h2 {
  font-size: clamp(30px, 3.2vw, 46px);
  line-height: 1.3;
  white-space: pre-line;
}
.px-page h3 {
  font-size: 23px;
  line-height: 1.4;
}
.px-page p {
  color: var(--px-muted);
  line-height: 1.85;
}
.px-page a {
  color: var(--px-green);
  text-decoration: none;
}
.px-page a:hover {
  text-decoration: underline;
  text-underline-offset: 5px;
}
.px-page a:focus-visible,
.px-page button:focus-visible,
.px-page summary:focus-visible {
  outline: 3px solid var(--px-green);
  outline-offset: 5px;
}
.px-section {
  padding-block: 100px;
}
.px-page [id] {
  scroll-margin-top: 150px;
}
.px-subnav {
  border-bottom: 1px solid #e8eee9;
  background: #fff;
}
.px-subnav-inner {
  min-height: 64px;
  display: flex;
  align-items: center;
  gap: 32px;
}
.px-wordmark {
  font-size: 22px;
  letter-spacing: -0.05em;
  font-weight: 500;
  margin-right: auto;
}
.px-section-links {
  display: flex;
  gap: 30px;
  font-size: 13px;
}
.px-section-links a {
  color: #586b63;
}
.px-nav-cta {
  font-size: 13px;
  border-left: 1px solid #dde6df;
  padding-left: 28px;
}
.px-hero {
  overflow: hidden;
  background:
    radial-gradient(ellipse at 85% 45%, #e8f1ff 0, transparent 48%),
    linear-gradient(115deg, #fbfcfa 10%, #f2f6fc 100%);
}
.px-hero-grid {
  min-height: 650px;
  display: grid;
  grid-template-columns: 1.05fr 1fr;
  gap: 25px;
  align-items: center;
}
.px-hero-copy {
  position: relative;
  z-index: 2;
  padding: 65px 0;
}
.px-eyebrow {
  font-size: 12px;
  letter-spacing: 0.13em;
  font-weight: 500;
  color: #5f7168 !important;
  margin: 0 0 16px;
}
.px-intro {
  font-size: 17px;
  max-width: 490px;
  margin: 0 0 32px;
}
.px-actions {
  display: flex;
  align-items: center;
  gap: 26px;
  flex-wrap: wrap;
}
.px-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 25px;
  background: var(--px-green);
  color: #fff !important;
  border-radius: 8px;
  padding: 14px 23px;
  font-size: 14px;
  min-height: 50px;
  transition:
    background 0.2s ease,
    transform 0.2s ease;
}
.px-button:hover {
  background: #105b3c;
  text-decoration: none !important;
  transform: translateY(-2px);
}
.px-text-link {
  font-size: 14px;
}
.px-audience {
  font-size: 11px;
  margin-top: 28px;
  letter-spacing: 0.025em;
}
.px-art {
  position: relative;
  height: 520px;
  margin: 0 -30px 0 -15px;
  isolation: isolate;
}
.px-orbit {
  position: absolute;
  border-radius: 50%;
  z-index: -1;
  box-shadow:
    inset 8px 12px 20px #ffffffb3,
    inset -9px -8px 20px #234f854d,
    0 25px 50px #758dcc25;
}
.px-orbit-one {
  width: 435px;
  height: 435px;
  top: 15px;
  right: -20px;
  border: 64px solid transparent;
  background: linear-gradient(
      145deg,
      #baeff7,
      #6889e7 44%,
      #bba7e9 65%,
      #76ccc1
    )
    border-box;
  transform: rotate(-33deg) scaleY(0.67);
}
.px-orbit-one::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: #ecf3fa;
  box-shadow: inset 10px 10px 25px #637fb652;
}
.px-orbit-two {
  width: 280px;
  height: 280px;
  bottom: 0;
  left: -15px;
  background: linear-gradient(135deg, #d2eff4, #b4bbf0 40%, #5ba9ba);
  transform: scaleY(0.33) rotate(-22deg);
  opacity: 0.7;
}
.px-glass {
  position: absolute;
  background: linear-gradient(120deg, #ffffffed, #ffffffa6);
  border: 1px solid #fff;
  border-radius: 17px;
  box-shadow:
    0 18px 45px #5871a321,
    inset 0 0 0 1px #dce4f075;
  backdrop-filter: blur(14px);
}
.px-input {
  left: 4%;
  top: 80px;
  width: 230px;
  padding: 20px 23px;
  transform: rotate(-5deg);
}
.px-input small {
  color: #5f7168;
  font-size: 11px;
}
.px-dot {
  display: inline-block;
  width: 6px;
  height: 6px;
  background: #7187d4;
  border-radius: 50%;
  margin-right: 8px;
}
.px-input p {
  color: #3e5265;
  font-size: 15px;
  line-height: 1.65;
  margin: 12px 0 0;
}
.px-center {
  width: 275px;
  top: 190px;
  left: 30%;
  padding: 28px;
  transform: rotate(3deg);
}
.px-center > p {
  font-size: 20px;
  line-height: 1.5;
  color: #3d4d68;
  margin: 18px 0;
}
.px-review {
  color: #327354;
  font-size: 11px;
  background: #e8f3eb;
  display: inline-block;
  padding: 8px 11px;
  border-radius: 5px;
}
.px-review span {
  margin-right: 7px;
}
.px-art-icon {
  display: flex;
  width: 62px;
  height: 32px;
  position: relative;
}
.px-art-icon i {
  width: 30px;
  height: 30px;
  border-radius: 9px;
  background: linear-gradient(130deg, #b6e9e7, #6587d8);
  box-shadow: 0 3px 8px #657eb630;
  transform: rotate(-15deg);
}
.px-art-icon i:nth-child(2) {
  margin-left: -14px;
  background: linear-gradient(130deg, #d1d0fa, #8875c8);
}
.px-art-icon i:nth-child(3) {
  margin-left: -14px;
  background: linear-gradient(130deg, #b5ede1, #68b5c1);
}
.px-output {
  left: 5%;
  bottom: 44px;
  width: 250px;
  padding: 17px 20px;
  display: flex;
  align-items: center;
  gap: 14px;
  transform: rotate(-3deg);
}
.px-output p {
  color: #4e6560;
  font-size: 13px;
  line-height: 1.6;
  margin: 0;
}
.px-check {
  color: #fff;
  background: #408269;
  border-radius: 50%;
  width: 23px;
  height: 23px;
  display: grid;
  place-items: center;
  flex: 0 0 23px;
  font-size: 12px;
}
.px-art figcaption {
  position: absolute;
  bottom: 0;
  right: 4%;
  font-size: 10px;
  color: #5f7168;
}
.px-story-heading {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: end;
  gap: 100px;
  margin-bottom: 38px;
}
.px-lead {
  font-size: 16px;
  max-width: 660px;
}
.px-story-heading .px-lead {
  margin: 0 0 14px;
}
.px-story-stage {
  border: 1px solid #e2e9e4;
  border-radius: 18px;
  overflow: hidden;
}
.px-steps {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  background: #f5f8f5;
  padding: 10px;
}
.px-step.el-button {
  margin: 0;
  height: auto;
  min-height: 66px;
  padding: 17px 20px;
  font: inherit;
  border: 1px solid transparent;
  border-radius: 10px;
  background: transparent;
  color: #6a7a72;
  white-space: normal;
}
.px-step :deep(> span) {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 14px;
}
.px-step.el-button.selected {
  color: #176448;
  background: #fff;
  border-color: #dbe7df;
  box-shadow: 0 3px 9px #29482c06;
}
.px-step-number {
  font-size: 11px;
  opacity: 0.75;
}
.px-step-arrow {
  margin-left: auto;
}
.px-step-content {
  padding: 48px;
  display: grid;
  grid-template-columns: 1.15fr 1fr;
  gap: 75px;
  min-height: 300px;
  align-items: center;
}
.px-small-label {
  font-size: 11px;
  letter-spacing: 0.06em;
  color: #5f7168;
}
.px-step-description h3 {
  margin-top: 15px;
}
.px-step-description p {
  font-size: 14px;
  margin-bottom: 0;
}
.px-plan {
  background: #f7f9f6;
  border: 1px solid #e8ede8;
  padding: 25px;
  border-radius: 12px;
}
.px-plan ul {
  list-style: none;
  padding: 0;
  margin: 16px 0 0;
}
.px-plan li {
  padding: 12px 0;
  border-top: 1px solid #e3e9e1;
  font-size: 13px;
  display: flex;
  align-items: center;
  gap: 18px;
}
.px-plan li span {
  color: #5b896c;
  font-size: 10px;
}
.px-note {
  font-size: 11px;
  line-height: 1.8 !important;
  margin: 18px 0 0;
}
.px-value-section {
  background: linear-gradient(125deg, #f4f8fb, #f4f4fb 55%, #eff8f5);
}
.px-centered {
  text-align: center;
}
.px-centered .px-lead {
  margin: 20px auto 0;
}
.px-values {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 70px;
  margin-top: 60px;
}
.px-value {
  text-align: center;
}
.px-value p {
  font-size: 14px;
  margin: 14px auto 0;
  max-width: 260px;
}
.px-value-art {
  width: 110px;
  height: 90px;
  margin: 0 auto 24px;
  position: relative;
}
.px-value-art i {
  position: absolute;
  width: 47px;
  height: 57px;
  left: 15px;
  top: 20px;
  background: linear-gradient(130deg, #ffffffc9, #7ca4dcaa);
  border: 1px solid #fff;
  border-radius: 9px;
  transform: rotate(-10deg);
  box-shadow: 6px 10px 20px #788eb122;
}
.px-value-art i:nth-child(2) {
  left: 35px;
  top: 12px;
  background: linear-gradient(130deg, #c9e9f6, #8892dfb0);
}
.px-value-art i:nth-child(3) {
  left: 55px;
  top: 5px;
  background: linear-gradient(130deg, #b6dcee, #77a9bccc);
}
.px-value-art-1 i {
  border-radius: 50%;
  width: 42px;
  height: 42px;
}
.px-value-art-1 i:nth-child(2) {
  top: 40px;
  left: 50px;
}
.px-value-art-1 i:nth-child(3) {
  top: 0;
  left: 65px;
}
.px-value-art-2 i {
  width: 40px;
  height: 40px;
  transform: rotate(-20deg);
}
.px-value-art-2 i:nth-child(2) {
  left: 54px;
  top: 40px;
}
.px-value-art-2 i:nth-child(3) {
  left: 60px;
  top: 0;
}
.px-section-heading {
  margin-bottom: 42px;
}
.px-section-heading .px-lead {
  margin-top: 20px;
}
.px-capabilities {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}
.px-capability {
  border-top: 1px solid #dbe5df;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
}
.px-capability-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 24px;
  font-size: 11px;
  color: #5f7168;
  margin-bottom: 25px;
}
.px-beta {
  color: #78603c;
  background: #f5f0e6;
  padding: 3px 8px;
  border-radius: 4px;
}
.px-capability h3 {
  font-size: 19px;
}
.px-capability p {
  font-size: 13px;
  margin: 4px 0 24px;
}
.px-capability a {
  font-size: 12px;
  margin-top: auto;
}
.px-ecosystem {
  background: #f8faf8;
}
.px-plugins {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
}
.px-plugin {
  border: 1px solid #e0e8e5;
  border-radius: 18px;
  padding: 32px;
  position: relative;
  overflow: hidden;
  min-height: 360px;
}
.px-plugin-crm {
  background: linear-gradient(120deg, #fff 15%, #edf6f1);
}
.px-plugin-media {
  background: linear-gradient(120deg, #fff 15%, #efeffa);
}
.px-plugin-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 25px;
}
.px-plugin-mark {
  background: #dfeee7;
  color: #467c63;
  border-radius: 11px;
  width: 39px;
  height: 39px;
  display: grid;
  place-items: center;
  font-size: 15px;
}
.px-plugin-media .px-plugin-mark {
  background: #e9e5f7;
  color: #7a67a9;
}
.px-paid {
  font-size: 10px;
  color: #5f7168;
  border: 1px solid #d8e2d9;
  border-radius: 20px;
  padding: 5px 9px;
}
.px-plugin h3 {
  font-size: 29px;
}
.px-plugin p {
  max-width: 340px;
  font-size: 14px;
  position: relative;
  z-index: 1;
}
.px-plugin a {
  display: inline-block;
  font-size: 12px;
  margin-top: 20px;
  position: relative;
  z-index: 1;
}
.px-plugin-lines,
.px-media-tiles {
  position: absolute;
  right: -25px;
  bottom: -45px;
  width: 160px;
  height: 140px;
  opacity: 0.45;
  transform: rotate(-20deg);
  pointer-events: none;
}
.px-plugin-lines i {
  display: block;
  width: 150px;
  height: 35px;
  margin: 9px 0;
  background: linear-gradient(90deg, #cce4d5, #ffffff);
  border: 1px solid #accfb9;
  border-radius: 8px;
}
.px-media-tiles i {
  position: absolute;
  width: 100px;
  height: 110px;
  background: linear-gradient(130deg, #f7f9ff, #a6b7df);
  border: 1px solid #fff;
  border-radius: 14px;
}
.px-media-tiles i:nth-child(2) {
  left: 25px;
  top: 15px;
  background: linear-gradient(130deg, #e7def6, #aaa0d7);
}
.px-media-tiles i:nth-child(3) {
  left: 50px;
  top: 30px;
  background: linear-gradient(130deg, #e1f0ee, #8ebcbe);
}
.px-solutions {
  margin-top: 48px;
  padding-top: 30px;
  border-top: 1px solid #dfe7df;
  display: flex;
  justify-content: space-between;
  gap: 30px;
}
.px-solutions h3 {
  font-size: 17px;
}
.px-solutions p {
  font-size: 11px;
  max-width: 480px;
  margin-bottom: 0;
}
.px-solution-links {
  display: flex;
  flex-direction: column;
  gap: 15px;
  white-space: nowrap;
  font-size: 13px;
}
.px-core {
  padding-block: 60px;
}
.px-core details {
  border-bottom: 1px solid #e3e9e4;
}
.px-core summary {
  padding: 24px 4px;
  cursor: pointer;
  font-size: 18px;
  list-style: none;
  display: flex;
  justify-content: space-between;
  gap: 20px;
}
.px-core summary::-webkit-details-marker {
  display: none;
}
.px-core summary::after {
  content: "+";
  font-size: 24px;
  color: #5f7168;
}
.px-core details[open] summary::after {
  content: "−";
}
.px-core details > div {
  max-width: 800px;
  padding: 0 4px 30px;
}
.px-core p {
  font-size: 14px;
  margin-top: 0;
}
.px-core a {
  font-size: 13px;
}
.px-closing {
  text-align: center;
  padding: 65px 0 90px;
  background:
    radial-gradient(ellipse at 10% 100%, #e4f0f6, transparent 45%),
    radial-gradient(ellipse at 90% 100%, #ece9fa, transparent 40%);
}
.px-closing .px-lead {
  margin: 20px auto 28px;
}
.px-closing .px-note {
  margin-top: 20px;
}
.px-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
}
@media (max-width: 1000px) {
  .px-hero-grid {
    grid-template-columns: 1fr 1fr;
    gap: 0;
  }
  .px-art {
    transform: scale(0.84);
    transform-origin: center right;
    margin-left: -75px;
  }
  .px-story-heading {
    gap: 45px;
  }
  .px-step-content {
    gap: 30px;
    padding: 32px;
  }
  .px-values {
    gap: 35px;
  }
  .px-capabilities {
    grid-template-columns: 1fr 1fr;
    gap: 35px;
  }
}
@media (max-width: 720px) {
  .px-wrap {
    width: calc(100% - 40px);
  }
  .px-section {
    padding-block: 64px;
  }
  .px-subnav-inner {
    min-height: 58px;
    gap: 15px;
  }
  .px-section-links {
    gap: 18px;
    font-size: 11px;
  }
  .px-nav-cta {
    display: none;
  }
  .px-wordmark {
    font-size: 20px;
  }
  .px-hero-grid {
    grid-template-columns: 1fr;
    min-height: 0;
  }
  .px-hero-copy {
    padding: 52px 0 0;
  }
  .px-page h1 {
    font-size: clamp(34px, 7.7vw, 48px);
    margin-top: 14px;
  }
  .px-intro {
    font-size: 15px;
    max-width: 500px;
  }
  .px-actions {
    gap: 22px;
  }
  .px-audience {
    font-size: 10px;
  }
  .px-art {
    width: min(500px, 100%);
    height: 420px;
    margin: 0 auto 25px;
    transform: none;
  }
  .px-orbit-one {
    width: 330px;
    height: 330px;
    border-width: 48px;
    right: -30px;
    top: 20px;
  }
  .px-input {
    width: 195px;
    left: 0;
    top: 40px;
    padding: 18px;
  }
  .px-input p {
    font-size: 13px;
  }
  .px-center {
    width: 215px;
    left: auto;
    right: 0;
    top: 150px;
    padding: 23px;
  }
  .px-center > p {
    font-size: 17px;
  }
  .px-output {
    width: 200px;
    left: 0;
    bottom: 30px;
    padding: 14px;
  }
  .px-output p {
    font-size: 11px;
  }
  .px-art figcaption {
    bottom: 0;
    right: 0;
  }
  .px-story-heading {
    grid-template-columns: 1fr;
    gap: 14px;
    margin-bottom: 24px;
  }
  .px-lead {
    font-size: 14px;
  }
  .px-steps {
    gap: 3px;
    padding: 7px;
  }
  .px-step.el-button {
    padding: 12px 5px;
    font-size: 12px;
    min-height: 62px;
  }
  .px-step :deep(> span) {
    flex-direction: column;
    gap: 7px;
  }
  .px-step-arrow {
    display: none;
  }
  .px-step-number {
    font-size: 9px;
  }
  .px-step-content {
    grid-template-columns: 1fr;
    gap: 24px;
    padding: 25px;
  }
  .px-page h3 {
    font-size: 21px;
  }
  .px-values {
    grid-template-columns: 1fr;
    gap: 45px;
    margin-top: 40px;
  }
  .px-value-art {
    margin-bottom: 15px;
  }
  .px-value p {
    max-width: 320px;
  }
  .px-capabilities {
    gap: 35px 22px;
  }
  .px-capability h3 {
    font-size: 18px;
  }
  .px-capability p {
    font-size: 12px;
  }
  .px-capability-top {
    margin-bottom: 16px;
  }
  .px-plugins {
    grid-template-columns: 1fr;
    gap: 18px;
  }
  .px-plugin {
    padding: 25px;
    min-height: 325px;
  }
  .px-plugin h3 {
    font-size: 28px;
  }
  .px-solutions {
    flex-direction: column;
    gap: 22px;
  }
  .px-solution-links {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 22px;
  }
  .px-core {
    padding-block: 35px;
  }
  .px-core summary {
    font-size: 16px;
  }
  .px-closing {
    padding: 45px 0 65px;
  }
}
@media (max-width: 360px) {
  .px-subnav-inner {
    gap: 10px;
  }
  .px-section-links {
    gap: 10px;
    font-size: 10px;
  }
}
@media (prefers-reduced-motion: reduce) {
  .px-page *,
  .px-page *::before,
  .px-page *::after {
    animation: none !important;
    transition: none !important;
    scroll-behavior: auto !important;
  }
  .px-button:hover {
    transform: none;
  }
}
</style>
