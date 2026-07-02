# Wdrożenie Stripe — instrukcja krok po kroku

Cel: podłączyć przyciski „Zapłać zadatek" na `oferta-klienta.html` do prawdziwych linków płatności Stripe.

---

## 1. Rejestracja i aktywacja konta

1. Wejdź na **dashboard.stripe.com** → „Start now"
2. Podaj e-mail, ustaw hasło, kraj: **Polska**
3. Po zalogowaniu kliknij **Activate payments** (banner u góry)
4. Wypełnij formularz aktywacji:
   - Typ: **Individual / Sole proprietor** (jednoosobowa działalność)
   - NIP: `Twój NIP`
   - Adres: `ul. Radziwiłłowska 10, 16-060 Zabłudów`
   - Strona www: `https://integracjebiznesowe.pl`
   - Opis działalności: `Wdrożenia automatyzacji procesów biznesowych opartych na AI`
   - Konto bankowe PLN do wypłat
5. Stripe weryfikuje konto zwykle w ciągu 1–2 dni roboczych.

> Dopóki konto nie jest aktywowane, działasz w trybie testowym — link płatności zadziała, ale pieniędzy nie dostaniesz.

---

## 2. Utwórz produkt dla każdej usługi

Dla każdej z 7 usług tworzysz **oddzielny produkt** w Stripe i **jeden link płatności**.

Ścieżka: **Products** → **+ Add product**

### Lista produktów do stworzenia

| ID w kodzie | Nazwa produktu (Stripe) | Kwota zadatku | Waluta |
|---|---|---|---|
| `agent-24-7` | System Agentów 24/7 — zadatek | **1 200 zł** | PLN |
| `audytor-stron` | Agent Audytor Stron — zadatek | **825 zł** | PLN |
| `agent-opinii` | Agent Opinii Google Maps — zadatek | **750 zł** | PLN |
| `ksef` | Integracja KSeF — zadatek | **1 500 zł** | PLN |
| `weryfikacja-nip` | Weryfikacja Kontrahenta NIP — zadatek | **975 zł** | PLN |
| `system-rag` | System RAG Baza Wiedzy — zadatek | **1 425 zł** | PLN |
| `followup-social` | Follow-Up + Social Media — zadatek | **900 zł** | PLN |

### Dla każdego produktu:

1. **Name**: skopiuj z kolumny „Nazwa produktu" powyżej
2. **Price**: wpisz kwotę zadatku, waluta **PLN**, typ **One time**
3. **Description** (opcjonalnie): `Zadatek 30% na poczet wdrożenia. Pozostałe 70% po odbiorze.`
4. Kliknij **Save product**

---

## 3. Utwórz linki płatności (Payment Links)

Po zapisaniu produktu przejdź do: **Payment Links** → **+ New**

Dla każdego produktu:

1. Kliknij **+ Add a product** → wybierz właśnie stworzony produkt
2. Quantity: `1`
3. Opcje dodatkowe:
   - ✅ **Collect customer's email** — zaznacz
   - **After payment** → `Show confirmation page` (domyślnie OK)
   - **Custom fields** → możesz dodać pole „Nazwa firmy" (opcjonalnie)
4. Kliknij **Create link**
5. Skopiuj link w formacie `https://buy.stripe.com/XXXXX`

---

## 4. Wklej linki do kodu

Otwórz plik `assets/oferta-klienta.html` i znajdź sekcję `SERVICES` (ok. linii 215).

Znajdź i zastąp każdy placeholder odpowiednim linkiem:

```javascript
// PRZED (przykład):
stripeLink: 'STRIPE_LINK_AGENT_24_7'

// PO:
stripeLink: 'https://buy.stripe.com/TWOJ_LINK_TUTAJ'
```

### Dokładne nazwy placeholderów do zastąpienia:

```
STRIPE_LINK_AGENT_24_7       → link dla: System Agentów 24/7
STRIPE_LINK_AUDYTOR_STRON    → link dla: Agent Audytor Stron
STRIPE_LINK_AGENT_OPINII     → link dla: Agent Opinii Google Maps
STRIPE_LINK_KSEF             → link dla: Integracja KSeF
STRIPE_LINK_WERYFIKACJA_NIP  → link dla: Weryfikacja Kontrahenta NIP
STRIPE_LINK_SYSTEM_RAG       → link dla: System RAG Baza Wiedzy
STRIPE_LINK_FOLLOWUP_SOCIAL  → link dla: Follow-Up + Social Media
```

Po wklejeniu linków zapisz plik i wgraj na Cloudflare Pages (git push → auto-deploy).

---

## 5. Test płatności

Przed aktywacją konta możesz testować:

1. W Stripe Dashboard przełącz tryb: **Test mode** (toggle u góry po lewej)
2. Otwórz link płatności w przeglądarce
3. Użyj karty testowej:
   - Numer: `4242 4242 4242 4242`
   - Data: dowolna przyszła, np. `12/34`
   - CVC: `123`
4. Sprawdź w Stripe Dashboard → **Payments** czy płatność się pojawiła

---

## 6. Powiadomienia o nowych płatnościach (opcjonalnie)

### E-mail (najprostsze)

Stripe → **Settings** → **Email notifications** → włącz powiadomienie o każdej płatności na `biuro@integracjebiznesowe.pl`

### Telegram przez n8n (zalecane)

1. Stripe → **Developers** → **Webhooks** → **Add endpoint**
2. URL: `https://TWOJ_N8N.com/webhook/stripe-payment`
3. Events: zaznacz `payment_intent.succeeded`
4. W n8n: workflow przyjmuje webhook → wyciąga `amount`, `customer_email`, `description` → wysyła wiadomość Telegram Bot

---

## 7. Faktura dla klienta (opcjonalnie)

Stripe → **Settings** → **Customer emails** → włącz **Receipt emails**

Klient automatycznie dostanie potwierdzenie płatności na maila po każdej transakcji.

---

## Podsumowanie — kolejność działań

- [ ] Zarejestruj i aktywuj konto Stripe
- [ ] Utwórz 7 produktów (jeden per usługa)
- [ ] Wygeneruj 7 linków płatności
- [ ] Wklej linki do `assets/oferta-klienta.html` (zamień `STRIPE_LINK_XX`)
- [ ] Wgraj plik na Cloudflare Pages (`git push`)
- [ ] Przetestuj kartą testową `4242 4242 4242 4242`
- [ ] Włącz powiadomienia e-mail w Stripe
