import { useState, useMemo } from 'react';
import { Copy, Check, RefreshCw } from 'lucide-react';

const templates: Array<(t: string, tc: string) => string> = [
  (t, tc) => `I Tried ${tc} for 30 Days — Here's What Happened`,
  (t, tc) => `${tc}: The Complete Beginner's Guide (2026)`,
  (t, tc) => `7 ${tc} Mistakes That Are Killing Your Growth`,
  (t, tc) => `How I Mastered ${tc} (Step by Step)`,
  (t, tc) => `${tc} vs The Competition — Honest Comparison`,
  (t, tc) => `Why Nobody Talks About This ${tc} Strategy`,
  (t, tc) => `10 ${tc} Tips I Wish I Knew Earlier`,
  (t, tc) => `The Truth About ${tc} (Watch Before You Start)`,
  (t, tc) => `${tc} in 2026: What's Changed`,
  (t, tc) => `Stop Doing ${tc} Wrong — Do This Instead`,
  (t, tc) => `How to Get Your First 1,000 Results With ${tc}`,
  (t, tc) => `${tc} Explained in 10 Minutes`,
  (t, tc) => `I Asked Experts About ${tc} — Their Answers Shocked Me`,
  (t, tc) => `5 ${tc} Tools That Feel Like Cheating`,
  (t, tc) => `The ${tc} Mistake 90% of Beginners Make`,
  (t, tc) => `${tc} for Beginners: Everything You Need to Know`,
];

function shuffled<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function TitleGenerator() {
  const [topic, setTopic] = useState('');
  const [seed, setSeed] = useState(0);
  const [copied, setCopied] = useState<number | null>(null);

  const clean = topic.trim().replace(/\s+/g, ' ');
  const titleCase = clean.replace(/\w\S*/g, (w) => w.charAt(0).toUpperCase() + w.slice(1));
  const ideas = useMemo(
    () => (clean ? shuffled(templates).map((fn) => fn(clean, titleCase)) : []),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [clean, seed]
  );

  const copy = async (text: string, i: number) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const ta = document.createElement('textarea');
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
    }
    setCopied(i);
    setTimeout(() => setCopied(null), 1500);
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <input
          type="text"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          placeholder="e.g. youtube automation, sourdough baking, home workouts…"
          className="flex-1 bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white text-lg focus:outline-none focus:border-brand-red/60 placeholder:text-gray-600"
        />
        <button
          onClick={() => setSeed((s) => s + 1)}
          disabled={!clean}
          className="flex items-center justify-center gap-2 bg-brand-red hover:bg-red-600 disabled:opacity-40 disabled:cursor-not-allowed text-white px-8 py-3 rounded-xl font-semibold transition-all"
        >
          <RefreshCw size={18} /> Shuffle
        </button>
      </div>

      {ideas.length === 0 ? (
        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-12 text-center">
          <p className="text-gray-400 text-lg">Type your video topic above to generate title ideas.</p>
          <p className="text-gray-500 text-sm mt-2">Built on proven headline patterns — curiosity gaps, how-tos, lists, and comparisons.</p>
        </div>
      ) : (
        <div className="space-y-3">
          {ideas.map((idea, i) => (
            <div
              key={`${seed}-${i}`}
              className="flex items-center justify-between gap-4 px-5 py-4 rounded-xl border border-white/10 bg-white/[0.02] hover:border-brand-red/40 transition-all"
            >
              <p className="text-gray-200 leading-relaxed">{idea}</p>
              <button
                onClick={() => copy(idea, i)}
                className="shrink-0 flex items-center gap-1.5 text-sm font-semibold text-brand-red hover:text-white border border-brand-red/30 hover:border-brand-red rounded-lg px-3 py-2 transition-all"
              >
                {copied === i ? <Check size={16} /> : <Copy size={16} />}
                {copied === i ? 'Copied' : 'Copy'}
              </button>
            </div>
          ))}
        </div>
      )}

      <div className="mt-8 text-gray-400 text-sm leading-relaxed space-y-3">
        <p>
          <span className="text-white font-semibold">Tip:</span> pair the title
          with a thumbnail that pays off its curiosity — and keep titles under
          ~60 characters so they don&apos;t get cut off in search.
        </p>
      </div>
    </div>
  );
}
