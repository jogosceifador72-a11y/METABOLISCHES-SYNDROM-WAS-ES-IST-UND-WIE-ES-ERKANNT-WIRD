import React from 'react';
import { motion } from 'motion/react';
import { CHAPTERS, CHECKOUT_URL, PRICE } from '../data/content';
import { BookOpen, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';

export const BookContentOverview: React.FC = () => {
  return (
    <section id="inhalte" className="py-20 lg:py-28 relative">
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
            Aufbau & Kapitelübersicht
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight" style={{ textWrap: 'balance' }}>
            Was Sie im E-Book „Metabolisches Syndrom“ erwartet
          </h2>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
            Kompakt, praxisnah und auf den Punkt: Jedes Kapitel liefert Ihnen sofort anwendbares Wissen, ohne zeitraubende medizinische Monologe.
          </p>
        </motion.div>

        {/* Chapters Grid with Staggered Scroll Animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {CHAPTERS.map((chap, idx) => (
            <motion.div
              key={chap.number}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="bg-white/95 backdrop-blur-md border border-emerald-200/90 hover:border-emerald-400 rounded-3xl p-6 shadow-lg shadow-emerald-950/5 hover:shadow-xl transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-black text-emerald-900 bg-emerald-100 border border-emerald-300 px-3 py-1 rounded-lg">
                    Kapitel {chap.number}
                  </span>
                  <BookOpen className="w-4 h-4 text-emerald-400 group-hover:text-emerald-700 transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-emerald-950 transition-colors">
                  {chap.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {chap.description}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-emerald-100 flex items-center gap-1.5 text-xs text-emerald-800 font-semibold">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                <span>Kompakt & sofort umsetzbar</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Visual Callout: Lifestyle Photo & Key Takeaways with Scroll Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
          className="bg-white/90 backdrop-blur-md rounded-3xl border-2 border-white/80 p-6 sm:p-8 lg:p-10 shadow-2xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6 rounded-2xl overflow-hidden shadow-lg border-2 border-white/80">
              <img
                src="/src/assets/images/healthy_lifestyle_habits_1792176355158.jpg"
                alt="Gesunde Ernährung, Bewegung und Vitalität"
                className="w-full h-72 sm:h-80 object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="lg:col-span-6 space-y-5">
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 tracking-wide uppercase">
                <Sparkles className="w-4 h-4" />
                <span>Lebensstil im eigenen Tempo verbessern</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Keine Radikalkuren, sondern nachhaltige Vitalität
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Der menschliche Stoffwechsel reagiert erstaunlich positiv auf kleine, kontinuierliche Anpassungen. Das E-Book zeigt Ihnen, wie Sie mit minimalen Stellschrauben maximale Effekte auf Blutzucker, Bauchumfang und Blutdruck erzielen.
              </p>

              <div className="space-y-2.5 pt-1">
                <div className="flex items-center gap-2.5 text-sm text-slate-700">
                  <div className="w-2 h-2 rounded-full bg-emerald-600 shrink-0" />
                  <span><strong>Ernährung:</strong> Wie Sie Heißhunger durch smarte Nährstoffkombinationen stoppen</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-slate-700">
                  <div className="w-2 h-2 rounded-full bg-emerald-600 shrink-0" />
                  <span><strong>Bewegung:</strong> Die magischen 15-Minuten-Spaziergänge nach Mahlzeiten</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-slate-700">
                  <div className="w-2 h-2 rounded-full bg-emerald-600 shrink-0" />
                  <span><strong>Stress & Schlaf:</strong> Warum Cortisol der heimliche Treiber von Bauchfett ist</span>
                </div>
              </div>

              <div className="pt-3">
                <a
                  href={CHECKOUT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-800 hover:bg-emerald-700 text-white font-bold text-sm rounded-xl shadow-md transition-all active:scale-98"
                >
                  <span>E-Book für {PRICE} herunterladen</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};
