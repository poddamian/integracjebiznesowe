# 🤖 Agenci AI – n8n Workflows
## Kompletny pakiet automatyzacji dla agencji AI

---

## 📦 Lista plików

| Plik | Agent | Wartość rynkowa |
|------|-------|----------------|
| `01_system_agentow_24_7.json` | System Agentów 24/7 (WhatsApp/SMS + CRM) | 3 000–5 000 zł |
| `03_agent_audytor_stron.json` | Agent Audytor Stron WWW | 2 000–3 500 zł |
| `05_agent_opinii_google_maps.json` | Agent Opinii Google Maps | 2 000–3 000 zł |
| `16_ksef_faktury_kosztowe.json` | KSeF – Faktury Kosztowe ⭐ FLAGOWY | 4 000–6 000 zł |
| `17_weryfikacja_kontrahenta_nip.json` | Weryfikacja Kontrahenta po NIP | 2 500–4 000 zł |
| `20_system_rag_baza_wiedzy.json` | System RAG – Baza Wiedzy | 3 500–6 000 zł |
| `22_23_followup_social_media.json` | Auto Follow-Up Ofert + Auto Publikacja Social Media | 2 000–4 000 zł |

---

## 🔧 Konfiguracja – Co podmienić

### Globalne (we wszystkich workflow)

| Placeholder | Opis |
|------------|------|
| `YOUR_N8N_URL` | Publiczny URL Twojego n8n (np. `https://n8n.twojafirma.pl`) |
| OpenAI credentials | Dodaj w: Settings → Credentials → OpenAI API |

---

### 01 – System Agentów 24/7
**Wymagane credentials:**
- `Twilio Account SID + Auth Token` → dla SMS i WhatsApp
- `Airtable Token` → dla CRM

**Podmień:**
```
YOUR_ACCOUNT_SID     → Twilo Account SID
YOUR_TWILIO_NUMBER   → Twój numer Twilio z WhatsApp Sandbox
YOUR_TWILIO_SMS_NUMBER → Twój numer SMS Twilio
YOUR_AIRTABLE_TOKEN  → Personal Access Token z Airtable
YOUR_BASE_ID         → ID bazy Airtable (z URL)
```

**Struktura tabeli Airtable "Wizyty":**
- Imię (text), Telefon (text), Data (date), Godzina (text)
- Usługa (text), Status (single select), Kanał (text), Data zapisu (date)

---

### 03 – Agent Audytor Stron WWW
**Wymagane credentials:**
- OpenAI API
- SMTP (emailSend) → jeśli chcesz wysyłać raporty emailem

**Użycie – POST na `/webhook/audit-strony`:**
```json
{
  "url": "https://strona-klienta.pl",
  "email": "klient@email.com",
  "firma": "Nazwa Firmy"
}
```

---

### 05 – Agent Opinii Google Maps
**Wymagane credentials:**
- SMTP credentials dla wysyłki emaili
- Slack (webhook lub OAuth)
- Airtable Token

**Podmień:**
```
YOUR_N8N_URL                → URL Twojego n8n
YOUR_GOOGLE_REVIEW_LINK     → Link do recenzji z Google Business Profile
YOUR_AIRTABLE_TOKEN         → Token Airtable
YOUR_BASE_ID                → ID bazy Airtable
```

**Użycie – POST na `/webhook/opinia-klienta`:**
```json
{
  "klient_nazwa": "Jan Kowalski",
  "klient_email": "jan@email.com",
  "wizyta_id": "rec123",
  "usluga": "Przegląd samochodu",
  "data": "2025-01-20"
}
```

---

### 16 – KSeF Faktury Kosztowe ⭐
**Wymagane:**
- Certyfikat kwalifikowany lub Profil Zaufany do autoryzacji KSeF
- Google Sheets credentials
- Slack credentials

**Podmień:**
```
$vars.NIP_FIRMY     → Ustaw jako zmienną środowiskową n8n lub wpisz NIP bezpośrednio
YOUR_GOOGLE_SHEET_ID → ID arkusza Google Sheets
```

**Struktura Google Sheets (kolumny A-M):**
A: Nr KSeF, B: NIP, C: Wystawca, D: Nr Faktury, E: Data,
F: Netto, G: VAT, H: Brutto, I: Stawka VAT, J: Opis,
K: Kolor ryzyka, L: Ryzyka, M: Data weryfikacji

**⚠️ UWAGA:** Integracja KSeF wymaga autoryzacji przez:
- Certyfikat kwalifikowany XAdES, lub
- Token API MF (środowisko produkcyjne/testowe)
- Środowisko testowe KSeF: `https://ksef-test.mf.gov.pl/api/`

---

### 17 – Weryfikacja Kontrahenta po NIP
**Wymagane credentials:**
- Telegram Bot Token (BotFather → utwórz bota)
- OpenAI API

**Użycie przez Telegram:**
Napisz do bota NIP firmy, np.: `1234567890` lub `/nip 123-456-78-90`

**Publiczne API (bezpłatne, bez klucza):**
- Biała Lista VAT: `https://wl-api.mf.gov.pl`
- KRS: `https://api-krs.ms.gov.pl`

---

### 20 – System RAG Baza Wiedzy
**Wymagane:**
- PostgreSQL z rozszerzeniem `pgvector`
- Telegram Bot Token
- OpenAI API (embeddings + GPT-4o)

**Utwórz tabelę PostgreSQL:**
```sql
CREATE EXTENSION IF NOT EXISTS vector;
CREATE EXTENSION IF NOT EXISTS pg_trgm;

CREATE TABLE dokumenty_firmowe (
  id SERIAL PRIMARY KEY,
  tytul VARCHAR(500),
  tresc TEXT,
  kategoria VARCHAR(100),
  embedding vector(1536),
  data_dodania TIMESTAMP DEFAULT NOW()
);

CREATE INDEX ON dokumenty_firmowe USING ivfflat (embedding vector_cosine_ops);
CREATE INDEX ON dokumenty_firmowe USING GIN (to_tsvector('polish', tresc));
```

**Dodaj dokument – POST na `/webhook/rag-add-document`:**
```json
{
  "tytul": "Procedura Onboardingu",
  "tresc": "Pełna treść dokumentu...",
  "kategoria": "HR"
}
```

---

### 22+23 – Follow-Up + Social Media
**Wymagane credentials:**
- Airtable Token
- Slack credentials
- SMTP credentials
- Blotato API Key (do auto-publikacji)

**Airtable tabela "Oferty" – wymagane pola:**
- Nazwa_Klienta, Imie_Nazwisko, Email_Klienta
- Nazwa_Oferty, Wartosc_Oferty
- Status (Wysłana/Zaakceptowana/Odrzucona)
- Data_Wysłania, Dni_Do_Follow_Up (liczba dni)
- Follow_Up_Wysłany (checkbox), Data_Follow_Up

**Użycie Social Media – POST na `/webhook/social-media-post`:**
```json
{
  "pomysl": "Jak automatyzacja AI oszczędza 10h tygodniowo",
  "branza": "AI Automation B2B",
  "ton": "ekspercki",
  "email": "twoj@email.com"
}
```

---

## 🚀 Kolejność wdrożenia (rekomendowana)

1. **Agent Audytor Stron** – najszybszy do testowania, generuje leady
2. **Weryfikacja NIP** – bezpłatne API, działa od razu przez Telegram
3. **Agent Opinii** – wysoka wartość dla klientów usługowych
4. **System Agentów 24/7** – wymaga Twilio, największy impact
5. **KSeF** – wymaga certyfikatu, ale najwyższa cena
6. **System RAG** – wymaga PostgreSQL z pgvector
7. **Follow-Up + Social Media** – szybki ROI dla sprzedaży

---

## 💡 Wskazówki sprzedażowe

- **Demo live** – Agent Audytor + Agent NIP działają na spotkaniu w 2 minuty
- **ROI kalkulator** – Agent 24/7: "ile kosztuje recepcjonistka vs 299 zł/mies?"
- **KSeF** – deadline obowiązkowy dla firm → urgency selling
- **RAG** – demo z dokumentami klienta robi WOW effect

---

*Wersja: 1.0 | n8n 1.x compatible | GPT-4o / GPT-4o-mini*
