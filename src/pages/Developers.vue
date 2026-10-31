<template>
  <article class="ac-page">
    <section class="ac-hero">
      <div class="ac-wrap">
        <p class="ac-kicker">FOR DEVELOPERS</p>
        <h1>
          {{
            zh
              ? "开放连接，\n从可靠的入口开始。"
              : "Open connections.\nStart at the source."
          }}
        </h1>
        <p class="ac-lead">
          {{
            zh
              ? "这里连接现有文档与公开源码，不再复制一套可能过期的技术说明。选择你的方向，再到项目文档里确认版本、限制与接入方式。"
              : "Find existing documentation and public source code without duplicating technical instructions that may go stale. Choose a direction, then check versions, limitations and setup in the project documentation."
          }}
        </p>
      </div>
    </section>
    <section class="ac-wrap ac-section">
      <div class="developer-grid">
        <div
          class="ac-card developer-card"
          v-for="item in resources"
          :key="item.name"
        >
          <span class="ac-pill">{{ t(item.category) }}</span>
          <h2>{{ item.name }}</h2>
          <p>{{ t(item.text) }}</p>
          <div class="developer-links">
            <a
              v-for="link in item.links"
              :key="link.href"
              :href="link.href"
              target="_blank"
              rel="noopener noreferrer"
              >{{ t(link.label) }} <span aria-hidden="true">↗</span></a
            >
          </div>
          <p class="ac-note">{{ t(item.note) }}</p>
        </div>
      </div>
    </section>
    <section class="ac-soft">
      <div class="ac-wrap ac-section">
        <div class="ac-heading">
          <h2>
            {{
              zh
                ? "接入之前，\n先确认这些。"
                : "Before integrating,\ncheck the boundaries."
            }}
          </h2>
          <p>
            {{
              zh
                ? "公开源码不是完成业务验收的证明，README 里的示例也不等于你的生产配置。"
                : "Public source code is not proof of business acceptance. README examples are not your production configuration."
            }}
          </p>
        </div>
        <div class="ac-grid">
          <div v-for="(item, i) in checks" :key="i">
            <span class="ac-number">0{{ i + 1 }}</span>
            <h3>{{ t(item.title) }}</h3>
            <p>{{ t(item.text) }}</p>
          </div>
        </div>
      </div>
    </section>
    <section class="ac-wrap ac-section">
      <div class="ac-callout">
        <h2>
          {{
            zh
              ? "技术问题，放回业务场景里讨论。"
              : "Put the technical question in business context."
          }}
        </h2>
        <p class="ac-lead">
          {{
            zh
              ? "如果你需要集成评估或定制开发，可以带上系统现状、接口边界与希望完成的目标。请勿在需求摘要中粘贴密钥或敏感数据。"
              : "For integration assessment or custom work, bring the current system context, interface boundaries and desired outcome. Do not include secrets or sensitive data in an inquiry brief."
          }}
        </p>
        <div class="ac-actions">
          <RouterLink class="ac-button" to="/contact"
            >{{
              zh ? "讨论集成需求" : "Discuss integration needs"
            }}
            →</RouterLink
          ><RouterLink class="ac-link" to="/services"
            >{{
              zh ? "了解服务与交付" : "Explore services & delivery"
            }}
            ↗</RouterLink
          >
        </div>
      </div>
    </section>
  </article>
</template>
<script setup lang="ts">
import { docsUrl } from "../site-config";
import { computed } from "vue";
import { useI18n } from "vue-i18n";
const { locale } = useI18n();
const zh = computed(() => locale.value !== "en");
const t = (x: string[]) => x[zh.value ? 0 : 1];
const resources = [
  {
    name: "PowerX",
    category: ["企业 AI 与插件底座", "Enterprise AI & plugin foundation"],
    text: [
      "面向企业 AI 应用与插件生态的 AgentOS 底座。查看身份权限、插件运行、网关、任务调度与 AI/知识工作面的项目说明。",
      "An AgentOS foundation for enterprise AI applications and a plugin ecosystem. Explore identity, plugin runtime, gateways, scheduling and AI/knowledge workspaces.",
    ],
    links: [
      {
        label: ["插件开发文档", "Plugin development docs"],
        href: docsUrl("/zh/developers/"),
      },
      {
        label: ["公开源码", "Public source"],
        href: "https://github.com/ArtisanCloud/PowerX",
      },
    ],
    note: [
      "部分能力仍为 Beta，具体成熟度、许可与接入要求以项目说明为准。",
      "Some capabilities remain Beta. Check the project for maturity, licensing and integration requirements.",
    ],
  },
  {
    name: "PowerWeChat",
    category: ["Go 开发工具", "Go developer toolkit"],
    text: [
      "面向微信公众号、小程序、企业微信与支付相关集成的 Go SDK。用官方文档和教程确认对应接口与配置。",
      "A Go SDK for integrations involving WeChat official accounts, mini-programs, WeCom and payments. Check the relevant APIs and configuration in its documentation and tutorials.",
    ],
    links: [
      {
        label: ["开始使用", "Getting started"],
        href: "https://powerwechat.artisan-cloud.com/zh/start/",
      },
      {
        label: ["公开源码", "Public source"],
        href: "https://github.com/ArtisanCloud/PowerWeChat",
      },
      {
        label: ["教程示例", "Tutorial examples"],
        href: "https://github.com/ArtisanCloud/power-wechat-tutorial",
      },
    ],
    note: [
      "文档入口为现有中文站点；具体平台权限与接口支持以微信官方要求和项目版本为准。",
      "The documentation link opens the existing Chinese site. Platform permissions and API support depend on WeChat requirements and the project version.",
    ],
  },
];
const checks = [
  {
    title: ["版本与成熟度", "Version & maturity"],
    text: [
      "固定依赖与接口版本，阅读当前限制；不要从截图推断功能已通过业务验收。",
      "Pin dependencies and API versions and read current limitations. A screenshot does not prove a workflow has passed acceptance.",
    ],
  },
  {
    title: ["权限与数据边界", "Permissions & data"],
    text: [
      "先确认调用方身份、租户范围、数据来源与密钥管理，再进行真实系统接入。",
      "Confirm caller identity, tenant scope, data sources and secret management before connecting real systems.",
    ],
  },
  {
    title: ["验证与运行责任", "Validation & ownership"],
    text: [
      "用测试环境验证失败、重试与回退路径，并确认谁负责运行、升级与支持。",
      "Test failures, retries and fallback paths in a test environment, and agree on operating, upgrade and support ownership.",
    ],
  },
];
</script>
<style scoped>
.developer-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 25px;
}
.developer-card {
  display: flex;
  flex-direction: column;
  background: linear-gradient(140deg, #fff, #f7faf8);
  padding: 40px;
}
.developer-card h2 {
  font-size: 34px;
}
.developer-card > p:not(.ac-note) {
  min-height: 100px;
}
.developer-links {
  display: flex;
  flex-direction: column;
  gap: 0;
  margin-top: auto;
}
.developer-links a {
  display: flex;
  justify-content: space-between;
  padding: 15px 0;
  border-top: 1px solid #dfe8e1;
  font-size: 14px;
}
.developer-card .ac-note {
  margin: 22px 0 0;
  font-size: 11px;
}
@media (max-width: 700px) {
  .developer-grid {
    grid-template-columns: 1fr;
  }
  .developer-card {
    padding: 27px;
  }
  .developer-card > p:not(.ac-note) {
    min-height: 0;
  }
}
</style>
