import { useState } from 'react';

function Progress({ label, current, target, unit }: { label: string; current: number; target: number; unit: string }) {
  const pct = Math.min(100, (current / target) * 100);
  const done = current >= target;
  return (
    <div className="mb-6">
      <div className="flex justify-between text-sm mb-2">
        <span className="font-semibold text-gray-300">{label}</span>
        <span className={done ? 'text-green-400 font-semibold' : 'text-gray-400'}>
          {current.toLocaleString()} / {target.toLocaleString()} {unit}
          {done ? ' ✓' : ''}
        </span>
      </div>
      <div className="h-3 rounded-full bg-white/5 border border-white/10 overflow-hidden">
        <div
          className={`h-full rounded-full transition-all duration-500 ${done ? 'bg-green-500' : 'bg-brand-red'}`}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}

const num = (v: string) => Math.max(0, Number(v) || 0);

export default function MonetizationCalculator() {
  const [subs, setSubs] = useState('350');
  const [subsPerMonth, setSubsPerMonth] = useState('120');
  const [hours, setHours] = useState('900');
  const [uploadsPerMonth, setUploadsPerMonth] = useState('8');
  const [viewsPerVideo, setViewsPerVideo] = useState('2500');
  const [avgMinutes, setAvgMinutes] = useState('4');

  const s = num(subs);
  const spm = num(subsPerMonth);
  const h = num(hours);
  const monthlyHours = num(uploadsPerMonth) * num(viewsPerVideo) * (num(avgMinutes) / 60);

  const monthsToSubs = spm > 0 ? Math.max(0, (1000 - s) / spm) : Infinity;
  const monthsToHours = monthlyHours > 0 ? Math.max(0, (4000 - h) / monthlyHours) : Infinity;
  const total = Math.max(monthsToSubs, monthsToHours);
  const ready = s >= 1000 && h >= 4000;

  const inputCls =
    'w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-red/60';

  return (
    <div>
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div>
          <label className="block text-sm font-semibold text-gray-300 mb-2">Current subscribers</label>
          <input type="number" min={0} value={subs} onChange={(e) => setSubs(e.target.value)} className={inputCls} />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-300 mb-2">New subs per month</label>
          <input type="number" min={0} value={subsPerMonth} onChange={(e) => setSubsPerMonth(e.target.value)} className={inputCls} />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-300 mb-2">Watch hours (last 12 mo)</label>
          <input type="number" min={0} value={hours} onChange={(e) => setHours(e.target.value)} className={inputCls} />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-300 mb-2">Uploads per month</label>
          <input type="number" min={0} value={uploadsPerMonth} onChange={(e) => setUploadsPerMonth(e.target.value)} className={inputCls} />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-300 mb-2">Avg views per video</label>
          <input type="number" min={0} value={viewsPerVideo} onChange={(e) => setViewsPerVideo(e.target.value)} className={inputCls} />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-300 mb-2">Avg view duration (min)</label>
          <input type="number" min={0} step="0.5" value={avgMinutes} onChange={(e) => setAvgMinutes(e.target.value)} className={inputCls} />
        </div>
      </div>

      <Progress label="Subscribers" current={s} target={1000} unit="subs" />
      <Progress label="Watch hours" current={h} target={4000} unit="hours" />

      <div className="rounded-2xl border border-brand-red/30 bg-brand-red/[0.06] p-8 text-center">
        {ready ? (
          <>
            <p className="text-3xl font-display font-extrabold text-green-400 mb-2">You&apos;re eligible! 🎉</p>
            <p className="text-gray-400">You meet the subscriber and watch-hour thresholds. Apply for the YouTube Partner Program in YouTube Studio.</p>
          </>
        ) : !isFinite(total) ? (
          <p className="text-gray-400">Enter your numbers above to estimate your timeline.</p>
        ) : (
          <>
            <p className="text-gray-400 text-sm uppercase tracking-widest font-semibold mb-2">Estimated time to monetization</p>
            <p className="text-4xl md:text-5xl font-display font-extrabold text-white mb-2">
              {total < 1 ? 'Under a month' : `~${Math.ceil(total)} month${Math.ceil(total) === 1 ? '' : 's'}`}
            </p>
            <p className="text-gray-400">at your current pace</p>
          </>
        )}
      </div>

      <div className="mt-8 text-gray-400 text-sm leading-relaxed space-y-3">
        <p>
          <span className="text-white font-semibold">How it works:</span> the
          YouTube Partner Program requires 1,000 subscribers and 4,000 valid
          public watch hours in the last 12 months. We project both finish
          lines from the pace you entered and take the slower one.
        </p>
        <p className="text-gray-500">
          Estimates only — growth is rarely linear, and Shorts views count
          differently (10M Shorts views in 90 days is the alternative path).
        </p>
      </div>
    </div>
  );
}
