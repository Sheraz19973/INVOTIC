// Blog content model for INVOTIC.
// Posts are authored as structured blocks (SEO-friendly, no raw HTML needed).

export type ContentBlock =
  | { type: 'intro'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'p'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'ol'; items: string[] }
  | { type: 'quote'; text: string; author?: string }
  | { type: 'callout'; title: string; text: string }
  | { type: 'faq'; items: { q: string; a: string }[] }
  | { type: 'toolLink'; title: string; text: string; href: string; buttonText: string }
  | { type: 'image'; src: string; alt: string; caption?: string }
  | { type: 'cta' };

export interface BlogPost {
  slug: string;
  title: string;
  metaDescription: string;
  excerpt: string;
  category: string;
  tags: string[];
  /** ISO date, e.g. "2026-09-30" */
  date: string;
  updated?: string;
  readTime: number; // minutes
  keyword: string; // primary target keyword
  featured?: boolean;
  content: ContentBlock[];
}

export const posts: BlogPost[] = [
  {
    slug: 'youtube-ai-updates-creators-september-2026',
    title: 'YouTube AI Updates for Creators (September 2026): What Changes for Faceless Channels',
    metaDescription:
      'YouTube\u2019s September 2026 AI updates bring conversational editing, AI draft feedback, dynamic thumbnails and face likeness detection. What faceless creators must know.',
    excerpt:
      'Made on YouTube 2026 just dropped 30+ AI features. Here is what actually matters for faceless and automation channels \u2014 and what to do about it this month.',
    category: 'AI News',
    tags: ['youtube ai updates', 'made on youtube 2026', 'faceless youtube', 'ai tools for creators'],
    date: '2026-09-29',
    readTime: 8,
    keyword: 'youtube ai updates for creators',
    content: [
      {
        type: 'intro',
        text: 'On September 23, 2026, YouTube held its annual Made on YouTube event in New York and announced 30+ new products and features \u2014 most of them powered by AI. The news sites covered the headlines. This post is the part they skipped: what these updates actually change for faceless channels and YouTube automation workflows.',
      },
      {
        type: 'h2',
        text: 'Conversational AI editing is coming to Shorts and YouTube Create',
      },
      {
        type: 'p',
        text: 'The biggest creator-facing announcement was a Gemini-powered conversational editing tool. Instead of scrubbing a timeline, creators describe edits in plain language \u2014 trim pauses, reorder clips, sync cuts to music, add text hooks \u2014 and the AI assembles the cut. YouTube demoed it on stage with creator Happy Kelli, who noted that a one-hour shoot can easily mean ten hours in the edit. The tool keeps a manual timeline available, so editors can jump back in and adjust anything by hand.',
      },
      {
        type: 'p',
        text: 'It launches for YouTube Shorts and the YouTube Create app in early 2027, according to TechCrunch\u2019s event coverage. For faceless channels, this matters more than it looks: rough-cut editing is one of the most outsourced (and most expensive) steps in automation pipelines. A free, built-in conversational editor compresses that cost \u2014 but it also means competitors get the same speed advantage. The edge moves from editing speed to idea quality and packaging.',
      },
      { type: 'h2', text: 'Ask Studio: AI feedback on your drafts before you publish' },
      {
        type: 'p',
        text: 'YouTube Studio is getting an AI draft-review feature that watches an unpublished video and gives feedback on pacing, structure, and storytelling. YouTube is also expanding Ask Studio \u2014 its AI Q&A assistant \u2014 to iOS and Android, and adding a research feed that shows creators what formats are working on the platform right now.',
      },
      {
        type: 'p',
        text: 'For automation operators, the draft-feedback tool is essentially a free pre-publish quality check. If you run multiple channels or work with scriptwriters and editors, running drafts through it before upload is an obvious new step in the SOP. The research feed is equally useful: trend-spotting is half the job in faceless niches, and a native feed inside Studio beats third-party trend tools for freshness.',
      },
      { type: 'h2', text: 'AI thumbnails, titles, and dynamic testing become table stakes' },
      {
        type: 'p',
        text: 'Studio will now generate thumbnails and titles matched to a video\u2019s content and a channel\u2019s existing style. More importantly, YouTube is rolling out dynamic thumbnails \u2014 up to three variants shown to different audience segments \u2014 plus the ability to A/B test three different video cuts to find the strongest opening hook. YouTube says creators have already run more than 40 million title and thumbnail tests with its existing test feature. Later this year, Studio will even monitor thumbnail performance automatically and swap an underperforming thumbnail on its own.',
      },
      {
        type: 'callout',
        title: 'What this means for you',
        text: 'Manual thumbnail testing was a competitive advantage for serious channels. When every creator gets automated testing built in, packaging quality rises across the board \u2014 and channels that still upload one thumbnail and hope for the best will fall behind. If you run faceless channels, build a thumbnail testing habit now, before it is fully automated for everyone.',
      },
      { type: 'h2', text: 'Likeness detection expands from voices to faces' },
      {
        type: 'p',
        text: 'YouTube is combining voice and facial detection in its likeness-protection tools, widening the net against AI-generated impersonations. Reuters also reported opt-in AI comment moderation that adapts to each creator\u2019s preferences. For faceless creators, the takeaway is twofold: your own likeness gets better protection, and the platform is getting stricter about synthetic media overall \u2014 keep your AI disclosures clean and your content clearly original.',
      },
      { type: 'h2', text: 'The smaller updates worth knowing' },
      {
        type: 'ul',
        items: [
          'Custom Feeds: US viewers can build homepage tabs around moods and interests this fall \u2014 niche content gets more surface area beyond the main algorithm feed.',
          'Ask YouTube adds shopping queries and product-comparison tables, plus voice commands on TV.',
          'YouTube Shopping affiliate program expands to 35 countries by year-end, with 1.3M+ creators already enrolled \u2014 a real revenue line for review-style faceless channels.',
          'New formats: Short Stories (serialized short drama) and a Personalised Podcast Lineup; voice comments arrive on TV.',
        ],
      },
      { type: 'h2', text: 'What faceless and automation channels should do this month' },
      {
        type: 'ol',
        items: [
          'Add AI draft review to your upload checklist the moment Ask Studio\u2019s feedback tool reaches your account \u2014 free quality control is free quality control.',
          'Start A/B testing thumbnails on every upload now, so you have a baseline before automated swapping rolls out.',
          'Re-audit your editing pipeline: with conversational editing arriving in early 2027, map which editing hours you can reclaim and reinvest into ideation.',
          'If you run review or comparison content, apply for the YouTube Shopping affiliate program before the 35-country expansion crowds it.',
          'Keep AI disclosures accurate on every video \u2014 likeness detection getting stricter means synthetic-media scrutiny is only going one direction.',
        ],
      },
      {
        type: 'p',
        text: 'The through-line of every one of these updates: YouTube is automating the mechanical parts of being a creator \u2014 editing, testing, packaging. What it cannot automate is judgment: which video to make, which angle wins, which niche is worth entering. That is still the human edge, and it is exactly where experience compounds.',
      },
      { type: 'cta' },
      {
        type: 'faq',
        items: [
          {
            q: 'When is YouTube\u2019s conversational AI editing launching?',
            a: 'YouTube announced at Made on YouTube (September 23, 2026) that conversational editing will come to YouTube Shorts and the YouTube Create app in early 2027.',
          },
          {
            q: 'What is Ask Studio\u2019s new AI draft feedback?',
            a: 'It is a YouTube Studio feature that analyzes an unpublished video and suggests improvements to pacing, structure, and storytelling before you publish. Ask Studio itself is also expanding to iOS and Android.',
          },
          {
            q: 'Will YouTube automatically change my thumbnails?',
            a: 'YouTube says Studio will introduce automatic thumbnail performance monitoring later this year, which can proactively replace an underperforming thumbnail. Creators can already A/B test thumbnails manually, with over 40 million tests run to date.',
          },
          {
            q: 'Do these AI updates help or hurt faceless channels?',
            a: 'Both. They lower production costs (editing, testing, packaging get easier and cheaper), which helps faceless operators \u2014 but they give every competitor the same tools, so the advantage shifts to idea selection, niche choice, and execution quality.',
          },
        ],
      },
    ],
  },
  {
    slug: 'ai-script-writer-for-youtube-videos',
    title: 'AI Script Writer for YouTube Videos: 5 Tools Compared (2026)',
    metaDescription:
      'Compare 5 AI script writers for YouTube videos \u2014 ChatGPT, Claude, Subscribr, vidIQ and ScriptaAI \u2014 plus the workflow that keeps AI scripts monetizable.',
    excerpt:
      'Scripting is the #1 bottleneck in faceless YouTube automation. Here is how the five most-used AI script writers compare \u2014 and the workflow that actually works.',
    category: 'AI Tools',
    tags: ['ai script writer', 'youtube automation', 'faceless youtube channel', 'ai tools for youtubers'],
    date: '2026-09-29',
    readTime: 10,
    keyword: 'ai script writer for youtube videos',
    content: [
      {
        type: 'intro',
        text: 'Every faceless YouTube channel lives or dies on scripts. Voiceover, editing, thumbnails \u2014 all of it is downstream of the words. And scripting is the step where most automation operations stall: it is slow, skill-dependent, and hard to delegate. AI script writers promise to fix that. Some do. Here is an honest comparison of the five tools creators actually use, and the workflow that keeps AI-assisted scripts monetizable.',
      },
      { type: 'h2', text: 'What a YouTube script writer needs to do (that blog writers don\u2019t)' },
      {
        type: 'p',
        text: 'Most \u201cAI writing tool\u201d roundups review these products as blog-post generators. YouTube scripts are a different discipline. A good AI script writer for YouTube videos needs to handle hooks that survive the first 30 seconds, retention-structured sections with re-hooks, spoken-word rhythm (short sentences, no tongue-twisters for voiceover), and natural places for visual changes so the editor always has something to cut to. Judge every tool below against that bar \u2014 not against how nicely it writes essays.',
      },
      { type: 'h2', text: 'The 5 AI script writers, compared' },
      { type: 'h3', text: '1. ChatGPT \u2014 the flexible all-rounder' },
      {
        type: 'p',
        text: 'OpenAI\u2019s ChatGPT remains the default choice because it does everything adequately: outlines, hooks, full drafts, rewrites, title brainstorming. Its weakness for YouTube work is that it has no native sense of retention structure \u2014 you have to supply it via prompting (e.g. \u201chook, open loop, three sections with re-hooks, payoff\u201d). With a good prompt template saved, it is fast and cheap, with a free tier and a paid Plus plan. Best for: creators who want one tool for ideation through scripting and are willing to build prompt systems.',
      },
      { type: 'h3', text: '2. Claude \u2014 the strongest long-form drafter' },
      {
        type: 'p',
        text: 'Anthropic\u2019s Claude has a reputation for coherent long-form writing, and it shows in scripts: fewer logical jumps, better-maintained narrative threads across 1,500+ word drafts. It also tends to need less cleanup for voiceover readability. Like ChatGPT it is a general model, so retention structure still comes from your prompts. Free tier available, paid Pro plan for heavy use. Best for: long-form faceless niches (documentaries, finance explainers, history) where script coherence matters most.',
      },
      { type: 'h3', text: '3. Subscribr \u2014 built specifically for YouTube scripts' },
      {
        type: 'p',
        text: 'Subscribr is the notable purpose-built option: an AI script writer designed around YouTube formats, with hooks, retention frameworks, and channel-voice matching baked in rather than bolted on via prompts. For operators running multiple channels, the workflow features (research inputs, structured outputs) save real time versus wrestling a general chatbot. It is a paid product. Best for: serious automation setups where scripting is a production line, not an occasional task.',
      },
      { type: 'h3', text: '4. vidIQ \u2014 the YouTube toolkit with AI scripting inside' },
      {
        type: 'p',
        text: 'vidIQ is primarily known for YouTube SEO, analytics, and channel audits \u2014 but it has folded AI script assistance and content coaching into its toolkit. The advantage is context: script suggestions informed by what actually performs in your niche, not generated in a vacuum. The scripting depth is lighter than a dedicated writer, but the bundle (ideation + SEO + scripting) is convenient. Free and paid tiers. Best for: creators who already live in vidIQ for research and want scripting in the same tab.',
      },
      { type: 'h3', text: '5. ScriptaAI \u2014 the lightweight script app' },
      {
        type: 'p',
        text: 'ScriptaAI is a newer, narrower app focused on generating scripts for creators. It is simpler than the full platforms above \u2014 fewer knobs, faster to a first draft. That simplicity is the appeal for beginners, and the limitation for professionals: expect to do more structural editing yourself. Best for: new faceless creators who want to go from idea to recordable script with minimal setup.',
      },
      { type: 'h2', text: 'The workflow that actually works (from running channels)' },
      {
        type: 'p',
        text: 'The tool matters less than the process around it. After years of producing scripted content, this is the workflow we recommend:',
      },
      {
        type: 'ol',
        items: [
          'Human writes the outline and the hook. AI is bad at deciding what is interesting; it is good at expanding what you tell it is interesting.',
          'AI generates the first draft against a fixed structure template (hook, open loops, sections with re-hooks, payoff, CTA).',
          'Human rewrites for voice: read it aloud, kill tongue-twisters, cut every sentence that does not earn retention.',
          'Add visual directives in brackets for the editor \u2014 every 5\u201310 seconds of script should imply a visual change.',
          'Run a final originality pass: if the script could have been written about any channel in the niche, it is not specific enough.',
        ],
      },
      {
        type: 'callout',
        title: 'Monetization warning',
        text: 'AI-written scripts are not against YouTube policy \u2014 but mass-produced, low-effort content is. YouTube\u2019s reused-content and spam policies target channels that publish templated, interchangeable videos with no original value. An AI script that you meaningfully rewrite, structure, and produce around is fine. A thousand auto-generated scripts uploaded raw is how channels lose monetization. This is the single most common script-related issue we see in channel recovery work.',
      },
      { type: 'h2', text: 'Which one should you choose?' },
      {
        type: 'ul',
        items: [
          'Just starting out, tight budget: ChatGPT or Claude free tier + a saved prompt template.',
          'Long-form documentary/finance/history niche: Claude for draft coherence.',
          'Running 2+ channels as a system: Subscribr \u2014 the workflow features pay for themselves.',
          'Already using vidIQ daily: use its AI scripting where it fits, supplement with a general model for full drafts.',
          'Want the simplest path from idea to script: ScriptaAI.',
        ],
      },
      {
        type: 'p',
        text: 'One last note: features and pricing for all of these change constantly \u2014 verify the current plans on each tool\u2019s official site before you commit. What does not change is the principle: AI drafts, humans decide. Channels that keep a human in the scripting loop publish better videos and stay monetized.',
      },
      { type: 'cta' },
      {
        type: 'faq',
        items: [
          {
            q: 'Will YouTube demonetize videos with AI-written scripts?',
            a: 'No \u2014 AI assistance with scripting is not against policy. What gets channels demonetized is low-effort, mass-produced, or reused content with no original value. A script you meaningfully develop, rewrite, and produce around is treated like any other original script.',
          },
          {
            q: 'Can AI write a complete YouTube script on its own?',
            a: 'It can produce a complete draft, but publishing it raw is a mistake: generic structure, flat hooks, and factual errors are common. The reliable workflow is human outline \u2192 AI draft \u2192 human rewrite for voice and retention.',
          },
          {
            q: 'What is the best free AI script writer for YouTube?',
            a: 'The free tiers of ChatGPT and Claude are the most capable free options. Pair either with a saved prompt template specifying your hook structure, section count, and target word count for consistent results.',
          },
          {
            q: 'How long should a faceless YouTube script be?',
            a: 'Rule of thumb: ~130\u2013150 spoken words per minute of video. An 8-minute video needs roughly 1,100\u20131,200 words. Longer niches (documentaries) run 2,000+ words for 12\u201315 minutes.',
          },
        ],
      },
    ],
  },
  {
    slug: 'youtube-automation-mistakes-to-avoid',
    title: 'YouTube Automation Mistakes to Avoid: 8 Lessons From 10+ Years Running Channels',
    metaDescription:
      'Avoid the 8 costliest YouTube automation mistakes \u2014 reused content, fake engagement, bad niches and more \u2014 lessons from 10+ years of running channels.',
    excerpt:
      'Most automation channels die from avoidable mistakes, not bad luck. These are the eight we see most often after 10+ years in the game.',
    category: 'YouTube Automation',
    tags: ['youtube automation', 'faceless youtube', 'youtube mistakes', 'channel growth'],
    date: '2026-09-29',
    readTime: 11,
    keyword: 'youtube automation mistakes to avoid',
    content: [
      {
        type: 'intro',
        text: 'After 10+ years of building, growing, and recovering YouTube channels, we have seen the same failures repeat \u2014 not because creators are lazy, but because the mistakes look like shortcuts. Here are the eight YouTube automation mistakes to avoid, each one paid for many times over by channels that came to us afterwards.',
      },
      { type: 'h2', text: '1. Republishing content without adding transformation' },
      {
        type: 'p',
        text: 'The fastest way to lose monetization: taking other people\u2019s videos, compilations, or TV clips, adding music and captions, and calling it a channel. YouTube\u2019s reused-content policy is explicit \u2014 if your videos are not meaningfully transformed with original commentary, editing, or educational value, the channel gets demonetized, often right at the review stage. Transformation is not a filter; it is a new layer of authorship.',
      },
      { type: 'h2', text: '2. Buying subscribers and views to \u201clook established\u201d' },
      {
        type: 'p',
        text: 'Fake engagement poisons the exact metrics YouTube uses to decide who sees your videos. Bought views tank audience retention and click-through baselines, so the algorithm learns your content does not satisfy viewers \u2014 because, on paper, it doesn\u2019t. Worse, it is a policy violation that can end in channel termination. There is no version of this that works; we have watched channels with 100K bought subscribers get zero organic reach.',
      },
      { type: 'h2', text: '3. Choosing a niche with no advertiser demand' },
      {
        type: 'p',
        text: 'Not all views pay equally. A million views in a niche advertisers ignore can earn less than 100K views in finance, software, or business. Before committing to a niche, check the money side: are there real products, sponsors, and high-CPM advertisers in it? Passion niches are wonderful hobbies and terrible automation businesses. Pick the niche with the spreadsheet, not just the heart.',
      },
      { type: 'h2', text: '4. Ignoring audience retention analytics' },
      {
        type: 'p',
        text: 'Most struggling channels obsess over views and subscribers while never opening the retention graph. The retention curve tells you exactly where viewers leave \u2014 a cliff at 0:30 means your hook failed; a slope at 4:00 means the middle sags. Every video is a free focus group. Channels that review retention per upload and adjust the next script improve compounding-style; channels that don\u2019t repeat the same invisible error for a year.',
      },
      { type: 'h2', text: '5. Uploading inconsistently, then quitting at month three' },
      {
        type: 'p',
        text: 'The classic arc: 12 videos in two weeks, then silence, then \u201cautomation doesn\u2019t work.\u201d YouTube rewards sustained publishing because the algorithm needs data to find your audience. A realistic automation cadence you can hold for a year beats a heroic month followed by burnout. Systems \u2014 script templates, editing checklists, upload SOPs \u2014 are what make consistency possible without living in YouTube Studio.',
      },
      { type: 'h2', text: '6. Using copyrighted footage and music \u201cbecause everyone does\u201d' },
      {
        type: 'p',
        text: '\u201cEveryone does it\u201d is survivorship bias: you see the channels that haven\u2019t been caught yet. Content ID claims divert your revenue; strikes can remove videos or terminate the channel; and three strikes is game over. License your music, use royalty-free or original footage, and understand fair use properly \u2014 commentary and criticism have protections, but \u201cI added background music\u201d is not commentary.',
      },
      { type: 'h2', text: '7. Applying for monetization before the channel is policy-clean' },
      {
        type: 'p',
        text: 'Rushing the 1,000-subscriber / 4,000-watch-hour thresholds and applying with reused content, borderline spam, or community-guideline baggage leads to rejection \u2014 and rejections leave a mark on the channel\u2019s standing. Audit first: remove or private questionable videos, confirm every upload is original or genuinely transformative, and only then apply. A clean first application is worth more than an early one.',
      },
      { type: 'h2', text: '8. Scaling with cheap freelancers and zero quality control' },
      {
        type: 'p',
        text: 'Automation is not abdication. Hiring the cheapest scriptwriter and editor you can find, with no briefs, no style guide, and no review step, produces the generic mush that the algorithm \u2014 and viewers \u2014 ignore. Scale only what you have systematized: write the brief template, define the quality bar with examples, review the first ten outputs personally. Then delegate.',
      },
      {
        type: 'quote',
        text: 'Almost every dead channel we have ever audited failed on process, not talent. The winners were rarely the most creative \u2014 they were the most consistent, with systems for every step.',
        author: 'Sheraz Khan, Founder of INVOTIC',
      },
      {
        type: 'callout',
        title: 'Not sure which of these is hurting your channel?',
        text: 'That is exactly what a channel audit is for. We review content, analytics, and policy standing, then hand you a prioritized fix list \u2014 no guesswork, no generic advice.',
      },
      { type: 'cta' },
      {
        type: 'faq',
        items: [
          {
            q: 'What is the biggest mistake in YouTube automation?',
            a: 'Publishing reused or untransformed content. It is the fastest route to demonetization and the hardest to recover from, because the whole channel\u2019s catalog becomes a liability.',
          },
          {
            q: 'How long does it take for YouTube automation to work?',
            a: 'Realistic timelines are 6\u201312 months of consistent publishing before a channel finds traction. Anyone promising faster results is usually selling something.',
          },
          {
            q: 'Can a faceless channel get monetized?',
            a: 'Yes \u2014 thousands are. Faceless is not against policy. What matters is originality: original scripts, original voiceover (human or properly used AI), and transformative editing.',
          },
          {
            q: 'Is YouTube automation still profitable in 2026?',
            a: 'Yes, but the bar is higher than it was years ago. Low-effort content gets filtered by policy and the algorithm alike. Channels with real systems \u2014 niche research, script quality control, retention analysis \u2014 still build profitable businesses.',
          },
        ],
      },
    ],
  },
  {
    slug: 'urdu-to-english-voice-translator-chrome-extension',
    title: 'Speak Urdu, Get English: Free Urdu-to-English Voice Translator Chrome Extension',
    metaDescription:
      'Speak or type in Urdu or Roman Urdu and get instant English translations without leaving the page. Free Chrome extension with setup guide, features, and FAQs.',
    excerpt:
      'Your spoken Urdu is fluent but typing English slows you down? This free Chrome extension translates your Urdu voice or Roman Urdu typing into English right on the page you are working on.',
    category: 'AI Tools',
    tags: [
      'urdu to english translator',
      'urdu voice translator',
      'roman urdu to english',
      'chrome extension',
      'ai translator',
    ],
    date: '2026-09-30',
    readTime: 7,
    keyword: 'urdu to english voice translator chrome extension',
    content: [
      {
        type: 'intro',
        text: 'Millions of Pakistanis think fluently in Urdu but get stuck the moment they have to write in English. An email to a client, a job application form, a reply in a support chat \u2014 every one of them means opening Google Translate in another tab, typing, copying, switching back, and pasting. It works, but it breaks your flow a dozen times a day. Speak & Translate, a free Chrome extension from INVOTIC, removes that friction: you speak or type in Urdu (or Roman Urdu), and it gives you English right there on the page you are already using.',
      },
      {
        type: 'image',
        src: '/blog/speak-translate-visual.svg',
        alt: 'Speak & Translate: speak or type in Urdu and get polished English instantly — free Chrome extension by Sheraz Khan, INVOTIC',
        caption: 'Speak & Translate — built by Sheraz Khan, founder of INVOTIC.',
      },
      {
        type: 'h2',
        text: 'What is Speak & Translate?',
      },
      {
        type: 'p',
        text: 'Speak & Translate is a free Chrome extension built by Sheraz Khan, founder of INVOTIC, that lives in your browser\u2019s side panel. It takes Urdu voice input or typed Urdu/Roman Urdu text, translates it into English using Google\u2019s Gemini AI, and lets you insert the translated text directly into the website you are working on \u2014 a form field, a chat box, an email draft, a document. You never switch tabs.',
      },
      {
        type: 'ul',
        items: [
          'Voice input: speak in Urdu, get English text back.',
          'Roman Urdu support: type the way you normally text (e.g. "mujhe ye email likhna hai") and get a proper English version.',
          'Side panel on any website: it stays open while you browse, fill forms, or chat.',
          'One-click insert: drop the translated English straight into the page field you are using.',
          'Powered by Gemini: translations come from Google\u2019s AI model, not a fixed phrasebook.',
        ],
      },
      {
        type: 'h2',
        text: 'Who is it actually for?',
      },
      {
        type: 'p',
        text: 'If any of these sound familiar, this tool was built for you:',
      },
      {
        type: 'ul',
        items: [
          'Freelancers replying to international clients on Upwork, Fiverr, or WhatsApp.',
          'Students writing assignments, emails to teachers, or scholarship applications.',
          'Job seekers filling out online application forms in English.',
          'Shop owners and support agents answering customer messages in English.',
          'Anyone whose spoken English is fine but whose written English is slow.',
        ],
      },
      {
        type: 'h2',
        text: 'How to install and set it up (4 steps)',
      },
      {
        type: 'p',
        text: 'Setup takes about five minutes. The full illustrated guide is on the tool page \u2014 here is the short version:',
      },
      {
        type: 'ol',
        items: [
          'Download the free extension ZIP from the Speak & Translate tool page and extract it.',
          'Open chrome://extensions, enable Developer Mode, and click "Load unpacked", then select the extracted folder.',
          'Get a free Gemini API key from Google AI Studio (aistudio.google.com) and paste it into the extension when it asks.',
          'Open the extension\u2019s side panel on any website, allow microphone access, and start speaking or typing.',
        ],
      },
      {
        type: 'toolLink',
        title: 'Get Speak & Translate free',
        text: 'Download the extension and follow the step-by-step setup guide with screenshots.',
        href: '/tools/speak-translate',
        buttonText: 'Open the free download page',
      },
      {
        type: 'h2',
        text: 'Why not just use Google Translate?',
      },
      {
        type: 'p',
        text: 'Google Translate is fine for a quick word lookup, but it was not designed for the way people actually work. Every translation means a tab switch, a copy, and a paste \u2014 and its voice typing still leaves you to fix and move the text yourself. Speak & Translate is built around a different idea: the translation happens where the writing happens. You speak, you get English, you insert it into the form or chat in front of you. For Roman Urdu especially \u2014 the way most Pakistanis actually type \u2014 having a dedicated tool that understands "mujhe kal meeting ke liye email chahiye" and returns polished English is a genuine time-saver.',
      },
      {
        type: 'h2',
        text: 'What you need (and what it costs)',
      },
      {
        type: 'ul',
        items: [
          'The extension itself: free, downloaded from INVOTIC.',
          'A Gemini API key: free from Google AI Studio \u2014 you create it with your Google account in a minute.',
          'Google Chrome or Microsoft Edge (any Chromium browser works).',
          'A microphone, if you want to use voice input instead of typing.',
        ],
      },
      {
        type: 'p',
        text: 'There is no subscription and no INVOTIC account. The translation runs on your own free Gemini API key, which you paste into the extension yourself in your own browser.',
      },
      {
        type: 'h2',
        text: 'Practical tips for better translations',
      },
      {
        type: 'ul',
        items: [
          'Speak in short, complete sentences \u2014 you will get cleaner English than from one long rambling paragraph.',
          'In Roman Urdu, write the way you text friends; the AI handles casual phrasing well.',
          'Always give the English one quick read before sending, especially for formal emails.',
          'Use a stable internet connection, since translation runs on Google\u2019s online AI model.',
        ],
      },
      {
        type: 'h2',
        text: 'Frequently asked questions',
      },
      {
        type: 'faq',
        items: [
          {
            q: 'Is Speak & Translate really free?',
            a: 'Yes. The extension is a free download from INVOTIC, and the Gemini API key it uses has a free tier from Google AI Studio. There is no paid plan and no account to create.',
          },
          {
            q: 'Does it support Roman Urdu?',
            a: 'Yes. You can type in Roman Urdu (Urdu written in English letters, the way most people text) as well as speak in Urdu. Both are translated into English.',
          },
          {
            q: 'Does it work on every website?',
            a: 'It runs as a Chrome side panel, so it is available on any website you visit \u2014 Gmail, job portals, freelancing sites, WhatsApp Web, Google Docs, and more. You can insert the translated text directly into the page you are on.',
          },
          {
            q: 'Do I need to keep switching tabs like with Google Translate?',
            a: 'No \u2014 that is the whole point. The side panel stays open next to the page you are working on, so you translate and insert without leaving it.',
          },
          {
            q: 'Is my API key safe?',
            a: 'You paste the key into the extension yourself, in your own browser. INVOTIC has no server in this loop and never sees your key \u2014 it goes directly from the extension to Google\u2019s API.',
          },
          {
            q: 'Which languages does it translate between?',
            a: 'Urdu to English: spoken Urdu, typed Urdu, and Roman Urdu all translate into English.',
          },
        ],
      },
    ],
  },
];

export function getPost(slug: string | undefined): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

export function relatedPosts(post: BlogPost, count = 3): BlogPost[] {
  const sameCategory = posts.filter(
    (p) => p.slug !== post.slug && p.category === post.category
  );
  const others = posts.filter(
    (p) => p.slug !== post.slug && p.category !== post.category
  );
  return [...sameCategory, ...others].slice(0, count);
}

export const categories: string[] = Array.from(
  new Set(posts.map((p) => p.category))
);

export function formatDate(iso: string): string {
  const d = new Date(iso + 'T00:00:00');
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
