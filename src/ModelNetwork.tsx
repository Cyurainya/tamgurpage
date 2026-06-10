import logoUrl from './assets/tamgurIcon.png';
import type { Messages } from './i18n';

const models = [
  { name: 'GPT', className: 'node-gpt', icon: 'G' },
  { name: 'Claude', className: 'node-claude', icon: 'C' },
  { name: 'Gemini', className: 'node-gemini', icon: '✦' },
  { name: 'DeepSeek', className: 'node-deepseek', icon: 'D' },
];

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
          <span className="model-icon">{model.icon}</span>
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
