import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Boxes, Calculator, MessageCircle } from 'lucide-react';
import { products, productFilters, type ProductTag } from '../data/products';
import { usePageSeo } from '../hooks/usePageSeo';
import { pageSeo } from '../data/pageSeo';
import { Badges, ByInvotic, ProductVisual, SmartLink } from './products/ProductBits';

export default function Products() {
  usePageSeo(pageSeo.products.title, pageSeo.products.description, '/products');
  const [filter, setFilter] = useState<'all' | ProductTag>('all');
  const shown = filter === 'all' ? products : products.filter((p) => p.tags.includes(filter));
  const count = (id: 'all' | ProductTag) => (id === 'all' ? products.length : products.filter((p) => p.tags.includes(id)).length);

  return (
    <div className="pt-32 pb-24 bg-brand-dark min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1.5 rounded-full bg-brand-red/15 border border-brand-red/30 text-brand-red text-xs font-bold uppercase tracking-widest mb-6">
            <span className="flex items-center gap-2">
              <Boxes size={12} /> INVOTIC Software
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-bold tracking-tighter mb-6">
            Software by INVO<span className="text-brand-red">TIC</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Apps and extensions we built to dub, post, edit and translate faster. Start free, and pay only for the app you keep using.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12" role="group" aria-label="Filter products">
          {productFilters.map((f) => (
            <button
              key={f.id}
              type="button"
              aria-pressed={filter === f.id}
              onClick={() => setFilter(f.id)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                filter === f.id ? 'bg-brand-red text-white' : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10'
              }`}
            >
              {f.label}
              <span className="ml-2 font-mono text-xs opacity-70">{count(f.id)}</span>
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {shown.map((p) => (
            <article key={p.slug} className="immersive-card immersive-card-hover rounded-2xl p-5 flex flex-col gap-4">
              <ProductVisual product={p} sizes="(min-width: 1024px) 380px, (min-width: 768px) 50vw, 100vw" />
              <Badges product={p} />
              <div>
                <h2 className="text-2xl font-display font-bold tracking-tight mb-1">{p.name}</h2>
                <p className="text-brand-cyan text-xs font-semibold uppercase tracking-widest mb-3">{p.tagline}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{p.description}</p>
              </div>
              <ul className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-gray-500">
                {p.facts.map((f) => (
                  <li key={f}>
                    <span className="text-brand-cyan">✓</span> {f}
                  </li>
                ))}
              </ul>
              <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-2">
                <SmartLink
                  href={p.page ?? p.primary.href}
                  className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-md font-bold text-sm transition-all ${
                    p.price === 'soon' ? 'border border-white/15 hover:border-white/40 text-white' : 'bg-brand-red hover:bg-red-600 text-white bg-glow-red'
                  }`}
                >
                  {p.page ? `View ${p.name}` : p.primary.label} <ArrowRight size={15} />
                </SmartLink>
                <ByInvotic name={p.name} />
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 grid lg:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-white/10 p-7 bg-[linear-gradient(110deg,rgba(0,242,255,0.08),transparent_60%)] bg-brand-surface flex flex-wrap items-center justify-between gap-5">
            <div className="max-w-md">
              <div className="flex items-center gap-2 text-brand-cyan font-mono font-bold text-xs uppercase tracking-widest mb-2">
                <Calculator size={14} /> Free tools
              </div>
              <h2 className="text-2xl font-display font-bold mb-2">Need a quick number?</h2>
              <p className="text-gray-400 text-sm">Revenue, monetization, CPM by niche and title ideas. Runs in your browser with no signup.</p>
            </div>
            <Link to="/tools" className="inline-flex items-center gap-2 bg-brand-cyan text-black px-5 py-2.5 rounded-md font-bold text-sm">
              Open free tools <ArrowRight size={15} />
            </Link>
          </div>
          <div className="rounded-2xl border border-white/10 p-7 bg-[linear-gradient(110deg,rgba(255,0,0,0.1),transparent_60%)] bg-brand-surface flex flex-wrap items-center justify-between gap-5">
            <div className="max-w-md">
              <div className="flex items-center gap-2 text-brand-red font-mono font-bold text-xs uppercase tracking-widest mb-2">
                <MessageCircle size={14} /> Custom software
              </div>
              <h2 className="text-2xl font-display font-bold mb-2">Want a tool built for your workflow?</h2>
              <p className="text-gray-400 text-sm">We build automation software for creators and agencies. Tell us what slows you down.</p>
            </div>
            <a
              href="https://wa.me/923484166937?text=Hi%20INVOTIC!%20I%20need%20a%20custom%20tool%20for%20my%20workflow."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand-red hover:bg-red-600 text-white px-5 py-2.5 rounded-md font-bold text-sm bg-glow-red"
            >
              Chat on WhatsApp <ArrowRight size={15} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
