import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  ExternalLink, 
  Check, 
  Copy, 
  Share2, 
  ShieldCheck, 
  Instagram, 
  Youtube, 
  Video, 
  AtSign, 
  Facebook, 
  PlaySquare, 
  HeartHandshake,
  BookOpen
} from 'lucide-react';
import { SOCIAL_LINKS, CHECKOUT_URL, PRICE } from '../data/content';

interface BioPortalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const getSocialIcon = (id: string) => {
  switch (id) {
    case 'instagram':
      return <Instagram className="w-5 h-5 text-pink-600" />;
    case 'youtube':
      return <Youtube className="w-5 h-5 text-red-600" />;
    case 'tiktok':
      return <Video className="w-5 h-5 text-slate-800" />;
    case 'threads':
      return <AtSign className="w-5 h-5 text-slate-900" />;
    case 'facebook':
    case 'fb_page':
      return <Facebook className="w-5 h-5 text-blue-600" />;
    case 'kwai':
      return <PlaySquare className="w-5 h-5 text-orange-500" />;
    default:
      return <ExternalLink className="w-5 h-5 text-slate-700" />;
  }
};

export const BioPortalModal: React.FC<BioPortalModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", stiffness: 350, damping: 28 }}
            className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden z-10 my-8"
          >
            {/* Header / Banner */}
            <div className="bg-gradient-to-br from-emerald-800 via-teal-900 to-slate-900 px-6 pt-7 pb-6 text-white relative">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-slate-300 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
                aria-label="Schließen"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full ring-4 ring-white/20 bg-emerald-600/50 flex items-center justify-center shadow-lg mb-3">
                  <div className="w-18 h-18 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center text-white text-2xl font-bold">
                    KZ
                  </div>
                </div>

                <div className="flex items-center gap-1.5">
                  <h3 className="text-xl font-bold tracking-tight text-white">Karin Zeit</h3>
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                </div>
                <p className="text-xs text-emerald-200/90 mt-1 max-w-xs">
                  Gesundheitsaufklärung · Prävention · Metabolisches Syndrom
                </p>

                {/* Quick Action Pills */}
                <div className="flex items-center gap-2 mt-4">
                  <a
                    href={CHECKOUT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-xs rounded-xl shadow-md transition-all active:scale-95"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    Offizielles E-Book ({PRICE})
                  </a>
                  <button
                    onClick={handleCopyLink}
                    className="inline-flex items-center gap-1.5 px-3 py-2 bg-white/10 hover:bg-white/20 text-white font-medium text-xs rounded-xl transition-all"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    {copied ? "Kopiert!" : "Seite teilen"}
                  </button>
                </div>
              </div>
            </div>

            {/* Social List */}
            <div className="p-5 max-h-[60vh] overflow-y-auto space-y-2.5">
              <div className="text-[11px] font-semibold tracking-wider uppercase text-slate-400 px-1">
                Offizielle Kanäle & Community
              </div>

              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 bg-slate-50/80 hover:bg-emerald-50/60 border border-slate-200/80 hover:border-emerald-200 rounded-2xl transition-all group shadow-xs"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                      {getSocialIcon(link.id)}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-sm text-slate-800 group-hover:text-emerald-900 transition-colors">
                          {link.name}
                        </span>
                        {link.badge && (
                          <span className="text-[10px] bg-slate-200/70 text-slate-600 px-2 py-0.5 rounded-full font-medium">
                            {link.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-500 font-medium">{link.subtitle}</p>
                    </div>
                  </div>

                  <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-400 group-hover:text-emerald-600 group-hover:border-emerald-300 transition-all">
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </a>
              ))}
            </div>

            {/* Footer Notice */}
            <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span className="flex items-center gap-1.5">
                <HeartHandshake className="w-4 h-4 text-emerald-600" />
                Vernetzen & Fragen stellen
              </span>
              <button
                onClick={onClose}
                className="text-xs font-semibold text-slate-700 hover:text-slate-900"
              >
                Fertig
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
