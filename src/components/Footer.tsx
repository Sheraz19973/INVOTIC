export default function Footer() {
  return (
    <footer className="py-6 bg-brand-surface border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-gray-400">
        <div className="flex items-center gap-2">
          <span className="text-lg font-display font-black tracking-tighter">
            INVO<span className="text-brand-red">TIC</span>
          </span>
        </div>

        <p className="font-medium">
          © {new Date().getFullYear()} INVO<span className="text-brand-red">TIC</span> • All Rights Reserved
        </p>

        <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 uppercase tracking-widest font-bold text-[11px]">
          <a href="/#home" className="inline-block py-2 hover:text-white transition-colors">Home</a>
          <a href="/about" className="inline-block py-2 hover:text-white transition-colors">About</a>
          <a href="/contact" className="inline-block py-2 hover:text-white transition-colors">Contact</a>
          <a href="/admission" className="inline-block py-2 hover:text-white transition-colors">Admission</a>
          <a href="/blog" className="inline-block py-2 hover:text-white transition-colors">Blog</a>
          <a href="/tools" className="inline-block py-2 hover:text-white transition-colors">Tools</a>
          <a href="/privacy" className="inline-block py-2 hover:text-white transition-colors">Privacy</a>
          <a href="/terms" className="inline-block py-2 hover:text-white transition-colors">Terms</a>
          <a href="https://invodub.invotic.com/" title="InvoDub – AI video dubbing software" className="inline-block py-2 hover:text-white transition-colors">InvoDub</a>
          <a href="https://invopost.invotic.com/" title="InvoPost – free TikTok agency panel" className="inline-block py-2 hover:text-white transition-colors">InvoPost</a>
        </div>
      </div>
    </footer>
  );
}
