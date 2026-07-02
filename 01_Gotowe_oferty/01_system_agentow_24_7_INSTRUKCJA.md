# System Agentów 24/7 — Instrukcja wdrożenia w n8n

**Plik workflow:** `01_system_agentow_24_7.json`  
**Stack:** n8n → OpenAI GPT-4o-mini → Twilio (WhatsApp + SMS) → Airtable  
**Przeznaczenie:** Automatyczna obsługa klientów przez całą dobę — odpowiedzi na pytania + umawianie wizyt + zapis do CRM

---

> **INCYDENT BEZPIECZEŃSTWA — 2026-07-02**
> GitGuardian wykrył w historii GitHub (commit `4c13a9c`) przykładowe hasła bazy danych z pliku dokumentacji `05_Baza_wiedzy_i_research/ag ai i n8n.txt`. Plik zawierał przykładowy `docker-compose.yml` z hasłami takimi jak `BezpieczneHasloKlienta123!` i `WpiszTutajPotezneHasloBazy123!`. Były to przykłady edukacyjne, **nie prawdziwe dane dostępowe** — żadne realne klucze API nie zostały ujawnione. Patrz sekcja 9 — Bezpieczeństwo kluczy i git.

---

## Spis treści

1. [Co robi ten workflow](#1-co-robi-ten-workflow)
2. [Wymagane konta i dane](#2-wymagane-konta-i-dane)
3. [Konfiguracja krok po kroku](#3-konfiguracja-krok-po-kroku)
4. [Wszystkie placeholdery do zamiany](#4-wszystkie-placeholdery-do-zamiany)
5. [Struktura tabeli w Airtable](#5-struktura-tabeli-w-airtable)
6. [Analiza workflow — plusy, minusy, zagrożenia](#6-analiza-workflow--plusy-minusy-zagrożenia)
7. [Znane błędy i co należy poprawić](#7-znane-błędy-i-co-należy-poprawić)
8. [Testowanie](#8-testowanie)
9. [Bezpieczeństwo kluczy i git](#9-bezpieczeństwo-kluczy-i-git)

---

## 1. Co robi ten workflow

```
Klient pisze na WhatsApp/SMS
        ↓
Webhook odbiera wiadomość (Twilio → n8n)
        ↓
Parsowanie: kto napisał, z jakiego kanału, treść
        ↓
GPT-4o-mini analizuje wiadomość → zwraca JSON z:
  • intent: info / booking / complaint / human_needed
  • reply: treść odpowiedzi do klienta
  • booking_data: {name, phone, date, time, service} lub null
        ↓
   [intent = booking?]
   TAK → Zapis do Airtable (tabela "Wizyty")
        ↓
   [WhatsApp czy SMS?]
   WhatsApp → Twilio API (whatsapp:+numer)
   SMS     → Twilio API (zwykły numer)
        ↓
Webhook odpowiada "OK" do Twilio
```

**Brakuje obsługi intentów:** `complaint` i `human_needed` — AI może je zwrócić, ale workflow ich nie rozróżnia (patrz sekcja 7).

---

## 2. Wymagane konta i dane

| Usługa | Co potrzebujesz | Link |
|--------|----------------|------|
| **n8n** | Self-hosted lub n8n Cloud | https://n8n.io |
| **OpenAI** | Klucz API (sk-...) | https://platform.openai.com/api-keys |
| **Twilio** | Account SID, Auth Token, numer WhatsApp sandbox lub produkcyjny, numer SMS | https://console.twilio.com |
| **Airtable** | Personal Access Token, Base ID, tabela "Wizyty" | https://airtable.com/create/tokens |

---

## 3. Konfiguracja krok po kroku

### Krok 1 — Import workflow do n8n

1. Otwórz n8n → **Settings → Import workflow**
2. Wgraj plik `01_system_agentow_24_7.json`
3. Workflow pojawi się na liście jako `01 – System Agentów 24/7 (WhatsApp + SMS + CRM)`

---

### Krok 2 — Credential: OpenAI

1. W n8n kliknij **Credentials → New Credential → OpenAI API**
2. Wklej swój klucz API (`sk-...`)
3. Zapisz jako np. `OpenAI – System Agentów`
4. W węźle `AI Agent – Decyzja` wybierz ten credential z listy

---

### Krok 3 — Credential: Twilio (HTTP Basic Auth)

Twilio używa Basic Auth (Account SID jako login, Auth Token jako hasło).

1. W n8n: **Credentials → New Credential → HTTP Basic Auth**
2. Wypełnij:
   - **User:** `ACxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx` (Twilio Account SID)
   - **Password:** twój Twilio Auth Token
3. Zapisz jako np. `Twilio Basic Auth`
4. W węzłach `Wyślij WhatsApp (Twilio)` i `Wyślij SMS (Twilio)` wybierz ten credential

---

### Krok 4 — Podmień placeholdery (patrz sekcja 4)

Wszystkie wartości `YOUR_*` w węzłach HTTP Request podmień na prawdziwe dane.

---

### Krok 5 — Airtable: utwórz tabelę "Wizyty"

Szczegóły w sekcji 5. Tabela musi mieć dokładnie te nazwy kolumn co w workflow.

---

### Krok 6 — Konfiguracja Twilio Webhook

Po aktywacji workflow skopiuj URL webhooka z węzła `Webhook – WhatsApp / SMS`:

```
https://TWOJ-N8N.com/webhook/whatsapp-webhook
```

**Dla WhatsApp Sandbox (testowy):**
1. Twilio Console → Messaging → Try it out → Send a WhatsApp message
2. W polu "When a message comes in" wklej URL webhooka
3. Metoda: POST

**Dla WhatsApp produkcyjnego:**
1. Twilio Console → Messaging → Senders → WhatsApp senders
2. W konfiguracji numeru → Webhook URL → wklej URL → POST

**Dla SMS:**
1. Twilio Console → Phone Numbers → Manage → Active numbers
2. Kliknij swój numer → Messaging Configuration
3. "A message comes in" → Webhook → wklej URL → POST

---

### Krok 7 — Dostosuj prompt AI do swojej firmy

W węźle `AI Agent – Decyzja`, pole **system** (pierwsza wiadomość) — podmień domyślny prompt na swój:

```
Jesteś wirtualnym asystentem firmy [NAZWA FIRMY].
Odpowiadasz na pytania klientów, umawiasz wizyty i informujesz o usługach.
Bądź uprzejmy, profesjonalny i zwięzły. Odpowiadaj po polsku.

Usługi firmy:
- [USŁUGA 1]: [OPIS], cena: [CENA]
- [USŁUGA 2]: [OPIS], cena: [CENA]

Godziny pracy: [GODZINY]
Adres: [ADRES]
Telefon alarmowy: [TELEFON]

Możesz:
1. Odpowiadać na pytania o usługi
2. Umawiać wizyty (poproś o datę, godzinę, imię)
3. Podawać cennik
4. Przekierowywać pilne sprawy do człowieka

Jeśli klient chce umówić wizytę, zbierz: imię, telefon, preferowana data i godzina, rodzaj usługi.
Zwróć JSON z polami: intent (info/booking/complaint/human_needed), reply (treść odpowiedzi), booking_data (null lub {name, phone, date, time, service}).
```

---

### Krok 8 — Aktywuj workflow

1. Kliknij przełącznik **Active** w prawym górnym rogu
2. URL webhooka staje się aktywny

---

## 4. Wszystkie placeholdery do zamiany

| Węzeł | Pole | Placeholder | Co wpisać |
|-------|------|-------------|-----------|
| `Zapisz do CRM (Airtable)` | URL | `YOUR_BASE_ID` | ID bazy Airtable (format: `appXXXXXXXXXXXXXX`) |
| `Zapisz do CRM (Airtable)` | Header: Authorization | `YOUR_AIRTABLE_TOKEN` | Token Airtable (format: `pat...`) |
| `Wyślij WhatsApp (Twilio)` | URL | `YOUR_ACCOUNT_SID` | Twilio Account SID (format: `ACxx...`) |
| `Wyślij WhatsApp (Twilio)` | Body: From | `YOUR_TWILIO_NUMBER` | Numer Twilio z prefiksem, np. `+48123456789` |
| `Wyślij SMS (Twilio)` | URL | `YOUR_ACCOUNT_SID` | Twilio Account SID (format: `ACxx...`) |
| `Wyślij SMS (Twilio)` | Body: From | `YOUR_TWILIO_SMS_NUMBER` | Numer SMS Twilio, np. `+48123456789` |
| `Powiadom właściciela (SMS)` | URL | `YOUR_ACCOUNT_SID` | Twilio Account SID (ten sam co wyżej) |
| `Powiadom właściciela (SMS)` | Body: From | `YOUR_TWILIO_SMS_NUMBER` | Numer Twilio SMS (ten sam co wyżej) |
| `Powiadom właściciela (SMS)` | Body: To | `YOUR_OWNER_PHONE` | Twój prywatny numer telefonu, np. `+48600123456` |

**Jak znaleźć Base ID Airtable:**  
Wejdź na airtable.com → otwórz bazę → skopiuj z URL: `https://airtable.com/appXXXXXXXXX/...` — część `appXXX` to Base ID.

**Jak znaleźć Airtable Personal Access Token:**  
https://airtable.com/create/tokens → Create token → zaznacz scope: `data.records:write`, `schema.bases:read` → wybierz swoją bazę.

---

## 5. Struktura tabeli w Airtable

Utwórz bazę Airtable z tabelą o nazwie **dokładnie:** `Wizyty`

| Nazwa kolumny | Typ pola | Uwagi |
|---------------|----------|-------|
| `Imię` | Single line text | Imię klienta |
| `Telefon` | Phone number | Numer nadawcy (z prefiksem whatsapp: lub +48) |
| `Data` | Single line text | Data podana przez klienta (tekst, nie date-field) |
| `Godzina` | Single line text | Godzina podana przez klienta |
| `Usługa` | Single line text | Rodzaj usługi |
| `Status` | Single select | Opcje: `Nowa`, `Potwierdzona`, `Odwołana` |
| `Kanał` | Single select | Opcje: `whatsapp`, `sms` |
| `Data zapisu` | Single line text | Timestamp ISO z n8n |

> **Ważne:** Nazwy kolumn muszą być identyczne (z polskimi znakami: `Imię`, `Usługa`). Airtable API jest case-sensitive.

---

## 6. Analiza workflow — plusy, minusy, zagrożenia

### Plusy

- **Prosta architektura** — 9 węzłów, łatwa do zrozumienia i modyfikacji
- **Obsługa dwóch kanałów** — WhatsApp i SMS z jednego webhooka
- **Automatyczny zapis do CRM** — rezerwacje trafiają do Airtable bez udziału człowieka
- **GPT-4o-mini** — dobry stosunek ceny do jakości dla prostych konwersacji obsługi klienta
- **Szybki w deployment** — po podmienie 6 placeholderów gotowy do pracy
- **Structured output (JSON)** — AI zwraca dane w przewidywalnym formacie

### Minusy

- **Brak pamięci konwersacji** — każda wiadomość jest traktowana osobno. Klient musi podać imię, datę, godzinę i usługę w jednej wiadomości, inaczej rezerwacja nie zostanie zapisana. Dla WhatsApp to poważna wada — klienci rozmawiają naturalnie, wielowątkowo.
- **Brak eskalacji do człowieka** — AI może zwrócić `intent: human_needed`, ale workflow nic z tym nie robi
- **Brak obsługi skarg** — `intent: complaint` nie wywołuje żadnej specjalnej akcji
- **Airtable przez raw HTTP** — zamiast dedykowanego węzła Airtable (mniej czytelne, trudniejsze w utrzymaniu)
- **Brak potwierdzenia e-mail/SMS** do właściciela firmy o nowej rezerwacji
- **Jeden prompt dla wszystkich** — brak personalizacji pod branżę klienta (jest tylko jako placeholder)

### Zagrożenia

| Zagrożenie | Poziom | Opis |
|-----------|--------|------|
| **Twilio timeout** | Wysoki | Twilio oczekuje odpowiedzi w ciągu ~15 sekund. Jeśli OpenAI odpowie wolniej (rzadkie, ale możliwe), Twilio ponowi żądanie i klient dostanie odpowiedź dwa razy |
| **Null pointer przy booking_data** | Wysoki | Jeśli AI uzna intent = booking, ale nie zebrała jeszcze wszystkich danych, `booking_data` = null. Zapis do Airtable zacznie się i wywoła błąd |
| **Token w nagłówku HTTP** | Średni | Token Airtable jest wpisany jako plain text w konfiguracji węzła zamiast jako n8n Credential. Będzie widoczny w logach wykonań n8n |
| **Brak limitów** | Średni | Jeden klient może wysłać 100 wiadomości — wszystkie trafią do OpenAI. Brak rate-limitingu |
| **Błąd składni w body Airtable** | Niski | Pole `body` zaczyna się od `=` (wyrażenie JS), ale wewnątrz używa `{{ }}` zamiast template literals `` ${} `` — może powodować błędy parsowania w niektórych wersjach n8n |
| **Koszty OpenAI** | Niski | GPT-4o-mini jest tani, ale bez limitów może generować koszty przy dużym ruchu |

---

## 7. Znane błędy i co należy poprawić

### Błąd 1 — Body Airtable: składnia wyrażenia

**Problem:** Pole `body` węzła `Zapisz do CRM (Airtable)` zaczyna się od `=` (tryb wyrażenia JS), ale wewnątrz używa `{{ $json.booking_data.name }}` zamiast poprawnego JavaScript `${$json.booking_data.name}`.

**Poprawka:** Usuń `=` z początku i zostaw jako zwykły string z `{{ }}`, albo zmień na template literal:

```
`{
  "records": [{
    "fields": {
      "Imię": "${$json.booking_data?.name ?? ''}",
      "Telefon": "${$json.from}",
      "Data": "${$json.booking_data?.date ?? ''}",
      "Godzina": "${$json.booking_data?.time ?? ''}",
      "Usługa": "${$json.booking_data?.service ?? ''}",
      "Status": "Nowa",
      "Kanał": "${$json.channel}",
      "Data zapisu": "${$now}"
    }
  }]
}`
```

Lub użyj dedykowanego węzła **Airtable** z n8n zamiast HTTP Request.

---

### Błąd 2 — Brak guard na null booking_data

**Problem:** Węzeł `Czy rezerwacja?` przepuszcza do Airtable gdy `intent = booking`, ale `booking_data` może być `null` (AI jeszcze nie zebrała danych).

**Poprawka:** Dodaj drugi warunek w węźle IF:

```
intent == "booking" AND booking_data != null AND booking_data.name != null
```

---

### Błąd 3 — Brak obsługi human_needed i complaint

**Poprawka — dodaj węzeł IF po `Czy rezerwacja?`:**

Ścieżka `NIE (nie-booking)` → `Czy pilne?` (IF: `intent == "human_needed" OR intent == "complaint"`)  
→ TAK: wyślij powiadomienie SMS/email do właściciela firmy  
→ NIE: normalny response (WhatsApp lub SMS)

---

### Błąd 4 — Airtable token jako plain text

**Poprawka:** Utwórz n8n Credential typu **Header Auth**:
- Name: `Airtable Token`
- Name (header): `Authorization`
- Value: `Bearer patXXXXXXXXXXXXXXXX`

Następnie w węźle HTTP Request zmień `authentication` na ten credential zamiast hardkodować token.

---

### Rekomendowane usprawnienia (priorytet)

1. **Dodaj pamięć konwersacji** — użyj węzła `@n8n/n8n-nodes-langchain.memoryBufferWindow` + agent LangChain zamiast prostego OpenAI call. Przechowuj historię w Redis lub Airtable osobna tabela `Konwersacje`.

2. **Powiadomienie dla właściciela** — po zapisie rezerwacji wyślij SMS lub e-mail: `Nowa rezerwacja: {imię}, {data}, {usługa}`.

3. **Dodaj Error Handler** — kliknij w każdy węzeł HTTP → Settings → Enable "Continue on error" + osobna ścieżka logująca błędy.

4. **Limit długości odpowiedzi** — dodaj w prompt: `Odpowiedź nie może przekroczyć 160 znaków dla SMS.`

---

## 8. Testowanie

### Test 1 — Webhook (bez Twilio)

1. Aktywuj workflow
2. Skopiuj URL webhooka z węzła `Webhook – WhatsApp / SMS`
3. Wyślij testowe żądanie POST:

```bash
curl -X POST https://TWOJ-N8N.com/webhook/whatsapp-webhook \
  -H "Content-Type: application/json" \
  -d '{"From": "whatsapp:+48123456789", "Body": "Dzień dobry, chciałbym umówić wizytę na piątek o 14:00, nazywam się Jan Kowalski, usługa: przegląd auta"}'
```

4. Sprawdź w n8n: zakładka **Executions** → powinno być widoczne wykonanie

### Test 2 — Airtable

1. Wyślij żądanie z pełnymi danymi rezerwacji (jak w teście 1)
2. Sprawdź tabelę `Wizyty` w Airtable — powinien pojawić się nowy rekord

### Test 3 — WhatsApp Sandbox Twilio

1. Zaloguj się na https://console.twilio.com
2. Messaging → Try it out → Send a WhatsApp message
3. Dołącz do sandboxa (wyślij kod z ekranu na podany numer)
4. Skonfiguruj webhook URL (patrz Krok 6)
5. Wyślij wiadomość z telefonu na numer sandboxa
6. Odpowiedź powinna przyjść z powrotem w ciągu kilku sekund

### Checklist przed uruchomieniem produkcyjnym

- [ ] Podmienione wszystkie 6 placeholderów (sekcja 4)
- [ ] Tabela `Wizyty` w Airtable z poprawnymi nazwami kolumn
- [ ] Webhook URL skonfigurowany w Twilio dla WhatsApp i SMS
- [ ] Prompt AI dostosowany do konkretnej firmy (branża, usługi, ceny, godziny)
- [ ] Test curl zakończony sukcesem
- [ ] Test Airtable — rekord pojawił się w tabeli
- [ ] Test WhatsApp Sandbox — odpowiedź wraca do klienta
- [ ] Workflow aktywny (przełącznik "Active" = ON)

---

---

## Changelog

### v1.1 — 2026-07-02

**Poprawki błędów:**

| # | Węzeł | Problem | Rozwiązanie |
|---|-------|---------|-------------|
| 1 | `Czy rezerwacja?` | Brak guard na `null` — `booking_data` mogło być `null` przy `intent=booking` (np. klient pisze "chcę wizytę" bez danych), co powodowało błąd zapisu do Airtable | Dodano drugi warunek AND: `booking_data !== null && typeof booking_data === 'object' && !!booking_data.name` |
| 2 | `Zapisz do CRM (Airtable)` | Body zaczynało się od `=` (tryb wyrażenia JS), ale wewnątrz używało `{{ }}` — niepoprawna składnia JS | Zmieniono na `={{ JSON.stringify({...}) }}` — pełne wyrażenie JS z `JSON.stringify`, proper null guards przez ternary `booking_data ? ... : ''` |
| 3 | `Zapisz do CRM (Airtable)` | Usunięto zbędny `authentication: "genericCredentialType"` przy jednoczesnym twardym kodowaniu nagłówka Auth | Zostaje header z placeholderem (prostsze dla użytkownika) bez duplikatu auth |
| 4 | Brak węzła | Intenty `human_needed` i `complaint` nie miały żadnej obsługi mimo że AI je zwracała | Dodano węzeł `Czy pilne?` (IF: intent==human_needed OR complaint) z rozgałęzieniem |
| 5 | Brak węzła | Brak powiadomienia właściciela o skargach/pilnych sprawach | Dodano węzeł `Powiadom właściciela (SMS)` — wysyła SMS z typem zdarzenia i fragmentem wiadomości |

**Nowy przepływ dla intent ≠ booking:**
```
Czy rezerwacja? (FALSE)
  → Czy pilne? (OR: human_needed / complaint)
      TRUE  → Powiadom właściciela (SMS) + WhatsApp czy SMS? (równolegle)
      FALSE → WhatsApp czy SMS?
```

---

## 9. Bezpieczeństwo kluczy i git

### Incydent 2026-07-02 — co się stało

Podczas commitu `4c13a9c` do repozytorium `poddamian/integracjebiznesowe` przypadkowo wrzucono plik `05_Baza_wiedzy_i_research/ag ai i n8n.txt` zawierający przykładowy `docker-compose.yml` z hasłami bazy danych:

```
POSTGRES_PASSWORD=BezpieczneHasloKlienta123!
DB_POSTGRESDB_PASSWORD=WpiszTutajPotezneHasloBazy123!
N8N_BASIC_AUTH_PASSWORD=SuperBezpieczneHasloDostepu2026!
```

**To były przykłady edukacyjne, nie prawdziwe hasła.** GitGuardian wykrył je jako "Generic Database Assignment" i wysłał alert. Żadne realne dane dostępowe nie wyciekły.

Plik został usunięty z repozytorium w commit `26740d0`, ale **nadal istnieje w historii git**. Aby całkowicie usunąć go z historii:

### Jak wyczyścić historię git z wrażliwych plików

**Opcja A — git filter-repo (zalecane):**

```bash
# Zainstaluj git-filter-repo
pip install git-filter-repo

# Usuń plik z całej historii
git filter-repo --path "05_Baza_wiedzy_i_research/ag ai i n8n.txt" --invert-paths

# Force push (UWAGA: nadpisze historię na GitHub)
git push origin master --force
```

**Opcja B — BFG Repo Cleaner (szybsze dla dużych repozytoriów):**

```bash
# Pobierz BFG z https://rtyley.github.io/bfg-repo-cleaner/
java -jar bfg.jar --delete-files "ag ai i n8n.txt"
git reflog expire --expire=now --all && git gc --prune=now --aggressive
git push origin master --force
```

Po force push zgłoś plik w GitGuardian jako "False Positive" (hasła były przykładami, nie prawdziwymi sekretami).

---

### Zasady — co nie może trafić do git

| NIE commituj | Zamiast tego |
|-------------|-------------|
| Prawdziwe tokeny API (Airtable, Twilio, OpenAI) | Użyj n8n Credentials (szyfrowane w bazie n8n) |
| Pliki `.env` z prawdziwymi hasłami | Dodaj `.env` do `.gitignore` |
| `docker-compose.yml` z prawdziwymi hasłami | Użyj `.env` + `${VARIABLE}` w compose |
| Pliki konfiguracyjne z connection strings | Szablony z placeholderami zamiast wartości |
| Notatki/dokumenty zawierające przykłady z "prawdziwymi" hasłami | Używaj fikcyjnych haseł: `HASLO_DO_ZMIANY`, `XXX`, `<twoje-haslo>` |

### Jak bezpiecznie przechowywać klucze w n8n

Wszystkie tokeny (Airtable, Twilio, OpenAI) należy dodać jako **Credentials w n8n**:

1. n8n → Settings → Credentials → New Credential
2. Wybierz typ (np. "OpenAI API", "HTTP Basic Auth")
3. Wpisz prawdziwy klucz
4. W węzłach workflow wybierz credential z listy zamiast wpisywać go na twardo

Credentials są szyfrowane w bazie n8n i **nigdy nie trafiają do pliku JSON workflow** — eksportowany JSON zawiera tylko referencję do nazwy credentiala, nie jego wartość.

### .gitignore — co już jest zablokowane

Plik `.gitignore` w repozytorium blokuje:
```
05_Baza_wiedzy_i_research/
02_Workflowy_n8n/
.claude/
.agents/
```

Jeśli dodasz nowy folder z notatkami lub plikami konfiguracyjnymi, dopisz go do `.gitignore` zanim wykonasz `git add`.

*Dokument wygenerowany: 2026-07-02 | Integracje Biznesowe*
