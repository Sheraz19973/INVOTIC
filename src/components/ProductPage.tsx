import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';
import { getProduct, type ProductDetail } from '../data/products';
import { usePageSeo } from '../hooks/usePageSeo';
import NotFound from './NotFound';
import { Badges, ByInvotic, ProductVisual, Shot, SmartLink } from './products/ProductBits';

const btnRed = 'inline-flex items-center gap-2 bg-brand-red hover:bg-red-600 text-white px-7 py-3.5 rounded-md font-bold text-sm transition-all bg-glow-red';
const btnGhost = 'inline-flex items-center gap-2 border border-white/15 hover:border-white/40 text-white px-7 py-3.5 rounded-md font-bold text-sm transition-colors';
const eyebrow = 'font-mono font-bold text-xs uppercase tracking-widest';
const h2 = 'text-3xl md:text-5xl font-display font-bold tracking-tighter leading-tight';

/** Before / after switch for InvoDub: same scene, original voice vs. dubbed voice, music unchanged. */
function DubDemo({ demo }: { demo: NonNullable<ProductDetail['demo']> }) {
  const [dubbed, setDubbed] = useState(false);
  const side = dubbed ? demo.dubbed : demo.original;
  return (
    <section id="before-after" className="grid lg:grid-cols-[1.3fr_1fr] gap-10 items-center">
      <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 bg-[linear-gradient(135deg,#3a0d0d,#0d0d12_65%)]" aria-live="polite">
        <div className="absolute left-1/2 top-[16%] -translate-x-1/2 w-[18%] aspect-square rounded-full bg-[radial-gradient(circle_at_50%_40%,#c9a38a,#6b4535_70%)] shadow-[0_70px_0_22px_#1b1b22]" aria-hidden="true" />
        <p
          dir={dubbed && demo.dubbed.rtl ? 'rtl' : 'ltr'}
          className="absolute left-1/2 bottom-[30%] -translate-x-1/2 max-w-[90%] text-center font-bold text-sm md:text-lg bg-black/75 px-4 py-1.5 rounded-md"
        >
          {side.line}
        </p>
        <div className="absolute left-[4%] right-[4%] bottom-[6%] flex flex-col gap-1.5" aria-hidden="true">
          {[
            { label: dubbed ? 'Voice · Urdu' : 'Voice · English', color: dubbed ? 'text-brand-cyan' : 'text-brand-red' },
            { label: 'Music + effects', color: 'text-brand-cyan' },
          ].map((t) => (
            <div key={t.label} className={`flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-wider ${t.color}`}>
              <span className="w-28 shrink-0">{t.label}</span>
              <span className="flex-1 h-4 rounded bg-[repeating-linear-gradient(90deg,currentColor_0_2px,transparent_2px_5px)] opacity-80" />
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <div className={`${eyebrow} text-brand-cyan`}>Before / after</div>
        <h2 className={h2}>Only the voice changes</h2>
        <div className="inline-flex self-start bg-brand-surface border border-white/10 rounded-xl p-1 gap-1" role="group" aria-label="Switch demo">
          {[demo.original, demo.dubbed].map((s, i) => (
            <button
              key={s.label}
              type="button"
              aria-pressed={dubbed === (i === 1)}
              onClick={() => setDubbed(i === 1)}
              className={`px-4 py-2.5 rounded-lg text-sm font-bold transition-colors ${dubbed === (i === 1) ? 'bg-brand-red text-white' : 'text-gray-400 hover:text-white'}`}
            >
              {s.label}
            </button>
          ))}
        </div>
        <ul className="flex flex-col gap-2">
          {demo.points.map((pt) => (
            <li key={pt} className="flex gap-2 text-gray-300 text-sm">
              <Check size={16} className="text-brand-cyan shrink-0 mt-0.5" /> {pt}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default function ProductPage() {
  const { slug } = useParams();
  const product = getProduct(slug);
  const d = product?.detail;

  usePageSeo(d ? d.seoTitle : 'INVOTIC Software', d ? d.seoDescription : 'Software by INVOTIC.', `/products/${slug ?? ''}`);

  if (!product || !d) return <NotFound />;

  return (
    <div className="pt-32 pb-24 bg-brand-dark min-h-screen">
      <div className="max-w-7xl mx-auto px-6 flex flex-col gap-24">
        {/* Hero */}
        <section className="grid lg:grid-cols-[1fr_1.15fr] gap-12 items-center">
          <div className="flex flex-col gap-5 lg:text-left text-center items-center lg:items-start">
            <Link to="/products" className="inline-flex items-center gap-2 text-gray-400 hover:text-white text-sm font-semibold transition-colors">
              <ArrowLeft size={16} /> All products
            </Link>
            <h1 className="text-6xl md:text-8xl font-display font-extrabold tracking-tighter leading-[0.95]">{product.name}</h1>
            <ByInvotic name={product.name} className="text-sm" />
            <p className="text-lg md:text-xl text-gray-300 max-w-md">{d.lead}</p>
            <Badges product={product} />
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              <SmartLink href={product.primary.href} className={btnRed}>
                {product.primary.label} <ArrowRight size={16} />
              </SmartLink>
              {d.demo ? (
                <a href="#before-after" className={btnGhost}>See before / after</a>
              ) : (
                <a href="#how-it-works" className={btnGhost}>How it works</a>
              )}
            </div>
            <p className="text-xs text-gray-500 max-w-md">{d.note}</p>
          </div>
          <ProductVisual product={product} sizes="(min-width: 1024px) 680px, 100vw" eager />
        </section>

        {d.languages && (
          <div className="overflow-hidden border-y border-white/5 py-4 -mx-6 [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]" aria-label="Some of the languages">
            <div className="flex gap-8 w-max animate-[productsMarquee_40s_linear_infinite] motion-reduce:animate-none font-mono text-sm font-bold uppercase tracking-widest text-gray-400">
              {[...d.languages, ...d.languages].map((l, i) => (
                <span key={i} aria-hidden={i >= d.languages!.length || undefined}>
                  <span className="text-brand-red">◆</span> {l}
                </span>
              ))}
            </div>
          </div>
        )}

        {d.demo && <DubDemo demo={d.demo} />}

        {/* Steps */}
        <section id="how-it-works" className="flex flex-col gap-8">
          <div>
            <div className={`${eyebrow} text-brand-red mb-3`}>How it works</div>
            <h2 className={h2}>{d.stepsTitle}</h2>
          </div>
          <ol className={`grid gap-4 sm:grid-cols-2 ${d.steps.length >= 5 ? 'lg:grid-cols-5' : 'lg:grid-cols-4'}`}>
            {d.steps.map((s, i) => (
              <li key={s.title} className="rounded-2xl border border-white/10 bg-brand-surface p-5 flex flex-col gap-2">
                <span className="font-mono font-bold text-sm text-brand-red">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="text-lg font-display font-bold">{s.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{s.text}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* Features */}
        <section className="flex flex-col gap-8">
          <div>
            <div className={`${eyebrow} text-brand-cyan mb-3`}>Features</div>
            <h2 className={h2}>{d.featuresTitle}</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
            {d.features.map((f, i) => {
              const Icon = f.icon;
              return (
                <div key={f.title} className="bg-brand-surface p-6 flex flex-col gap-3">
                  <span className={`w-10 h-10 rounded-lg grid place-items-center ${i % 2 ? 'bg-brand-cyan/10 text-brand-cyan' : 'bg-brand-red/10 text-brand-red'}`}>
                    <Icon size={20} aria-hidden="true" />
                  </span>
                  <h3 className="text-lg font-display font-bold">{f.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{f.text}</p>
                </div>
              );
            })}
          </div>
        </section>

        {d.gallery && (
          <section className="grid md:grid-cols-[1.35fr_1fr] gap-6 items-start" aria-label={`${product.name} screenshots`}>
            {d.gallery.map((img) => (
              <figure key={img.src} className="rounded-xl overflow-hidden border border-white/10 bg-[#0b0b0e]">
                <Shot image={img} sizes="(min-width: 768px) 50vw, 100vw" />
                <figcaption className="px-4 py-3 text-xs text-gray-500">{img.alt}</figcaption>
              </figure>
            ))}
          </section>
        )}

        {d.compare && (
          <section className="flex flex-col gap-8">
            <div>
              <div className={`${eyebrow} text-brand-red mb-3`}>Why {product.name}</div>
              <h2 className={h2}>Compared with online dubbing services</h2>
            </div>
            <div className="overflow-x-auto rounded-2xl border border-white/10">
              <table className="w-full min-w-[560px] text-sm text-left border-collapse">
                <thead>
                  <tr className="bg-brand-surface font-mono text-[11px] uppercase tracking-widest text-gray-500">
                    <th className="p-4 font-bold" scope="col"><span className="sr-only">Topic</span></th>
                    <th className="p-4 font-bold" scope="col">{product.name}</th>
                    <th className="p-4 font-bold" scope="col">{d.compare.themLabel}</th>
                  </tr>
                </thead>
                <tbody>
                  {d.compare.rows.map(([label, us, them]) => (
                    <tr key={label} className="border-t border-white/5">
                      <th scope="row" className="p-4 font-normal text-gray-400">{label}</th>
                      <td className="p-4 font-semibold bg-brand-red/5">{us}</td>
                      <td className="p-4 text-gray-400">{them}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* Pricing */}
        <section className="flex flex-col gap-8">
          <div>
            <div className={`${eyebrow} text-brand-cyan mb-3`}>Pricing</div>
            <h2 className={h2}>{d.pricingTitle}</h2>
          </div>
          <div className={`grid gap-6 ${d.plans.length > 1 ? 'md:grid-cols-2' : ''} max-w-4xl`}>
            {d.plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl border p-7 flex flex-col gap-4 bg-brand-surface ${plan.highlight ? 'border-brand-red/50 shadow-[0_0_40px_-12px_rgba(255,0,0,0.45)]' : 'border-white/10'}`}
              >
                <span
                  className={`self-start inline-flex px-2.5 py-1 rounded-md text-[11px] font-mono font-bold uppercase tracking-widest ${
                    plan.badge === 'paid' ? 'bg-brand-red text-white' : plan.badge === 'free' ? 'bg-brand-cyan text-black' : 'border border-brand-cyan/50 text-brand-cyan'
                  }`}
                >
                  {plan.name}
                </span>
                <p className="font-display font-extrabold text-5xl tracking-tight">
                  {plan.amount} <span className="text-base font-sans font-medium text-gray-400 tracking-normal">{plan.unit}</span>
                </p>
                <ul className="flex flex-col gap-2 text-sm text-gray-300">
                  {plan.items.map((it) => (
                    <li key={it} className="flex gap-2">
                      <Check size={16} className="text-brand-cyan shrink-0 mt-0.5" /> {it}
                    </li>
                  ))}
                </ul>
                <SmartLink href={plan.cta.href} className={`${plan.highlight ? btnRed : btnGhost} justify-center mt-auto`}>
                  {plan.cta.label}
                </SmartLink>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="flex flex-col gap-8 max-w-4xl">
          <div>
            <div className={`${eyebrow} text-brand-red mb-3`}>FAQ</div>
            <h2 className={h2}>Questions</h2>
          </div>
          <div className="flex flex-col gap-3">
            {d.faq.map((f, i) => (
              <details key={f.q} open={i === 0} className="group rounded-xl border border-white/10 bg-brand-surface px-5">
                <summary className="cursor-pointer list-none py-4 font-semibold flex justify-between gap-4 [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <span className="text-brand-red font-mono text-lg leading-none group-open:rotate-45 transition-transform" aria-hidden="true">+</span>
                </summary>
                <p className="pb-4 text-gray-400 text-sm leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Final call to action */}
        <section className="rounded-3xl border border-white/10 px-6 py-14 text-center flex flex-col items-center gap-5 bg-[radial-gradient(600px_220px_at_50%_0,rgba(255,0,0,0.22),transparent_70%)] bg-brand-surface">
          <h2 className={h2}>{d.finalTitle}</h2>
          <p className="text-gray-400 max-w-xl">{d.finalText}</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <SmartLink href={product.primary.href} className={btnRed}>
              {product.primary.label} <ArrowRight size={16} />
            </SmartLink>
            <Link to="/products" className={btnGhost}>See other products</Link>
          </div>
        </section>
      </div>
    </div>
  );
}
