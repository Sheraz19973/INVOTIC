export default function Footer() {
  return (
    <footer className="py-6 bg-brand-surface border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-gray-400">
        <div className="flex items-center gap-2">
          <span className="text-lg font-display font-black tracking-tighter text-white">
            INVO<span className="text-brand-red">TIC</span>
          </span>
        </div>

        <p className="font-medium">
          © {new Date().getFullYear()} INVOTIC • All Rights Reserved
        </p>

        <div className="flex gap-6 uppercase tracking-widest font-bold">
          <a href="#home" className="hover:text-white transition-colors">Home</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
}
