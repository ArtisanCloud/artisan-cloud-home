// 案例数据模块
// 用途：用于 /cases 列表与 /cases/:slug 详情渲染

export type Case = {
  slug: string;             // URL 标识
  clientName: { zh: string; en: string };       // 客户名称
  industry: { zh: string; en: string };         // 行业
  title: { zh: string; en: string };            // 标题
  summary: { zh: string; en: string };          // 摘要
  challenge: { zh: string; en: string };        // 挑战/痛点
  solution: { zh: string; en: string };         // 方案
  results: { zh: string[]; en: string[] };        // 效果指标
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
    slug: "pawx-marketing-agent",
    clientName: { 
      zh: "数字营销机构", 
      en: "Digital Marketing Agency" 
    },
    industry: { zh: "广告营销", en: "Advertising & Marketing" },
    title: { 
      zh: "PawX 营销人的智能体", 
      en: "PawX: The Marketer's Agent" 
    },
    summary: { 
      zh: "基于 PowerX + MediaX 定制的智能体，专为营销人与广告人打造，实现从洞察到投放的全链路自动化。", 
      en: "A customized agent based on PowerX + MediaX, designed for marketers and advertisers to automate the entire link from insight to delivery." 
    },
    challenge: { 
      zh: "传统营销面临创意产出不稳定、投放渠道分散、数据回流割裂等痛点，难以形成高效闭环，人工成本高昂。", 
      en: "Traditional marketing faces pain points such as unstable creative output, fragmented delivery channels, and disjointed data feedback, making it difficult to form an efficient closed loop with high labor costs." 
    },
    solution: { 
      zh: "深度整合 PowerX 的业务编排能力与 MediaX 的多模态内容矩阵能力，构建懂策略、会执行的专业智能体助手。", 
      en: "Deeply integrating PowerX's business orchestration capabilities and MediaX's multi-modal content matrix capabilities to build a professional agent assistant that understands strategy and execution." 
    },
    results: {
      zh: [
        "创意生产效率提升 500%",
        "全渠道一键分发与排程",
        "营销 ROI 实时监控与优化"
      ],
      en: [
        "Creative production efficiency increased by 500%",
        "Omni-channel one-click distribution and scheduling",
        "Real-time marketing ROI monitoring and optimization"
      ]
    },
    testimonial: {
      author: "首席营销官 (CMO)",
      role: { zh: "数字营销部门", en: "Digital Marketing Dept" },
      content: { 
        zh: "PawX 就像是我们团队里不知疲倦的超级员工，它让创意落地变得前所未有的简单和精准。", 
        en: "PawX is like a tireless super employee in our team, making creative execution simpler and more precise than ever before." 
      }
    },
    tags: { 
      zh: ["营销自动化", "内容矩阵", "全链路"], 
      en: ["Marketing Automation", "Content Matrix", "Full-link"] 
    },
    relatedProducts: ["powerx-base", "mediax"]
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