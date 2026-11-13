import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { products } from '../data/products';
import { tools } from '../data/tools';
import { Badges, ByInvotic, ProductVisual, SmartLink } from './products/ProductBits';

/** Homepage section: the products we build, one large card and two smaller ones. */
export default function ProductsShowcase() {
  const featured = products.filter((p) => p.featured);
  const [main, ...side] = featured;
  const calculators = tools.filter((t) => !['speak-translate', 'amazon-video-downloader'].includes(t.slug));

  return (
    <section id="products" className="py-24 bg-brand-dark border-t border-white/5" aria-labelledby="products-heading">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl lg:text-left text-center mx-auto lg:mx-0">
            <div className="text-brand-red font-mono font-bold text-xs uppercase tracking-widest mb-4">Built by INVOTIC</div>
            <h2 id="products-heading" className="text-4xl md:text-6xl font-display font-bold tracking-tighter leading-tight">
              The software we use to run <span className="text-brand-red">our own</span> channels
            </h2>
            <p className="text-gray-400 text-lg mt-5">
              We built these for our own work first. Now you can use them too. Most are free, and the paid one comes with a free trial.
            </p>
          </div>
          <Link
            to="/products"
            className="mx-auto lg:mx-0 inline-flex items-center gap-2 border border-white/15 hover:border-white/40 text-white px-6 py-3 rounded-md font-bold text-sm transition-colors"
          >
            See all products <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid lg:grid-cols-[1.25fr_1fr] gap-6">
          {main && (
            <article className="immersive-card immersive-card-hover rounded-2xl p-5 md:p-6 flex flex-col gap-5">
              <ProductVisual product={main} sizes="(min-width: 1024px) 680px, 100vw" />
              <div className="flex flex-wrap items-center justify-between gap-3">
                <Badges product={main} />
                <ByInvotic name={main.name} />
              </div>
              <div>
                <h3 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-3">{main.name}</h3>
                <p className="text-gray-400 leading-relaxed">{main.description}</p>
              </div>
              <div className="flex flex-wrap items-center gap-3 mt-auto">
                <SmartLink href={main.primary.href} className="inline-flex items-center gap-2 bg-brand-red hover:bg-red-600 text-white px-6 py-3 rounded-md font-bold text-sm transition-all bg-glow-red">
                  {main.primary.label} <ArrowRight size={16} />
                </SmartLink>
                {main.page && (
                  <Link to={main.page} className="inline-flex items-center gap-2 border border-white/15 hover:border-white/40 text-white px-6 py-3 rounded-md font-bold text-sm transition-colors">
                    See how it works
                  </Link>
                )}
              </div>
            </article>
          )}

          <div className="grid gap-6">
            {side.map((p) => (
              <article key={p.slug} className="immersive-card immersive-card-hover rounded-2xl p-5 flex flex-col sm:flex-row gap-5">
                <div className="sm:w-[45%] shrink-0">
                  <ProductVisual product={p} sizes="(min-width: 1024px) 240px, (min-width: 640px) 45vw, 100vw" />
                </div>
                <div className="flex flex-col gap-3 min-w-0">
                  <Badges product={p} />
                  <h3 className="text-2xl font-display font-bold tracking-tight">{p.name}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{p.description}</p>
                  <SmartLink href={p.page ?? p.primary.href} className="mt-auto inline-flex items-center gap-1 text-brand-red font-bold text-sm hover:gap-2 transition-all">
                    {p.price === 'free' ? 'Get it free' : 'Learn more'} <ArrowRight size={16} />
                  </SmartLink>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-white/10 bg-brand-surface px-6 py-4">
          <span className="font-semibold">Plus free calculators for creators</span>
          <div className="flex flex-wrap gap-2">
            {calculators.map((t) => (
              <Link
                key={t.slug}
                to={`/tools/${t.slug}`}
                className="inline-block text-sm font-semibold text-gray-200 bg-white/5 border border-white/10 hover:border-brand-cyan/60 rounded-full px-4 py-2 transition-colors"
              >
                {t.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
