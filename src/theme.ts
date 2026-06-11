import { useEffect, useMemo, useState } from 'react';

export type ThemeMode = 'light' | 'dark' | 'auto';
export type ResolvedTheme = Exclude<ThemeMode, 'auto'>;

const VALID_MODES = new Set<ThemeMode>(['light', 'dark', 'auto']);

function normalizeTheme(value: unknown): ThemeMode | null {
  if (typeof value !== 'string') return null;
  const normalized = value.toLowerCase();
  if (normalized === 'system') return 'auto';
  return VALID_MODES.has(normalized as ThemeMode) ? (normalized as ThemeMode) : null;
}

function readUrlTheme(): ThemeMode | null {
  const params = new URLSearchParams(window.location.search);
  return normalizeTheme(
    params.get('theme') ?? params.get('colorMode') ?? params.get('color-mode'),
  );
}

function readParentTheme(): ResolvedTheme | null {
  if (window.parent === window) return null;

  try {
    const root = window.parent.document.documentElement;
    const body = window.parent.document.body;
    const rootClassTheme = root.classList.contains('dark')
      ? 'dark'
      : root.classList.contains('light')
        ? 'light'
        : '';
    const bodyClassTheme = body?.classList.contains('dark')
      ? 'dark'
      : body?.classList.contains('light')
        ? 'light'
        : '';
    const values = [
      root.dataset.theme,
      root.dataset.colorMode,
      root.style.colorScheme,
      rootClassTheme,
      body?.dataset.theme,
      body?.dataset.colorMode,
      body?.style.colorScheme,
      bodyClassTheme,
    ];

    for (const value of values) {
      const theme = normalizeTheme(value);
      if (theme === 'light' || theme === 'dark') return theme;
    }
  } catch {
    // Cross-origin parents are intentionally handled through postMessage.
  }

  return null;
}

function readMessageTheme(data: unknown): ThemeMode | null {
  if (typeof data === 'string') return normalizeTheme(data);
  if (!data || typeof data !== 'object') return null;

  const message = data as Record<string, unknown>;
  if (
    message.type === 'theme-change' ||
    message.type === 'newapi-theme' ||
    message.type === 'set-theme'
  ) {
    return normalizeTheme(message.theme ?? message.mode ?? message.value);
  }

  return null;
}

export function useTheme() {
  const media = useMemo(
    () => window.matchMedia('(prefers-color-scheme: dark)'),
    [],
  );
  const [urlTheme] = useState<ThemeMode | null>(() => readUrlTheme());
  const [systemTheme, setSystemTheme] = useState<ResolvedTheme>(
    media.matches ? 'dark' : 'light',
  );
  const [messageTheme, setMessageTheme] = useState<ThemeMode | null>(null);
  const [parentTheme, setParentTheme] = useState<ResolvedTheme | null>(
    () => readParentTheme(),
  );
  const resolved: ResolvedTheme =
    parentTheme ??
    (messageTheme === 'light' || messageTheme === 'dark' ? messageTheme : null) ??
    (urlTheme === 'light' || urlTheme === 'dark' ? urlTheme : null) ??
    systemTheme;

  useEffect(() => {
    const onSystemChange = (event: MediaQueryListEvent) => {
      setSystemTheme(event.matches ? 'dark' : 'light');
    };
    media.addEventListener('change', onSystemChange);
    return () => media.removeEventListener('change', onSystemChange);
  }, [media]);

  useEffect(() => {
    const onMessage = (event: MessageEvent) => {
      const nextTheme = readMessageTheme(event.data);
      if (nextTheme) setMessageTheme(nextTheme);
    };
    window.addEventListener('message', onMessage);
    return () => window.removeEventListener('message', onMessage);
  }, []);

  useEffect(() => {
    if (window.parent === window) return;

    let observer: MutationObserver | undefined;
    try {
      const root = window.parent.document.documentElement;
      const sync = () => {
        const nextParentTheme = readParentTheme();
        setParentTheme(nextParentTheme);
      };
      observer = new MutationObserver(sync);
      observer.observe(root, {
        attributes: true,
        attributeFilter: ['class', 'style', 'data-theme', 'data-color-mode'],
      });
      if (window.parent.document.body) {
        observer.observe(window.parent.document.body, {
          attributes: true,
          attributeFilter: ['class', 'style', 'data-theme', 'data-color-mode'],
        });
      }
      sync();
    } catch {
      // Cross-origin parents are notified below and can respond via postMessage.
    }

    window.parent.postMessage({ type: 'icon-theme-ready' }, '*');
    return () => observer?.disconnect();
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.dataset.theme = resolved;
    root.style.colorScheme = resolved;
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', resolved === 'dark' ? '#12100d' : '#f7f7f4');
  }, [resolved]);

  return { resolved };
}
