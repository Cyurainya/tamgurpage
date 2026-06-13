import { useEffect, useState } from 'react';

export type Locale = 'zh-CN' | 'en' | 'fr' | 'ru' | 'ja' | 'vi';

type ContentItem = {
  title: string;
  description: string;
};

type ProviderItem = {
  name: string;
  models: string;
};

type FaqItem = {
  question: string;
  answer: string;
};

export type Messages = {
  eyebrow: string;
  heroTitle: string;
  heroHighlight: string;
  heroModelLine: string;
  heroDescription: string;
  heroMigration: string;
  heroPriceTitle: string;
  heroPriceUnit: string;
  heroSavingsLabel: string;
  start: string;
  viewPricing: string;
  docs: string;
  trust: string;
  unifiedApi: string;
  operational: string;
  recharge: string;
  imageGeneration: string;
  joinGroup: string;
  tokenReward: string;
  telegramGroup: string;
  wechatGroup: string;
  signupBonus: string;
  enterpriseDiscount: string;
  priceCardKicker: string;
  officialUsage: string;
  priceCardDescription: string;
  saveAbout: string;
  savingsPrefix: string;
  featuresEyebrow: string;
  featuresTitle: string;
  featuresDescription: string;
  features: ContentItem[];
  modelsEyebrow: string;
  modelsTitle: string;
  modelsDescription: string;
  providers: ProviderItem[];
  availableNow: string;
  integrationTitle: string;
  pricingEyebrow: string;
  pricingTitle: string;
  pricingDescription: string;
  pricingPoints: string[];
  globalPlan: string;
  youPay: string;
  oneTimeUsage: string;
  officialPriceBasis: string;
  pricingNote: string;
  tokenComparisonTitle: string;
  perMillionTokens: string;
  modelLabel: string;
  officialInput: string;
  tamgurInput: string;
  officialOutput: string;
  tamgurOutput: string;
  pricingUpdated: string;
  pricingDisclaimer: string;
  officialSource: string;
  geminiPricingNote: string;
  buyCredits: string;
  audienceEyebrow: string;
  audienceTitle: string;
  audiences: ContentItem[];
  faqEyebrow: string;
  faqTitle: string;
  faqDescription: string;
  faqs: FaqItem[];
  ctaTitle: string;
  ctaDescription: string;
  footerTagline: string;
  footerPowered: string;
  contactWechat: string;
  copyWechat: string;
  copiedWechat: string;
  copyTelegram: string;
  copiedTelegram: string;
  docsCenterEyebrow: string;
  docsCenterTitle: string;
  docsCenterDescription: string;
  docsAppsTitle: string;
  docsAppsDescription: string;
  docsApiTitle: string;
  docsApiDescription: string;
  docsCodexTitle: string;
  docsCodexDescription: string;
  docsEnter: string;
  docsBack: string;
};

export const messages: Record<Locale, Messages> = {
  'zh-CN': {
    eyebrow: '面向开发者的 AI API 平台',
    heroTitle: '比官方最高节省',
    heroHighlight: '70%',
    heroModelLine: '一个 API 接入 GPT-5、Claude、Gemini',
    heroDescription: 'OpenAI Compatible API',
    heroMigration: '支持常用 OpenAI SDK，修改 Base URL 即可迁移',
    heroPriceTitle: 'GPT-5 输出价格',
    heroPriceUnit: '每 100 万输出 Token',
    heroSavingsLabel: '节省 70%',
    start: '免费领取测试额度',
    viewPricing: '查看价格',
    docs: '开发文档',
    trust: '一个密钥 · 多家模型 · 全球可用',
    unifiedApi: '统一 API',
    operational: '所有系统运行正常',
    recharge: '额度充值',
    imageGeneration: '在线生图（该功能仍在测试中）',
    joinGroup: '加入社群',
    tokenReward: '社群与 Token 福利',
    telegramGroup: 'Telegram 群',
    wechatGroup: '微信群',
    signupBonus: '注册即送免费 Token',
    enterpriseDiscount: '企业批量订购享专属折扣',
    priceCardKicker: '简单透明的价格',
    officialUsage: '官方价格等值用量',
    priceCardDescription: '所有模型均按各提供商公开的官方 API 价格基准计算用量。',
    saveAbout: '约省 70%',
    savingsPrefix: '最高可节省',
    featuresEyebrow: '为什么选择 Tamgur',
    featuresTitle: '低成本，也要稳定可靠',
    featuresDescription: '面向真实开发与生产环境，而不是一次性的廉价 Token。',
    features: [
      { title: '更低成本', description: '相比官方 API 价格节省约 70%，让每一笔模型调用更划算。' },
      { title: '快速稳定', description: '优化路由与故障切换，为持续开发和生产调用提供可靠链路。' },
      { title: '隐私优先', description: '不同客户的请求相互隔离，不会与其他客户共享。' },
      { title: '按量付费', description: '无需订阅，只为实际消耗的模型用量付费。' },
      { title: '全球访问', description: '面向全球用户，即时开通，一个密钥访问多家模型。' },
    ],
    modelsEyebrow: '可用模型',
    modelsTitle: '一个平台，连接主流 AI',
    modelsDescription: '通过统一、兼容 OpenAI 的接口访问不同模型提供商。',
    providers: [
      { name: 'Claude', models: 'Opus · Sonnet · Claude Code' },
      { name: 'OpenAI & Codex', models: 'GPT-5 · GPT-5 Mini · Codex' },
      { name: 'Gemini', models: 'Gemini Pro · Gemini Flash' },
    ],
    availableNow: '当前可用',
    integrationTitle: '替换 Base URL 即可接入现有项目',
    pricingEyebrow: '简单透明的计费',
    pricingTitle: '主流模型 API 价格，约省 70%',
    pricingDescription: '不是官方充值卡。你的余额会根据所选模型的官方 API 公开价格计算消耗。',
    pricingPoints: [
      '适用于平台内全部可用模型',
      '无需月费或长期订阅',
      '充值后即可开始使用',
    ],
    globalPlan: '全球按量付费方案',
    youPay: '你支付',
    oneTimeUsage: '按量使用',
    officialPriceBasis: '官方价格基准',
    pricingNote: '示例：当模型调用按官方定价累计达到 $10 时，你在 Tamgur 的对应成本为 $2.99。',
    tokenComparisonTitle: '每 100 万 Token 价格示例',
    perMillionTokens: '输入与输出 Token 分开计费',
    modelLabel: '模型',
    officialInput: '官方输入',
    tamgurInput: 'Tamgur 输入',
    officialOutput: '官方输出',
    tamgurOutput: 'Tamgur 输出',
    pricingUpdated: '价格核对于 {date}',
    pricingDisclaimer: '以上为说明性估算，Tamgur 价格按官方公开 API 单价的 29.9% 计算。模型提供商可能随时调整价格，请以链接中的官方页面为准。',
    officialSource: '官方价格来源',
    geminiPricingNote: 'Gemini 2.5 Pro 示例适用于提示词不超过 20 万 Token 的标准请求。',
    buyCredits: '购买 API 用量',
    audienceEyebrow: '适合谁',
    audienceTitle: '为构建者准备',
    audiences: [
      { title: '开发者', description: '以更低成本构建、测试和运行 AI 应用。' },
      { title: '创业团队', description: '在业务扩张时控制推理成本与基础设施复杂度。' },
      { title: 'AI 构建者', description: '通过一个平台快速组合和切换不同模型。' },
      { title: '学生', description: '无需昂贵订阅，也能持续实验主流模型。' },
    ],
    faqEyebrow: '常见问题',
    faqTitle: '购买前需要了解的内容',
    faqDescription: '关于价格、隐私、开通和 API 接入的直接回答。',
    faqs: [
      {
        question: '“$10 官方价格等值用量”是什么意思？',
        answer: 'Tamgur 按各模型提供商公开的官方 API 价格计算消耗。支付 $2.99 后，你可以使用相当于官方价格 $10 的模型调用量。',
      },
      {
        question: '使用的是原厂官方模型吗？',
        answer: '是。Tamgur 底层接入对应提供商的原厂官方模型，不使用替代模型，不套壳，也不会降低模型能力。在模型版本、请求参数和上下文设置一致的情况下，能力与官方模型保持一致；由于生成式 AI 本身具有随机性，每次返回的具体文字可能不同。',
      },
      {
        question: '我的数据安全吗？',
        answer: '用户请求相互隔离，不会与其他客户共享。请不要在请求中发送不必要的敏感信息。',
      },
      {
        question: '付款后多久可以使用？',
        answer: '通常付款完成后几秒内即可开通并在控制台中使用额度。',
      },
      {
        question: '需要订阅吗？',
        answer: '不需要。Tamgur 采用按量付费模式，你只需为实际使用的额度充值。',
      },
    ],
    ctaTitle: '更快构建，更少支出',
    ctaDescription: '用一个密钥接入 Claude、GPT、Codex 和 Gemini。',
    footerTagline: '更快构建，更少支出',
    footerPowered: 'Powered by Tamgur',
    contactWechat: '联系 WeChat',
    copyWechat: '复制微信号',
    copiedWechat: '微信号已复制',
    copyTelegram: '复制 Telegram 号码',
    copiedTelegram: 'Telegram 号码已复制',
    docsCenterEyebrow: 'DOCUMENTATION',
    docsCenterTitle: 'Tamgur 开放平台文档中心',
    docsCenterDescription: '选择你需要接入的服务类型',
    docsAppsTitle: 'AI 应用配置文档',
    docsAppsDescription: 'OpenClaw、Claude Code、Codex 等 AI 应用集成方案',
    docsApiTitle: '新手指南 / API 接口文档',
    docsApiDescription: '接入聊天、画图、视频生成等 AI 能力，兼容 OpenAI API 格式',
    docsCodexTitle: 'Codex 简单版对接 API 教程',
    docsCodexDescription: '快速配置 API 地址、密钥与模型，帮助 Codex 新用户完成基础接入',
    docsEnter: '进入查阅',
    docsBack: '返回首页',
  },
  en: {
    eyebrow: 'AI API platform for developers',
    heroTitle: 'Save up to',
    heroHighlight: '70%',
    heroModelLine: 'One API for GPT-5, Claude, and Gemini',
    heroDescription: 'OpenAI Compatible API',
    heroMigration: 'Use your preferred OpenAI SDK and migrate by changing the Base URL',
    heroPriceTitle: 'GPT-5 output pricing',
    heroPriceUnit: 'Per 1 million output tokens',
    heroSavingsLabel: 'Save 70%',
    start: 'Claim Free Test Credits',
    viewPricing: 'View Pricing',
    docs: 'Documentation',
    trust: 'One key · Multiple models · Global access',
    unifiedApi: 'Unified API',
    operational: 'All systems operational',
    recharge: 'Add Credits',
    imageGeneration: 'Generate Images (still in testing)',
    joinGroup: 'Join Community',
    tokenReward: 'Community and Token rewards',
    telegramGroup: 'Telegram group',
    wechatGroup: 'WeChat group',
    signupBonus: 'Free Token when you sign up',
    enterpriseDiscount: 'Exclusive discounts for enterprise orders',
    priceCardKicker: 'Simple, transparent pricing',
    officialUsage: 'official-price API usage',
    priceCardDescription: 'Usage is calculated against each model provider’s published official API pricing.',
    saveAbout: 'Save about 70%',
    savingsPrefix: 'Save up to',
    featuresEyebrow: 'Why developers choose Tamgur',
    featuresTitle: 'Lower cost. Built to stay reliable.',
    featuresDescription: 'Infrastructure for real development and production workloads, not disposable discount tokens.',
    features: [
      { title: 'Lower Cost', description: 'Save about 70% compared with official API pricing across supported models.' },
      { title: 'Fast & Stable', description: 'Optimized routing and failover keep development and production requests moving.' },
      { title: 'Privacy First', description: 'Customer requests are isolated and never shared with other customers.' },
      { title: 'Pay As You Go', description: 'No subscription required. Pay only for the model usage you consume.' },
      { title: 'Global Access', description: 'Activate instantly and reach multiple providers worldwide with one API key.' },
    ],
    modelsEyebrow: 'Available models',
    modelsTitle: 'Leading AI, one platform',
    modelsDescription: 'Reach multiple model providers through one unified, OpenAI-compatible interface.',
    providers: [
      { name: 'Claude', models: 'Opus · Sonnet · Claude Code' },
      { name: 'OpenAI & Codex', models: 'GPT-5 · GPT-5 Mini · Codex' },
      { name: 'Gemini', models: 'Gemini Pro · Gemini Flash' },
    ],
    availableNow: 'Available now',
    integrationTitle: 'Connect existing projects by changing the Base URL',
    pricingEyebrow: 'Simple, transparent pricing',
    pricingTitle: 'Save about 70% on leading AI model APIs',
    pricingDescription: 'This is not an official gift card. Your balance is consumed against each selected model’s published official API pricing.',
    pricingPoints: [
      'Applies across all models available on the platform',
      'No monthly fee or long-term subscription',
      'Start using your balance immediately after payment',
    ],
    globalPlan: 'Global pay-as-you-go plan',
    youPay: 'You pay',
    oneTimeUsage: 'pay as you go',
    officialPriceBasis: 'Official price basis',
    pricingNote: 'Example: when your model calls total $10 at published official API prices, the corresponding Tamgur cost is $2.99.',
    tokenComparisonTitle: 'Price examples per 1M tokens',
    perMillionTokens: 'Input and output tokens are billed separately',
    modelLabel: 'Model',
    officialInput: 'Official input',
    tamgurInput: 'Tamgur input',
    officialOutput: 'Official output',
    tamgurOutput: 'Tamgur output',
    pricingUpdated: 'Prices verified {date}',
    pricingDisclaimer: 'Illustrative estimates only. Tamgur prices are calculated at 29.9% of published official API rates. Providers may change pricing at any time; follow the linked official pages for current rates.',
    officialSource: 'Official pricing source',
    geminiPricingNote: 'The Gemini 2.5 Pro example applies to standard requests with prompts up to 200K tokens.',
    buyCredits: 'Buy API Usage',
    audienceEyebrow: 'Built for',
    audienceTitle: 'Made for people who build',
    audiences: [
      { title: 'Developers', description: 'Build, test, and run AI applications with lower model costs.' },
      { title: 'Startups', description: 'Control inference expenses and infrastructure complexity while scaling.' },
      { title: 'AI Builders', description: 'Combine and switch between multiple models through one platform.' },
      { title: 'Students', description: 'Experiment with leading models without expensive subscriptions.' },
    ],
    faqEyebrow: 'Frequently asked questions',
    faqTitle: 'Know before you build',
    faqDescription: 'Direct answers about pricing, privacy, activation, and API access.',
    faqs: [
      {
        question: 'What does “$10 of official-price API usage” mean?',
        answer: 'Tamgur measures usage against each provider’s published official API pricing. Paying $2.99 gives you the amount of model usage that would cost $10 at those official prices.',
      },
      {
        question: 'Are these genuine models from the official providers?',
        answer: 'Yes. Tamgur connects to the genuine models provided by their original vendors, without model substitution, wrappers that imitate another model, or capability downgrades. With the same model version, parameters, and context, capabilities are consistent with the provider’s model. Exact wording may still vary because generative AI is nondeterministic.',
      },
      {
        question: 'Is my data private?',
        answer: 'Customer requests are isolated and are not shared with other customers. Avoid sending unnecessary sensitive information in API requests.',
      },
      {
        question: 'How fast is activation?',
        answer: 'Access is usually activated within seconds after payment and appears in your dashboard.',
      },
      {
        question: 'Do I need a monthly subscription?',
        answer: 'No. Tamgur is pay as you go, so you only add balance for the usage you need.',
      },
    ],
    ctaTitle: 'Build faster. Spend less.',
    ctaDescription: 'Connect Claude, GPT, Codex, and Gemini with one API key.',
    footerTagline: 'Build faster. Spend less.',
    footerPowered: 'Powered by Tamgur',
    contactWechat: 'Contact WeChat',
    copyWechat: 'Copy WeChat ID',
    copiedWechat: 'WeChat ID copied',
    copyTelegram: 'Copy Telegram number',
    copiedTelegram: 'Telegram number copied',
    docsCenterEyebrow: 'DOCUMENTATION',
    docsCenterTitle: 'Tamgur Documentation Center',
    docsCenterDescription: 'Choose the service you want to integrate',
    docsAppsTitle: 'AI application setup',
    docsAppsDescription: 'Integration guides for OpenClaw, Claude Code, Codex, and other AI apps',
    docsApiTitle: 'Getting started / API reference',
    docsApiDescription: 'Connect chat, image, and video generation through an OpenAI-compatible API',
    docsCodexTitle: 'Codex API quickstart',
    docsCodexDescription: 'Configure endpoint, key, and model to get Codex connected quickly',
    docsEnter: 'Explore',
    docsBack: 'Back home',
  },
  fr: {
    eyebrow: "Plateforme d'API IA pour les développeurs",
    heroTitle: "Économisez jusqu'à",
    heroHighlight: '70 %',
    heroModelLine: 'Une API pour GPT-5, Claude et Gemini',
    heroDescription: 'API compatible OpenAI',
    heroMigration: "Utilisez votre SDK OpenAI habituel et migrez en modifiant l'URL de base",
    heroPriceTitle: 'Tarif de sortie GPT-5',
    heroPriceUnit: 'Par million de tokens de sortie',
    heroSavingsLabel: 'Économisez 70 %',
    start: 'Obtenir des crédits de test',
    viewPricing: 'Voir les tarifs',
    docs: 'Documentation',
    trust: 'Une clé · Plusieurs modèles · Accès mondial',
    unifiedApi: 'API unifiée',
    operational: 'Tous les systèmes sont opérationnels',
    recharge: 'Ajouter du crédit',
    imageGeneration: 'Générer des images (fonction en test)',
    joinGroup: 'Rejoindre la communauté',
    tokenReward: 'Communauté et avantages Token',
    telegramGroup: 'Groupe Telegram',
    wechatGroup: 'Groupe WeChat',
    signupBonus: "Token gratuits à l'inscription",
    enterpriseDiscount: 'Remises exclusives pour les entreprises',
    priceCardKicker: 'Tarification simple et transparente',
    officialUsage: "d'utilisation au tarif officiel",
    priceCardDescription: "L'utilisation est calculée selon les tarifs API officiels publiés par chaque fournisseur.",
    saveAbout: 'Environ 70 % économisés',
    savingsPrefix: "Jusqu'à",
    featuresEyebrow: 'Pourquoi choisir Tamgur',
    featuresTitle: 'Moins cher, sans sacrifier la fiabilité',
    featuresDescription: "Une infrastructure conçue pour le développement réel et la production.",
    features: [
      { title: 'Coût réduit', description: "Économisez environ 70 % par rapport aux tarifs API officiels." },
      { title: 'Rapide et stable', description: 'Le routage optimisé et le basculement maintiennent vos requêtes disponibles.' },
      { title: 'Confidentialité', description: 'Les requêtes de chaque client sont isolées et ne sont jamais partagées.' },
      { title: "Paiement à l'usage", description: "Sans abonnement, payez uniquement l'utilisation réellement consommée." },
      { title: 'Accès mondial', description: 'Activation immédiate et plusieurs fournisseurs avec une seule clé API.' },
    ],
    modelsEyebrow: 'Modèles disponibles',
    modelsTitle: "Les meilleures IA sur une plateforme",
    modelsDescription: "Accédez à plusieurs fournisseurs via une interface unifiée compatible OpenAI.",
    providers: [
      { name: 'Claude', models: 'Opus · Sonnet · Claude Code' },
      { name: 'OpenAI & Codex', models: 'GPT-5 · GPT-5 Mini · Codex' },
      { name: 'Gemini', models: 'Gemini Pro · Gemini Flash' },
    ],
    availableNow: 'Disponible',
    integrationTitle: "Connectez vos projets en modifiant simplement l'URL de base",
    pricingEyebrow: 'Tarification simple et transparente',
    pricingTitle: "Économisez environ 70 % sur les principales API d'IA",
    pricingDescription: "Il ne s'agit pas d'une carte cadeau officielle. Le solde est consommé selon le tarif API officiel publié du modèle choisi.",
    pricingPoints: [
      'Valable pour tous les modèles disponibles',
      'Aucun abonnement mensuel',
      'Utilisation immédiate après le paiement',
    ],
    globalPlan: "Offre mondiale à l'usage",
    youPay: 'Vous payez',
    oneTimeUsage: "paiement à l'usage",
    officialPriceBasis: 'Base tarifaire officielle',
    pricingNote: "Exemple : 10 $ d'appels calculés aux tarifs API officiels correspondent à un coût Tamgur de 2,99 $.",
    tokenComparisonTitle: 'Exemples de prix par million de tokens',
    perMillionTokens: "Les tokens d'entrée et de sortie sont facturés séparément",
    modelLabel: 'Modèle',
    officialInput: 'Entrée officielle',
    tamgurInput: 'Entrée Tamgur',
    officialOutput: 'Sortie officielle',
    tamgurOutput: 'Sortie Tamgur',
    pricingUpdated: 'Prix vérifiés le {date}',
    pricingDisclaimer: "Estimations indicatives. Les prix Tamgur correspondent à 29,9 % des tarifs API officiels publiés. Les fournisseurs peuvent modifier leurs prix ; consultez les pages officielles liées.",
    officialSource: 'Tarif officiel',
    geminiPricingNote: "L'exemple Gemini 2.5 Pro concerne les requêtes standard avec des prompts jusqu'à 200 000 tokens.",
    buyCredits: "Acheter de l'utilisation API",
    audienceEyebrow: 'Conçu pour',
    audienceTitle: 'Pensé pour ceux qui construisent',
    audiences: [
      { title: 'Développeurs', description: 'Créez et exploitez des applications IA à moindre coût.' },
      { title: 'Startups', description: "Maîtrisez les coûts d'inférence pendant votre croissance." },
      { title: "Créateurs d'IA", description: 'Combinez et changez de modèle depuis une seule plateforme.' },
      { title: 'Étudiants', description: 'Expérimentez sans souscriptions coûteuses.' },
    ],
    faqEyebrow: 'Questions fréquentes',
    faqTitle: 'À savoir avant de commencer',
    faqDescription: 'Des réponses directes sur les tarifs, la confidentialité et l’accès.',
    faqs: [
      {
        question: "Que signifie « 10 $ d'utilisation au tarif officiel » ?",
        answer: "Tamgur mesure l'utilisation selon les tarifs API officiels publiés. Pour 2,99 $, vous obtenez la quantité d'appels qui coûterait 10 $ à ces tarifs.",
      },
      {
        question: "S'agit-il des modèles authentiques des fournisseurs officiels ?",
        answer: "Oui. Tamgur se connecte aux modèles authentiques fournis par leurs éditeurs d'origine, sans substitution ni réduction de leurs capacités. Avec la même version, les mêmes paramètres et le même contexte, leurs capacités restent cohérentes avec celles du fournisseur. Le texte exact peut varier car l'IA générative est non déterministe.",
      },
      {
        question: 'Mes données sont-elles privées ?',
        answer: 'Les requêtes sont isolées et ne sont pas partagées avec les autres clients.',
      },
      {
        question: "Quel est le délai d'activation ?",
        answer: "L'accès est généralement activé quelques secondes après le paiement.",
      },
      {
        question: 'Un abonnement est-il nécessaire ?',
        answer: "Non. Tamgur fonctionne à l'usage, sans abonnement mensuel.",
      },
    ],
    ctaTitle: 'Construisez plus vite. Dépensez moins.',
    ctaDescription: 'Connectez Claude, GPT, Codex et Gemini avec une seule clé.',
    footerTagline: 'Construisez plus vite. Dépensez moins.',
    footerPowered: 'Propulsé par Tamgur',
    contactWechat: 'Contact WeChat',
    copyWechat: "Copier l'identifiant WeChat",
    copiedWechat: 'Identifiant WeChat copié',
    copyTelegram: 'Copier le numéro Telegram',
    copiedTelegram: 'Numéro Telegram copié',
    docsCenterEyebrow: 'DOCUMENTATION',
    docsCenterTitle: 'Centre de documentation Tamgur',
    docsCenterDescription: 'Choisissez le service à intégrer',
    docsAppsTitle: "Configuration d'applications IA",
    docsAppsDescription: 'Guides pour OpenClaw, Claude Code, Codex et autres applications',
    docsApiTitle: 'Guide de démarrage / API',
    docsApiDescription: 'Connectez le chat, les images et la vidéo via une API compatible OpenAI',
    docsCodexTitle: 'Démarrage rapide Codex',
    docsCodexDescription: "Configurez l'adresse, la clé et le modèle pour connecter Codex",
    docsEnter: 'Consulter',
    docsBack: "Retour à l'accueil",
  },
  ru: {
    eyebrow: 'Платформа AI API для разработчиков',
    heroTitle: 'Экономьте до',
    heroHighlight: '70%',
    heroModelLine: 'Один API для GPT-5, Claude и Gemini',
    heroDescription: 'API, совместимый с OpenAI',
    heroMigration: 'Используйте привычный OpenAI SDK и перенесите проект, изменив Base URL',
    heroPriceTitle: 'Цена вывода GPT-5',
    heroPriceUnit: 'За 1 миллион выходных Token',
    heroSavingsLabel: 'Экономия 70%',
    start: 'Получить тестовые Token',
    viewPricing: 'Посмотреть цены',
    docs: 'Документация',
    trust: 'Один ключ · Несколько моделей · Глобальный доступ',
    unifiedApi: 'Единый API',
    operational: 'Все системы работают',
    recharge: 'Пополнить баланс',
    imageGeneration: 'Создать изображение (функция тестируется)',
    joinGroup: 'Вступить в сообщество',
    tokenReward: 'Сообщество и бонусы Token',
    telegramGroup: 'Группа Telegram',
    wechatGroup: 'Группа WeChat',
    signupBonus: 'Бесплатные Token при регистрации',
    enterpriseDiscount: 'Специальные скидки для компаний',
    priceCardKicker: 'Простые и прозрачные цены',
    officialUsage: 'использования по официальной цене',
    priceCardDescription: 'Расход рассчитывается по опубликованным официальным API-тарифам каждого провайдера.',
    saveAbout: 'Экономия около 70%',
    savingsPrefix: 'Экономия до',
    featuresEyebrow: 'Почему выбирают Tamgur',
    featuresTitle: 'Ниже цена, стабильнее работа',
    featuresDescription: 'Инфраструктура для разработки и реальных производственных нагрузок.',
    features: [
      { title: 'Ниже стоимость', description: 'Экономьте около 70% относительно официальных API-тарифов.' },
      { title: 'Быстро и стабильно', description: 'Оптимизированная маршрутизация и резервирование поддерживают доступность.' },
      { title: 'Конфиденциальность', description: 'Запросы клиентов изолированы и не передаются другим клиентам.' },
      { title: 'Оплата по факту', description: 'Без подписки: платите только за фактически использованный объём.' },
      { title: 'Глобальный доступ', description: 'Мгновенная активация и несколько провайдеров по одному ключу.' },
    ],
    modelsEyebrow: 'Доступные модели',
    modelsTitle: 'Ведущие AI-модели на одной платформе',
    modelsDescription: 'Единый интерфейс, совместимый с OpenAI, для нескольких провайдеров.',
    providers: [
      { name: 'Claude', models: 'Opus · Sonnet · Claude Code' },
      { name: 'OpenAI & Codex', models: 'GPT-5 · GPT-5 Mini · Codex' },
      { name: 'Gemini', models: 'Gemini Pro · Gemini Flash' },
    ],
    availableNow: 'Доступно',
    integrationTitle: 'Подключите проект, изменив только Base URL',
    pricingEyebrow: 'Простые и прозрачные цены',
    pricingTitle: 'Экономьте около 70% на API ведущих AI-моделей',
    pricingDescription: 'Это не официальная подарочная карта. Баланс расходуется по опубликованной официальной API-цене выбранной модели.',
    pricingPoints: [
      'Действует для всех доступных моделей',
      'Без ежемесячной платы и подписки',
      'Использование сразу после оплаты',
    ],
    globalPlan: 'Глобальный план с оплатой по факту',
    youPay: 'Вы платите',
    oneTimeUsage: 'оплата по факту',
    officialPriceBasis: 'Официальная цена',
    pricingNote: 'Пример: вызовы на $10 по официальным API-тарифам соответствуют стоимости $2.99 в Tamgur.',
    tokenComparisonTitle: 'Примеры цен за 1 млн токенов',
    perMillionTokens: 'Входные и выходные токены оплачиваются отдельно',
    modelLabel: 'Модель',
    officialInput: 'Ввод официально',
    tamgurInput: 'Ввод Tamgur',
    officialOutput: 'Вывод официально',
    tamgurOutput: 'Вывод Tamgur',
    pricingUpdated: 'Цены проверены {date}',
    pricingDisclaimer: 'Это ориентировочные расчёты. Цены Tamgur составляют 29,9% опубликованных официальных API-тарифов. Провайдеры могут менять цены; актуальные данные смотрите по официальным ссылкам.',
    officialSource: 'Официальные цены',
    geminiPricingNote: 'Пример Gemini 2.5 Pro относится к стандартным запросам с промптами до 200 тыс. токенов.',
    buyCredits: 'Купить API-объём',
    audienceEyebrow: 'Для кого',
    audienceTitle: 'Для тех, кто создаёт',
    audiences: [
      { title: 'Разработчики', description: 'Создавайте и запускайте AI-приложения с меньшими затратами.' },
      { title: 'Стартапы', description: 'Контролируйте расходы на инференс при масштабировании.' },
      { title: 'AI-разработчики', description: 'Комбинируйте и переключайте модели на одной платформе.' },
      { title: 'Студенты', description: 'Экспериментируйте без дорогих подписок.' },
    ],
    faqEyebrow: 'Частые вопросы',
    faqTitle: 'Что важно знать',
    faqDescription: 'Прямые ответы о цене, приватности, активации и API.',
    faqs: [
      {
        question: 'Что означает «$10 использования по официальной цене»?',
        answer: 'Tamgur считает расход по опубликованным официальным API-тарифам. За $2.99 вы получаете объём вызовов, который по этим тарифам стоил бы $10.',
      },
      {
        question: 'Используются настоящие модели официальных провайдеров?',
        answer: 'Да. Tamgur подключается к настоящим моделям их исходных провайдеров без подмены, имитации другой модели или снижения возможностей. При одинаковой версии модели, параметрах и контексте возможности соответствуют модели провайдера. Точный текст ответа может различаться из-за недетерминированности генеративного ИИ.',
      },
      {
        question: 'Мои данные конфиденциальны?',
        answer: 'Запросы клиентов изолированы и не передаются другим клиентам.',
      },
      {
        question: 'Как быстро происходит активация?',
        answer: 'Обычно доступ активируется в течение нескольких секунд после оплаты.',
      },
      {
        question: 'Нужна ежемесячная подписка?',
        answer: 'Нет. Tamgur работает по модели оплаты за фактическое использование.',
      },
    ],
    ctaTitle: 'Создавайте быстрее. Тратьте меньше.',
    ctaDescription: 'Claude, GPT, Codex и Gemini по одному API-ключу.',
    footerTagline: 'Создавайте быстрее. Тратьте меньше.',
    footerPowered: 'Работает на Tamgur',
    contactWechat: 'Связаться в WeChat',
    copyWechat: 'Копировать WeChat ID',
    copiedWechat: 'WeChat ID скопирован',
    copyTelegram: 'Копировать номер Telegram',
    copiedTelegram: 'Номер Telegram скопирован',
    docsCenterEyebrow: 'ДОКУМЕНТАЦИЯ',
    docsCenterTitle: 'Центр документации Tamgur',
    docsCenterDescription: 'Выберите нужный тип интеграции',
    docsAppsTitle: 'Настройка AI-приложений',
    docsAppsDescription: 'Интеграция OpenClaw, Claude Code, Codex и других приложений',
    docsApiTitle: 'Начало работы / API',
    docsApiDescription: 'Чат, изображения и видео через API, совместимый с OpenAI',
    docsCodexTitle: 'Быстрое подключение Codex',
    docsCodexDescription: 'Настройте адрес API, ключ и модель для подключения Codex',
    docsEnter: 'Открыть',
    docsBack: 'На главную',
  },
  ja: {
    eyebrow: '開発者向け AI API プラットフォーム',
    heroTitle: '公式料金より最大',
    heroHighlight: '70% 節約',
    heroModelLine: 'ひとつの API で GPT-5、Claude、Gemini に接続',
    heroDescription: 'OpenAI Compatible API',
    heroMigration: '使い慣れた OpenAI SDK を利用し、Base URL の変更だけで移行',
    heroPriceTitle: 'GPT-5 出力料金',
    heroPriceUnit: '出力 100 万 Token あたり',
    heroSavingsLabel: '70% 節約',
    start: '無料テスト Token を受け取る',
    viewPricing: '料金を見る',
    docs: 'ドキュメント',
    trust: '1つのキー · 複数モデル · グローバルアクセス',
    unifiedApi: '統合 API',
    operational: 'すべてのシステムは正常です',
    recharge: 'クレジットを追加',
    imageGeneration: '画像を生成（テスト中）',
    joinGroup: 'コミュニティに参加',
    tokenReward: 'コミュニティと Token 特典',
    telegramGroup: 'Telegram グループ',
    wechatGroup: 'WeChat グループ',
    signupBonus: '登録で無料 Token',
    enterpriseDiscount: '法人向け特別割引',
    priceCardKicker: 'シンプルで透明な料金',
    officialUsage: '公式価格換算の API 利用量',
    priceCardDescription: '各プロバイダーが公開する公式 API 料金を基準に利用量を計算します。',
    saveAbout: '約 70% 節約',
    savingsPrefix: '最大',
    featuresEyebrow: 'Tamgur が選ばれる理由',
    featuresTitle: '低コストと安定性を両立',
    featuresDescription: '実際の開発と本番環境のための AI インフラです。',
    features: [
      { title: '低コスト', description: '公式 API 料金と比べて約 70% のコストを削減できます。' },
      { title: '高速で安定', description: '最適化されたルーティングとフェイルオーバーで可用性を維持します。' },
      { title: 'プライバシー重視', description: '顧客ごとのリクエストを分離し、他の顧客と共有しません。' },
      { title: '従量課金', description: '月額契約は不要。実際に利用した分だけ支払います。' },
      { title: 'グローバル対応', description: '即時有効化し、1つのキーで複数プロバイダーに接続できます。' },
    ],
    modelsEyebrow: '利用可能なモデル',
    modelsTitle: '主要 AI をひとつのプラットフォームで',
    modelsDescription: 'OpenAI 互換の統合インターフェースから複数のモデルに接続できます。',
    providers: [
      { name: 'Claude', models: 'Opus · Sonnet · Claude Code' },
      { name: 'OpenAI & Codex', models: 'GPT-5 · GPT-5 Mini · Codex' },
      { name: 'Gemini', models: 'Gemini Pro · Gemini Flash' },
    ],
    availableNow: '利用可能',
    integrationTitle: 'Base URL を変更するだけで既存プロジェクトに接続',
    pricingEyebrow: 'シンプルで透明な料金',
    pricingTitle: '主要 AI モデル API を約 70% 節約',
    pricingDescription: '公式ギフトカードではありません。選択したモデルの公開公式 API 料金を基準に残高が消費されます。',
    pricingPoints: [
      'プラットフォーム上のすべてのモデルに適用',
      '月額料金や長期契約なし',
      '支払い後すぐに利用開始',
    ],
    globalPlan: 'グローバル従量課金プラン',
    youPay: 'お支払い',
    oneTimeUsage: '従量課金',
    officialPriceBasis: '公式価格基準',
    pricingNote: '例：公式 API 料金で $10 になるモデル呼び出しは、Tamgur では $2.99 に相当します。',
    tokenComparisonTitle: '100万 Token あたりの料金例',
    perMillionTokens: '入力 Token と出力 Token は別々に課金されます',
    modelLabel: 'モデル',
    officialInput: '公式入力',
    tamgurInput: 'Tamgur 入力',
    officialOutput: '公式出力',
    tamgurOutput: 'Tamgur 出力',
    pricingUpdated: '料金確認日：{date}',
    pricingDisclaimer: '表示価格は参考値です。Tamgur 料金は公開されている公式 API 単価の 29.9% として計算しています。提供元が価格を変更する場合があるため、最新情報はリンク先の公式ページをご確認ください。',
    officialSource: '公式料金',
    geminiPricingNote: 'Gemini 2.5 Pro の例は、プロンプトが 20 万 Token 以下の標準リクエストに適用されます。',
    buyCredits: 'API 利用量を購入',
    audienceEyebrow: '対象ユーザー',
    audienceTitle: 'つくる人のために',
    audiences: [
      { title: '開発者', description: 'より低いモデルコストで AI アプリを構築・運用できます。' },
      { title: 'スタートアップ', description: '成長に合わせて推論コストを管理できます。' },
      { title: 'AI ビルダー', description: '1つの基盤で複数モデルを組み合わせ、切り替えられます。' },
      { title: '学生', description: '高額なサブスクリプションなしで実験できます。' },
    ],
    faqEyebrow: 'よくある質問',
    faqTitle: '利用前に知っておくこと',
    faqDescription: '料金、プライバシー、開通、API 接続について回答します。',
    faqs: [
      {
        question: '「公式価格 $10 相当」とは何ですか？',
        answer: '各社が公開する公式 API 料金を基準に利用量を計算します。$2.99 で、公式料金なら $10 かかる量のモデル呼び出しを利用できます。',
      },
      {
        question: '各社が提供する正規のモデルですか？',
        answer: 'はい。Tamgur は各提供元の正規モデルに接続し、別モデルへの置き換え、模倣、能力の低下は行いません。同じモデルバージョン、パラメータ、コンテキストであれば、能力は提供元のモデルと同等です。生成 AI にはランダム性があるため、返答の文面は毎回完全には一致しない場合があります。',
      },
      {
        question: 'データは非公開ですか？',
        answer: '顧客ごとのリクエストは分離され、他の顧客と共有されません。',
      },
      {
        question: 'いつ利用開始できますか？',
        answer: '通常は支払い後数秒以内に有効化されます。',
      },
      {
        question: '月額契約は必要ですか？',
        answer: '不要です。Tamgur は従量課金で、必要な利用量だけ購入できます。',
      },
    ],
    ctaTitle: 'より速く構築し、支出を抑える',
    ctaDescription: '1つの API キーで Claude、GPT、Codex、Gemini に接続。',
    footerTagline: 'より速く構築し、支出を抑える',
    footerPowered: 'Powered by Tamgur',
    contactWechat: 'WeChat に連絡',
    copyWechat: 'WeChat IDをコピー',
    copiedWechat: 'WeChat IDをコピーしました',
    copyTelegram: 'Telegram 番号をコピー',
    copiedTelegram: 'Telegram 番号をコピーしました',
    docsCenterEyebrow: 'DOCUMENTATION',
    docsCenterTitle: 'Tamgur ドキュメントセンター',
    docsCenterDescription: '接続するサービスを選択してください',
    docsAppsTitle: 'AI アプリ設定ガイド',
    docsAppsDescription: 'OpenClaw、Claude Code、Codex などの連携方法',
    docsApiTitle: '入門ガイド / API リファレンス',
    docsApiDescription: 'OpenAI 互換 API でチャット、画像、動画生成に接続',
    docsCodexTitle: 'Codex API クイックスタート',
    docsCodexDescription: 'API アドレス、キー、モデルを設定して Codex を接続',
    docsEnter: '詳しく見る',
    docsBack: 'ホームへ戻る',
  },
  vi: {
    eyebrow: 'Nền tảng AI API cho nhà phát triển',
    heroTitle: 'Tiết kiệm tới',
    heroHighlight: '70%',
    heroModelLine: 'Một API cho GPT-5, Claude và Gemini',
    heroDescription: 'API tương thích OpenAI',
    heroMigration: 'Dùng OpenAI SDK quen thuộc và chuyển đổi bằng cách thay Base URL',
    heroPriceTitle: 'Giá đầu ra GPT-5',
    heroPriceUnit: 'Mỗi 1 triệu Token đầu ra',
    heroSavingsLabel: 'Tiết kiệm 70%',
    start: 'Nhận Token dùng thử miễn phí',
    viewPricing: 'Xem giá',
    docs: 'Tài liệu',
    trust: 'Một khóa · Nhiều mô hình · Truy cập toàn cầu',
    unifiedApi: 'API hợp nhất',
    operational: 'Tất cả hệ thống hoạt động bình thường',
    recharge: 'Nạp tín dụng',
    imageGeneration: 'Tạo hình ảnh (đang thử nghiệm)',
    joinGroup: 'Tham gia cộng đồng',
    tokenReward: 'Cộng đồng và ưu đãi Token',
    telegramGroup: 'Nhóm Telegram',
    wechatGroup: 'Nhóm WeChat',
    signupBonus: 'Nhận Token miễn phí khi đăng ký',
    enterpriseDiscount: 'Ưu đãi riêng cho doanh nghiệp',
    priceCardKicker: 'Giá đơn giản, minh bạch',
    officialUsage: 'lượng API theo giá chính thức',
    priceCardDescription: 'Mức sử dụng được tính theo giá API chính thức do từng nhà cung cấp công bố.',
    saveAbout: 'Tiết kiệm khoảng 70%',
    savingsPrefix: 'Tiết kiệm tới',
    featuresEyebrow: 'Vì sao chọn Tamgur',
    featuresTitle: 'Chi phí thấp, vẫn ổn định',
    featuresDescription: 'Hạ tầng dành cho phát triển thực tế và môi trường production.',
    features: [
      { title: 'Chi phí thấp hơn', description: 'Tiết kiệm khoảng 70% so với giá API chính thức.' },
      { title: 'Nhanh và ổn định', description: 'Định tuyến tối ưu và chuyển đổi dự phòng giữ yêu cầu luôn hoạt động.' },
      { title: 'Ưu tiên riêng tư', description: 'Yêu cầu của từng khách hàng được cách ly và không chia sẻ.' },
      { title: 'Trả theo mức dùng', description: 'Không cần đăng ký tháng, chỉ trả cho lượng thực tế sử dụng.' },
      { title: 'Truy cập toàn cầu', description: 'Kích hoạt ngay và truy cập nhiều nhà cung cấp bằng một khóa.' },
    ],
    modelsEyebrow: 'Mô hình có sẵn',
    modelsTitle: 'AI hàng đầu trên một nền tảng',
    modelsDescription: 'Truy cập nhiều nhà cung cấp qua giao diện hợp nhất tương thích OpenAI.',
    providers: [
      { name: 'Claude', models: 'Opus · Sonnet · Claude Code' },
      { name: 'OpenAI & Codex', models: 'GPT-5 · GPT-5 Mini · Codex' },
      { name: 'Gemini', models: 'Gemini Pro · Gemini Flash' },
    ],
    availableNow: 'Đang hoạt động',
    integrationTitle: 'Kết nối dự án hiện có chỉ bằng cách đổi Base URL',
    pricingEyebrow: 'Giá đơn giản, minh bạch',
    pricingTitle: 'Tiết kiệm khoảng 70% cho API mô hình AI hàng đầu',
    pricingDescription: 'Đây không phải thẻ quà tặng chính thức. Số dư được khấu trừ theo giá API chính thức đã công bố của mô hình.',
    pricingPoints: [
      'Áp dụng cho mọi mô hình có trên nền tảng',
      'Không phí tháng hoặc đăng ký dài hạn',
      'Sử dụng ngay sau khi thanh toán',
    ],
    globalPlan: 'Gói trả theo mức dùng toàn cầu',
    youPay: 'Bạn trả',
    oneTimeUsage: 'trả theo mức dùng',
    officialPriceBasis: 'Giá chính thức',
    pricingNote: 'Ví dụ: các lệnh gọi có tổng giá chính thức $10 sẽ tương ứng chi phí $2.99 tại Tamgur.',
    tokenComparisonTitle: 'Ví dụ giá cho mỗi 1 triệu token',
    perMillionTokens: 'Token đầu vào và đầu ra được tính phí riêng',
    modelLabel: 'Mô hình',
    officialInput: 'Đầu vào chính thức',
    tamgurInput: 'Đầu vào Tamgur',
    officialOutput: 'Đầu ra chính thức',
    tamgurOutput: 'Đầu ra Tamgur',
    pricingUpdated: 'Giá được kiểm tra ngày {date}',
    pricingDisclaimer: 'Chỉ là ước tính minh họa. Giá Tamgur được tính bằng 29,9% giá API chính thức đã công bố. Nhà cung cấp có thể thay đổi giá; hãy xem các trang chính thức được liên kết để biết mức hiện tại.',
    officialSource: 'Nguồn giá chính thức',
    geminiPricingNote: 'Ví dụ Gemini 2.5 Pro áp dụng cho yêu cầu tiêu chuẩn có prompt tối đa 200 nghìn token.',
    buyCredits: 'Mua lượng dùng API',
    audienceEyebrow: 'Dành cho',
    audienceTitle: 'Dành cho người xây dựng',
    audiences: [
      { title: 'Nhà phát triển', description: 'Xây dựng và vận hành ứng dụng AI với chi phí thấp hơn.' },
      { title: 'Startup', description: 'Kiểm soát chi phí suy luận trong khi mở rộng.' },
      { title: 'AI Builder', description: 'Kết hợp và chuyển đổi nhiều mô hình trên một nền tảng.' },
      { title: 'Sinh viên', description: 'Thử nghiệm mà không cần gói đăng ký đắt tiền.' },
    ],
    faqEyebrow: 'Câu hỏi thường gặp',
    faqTitle: 'Điều cần biết trước khi bắt đầu',
    faqDescription: 'Trả lời trực tiếp về giá, riêng tư, kích hoạt và API.',
    faqs: [
      {
        question: '“$10 lượng dùng theo giá chính thức” nghĩa là gì?',
        answer: 'Tamgur tính mức dùng theo giá API chính thức được công bố. Với $2.99, bạn nhận lượng gọi mô hình có giá $10 nếu tính theo mức giá đó.',
      },
      {
        question: 'Đây có phải mô hình chính hãng từ nhà cung cấp không?',
        answer: 'Có. Tamgur kết nối tới các mô hình chính hãng do nhà cung cấp gốc phát hành, không thay thế, giả lập mô hình khác hoặc giảm năng lực. Với cùng phiên bản, tham số và ngữ cảnh, năng lực nhất quán với mô hình của nhà cung cấp. Câu chữ cụ thể vẫn có thể khác do AI tạo sinh có tính ngẫu nhiên.',
      },
      {
        question: 'Dữ liệu của tôi có riêng tư không?',
        answer: 'Yêu cầu của khách hàng được cách ly và không chia sẻ với khách hàng khác.',
      },
      {
        question: 'Kích hoạt nhanh đến đâu?',
        answer: 'Quyền truy cập thường được kích hoạt trong vài giây sau thanh toán.',
      },
      {
        question: 'Có cần đăng ký hàng tháng không?',
        answer: 'Không. Tamgur tính phí theo mức dùng và bạn chỉ nạp lượng cần thiết.',
      },
    ],
    ctaTitle: 'Xây nhanh hơn. Chi ít hơn.',
    ctaDescription: 'Kết nối Claude, GPT, Codex và Gemini bằng một khóa API.',
    footerTagline: 'Xây nhanh hơn. Chi ít hơn.',
    footerPowered: 'Powered by Tamgur',
    contactWechat: 'Liên hệ WeChat',
    copyWechat: 'Sao chép WeChat ID',
    copiedWechat: 'Đã sao chép WeChat ID',
    copyTelegram: 'Sao chép số Telegram',
    copiedTelegram: 'Đã sao chép số Telegram',
    docsCenterEyebrow: 'TÀI LIỆU',
    docsCenterTitle: 'Trung tâm tài liệu Tamgur',
    docsCenterDescription: 'Chọn dịch vụ bạn muốn tích hợp',
    docsAppsTitle: 'Cấu hình ứng dụng AI',
    docsAppsDescription: 'Hướng dẫn tích hợp OpenClaw, Claude Code, Codex và các ứng dụng khác',
    docsApiTitle: 'Bắt đầu / Tài liệu API',
    docsApiDescription: 'Kết nối chat, hình ảnh và video qua API tương thích OpenAI',
    docsCodexTitle: 'Khởi động nhanh Codex API',
    docsCodexDescription: 'Cấu hình địa chỉ API, khóa và mô hình để kết nối Codex',
    docsEnter: 'Xem tài liệu',
    docsBack: 'Về trang chủ',
  },
};

const SEO_BASE_URL = 'https://api.tamgur.tech/home/index.html';

const seoMetadata: Record<
  Locale,
  { title: string; description: string; ogLocale: string }
> = {
  'zh-CN': {
    title: '低价 Claude、GPT-5、Codex 与 Gemini API | Tamgur',
    description: '通过稳定、兼容 OpenAI 的统一 API 接入原厂 Claude、GPT-5、Codex 与 Gemini 模型。支付 $2.99，获得 $10 官方价格等值用量。',
    ogLocale: 'zh_CN',
  },
  en: {
    title: 'Low-Cost Claude, GPT-5, Codex & Gemini API | Tamgur',
    description: 'Access official Claude, GPT-5, Codex and Gemini models through one stable, OpenAI-compatible API. Pay $2.99 for $10 of official-price API usage.',
    ogLocale: 'en_US',
  },
  fr: {
    title: 'API Claude, GPT-5, Codex et Gemini à prix réduit | Tamgur',
    description: "Accédez aux modèles officiels Claude, GPT-5, Codex et Gemini via une API stable compatible OpenAI. Payez 2,99 $ pour 10 $ d'utilisation au tarif officiel.",
    ogLocale: 'fr_FR',
  },
  ru: {
    title: 'Недорогой API Claude, GPT-5, Codex и Gemini | Tamgur',
    description: 'Официальные модели Claude, GPT-5, Codex и Gemini через единый стабильный API, совместимый с OpenAI. $2.99 за $10 использования по официальным тарифам.',
    ogLocale: 'ru_RU',
  },
  ja: {
    title: '低コスト Claude・GPT-5・Codex・Gemini API | Tamgur',
    description: '正規の Claude、GPT-5、Codex、Gemini モデルへ、安定した OpenAI 互換 API で接続。$2.99 で公式価格 $10 相当の API 利用量。',
    ogLocale: 'ja_JP',
  },
  vi: {
    title: 'API Claude, GPT-5, Codex và Gemini chi phí thấp | Tamgur',
    description: 'Truy cập mô hình chính hãng Claude, GPT-5, Codex và Gemini qua API ổn định tương thích OpenAI. Trả $2.99 cho $10 lượng dùng theo giá chính thức.',
    ogLocale: 'vi_VN',
  },
};

function setMetaContent(selector: string, content: string) {
  document.querySelector<HTMLMetaElement>(selector)?.setAttribute('content', content);
}

function normalizeLocale(value: unknown): Locale | null {
  if (typeof value !== 'string') return null;
  const normalized = value.trim().toLowerCase().replace('_', '-');
  if (
    normalized === 'zh' ||
    normalized.startsWith('zh-cn') ||
    normalized.startsWith('zh-hans')
  ) {
    return 'zh-CN';
  }
  if (normalized.startsWith('en')) return 'en';
  if (normalized.startsWith('fr')) return 'fr';
  if (normalized.startsWith('ru')) return 'ru';
  if (normalized.startsWith('ja') || normalized.startsWith('jp')) return 'ja';
  if (normalized.startsWith('vi')) return 'vi';
  return null;
}

function readUrlLocale(): Locale | null {
  const params = new URLSearchParams(window.location.search);
  return normalizeLocale(
    params.get('lang') ?? params.get('locale') ?? params.get('language'),
  );
}

function readParentLocale(): Locale | null {
  if (window.parent === window) return null;
  try {
    const root = window.parent.document.documentElement;
    const body = window.parent.document.body;
    return normalizeLocale(
      window.parent.localStorage.getItem('i18nextLng') ||
      root.lang ||
      root.dataset.locale ||
      root.dataset.language ||
      body?.dataset.locale ||
      body?.dataset.language,
    );
  } catch {
    return null;
  }
}

function readMessageLocale(data: unknown): Locale | null {
  if (!data || typeof data !== 'object') return null;
  const message = data as Record<string, unknown>;
  if (
    message.type === 'language-change' ||
    message.type === 'locale-change' ||
    message.type === 'newapi-language' ||
    message.type === 'newapi-locale' ||
    message.type === 'set-language'
  ) {
    return normalizeLocale(
      message.language ?? message.locale ?? message.lang ?? message.value,
    );
  }
  return null;
}

export function useLocale() {
  const [urlLocale] = useState<Locale | null>(() => readUrlLocale());
  const [messageLocale, setMessageLocale] = useState<Locale | null>(null);
  const [parentLocale, setParentLocale] = useState<Locale | null>(
    () => readParentLocale(),
  );
  const browserLocale = normalizeLocale(window.navigator.language) ?? 'en';
  const locale = parentLocale ?? messageLocale ?? urlLocale ?? browserLocale;

  useEffect(() => {
    const onMessage = (event: MessageEvent) => {
      const nextLocale = readMessageLocale(event.data);
      if (nextLocale) setMessageLocale(nextLocale);
    };
    window.addEventListener('message', onMessage);
    return () => window.removeEventListener('message', onMessage);
  }, []);

  useEffect(() => {
    if (window.parent === window) return;
    let observer: MutationObserver | undefined;
    let pollTimer = 0;
    try {
      const root = window.parent.document.documentElement;
      const body = window.parent.document.body;
      const sync = () => setParentLocale(readParentLocale());
      observer = new MutationObserver(sync);
      observer.observe(root, {
        attributes: true,
        attributeFilter: ['lang', 'data-locale', 'data-language'],
      });
      if (body) {
        observer.observe(body, {
          attributes: true,
          attributeFilter: ['data-locale', 'data-language'],
        });
      }
      sync();
      pollTimer = window.setInterval(sync, 300);
    } catch {
      // Cross-origin parents can respond through postMessage.
    }
    window.parent.postMessage({ type: 'icon-locale-ready' }, '*');
    return () => {
      observer?.disconnect();
      window.clearInterval(pollTimer);
    };
  }, []);

  useEffect(() => {
    const onStorage = (event: StorageEvent) => {
      if (event.key === 'i18nextLng') {
        setParentLocale(normalizeLocale(event.newValue));
      }
    };
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, []);

  useEffect(() => {
    const seo = seoMetadata[locale];
    const canonicalUrl =
      locale === 'en'
        ? SEO_BASE_URL
        : `${SEO_BASE_URL}?lang=${encodeURIComponent(locale)}`;

    document.documentElement.lang = locale;
    document.title = seo.title;
    document
      .querySelector<HTMLLinkElement>('link[rel="canonical"]')
      ?.setAttribute('href', canonicalUrl);
    setMetaContent('meta[name="description"]', seo.description);
    setMetaContent('meta[property="og:title"]', seo.title);
    setMetaContent('meta[property="og:description"]', seo.description);
    setMetaContent('meta[property="og:url"]', canonicalUrl);
    setMetaContent('meta[property="og:locale"]', seo.ogLocale);
    setMetaContent('meta[name="twitter:title"]', seo.title);
    setMetaContent('meta[name="twitter:description"]', seo.description);
  }, [locale]);

  return { locale, t: messages[locale] };
}
