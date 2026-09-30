import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Wrench } from 'lucide-react';
import { tools } from '../data/tools';
import { usePageSeo } from '../hooks/usePageSeo';

export default function Tools() {
  usePageSeo(
    'Free YouTube Tools — Calculators & Generators | INVOTIC',
    'Free tools for YouTube creators: revenue calculator, monetization tracker, CPM by niche explorer, and a video title generator.',
    '/tools'
  );

  return (
    <div className="pt-32 pb-24 bg-brand-dark min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-brand-red/15 border border-brand-red/30 text-brand-red text-xs font-bold uppercase tracking-widest mb-6">
            <span className="flex items-center gap-2">
              <Wrench size={12} /> Free Creator Tools
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-bold tracking-tighter mb-6">
            YouTube <span className="text-brand-red">Tools</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Free calculators and generators for YouTube creators — estimate
            earnings, track monetization, and write better titles. No signup.
          </p>
        </motion.div>

        {/* Tool cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {tools.map((tool, i) => {
            const Icon = tool.icon;
            return (
              <motion.div
                key={tool.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
              >
                <Link
                  to={`/tools/${tool.slug}`}
                  className="group block h-full rounded-2xl border border-white/10 bg-white/[0.02] p-8 overflow-hidden hover:border-brand-red/50 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-14 h-14 rounded-xl bg-brand-red/15 border border-brand-red/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon size={26} className="text-brand-red" />
                  </div>
                  <h2 className="text-2xl font-display font-bold tracking-tight mb-2 group-hover:text-brand-red transition-colors">
                    {tool.name}
                  </h2>
                  <p className="text-brand-cyan text-sm font-semibold uppercase tracking-widest mb-4">
                    {tool.tagline}
                  </p>
                  <p className="text-gray-400 leading-relaxed mb-6">
                    {tool.description}
                  </p>
                  <span className="flex items-center gap-1 text-brand-red font-semibold group-hover:gap-2 transition-all">
                    Use free tool <ArrowRight size={16} />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Note */}
        <p className="text-center text-gray-500 text-sm mt-12 max-w-2xl mx-auto">
          All tools run entirely in your browser — nothing is uploaded or
          stored. Earnings figures are estimates for planning, not guarantees.
        </p>
      </div>
    </div>
  );
}
