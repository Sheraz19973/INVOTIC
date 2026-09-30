import { useEffect } from 'react';

const SITE_URL = 'https://invotic.com';
const DEFAULT_TITLE = 'INVOTIC | YouTube Automation Training by Sheraz Khan';
const DEFAULT_DESC =
  'Learn YouTube automation from beginner to advanced with INVOTIC. Free and paid training programs by Sheraz Khan to build, grow, and monetize your channel.';

/** Sets title, meta description and canonical for a page. Call unconditionally. */
export function usePageSeo(title: string, description: string, path: string) {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = title;

    const meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    const prevDesc = meta?.getAttribute('content') ?? '';
    if (meta) meta.setAttribute('content', description);

    const canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    const prevCanonical = canonical?.getAttribute('href') ?? '';
    if (canonical) canonical.setAttribute('href', `${SITE_URL}${path}`);

    return () => {
      document.title = prevTitle || DEFAULT_TITLE;
      const m = document.querySelector<HTMLMetaElement>('meta[name="description"]');
      if (m) m.setAttribute('content', prevDesc || DEFAULT_DESC);
      const c = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
      if (c) c.setAttribute('href', prevCanonical || `${SITE_URL}/`);
    };
  }, [title, description, path]);
}
