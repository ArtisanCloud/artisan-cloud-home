import { createI18n } from 'vue-i18n';

const messages = {
  zh: {
    nav: {
      home: '首页',
      products: '产品介绍',
      cases: '案例介绍',
      contact: '联系我们',
      language: '语言'
    },
    home: {
      title: 'ArtisanCloud 企业级解决方案',
      subtitle: 'CoreX 智能体底座、PowerX（SCRM）、MediaXStudio 自媒体营销、PowerWechat SDK',
      ctaProducts: '查看产品',
      ctaContact: '联系我们',
      hero: {
        title: '用智能体，让 AI 转化为可度量的生产力',
        subtitle: '企业级智能体编排与运营平台，低门槛、可观测、可规模化，面向真实业务落地。',
        ctaProducts: '查看产品',
        ctaContact: '联系咨询'
      },
      mission: {
        title: '我们的使命',
        lowBarrier: {
          title: '低门槛构建',
          desc: '可视化编排，无需深度技术背景即可搭建复杂智能体工作流'
        },
        observable: {
          title: '可观测运营',
          desc: '全链路监控与回放，让每个决策都有数据支撑'
        },
        scalable: {
          title: '规模化部署',
          desc: '企业级容错与治理，支持从试点到全面推广'
        },
        statement: '让 AI 真实转化为可度量的生产力',
        metrics: {
          efficiency: '平均效率提升',
          cost: '人工成本节约',
          service: '不间断服务'
        }
      }
    },
    products: {
      title: '产品介绍',
      list: {
        corex: {
          name: 'CoreX',
          desc: 'AI 智能体底座，具备可编排、可扩展的智能体运行与治理能力'
        },
        powerx: {
          name: 'PowerX (SCRM)',
          desc: '基于智能体的客户关系管理系统，打通营销、销售与服务全链路'
        },
        mediax: {
          name: 'MediaXStudio',
          desc: '自媒体营销系统，支持内容生产、分发与数据分析全流程'
        },
        powerwechat: {
          name: 'PowerWechat SDK',
          desc: '开源微信生态 SDK，快速对接企业微信/公众号/小程序能力'
        }
      },
      detail: {
        intro: '产品简介',
        features: '核心功能',
        cta: '获取演示与方案',
        notFound: '未找到产品',
        backToList: '返回产品列表'
      }
    },
    cases: {
      title: '案例介绍',
      intro: '精选行业客户案例，覆盖零售、制造、教育、互联网等场景',
      list: {
        a: {
          category: '零售',
          name: '零售集团 A',
          desc: '以 CoreX + PowerX 打通营销-销售-客服链路，构建智能体工作流，实现线索自动培育与高效跟进。'
        },
        b: {
          category: '制造',
          name: '制造企业 B',
          desc: '借助 MediaXStudio 构建内容矩阵，缩短获客周期并沉淀品牌资产，推动海外渠道增长。'
        },
        c: {
          category: '教育',
          name: '在线教育 C',
          desc: '使用 PowerX（SCRM）形成私域增长闭环，智能体辅助销售转化与售后服务。'
        }
      },
      detail: {
        summary: '项目摘要',
        challenge: '挑战',
        solution: '方案',
        results: '效果指标',
        testimonial: '客户评价',
        cta: '获取定制方案',
        notFound: '未找到案例',
        backToList: '返回案例列表'
      }
    },
    contact: {
      title: '联系我们',
      intro: '欢迎与我们联系，获取解决方案咨询与技术支持',
      email: '邮箱',
      phone: '电话',
      infoLabel: '联系信息',
      messageLabel: '留言',
      form: {
        name: '姓名',
        email: '邮箱',
        message: '留言',
        submit: '提交'
      }
    }
  },
  en: {
    nav: {
      home: 'Home',
      products: 'Products',
      cases: 'Cases',
      contact: 'Contact',
      language: 'Language'
    },
    home: {
      title: 'ArtisanCloud Enterprise Solutions',
      subtitle: 'CoreX Agent Platform, PowerX (SCRM), MediaXStudio, PowerWechat SDK',
      ctaProducts: 'View Products',
      ctaContact: 'Contact Us',
      hero: {
        title: 'Transform AI into Measurable Productivity with Agents',
        subtitle: 'Enterprise agent orchestration platform: low-barrier, observable, scalable, for real business deployment.',
        ctaProducts: 'View Products',
        ctaContact: 'Get Consultation'
      },
      mission: {
        title: 'Our Mission',
        lowBarrier: {
          title: 'Low-Barrier Building',
          desc: 'Visual orchestration, build complex agent workflows without deep technical background'
        },
        observable: {
          title: 'Observable Operations',
          desc: 'Full-chain monitoring and replay, data-driven decision making'
        },
        scalable: {
          title: 'Scalable Deployment',
          desc: 'Enterprise-grade fault tolerance and governance, from pilot to full rollout'
        },
        statement: 'Transform AI into Measurable Productivity',
        metrics: {
          efficiency: 'Avg Efficiency Boost',
          cost: 'Labor Cost Savings',
          service: 'Non-stop Service'
        }
      }
    },
    products: {
      title: 'Products',
      list: {
        corex: {
          name: 'CoreX',
          desc: 'AI agent platform with orchestratable and extensible runtime & governance'
        },
        powerx: {
          name: 'PowerX (SCRM)',
          desc: 'Agent-powered SCRM that connects marketing, sales and service'
        },
        mediax: {
          name: 'MediaXStudio',
          desc: 'Content production, distribution and analytics for social media marketing'
        },
        powerwechat: {
          name: 'PowerWechat SDK',
          desc: 'Open-source SDK for WeChat ecosystem integration'
        }
      },
      detail: {
        intro: 'Product Overview',
        features: 'Core Features',
        cta: 'Get Demo & Solution',
        notFound: 'Product Not Found',
        backToList: 'Back to Products'
      }
    },
    cases: {
      title: 'Case Studies',
      intro: 'Selected customers across retail, manufacturing, education and internet',
      list: {
        a: {
          category: 'Retail',
          name: 'Retail Group A',
          desc: 'Built agent workflows with CoreX + PowerX to connect marketing, sales and service for automated nurturing and efficient follow-ups.'
        },
        b: {
          category: 'Manufacturing',
          name: 'Manufacturer B',
          desc: 'Used MediaXStudio to build a content matrix, shorten acquisition cycles and grow overseas channels.'
        },
        c: {
          category: 'Education',
          name: 'Online Education C',
          desc: 'Leveraged PowerX (SCRM) to form private-domain growth loops, with agents assisting sales conversion and after-sales.'
        }
      },
      detail: {
        summary: 'Project Summary',
        challenge: 'Challenge',
        solution: 'Solution',
        results: 'Results',
        testimonial: 'Client Testimonial',
        cta: 'Get Custom Solution',
        notFound: 'Case Not Found',
        backToList: 'Back to Cases'
      }
    },
    contact: {
      title: 'Contact Us',
      intro: 'Reach out for solution consulting and technical support',
      email: 'Email',
      phone: 'Phone',
      infoLabel: 'Info',
      messageLabel: 'Message',
      form: {
        name: 'Name',
        email: 'Email',
        message: 'Message',
        submit: 'Submit'
      }
    }
  }
};

const defaultLocale = (() => {
  const saved = localStorage.getItem('locale');
  if (saved && (saved === 'zh' || saved === 'en')) return saved;
  const lang = navigator.language?.toLowerCase?.() || '';
  return lang.startsWith('zh') ? 'zh' : 'en';
})();

export const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: defaultLocale,
  fallbackLocale: 'en',
  messages
});