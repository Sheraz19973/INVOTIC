import { motion } from 'motion/react';
import { CheckCircle2, Zap, Trophy, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Training() {
  return (
    <section id="training" className="py-24 bg-brand-dark relative overflow-hidden border-t border-white/5">
      {/* Background Graphic */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-red to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-cyan to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:text-left text-center"
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-brand-cyan/20 border border-brand-cyan/30 text-brand-cyan text-xs font-bold uppercase tracking-widest mb-6">
              Exclusive Training Program
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter mb-6 leading-tight">
              Learn <span className="text-brand-red">YouTube</span> <br />
              <span className="text-brand-red">Automation</span> with <br />
              INVO<span className="text-brand-red">TIC</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-400 mb-8 leading-relaxed font-light lg:mx-0 mx-auto max-w-xl">
              Master <span className="text-brand-red">YouTube</span> Automation from beginner to advanced level. We offer both Free and Paid training programs based on 6+ years of real experience.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex gap-4 p-6 rounded-xl immersive-card immersive-card-hover">
                <div className="shrink-0 w-12 h-12 rounded-lg bg-brand-cyan/10 flex items-center justify-center text-brand-cyan">
                  <Zap size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">Free Training</h4>
                  <p className="text-gray-400 text-sm">Start with actionable modules and guidance at no cost. Perfect for your first channel.</p>
                </div>
              </div>

              <div className="flex gap-4 p-6 rounded-xl immersive-card immersive-card-hover border-brand-red/20">
                <div className="shrink-0 w-12 h-12 rounded-lg bg-brand-red/10 flex items-center justify-center text-brand-red">
                  <Trophy size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">Paid Training</h4>
                  <p className="text-gray-400 text-sm">One-to-one mentoring, complete course, advanced strategies, and direct support from Sheraz Khan.</p>
                </div>
              </div>
            </div>

            <Link
              to="/admission"
              className="inline-flex items-center gap-3 bg-brand-red hover:bg-red-600 text-white px-10 py-4 rounded-md font-bold text-lg transition-all shadow-xl shadow-brand-red/10 group"
            >
              Register Now
              <ExternalLink size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] aspect-[4/5] bg-brand-surface">
              <img
                src="profile.jpg"
                alt="Sheraz Khan Training"
                className="w-full h-full object-cover"
              />
              {/* Overlay Content */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-10">
                <div className="flex items-center gap-3 mb-6 bg-black/40 backdrop-blur-md w-fit px-4 py-2 rounded-full border border-white/10">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="w-8 h-8 rounded-full border-2 border-brand-dark overflow-hidden bg-gray-800">
                        <img src={`https://picsum.photos/seed/student${i}/50/50`} alt="Student" referrerPolicy="no-referrer" />
                      </div>
                    ))}
                  </div>
                  <span className="text-white font-bold text-xs uppercase tracking-widest whitespace-nowrap">Join 2,400+ Students</span>
                </div>
                
                <h3 className="text-4xl font-display font-black text-white mb-2 tracking-tight">Sheraz Khan</h3>
                <p className="text-brand-red font-black uppercase tracking-[0.2em] text-sm">Head Coach & Founder</p>
              </div>

              {/* Top Left Badge */}
              <div className="absolute top-8 left-8 bg-brand-dark/80 backdrop-blur-xl border border-white/10 p-5 rounded-2xl min-w-[140px] shadow-2xl">
                <div className="text-4xl font-display font-black text-brand-cyan mb-1 flex items-baseline">
                  6<span className="text-2xl">+</span>
                </div>
                <div className="text-[10px] font-extrabold uppercase tracking-widest text-gray-400 leading-tight">Years Industry <br /> Experience</div>
              </div>
            </div>

            {/* Decorative background glow behind image */}
            <div className="absolute -inset-10 bg-brand-red/5 rounded-full blur-[100px] -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
