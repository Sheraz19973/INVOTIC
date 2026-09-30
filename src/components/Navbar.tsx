import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const isSubPage = location.pathname !== '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Training', href: '#training' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#050505]/80 backdrop-blur-lg border-b border-white/5 py-4' : 'bg-transparent py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <span className="text-2xl font-display font-extrabold tracking-tighter">
            INVO<span className="text-brand-red">TIC</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={isSubPage ? `/${link.href}` : link.href}
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors tracking-wide uppercase"
            >
              {link.name}
            </a>
          ))}
          <Link
            to="/admission"
            className="text-sm font-bold text-brand-cyan hover:text-white transition-colors tracking-wide uppercase"
          >
            Admission
          </Link>
          <Link
            to="/blog"
            className="text-sm font-medium text-gray-400 hover:text-white transition-colors tracking-wide uppercase"
          >
            Blog
          </Link>
          <Link
            to="/tools"
            className="text-sm font-medium text-gray-400 hover:text-white transition-colors tracking-wide uppercase"
          >
            Tools
          </Link>
          <a
            href={isSubPage ? "/#contact" : "#contact"}
            className="bg-brand-red hover:bg-red-600 text-white px-8 py-3 rounded-md text-sm font-semibold transition-all hover:scale-105 bg-glow-red flex items-center gap-2"
          >
            Get Started
            <ArrowRight size={16} />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsOpen(true)}
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 md:hidden"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-80 bg-brand-navy border-l border-white/10 z-50 md:hidden p-8 flex flex-col"
            >
              <div className="flex justify-end mb-8">
                <button onClick={() => setIsOpen(false)} className="text-white p-2 hover:bg-white/5 rounded-full">
                  <X size={24} />
                </button>
              </div>
              <div className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={isSubPage ? `/${link.href}` : link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-2xl font-display font-bold text-gray-300 hover:text-brand-red transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
                <Link
                  to="/admission"
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-display font-bold text-brand-cyan hover:text-white transition-colors"
                >
                  Admission
                </Link>
                <Link
                  to="/blog"
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-display font-bold text-gray-300 hover:text-brand-red transition-colors"
                >
                  Blog
                </Link>
                <Link
                  to="/tools"
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-display font-bold text-gray-300 hover:text-brand-red transition-colors"
                >
                  Tools
                </Link>
                <a
                  href={isSubPage ? "/#contact" : "#contact"}
                  onClick={() => setIsOpen(false)}
                  className="mt-4 bg-brand-red text-white py-4 rounded-xl text-center font-bold text-lg hover:bg-glow-red transition-all"
                >
                  Get Started
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
