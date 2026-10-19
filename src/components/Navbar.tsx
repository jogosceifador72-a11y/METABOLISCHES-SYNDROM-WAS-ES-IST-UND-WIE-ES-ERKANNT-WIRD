import React, { useState } from 'react';
import { CHECKOUT_URL, PRICE } from '../data/content';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenBio: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBio }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-emerald-950 text-emerald-100 text-[11px] sm:text-xs py-2 px-4 text-center font-medium border-b border-emerald-800/40 flex items-center justify-center gap-2">
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
        <span>100% Sicherer Hotmart-Checkout · Sofortiger PDF-Download per E-Mail nach Zahlungsbestätigung</span>
      </div>

      <header className="sticky top-0 z-30 bg-slate-900/80 backdrop-blur-md border-b border-white/10 transition-all text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark (Single text element) */}
          <a
            href="#hero"
            className="flex items-center gap-2.5 text-white hover:text-emerald-300 transition-colors whitespace-nowrap shrink-0 font-bold text-lg tracking-tight"
          >
            <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center text-white shadow-xs">
              <span className="text-xl font-black leading-none mb-0.5">+</span>
            </div>
            <span>Medizinischer Leitfaden</span>
          </a>

          {/* Zone 2: 4-5 Clean single-line text navigation links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-200">
            <a href="#vorteile" className="hover:text-emerald-300 transition-colors whitespace-nowrap shrink-0">
              Vorteile
            </a>
            <a href="#kriterien" className="hover:text-emerald-300 transition-colors whitespace-nowrap shrink-0">
              5 Diagnosekriterien
            </a>
            <a href="#selbsttest" className="hover:text-emerald-300 transition-colors whitespace-nowrap shrink-0">
              Interaktiver Selbsttest
            </a>
            <a href="#inhalte" className="hover:text-emerald-300 transition-colors whitespace-nowrap shrink-0">
              Buchinhalte
            </a>
            <button
              onClick={onOpenBio}
              className="text-slate-200 hover:text-emerald-300 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              Autorin & Social Hub
            </button>
          </nav>

          {/* Zone 3: 1 Primary Action */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-500 active:scale-98 rounded-xl shadow-md transition-all whitespace-nowrap shrink-0"
            >
              <span>Jetzt sichern · {PRICE}</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-200 hover:text-white rounded-lg hover:bg-white/10"
              aria-label="Menü öffnen"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-white/10 bg-slate-900/95 backdrop-blur-md px-5 py-4 space-y-3 shadow-2xl">
            <a
              href="#vorteile"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-slate-200 hover:text-emerald-300 py-1"
            >
              Vorteile & Nutzen
            </a>
            <a
              href="#kriterien"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-slate-200 hover:text-emerald-300 py-1"
            >
              5 Diagnosekriterien
            </a>
            <a
              href="#selbsttest"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-slate-200 hover:text-emerald-300 py-1"
            >
              Interaktiver Selbsttest
            </a>
            <a
              href="#inhalte"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-slate-200 hover:text-emerald-300 py-1"
            >
              Kapitelübersicht
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBio();
              }}
              className="block w-full text-left text-sm font-medium text-slate-200 hover:text-emerald-300 py-1"
            >
              Autorin & Social Hub
            </button>
            <div className="pt-2 border-t border-white/10">
              <a
                href={CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-emerald-600 text-white font-semibold rounded-xl text-sm"
              >
                <span>E-Book kaufen · {PRICE}</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
