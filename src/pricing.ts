export const TAMGUR_PRICE_RATIO = 0.299;
export const PRICING_VERIFIED_DATE = '2026-06-13';

export type ModelPriceExample = {
  model: string;
  officialInput: number;
  officialOutput: number;
  sourceUrl: string;
  noteKey?: 'gemini';
};

export const modelPriceExamples: ModelPriceExample[] = [
  {
    model: 'GPT-5',
    officialInput: 1.25,
    officialOutput: 10,
    sourceUrl: 'https://developers.openai.com/api/docs/models/gpt-5',
  },
  {
    model: 'Claude Sonnet 4.6',
    officialInput: 3,
    officialOutput: 15,
    sourceUrl: 'https://docs.anthropic.com/en/docs/about-claude/pricing',
  },
  {
    model: 'Gemini 2.5 Pro',
    officialInput: 1.25,
    officialOutput: 10,
    sourceUrl: 'https://ai.google.dev/gemini-api/docs/pricing',
    noteKey: 'gemini',
  },
];

export function formatUsd(value: number) {
  const rounded = Math.round((value + 1e-9) * 100) / 100;
  return `$${rounded.toFixed(2)}`;
}

export function getTamgurPrice(officialPrice: number) {
  return officialPrice * TAMGUR_PRICE_RATIO;
}
