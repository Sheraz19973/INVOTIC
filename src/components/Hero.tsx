import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-brand-dark pt-20">
      {/* Background Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-brand-red/15 rounded-full blur-[100px] pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-brand-cyan/10 rounded-full blur-[150px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Side: Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl lg:text-left text-center"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-brand-red text-xs font-mono font-bold uppercase tracking-widest mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse" />
            Leading <span className="text-brand-red">YouTube</span> Automation Agency
          </motion.div>

          <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-display font-extrabold leading-[1.1] mb-6 tracking-tight">
            Welcome to <br />
            INVO<span className="text-brand-red">TIC</span> <br />
            Your <span className="text-brand-red">YouTube</span> <br /> Automation Agency
          </h1>

          <p className="text-lg md:text-xl text-gray-400 mb-8 leading-relaxed font-normal max-w-lg lg:mx-0 mx-auto">
            Transforming struggling channels into revenue machines. Whether it's monetization, policy strikes, or full automation—we fix it all.
          </p>

          <div className="flex flex-wrap gap-4 lg:justify-start justify-center">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#training"
              className="bg-brand-red hover:bg-red-600 text-white px-8 py-3 rounded-md font-bold text-[0.85rem] transition-all bg-glow-red flex items-center gap-2"
            >
              Get My Channel Monetized
            </motion.a>
            <motion.a
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 20px rgba(0, 242, 255, 0.3)",
                borderColor: "rgba(0, 242, 255, 0.5)"
              }}
              whileTap={{ scale: 0.95 }}
              href="#services"
              className="border border-white/10 bg-transparent text-white px-8 py-3 rounded-md font-bold text-[0.85rem] transition-all flex items-center gap-2"
            >
              Explore Our Services
            </motion.a>
          </div>

          <div className="mt-16 grid grid-cols-2 sm:flex sm:items-center gap-6 sm:gap-12 border-t border-white/5 pt-8 max-w-lg lg:mx-0 mx-auto">
            <div className="text-center sm:border-r border-white/5 sm:pr-8">
              <p className="text-xl font-bold text-white">10+</p>
              <p className="text-[0.65rem] font-bold text-gray-400 uppercase tracking-widest">Years Exp</p>
            </div>
            <div className="text-center sm:border-r border-white/5 sm:pr-8">
              <p className="text-xl font-bold text-white">2016</p>
              <p className="text-[0.65rem] font-bold text-gray-400 uppercase tracking-widest">Started</p>
            </div>
            <div className="text-center sm:border-r border-white/5 sm:pr-8">
              <p className="text-xl font-bold text-white">500+</p>
              <p className="text-[0.65rem] font-bold text-gray-400 uppercase tracking-widest">Channels</p>
            </div>
            <div className="text-center">
              <p className="text-xl font-bold text-white">100%</p>
              <p className="text-[0.65rem] font-bold text-gray-400 uppercase tracking-widest">Success</p>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Visual Element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative lg:block"
        >
          <div className="relative w-full aspect-square max-w-[300px] sm:max-w-md lg:max-w-lg mx-auto">
            {/* Central Visual: High-Quality Service Image */}
            <motion.div
              animate={{
                y: [0, -15, 0],
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] lg:w-[400px] lg:h-[400px] overflow-hidden rounded-[2rem] sm:rounded-[3rem] border border-white/10 shadow-[0_0_50px_rgba(255,0,0,0.2)] bg-brand-surface"
            >
              <img 
                src="profile.jpg" 
                alt="Sheraz Khan - YouTube Automation Expert & Founder" 
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-red/20 to-transparent mix-blend-overlay" />
              <div className="absolute inset-0 bg-black/20" />
            </motion.div>

            {/* Floating Cards / Decorations */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -right-10 glass p-6 rounded-2xl border-white/20 w-48 shadow-2xl"
            >
              <div className="w-10 h-10 rounded-full bg-brand-cyan mb-4 flex items-center justify-center">
                <ArrowRight size={20} className="text-black" />
              </div>
              <p className="text-xs font-bold text-brand-cyan uppercase tracking-tighter">Growth Status</p>
              <p className="text-xl font-bold font-display">+240% View Count</p>
            </motion.div>

            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-10 -left-10 glass p-6 rounded-2xl border-brand-red/30 w-56 shadow-2xl"
            >
              <p className="text-xs font-bold text-brand-red uppercase tracking-tighter mb-2">Monetization</p>
              <div className="flex items-center gap-2">
                <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="w-[90%] h-full bg-brand-red" />
                </div>
                <span className="text-xs font-bold">Enabled</span>
              </div>
            </motion.div>

            {/* Rings */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-white/5 rounded-full pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] border border-white/5 rounded-full pointer-events-none" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
