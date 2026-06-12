import { useEffect, useState } from 'react';

export type Locale = 'zh-CN' | 'en' | 'fr' | 'ru' | 'ja' | 'vi';

export type Messages = {
  eyebrow: string;
  titleLead: string;
  titleTail: string;
  descriptionLine1: string;
  descriptionLine2: string;
  start: string;
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
  featuresEyebrow: string;
  featuresTitle: string;
  featuresDescription: string;
  openClawTitle: string;
  openClawDescription: string;
  flexibleTitle: string;
  flexibleDescription: string;
  modelsTitle: string;
  modelsDescription: string;
  supportTitle: string;
  supportDescription: string;
  developerTitle: string;
  developerDescription: string;
  stepsEyebrow: string;
  stepsTitle: string;
  stepOneTitle: string;
  stepOneDescription: string;
  stepTwoTitle: string;
  stepTwoDescription: string;
  stepThreeTitle: string;
  stepThreeDescription: string;
  ctaTitle: string;
  ctaDescription: string;
  signupBonus: string;
  enterpriseDiscount: string;
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
  contactWechat: string;
  copyWechat: string;
  copiedWechat: string;
};

export const messages: Record<Locale, Messages> = {
  'zh-CN': {
    eyebrow: '统一智能基础设施',
    titleLead: '一个接口，',
    titleTail: '连接所有',
    descriptionLine1: '聚合全球主流大模型，兼容 OpenAI API 格式。',
    descriptionLine2: '更稳定的链路，更透明的成本，为每一次调用而设计。',
    start: '立即接入 API',
    docs: '查看教程文档',
    trust: '一个密钥 · 所有模型 · 随时可用',
    unifiedApi: '统一 API',
    operational: '所有系统运行正常',
    recharge: '额度充值',
    imageGeneration: '在线生图',
    joinGroup: '加入群领取 Token',
    tokenReward: '社区专属福利',
    telegramGroup: 'Telegram 群',
    wechatGroup: '微信群',
    featuresEyebrow: '为什么选择 icon',
    featuresTitle: '为稳定调用而生',
    featuresDescription: '从个人项目到企业级业务，用一套简单、透明且可靠的 AI 基础设施持续扩展。',
    openClawTitle: '完美适配 OpenClaw',
    openClawDescription: '只需修改 Base URL 和 API Key，即可为智能体接入多家主流模型，随时切换更合适的能力。',
    flexibleTitle: '灵活透明计费',
    flexibleDescription: '按实际 Token 用量精确计费，余额长期有效，成本清晰可控。',
    modelsTitle: '全球模型聚合',
    modelsDescription: '一个 API Key 解锁 GPT、Claude、Gemini、DeepSeek 等主流模型。',
    supportTitle: '稳定服务保障',
    supportDescription: '多线路智能调度与故障切换，为高并发和关键业务提供稳定支撑。',
    developerTitle: '开发者友好',
    developerDescription: '兼容 OpenAI 接口协议，无需重写代码即可接入现有项目和工具。',
    stepsEyebrow: '快速开始',
    stepsTitle: '三步连接智能世界',
    stepOneTitle: '创建 API Key',
    stepOneDescription: '进入控制台创建密钥，并按需设置额度与权限。',
    stepTwoTitle: '替换接口地址',
    stepTwoDescription: '沿用熟悉的 OpenAI SDK，只需替换 Base URL。',
    stepThreeTitle: '选择模型调用',
    stepThreeDescription: '自由切换模型，让每个任务使用更合适的智能能力。',
    ctaTitle: '准备好开始构建了吗？',
    ctaDescription: '一个密钥连接主流 AI 模型，让下一次调用更简单。',
    signupBonus: '注册即送免费 Token',
    enterpriseDiscount: '企业批量订购享专属折扣',
    docsCenterEyebrow: 'DOCUMENTATION',
    docsCenterTitle: 'Tamgur开放平台文档中心',
    docsCenterDescription: '选择你需要接入的服务类型',
    docsAppsTitle: 'AI 应用配置文档',
    docsAppsDescription: 'OpenClaw、Claude Code、Codex 等 AI 应用集成方案',
    docsApiTitle: '新手指南 / API 接口文档',
    docsApiDescription: '接入聊天、画图、视频生成等 AI 能力，兼容 OpenAI API 格式',
    docsCodexTitle: 'Codex 简单版对接 API 教程',
    docsCodexDescription: '快速配置 API 地址、密钥与模型，帮助 Codex 新用户完成基础接入',
    docsEnter: '进入查阅',
    docsBack: '返回首页',
    contactWechat: '任何问题请联系 WeChat',
    copyWechat: '复制微信号',
    copiedWechat: '已复制',
  },
  en: {
    eyebrow: 'Unified intelligence infrastructure',
    titleLead: 'One interface,',
    titleTail: 'every',
    descriptionLine1: 'Access leading AI models through one OpenAI-compatible API.',
    descriptionLine2: 'Stable routing and transparent pricing, designed for every call.',
    start: 'Connect API now',
    docs: 'View tutorials',
    trust: 'One key · Every model · Always ready',
    unifiedApi: 'Unified API',
    operational: 'All systems operational',
    recharge: 'Add credits',
    imageGeneration: 'Generate images',
    joinGroup: 'Join & claim Token',
    tokenReward: 'Community rewards',
    telegramGroup: 'Telegram group',
    wechatGroup: 'WeChat group',
    featuresEyebrow: 'Why icon',
    featuresTitle: 'Built for reliable inference',
    featuresDescription: 'A simple, transparent and dependable AI infrastructure that scales from side projects to production.',
    openClawTitle: 'Ready for OpenClaw',
    openClawDescription: 'Change the Base URL and API key to connect your agents with leading models and switch capabilities at any time.',
    flexibleTitle: 'Transparent usage pricing',
    flexibleDescription: 'Pay precisely for consumed Token. Credits stay available and costs remain predictable.',
    modelsTitle: 'Global model access',
    modelsDescription: 'Unlock GPT, Claude, Gemini, DeepSeek and more with a single API key.',
    supportTitle: 'Reliable by design',
    supportDescription: 'Intelligent routing and failover keep high-volume and critical workloads moving.',
    developerTitle: 'Developer friendly',
    developerDescription: 'OpenAI-compatible by default, so existing projects and tools connect without rewrites.',
    stepsEyebrow: 'Quick start',
    stepsTitle: 'Connect intelligence in three steps',
    stepOneTitle: 'Create an API key',
    stepOneDescription: 'Create a key in the console and configure limits and permissions.',
    stepTwoTitle: 'Replace the endpoint',
    stepTwoDescription: 'Keep your OpenAI SDK and update only the Base URL.',
    stepThreeTitle: 'Choose and call',
    stepThreeDescription: 'Switch models freely and match every task with the right capability.',
    ctaTitle: 'Ready to start building?',
    ctaDescription: 'Connect leading AI models with one key and simplify every call.',
    signupBonus: 'Free Token when you sign up',
    enterpriseDiscount: 'Exclusive discounts for enterprise orders',
    docsCenterEyebrow: 'DOCUMENTATION',
    docsCenterTitle: 'Tamgur Documentation Center',
    docsCenterDescription: 'Choose the service you want to integrate',
    docsAppsTitle: 'AI application setup',
    docsAppsDescription: 'Integration guides for OpenClaw, Claude Code, Codex and other AI apps',
    docsApiTitle: 'Getting started / API reference',
    docsApiDescription: 'Connect chat, image and video generation through an OpenAI-compatible API',
    docsCodexTitle: 'Codex API quickstart',
    docsCodexDescription: 'Configure endpoint, key and model to get Codex connected quickly',
    docsEnter: 'Explore',
    docsBack: 'Back home',
    contactWechat: 'Questions? Contact us on WeChat',
    copyWechat: 'Copy WeChat ID',
    copiedWechat: 'Copied',
  },
  fr: {
    eyebrow: "Infrastructure d'intelligence unifiée",
    titleLead: 'Une interface,',
    titleTail: 'toutes les',
    descriptionLine1: "Accédez aux principaux modèles d'IA via une API compatible OpenAI.",
    descriptionLine2: 'Un routage stable et des tarifs transparents, à chaque appel.',
    start: "Connecter l'API",
    docs: 'Voir les tutoriels',
    trust: 'Une clé · Tous les modèles · Toujours disponible',
    unifiedApi: 'API unifiée',
    operational: 'Tous les systèmes sont opérationnels',
    recharge: 'Recharger',
    imageGeneration: 'Générer des images',
    joinGroup: 'Rejoindre et recevoir des Token',
    tokenReward: 'Avantages communautaires',
    telegramGroup: 'Groupe Telegram',
    wechatGroup: 'Groupe WeChat',
    featuresEyebrow: 'Pourquoi icon',
    featuresTitle: 'Conçu pour une IA fiable',
    featuresDescription: "Une infrastructure simple, transparente et fiable, du projet personnel jusqu'à la production.",
    openClawTitle: 'Compatible avec OpenClaw',
    openClawDescription: "Modifiez l'URL de base et la clé API pour connecter vos agents aux principaux modèles.",
    flexibleTitle: 'Tarification transparente',
    flexibleDescription: 'Payez uniquement les Token consommés, avec des crédits durables et des coûts prévisibles.',
    modelsTitle: 'Accès mondial aux modèles',
    modelsDescription: 'GPT, Claude, Gemini, DeepSeek et plus encore avec une seule clé API.',
    supportTitle: 'Fiabilité intégrée',
    supportDescription: 'Le routage intelligent et le basculement protègent les charges critiques.',
    developerTitle: 'Pensé pour les développeurs',
    developerDescription: "Compatible OpenAI, sans réécriture de vos projets et outils existants.",
    stepsEyebrow: 'Démarrage rapide',
    stepsTitle: "Connectez l'intelligence en trois étapes",
    stepOneTitle: 'Créez une clé API',
    stepOneDescription: 'Créez une clé dans la console et configurez les limites.',
    stepTwoTitle: "Remplacez l'adresse",
    stepTwoDescription: "Gardez votre SDK OpenAI et modifiez seulement l'URL de base.",
    stepThreeTitle: 'Choisissez un modèle',
    stepThreeDescription: 'Changez librement de modèle selon chaque besoin.',
    ctaTitle: 'Prêt à construire ?',
    ctaDescription: "Connectez les meilleurs modèles d'IA avec une seule clé.",
    signupBonus: "Token gratuits à l'inscription",
    enterpriseDiscount: 'Tarifs préférentiels pour les entreprises',
    docsCenterEyebrow: 'DOCUMENTATION',
    docsCenterTitle: 'Tamgur Centre de documentation icon',
    docsCenterDescription: 'Choisissez le service à intégrer',
    docsAppsTitle: "Configuration d'applications IA",
    docsAppsDescription: 'Guides pour OpenClaw, Claude Code, Codex et autres applications',
    docsApiTitle: 'Guide de démarrage / API',
    docsApiDescription: 'Connectez le chat, les images et la vidéo via une API compatible OpenAI',
    docsCodexTitle: 'Démarrage rapide Codex',
    docsCodexDescription: "Configurez l'adresse, la clé et le modèle pour connecter Codex",
    docsEnter: 'Consulter',
    docsBack: "Retour à l'accueil",
    contactWechat: 'Une question ? Contactez-nous sur WeChat',
    copyWechat: "Copier l'identifiant WeChat",
    copiedWechat: 'Copié',
  },
  ru: {
    eyebrow: 'Единая инфраструктура искусственного интеллекта',
    titleLead: 'Один интерфейс,',
    titleTail: 'все модели',
    descriptionLine1: 'Доступ к ведущим ИИ-моделям через API, совместимый с OpenAI.',
    descriptionLine2: 'Стабильная маршрутизация и прозрачные цены для каждого запроса.',
    start: 'Подключить API',
    docs: 'Инструкции',
    trust: 'Один ключ · Все модели · Всегда доступны',
    unifiedApi: 'Единый API',
    operational: 'Все системы работают',
    recharge: 'Пополнить баланс',
    imageGeneration: 'Создать изображение',
    joinGroup: 'Вступить и получить токены',
    tokenReward: 'Бонусы сообщества',
    telegramGroup: 'Группа Telegram',
    wechatGroup: 'Группа WeChat',
    featuresEyebrow: 'Почему icon',
    featuresTitle: 'Надёжная инфраструктура ИИ',
    featuresDescription: 'Простая и прозрачная платформа для проектов любого масштаба.',
    openClawTitle: 'Совместимость с OpenClaw',
    openClawDescription: 'Замените Base URL и API-ключ, чтобы подключить агентов к ведущим моделям.',
    flexibleTitle: 'Прозрачная оплата',
    flexibleDescription: 'Оплачивайте только использованные токены с понятным контролем расходов.',
    modelsTitle: 'Все модели в одном месте',
    modelsDescription: 'GPT, Claude, Gemini, DeepSeek и другие модели по одному API-ключу.',
    supportTitle: 'Стабильная работа',
    supportDescription: 'Умная маршрутизация и переключение каналов защищают важные нагрузки.',
    developerTitle: 'Удобно разработчикам',
    developerDescription: 'Совместимость с OpenAI позволяет подключаться без переписывания кода.',
    stepsEyebrow: 'Быстрый старт',
    stepsTitle: 'Три шага к миру ИИ',
    stepOneTitle: 'Создайте API-ключ',
    stepOneDescription: 'Создайте ключ в консоли и настройте лимиты.',
    stepTwoTitle: 'Замените адрес',
    stepTwoDescription: 'Оставьте OpenAI SDK и измените только Base URL.',
    stepThreeTitle: 'Выберите модель',
    stepThreeDescription: 'Свободно переключайте модели под каждую задачу.',
    ctaTitle: 'Готовы начать?',
    ctaDescription: 'Подключите ведущие модели ИИ с помощью одного ключа.',
    signupBonus: 'Бесплатные токены за регистрацию',
    enterpriseDiscount: 'Специальные скидки для корпоративных заказов',
    docsCenterEyebrow: 'ДОКУМЕНТАЦИЯ',
    docsCenterTitle: 'Tamgur Центр документации icon',
    docsCenterDescription: 'Выберите нужный тип интеграции',
    docsAppsTitle: 'Настройка ИИ-приложений',
    docsAppsDescription: 'Интеграция OpenClaw, Claude Code, Codex и других приложений',
    docsApiTitle: 'Начало работы / API',
    docsApiDescription: 'Чат, изображения и видео через API, совместимый с OpenAI',
    docsCodexTitle: 'Быстрое подключение Codex',
    docsCodexDescription: 'Настройте адрес API, ключ и модель для подключения Codex',
    docsEnter: 'Открыть',
    docsBack: 'На главную',
    contactWechat: 'Есть вопросы? Напишите нам в WeChat',
    copyWechat: 'Копировать WeChat ID',
    copiedWechat: 'Скопировано',
  },
  ja: {
    eyebrow: '統合インテリジェンス基盤',
    titleLead: 'ひとつの API で、',
    titleTail: 'すべての',
    descriptionLine1: 'OpenAI 互換 API で、主要な AI モデルへシームレスに接続。',
    descriptionLine2: '安定したルーティングと透明な料金で、すべての呼び出しを支えます。',
    start: 'API に接続',
    docs: 'チュートリアル',
    trust: 'ひとつのキー · すべてのモデル · いつでも利用可能',
    unifiedApi: '統合 API',
    operational: 'すべてのシステムは正常です',
    recharge: 'クレジットを追加',
    imageGeneration: '画像を生成',
    joinGroup: 'グループ参加でトークン獲得',
    tokenReward: 'コミュニティ限定特典',
    telegramGroup: 'Telegram グループ',
    wechatGroup: 'WeChat グループ',
    featuresEyebrow: 'が選ばれる理由',
    featuresTitle: '安定した推論のために',
    featuresDescription: '個人開発から本番環境まで拡張できる、シンプルで透明性の高い AI 基盤。',
    openClawTitle: 'OpenClaw に完全対応',
    openClawDescription: 'Base URL と API キーを変更するだけで、主要モデルをエージェントに接続できます。',
    flexibleTitle: '透明な従量課金',
    flexibleDescription: '実際に使用した Token のみを課金。残高とコストを明確に管理できます。',
    modelsTitle: '主要モデルを集約',
    modelsDescription: 'ひとつの API キーで GPT、Claude、Gemini、DeepSeek などを利用できます。',
    supportTitle: '安定したサービス',
    supportDescription: 'インテリジェントなルーティングとフェイルオーバーで重要な処理を支えます。',
    developerTitle: '開発者にやさしい',
    developerDescription: 'OpenAI 互換のため、既存コードを書き直さずに接続できます。',
    stepsEyebrow: 'クイックスタート',
    stepsTitle: '3 ステップで AI に接続',
    stepOneTitle: 'API キーを作成',
    stepOneDescription: 'コンソールでキーを作成し、上限と権限を設定します。',
    stepTwoTitle: '接続先を変更',
    stepTwoDescription: 'OpenAI SDK はそのまま、Base URL のみ変更します。',
    stepThreeTitle: 'モデルを選択',
    stepThreeDescription: 'タスクに合わせて最適なモデルを自由に切り替えます。',
    ctaTitle: '構築を始めませんか？',
    ctaDescription: 'ひとつのキーで主要 AI モデルに接続できます。',
    signupBonus: '登録で無料トークンをプレゼント',
    enterpriseDiscount: '法人一括購入限定割引',
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
    contactWechat: 'ご質問は WeChat まで',
    copyWechat: 'WeChat IDをコピー',
    copiedWechat: 'コピーしました',
  },
  vi: {
    eyebrow: 'Hạ tầng trí tuệ hợp nhất',
    titleLead: 'Một giao diện,',
    titleTail: 'mọi mô hình',
    descriptionLine1: 'Truy cập các mô hình AI hàng đầu qua API tương thích OpenAI.',
    descriptionLine2: 'Định tuyến ổn định và chi phí minh bạch cho mọi lượt gọi.',
    start: 'Kết nối API',
    docs: 'Xem hướng dẫn',
    trust: 'Một khóa · Mọi mô hình · Luôn sẵn sàng',
    unifiedApi: 'API hợp nhất',
    operational: 'Tất cả hệ thống hoạt động bình thường',
    recharge: 'Nạp tín dụng',
    imageGeneration: 'Tạo hình ảnh',
    joinGroup: 'Tham gia nhận token',
    tokenReward: 'Ưu đãi cộng đồng',
    telegramGroup: 'Nhóm Telegram',
    wechatGroup: 'Nhóm WeChat',
    featuresEyebrow: 'Vì sao chọn icon',
    featuresTitle: 'Được xây dựng cho suy luận ổn định',
    featuresDescription: 'Hạ tầng AI đơn giản, minh bạch và đáng tin cậy từ dự án cá nhân đến sản phẩm thực tế.',
    openClawTitle: 'Tương thích OpenClaw',
    openClawDescription: 'Chỉ cần đổi Base URL và API key để kết nối tác nhân với các mô hình hàng đầu.',
    flexibleTitle: 'Định giá minh bạch',
    flexibleDescription: 'Chỉ trả cho số token đã dùng, với số dư lâu dài và chi phí dễ kiểm soát.',
    modelsTitle: 'Tổng hợp mô hình toàn cầu',
    modelsDescription: 'Truy cập GPT, Claude, Gemini, DeepSeek và nhiều hơn với một API key.',
    supportTitle: 'Ổn định từ thiết kế',
    supportDescription: 'Định tuyến thông minh và chuyển đổi dự phòng bảo vệ tác vụ quan trọng.',
    developerTitle: 'Thân thiện với lập trình viên',
    developerDescription: 'Tương thích OpenAI, kết nối dự án hiện có mà không cần viết lại.',
    stepsEyebrow: 'Bắt đầu nhanh',
    stepsTitle: 'Kết nối AI trong ba bước',
    stepOneTitle: 'Tạo API key',
    stepOneDescription: 'Tạo khóa trong bảng điều khiển và thiết lập giới hạn.',
    stepTwoTitle: 'Thay địa chỉ API',
    stepTwoDescription: 'Giữ nguyên OpenAI SDK và chỉ đổi Base URL.',
    stepThreeTitle: 'Chọn mô hình',
    stepThreeDescription: 'Chuyển đổi mô hình linh hoạt cho từng tác vụ.',
    ctaTitle: 'Sẵn sàng bắt đầu?',
    ctaDescription: 'Kết nối các mô hình AI hàng đầu chỉ với một khóa.',
    signupBonus: 'Đăng ký nhận token miễn phí',
    enterpriseDiscount: 'Ưu đãi riêng cho đơn hàng doanh nghiệp',
    docsCenterEyebrow: 'TÀI LIỆU',
    docsCenterTitle: 'Tamgur Trung tâm tài liệu icon',
    docsCenterDescription: 'Chọn dịch vụ bạn muốn tích hợp',
    docsAppsTitle: 'Cấu hình ứng dụng AI',
    docsAppsDescription: 'Hướng dẫn tích hợp OpenClaw, Claude Code, Codex và các ứng dụng khác',
    docsApiTitle: 'Bắt đầu / Tài liệu API',
    docsApiDescription: 'Kết nối chat, hình ảnh và video qua API tương thích OpenAI',
    docsCodexTitle: 'Khởi động nhanh Codex API',
    docsCodexDescription: 'Cấu hình địa chỉ API, khóa và mô hình để kết nối Codex',
    docsEnter: 'Xem tài liệu',
    docsBack: 'Về trang chủ',
    contactWechat: 'Có câu hỏi? Liên hệ qua WeChat',
    copyWechat: 'Sao chép WeChat ID',
    copiedWechat: 'Đã sao chép',
  },
};

function normalizeLocale(value: unknown): Locale | null {
  if (typeof value !== 'string') return null;
  const normalized = value.trim().toLowerCase().replace('_', '-');
  if (normalized === 'zh' || normalized.startsWith('zh-cn') || normalized.startsWith('zh-hans')) return 'zh-CN';
  if (normalized.startsWith('en')) return 'en';
  if (normalized.startsWith('fr')) return 'fr';
  if (normalized.startsWith('ru')) return 'ru';
  if (normalized.startsWith('ja') || normalized.startsWith('jp')) return 'ja';
  if (normalized.startsWith('vi')) return 'vi';
  return null;
}

function readUrlLocale(): Locale | null {
  const params = new URLSearchParams(window.location.search);
  return normalizeLocale(params.get('lang') ?? params.get('locale') ?? params.get('language'));
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
    return normalizeLocale(message.language ?? message.locale ?? message.lang ?? message.value);
  }
  return null;
}

export function useLocale() {
  const [urlLocale] = useState<Locale | null>(() => readUrlLocale());
  const [messageLocale, setMessageLocale] = useState<Locale | null>(null);
  const [parentLocale, setParentLocale] = useState<Locale | null>(() => readParentLocale());
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
    document.documentElement.lang = locale;
    document.title = `· ${messages[locale].eyebrow}`;
  }, [locale]);

  return { locale, t: messages[locale] };
}
