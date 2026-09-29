import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, MessageCircle, Facebook, Twitter, Smartphone, Send, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const whatsappNumber = '923484166937';
  const socialLinks = [
    { name: 'Facebook', href: 'https://www.facebook.com/sheraz.khan.404470', icon: Facebook },
    { name: 'X (Twitter)', href: 'https://x.com/Sherazkhanoffic', icon: Twitter },
    { name: 'TikTok', href: 'https://www.tiktok.com/@sherazkhaninvotic', icon: Smartphone },
  ];

  const buildWhatsAppUrl = () => {
    const text =
      `Hi INVOTIC!\n\n` +
      `Name: ${name}\n` +
      `Email: ${email}\n\n` +
      `Message:\n${message}`;
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    window.open(buildWhatsAppUrl(), '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

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
                Our experts are ready to take your channel to the next level. Let's discuss your project and start your journey to <span className="text-brand-red">YouTube</span> success today.
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

            <div className="glass p-8 rounded-3xl border-white/10 flex flex-col justify-center min-h-[400px]">
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col h-full"
                  >
                    <h3 className="text-2xl font-display font-bold mb-8">Quick Message</h3>
                    <form className="space-y-4" onSubmit={handleSubmit}>
                      <div>
                        <input
                          type="text"
                          required
                          placeholder="Full Name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="w-full bg-black/50 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-brand-red transition-colors"
                        />
                      </div>
                      <div>
                        <input
                          type="email"
                          required
                          placeholder="Email Address"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full bg-black/50 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-brand-red transition-colors"
                        />
                      </div>
                      <div>
                        <textarea
                          required
                          placeholder="Tell us about your channel..."
                          rows={4}
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          className="w-full bg-black/50 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-brand-red transition-colors resize-none"
                        ></textarea>
                      </div>
                      <button
                        type="submit"
                        className="w-full bg-brand-red hover:bg-red-600 text-white font-bold py-3 rounded-md transition-all bg-glow-red flex items-center justify-center gap-2"
                      >
                        Send via WhatsApp
                        <Send size={18} />
                      </button>
                      <p className="text-xs text-gray-500 text-center">
                        This opens WhatsApp with your message ready — just press send.
                      </p>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center h-full text-center space-y-4 py-12"
                  >
                    <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center text-green-500 mb-4">
                      <CheckCircle2 size={40} />
                    </div>
                    <h3 className="text-3xl font-display font-bold">Opening WhatsApp…</h3>
                    <p className="text-gray-400">Your message is ready in WhatsApp — just press send and our team will get back to you.</p>
                    <a
                      href={buildWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand-red font-bold underline underline-offset-4 hover:text-red-400 transition-colors"
                    >
                      WhatsApp didn't open? Tap here to send.
                    </a>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setName('');
                        setEmail('');
                        setMessage('');
                      }}
                      className="text-sm text-gray-500 hover:text-white transition-colors underline underline-offset-4"
                    >
                      Send another message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
