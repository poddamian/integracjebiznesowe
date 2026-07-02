# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Czym jest ten projekt

Materiały robocze agencji automatyzacji AI skierowanej na rynek polski. Fokus: **małe firmy + sprzedaż + proste automatyzacje** — szczególnie automatyczne generowanie ofert PDF w 30 sekund.

Właściciel buduje ofertę usługową opartą na n8n i Make.com, sprzedając gotowe wdrożenia automatyzacji.

## Struktura katalogów

- `01_Strony_WWW/` – gotowe strony HTML (landing page agencji, kalkulator ROI, audyt AI, blog)
- `02_Workflowy_n8n/` – workflow n8n w formacie JSON gotowe do importu; README.md zawiera pełne instrukcje konfiguracji
- `03_Dokumenty_prawne/` – wzory umów (dzieło, zlecenie, NDA, regulamin, polityka prywatności)
- `04_Prototypy_React/` – komponenty JSX do prezentacji/demonstracji (nie są zbudowane jako aplikacja)
- `05_Baza_wiedzy_i_research/` – notatki badawcze, koncepcje produktu, PDFy o AI/RAG

## Workflow n8n — kluczowe informacje

Pliki JSON w `02_Workflowy_n8n/` importuje się bezpośrednio do n8n (Settings → Import). Każdy workflow wymaga podmienienia placeholderów — pełna lista w `02_Workflowy_n8n/README.md`.

Flagowy produkt: `16_ksef_faktury_kosztowe.json` (KSeF) — najwyższa cena rynkowa (4–6 tys. zł), wymaga certyfikatu kwalifikowanego lub tokenu API MF.

Kolejność wdrożenia od najłatwiejszego: Agent Audytor Stron → Weryfikacja NIP → Agent Opinii → System 24/7 → KSeF → RAG → Follow-Up Social Media.

## Stack techniczny

- **Automatyzacje:** n8n (self-hosted), Make.com
- **AI:** OpenAI GPT-4/GPT-4o (przez credentials n8n)
- **CRM/dane:** Airtable (token + Base ID), HubSpot, Pipedrive
- **Komunikacja:** Twilio (SMS/WhatsApp), SMTP/Gmail, Telegram Bot
- **Dokumenty:** Google Docs + Drive (eksport PDF), Google Sheets
- **Płatności:** Stripe (linki do produktów)
- **Baza wektorowa:** PostgreSQL + pgvector (dla workflow RAG)
- **Social media auto-post:** Blotato API

## Strony WWW

Pliki HTML w `01_Strony_WWW/` to statyczne strony gotowe do hostingu (np. Cloudflare Pages). Nie wymagają build stepu — otwierają się bezpośrednio w przeglądarce.

Główna strona agencji: `01_Strony_WWW/autoflow-website.html`  
Kalkulator ROI: `01_Strony_WWW/kalkulator-roi.html`  
Audyt potencjału AI: `01_Strony_WWW/audyt-potencjalu-ai.html`

## Blog

Marka: **Integracje Biznesowe** (integracjebiznesowe.pl). Design system: ciemne tło `#06070d`, akcent limonkowy `#c8f135`, fonty Clash Display + Satoshi.

- `01_Strony_WWW/blog.html` — indeks bloga (lista artykułów); dodając nowy wpis, dołącz kartę `<a href="blog/nazwa-pliku.html" class="post-card">` z polami: data, czas czytania, tytuł, excerpt
- `01_Strony_WWW/blog/` — katalog z plikami HTML pojedynczych wpisów; wzorzec: `automatyzacja-procesow-biznesowych-od-czego-zaczac.html`
- `01_Strony_WWW/archiwum/blog-stary-52-wpisy.html` — archiwalny blog z poprzedniej marki **AutomatyzujAI**; zawiera 12 gotowych tematów w tablicy JS (`POSTS`), które można przenosić jako treść do nowych wpisów

**Kategorie tematyczne z archiwum** (gotowe materiały do przepisania pod nową markę):
- Agenci AI, n8n vs Make.com, KSeF/faktury, RAG/baza wiedzy, GEO (AI SEO), branżowe (klinika, salon beauty), techniczne (pgvector)

**Szablon nowego wpisu:** skopiuj `blog/automatyzacja-procesow-biznesowych-od-czego-zaczac.html` i podmień meta tagi, `datePublished`, `mainEntityOfPage` URL oraz treść artykułu. Pamiętaj o dodaniu linku do karty w `blog.html`.

## Kontekst oferty

Trzy pakiety cenowe (automatyzacja generowania ofert):
- **Starter:** 490 zł jednorazowo
- **Growth:** 990 zł + 49 zł/mies. (+ CRM)
- **Pro:** 2490 zł + 149 zł/mies. (+ SMS, kalendarz, SLA 24h)

Główne nisze docelowe: agencje nieruchomości, firmy remontowe, fotografowie, agencje social media, firmy usługowe.
