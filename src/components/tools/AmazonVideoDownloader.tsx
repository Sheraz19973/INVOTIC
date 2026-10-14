import { useState } from 'react';
import {
  Video,
  Users,
  MousePointerClick,
  Download,
  CheckCircle2,
  Chrome,
  ShieldCheck,
  MessageCircle,
  FileDown,
} from 'lucide-react';

const whatsappNumber = '923484166937';

const steps = [
  {
    title: 'Download and extract the ZIP',
    points: [
      'Click the “Download free” button below and save the ZIP file.',
      'Extract it — you’ll get a folder named “invo-amazon-video-downloader”.',
      'Keep that folder where you won’t delete it (Chrome loads the extension from it).',
    ],
  },
  {
    title: 'Load the extension in Chrome',
    points: [
      'Open chrome://extensions — or Chrome menu → Extensions → Manage Extensions.',
      'Turn on Developer Mode (the toggle at the top-right).',
      'Click “Load unpacked” and select the extracted folder.',
      'The “Invo Amazon Video Downloader” icon appears in your toolbar — pin it for easy access.',
    ],
  },
  {
    title: 'Open an Amazon creator profile',
    points: [
      'Go to any Amazon creator/influencer storefront, e.g. amazon.com/shop/someone.',
      'The extension works on amazon.com, .co.uk, .de, .ca and .in.',
    ],
  },
  {
    title: 'Scan the profile',
    points: [
      'Click the extension icon, then “Open Downloader”.',
      'Hit “Scan profile” — the tool pages through the whole storefront and lists every video and image it finds.',
      'Large profiles with hundreds of posts are handled automatically; just let the scan finish.',
    ],
  },
  {
    title: 'Pick and download in bulk',
    points: [
      'Tick the videos and images you want (or select all).',
      'Download them in bulk — each file comes with its metadata (title, post info).',
      'Files save straight to your normal Chrome downloads folder.',
    ],
  },
];

const features = [
  {
    icon: Users,
    title: 'Whole creator profiles',
    text: 'Point it at any amazon.com/shop/... storefront and it enumerates every video and image across all pages — not just what’s visible.',
  },
  {
    icon: Video,
    title: 'Videos + images, in bulk',
    text: 'Select exactly what you want and download it all at once, instead of right-click-saving one file at a time.',
  },
  {
    icon: FileDown,
    title: 'Metadata included',
    text: 'Each download carries its post metadata, so you always know which video came from where.',
  },
];

export default function AmazonVideoDownloader() {
  const [downloading, setDownloading] = useState(false);
  const [downloadError, setDownloadError] = useState(false);

  const downloadZip = async () => {
    setDownloading(true);
    setDownloadError(false);
    try {
      const res = await fetch('/amazon-video-downloader-v1.5.0.zip.b64');
      if (!res.ok) throw new Error('fetch failed');
      const b64 = (await res.text()).replace(/\s+/g, '');
      const bin = Uint8Array.from(atob(b64), (c) => c.charCodeAt(0));
      const blob = new Blob([bin], { type: 'application/zip' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'invo-amazon-video-downloader.zip';
      document.body.appendChild(a);
      a.click();
      a.remove();
      setTimeout(() => URL.revokeObjectURL(url), 5000);
    } catch {
      setDownloadError(true);
    } finally {
      setDownloading(false);
    }
  };

  return (
    <div>
      {/* What it does */}
      <div className="grid md:grid-cols-3 gap-4 mb-12">
        {features.map((f) => (
          <div
            key={f.title}
            className="rounded-xl border border-white/10 bg-white/[0.02] p-5"
          >
            <f.icon size={22} className="text-brand-red mb-3" />
            <h3 className="text-white font-semibold mb-1">{f.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{f.text}</p>
          </div>
        ))}
      </div>

      {/* Setup guide */}
      <h2 className="text-2xl font-display font-bold mb-2">Setup guide</h2>
      <p className="text-gray-400 mb-6">
        Takes about two minutes. Do it once — then the tool is always one
        click away.
      </p>
      <ol className="space-y-4 mb-12">
        {steps.map((step, i) => (
          <li
            key={step.title}
            className="rounded-xl border border-white/10 bg-white/[0.02] p-5 md:p-6"
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-8 shrink-0 rounded-full bg-brand-red text-white font-bold flex items-center justify-center">
                {i + 1}
              </span>
              <h3 className="text-white font-semibold text-lg">{step.title}</h3>
            </div>
            <ul className="space-y-2 ml-11">
              {step.points.map((p) => (
                <li key={p} className="flex items-start gap-2 text-gray-400 text-sm leading-relaxed">
                  <CheckCircle2 size={16} className="text-brand-red shrink-0 mt-0.5" />
                  {p}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>

      {/* Free download */}
      <div className="rounded-2xl border border-brand-red/30 bg-gradient-to-br from-brand-red/10 to-transparent p-8 md:p-10 text-center">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-brand-cyan border border-brand-cyan/30 rounded-full px-4 py-1.5 mb-4">
          <Chrome size={14} /> Chrome extension · v1.5.0 · ~24 KB
        </div>
        <h2 className="text-3xl font-display font-bold mb-3">Free Download</h2>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto">
          Download the extension ZIP, extract it, and load it with “Load
          unpacked” (Step 2 above).
        </p>
        <button
          onClick={downloadZip}
          disabled={downloading}
          className="inline-flex items-center gap-2 bg-brand-red hover:bg-red-600 disabled:opacity-60 disabled:cursor-wait text-white px-10 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105"
        >
          <Download size={20} /> {downloading ? 'Preparing…' : 'Download free'}
        </button>
        {downloadError && (
          <p className="text-red-400 text-sm mt-4">
            Download failed — please check your connection and try again, or{' '}
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                'Hi INVOTIC! The Amazon Video Downloader download did not work for me.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              message us on WhatsApp
            </a>
            .
          </p>
        )}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-gray-400">
          <span className="inline-flex items-center gap-1.5">
            <Chrome size={15} className="text-gray-500" /> Chrome, Edge or Brave
          </span>
          <span className="inline-flex items-center gap-1.5">
            <ShieldCheck size={15} className="text-gray-500" /> Runs only on Amazon pages
          </span>
          <span className="inline-flex items-center gap-1.5">
            <MousePointerClick size={15} className="text-gray-500" /> No signup needed
          </span>
        </div>
      </div>

      {/* Support */}
      <p className="mt-8 text-center text-gray-500 text-sm">
        Prefer reading?{' '}
        <a
          href="/blog/amazon-video-downloader-chrome-extension"
          className="text-brand-red hover:text-white font-semibold underline transition-colors"
        >
          Read the full Amazon Video Downloader guide
        </a>
        <br />
        <span className="inline-block mt-3">
          Stuck on any step?{' '}
        <a
          href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
            'Hi INVOTIC! I need help setting up the Amazon Video Downloader extension.'
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand-red hover:text-white font-semibold inline-flex items-center gap-1 transition-colors"
        >
          <MessageCircle size={14} /> Message us on WhatsApp
        </a>
        </span>
      </p>
    </div>
  );
}
