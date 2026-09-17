'use client'

import { useState, useEffect } from 'react'

interface LegalSection {
  heading: string
  body: string[]
}

interface LegalTranslations {
  title: string
  tag: string
  pgNum: string
  intro: string
  sections: LegalSection[]
  ctaTitle: string
  ctaSub: string
  ctaBtn: string
  backHome: string
  tocLabel: string
  tocTitle1: string
  tocTitle2: string
  contentsWord: string
  sectionsWord: string
}

interface LegalPageProps {
  en: LegalTranslations
  es: LegalTranslations
}

export default function LegalPage({ en, es }: LegalPageProps) {
  const [lang, setLang] = useState<'en' | 'es'>('en')

  useEffect(() => {
    const saved = localStorage.getItem('al-lang') as 'en' | 'es' | null
    if (saved) setLang(saved)
  }, [])

  const switchLang = (l: 'en' | 'es') => {
    setLang(l)
    localStorage.setItem('al-lang', l)
    document.documentElement.lang = l
  }

  const t = lang === 'en' ? en : es

  return (
    <main className="w-screen min-h-screen bg-[#f5f0e8] text-[#0d0d0d] overflow-x-hidden" style={{ fontFamily: '"Source Sans 3", sans-serif' }}>
      <link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Source+Sans+3:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Courier+Prime:wght@400;700&display=swap" rel="stylesheet" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" />
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scrollbar-width: none; scroll-behavior: smooth; }
        html::-webkit-scrollbar { display: none; }
        body { cursor: crosshair; -webkit-font-smoothing: antialiased; }
        .font-display { font-family: 'Abril Fatface', serif; }
        .font-mono { font-family: 'Courier Prime', monospace; }
        ::selection { background: #4252ff; color: #f5f0e8; }
        .thick-border { border: 3px solid #0d0d0d; }
        .thick-border-b { border-bottom: 3px solid #0d0d0d; }
        .thick-border-r { border-right: 3px solid #0d0d0d; }
        .thick-border-t { border-top: 3px solid #0d0d0d; }
        .thick-border-l { border-left: 3px solid #0d0d0d; }
        .hover-invert { transition: background .12s, color .12s; }
        .hover-invert:hover { color: #f5f0e8; background: #0d0d0d; }
        .hover-blue:hover { color: #f5f0e8; background: #4252ff; }
        .tag { letter-spacing: .15em; text-transform: uppercase; border: 1.5px solid #0d0d0d; padding: 3px 8px; font-family: 'Courier Prime', monospace; font-size: 11px; display: inline-block; }
        @keyframes spin-slow { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
        .spin-slow { animation: 12s linear infinite spin-slow; }
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
        .cursor-blink { animation: 1s step-end infinite blink; }
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .marquee-anim { animation: marquee 20s linear infinite; display: inline-block; white-space: nowrap; }
        .lang-btn { border: 1.5px solid #0d0d0d; padding: 4px 10px; font-family: 'Courier Prime', monospace; font-size: 10px; font-weight: 700; cursor: pointer; transition: all .15s; background: none; color: #555; text-transform: uppercase; letter-spacing: 0.05em; }
        .lang-btn.active { background: #0d0d0d; color: #f5f0e8; }
      `}</style>

      {/* NAV */}
      <nav className="thick-border-b flex items-stretch justify-between sticky top-0 bg-[#f5f0e8] z-50">
        <div className="thick-border-r px-6 py-4 flex items-center gap-3">
          <div className="w-5 h-5 bg-[#4252ff] spin-slow" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}></div>
          <span className="font-display text-xl">AliceLabs</span>
        </div>
        <div className="hidden md:flex items-stretch">
          <a href="/" className="font-mono text-xs uppercase tracking-widest thick-border-r px-6 flex items-center hover-invert transition-all duration-100">{lang === 'en' ? 'Home' : 'Inicio'}</a>
          <a href="/legal" className="font-mono text-xs uppercase tracking-widest thick-border-r px-6 flex items-center hover-invert transition-all duration-100">{lang === 'en' ? 'Legal' : 'Legal'}</a>
          <a href="/docs" className="font-mono text-xs uppercase tracking-widest thick-border-r px-6 flex items-center hover-invert transition-all duration-100">{lang === 'en' ? 'Docs' : 'Docs'}</a>
          <a href="/agents" className="font-mono text-xs uppercase tracking-widest thick-border-r px-6 flex items-center hover-invert transition-all duration-100">{lang === 'en' ? 'Agents' : 'Agentes'}</a>
          {/* Language toggle */}
          <div className="flex items-center gap-1 px-4 thick-border-r">
            <button className={`lang-btn ${lang === 'en' ? 'active' : ''}`} onClick={() => switchLang('en')}>EN</button>
            <button className={`lang-btn ${lang === 'es' ? 'active' : ''}`} onClick={() => switchLang('es')}>ES</button>
          </div>
        </div>
        <a href="/#cta" className="px-8 py-4 bg-[#4252ff] text-[#f5f0e8] font-mono text-xs uppercase tracking-widest flex items-center hover:bg-[#0d0d0d] transition-colors duration-100">{lang === 'en' ? 'Contact →' : 'Contacto →'}</a>
      </nav>

      {/* MARQUEE */}
      <div className="thick-border-b overflow-hidden py-2 bg-[#0d0d0d] text-[#f5f0e8]">
        <div className="font-mono text-xs tracking-widest marquee-anim">
          {(lang === 'en'
            ? 'OPEN SOURCE · AI AGENT TRUST · GOVTECH · LEGALTECH · SECURITY · 21 PUBLIC REPOS · 100+ TOTAL · 7 LIVE SITES · WYOMING LLC · BUILDING IN THE OPEN · '
            : 'OPEN SOURCE · CONFIANZA IA · GOVTECH · LEGALTECH · SEGURIDAD · 21 REPOS PÚBLICOS · 100+ TOTAL · 7 SITIOS · LLC WYOMING · CONSTRUYENDO EN ABIERTO · '
          ).repeat(4)}
        </div>
      </div>

      {/* HERO HEADER */}
      <section className="thick-border-b grid md:grid-cols-[1fr_auto] min-h-[40vh]">
        <div className="flex flex-col justify-between p-8 md:p-14 thick-border-r">
          <div className="tag mb-8 self-start">{t.tag}</div>
          <div>
            <h1 className="font-display text-[clamp(3rem,8vw,6rem)] leading-[0.9] tracking-tight mb-6">{t.title}</h1>
            <p className="font-sans text-lg font-light max-w-lg leading-relaxed text-[#333]">{t.intro}</p>
          </div>
          <div className="mt-12 font-mono text-xs text-[#999] flex gap-6">
            <span>{lang === 'en' ? 'Active session: 00:01' : 'Sesión activa: 00:01'}<span className="cursor-blink">_</span></span>
            <span>Sheridan, WY · 2026</span>
          </div>
        </div>
        <div className="hidden md:flex flex-col items-center justify-between py-14 px-10 w-48 gap-10">
          <div className="relative w-24 h-24 flex items-center justify-center flex-shrink-0">
            <svg viewBox="0 0 120 120" className="absolute inset-0 spin-slow w-full h-full">
              <defs><path id="legalcircle" d="M 60,60 m -40,0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"></path></defs>
              <text className="font-mono" font-size="10" fill="#0d0d0d" letter-spacing="4"><textPath href="#legalcircle">ALICE LABS · {lang === 'en' ? 'LEGAL' : 'LEGAL'} · </textPath></text>
            </svg>
            <div className="font-display text-2xl text-[#4252ff]">§</div>
          </div>
          <div className="text-center">
            <div className="font-display text-5xl leading-none">{t.sections.length}</div>
            <div className="font-mono text-[10px] uppercase tracking-widest text-[#999] mt-1">{t.sectionsWord}</div>
          </div>
          <div className="font-mono text-xs text-[#999] text-center leading-relaxed">{t.pgNum.split('·')[0]?.trim()}</div>
        </div>
      </section>

      {/* TABLE OF CONTENTS */}
      <section className="thick-border-b grid md:grid-cols-[14rem_1fr]">
        <div className="thick-border-r p-8 md:p-10 flex flex-col justify-between">
          <div className="tag self-start mb-6">{t.tocLabel}</div>
          <p className="font-display text-3xl leading-tight">{t.tocTitle1}<br/>{t.tocTitle2}</p>
          <div className="font-mono text-xs text-[#999] mt-8">— {t.contentsWord}</div>
        </div>
        <div>
          {t.sections.map((s, i) => (
            <a key={i} href={`#sec-${i+1}`} className="thick-border-b last:border-b-0 block px-8 py-5 hover-invert transition-all duration-100 group">
              <div className="flex items-center gap-6">
                <span className="font-mono text-xs text-[#4252ff] flex-shrink-0">{String(i+1).padStart(2, '0')}</span>
                <span className="font-display text-lg group-hover:text-[#4252ff] transition-colors">{s.heading}</span>
                <span className="font-mono text-lg flex-shrink-0 ml-auto">→</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* CONTENT SECTIONS */}
      {t.sections.map((s, i) => (
        <section key={i} id={`sec-${i+1}`} className="thick-border-b grid md:grid-cols-[14rem_1fr]">
          <div className="thick-border-r p-8 md:p-10 flex flex-col justify-between">
            <div className="tag self-start mb-6">§ {String(i+1).padStart(2, '0')}</div>
            <p className="font-display text-2xl leading-tight">{s.heading}</p>
            <div className="font-mono text-xs text-[#999] mt-8">pg. {String(i+1).padStart(2, '0')}</div>
          </div>
          <div className="p-8 md:p-10">
            {s.body.map((p, j) => (
              <p key={j} className="font-sans text-base font-light leading-relaxed text-[#333] mb-4 last:mb-0">{p}</p>
            ))}
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="grid md:grid-cols-2 thick-border-b min-h-[30vh]">
        <div className="bg-[#4252ff] p-10 md:p-14 thick-border-r flex flex-col justify-between">
          <div className="tag border-[#f5f0e8] text-[#f5f0e8] self-start">{lang === 'en' ? 'Questions?' : '¿Preguntas?'}</div>
          <div>
            <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] text-[#f5f0e8] leading-tight mb-4">{t.ctaTitle}</h2>
            <p className="font-sans text-[#f5f0e8] font-light text-lg opacity-80 leading-relaxed">{t.ctaSub}</p>
          </div>
          <div className="font-mono text-xs text-[#f5f0e8] opacity-60">— {lang === 'en' ? 'LEGAL' : 'LEGAL'}</div>
        </div>
        <div className="p-10 md:p-14 bg-[#0d0d0d] flex flex-col justify-center">
          <p className="font-mono text-xs text-[#999] uppercase tracking-widest mb-6">→ {lang === 'en' ? 'Email us directly' : 'Escríbenos directamente'}</p>
          <a href="mailto:contact@alicelabs.site" className="self-start font-mono text-sm uppercase tracking-widest thick-border border-[#f5f0e8] text-[#f5f0e8] px-8 py-4 hover:bg-[#4252ff] hover:border-[#4252ff] transition-all duration-100">{t.ctaBtn} →</a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="flex flex-col md:flex-row items-stretch justify-between">
        <div className="thick-border-r px-8 py-6 flex items-center gap-3">
          <div className="w-4 h-4 bg-[#4252ff]" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}></div>
          <span className="font-display text-lg">AliceLabs</span>
          <span className="font-mono text-xs text-[#999] ml-2">© 2026</span>
        </div>
        <div className="flex items-stretch flex-wrap">
          <a href="/privacy" className="font-mono text-xs uppercase tracking-widest px-6 py-6 hover-blue transition-all duration-100 thick-border-r">{lang === 'en' ? 'Privacy' : 'Privacidad'}</a>
          <a href="/terms" className="font-mono text-xs uppercase tracking-widest px-6 py-6 hover-blue transition-all duration-100 thick-border-r">{lang === 'en' ? 'Terms' : 'Términos'}</a>
          <a href="/cookies" className="font-mono text-xs uppercase tracking-widest px-6 py-6 hover-blue transition-all duration-100 thick-border-r">{lang === 'en' ? 'Cookies' : 'Cookies'}</a>
          <a href="/legal" className="font-mono text-xs uppercase tracking-widest px-6 py-6 hover-blue transition-all duration-100">{lang === 'en' ? 'Legal' : 'Legal'}</a>
        </div>
      </footer>
    </main>
  )
}
