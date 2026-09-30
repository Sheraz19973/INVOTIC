import { useState } from 'react';
import {
  Mic,
  Languages,
  MousePointerClick,
  Download,
  CheckCircle2,
  Chrome,
  KeyRound,
  MessageCircle,
} from 'lucide-react';

const whatsappNumber = '923484166937';

const steps = [
  {
    title: 'Install the extension',
    points: [
      'Open chrome://extensions — or Chrome menu → Extensions → Manage Extensions.',
      'Turn on Developer Mode (the toggle at the top-right).',
      'Click “Load unpacked”.',
      'Extract the ZIP you downloaded below, then select the extracted folder.',
    ],
  },
  {
    title: 'Add your free Gemini API key',
    points: [
      'Go to aistudio.google.com and create a free API key.',
      'Paste it into the extension’s welcome page and click “Save & check key”.',
      'Your key is stored only in your browser — it is never sent anywhere else.',
    ],
  },
  {
    title: 'Allow the microphone',
    points: [
      'One click on the welcome page — Chrome needs this permission once before the side panel can listen.',
    ],
  },
  {
    title: 'Start translating',
    points: [
      'Click the extension’s toolbar icon to open the side panel.',
      '“Translate from” is Urdu (Pakistan) and “Translate to” is English — change them any time.',
      'Press the mic button (or Alt+Shift+M) and speak, or just type Urdu / Roman Urdu.',
      'Your English appears live — hit Insert to drop it into the page’s text box, or Copy it.',
      'The extension never presses Send — you always review and send yourself.',
    ],
  },
];

const features = [
  {
    icon: Mic,
    title: 'Speak in Urdu',
    text: 'Tap the mic and talk — no typing needed. Roman Urdu works too.',
  },
  {
    icon: Languages,
    title: 'English, live',
    text: 'Your translation appears instantly in the side panel as you speak.',
  },
  {
    icon: MousePointerClick,
    title: 'Insert anywhere',
    text: 'One click drops it into ChatGPT — or any website’s text box.',
  },
];

export default function SpeakTranslate() {
  const [downloading, setDownloading] = useState(false);
  const [downloadError, setDownloadError] = useState(false);

  const downloadZip = async () => {
    setDownloading(true);
    setDownloadError(false);
    try {
      const res = await fetch('/speak-translate-v1.0.0.zip.b64');
      if (!res.ok) throw new Error('fetch failed');
      const b64 = (await res.text()).replace(/\s+/g, '');
      const bin = Uint8Array.from(atob(b64), (c) => c.charCodeAt(0));
      const blob = new Blob([bin], { type: 'application/zip' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'speak-translate-v1.0.0.zip';
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
          <Chrome size={14} /> Chrome extension · v1.0.0 · ~60 KB
        </div>
        <h2 className="text-3xl font-display font-bold mb-3">Free Download</h2>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto">
          Download the extension ZIP, extract it, and load it with “Load
          unpacked” (Step 1 above).
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
                'Hi INVOTIC! The Speak & Translate download did not work for me.'
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
            <KeyRound size={15} className="text-gray-500" /> Free Gemini API key
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Mic size={15} className="text-gray-500" /> Microphone
          </span>
        </div>
      </div>

      {/* Support */}
      <p className="mt-8 text-center text-gray-500 text-sm">
        Stuck on any step?{' '}
        <a
          href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
            'Hi INVOTIC! I need help setting up the Speak & Translate extension.'
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand-red hover:text-white font-semibold inline-flex items-center gap-1 transition-colors"
        >
          <MessageCircle size={14} /> Message us on WhatsApp
        </a>
      </p>
    </div>
  );
}
