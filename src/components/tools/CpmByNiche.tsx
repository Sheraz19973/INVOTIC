import { useState } from 'react';
import { nicheCpms } from '../../data/tools';

function fmt(n: number): string {
  return n.toLocaleString('en-US', { maximumFractionDigits: 0 });
}

export default function CpmByNiche() {
  const [nicheIdx, setNicheIdx] = useState(2);
  const [views, setViews] = useState(100000);
  const niche = nicheCpms[nicheIdx];

  const lowEarn = (views / 1000) * niche.low;
  const highEarn = (views / 1000) * niche.high;

  return (
    <div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div>
          <label className="block text-sm font-semibold text-gray-300 mb-2">Your niche</label>
          <select
            value={nicheIdx}
            onChange={(e) => setNicheIdx(Number(e.target.value))}
            className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-red/60"
          >
            {nicheCpms.map((n, i) => (
              <option key={n.niche} value={i} className="bg-black">
                {n.niche}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-300 mb-2">Monthly views</label>
          <input
            type="number"
            min={0}
            value={views}
            onChange={(e) => setViews(Math.max(0, Number(e.target.value) || 0))}
            className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-red/60"
          />
        </div>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 mb-6">
        <p className="text-gray-400 text-sm uppercase tracking-widest font-semibold mb-3">
          Typical CPM range — {niche.niche}
        </p>
        <div className="flex items-end gap-3 mb-4">
          <span className="text-4xl font-display font-extrabold text-white">${niche.low}</span>
          <span className="text-gray-500 text-xl mb-1">–</span>
          <span className="text-4xl font-display font-extrabold text-white">${niche.high}</span>
        </div>
        <div className="h-3 rounded-full bg-white/5 border border-white/10 relative overflow-hidden">
          <div className="absolute inset-y-0 bg-brand-red/70 rounded-full" style={{ left: `${(niche.low / 25) * 100}%`, width: `${((niche.high - niche.low) / 25) * 100}%` }} />
        </div>
        <div className="flex justify-between text-xs text-gray-500 mt-2">
          <span>$0</span>
          <span>$25+ CPM scale</span>
        </div>
      </div>

      <div className="rounded-2xl border border-brand-red/30 bg-brand-red/[0.06] p-8 text-center">
        <p className="text-gray-400 text-sm uppercase tracking-widest font-semibold mb-2">
          Estimated monthly earnings at {fmt(views)} views
        </p>
        <p className="text-4xl md:text-5xl font-display font-extrabold text-white">
          ${fmt(lowEarn)} – ${fmt(highEarn)}
        </p>
      </div>

      <div className="mt-8">
        <h3 className="text-lg font-display font-bold text-white mb-4">All niches, at a glance</h3>
        <div className="space-y-2">
          {nicheCpms.map((n, i) => (
            <button
              key={n.niche}
              onClick={() => setNicheIdx(i)}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-xl border text-left transition-all ${
                i === nicheIdx
                  ? 'border-brand-red/50 bg-brand-red/[0.08]'
                  : 'border-white/10 bg-white/[0.02] hover:border-white/25'
              }`}
            >
              <span className={i === nicheIdx ? 'text-white font-semibold' : 'text-gray-300'}>{n.niche}</span>
              <span className="text-gray-400 text-sm font-mono">${n.low} – ${n.high}</span>
            </button>
          ))}
        </div>
      </div>

      <p className="mt-8 text-gray-500 text-sm leading-relaxed">
        These are broad, industry-observed CPM ranges in USD — not guarantees.
        Your actual CPM depends on audience country, season, video length, and
        advertiser demand. Use them for niche selection and planning.
      </p>
    </div>
  );
}
