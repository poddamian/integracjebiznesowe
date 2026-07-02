# Plan wdrożenia domeny integracjebiznesowe.pl do Cloudflare

Domena zarejestrowana na: **lh.pl**  
Cel: obsługa DNS przez Cloudflare (proxy, SSL, ochrona, szybkość)

---

## KROK 1 — Dodaj domenę do Cloudflare

1. Zaloguj się na [cloudflare.com](https://cloudflare.com) (utwórz konto jeśli nie masz — plan Free wystarczy)
2. Kliknij **Add a domain**
3. Wpisz: `integracjebiznesowe.pl`
4. Wybierz plan **Free**
5. Cloudflare przeskanuje istniejące rekordy DNS z lh.pl — przejrzyj je i kliknij **Continue**

---

## KROK 2 — Zmień serwery nazw (NS) w lh.pl

Cloudflare poda Ci dwa serwery nazw w formacie:
```
abcd.ns.cloudflare.com
efgh.ns.cloudflare.com
```

1. Zaloguj się do panelu **lh.pl**
2. Wejdź w zarządzanie domeną `integracjebiznesowe.pl`
3. Znajdź sekcję **Serwery nazw (NS)** lub **DNS**
4. Usuń obecne serwery lh.pl i wpisz oba serwery podane przez Cloudflare
5. Zapisz zmiany

> Propagacja DNS trwa od kilku minut do 48 godzin. Cloudflare wyśle email gdy domena zostanie aktywowana.

---

## KROK 3 — Skonfiguruj rekordy DNS w Cloudflare

Po aktywacji przejdź do **DNS → Records** i ustaw:

### Jeśli hostujesz stronę na serwerze (np. VPS, shared hosting):
| Typ  | Nazwa | Wartość          | Proxy |
|------|-------|------------------|-------|
| A    | @     | IP serwera       | ✅ ON |
| A    | www   | IP serwera       | ✅ ON |

### Jeśli używasz GitHub Pages / Netlify / Vercel:
| Typ   | Nazwa | Wartość                        | Proxy |
|-------|-------|--------------------------------|-------|
| CNAME | @     | twoja-nazwa.netlify.app        | ✅ ON |
| CNAME | www   | twoja-nazwa.netlify.app        | ✅ ON |

### Email (MX) — żeby działało biuro@integracjebiznesowe.pl:
Zależy od dostawcy poczty. Przykłady:

**Google Workspace:**
| Typ | Nazwa | Wartość              | Priorytet |
|-----|-------|----------------------|-----------|
| MX  | @     | aspmx.l.google.com   | 1         |
| MX  | @     | alt1.aspmx.l.google.com | 5      |

**Zoho Mail (darmowy dla 1 domeny):**
| Typ | Nazwa | Wartość              | Priorytet |
|-----|-------|----------------------|-----------|
| MX  | @     | mx.zoho.eu           | 10        |
| TXT | @     | zoho-verification=... | —        |

> Rekordów MX **nie przełączaj przez proxy Cloudflare** (zostawiaj szarą chmurę).

---

## KROK 4 — SSL i ustawienia Cloudflare

W panelu Cloudflare ustaw:

- **SSL/TLS → Overview** → tryb: **Full (strict)**
- **SSL/TLS → Edge Certificates** → włącz **Always Use HTTPS**
- **Speed → Optimization** → włącz **Auto Minify** (JS, CSS, HTML)
- **Security → Settings** → Security Level: **Medium**

---

## KROK 5 — Weryfikacja

Po aktywacji sprawdź:

- [ ] `https://integracjebiznesowe.pl` otwiera stronę z kłódką SSL
- [ ] `http://integracjebiznesowe.pl` przekierowuje na https://
- [ ] `https://www.integracjebiznesowe.pl` też działa
- [ ] Email `biuro@integracjebiznesowe.pl` odbiera wiadomości
- [ ] W Cloudflare widać zielony status domeny

---

## Opcjonalnie — Strona na GitHub Pages (darmowy hosting)

Jeśli chcesz hostować pliki HTML bezpośrednio z folderu (bez płatnego serwera):

1. Utwórz repozytorium na GitHub o nazwie `integracjebiznesowe`
2. Wgraj pliki z `01_Strony_WWW/` do repozytorium
3. Wejdź w **Settings → Pages** → Source: `main` branch, folder `/`
4. Dodaj plik `CNAME` z zawartością: `integracjebiznesowe.pl`
5. W Cloudflare DNS dodaj rekord CNAME: `@` → `twoja-nazwa.github.io`

---

## Podsumowanie kolejności

```
lh.pl (kup/masz domenę)
  ↓ zmień NS na Cloudflare
Cloudflare (zarządza DNS, SSL, proxy)
  ↓ rekordy A/CNAME wskazują na hosting
Serwer / GitHub Pages / Netlify (pliki HTML)
```

Szacowany czas wdrożenia: **1–2 godziny** (+ do 24h propagacja DNS)
