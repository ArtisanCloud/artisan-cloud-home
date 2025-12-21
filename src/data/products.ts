// 产品数据模块
// 用途：用于 /products 列表与 /products/:slug 详情渲染

export type Product = {
  slug: string;           // URL 标识
  name: { zh: string; en: string };           // 产品名称
  tagline: { zh: string; en: string };        // 一句话价值主张
  description: { zh: string; en: string };    // 简短介绍
  features: { zh: string[]; en: string[] };     // 功能要点
  highlights?: { zh: string[]; en: string[] };  // 亮点标签
  heroImage?: string;     // 头图/插画
  cta?: { zh: string; en: string };           // 行动文案
};

export const products: Product[] = [
  {
    slug: "powerx-base",
    name: {
      zh: "PowerX 智能体底座",
      en: "PowerX Agent Base"
    },
    tagline: {
      zh: "企业级多智能体编排与执行内核",
      en: "Enterprise multi-agent orchestration and execution kernel"
    },
    description: {
      zh: "支持工具调用、记忆、上下文路由与并行工作流，帮助企业快速搭建稳定可控的业务智能体。",
      en: "Supports tool calling, memory, context routing, and parallel workflows to help enterprises quickly build stable and controllable business agents."
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
    heroImage: "/images/products/px-home.png",
    cta: { zh: "申请演示", en: "Request Demo" }
  },
  {
    slug: "mediax",
    name: {
      zh: "MediaX 自媒体营销智能体系统",
      en: "MediaX Social Media Marketing Agent System"
    },
    tagline: {
      zh: "多渠道内容生成与排产投放的智能化引擎",
      en: "Intelligent engine for multi-channel content generation and scheduling"
    },
    description: {
      zh: "支持图文/视频/多语言内容生成与渠道排程，提升内容生产与分发效率，打造自动化媒体矩阵。",
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
        heroImage: "/images/products/media-x-matrix.png",
        cta: { zh: "预约体验", en: "Schedule Experience" }
      },
      {
        slug: "scrm",
        name: { 
          zh: "SCRM 智能体客域系统", 
          en: "SCRM Agent Customer Domain System" 
        },
        tagline: { 
          zh: "覆盖营销/销售/运营的端到端智能体解决方案", 
          en: "End-to-end agent solution covering marketing, sales and operations" 
        },
        description: { 
          zh: "打通私域流量与客户关系管理，提供线索处理、自动化运营与精细化客户画像，助力销售转化。", 
          en: "Connects private domain traffic with CRM, providing lead processing, automated operations, and detailed customer profiling to boost sales conversion." 
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
        heroImage: "/images/products/scrm-customer.png",
        cta: { zh: "联系咨询", en: "Contact Consultation" }
      },
      {
        slug: "mall",
        name: { 
          zh: "智能电商分销多商户系统", 
          en: "Intelligent E-commerce Distribution Multi-merchant System" 
        },
        tagline: { 
          zh: "赋能商业增长的数字化电商生态平台", 
          en: "Digital e-commerce ecosystem platform empowering business growth" 
        },
        description: { 
          zh: "支持多商户入驻、裂变分销、直播带货与全渠道订单管理，构建完整的电商交易闭环。", 
          en: "Supports multi-merchant entry, viral distribution, live streaming sales, and omni-channel order management to build a complete e-commerce transaction loop." 
        },
        features: {
          zh: [
            "多商户/多门店管理体系",
            "三级分销与裂变营销工具",
            "全渠道订单统一处理中心",
            "会员积分与权益体系",
            "高并发秒杀与促销引擎"
          ],
          en: [
            "Multi-merchant/Multi-store management system",
            "Three-tier distribution and viral marketing tools",
            "Omni-channel unified order processing center",
            "Member points and rights system",
            "High-concurrency flash sale and promotion engine"
          ]
        },
        highlights: { 
          zh: ["多商户支持", "裂变分销", "全渠道订单"], 
          en: ["Multi-merchant", "Viral Distribution", "Omni-channel"] 
        },
        heroImage: "/images/products/ecommerce-spu.png",
        cta: { zh: "获取方案", en: "Get Solution" }
      }];

// 查询工具方法

/** 根据 slug 获取产品 */
export function getProductBySlug(slug: string): Product | undefined {
  return products.find(p => p.slug === slug);
}

/** 获取产品列表（可用于列表页） */
export function listProducts(): Product[] {
  return products;
}
