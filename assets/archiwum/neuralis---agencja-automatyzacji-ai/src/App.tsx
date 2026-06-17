/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useRef, useState } from 'react';
import { 
  Bot, 
  Cpu, 
  Workflow, 
  Zap, 
  CheckCircle2, 
  ShieldCheck, 
  Globe, 
  ArrowRight, 
  Star, 
  MessageSquare, 
  BarChart3, 
  Database, 
  Lock, 
  Mail, 
  Phone, 
  MapPin, 
  ChevronRight,
  Menu,
  X,
  CreditCard,
  ShoppingCart,
  ExternalLink
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, AnimatePresence } from 'motion/react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

gsap.registerPlugin(ScrollTrigger);

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Data ---

const blogOutlines = [
  "1. Przyszłość agentów AI w obsłudze klienta",
  "2. Jak zautomatyzować fakturowanie w 10 minut",
  "3. Lokalne LLM vs Chmura: Co wybrać dla bezpieczeństwa?",
  "4. Automatyzacja marketingu w e-commerce",
  "5. Rola AI w nowoczesnym CRM",
  "6. Integracja Make.com z Twoim biznesem",
  "7. Dlaczego Twoja firma potrzebuje audytu procesów?",
  "8. Agenci AI w sprzedaży B2B",
  "9. Bezpieczeństwo danych w dobie sztucznej inteligencji",
  "10. Automatyzacja workflow dla zespołów kreatywnych",
  "11. Jak AI zmienia zarządzanie projektami",
  "12. Chatboty, które naprawdę sprzedają",
  "13. Optymalizacja łańcucha dostaw dzięki AI",
  "14. Automatyzacja HR: Od rekrutacji po onboarding",
  "15. Przyszłość pracy: Człowiek + Maszyna",
  "16. Jak wdrożyć AI bez programisty?",
  "17. Analiza danych w czasie rzeczywistym",
  "18. Personalizacja na skalę masową dzięki AI",
  "19. Automatyzacja social media: Strategie na 2026",
  "20. Etyka w automatyzacji biznesu"
];

const testimonials = [
  {
    name: "Marek Wiśniewski",
    role: "CEO, TechFlow",
    text: "Neuralis zrewolucjonizowało nasze podejście do CRM. Oszczędzamy 40 godzin tygodniowo.",
    stars: 5,
    img: "https://picsum.photos/seed/man1/100/100"
  },
  {
    name: "Anna Kowalska",
    role: "Marketing Manager, E-Shop Pro",
    text: "Automatyzacja marketingu przerosła nasze oczekiwania. ROI na poziomie 300%.",
    stars: 5,
    img: "https://picsum.photos/seed/woman1/100/100"
  },
  {
    name: "Piotr Nowak",
    role: "Founder, AI-Logistics",
    text: "Wdrożenie lokalnego LLM dało nam poczucie bezpieczeństwa i niesamowitą wydajność.",
    stars: 5,
    img: "https://picsum.photos/seed/man2/100/100"
  }
];

const caseStudies = [
  {
    title: "E-commerce Automation",
    desc: "Pełna automatyzacja zamówień i zwrotów dla sklepu z 10k+ SKU.",
    icon: <ShoppingCart className="w-8 h-8 text-cyan-neon" />,
    result: "Oszczędność 150h/mc"
  },
  {
    title: "Marketing AI Agents",
    desc: "Agenci AI generujący treści i zarządzający kampaniami w 5 językach.",
    icon: <Zap className="w-8 h-8 text-cyan-neon" />,
    result: "Zasięgi +200%"
  },
  {
    title: "Custom Chatbots",
    desc: "Inteligentny system wsparcia klienta zintegrowany z bazą wiedzy firmy.",
    icon: <MessageSquare className="w-8 h-8 text-cyan-neon" />,
    result: "90% rozwiązanych spraw"
  },
  {
    title: "Automated Invoicing",
    desc: "System rozpoznawania i księgowania faktur z 99.9% dokładnością.",
    icon: <Database className="w-8 h-8 text-cyan-neon" />,
    result: "Błędy zredukowane do 0"
  }
];

const offers = [
  {
    title: "Auto-Fakturowanie",
    price: "499 PLN",
    features: ["Automatyczne pobieranie faktur z e-mail", "Kategoryzacja kosztów", "Integracja z Google Drive", "Powiadomienia Slack/E-mail"],
    cta: "Kup teraz"
  },
  {
    title: "Social Media AI Bot",
    price: "799 PLN",
    features: ["Automatyczne odpowiedzi na komentarze", "Generowanie postów (GPT-4)", "Planowanie publikacji", "Analiza sentymentu"],
    cta: "Kup teraz",
    popular: true
  },
  {
    title: "CRM Sync Automation",
    price: "999 PLN",
    features: ["Synchronizacja kontaktów między systemami", "Automatyczne wzbogacanie danych", "Workflow powitalny dla klientów", "Raportowanie tygodniowe"],
    cta: "Kup teraz"
  }
];

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [lang, setLang] = useState('PL');

  return (
    <nav className="fixed top-0 left-0 w-full z-50 glass border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-cyan-neon rounded-lg flex items-center justify-center shadow-[0_0_20px_rgba(0,242,255,0.5)]">
            <Cpu className="text-slate-950 w-6 h-6" />
          </div>
          <span className="text-2xl font-bold tracking-tighter text-white">NEURALIS</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
          <a href="#hero" className="hover:text-cyan-neon transition-colors">Start</a>
          <a href="#about" className="hover:text-cyan-neon transition-colors">Jak działamy</a>
          <a href="#services" className="hover:text-cyan-neon transition-colors">Usługi</a>
          <a href="#case-studies" className="hover:text-cyan-neon transition-colors">Case Study</a>
          <a href="#offer" className="hover:text-cyan-neon transition-colors">Oferta</a>
          <a href="#booking" className="hover:text-cyan-neon transition-colors">Konsultacja</a>
          <a href="#blog" className="hover:text-cyan-neon transition-colors">Blog</a>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <div className="flex gap-2 text-xs font-bold text-white/50 border border-white/10 rounded-full px-3 py-1">
            {['PL', 'EN', 'DE', 'CZ', 'SK'].map((l) => (
              <button 
                key={l} 
                onClick={() => setLang(l)}
                className={cn("hover:text-cyan-neon transition-colors", lang === l && "text-cyan-neon")}
              >
                {l}
              </button>
            ))}
          </div>
          <button className="bg-white text-slate-950 px-6 py-2 rounded-full font-bold text-sm hover:bg-cyan-neon hover:shadow-[0_0_20px_rgba(0,242,255,0.5)] transition-all">
            Kontakt
          </button>
        </div>

        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden glass border-b border-white/10 px-6 py-8 flex flex-col gap-6"
          >
            <a href="#hero" onClick={() => setIsOpen(false)}>Start</a>
            <a href="#about" onClick={() => setIsOpen(false)}>Jak działamy</a>
            <a href="#services" onClick={() => setIsOpen(false)}>Usługi</a>
            <a href="#offer" onClick={() => setIsOpen(false)}>Oferta</a>
            <a href="#booking" onClick={() => setIsOpen(false)}>Konsultacja</a>
            <button className="bg-cyan-neon text-slate-950 px-6 py-3 rounded-full font-bold">Kontakt</button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!gridRef.current) return;
    
    const ctx = gsap.context(() => {
      gsap.to(".grid-line", {
        opacity: 0.2,
        duration: 2,
        stagger: {
          each: 0.1,
          from: "random"
        },
        repeat: -1,
        yoyo: true
      });
    }, gridRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden">
      {/* Animated Grid Background */}
      <div ref={gridRef} className="absolute inset-0 -z-10 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00f2ff1a_1px,transparent_1px),linear-gradient(to_bottom,#00f2ff1a_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-transparent to-slate-950"></div>
      </div>

      <div className="max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-8 border-cyan-neon/20"
        >
          <div className="w-2 h-2 rounded-full bg-cyan-neon animate-pulse"></div>
          <span className="text-xs font-bold tracking-widest text-cyan-neon uppercase">Przyszłość biznesu jest tutaj</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-8xl font-bold leading-tight mb-8"
        >
          Automatyzacja, która <br />
          <span className="cyan-gradient-text glow-text">myśli za Ciebie</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Projektujemy i wdrażamy inteligentne systemy AI, które eliminują powtarzalne zadania, 
          pozwalając Twojemu zespołowi skupić się na tym, co naprawdę ważne.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-center gap-6"
        >
          <button className="group relative bg-cyan-neon text-slate-950 px-10 py-4 rounded-full font-bold text-lg overflow-hidden transition-all hover:shadow-[0_0_30px_rgba(0,242,255,0.6)]">
            <span className="relative z-10 flex items-center gap-2">
              Rozpocznij audyt <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
          <button className="glass px-10 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all">
            Zobacz ofertę
          </button>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-30">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

const Timeline = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !lineRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(lineRef.current, 
        { scaleY: 0 }, 
        { 
          scaleY: 1, 
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            end: "bottom 80%",
            scrub: true,
          }
        }
      );

      gsap.utils.toArray(".step-card").forEach((card: any, i) => {
        gsap.from(card, {
          opacity: 0,
          x: i % 2 === 0 ? -50 : 50,
          duration: 1,
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const steps = [
    { title: "Audyt procesów", desc: "Analizujemy Twoje obecne workflow i identyfikujemy wąskie gardła." },
    { title: "Strategia AI", desc: "Dobieramy odpowiednie narzędzia i projektujemy architekturę systemu." },
    { title: "Implementacja", desc: "Budujemy i integrujemy rozwiązania w Twoim środowisku biznesowym." },
    { title: "Skalowanie", desc: "Monitorujemy wyniki i optymalizujemy system pod kątem wzrostu." }
  ];

  return (
    <section id="about" ref={sectionRef} className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Jak działamy?</h2>
          <p className="text-white/50 max-w-xl mx-auto">Proces, który gwarantuje sukces Twojej automatyzacji.</p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-white/10 rounded-full">
            <div ref={lineRef} className="w-full h-full bg-cyan-neon origin-top shadow-[0_0_15px_rgba(0,242,255,0.5)]"></div>
          </div>

          <div className="space-y-24">
            {steps.map((step, i) => (
              <div key={i} className={cn("flex items-center w-full", i % 2 === 0 ? "flex-row" : "flex-row-reverse")}>
                <div className="w-1/2 px-12">
                  <div className="step-card glass p-8 rounded-2xl border-cyan-neon/10 hover:border-cyan-neon/30 transition-all">
                    <span className="text-cyan-neon font-mono text-sm mb-4 block">KROK 0{i + 1}</span>
                    <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                    <p className="text-white/60 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
                <div className="relative z-10 w-12 h-12 bg-slate-950 border-4 border-cyan-neon rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(0,242,255,0.3)]">
                  <div className="w-3 h-3 bg-cyan-neon rounded-full"></div>
                </div>
                <div className="w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Numbers = () => {
  const [count, setCount] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 80%",
        onEnter: () => {
          const obj = { val: 0 };
          gsap.to(obj, {
            val: 500,
            duration: 2,
            ease: "power2.out",
            onUpdate: () => setCount(Math.floor(obj.val))
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-white/5 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
        <div>
          <div className="text-6xl md:text-8xl font-bold cyan-gradient-text mb-4">{count}+</div>
          <p className="text-white/50 uppercase tracking-widest text-sm font-bold">Zautomatyzowanych godzin</p>
        </div>
        <div>
          <div className="text-6xl md:text-8xl font-bold cyan-gradient-text mb-4">99%</div>
          <p className="text-white/50 uppercase tracking-widest text-sm font-bold">Dokładności procesów</p>
        </div>
        <div>
          <div className="text-6xl md:text-8xl font-bold cyan-gradient-text mb-4">40%</div>
          <p className="text-white/50 uppercase tracking-widest text-sm font-bold">Redukcji kosztów operacyjnych</p>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    { title: "Chatboty AI", desc: "Inteligentne systemy konwersacyjne oparte na GPT-4.", icon: <Bot /> },
    { title: "Integracje CRM", desc: "Łączymy Twoje dane w jeden spójny ekosystem.", icon: <Database /> },
    { title: "Workflow Automation", desc: "Automatyzacja procesów w Make.com i Zapier.", icon: <Workflow /> },
    { title: "Analiza Danych", desc: "Wyciągamy wnioski z Twoich danych w czasie rzeczywistym.", icon: <BarChart3 /> },
    { title: "Agenci Sprzedaży", desc: "AI, które aktywnie szuka i kwalifikuje leady.", icon: <Zap /> },
    { title: "Custom AI Solutions", desc: "Dedykowane modele trenowane na Twoich danych.", icon: <Cpu /> }
  ];

  return (
    <section id="services" className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">Nasze Usługi</h2>
            <p className="text-white/50 max-w-xl">Kompleksowe rozwiązania dla nowoczesnego biznesu.</p>
          </div>
          <button className="text-cyan-neon flex items-center gap-2 font-bold hover:gap-4 transition-all">
            Zobacz wszystkie <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10, rotateX: 5, rotateY: 5 }}
              className="glass p-10 rounded-3xl border-white/5 hover:border-cyan-neon/30 transition-all group perspective-1000"
            >
              <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-cyan-neon/10 transition-colors">
                <div className="text-cyan-neon">{service.icon}</div>
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-white/50 leading-relaxed mb-8">{service.desc}</p>
              <div className="h-1 w-0 bg-cyan-neon group-hover:w-full transition-all duration-500"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CaseStudies = () => {
  return (
    <section id="case-studies" className="py-32 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Case Studies</h2>
          <p className="text-white/50">Realne problemy, realne rozwiązania, realne zyski.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((cs, i) => (
            <div key={i} className="glass p-8 rounded-3xl flex flex-col md:flex-row gap-8 items-center border-white/5 hover:border-cyan-neon/20 transition-all">
              <div className="w-24 h-24 shrink-0 bg-cyan-neon/5 rounded-2xl flex items-center justify-center">
                {cs.icon}
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">{cs.title}</h3>
                <p className="text-white/50 mb-4">{cs.desc}</p>
                <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-cyan-neon/10 text-cyan-neon text-sm font-bold">
                  <CheckCircle2 className="w-4 h-4" /> {cs.result}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Security = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-neon/5 rounded-full blur-[120px] -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="glass p-12 md:p-20 rounded-[40px] border-cyan-neon/20 flex flex-col md:flex-row gap-16 items-center">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 text-cyan-neon font-bold text-sm uppercase tracking-widest mb-6">
              <ShieldCheck className="w-5 h-5" /> Bezpieczeństwo danych
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">Twoje dane są u nas <br /><span className="text-cyan-neon">całkowicie bezpieczne</span></h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 shrink-0 bg-white/5 rounded-lg flex items-center justify-center text-cyan-neon">
                  <Lock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Lokalne systemy LLM</h4>
                  <p className="text-white/50 text-sm">Możliwość postawienia modeli AI na Twoich serwerach, bez wysyłania danych do chmury.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 shrink-0 bg-white/5 rounded-lg flex items-center justify-center text-cyan-neon">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Zgodność z RODO</h4>
                  <p className="text-white/50 text-sm">Wszystkie nasze procesy są w pełni zgodne z europejskimi standardami ochrony danych.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 shrink-0 bg-white/5 rounded-lg flex items-center justify-center text-cyan-neon">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Szyfrowanie End-to-End</h4>
                  <p className="text-white/50 text-sm">Twoje dane są szyfrowane na każdym etapie przesyłu i przechowywania.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="relative z-10 glass p-8 rounded-3xl border-cyan-neon/30 animate-float">
              <div className="flex items-center justify-between mb-8">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-xs font-mono text-white/30">system_security.log</div>
              </div>
              <div className="space-y-4 font-mono text-xs">
                <div className="text-cyan-neon">[OK] Local LLM Instance: Active</div>
                <div className="text-white/50">[INFO] Encrypting database stream...</div>
                <div className="text-green-500">[SUCCESS] Firewall check passed</div>
                <div className="text-white/50">[INFO] Monitoring traffic for anomalies...</div>
                <div className="text-cyan-neon animate-pulse">_</div>
              </div>
            </div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-cyan-neon/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  return (
    <section className="py-32 bg-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-20">Co mówią nasi klienci?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="glass p-10 rounded-3xl border-white/5">
              <div className="flex gap-1 mb-6">
                {[...Array(t.stars)].map((_, i) => <Star key={i} className="w-4 h-4 fill-cyan-neon text-cyan-neon" />)}
              </div>
              <p className="text-lg italic text-white/80 mb-8">"{t.text}"</p>
              <div className="flex items-center gap-4">
                <img src={t.img} alt={t.name} className="w-12 h-12 rounded-full border-2 border-cyan-neon/30" referrerPolicy="no-referrer" />
                <div>
                  <div className="font-bold">{t.name}</div>
                  <div className="text-xs text-white/40">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Offer = () => {
  const [selectedOffer, setSelectedOffer] = useState<string | null>(null);

  return (
    <section id="offer" className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Wybierz swój pakiet</h2>
          <p className="text-white/50">Gotowe rozwiązania, które wdrożymy w kilka dni.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offers.map((offer, i) => (
            <div key={i} className={cn(
              "glass p-10 rounded-[40px] flex flex-col border-white/5 relative overflow-hidden",
              offer.popular && "border-cyan-neon/50 shadow-[0_0_40px_rgba(0,242,255,0.1)] scale-105 z-10"
            )}>
              {offer.popular && (
                <div className="absolute top-6 right-6 bg-cyan-neon text-slate-950 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                  Najpopularniejszy
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2">{offer.title}</h3>
              <div className="text-4xl font-bold mb-8 text-cyan-neon">{offer.price}</div>
              <div className="space-y-4 mb-12 flex-1">
                {offer.features.map((f, j) => (
                  <div key={j} className="flex items-center gap-3 text-sm text-white/60">
                    <CheckCircle2 className="w-4 h-4 text-cyan-neon" /> {f}
                  </div>
                ))}
              </div>
              <button 
                onClick={() => setSelectedOffer(offer.title)}
                className={cn(
                  "w-full py-4 rounded-2xl font-bold transition-all flex items-center justify-center gap-2",
                  offer.popular ? "bg-cyan-neon text-slate-950 hover:shadow-[0_0_20px_rgba(0,242,255,0.4)]" : "bg-white/5 hover:bg-white/10"
                )}
              >
                <CreditCard className="w-5 h-5" /> {offer.cta}
              </button>
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedOffer && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedOffer(null)}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
            ></motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative glass max-w-md w-full p-8 rounded-3xl border-cyan-neon/30"
            >
              <div className="flex justify-between items-center mb-8">
                <div className="flex items-center gap-2">
                  <CreditCard className="text-cyan-neon" />
                  <span className="font-bold">Bezpieczna płatność Stripe</span>
                </div>
                <button onClick={() => setSelectedOffer(null)} className="text-white/50 hover:text-white">
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className="mb-8">
                <div className="text-sm text-white/50 mb-1">Wybrany pakiet:</div>
                <div className="text-2xl font-bold text-cyan-neon">{selectedOffer}</div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="glass p-4 rounded-xl border-white/5">
                  <div className="text-[10px] text-white/30 uppercase tracking-widest mb-2">Numer karty</div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-5 bg-white/10 rounded"></div>
                    <div className="text-sm font-mono">**** **** **** 4242</div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="glass p-4 rounded-xl border-white/5">
                    <div className="text-[10px] text-white/30 uppercase tracking-widest mb-2">Data ważności</div>
                    <div className="text-sm font-mono">12 / 28</div>
                  </div>
                  <div className="glass p-4 rounded-xl border-white/5">
                    <div className="text-[10px] text-white/30 uppercase tracking-widest mb-2">CVC</div>
                    <div className="text-sm font-mono">***</div>
                  </div>
                </div>
              </div>

              <button 
                onClick={() => {
                  alert("Symulacja płatności zakończona sukcesem!");
                  setSelectedOffer(null);
                }}
                className="w-full bg-cyan-neon text-slate-950 py-4 rounded-2xl font-bold hover:shadow-[0_0_20px_rgba(0,242,255,0.4)] transition-all"
              >
                Zapłać teraz
              </button>
              <p className="text-[10px] text-center text-white/30 mt-4">
                Twoje dane są szyfrowane przez Stripe. Neuralis nie przechowuje danych kart płatniczych.
              </p>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

const Blog = () => {
  return (
    <section id="blog" className="py-32 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">Baza Wiedzy</h2>
            <p className="text-white/50">Najnowsze wpisy o automatyzacji i AI.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogOutlines.map((title, i) => (
            <div key={i} className="glass p-6 rounded-2xl border-white/5 hover:border-cyan-neon/20 transition-all group cursor-pointer">
              <div className="text-cyan-neon/30 text-xs font-mono mb-4 group-hover:text-cyan-neon transition-colors">OUTLINE #{i + 1}</div>
              <h4 className="font-bold text-sm leading-snug group-hover:text-cyan-neon transition-colors">{title}</h4>
              <div className="mt-6 flex items-center justify-between">
                <span className="text-[10px] text-white/30 uppercase tracking-widest">Wkrótce</span>
                <ChevronRight className="w-4 h-4 text-white/20 group-hover:text-cyan-neon group-hover:translate-x-1 transition-all" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Booking = () => {
  return (
    <section id="booking" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="glass p-12 md:p-20 rounded-[40px] border-cyan-neon/20 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">Darmowa Konsultacja</h2>
          <p className="text-white/60 max-w-2xl mx-auto mb-12 text-lg">
            Umów się na bezpłatną, 15-minutową rozmowę, podczas której przeanalizujemy Twoje procesy 
            i podpowiemy, co możesz zautomatyzować od zaraz.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="glass p-8 rounded-3xl border-white/5 flex flex-col items-center gap-4 w-full md:w-64">
              <div className="w-12 h-12 bg-cyan-neon/10 rounded-full flex items-center justify-center text-cyan-neon">
                <Zap className="w-6 h-6" />
              </div>
              <div className="font-bold">Szybka analiza</div>
              <div className="text-xs text-white/40">15 minut konkretów</div>
            </div>
            <div className="glass p-8 rounded-3xl border-white/5 flex flex-col items-center gap-4 w-full md:w-64">
              <div className="w-12 h-12 bg-cyan-neon/10 rounded-full flex items-center justify-center text-cyan-neon">
                <Bot className="w-6 h-6" />
              </div>
              <div className="font-bold">Ekspercka wiedza</div>
              <div className="text-xs text-white/40">Zero lania wody</div>
            </div>
          </div>

          <div className="mt-16">
            <button className="bg-cyan-neon text-slate-950 px-12 py-5 rounded-full font-bold text-xl hover:shadow-[0_0_30px_rgba(0,242,255,0.6)] transition-all flex items-center gap-3 mx-auto">
              Zarezerwuj termin <ExternalLink className="w-5 h-5" />
            </button>
            <p className="text-white/30 mt-6 text-sm">Dostępne terminy w tym tygodniu: 3</p>
          </div>
        </div>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-neon/5 rounded-full blur-[100px] -z-10"></div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="pt-32 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-10 h-10 bg-cyan-neon rounded-lg flex items-center justify-center">
                <Cpu className="text-slate-950 w-6 h-6" />
              </div>
              <span className="text-2xl font-bold tracking-tighter">NEURALIS</span>
            </div>
            <p className="text-white/40 max-w-sm mb-8 leading-relaxed">
              Jesteśmy liderem w dziedzinie automatyzacji procesów biznesowych. 
              Łączymy ludzką kreatywność z mocą sztucznej inteligencji.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:text-cyan-neon transition-colors"><Globe className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:text-cyan-neon transition-colors"><Mail className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:text-cyan-neon transition-colors"><Phone className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-8 uppercase tracking-widest text-xs text-cyan-neon">Nawigacja</h4>
            <ul className="space-y-4 text-sm text-white/50">
              <li><a href="#hero" className="hover:text-white transition-colors">Start</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">Jak działamy</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Usługi</a></li>
              <li><a href="#offer" className="hover:text-white transition-colors">Oferta</a></li>
              <li><a href="#booking" className="hover:text-white transition-colors">Konsultacja</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-8 uppercase tracking-widest text-xs text-cyan-neon">Kontakt</h4>
            <ul className="space-y-4 text-sm text-white/50">
              <li className="flex items-center gap-3"><MapPin className="w-4 h-4 text-cyan-neon" /> Warszawa, Polska</li>
              <li className="flex items-center gap-3"><Mail className="w-4 h-4 text-cyan-neon" /> kontakt@neuralis.ai</li>
              <li className="flex items-center gap-3"><Phone className="w-4 h-4 text-cyan-neon" /> +48 123 456 789</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 text-xs text-white/20 gap-6">
          <p>© 2026 NEURALIS. Wszystkie prawa zastrzeżone.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Polityka prywatności</a>
            <a href="#" className="hover:text-white transition-colors">Regulamin</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
      });
      gsap.to(followerRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
      });
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <>
      <div ref={cursorRef} className="fixed top-0 left-0 w-2 h-2 bg-cyan-neon rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2"></div>
      <div ref={followerRef} className="fixed top-0 left-0 w-10 h-10 border border-cyan-neon/30 rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 shadow-[0_0_15px_rgba(0,242,255,0.2)]"></div>
    </>
  );
};

export default function App() {
  return (
    <div className="bg-slate-950 min-h-screen cursor-none">
      <CustomCursor />
      <Navbar />
      <Hero />
      <Numbers />
      <Timeline />
      <Services />
      <CaseStudies />
      <Security />
      <Testimonials />
      <Offer />
      <Booking />
      <Blog />
      <Footer />
    </div>
  );
}
