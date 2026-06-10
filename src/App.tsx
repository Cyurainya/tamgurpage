import { useEffect, useRef } from 'react';
import { ModelNetwork } from './ModelNetwork';
import { ParticleTrail } from './ParticleTrail';
import { siteConfig } from './config';
import { localeOptions, useLocale } from './i18n';
import { useTheme, type ThemeMode } from './theme';

const themeModes: ThemeMode[] = ['light', 'dark', 'auto'];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M4 10h11M11 6l4 4-4 4" />
    </svg>
  );
}

function CodeIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="m7.5 5-4 5 4 5M12.5 5l4 5-4 5" />
    </svg>
  );
}

function ThemeIcon({ mode }: { mode: ThemeMode }) {
  if (mode === 'dark') {
    return (
      <svg viewBox="0 0 20 20" aria-hidden="true">
        <path d="M16 12.4A6.7 6.7 0 0 1 7.6 4a6.7 6.7 0 1 0 8.4 8.4Z" />
      </svg>
    );
  }

  if (mode === 'light') {
    return (
      <svg viewBox="0 0 20 20" aria-hidden="true">
        <circle cx="10" cy="10" r="3.2" />
        <path d="M10 2v2M10 16v2M2 10h2M16 10h2M4.3 4.3l1.4 1.4M14.3 14.3l1.4 1.4M15.7 4.3l-1.4 1.4M5.7 14.3l-1.4 1.4" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <rect x="2.5" y="3.5" width="15" height="11" rx="2" />
      <path d="M7 17h6M10 14.5V17" />
    </svg>
  );
}

export default function App() {
  const { mode, resolved, setMode } = useTheme();
  const { locale, setLocale, t } = useLocale();
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = pageRef.current;
    if (!root) return;

    let frame = 0;
    const onPointerMove = (event: PointerEvent) => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => {
        const x = event.clientX / window.innerWidth;
        const y = event.clientY / window.innerHeight;
        root.style.setProperty('--pointer-x', `${event.clientX}px`);
        root.style.setProperty('--pointer-y', `${event.clientY}px`);
        root.style.setProperty('--parallax-x', `${(x - 0.5) * 16}px`);
        root.style.setProperty('--parallax-y', `${(y - 0.5) * 12}px`);
      });
    };

    window.addEventListener('pointermove', onPointerMove, { passive: true });
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener('pointermove', onPointerMove);
    };
  }, []);

  const cycleTheme = () => {
    const index = themeModes.indexOf(mode);
    setMode(themeModes[(index + 1) % themeModes.length]);
  };

  const themeLabel = t.theme[mode];

  return (
    <div className="page" ref={pageRef}>
      <ParticleTrail theme={resolved} />
      <div className="cursor-glow" aria-hidden="true" />
      <div className="grid-background" aria-hidden="true" />
      <div className="top-glow" aria-hidden="true" />

      <div className="floating-controls">
        <label className="language-control">
          <span className="language-icon" aria-hidden="true">文</span>
          <select
            value={locale}
            onChange={(event) => setLocale(event.target.value as typeof locale)}
            aria-label={t.localeName}
          >
            {localeOptions.map((option) => (
              <option value={option.value} key={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>

        <button
          className="theme-toggle"
          type="button"
          onClick={cycleTheme}
          aria-label={`${themeLabel} · ${t.theme.action}`}
          title={`${themeLabel} · ${t.theme.action}`}
        >
          <ThemeIcon mode={mode} />
          <span>{themeLabel}</span>
        </button>
      </div>

      <main className="hero">
        <section className="hero-copy">
          <div className="wordmark" aria-label={siteConfig.brand}>
            <span className="wordmark-dot" />
            {siteConfig.brand}
          </div>

          <div className="eyebrow">
            <span>{t.eyebrow}</span>
            <span className="eyebrow-line" />
          </div>

          <h1>
            {t.titleLead}
            <br />
            {t.titleTail} <span className="gradient-text">AI</span>
          </h1>

          <p className="hero-description">
            {t.descriptionLine1}
            <br className="desktop-break" />
            {t.descriptionLine2}
          </p>

          <div className="hero-actions">
            <a className="primary-button" href={siteConfig.links.console}>
              {t.start}
              <ArrowIcon />
            </a>
            <a className="secondary-button" href={siteConfig.links.docs}>
              <CodeIcon />
              {t.docs}
            </a>
          </div>

          <div className="trust-row">
            <span className="live-indicator" aria-hidden="true" />
            <span>{t.trust}</span>
          </div>
        </section>

        <section className="hero-visual">
          <ModelNetwork t={t} />
        </section>
      </main>
    </div>
  );
}
