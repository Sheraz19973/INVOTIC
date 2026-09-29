import { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, CalendarDays, Tag } from 'lucide-react';
import { posts, categories, formatDate, type BlogPost } from '../data/blog';

function PostCard({ post, large = false }: { post: BlogPost; large?: boolean }) {
  return (
    <Link
      to={`/blog/${post.slug}`}
      className={`group block rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden hover:border-brand-red/50 transition-all duration-300 hover:-translate-y-1 ${
        large ? 'md:col-span-2' : ''
      }`}
    >
      <div className={`p-8 ${large ? 'md:p-12' : ''}`}>
        <div className="flex items-center gap-3 mb-4">
          <span className="inline-block px-3 py-1 rounded-full bg-brand-red/15 border border-brand-red/30 text-brand-red text-xs font-bold uppercase tracking-widest">
            {post.category}
          </span>
          {post.featured && (
            <span className="inline-block px-3 py-1 rounded-full bg-brand-cyan/15 border border-brand-cyan/30 text-brand-cyan text-xs font-bold uppercase tracking-widest">
              Featured
            </span>
          )}
        </div>
        <h3
          className={`font-display font-bold tracking-tight mb-3 group-hover:text-brand-red transition-colors ${
            large ? 'text-3xl md:text-4xl' : 'text-xl md:text-2xl'
          }`}
        >
          {post.title}
        </h3>
        <p className="text-gray-400 mb-6 leading-relaxed">{post.excerpt}</p>
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <CalendarDays size={14} />
              {formatDate(post.date)}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={14} />
              {post.readTime} min read
            </span>
          </div>
          <span className="flex items-center gap-1 text-brand-red font-semibold group-hover:gap-2 transition-all">
            Read <ArrowRight size={16} />
          </span>
        </div>
      </div>
    </Link>
  );
}

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const filtered =
    activeCategory === 'All'
      ? posts
      : posts.filter((p) => p.category === activeCategory);

  const [featured, ...rest] = filtered;

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
              <Tag size={12} /> Insights & Guides
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-bold tracking-tighter mb-6">
            The INVOTIC <span className="text-brand-red">Blog</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Practical guides on YouTube automation, channel growth, and the AI
            tools creators actually use — from 10+ years of running channels.
          </p>
        </motion.div>

        {/* Category filter */}
        {categories.length > 0 && (
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {['All', ...categories].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                  activeCategory === cat
                    ? 'bg-brand-red text-white'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        {/* Posts */}
        {filtered.length === 0 ? (
          <div className="text-center py-24">
            <p className="text-gray-400 text-lg mb-2">New articles are on the way.</p>
            <p className="text-gray-500">
              We&apos;re publishing in-depth guides every week — check back soon.
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-8">
            {activeCategory === 'All' && featured && (
              <PostCard post={featured} large />
            )}
            {(activeCategory === 'All' ? rest : filtered).map((post, i) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
              >
                <PostCard post={post} />
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
