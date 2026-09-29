import { motion } from 'motion/react';
import { ArrowLeft, ClipboardCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AdmissionForm() {
  const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSf_lwi_V1KLOEiFUcTZdTHZLGyLOBDj83nWWlL3Z0E5Vh1TaA/viewform?usp=publish-editor";

  return (
    <div className="min-h-screen bg-brand-dark pt-32 pb-20 overflow-hidden relative">
      {/* Background Orbs */}
      <div className="absolute top-[-100px] left-[-100px] w-[500px] h-[500px] bg-brand-red/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[500px] h-[500px] bg-brand-cyan/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link to="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-brand-red transition-colors group">
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-brand-surface border border-white/5 rounded-[1.5rem] md:rounded-[2.5rem] p-6 sm:p-8 md:p-16 overflow-hidden relative"
        >
          {/* Subtle Grid overlay */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

          <div className="relative z-10 text-center">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-brand-red/10 rounded-2xl md:rounded-3xl flex items-center justify-center text-brand-red mx-auto mb-6 md:mb-8">
              <ClipboardCheck size={32} className="md:size-10" />
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-display font-bold tracking-tighter mb-6 leading-tight">
              Course <span className="text-brand-red">Admission</span> Form
            </h1>
            
            <p className="text-lg md:text-xl text-gray-400 mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed">
              Step into the world of <span className="text-brand-red">YouTube</span> Automation. Please fill out the official registration form to join the INVO<span className="text-brand-red">TIC</span> academy and start your journey.
            </p>

            <div className="grid md:grid-cols-3 gap-6 text-left mb-12">
              <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                <div className="text-brand-cyan mb-3 font-bold text-xl">01</div>
                <h4 className="font-bold mb-1">Apply</h4>
                <p className="text-xs text-gray-400">Submit your details via the official form.</p>
              </div>
              <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                <div className="text-brand-red mb-3 font-bold text-xl">02</div>
                <h4 className="font-bold mb-1">Review</h4>
                <p className="text-xs text-gray-400">Our team will review your application.</p>
              </div>
              <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                <div className="text-brand-cyan mb-3 font-bold text-xl">03</div>
                <h4 className="font-bold mb-1">Join</h4>
                <p className="text-xs text-gray-400">Get access to the exclusive course content.</p>
              </div>
            </div>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={formUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-brand-red hover:bg-red-600 text-white px-12 py-5 rounded-md font-bold text-xl transition-all shadow-2xl shadow-brand-red/20 uppercase tracking-widest bg-glow-red"
            >
              Register Form
            </motion.a>
            
            <p className="mt-8 text-sm text-gray-500 italic">
              Clicking the button above will redirect you to Google Forms for a secure application process.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
