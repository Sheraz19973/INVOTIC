import { useState } from 'react';

function fmt(n: number): string {
  return n.toLocaleString('en-US', { maximumFractionDigits: 0 });
}

export default function RevenueCalculator() {
  const [views, setViews] = useState(100000);
  const [cpm, setCpm] = useState(4);

  const monthly = (views / 1000) * cpm;
  const low = monthly * 0.7;
  const high = monthly * 1.3;

  return (
    <div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div>
          <label className="block text-sm font-semibold text-gray-300 mb-2">
            Monthly views
          </label>
          <input
            type="number"
            min={0}
            value={views}
            onChange={(e) => setViews(Math.max(0, Number(e.target.value) || 0))}
            className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white text-lg focus:outline-none focus:border-brand-red/60"
          />
          <input
            type="range"
            min={0}
            max={1000000}
            step={10000}
            value={Math.min(views, 1000000)}
            onChange={(e) => setViews(Number(e.target.value))}
            className="w-full mt-3 accent-brand-red"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-300 mb-2">
            CPM — ${cpm.toFixed(2)}
          </label>
          <input
            type="range"
            min={0.5}
            max={30}
            step={0.5}
            value={cpm}
            onChange={(e) => setCpm(Number(e.target.value))}
            className="w-full accent-brand-red mt-3"
          />
          <p className="text-gray-500 text-sm mt-3 leading-relaxed">
            CPM is what advertisers pay per 1,000 ad views. Most channels see
            $2–$8; finance and business niches can be much higher.
          </p>
        </div>
      </div>

      <div className="rounded-2xl border border-brand-red/30 bg-brand-red/[0.06] p-8 text-center">
        <p className="text-gray-400 text-sm uppercase tracking-widest font-semibold mb-2">
          Estimated monthly ad earnings
        </p>
        <p className="text-4xl md:text-5xl font-display font-extrabold text-white mb-2">
          ${fmt(low)} – ${fmt(high)}
        </p>
        <p className="text-gray-400">
          Roughly <span className="text-white font-semibold">${fmt(monthly * 12)}</span> per
          year at this pace
        </p>
      </div>

      <div className="mt-8 text-gray-400 text-sm leading-relaxed space-y-3">
        <p>
          <span className="text-white font-semibold">How it works:</span>{' '}
          estimated earnings = (monthly views ÷ 1,000) × CPM. The range above
          allows ±30% because real RPM moves with season, audience country,
          and ad demand.
        </p>
        <p className="text-gray-500">
          These are planning estimates, not guarantees. Actual earnings depend
          on your niche, audience geography, watch time, and YouTube&apos;s
          revenue share.
        </p>
      </div>
    </div>
  );
}
