import { useEffect } from 'react';

export type ThemeMode = 'light';
export type ResolvedTheme = 'light';

export function useTheme() {
  useEffect(() => {
    const root = document.documentElement;
    root.dataset.theme = 'light';
    root.style.colorScheme = 'light';
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', '#f7f7f4');
  }, []);

  return { resolved: 'light' as const };
}
