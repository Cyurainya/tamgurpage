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
};

export const messages: Record<Locale, Messages> = {
  'zh-CN': {
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
  },
  en: {
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
  },
  fr: {
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
  },
  ru: {
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
  },
  ja: {
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
  },
  vi: {
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
    document.title = `icon · ${messages[locale].eyebrow}`;
  }, [locale]);

  return { locale, t: messages[locale] };
}
