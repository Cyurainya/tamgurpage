import logoUrl from './assets/tamgurIcon.png';
import deepSeekUrl from './assets/deepseek.png';
import claudeUrl from './assets/claude.png';
import type { Messages } from './i18n';

const models = [
  { name: 'ChatGPT', className: 'node-gpt', icon: 'chatgpt' },
  { name: 'Claude', className: 'node-claude', icon: 'claude' },
  { name: 'Gemini', className: 'node-gemini', icon: '✦' },
  { name: 'DeepSeek', className: 'node-deepseek', icon: 'deepseek' },
];

function ChatGptIcon() {
  return (
    <svg className="chatgpt-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2.8a4.35 4.35 0 0 1 4.22 3.32 4.37 4.37 0 0 1 2.1 7.35 4.36 4.36 0 0 1-4.18 6.32 4.37 4.37 0 0 1-7.35-2.1 4.36 4.36 0 0 1-2.1-7.35A4.36 4.36 0 0 1 8.87 4.02 4.32 4.32 0 0 1 12 2.8Z" />
      <path d="m8.85 6.35 6.25 3.6v7.2M15.15 17.65 8.9 14.05v-7.2M18.25 10.05 12 13.65l-6.25-3.6M5.75 13.95 12 10.35l6.25 3.6M12 3.85v7.2M12 20.15v-7.2" />
    </svg>
  );
}

export function ModelNetwork({ t }: { t: Messages }) {
  return (
    <div className="network-shell" aria-label="icon 连接多个主流 AI 模型">
      <div className="network-aura network-aura-one" />
      <div className="network-aura network-aura-two" />

      <svg
        className="network-lines"
        viewBox="0 0 620 560"
        role="presentation"
      >
        <defs>
          <linearGradient id="lineGlow" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="var(--line-start)" stopOpacity=".18" />
            <stop offset=".5" stopColor="var(--line-mid)" stopOpacity=".88" />
            <stop offset="1" stopColor="var(--line-end)" stopOpacity=".18" />
          </linearGradient>
          <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3.2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <g className="orbit-rings">
          <ellipse cx="310" cy="282" rx="215" ry="180" />
          <ellipse cx="310" cy="282" rx="142" ry="118" />
        </g>
        <g className="connection-lines">
          <path d="M 308 280 C 235 230, 175 150, 116 112" />
          <path d="M 314 278 C 390 210, 470 155, 526 124" />
          <path d="M 316 292 C 402 326, 476 392, 524 446" />
          <path d="M 302 292 C 226 350, 166 404, 111 445" />
        </g>
        <g className="energy-dots" filter="url(#softGlow)">
          <circle r="4">
            <animateMotion dur="3.4s" repeatCount="indefinite" path="M 308 280 C 235 230, 175 150, 116 112" />
          </circle>
          <circle r="4">
            <animateMotion dur="4.1s" begin=".7s" repeatCount="indefinite" path="M 314 278 C 390 210, 470 155, 526 124" />
          </circle>
          <circle r="4">
            <animateMotion dur="3.8s" begin="1.3s" repeatCount="indefinite" path="M 316 292 C 402 326, 476 392, 524 446" />
          </circle>
          <circle r="4">
            <animateMotion dur="4.3s" begin=".2s" repeatCount="indefinite" path="M 302 292 C 226 350, 166 404, 111 445" />
          </circle>
        </g>
      </svg>

      <div className="brand-core">
        <span className="core-ring core-ring-one" />
        <span className="core-ring core-ring-two" />
        <div className="logo-stage">
          <img src={logoUrl} alt="icon 刺猬标志" />
        </div>
        <span className="core-label">{t.unifiedApi}</span>
      </div>

      {models.map((model) => (
        <div className={`model-node ${model.className}`} key={model.name}>
          <span className="model-icon">
            {model.icon === 'chatgpt' ? (
              <ChatGptIcon />
            ) : model.icon === 'claude' ? (
              <img className="claude-icon" src={claudeUrl} alt="" />
            ) : model.icon === 'deepseek' ? (
              <img className="deepseek-icon" src={deepSeekUrl} alt="" />
            ) : (
              model.icon
            )}
          </span>
          <span>{model.name}</span>
          <i aria-hidden="true" />
        </div>
      ))}

      <div className="network-status">
        <span />
        {t.operational}
      </div>
    </div>
  );
}
