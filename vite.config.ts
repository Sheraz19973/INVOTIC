import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';
import {defineConfig, loadEnv, type Plugin} from 'vite';
import {posts} from './src/data/blog';
import {infoPages} from './src/data/infoPages';
import {tools} from './src/data/tools';
import {pageSeo} from './src/data/pageSeo';

const SITE_URL = 'https://invotic.com';

interface PrerenderPage {
  /** URL path, e.g. "/blog/my-post". "/" is the homepage. */
  path: string;
  /** Output file inside dist/, e.g. "blog/my-post.html". */
  file: string;
  title: string;
  description: string;
  type?: 'website' | 'article';
  published?: string;
  noindex?: boolean;
}

function escapeAttr(value: string): string {
  return value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function prerenderPages(): PrerenderPage[] {
  const pages: PrerenderPage[] = [
    {path: '/blog', file: 'blog.html', ...pageSeo.blog},
    {path: '/admission', file: 'admission.html', ...pageSeo.admission},
    {path: '/tools', file: 'tools.html', ...pageSeo.tools},
    {path: '/404', file: '404.html', ...pageSeo.notFound, noindex: true},
  ];
  for (const p of infoPages) {
    pages.push({path: `/${p.slug}`, file: `${p.slug}.html`, title: p.seoTitle, description: p.seoDescription});
  }
  for (const t of tools) {
    pages.push({path: `/tools/${t.slug}`, file: `tools/${t.slug}.html`, title: t.seoTitle, description: t.seoDescription});
  }
  for (const post of posts) {
    pages.push({
      path: `/blog/${post.slug}`,
      file: `blog/${post.slug}.html`,
      title: `${post.title} | INVOTIC Blog`,
      description: post.metaDescription,
      type: 'article',
      published: post.date,
    });
  }
  return pages;
}

/** Swaps the homepage head tags in the built index.html for one page's own tags. */
function renderHead(template: string, page: PrerenderPage): string {
  const url = page.path === '/404' ? SITE_URL + '/' : SITE_URL + page.path;
  const title = escapeAttr(page.title);
  const desc = escapeAttr(page.description);
  const swaps: [RegExp, string][] = [
    [/<title>[^<]*<\/title>/, `<title>${title}</title>`],
    [/<meta name="description" content="[^"]*" \/>/, `<meta name="description" content="${desc}" />`],
    [/<link rel="canonical" href="[^"]*" \/>/, `<link rel="canonical" href="${url}" />`],
    [/<meta property="og:type" content="[^"]*" \/>/, `<meta property="og:type" content="${page.type ?? 'website'}" />`],
    [/<meta property="og:url" content="[^"]*" \/>/, `<meta property="og:url" content="${url}" />`],
    [/<meta property="og:title" content="[^"]*" \/>/, `<meta property="og:title" content="${title}" />`],
    [/<meta property="og:description" content="[^"]*" \/>/, `<meta property="og:description" content="${desc}" />`],
    [/<meta name="twitter:title" content="[^"]*" \/>/, `<meta name="twitter:title" content="${title}" />`],
    [/<meta name="twitter:description" content="[^"]*" \/>/, `<meta name="twitter:description" content="${desc}" />`],
  ];
  let html = template;
  for (const [pattern, replacement] of swaps) {
    if (!pattern.test(html)) throw new Error(`prerender: tag not found in index.html: ${pattern}`);
    html = html.replace(pattern, replacement);
  }
  const extra: string[] = [];
  if (page.noindex) {
    // A noindex page must not point a canonical at a real page.
    html = html.replace(/\s*<link rel="canonical" href="[^"]*" \/>/, '');
    extra.push('<meta name="robots" content="noindex" />');
  }
  if (page.published) extra.push(`<meta property="article:published_time" content="${page.published}" />`);
  if (extra.length) html = html.replace('</head>', `    ${extra.join('\n    ')}\n  </head>`);
  return html;
}

/**
 * After the build, writes one HTML file per page (dist/blog.html, dist/blog/<slug>.html, ...).
 * The page body is still the React app; only the head differs, so WhatsApp/Facebook/X
 * previews and crawlers that do not run JavaScript see each page's own title and text.
 * public/.htaccess serves these files and sends a real 404 for unknown addresses.
 */
function prerenderHeads(): Plugin {
  let outDir = 'dist';
  return {
    name: 'invotic-prerender-heads',
    apply: 'build',
    configResolved(config) {
      outDir = path.resolve(config.root, config.build.outDir);
    },
    async closeBundle() {
      const template = fs.readFileSync(path.join(outDir, 'index.html'), 'utf8');
      if (!template.includes('<div id="root"></div>')) throw new Error('prerender: empty #root not found in index.html');
      const pages = prerenderPages();
      // Render every page's real content (text, headings, links) into its HTML file, so search
      // engines get the page without running JavaScript. The browser then hydrates it (main.tsx).
      const {createServer} = await import('vite');
      const server = await createServer({
        configFile: false,
        root: path.dirname(outDir),
        plugins: [react()],
        logLevel: 'error',
        appType: 'custom',
        server: {middlewareMode: true, hmr: false, watch: null},
        resolve: {alias: {'@': path.dirname(outDir)}},
      });
      let rendered = 0;
      try {
        const {render} = (await server.ssrLoadModule('/src/entry-server.tsx')) as {render: (url: string) => Promise<string>};
        const withBody = async (page: PrerenderPage, html: string) => {
          const body = await render(page.path);
          if (!body.includes('<h1')) throw new Error(`prerender: no <h1> rendered for ${page.path}`);
          rendered++;
          return html.replace('<div id="root"></div>', `<div id="root">${body}</div>`);
        };
        for (const page of pages) {
          const target = path.join(outDir, page.file);
          fs.mkdirSync(path.dirname(target), {recursive: true});
          fs.writeFileSync(target, await withBody(page, renderHead(template, page)));
        }
        const home: PrerenderPage = {path: '/', file: 'index.html', ...pageSeo.home};
        fs.writeFileSync(path.join(outDir, 'index.html'), await withBody(home, template));
      } finally {
        await server.close();
      }
      console.log(`prerender: wrote ${pages.length + 1} pages, ${rendered} with full content`);
    },
  };
}

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [react(), tailwindcss(), prerenderHeads()],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(import.meta.dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify — file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
