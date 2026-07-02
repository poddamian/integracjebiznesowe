import { useState } from "react";

const FLOWS = [
  {
    id: "opis",
    title: "Nowy produkt w sklepie",
    emoji: "📦",
    color: "#6c63ff",
    light: "rgba(108,99,255,0.12)",
    border: "rgba(108,99,255,0.25)",
    steps: [
      {
        who: "Shopify",
        icon: "🛍️",
        label: "Wykrycie",
        desc: "Właściciel dodaje nowy produkt do sklepu — bez opisu.",
        detail: "Shopify automatycznie wysyła sygnał (webhook) do n8n: \"Hej, pojawił się nowy produkt!\"",
      },
      {
        who: "n8n",
        icon: "⚙️",
        label: "Przekazanie",
        desc: "n8n odbiera sygnał i pyta AI o opis.",
        detail: "n8n to jak dyspozytor — odbiera sygnał i wysyła dane produktu (nazwa, kategoria, cechy) do Claude API.",
      },
      {
        who: "AI (Claude)",
        icon: "🤖",
        label: "Myślenie",
        desc: "AI pisze profesjonalny opis produktu po polsku.",
        detail: "Claude dostaje dane, myśli kilka sekund i zwraca gotowy, SEO-friendly opis — jak copywriter, tylko w 3 sekundy.",
      },
      {
        who: "n8n",
        icon: "⚙️",
        label: "Wstawienie",
        desc: "n8n wstawia gotowy opis z powrotem do Shopify.",
        detail: "Automatycznie aktualizuje produkt w sklepie. Właściciel odświeża stronę i... opis już jest.",
      },
      {
        who: "Ty",
        icon: "👑",
        label: "Nadzór",
        desc: "Dostajesz powiadomienie: \"Opis gotowy, sprawdź.\"",
        detail: "Email lub Slack z linkiem do produktu. Możesz zatwierdzić lub poprawić. Twój wybór — ale zazwyczaj jest ok.",
      },
    ],
  },
  {
    id: "koszyk",
    title: "Porzucony koszyk",
    emoji: "🛒",
    color: "#f59e0b",
    light: "rgba(245,158,11,0.1)",
    border: "rgba(245,158,11,0.25)",
    steps: [
      {
        who: "Shopify",
        icon: "🛍️",
        label: "Wykrycie",
        desc: "Klient dodał produkty, ale nie kupił od 1h.",
        detail: "Shopify monitoruje koszyki. Po godzinie bez zakupu — automatycznie wysyła sygnał do n8n.",
      },
      {
        who: "n8n",
        icon: "⚙️",
        label: "Zebranie danych",
        desc: "n8n zbiera: imię klienta, produkty, wartość koszyka.",
        detail: "Pełne dane o kliencie i jego koszyku trafiają do n8n, który kompletuje paczkę informacji dla AI.",
      },
      {
        who: "AI (Claude)",
        icon: "🤖",
        label: "Pisanie emaila",
        desc: "AI pisze personalny email po polsku dla tego klienta.",
        detail: "Nie szablon — prawdziwy email z imieniem klienta, jego konkretnymi produktami i naturalnym tonem.",
      },
      {
        who: "Gmail / SMTP",
        icon: "📧",
        label: "Wysyłka",
        desc: "Email leci do klienta automatycznie.",
        detail: "n8n wysyła email przez skonfigurowaną skrzynkę sklepu. Klient dostaje wiadomość — myśli, że właściciel napisał ręcznie.",
      },
      {
        who: "Ty",
        icon: "👑",
        label: "Nadzór",
        desc: "Widzisz w raporcie: ile emaili wysłano, ile wróciło.",
        detail: "Raz w tygodniu dostajesz podsumowanie: 24 emaile, 6 powrotów, 4 zakupy. Czyste liczby.",
      },
    ],
  },
  {
    id: "recenzja",
    title: "Nowa recenzja klienta",
    emoji: "⭐",
    color: "#10b981",
    light: "rgba(16,185,129,0.1)",
    border: "rgba(16,185,129,0.25)",
    steps: [
      {
        who: "Shopify / Google",
        icon: "⭐",
        label: "Wykrycie",
        desc: "Klient zostawia recenzję (1–5 gwiazdek).",
        detail: "n8n monitoruje nowe recenzje w Shopify lub Google Maps (przez API lub scraping co godzinę).",
      },
      {
        who: "n8n",
        icon: "⚙️",
        label: "Analiza",
        desc: "n8n sprawdza ocenę. Negatywna (1-2★)? Priorytet!",
        detail: "Prosty warunek w n8n: jeśli ocena < 3, oznacz jako pilne i wyślij Ci powiadomienie. Jeśli 4-5★ — obsłuż normalnie.",
      },
      {
        who: "AI (Claude)",
        icon: "🤖",
        label: "Odpowiedź",
        desc: "AI pisze profesjonalną odpowiedź na recenzję.",
        detail: "Empatyczna, konkretna, po polsku. Dla negatywnych — przeprosiny + propozycja rozwiązania. Dla pozytywnych — podziękowanie.",
      },
      {
        who: "Shopify",
        icon: "🛍️",
        label: "Publikacja",
        desc: "Odpowiedź pojawia się pod recenzją automatycznie.",
        detail: "Przez Shopify API lub jako draft do zatwierdzenia — zależy jak skonfigurujesz. Klient widzi, że sklep reaguje.",
      },
      {
        who: "Ty",
        icon: "👑",
        label: "Nadzór",
        desc: "Pilne recenzje (1-2★) dostajesz od razu na telefon.",
        detail: "Tylko wyjątki wymagają Twojej uwagi. Reszta idzie sama. Ty decydujesz co zrobić z trudnymi przypadkami.",
      },
    ],
  },
];

const ANALOGY = [
  { icon: "🏭", title: "Fabryka", desc: "n8n to linia produkcyjna. Każdy event w Shopify uruchamia taśmę." },
  { icon: "🧠", title: "Mózg", desc: "AI (Claude) to mózg. Myśli, pisze, decyduje — na podstawie Twoich instrukcji." },
  { icon: "📡", title: "Zmysły", desc: "Webhooks to zmysły. Shopify \"czuje\" każde zdarzenie i mówi o tym n8n." },
  { icon: "👑", title: "Ty", desc: "Ty to dyrektor. Nie robisz nic operacyjnego — tylko patrzysz na wyniki i koregujesz kurs." },
];

export default function App() {
  const [activeFlow, setActiveFlow] = useState(0);
  const [activeStep, setActiveStep] = useState(null);

  const flow = FLOWS[activeFlow];

  return (
    <div style={s.root}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@400;500;600;700;800&family=Outfit:wght@300;400;500&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        @keyframes fadeIn { from{opacity:0;transform:translateY(10px)} to{opacity:1;transform:translateY(0)} }
        @keyframes pulse { 0%,100%{transform:scale(1)} 50%{transform:scale(1.05)} }
        @keyframes flow { 0%{stroke-dashoffset:20} 100%{stroke-dashoffset:0} }
        button { cursor: pointer; font-family: inherit; }
      `}</style>

      {/* Header */}
      <div style={s.header}>
        <div style={s.headerTag}>Jak to działa?</div>
        <h1 style={s.headline}>
          Ty nadzorujeszˌ<br />
          <span style={s.headlineAccent}>AI robi resztę.</span>
        </h1>
        <p style={s.subline}>
          Kliknij scenariusz i śledź krok po kroku co się dzieje — bez żargonu technicznego.
        </p>
      </div>

      {/* Scenario Tabs */}
      <div style={s.scenarioRow}>
        {FLOWS.map((f, i) => (
          <button
            key={f.id}
            onClick={() => { setActiveFlow(i); setActiveStep(null); }}
            style={{
              ...s.scenarioBtn,
              background: i === activeFlow ? f.light : "rgba(255,255,255,0.03)",
              border: `1px solid ${i === activeFlow ? f.border : "rgba(255,255,255,0.07)"}`,
              color: i === activeFlow ? "#fff" : "#5a6a7a",
            }}
          >
            <span style={{ fontSize: 20 }}>{f.emoji}</span>
            <span style={{ fontSize: 13, fontWeight: 600, lineHeight: 1.3 }}>{f.title}</span>
          </button>
        ))}
      </div>

      {/* Flow Diagram */}
      <div style={s.flowCard} key={flow.id}>
        <div style={s.flowTitle}>
          <span style={{ ...s.flowDot, background: flow.color }} />
          Scenariusz: {flow.title}
        </div>

        <div style={s.stepsRow}>
          {flow.steps.map((step, i) => (
            <div key={i} style={s.stepWrap}>
              {/* Step box */}
              <button
                onClick={() => setActiveStep(activeStep === i ? null : i)}
                style={{
                  ...s.stepBox,
                  background: activeStep === i ? flow.light : "rgba(255,255,255,0.03)",
                  border: `1.5px solid ${activeStep === i ? flow.border : "rgba(255,255,255,0.07)"}`,
                  transform: activeStep === i ? "translateY(-3px)" : "none",
                }}
              >
                <div style={s.stepIcon}>{step.icon}</div>
                <div style={{ ...s.stepNum, color: flow.color }}>0{i + 1}</div>
                <div style={s.stepLabel}>{step.label}</div>
                <div style={s.stepWho}>{step.who}</div>
                <div style={s.stepDesc}>{step.desc}</div>
                <div style={{ ...s.stepHint, color: flow.color }}>
                  {activeStep === i ? "▲ zwiń" : "▼ szczegóły"}
                </div>
              </button>

              {/* Arrow */}
              {i < flow.steps.length - 1 && (
                <div style={s.arrow}>
                  <svg width="32" height="16" viewBox="0 0 32 16">
                    <path
                      d="M0 8 H26 M20 2 L28 8 L20 14"
                      stroke={flow.color}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      opacity="0.6"
                    />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Detail panel */}
        {activeStep !== null && (
          <div
            style={{
              ...s.detailPanel,
              background: flow.light,
              border: `1px solid ${flow.border}`,
              animation: "fadeIn 0.2s ease",
            }}
          >
            <div style={s.detailHeader}>
              <span style={{ fontSize: 22 }}>{flow.steps[activeStep].icon}</span>
              <div>
                <div style={{ ...s.detailTitle, color: flow.color }}>
                  Krok 0{activeStep + 1}: {flow.steps[activeStep].label}
                </div>
                <div style={s.detailSub}>Rola: {flow.steps[activeStep].who}</div>
              </div>
            </div>
            <p style={s.detailText}>{flow.steps[activeStep].detail}</p>
          </div>
        )}
      </div>

      {/* Analogy section */}
      <div style={s.section}>
        <div style={s.sectionTitle}>Jak zapamiętać? Prosta analogia 🧩</div>
        <div style={s.analogyGrid}>
          {ANALOGY.map((a, i) => (
            <div key={i} style={s.analogyCard}>
              <div style={s.analogyIcon}>{a.icon}</div>
              <div style={s.analogyTitle}>{a.title}</div>
              <div style={s.analogyDesc}>{a.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Your role */}
      <div style={s.roleCard}>
        <div style={s.roleLeft}>
          <div style={s.roleTitle}>Co Ty robisz?</div>
          <div style={s.roleSubtitle}>Twoja praca to tylko 3 rzeczy:</div>
          <div style={s.roleList}>
            {[
              ["🎯", "Konfigurujesz raz", "Ustawiasz workflow w n8n raz. Potem działa samo."],
              ["📊", "Sprawdzasz wyniki", "Raz w tygodniu patrzysz na liczby. Czy emaile działają? Czy klienci wracają?"],
              ["🔧", "Poprawiasz gdy coś nie gra", "Jeśli AI popełni błąd — poprawiasz prompt. I gotowe."],
            ].map(([icon, title, desc], i) => (
              <div key={i} style={s.roleItem}>
                <span style={s.roleItemIcon}>{icon}</span>
                <div>
                  <div style={s.roleItemTitle}>{title}</div>
                  <div style={s.roleItemDesc}>{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div style={s.roleRight}>
          <div style={s.timeCard}>
            <div style={s.timeLabel}>Twój czas na tydzień</div>
            <div style={s.timeBig}>~2h</div>
            <div style={s.timeSub}>nadzór, raporty, korekty</div>
            <div style={s.timeDivider} />
            <div style={s.timeLabel}>AI pracuje</div>
            <div style={{ ...s.timeBig, color: "#10b981" }}>24/7</div>
            <div style={s.timeSub}>bez przerwy, bez urlopu</div>
          </div>
        </div>
      </div>

      {/* Stack visual */}
      <div style={s.section}>
        <div style={s.sectionTitle}>Twój stos technologiczny 🔧</div>
        <div style={s.stackRow}>
          {[
            { icon: "🛍️", name: "Shopify", role: "Sklep klienta", color: "#96bf48", desc: "Webhook wysyła sygnał gdy coś się dzieje" },
            { icon: "⚙️", name: "n8n", role: "Twój mózg operacyjny", color: "#ea4b71", desc: "Łączy wszystko. Już go znasz — to Twoja przewaga!" },
            { icon: "🤖", name: "Claude API", role: "Silnik AI", color: "#6c63ff", desc: "Generuje treści, analizuje, odpowiada" },
            { icon: "📧", name: "Gmail / SMTP", role: "Kanał komunikacji", color: "#f59e0b", desc: "Wysyłka emaili do klientów sklepu" },
            { icon: "👑", name: "Ty", role: "Dyrektor", color: "#10b981", desc: "Nadzór, strategia, relacje z klientami" },
          ].map((item, i) => (
            <div key={i} style={s.stackItem}>
              {i > 0 && <div style={s.stackArrow}>→</div>}
              <div style={{ ...s.stackCard, borderTop: `3px solid ${item.color}` }}>
                <div style={s.stackIcon}>{item.icon}</div>
                <div style={{ ...s.stackName, color: item.color }}>{item.name}</div>
                <div style={s.stackRole}>{item.role}</div>
                <div style={s.stackDesc}>{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer CTA */}
      <div style={s.footer}>
        <div style={s.footerText}>
          Chcesz gotowy workflow n8n do skopiowania?
        </div>
        <div style={s.footerSub}>Powiedz który scenariusz chcesz wdrożyć pierwszy — zbuduję Ci JSON do importu.</div>
      </div>
    </div>
  );
}

const s = {
  root: {
    minHeight: "100vh",
    background: "#070a0e",
    color: "#dde2e8",
    fontFamily: "'Outfit', sans-serif",
    padding: "32px 20px",
    maxWidth: 960,
    margin: "0 auto",
  },
  header: {
    marginBottom: 40,
    paddingBottom: 32,
    borderBottom: "1px solid rgba(255,255,255,0.06)",
  },
  headerTag: {
    display: "inline-block",
    background: "rgba(108,99,255,0.1)",
    border: "1px solid rgba(108,99,255,0.25)",
    color: "#9d97ff",
    fontSize: 12,
    fontWeight: 600,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    padding: "5px 14px",
    borderRadius: 20,
    marginBottom: 20,
  },
  headline: {
    fontFamily: "'Bricolage Grotesque', sans-serif",
    fontSize: "clamp(32px, 5vw, 48px)",
    fontWeight: 800,
    lineHeight: 1.1,
    color: "#f0f4f8",
    marginBottom: 16,
  },
  headlineAccent: {
    background: "linear-gradient(90deg, #6c63ff, #10b981)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  subline: {
    fontSize: 16,
    color: "#5a6a7a",
    lineHeight: 1.6,
    maxWidth: 560,
  },
  scenarioRow: {
    display: "flex",
    gap: 12,
    marginBottom: 24,
    flexWrap: "wrap",
  },
  scenarioBtn: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    padding: "12px 18px",
    borderRadius: 12,
    transition: "all 0.2s",
    flex: "1 1 180px",
  },
  flowCard: {
    background: "rgba(255,255,255,0.02)",
    border: "1px solid rgba(255,255,255,0.07)",
    borderRadius: 20,
    padding: 28,
    marginBottom: 28,
    animation: "fadeIn 0.3s ease",
  },
  flowTitle: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    fontFamily: "'Bricolage Grotesque', sans-serif",
    fontWeight: 700,
    fontSize: 16,
    color: "#c8d4e0",
    marginBottom: 24,
  },
  flowDot: {
    width: 10,
    height: 10,
    borderRadius: "50%",
    flexShrink: 0,
  },
  stepsRow: {
    display: "flex",
    alignItems: "flex-start",
    gap: 0,
    overflowX: "auto",
    paddingBottom: 8,
  },
  stepWrap: {
    display: "flex",
    alignItems: "center",
    gap: 0,
    flexShrink: 0,
  },
  stepBox: {
    width: 148,
    padding: "16px 12px",
    borderRadius: 14,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    gap: 6,
    transition: "all 0.2s",
    flexShrink: 0,
  },
  stepIcon: {
    fontSize: 24,
    marginBottom: 2,
  },
  stepNum: {
    fontSize: 10,
    fontWeight: 800,
    letterSpacing: "0.1em",
    fontFamily: "'Bricolage Grotesque', sans-serif",
  },
  stepLabel: {
    fontFamily: "'Bricolage Grotesque', sans-serif",
    fontWeight: 700,
    fontSize: 13,
    color: "#e0e8f0",
  },
  stepWho: {
    fontSize: 10,
    color: "#4a5a6a",
    fontWeight: 500,
    letterSpacing: "0.03em",
  },
  stepDesc: {
    fontSize: 11,
    color: "#6a7a8a",
    lineHeight: 1.4,
    marginTop: 4,
  },
  stepHint: {
    fontSize: 10,
    fontWeight: 600,
    marginTop: 4,
    opacity: 0.7,
  },
  arrow: {
    padding: "0 4px",
    flexShrink: 0,
    opacity: 0.6,
  },
  detailPanel: {
    marginTop: 24,
    borderRadius: 14,
    padding: 20,
  },
  detailHeader: {
    display: "flex",
    alignItems: "center",
    gap: 14,
    marginBottom: 12,
  },
  detailTitle: {
    fontFamily: "'Bricolage Grotesque', sans-serif",
    fontWeight: 700,
    fontSize: 15,
  },
  detailSub: {
    fontSize: 11,
    color: "#5a6a7a",
    marginTop: 2,
  },
  detailText: {
    fontSize: 14,
    color: "#b0bec8",
    lineHeight: 1.7,
  },
  section: {
    marginBottom: 28,
  },
  sectionTitle: {
    fontFamily: "'Bricolage Grotesque', sans-serif",
    fontWeight: 700,
    fontSize: 18,
    color: "#e8f0f8",
    marginBottom: 16,
  },
  analogyGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: 14,
  },
  analogyCard: {
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.07)",
    borderRadius: 14,
    padding: 18,
  },
  analogyIcon: {
    fontSize: 28,
    marginBottom: 10,
  },
  analogyTitle: {
    fontFamily: "'Bricolage Grotesque', sans-serif",
    fontWeight: 700,
    fontSize: 15,
    color: "#dde8f0",
    marginBottom: 6,
  },
  analogyDesc: {
    fontSize: 13,
    color: "#5a6a7a",
    lineHeight: 1.5,
  },
  roleCard: {
    background: "rgba(255,255,255,0.02)",
    border: "1px solid rgba(255,255,255,0.07)",
    borderRadius: 20,
    padding: 28,
    display: "flex",
    gap: 32,
    marginBottom: 28,
    flexWrap: "wrap",
  },
  roleLeft: {
    flex: 2,
    minWidth: 280,
  },
  roleTitle: {
    fontFamily: "'Bricolage Grotesque', sans-serif",
    fontWeight: 800,
    fontSize: 22,
    color: "#f0f4f8",
    marginBottom: 6,
  },
  roleSubtitle: {
    fontSize: 13,
    color: "#4a5a6a",
    marginBottom: 20,
  },
  roleList: {
    display: "flex",
    flexDirection: "column",
    gap: 16,
  },
  roleItem: {
    display: "flex",
    alignItems: "flex-start",
    gap: 14,
  },
  roleItemIcon: {
    fontSize: 22,
    flexShrink: 0,
    marginTop: 1,
  },
  roleItemTitle: {
    fontFamily: "'Bricolage Grotesque', sans-serif",
    fontWeight: 700,
    fontSize: 14,
    color: "#c8d4e0",
    marginBottom: 3,
  },
  roleItemDesc: {
    fontSize: 13,
    color: "#5a6a7a",
    lineHeight: 1.5,
  },
  roleRight: {
    flex: 1,
    minWidth: 180,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  timeCard: {
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: 16,
    padding: "24px 28px",
    textAlign: "center",
    width: "100%",
  },
  timeLabel: {
    fontSize: 11,
    color: "#4a5a6a",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    fontWeight: 600,
    marginBottom: 6,
  },
  timeBig: {
    fontFamily: "'Bricolage Grotesque', sans-serif",
    fontWeight: 800,
    fontSize: 42,
    color: "#6c63ff",
    lineHeight: 1,
  },
  timeSub: {
    fontSize: 12,
    color: "#3a4a5a",
    marginTop: 4,
    marginBottom: 16,
  },
  timeDivider: {
    height: 1,
    background: "rgba(255,255,255,0.06)",
    margin: "16px 0",
  },
  stackRow: {
    display: "flex",
    alignItems: "center",
    gap: 0,
    overflowX: "auto",
    paddingBottom: 8,
  },
  stackItem: {
    display: "flex",
    alignItems: "center",
    gap: 0,
    flexShrink: 0,
  },
  stackArrow: {
    fontSize: 20,
    color: "#2a3a4a",
    padding: "0 8px",
    flexShrink: 0,
  },
  stackCard: {
    width: 154,
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.07)",
    borderRadius: 14,
    padding: "16px 14px",
    textAlign: "center",
  },
  stackIcon: {
    fontSize: 26,
    marginBottom: 8,
  },
  stackName: {
    fontFamily: "'Bricolage Grotesque', sans-serif",
    fontWeight: 700,
    fontSize: 14,
    marginBottom: 3,
  },
  stackRole: {
    fontSize: 10,
    color: "#4a5a6a",
    fontWeight: 600,
    letterSpacing: "0.03em",
    marginBottom: 6,
    textTransform: "uppercase",
  },
  stackDesc: {
    fontSize: 11,
    color: "#5a6a7a",
    lineHeight: 1.4,
  },
  footer: {
    marginTop: 8,
    padding: "28px 32px",
    background: "linear-gradient(135deg, rgba(108,99,255,0.08), rgba(16,185,129,0.06))",
    border: "1px solid rgba(108,99,255,0.15)",
    borderRadius: 20,
    textAlign: "center",
  },
  footerText: {
    fontFamily: "'Bricolage Grotesque', sans-serif",
    fontWeight: 700,
    fontSize: 20,
    color: "#e8f0f8",
    marginBottom: 8,
  },
  footerSub: {
    fontSize: 14,
    color: "#4a5a6a",
    lineHeight: 1.6,
  },
};
