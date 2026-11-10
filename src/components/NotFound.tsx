import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { usePageSeo } from '../hooks/usePageSeo';
import { pageSeo } from '../data/pageSeo';

/** Shown for any address that is not a real page. Tells search engines not to index it. */
export default function NotFound() {
  usePageSeo(pageSeo.notFound.title, pageSeo.notFound.description, '/404');

  useEffect(() => {
    const robots = document.createElement('meta');
    robots.name = 'robots';
    robots.content = 'noindex';
    robots.id = 'notfound-robots';
    document.head.appendChild(robots);
    return () => robots.remove();
  }, []);

  const links = [
    { to: '/', label: 'Home' },
    { to: '/blog', label: 'Blog' },
    { to: '/tools', label: 'Free Tools' },
    { to: '/admission', label: 'Admission' },
  ];

  return (
    <div className="pt-40 pb-32 bg-black min-h-screen">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <p className="text-brand-red font-mono font-bold text-sm uppercase tracking-widest mb-4">Error 404</p>
        <h1 className="text-4xl md:text-6xl font-display font-bold tracking-tighter mb-6">
          This page <span className="text-brand-red">doesn&apos;t exist</span>
        </h1>
        <p className="text-gray-400 text-lg mb-10">
          The link may be old or mistyped. These pages will get you back on track.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {links.map((l, i) => (
            <Link
              key={l.to}
              to={l.to}
              className={
                i === 0
                  ? 'inline-flex items-center gap-2 bg-brand-red hover:bg-red-600 text-white px-8 py-3 rounded-md font-bold text-sm transition-all bg-glow-red'
                  : 'inline-flex items-center border border-white/10 hover:border-white/30 text-white px-8 py-3 rounded-md font-bold text-sm transition-all'
              }
            >
              {i === 0 && <ArrowLeft size={16} />}
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
