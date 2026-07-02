# DO ZROBIENIA — Brakujące workflow i narzędzia

Stan: 2026-06-24

---

## CO JUŻ ISTNIEJE

### Agenci (workflow n8n)
- ✅ System Agentów 24/7 → `02_Workflowy_n8n/01_system_agentow_24_7.json`
- ✅ Agent Audytor Stron → `02_Workflowy_n8n/03_agent_audytor_stron.json`
- ✅ Agent Opinii Google Maps → `02_Workflowy_n8n/05_agent_opinii_google_maps.json`
- ✅ Auto Follow-Up Ofert + Auto-Publikacja Social Media → `02_Workflowy_n8n/22_23_followup_social_media.json` *(oba w jednym pliku)*
- ✅ Generator Ofert (PDF/formularz) → `02_Workflowy_n8n/autoflow-generator-ofert.json`, `ag-oferty.json`

### Dla polskich firm
- ✅ KSeF — Faktury Kosztowe → `02_Workflowy_n8n/16_ksef_faktury_kosztowe.json`
- ✅ Weryfikacja Kontrahenta po NIP → `02_Workflowy_n8n/17_weryfikacja_kontrahenta_nip.json`
- ✅ System RAG — Baza Wiedzy → `02_Workflowy_n8n/20_system_rag_baza_wiedzy.json`

### Narzędzia sprzedażowe
- ✅ Kalkulator ROI → `assets/kalkulator-roi.html`
- ✅ Audyt Potencjału AI → `assets/audyt-potencjalu-ai.html`
- ✅ Pitch Deck → `assets/archiwum/pitch-deck.html` *(stara wersja, wymaga odświeżenia na markę Integracje Biznesowe)*
- ✅ Safety Pack Prawny → `assets/archiwum/safety-pack-prawny.html` + `03_Dokumenty_prawne/` *(umowy i RODO)*

---

## BRAKUJĄCE AGENCI — DO STWORZENIA

### 1. 📞 Agent Głosowy
**Wartość rynkowa: 2 500 – 4 000 zł**

Klient dzwoni — agent odbiera, sprawdza dostępność w kalendarzu konkretnego specjalisty i rezerwuje wizytę. Automatyczne potwierdzenie SMS-em. Zero recepcji.

**Do zrobienia:**
- Workflow n8n integrujący VoIP (np. Twilio Voice / Vapi.ai) z Google Calendar
- Logika sprawdzania wolnych slotów per specjalista
- Automatyczne SMS potwierdzające rezerwację przez Twilio
- Zapis wizyty w CRM (Airtable / HubSpot)
- Plik docelowy: `02_Workflowy_n8n/02_agent_glosowy.json`

---

### 2. 📊 Agent Raportów GA
**Wartość rynkowa: 1 500 – 2 500 zł**

Koniec z ręcznym logowaniem do Analytics. Agent sam generuje raport z kluczowymi metrykami i wysyła go na Slacka — Tobie lub klientowi. Automatycznie, co tydzień.

**Do zrobienia:**
- Workflow n8n z wyzwalaczem czasowym (co tydzień/miesiąc)
- Integracja z Google Analytics 4 API (OAuth2)
- Formatowanie raportu: sesje, użytkownicy, konwersje, top strony
- Wysyłka na Slack webhook + opcjonalnie e-mail
- Plik docelowy: `02_Workflowy_n8n/04_agent_raportow_ga.json`

---

### 3. 🔄 Agent Lojalności
**Wartość rynkowa: 1 500 – 3 000 zł**

Automatycznie przypomina klientom o wizytach kontrolnych, przeglądach, odnowieniach. Odzyskuje przychody, które normalnie by uciekły.

**Do zrobienia:**
- Workflow sprawdzający CRM (Airtable) pod kątem klientów bez wizyty X dni
- Logika segmentacji: 30/60/90 dni od ostatniego kontaktu
- Automatyczne SMS/WhatsApp przez Twilio z linkiem Calendly
- Zapis akcji w CRM (żeby nie wysyłać dwa razy)
- Plik docelowy: `02_Workflowy_n8n/06_agent_lojalnosci.json`

---

### 4. 📋 Agent SOP
**Wartość rynkowa: 1 500 – 2 500 zł**

Nagrywasz 5-minutową notatkę głosową o tym jak coś robisz — agent zamienia ją w gotową procedurę i zapisuje w Notion. Twoja firma dokumentuje się sama.

**Do zrobienia:**
- Webhook przyjmujący plik audio (np. z Telegram Bot)
- Transkrypcja przez OpenAI Whisper API
- Prompt GPT-4o zamieniający transkrypt w strukturę SOP (cel, kroki, uwagi, odpowiedzialny)
- Automatyczny zapis jako strona w Notion (Notion API)
- Opcjonalne: podział na sekcje, przypisanie kategorii
- Plik docelowy: `02_Workflowy_n8n/07_agent_sop.json`

---

### 5. 🎨 Automatyzacja Grafik
**Wartość rynkowa: 1 000 – 2 000 zł**

Generowanie, edycja i łączenie grafik z Nano Banana Pro. Koniec z godzinami w Canvie — grafiki na social media powstają automatycznie.

**Do zrobienia:**
- Integracja z Bannerbear API lub Canva API (generowanie grafik z szablonów)
- Wejście: tytuł posta / tekst / zdjęcie z Google Drive lub URL
- Automatyczne nakładanie tekstu na szablon brandingowy
- Zapis gotowych grafik na Drive + powiadomienie Telegram/Slack
- Plik docelowy: `02_Workflowy_n8n/08_automatyzacja_grafik.json`

---

### 6. 🎬 System Repurposingu Video
**Wartość rynkowa: 3 000 – 5 000 zł**

Nagrywasz jeden film na YouTube — agent wyciąga najlepsze fragmenty, tworzy grafiki i publikuje na LinkedIn, Instagramie i Twitterze. Twoje social media żyją, a Ty nie robisz nic.

**Do zrobienia:**
- Trigger: nowe video na YouTube (YouTube API lub RSS)
- Pobranie transkryptu (YouTube Captions API lub Whisper)
- GPT-4o: wyciąganie 3–5 kluczowych fragmentów jako posty tekstowe
- Bannerbear/Canva: grafika quote card z fragmentem
- Publikacja przez Blotato API na LinkedIn, Instagram, X (Twitter)
- Potwierdzenie na Slacku/Telegramie
- Plik docelowy: `02_Workflowy_n8n/09_system_repurposingu_video.json`

---

### 7. 🚀 System Onboardingu
**Wartość rynkowa: 2 000 – 3 500 zł**

Nowy klient lub pracownik? Agent zakłada folder na Drive, wysyła powitalnego maila, dodaje do CRM, powiadamia zespół na Slacku. Wszystko w jednym flow — zero ręcznej roboty.

**Do zrobienia:**
- Trigger: nowy rekord w Airtable (klient) lub formularz Typeform/Tally
- Google Drive: automatyczne stworzenie folderu z podkatalogami (Umowy, Materiały, Faktury)
- Gmail: powitalny e-mail z linkami i instrukcjami
- Airtable / HubSpot: dodanie rekordu klienta z tagiem "onboarding"
- Slack: powiadomienie kanału #klienci z podsumowaniem
- Opcjonalnie: Calendly link do spotkania kickoff
- Plik docelowy: `02_Workflowy_n8n/10_system_onboardingu.json`

---

### 8. 🧾 Tax-Classifier
**Wartość rynkowa: 2 000 – 3 000 zł**

Odczytuje faktury z maila, rozpoznaje kwoty i stawki VAT, kategoryzuje według PKPiR i wpisuje do arkusza. Koniec z 5 godzinami miesięcznie na ręczne wklepywanie.

**Do zrobienia:**
- Trigger: nowy mail z załącznikiem PDF (Gmail / IMAP)
- Ekstrakcja tekstu z PDF faktury (PDF parser lub GPT-4o Vision)
- GPT-4o: wyciąganie pól (data, numer FV, NIP sprzedawcy, kwota netto/VAT, kategoria PKPiR)
- Walidacja NIP przez API Białej Listy VAT
- Zapis do Google Sheets (jeden wiersz = jedna faktura)
- Alert na Telegramie przy fakturze z ryzykiem (brak na Białej Liście, kwota > próg)
- Plik docelowy: `02_Workflowy_n8n/11_tax_classifier.json`

---

## BRAKUJĄCE — DLA POLSKICH FIRM

### 9. 📋 Wyszukiwarka Przetargów BZP
**Wartość rynkowa: 3 500 – 5 500 zł**

Codziennie przegląda Biuletyn Zamówień Publicznych, ocenia przetargi pod profil firmy, wyłapuje ryzyka. Pętla ucząca — im dłużej działa, tym lepiej trafia. Wymarzony agent dla firm budowlanych, IT, konsultingowych.

**Do zrobienia:**
- Codzienne pobieranie danych z API BZP (api.ezamowienia.gov.pl)
- Filtrowanie po słowach kluczowych i kodach CPV dopasowanych do branży klienta
- GPT-4o: ocena przetargu (pasuje / ryzykowny / pomiń) + krótkie uzasadnienie
- Zapis wyników w Airtable (historia przetargów + oceny)
- Pętla ucząca: feedback "wygrany / przegrany / zrezygnowany" poprawia scoring
- Wysyłka dziennego raportu mailem
- Plik docelowy: `02_Workflowy_n8n/18_wyszukiwarka_przetargow_bzp.json`

---

### 10. 🏠 Monitor Mieszkań Otodom
**Wartość rynkowa: 2 500 – 4 500 zł**

Skanuje Otodom według kryteriów. Analizuje pod kątem czerwonych flag, szacuje koszt remontu, ocenia pilność sprzedawcy. Tylko realne okazje lądują w skrzynce.

**Do zrobienia:**
- Scraping Otodom (przez Apify / Scrapfly lub Firecrawl) wg zdefiniowanych kryteriów (lokalizacja, cena/m², metraż)
- GPT-4o: analiza ogłoszenia — czerwone flagi (brak zdjęć piwnicy, "pilna sprzedaż", dziwna cena)
- Szacowanie kosztu remontu na podstawie stanu mieszkania
- Scoring okazji (0–100) na podstawie ceny vs. rynek
- Alert natychmiastowy na Telegram dla ofert scoring > 70
- Plik docelowy: `02_Workflowy_n8n/19_monitor_mieszkan_otodom.json`

---

### 11. 📅 Automatyzacja Grafiku Pracowników
**Wartość rynkowa: 2 000 – 3 500 zł**

Każdy pracownik dostaje swojego maila — tylko ze swoimi zmianami. Agent pisze w naturalnym tonie. Każdy potwierdza odbiór, właściciel ma podgląd kto wie, a kto nie.

**Do zrobienia:**
- Arkusz Google Sheets jako źródło grafiku (kolumny: data, pracownik, godziny, stanowisko)
- Workflow uruchamiany co tydzień (poniedziałek 8:00) lub ręcznie
- Personalizacja: GPT-4o generuje treść maila per pracownik w naturalnym tonie
- Wysyłka indywidualnych maili przez Gmail
- Zbieranie potwierdzeń: link w mailu → webhook → zapis w Sheets "Potwierdzone ✅"
- Dashboard dla właściciela: kto potwierdził, kto nie
- Plik docelowy: `02_Workflowy_n8n/21_automatyzacja_grafiku_pracownikow.json`

---

### 12. 📄 Generator Ofert Google Slides
**Wartość rynkowa: 2 000 – 3 500 zł**

Po rozmowie sprzedażowej wypełniasz krótki formularz. Agent rozpisuje treść oferty, system generuje gotową prezentację w Google Slides z brandingiem. Klient dostaje link w kilkanaście sekund.

> **Uwaga:** Istnieje `autoflow-generator-ofert.json` — ale to generator ofert PDF/Google Docs.  
> Potrzebna osobna wersja z Google Slides (prezentacja dla klienta).

**Do zrobienia:**
- Formularz Tally/Typeform: dane klienta, branża, problem, budżet, termin
- GPT-4o: generowanie treści slajdów (problem → rozwiązanie → zakres → cena → CTA)
- Google Slides API: wypełnienie szablonu brandingowego (logo klienta, kolory)
- Udostępnienie linku do prezentacji (Drive)
- Powiadomienie na Slacku/Telegramie z linkiem do oferty
- Plik docelowy: `02_Workflowy_n8n/24_generator_ofert_google_slides.json`

---

### 13. 📆 Automatyzacja Calendly + Slack
**Wartość rynkowa: 1 500 – 2 500 zł**

Każda rezerwacja przez Calendly trafia automatycznie do kalendarza, ewidencji klientów i na Slacka. Odwołania i zmiany obsługiwane bez ręcznego sprzątania.

**Do zrobienia:**
- Webhook Calendly: nowa rezerwacja / odwołanie / zmiana terminu
- Google Calendar: automatyczne dodanie/usunięcie/aktualizacja zdarzenia
- Airtable: upsert rekordu klienta (pierwsze spotkanie → nowy rekord; kolejne → aktualizacja)
- Slack: powiadomienie kanału #spotkania (nowe: zielony, odwołane: czerwony, zmiana: żółty)
- Opcjonalnie: email potwierdzający do klienta z agendą spotkania (GPT-4o)
- Plik docelowy: `02_Workflowy_n8n/25_calendly_slack.json`

---

## NARZĘDZIA — DO ODŚWIEŻENIA

### 🎯 Pitch Deck
Plik `assets/archiwum/pitch-deck.html` istnieje ale jest ze starej marki (AutomatyzujAI).  
**Potrzeba:** przepisanie pod markę **Integracje Biznesowe** (ciemny design, akcent limonkowy `#c8f135`, Clash Display + Satoshi). Docelowe miejsce: `assets/pitch-deck.html`

---

### 🌍 Safety Pack Prawny — tłumaczenia

Plik `assets/safety-pack-prawny.html` jest dostępny **wyłącznie w języku polskim**.  
**Potrzeba:** przetłumaczenie interfejsu i treści dokumentów na pozostałe języki strony:
- 🇬🇧 English — umowa + RODO w wersji EN (UK law disclamer)
- 🇩🇪 Deutsch
- 🇮🇹 Italiano
- 🇪🇸 Español
- 🇫🇷 Français
- 🇸🇦 العربية

Treść umów wymaga adaptacji do prawa lokalnego (nie tylko tłumaczenia). Dla klientów EN/DE wskazana konsultacja z prawnikiem.

---

## PODSUMOWANIE

| Kategoria | Gotowe | Brakuje |
|-----------|--------|---------|
| Agenci (workflow n8n) | 5 | 8 |
| Dla polskich firm | 3 | 5 |
| Narzędzia sprzedażowe | 4 | 0 (1 do odświeżenia) |
| **Razem** | **12** | **13** |

**Priorytet wdrożenia (wg wartości rynkowej i popytu):**
1. 🧾 Tax-Classifier (prosty w budowie, wysoki popyt)
2. 🚀 System Onboardingu (szeroka baza klientów)
3. 📆 Automatyzacja Calendly + Slack (szybki do zbudowania)
4. 🔄 Agent Lojalności (bezpośredni wpływ na przychody klienta)
5. 📊 Agent Raportów GA (każda agencja to kupi)
6. 📅 Automatyzacja Grafiku Pracowników
7. 📋 Wyszukiwarka Przetargów BZP (niszowy, ale drogi)
8. 📄 Generator Ofert Google Slides
9. 🏠 Monitor Mieszkań Otodom
10. 📋 Agent SOP
11. 🎬 System Repurposingu Video
12. 🎨 Automatyzacja Grafik
13. 📞 Agent Głosowy (najtrudniejszy technicznie — VoIP)
