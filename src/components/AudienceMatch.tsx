import React from 'react';
import { motion } from 'motion/react';
import { Check, X as XIcon, AlertCircle, Sparkles, Smartphone, Mail } from 'lucide-react';
import { CHECKOUT_URL, PRICE } from '../data/content';

export const AudienceMatch: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Scroll Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center space-y-4 mb-16"
        >
          <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider uppercase text-emerald-900 bg-emerald-100/90 px-3 py-1 rounded-full border border-emerald-300">
            Ehrliche Transparenz
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight" style={{ textWrap: 'balance' }}>
            Ist dieser Leitfaden das Richtige für Ihre Situation?
          </h2>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
            Wir möchten sicherstellen, dass Sie genau die Hilfe bekommen, die Sie suchen. Prüfen Sie hier, ob unser E-Book zu Ihren Zielen passt:
          </p>
        </motion.div>

        {/* 2-Column Comparison Grid: Für Sie vs Nicht für Sie with Scroll Animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-14">
          
          {/* Card: Für Sie */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="bg-white/95 backdrop-blur-md border-2 border-emerald-500/40 rounded-3xl p-7 sm:p-9 shadow-xl flex flex-col justify-between"
          >
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold shadow-xs">
                  <Check className="w-6 h-6 stroke-[2.5]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">
                    Dieses E-Book ist für Sie, wenn:
                  </h3>
                  <p className="text-xs text-emerald-700 font-semibold">Ideale Zielgruppe</p>
                </div>
              </div>

              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-slate-700 text-sm sm:text-base leading-relaxed">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-4 h-4 stroke-[2.5]" />
                  </div>
                  <span>
                    Sie Ihr persönliches <strong>Risiko für Diabetes Typ 2 und Herz-Kreislauf-Erkrankungen</strong> ohne unnötige Komplikationen verstehen möchten.
                  </span>
                </li>

                <li className="flex items-start gap-3 text-slate-700 text-sm sm:text-base leading-relaxed">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-4 h-4 stroke-[2.5]" />
                  </div>
                  <span>
                    Sie <strong>Einsteiger, Betroffener oder Angehöriger</strong> sind und klare, einfühlsame Orientierung im Gesundheitsdschungel brauchen.
                  </span>
                </li>

                <li className="flex items-start gap-3 text-slate-700 text-sm sm:text-base leading-relaxed">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-4 h-4 stroke-[2.5]" />
                  </div>
                  <span>
                    Sie eine <strong>praxisnahe, medizinisch fundierte Anleitung</strong> suchen, die Sie sofort ohne Vorwissen anwenden können.
                  </span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-5 border-t border-emerald-100 text-xs font-semibold text-emerald-800 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span>Gezieltes Wissen, das Ihnen Sicherheit schenkt.</span>
            </div>
          </motion.div>

          {/* Card: Nicht für Sie */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="bg-white/80 backdrop-blur-md border border-slate-300 rounded-3xl p-7 sm:p-9 shadow-lg flex flex-col justify-between"
          >
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-200 text-slate-700 flex items-center justify-center font-bold shadow-xs">
                  <XIcon className="w-6 h-6 stroke-[2.5]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">
                    Nicht für Sie, wenn:
                  </h3>
                  <p className="text-xs text-slate-500 font-semibold">Bitte nicht erwerben</p>
                </div>
              </div>

              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-slate-600 text-sm sm:text-base leading-relaxed">
                  <div className="w-6 h-6 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center shrink-0 mt-0.5">
                    <XIcon className="w-4 h-4 stroke-[2.5]" />
                  </div>
                  <span>
                    Sie <strong>„Wunderheilungen“</strong> oder magische Pulver erwarten, ohne selbst etwas an Ihren täglichen Gewohnheiten zu verändern.
                  </span>
                </li>

                <li className="flex items-start gap-3 text-slate-600 text-sm sm:text-base leading-relaxed">
                  <div className="w-6 h-6 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center shrink-0 mt-0.5">
                    <XIcon className="w-4 h-4 stroke-[2.5]" />
                  </div>
                  <span>
                    Sie <strong>lange, rein akademische Abhandlungen</strong> und unverständliche Monografien einem kompakten, handlungsorientierten Leitfaden vorziehen.
                  </span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-5 border-t border-slate-200 text-xs text-slate-500">
              Kompakte Klarheit statt theoretischer Überfrachtung.
            </div>
          </motion.div>

        </div>

        {/* Sofortzugang Information Strip with Scroll Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto bg-gradient-to-r from-slate-900 via-emerald-950 to-slate-900 text-white rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl border border-emerald-800/40"
        >
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs uppercase tracking-wider font-bold text-emerald-400">
              100% Digitaler Sofortzugang
            </span>
            <h4 className="text-xl font-bold text-white">
              Direkt nach dem Kauf in Ihrem E-Mail-Postfach
            </h4>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs text-slate-300 pt-1">
              <span className="flex items-center gap-1.5">
                <Smartphone className="w-4 h-4 text-emerald-400" />
                Format: PDF (Smartphone, Tablet & PC)
              </span>
              <span>·</span>
              <span className="flex items-center gap-1.5">
                <Mail className="w-4 h-4 text-emerald-400" />
                Lieferung per E-Mail nach Zahlungsbestätigung
              </span>
            </div>
          </div>

          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm rounded-xl transition-all whitespace-nowrap active:scale-98 shadow-md"
          >
            Für {PRICE} sichern
          </a>
        </motion.div>

        {/* Medical Advisory Box */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-4xl mx-auto mt-6 p-4 rounded-2xl bg-amber-50/90 backdrop-blur-md border border-amber-300 flex items-start gap-3 text-xs text-amber-950 shadow-sm"
        >
          <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
          <p>
            <strong>Wichtiger medizinischer Hinweis:</strong> Dieses E-Book dient ausschließlich der Information, gesundheitlichen Allgemeinbildung und Orientierung. Es ersetzt keinesfalls eine persönliche ärztliche Beratung, Diagnose oder Behandlung durch approbierte Mediziner.
          </p>
        </motion.div>

      </div>
    </section>
  );
};
