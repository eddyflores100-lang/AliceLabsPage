// AliceLabs — EXACT replica of recap-tile-66296670.figma.site
// Only changes: #ff2200→#4252ff, LUMEN→AliceLabs, AI content→engineering content
// Structure, layout, borders, fonts, spacing = IDENTICAL to figma

(function () {
  'use strict';

  // The figma uses Tailwind CDN + custom CSS
  const TAILWIND_CDN = 'https://cdn.tailwindcss.com';
  const FONTS = 'https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Source+Sans+3:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Courier+Prime:wght@400;700&display=swap';

  const CUSTOM_CSS = `
* { box-sizing: border-box; margin: 0; padding: 0; }
html { scrollbar-width: none; scroll-behavior: smooth; }
html::-webkit-scrollbar { display: none; }
body { color: #0d0d0d; -webkit-font-smoothing: antialiased; cursor: crosshair; background: #f5f0e8; font-family: "Source Sans 3", sans-serif; }
.font-display { font-family: "Abril Fatface", serif; }
.font-mono { font-family: "Courier Prime", monospace; }
::selection { color: #f5f0e8; background: #4252ff; }
@keyframes marquee { 0% { transform: translate(0); } 100% { transform: translate(-50%); } }
@keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
@keyframes spin-slow { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
.marquee-inner { width: max-content; animation: 18s linear infinite marquee; display: flex; }
.cursor-blink { animation: 1s step-end infinite blink; }
.spin-slow { animation: 12s linear infinite spin-slow; }
.thick-border { border: 3px solid #0d0d0d; }
.thick-border-r { border-right: 3px solid #0d0d0d; }
.thick-border-b { border-bottom: 3px solid #0d0d0d; }
.thick-border-t { border-top: 3px solid #0d0d0d; }
.thick-border-l { border-left: 3px solid #0d0d0d; }
.hover-invert { transition: background .12s, color .12s; }
.hover-invert:hover { color: #f5f0e8; background: #0d0d0d; }
.hover-blue:hover { color: #f5f0e8; background: #4252ff; }
.tag { letter-spacing: .15em; text-transform: uppercase; border: 1.5px solid #0d0d0d; padding: 3px 8px; font-family: "Courier Prime", monospace; font-size: 11px; display: inline-block; }
.noise { position: relative; }
.noise::after { content: ""; pointer-events: none; opacity: .4; background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E"); position: absolute; inset: 0; }
`;

  // AliceLabs content (replaces Lumen content)
  // Colors: #4252ff replaces #ff2200 everywhere
  const EN = {
    brand: 'AliceLabs',
    navLinks: [{name:'Sites',url:'#sites'},{name:'Repos',url:'#work'},{name:'Docs',url:'/docs'},{name:'Agents',url:'/agents'},{name:'Contact',url:'#cta'}],
    navCta: 'Get started',
    marquee: 'OPEN SOURCE · AI AGENT TRUST · GOVTECH · LEGALTECH · SECURITY · 21 PUBLIC REPOS · 100+ TOTAL · 7 LIVE SITES · WYOMING LLC · BUILDING IN THE OPEN · ',
    heroTag: 'Open-source engineering · v2026',
    heroTitle1: 'The infrastructure that',
    heroTitleHl: 'powers',
    heroTitle2: 'regulated industries.',
    heroSub: 'Not a chatbot wrapper. Real infrastructure for AI agent trust, government APIs, legal tech, and security research. 100+ repositories. 21 public. 7 live sites. 0 venture debt.',
    btn1: 'See our work',
    btn2: 'GitHub',
    session: 'Active session: 00:01',
    location: 'Sheridan, WY · 2026',
    circleText: 'ALICE LABS · INNOVATION HUB · BUILD IN THE OPEN · ',
    circleLetter: 'A',
    bigNum: '100+',
    bigLabel: 'total repos',
    pgHero: 'pg. 001<br>—<br>HERO',
    manifestoTag: 'Manifesto',
    manifesto1: 'Everyone sells AI wrappers.',
    manifesto2: "We sell the engine underneath.",
    manifestoBody: 'Agent trust infrastructure. Government API SDKs. Machine-readable legislation. Security tooling. 100+ repositories total, 21 open-source. Exposed, transparent, controllable. You decide what to build. We make sure it works.',
    metrics: [
      { num: '70', unit: '+', label: 'total repositories' },
      { num: '21', unit: 'pub', label: 'open-source on GitHub' },
      { num: '7', unit: 'live', label: 'sites in production' },
      { num: '0', unit: 'debt', label: 'venture debt' },
    ],
    sitesTag: 'Live sites',
    sitesTitle1: 'Seven sites',
    sitesTitle2: 'in production.',
    pgSites: 'pg. 002 — SITES',
    sites: [
      { name: 'OpenSAM', url: 'https://opensam.us', desc: 'Federal contract intelligence. Watches SAM.gov 24/7, scores opportunities.' },
      { name: 'MarketNow', url: 'https://marketnow.site', desc: 'Trust infrastructure for AI agents. Ed25519 trust cards.' },
      { name: 'AliceLabs.Energy', url: 'https://alicelabs.energy', desc: 'Energy platform. Smart grid monitoring, substation analytics.' },
      { name: 'SG-Turismo', url: 'https://sg-turismo.com', desc: 'Tourism platform for Ecuador. Bus routes, bookings.' },
      { name: 'Equastore', url: 'https://equastore.com', desc: 'Wellness and supplements store. National delivery.' },
      { name: 'Angry Cactus', url: 'https://angrycactus.site', desc: 'Lifestyle brand. Coloring books, transmedia franchise.' },
      { name: 'FloraNova', url: 'https://floranova.life', desc: 'Botanical care. Computer vision for plant disease detection.' },
    ],
    productTag: 'Open source',
    productTitle1: '21 public repos.',
    productTitle2: 'All on GitHub.',
    pgProduct: 'pg. 003 — REPOS',
    products: [
      '01 OpenSAM — Federal contract intelligence, watches SAM.gov',
      '02 universal-trust-adapter — ATC/1.0 protocol, Ed25519 signatures',
      '03 mcp-vault-server — Zero-trust key management, AES-256-GCM',
      '04 govcon-scoring — Federal contract viability scoring, NAICS',
      '05 samgov-sdk — TypeScript SDK for SAM.gov API',
      '06 LegalIA — AI legal assistants for Ecuador and LatAm',
      '07 ecuadorian-legal-codes — Machine-readable legislation in JSON',
      '08 CodeAuditor — Automated code security auditor',
      '09 burp-quicknotes — Bug bounty templates for Burp Suite',
      '10 vigia-ml — Gas well monitoring with ML, LSTM forecasts',
      '11 Scraper — AI product research, TikTok/Amazon',
      '12 supabase-rls-templates — Production-ready RLS policies',
      '13 autotaxflow — Automated tax workflow for Ecuador, SRI',
      '14 sam-gov-types — TypeScript types for SAM.gov API',
      '15 NexusCold — B2B data enrichment engine',
      '16 contentflow — Social media content automation',
    ],
    faqTag: 'Questions',
    faqTitle1: 'The real',
    faqTitle2: 'answers.',
    pgFaq: 'pg. 004 — FAQ',
    faqs: [
      'Is this a real company?',
      'Is the code actually open?',
      'Are the sites actually live?',
      'How do we work with you?',
    ],
    faqAnswers: [
      'Yes. AliceLabs LLC is a Wyoming-filed company (Filing #2025-001849256) based at 30 N Gould St Ste R, Sheridan, WY 82801.',
      'Yes. 21 of our 100+ repositories are public on GitHub at github.com/alicelabs-llc. TypeScript, Python, PLpgSQL. The rest are private client work.',
      'Yes. Seven sites are in production: opensam.us, marketnow.site, alicelabs.energy, sg-turismo.com, equastore.com, angrycactus.site, floranova.life.',
      'Email contact@alicelabs.site. We partner with founders, federal contractors, and legal teams who need production-grade infrastructure.',
    ],
    ctaTag: 'Open source',
    ctaTitle: 'Stop waiting.',
    ctaSub: 'Open-source infrastructure for AI trust, government, legal, and security. Wyoming-based. Globally deployed.',
    pgCta: 'pg. 004 — START',
    ctaPlaceholder: 'you@email.com_',
    ctaBtn: 'Start a conversation',
    footerCopy: '© 2026',
    footerLinks: [{name:'Privacy',url:'/privacy'},{name:'Terms',url:'/terms'},{name:'Cookies',url:'/cookies'},{name:'Status',url:'/status'}],
  };

  let lang = 'en';

  function build() {
    const root = document.getElementById('root');
    if (root) root.style.cssText = 'position:absolute;inset:0;opacity:0;visibility:hidden;pointer-events:none;';
    document.getElementById('al-overlay')?.remove();
    document.getElementById('al-real-sidebar')?.remove();

    // Inject fonts + tailwind + custom CSS
    if (!document.querySelector('link[href*="Abril+Fatface"]')) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = FONTS;
      document.head.appendChild(link);
    }
    if (!document.querySelector('script[src*="tailwindcss"]')) {
      const script = document.createElement('script');
      script.src = TAILWIND_CDN;
      document.head.appendChild(script);
    }
    document.querySelectorAll('style[id^="al-style"]').forEach(s => s.remove());
    const style = document.createElement('style');
    style.id = 'al-style-figma';
    style.textContent = CUSTOM_CSS;
    document.head.appendChild(style);

    const t = EN;
    const mq = t.marquee;
    const mqRepeated = (mq + ' ').repeat(4);

    const o = document.createElement('div');
    o.id = 'al-overlay';
    o.style.cssText = 'all:initial;position:fixed;inset:0;z-index:2147483647;overflow-y:auto;overflow-x:hidden;background:#f5f0e8;';
    o.innerHTML = `
<div class="bg-[#f5f0e8] min-h-screen overflow-x-hidden">

  <!-- NAV -->
  <nav class="thick-border-b flex items-stretch justify-between">
    <div class="thick-border-r px-6 py-4 flex items-center gap-3">
      <div class="w-5 h-5 bg-[#4252ff] spin-slow" style="clip-path: polygon(50% 0%, 0% 100%, 100% 100%);"></div>
      <span class="font-display text-xl">${t.brand}</span>
    </div>
    <div class="hidden md:flex items-stretch">
      ${t.navLinks.map(l => `<a href="${l.url}" class="font-mono text-xs uppercase tracking-widest thick-border-r px-6 flex items-center hover-invert transition-all duration-100">${l.name}</a>`).join('')}
    </div>
    <a href="#cta" class="px-8 py-4 bg-[#4252ff] text-[#f5f0e8] font-mono text-xs uppercase tracking-widest flex items-center hover:bg-[#0d0d0d] transition-colors duration-100">${t.navCta} →</a>
  </nav>

  <!-- MARQUEE -->
  <div class="thick-border-b overflow-hidden py-2 bg-[#0d0d0d] text-[#f5f0e8]">
    <div class="marquee-inner font-mono text-xs tracking-widest">${mqRepeated.split('').map(c => `<span>${c === ' ' ? '&nbsp;' : c}</span>`).join('')}</div>
  </div>

  <!-- HERO -->
  <section class="grid grid-cols-1 md:grid-cols-[1fr_auto] min-h-[90vh] thick-border-b">
    <div class="flex flex-col justify-between p-8 md:p-14 thick-border-r">
      <div class="tag mb-8 self-start">${t.heroTag}</div>
      <div>
        <h1 class="font-display text-[clamp(4rem,12vw,9rem)] leading-[0.9] tracking-tight mb-8">${t.heroTitle1}<br>
          <span class="relative inline-block"><span class="relative z-10">${t.heroTitleHl}</span><span class="absolute bottom-2 left-0 right-0 h-4 bg-[#4252ff] z-0"></span></span><br>${t.heroTitle2}</h1>
        <p class="font-sans text-xl font-light max-w-lg leading-relaxed text-[#333] mb-10">${t.heroSub}</p>
        <div class="flex flex-wrap gap-0">
          <a href="#work" class="font-mono text-sm uppercase tracking-widest thick-border px-8 py-4 hover-invert transition-all duration-100 inline-block mr-3">${t.btn1}</a>
          <a href="https://github.com/alicelabs-llc" target="_blank" class="font-mono text-sm uppercase tracking-widest thick-border px-8 py-4 hover-blue transition-all duration-100 inline-block">${t.btn2}</a>
        </div>
      </div>
      <div class="mt-12 font-mono text-xs text-[#999] flex gap-6">
        <span>${t.session}<span class="cursor-blink">_</span></span>
        <span>${t.location}</span>
      </div>
    </div>
    <div class="hidden md:flex flex-col items-center justify-between py-14 px-10 w-56 gap-10">
      <div class="relative w-36 h-36 flex items-center justify-center flex-shrink-0">
        <svg viewBox="0 0 120 120" class="absolute inset-0 spin-slow w-full h-full">
          <defs><path id="circle" d="M 60,60 m -40,0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"></path></defs>
          <text class="font-mono" font-size="10" fill="#0d0d0d" letter-spacing="4"><textPath href="#circle">${t.circleText.repeat(2)}</textPath></text>
        </svg>
        <div class="font-display text-4xl text-[#4252ff]">${t.circleLetter}</div>
      </div>
      <div class="text-center">
        <div class="font-display text-7xl leading-none">${t.bigNum}</div>
        <div class="font-mono text-[10px] uppercase tracking-widest text-[#999] mt-1">${t.bigLabel}</div>
      </div>
      <div class="font-mono text-xs text-[#999] text-center leading-relaxed">${t.pgHero}</div>
    </div>
  </section>

  <!-- MANIFESTO -->
  <section class="thick-border-b bg-[#0d0d0d] text-[#f5f0e8] px-8 md:px-14 py-16 grid md:grid-cols-[auto_1fr] gap-10 items-center">
    <div class="tag border-[#f5f0e8] text-[#f5f0e8] self-start mt-1 flex-shrink-0">${t.manifestoTag}</div>
    <div>
      <p class="font-display text-[clamp(1.8rem,4vw,3.5rem)] leading-tight">${t.manifesto1}</p>
      <p class="font-display text-[clamp(1.8rem,4vw,3.5rem)] leading-tight">${t.manifesto2}</p>
      <p class="font-sans text-base font-light text-[#aaa] mt-6 max-w-xl leading-relaxed">${t.manifestoBody}</p>
    </div>
  </section>

  <!-- METRICS -->
  <section class="thick-border-b grid grid-cols-2 md:grid-cols-4">
    ${t.metrics.map((m, i) => `<div class="py-12 px-8 text-center ${i < 3 ? 'thick-border-r' : ''}">
      <div class="font-display text-[clamp(3rem,7vw,5.5rem)] leading-none">${m.num}<span class="text-[#4252ff]">${m.unit}</span></div>
      <div class="font-mono text-xs uppercase tracking-widest text-[#999] mt-3">${m.label}</div>
    </div>`).join('')}
  </section>

  <!-- LIVE SITES -->
  <section id="sites" class="thick-border-b grid md:grid-cols-[14rem_1fr]">
    <div class="thick-border-r p-8 md:p-10 flex flex-col justify-between">
      <div class="tag self-start mb-6">${t.sitesTag}</div>
      <p class="font-display text-3xl leading-tight">${t.sitesTitle1}<br>${t.sitesTitle2}</p>
      <div class="font-mono text-xs text-[#999] mt-8">${t.pgSites}</div>
    </div>
    <div>
      ${t.sites.map((s, i) => `<a href="${s.url}" target="_blank" rel="noopener" class="thick-border-b last:border-b-0 block px-8 py-6 hover-invert transition-all duration-100 group">
        <div class="flex items-center gap-6">
          <span class="font-mono text-xs text-[#4252ff] flex-shrink-0 pt-1">0${i+1}</span>
          <div class="flex-1">
            <div class="font-display text-xl md:text-2xl group-hover:text-[#4252ff] transition-colors">${s.name}</div>
            <div class="font-sans text-sm text-[#666] mt-1">${s.desc}</div>
          </div>
          <span class="font-mono text-xs text-[#999] flex-shrink-0">${s.url.replace('https://', '')}</span>
          <span class="font-mono text-lg flex-shrink-0">↗</span>
        </div>
      </a>`).join('')}
    </div>
  </section>

  <!-- PRODUCTS -->
  <section id="work" class="thick-border-b grid md:grid-cols-[14rem_1fr]">
    <div class="thick-border-r p-8 md:p-10 flex flex-col justify-between">
      <div class="tag self-start mb-6">${t.productTag}</div>
      <p class="font-display text-3xl leading-tight">${t.productTitle1}<br>${t.productTitle2}</p>
      <div class="font-mono text-xs text-[#999] mt-8">${t.pgProduct}</div>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2">
      ${t.products.map((p, i) => {
        const [num, ...rest] = p.split(' ');
        const name = rest.join(' ');
        const isRightCol = i % 2 === 1;
        const isLastRow = i >= t.products.length - 2;
        const classes = ['p-8', 'flex', 'items-center', 'gap-4', 'hover-invert', 'transition-all', 'duration-100', 'cursor-default'];
        if (!isRightCol) classes.push('thick-border-r');
        if (!isLastRow) classes.push('thick-border-b');
        return `<div class="${classes.join(' ')}"><span class="font-mono text-xs text-[#4252ff] flex-shrink-0">${num}</span><span class="font-sans font-semibold text-base">${name}</span></div>`;
      }).join('')}
    </div>
  </section>

  <!-- FAQ -->
  <section id="faq" class="thick-border-b grid md:grid-cols-[14rem_1fr]">
    <div class="thick-border-r p-8 md:p-10 flex flex-col justify-between">
      <div class="tag self-start mb-6">${t.faqTag}</div>
      <p class="font-display text-3xl leading-tight">${t.faqTitle1}<br>${t.faqTitle2}</p>
      <div class="font-mono text-xs text-[#999] mt-8">${t.pgFaq}</div>
    </div>
    <div>
      ${t.faqs.map((q, i) => `<div class="thick-border-b last:border-b-0">
        <button class="w-full text-left flex items-start gap-6 px-8 py-6 hover-invert transition-all duration-100 group" data-faq="${i}">
          <span class="font-mono text-xs text-[#4252ff] flex-shrink-0 pt-1">00${i+1}</span>
          <span class="font-display text-xl md:text-2xl flex-1">${q}</span>
          <span class="font-mono text-xl flex-shrink-0 mt-0.5 faq-icon">+</span>
        </button>
        <div class="faq-answer px-8 pb-6 pl-[calc(2rem+1.5rem+1.5rem)] font-sans text-base font-light text-[#555] leading-relaxed" style="display:none;">${t.faqAnswers[i]}</div>
      </div>`).join('')}
    </div>
  </section>

  <!-- CTA -->
  <section id="cta" class="grid md:grid-cols-2 thick-border-b min-h-[50vh]">
    <div class="bg-[#4252ff] p-10 md:p-14 thick-border-r flex flex-col justify-between">
      <div class="tag border-[#f5f0e8] text-[#f5f0e8] self-start">${t.ctaTag}</div>
      <div>
        <h2 class="font-display text-[clamp(3rem,6vw,5rem)] text-[#f5f0e8] leading-tight mb-4">${t.ctaTitle}</h2>
        <p class="font-sans text-[#f5f0e8] font-light text-lg opacity-80 leading-relaxed">${t.ctaSub}</p>
      </div>
      <div class="font-mono text-xs text-[#f5f0e8] opacity-60">${t.pgCta}</div>
    </div>
    <div class="p-10 md:p-14 bg-[#0d0d0d] flex flex-col justify-center">
      <p class="font-mono text-xs text-[#999] uppercase tracking-widest mb-6">→ ${t.ctaPlaceholder}</p>
      <a href="mailto:contact@alicelabs.site" class="self-start font-mono text-sm uppercase tracking-widest thick-border border-[#f5f0e8] text-[#f5f0e8] px-8 py-4 hover:bg-[#4252ff] hover:border-[#4252ff] transition-all duration-100">${t.ctaBtn} →</a>
    </div>
  </section>

  <!-- FOOTER -->
  <footer class="flex flex-col md:flex-row items-stretch justify-between">
    <div class="thick-border-r px-8 py-6 flex items-center gap-3">
      <div class="w-4 h-4 bg-[#4252ff]" style="clip-path: polygon(50% 0%, 0% 100%, 100% 100%);"></div>
      <span class="font-display text-lg">${t.brand}</span>
      <span class="font-mono text-xs text-[#999] ml-2">${t.footerCopy}</span>
    </div>
    <div class="flex items-stretch flex-wrap">
      ${t.footerLinks.map((l, i) => `<a href="${l.url}" class="font-mono text-xs uppercase tracking-widest px-6 py-6 hover-blue transition-all duration-100 ${i < t.footerLinks.length - 1 ? 'thick-border-r' : ''}">${l.name}</a>`).join('')}
    </div>
  </footer>

</div>
    `;

    document.body.appendChild(o);

    // FAQ accordion
    o.querySelectorAll('[data-faq]').forEach(btn => {
      btn.addEventListener('click', () => {
        const answer = btn.nextElementSibling;
        const icon = btn.querySelector('.faq-icon');
        const isOpen = answer.style.display !== 'none';
        answer.style.display = isOpen ? 'none' : 'block';
        icon.textContent = isOpen ? '+' : '−';
      });
    });

    console.log('[AliceLabs] Figma exact replica loaded');
  }

  function wait() {
    if (document.getElementById('root') || document.body.children.length > 1) setTimeout(build, 500);
    else setTimeout(wait, 200);
  }
  wait();
})();
