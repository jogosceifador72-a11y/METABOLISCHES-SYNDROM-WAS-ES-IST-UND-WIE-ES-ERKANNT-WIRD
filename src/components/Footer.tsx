import React from 'react';
import { motion } from 'motion/react';
import { SOCIAL_LINKS, CHECKOUT_URL, PRICE } from '../data/content';
import { 
  Instagram, 
  Youtube, 
  Video, 
  AtSign, 
  Facebook, 
  PlaySquare, 
  ExternalLink, 
  ArrowUpRight, 
  ShieldCheck, 
  Heart,
  Share2
} from 'lucide-react';

interface FooterProps {
  onOpenBio: () => void;
}

const renderSocialIcon = (id: string) => {
  switch (id) {
    case 'instagram':
      return <Instagram className="w-5 h-5 text-pink-500" />;
    case 'youtube':
      return <Youtube className="w-5 h-5 text-red-500" />;
    case 'tiktok':
      return <Video className="w-5 h-5 text-teal-400" />;
    case 'threads':
      return <AtSign className="w-5 h-5 text-white" />;
    case 'facebook':
    case 'fb_page':
      return <Facebook className="w-5 h-5 text-blue-400" />;
    case 'kwai':
      return <PlaySquare className="w-5 h-5 text-amber-400" />;
    default:
      return <ExternalLink className="w-5 h-5 text-emerald-400" />;
  }
};

export const Footer: React.FC<FooterProps> = ({ onOpenBio }) => {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Creator & Social Links Hub in Button Format with Scroll Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-10 mb-14 shadow-xl"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-slate-800">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400 mb-1">
                <Heart className="w-3.5 h-3.5 fill-emerald-400" />
                <span>Karin Zeit · Offizielle Kanäle & Community</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Vernetzen Sie sich mit uns auf Social Media
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-xl">
                Folgen Sie unseren täglichen Gesundheitstipps, Videos und Neuigkeiten rund um Stoffwechsel und Prävention auf allen Plattformen.
              </p>
            </div>

            <button
              onClick={onOpenBio}
              className="inline-flex items-center gap-2 px-5 py-3 bg-emerald-600 hover:bg-emerald-500 text-slate-950 font-bold text-xs sm:text-sm rounded-xl transition-all shadow-md shrink-0 cursor-pointer"
            >
              <Share2 className="w-4 h-4" />
              <span>Bio-Portal öffnen</span>
            </button>
          </div>

          {/* Social Channels rendered as Interactive Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3.5 pt-8">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700/80 hover:border-emerald-500/50 rounded-2xl transition-all group shadow-xs active:scale-[0.98]"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-slate-900/90 border border-slate-700 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    {renderSocialIcon(link.id)}
                  </div>
                  <div className="truncate">
                    <div className="font-semibold text-sm text-white group-hover:text-emerald-300 transition-colors truncate">
                      {link.name}
                    </div>
                    <div className="text-xs text-slate-400 truncate">
                      {link.subtitle}
                    </div>
                  </div>
                </div>

                <div className="w-7 h-7 rounded-lg bg-slate-900/80 flex items-center justify-center text-slate-400 group-hover:text-emerald-400 shrink-0 ml-2">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </a>
            ))}

            {/* Quick Link to Checkout */}
            <a
              href={CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3.5 bg-emerald-950/60 hover:bg-emerald-900/70 border border-emerald-700/50 rounded-2xl transition-all group shadow-xs active:scale-[0.98]"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-800 flex items-center justify-center shrink-0 text-white font-bold text-sm">
                  PDF
                </div>
                <div>
                  <div className="font-bold text-sm text-emerald-300">
                    E-Book kaufen
                  </div>
                  <div className="text-xs text-emerald-400/80 font-medium">
                    Nur {PRICE} via Hotmart
                  </div>
                </div>
              </div>
              <div className="w-7 h-7 rounded-lg bg-emerald-800/60 flex items-center justify-center text-emerald-300 shrink-0 ml-2">
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </a>
          </div>
        </motion.div>

        {/* Main Footer Links & Information */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-800 text-xs">
          
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2 text-white font-bold text-base">
              <span className="w-6 h-6 rounded bg-emerald-700 flex items-center justify-center text-white text-sm font-bold">
                +
              </span>
              <span>Medizinischer Leitfaden</span>
            </div>
            <p className="text-slate-400 leading-relaxed max-w-sm">
              E-Book „Metabolisches Syndrom: Was es ist und wie es erkannt wird“. Ein wissenschaftlich orientierter, praktischer Ratgeber für einen vitalen Alltag und fundierte Gesundheitsentscheidungen.
            </p>
            <div className="text-slate-500 pt-1">
              Verkauf und Rechnungsabwicklung sicher über Hotmart B.V.
            </div>
          </div>

          <div className="md:col-span-3 space-y-2">
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px]">
              Schnellnavigation
            </h4>
            <ul className="space-y-1.5 text-slate-400">
              <li>
                <a href="#hero" className="hover:text-emerald-400 transition-colors">Startseite & Übersicht</a>
              </li>
              <li>
                <a href="#vorteile" className="hover:text-emerald-400 transition-colors">Was das E-Book löst</a>
              </li>
              <li>
                <a href="#kriterien" className="hover:text-emerald-400 transition-colors">5 Diagnosekriterien</a>
              </li>
              <li>
                <a href="#selbsttest" className="hover:text-emerald-400 transition-colors">Interaktiver Selbsttest</a>
              </li>
              <li>
                <a href="#inhalte" className="hover:text-emerald-400 transition-colors">Kapitelübersicht</a>
              </li>
              <li>
                <a href="#kaufen" className="hover:text-emerald-400 transition-colors">Bestellung ({PRICE})</a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4 space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px]">
              Sicherheit & Datenschutz
            </h4>
            <p className="text-slate-400 leading-relaxed">
              Ihre Zahlung erfolgt über zertifizierte, SSL-verschlüsselte Server von Hotmart. Ihre E-Mail-Adresse wird ausschließlich zur Übermittlung des digitalen PDF-Downloads und Kaufbestätigung genutzt.
            </p>
            <div className="flex items-center gap-2 text-emerald-400 font-semibold">
              <ShieldCheck className="w-4 h-4" />
              <span>Verifizierte digitale Auslieferung</span>
            </div>
          </div>

        </div>

        {/* Medical & Legal Disclaimer */}
        <div className="pt-8 text-[11px] text-slate-500 space-y-3 leading-relaxed">
          <p>
            <strong>Rechtlicher & Medizinischer Hinweis:</strong> Die in diesem Werk zur Verfügung gestellten Informationen, Tabellen und Ratschläge dienen ausschließlich der allgemeinen Wissensvermittlung und Gesundheitsaufklärung. Sie stellen keine medizinische Diagnose, Heilaussage oder therapeutische Empfehlung dar und können das persönliche Gespräch sowie die fachkundige Untersuchung durch eine Ärztin oder einen Arzt keinesfalls ersetzen. Nehmen Sie bei Verdacht auf Erkrankungen oder bestehenden Symptomen stets ärztlichen Rat in Anspruch.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-3 border-t border-slate-900 text-slate-500">
            <span>© {new Date().getFullYear()} Karin Zeit · Alle Rechte vorbehalten.</span>
            <span>Format: Digitales PDF-Dokument · Sofortiger E-Mail-Zugang</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
