import { useEffect, useRef, useState } from 'react';
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

function WalletIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M3 5.5A2.5 2.5 0 0 1 5.5 3H15v3H5.5a2.5 2.5 0 0 0 0 5H17v5H5a2 2 0 0 1-2-2V5.5Z" />
      <path d="M13 8h4v4h-4a2 2 0 1 1 0-4Z" />
    </svg>
  );
}

function ImageIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <rect x="2.5" y="3" width="15" height="14" rx="2.5" />
      <circle cx="7" cy="7.5" r="1.4" />
      <path d="m4.5 15 4-4 2.8 2.6 1.8-1.8 2.4 3.2" />
    </svg>
  );
}

function GiftIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M3 8h14v9H3zM2.5 5.5h15V8h-15zM10 5.5V17" />
      <path d="M10 5.5H6.8A1.8 1.8 0 1 1 8.3 2.7L10 5.5Zm0 0h3.2a1.8 1.8 0 1 0-1.5-2.8L10 5.5Z" />
    </svg>
  );
}

function ChevronIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="m6 8 4 4 4-4" />
    </svg>
  );
}

function TelegramIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="m17.2 3.5-2.4 12.2c-.2.9-.7 1.1-1.5.7l-3.7-2.8-1.8 1.7c-.2.2-.4.4-.8.4l.3-3.8 6.9-6.2c.3-.3-.1-.4-.5-.2l-8.5 5.4-3.7-1.2c-.8-.3-.8-.8.2-1.2l14.4-5.6c.7-.2 1.3.2 1.1.6Z" />
    </svg>
  );
}

function WechatIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M8.4 3C4.9 3 2 5.3 2 8.1c0 1.6.9 3 2.3 4l-.6 2 2.4-1.2c.7.2 1.5.3 2.3.3 3.5 0 6.4-2.3 6.4-5.1S11.9 3 8.4 3Z" />
      <path d="M11.7 8.2c3.5 0 6.3 2.1 6.3 4.7 0 1.5-.9 2.8-2.3 3.7l.5 1.7-2.1-1c-.7.2-1.5.3-2.4.3-3.5 0-6.3-2.1-6.3-4.7s2.8-4.7 6.3-4.7Z" />
    </svg>
  );
}

export default function App() {
  const { resolved } = useTheme();
  const { t } = useLocale();
  const pageRef = useRef<HTMLDivElement>(null);
  const communityRef = useRef<HTMLDivElement>(null);
  const [communityOpen, setCommunityOpen] = useState(false);

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

  useEffect(() => {
    if (!communityOpen) return;

    const onPointerDown = (event: PointerEvent) => {
      if (!communityRef.current?.contains(event.target as Node)) {
        setCommunityOpen(false);
      }
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setCommunityOpen(false);
    };

    window.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [communityOpen]);

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

          <div className="quick-entries">
            <a className="quick-entry" href={siteConfig.links.recharge}>
              <span className="quick-entry-icon">
                <WalletIcon />
              </span>
              <span>{t.recharge}</span>
            </a>

            <a className="quick-entry" href={siteConfig.links.imageGeneration}>
              <span className="quick-entry-icon">
                <ImageIcon />
              </span>
              <span>{t.imageGeneration}</span>
            </a>

            <div
              className={`community-entry ${communityOpen ? 'is-open' : ''}`}
              ref={communityRef}
            >
              <button
                className="quick-entry community-trigger"
                type="button"
                onClick={() => setCommunityOpen((open) => !open)}
                aria-expanded={communityOpen}
                aria-haspopup="menu"
              >
                <span className="quick-entry-icon reward-icon">
                  <GiftIcon />
                </span>
                <span>{t.joinGroup}</span>
                <ChevronIcon />
              </button>

              {communityOpen && (
                <div className="community-menu" role="menu">
                  <div className="community-menu-label">{t.tokenReward}</div>
                  <a
                    href={siteConfig.links.telegramGroup}
                    target="_blank"
                    rel="noreferrer"
                    role="menuitem"
                    onClick={() => setCommunityOpen(false)}
                  >
                    <span className="community-platform telegram">
                      <TelegramIcon />
                    </span>
                    {t.telegramGroup}
                    <ArrowIcon />
                  </a>
                  <a
                    href={siteConfig.links.wechatGroup}
                    role="menuitem"
                    onClick={() => setCommunityOpen(false)}
                  >
                    <span className="community-platform wechat">
                      <WechatIcon />
                    </span>
                    {t.wechatGroup}
                    <ArrowIcon />
                  </a>
                </div>
              )}
            </div>
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
