// INVOTIC software products shown on the homepage, /products and /products/<slug>.
// Facts (prices, features, steps, FAQ) come from each product's own site.
// To add a product: add one entry here. Its card appears on /products; give it `detail`
// for its own page (also prerendered and added to the sitemap list in vite.config.ts).

import {
  AudioLines,
  Users,
  Languages,
  Layers,
  ScanEye,
  MonitorPlay,
  Chrome,
  ShieldCheck,
  Sparkles,
  CalendarDays,
  BadgeCheck,
  BellRing,
  Wand2,
  MessagesSquare,
  Clapperboard,
  type LucideIcon,
} from 'lucide-react';

export type ProductTag = 'free' | 'paid' | 'windows' | 'chrome';

export interface ProductImage {
  src: string;
  srcSet?: string;
  width: number;
  height: number;
  alt: string;
}

export interface ProductLink {
  label: string;
  href: string;
}

export interface ProductDetail {
  seoTitle: string;
  seoDescription: string;
  /** Short line under the name in the hero. */
  lead: string;
  /** Small grey line under the hero buttons. */
  note: string;
  stepsTitle: string;
  steps: { title: string; text: string }[];
  featuresTitle: string;
  features: { icon: LucideIcon; title: string; text: string }[];
  /** Optional before/after demo (InvoDub). */
  demo?: {
    original: { label: string; line: string };
    dubbed: { label: string; line: string; rtl?: boolean };
    points: string[];
  };
  languages?: string[];
  compare?: { themLabel: string; rows: [label: string, us: string, them: string][] };
  gallery?: ProductImage[];
  pricingTitle: string;
  plans: {
    name: string;
    badge: 'trial' | 'paid' | 'free';
    amount: string;
    unit: string;
    items: string[];
    cta: ProductLink;
    highlight?: boolean;
  }[];
  faq: { q: string; a: string }[];
  finalTitle: string;
  finalText: string;
  /** JSON-LD SoftwareApplication fields. */
  category: string;
  price: string;
}

export interface Product {
  slug: string;
  name: string;
  /** One line that says what it does. */
  tagline: string;
  description: string;
  price: 'free' | 'paid' | 'soon';
  trial?: string;
  platforms: string[];
  tags: ProductTag[];
  facts: string[];
  image?: ProductImage;
  /** Drawn stand-in shown until a product has a screenshot (coming-soon products). */
  placeholder?: { icon: LucideIcon; title: string; text: string };
  /** 1200x630 JPG for link previews (WhatsApp, Facebook, X). */
  ogImage?: string;
  primary: ProductLink;
  /** Internal page (product page or tool page) for "Learn more". */
  page?: string;
  featured?: boolean;
  detail?: ProductDetail;
}

const SALES_WHATSAPP = 'https://wa.me/923484166937';

export const products: Product[] = [
  {
    slug: 'invodub',
    name: 'InvoDub',
    tagline: 'AI video dubbing in 29 languages',
    description:
      'Dub any video into Urdu, Hindi, Arabic and 26 more languages. Every speaker keeps their own voice, and the music stays exactly as it was.',
    price: 'paid',
    trial: '3-day free trial',
    platforms: ['Windows'],
    tags: ['paid', 'windows'],
    facts: ['A voice per speaker', 'Music kept', 'Batch dubbing'],
    image: {
      src: '/products/invodub-app-1280.webp',
      srcSet: '/products/invodub-app-720.webp 720w, /products/invodub-app-1280.webp 1280w',
      width: 1280,
      height: 821,
      alt: 'InvoDub app: video preview with Urdu subtitles, translated lines per speaker and the timeline editor',
    },
    ogImage: '/products/invodub-og.jpg',
    primary: { label: 'Start free trial', href: 'https://invodub.invotic.com/' },
    page: '/products/invodub',
    featured: true,
    detail: {
      seoTitle: 'InvoDub — AI Video Dubbing Software for Windows, 29 Languages | INVOTIC',
      seoDescription:
        'Dub any video into Urdu, Hindi, Arabic and 26 more languages. Every speaker keeps their own voice and the music stays. 3-day free trial, then $25 for 6 months.',
      lead: 'Your video in every language. Every speaker keeps their own voice, and the music stays.',
      note: 'Windows 10 / 11 (64-bit). About 8 GB free space; 16 GB RAM recommended for long videos.',
      stepsTitle: 'From upload to a dubbed video in five steps',
      steps: [
        { title: 'Upload', text: 'Drop in your video. InvoDub writes out every line.' },
        { title: 'Speakers', text: 'Every person in the video is found, male or female.' },
        { title: 'Translate', text: 'Each line is translated and fitted to its own timing.' },
        { title: 'Voices', text: 'Each speaker gets a dubbed voice that sounds like them.' },
        { title: 'Export', text: 'Save it for YouTube, Shorts, TikTok, Reels or square.' },
      ],
      featuresTitle: 'A full dubbing studio on your laptop',
      features: [
        { icon: Users, title: 'Every speaker found', text: 'Each person keeps their own dubbed voice that sounds like them.' },
        { icon: AudioLines, title: 'Only the voice changes', text: 'Background music and sound effects stay exactly as they were.' },
        { icon: Languages, title: '29 languages', text: 'Urdu, Hindi, Arabic, English, Spanish, French, Turkish, Chinese and more.' },
        { icon: Layers, title: 'Batch dubbing', text: 'Queue many videos and export them all in one run.' },
        { icon: ScanEye, title: 'Edit any line', text: 'Change a translation, its timing or its voice on the timeline before export.' },
        { icon: MonitorPlay, title: 'Every platform', text: 'Export 9:16 for TikTok and Reels, Shorts, 16:9 for YouTube, or square.' },
      ],
      demo: {
        original: { label: 'Original · English', line: 'Good morning everyone, thanks for joining!' },
        dubbed: { label: 'InvoDub · Urdu', line: 'صبح بخیر، آج کی میٹنگ میں خوش آمدید!', rtl: true },
        points: [
          'Only the new voice is heard. The original voice is replaced, not just made quieter.',
          'Background music and sound effects stay where they were.',
          'Each speaker keeps a voice that matches them.',
        ],
      },
      languages: ['Urdu', 'Hindi', 'Arabic', 'English', 'Spanish', 'French', 'Turkish', 'Chinese', 'German', 'Portuguese', 'Indonesian', 'Bengali'],
      compare: {
        themLabel: 'Typical online dubbing service',
        rows: [
          ['Where it runs', 'On your own Windows PC', 'Upload to their servers'],
          ['Price', '$25 for 6 months', 'Usually charged per minute of video'],
          ['Long videos', 'Full-length videos', 'Often limited by upload size or minutes'],
          ['Many videos at once', 'Batch dubbing built in', 'Usually one video at a time'],
        ],
      },
      gallery: [
        {
          src: '/products/invodub-batch-960.webp',
          width: 960,
          height: 576,
          alt: 'InvoDub batch window: settings for all videos and a queue with progress per video',
        },
        {
          src: '/products/invodub-export-720.webp',
          width: 720,
          height: 512,
          alt: 'InvoDub export dialog with size presets for each platform',
        },
      ],
      pricingTitle: 'Try free. Then one simple price.',
      plans: [
        {
          name: 'Free trial',
          badge: 'trial',
          amount: '3 days',
          unit: 'free',
          items: ['Every feature', 'All 29 languages', 'Install and start'],
          cta: { label: 'Download', href: 'https://invodub.invotic.com/pricing.html' },
        },
        {
          name: '6 months',
          badge: 'paid',
          amount: '$25',
          unit: '/ 6 months',
          items: ['Activated on your PC after payment', 'Keep using the app you installed', 'Support on WhatsApp'],
          cta: { label: 'Buy on WhatsApp', href: SALES_WHATSAPP },
          highlight: true,
        },
      ],
      faq: [
        { q: 'What do I need to run InvoDub?', a: 'Windows 10 or 11 (64-bit) and about 8 GB of free space. 16 GB RAM is recommended for long videos.' },
        { q: 'What happens after the 3-day trial?', a: 'The app shows your Machine ID. Pay, send the ID on WhatsApp, and we activate your license on that PC.' },
        { q: 'Does it keep my background music?', a: 'Yes. Only the voices are replaced. Music and sound effects stay as they were.' },
        { q: 'Which languages can I dub into?', a: '29 languages, including Urdu, Hindi, Arabic, English, Spanish, French, Turkish and Chinese.' },
      ],
      finalTitle: 'Dub your first video today',
      finalText: 'Three days free with every feature. Keep it only if it saves you time.',
      category: 'MultimediaApplication',
      price: '25',
    },
  },
  {
    slug: 'invopost',
    name: 'InvoPost',
    tagline: 'Run every TikTok client from one panel',
    description:
      'Each client gets their own Chrome profile, login, proxy and VPN. InvoPost schedules their videos, writes captions with AI and checks every video before it goes out.',
    price: 'free',
    platforms: ['Windows'],
    tags: ['free', 'windows'],
    facts: ['Chrome profile per client', 'AI captions', 'Content calendar'],
    image: {
      src: '/products/invopost-panel-720.webp',
      width: 720,
      height: 426,
      alt: 'InvoPost panel: client counts, next scheduled posts with VPN status and a live posting notice',
    },
    ogImage: '/products/invopost-og.jpg',
    primary: { label: 'Download free', href: 'https://invopost.invotic.com/download.html' },
    page: '/products/invopost',
    featured: true,
    detail: {
      seoTitle: 'InvoPost — Free TikTok Agency Panel for Windows | INVOTIC',
      seoDescription:
        'Free Windows app for TikTok agencies: a Chrome profile, proxy and VPN per client, AI captions in the client’s language, a content calendar and safety checks.',
      lead: 'A Chrome profile per client, AI captions and a posting calendar, all on your own laptop.',
      note: 'Windows 10 / 11 · No account needed · Your data stays on your laptop.',
      stepsTitle: 'Ready in four steps',
      steps: [
        { title: 'Download & install', text: 'Pick any folder or drive. All clients, profiles and videos stay in that folder.' },
        { title: 'Add your clients', text: 'Name, country, language, posting times and an optional proxy for each client.' },
        { title: 'Log in once', text: 'Open each client’s Chrome profile and log in to TikTok. It stays logged in.' },
        { title: 'Drop videos', text: 'Put videos in the client’s folder. InvoPost writes captions, checks them and schedules them.' },
      ],
      featuresTitle: 'Everything an agency needs, on one laptop',
      features: [
        { icon: Chrome, title: 'A Chrome profile per client', text: 'Every account keeps its own login, cookies, proxy and VPN. Open or close all of them in one click.' },
        { icon: ShieldCheck, title: 'VPN guard', text: 'TikTok stays blocked until the profile’s IP matches the client’s country. If the VPN drops, the tabs close.' },
        { icon: Sparkles, title: 'AI captions', text: 'Captions and hashtags in the client’s language, with Gemini or a free local AI on your PC.' },
        { icon: CalendarDays, title: 'Content calendar', text: 'Every client’s posts on one calendar, with the video that goes out in each slot.' },
        { icon: BadgeCheck, title: 'Safety checks', text: 'Each video is checked for duplicates, unsafe frames and caption problems before you approve it.' },
        { icon: BellRing, title: 'Backup, alerts, reports', text: 'One-click backup and restore, Telegram alerts and monthly PDF reports per client.' },
      ],
      pricingTitle: 'Free. Every feature.',
      plans: [
        {
          name: 'Free',
          badge: 'free',
          amount: '$0',
          unit: 'every feature',
          items: ['Install on as many laptops as your team needs', 'In-app notice when a new version is out', 'No account needed'],
          cta: { label: 'Download InvoPost', href: 'https://invopost.invotic.com/download.html' },
          highlight: true,
        },
      ],
      faq: [
        { q: 'Is InvoPost really free?', a: 'Yes. Every feature is free right now. If that ever changes, you will see a notice inside the app first.' },
        { q: 'Does my data go to your server?', a: 'No. Clients, logins, videos and captions stay on your laptop, in the folder you chose.' },
        { q: 'Windows says “Unknown publisher”. Is it safe?', a: 'That shows because the installer is not code-signed yet. Click More info, then Run anyway.' },
        { q: 'Can my team use it?', a: 'Install it on every laptop. Each laptop is its own panel with its own clients.' },
      ],
      finalTitle: 'Run your TikTok clients from one panel',
      finalText: 'Free for every agency. Install it in a few minutes.',
      category: 'BusinessApplication',
      price: '0',
    },
  },
  {
    slug: 'speak-translate',
    name: 'Speak & Translate',
    tagline: 'Speak Urdu, get English',
    description:
      'Speak or type Urdu and Roman Urdu and get English typed straight into ChatGPT, WhatsApp or any text box.',
    price: 'free',
    platforms: ['Chrome', 'Windows'],
    tags: ['free', 'chrome', 'windows'],
    facts: ['Live translation', 'Push-to-talk', 'Works in any app'],
    image: {
      src: '/blog/speak-translate-visual.svg',
      width: 1200,
      height: 630,
      alt: 'Speak and Translate: Urdu voice to English text',
    },
    primary: { label: 'Get it free', href: '/tools/speak-translate' },
    page: '/tools/speak-translate',
    featured: true,
  },
  {
    slug: 'amazon-video-downloader',
    name: 'Amazon Video Downloader',
    tagline: 'Bulk-download a creator’s videos',
    description:
      'Scan any Amazon creator storefront and download the videos and images you pick in bulk, with metadata.',
    price: 'free',
    platforms: ['Chrome'],
    tags: ['free', 'chrome'],
    facts: ['Bulk download', 'Metadata', 'Two-minute setup'],
    image: {
      src: '/blog/amazon-video-downloader-visual.svg',
      width: 1200,
      height: 630,
      alt: 'Amazon Video Downloader Chrome extension',
    },
    primary: { label: 'Get it free', href: '/tools/amazon-video-downloader' },
    page: '/tools/amazon-video-downloader',
  },
  {
    slug: 'invograb',
    name: 'InvoGrab',
    tagline: 'Download every image from any link',
    description:
      'Paste as many links as you like. InvoGrab finds every image, lets you rename them, and saves them as JPG, PNG or WEBP into your folder or a ZIP.',
    price: 'soon',
    platforms: ['Windows'],
    tags: ['windows'],
    facts: ['Bulk links', 'Rename and convert', 'Folder or ZIP'],
    image: {
      src: '/products/invograb-app-1280.webp',
      srcSet: '/products/invograb-app-720.webp 720w, /products/invograb-app-1280.webp 1280w',
      width: 1280,
      height: 800,
      alt: 'InvoGrab app: scanned links with their status and a grid of found images with a name under each',
    },
    primary: {
      label: 'Tell me when it’s out',
      href: `${SALES_WHATSAPP}?text=${encodeURIComponent('Hi INVOTIC! Please tell me when InvoGrab is available.')}`,
    },
  },
  {
    slug: 'invo-edit',
    name: 'Invo Edit',
    tagline: 'Automatic video editor',
    description:
      'Add a voiceover and a folder of pictures and clips, press Auto Edit, and get a finished video synced to the voice. Works offline.',
    price: 'soon',
    platforms: ['Windows'],
    tags: ['windows'],
    facts: ['Auto Edit', 'Captions', 'Works offline'],
    placeholder: { icon: Wand2, title: '⚡ Auto Edit', text: 'Screenshots coming with the release' },
    primary: {
      label: 'Tell me when it’s out',
      href: `${SALES_WHATSAPP}?text=${encodeURIComponent('Hi INVOTIC! Please tell me when Invo Edit is available.')}`,
    },
  },
  {
    slug: 'muse-hub',
    name: 'Invotic Muse Hub',
    tagline: 'One group chat for all your Muse AI agents',
    description:
      'Run many Muse accounts from one place. Type @agent and your message, the extension types it into that agent’s chat, and the reply comes back to the Hub. Works across laptops.',
    price: 'soon',
    platforms: ['Chrome'],
    tags: ['chrome'],
    facts: ['@agent messages', 'Agent status', 'Multi-laptop'],
    placeholder: { icon: MessagesSquare, title: '@agent group chat', text: 'Screenshots coming with the release' },
    primary: {
      label: 'Tell me when it’s out',
      href: `${SALES_WHATSAPP}?text=${encodeURIComponent('Hi INVOTIC! Please tell me when Invotic Muse Hub is available.')}`,
    },
  },
  {
    slug: 'html-studio',
    name: 'INVOTIC HTML Studio',
    tagline: 'Turn HTML pages into 4K videos',
    description:
      'Drop an HTML file in and get a finished MP4: 4K, music, sound effects and AI voice-over. Renders videos of any length and picks up where it stopped.',
    price: 'soon',
    platforms: ['Windows'],
    tags: ['windows'],
    facts: ['HTML to MP4', '4K', 'AI voice-over'],
    placeholder: { icon: Clapperboard, title: 'HTML → 4K MP4', text: 'Screenshots coming with the release' },
    primary: {
      label: 'Tell me when it’s out',
      href: `${SALES_WHATSAPP}?text=${encodeURIComponent('Hi INVOTIC! Please tell me when INVOTIC HTML Studio is available.')}`,
    },
  },
];

export const productFilters: { id: 'all' | ProductTag; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'free', label: 'Free' },
  { id: 'paid', label: 'Paid' },
  { id: 'windows', label: 'Windows app' },
  { id: 'chrome', label: 'Chrome extension' },
];

export function getProduct(slug: string | undefined): Product | undefined {
  return products.find((p) => p.slug === slug && p.detail);
}

export const isExternal = (href: string) => /^https?:\/\//.test(href);
