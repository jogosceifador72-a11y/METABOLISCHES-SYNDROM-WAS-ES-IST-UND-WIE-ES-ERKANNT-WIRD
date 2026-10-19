import React from 'react';
import { motion } from 'motion/react';
import { 
  FileSpreadsheet, 
  HelpCircle, 
  Flame, 
  Compass, 
  Check, 
  ArrowRight,
  Activity
} from 'lucide-react';
import { CHECKOUT_URL, PRICE } from '../data/content';

export const ProblemSolution: React.FC = () => {
  return (
    <section id="vorteile" className="py-20 lg:py-28 relative">
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
            Das Kernproblem & die Lösung
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight" style={{ textWrap: 'balance' }}>
            Schluss mit Verwirrung: Warum das Metabolische Syndrom oft zu spät erkannt wird
          </h2>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
            Das Metabolische Syndrom tut am Anfang nicht weh. Es schleicht sich über Jahre ein – bis aus grenzwertigen Laborbefunden schwerwiegende Herz-Kreislauf-Erkrankungen oder Diabetes entstehen.
          </p>
        </motion.div>

        {/* 4 Big Hurdles Grid (Was löst das E-Book?) with Staggered Scroll Animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          
          {/* Card 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className="bg-white/95 backdrop-blur-md border border-emerald-200/90 rounded-3xl p-6 flex flex-col justify-between hover:border-emerald-400 hover:shadow-xl shadow-lg shadow-emerald-950/5 transition-all"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 border border-emerald-200 flex items-center justify-center text-emerald-800 mb-5 shadow-xs">
                <FileSpreadsheet className="w-6 h-6" />
              </div>
              <div className="text-xs font-semibold text-emerald-800 uppercase tracking-wider mb-1">
                Hürde 1 überwunden
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Unklare Laborwerte
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Schluss mit kryptischen Zahlen. Sie verstehen <strong>Bauchumfang, Triglyzeride, HDL, Blutdruck und Nüchternblutzucker</strong> mit allen relevanten Grenzwerten auf einen Blick.
              </p>
            </div>
            <div className="mt-5 pt-4 border-t border-emerald-100 flex items-center gap-2 text-xs font-semibold text-emerald-800">
              <Check className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Kompakte Labortabelle inklusive</span>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className="bg-white/95 backdrop-blur-md border border-teal-200/90 rounded-3xl p-6 flex flex-col justify-between hover:border-teal-400 hover:shadow-xl shadow-lg shadow-emerald-950/5 transition-all"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-teal-100 border border-teal-200 flex items-center justify-center text-teal-800 mb-5 shadow-xs">
                <HelpCircle className="w-6 h-6" />
              </div>
              <div className="text-xs font-semibold text-teal-800 uppercase tracking-wider mb-1">
                Hürde 2 überwunden
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Unsicherheit bei der Einschätzung
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Muss ich mir Sorgen machen oder ist alles harmlos? Mit dem integrierten <strong>Selbsttest</strong> sehen Sie in wenigen Minuten, ob und wann ein Arztgespräch wirklich sinnvoll ist.
              </p>
            </div>
            <div className="mt-5 pt-4 border-t border-teal-100 flex items-center gap-2 text-xs font-semibold text-teal-800">
              <Check className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Gezielte Checkliste für den Arzt</span>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className="bg-white/95 backdrop-blur-md border border-amber-200/90 rounded-3xl p-6 flex flex-col justify-between hover:border-amber-400 hover:shadow-xl shadow-lg shadow-emerald-950/5 transition-all"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-100 border border-amber-200 flex items-center justify-center text-amber-800 mb-5 shadow-xs">
                <Flame className="w-6 h-6" />
              </div>
              <div className="text-xs font-semibold text-amber-800 uppercase tracking-wider mb-1">
                Hürde 3 überwunden
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Mythen & Crash-Diäten
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Kein Verhungern, keine Pillen-Versprechen. Sie erhalten <strong>alltagstaugliche Empfehlungen</strong> zu Ernährung, Bewegung, erholsamem Schlaf und wirksamem Stressabbau.
              </p>
            </div>
            <div className="mt-5 pt-4 border-t border-amber-100 flex items-center gap-2 text-xs font-semibold text-amber-800">
              <Check className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Nachhaltig statt Jo-Jo-Effekt</span>
            </div>
          </motion.div>

          {/* Card 4 (Highlighted Endergebnis) */}
          <motion.div 
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className="bg-gradient-to-br from-emerald-900 to-teal-950 text-white rounded-3xl p-6 flex flex-col justify-between shadow-xl shadow-emerald-950/20 border border-emerald-700/60"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-800/80 border border-emerald-600 flex items-center justify-center text-emerald-300 mb-5 shadow-inner">
                <Compass className="w-6 h-6" />
              </div>
              <div className="text-xs font-bold text-emerald-300 uppercase tracking-wider mb-1">
                Ihr Endergebnis
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                Klarer Aktionsplan ab heute
              </h3>
              <p className="text-sm text-emerald-100/90 leading-relaxed">
                Sie wissen exakt, worauf Sie achten müssen. Sie gewinnen die Kontrolle über Ihre Vitalität zurück und können schon heute die ersten wirksamen Schritte gehen.
              </p>
            </div>
            <div className="mt-5 pt-4 border-t border-emerald-800/80 flex items-center gap-2 text-xs font-semibold text-emerald-300">
              <Check className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Selbstbestimmt & beruhigt</span>
            </div>
          </motion.div>

        </div>

        {/* Feature Split with Consultation Photo and Scroll Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
          className="bg-white/90 backdrop-blur-md border border-emerald-200/90 rounded-3xl overflow-hidden p-6 sm:p-8 lg:p-10 shadow-xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6 space-y-5">
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 tracking-wide uppercase">
                <Activity className="w-4 h-4" />
                <span>Ohne Fachchinesisch · Medizinisch fundiert</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Ein Leitfaden, der Ihnen zuhört und Orientierung schenkt
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Viele Patienten verlassen die Praxis mit einem Zettel voller lateinischer Begriffe und vagen Ratschlägen wie „Nehmen Sie mal etwas ab“. Dieses E-Book schließt genau diese Lücke zwischen Arzttermin und Ihrem echten Alltag.
              </p>
              
              <ul className="space-y-3 pt-1">
                <li className="flex items-start gap-3 text-sm text-slate-700">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span><strong>Konkrete Grenzwerte:</strong> Verstehen Sie genau, ab wann Werte kritisch sind und warum Frauen andere Kriterien haben als Männer.</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-700">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span><strong>Einfache Sprache:</strong> Komplexe Stoffwechselvorgänge wie Insulinresistenz so erklärt, dass sie jeder sofort versteht.</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-700">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span><strong>Sofort anwendbar:</strong> Kein langes Warten auf Termine – beginnen Sie mit gezielten Anpassungen im eigenen Tempo.</span>
                </li>
              </ul>

              <div className="pt-2">
                <a
                  href={CHECKOUT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-bold text-emerald-800 hover:text-emerald-700 hover:underline"
                >
                  <span>Jetzt Leitfaden für {PRICE} sichern</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-2xl overflow-hidden shadow-lg border-2 border-white/80">
                <img
                  src="/src/assets/images/hero_medical_consultation_1792176355318.jpg"
                  alt="Ärztliche Beratung und Laborwertebesprechung"
                  className="w-full h-72 sm:h-80 object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};
