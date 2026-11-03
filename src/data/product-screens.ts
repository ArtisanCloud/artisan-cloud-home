import type { Copy } from './powerx';

type ProductScreen = {
  id: string;
  number: string;
  src: string;
  width: number;
  height: number;
  title: Copy;
  description: Copy;
  alt: Copy;
  openLabel: Copy;
};

// Unmodified public documentation screenshots. See docs/product-screenshots.md.
export const productScreens: ProductScreen[] = [
  {
    id: 'agent-workspace', number: '01 / AGENT WORKSPACE',
    src: '/images/powerx-ui/agent-workspace.png', width: 3246, height: 1764,
    title: { zh: '围绕一个问题，展开一段会话。', en: 'Start a conversation around a question.' },
    description: { zh: '在智能会话工作台选择 Agent、发起会话并查看历史。图中展示的是电商插件拆分讨论，不是自动执行或跨插件联动的演示。', en: 'Choose an agent, start a conversation and revisit its history. This screen shows a discussion about an e-commerce plugin, not automated execution or cross-plugin orchestration.' },
    alt: { zh: 'PowerX 智能会话工作台：左侧会话历史，右侧与 System Default Agent 讨论电商插件拆分', en: 'PowerX agent workspace with conversation history and a discussion about splitting an e-commerce plugin' },
    openLabel: { zh: '查看智能会话工作台原图（新标签页）', en: 'View the full agent workspace screenshot (new tab)' },
  },
  {
    id: 'plugin-market', number: '02 / PLUGIN MARKETPLACE',
    src: '/images/powerx-ui/plugin-market.png', width: 3366, height: 1802,
    title: { zh: '业务插件，在同一个入口管理。', en: 'Find your business plugins in one place.' },
    description: { zh: '查看插件列表、版本与启用状态，再进入对应的管理页面。截图展示了插件市场中的电商、SCRM 和 MediaX Studio 等条目。', en: 'Review plugin listings, versions and enabled states, then open their management pages. The marketplace screenshot includes e-commerce, SCRM and MediaX Studio entries.' },
    alt: { zh: 'PowerX 插件市场：电商、SCRM 和 MediaX Studio 插件卡片、版本、启用状态及管理入口', en: 'PowerX marketplace with e-commerce, SCRM and MediaX Studio cards, versions, enabled states and management links' },
    openLabel: { zh: '查看插件市场原图（新标签页）', en: 'View the full plugin marketplace screenshot (new tab)' },
  },
  {
    id: 'ai-settings', number: '03 / MODEL CONFIGURATION',
    src: '/images/powerx-ui/ai-settings.png', width: 3364, height: 1794,
    title: { zh: '模型连接与参数，清楚可见。', en: 'Keep model connections and parameters visible.' },
    description: { zh: '在模型配置页选择 Provider 与模型、填写连接地址、调整参数并发起连接测试。图中为 Ollama 配置界面，测试结果尚未生成。', en: 'Select a provider and model, enter the connection URL, adjust parameters and start a connection test. This shows the Ollama settings screen before a test result is available.' },
    alt: { zh: 'PowerX AI 设置：Ollama 模型选择、连接地址、温度与 Token 参数及测试连接按钮', en: 'PowerX AI settings with Ollama model selection, connection URL, temperature and token parameters, and connection test button' },
    openLabel: { zh: '查看模型配置原图（新标签页）', en: 'View the full model configuration screenshot (new tab)' },
  },
];
