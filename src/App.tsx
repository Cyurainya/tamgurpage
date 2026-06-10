import { useEffect, useRef } from 'react';
import { ModelNetwork } from './ModelNetwork';
import { ParticleTrail } from './ParticleTrail';
import { siteConfig } from './config';
import { useLocale } from './i18n';
import { useTheme } from './theme';

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

export default function App() {
  const { resolved } = useTheme();
  const { t } = useLocale();
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

  return (
    <div className="page" ref={pageRef}>
      <ParticleTrail theme={resolved} />
      <div className="cursor-glow" aria-hidden="true" />
      <div className="grid-background" aria-hidden="true" />
      <div className="top-glow" aria-hidden="true" />

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
