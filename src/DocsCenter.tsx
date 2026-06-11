import logoUrl from './assets/tamgurIcon.png';
import { siteConfig } from './config';
import type { Messages } from './i18n';

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M4 10h11M11 6l4 4-4 4" />
    </svg>
  );
}

function MonitorIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="4" width="18" height="13" rx="2" />
      <path d="M8 21h8M12 17v4" />
    </svg>
  );
}

function LinkIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m9 15 6-6M7.5 17.5l-1 1a3.5 3.5 0 0 1-5-5l4-4a3.5 3.5 0 0 1 5 0M16.5 6.5l1-1a3.5 3.5 0 0 1 5 5l-4 4a3.5 3.5 0 0 1-5 0" />
    </svg>
  );
}

function CodeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m8 6-6 6 6 6M16 6l6 6-6 6" />
    </svg>
  );
}

export function DocsCenter({ t }: { t: Messages }) {
  const cards = [
    {
      className: 'apps',
      icon: <MonitorIcon />,
      title: t.docsAppsTitle,
      description: t.docsAppsDescription,
      href: siteConfig.links.openClawDocs,
    },
    {
      className: 'api',
      icon: <LinkIcon />,
      title: t.docsApiTitle,
      description: t.docsApiDescription,
      href: siteConfig.links.apiDocs,
    },
    {
      className: 'codex',
      icon: <CodeIcon />,
      title: t.docsCodexTitle,
      description: t.docsCodexDescription,
      href: siteConfig.links.codexDocs,
    },
  ];

  return (
    <main className="docs-page">
      <div className="docs-orb docs-orb-left" />
      <div className="docs-orb docs-orb-right" />

      <a className="docs-brand" href="?">
        <img src={logoUrl} alt="" />
        <span>{siteConfig.brand}</span>
      </a>

      <section className="docs-heading">
        <span>{t.docsCenterEyebrow}</span>
        <h1>{t.docsCenterTitle}</h1>
        <p>{t.docsCenterDescription}</p>
      </section>

      <section className="docs-card-grid">
        {cards.map((card) => (
          <a
            className={`docs-card docs-card-${card.className}`}
            href={card.href}
            key={card.title}
          >
            <span className="docs-card-icon">{card.icon}</span>
            <h2>{card.title}</h2>
            <p>{card.description}</p>
            <span className="docs-card-link">
              {t.docsEnter}
              <ArrowIcon />
            </span>
          </a>
        ))}
      </section>

      <a className="docs-back" href="?">
        <ArrowIcon />
        {t.docsBack}
      </a>
    </main>
  );
}
