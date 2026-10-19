import React, { useState } from 'react';
import { motion } from 'motion/react';
import { DIAGNOSTIC_CRITERIA, CHECKOUT_URL, PRICE } from '../data/content';
import { 
  ArrowRight, 
  Info,
  CheckCircle2
} from 'lucide-react';

export const DiagnosticCriteria: React.FC = () => {
  const [selectedGender, setSelectedGender] = useState<'men' | 'women'>('women');
  const [activeCriterionId, setActiveCriterionId] = useState<string>('waist');

  const currentCriterion = DIAGNOSTIC_CRITERIA.find(c => c.id === activeCriterionId) || DIAGNOSTIC_CRITERIA[0];

  return (
    <section id="kriterien" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading with Scroll Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center space-y-4 mb-14"
        >
          <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider uppercase text-emerald-900 bg-emerald-100/90 px-3 py-1 rounded-full border border-emerald-300">
            Klinisches Grundwissen leicht erklärt
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight" style={{ textWrap: 'balance' }}>
            Die 5 offiziellen Diagnosekriterien des Metabolischen Syndroms
          </h2>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
            Laut medizinischen Leitlinien (u.a. WHO & IDF) liegt ein Metabolisches Syndrom vor, wenn 
            <strong className="text-slate-900 font-semibold"> 3 von 5 Kriterien</strong> zutreffen. Wählen Sie Ihr Geschlecht, um die genauen Grenzwerte zu sehen.
          </p>

          {/* Interactive Gender Segmented Control */}
          <div className="inline-flex items-center p-1.5 bg-white/90 backdrop-blur-md rounded-2xl border border-emerald-200 shadow-md">
            <button
              onClick={() => setSelectedGender('women')}
              className={`px-5 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all cursor-pointer ${
                selectedGender === 'women'
                  ? 'bg-emerald-800 text-white shadow-xs'
                  : 'text-slate-700 hover:text-slate-900'
              }`}
            >
              Grenzwerte für Frauen
            </button>
            <button
              onClick={() => setSelectedGender('men')}
              className={`px-5 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all cursor-pointer ${
                selectedGender === 'men'
                  ? 'bg-emerald-800 text-white shadow-xs'
                  : 'text-slate-700 hover:text-slate-900'
              }`}
            >
              Grenzwerte für Männer
            </button>
          </div>
        </motion.div>

        {/* 5 Criteria Interactive Matrix with Scroll Animation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Left Column: Criteria Selector Tabs (col-span-5) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-3"
          >
            {DIAGNOSTIC_CRITERIA.map((criterion, idx) => {
              const isSelected = criterion.id === activeCriterionId;
              const threshold = selectedGender === 'women' ? criterion.womenThreshold : criterion.menThreshold;

              return (
                <button
                  key={criterion.id}
                  onClick={() => setActiveCriterionId(criterion.id)}
                  className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all flex items-start justify-between gap-4 cursor-pointer ${
                    isSelected
                      ? 'bg-white border-emerald-600 shadow-xl ring-2 ring-emerald-600/30'
                      : 'bg-white/80 hover:bg-white/95 border-emerald-100 hover:border-emerald-300 shadow-md'
                  }`}
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className={`text-xs font-bold ${isSelected ? 'text-emerald-700' : 'text-slate-500'}`}>
                        0{idx + 1}
                      </span>
                      <h4 className="text-sm sm:text-base font-bold text-slate-900">
                        {criterion.title.replace(/^\d+\.\s*/, '')}
                      </h4>
                    </div>
                    <p className="text-xs text-slate-500">{criterion.indicator}</p>
                    <div className="text-xs font-semibold text-emerald-800 mt-1">
                      Grenzwert: <span className="tabular-nums font-bold">{threshold}</span>
                    </div>
                  </div>

                  <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-1 transition-transform ${
                    isSelected ? 'bg-emerald-800 text-white scale-110' : 'bg-slate-100 text-slate-400'
                  }`}>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </button>
              );
            })}
          </motion.div>

          {/* Right Column: Detailed Insight Panel (col-span-7) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-white/95 backdrop-blur-md rounded-3xl p-6 sm:p-8 border-2 border-white/80 shadow-2xl space-y-6"
          >
            
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div>
                <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider">
                  Detailanalyse
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-0.5">
                  {currentCriterion.title}
                </h3>
              </div>
              <div className="px-3.5 py-1.5 bg-emerald-100/90 border border-emerald-300 rounded-full text-xs font-bold text-emerald-900 shadow-xs">
                {currentCriterion.indicator}
              </div>
            </div>

            {/* Threshold Box */}
            <div className="bg-[#FAFDFB] border border-emerald-200 rounded-2xl p-5 space-y-2 shadow-xs">
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Geltende Grenzwerte ({selectedGender === 'women' ? 'Frauen' : 'Männer'})
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-emerald-900 tabular-nums">
                {selectedGender === 'women' ? currentCriterion.womenThreshold : currentCriterion.menThreshold}
              </div>
              <p className="text-xs text-slate-500">
                {selectedGender === 'women' ? 'Hinweis: Bei Männern liegt der Grenzwert bei: ' + currentCriterion.menThreshold : 'Hinweis: Bei Frauen liegt der Grenzwert bei: ' + currentCriterion.womenThreshold}
              </p>
            </div>

            {/* Why It Matters */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
                <Info className="w-4 h-4 text-emerald-700" />
                <span>Warum dieser Wert so entscheidend ist:</span>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed bg-slate-50/90 p-4 rounded-xl border border-slate-200">
                {currentCriterion.whyItMatters}
              </p>
            </div>

            {/* Immediate Action Tip */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
                <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                <span>Was Sie sofort tun können (Vorschau aus dem E-Book):</span>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed bg-emerald-50/70 p-4 rounded-xl border border-emerald-200">
                {currentCriterion.actionTip}
              </p>
            </div>

            {/* Call to action inside matrix */}
            <div className="pt-2 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="text-xs text-slate-500">
                Alle 5 Kriterien mit genauer Selbstmessung im E-Book.
              </div>
              <a
                href={CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-800 hover:bg-emerald-700 text-white font-semibold text-xs rounded-xl shadow-md transition-all whitespace-nowrap active:scale-98"
              >
                <span>Vollständigen Leitfaden freischalten ({PRICE})</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};
