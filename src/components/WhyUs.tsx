import { motion } from 'motion/react';
import { Target, Youtube, ShoppingCart, ShieldCheck } from 'lucide-react';

const stats = [
  {
    icon: Target,
    title: "8+ Years",
    label: "Client Hunting Experience",
    description: "Deep expertise in finding and closing high-ticket clients globally.",
    color: "brand-red"
  },
  {
    icon: Youtube,
    title: "Expert Since 2016",
    label: "YouTube Ecosystem",
    description: "Witnessed and adapted to every major algorithm change in the last decade.",
    color: "brand-cyan"
  },
  {
    icon: ShoppingCart,
    title: "5+ Years",
    label: "Amazon Dropshipping",
    description: "Master of product hunting and dropshipping automation strategies.",
    color: "brand-red"
  },
  {
    icon: ShieldCheck,
    title: "100% Success",
    label: "Channel Restoration",
    description: "Specialized in recovering demonetized channels and fixing policy strikes.",
    color: "brand-cyan"
  }
];

export default function WhyUs() {
  return (
    <section id="why-us" className="py-24 bg-brand-dark relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/3">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square rounded-[3rem] overflow-hidden border border-white/10"
            >
              <img
                src="/sheraz-khan.jpg"
                alt="Sheraz Khan Experience"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                onError={(e) => {
                  e.currentTarget.src = "https://picsum.photos/seed/experience/600/600";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-red/40 to-transparent mix-blend-multiply opacity-50" />
            </motion.div>
          </div>

          <div className="lg:w-2/3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 tracking-tighter">
                Why Industry Leaders <span className="text-brand-red">Trust INVOTIC</span>
              </h2>
              <p className="text-lg text-gray-400 max-w-2xl leading-relaxed">
                We don't just teach automation; we live it. Our founder Sheraz Khan has been at the forefront of digital monetization since 2016, building a legacy of restored channels and scaled businesses.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group p-8 rounded-xl immersive-card immersive-card-hover"
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${
                    stat.color === 'brand-red' ? 'bg-brand-red/20 text-brand-red' : 'bg-brand-cyan/20 text-brand-cyan'
                  }`}>
                    <stat.icon size={24} />
                  </div>
                  <h4 className="text-3xl font-display font-bold mb-1 group-hover:text-brand-red transition-colors">{stat.title}</h4>
                  <p className="text-sm font-bold uppercase tracking-widest text-white mb-4">{stat.label}</p>
                  <p className="text-gray-400 text-sm leading-relaxed">{stat.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
