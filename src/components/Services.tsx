import { motion } from 'motion/react';
import { Shield, FileVideo, Users, Target, ShoppingBag, ArrowRight } from 'lucide-react';

const services = [
  {
    title: <><span className="text-brand-red">YouTube</span> Channel Recovery</>,
    description: "Fix policy strikes, inauthentic content issues, reused material warnings, and demonetization problems instantly.",
    icon: Shield,
    color: "brand-red",
  },
  {
    title: "Professional Content",
    description: "High-end video editing, viral thumbnail design, script writing, and precision prompt engineering.",
    icon: FileVideo,
    color: "brand-cyan",
  },
  {
    title: "Full Channel Management",
    description: <>Complete hands-off <span className="text-brand-red">YouTube</span> automation. We handle everything from idea to upload and optimization.</>,
    icon: Users,
    color: "brand-red",
  },
  {
    title: "Client Hunting & Leads",
    description: "Strategic lead generation and client hunting services for any business niche or service provider.",
    icon: Target,
    color: "brand-cyan",
  },
  {
    title: "Amazon Dropshipping",
    description: "Expert product hunting support and dropshipping management to scale your Amazon business.",
    icon: ShoppingBag,
    color: "brand-red",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-brand-dark relative overflow-hidden border-t border-white/5">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-cyan/5 rounded-full blur-[150px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-red font-mono font-bold uppercase tracking-widest mb-4"
          >
            Expert Solutions
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-display font-bold tracking-tighter"
          >
            Everything You Need <br /> To Own <span className="text-brand-red">YouTube</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative immersive-card immersive-card-hover p-8 rounded-xl overflow-hidden"
            >
              <div className="relative z-10">
                <div className={`text-xs font-bold uppercase tracking-widest mb-4 ${
                  service.color === 'brand-red' ? 'text-brand-red' : 'text-brand-cyan'
                }`}>
                  {service.color === 'brand-red' ? 'Elite Service' : 'Pro Solution'}
                </div>

                <h3 className="text-2xl font-display font-bold mb-4 group-hover:text-white transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed mb-6 group-hover:text-gray-300 transition-colors">
                  {service.description}
                </p>

                <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-white/40 group-hover:text-white transition-all">
                  Learn More <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                </div>
              </div>

              {/* Decorative Corner Glow */}
              <div className={`absolute -bottom-10 -right-10 w-24 h-24 rounded-full blur-2xl ${
                service.color === 'brand-red' ? 'bg-brand-red/10' : 'bg-brand-cyan/10'
              }`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
