import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, ShieldCheck, X } from 'lucide-react';

const RECENT_TIMES = [
  "Vor 2 Minuten",
  "Vor 4 Minuten",
  "Vor 7 Minuten",
  "Vor 11 Minuten",
  "Vor 15 Minuten",
  "Vor wenigen Augenblicken"
];

const LOCATIONS = [
  "Deutschland",
  "Österreich",
  "Schweiz",
  "Online-Bestellung"
];

export const PurchaseNotification: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (dismissed) return;

    // Initial appearance after 3.5 seconds
    const initialTimer = setTimeout(() => {
      setVisible(true);
    }, 3500);

    return () => clearTimeout(initialTimer);
  }, [dismissed]);

  useEffect(() => {
    if (dismissed || !visible) return;

    // Hide after 5 seconds
    const hideTimer = setTimeout(() => {
      setVisible(false);
    }, 5200);

    return () => clearTimeout(hideTimer);
  }, [visible, dismissed]);

  useEffect(() => {
    if (dismissed || visible) return;

    // Next notification after 6 to 9 seconds
    const intervalTime = 6000 + Math.random() * 4000;
    const nextTimer = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % RECENT_TIMES.length);
      setVisible(true);
    }, intervalTime);

    return () => clearTimeout(nextTimer);
  }, [visible, dismissed]);

  if (dismissed) return null;

  const currentTime = RECENT_TIMES[currentIndex];
  const location = LOCATIONS[currentIndex % LOCATIONS.length];

  return (
    <div className="fixed bottom-5 left-5 z-40 max-w-sm pointer-events-none">
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            className="pointer-events-auto bg-white/95 backdrop-blur-md border border-emerald-100 shadow-xl shadow-slate-900/8 rounded-2xl p-3.5 flex items-start gap-3.5"
          >
            <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0 text-emerald-600 mt-0.5">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 stroke-[2.2]" />
            </div>

            <div className="flex-1 pr-2">
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-bold text-slate-900 uppercase tracking-wide">
                  Compra confirmada
                </span>
                <span className="text-[11px] text-slate-400">·</span>
                <span className="text-[11px] font-medium text-emerald-700 bg-emerald-50 px-1.5 py-0.2 rounded">
                  Kauf bestätigt
                </span>
              </div>
              <p className="text-xs text-slate-600 mt-0.5 line-clamp-1">
                E-Book „Metabolisches Syndrom“
              </p>
              <div className="flex items-center gap-2 mt-1 text-[11px] text-slate-400 font-medium">
                <span className="tabular-nums">{currentTime}</span>
                <span>·</span>
                <span className="flex items-center gap-1 text-slate-500">
                  <ShieldCheck className="w-3 h-3 text-emerald-500 inline" />
                  {location}
                </span>
              </div>
            </div>

            <button
              onClick={() => setDismissed(true)}
              className="text-slate-300 hover:text-slate-500 transition-colors p-1 -mr-1 -mt-1 rounded-lg hover:bg-slate-100"
              aria-label="Benachrichtigung schließen"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
