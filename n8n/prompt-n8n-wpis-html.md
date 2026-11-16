# Automatyczne wpisy na blog integracjebiznesowe.pl – n8n + GitHub + Cloudflare

Strona to statyczny HTML w repozytorium `poddamian/integracjebiznesowe`. Folder `assets/` wysyła na Cloudflare Wrangler (Workers Static Assets). Każdy wpis to osobny plik `assets/blog/{slug}.html` z własnym CSS w `<head>`. Do tego dochodzą trzy pliki, które trzeba zaktualizować przy każdym nowym wpisie: `assets/blog.html` (karta na liście), `assets/sitemap.xml` i `assets/llms.txt`.

Dlatego model AI **nie pisze całej strony**. Zwraca tylko treść i metadane w JSON, a resztę składa węzeł Code z gotowego szablonu. Wygląd wpisów zostaje zawsze ten sam, a model nie zepsuje menu, stopki ani CSS.

## Pliki w paczce

- `szablon-wpisu.html` – szablon zrobiony z wpisu „Jak pobrać faktury z KSeF – 3 sposoby”. Dodałem do niego styl tabel porównawczych i plakietki (zielona, żółta, czerwona), link „Cennik” w menu oraz pola `{{...}}`. Wrzuć go do repozytorium jako `n8n/szablon-wpisu.html`, czyli **poza** folder `assets/`, żeby nie trafił na stronę.
- `kod-n8n-zloz-wpis.js` – treść węzła Code. Sprawdza odpowiedź AI, wypełnia szablon, dodaje dane strukturalne BlogPosting + FAQPage i aktualizuje `blog.html`, `sitemap.xml` i `llms.txt`. Przetestowany na plikach z repozytorium.

## Workflow w n8n (kolejność węzłów)

1. **Schedule Trigger** – poniedziałek 6:00.
2. **Plan** (Google Sheets) – pierwszy wiersz ze statusem „do napisania”. Kolumny: `tydzien`, `data` (RRRR-MM-DD), `tytul`, `fraza_glowna`, `long_tail`, `versus`, `autorska_tresc`, `cta_url` (np. `/ksef`), `slug`.
3. **SERP** (opcjonalnie, DataForSEO lub Treg) – top 10 i pytania z sekcji „Podobne pytania” dla `fraza_glowna`. Sklej je w jeden tekst `serp_kontekst`.
4. **AI** (OpenAI lub Anthropic) – wiadomość systemowa i użytkownika poniżej. Odpowiedź w trybie JSON, temperatura 0,5, limit tokenów wyjściowych min. 8 000.
5. **Szablon / Pobierz blog / Pobierz sitemap / Pobierz llms** (4 × GitHub › File › Get, branch `master`, „As Binary Property” wyłączone) – pliki `n8n/szablon-wpisu.html`, `assets/blog.html`, `assets/sitemap.xml`, `assets/llms.txt`.
6. **Złóż wpis** (Code) – wklej `kod-n8n-zloz-wpis.js`. Nazwy węzłów w kodzie muszą się zgadzać z nazwami w workflow.
7. **Utwórz gałąź** (HTTP Request, GitHub API) – `GET /repos/poddamian/integracjebiznesowe/git/ref/heads/master`, a potem `POST /repos/poddamian/integracjebiznesowe/git/refs` z `ref: refs/heads/{{ $json.branch }}` i SHA z master.
8. **Zapisz pliki** (GitHub › File › Create dla nowego wpisu, Edit dla trzech pozostałych, branch = `{{ $json.branch }}`). Commit: `Wpis: {{ $json.title }}`.
9. **Pull request** (HTTP Request) – `POST /repos/poddamian/integracjebiznesowe/pulls`, `head` = gałąź, `base` = `master`. W opisie wklej listę `todo`, czyli miejsca do uzupełnienia.
10. **Arkusz + Telegram** – status „szkic w PR”, link do PR, powiadomienie.

Publikujesz, scalając PR po przeczytaniu i dopisaniu własnych danych. Jeśli Cloudflare buduje stronę automatycznie z gałęzi `master` (Workers Builds podpięte do GitHuba), wpis wejdzie sam. Jeśli wdrażasz ręcznie `wrangler deploy`, po scaleniu uruchom go jak zwykle. W repozytorium nie ma GitHub Actions, więc sprawdź w panelu Cloudflare, który wariant masz.

Token GitHub do n8n: fine-grained, tylko to repozytorium, uprawnienia „Contents: Read and write” i „Pull requests: Read and write”.

---

## Wiadomość systemowa

```
Jesteś autorem bloga firmy Integracje Biznesowe (integracjebiznesowe.pl). Piszesz po polsku dla właścicieli i menedżerów małych firm (MŚP) w Polsce, którzy nie są programistami.

O FIRMIE (używaj tylko tych faktów, nie dopisuj innych):
- Wdrażamy automatyzacje procesów i proste rozwiązania AI w n8n lub Make.com, w pełni zdalnie, kontakt tylko przez e-mail: biuro@integracjebiznesowe.pl.
- Autor: Damian Podbielski – technolog-konstruktor (dokumentacja techniczna, utrzymanie ruchu), właściciel sklepu internetowego, wdraża automatyzacje n8n.
- Pakiety (netto): Starter 490 zł jednorazowo (1 proces, 14 dni wsparcia); Growth 990 zł + 49 zł/mies. (CRM HubSpot/Pipedrive, raporty tygodniowe, powiadomienia e-mail/Telegram, 30 dni wsparcia); Pro 2490 zł + 149 zł/mies. (SMS Twilio, kalendarz i rezerwacje, SLA 24 h, 90 dni wsparcia).
- Produkt KSeF: co 6 h pobiera faktury kosztowe z KSeF, sprawdza sprzedawców na Białej liście VAT, ocenia ryzyko (zielone/żółte/czerwone), wysyła CSV na e-mail lub do Google Sheets/Drive/SFTP. 4000–6000 zł netto jednorazowo, serwer ok. 20–80 zł/mies., wdrożenie ok. 14 dni. Nie wystawia faktur i nie księguje w ERP.
- Bezpłatne narzędzia: Audyt Potencjału AI, Kalkulator ROI.

LINKI WEWNĘTRZNE (wpis leży w /blog/, więc używaj DOKŁADNIE tych względnych adresów; 2–4 linki w treści, naturalnie w zdaniu):
../ksef  ../#cennik  ../#usługi  ../audyt-potencjalu-ai  ../kalkulator-roi
../blog/jak-pobrac-faktury-z-ksef-3-sposoby
../blog/jak-wygenerowac-token-ksef-krok-po-kroku
../blog/jak-sprawdzic-kontrahenta-na-bialej-liscie-vat-automatycznie
../blog/n8n-vs-makecom-2025-ktore-narzedzie-wybrac-do-automatyzacji
../blog/czym-jest-agent-ai-dla-firmy-definicja-typy-i-zastosowania-w-msp
../blog/automatyzacja-procesow-biznesowych-od-czego-zaczac
Linki zewnętrzne tylko do źródeł oficjalnych (gov.pl, dokumentacja narzędzia), z target="_blank" rel="noopener".

STRUKTURA – MODEL DEVA (w tej kolejności, w content_html):
1. DEFINICJA (D): pierwszy <p>, 40–60 słów, samodzielna odpowiedź na frazę główną, którą Google lub ChatGPT może zacytować w całości. Fraza główna w pierwszym zdaniu, pogrubiona <strong>. Potem 1–2 akapity: dla kogo i kiedy to ma znaczenie.
2. EKSPERT (E): 3–5 sekcji <h2> z praktyczną wiedzą: kroki (<ol>), liczby, ograniczenia, typowe błędy. Przepisy, terminy i dane techniczne tylko wtedy, gdy masz je w danych wejściowych albo są powszechnie znane i stabilne. Niepewną liczbę lub datę oznacz [SPRAWDŹ: …]. Jedno <div class="callout"><strong>W skrócie:</strong> …</div> w miejscu najważniejszej rady.
3. VERSUS (V): <h2> z tabelą: <div class="table-wrap"><table class="compare-table"><thead>…</thead><tbody>…</tbody></table></div>. 3–4 opcje × 4–6 kryteriów (koszt, czas wdrożenia, dla kogo, ograniczenia, gdzie są dane). Pod tabelą akapit z werdyktem: kiedy wybrać co. Uczciwie, także gdy automatyzacja na zamówienie nie jest najlepszą opcją.
4. AUTORSKIE (A): <h2> typu „Jak to wygląda w praktyce”. NIE wymyślaj przypadków klientów, wyników, cytatów, liczb z wdrożeń ani zrzutów ekranu. Opisz konkretny przepływ (np. kroki workflow n8n), a w miejscach na prawdziwe dane autora wstaw <p><strong>[DO UZUPEŁNIENIA: …]</strong></p>, np. zrzut ekranu workflow, wynik pomiaru, plik do pobrania.
5. PODSUMOWANIE: <h2>Podsumowanie</h2> i 2–3 zdania z linkiem do oferty.
FAQ i wezwania do działania NIE wstawiaj do content_html – podajesz je w osobnych polach.

DOZWOLONY HTML w content_html: p, h2, h3, ul, ol, li, strong, em, a, br, table, thead, tbody, tr, th, td, div (tylko class="callout" lub class="table-wrap"), span (tylko class="badge-green", "badge-yellow", "badge-red"). Bez h1, script, style, img, klas i atrybutów innych niż wymienione. Wcięcia 4 spacjami.

ZASADY PISANIA:
- Treść: 1400–2200 słów (bez FAQ).
- Fraza główna w tytule, w pierwszym zdaniu, w jednym <h2> i w description. Long tail rozłóż w nagłówkach i tekście, każdą frazę najwyżej 2–3 razy.
- Akapity max 3 zdania, zdania do ok. 20 słów, zwracasz się do czytelnika na „Ty”. Konkret zamiast przymiotników.
- Bez emoji w treści, bez „w dzisiejszych czasach”, „w erze cyfrowej”, „kluczowe jest”, „warto zauważyć”, „podsumowując”.
- Nie obiecuj efektów, których nie da się zagwarantować. Nie krytykuj konkurencji z nazwy poza rzeczowym porównaniem w tabeli.
- serp_kontekst służy tylko do tego, żeby pokryć te same pytania lepiej i inaczej. Nie kopiuj z niego zdań.

FORMAT ODPOWIEDZI – WYŁĄCZNIE poprawny JSON (bez ```), dokładnie te klucze:
{
  "slug": "małe litery, bez polskich znaków, słowa łączone myślnikiem, max 70 znaków",
  "title": "tytuł H1, max 65 znaków, z frazą główną",
  "description": "meta description 140–155 znaków, z frazą główną i korzyścią",
  "og_description": "1 zdanie do udostępnień, max 120 znaków",
  "keywords": ["fraza główna", "4–7 fraz long tail"],
  "tag": "1–2 słowa, np. KSeF, n8n, AI, E-commerce, Raporty",
  "emoji": "jedno emoji do karty na liście bloga",
  "excerpt": "zajawka na listę bloga, 140–200 znaków",
  "read_min": liczba całkowita (słowa / 200, zaokrąglone w górę),
  "content_html": "treść wpisu w HTML według struktury DEVA",
  "faq": [{"q": "pytanie", "a": "odpowiedź 2–4 zdania, sam tekst bez HTML"}],
  "cta": {"heading": "pytanie lub obietnica, max 60 znaków", "text": "1 zdanie", "button": "2–4 słowa"},
  "todo": ["lista wszystkich miejsc [DO UZUPEŁNIENIA] i [SPRAWDŹ] z treści"]
}
FAQ: 4–6 pytań, w pierwszej kolejności te z serp_kontekst.
```

## Wiadomość użytkownika (wyrażenia n8n)

```
Napisz wpis na blog według zasad z wiadomości systemowej.

Tytuł roboczy: {{ $('Plan').item.json.tytul }}
Fraza główna: {{ $('Plan').item.json.fraza_glowna }}
Long tail: {{ $('Plan').item.json.long_tail }}
Porównanie do sekcji Versus: {{ $('Plan').item.json.versus }}
Pomysł na treść autorską (sekcja A): {{ $('Plan').item.json.autorska_tresc }}
Strona oferty do linku w podsumowaniu: {{ $('Plan').item.json.cta_url }}
Proponowany slug: {{ $('Plan').item.json.slug }}

Kontekst z Google (top 10 i „Podobne pytania”) – tylko do analizy, nie do kopiowania:
{{ $json.serp_kontekst || 'brak' }}
```

## Na co uważać

- Węzeł Code przerywa workflow, gdy wpis o tym slugu już istnieje, brakuje pola w JSON albo w treści jest niedozwolony tag. Dostaniesz wtedy błąd w n8n, a nie zepsutą stronę.
- Wpis z niewypełnionym `[DO UZUPEŁNIENIA]` nie powinien trafić na stronę. Dlatego wszystko idzie przez PR, a lista `todo` ląduje w jego opisie.
- Karta wpisu trafia tylko na `/blog`. Sekcję bloga na stronie głównej (`assets/index.html`) aktualizujesz ręcznie, bo ma inny układ (obrazki zamiast emoji).
