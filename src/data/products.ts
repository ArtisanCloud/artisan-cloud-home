export type ProductCopy = { zh: string; en: string };
export type ProductCategory =
  "foundation" | "plugin" | "solution" | "developer";
export type Product = {
  slug: string;
  aliases?: string[];
  category: ProductCategory;
  name: ProductCopy;
  tagline: ProductCopy;
  description: ProductCopy;
  label: ProductCopy;
  audience: ProductCopy;
  scenario: ProductCopy;
  features: { zh: string[]; en: string[] };
  considerations: { zh: string[]; en: string[] };
  availability: ProductCopy;
  evidence?: { url: string; label: ProductCopy; note: ProductCopy };
};
const copy = (zh: string, en: string): ProductCopy => ({ zh, en });
export const products: Product[] = [
  {
    slug: "powerx-base",
    category: "foundation",
    name: copy("PowerX", "PowerX"),
    label: copy("开放核心 · AgentOS 底座", "Open core · AgentOS foundation"),
    tagline: copy(
      "把 AI 与业务插件，连接在同一个底座上。",
      "A common foundation for AI and business plugins.",
    ),
    description: copy(
      "面向企业 AI 应用与插件生态，连接身份、权限、插件运行、集成网关与任务调度。它不是单一业务系统，而是让业务应用协作的共同基础。",
      "Connect identity, permissions, plugin runtime, the integration gateway and task scheduling for enterprise AI applications. A shared foundation, not a single business system.",
    ),
    audience: copy(
      "需要连接多个业务应用的企业团队与开发者。",
      "Enterprise teams and developers connecting multiple business applications.",
    ),
    scenario: copy(
      "多个业务系统需要共用登录与权限，并以可管理的方式接入 AI 与插件能力。",
      "Several business systems need common access and a manageable way to connect AI and plugin capabilities.",
    ),
    features: {
      zh: ["统一身份与租户上下文", "插件管理与集成网关", "任务调度与运行记录"],
      en: [
        "Shared identity and tenant context",
        "Plugin management and integration gateway",
        "Task scheduling and run records",
      ],
    },
    considerations: {
      zh: [
        "确认模型与插件的适用范围",
        "定义数据和访问权限边界",
        "约定运维与业务验收责任",
      ],
      en: [
        "Assess model and plugin suitability",
        "Define data and access boundaries",
        "Agree on operations and business acceptance",
      ],
    },
    availability: copy(
      "AI 与知识工作面、插件发布治理等能力保留 Beta 限定，具体使用范围需评估。",
      "AI and knowledge workspaces and plugin release governance retain Beta qualifications. Assess the appropriate scope.",
    ),
    evidence: {
      url: "https://github.com/ArtisanCloud/PowerX",
      label: copy("查看 PowerX 源码", "Explore PowerX source"),
      note: copy(
        "源码与文档可供技术评估，不代表你的业务流程已完成验收。",
        "Source and documentation support technical evaluation, not acceptance of your business workflow.",
      ),
    },
  },
  {
    slug: "crm",
    category: "plugin",
    name: copy("CRM", "CRM"),
    label: copy("核心付费插件", "Core paid plugin"),
    tagline: copy(
      "让客户信息，服务于下一次沟通。",
      "Put customer context behind the next conversation.",
    ),
    description: copy(
      "围绕客户管理与销售协作，梳理团队需要共享的信息、需要确认的行动，以及值得持续跟进的机会。先定义工作方式，再确认插件交付范围。",
      "Organize the customer information, agreed actions and opportunities your team needs to share. Define the workflow first, then confirm the plugin delivery scope.",
    ),
    audience: copy(
      "希望让客户信息和跟进责任更清晰的销售与业务团队。",
      "Sales and business teams seeking clearer customer context and follow-up ownership.",
    ),
    scenario: copy(
      "客户沟通分散在不同人员和记录里。一次跟进之前，团队需要先知道谈过什么、还有哪些问题、由谁推进。",
      "Customer conversations are scattered across people and records. Before following up, the team needs to know what was discussed, what remains open and who owns the next step.",
    ),
    features: {
      zh: [
        "客户信息的组织方式",
        "跟进记录与行动责任",
        "销售协作与现有系统衔接",
      ],
      en: [
        "How customer information is organized",
        "Follow-up context and action ownership",
        "Sales collaboration and existing-system connections",
      ],
    },
    considerations: {
      zh: [
        "需要迁移或接入哪些客户数据？",
        "团队如何划分访问权限与负责人？",
        "哪些行动需要人工确认后再执行？",
      ],
      en: [
        "Which customer data needs migration or connection?",
        "How should access and ownership be assigned?",
        "Which actions require human confirmation?",
      ],
    },
    availability: copy(
      "CRM 为核心付费插件。可交付功能、集成方式、授权与费用需咨询确认；本页不提供在线试用或立即开通。",
      "CRM is a core paid plugin. Confirm deliverable features, integration, licensing and pricing with the team. No online trial or instant activation is offered here.",
    ),
  },
  {
    slug: "mediax",
    aliases: ["mediaxstudio"],
    category: "plugin",
    name: copy("MediaXStudio", "MediaXStudio"),
    label: copy("核心付费插件", "Core paid plugin"),
    tagline: copy(
      "让内容生产，更有条理。",
      "Bring more structure to content work.",
    ),
    description: copy(
      "从素材到内容，从创作到团队确认，围绕实际的生产流程规划工作空间。让内容工作不再只依赖零散文件和临时沟通。",
      "Plan a workspace around the real production process: assets, content, creation and team review. Move beyond scattered files and ad-hoc coordination.",
    ),
    audience: copy(
      "负责品牌内容、营销策划与素材协作的团队。",
      "Teams responsible for brand content, marketing planning and creative assets.",
    ),
    scenario: copy(
      "一次内容计划需要找到素材、明确主题、协调版本并确认发布要求。先把这些交接点理清，再选择适合的工具与集成。",
      "A content plan involves finding assets, setting a direction, coordinating versions and confirming publication requirements. Clarify these handoffs before choosing tools and integrations.",
    ),
    features: {
      zh: [
        "素材与内容的组织方式",
        "创作任务与团队交接",
        "内容确认与渠道需求梳理",
      ],
      en: [
        "Asset and content organization",
        "Creative tasks and team handoffs",
        "Content review and channel requirements",
      ],
    },
    considerations: {
      zh: [
        "素材来源与使用授权是否明确？",
        "谁负责内容确认与版本管理？",
        "目标渠道允许哪些接入和发布方式？",
      ],
      en: [
        "Are asset sources and usage rights clear?",
        "Who owns content review and version management?",
        "Which integration and publication methods do target channels permit?",
      ],
    },
    availability: copy(
      "MediaXStudio 为核心付费插件。具体能力、交付方式与费用需咨询确认；不承诺所有渠道自动发布，也不提供即刻试用。",
      "MediaXStudio is a core paid plugin. Confirm features, delivery and pricing with the team. Automatic publishing to every channel and instant trials are not promised.",
    ),
  },
  {
    slug: "scrm",
    category: "solution",
    name: copy("SCRM", "SCRM"),
    label: copy(
      "客户连接 · 方案方向",
      "Customer engagement · Solution direction",
    ),
    tagline: copy(
      "让客户触点，与团队工作接起来。",
      "Connect customer touchpoints with team workflows.",
    ),
    description: copy(
      "围绕客户触点、会话与运营协作，梳理业务流程和数据边界。它与内部 CRM 管理关注点不同，适合从客户连接场景开始讨论。",
      "Map customer touchpoints, conversations and operational collaboration within clear data boundaries. Distinct from internal CRM management, this starts with customer engagement.",
    ),
    audience: copy(
      "需要协调客户触点与日常运营的业务团队。",
      "Business teams coordinating customer touchpoints and daily operations.",
    ),
    scenario: copy(
      "客户在不同渠道表达需求，运营人员需要识别上下文，并把需要跟进的事项交给合适的人。",
      "Customers raise needs through different channels. Operations teams need context and a clear handoff to the right person.",
    ),
    features: {
      zh: ["客户与会话上下文", "触点接入与授权边界", "运营协作与跟进流程"],
      en: [
        "Customer and conversation context",
        "Touchpoint integration and authorization boundaries",
        "Operational collaboration and follow-up workflows",
      ],
    },
    considerations: {
      zh: [
        "确认渠道官方接口与授权条件",
        "约定客户数据的使用范围",
        "评估插件版本与现有系统的适配",
      ],
      en: [
        "Confirm official channel APIs and authorization",
        "Agree on permitted customer-data use",
        "Evaluate plugin versions and existing-system compatibility",
      ],
    },
    availability: copy(
      "作为方案方向介绍；具体模块、插件版本与交付成熟度需在项目中核实，不等于开箱即用。",
      "Presented as a solution direction. Verify modules, plugin versions and delivery maturity for the project; this is not a plug-and-play claim.",
    ),
  },
  {
    slug: "mall",
    category: "solution",
    name: copy("电商与交易", "Commerce"),
    label: copy(
      "商品与订单 · 方案方向",
      "Products and orders · Solution direction",
    ),
    tagline: copy(
      "围绕一次交易，理清业务链路。",
      "Build clarity around the transaction.",
    ),
    description: copy(
      "从商品信息到订单处理，再到履约与售后，围绕实际交易过程拆解需要连接的系统与角色。按业务阶段确认范围，而不是一次堆满所有功能。",
      "Map the systems and roles across product information, orders, fulfillment and after-sales work. Define the scope for your current stage rather than adding every feature at once.",
    ),
    audience: copy(
      "希望梳理商品、交易与履约流程的商业团队。",
      "Commercial teams organizing product, transaction and fulfillment workflows.",
    ),
    scenario: copy(
      "商品、订单与履约信息分散，业务需要先确定各环节的责任与系统边界，再规划集成。",
      "Product, order and fulfillment information is fragmented. Define responsibilities and system boundaries before planning integrations.",
    ),
    features: {
      zh: ["商品与交易信息的组织", "订单与履约协作", "售后衔接与系统集成评估"],
      en: [
        "Product and transaction organization",
        "Order and fulfillment collaboration",
        "After-sales handoffs and integration assessment",
      ],
    },
    considerations: {
      zh: [
        "交易规则与支付接入由谁确认？",
        "库存、物流与售后系统如何衔接？",
        "哪些场景需要先做小范围验证？",
      ],
      en: [
        "Who confirms transaction rules and payment integration?",
        "How do inventory, logistics and support systems connect?",
        "Which scenarios should be validated in a limited pilot?",
      ],
    },
    availability: copy(
      "具体能力、支付渠道、性能目标与交付范围需评估确认；本页不作交易能力或性能保证。",
      "Assess capabilities, payment channels, performance targets and delivery scope. This page makes no transaction or performance guarantee.",
    ),
  },
  {
    slug: "powerwechat",
    category: "developer",
    name: copy("PowerWeChat", "PowerWeChat"),
    label: copy("开发者工具 · SDK", "Developer tooling · SDK"),
    tagline: copy(
      "把微信生态接入，交给专注的工具。",
      "Purpose-built tooling for WeChat integrations.",
    ),
    description: copy(
      "面向开发者的 Go SDK，覆盖公众号、小程序、企业微信与支付等接入方向。选择适合业务的平台接口和版本，在官方授权与接口规则内完成集成。",
      "A Go SDK covering integration areas including official accounts, mini-programs, WeCom and payments. Choose suitable platform APIs and versions within official authorization and API rules.",
    ),
    audience: copy(
      "负责微信相关业务集成的开发者。",
      "Developers integrating WeChat-related business capabilities.",
    ),
    scenario: copy(
      "业务需要连接微信相关服务，开发团队需要先核对应用类型、官方权限与 SDK 对应接口。",
      "A business needs WeChat services. Developers first need to check the application type, official permissions and relevant SDK interfaces.",
    ),
    features: {
      zh: [
        "根据平台接口选择接入路径",
        "核对 SDK 版本与使用示例",
        "在自有服务中验证调用流程",
      ],
      en: [
        "Choose integration paths by platform API",
        "Check SDK versions and usage examples",
        "Validate API calls in your own service",
      ],
    },
    considerations: {
      zh: [
        "必须具备对应平台账户与授权",
        "密钥应保存在服务端，不写入网页",
        "接口限制和收费以平台规则为准",
      ],
      en: [
        "Obtain the required platform account and authorization",
        "Keep secrets server-side, never in a webpage",
        "Platform rules govern API limits and fees",
      ],
    },
    availability: copy(
      "SDK 不是托管业务服务；使用前请核对版本、许可、平台权限与接口覆盖。",
      "An SDK is not a hosted business service. Check versions, licensing, platform permissions and API coverage before use.",
    ),
    evidence: {
      url: "https://github.com/ArtisanCloud/PowerWeChat/blob/64653fe2163972c4d6bf84b2222872596a156545/README.md",
      label: copy(
        "查看 SDK 说明与接入示例",
        "Read the SDK overview and integration examples",
      ),
      note: copy(
        "依据公开 README；支持方向不等于覆盖全部平台接口，具体以所选版本为准。",
        "Based on the public README. Listed integration areas do not imply coverage of every platform API; check your chosen version.",
      ),
    },
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(
    (product) => product.slug === slug || product.aliases?.includes(slug),
  );
}
export function listProducts(): Product[] {
  return products;
}
