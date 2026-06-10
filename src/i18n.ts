import { useEffect, useState } from 'react';

export type Locale = 'zh-CN' | 'en' | 'fr' | 'ru' | 'ja' | 'vi';

export type Messages = {
  localeName: string;
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
  theme: {
    light: string;
    dark: string;
    auto: string;
    action: string;
  };
};

export const localeOptions: Array<{ value: Locale; label: string }> = [
  { value: 'zh-CN', label: '简体中文' },
  { value: 'en', label: 'English' },
  { value: 'fr', label: 'Français' },
  { value: 'ru', label: 'Русский' },
  { value: 'ja', label: '日本語' },
  { value: 'vi', label: 'Tiếng Việt' },
];

export const messages: Record<Locale, Messages> = {
  'zh-CN': {
    localeName: '简体中文',
    eyebrow: '统一智能基础设施',
    titleLead: '一个接口，',
    titleTail: '连接所有',
    descriptionLine1: '聚合全球主流大模型，兼容 OpenAI API 格式。',
    descriptionLine2: '更稳定的链路，更透明的成本，为每一次调用而设计。',
    start: '开始使用',
    docs: '查看文档',
    trust: '一个密钥 · 所有模型 · 随时可用',
    unifiedApi: '统一 API',
    operational: '所有系统运行正常',
    theme: { light: '浅色', dark: '深色', auto: '自动', action: '点击切换主题' },
  },
  en: {
    localeName: 'English',
    eyebrow: 'Unified intelligence infrastructure',
    titleLead: 'One interface,',
    titleTail: 'every',
    descriptionLine1: 'Access leading AI models through one OpenAI-compatible API.',
    descriptionLine2: 'Stable routing and transparent pricing, designed for every call.',
    start: 'Get started',
    docs: 'View docs',
    trust: 'One key · Every model · Always ready',
    unifiedApi: 'Unified API',
    operational: 'All systems operational',
    theme: { light: 'Light', dark: 'Dark', auto: 'Auto', action: 'Switch theme' },
  },
  fr: {
    localeName: 'Français',
    eyebrow: "Infrastructure d'intelligence unifiée",
    titleLead: 'Une interface,',
    titleTail: 'toutes les',
    descriptionLine1: "Accédez aux principaux modèles d'IA via une API compatible OpenAI.",
    descriptionLine2: 'Un routage stable et des tarifs transparents, à chaque appel.',
    start: 'Commencer',
    docs: 'Voir la documentation',
    trust: 'Une clé · Tous les modèles · Toujours disponible',
    unifiedApi: 'API unifiée',
    operational: 'Tous les systèmes sont opérationnels',
    theme: { light: 'Clair', dark: 'Sombre', auto: 'Auto', action: 'Changer de thème' },
  },
  ru: {
    localeName: 'Русский',
    eyebrow: 'Единая инфраструктура искусственного интеллекта',
    titleLead: 'Один интерфейс,',
    titleTail: 'все модели',
    descriptionLine1: 'Доступ к ведущим ИИ-моделям через API, совместимый с OpenAI.',
    descriptionLine2: 'Стабильная маршрутизация и прозрачные цены для каждого запроса.',
    start: 'Начать',
    docs: 'Документация',
    trust: 'Один ключ · Все модели · Всегда доступны',
    unifiedApi: 'Единый API',
    operational: 'Все системы работают',
    theme: { light: 'Светлая', dark: 'Тёмная', auto: 'Авто', action: 'Сменить тему' },
  },
  ja: {
    localeName: '日本語',
    eyebrow: '統合インテリジェンス基盤',
    titleLead: 'ひとつの API で、',
    titleTail: 'すべての',
    descriptionLine1: 'OpenAI 互換 API で、主要な AI モデルへシームレスに接続。',
    descriptionLine2: '安定したルーティングと透明な料金で、すべての呼び出しを支えます。',
    start: '今すぐ始める',
    docs: 'ドキュメント',
    trust: 'ひとつのキー · すべてのモデル · いつでも利用可能',
    unifiedApi: '統合 API',
    operational: 'すべてのシステムは正常です',
    theme: { light: 'ライト', dark: 'ダーク', auto: '自動', action: 'テーマを切り替え' },
  },
  vi: {
    localeName: 'Tiếng Việt',
    eyebrow: 'Hạ tầng trí tuệ hợp nhất',
    titleLead: 'Một giao diện,',
    titleTail: 'mọi mô hình',
    descriptionLine1: 'Truy cập các mô hình AI hàng đầu qua API tương thích OpenAI.',
    descriptionLine2: 'Định tuyến ổn định và chi phí minh bạch cho mọi lượt gọi.',
    start: 'Bắt đầu',
    docs: 'Xem tài liệu',
    trust: 'Một khóa · Mọi mô hình · Luôn sẵn sàng',
    unifiedApi: 'API hợp nhất',
    operational: 'Tất cả hệ thống hoạt động bình thường',
    theme: { light: 'Sáng', dark: 'Tối', auto: 'Tự động', action: 'Đổi giao diện' },
  },
};

const STORAGE_KEY = 'icon-locale';

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
  const [selectedLocale, setSelectedLocale] = useState<Locale | null>(() =>
    normalizeLocale(window.localStorage.getItem(STORAGE_KEY)),
  );
  const browserLocale = normalizeLocale(window.navigator.language) ?? 'en';
  const locale = urlLocale ?? messageLocale ?? parentLocale ?? selectedLocale ?? browserLocale;

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
    } catch {
      // Cross-origin parents can respond through postMessage.
    }
    window.parent.postMessage({ type: 'icon-locale-ready' }, '*');
    return () => observer?.disconnect();
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
    document.title = `icon · ${messages[locale].eyebrow}`;
  }, [locale]);

  const setLocale = (nextLocale: Locale) => {
    setSelectedLocale(nextLocale);
    window.localStorage.setItem(STORAGE_KEY, nextLocale);
  };

  return { locale, setLocale, t: messages[locale] };
}
