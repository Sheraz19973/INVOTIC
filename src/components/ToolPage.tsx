import { useEffect } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import type { ComponentType } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, MessageCircle } from 'lucide-react';
import { getTool } from '../data/tools';
import { usePageSeo } from '../hooks/usePageSeo';
import RevenueCalculator from './tools/RevenueCalculator';
import MonetizationCalculator from './tools/MonetizationCalculator';
import CpmByNiche from './tools/CpmByNiche';
import TitleGenerator from './tools/TitleGenerator';
import SpeakTranslate from './tools/SpeakTranslate';

const whatsappNumber = '923484166937';

const toolComponents: Record<string, ComponentType> = {
  'youtube-revenue-calculator': RevenueCalculator,
  'youtube-monetization-calculator': MonetizationCalculator,
  'youtube-cpm-by-niche': CpmByNiche,
  'youtube-title-generator': TitleGenerator,
  'speak-translate': SpeakTranslate,
};

export default function ToolPage() {
  const { slug } = useParams();
  const tool = getTool(slug);

  // Hooks run unconditionally; redirect happens after.
  usePageSeo(
    tool ? tool.seoTitle : 'Free YouTube Tools | INVOTIC',
    tool ? tool.seoDescription : 'Free tools for YouTube creators.',
    `/tools/${slug ?? ''}`
  );

  // Inject SoftwareApplication JSON-LD for rich results.
  useEffect(() => {
    if (!tool) return;
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'tool-jsonld';
    script.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: tool.name,
      applicationCategory: 'UtilitiesApplication',
      operatingSystem: 'Web',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      url: `https://invotic.com/tools/${tool.slug}`,
      description: tool.seoDescription,
      author: { '@type': 'Organization', name: 'INVOTIC', url: 'https://invotic.com' },
    });
    document.head.appendChild(script);
    return () => {
      document.getElementById('tool-jsonld')?.remove();
    };
  }, [tool]);

  if (!tool) return <Navigate to="/tools" replace />;
  const Tool = toolComponents[tool.slug];
  if (!Tool) return <Navigate to="/tools" replace />;
  const Icon = tool.icon;

  return (
    <div className="pt-32 pb-24 bg-brand-dark min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link
            to="/tools"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-brand-red text-sm font-semibold mb-8 transition-colors"
          >
            <ArrowLeft size={16} /> All tools
          </Link>

          <div className="flex items-start gap-5 mb-4">
            <div className="w-14 h-14 shrink-0 rounded-xl bg-brand-red/15 border border-brand-red/30 flex items-center justify-center">
              <Icon size={26} className="text-brand-red" />
            </div>
            <div>
              <h1 className="text-3xl md:text-5xl font-display font-bold tracking-tighter">
                {tool.name}
              </h1>
              <p className="text-brand-cyan text-sm font-semibold uppercase tracking-widest mt-2">
                {tool.tagline}
              </p>
            </div>
          </div>
          <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-2xl">
            {tool.description}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-10"
        >
          <Tool />
        </motion.div>

        {/* CTA */}
        <div className="mt-12 rounded-2xl border border-white/10 bg-gradient-to-br from-brand-red/10 to-transparent p-8 text-center">
          <h2 className="text-2xl font-display font-bold mb-3">
            Want help growing faster than a calculator can?
          </h2>
          <p className="text-gray-400 mb-6 max-w-xl mx-auto">
            These tools show you the numbers — our training shows you how to
            move them. Chat with us about YouTube automation training.
          </p>
          <a
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
              `Hi INVOTIC! I was using your ${tool.name} and want to learn more about YouTube automation training.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-red hover:bg-red-600 text-white px-8 py-3 rounded-xl font-semibold transition-all hover:scale-105"
          >
            <MessageCircle size={18} /> Chat on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
