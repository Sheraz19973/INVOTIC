import { useEffect } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Clock,
  MessageCircle,
  ChevronDown,
} from 'lucide-react';
import {
  getPost,
  relatedPosts,
  formatDate,
  type ContentBlock,
} from '../data/blog';

const whatsappNumber = '923484166937';
const SITE_URL = 'https://invotic.com';
const DEFAULT_TITLE = 'INVOTIC | YouTube Automation Training by Sheraz Khan';
const DEFAULT_DESC =
  'Learn YouTube automation from beginner to advanced with INVOTIC. Free and paid training programs by Sheraz Khan to build, grow, and monetize your channel.';

function usePostSeo(slug: string, title: string, description: string) {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = `${title} | INVOTIC Blog`;

    const meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    const prevDesc = meta?.getAttribute('content') ?? '';
    if (meta) meta.setAttribute('content', description);

    const canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    const prevCanonical = canonical?.getAttribute('href') ?? '';
    if (canonical) canonical.setAttribute('href', `${SITE_URL}/blog/${slug}`);

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'blogpost-jsonld';
    document.head.appendChild(script);

    return () => {
      document.title = prevTitle || DEFAULT_TITLE;
      const m = document.querySelector<HTMLMetaElement>('meta[name="description"]');
      if (m) m.setAttribute('content', prevDesc || DEFAULT_DESC);
      const c = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
      if (c) c.setAttribute('href', prevCanonical || `${SITE_URL}/`);
      document.getElementById('blogpost-jsonld')?.remove();
    };
  }, [slug, title, description]);
}

function Block({ block }: { block: ContentBlock }) {
  switch (block.type) {
    case 'intro':
      return (
        <p className="text-xl text-gray-300 leading-relaxed mb-8 font-medium">
          {block.text}
        </p>
      );
    case 'h2':
      return (
        <h2 className="text-2xl md:text-3xl font-display font-bold tracking-tight mt-12 mb-5 text-white">
          {block.text}
        </h2>
      );
    case 'h3':
      return (
        <h3 className="text-xl font-display font-bold mt-8 mb-4 text-white">
          {block.text}
        </h3>
      );
    case 'p':
      return <p className="text-gray-400 leading-relaxed mb-5">{block.text}</p>;
    case 'ul':
      return (
        <ul className="mb-6 space-y-3">
          {block.items.map((item, i) => (
            <li key={i} className="flex gap-3 text-gray-400 leading-relaxed">
              <span className="text-brand-red font-bold mt-0.5">▸</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    case 'ol':
      return (
        <ol className="mb-6 space-y-3">
          {block.items.map((item, i) => (
            <li key={i} className="flex gap-4 text-gray-400 leading-relaxed">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-red/15 border border-brand-red/30 text-brand-red font-bold text-sm flex items-center justify-center">
                {i + 1}
              </span>
              <span className="pt-1">{item}</span>
            </li>
          ))}
        </ol>
      );
    case 'quote':
      return (
        <blockquote className="border-l-4 border-brand-red bg-white/[0.03] rounded-r-xl p-6 my-8">
          <p className="text-gray-200 italic leading-relaxed mb-2">&ldquo;{block.text}&rdquo;</p>
          {block.author && (
            <cite className="text-sm text-gray-500 not-italic">— {block.author}</cite>
          )}
        </blockquote>
      );
    case 'callout':
      return (
        <div className="rounded-xl border border-brand-cyan/30 bg-brand-cyan/5 p-6 my-8">
          <p className="font-display font-bold text-brand-cyan mb-2">{block.title}</p>
          <p className="text-gray-300 leading-relaxed">{block.text}</p>
        </div>
      );
    case 'faq':
      return (
        <div className="my-10">
          <h2 className="text-2xl md:text-3xl font-display font-bold tracking-tight mb-6 text-white">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {block.items.map((item, i) => (
              <details
                key={i}
                className="group rounded-xl border border-white/10 bg-white/[0.02] open:border-brand-red/40 transition-colors"
              >
                <summary className="flex items-center justify-between gap-4 p-5 cursor-pointer list-none font-semibold text-white">
                  {item.q}
                  <ChevronDown
                    size={18}
                    className="flex-shrink-0 text-brand-red transition-transform group-open:rotate-180"
                  />
                </summary>
                <p className="px-5 pb-5 text-gray-400 leading-relaxed">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      );
    case 'cta':
      return (
        <div className="rounded-2xl border border-brand-red/30 bg-gradient-to-br from-brand-red/10 to-transparent p-8 my-10 text-center">
          <h3 className="text-2xl font-display font-bold mb-3 text-white">
            Want help applying this?
          </h3>
          <p className="text-gray-400 mb-6 max-w-xl mx-auto">
            INVOTIC helps creators build, recover, and scale YouTube channels —
            message us on WhatsApp and we&apos;ll point you in the right direction.
          </p>
          <a
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
              "Hi INVOTIC! I just read your blog and I'd like some help with my YouTube channel."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-red hover:bg-red-600 text-white px-8 py-3.5 rounded-md font-semibold transition-all hover:scale-105 bg-glow-red"
          >
            <MessageCircle size={18} /> Chat on WhatsApp
          </a>
        </div>
      );
  }
}

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = getPost(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) return <Navigate to="/blog" replace />;

  usePostSeo(post.slug, post.title, post.metaDescription);

  // Inject JSON-LD (BlogPosting + FAQPage when FAQs exist)
  useEffect(() => {
    const el = document.getElementById('blogpost-jsonld');
    if (!el) return;
    const faqBlock = post.content.find((b) => b.type === 'faq');
    const jsonLd: Record<string, unknown> = {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.metaDescription,
      datePublished: post.date,
      ...(post.updated ? { dateModified: post.updated } : {}),
      author: { '@type': 'Person', name: 'Sheraz Khan' },
      publisher: {
        '@type': 'Organization',
        name: 'INVOTIC',
        url: SITE_URL,
      },
      mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
      keywords: post.tags.join(', '),
    };
    if (faqBlock && faqBlock.type === 'faq') {
      const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqBlock.items.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      };
      el.textContent = JSON.stringify([jsonLd, faqSchema]);
    } else {
      el.textContent = JSON.stringify(jsonLd);
    }
  }, [post]);

  const related = relatedPosts(post);

  return (
    <article className="pt-32 pb-24 bg-brand-dark min-h-screen">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-gray-500 hover:text-brand-red transition-colors text-sm font-semibold mb-8"
          >
            <ArrowLeft size={16} /> Back to blog
          </Link>

          <div className="flex items-center gap-3 mb-5">
            <span className="inline-block px-3 py-1 rounded-full bg-brand-red/15 border border-brand-red/30 text-brand-red text-xs font-bold uppercase tracking-widest">
              {post.category}
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-display font-bold tracking-tighter mb-6 leading-tight text-white">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-5 text-sm text-gray-500 pb-8 mb-8 border-b border-white/10">
            <span className="flex items-center gap-1.5">
              <CalendarDays size={14} />
              {formatDate(post.date)}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={14} />
              {post.readTime} min read
            </span>
            <span className="text-gray-600">By Sheraz Khan</span>
          </div>

          <div>
            {post.content.map((block, i) => (
              <Block key={i} block={block} />
            ))}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-10 pt-8 border-t border-white/10">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-500 text-xs"
              >
                #{tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Related posts */}
        {related.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-display font-bold mb-6 text-white">
              Keep reading
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  to={`/blog/${r.slug}`}
                  className="group rounded-xl border border-white/10 bg-white/[0.02] p-6 hover:border-brand-red/50 transition-all"
                >
                  <span className="text-xs font-bold uppercase tracking-widest text-brand-red">
                    {r.category}
                  </span>
                  <h3 className="font-display font-bold mt-2 mb-2 group-hover:text-brand-red transition-colors text-white">
                    {r.title}
                  </h3>
                  <span className="inline-flex items-center gap-1 text-sm text-gray-500 group-hover:text-white transition-colors">
                    Read <ArrowRight size={14} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
