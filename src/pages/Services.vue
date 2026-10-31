<template>
  <article class="ac-page">
    <section class="ac-hero">
      <div class="ac-wrap">
        <p class="ac-kicker">SERVICES & DELIVERY</p>
        <h1>
          {{
            zh
              ? "把想法讲清楚，\n把下一步做扎实。"
              : "Make the idea clear.\nMake the next step count."
          }}
        </h1>
        <p class="ac-lead">
          {{
            zh
              ? "从一个业务问题出发，梳理范围、连接产品与工程，再按可以验证的步骤交付。不先许诺一个庞大的系统，先找到值得落地的起点。"
              : "Start with a business problem. Define the scope, connect products with engineering and deliver in verifiable steps. Find a useful starting point before promising a large system."
          }}
        </p>
        <div class="ac-actions">
          <RouterLink class="ac-button" to="/contact"
            >{{ zh ? "讨论你的项目" : "Discuss your project" }} →</RouterLink
          ><a class="ac-link" href="#delivery"
            >{{ zh ? "了解交付过程" : "See the delivery process" }} ↓</a
          >
        </div>
      </div>
    </section>
    <section class="ac-wrap ac-section">
      <div class="ac-heading">
        <h2>
          {{
            zh
              ? "选择适合你的\n合作起点。"
              : "Choose the right\nstarting point."
          }}
        </h2>
        <p>
          {{
            zh
              ? "以下是可讨论的合作方向。最终范围、费用、排期与维护责任，需在项目评估后共同约定。"
              : "These are areas we can discuss. Scope, fees, scheduling and maintenance responsibilities are agreed after assessment."
          }}
        </p>
      </div>
      <div class="ac-grid">
        <div v-for="(s, i) in services" :key="i" class="ac-card">
          <span class="ac-number">0{{ i + 1 }}</span>
          <h3>{{ t(s.title) }}</h3>
          <p>{{ t(s.text) }}</p>
          <ul class="service-list">
            <li v-for="(item, j) in s.items" :key="j">{{ t(item) }}</li>
          </ul>
        </div>
      </div>
    </section>
    <section id="delivery" class="ac-soft">
      <div class="ac-wrap ac-section">
        <div class="ac-heading">
          <h2>
            {{
              zh
                ? "每一步，都有\n共同确认的依据。"
                : "A shared checkpoint\nat every step."
            }}
          </h2>
          <p>
            {{
              zh
                ? "用业务目标驱动工作，围绕明确的里程碑协作。具体范围、周期与费用在项目评估后共同确认。"
                : "Let business goals drive the work, with clear milestones along the way. Agree on scope, timing and fees after assessing the project."
            }}
          </p>
        </div>
        <ol class="delivery-list">
          <li v-for="(step, i) in delivery" :key="i">
            <span class="delivery-number">0{{ i + 1 }}</span>
            <div>
              <h3>{{ t(step.title) }}</h3>
              <p>{{ t(step.text) }}</p>
            </div>
            <div class="delivery-output">
              <small>{{ zh ? "建议共同确认" : "Suggested checkpoint" }}</small>
              <p>{{ t(step.output) }}</p>
            </div>
          </li>
        </ol>
      </div>
    </section>
    <section class="ac-wrap ac-section">
      <div class="services-boundaries">
        <div>
          <p class="ac-kicker">CLEAR FROM THE START</p>
          <h2>
            {{
              zh
                ? "好的合作，\n从边界清楚开始。"
                : "Good collaboration\nstarts with clear boundaries."
            }}
          </h2>
          <p class="ac-lead">
            {{
              zh
                ? "涉及企业数据、系统账号与外部消息的工作，需要明确权限与负责人。AI 的建议，也不应替代必要的业务判断。"
                : "Work involving business data, system access and external messages needs clear permissions and owners. AI suggestions should not replace necessary business judgment."
            }}
          </p>
        </div>
        <div class="boundary-list">
          <details v-for="(item, i) in boundaries" :key="i" :open="i === 0">
            <summary>{{ t(item.title) }}</summary>
            <p>{{ t(item.text) }}</p>
          </details>
        </div>
      </div>
    </section>
    <section class="ac-wrap services-last">
      <div class="ac-callout">
        <h2>
          {{
            zh
              ? "先告诉我们，你想改变什么。"
              : "Tell us what you want to change."
          }}
        </h2>
        <p class="ac-lead">
          {{
            zh
              ? "可以从现状、目标和约束开始。联系页可以帮你整理一份需求摘要，再由你决定是否发送。"
              : "Start with your current workflow, goals and constraints. Our contact page helps you prepare a brief that you decide whether to send."
          }}
        </p>
        <div class="ac-actions">
          <RouterLink class="ac-button" to="/contact"
            >{{
              zh ? "整理需求，开始沟通" : "Prepare a brief & connect"
            }}
            →</RouterLink
          >
        </div>
      </div>
    </section>
  </article>
</template>
<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";
const { locale } = useI18n();
const zh = computed(() => locale.value !== "en");
const t = (x: string[]) => x[zh.value ? 0 : 1];
const services = [
  {
    title: ["业务梳理与试点规划", "Discovery & pilot planning"],
    text: [
      "从真实工作流程里找问题，确定第一步值得验证什么。",
      "Find the problem in real workflows and decide what is worth testing first.",
    ],
    items: [
      ["梳理角色、任务与数据来源", "Map roles, tasks and data sources"],
      [
        "识别现有系统与接入约束",
        "Identify systems and integration constraints",
      ],
      ["讨论试点范围与验收标准", "Discuss pilot scope and acceptance criteria"],
    ],
  },
  {
    title: ["产品配置与系统集成", "Product setup & integration"],
    text: [
      "评估现有产品、插件与开放接口怎样服务业务，而不是为接入而接入。",
      "Assess how products, plugins and open interfaces can serve the business—not integration for its own sake.",
    ],
    items: [
      ["产品与插件适配评估", "Assess product and plugin fit"],
      [
        "身份、权限与接口边界",
        "Define identity, access and interface boundaries",
      ],
      ["验证数据流与关键操作", "Validate data flows and key operations"],
    ],
  },
  {
    title: ["定制开发与持续演进", "Custom engineering & evolution"],
    text: [
      "现有能力不能覆盖的部分，再明确开发范围与后续维护方式。",
      "Where existing capabilities fall short, define custom work and an ongoing maintenance approach.",
    ],
    items: [
      ["按约定范围实现与验证", "Build and validate the agreed scope"],
      ["交接文档与使用说明", "Prepare handover documentation"],
      ["根据反馈规划后续迭代", "Plan subsequent iterations from feedback"],
    ],
  },
];
const delivery = [
  {
    title: ["一起理解现状", "Understand the current workflow"],
    text: [
      "确认谁在使用、什么工作最耗时、哪些数据与系统已经存在。",
      "Identify users, friction and the data and systems already in place.",
    ],
    output: [
      "问题清单、约束与主要负责人",
      "Problem statement, constraints and primary owner",
    ],
  },
  {
    title: ["把试点范围定下来", "Agree on a bounded pilot"],
    text: [
      "先做一个能被观察和判断的范围，而不是一次承诺全部自动化。",
      "Choose a scope that can be observed and evaluated—not a promise to automate everything.",
    ],
    output: [
      "范围、依赖、排期与验收方式",
      "Scope, dependencies, schedule and acceptance criteria",
    ],
  },
  {
    title: ["实现、验证、反馈", "Build, validate and review"],
    text: [
      "围绕里程碑验证关键流程；涉及真实数据与外部执行，先确认授权。",
      "Validate key flows against milestones. Confirm authorization before using real data or taking external actions.",
    ],
    output: [
      "演示记录、问题清单与修订决定",
      "Demo notes, issue list and revision decisions",
    ],
  },
  {
    title: ["交接，并决定下一步", "Handover and plan the next step"],
    text: [
      "明确交付内容、运行责任与后续支持，再根据实际使用决定如何扩展。",
      "Clarify deliverables, operational ownership and support, then use actual experience to guide expansion.",
    ],
    output: [
      "交接清单、运行责任与后续计划",
      "Handover checklist, operating responsibilities and next steps",
    ],
  },
];
const boundaries = [
  {
    title: ["数据与账号由谁管理？", "Who owns data and accounts?"],
    text: [
      "数据来源、访问范围、密钥管理与保留周期，需要在接入前确认。不会要求把企业密钥直接填写在官网需求摘要中。",
      "Agree on data sources, access scope, secret management and retention before integration. Do not put enterprise secrets in the website inquiry brief.",
    ],
  },
  {
    title: [
      "部署、维护与支持如何约定？",
      "How are deployment and support defined?",
    ],
    text: [
      "部署环境、域名、证书、监控、升级与支持时段都属于需要明确的责任项；本页不承诺默认 SLA 或全天候支持。",
      "Environment, domain, certificates, monitoring, upgrades and support hours need named owners. This page does not promise a default SLA or round-the-clock support.",
    ],
  },
  {
    title: ["AI 与自动化怎样验收？", "How do we evaluate AI and automation?"],
    text: [
      "结合场景确认测试样本、错误处理、人工确认与回退方式。效果以双方认可的实际验收为准，不以演示或功能清单替代。",
      "Agree on test examples, error handling, human review and fallback paths. Evaluate actual outcomes with shared criteria, not demos or feature lists alone.",
    ],
  },
];
</script>
<style scoped>
#delivery {
  scroll-margin-top: 90px;
}
.service-list {
  list-style: none;
  padding: 15px 0 0;
  margin: 20px 0 0;
  border-top: 1px solid #e1e9e2;
}
.service-list li {
  font-size: 13px;
  color: #688072;
  padding: 8px 0;
}
.service-list li:before {
  content: "—";
  margin-right: 10px;
  color: #5f7168;
}
.delivery-list {
  list-style: none;
  margin: 0;
  padding: 0;
}
.delivery-list li {
  display: grid;
  grid-template-columns: 55px 1.3fr 1fr;
  gap: 35px;
  border-top: 1px solid #dce5dd;
  padding: 32px 0;
}
.delivery-number {
  font-size: 12px;
  color: #5f7168;
  padding-top: 5px;
}
.delivery-list h3 {
  font-size: 23px;
}
.delivery-list p {
  font-size: 14px;
  margin-bottom: 0;
}
.delivery-output {
  border-left: 1px solid #dfe7df;
  padding-left: 32px;
}
.delivery-output small {
  font-size: 10px;
  color: #5f7168;
}
.delivery-output p {
  font-size: 13px;
  margin-top: 12px;
}
.services-boundaries {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 70px;
}
.boundary-list details {
  border-bottom: 1px solid #dfe8e1;
}
.boundary-list summary {
  cursor: pointer;
  font-size: 17px;
  padding: 23px 0;
  line-height: 1.5;
}
.boundary-list p {
  font-size: 13px;
}
.services-last {
  padding-bottom: 85px;
}
@media (max-width: 720px) {
  .delivery-list li {
    grid-template-columns: 30px 1fr;
    gap: 20px;
  }
  .delivery-output {
    grid-column: 2;
    padding-left: 0;
    border-left: 0;
    padding-top: 10px;
  }
  .services-boundaries {
    grid-template-columns: 1fr;
    gap: 25px;
  }
  .services-last {
    padding-bottom: 55px;
  }
}
</style>
