import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Wand2 } from 'lucide-react';
import { isExternal, type Product, type ProductImage } from '../../data/products';

/** A link that stays inside the app for "/…" paths and opens other sites in a new tab. */
export function SmartLink({ href, className, children, label }: { href: string; className?: string; children: ReactNode; label?: string }) {
  if (isExternal(href)) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className} aria-label={label}>
        {children}
      </a>
    );
  }
  return (
    <Link to={href} className={className} aria-label={label}>
      {children}
    </Link>
  );
}

const badgeBase = 'inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-mono font-bold uppercase tracking-widest whitespace-nowrap';

export function Badges({ product }: { product: Product }) {
  return (
    <div className="flex flex-wrap gap-2">
      {product.price === 'free' && <span className={`${badgeBase} bg-brand-cyan text-black`}>Free</span>}
      {product.price === 'paid' && <span className={`${badgeBase} bg-brand-red text-white`}>Paid</span>}
      {product.price === 'soon' && <span className={`${badgeBase} border border-amber-300/50 text-amber-300`}>Coming soon</span>}
      {product.trial && <span className={`${badgeBase} border border-brand-cyan/50 text-brand-cyan`}>{product.trial}</span>}
      {product.platforms.map((p) => (
        <span key={p} className={`${badgeBase} border border-white/15 text-gray-400`}>
          {p}
        </span>
      ))}
    </div>
  );
}

/** "InvoDub by Invotic", with Invotic linking to the main site. */
export function ByInvotic({ name, className = '' }: { name: string; className?: string }) {
  return (
    <span className={`text-xs text-gray-500 ${className}`}>
      {name} by{' '}
      <a href="https://invotic.com/" className="text-gray-400 underline underline-offset-2 hover:text-white">
        Invotic
      </a>
    </span>
  );
}

export function Shot({ image, sizes, eager = false, className = '' }: { image: ProductImage; sizes: string; eager?: boolean; className?: string }) {
  return (
    <img
      src={image.src}
      srcSet={image.srcSet}
      sizes={image.srcSet ? sizes : undefined}
      width={image.width}
      height={image.height}
      alt={image.alt}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      className={`block w-full h-auto ${className}`}
    />
  );
}

/** Product picture inside a dark app-window frame; a drawn stand-in for products without a screenshot yet. */
export function ProductVisual({ product, sizes, eager = false }: { product: Product; sizes: string; eager?: boolean }) {
  return (
    <div className="rounded-xl overflow-hidden border border-white/10 bg-[#0b0b0e]">
      <div className="flex items-center gap-1.5 px-3 py-2 border-b border-white/5" aria-hidden="true">
        <i className="w-2 h-2 rounded-full bg-white/15" />
        <i className="w-2 h-2 rounded-full bg-white/15" />
        <i className="w-2 h-2 rounded-full bg-white/15" />
        <span className="ml-2 text-[11px] font-semibold text-gray-500">{product.name}</span>
      </div>
      {product.image ? (
        <Shot image={product.image} sizes={sizes} eager={eager} />
      ) : (
        <div className="aspect-[16/10] grid place-items-center bg-[radial-gradient(circle_at_30%_30%,rgba(0,242,255,0.12),transparent_60%),radial-gradient(circle_at_75%_70%,rgba(255,0,0,0.12),transparent_55%)]">
          <div className="text-center px-6">
            <Wand2 size={34} className="mx-auto text-brand-cyan mb-3" aria-hidden="true" />
            <p className="font-display font-bold text-lg">⚡ Auto Edit</p>
            <p className="text-xs text-gray-500 mt-1">Screenshots coming with the release</p>
          </div>
        </div>
      )}
    </div>
  );
}
