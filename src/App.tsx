import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemSolution } from './components/ProblemSolution';
import { DiagnosticCriteria } from './components/DiagnosticCriteria';
import { SelfAssessmentTool } from './components/SelfAssessmentTool';
import { BookContentOverview } from './components/BookContentOverview';
import { AudienceMatch } from './components/AudienceMatch';
import { PricingSection } from './components/PricingSection';
import { Footer } from './components/Footer';
import { PurchaseNotification } from './components/PurchaseNotification';
import { BioPortalModal } from './components/BioPortalModal';
import { CHECKOUT_URL, PRICE } from './data/content';
import { ArrowUpRight, Share2, BookOpen } from 'lucide-react';

export default function App() {
  const [isBioModalOpen, setIsBioModalOpen] = useState(false);
  const [showStickyBar, setShowStickyBar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 450) {
        setShowStickyBar(true);
      } else {
        setShowStickyBar(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen text-slate-900 flex flex-col relative selection:bg-emerald-200 selection:text-emerald-950 overflow-x-hidden">
      
      {/* Dynamic Engaging & Professional Background (Alive with attractive medical emerald/teal/amber colors) */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        {/* Base multi-stop rich gradient: vibrant medical sage, emerald & cyan blend */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#D8EFE8] via-[#C8ECE3] via-[#B8E4D9] via-[#CEEBE3] to-[#E0F3EE]" />

        {/* Floating animated luminous chromatic orbs */}
        <div className="absolute -top-32 -left-32 w-[650px] h-[650px] rounded-full bg-emerald-400/40 blur-[130px] animate-ambient-glow-1" />
        <div className="absolute top-1/4 -right-28 w-[600px] h-[600px] rounded-full bg-teal-400/35 blur-[140px] animate-ambient-glow-2" />
        <div className="absolute top-1/2 left-1/4 w-[550px] h-[550px] rounded-full bg-amber-300/25 blur-[120px] animate-ambient-glow-3" />
        <div className="absolute top-3/4 -left-20 w-[600px] h-[600px] rounded-full bg-emerald-500/30 blur-[150px] animate-ambient-glow-1" />
        <div className="absolute bottom-10 right-1/4 w-[580px] h-[580px] rounded-full bg-cyan-400/25 blur-[135px] animate-ambient-glow-2" />

        {/* Subtle geometric dot pattern overlay for depth & texture */}
        <div className="absolute inset-0 bg-grid-pattern opacity-40 mix-blend-multiply" />

        {/* Subtle decorative medical pulse / wave curves */}
        <svg 
          className="absolute inset-0 w-full h-full opacity-15 stroke-emerald-800/30 fill-none pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M-100,200 C300,350 600,100 1200,250 C1600,350 1900,150 2200,300" strokeWidth="2" strokeDasharray="6 6" />
          <path d="M-100,850 C400,700 800,950 1400,800 C1800,700 2000,900 2400,850" strokeWidth="1.5" />
          <path d="M-100,1500 C350,1650 750,1400 1300,1550 C1750,1680 2050,1450 2400,1600" strokeWidth="2" strokeDasharray="4 8" />
          <path d="M-100,2200 C450,2100 850,2300 1450,2150 C1850,2050 2150,2250 2500,2200" strokeWidth="1.5" />
          <path d="M-100,2900 C350,3050 750,2850 1350,3000 C1750,3100 2050,2900 2400,3050" strokeWidth="2" strokeDasharray="6 6" />
        </svg>
      </div>

      {/* Top Navigation */}
      <Navbar onOpenBio={() => setIsBioModalOpen(true)} />

      {/* Main Content Flow */}
      <main className="flex-1 relative z-10">
        <Hero />
        <ProblemSolution />
        <DiagnosticCriteria />
        <SelfAssessmentTool />
        <BookContentOverview />
        <AudienceMatch />
        <PricingSection />
      </main>

      {/* Footer with Contact Buttons & Legal Disclaimer */}
      <Footer onOpenBio={() => setIsBioModalOpen(true)} />

      {/* Bottom-Left Live Purchase Confirmed Notification */}
      <PurchaseNotification />

      {/* Centralized Bio Portal Modal */}
      <BioPortalModal 
        isOpen={isBioModalOpen} 
        onClose={() => setIsBioModalOpen(false)} 
      />

      {/* Floating Bio Hub Trigger Pill (Bottom Right) */}
      <aside aria-label="Social Kanäle & Profil" className="fixed bottom-5 right-5 z-40 hidden sm:block">
        <button
          onClick={() => setIsBioModalOpen(true)}
          className="flex items-center gap-2.5 px-4 py-3 bg-slate-900/90 hover:bg-slate-900 text-white rounded-2xl shadow-xl shadow-slate-950/20 border border-slate-700/80 backdrop-blur-md text-xs font-semibold transition-all hover:scale-105 active:scale-95 group cursor-pointer"
        >
          <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center text-[10px] text-slate-950 font-bold">
            KZ
          </div>
          <span>Karin Zeit · Kanäle</span>
          <Share2 className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-400 transition-colors" />
        </button>
      </aside>

      {/* Mobile Sticky Action Bar (Strictly capped under 15% viewport height) */}
      {showStickyBar && (
        <aside aria-label="Mobiles Schnell-Checkout" className="fixed bottom-0 inset-x-0 z-30 sm:hidden bg-white/95 backdrop-blur-md border-t border-emerald-200 px-4 py-2.5 shadow-2xl flex items-center justify-between gap-3">
          <div className="min-w-0">
            <div className="text-[11px] font-bold text-slate-900 truncate">
              Metabolisches Syndrom
            </div>
            <div className="text-xs font-extrabold text-emerald-800 tabular-nums">
              {PRICE} <span className="text-[10px] font-normal text-slate-400">PDF</span>
            </div>
          </div>

          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2.5 bg-emerald-800 hover:bg-emerald-700 active:bg-emerald-900 text-white font-bold text-xs rounded-xl shadow-md whitespace-nowrap"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Jetzt kaufen</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </aside>
      )}

    </div>
  );
}
