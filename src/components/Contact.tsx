import { motion } from 'motion/react';
import { Mail, MessageCircle, Facebook, Twitter, Smartphone, Send } from 'lucide-react';

export default function Contact() {
  const socialLinks = [
    { name: 'Facebook', href: 'https://www.facebook.com/sheraz.khan.404470', icon: Facebook },
    { name: 'X (Twitter)', href: 'https://x.com/Sherazkhanoffic', icon: Twitter },
    { name: 'TikTok', href: 'https://www.tiktok.com/@sherazkhaninvotic', icon: Smartphone },
  ];

  return (
    <section id="contact" className="py-24 bg-black relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-red/10 rounded-full blur-[150px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-brand-surface rounded-[2rem] p-8 md:p-16 border border-white/5 relative overflow-hidden"
        >
          {/* Subtle Grid Pattern Overlay */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

          <div className="relative z-10 grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 tracking-tighter leading-tight">
                Ready to Fix, Grow, or <br />
                <span className="text-brand-red">Automate</span> Your Channel?
              </h2>
              <p className="text-xl text-gray-400 mb-10 leading-relaxed font-light">
                Our experts are ready to take your channel to the next level. Let's discuss your project and start your journey to YouTube success today.
              </p>

              <div className="space-y-6 mb-12">
                <a href="mailto:info@invotic.com" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-brand-red group-hover:border-brand-red transition-all">
                    <Mail size={20} className="group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-500">Email Us</p>
                    <p className="text-lg font-bold group-hover:text-brand-red transition-colors">info@invotic.com</p>
                  </div>
                </a>

                <a href="https://wa.me/923484166937" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-green-500 group-hover:border-green-500 transition-all">
                    <MessageCircle size={20} className="group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-500">Chat on WhatsApp</p>
                    <p className="text-lg font-bold group-hover:text-green-500 transition-colors">+92 348 4166937</p>
                  </div>
                </a>
              </div>

              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    whileHover={{ y: -5 }}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/30 transition-all text-gray-400 hover:text-white"
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="glass p-8 rounded-3xl border-white/10 flex flex-col justify-center">
              <h3 className="text-2xl font-display font-bold mb-8">Quick Message</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-brand-red transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-brand-red transition-colors"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Tell us about your channel..."
                    rows={4}
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-brand-red transition-colors resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-brand-red hover:bg-red-600 text-white font-bold py-3 rounded-md transition-all bg-glow-red flex items-center justify-center gap-2"
                >
                  Send Message
                  <Send size={18} />
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
