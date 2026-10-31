<template>
  <article class="ac-page">
    <section class="home-hero">
      <div class="ac-wrap home-hero-grid">
        <div>
          <p class="ac-kicker">ARTISANCLOUD / 元匠科技</p>
          <h1>
            {{
              zh
                ? "让技术，\n回到业务本身。"
                : "Technology,\nwith business at heart."
            }}
          </h1>
          <p class="ac-lead">
            {{
              zh
                ? "从客户连接、内容协作，到企业 AI 应用。我们把产品、工程与交付放在一起，和你把一个值得解决的问题，做成可以持续演进的业务。"
                : "From customer engagement and content collaboration to enterprise AI. We bring products, engineering and delivery together to turn a meaningful problem into something your business can build on."
            }}
          </p>
          <div class="ac-actions">
            <RouterLink class="ac-button" to="/services"
              >{{ zh ? "了解我们如何合作" : "See how we work" }}
              <span aria-hidden="true">→</span></RouterLink
            ><RouterLink class="ac-link" to="/products"
              >{{
                zh ? "探索产品与方案" : "Explore our products"
              }}
              ↗</RouterLink
            >
          </div>
          <p class="home-footnote">
            {{
              zh
                ? "业务先行 · 开放连接 · 持续演进"
                : "Business first · Open connections · Room to evolve"
            }}
          </p>
        </div>
        <div class="home-art" aria-hidden="true">
          <div class="home-loop"></div>
          <div class="home-tile tile-one">
            <span>01</span>{{ zh ? "业务" : "Business" }}<i></i><i></i>
          </div>
          <div class="home-tile tile-two">
            <span>02</span>{{ zh ? "产品" : "Product" }}<i></i><i></i>
          </div>
          <div class="home-tile tile-three">
            <span>03</span>{{ zh ? "交付" : "Delivery" }}<i></i><i></i>
          </div>
        </div>
      </div>
    </section>
    <section class="ac-wrap ac-section">
      <div class="ac-heading">
        <h2>
          {{
            zh
              ? "先找到问题，\n再选择技术。"
              : "Find the problem.\nThen choose the technology."
          }}
        </h2>
        <p>
          {{
            zh
              ? "不是先堆功能，而是先确认谁在使用、哪里卡住，以及怎样才算真正做好。"
              : "Start with the people, the friction and a clear definition of success—not a list of features."
          }}
        </p>
      </div>
      <div class="ac-grid">
        <div class="ac-card home-value" v-for="(item, i) in needs" :key="i">
          <span class="ac-number">0{{ i + 1 }}</span>
          <h3>{{ t(item.title) }}</h3>
          <p>{{ t(item.text) }}</p>
          <RouterLink class="ac-link" :to="item.to"
            >{{ zh ? "看看下一步" : "Explore the next step" }} ↗</RouterLink
          >
        </div>
      </div>
    </section>
    <section class="ac-soft">
      <div class="ac-wrap ac-section">
        <div class="ac-heading">
          <h2>
            {{
              zh
                ? "一个团队，\n不止一种起点。"
                : "One team.\nMore than one starting point."
            }}
          </h2>
          <p>
            {{
              zh
                ? "既有开放底座与开发工具，也有面向业务的产品与定制服务。按你的阶段组合，而不是让业务迁就工具。"
                : "Open foundations, developer tools, business products and tailored services. Choose what fits your stage—not the other way around."
            }}
          </p>
        </div>
        <div class="home-product-grid">
          <RouterLink class="home-feature" to="/products/powerx-base"
            ><span class="ac-pill">{{
              zh ? "企业 AI 与插件底座" : "Enterprise AI & plugin foundation"
            }}</span>
            <h3>PowerX</h3>
            <p>
              {{
                zh
                  ? "让 AI 应用与业务插件有一个共同的运行底座。"
                  : "A common runtime foundation for AI applications and business plugins."
              }}
            </p>
            <span class="ac-link"
              >{{ zh ? "认识 PowerX" : "Meet PowerX" }} →</span
            >
            <div class="feature-orb" aria-hidden="true"></div
          ></RouterLink>
          <div class="home-product-stack">
            <RouterLink class="home-small-product" to="/products/crm"
              ><span class="ac-pill">{{
                zh ? "核心付费插件" : "Core paid plugin"
              }}</span>
              <h3>CRM</h3>
              <p>
                {{
                  zh
                    ? "围绕客户信息与销售协作，明确下一次沟通。"
                    : "Put customer context and sales collaboration behind the next conversation."
                }}
              </p>
              <span aria-hidden="true">↗</span></RouterLink
            ><RouterLink class="home-small-product" to="/products/mediax"
              ><span class="ac-pill">{{
                zh ? "核心付费插件" : "Core paid plugin"
              }}</span>
              <h3>MediaXStudio</h3>
              <p>
                {{
                  zh
                    ? "围绕素材、内容与团队，组织生产和管理。"
                    : "Organize production and management around assets, content and teams."
                }}
              </p>
              <span aria-hidden="true">↗</span></RouterLink
            >
          </div>
        </div>
        <div class="home-open-row">
          <span>{{
            zh
              ? "也为开发者留好入口。"
              : "A clear entry point for developers, too."
          }}</span
          ><RouterLink to="/products/powerwechat">PowerWeChat SDK ↗</RouterLink
          ><RouterLink to="/developers"
            >{{
              zh ? "文档与开源项目" : "Documentation & open source"
            }}
            ↗</RouterLink
          >
        </div>
        <DocsLinks />
      </div>
    </section>
    <section class="ac-wrap ac-section">
      <div class="ac-heading">
        <h2>
          {{
            zh ? "把合作过程，\n讲清楚。" : "Make the path\nto delivery clear."
          }}
        </h2>
        <RouterLink class="ac-link" to="/services"
          >{{
            zh ? "查看服务与交付" : "Explore services & delivery"
          }}
          →</RouterLink
        >
      </div>
      <ol class="home-process">
        <li v-for="(item, i) in process" :key="i">
          <span>0{{ i + 1 }}</span>
          <h3>{{ t(item.title) }}</h3>
          <p>{{ t(item.text) }}</p>
        </li>
      </ol>
    </section>
    <section class="ac-wrap home-last">
      <div class="ac-callout">
        <p class="ac-kicker">START WITH A QUESTION</p>
        <h2>
          {{ zh ? "你想先改善哪一个环节？" : "What would you improve first?" }}
        </h2>
        <p class="ac-lead">
          {{
            zh
              ? "不用先准备一份完整方案。一个具体的问题，就是很好的开始。"
              : "You do not need a complete specification. One concrete problem is a good place to start."
          }}
        </p>
        <div class="ac-actions">
          <RouterLink class="ac-button" to="/contact"
            >{{ zh ? "聊聊业务需求" : "Let’s talk business" }} →</RouterLink
          ><RouterLink class="ac-link" to="/cases"
            >{{
              zh ? "先看看业务场景" : "Explore business scenarios"
            }}
            ↗</RouterLink
          >
        </div>
      </div>
    </section>
  </article>
</template>
<script setup lang="ts">
import DocsLinks from "../components/DocsLinks.vue";
import { computed } from "vue";
import { useI18n } from "vue-i18n";
const { locale } = useI18n();
const zh = computed(() => locale.value !== "en");
const t = (pair: string[]) => pair[zh.value ? 0 : 1];
const needs = [
  {
    title: ["客户关系，少一点断点。", "Keep customer context connected."],
    text: [
      "客户资料、沟通记录与跟进事项，怎样让团队接得上？从工作方式与数据边界开始梳理。",
      "How can the team connect customer details, conversations and follow-ups? Start with workflows and data boundaries.",
    ],
    to: "/products/crm",
  },
  {
    title: ["内容协作，多一点条理。", "Give content work more structure."],
    text: [
      "素材怎么找、内容怎么组织、团队怎么协作？先把重复工作看清，再讨论工具与 AI。",
      "How do you find assets, organize content and work together? Understand repeat work before choosing tools and AI.",
    ],
    to: "/products/mediax",
  },
  {
    title: [
      "企业应用，留出扩展空间。",
      "Give enterprise applications room to grow.",
    ],
    text: [
      "身份、权限、插件与集成怎样连接？用开放底座和工程实践，评估合适的落地路径。",
      "How do identity, permissions, plugins and integrations connect? Explore a practical path with an open foundation and engineering expertise.",
    ],
    to: "/services",
  },
];
const process = [
  {
    title: ["理解现状", "Understand"],
    text: [
      "确定业务问题、使用者与约束。",
      "Identify the problem, users and constraints.",
    ],
  },
  {
    title: ["明确范围", "Define"],
    text: [
      "对齐试点范围、依赖与验收方式。",
      "Agree on a pilot, dependencies and acceptance criteria.",
    ],
  },
  {
    title: ["协作交付", "Build"],
    text: [
      "按约定里程碑实现、验证与反馈。",
      "Implement, validate and review against agreed milestones.",
    ],
  },
  {
    title: ["持续演进", "Evolve"],
    text: [
      "根据实际使用，再决定下一步投入。",
      "Let real usage guide the next investment.",
    ],
  },
];
</script>
<style scoped>
.home-hero {
  background:
    radial-gradient(ellipse at 85% 45%, #e8eefb, transparent 50%),
    linear-gradient(120deg, #fcfdfa, #f1f7f5);
  overflow: hidden;
}
.home-hero-grid {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  align-items: center;
  gap: 30px;
  min-height: 660px;
  padding-block: 65px;
}
.home-hero h1 {
  font-size: clamp(40px, 4.8vw, 68px);
  line-height: 1.22;
  white-space: pre-line;
  max-width: 730px;
  margin-bottom: 25px;
}
.home-hero .ac-lead {
  font-size: 16px;
  max-width: 570px;
}
.home-footnote {
  font-size: 11px;
  color: #5f7168;
  margin-top: 28px;
}
.home-art {
  height: 440px;
  position: relative;
  isolation: isolate;
}
.home-loop {
  position: absolute;
  width: 400px;
  height: 400px;
  right: -20px;
  top: 10px;
  border: 55px solid #9fc4d5;
  border-radius: 50%;
  transform: rotate(-35deg) scaleY(0.7);
  background: #edf5f9;
  box-shadow:
    inset 10px 10px 22px #8399b431,
    10px 20px 45px #7c99af21;
}
.home-loop:after {
  content: "";
  position: absolute;
  inset: -55px;
  border-radius: 50%;
  border: 55px solid transparent;
  border-top-color: #bdc0ec;
  border-left-color: #89c5c5;
  filter: blur(5px);
  opacity: 0.75;
}
.home-tile {
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 18px;
  width: 180px;
  height: 215px;
  border: 1px solid #fff;
  border-radius: 19px;
  background: linear-gradient(130deg, #ffffffed, #ffffff87);
  box-shadow: 0 17px 35px #5a789b1a;
  backdrop-filter: blur(12px);
  padding: 26px;
  font-size: 21px;
  color: #546d69;
}
.home-tile > span {
  font-size: 10px;
  color: #5f7168;
}
.home-tile i {
  display: block;
  width: 100%;
  height: 4px;
  border-radius: 8px;
  background: #c5d8d4;
}
.home-tile i:last-child {
  width: 60%;
  background: #dce7df;
}
.tile-one {
  left: 0;
  top: 30px;
  transform: rotate(-8deg);
}
.tile-two {
  left: 125px;
  top: 95px;
  transform: rotate(3deg);
  color: #65718c;
}
.tile-three {
  right: -12px;
  top: 165px;
  transform: rotate(11deg);
  color: #64785f;
}
.home-value {
  border-top: 2px solid #d4e6d9;
}
.home-value p {
  min-height: 104px;
}
.home-product-grid {
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: 24px;
}
.home-feature {
  display: block;
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, #eef5fc, #ebf5f1);
  border: 1px solid #dce7e2;
  border-radius: 18px;
  padding: 42px;
  min-height: 430px;
  color: #2b4539;
}
.home-feature:hover,
.home-small-product:hover {
  text-decoration: none;
  border-color: #9dbfa9;
}
.home-feature h3 {
  font-size: 42px;
  margin-bottom: 15px;
}
.home-feature p {
  max-width: 330px;
  position: relative;
  z-index: 1;
}
.feature-orb {
  position: absolute;
  width: 230px;
  height: 230px;
  bottom: -60px;
  right: -35px;
  background: linear-gradient(135deg, #c0e5e8, #a4a5d5 50%, #71b1b3);
  border-radius: 50%;
  box-shadow: inset 15px 15px 25px #ffffffaa;
}
.home-product-stack {
  display: grid;
  gap: 22px;
}
.home-small-product {
  display: block;
  position: relative;
  background: #fff;
  border: 1px solid #e1e8e1;
  border-radius: 16px;
  padding: 26px 30px;
  color: #2b4539;
}
.home-small-product h3 {
  font-size: 26px;
  margin-bottom: 10px;
}
.home-small-product .ac-pill {
  margin-bottom: 12px;
}
.home-small-product p {
  font-size: 13px;
  margin-bottom: 0;
  max-width: 370px;
}
.home-small-product > span:last-child {
  position: absolute;
  right: 25px;
  top: 32px;
  color: #6f997e;
}
.home-open-row {
  display: flex;
  align-items: center;
  gap: 30px;
  flex-wrap: wrap;
  border-top: 1px solid #dfe7df;
  margin-top: 35px;
  padding-top: 25px;
  font-size: 12px;
  color: #5f7168;
}
.home-open-row > span {
  margin-right: auto;
}
.home-process {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 0;
  list-style: none;
  gap: 35px;
  margin: 45px 0 0;
}
.home-process li {
  border-top: 1px solid #d6e2d8;
  padding-top: 23px;
}
.home-process li > span {
  font-size: 11px;
  color: #5f7168;
  display: block;
  margin-bottom: 24px;
}
.home-process h3 {
  font-size: 20px;
}
.home-process p {
  font-size: 13px;
}
.home-last {
  padding-bottom: 85px;
}
@media (max-width: 1000px) {
  .home-hero-grid {
    grid-template-columns: 1.1fr 1fr;
  }
  .home-art {
    transform: scale(0.8);
    transform-origin: right center;
    margin-left: -80px;
  }
  .home-process {
    gap: 20px;
  }
  .home-feature {
    padding: 30px;
  }
}
@media (max-width: 720px) {
  .home-hero-grid {
    grid-template-columns: 1fr;
    padding-block: 55px 20px;
    gap: 0;
  }
  .home-hero h1 {
    font-size: clamp(36px, 8.5vw, 52px);
  }
  .home-art {
    width: 330px;
    max-width: 100%;
    height: 360px;
    margin: 0 auto;
    transform: scale(0.85);
    transform-origin: center;
  }
  .home-loop {
    width: 310px;
    height: 310px;
    right: 0;
  }
  .home-tile {
    width: 150px;
    height: 185px;
    padding: 20px;
    font-size: 19px;
  }
  .tile-two {
    left: 95px;
    top: 90px;
  }
  .tile-three {
    right: -10px;
    top: 160px;
  }
  .home-product-grid {
    grid-template-columns: 1fr;
  }
  .home-feature {
    min-height: 340px;
  }
  .home-process {
    grid-template-columns: 1fr 1fr;
    gap: 25px;
  }
  .home-value p {
    min-height: 0;
  }
  .home-open-row {
    gap: 18px;
  }
  .home-open-row > span {
    flex-basis: 100%;
  }
  .home-last {
    padding-bottom: 55px;
  }
}
</style>
