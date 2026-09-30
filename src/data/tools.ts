import {
  Calculator,
  Gauge,
  Coins,
  Type,
  Mic,
  type LucideIcon,
} from 'lucide-react';

export interface ToolMeta {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  icon: LucideIcon;
  seoTitle: string;
  seoDescription: string;
}

export const tools: ToolMeta[] = [
  {
    slug: 'youtube-revenue-calculator',
    name: 'YouTube Revenue Calculator',
    tagline: 'Estimate ad earnings from your views',
    description:
      'Enter your monthly views and CPM to estimate how much a channel could earn from YouTube ads — monthly and yearly, as a realistic range.',
    icon: Calculator,
    seoTitle: 'YouTube Revenue Calculator — Estimate Your Ad Earnings | INVOTIC',
    seoDescription:
      'Free YouTube revenue calculator. Enter monthly views and CPM to estimate your channel\u2019s ad earnings, monthly and yearly.',
  },
  {
    slug: 'youtube-monetization-calculator',
    name: 'YouTube Monetization Calculator',
    tagline: 'How far are you from YPP?',
    description:
      'Track your progress toward the YouTube Partner Program — 1,000 subscribers and 4,000 watch hours — and see roughly how long it could take at your current pace.',
    icon: Gauge,
    seoTitle: 'YouTube Monetization Calculator — Track Your YPP Progress | INVOTIC',
    seoDescription:
      'Free YouTube monetization calculator. Check your progress toward 1,000 subscribers and 4,000 watch hours, and estimate time to monetization.',
  },
  {
    slug: 'youtube-cpm-by-niche',
    name: 'CPM by Niche Explorer',
    tagline: 'See typical ad rates per niche',
    description:
      'Different niches earn wildly different ad rates. Pick your niche to see the typical CPM range creators observe, and estimate earnings for your view count.',
    icon: Coins,
    seoTitle: 'YouTube CPM by Niche — Typical Ad Rates Compared | INVOTIC',
    seoDescription:
      'Explore typical YouTube CPM ranges by niche — finance, tech, gaming, vlogs and more — and estimate what your views could earn.',
  },
  {
    slug: 'youtube-title-generator',
    name: 'Video Title Generator',
    tagline: 'Clickable title ideas in seconds',
    description:
      'Type your video topic and get title ideas built on proven patterns — curiosity gaps, how-tos, lists, comparisons — ready to copy.',
    icon: Type,
    seoTitle: 'YouTube Title Generator — Free Video Title Ideas | INVOTIC',
    seoDescription:
      'Free YouTube title generator. Enter your topic and get clickable video title ideas based on proven headline patterns.',
  },
  {
    slug: 'speak-translate',
    name: 'Speak & Translate',
    tagline: 'Urdu voice → English text, in one window',
    description:
      'Free Chrome extension for anyone who can’t type in English: speak or type in Urdu / Roman Urdu and get live English translation inserted straight into ChatGPT or any website’s text box.',
    icon: Mic,
    seoTitle: 'Speak & Translate — Free Urdu Voice to English Chrome Extension | INVOTIC',
    seoDescription:
      'Download Speak & Translate free: speak or type in Urdu / Roman Urdu and get live English translation in any website. Setup guide included.',
  },
];

export function getTool(slug: string | undefined): ToolMeta | undefined {
  return tools.find((t) => t.slug === slug);
}

/** Typical CPM ranges observed across the industry, in USD. Broad estimates, not guarantees. */
export interface NicheCpm {
  niche: string;
  low: number;
  high: number;
}

export const nicheCpms: NicheCpm[] = [
  { niche: 'Finance & Investing', low: 12, high: 25 },
  { niche: 'Business & Marketing', low: 10, high: 20 },
  { niche: 'Tech & Software', low: 8, high: 15 },
  { niche: 'Education & How-To', low: 6, high: 12 },
  { niche: 'Health & Fitness', low: 5, high: 10 },
  { niche: 'Travel', low: 4, high: 9 },
  { niche: 'Lifestyle & Vlogs', low: 2.5, high: 6 },
  { niche: 'Entertainment & Comedy', low: 2, high: 6 },
  { niche: 'Gaming', low: 2, high: 5 },
  { niche: 'Music', low: 1.5, high: 4 },
  { niche: 'Kids & Family', low: 1, high: 3 },
];
