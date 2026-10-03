export interface InfoPageMeta {
  slug: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  updated: string;
  intro: string;
  sections: { heading: string; body: string[] }[];
}

export const infoPages: InfoPageMeta[] = [
  {
    slug: 'contact',
    title: 'Contact',
    seoTitle: 'Contact INVOTIC | YouTube Automation Training',
    seoDescription:
      'Get in touch with INVOTIC — admissions, training enquiries, and support for our free YouTube creator tools.',
    updated: '2026-10-03',
    intro: '',
    sections: [],
  },
  {
    slug: 'about',
    title: 'About INVOTIC',
    seoTitle: 'About INVOTIC | YouTube Automation Training by Sheraz Khan',
    seoDescription:
      'INVOTIC helps YouTube creators learn automation — from starting a faceless channel to growing and monetizing it. Founded by Sheraz Khan.',
    updated: '2026-10-03',
    intro:
      'INVOTIC is a YouTube automation training brand founded by Sheraz Khan. We help creators start, grow, and monetize YouTube channels — including faceless channels — through practical training and free tools built for creators.',
    sections: [
      {
        heading: 'What we do',
        body: [
          'YouTube automation training: step-by-step programs that take you from channel setup to content systems, growth, and monetization.',
          'Free creator tools: calculators, generators, and utilities (like our YouTube revenue calculator and the Speak & Translate extension) that solve real creator problems at no cost.',
          'Practical guidance: no hype, no shortcuts — just the workflows that actually work for building a channel as a system.',
        ],
      },
      {
        heading: 'Who it is for',
        body: [
          'Beginners who want to start a YouTube channel but do not want to be on camera.',
          'Creators who want to systemize scripting, production, and publishing instead of grinding video by video.',
          'Anyone curious about YouTube automation as a skill and a business model.',
        ],
      },
      {
        heading: 'Contact',
        body: [
          'Email: info@invotic.com',
          'For admissions and training enquiries, use the contact form on the homepage or the admission page.',
        ],
      },
    ],
  },
  {
    slug: 'privacy',
    title: 'Privacy Policy',
    seoTitle: 'Privacy Policy | INVOTIC',
    seoDescription:
      'How INVOTIC collects, uses, and protects your information when you use invotic.com and our free tools.',
    updated: '2026-10-03',
    intro:
      'This is a starter privacy policy for invotic.com. It describes in plain language what information is collected and how it is used. It will be reviewed and finalized by the site owner.',
    sections: [
      {
        heading: 'Information we collect',
        body: [
          'Contact information you provide: if you use the contact form, your name, email address, and message are sent to us via WhatsApp so we can reply.',
          'Basic technical data: like most websites, our hosting provider may log standard technical information (such as IP address, browser type, and pages visited) for security and reliability.',
          'We do not create user accounts on this site and do not ask for payment details here.',
        ],
      },
      {
        heading: 'How we use it',
        body: [
          'To respond to your enquiries and provide the training or tools you asked about.',
          'To keep the site secure and working properly.',
          'We do not sell your personal information to anyone.',
        ],
      },
      {
        heading: 'Cookies',
        body: [
          'This site may use basic cookies or local storage for essential functions (for example, remembering a tool setting in your browser). No advertising trackers are used.',
        ],
      },
      {
        heading: 'Your rights',
        body: [
          'You can ask us what information we hold about you, ask us to correct it, or ask us to delete it by emailing info@invotic.com.',
        ],
      },
      {
        heading: 'Changes',
        body: [
          'If this policy changes, the updated version will be posted on this page with a new revision date.',
        ],
      },
    ],
  },
  {
    slug: 'terms',
    title: 'Terms of Use',
    seoTitle: 'Terms of Use | INVOTIC',
    seoDescription:
      'The terms for using invotic.com, our free tools, and training content.',
    updated: '2026-10-03',
    intro:
      'This is a starter terms page for invotic.com. By using this site and our free tools, you agree to the terms below. It will be reviewed and finalized by the site owner.',
    sections: [
      {
        heading: 'Using the site and tools',
        body: [
          'Our free tools (calculators, generators, extensions) are provided as-is for your convenience. Results are estimates and examples, not professional financial or legal advice.',
          'You agree not to misuse the site: no attempts to disrupt it, scrape it aggressively, or use it for unlawful purposes.',
        ],
      },
      {
        heading: 'Training content',
        body: [
          'Training programs teach methods and workflows. We describe what has worked in practice, but we cannot guarantee specific income, views, or channel growth — results depend on effort, niche, and factors outside our control.',
        ],
      },
      {
        heading: 'Intellectual property',
        body: [
          'Site content, branding, and tool code belong to INVOTIC unless stated otherwise. You may share links to our pages; you may not copy substantial content or pass our tools off as your own.',
        ],
      },
      {
        heading: 'Liability',
        body: [
          'To the maximum extent permitted by law, INVOTIC is not liable for losses arising from use of the site, tools, or training content.',
        ],
      },
      {
        heading: 'Contact',
        body: ['Questions about these terms: info@invotic.com.'],
      },
    ],
  },
];

export function getInfoPage(slug: string | undefined): InfoPageMeta | undefined {
  return infoPages.find((p) => p.slug === slug);
}
