import { useEffect } from 'react';
import { pageSeo } from '../data/pageSeo';

const SITE_URL = 'https://invotic.com';
const DEFAULT_TITLE = pageSeo.home.title;
const DEFAULT_DESC = pageSeo.home.description;

/** Sets title, meta description and canonical for a page. Call unconditionally. */
export function usePageSeo(title: string, description: string, path: string) {
  useEffect(() => {
    document.title = title;

    const meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (meta) meta.setAttribute('content', description);

    const canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (canonical) canonical.setAttribute('href', `${SITE_URL}${path}`);

    // Always fall back to the homepage values: the next page sets its own right after.
    return () => {
      document.title = DEFAULT_TITLE;
      const m = document.querySelector<HTMLMetaElement>('meta[name="description"]');
      if (m) m.setAttribute('content', DEFAULT_DESC);
      const c = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
      if (c) c.setAttribute('href', `${SITE_URL}/`);
    };
  }, [title, description, path]);
}
