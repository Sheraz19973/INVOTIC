import { Navigate, useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, CalendarDays } from 'lucide-react';
import { getInfoPage } from '../data/infoPages';
import { usePageSeo } from '../hooks/usePageSeo';
import Contact from './Contact';

export default function InfoPage() {
  const { slug } = useParams();
  const page = getInfoPage(slug);

  usePageSeo(
    page ? page.seoTitle : 'INVOTIC',
    page ? page.seoDescription : 'INVOTIC — YouTube automation training and free creator tools.',
    `/${slug ?? ''}`
  );

  if (!page) return <Navigate to="/" replace />;

  // /contact reuses the homepage contact section as a standalone page.
  if (slug === 'contact') {
    return (
      <div className="pt-24 bg-black min-h-screen">
        <Contact />
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 bg-black min-h-screen">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white text-sm font-semibold mb-8 transition-colors"
          >
            <ArrowLeft size={16} /> Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-display font-bold tracking-tighter mb-4">
            {page.title}
          </h1>
          <p className="flex items-center gap-1.5 text-sm text-gray-500 mb-8">
            <CalendarDays size={14} /> Last updated: {page.updated}
          </p>
          <p className="text-lg text-gray-300 leading-relaxed mb-10">{page.intro}</p>
          {page.sections.map((s) => (
            <section key={s.heading} className="mb-8">
              <h2 className="text-2xl font-display font-bold tracking-tight mb-4">
                {s.heading}
              </h2>
              <div className="space-y-3">
                {s.body.map((p, i) => (
                  <p key={i} className="text-gray-400 leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
