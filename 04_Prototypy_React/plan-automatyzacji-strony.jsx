import { useState } from "react";

const STATUS = {
  done: { label: "✓ Masz", color: "#10b981", bg: "rgba(16,185,129,0.1)", border: "rgba(16,185,129,0.25)" },
  missing: { label: "✗ Brakuje", color: "#f43f5e", bg: "rgba(244,63,94,0.1)", border: "rgba(244,63,94,0.25)" },
  partial: { label: "⚡ Prawie", color: "#f59e0b", bg: "rgba(245,158,11,0.1)", border: "rgba(245,158,11,0.25)" },
};

const PHASES = [
  {
    id: "lead",
    emoji: "📥",
    title: "Potencjalny klient trafia na stronę",
    color: "#6c63ff",
    steps: [
      {
        title: "Wypełnia formularz kontaktowy lub Generator AI",
        status: "partial",
        note: "Formularz jest na stronie ✓ — ale nie ma backendu. Wiadomości nigdzie nie trafiają!",
        fix: "Podłącz formularz do n8n przez webhook. n8n odbiera dane i robi resztę.",
        tools: ["n8n", "Twoja strona WWW"],
      },
      {
        title: "Auto-odpowiedź do klienta (natychmiast)",
        status: "missing",
        note: "Klient wypełnia formularz i... cisza. Złe pierwsze wrażenie.",
        fix: "n8n → Gmail: wyślij automatyczny email z potwierdzeniem i info 'odezwę się w 24h'.",
        tools: ["n8n", "Gmail"],
      },
      {
        title: "Lead trafia do CRM (bazy klientów)",
        status: "missing",
        note: "Nie masz gdzie zbierać leadów. Każdy klient przepada jeśli go nie obsłużysz od razu.",
        fix: "n8n → Google Sheets lub Notion: zapisz imię, email, opis projektu, datę.",
        tools: ["n8n", "Google Sheets"],
      },
      {
        title: "Ty dostajesz powiadomienie na telefon",
        status: "missing",
        note: "Chcesz wiedzieć gdy pojawia się gorący lead — natychmiast.",
        fix: "n8n → Slack lub Telegram: 'Nowy lead! Anna K., sklep Shopify, 500 zamówień/mies.'",
        tools: ["n8n", "Telegram Bot"],
      },
    ],
  },
  {
    id: "nurture",
    emoji: "🔥",
    title: "Lead nie odpowiada — pielęgnacja automatyczna",
    color: "#f59e0b",
    steps: [
      {
        title: "Email follow-up po 24h (jeśli brak odpowiedzi)",
        status: "missing",
        note: "Większość leadów potrzebuje 2-3 kontaktów zanim zdecyduje. Bez follow-up tracisz klientów.",
        fix: "n8n: jeśli po 24h brak odpowiedzi → wyślij przypomnienie z case study lub pytaniem.",
        tools: ["n8n", "Gmail"],
      },
      {
        title: "Email po 72h z dowodem społecznym",
        status: "missing",
        note: "Trzecia wiadomość z konkretnym przykładem: 'Sklep X zaoszczędził 15h/tydzień po naszej automatyzacji'",
        fix: "n8n: po 72h → wyślij email z case study (AI generuje spersonalizowaną wersję).",
        tools: ["n8n", "Claude API", "Gmail"],
      },
      {
        title: "AI ocenia jakość leadu (hot/warm/cold)",
        status: "missing",
        note: "Nie każdy lead jest wart Twojego czasu. AI może ocenić: czy to poważny klient?",
        fix: "n8n → Claude: analizuje odpowiedzi w formularzu i taguje lead jako hot/warm/cold.",
        tools: ["n8n", "Claude API", "Google Sheets"],
      },
    ],
  },
  {
    id: "offer",
    emoji: "📋",
    title: "Generator ofert AI",
    color: "#8b5cf6",
    steps: [
      {
        title: "Klient wypełnia formularz generatora",
        status: "done",
        note: "Formularz jest gotowy na stronie — super!",
        fix: "Nic nie trzeba robić z formularzem.",
        tools: ["Twoja strona WWW"],
      },
      {
        title: "Claude API generuje spersonalizowaną ofertę",
        status: "missing",
        note: "Generator AI na stronie nie jest podłączony do żadnego AI — to tylko wygląd.",
        fix: "Podłącz generator do Claude API przez backend (Node.js na Vercel lub n8n jako proxy).",
        tools: ["Claude API", "n8n lub Vercel"],
      },
      {
        title: "Oferta trafia na email klienta jako PDF",
        status: "missing",
        note: "Klient powinien dostać ofertę na maila — profesjonalnie, z Twoim logo.",
        fix: "n8n → generuje PDF z oferty → wysyła emailem. Narzędzie: pdfmonkey.io lub html2pdf.",
        tools: ["n8n", "PDFMonkey", "Gmail"],
      },
      {
        title: "Klient w CRM + tag 'oferta wysłana'",
        status: "missing",
        note: "Musisz wiedzieć kto dostał ofertę i kiedy.",
        fix: "n8n aktualizuje wpis w Google Sheets: status = 'oferta wysłana', data.",
        tools: ["n8n", "Google Sheets"],
      },
    ],
  },
  {
    id: "payment",
    emoji: "💳",
    title: "Klient płaci",
    color: "#10b981",
    steps: [
      {
        title: "Stripe — strona płatności",
        status: "partial",
        note: "Stripe jest wbudowany w stronę ✓ — ale brak kluczy API. Płatności nie działają.",
        fix: "Załóż konto Stripe → wklej klucze API do kodu strony → aktywuj płatności.",
        tools: ["Stripe"],
      },
      {
        title: "Auto-potwierdzenie po płatności",
        status: "missing",
        note: "Po zapłacie klient powinien dostać email: 'Płatność odebrana, odezwę się w 24h'.",
        fix: "Stripe Webhook → n8n → Gmail: wyślij potwierdzenie z fakturą i następnymi krokami.",
        tools: ["Stripe", "n8n", "Gmail"],
      },
      {
        title: "Umowa + NDA wysyłana automatycznie",
        status: "missing",
        note: "Po płatności klient dostaje link do podpisania umowy — bez Twojego udziału.",
        fix: "n8n → PandaDoc lub DocuSign: wyślij umowę do podpisu elektronicznego.",
        tools: ["n8n", "PandaDoc (darmowy plan)"],
      },
      {
        title: "Projekt tworzony automatycznie w Notion",
        status: "missing",
        note: "W Notion pojawia się nowy projekt z danymi klienta, terminem i checklistą.",
        fix: "Stripe Webhook → n8n → Notion API: utwórz stronę projektu z szablonem.",
        tools: ["n8n", "Notion API"],
      },
      {
        title: "Faktura VAT automatycznie",
        status: "missing",
        note: "Faktura powinna lecieć automatycznie. Żadnego ręcznego wystawiania.",
        fix: "n8n → inFakt lub wFirma API: utwórz i wyślij fakturę automatycznie.",
        tools: ["n8n", "inFakt API"],
      },
    ],
  },
  {
    id: "delivery",
    emoji: "🚀",
    title: "Realizacja projektu",
    color: "#06b6d4",
    steps: [
      {
        title: "Intake form — zbieranie danych od klienta",
        status: "missing",
        note: "Zaraz po płatności klient dostaje formularz: 'Daj mi dostępy do Shopify i opisz procesy'.",
        fix: "n8n → Typeform lub Tally.so: wyślij link do formularza zbierania danych.",
        tools: ["n8n", "Tally.so (darmowy)"],
      },
      {
        title: "Tygodniowy status update dla klienta",
        status: "missing",
        note: "Klient co tydzień dostaje auto-email: 'Oto postęp prac w tym tygodniu'.",
        fix: "n8n (cron weekly) → Claude AI generuje update na podstawie Notion → Gmail wysyła.",
        tools: ["n8n", "Claude API", "Notion", "Gmail"],
      },
    ],
  },
  {
    id: "reports",
    emoji: "📊",
    title: "Twój nadzór — raporty",
    color: "#ec4899",
    steps: [
      {
        title: "Raport tygodniowy: leady, konwersje, przychód",
        status: "missing",
        note: "Co poniedziałek rano dostajesz email/Slack z podsumowaniem: ile leadów, ile konwersji, ile zarobku.",
        fix: "n8n (cron Monday 8:00) → czyta Google Sheets → Claude podsumowuje → Telegram/Gmail.",
        tools: ["n8n", "Claude API", "Telegram"],
      },
      {
        title: "Alert gdy nowy lead jest 'gorący'",
        status: "missing",
        note: "Natychmiast na telefon gdy ktoś wypełnił wszystkie pola i jest dużym sklepem.",
        fix: "n8n: jeśli lead_score > 80 → Telegram alert z detalami.",
        tools: ["n8n", "Telegram Bot"],
      },
    ],
  },
];

const PRIORITY = [
  { num: 1, title: "Aktywuj Stripe", time: "2h", desc: "Bez płatności nie ma biznesu. Załóż konto i wklej klucze.", impact: "💰 Krytyczne" },
  { num: 2, title: "Podłącz formularz kontaktowy do n8n", time: "3h", desc: "Formularz na stronie → webhook → email do Ciebie + auto-odpowiedź do klienta.", impact: "📥 Krytyczne" },
  { num: 3, title: "CRM w Google Sheets", time: "1h", desc: "Prosta baza leadów z polami: imię, email, status, data. n8n wypełnia automatycznie.", impact: "📊 Ważne" },
  { num: 4, title: "Podłącz Generator AI do Claude API", time: "4h", desc: "Twój generator ofert musi naprawdę używać AI — teraz to tylko szablon.", impact: "🤖 Ważne" },
  { num: 5, title: "Email follow-up sekwencja (24h i 72h)", time: "3h", desc: "Automatyczne przypomnienia dla tych co nie odpowiedzieli.", impact: "🔥 Duży ROI" },
  { num: 6, title: "Telegram Bot = Twój nadzór", time: "1h", desc: "Bot na Telegramie który informuje Cię o leadach i płatnościach.", impact: "👑 Nadzór" },
];

export default function App() {
  const [openPhase, setOpenPhase] = useState(0);
  const [openStep, setOpenStep] = useState(null);
  const [tab, setTab] = useState("mapa");

  const done = PHASES.flatMap(p => p.steps).filter(s => s.status === "done").length;
  const total = PHASES.flatMap(p => p.steps).length;
  const missing = PHASES.flatMap(p => p.steps).filter(s => s.status === "missing").length;

  return (
    <div style={s.root}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        @keyframes fadeUp { from{opacity:0;transform:translateY(8px)} to{opacity:1;transform:translateY(0)} }
        button { cursor: pointer; font-family: inherit; }
      `}</style>

      {/* Header */}
      <div style={s.header}>
        <div style={s.siteBadge}>🌐 automatyzacjasklep.pl</div>
        <h1 style={s.title}>Plan pełnej automatyzacji</h1>
        <p style={s.subtitle}>Co już masz, czego brakuje i co zrobić jako pierwsze.</p>

        {/* Score */}
        <div style={s.scoreRow}>
          <div style={{ ...s.scoreCard, borderColor: "rgba(16,185,129,0.3)" }}>
            <div style={{ ...s.scoreNum, color: "#10b981" }}>{done}</div>
            <div style={s.scoreLabel}>✓ Gotowe</div>
          </div>
          <div style={{ ...s.scoreCard, borderColor: "rgba(245,158,11,0.3)" }}>
            <div style={{ ...s.scoreNum, color: "#f59e0b" }}>2</div>
            <div style={s.scoreLabel}>⚡ Prawie</div>
          </div>
          <div style={{ ...s.scoreCard, borderColor: "rgba(244,63,94,0.3)" }}>
            <div style={{ ...s.scoreNum, color: "#f43f5e" }}>{missing}</div>
            <div style={s.scoreLabel}>✗ Brakuje</div>
          </div>
          <div style={{ ...s.scoreCard, borderColor: "rgba(108,99,255,0.3)" }}>
            <div style={{ ...s.scoreNum, color: "#6c63ff" }}>{total}</div>
            <div style={s.scoreLabel}>łącznie kroków</div>
          </div>
        </div>

        {/* Progress bar */}
        <div style={s.progressWrap}>
          <div style={s.progressBar}>
            <div style={{ ...s.progressFill, width: `${(done / total) * 100}%` }} />
          </div>
          <div style={s.progressLabel}>Automatyzacja: {Math.round((done / total) * 100)}% gotowa</div>
        </div>
      </div>

      {/* Tabs */}
      <div style={s.tabs}>
        {[["mapa", "🗺️ Mapa procesu"], ["priorytety", "🚀 Od czego zacząć"], ["stack", "🔧 Stos narzędzi"]].map(([id, label]) => (
          <button key={id} onClick={() => setTab(id)} style={{ ...s.tab, ...(tab === id ? s.tabActive : {}) }}>
            {label}
          </button>
        ))}
      </div>

      {/* MAPA */}
      {tab === "mapa" && (
        <div style={s.content}>
          {PHASES.map((phase, pi) => (
            <div key={phase.id} style={s.phaseCard}>
              <button
                onClick={() => setOpenPhase(openPhase === pi ? null : pi)}
                style={{ ...s.phaseHeader, borderLeft: `4px solid ${phase.color}` }}
              >
                <span style={s.phaseEmoji}>{phase.emoji}</span>
                <span style={s.phaseTitle}>{phase.title}</span>
                <div style={s.phaseStats}>
                  {phase.steps.map((st, si) => (
                    <span key={si} style={{ ...s.phaseDot, background: STATUS[st.status].color }} />
                  ))}
                </div>
                <span style={{ ...s.chevron, transform: openPhase === pi ? "rotate(180deg)" : "none" }}>▼</span>
              </button>

              {openPhase === pi && (
                <div style={s.stepsList}>
                  {phase.steps.map((step, si) => {
                    const st = STATUS[step.status];
                    const key = `${pi}-${si}`;
                    return (
                      <div key={si} style={{ animation: "fadeUp 0.2s ease" }}>
                        <button
                          onClick={() => setOpenStep(openStep === key ? null : key)}
                          style={{ ...s.stepRow, background: st.bg, borderColor: st.border }}
                        >
                          <span style={{ ...s.stepStatus, color: st.color }}>{st.label}</span>
                          <span style={s.stepTitle}>{step.title}</span>
                          <span style={{ fontSize: 11, color: "#3a4a5a" }}>{openStep === key ? "▲" : "▼"}</span>
                        </button>
                        {openStep === key && (
                          <div style={s.stepDetail}>
                            <div style={s.detailNote}>
                              <span style={{ color: "#f59e0b" }}>⚠️</span> {step.note}
                            </div>
                            <div style={s.detailFix}>
                              <span style={{ color: "#10b981" }}>✓ Jak naprawić:</span> {step.fix}
                            </div>
                            <div style={s.toolsRow}>
                              {step.tools.map((t, i) => (
                                <span key={i} style={s.toolTag}>{t}</span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* PRIORYTETY */}
      {tab === "priorytety" && (
        <div style={s.content}>
          <div style={s.priorityIntro}>
            Zrób to w tej kolejności. Każdy krok zajmuje kilka godzin — możesz to ogarnąć wieczorami przy etacie.
          </div>
          {PRIORITY.map((p, i) => (
            <div key={i} style={s.priorityCard}>
              <div style={s.priorityNum}>{p.num}</div>
              <div style={s.priorityBody}>
                <div style={s.priorityHeader2}>
                  <div style={s.priorityTitle}>{p.title}</div>
                  <div style={s.priorityMeta}>
                    <span style={s.timeTag}>⏱ {p.time}</span>
                    <span style={s.impactTag}>{p.impact}</span>
                  </div>
                </div>
                <div style={s.priorityDesc}>{p.desc}</div>
              </div>
            </div>
          ))}
          <div style={s.totalTime}>
            <div style={s.totalTimeTitle}>Łączny czas wdrożenia</div>
            <div style={s.totalTimeBig}>~14h</div>
            <div style={s.totalTimeSub}>= 2 tygodnie po kilka wieczorów przy etacie</div>
          </div>
        </div>
      )}

      {/* STACK */}
      {tab === "stack" && (
        <div style={s.content}>
          {[
            {
              cat: "🌐 Strona WWW", color: "#6c63ff",
              items: [
                { name: "Twoja strona", cost: "Masz ✓", desc: "Landing page jest gotowy — tylko formularz wymaga backendu." },
                { name: "Vercel / Netlify", cost: "Darmowy", desc: "Hosting dla prostego backendu formularza (Node.js function)." },
              ]
            },
            {
              cat: "⚙️ Automatyzacja", color: "#ea4b71",
              items: [
                { name: "n8n (self-hosted)", cost: "~50 zł/mies", desc: "Twój główny hub — wszystko przez n8n. Już go znasz!" },
                { name: "n8n Cloud", cost: "~100 zł/mies", desc: "Alternatywa — łatwiej utrzymać, nie trzeba serwera." },
              ]
            },
            {
              cat: "🤖 AI", color: "#8b5cf6",
              items: [
                { name: "Claude API (Anthropic)", cost: "~20-50 zł/mies", desc: "Generuje oferty, emaile, analizuje leady. Podstawa biznesu." },
              ]
            },
            {
              cat: "💳 Płatności", color: "#10b981",
              items: [
                { name: "Stripe", cost: "1,4% + 0,25€/transakcja", desc: "Już wbudowany w stronę — wystarczy dodać klucze API." },
                { name: "inFakt / wFirma", cost: "~50 zł/mies", desc: "Automatyczne faktury VAT przez API." },
              ]
            },
            {
              cat: "📧 Komunikacja", color: "#f59e0b",
              items: [
                { name: "Gmail (Google Workspace)", cost: "~25 zł/mies", desc: "Twoja skrzynka biznesowa. n8n wysyła przez Gmail API." },
                { name: "Telegram Bot", cost: "Darmowy", desc: "Twój nadzór — powiadomienia o leadach i płatnościach na telefon." },
              ]
            },
            {
              cat: "📊 CRM / Projekty", color: "#06b6d4",
              items: [
                { name: "Google Sheets", cost: "Darmowy", desc: "Prosta baza leadów i klientów. n8n zapisuje automatycznie." },
                { name: "Notion", cost: "Darmowy (personal)", desc: "Zarządzanie projektami klientów — tworzony automatycznie po płatności." },
              ]
            },
            {
              cat: "📝 Dokumenty / Umowy", color: "#ec4899",
              items: [
                { name: "PandaDoc", cost: "Darmowy plan", desc: "Umowy i NDA wysyłane automatycznie do podpisu po płatności." },
                { name: "PDFMonkey", cost: "~30 zł/mies", desc: "Generuje PDF z ofertą AI i wysyła emailem." },
              ]
            },
          ].map((cat, i) => (
            <div key={i} style={s.catCard}>
              <div style={{ ...s.catTitle, color: cat.color }}>{cat.cat}</div>
              {cat.items.map((item, j) => (
                <div key={j} style={s.stackItemRow}>
                  <div style={s.stackItemLeft}>
                    <div style={s.stackItemName}>{item.name}</div>
                    <div style={s.stackItemDesc}>{item.desc}</div>
                  </div>
                  <div style={{ ...s.costTag, borderColor: cat.color + "40", color: cat.color }}>{item.cost}</div>
                </div>
              ))}
            </div>
          ))}

          <div style={s.totalCostCard}>
            <div style={s.totalCostTitle}>Całkowity koszt miesięczny</div>
            <div style={s.totalCostBig}>~300–400 zł/mies</div>
            <div style={s.totalCostSub}>przy 1 kliencie (2500 zł) = 85% marży czystego zysku</div>
          </div>
        </div>
      )}
    </div>
  );
}

const s = {
  root: {
    minHeight: "100vh",
    background: "#060910",
    color: "#dde2e8",
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    padding: "28px 20px",
    maxWidth: 860,
    margin: "0 auto",
  },
  header: {
    marginBottom: 28,
    paddingBottom: 24,
    borderBottom: "1px solid rgba(255,255,255,0.06)",
  },
  siteBadge: {
    display: "inline-block",
    background: "rgba(108,99,255,0.1)",
    border: "1px solid rgba(108,99,255,0.2)",
    color: "#9d97ff",
    fontSize: 11,
    fontWeight: 700,
    letterSpacing: "0.05em",
    padding: "4px 12px",
    borderRadius: 20,
    marginBottom: 14,
  },
  title: {
    fontSize: "clamp(22px, 4vw, 32px)",
    fontWeight: 800,
    color: "#f0f4f8",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: "#4a5a6a",
    marginBottom: 20,
  },
  scoreRow: {
    display: "flex",
    gap: 12,
    marginBottom: 16,
    flexWrap: "wrap",
  },
  scoreCard: {
    flex: "1 1 80px",
    background: "rgba(255,255,255,0.03)",
    border: "1px solid",
    borderRadius: 12,
    padding: "12px 16px",
    textAlign: "center",
  },
  scoreNum: {
    fontSize: 28,
    fontWeight: 800,
    lineHeight: 1,
  },
  scoreLabel: {
    fontSize: 11,
    color: "#4a5a6a",
    marginTop: 4,
    fontWeight: 600,
  },
  progressWrap: {
    display: "flex",
    alignItems: "center",
    gap: 12,
  },
  progressBar: {
    flex: 1,
    height: 6,
    background: "rgba(255,255,255,0.06)",
    borderRadius: 3,
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    background: "linear-gradient(90deg, #6c63ff, #10b981)",
    borderRadius: 3,
    transition: "width 0.5s ease",
  },
  progressLabel: {
    fontSize: 12,
    color: "#4a5a6a",
    flexShrink: 0,
    fontWeight: 600,
  },
  tabs: {
    display: "flex",
    gap: 8,
    marginBottom: 20,
    flexWrap: "wrap",
  },
  tab: {
    padding: "9px 16px",
    borderRadius: 10,
    border: "1px solid rgba(255,255,255,0.07)",
    background: "rgba(255,255,255,0.03)",
    color: "#5a6a7a",
    fontSize: 13,
    fontWeight: 600,
    transition: "all 0.15s",
  },
  tabActive: {
    background: "rgba(108,99,255,0.15)",
    border: "1px solid rgba(108,99,255,0.3)",
    color: "#a8a0ff",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    gap: 12,
  },
  phaseCard: {
    background: "rgba(255,255,255,0.02)",
    border: "1px solid rgba(255,255,255,0.06)",
    borderRadius: 14,
    overflow: "hidden",
  },
  phaseHeader: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    gap: 12,
    padding: "14px 16px",
    background: "transparent",
    border: "none",
    color: "#e0e8f0",
    textAlign: "left",
  },
  phaseEmoji: { fontSize: 20, flexShrink: 0 },
  phaseTitle: { flex: 1, fontWeight: 700, fontSize: 14 },
  phaseStats: { display: "flex", gap: 4, alignItems: "center" },
  phaseDot: { width: 8, height: 8, borderRadius: "50%" },
  chevron: { fontSize: 10, color: "#3a4a5a", transition: "transform 0.2s", flexShrink: 0 },
  stepsList: {
    borderTop: "1px solid rgba(255,255,255,0.05)",
    display: "flex",
    flexDirection: "column",
    gap: 2,
    padding: 8,
  },
  stepRow: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    gap: 10,
    padding: "10px 12px",
    borderRadius: 10,
    border: "1px solid",
    background: "transparent",
    color: "#c8d4e0",
    textAlign: "left",
    marginBottom: 2,
  },
  stepStatus: {
    fontSize: 10,
    fontWeight: 700,
    flexShrink: 0,
    letterSpacing: "0.03em",
    width: 72,
  },
  stepTitle: { flex: 1, fontSize: 13, fontWeight: 500 },
  stepDetail: {
    background: "rgba(0,0,0,0.2)",
    borderRadius: 10,
    padding: "12px 14px",
    marginBottom: 2,
    display: "flex",
    flexDirection: "column",
    gap: 8,
    animation: "fadeUp 0.15s ease",
  },
  detailNote: {
    fontSize: 12,
    color: "#8090a0",
    lineHeight: 1.5,
    display: "flex",
    gap: 6,
  },
  detailFix: {
    fontSize: 12,
    color: "#8090a0",
    lineHeight: 1.5,
  },
  toolsRow: {
    display: "flex",
    gap: 6,
    flexWrap: "wrap",
  },
  toolTag: {
    background: "rgba(108,99,255,0.1)",
    border: "1px solid rgba(108,99,255,0.2)",
    color: "#9d97ff",
    fontSize: 10,
    fontWeight: 700,
    padding: "3px 8px",
    borderRadius: 6,
  },
  priorityIntro: {
    fontSize: 13,
    color: "#4a5a6a",
    padding: "12px 16px",
    background: "rgba(255,255,255,0.02)",
    border: "1px solid rgba(255,255,255,0.05)",
    borderRadius: 10,
    lineHeight: 1.6,
    marginBottom: 4,
  },
  priorityCard: {
    display: "flex",
    gap: 16,
    padding: "16px",
    background: "rgba(255,255,255,0.02)",
    border: "1px solid rgba(255,255,255,0.06)",
    borderRadius: 14,
  },
  priorityNum: {
    width: 36,
    height: 36,
    background: "linear-gradient(135deg, #6c63ff, #10b981)",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 800,
    fontSize: 16,
    color: "#fff",
    flexShrink: 0,
  },
  priorityBody: { flex: 1 },
  priorityHeader2: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: 8,
    marginBottom: 6,
    flexWrap: "wrap",
  },
  priorityTitle: { fontWeight: 700, fontSize: 14, color: "#e0e8f0" },
  priorityMeta: { display: "flex", gap: 6 },
  timeTag: {
    fontSize: 10,
    fontWeight: 700,
    background: "rgba(255,255,255,0.05)",
    padding: "3px 8px",
    borderRadius: 6,
    color: "#6a7a8a",
  },
  impactTag: {
    fontSize: 10,
    fontWeight: 700,
    background: "rgba(108,99,255,0.1)",
    border: "1px solid rgba(108,99,255,0.2)",
    padding: "3px 8px",
    borderRadius: 6,
    color: "#9d97ff",
  },
  priorityDesc: { fontSize: 12, color: "#5a6a7a", lineHeight: 1.5 },
  totalTime: {
    textAlign: "center",
    padding: "24px",
    background: "rgba(108,99,255,0.06)",
    border: "1px solid rgba(108,99,255,0.15)",
    borderRadius: 14,
    marginTop: 4,
  },
  totalTimeTitle: { fontSize: 12, color: "#4a5a6a", fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: 8 },
  totalTimeBig: { fontSize: 44, fontWeight: 800, color: "#9d97ff", lineHeight: 1 },
  totalTimeSub: { fontSize: 13, color: "#4a5a6a", marginTop: 6 },
  catCard: {
    background: "rgba(255,255,255,0.02)",
    border: "1px solid rgba(255,255,255,0.06)",
    borderRadius: 14,
    padding: 16,
  },
  catTitle: {
    fontSize: 13,
    fontWeight: 800,
    letterSpacing: "0.03em",
    marginBottom: 12,
  },
  stackItemRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
    padding: "10px 0",
    borderTop: "1px solid rgba(255,255,255,0.04)",
  },
  stackItemLeft: { flex: 1 },
  stackItemName: { fontSize: 13, fontWeight: 700, color: "#c8d4e0", marginBottom: 3 },
  stackItemDesc: { fontSize: 11, color: "#4a5a6a", lineHeight: 1.4 },
  costTag: {
    fontSize: 11,
    fontWeight: 700,
    padding: "4px 10px",
    border: "1px solid",
    borderRadius: 8,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  totalCostCard: {
    textAlign: "center",
    padding: "24px",
    background: "rgba(16,185,129,0.06)",
    border: "1px solid rgba(16,185,129,0.15)",
    borderRadius: 14,
  },
  totalCostTitle: { fontSize: 11, color: "#4a5a6a", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 8 },
  totalCostBig: { fontSize: 36, fontWeight: 800, color: "#10b981", lineHeight: 1 },
  totalCostSub: { fontSize: 12, color: "#4a5a6a", marginTop: 6 },
};
