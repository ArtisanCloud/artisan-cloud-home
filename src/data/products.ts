// 产品数据模块（占位数据+类型与查询方法）
// 用途：用于 /products 列表与 /products/:slug 详情渲染
// 说明：后续可将图片、文案替换为真实内容

export type Product = {
  slug: string;           // URL 标识
  name: { zh: string; en: string };           // 产品名称
  tagline: { zh: string; en: string };        // 一句话价值主张
  description: { zh: string; en: string };    // 简短介绍
  features: { zh: string[]; en: string[] };     // 功能要点（用于详情页功能清单）
  highlights?: { zh: string[]; en: string[] };  // 亮点标签（用于卡片展示）
  heroImage?: string;     // 头图/插画（可选）
  cta?: { zh: string; en: string };           // 行动文案
};

export const products: Product[] = [
  {
    slug: "corex",
    name: { 
      zh: "CoreX · 智能体引擎", 
      en: "CoreX · Agent Engine" 
    },
    tagline: { 
      zh: "面向生产的多智能体编排与执行内核", 
      en: "Production-ready multi-agent orchestration and execution kernel" 
    },
    description: { 
      zh: "支持工具调用、记忆、上下文路由与并行工作流，帮助企业快速搭建稳定可控的业务智能体。", 
      en: "Supports tool calling, memory, context routing and parallel workflows to help enterprises quickly build stable and controllable business agents." 
    },
    features: {
      zh: [
        "可视化编排：节点/边驱动的工作流，所见即所得",
        "多模型/多Agent 协作：角色化、路由与仲裁",
        "函数/插件/数据库 等工具化接入",
        "观测与回放：全链路日志、指标与沙盒回放",
        "企业级容错与限流：重试、超时、补偿策略"
      ],
      en: [
        "Visual orchestration: Node/edge-driven workflows, WYSIWYG",
        "Multi-model/multi-agent collaboration: Role-based, routing and arbitration",
        "Tool integration: Functions, plugins, databases",
        "Observability and replay: Full-chain logs, metrics and sandbox replay",
        "Enterprise-grade fault tolerance: Retry, timeout, compensation strategies"
      ]
    },
    highlights: { 
      zh: ["企业级容错", "强可观测", "低代码扩展"], 
      en: ["Enterprise Fault Tolerance", "Strong Observability", "Low-code Extension"] 
    },
    heroImage: "/images/products/corex-hero.png",
    cta: { zh: "申请演示", en: "Request Demo" }
  },
  {
    slug: "powerx",
    name: { 
      zh: "PowerX · 业务中台智能体", 
      en: "PowerX · Business Platform Agent" 
    },
    tagline: { 
      zh: "覆盖营销/销售/运营的端到端智能体解决方案", 
      en: "End-to-end agent solution covering marketing, sales and operations" 
    },
    description: { 
      zh: "与 CRM/ERP 等系统深度集成，提供线索处理、内容生成、自动化运营等智能能力。", 
      en: "Deep integration with CRM/ERP systems, providing intelligent capabilities for lead processing, content generation, and automated operations." 
    },
    features: {
      zh: [
        "线索解析与分发",
        "策略化跟进与任务编排",
        "内容生成与多维审核",
        "数据洞察与报表看板",
        "与现有中台/CRM 打通"
      ],
      en: [
        "Lead parsing and distribution",
        "Strategic follow-up and task orchestration",
        "Content generation and multi-dimensional review",
        "Data insights and reporting dashboards",
        "Integration with existing platforms/CRM"
      ]
    },
    highlights: { 
      zh: ["开箱即用", "可配置策略", "行业模板"], 
      en: ["Ready to Use", "Configurable Strategy", "Industry Templates"] 
    },
    heroImage: "/images/products/powerx-hero.png",
    cta: { zh: "联系咨询", en: "Contact Consultation" }
  },
  {
    slug: "mediax",
    name: { 
      zh: "MediaX · 媒体智能体", 
      en: "MediaX · Media Agent" 
    },
    tagline: { 
      zh: "多渠道内容生成与排产投放的智能化引擎", 
      en: "Intelligent engine for multi-channel content generation and scheduling" 
    },
    description: { 
      zh: "支持图文/视频/多语言内容生成与渠道排程，提升内容生产与分发效率。", 
      en: "Supports text/video/multilingual content generation and channel scheduling to improve content production and distribution efficiency." 
    },
    features: {
      zh: [
        "多渠道联动：公众号/短视频/站内外平台",
        "A/B 实验：标题与素材组合实验",
        "智能排产：时间窗、频率与节奏控制",
        "品牌语气一致性与合规检查",
        "多模态生成与审核流程"
      ],
      en: [
        "Multi-channel integration: WeChat, short videos, internal/external platforms",
        "A/B testing: Title and material combination experiments",
        "Smart scheduling: Time windows, frequency and rhythm control",
        "Brand tone consistency and compliance checking",
        "Multi-modal generation and review processes"
      ]
    },
    highlights: { 
      zh: ["规模化生成", "多模态", "一致性保障"], 
      en: ["Scalable Generation", "Multi-modal", "Consistency Assurance"] 
    },
    heroImage: "/images/products/mediax-hero.png",
    cta: { zh: "预约体验", en: "Schedule Experience" }
  },
  {
    slug: "powerwechat",
    name: { 
      zh: "PowerWechat · 企业微信智能体", 
      en: "PowerWechat · Enterprise WeChat Agent" 
    },
    tagline: { 
      zh: "连接企业微信生态的服务与运营智能体", 
      en: "Service and operation agent connecting WeChat Work ecosystem" 
    },
    description: { 
      zh: "覆盖私域运营、服务协同、数据洞察与自动化触达，沉淀客户资产并提升转化效率。", 
      en: "Covers private domain operations, service collaboration, data insights and automated outreach to accumulate customer assets and improve conversion efficiency." 
    },
    features: {
      zh: [
        "客户分层与触达策略",
        "服务闭环自动化（SOP/任务/提醒）",
        "内容物料中心与话术建议",
        "企业微信插件与接口深度集成",
        "数据看板与绩效指标"
      ],
      en: [
        "Customer segmentation and outreach strategies",
        "Service loop automation (SOP/tasks/reminders)",
        "Content material center and script suggestions",
        "Deep integration with WeChat Work plugins and APIs",
        "Data dashboards and performance metrics"
      ]
    },
    highlights: { 
      zh: ["生态深耕", "服务自动化", "可度量增长"], 
      en: ["Ecosystem Deep Dive", "Service Automation", "Measurable Growth"] 
    },
    heroImage: "/images/products/powerwechat-hero.png",
    cta: { zh: "获取方案", en: "Get Solution" }
  }
];

// 查询工具方法

/** 根据 slug 获取产品 */
export function getProductBySlug(slug: string): Product | undefined {
  return products.find(p => p.slug === slug);
}

/** 获取产品列表（可用于列表页） */
export function listProducts(): Product[] {
  return products;
}