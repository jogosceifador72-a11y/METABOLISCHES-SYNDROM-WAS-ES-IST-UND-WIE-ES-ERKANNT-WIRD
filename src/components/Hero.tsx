import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  CHECKOUT_URL, 
  PRICE 
} from '../data/content';
import { 
  ArrowRight, 
  ShieldCheck, 
  Download, 
  Smartphone, 
  Laptop, 
  Tablet, 
  CheckCircle2, 
  Clock, 
  Heart, 
  Sparkles
} from 'lucide-react';

export const Hero: React.FC = () => {
  const [activeCoverView, setActiveCoverView] = useState<'3d' | 'flat'>('3d');

  return (
    <section id="hero" className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24">
      {/* Dynamic ambient colorful light glows */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full bg-emerald-400/25 blur-[120px] pointer-events-none animate-ambient-glow-1" />
      <div className="absolute top-1/3 left-0 w-[420px] h-[420px] rounded-full bg-teal-400/20 blur-[130px] pointer-events-none animate-ambient-glow-2" />
      <div className="absolute bottom-0 right-10 w-[380px] h-[380px] rounded-full bg-amber-300/20 blur-[110px] pointer-events-none animate-ambient-glow-3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Value Proposition & Copy (col-span-7) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6"
          >
            
            {/* Editorial Metadata / Kicker */}
            <motion.div 
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center gap-2 text-xs font-semibold text-emerald-900 tracking-wide uppercase"
            >
              <span className="flex items-center gap-1.5 bg-emerald-100/90 backdrop-blur-xs px-2.5 py-1 rounded-md border border-emerald-300/60 shadow-xs">
                <Heart className="w-3.5 h-3.5 text-emerald-700 fill-emerald-200" />
                Medizinischer Leitfaden
              </span>
              <span aria-hidden="true" className="text-emerald-400">·</span>
              <span className="text-emerald-950 font-bold">Sofort-PDF</span>
              <span aria-hidden="true" className="text-emerald-400">·</span>
              <span className="text-emerald-950 font-bold">5 Diagnosekriterien & Selbsttest</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.15 }}
              className="text-3xl sm:text-4xl lg:text-[45px] font-extrabold text-slate-900 tracking-tight leading-[1.14]" 
              style={{ textWrap: 'balance' }}
            >
              Metabolisches Syndrom: <br className="hidden sm:inline" />
              <span className="text-emerald-900 drop-shadow-xs">Was es ist und wie es erkannt wird</span>
            </motion.h1>

            {/* Subtitle / Core Promise */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.2 }}
              className="text-lg sm:text-xl text-slate-700 font-normal leading-relaxed max-w-2xl"
            >
              Verstehen Sie Ihre Werte, erkennen Sie Risiken frühzeitig und handeln Sie rechtzeitig – 
              <strong className="text-slate-900 font-semibold"> ohne Fachchinesisch</strong>, ohne Panikmache und ohne unrealistische Crash-Diäten.
            </motion.p>

            {/* High-Impact Proof Points Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.25 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2 pb-1 bg-white/70 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-emerald-200/80 shadow-md shadow-emerald-950/5"
            >
              <div className="flex items-start gap-2.5 text-sm text-slate-800">
                <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                <span><strong>5 Diagnosekriterien:</strong> Bauchumfang, Blutdruck, Blutzucker & Blutfette im Detail</span>
              </div>
              <div className="flex items-start gap-2.5 text-sm text-slate-800">
                <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                <span><strong>Praktischer Selbsttest:</strong> In 5 Minuten wissen, ob ein Arztbesuch ratsam ist</span>
              </div>
              <div className="flex items-start gap-2.5 text-sm text-slate-800">
                <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                <span><strong>Alltagstaugliche Maßnahmen:</strong> Ernährung, Bewegung, Schlaf & Stressabbau</span>
              </div>
              <div className="flex items-start gap-2.5 text-sm text-slate-800">
                <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                <span><strong>100% Digital & Mobil:</strong> Sofort nach Kauf als PDF lesbar auf jedem Gerät</span>
              </div>
            </motion.div>

            {/* Price & Checkout Action Block */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.3 }}
              className="pt-3 border-t border-emerald-200/80 space-y-4"
            >
              <div className="flex flex-wrap items-baseline gap-3">
                <span className="text-xs uppercase tracking-wider font-bold text-slate-700">
                  Einführungspreis:
                </span>
                <span className="text-4xl font-extrabold text-slate-950 tracking-tight tabular-nums">
                  {PRICE}
                </span>
                <span className="text-sm text-slate-500 line-through tabular-nums">
                  49,00 €
                </span>
                <span className="text-xs font-bold text-emerald-900 bg-emerald-100/90 px-2.5 py-0.5 rounded-md border border-emerald-300">
                  Sofortzugang per E-Mail
                </span>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <a
                  href={CHECKOUT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-emerald-800 hover:bg-emerald-700 active:bg-emerald-900 text-white font-bold text-base rounded-2xl shadow-xl shadow-emerald-900/25 transition-all hover:scale-[1.02] active:scale-[0.99] text-center whitespace-nowrap"
                >
                  <span>E-Book jetzt für {PRICE} herunterladen</span>
                  <ArrowRight className="w-5 h-5" />
                </a>

                <a
                  href="#selbsttest"
                  className="inline-flex items-center justify-center gap-2 px-5 py-4 bg-white/90 hover:bg-white text-slate-800 font-semibold text-sm rounded-2xl border border-emerald-200 shadow-sm transition-all hover:scale-[1.01]"
                >
                  <Sparkles className="w-4 h-4 text-emerald-700" />
                  <span>Kostenlosen Selbsttest starten</span>
                </a>
              </div>

              {/* Security & Guarantee Notes */}
              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-700 font-medium pt-1">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-700" />
                  Sichere SSL-Zahlung via Hotmart
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-emerald-700" />
                  Sofortige PDF-Zustellung
                </span>
                <span className="flex items-center gap-1.5">
                  <Download className="w-4 h-4 text-emerald-700" />
                  Lebenslanger Zugriff
                </span>
              </div>
            </motion.div>

          </motion.div>

          {/* Right Column: 3D Ebook Mockup & Visual Showcase (col-span-5) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.75, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col items-center"
          >
            
            {/* View Switcher Controls (Functional Tabs) */}
            <div className="inline-flex items-center p-1.5 bg-white/80 backdrop-blur-md rounded-2xl mb-4 border border-emerald-200 shadow-sm text-xs font-medium">
              <button
                onClick={() => setActiveCoverView('3d')}
                className={`px-3.5 py-1.5 rounded-xl transition-all cursor-pointer ${
                  activeCoverView === '3d'
                    ? 'bg-emerald-800 text-white shadow-xs font-semibold'
                    : 'text-slate-700 hover:text-slate-900'
                }`}
              >
                3D-Buchpräsentation
              </button>
              <button
                onClick={() => setActiveCoverView('flat')}
                className={`px-3.5 py-1.5 rounded-xl transition-all cursor-pointer ${
                  activeCoverView === 'flat'
                    ? 'bg-emerald-800 text-white shadow-xs font-semibold'
                    : 'text-slate-700 hover:text-slate-900'
                }`}
              >
                Original-Titelbild
              </button>
            </div>

            {/* Ebook Presentation Container with floating gentle animation */}
            <div className="relative w-full max-w-md animate-float-gentle">
              {activeCoverView === '3d' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-white/60 bg-white"
                >
                  <img
                    src="/src/assets/images/ebook_cover_mockup_1792176354875.jpg"
                    alt="E-Book Metabolisches Syndrom auf Schreibtisch mit Stethoskop"
                    className="w-full h-auto object-cover aspect-[3/4]"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-slate-950/85 via-slate-950/45 to-transparent text-white">
                    <p className="text-xs font-medium text-emerald-300">Medizinischer Leitfaden · PDF-Format</p>
                    <p className="text-sm font-semibold">Lesbar auf jedem Smartphone, Tablet & Laptop</p>
                  </div>
                </motion.div>
              ) : (
                /* Recreated original layout matching user's exact uploaded cover image */
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="bg-[#FCFDFB] rounded-3xl p-6 sm:p-8 border-2 border-emerald-100 shadow-2xl relative overflow-hidden aspect-[3/4] flex flex-col justify-between"
                >
                  {/* Organic background arc */}
                  <div className="absolute -left-20 -bottom-20 w-72 h-72 rounded-full bg-[#527E72]/15 pointer-events-none" />
                  
                  {/* Header of cover */}
                  <div className="flex items-center justify-between z-10 border-b border-slate-100 pb-3">
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-sm bg-[#1E3A8A] flex items-center justify-center text-white text-xs font-bold leading-none">
                        +
                      </span>
                      <span className="text-xs font-semibold text-slate-800">
                        Medizinischer Leitfaden
                      </span>
                    </div>
                    <span className="text-[11px] text-slate-500 font-medium">
                      Ein Ratgeber für ein gesünderes Leben
                    </span>
                  </div>

                  {/* Center of cover */}
                  <div className="my-auto py-6 z-10">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold mb-4">
                      <span>Medizinisch fundiert</span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                      Metabolisches<br />
                      Syndrom
                    </h2>
                    <p className="text-lg sm:text-xl font-bold text-slate-800 mt-2">
                      Was es ist und wie es erkannt wird
                    </p>
                    <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                      Ein medizinisch fundierter Leitfaden für ein gesünderes Leben. Verstehen Sie die Zusammenhänge und handeln Sie rechtzeitig.
                    </p>
                  </div>

                  {/* Footer of cover */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 z-10">
                    <span className="font-medium text-slate-700">Digitales PDF-Kompendium</span>
                    <span className="font-semibold text-emerald-700">Preis: {PRICE}</span>
                  </div>
                </motion.div>
              )}

              {/* Floating Compatibility Badge */}
              <div className="mt-4 p-3.5 bg-white/90 backdrop-blur-md rounded-2xl border border-emerald-200 shadow-md flex items-center justify-around text-slate-700">
                <div className="flex items-center gap-1.5 text-xs font-medium">
                  <Smartphone className="w-4 h-4 text-emerald-700" />
                  <span>Smartphone</span>
                </div>
                <span className="text-emerald-300">·</span>
                <div className="flex items-center gap-1.5 text-xs font-medium">
                  <Tablet className="w-4 h-4 text-emerald-700" />
                  <span>Tablet</span>
                </div>
                <span className="text-emerald-300">·</span>
                <div className="flex items-center gap-1.5 text-xs font-medium">
                  <Laptop className="w-4 h-4 text-emerald-700" />
                  <span>Computer</span>
                </div>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
