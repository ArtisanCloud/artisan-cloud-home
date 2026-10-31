// These are illustrative solution scenarios, not published customer results.
// Retain the original PawX URL without repeating unverified metrics or quotes.
export type CaseCopy = { zh: string; en: string };
const copy = (zh: string, en: string): CaseCopy => ({ zh, en });
export type Case = {
  slug: string;
  category: CaseCopy;
  title: CaseCopy;
  summary: CaseCopy;
  challenge: CaseCopy;
  approach: CaseCopy;
  steps: { title: CaseCopy; description: CaseCopy }[];
  prerequisites: CaseCopy[];
  reviewQuestions: CaseCopy[];
  relatedProducts: { slug: string; name: string }[];
};

export const cases: Case[] = [
  {
    slug: "customer-follow-up",
    category: copy("客户协作", "Customer collaboration"),
    title: copy(
      "让下一次客户沟通，带着上下文开始。",
      "Start the next customer conversation with context.",
    ),
    summary: copy(
      "从零散记录到一份可讨论的跟进计划。先梳理信息与责任，再决定哪些环节值得自动化。",
      "Move from scattered notes to a follow-up plan your team can discuss. Clarify context and ownership before choosing what to automate.",
    ),
    challenge: copy(
      "客户资料、沟通记录与待办分散在不同工具里。负责人想知道下一步，却往往需要先找人、找记录、再确认状态。",
      "Customer details, conversations and tasks live in different tools. Before deciding what comes next, a team lead often has to find the right person, locate the notes and confirm the status.",
    ),
    approach: copy(
      "以客户为线索整理必要信息，让团队确认下一步、负责人和时间。PowerX 与 CRM 的具体集成范围需要根据已有系统与授权数据来评估。",
      "Organize the necessary context around each customer, then let the team agree on actions, ownership and timing. Assess PowerX and CRM integration against the existing systems and authorized data.",
    ),
    steps: [
      {
        title: copy("看清上下文", "Gather context"),
        description: copy(
          "选定需要的客户字段、近期沟通与未完成事项，不默认接入所有数据。",
          "Select relevant customer fields, recent conversations and open actions, rather than connecting all data by default.",
        ),
      },
      {
        title: copy("讨论跟进计划", "Review the plan"),
        description: copy(
          "核对信息，讨论下一步，让负责人做出判断。",
          "Check the information and discuss next steps, leaving decisions with the owner.",
        ),
      },
      {
        title: copy("确认交接方式", "Agree on the handoff"),
        description: copy(
          "约定任务落在哪里、由谁更新，以及何时回看进度。",
          "Agree where actions will live, who will update them and when progress will be reviewed.",
        ),
      },
    ],
    prerequisites: [
      copy(
        "获准使用的客户数据与系统接口",
        "Authorized customer data and system interfaces",
      ),
      copy(
        "客户负责人、访问权限与数据保留边界",
        "Customer ownership, access permissions and retention boundaries",
      ),
      copy(
        "CRM 插件范围与任务写回方式评估",
        "Assessment of CRM scope and task write-back",
      ),
    ],
    reviewQuestions: [
      copy(
        "团队能否找到下一步需要的信息？",
        "Can the team find the context needed for the next step?",
      ),
      copy(
        "每条行动是否有清晰的负责人？",
        "Does each action have a clear owner?",
      ),
      copy(
        "哪些信息仍需人工确认？",
        "Which information still needs human review?",
      ),
    ],
    relatedProducts: [
      { slug: "powerx-base", name: "PowerX" },
      { slug: "crm", name: "CRM" },
    ],
  },
  {
    slug: "pawx-marketing-agent",
    category: copy(
      "内容协作 · PawX 场景构想",
      "Content collaboration · PawX concept",
    ),
    title: copy(
      "把内容想法，整理成团队可以推进的计划。",
      "Turn content ideas into a plan the team can move forward.",
    ),
    summary: copy(
      "围绕一个营销主题，梳理素材、内容草稿与审核分工。这里展示的是方案思路，不是客户交付成果。",
      "Organize assets, content drafts and review ownership around a marketing theme. This is a solution concept, not a delivered customer result.",
    ),
    challenge: copy(
      "选题在聊天里，素材在文件夹里，审核意见又在另一处。内容团队需要的不是更多产量承诺，而是更清晰的准备、协作与确认方式。",
      "Ideas live in chats, assets in folders and review comments somewhere else. Content teams need a clearer way to prepare, collaborate and approve—not another promise of higher output.",
    ),
    approach: copy(
      "围绕内容主题建立清晰的工作清单，再评估 MediaXStudio 与 PowerX 可以承担的环节。渠道发布、内容生成和审批能力需逐项确认，不默认已经打通。",
      "Build a clear checklist around the content theme, then assess where MediaXStudio and PowerX could help. Verify publishing, generation and approval capabilities individually; do not assume they are already connected.",
    ),
    steps: [
      {
        title: copy("明确主题与素材", "Define the theme and assets"),
        description: copy(
          "确认受众、表达目标、品牌要求，以及有使用权的素材。",
          "Agree on the audience, communication goal, brand requirements and assets you have permission to use.",
        ),
      },
      {
        title: copy("组织草稿与审核", "Organize drafting and review"),
        description: copy(
          "划分创作、编辑与确认职责，保留人工把关环节。",
          "Assign drafting, editing and approval responsibilities, preserving human review.",
        ),
      },
      {
        title: copy("确认发布边界", "Set publishing boundaries"),
        description: copy(
          "核对渠道权限、可用接口与操作责任，再确定发布方式。",
          "Check channel permissions, available interfaces and operational ownership before deciding how to publish.",
        ),
      },
    ],
    prerequisites: [
      copy("内容与素材使用授权", "Permission to use content and assets"),
      copy(
        "品牌规范、内容审核人和发布负责人",
        "Brand guidance, reviewers and publishing owners",
      ),
      copy(
        "插件交付范围、渠道接口与授权方式确认",
        "Confirmed plugin scope, channel interfaces and authorization",
      ),
    ],
    reviewQuestions: [
      copy(
        "素材和审核意见是否更容易找到？",
        "Are assets and review comments easier to find?",
      ),
      copy(
        "草稿进入下一阶段前，谁来确认？",
        "Who approves a draft before the next stage?",
      ),
      copy(
        "发布是否保留必要的人工核对？",
        "Does publishing retain the necessary human checks?",
      ),
    ],
    relatedProducts: [
      { slug: "powerx-base", name: "PowerX" },
      { slug: "mediax", name: "MediaXStudio" },
    ],
  },
  {
    slug: "commerce-operations",
    category: copy("电商运营", "Commerce operations"),
    title: copy(
      "让商品、订单与团队交接，说同一种语言。",
      "Give products, orders and team handoffs a shared context.",
    ),
    summary: copy(
      "从一个具体运营环节出发，梳理业务状态、异常处理与责任分工，再评估系统连接。",
      "Start with one operational workflow. Map business states, exception handling and ownership before assessing system connections.",
    ),
    challenge: copy(
      "商品信息、订单状态与售后沟通可能分布在不同系统中。状态口径不一致时，团队难以判断该由谁处理下一步。",
      "Product information, order states and service conversations may sit in different systems. When status definitions differ, teams struggle to decide who handles the next step.",
    ),
    approach: copy(
      "先选定一个有明确边界的流程，统一关键字段与状态，再评估电商方案及 PowerX 集成。库存、订单与支付等写入操作需要独立验证，不作为本页演示能力。",
      "Choose a bounded workflow and align its key fields and states, then assess commerce solutions and PowerX integration. Inventory, order and payment writes require separate verification and are not demonstrated here.",
    ),
    steps: [
      {
        title: copy("选定一个流程", "Choose one workflow"),
        description: copy(
          "从商品更新、订单查询或异常交接中选一个起点。",
          "Choose a starting point such as product updates, order lookups or exception handoffs.",
        ),
      },
      {
        title: copy("对齐业务状态", "Align business states"),
        description: copy(
          "明确来源系统、关键字段与状态含义，避免重复理解。",
          "Clarify source systems, key fields and the meaning of each status.",
        ),
      },
      {
        title: copy("验证交接与异常", "Verify handoffs and exceptions"),
        description: copy(
          "定义负责人、失败处理与人工回退，再评估扩大范围。",
          "Define ownership, failure handling and manual fallback before expanding the scope.",
        ),
      },
    ],
    prerequisites: [
      copy(
        "商品与订单系统的接口授权",
        "Authorized product and order system interfaces",
      ),
      copy(
        "状态定义、业务规则与异常处理人",
        "Status definitions, business rules and exception owners",
      ),
      copy(
        "写入权限、测试环境与回退方案",
        "Write permissions, a test environment and a fallback plan",
      ),
    ],
    reviewQuestions: [
      copy(
        "团队对每个状态的理解是否一致？",
        "Does the team share the same understanding of each state?",
      ),
      copy(
        "异常是否能找到明确的处理人？",
        "Can an exception reach a clear owner?",
      ),
      copy(
        "关键写入是否经过测试与授权？",
        "Have critical writes been tested and authorized?",
      ),
    ],
    relatedProducts: [
      { slug: "powerx-base", name: "PowerX" },
      { slug: "mall", name: "Commerce" },
    ],
  },
];
export function getCaseBySlug(slug: string): Case | undefined {
  return cases.find((item) => item.slug === slug);
}
export function listCases(): Case[] {
  return cases;
}
