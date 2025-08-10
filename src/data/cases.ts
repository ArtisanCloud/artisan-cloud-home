// 案例数据模块（占位数据+类型与查询方法）
// 用途：用于 /cases 列表与 /cases/:slug 详情渲染

export type Case = {
  slug: string;             // URL 标识
  clientName: { zh: string; en: string };       // 客户名称（可匿名化）
  industry: { zh: string; en: string };         // 行业
  title: { zh: string; en: string };            // 标题
  summary: { zh: string; en: string };          // 摘要
  challenge: { zh: string; en: string };        // 挑战/痛点
  solution: { zh: string; en: string };         // 方案（关联产品/能力）
  results: { zh: string[]; en: string[] };        // 效果指标（要点）
  testimonial?: {
    author: string;
    role?: { zh: string; en: string };
    content: { zh: string; en: string };
  };
  tags?: { zh: string[]; en: string[] };          // 标签
  relatedProducts?: string[]; // 关联产品 slug
};

export const cases: Case[] = [
  {
    slug: "retail-growth-agent",
    clientName: { 
      zh: "某头部新零售集团", 
      en: "Leading New Retail Group" 
    },
    industry: { zh: "新零售", en: "New Retail" },
    title: { 
      zh: "面向门店的增长型智能体，提升转化与复购", 
      en: "Growth-oriented Agent for Stores, Improving Conversion and Repurchase" 
    },
    summary: { 
      zh: "以 PowerX 与 CoreX 为内核，构建营销/运营一体化智能体，实现线索分发、A/B 话术与自动化触达闭环。", 
      en: "Built integrated marketing/operations agent with PowerX and CoreX core, achieving lead distribution, A/B scripts and automated outreach loop." 
    },
    challenge: { 
      zh: "多渠道线索质量不一、跟进不及时、门店运营动作难以标准化与度量。", 
      en: "Inconsistent multi-channel lead quality, untimely follow-ups, difficult to standardize and measure store operations." 
    },
    solution: { 
      zh: "基于 CoreX 的多 Agent 协同与可视化编排，串联线索解析、策略路由、内容生成与自动触达；以 PowerX 打通 CRM/企微，沉淀 SOP。", 
      en: "Multi-agent collaboration and visual orchestration based on CoreX, connecting lead parsing, strategy routing, content generation and automated outreach; PowerX integrates CRM/WeChat Work to accumulate SOPs." 
    },
    results: {
      zh: [
        "线索首次响应时延下降 62%",
        "转化率提升 18.5%",
        "门店运营动作数字化覆盖率 90%+"
      ],
      en: [
        "Lead first response time reduced by 62%",
        "Conversion rate increased by 18.5%",
        "Store operation digitization coverage 90%+"
      ]
    },
    testimonial: {
      author: "渠道运营负责人",
      role: { zh: "华东大区", en: "East China Region" },
      content: { 
        zh: "把'要做什么''为什么做'和'谁来做'都丢给智能体，团队执行节奏显著更稳。", 
        en: "Delegating 'what to do', 'why to do' and 'who does it' to agents, the team execution rhythm is significantly more stable." 
      }
    },
    tags: { 
      zh: ["线索运营", "SOP 自动化", "A/B 实验"], 
      en: ["Lead Operations", "SOP Automation", "A/B Testing"] 
    },
    relatedProducts: ["powerx", "corex"]
  },
  {
    slug: "media-intl-distribution",
    clientName: { 
      zh: "国际媒体品牌", 
      en: "International Media Brand" 
    },
    industry: { zh: "媒体/内容", en: "Media/Content" },
    title: { 
      zh: "多语言内容生成与排产投放的规模化自动化", 
      en: "Scalable Automation of Multilingual Content Generation and Scheduling" 
    },
    summary: { 
      zh: "以 MediaX 多模态能力，构建从生成、校对到多渠道排程的一体化智能体工作流。", 
      en: "Built integrated agent workflow from generation, proofreading to multi-channel scheduling with MediaX multi-modal capabilities." 
    },
    challenge: { 
      zh: "多语言多渠道发布节奏复杂，人工工作量大且一致性难保障。", 
      en: "Complex multi-language multi-channel publishing rhythm, heavy manual workload and difficult to ensure consistency." 
    },
    solution: { 
      zh: "MediaX 统一生成与质检规则，自动排程与渠道 API 打通，形成可观测闭环。", 
      en: "MediaX unified generation and quality control rules, automatic scheduling integrated with channel APIs, forming observable closed loop." 
    },
    results: {
      zh: [
        "内容产出效率提升 3.2x",
        "人工校对成本下降 55%",
        "品牌语气一致性得分提升 20%"
      ],
      en: [
        "Content output efficiency increased by 3.2x",
        "Manual proofreading costs reduced by 55%",
        "Brand tone consistency score improved by 20%"
      ]
    },
    tags: { 
      zh: ["多语言", "多渠道", "品牌一致性"], 
      en: ["Multilingual", "Multi-channel", "Brand Consistency"] 
    },
    relatedProducts: ["mediax"]
  }
];

// 查询工具方法

/** 根据 slug 获取案例 */
export function getCaseBySlug(slug: string): Case | undefined {
  return cases.find(c => c.slug === slug);
}

/** 获取案例列表 */
export function listCases(): Case[] {
  return cases;
}