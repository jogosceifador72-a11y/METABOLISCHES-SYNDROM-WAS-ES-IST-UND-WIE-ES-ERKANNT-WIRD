import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CHECKOUT_URL, PRICE, FAQS } from '../data/content';
import { 
  Check, 
  ArrowRight, 
  Download, 
  ChevronDown, 
  ChevronUp,
  CreditCard,
  Lock
} from 'lucide-react';

export const PricingSection: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section id="kaufen" className="py-20 lg:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Scroll Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center space-y-4 mb-16"
        >
          <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider uppercase text-emerald-900 bg-emerald-100/90 px-3 py-1 rounded-full border border-emerald-300">
            Faires Angebot & Sofortzugang
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight" style={{ textWrap: 'balance' }}>
            Investieren Sie noch heute in Ihre langfristige Vitalität
          </h2>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
            Ein einziger unbemerkter Risikofaktor kann Jahre später kostspielige Medikamente und Behandlungen erfordern. Sichern Sie sich die verlässliche Orientierung für den Bruchteil eines Fachbuchpreises.
          </p>
        </motion.div>

        {/* High Conversion Pricing Card with Scroll Animation & Scale Effect */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.93, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-xl mx-auto bg-white/95 backdrop-blur-md rounded-3xl border-2 border-emerald-600 shadow-2xl overflow-hidden mb-20 relative"
        >
          
          {/* Header Ribbon */}
          <div className="bg-emerald-800 text-white text-center py-3 px-4 text-xs font-bold tracking-wider uppercase shadow-xs">
            Exklusiver Einführungspreis · Sofortiger PDF-Download
          </div>

          <div className="p-8 sm:p-10 space-y-6">
            
            <div className="text-center space-y-2">
              <span className="text-xs font-bold uppercase text-slate-500 tracking-wider">
                Digitales PDF-Kompendium
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                E-Book „Metabolisches Syndrom“
              </h3>
              <p className="text-xs sm:text-sm text-slate-500">
                Was es ist und wie es erkannt wird
              </p>
            </div>

            {/* Price Stack */}
            <div className="text-center py-4 bg-[#FAFDFB] border border-emerald-200 rounded-2xl shadow-xs">
              <div className="text-xs text-slate-400 line-through">
                Regulärer Wert: 49,00 €
              </div>
              <div className="flex items-center justify-center gap-1 mt-1">
                <span className="text-5xl font-black text-slate-900 tracking-tight tabular-nums">
                  {PRICE}
                </span>
              </div>
              <div className="text-xs font-semibold text-emerald-800 mt-1">
                Einmalzahlung · Keine versteckten Kosten · Lebenslanger Zugriff
              </div>
            </div>

            {/* Included Value Points */}
            <ul className="space-y-3.5 text-sm text-slate-700">
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
                <span><strong>Kompletter Leitfaden (PDF):</strong> Sofort lesbar auf Smartphone, Tablet und PC</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
                <span><strong>5 Diagnosekriterien:</strong> Exakte Grenzwerte für Männer & Frauen übersichtlich aufbereitet</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
                <span><strong>Praktischer Selbsttest:</strong> Risikoeinstufung in 5 Minuten für zu Hause</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
                <span><strong>Alltagstaugliche Maßnahmen:</strong> Ernährung, Bewegung & Stressabbau ohne Crash-Diäten</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
                <span><strong>Checkliste für das Arztgespräch:</strong> Gezielt nachhaken und Werte verstehen</span>
              </li>
            </ul>

            {/* Primary Action Button */}
            <div className="space-y-3 pt-2">
              <a
                href={CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2.5 py-4 px-6 bg-emerald-800 hover:bg-emerald-700 active:bg-emerald-900 text-white font-bold text-base rounded-2xl shadow-xl shadow-emerald-900/25 transition-all hover:scale-[1.02] active:scale-[0.99] text-center"
              >
                <span>Jetzt sicher bestellen für {PRICE}</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              <div className="flex items-center justify-center gap-4 text-[11px] text-slate-500 pt-1">
                <span className="flex items-center gap-1">
                  <Lock className="w-3.5 h-3.5 text-emerald-700" />
                  256-Bit SSL Verschlüsselung
                </span>
                <span>·</span>
                <span className="flex items-center gap-1">
                  <CreditCard className="w-3.5 h-3.5 text-emerald-700" />
                  Kreditkarte, PayPal, SEPA & mehr
                </span>
              </div>
            </div>

            {/* Delivery Notice */}
            <div className="p-3.5 bg-slate-50/90 rounded-2xl border border-slate-200 text-xs text-slate-600 flex items-center gap-3">
              <Download className="w-5 h-5 text-emerald-700 shrink-0" />
              <span>
                <strong>Sofortige Lieferung:</strong> Der Download-Link wird direkt nach Zahlungsabschluss an Ihre E-Mail-Adresse versendet.
              </span>
            </div>

          </div>
        </motion.div>

        {/* FAQ Section with Scroll Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto space-y-6"
        >
          <div className="text-center space-y-2">
            <h3 className="text-2xl font-bold text-slate-900">
              Häufig gestellte Fragen (FAQ)
            </h3>
            <p className="text-sm text-slate-600">
              Alles, was Sie vor Ihrer Bestellung wissen müssen
            </p>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="bg-white/95 backdrop-blur-md rounded-2xl border border-emerald-100 hover:border-emerald-300 overflow-hidden shadow-sm transition-all"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full text-left p-5 flex items-center justify-between gap-4 font-semibold text-slate-900 hover:text-emerald-800 transition-colors cursor-pointer"
                  >
                    <span className="text-sm sm:text-base">{faq.question}</span>
                    <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
                      {isOpen ? (
                        <ChevronUp className="w-4 h-4 text-slate-600" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-slate-600" />
                      )}
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="px-5 pb-5 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3"
                      >
                        {faq.answer}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </section>
  );
};
