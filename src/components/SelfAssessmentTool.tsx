import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SELF_TEST_QUESTIONS, CHECKOUT_URL, PRICE } from '../data/content';
import { 
  Sparkles, 
  RotateCcw, 
  ArrowRight, 
  AlertTriangle, 
  CheckCircle, 
  ShieldAlert, 
  FileCheck,
  Stethoscope
} from 'lucide-react';

export const SelfAssessmentTool: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  const totalQuestions = SELF_TEST_QUESTIONS.length;
  const currentQ = SELF_TEST_QUESTIONS[currentStep];

  const handleSelectOption = (points: number) => {
    const updated = { ...answers, [currentQ.id]: points };
    setAnswers(updated);

    if (currentStep + 1 < totalQuestions) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handleReset = () => {
    setAnswers({});
    setCurrentStep(0);
    setIsCompleted(false);
  };

  // Calculate score
  const totalScore = Object.values(answers).reduce((acc, val) => acc + val, 0);

  const getResultFeedback = () => {
    if (totalScore <= 2) {
      return {
        level: 'Niedriges Risiko / Guter Stoffwechselzustand',
        badgeColor: 'text-emerald-900 bg-emerald-100 border-emerald-300',
        icon: <CheckCircle className="w-8 h-8 text-emerald-600" />,
        text: 'Ihre aktuellen Angaben deuten auf eine stabile Stoffwechsellage hin. Um diesen Zustand auch mit zunehmendem Alter zu erhalten, bietet das E-Book wertvolle präventive Strategien zu Ernährung und Alltagsbewegung.',
        action: 'Präventiv informieren & Werte weiterhin jährlich im Blick behalten.'
      };
    } else if (totalScore <= 5) {
      return {
        level: 'Mittleres Risiko / Erste Stoffwechselauffälligkeiten',
        badgeColor: 'text-amber-900 bg-amber-100 border-amber-300',
        icon: <AlertTriangle className="w-8 h-8 text-amber-600" />,
        text: 'Sie zeigen erste Risikofaktoren, die typisch für eine beginnende Insulinresistenz oder ein frühes Metabolisches Syndrom sind. Jetzt ist der ideale Zeitpunkt zum Gegensteuern, bevor sich Folgeschäden verfestigen!',
        action: 'Planen Sie einen Routine-Check beim Arzt und nutzen Sie die konkreten Leitfaden-Tipps zur Lebensstilanpassung.'
      };
    } else {
      return {
        level: 'Erhöhtes Risiko / Dringende Abklärung empfohlen',
        badgeColor: 'text-rose-900 bg-rose-100 border-rose-300',
        icon: <ShieldAlert className="w-8 h-8 text-rose-600" />,
        text: 'Mehrere Ihrer Angaben sprechen für das Vorliegen von Kernkriterien des Metabolischen Syndroms. Ein baldiger Arzttermin mit vollständigem Nüchternlabor ist dringend anzuraten.',
        action: 'Nutzen Sie die Arzt-Checkliste und Laborübersicht aus dem E-Book, um das Gespräch optimal vorzubereiten.'
      };
    }
  };

  return (
    <section id="selbsttest" className="py-20 lg:py-28 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header with Scroll Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-12"
        >
          <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider uppercase text-emerald-900 bg-emerald-100/90 px-3 py-1 rounded-full border border-emerald-300">
            <Sparkles className="w-4 h-4 text-emerald-700" />
            <span>Kostenfreier 60-Sekunden Schnelltest</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight" style={{ textWrap: 'balance' }}>
            Machen Sie den Selbsttest: Ist Ihr Stoffwechsel in Gefahr?
          </h2>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-2xl mx-auto">
            Finden Sie mit 5 gezielten Fragen heraus, wo Sie stehen und ob ein ausführliches Arztgespräch für Sie ratsam ist.
          </p>
        </motion.div>

        {/* Quiz Container with Scroll Animation */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white/95 backdrop-blur-md border-2 border-white/80 shadow-2xl rounded-3xl p-6 sm:p-10 relative overflow-hidden"
        >
          
          <AnimatePresence mode="wait">
            {!isCompleted ? (
              <motion.div 
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                {/* Progress header */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs font-semibold text-slate-500">
                    <span>Frage {currentStep + 1} von {totalQuestions}</span>
                    <span className="tabular-nums font-bold text-emerald-800">{Math.round(((currentStep + 1) / totalQuestions) * 100)}%</span>
                  </div>
                  <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden border border-slate-200">
                    <div 
                      className="h-full bg-emerald-600 transition-all duration-300" 
                      style={{ width: `${((currentStep + 1) / totalQuestions) * 100}%` }}
                    />
                  </div>
                </div>

                {/* Question Block */}
                <div className="space-y-2">
                  <span className="text-xs font-bold text-emerald-800 tracking-wide uppercase">
                    Diagnoseindikator 0{currentQ.id}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
                    {currentQ.question}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {currentQ.explanation}
                  </p>
                </div>

                {/* Options */}
                <div className="space-y-3 pt-2">
                  {currentQ.options.map((option, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSelectOption(option.points)}
                      className="w-full text-left p-4 sm:p-5 rounded-2xl bg-white hover:bg-emerald-50/80 border border-slate-200 hover:border-emerald-500 text-slate-800 hover:text-emerald-950 font-medium text-sm sm:text-base transition-all flex items-center justify-between gap-4 shadow-xs group cursor-pointer active:scale-[0.99]"
                    >
                      <span>{option.label}</span>
                      <div className="w-6 h-6 rounded-full border-2 border-slate-300 group-hover:border-emerald-600 flex items-center justify-center shrink-0">
                        <div className="w-2.5 h-2.5 rounded-full bg-transparent group-hover:bg-emerald-600 transition-colors" />
                      </div>
                    </button>
                  ))}
                </div>

                {/* Step Navigation Controls */}
                {currentStep > 0 && (
                  <div className="pt-4 border-t border-slate-200 flex justify-between items-center text-xs text-slate-500">
                    <button
                      onClick={() => setCurrentStep(currentStep - 1)}
                      className="hover:text-slate-800 font-semibold cursor-pointer"
                    >
                      ← Vorherige Frage
                    </button>
                    <button
                      onClick={handleReset}
                      className="hover:text-slate-800 flex items-center gap-1 font-semibold cursor-pointer"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      Test neu starten
                    </button>
                  </div>
                )}
              </motion.div>
            ) : (
              /* Results Screen */
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="space-y-8"
              >
                {(() => {
                  const result = getResultFeedback();
                  return (
                    <>
                      <div className="text-center space-y-3">
                        <div className="flex justify-center">
                          <div className="p-4 rounded-2xl bg-emerald-50 shadow-md border border-emerald-200">
                            {result.icon}
                          </div>
                        </div>
                        <div className="inline-block px-3.5 py-1 rounded-full text-xs font-bold border mt-2">
                          <span className={result.badgeColor}>{result.level}</span>
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                          Ihre persönliche Auswertung
                        </h3>
                        <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto leading-relaxed">
                          {result.text}
                        </p>
                      </div>

                      {/* Action Card */}
                      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
                        <div className="flex items-start gap-3">
                          <Stethoscope className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                          <div>
                            <h4 className="text-sm font-bold text-slate-900">
                              Empfohlener nächster Schritt:
                            </h4>
                            <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                              {result.action}
                            </p>
                          </div>
                        </div>

                        <div className="p-4 bg-emerald-50/70 border border-emerald-200 rounded-xl text-xs text-emerald-950 space-y-1">
                          <p className="font-bold flex items-center gap-1.5">
                            <FileCheck className="w-4 h-4 text-emerald-700" />
                            Im E-Book finden Sie:
                          </p>
                          <p>
                            Den vollständigen <strong>12-Punkte-Fragebogen</strong>, die exakte Anleitung für das nächste Arztgespräch und Schritt-für-Schritt-Routinen für den Alltag.
                          </p>
                        </div>
                      </div>

                      {/* Conversion CTA */}
                      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-2">
                        <button
                          onClick={handleReset}
                          className="inline-flex items-center justify-center gap-2 px-4 py-3 text-xs font-semibold text-slate-600 hover:text-slate-900 rounded-xl hover:bg-slate-100 transition-colors cursor-pointer"
                        >
                          <RotateCcw className="w-4 h-4" />
                          <span>Test wiederholen</span>
                        </button>

                        <a
                          href={CHECKOUT_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-emerald-800 hover:bg-emerald-700 text-white font-bold text-sm rounded-xl shadow-md transition-all whitespace-nowrap active:scale-98"
                        >
                          <span>E-Book Leitfaden herunterladen ({PRICE})</span>
                          <ArrowRight className="w-4 h-4" />
                        </a>
                      </div>
                    </>
                  );
                })()}
              </motion.div>
            )}
          </AnimatePresence>

        </motion.div>

      </div>
    </section>
  );
};
