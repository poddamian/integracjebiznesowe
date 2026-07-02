import { useState, useEffect, useRef } from "react";

const TABS = [
  { id: "opisy", label: "✍️ Opisy produktów", icon: "✍️" },
  { id: "email", label: "📧 E-mail: Porzucony koszyk", icon: "📧" },
  { id: "recenzja", label: "⭐ Odpowiedź na recenzję", icon: "⭐" },
  { id: "raport", label: "📊 Raport tygodniowy", icon: "📊" },
];

const placeholders = {
  opisy: {
    fields: [
      { key: "nazwa", label: "Nazwa produktu", placeholder: "np. Serum witaminowe C 30ml" },
      { key: "kategoria", label: "Kategoria", placeholder: "np. Kosmetyki, Elektronika, Odzież..." },
      { key: "cechy", label: "Cechy / szczegóły", placeholder: "np. naturalne składniki, witamina C 20%, bez parabenów, dla skóry suchej" },
    ],
    systemPrompt: (data) =>
      `Jesteś ekspertem copywriterem dla polskich sklepów e-commerce na Shopify. Piszesz perswazyjne, SEO-friendly opisy produktów w języku polskim.

Napisz opis produktu dla:
- Nazwa: ${data.nazwa}
- Kategoria: ${data.kategoria}  
- Cechy: ${data.cechy}

Opis powinien zawierać:
1. Chwytliwy nagłówek (max 10 słów)
2. Emocjonalne wprowadzenie (2-3 zdania) - dlaczego klient tego potrzebuje
3. Lista 4-5 kluczowych korzyści (nie tylko cech!) z emotikonami
4. Krótkie CTA na końcu

Pisz naturalnie, po polsku, nie używaj zbyt technicznego języka. Formatuj czytelnie.`,
  },
  email: {
    fields: [
      { key: "imie", label: "Imię klienta", placeholder: "np. Anna" },
      { key: "produkty", label: "Produkty w koszyku", placeholder: "np. Sneakersy Nike Air Max, Skarpety sportowe" },
      { key: "sklep", label: "Nazwa sklepu", placeholder: "np. SportStyle.pl" },
    ],
    systemPrompt: (data) =>
      `Jesteś ekspertem e-mail marketingu dla polskich sklepów Shopify. Piszesz skuteczne e-maile odzyskujące klientów z porzuconych koszyków.

Napisz e-mail do:
- Imię klienta: ${data.imie}
- Produkty w koszyku: ${data.produkty}
- Sklep: ${data.sklep}

E-mail powinien:
1. Mieć chwytliwy temat wiadomości (podaj go jako "Temat: ...")
2. Być ciepły, personalny, nie nachalny
3. Przypomnieć o produktach
4. Dać lekki urgency (ale nie agresywnie)
5. Mieć jasne CTA: "Wróć do koszyka"
6. Być max 150 słów

Pisz po polsku, naturalnie. Formatuj: najpierw temat, potem treść.`,
  },
  recenzja: {
    fields: [
      { key: "recenzja", label: "Treść recenzji klienta", placeholder: "np. Produkt przyszedł szybko, ale opakowanie było trochę uszkodzone. Sam produkt działa super, polecam!" },
      { key: "ocena", label: "Ocena (1-5 gwiazdek)", placeholder: "np. 4" },
      { key: "produkt", label: "Nazwa produktu", placeholder: "np. Krem nawilżający SPF50" },
    ],
    systemPrompt: (data) =>
      `Jesteś menedżerem obsługi klienta w polskim sklepie Shopify. Piszesz profesjonalne, empatyczne odpowiedzi na recenzje klientów.

Recenzja:
- Treść: "${data.recenzja}"
- Ocena: ${data.ocena}/5 gwiazdek
- Produkt: ${data.produkt}

Napisz odpowiedź która:
1. Dziękuje klientowi za recenzję
2. Odnosi się do konkretnych kwestii (pozytywnych i negatywnych)
3. Jeśli jest problem - przeprasza i proponuje rozwiązanie
4. Zaprasza do powrotu
5. Jest max 80 słów, ciepła i autentyczna

Pisz po polsku, w imieniu sklepu.`,
  },
  raport: {
    fields: [
      { key: "przychod", label: "Przychód tego tygodnia (PLN)", placeholder: "np. 12500" },
      { key: "poprzedni", label: "Przychód poprzedniego tygodnia (PLN)", placeholder: "np. 9800" },
      { key: "topProdukty", label: "Top 3 produkty (sprzedaż sztuk)", placeholder: "np. Serum C: 45szt, Krem SPF: 32szt, Tonik: 18szt" },
      { key: "zwroty", label: "Liczba zwrotów", placeholder: "np. 3" },
    ],
    systemPrompt: (data) =>
      `Jesteś analitykiem e-commerce dla polskich sklepów Shopify. Tworzysz cotygodniowe raporty z insights i rekomendacjami.

Dane tego tygodnia:
- Przychód: ${data.przychod} PLN
- Poprzedni tydzień: ${data.poprzedni} PLN
- Top produkty: ${data.topProdukty}
- Zwroty: ${data.zwroty}

Stwórz raport który zawiera:
1. 📈 Podsumowanie wyników (1-2 zdania z %-zmianą)
2. 🏆 Top produkty i co to oznacza
3. ⚠️ Co wymaga uwagi (zwroty, trendy)
4. 💡 3 konkretne rekomendacje na przyszły tydzień (działania!)
5. 🎯 Jeden priorytet na najbliższe 7 dni

Pisz konkretnie, po polsku, jakbyś był doradcą biznesowym. Nie lej wody.`,
  },
};

function TypingText({ text, speed = 12 }) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);
  const idx = useRef(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    setDisplayed("");
    setDone(false);
    idx.current = 0;
    function tick() {
      if (idx.current < text.length) {
        setDisplayed(text.slice(0, idx.current + 1));
        idx.current++;
        timeoutRef.current = setTimeout(tick, speed);
      } else {
        setDone(true);
      }
    }
    timeoutRef.current = setTimeout(tick, speed);
    return () => clearTimeout(timeoutRef.current);
  }, [text]);

  return (
    <span>
      {displayed}
      {!done && <span style={{ animation: "blink 1s step-end infinite", opacity: 1 }}>▍</span>}
    </span>
  );
}

async function callClaude(systemPrompt) {
  const res = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      model: "claude-sonnet-4-20250514",
      max_tokens: 1000,
      messages: [{ role: "user", content: systemPrompt }],
    }),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error?.message || "API error");
  return data.content?.[0]?.text || "";
}

export default function App() {
  const [activeTab, setActiveTab] = useState("opisy");
  const [formData, setFormData] = useState({});
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);
  const [animateResult, setAnimateResult] = useState(false);

  const tab = placeholders[activeTab];

  function handleTab(id) {
    setActiveTab(id);
    setFormData({});
    setResult("");
    setError("");
  }

  function handleChange(key, val) {
    setFormData((p) => ({ ...p, [key]: val }));
  }

  async function handleGenerate() {
    const missing = tab.fields.find((f) => !formData[f.key]?.trim());
    if (missing) {
      setError(`Uzupełnij pole: ${missing.label}`);
      return;
    }
    setError("");
    setLoading(true);
    setResult("");
    setAnimateResult(false);
    try {
      const prompt = tab.systemPrompt(formData);
      const text = await callClaude(prompt);
      setResult(text);
      setAnimateResult(true);
    } catch (e) {
      setError("Błąd połączenia z AI: " + e.message);
    } finally {
      setLoading(false);
    }
  }

  function handleCopy() {
    navigator.clipboard.writeText(result);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  const currentTab = TABS.find((t) => t.id === activeTab);

  return (
    <div style={styles.root}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes fadeUp { from{opacity:0;transform:translateY(16px)} to{opacity:1;transform:translateY(0)} }
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }
        @keyframes shimmer { 0%{background-position:-200% 0} 100%{background-position:200% 0} }
        * { box-sizing: border-box; margin: 0; padding: 0; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #0f0f0f; }
        ::-webkit-scrollbar-thumb { background: #2a2a2a; border-radius: 2px; }
        textarea, input { outline: none; }
      `}</style>

      {/* Header */}
      <div style={styles.header}>
        <div style={styles.headerInner}>
          <div style={styles.logo}>
            <div style={styles.logoIcon}>⚡</div>
            <div>
              <div style={styles.logoTitle}>ShopAI.pl</div>
              <div style={styles.logoSub}>Automatyzacja dla Shopify</div>
            </div>
          </div>
          <div style={styles.badge}>🇵🇱 Polska wersja demo</div>
        </div>
      </div>

      <div style={styles.main}>
        {/* Sidebar Tabs */}
        <div style={styles.sidebar}>
          <div style={styles.sidebarLabel}>Narzędzia AI</div>
          {TABS.map((t) => (
            <button
              key={t.id}
              onClick={() => handleTab(t.id)}
              style={{
                ...styles.tabBtn,
                ...(activeTab === t.id ? styles.tabBtnActive : {}),
              }}
            >
              <span style={styles.tabIcon}>{t.icon}</span>
              <span style={styles.tabText}>
                {t.label.replace(/^.+? /, "")}
              </span>
              {activeTab === t.id && <div style={styles.tabIndicator} />}
            </button>
          ))}

          <div style={styles.sidebarDivider} />
          <div style={styles.sidebarInfo}>
            <div style={styles.infoRow}>✓ GPT-4 klasy AI</div>
            <div style={styles.infoRow}>✓ Język polski</div>
            <div style={styles.infoRow}>✓ Shopify-ready</div>
            <div style={styles.infoRow}>✓ Integracja n8n</div>
          </div>
        </div>

        {/* Content */}
        <div style={styles.content}>
          <div style={styles.contentHeader}>
            <div style={styles.contentTitle}>{currentTab.label}</div>
            <div style={styles.contentSub}>
              Wypełnij dane poniżej i kliknij Generuj — AI przygotuje treść za kilka sekund.
            </div>
          </div>

          <div style={styles.formCard}>
            {tab.fields.map((f) => (
              <div key={f.key} style={styles.fieldGroup}>
                <label style={styles.fieldLabel}>{f.label}</label>
                {f.key === "recenzja" || f.key === "cechy" ? (
                  <textarea
                    style={styles.textarea}
                    placeholder={f.placeholder}
                    value={formData[f.key] || ""}
                    onChange={(e) => handleChange(f.key, e.target.value)}
                    rows={3}
                  />
                ) : (
                  <input
                    style={styles.input}
                    placeholder={f.placeholder}
                    value={formData[f.key] || ""}
                    onChange={(e) => handleChange(f.key, e.target.value)}
                  />
                )}
              </div>
            ))}

            {error && <div style={styles.error}>{error}</div>}

            <button
              onClick={handleGenerate}
              disabled={loading}
              style={{ ...styles.genBtn, ...(loading ? styles.genBtnLoading : {}) }}
            >
              {loading ? (
                <span style={styles.loadingInner}>
                  <span style={{ animation: "pulse 1s ease-in-out infinite" }}>◐</span>
                  &nbsp;AI generuje...
                </span>
              ) : (
                "⚡ Generuj"
              )}
            </button>
          </div>

          {/* Result */}
          {(result || loading) && (
            <div
              style={{
                ...styles.resultCard,
                animation: animateResult ? "fadeUp 0.4s ease" : "none",
              }}
            >
              <div style={styles.resultHeader}>
                <div style={styles.resultTitle}>
                  <span style={styles.dot} />
                  Wynik AI
                </div>
                {result && (
                  <button onClick={handleCopy} style={styles.copyBtn}>
                    {copied ? "✓ Skopiowano!" : "📋 Kopiuj"}
                  </button>
                )}
              </div>

              <div style={styles.resultBody}>
                {loading ? (
                  <div style={styles.skeletonWrap}>
                    {[80, 100, 60, 90, 70].map((w, i) => (
                      <div
                        key={i}
                        style={{
                          ...styles.skeleton,
                          width: `${w}%`,
                          animationDelay: `${i * 0.15}s`,
                        }}
                      />
                    ))}
                  </div>
                ) : (
                  <div style={styles.resultText}>
                    <TypingText text={result} speed={8} />
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Bottom hint */}
          {!result && !loading && (
            <div style={styles.hint}>
              <div style={styles.hintTitle}>💡 Jak to działa w n8n?</div>
              <div style={styles.hintSteps}>
                <div style={styles.hintStep}>
                  <span style={styles.hintNum}>1</span>
                  <span>Trigger: nowe zamówienie / porzucony koszyk / recenzja w Shopify</span>
                </div>
                <div style={styles.hintStep}>
                  <span style={styles.hintNum}>2</span>
                  <span>Node HTTP: wysyła dane do Claude API z tym promptem</span>
                </div>
                <div style={styles.hintStep}>
                  <span style={styles.hintNum}>3</span>
                  <span>Node Shopify / Gmail: wstawia wynik automatycznie</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const styles = {
  root: {
    minHeight: "100vh",
    background: "#080b0f",
    color: "#e8eaed",
    fontFamily: "'DM Sans', sans-serif",
    display: "flex",
    flexDirection: "column",
  },
  header: {
    background: "rgba(255,255,255,0.03)",
    borderBottom: "1px solid rgba(255,255,255,0.06)",
    padding: "16px 24px",
  },
  headerInner: {
    maxWidth: 1100,
    margin: "0 auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logo: {
    display: "flex",
    alignItems: "center",
    gap: 12,
  },
  logoIcon: {
    width: 40,
    height: 40,
    background: "linear-gradient(135deg, #00e5a0, #00b87a)",
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 20,
  },
  logoTitle: {
    fontFamily: "'Syne', sans-serif",
    fontWeight: 800,
    fontSize: 18,
    color: "#fff",
    letterSpacing: "-0.5px",
  },
  logoSub: {
    fontSize: 11,
    color: "#5a6370",
    marginTop: 1,
  },
  badge: {
    background: "rgba(0,229,160,0.08)",
    border: "1px solid rgba(0,229,160,0.2)",
    color: "#00e5a0",
    fontSize: 12,
    fontWeight: 500,
    padding: "5px 12px",
    borderRadius: 20,
  },
  main: {
    display: "flex",
    flex: 1,
    maxWidth: 1100,
    width: "100%",
    margin: "0 auto",
    padding: "28px 24px",
    gap: 24,
  },
  sidebar: {
    width: 200,
    flexShrink: 0,
    display: "flex",
    flexDirection: "column",
    gap: 4,
  },
  sidebarLabel: {
    fontSize: 10,
    fontWeight: 600,
    letterSpacing: "0.1em",
    color: "#3a4450",
    textTransform: "uppercase",
    marginBottom: 8,
    padding: "0 8px",
  },
  tabBtn: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    padding: "10px 12px",
    borderRadius: 10,
    border: "none",
    background: "transparent",
    color: "#5a6370",
    cursor: "pointer",
    fontSize: 13,
    fontWeight: 500,
    textAlign: "left",
    transition: "all 0.15s",
    position: "relative",
    fontFamily: "'DM Sans', sans-serif",
  },
  tabBtnActive: {
    background: "rgba(0,229,160,0.08)",
    color: "#00e5a0",
    border: "1px solid rgba(0,229,160,0.15)",
  },
  tabIcon: { fontSize: 14, flexShrink: 0 },
  tabText: { flex: 1, lineHeight: 1.3 },
  tabIndicator: {
    position: "absolute",
    left: 0,
    top: "50%",
    transform: "translateY(-50%)",
    width: 3,
    height: 20,
    background: "#00e5a0",
    borderRadius: "0 3px 3px 0",
  },
  sidebarDivider: {
    height: 1,
    background: "rgba(255,255,255,0.05)",
    margin: "16px 0",
  },
  sidebarInfo: {
    display: "flex",
    flexDirection: "column",
    gap: 8,
    padding: "0 8px",
  },
  infoRow: {
    fontSize: 11,
    color: "#3a4450",
    fontWeight: 500,
  },
  content: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: 20,
    minWidth: 0,
  },
  contentHeader: {
    marginBottom: 4,
  },
  contentTitle: {
    fontFamily: "'Syne', sans-serif",
    fontWeight: 700,
    fontSize: 22,
    color: "#fff",
    letterSpacing: "-0.5px",
    marginBottom: 6,
  },
  contentSub: {
    fontSize: 13,
    color: "#4a5560",
    lineHeight: 1.5,
  },
  formCard: {
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.06)",
    borderRadius: 16,
    padding: 24,
    display: "flex",
    flexDirection: "column",
    gap: 16,
  },
  fieldGroup: {
    display: "flex",
    flexDirection: "column",
    gap: 7,
  },
  fieldLabel: {
    fontSize: 12,
    fontWeight: 600,
    color: "#8090a0",
    letterSpacing: "0.02em",
    textTransform: "uppercase",
  },
  input: {
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: 10,
    padding: "11px 14px",
    color: "#e8eaed",
    fontSize: 14,
    transition: "border-color 0.2s",
    fontFamily: "'DM Sans', sans-serif",
    width: "100%",
  },
  textarea: {
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: 10,
    padding: "11px 14px",
    color: "#e8eaed",
    fontSize: 14,
    resize: "vertical",
    fontFamily: "'DM Sans', sans-serif",
    width: "100%",
    lineHeight: 1.5,
  },
  error: {
    background: "rgba(255, 60, 60, 0.08)",
    border: "1px solid rgba(255, 60, 60, 0.2)",
    color: "#ff6b6b",
    fontSize: 13,
    padding: "10px 14px",
    borderRadius: 8,
  },
  genBtn: {
    background: "linear-gradient(135deg, #00e5a0, #00b87a)",
    border: "none",
    borderRadius: 10,
    padding: "13px 24px",
    color: "#061a10",
    fontWeight: 700,
    fontSize: 15,
    cursor: "pointer",
    fontFamily: "'Syne', sans-serif",
    letterSpacing: "0.02em",
    transition: "opacity 0.2s, transform 0.1s",
    alignSelf: "flex-start",
  },
  genBtnLoading: {
    opacity: 0.7,
    cursor: "not-allowed",
  },
  loadingInner: {
    display: "flex",
    alignItems: "center",
    gap: 8,
  },
  resultCard: {
    background: "rgba(0,229,160,0.04)",
    border: "1px solid rgba(0,229,160,0.12)",
    borderRadius: 16,
    overflow: "hidden",
  },
  resultHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "14px 20px",
    borderBottom: "1px solid rgba(0,229,160,0.08)",
  },
  resultTitle: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    fontFamily: "'Syne', sans-serif",
    fontWeight: 700,
    fontSize: 13,
    color: "#00e5a0",
    letterSpacing: "0.05em",
    textTransform: "uppercase",
  },
  dot: {
    width: 7,
    height: 7,
    background: "#00e5a0",
    borderRadius: "50%",
    animation: "pulse 2s ease-in-out infinite",
  },
  copyBtn: {
    background: "rgba(0,229,160,0.1)",
    border: "1px solid rgba(0,229,160,0.2)",
    borderRadius: 8,
    padding: "6px 14px",
    color: "#00e5a0",
    fontSize: 12,
    fontWeight: 600,
    cursor: "pointer",
    fontFamily: "'DM Sans', sans-serif",
    transition: "background 0.15s",
  },
  resultBody: {
    padding: 20,
    minHeight: 120,
  },
  resultText: {
    fontSize: 14,
    color: "#c8d0da",
    lineHeight: 1.7,
    whiteSpace: "pre-wrap",
  },
  skeletonWrap: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
  skeleton: {
    height: 14,
    background: "linear-gradient(90deg, rgba(255,255,255,0.05) 25%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.05) 75%)",
    backgroundSize: "200% 100%",
    animation: "shimmer 1.5s infinite",
    borderRadius: 6,
  },
  hint: {
    background: "rgba(255,255,255,0.02)",
    border: "1px solid rgba(255,255,255,0.05)",
    borderRadius: 16,
    padding: 20,
  },
  hintTitle: {
    fontFamily: "'Syne', sans-serif",
    fontWeight: 700,
    fontSize: 14,
    color: "#6a7a8a",
    marginBottom: 14,
  },
  hintSteps: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
  hintStep: {
    display: "flex",
    alignItems: "flex-start",
    gap: 12,
    fontSize: 13,
    color: "#4a5560",
    lineHeight: 1.5,
  },
  hintNum: {
    width: 22,
    height: 22,
    background: "rgba(0,229,160,0.08)",
    border: "1px solid rgba(0,229,160,0.2)",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 11,
    fontWeight: 700,
    color: "#00e5a0",
    flexShrink: 0,
  },
};
