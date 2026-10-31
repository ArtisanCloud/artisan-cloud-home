export type Copy = { zh: string; en: string };
const copy = (zh: string, en: string): Copy => ({ zh, en });
export const powerxCopy = {
  overview: copy('概览', 'Overview'), scenario: copy('业务场景', 'Scenario'), ecosystem: copy('扩展能力', 'Ecosystem'),
  eyebrow: copy('为企业 AI 应用而生', 'A foundation for enterprise AI'),
  title: copy('把业务想法，\n变成新的工作方式。', 'Turn business ideas into\na new way of working.'),
  intro: copy('连接客户、内容与团队。PowerX 将 AI 能力与业务插件放在同一个底座上，让下一步更清晰。', 'Connect customers, content and teams. PowerX brings AI capabilities and business plugins onto one foundation, making the next step clearer.'),
  contact: copy('聊聊业务需求', 'Let’s talk business'), core: copy('了解开放核心', 'Explore the open core'),
  forWho: copy('面向业务负责人 · 运营团队 · 企业开发者', 'For business leaders · Operations teams · Enterprise developers'),
  diagram: copy('业务流程示意 · 非产品界面', 'Illustrative workflow · Not a product screen'),
  input: copy('一个业务问题', 'A business question'), prompt: copy('这周，哪些客户需要跟进？', 'Which customers need a follow-up this week?'),
  center: copy('连接信息，组织下一步', 'Connect context. Organize next steps.'),
  human: copy('由团队判断与确认', 'Reviewed by your team'), output: copy('一份清晰的行动计划', 'A clear plan of action'),
  storyLabel: copy('从一个真实的业务问题出发', 'Start with a familiar business question'),
  storyTitle: copy('一次客户跟进，\n不止是发一条消息。', 'A customer follow-up is\nmore than a message.'),
  storyIntro: copy('负责人需要知道：客户谈到了哪里，下一步由谁推进，还有什么需要确认。先把信息接起来，再讨论自动化。', 'Your team needs context: where the conversation stands, who takes the next step and what still needs a decision. Connect the information before automating the work.'),
  storyNote: copy('示例用于说明业务思路。实际数据接入、CRM 插件能力与执行流程需在项目中确认；此处不执行任务或发送客户消息。', 'This example explains a business approach. Data connections, CRM capabilities and execution flows must be confirmed for each project. Nothing here runs a task or sends a customer message.'),
  previewLabel: copy('场景拆解', 'Scenario walkthrough'),
  valueTitle: copy('复杂留给系统，\n清晰交给团队。', 'Let systems handle complexity.\nGive teams clarity.'),
  valueIntro: copy('不是再添一个孤立的工具，而是为企业应用建立共同的连接方式。', 'Not another isolated tool, but a common foundation for enterprise applications.'),
  evidenceTitle: copy('从业务价值，看到技术依据。', 'Business value, with a technical foundation.'),
  evidenceIntro: copy('以下能力可在开放核心的代码与文档中查阅。代码存在不等于已完成你的业务验收，具体可用范围以项目评估为准。', 'Explore these capabilities in the open-core code and documentation. Source availability is not acceptance of your business workflow; assess the usable scope for your project.'),
  evidenceLink: copy('查看对应源码', 'View source evidence'),
  pluginsTitle: copy('从一个场景，\n到更多可能。', 'One starting point.\nMore possibilities.'),
  pluginsIntro: copy('以 PowerX 为底座，按业务需要组合能力。先解决一个问题，再逐步扩展。', 'Build on PowerX and combine capabilities around your needs. Solve one problem first, then expand.'),
  paid: copy('核心付费插件', 'Core paid plugin'),
  crm: copy('让客户信息服务于下一次沟通。围绕客户管理与销售协作，讨论适合团队的落地范围。', 'Bring customer context into the next conversation. Define the right scope for customer management and sales collaboration.'),
  media: copy('让内容生产与管理更有条理。围绕素材、内容与团队协作，规划适合业务的工作方式。', 'Bring structure to content production and management. Plan a workflow around assets, content and team collaboration.'),
  pluginNote: copy('插件范围、交付方式与费用请咨询团队；本页不提供在线试用或即刻开通。', 'Ask our team about plugin scope, delivery and pricing. Online trials and instant activation are not available on this page.'),
  solutions: copy('也可以了解现有解决方案', 'Explore our existing solutions'),
  scrm: copy('SCRM · 客户连接', 'SCRM · Customer engagement'), commerce: copy('电商 · 商品与交易', 'Commerce · Products and transactions'),
  solutionNote: copy('以下是 ArtisanCloud 现有方案入口，不代表已经作为 PowerX 插件上架。', 'These are existing ArtisanCloud solutions, not a claim that they are published PowerX plugins.'),
  openTitle: copy('开放核心，灵活扩展。', 'An open core. Room to grow.'),
  openText: copy('PowerX 定位为企业 AI 应用与插件生态的 AgentOS 底座，而非单一业务应用。可先查阅源码，再与团队确认适合你的部署与集成边界。', 'PowerX is an AgentOS foundation for enterprise AI applications and a plugin ecosystem, not a single business app. Explore the source, then work with the team to define deployment and integration boundaries.'),
  sourceLink: copy('浏览 PowerX 开源项目 ↗', 'Explore the PowerX repository ↗'),
  deployTitle: copy('部署与集成，需要准备什么？', 'What does deployment and integration involve?'),
  deployText: copy('先明确业务场景、数据来源、使用人员与权限，再评估插件、模型服务和运行环境。部署形态、数据边界与运维责任需共同确认，不承诺未经验证的即装即用。', 'Start with your scenario, data sources, users and permissions. Then assess plugins, model services and the runtime environment. Agree on deployment, data boundaries and operational ownership; no unverified plug-and-play promise.'),
  closing: copy('从你的业务问题开始。', 'Start with your business question.'),
  closingText: copy('带上一个想改善的工作环节，我们一起梳理下一步。', 'Bring one part of your workflow you want to improve. Let’s work out the next step together.'),
  contactNote: copy('前往现有微信联系页 · 扫码或保存二维码后在微信中识别', 'Opens our WeChat contact page · Scan or save the QR code to recognize it in WeChat'),
};
export const scenarioSteps = [
  { title: copy('整理上下文', 'Gather context'), heading: copy('先看清客户的来龙去脉。', 'Start with the customer’s context.'), body: copy('把客户资料、最近沟通与待办放在一起，减少来回查找。接入哪些数据，由你的业务与权限边界决定。', 'Bring customer details, recent conversations and open actions together. Your business and permission boundaries determine which data can be connected.'), label: copy('需要的信息', 'Useful context'), items: [copy('最近一次沟通', 'Latest conversation'), copy('当前需求与疑问', 'Current needs and questions'), copy('已有任务与负责人', 'Existing tasks and owners')] },
  { title: copy('团队确认', 'Review together'), heading: copy('建议先成为草稿，决定留给人。', 'Suggestions first. Decisions stay with people.'), body: copy('讨论下一步行动，核对信息是否完整，再决定谁来跟进。示例中的人工确认是一种工作流程设计，不代表所有插件都已支持审批。', 'Discuss next steps, check the information and agree on ownership. Human review here is a workflow design, not a claim that every plugin supports approval.'), label: copy('共同确认', 'Review points'), items: [copy('信息是否准确？', 'Is the information accurate?'), copy('下一步是否合适？', 'Is the next step appropriate?'), copy('由谁负责推进？', 'Who owns the follow-up?')] },
  { title: copy('明确下一步', 'Plan the next step'), heading: copy('让沟通有一个明确的下一步。', 'Give the conversation a clear next step.'), body: copy('把确认后的行动交给负责人，约定时间并持续跟进。自动创建任务或外发消息，需要另行确认集成、权限与执行能力。', 'Assign agreed actions, set a date and follow through. Automatic task creation or outbound messages need separately verified integrations, permissions and execution capabilities.'), label: copy('行动计划', 'Action plan'), items: [copy('补充客户需求', 'Clarify customer needs'), copy('准备适合的方案', 'Prepare a suitable proposal'), copy('约定下一次沟通', 'Agree on the next conversation')] },
];
export const values = [
  { title: copy('信息更连贯', 'Connected context'), text: copy('为业务应用提供统一身份、租户与权限入口，减少各自为政。', 'Give business applications common identity, tenant context and permission entry points.') },
  { title: copy('协作有依据', 'A clearer handoff'), text: copy('用任务调度与运行记录，让技术团队有据可查。', 'Give technical teams task scheduling and run records they can inspect.') },
  { title: copy('扩展更从容', 'Space to extend'), text: copy('通过插件与集成网关连接能力，按业务阶段逐步组合。', 'Connect capabilities through plugins and an integration gateway, one business stage at a time.') },
];
export const sourceRoot = 'https://github.com/ArtisanCloud/PowerX/blob/f99333ccd80eb3c2467fe6cc9009917340556424/';
export const capabilities = [
  { title: copy('身份与权限', 'Identity and permissions'), text: copy('IAM、RBAC 与租户上下文，为应用建立共同的访问入口。', 'IAM, RBAC and tenant context provide common access entry points.'), path: 'backend/internal/transport/http/admin/routes.go', beta: false },
  { title: copy('插件与集成', 'Plugins and integration'), text: copy('插件管理、能力注册与网关调用边界。插件发布治理仍为 Beta。', 'Plugin management, capability registration and gateway invocation boundaries. Plugin release governance is still Beta.'), path: 'backend/internal/transport/http/openapi/integration_gateway/routes.go', beta: true },
  { title: copy('任务与运行记录', 'Tasks and run records'), text: copy('Runtime Scheduler 提供持久化任务、暂停、恢复、触发与运行记录接口。', 'Runtime Scheduler exposes persistent jobs, pause, resume, trigger and run-record APIs.'), path: 'backend/internal/transport/http/admin/scheduler/routes.go', beta: false },
  { title: copy('AI 与知识工作面', 'AI and knowledge workspace'), text: copy('模型设置、会话与知识接入、检索能力，当前为 Beta，需评估使用边界。', 'Model settings, conversations, knowledge ingestion and retrieval. Currently Beta; assess suitability before use.'), path: 'backend/internal/transport/http/openapi/knowledge_space/routes.go', beta: true },
];
