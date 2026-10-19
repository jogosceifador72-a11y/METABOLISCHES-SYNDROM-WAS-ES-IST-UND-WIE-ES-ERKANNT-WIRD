export interface SocialLink {
  id: string;
  name: string;
  subtitle: string;
  url: string;
  icon: string;
  badge?: string;
  category: 'social' | 'video' | 'community';
}

export interface DiagnosticCriterion {
  id: string;
  title: string;
  indicator: string;
  menThreshold: string;
  womenThreshold: string;
  whyItMatters: string;
  actionTip: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  explanation: string;
  options: {
    label: string;
    points: number;
  }[];
}

export const CHECKOUT_URL = "https://pay.hotmart.com/X108024218D";
export const PRICE = "26,90 €";

export const SOCIAL_LINKS: SocialLink[] = [
  {
    id: "instagram",
    name: "Instagram",
    subtitle: "@karinzeit",
    url: "https://www.instagram.com/karinzeit?stkn=NmZiY2VzaW1leXlo",
    icon: "Instagram",
    badge: "Tägliche Gesundheitstipps",
    category: "social"
  },
  {
    id: "youtube",
    name: "YouTube",
    subtitle: "@karinzeit",
    url: "https://youtube.com/@karinzeit?si=prrRmxwtRBUQ0sit",
    icon: "Youtube",
    badge: "Erklärvideos & Analysen",
    category: "video"
  },
  {
    id: "tiktok",
    name: "TikTok",
    subtitle: "@karinzeit",
    url: "https://www.tiktok.com/@karinzeit",
    icon: "Video",
    badge: "Kurztipps & Routinen",
    category: "video"
  },
  {
    id: "threads",
    name: "Threads",
    subtitle: "@karinzeit",
    url: "https://www.threads.net/@karinzeit",
    icon: "AtSign",
    badge: "Austausch & Updates",
    category: "social"
  },
  {
    id: "fb_page",
    name: "Facebook Seite",
    subtitle: "Karin Zeit - Gesundheit & Prävention",
    url: "https://www.facebook.com/share/1DzZyfFWRL/",
    icon: "Share2",
    badge: "Offizielle Seite",
    category: "community"
  },
  {
    id: "facebook",
    name: "Facebook Profil",
    subtitle: "Karin Zeit",
    url: "https://www.facebook.com/share/1c8J76URqe/",
    icon: "Facebook",
    category: "social"
  },
  {
    id: "kwai",
    name: "Kwai",
    subtitle: "@kariningrid673",
    url: "https://k.kwai.com/u/@kariningrid673/NxhDbbCg",
    icon: "PlaySquare",
    category: "video"
  }
];

export const DIAGNOSTIC_CRITERIA: DiagnosticCriterion[] = [
  {
    id: "waist",
    title: "1. Taillen- & Bauchumfang",
    indicator: "Viszeralfett (Organfett)",
    menThreshold: "≥ 94 cm (erhöht) / ≥ 102 cm (deutlich)",
    womenThreshold: "≥ 80 cm (erhöht) / ≥ 88 cm (deutlich)",
    whyItMatters: "Bauchfett ist stoffwechselaktiv und schüttet kontinuierlich entzündungsfördernde Botenstoffe ins Blut aus, die Gefäßwände schädigen.",
    actionTip: "Einfach morgens nüchtern mit einem Maßband auf Nabelhöhe ohne Einziehen messen."
  },
  {
    id: "triglycerides",
    title: "2. Triglyzeride im Blut",
    indicator: "Blutfettwerte (Neutralfette)",
    menThreshold: "≥ 150 mg/dl (≥ 1,7 mmol/l)",
    womenThreshold: "≥ 150 mg/dl (≥ 1,7 mmol/l)",
    whyItMatters: "Zu viele Neutralfette verstopfen die Kapillaren und sind ein klares Signal für einen gestörten Fett- und Kohlenhydratstoffwechsel.",
    actionTip: "Wird im Standard-Labor per Nüchternblutbild bestimmt. Schon moderate Bewegung senkt diesen Wert zügig."
  },
  {
    id: "hdl",
    title: "3. HDL-Cholesterin („Gutes Cholesterin“)",
    indicator: "Gefäßschützende Lipoproteine",
    menThreshold: "< 40 mg/dl (< 1,0 mmol/l)",
    womenThreshold: "< 50 mg/dl (< 1,3 mmol/l)",
    whyItMatters: "HDL transportiert überschüssiges Cholesterin zurück zur Leber. Ist es zu niedrig, fehlt der natürliche Gefäßschutz.",
    actionTip: "Gesunde Fette (Olivenöl, Walnüsse, Avocado) und Ausdauersport kurbeln die körpereigene HDL-Produktion an."
  },
  {
    id: "blood_pressure",
    title: "4. Blutdruck",
    indicator: "Systolisch / Diastolisch",
    menThreshold: "≥ 130 / 85 mmHg",
    womenThreshold: "≥ 130 / 85 mmHg",
    whyItMatters: "Dauerhafter Druck ermüdet die elastischen Gefäßwände des Herzens und erhöht das Risiko für Infarkte und Schlaganfälle.",
    actionTip: "Regelmäßige Ruhe-Messungen zu festen Uhrzeiten. Salzkonsum reduzieren und Magnesiumzufuhr optimieren."
  },
  {
    id: "glucose",
    title: "5. Nüchternblutzucker",
    indicator: "Glukose-Spiegel / Insulinresistenz",
    menThreshold: "≥ 100 mg/dl (≥ 5,6 mmol/l)",
    womenThreshold: "≥ 100 mg/dl (≥ 5,6 mmol/l)",
    whyItMatters: "Ein erhöhter Nüchternwert zeigt, dass die Körperzellen nicht mehr sensibel auf Insulin reagieren (Vorstufe von Typ-2-Diabetes).",
    actionTip: "Blutzuckerspitzen durch ballaststoffreiche Ernährung, Reduktion von raffiniertem Zucker und Spaziergänge nach dem Essen dämpfen."
  }
];

export const CHAPTERS = [
  {
    number: "01",
    title: "Was ist das Metabolische Syndrom wirklich?",
    description: "Verstehen Sie das Zusammenspiel der 4 Risikofaktoren („Das tödliche Quartett“) in einfacher, bildhafter Sprache ohne Medizinerjargon."
  },
  {
    number: "02",
    title: "Die 5 Diagnosekriterien & Laborwerte",
    description: "Bauchumfang, Triglyzeride, HDL, Blutdruck und Nüchternblutzucker mit allen internationalen Grenzwerten übersichtlich aufbereitet."
  },
  {
    number: "03",
    title: "Ursachen & der Mechanismus der Insulinresistenz",
    description: "Warum hungern die Zellen trotz voller Speicher? Erkennen Sie, wie chronischer Stress, Schlafmangel und Fehlernährung die Hormonbalance stören."
  },
  {
    number: "04",
    title: "Der praktische Selbsttest für zu Hause",
    description: "Ein systematischer Fragebogen, mit dem Sie Ihre persönliche Risikolage in 5 Minuten objektiv einordnen können."
  },
  {
    number: "05",
    title: "Praxiserprobte Maßnahmen: Ernährung, Bewegung & Schlaf",
    description: "Keine Crash-Diäten oder unrealistische Sportprogramme, sondern nachhaltige, alltagstaugliche Gewohnheiten, die sofort spürbare Energie bringen."
  },
  {
    number: "06",
    title: "Souverän beim Arzt: Die richtigen Fragen stellen",
    description: "Ein kompakter Spickzettel für Ihren nächsten Arztbesuch: Welche Laborwerte Sie einfordern sollten und wie Sie Befunde richtig hinterfragen."
  }
];

export const SELF_TEST_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: "Wie verhält sich Ihr Bauchumfang (auf Nabelhöhe gemessen)?",
    explanation: "Viszerales Bauchfett ist der stärkste Indikator für metabolische Entzündungen.",
    options: [
      { label: "Normal (Frauen < 80 cm / Männer < 94 cm)", points: 0 },
      { label: "Leicht erhöht (Frauen 80-88 cm / Männer 94-102 cm)", points: 1 },
      { label: "Deutlich erhöht (Frauen > 88 cm / Männer > 102 cm)", points: 2 }
    ]
  },
  {
    id: 2,
    question: "Kennen Sie Ihren aktuellen Blutdruck in Ruhe?",
    explanation: "Werte ab 130/85 mmHg gelten bei der Diagnose des Metabolischen Syndroms bereits als Kriterium.",
    options: [
      { label: "Optimal (unter 120 / 80 mmHg)", points: 0 },
      { label: "Grenzwertig bis hoch (130-139 / 85-89 mmHg)", points: 1 },
      { label: "Bekannter Bluthochdruck oder in medikamentöser Behandlung", points: 2 }
    ]
  },
  {
    id: 3,
    question: "Haben Sie häufig Heißhunger nach Mahlzeiten oder Müdigkeit nach dem Essen?",
    explanation: "Typische Begleiterscheinungen von Blutzuckerschwankungen und beginnender Insulinresistenz.",
    options: [
      { label: "Selten oder nie, Energielevel ist stabil", points: 0 },
      { label: "Gelegentlich nach kohlenhydratreichen Mahlzeiten", points: 1 },
      { label: "Sehr häufig, ständiges Mittagstief und Verlangen nach Süßem", points: 2 }
    ]
  },
  {
    id: 4,
    question: "Wie steht es um Ihre Blutfettwerte (Triglyzeride & HDL)?",
    explanation: "Ein Missverhältnis zwischen hohen Triglyzeriden und niedrigem HDL ist ein Kernkriterium.",
    options: [
      { label: "Laut letztem Blutbild alle Werte im grünen Bereich", points: 0 },
      { label: "Mindestens ein Wert war schon einmal auffällig / grenzwertig", points: 1 },
      { label: "Triglyzeride erhöht (> 150 mg/dl) oder HDL zu niedrig (< 40/50 mg/dl)", points: 2 },
      { label: "Ich kenne meine aktuellen Werte derzeit nicht", points: 1 }
    ]
  },
  {
    id: 5,
    question: "Liegt in Ihrer Familie eine Veranlagung für Diabetes Typ 2 oder Herz-Kreislauf vor?",
    explanation: "Genetische Faktoren erhöhen die Empfindlichkeit, Lebensstilentscheidungen machen den Unterschied.",
    options: [
      { label: "Nein, keine bekannten Vorerkrankungen in der Familie", points: 0 },
      { label: "Entfernte Verwandte betroffen", points: 1 },
      { label: "Ja, Eltern oder Geschwister sind betroffen", points: 2 }
    ]
  }
];

export const FAQS = [
  {
    question: "Wie und wann erhalte ich das E-Book nach dem Kauf?",
    answer: "Direkt nach erfolgreicher Zahlungsbestätigung über Hotmart erhalten Sie automatisch eine E-Mail mit Ihrem persönlichen Download-Link. Sie können das E-Book im universellen PDF-Format sofort auf Ihrem Smartphone, Tablet oder Computer öffnen und lesen."
  },
  {
    question: "Brauche ich medizinisches Vorwissen, um das E-Book zu verstehen?",
    answer: "Nein, absolut nicht. Der Leitfaden wurde bewusst so verfasst, dass alle Fachbegriffe verständlich erklärt und mit einfachen Alltagssituationen verknüpft werden. Sie lernen, Ihre Laborbefunde wie ein Laie mühelos zu lesen."
  },
  {
    question: "Enthält das Buch eine strenge Diät oder Hungerkur?",
    answer: "Nein! Wir lehnen Crash-Diäten entschieden ab, weil sie den Stoffwechsel weiter verlangsamen und Jo-Jo-Effekte provozieren. Stattdessen vermittelt das E-Book wissenschaftlich fundierte, nachhaltige Ernährungs- und Bewegungsgewohnheiten, die Sie ohne Hunger in Ihren Alltag integrieren können."
  },
  {
    question: "Auf welchen Geräten kann ich das E-Book lesen?",
    answer: "Das E-Book liegt als hochauflösendes, digitales PDF-Dokument vor. Sie können es auf Apple iOS (iPhone, iPad, Mac), Android Smartphones & Tablets, Windows PCs sowie in gängigen E-Reader-Apps öffnen und beliebig oft aufrufen."
  },
  {
    question: "Ersetzt dieser Leitfaden den Besuch bei meinem Hausarzt?",
    answer: "Nein. Dieses Werk dient der fundierten Aufklärung und Wissensvermittlung. Es ersetzt keine ärztliche Diagnose oder individuelle Therapie. Es befähigt Sie jedoch dazu, Ihrem Arzt gezielte Fragen zu stellen und Laborwerte auf Augenhöhe zu besprechen."
  }
];
