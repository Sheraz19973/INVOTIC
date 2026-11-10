// Title and description for pages that are not driven by a data file.
// Used by the page components at runtime and by the build-time prerender
// (vite.config.ts), so link previews and Google see the same text.

export interface PageSeo {
  title: string;
  description: string;
}

export const pageSeo = {
  home: {
    title: 'INVOTIC | YouTube Automation Training by Sheraz Khan',
    description:
      'Learn YouTube automation from beginner to advanced with INVOTIC. Free and paid training programs by Sheraz Khan to build, grow, and monetize your channel.',
  },
  blog: {
    title: 'YouTube Automation Blog — Guides, AI Tools & News | INVOTIC',
    description:
      'Practical guides on YouTube automation, faceless channels, monetization and the AI tools creators use — from 10+ years of running channels.',
  },
  admission: {
    title: 'YouTube Automation Course Admission | INVOTIC',
    description:
      'Apply for the INVOTIC YouTube automation course with Sheraz Khan. Fill out the admission form, get reviewed, and join the free or paid training.',
  },
  tools: {
    title: 'Free YouTube Tools — Calculators & Generators | INVOTIC',
    description:
      'Free tools for YouTube creators: revenue calculator, monetization tracker, CPM by niche explorer, and a video title generator.',
  },
  notFound: {
    title: 'Page Not Found | INVOTIC',
    description:
      'This page does not exist. Go back to INVOTIC for YouTube automation training, free creator tools and the blog.',
  },
} satisfies Record<string, PageSeo>;
