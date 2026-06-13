import { useEffect, useRef, useState } from 'react';
import { DocsCenter } from './DocsCenter';
import { ModelNetwork } from './ModelNetwork';
import { ParticleTrail } from './ParticleTrail';
import { siteConfig } from './config';
import { useLocale } from './i18n';
import {
  formatUsd,
  getTamgurPrice,
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

function CopyIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <rect x="6.5" y="6.5" width="9" height="9" rx="2" />
      <path d="M13.5 6.5V5A1.5 1.5 0 0 0 12 3.5H5A1.5 1.5 0 0 0 3.5 5v7A1.5 1.5 0 0 0 5 13.5h1.5" />
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

type PlatformIconType = 'speed' | 'wallet' | 'globe' | 'shield' | 'code';

function PlatformIcon({ type }: { type: PlatformIconType }) {
  const paths = {
    speed: <><path d="M3 14.5a7.5 7.5 0 1 1 14 0" /><path d="m10 10 4-3M5.5 14.5h9" /></>,
    wallet: <><path d="M3 5.5A2.5 2.5 0 0 1 5.5 3H15v3H5.5a2.5 2.5 0 0 0 0 5H17v5H5a2 2 0 0 1-2-2V5.5Z" /><path d="M13 8h4v4h-4a2 2 0 1 1 0-4Z" /></>,
    globe: <><circle cx="10" cy="10" r="7.5" /><path d="M2.8 10h14.4M10 2.5c2 2.1 3 4.6 3 7.5s-1 5.4-3 7.5c-2-2.1-3-4.6-3-7.5s1-5.4 3-7.5Z" /></>,
    shield: <><path d="M10 2.5 16 5v4.6c0 3.8-2.4 6.5-6 7.9-3.6-1.4-6-4.1-6-7.9V5l6-2.5Z" /><path d="m7 10 2 2 4-4" /></>,
    code: <><path d="m7.5 5-4 5 4 5M12.5 5l4 5-4 5" /><path d="m11.5 3-3 14" /></>,
  };

  return <svg viewBox="0 0 20 20" aria-hidden="true">{paths[type]}</svg>;
}

const featureIcons: PlatformIconType[] = ['wallet', 'speed', 'shield', 'code', 'globe'];
const audienceMarks = ['</>', '↗', 'AI', '01'];

export default function App() {
  const { resolved } = useTheme();
  const { t } = useLocale();
  const featuredPrice = modelPriceExamples[0];
  const pageRef = useRef<HTMLDivElement>(null);
  const communityRef = useRef<HTMLDivElement>(null);
  const copyResetRef = useRef<number | null>(null);
  const [communityOpen, setCommunityOpen] = useState(false);
  const [copiedContact, setCopiedContact] = useState<'wechat' | 'telegram' | null>(null);
  const isDocsView =
    window.location.pathname === '/docs' ||
    new URLSearchParams(window.location.search).get('view') === 'docs';

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
    return () => {
      if (copyResetRef.current) window.clearTimeout(copyResetRef.current);
    };
  }, []);

  const copyContact = async (value: string, contact: 'wechat' | 'telegram' | 'email' | null) => {
    try {
      await navigator.clipboard.writeText(value);
    } catch {
      const input = document.createElement('textarea');
      input.value = value;
      input.style.position = 'fixed';
      input.style.opacity = '0';
      document.body.appendChild(input);
      input.select();
      document.execCommand('copy');
      input.remove();
    }
    setCopiedContact(contact);
    if (copyResetRef.current) window.clearTimeout(copyResetRef.current);
    copyResetRef.current = window.setTimeout(() => setCopiedContact(null), 1800);
  };

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
            <strong className="hero-savings-number">{t.heroHighlight}</strong>
          </h1>

          <p className="hero-model-line">{t.heroModelLine}</p>

          <div className="hero-compatibility">
            <strong>{t.heroDescription}</strong>
            <span>{t.heroMigration}</span>
          </div>

          <div className="hero-price-card">
            <div className="hero-price-example">
              <a href={featuredPrice.sourceUrl} target="_blank" rel="noreferrer">
                {t.heroPriceTitle}
                <span aria-hidden="true">↗</span>
              </a>
              <div className="hero-price-example-grid">
                <div>
                  <span>{t.officialOutput}</span>
                  <b>{formatUsd(featuredPrice.officialOutput)}</b>
                </div>
                <div>
                  <span>{t.tamgurOutput}</span>
                  <b>{formatUsd(getTamgurPrice(featuredPrice.officialOutput))}</b>
                </div>
                <strong className="hero-price-saving">{t.heroSavingsLabel}</strong>
              </div>
              <small>{t.heroPriceUnit}</small>
            </div>
          </div>

          <div className="hero-actions">
            <a className="primary-button" href={siteConfig.links.recharge} target="_top">
              {t.start}
              <ArrowIcon />
            </a>
            <a className="secondary-button" href={siteConfig.links.docs}>
              {t.docs}
              <ArrowIcon />
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

      <section className="content-section hero-support-panel">
        <div className="support-promotions">
          <div className="signup-bonus">
            <span aria-hidden="true">✦</span>
            {t.signupBonus}
          </div>
          <div className="enterprise-discount">
            <span aria-hidden="true">◆</span>
            {t.enterpriseDiscount}
          </div>
        </div>

        <div className="support-divider" aria-hidden="true" />

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
        <div className="platform-feature-grid">
          {t.features.map((feature, index) => (
            <article className="platform-feature-card" key={feature.title}>
              <span className="feature-index">0{index + 1}</span>
              <div className="feature-symbol">
                <PlatformIcon type={featureIcons[index]} />
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
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
                      ≈ {formatUsd(getTamgurPrice(example.officialInput))} / MTok
                    </td>
                    <td data-label={t.officialOutput}>{formatUsd(example.officialOutput)} / MTok</td>
                    <td className="tamgur-price" data-label={t.tamgurOutput}>
                      ≈ {formatUsd(getTamgurPrice(example.officialOutput))} / MTok
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
          {/* <span>{t.footerTagline}</span> */}
        </div>

        <div className="hero-contact footer-contact">
          <span>{t.contactWechat}</span>
          <strong>cyuCyin</strong>
          <button
            type="button"
            onClick={() => copyContact('cyuCyin', 'wechat')}
            aria-label={copiedContact === 'wechat' ? t.copiedWechat : t.copyWechat}
            title={copiedContact === 'wechat' ? t.copiedWechat : t.copyWechat}
          >
            {copiedContact === 'wechat' ? <CheckIcon /> : <CopyIcon />}
          </button>
          <span>Telegram</span>
          <strong>@chloe_yan_cyu</strong>
          <button
            type="button"
            onClick={() => copyContact('@chloe_yan_cyu', 'telegram')}
            aria-label={copiedContact === 'telegram' ? t.copiedTelegram : t.copyTelegram}
            title={copiedContact === 'telegram' ? t.copiedTelegram : t.copyTelegram}
          >
            {copiedContact === 'telegram' ? <CheckIcon /> : <CopyIcon />}
          </button>

             <span>Email</span>
          <strong>rainkii8518231@gmail.com</strong>
          <button
            type="button"
            onClick={() => copyContact('rainkii8518231@gmail.com', 'email')}

          >
            {copiedContact === 'telegram' ? <CheckIcon /> : <CopyIcon />}
          </button>
        </div>

        <span className="footer-powered">{t.footerPowered}</span>
      </footer>
    </div>
  );
}
