import { useEffect, useRef, useState } from 'react';
import { DocsCenter } from './DocsCenter';
import { ModelNetwork } from './ModelNetwork';
import { ParticleTrail } from './ParticleTrail';
import { siteConfig } from './config';
import { useLocale } from './i18n';
import {
  formatUsdRange,
  formatUsd,
  getTamgurPriceRange,
  modelPriceExamples,
  PRICING_VERIFIED_DATE,
} from './pricing';
import { useTheme } from './theme';

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M4 10h11M11 6l4 4-4 4" />
    </svg>
  );
}

function renderTamgurRange(officialPrice: number) {
  const { min, max } = getTamgurPriceRange(officialPrice);
  return formatUsdRange(min, max);
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

function BrushIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M12.8 3.2 16.8 7.2" />
      <path d="m6.4 13.6 7.9-7.9a1.4 1.4 0 0 0 0-2l-.1-.1a1.4 1.4 0 0 0-2 0l-7.9 7.9" />
      <path d="M6.2 12.8c-.8.2-1.6.7-2.1 1.3-.8 1-.7 2.3-1.7 2.9 1.2.5 2.7.2 3.6-.8.6-.6.8-1.3.7-2.1-.1-.5-.2-.9-.5-1.3Z" />
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

function CheckIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="m4.5 10.5 3.4 3.4 7.6-7.6" />
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

const audienceMarks = ['</>', '↗', 'AI', '01'];

export default function App() {
  const { resolved } = useTheme();
  const { t } = useLocale();
  const pageRef = useRef<HTMLDivElement>(null);
  const communityRef = useRef<HTMLDivElement>(null);
  const trustRef = useRef<HTMLDivElement>(null);
  const trustCloseTimerRef = useRef<number | null>(null);
  const [communityOpen, setCommunityOpen] = useState(false);
  const [trustOpen, setTrustOpen] = useState(false);
  const [copiedContact, setCopiedContact] = useState<'email' | 'telegram' | 'wechat' | null>(null);
  const isDocsView =
    typeof window !== 'undefined' && (
      window.location.pathname === '/docs' ||
      new URLSearchParams(window.location.search).get('view') === 'docs'
    );

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

  useEffect(() => {
    if (!trustOpen) return;

    const onPointerDown = (event: PointerEvent) => {
      if (!trustRef.current?.contains(event.target as Node)) {
        setTrustOpen(false);
      }
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setTrustOpen(false);
    };

    window.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [trustOpen]);

  useEffect(() => {
    if (!copiedContact) return;
    const timeout = window.setTimeout(() => setCopiedContact(null), 1800);
    return () => window.clearTimeout(timeout);
  }, [copiedContact]);

  useEffect(() => () => {
    if (trustCloseTimerRef.current) {
      window.clearTimeout(trustCloseTimerRef.current);
    }
  }, []);

  async function copyContact(value: string, field: 'email' | 'telegram' | 'wechat') {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedContact(field);
    } catch {
      setCopiedContact(null);
    }
  }

  function openTrustPopover() {
    if (trustCloseTimerRef.current) {
      window.clearTimeout(trustCloseTimerRef.current);
      trustCloseTimerRef.current = null;
    }
    setTrustOpen(true);
  }

  function scheduleTrustClose() {
    if (trustCloseTimerRef.current) {
      window.clearTimeout(trustCloseTimerRef.current);
    }
    trustCloseTimerRef.current = window.setTimeout(() => {
      const hovered = document.querySelector(':hover');
      if (hovered instanceof Node && trustRef.current?.contains(hovered)) {
        trustCloseTimerRef.current = null;
        return;
      }
      setTrustOpen(false);
      trustCloseTimerRef.current = null;
    }, 160);
  }

  if (isDocsView) {
    return (
      <div className="page docs-page-shell" ref={pageRef}>
        <ParticleTrail theme={resolved} />
        <div className="cursor-glow" aria-hidden="true" />
        <DocsCenter t={t} />
      </div>
    );
  }

  return (
    <div className="page landing-page" ref={pageRef}>
      <ParticleTrail theme={resolved} />
      <div className="cursor-glow" aria-hidden="true" />
      <div className="grid-background" aria-hidden="true" />
      <div className="top-glow" aria-hidden="true" />

      <main className="hero international-hero">
        <section className="hero-copy">
          <div className="eyebrow">
            <span>{t.eyebrow}</span>
            <span className="eyebrow-line" />
          </div>

          <h1 className="international-title">
            <span>{t.heroTitle}</span>
            {/* <strong className="hero-savings-number">{t.heroHighlight}</strong> */}
          </h1>

          <p className="hero-model-line">{t.heroModelLine}</p>

          <div className="hero-compatibility">
            <strong>{t.heroDescription}</strong>
            {/* <span>{t.heroMigration}</span> */}
          </div>

          <div className="hero-price-card">
            {/* <div className="hero-price-example">
              <span className="hero-price-title">{t.heroPriceTitle}</span>
              <div className="hero-price-example-grid">
                <div>
                  <span>{t.heroOfficialPlatform}</span>
                  <b>$20-$40</b>
                </div>
                <div>
                  <span>{t.heroTamgurPlatform}</span>
                  <b>$5-$12</b>
                </div>
              </div>
            </div> */}
          </div>

          <div className="hero-actions">
            <a className="primary-button" href={siteConfig.links.recharge} target="_top">
              {t.start}
              <ArrowIcon />
            </a>
            <a
              className="secondary-button"
              target="_blank"
              rel="noopener noreferrer"
              href={siteConfig.links.canvas}
            >
              <BrushIcon />
              {t.infiniteCanvas}
              <ArrowIcon />
            </a>
            <a className="secondary-button" target="_blank" href={siteConfig.links.docs}>
              {t.docs}
              <ArrowIcon />
            </a>
          </div>

          <div className="hero-promotions">
            <div className="signup-bonus">
              <span aria-hidden="true">✦</span>
              {t.signupBonus}
            </div>
            <div className="enterprise-discount">
              <span aria-hidden="true">◆</span>
              {t.enterpriseDiscount}
            </div>
          </div>

          <div className="trust-row">
            <span className="live-indicator" aria-hidden="true" />
            <div
              className={`trust-contact-popover ${trustOpen ? 'is-open' : ''}`}
              ref={trustRef}
              onMouseEnter={openTrustPopover}
              onMouseLeave={scheduleTrustClose}
            >
              <button
                className="trust-offer-button"
                type="button"
                onClick={() => setTrustOpen((open) => !open)}
                onMouseEnter={openTrustPopover}
              >
                {t.trust}
              </button>
              <div
                className="trust-contact-card"
                role="dialog"
                aria-label="Contact information"
                onMouseEnter={openTrustPopover}
                onMouseLeave={scheduleTrustClose}
              >
                <div className="trust-contact-item">
                  <div>
                    <span className="trust-contact-label">Email</span>
                    <a href="mailto:tamgurcyu@gmail.com">tamgurcyu@gmail.com</a>
                  </div>
                  <button type="button" onClick={() => copyContact('tamgurcyu@gmail.com', 'email')}>
                    {copiedContact === 'email' ? t.copiedEmail : t.copyEmail}
                  </button>
                </div>
                <div className="trust-contact-item">
                  <div>
                    <span className="trust-contact-label">Telegram</span>
                    <a href="https://t.me/chloe_yan_cyu" target="_blank" rel="noopener noreferrer">
                      @chloe_yan_cyu
                    </a>
                  </div>
                  <button type="button" onClick={() => copyContact('@chloe_yan_cyu', 'telegram')}>
                    {copiedContact === 'telegram' ? t.copiedTelegram : t.copyTelegram}
                  </button>
                </div>
                <div className="trust-contact-item">
                  <div>
                    <span className="trust-contact-label">WeChat</span>
                    <span className="trust-contact-value">cyuCyin</span>
                  </div>
                  <button type="button" onClick={() => copyContact('cyuCyin', 'wechat')}>
                    {copiedContact === 'wechat' ? t.copiedWechat : t.copyWechat}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="hero-visual">
          <ModelNetwork t={t} />
        </section>
      </main>

      <section className="content-section hero-support-panel">
        <div className="support-tools">
          <div className="quick-entries platform-entries">
            <a className="quick-entry" href={siteConfig.links.recharge} target="_top">
              <span className="quick-entry-icon">
                <WalletIcon />
              </span>
              <span>{t.recharge}</span>
            </a>

            <div className="quick-entry quick-entry-disabled" aria-disabled="true">
              <span className="quick-entry-icon">
                <ImageIcon />
              </span>
              <span>{t.imageGeneration}</span>
            </div>

            <a
              className="quick-entry"
              href={siteConfig.links.console}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="quick-entry-icon">
                <CodeIcon />
              </span>
              <span>{t.viewPricing}</span>
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
        </div>
      </section>

      <section className="content-section platform-section" id="platform">
        <div className="section-heading">
          <span>{t.featuresEyebrow}</span>
          <h2>{t.featuresTitle}</h2>
          <p>{t.featuresDescription}</p>
        </div>
        <div className="developer-benefits">
          {t.developerBenefits.map((benefit) => (
            <div key={benefit}>
              <CheckIcon />
              <strong>{benefit}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="content-section works-with-section">
        <div className="section-heading compact">
          <span>{t.worksWithEyebrow}</span>
          <h2>{t.worksWithTitle}</h2>
          <p>{t.worksWithDescription}</p>
        </div>
        <div className="works-with-grid">
          {t.worksWithTools.map((tool) => (
            <div key={tool}>
              <CheckIcon />
              <strong>{tool}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="content-section models-section" id="models">
        <div className="section-heading compact">
          <span>{t.modelsEyebrow}</span>
          <h2>{t.modelsTitle}</h2>
          <p>{t.modelsDescription}</p>
        </div>
        <div className="provider-grid">
          {t.providers.map((provider, index) => (
            <article className={`provider-card provider-${index + 1}`} key={provider.name}>
              <div className="provider-mark" aria-hidden="true">
                {index === 0 ? 'AI' : index === 1 ? '◎' : '✦'}
              </div>
              <span className="provider-status">
                <i />
                {t.availableNow}
              </span>
              <h3>{provider.name}</h3>
              <p>{provider.models}</p>
            </article>
          ))}
        </div>
        <div className="integration-strip">
          <div>
            <span className="card-kicker">OPENAI-COMPATIBLE</span>
            <strong>{t.integrationTitle}</strong>
          </div>
          <code>base_url = "https://api.tamgur.tech/v1"</code>
        </div>
      </section>

      <section className="pricing-section" id="pricing">
        <div className="content-section pricing-layout">
          <div className="pricing-top">
            <div className="pricing-copy">
              <span className="card-kicker">{t.pricingEyebrow}</span>
              <h2>{t.pricingTitle}</h2>
              <p>{t.pricingDescription}</p>
              <ul className="pricing-points">
                {t.pricingPoints.map((point) => (
                  <li key={point}>
                    <CheckIcon />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <article className="pricing-card">
              <div className="pricing-card-head">
                <span>{t.globalPlan}</span>
              </div>
              <div className="pricing-saving-summary">
                <strong>{t.saveAbout}</strong>
                {/* <p>{t.priceCardDescription}</p> */}
              </div>
              <p className="pricing-note">{t.pricingNote}</p>
              <a className="primary-button pricing-button" href={siteConfig.links.recharge} target="_top">
                {t.buyCredits}
                <ArrowIcon />
              </a>
            </article>
          </div>

          <div className="token-pricing-panel">
            <div className="token-pricing-heading">
              <div>
                <h3>{t.tokenComparisonTitle}</h3>
                <p>{t.perMillionTokens}</p>
              </div>
              <span>{t.pricingUpdated.replace('{date}', PRICING_VERIFIED_DATE)}</span>
            </div>

            <table className="token-pricing-table">
              <thead>
                <tr>
                  <th scope="col">{t.modelLabel}</th>
                  <th scope="col">{t.officialInput}</th>
                  <th scope="col">{t.tamgurInput}</th>
                  <th scope="col">{t.officialOutput}</th>
                  <th scope="col">{t.tamgurOutput}</th>
                </tr>
              </thead>
              <tbody>
                {modelPriceExamples.map((example) => (
                  <tr key={example.model}>
                    <th scope="row" data-label={t.modelLabel}>
                      <a href={example.sourceUrl} target="_blank" rel="noreferrer">
                        {example.model}
                        <span aria-hidden="true">↗</span>
                      </a>
                      {example.noteKey === 'gemini' && <small>{t.geminiPricingNote}</small>}
                    </th>
                    <td data-label={t.officialInput}>{formatUsd(example.officialInput)} / MTok</td>
                    <td className="tamgur-price" data-label={t.tamgurInput}>
                      ≈ {renderTamgurRange(example.officialInput)} / MTok
                    </td>
                    <td data-label={t.officialOutput}>{formatUsd(example.officialOutput)} / MTok</td>
                    <td className="tamgur-price" data-label={t.tamgurOutput}>
                      ≈ {renderTamgurRange(example.officialOutput)} / MTok
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="token-pricing-footer">
              <p>{t.pricingDisclaimer}</p>
              <div>
                <span>{t.officialSource}:</span>
                {modelPriceExamples.map((example) => (
                  <a key={example.model} href={example.sourceUrl} target="_blank" rel="noreferrer">
                    {example.model}
                  </a>
                ))}
              </div>
            </div>
            {/* <a
              className="primary-button pricing-more-button"
              href="https://api.tamgur.tech/pricing"
              target="_blank"
              rel="noreferrer"
            >
              {t.viewMoreModels}
            </a> */}
          </div>
        </div>
      </section>

      <section className="content-section audience-section">
        <div className="section-heading compact">
          <span>{t.audienceEyebrow}</span>
          <h2>{t.audienceTitle}</h2>
        </div>
        <div className="audience-grid">
          {t.audiences.map((audience, index) => (
            <article className="audience-card" key={audience.title}>
              <span className="audience-mark" aria-hidden="true">{audienceMarks[index]}</span>
              <h3>{audience.title}</h3>
              <p>{audience.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section faq-section">
        <div className="faq-heading">
          <span className="card-kicker">{t.faqEyebrow}</span>
          <h2>{t.faqTitle}</h2>
          <p>{t.faqDescription}</p>
        </div>
        <div className="faq-list">
          {t.faqs.map((faq, index) => (
            <details key={faq.question} open={index === 0}>
              <summary>
                <span>{faq.question}</span>
                <ChevronIcon />
              </summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="content-section cta-section international-cta">
        <div>
          <span className="card-kicker">BUILD WITH TAMGUR</span>
          <h2>{t.ctaTitle}</h2>
          <p>{t.ctaDescription}</p>
        </div>
        <div className="cta-actions">
          <a className="primary-button" href={siteConfig.links.console} target="_top">
            {t.start}
            <ArrowIcon />
          </a>
          <a
            className="secondary-button"
            href={siteConfig.links.docs}
            target="_blank"
            rel="noopener noreferrer"
          >
            <CodeIcon />
            {t.docs}
          </a>
        </div>
      </section>

      <footer className="site-footer international-footer">
        <div className="footer-brand-block">
          <span className="wordmark footer-wordmark">
            <span className="wordmark-dot" />
            {siteConfig.brand}
          </span>
          <span>{t.footerTagline}</span>
        </div>

        <nav className="footer-nav" aria-label="Footer">
          <a href={siteConfig.links.support}>{t.footerSupport}</a>
          <a href={siteConfig.links.docs} target="_blank" rel="noopener noreferrer">
            {t.footerDocumentation}
          </a>
          <a href={siteConfig.links.status}>{t.footerStatus}</a>
          <a href={siteConfig.links.telegram} target="_blank" rel="noopener noreferrer">
            {t.footerTelegram}
          </a>
          <a href={siteConfig.links.contact}>{t.footerContact}</a>
        </nav>

        <div className="footer-contact" aria-label="Contact information">
          <a className="footer-contact-card" href="mailto:tamgurcyu@gmail.com">
            <span className="footer-contact-label">Email</span>
            <strong>tamgurcyu@gmail.com</strong>
          </a>
          <a className="footer-contact-card" href="https://t.me/chloe_yan_cyu" target="_blank" rel="noopener noreferrer">
            <span className="footer-contact-label">Telegram</span>
            <strong>@chloe_yan_cyu</strong>
          </a>
          <div className="footer-contact-card">
            <span className="footer-contact-label">WeChat</span>
            <strong>cyuCyin</strong>
          </div>
        </div>

        <span className="footer-powered">{t.footerPowered}</span>
      </footer>
    </div>
  );
}
