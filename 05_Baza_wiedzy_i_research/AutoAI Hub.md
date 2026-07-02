**PODSTAWY N8N**

**Podstawy i Terminologia (5 lekcji)**

Czym są Dane? 📊  
---

## **📥 Czym są dane?**

Dane to nic innego jak **fakty, liczby lub informacje**, które można:

* analizować,  
* przetwarzać,  
* i wykorzystywać do podejmowania decyzji.

Mogą przyjmować różne formy:

* 📈 liczby (np. „42”),  
* 📝 tekst (np. „Zamówienie przyjęte”),  
* 🖼️ obrazki,  
* 🔉 dźwięki,  
* 🌡️ odczyty z czujników,  
* lub **dowolny zestaw informacji**, który niesie znaczenie.

📌 **Dane są wszędzie.** To one napędzają Twoje workflowy w n8n, a także AI, marketing, logikę decyzyjną i automatyzację procesów.

---

## **🎯 Po co uczymy się o danych?**

Jako twórca automatyzacji w n8n musisz:

* 🔄 sterować przepływem danych (input → processing → output),  
* 🔧 umieć przekształcać dane (np. string na liczbę, JSON na tekst),  
* 🌐 integrować dane z API, baz danych, formularzy, webhooków.

📌 Umiejętne operowanie danymi \= skuteczniejsze automatyzacje \+ lepsze wyniki AI.

---

## **📂 Rodzaje danych**

### **1\. Dane Strukturalne**

📌 Przechowywane w tabelach (np. Excel, SQL)

**Cechy:**

* Jasno zdefiniowane kolumny i wiersze  
* Łatwe do analizy i przeszukiwania  
* Zorganizowane dane np. z CRM, formularzy, baz

**Przykład:**

**ID**

**Imię**

**Email**

**Wiek**

1

Jan

jan@example.com

30

---

### **2\. Dane Niestrukturalne**

📌 Brak konkretnego formatu

**Przykłady:**

* E-maile  
* Nagrania audio  
* Zdjęcia, pliki PDF  
* Komentarze z social media

**Wyzwanie:** Trzeba je „przetworzyć”, zanim będą użyteczne – np. za pomocą AI lub narzędzi NLP.

---

### **3\. Dane Półstrukturalne**

📌 Dane z pewną strukturą – ale bardziej elastyczną

**Najczęściej w n8n:**

* JSON  
* XML  
* YAML

**Przykład JSON:**

{

  "imie": "Jan",

  "wiek": 35,

  "produkty": \["buty", "koszula"\]

}

---

## **📦 Popularne formaty danych**

**Format**

**Opis**

**CSV**

Dane w wierszach i kolumnach, oddzielone przecinkiem

**JSON**

Strukturalny, przyjazny dla API i workflowów

**XML**

Bardziej rozbudowany niż JSON, starsze systemy

**YAML**

Lekki, konfiguracyjny, np. w plikach .yml

---

## **🧪 Typy danych w automatyzacji**

**Typ**

**Przykład**

**String**

"To jest tekst"

**Number**

42, 3.14

**Boolean**

true, false

**Array**

\["jabłko", "banan"\]

**Object**

{"klucz": "wartość"}

---

## **🔁 Jak dane płyną w n8n?**

Typowy cykl życia danych:

1. **Pozyskanie** – np. webhook, formularz, e-mail  
2. **Przechowywanie** – np. Google Sheet, PostgreSQL  
3. **Przetwarzanie** – np. Set, Function, AI node  
4. **Analiza lub routing** – np. Switch, IF  
5. **Wynik / akcja** – np. wysyłka e-maila, API call

---

## **🧹 Przetwarzanie danych**

### **Oczyszczanie danych:**

* usuwanie duplikatów  
* wypełnianie pustych pól  
* poprawa formatów

### **Transformacje:**

* zmiana struktury (np. tekst → JSON)  
* scalanie różnych źródeł  
* wyodrębnianie pól z tekstu

---

## **🔐 Bezpieczeństwo danych**

Kluczowe zasady:

* 🔒 Szyfrowanie danych w ruchu i spoczynku  
* 👤 Kontrola dostępu  
* 🕵️ Audyt kto ma dostęp do danych  
* ♻️ Backup i odzyskiwanie danych  
* ⚖️ RODO / GDPR (dane osobowe)

📌 Pracując z danymi osobowymi – zawsze przestrzegaj zasad prywatności.

---

## **📈 Big Data – 5xV**

1. **Volume (Objętość)** – Gigantyczne ilości danych  
2. **Velocity (Szybkość)** – Dane w czasie rzeczywistym  
3. **Variety (Różnorodność)** – Tekst, audio, wideo, struktura  
4. **Veracity (Wiarygodność)** – Jakość i czystość  
5. **Value (Wartość)** – Co z tych danych wynika?

---

## **📊 Jakość danych ma znaczenie**

**Wymiar**

**Co oznacza?**

**Dokładność**

* Dane są poprawne

**Kompletność**

* Nie brakuje ważnych danych

**Spójność**

* Te same dane \= te same wartości

**Aktualność**

* Dane są świeże

**Unikalność**

* Brak duplikatów

**Ważność**

* Format zgodny z wymaganiami

---

## **🛠️ Narzędzia do pracy z danymi**

**Typ**

**Przykłady**

* Arkusze  
* Google Sheets, Excel  
* Bazy danych  
* MySQL, MongoDB, PostgreSQL  
* ETL / automatyzacje  
* n8n, Airbyte  
* Języki  
* Python, SQL, JavaScript  
* Wizualizacje  
* Google Data Studio

---

## **🚀 Dane w AI i agentach AI**

**Rodzaj danych**

**Zastosowanie**

**Training data**

* Uczenie modelu AI

**Live data**

* Dane z sensorów / webhooków

**Feedback data**

* Poprawianie skuteczności AI

**Przykład:**  
 W n8n, agent AI może otrzymać e-mail → przekształcić go w JSON → przekazać do modelu GPT → wygenerować odpowiedź → wysłać ją do klienta.

---

## **📌 Podsumowanie**

* Dane to fundament każdej automatyzacji i AI  
* Rozróżniamy: strukturalne, niestrukturalne i półstrukturalne  
* Format danych (np. JSON) ma znaczenie przy integracjach  
* Przetwarzanie danych to oczyszczanie, transformacja i bezpieczeństwo  
* Lepsze dane \= lepsze decyzje i automatyzacje

---

Typy danych w n8n 🧩📊  
---

## **1\. Co to są typy danych?**

W n8n dane przesyłane między węzłami są reprezentowane jako **obiekty JSON** – czyli struktura oparta na parach klucz: wartość.

Każda z tych wartości ma swój **typ**, który decyduje o tym, jak n8n interpretuje i przetwarza dane w workflow.

### **📌 Podstawowe typy danych w n8n:**

* String – tekst  
* Number – liczby (całkowite i dziesiętne)  
* Boolean – wartości logiczne: true lub false  
* Array – listy danych  
* Object – struktury złożone z par klucz: wartość  
* Null – brak wartości

---

## **2\. Popularne typy danych z przykładami**

---

### **📝 String (tekst)**

To ciąg znaków: słowo, zdanie, e-mail, itd.

**Przykład:**

{

  "name": "John Doe",

  "email": "john@example.com"

}

🔹 Widoczny w n8n jako **fioletowy tekst w cudzysłowie**  
🔹 Typ string pojawi się jako litera A w widoku schemat

---

### **🔢 Number (liczba)**

Reprezentuje wartości numeryczne, takie jak:

* Integer – liczby całkowite (30)  
* Float – liczby dziesiętne (19.99)

**Przykład:**

{

  "age": 30,

  "price": 19.99

}

🔹 W n8n liczby są **zielone i bez cudzysłowów**  
🔹 Typ number oznaczony symbolem \# w widoku schematu

---

### **✅ Boolean (logiczny)**

Służy do reprezentowania wartości **prawda/fałsz**, np.:

* true \= TAK  
* false \= NIE

**Przykład:**

{

  "isActive": true,

  "hasSubscription": false

}

🔹 Wybierany w n8n z rozwijanego pola (checkbox)  
🔹 Widoczny jako **znacznik wyboru** w widoku schematu

---

### **📚 Array (tablica)**

To lista wartości dowolnego typu, ujęta w nawiasy kwadratowe \[\].

**Przykład:**

{

  "tags": \["AI", "Automation", "n8n"\]

}

🔹 W n8n tablica to **lista elementów oddzielonych przecinkami**  
🔹 Możesz mieć:

* Tablicę stringów  
* Tablicę liczb  
* Tablicę obiektów  
* Tablicę tablic

---

### **🧱 Object (obiekt)**

To zbiór uporządkowanych par klucz: wartość, ujęty w nawiasy klamrowe {}.

**Przykład:**

{

  "user": {

    "id": 101,

    "name": "Sarah",

    "email": "sarah@example.com"

  }

}

🔹 W n8n obiekty możesz rozwijać i zwijać w widoku schematu  
🔹 Służą do tworzenia **złożonych danych**, np. danych użytkownika, zamówienia itp.

---

### **🕳️ Null (brak wartości)**

Reprezentuje pole, które istnieje, ale **nie ma przypisanej wartości**.

**Przykład:**

{

  "phone": null

}

🔹 Null **nie jest tym samym co pusty string**  
🔹 Null \= „brak danych”  
🔹 Pusty string \= "" – to nadal string\!

---

## **3\. Jak typy danych wpływają na działanie workflow?**

Typy danych mają **kluczowe znaczenie dla poprawnego działania logiki węzłów**:

**Typ**

**Zastosowanie**

**Boolean**

W węzłach **IF** – warunki true / false

**Number**

W obliczeniach, np. cena × ilość

**Array**

W pętlach – np. wysyłanie wielu e-maili

**Object**

W przechowywaniu danych złożonych – np. dane klienta

**Null**

W kontrolowaniu braków danych (np. pomiń puste pola)

---

## **4\. Dobre praktyki**

✅ **Zawsze sprawdzaj dane w widoku wyjścia** – np. schemat lub JSON  
✅ **Używaj węzła Set**, by ustawić typy jawnie  
✅ **Konwertuj typy**, jeśli napotykasz błędy – np. string → liczba  
✅ **Testuj różne przypadki** – pusty string, null, liczby ujemne itd.  
✅ **Unikaj mylenia stringów z booleanami\!** (np. "true" ≠ true)

---

## **📦 Podsumowanie**

* Typ danych to fundament działania n8n  
* Znajomość typów pozwala tworzyć **stabilne, czytelne i odporne** workflowy  
* Błąd typu danych to jedna z najczęstszych przyczyn błędów logicznych  
* Patrz zawsze na dane: *klucz, typ i wartość*

—---------  
Czym jest JSON? 🌐  
---

## **🧠 JSON – język danych automatyzacji**

**JSON (JavaScript Object Notation)** to lekki format zapisu danych, który jest:

* 🧑‍💻 Zrozumiały dla ludzi  
* 🤖 Łatwy do odczytania przez maszyny

📌 W n8n używamy JSON **wszędzie** – do przekazywania danych między node’ami, do integracji z API, webhookami, a nawet w środku ekspresji.

---

## **🧱 Struktura JSON – dwa podstawowe elementy**

### **1\. Obiekty {}**

Zawierają **pary klucz-wartość**, np.:

{

  "imie": "Anna",

  "wiek": 25

}

### **2\. Tablice \[\]**

Zawierają **listy wartości**:

\["jabłko", "banan", "gruszka"\]

📌 Możesz też mieć tablice obiektów:

\[

  {"id": 1, "nazwa": "Produkt A"},

  {"id": 2, "nazwa": "Produkt B"}

\]

---

## **🎯 Klucz-Wartość – fundament JSON**

Każda para wygląda tak:

"klucz": wartość

* Klucz zawsze w **cudzysłowie**  
* Wartość może być: tekstem, liczbą, true, false, null, tablicą lub innym obiektem

---

## **✅ Poprawny JSON vs ❌ Błędy**

**✅ Poprawny:**

{

  "nazwa": "Produkt A",

  "cena": 99.99

}

**❌ Niepoprawny:**

{

  nazwa: "Produkt A",       // brak cudzysłowu

  'cena': 99.99             // apostrofy zamiast cudzysłowów

}

🧠 JSON nie dopuszcza komentarzy ani niezakończonych przecinków\!

---

## **🔁 JSON w Automatyzacji i n8n**

### **1\. W webhookach**

Dane wysyłane do webhooka mają postać JSON:

{

  "email": "jan@firma.com",

  "status": "zarejestrowany"

}

### **2\. W node Set / Function**

Tworzysz nowe dane lub przekształcasz je za pomocą JSON:

{

  "full\_name": "Kowalski Jan",

  "email": "kowalski@example.com"

}

### **3\. W API**

Większość API (np. OpenAI, Notion, Slack) komunikuje się właśnie w JSON.

---

## **🛠️ JSON w kodzie (JavaScript / Python / PHP)**

### **JavaScript:**

const json \= '{"name": "Anna"}';

const obj \= JSON.parse(json);

### **Python:**

import json

data \= json.loads('{"name": "Anna"}')

### **PHP:**

$data \= json\_decode('{"name": "Anna"}', true);

📌 W n8n, najczęściej używasz JSON bezpośrednio – bez kodowania\!

---

## **⚙️ Przykład JSON w n8n**

Masz dane klienta:

{

  "imie": "Jan",

  "email": "jan@example.com",

  "produkty": \[

    {"id": 1, "nazwa": "Laptop"},

    {"id": 2, "nazwa": "Myszka"}

  \]

}

Chcesz wysłać mu e-mail z listą produktów – JSON idealnie się do tego nadaje:

* wyciągasz imie  
* iterujesz po tablicy produkty  
* tworzysz wiadomość

---

## **📊 JSON vs. inne formaty**

**Format**

**Cechy**

**JSON**

Lekki, zrozumiały, uniwersalny

**XML**

Bardziej rozbudowany, trudniejszy do czytania

**CSV**

Dobry do tabel, ale nie wspiera zagnieżdżeń

📌 JSON to złoty standard w API i automatyzacji.

---

## **📦 Zastosowania JSON w realnych workflowach**

**Zastosowanie**

**Przykład JSON**

📬 Webhook Payload

{"event":"lead\_created", "email":"jan@firma.com"}

🤖 Konfiguracja AI

{"model":"gpt-4","temperature":0.8}

📤 Odpowiedź API

{"success":true,"data":{"status":"wysłano"}}

🧩 Mapowanie pól

Transformacja danych wejściowych do wyjścia

📚 Zapis do bazy

{"id":1,"nazwa":"Zamówienie \#123"}

---

## **🔐 Bezpieczeństwo JSON**

Zasady dobrego użycia:

* 🧪 Waliduj strukturę przed użyciem  
* 🛡️ Nie przechowuj haseł w JSON  
* 🧱 Ustaw limit rozmiaru danych  
* 💥 Obsługuj błędy parsowania (np. try/catch w JavaScript)

---

## **📈 Co dalej?**

Z czasem spotkasz:

* **JSON Schema** – do walidacji struktury  
* **JSON-LD** – do powiązanych danych  
* **JSON5** – bardziej elastyczny JSON (komentarze, trailing commas)

---

## **📌 Podsumowanie**

* JSON to język danych nowoczesnej automatyzacji  
* W n8n jest **wszędzie** – musisz go znać  
* Struktura: **klucz-wartość**, obiekty {} i tablice \[\]  
* JSON \= łatwość integracji z API, AI, webhookami, bazami  
* Poprawna składnia \= sukces w Twoich workflowach

---

Czym jest API? 🌉  
---

## **🔍 Co to jest API?**

**API** (Application Programming Interface) to **interfejs programistyczny**, czyli sposób, w jaki różne aplikacje mogą się ze sobą komunikować.  
 🔁 Myśl o tym jak o **kelnerze w restauracji**:

* Ty \= użytkownik  
* API \= kelner  
* Kuchnia \= system (np. Google, ChatGPT, Stripe)  
* Kelner (API) przekazuje Twoje zamówienie do kuchni i przynosi odpowiedź

---

## **📱 Przykłady z życia codziennego**

**Przykład**

**Jak działa API?**

Aplikacja pogodowa

Pobiera dane z serwera pogodowego przez API

Logowanie przez Google/Facebook

Strona prosi Google o potwierdzenie Twojej tożsamości

Płatność kartą online

Sklep wysyła dane do PayPala/Stripe przez API

---

## **🧠 Po co są API?**

* Umożliwiają współpracę systemów  
* Oszczędzają czas – nie musisz budować wszystkiego od zera  
* Dają dostęp do gotowych usług (np. wysyłka e-maili, analiza AI)

---

## **🧱 Budowa API**

Każde wywołanie API to zapytanie HTTP składające się z:

**Element**

**Opis**

**Endpoint**

Adres URL (np. https://api.example.com/users)

**Method**

Co chcesz zrobić: GET, POST, PUT, DELETE

**Headers**

Nagłówki np. autoryzacja, typ danych

**Body**

Treść żądania (np. JSON z danymi)

**Response**

Odpowiedź z serwera

---

## **⚙️ Metody HTTP (CRUD)**

**Metoda**

**Cel**

**Przykład**

**GET**

Pobierz dane

Lista użytkowników

**POST**

Utwórz coś nowego

Dodaj nowego klienta

**PUT**

Nadpisz dane

Zaktualizuj profil

**PATCH**

Zmień część danych

Zmień tylko e-mail

**DELETE**

Usuń dane

Usuń zamówienie

---

## **🔐 Jak API dba o bezpieczeństwo?**

**Metoda**

**Jak działa**

**API Key**

Prosty klucz dołączany do nagłówka

**OAuth 2.0**

Token z ograniczonym czasem działania

**JWT**

Bezpieczny token zawierający dane użytkownika

**Basic Auth**

Login i hasło zakodowane w nagłówku

---

## **📦 Kody odpowiedzi API (statusy HTTP)**

**Kod**

**Znaczenie**

**200 OK**

Wszystko działa

**201 Created**

Nowy obiekt utworzony

**400 Bad Request**

Błąd w zapytaniu

**401 Unauthorized**

Brak uprawnień

**404 Not Found**

Nie znaleziono zasobu

**500 Internal Server Error**

Błąd po stronie serwera

---

## **🛠️ Testowanie API**

Narzędzia do sprawdzania jak API działa:

* **Postman** – graficzne testowanie zapytań  
* **curl** – test z terminala  
* **HTTPie** – przyjazna alternatywa dla curl  
* **n8n\!** – HTTP Request node jako API tester

---

## **🔗 API w n8n**

Węzeł **HTTP Request** pozwala na:

* Łączenie z dowolnym API  
* Wysyłanie danych (POST, PUT)  
* Pobieranie odpowiedzi (GET)  
* Obsługę autoryzacji  
* Automatyczne parsowanie JSON

**Przykład węzła w n8n (POST do API):**

{

  "method": "POST",

  "url": "[https://api.example.com/users](https://api.example.com/users)",

  "headers": {

    "Authorization": "Bearer {{ $credentials.api\_key }}",

    "Content-Type": "application/json"

  },

  "body": {

    "name": "{{ $[json.name](http://json.name) }}",

    "email": "{{ $[json.email](http://json.email) }}"

  }

}

---

## **🚦 Rate Limiting – ograniczenia API**

* Niektóre API mają limity: np. 100 zapytań na minutę  
* Informacje w nagłówkach: X-RateLimit-Remaining, X-RateLimit-Reset  
* W n8n możesz dodać Wait node, by nie przekroczyć limitów

---

## **📚 Dokumentacja API – Twój najlepszy przyjaciel**

Dobra dokumentacja zawiera:

* Endpointy i metody  
* Przykłady zapytań i odpowiedzi  
* Opis błędów  
* Info o autoryzacji

**Narzędzia dokumentacyjne:**

* Swagger / OpenAPI  
* Postman Docs  
* Notion, GitHub, [Readme.io](http://Readme.io)

---

## **🔒 Najlepsze praktyki bezpieczeństwa**

1. Zawsze używaj HTTPS  
2. Nigdy nie loguj pełnych danych dostępowych  
3. Waliduj dane wejściowe  
4. Używaj rate limiting  
5. Ukrywaj klucze w credentialach n8n

---

## **🔥 Gdzie najczęściej spotkasz API?**

**Obszar**

**Przykładowe API**

🛒 E-commerce

Stripe, PayPal, WooCommerce

📧 Komunikacja

SendGrid, Mailgun, Slack

📍 Geolokalizacja

Google Maps, IPStack

🤖 AI

OpenAI (ChatGPT), Stability AI, Hugging Face

🧠 CRM

HubSpot, Pipedrive, Zoho

---

## **📌 Podsumowanie**

* API \= sposób, by aplikacje mogły się komunikować  
* Każde zapytanie to metoda \+ endpoint \+ dane \+ nagłówki  
* API to podstawa automatyzacji i integracji w n8n  
* HTTP Request node daje Ci pełną kontrolę nad wywołaniami  
* Umiejętność pracy z API \= supermoc automatyzatora

---

Czym są Żądania HTTP? 🌐  
---

## **🧠 HTTP – język internetu**

**HTTP (Hypertext Transfer Protocol)** to podstawowy protokół komunikacji w internecie.  
 Umożliwia przesyłanie danych między:

* **klientem** (np. przeglądarka, n8n, agent AI)  
* a **serwerem** (np. API pogodowe, bazy danych, narzędzia AI)

📌 HTTP definiuje **jak formatować i przesyłać** wiadomości między systemami.

---

## **📦 Model Klient-Serwer**

Sieć działa w układzie:

* **Klient**: np. przeglądarka, aplikacja, n8n – wysyła żądanie  
* **Serwer**: odbiera żądanie, przetwarza je i zwraca odpowiedź

📍 Przykład:  
 Wchodzisz na stronę z żartami → przeglądarka wysyła **żądanie GET** → serwer odpowiada żartem.

---

## **🔍 Budowa żądania HTTP**

Każde żądanie HTTP zawiera:

1. **Linię żądania**  
   * np. GET /users HTTP/1.1  
2. **Nagłówki (headers)**  
   * np. Content-Type: application/json, Authorization: Bearer xxxxx  
3. **Treść (body)** *(opcjonalna)*  
   * np. JSON z danymi przy POST lub PUT

---

## **📨 Przykład w praktyce – losowy żart**

GET https://official-joke-api.appspot.com/random\_joke

📥 Twoja przeglądarka lub n8n wysyła żądanie GET  
 📤 Serwer odpowiada JSON-em:

{

  "setup": "Dlaczego szkielety nie walczą ze sobą?",

  "punchline": "Bo nie mają odwagi."

}

---

## **🧩 Metody HTTP – co chcesz zrobić?**

**Metoda**

**Cel**

**Przykład**

**GET**

Pobierz dane

Lista użytkowników

**POST**

Wyślij dane

Dodaj nowego klienta

**PUT**

Nadpisz dane

Edytuj całą wizytówkę

**PATCH**

Edytuj częściowo

Zmień tylko e-mail

**DELETE**

Usuń dane

Usuń konto

---

## **📡 Kody Statusu HTTP**

**Kod**

**Znaczenie**

**200 OK**

Wszystko działa

**201 Created**

Obiekt został utworzony

**400 Bad Request**

Błąd po stronie klienta

**401 Unauthorized**

Brak autoryzacji

**403 Forbidden**

Brak dostępu

**404 Not Found**

Nie znaleziono

**500 Internal Server Error**

Błąd serwera

---

## **🧾 Nagłówki HTTP**

Nagłówki przekazują dodatkowe informacje:

### **Popularne nagłówki żądań:**

* User-Agent: Info o aplikacji klienta  
* Accept: Typy danych, które klient akceptuje  
* Authorization: Token lub klucz API  
* Content-Type: Typ danych w body (np. application/json)

### **Popularne nagłówki odpowiedzi:**

* Content-Type: Format odpowiedzi (np. application/json)  
* Set-Cookie: Tworzy ciasteczko  
* Cache-Control: Zasady buforowania

---

## **🔒 HTTPS vs HTTP**

**Protokół**

**Bezpieczeństwo**

**Port**

**HTTP**

❌ Brak szyfrowania

80

**HTTPS**

✅ Szyfrowanie SSL/TLS

443

📌 Zawsze używaj **HTTPS** przy przesyłaniu danych użytkownika lub haseł\!

---

## **🧰 Testowanie i debugowanie żądań**

**Narzędzie**

**Opis**

**Postman**

Graficzne testowanie API

**curl**

Terminalowa komenda HTTP

**Browser Dev Tools**

Podgląd żądań w przeglądarce

**Insomnia**

Alternatywa dla Postman

---

## **🚀 HTTP w n8n – praktyczne zastosowanie**

Węzeł **HTTP Request** pozwala:

* Wysyłać żądania GET, POST, PUT, DELETE  
* Dodawać nagłówki i body  
* Autoryzować zapytania  
* Przetwarzać odpowiedzi JSON

### **Przykład (POST do API ChatGPT):**

{

  "method": "POST",

  "url": "[https://api.openai.com/v1/chat/completions](https://api.openai.com/v1/chat/completions)",

  "headers": {

    "Authorization": "Bearer {{ $credentials.apiKey }}",

    "Content-Type": "application/json"

  },

  "body": {

    "model": "gpt-4",

    "messages": \[{"role":"user", "content":"Opowiedz dowcip"}\]

  }

}

---

## **🌐 Webhooki – odwrotność żądań HTTP**

* Ty nasłuchujesz, a ktoś inny **wysyła żądanie POST** do Twojego URL-a  
* Stosowane w powiadomieniach, automatyzacjach i AI agentach

---

## **💡 Przykłady zastosowania HTTP w AI i automatyzacji**

**Zastosowanie**

**Metoda**

**Użycie AI (ChatGPT, Claude)**

POST

**Pobieranie danych z API**

GET

**Webhook – odbieranie danych**

POST

**Dodanie kontaktu do CRM**

POST

**Aktualizacja rekordu w bazie**

PUT lub PATCH

**Usunięcie klienta**

DELETE

---

## **🧠 Znaczenie HTTP dla agentów AI**

Agenci AI potrzebują HTTP do:

* komunikacji z zewnętrznymi źródłami (np. bazy wiedzy),  
* wysyłania promptów do LLM,  
* odbierania webhooków,  
* integracji z systemami (Notion, Slack, Gmail itd.).

---

## **✅ Najlepsze praktyki HTTP**

1. Używaj odpowiednich metod  
2. Obsługuj błędy i statusy  
3. Używaj HTTPS  
4. Dodawaj wymagane nagłówki  
5. Testuj lokalnie przed wdrożeniem  
6. Ogranicz liczbę zapytań – uwzględnij **rate limiting**

---

## **📌 Podsumowanie**

* HTTP to podstawowy protokół komunikacji sieciowej  
* Każde żądanie ma metodę, nagłówki, opcjonalne dane (body)  
* n8n używa żądań HTTP do integracji z API i tworzenia webhooków  
* Kluczowe pojęcia: GET, POST, headers, status, body  
* HTTP \= kręgosłup nowoczesnych automatyzacji i agentów AI

---

🖥️ Front-End vs. Back-End – Jak to działa z n8n?  
---

## **🔎 1\. Front-End – czyli to, co widzi użytkownik**

Wyobraź sobie front-end jako **twarz agenta AI** – to, z czym użytkownik ma bezpośredni kontakt.

### **💡 Przykłady front-endów:**

* Chatbot na stronie internetowej 🗨️  
* Aplikacja mobilna 📱  
* Formularz zgłoszeniowy na stronie www 📋

W kontekście n8n, front-endem może być:

* Twoja strona internetowa połączona z webhookiem n8n  
* Chatbot (np. WhatsApp, Slack, Messenger)  
* Formularz, który wyzwala workflow przez webhook

---

## **🧠 2\. Back-End – czyli mózg i siła robocza**

Back-end to ta część, której **użytkownik nie widzi**, ale która wykonuje całą logikę i ciężką pracę w tle.

### **💡 Przykłady działań back-endu:**

* Przetwarzanie zapytania użytkownika przez AI (np. ChatGPT)  
* Pobieranie informacji z bazy danych lub API  
* Automatyzowanie zadań (np. wysyłanie e-maili, generowanie raportów)

W n8n to właśnie **workflowy** pełnią rolę back-endu. To one:

* Odbierają dane z front-endu  
* Przetwarzają je zgodnie z logiką  
* Odsyłają odpowiedź

---

## **🔁 3\. Jak współpracują Front-End i Back-End w n8n?**

1. Użytkownik wysyła zapytanie przez front-end (np. chatbot lub formularz)  
2. Zapytanie trafia do n8n (back-end) – wyzwala odpowiedni workflow  
3. Workflow wykonuje logikę (np. generuje odpowiedź AI, pobiera dane)  
4. Odpowiedź wraca do użytkownika przez front-end

---

## **🍽️ Prosta analogia: Restauracja**

**Rola**

**Odpowiednik**

👨‍🍳 Kuchnia (gotuje)

Back-End – logika i automatyzacja

🧾 Kelner (bierze zamówienie)

Front-End – interfejs użytkownika

🔁 System kuchni

n8n – przepływ, który automatyzuje przetwarzanie

n8n jest jak **system automatyzacji kuchni** – działa za kulisami i obsługuje żądania jak dobrze zaprogramowany zespół.

---

## **✅ 4\. Podsumowanie**

**Element**

**Front-End**

**Back-End**

Kontakt z użytkownikiem

TAK 👁️

NIE 🧠

Interakcja

Chatbot, formularz, aplikacja

Workflowy n8n

Rola

Wyświetla dane, zbiera wejścia

Przetwarza dane, wykonuje logikę

Przykład

Użytkownik wpisuje pytanie

n8n generuje odpowiedź AI

---

## **📌 Ostatnia myśl**

Jeśli tworzysz agenta AI lub automatyzację w n8n:

* **Front-End** to sposób, w jaki użytkownik zadaje pytania lub przesyła dane (np. przez chatbota lub formularz).  
* **Back-End** to przepływ pracy n8n, który przetwarza dane i podejmuje decyzje.

Zrozumienie tego podziału pomoże Ci budować lepsze, bardziej elastyczne rozwiązania w n8n.

---

**Zasada 80/20**

Prezentacja: 20% węzłów \= 80% możliwości

Zamiast tracić miesiące na naukę wszystkiego, skupiamy się na 13 kluczowych węzłach, które rozwiązują 80% problemów automatyzacji. Poniżej ściąga

**Podstawy AI i LLM**

Wprowadzenie do Sztucznej Inteligencji 🧠  
---

🧠 Czym jest Sztuczna Inteligencja (AI)?

**Sztuczna Inteligencja** to systemy lub programy komputerowe, które potrafią wykonywać zadania wymagające **ludzkiej inteligencji**, takie jak:

* Rozumienie języka  
* Rozpoznawanie wzorców  
* Rozwiązywanie problemów  
* Podejmowanie decyzji

AI symuluje **ludzkie myślenie**, wykorzystując dane i techniki obliczeniowe.

---

## **🤖 Główne rodzaje Sztucznej Inteligencji**

---

### **1\. Wąska AI (Słaba AI)**

🔹 **Czym jest?**  
 AI zaprojektowana do **jednego, konkretnego zadania** – nie potrafi robić nic poza tym, do czego została stworzona.

🔹 **Przykłady:**

* Siri, Alexa – rozpoznają mowę i wykonują polecenia głosowe  
* Filtry spamu w e-mailach  
* Rekomendacje produktów na Amazon, Netflix

📌 To **najczęściej spotykany** typ AI – efektywny, ale mocno ograniczony.

---

### **2\. Predykcyjna AI**

🔹 **Czym jest?**  
 AI, która **analizuje dane**, wykrywa wzorce i **przewiduje** przyszłe zdarzenia.

🔹 **Jak działa?**  
 Wykorzystuje **uczenie maszynowe** i **modele statystyczne**, aby wyciągać wnioski z historii danych.

🔹 **Przykłady:**

* Przewidywanie odejścia klienta (churn)  
* Prognozy sprzedaży  
* Zapobieganie awariom maszyn  
* Przewidywanie rozwoju epidemii

📌 Stosowana tam, gdzie **ważna jest analiza i decyzje biznesowe**.

---

### **3\. Generatywna AI**

🔹 **Czym jest?**  
 AI, która **tworzy coś nowego** – teksty, obrazy, muzykę, kod – na podstawie wzorców z danych treningowych.

🔹 **Jak działa?**  
 Modele są trenowane na dużych zbiorach danych, a potem generują nowe odpowiedzi, bazując na kontekście.

🔹 **Przykłady:**

* **ChatGPT** – odpowiada na pytania, pisze teksty  
* **DALL·E**, **Midjourney** – tworzą obrazy z opisu  
* **GitHub Copilot** – pomaga pisać kod

📌 To **najbardziej dynamicznie rozwijający się** obszar AI

---

### **4\. Ogólna AI (Silna AI)**

🔹 **Czym jest?**  
 AI, która **myśli i uczy się jak człowiek**. Może wykonywać **każde zadanie intelektualne**, niezależnie od dziedziny.

🔹 **Przykłady (teoretyczne):**

* Roboty z filmów sci-fi (np. Ex Machina)  
* W pełni samodzielne systemy, które rozumieją kontekst i podejmują decyzje jak człowiek

📌 Jeszcze **nie istnieje**, ale jest celem rozwoju AI w przyszłości.

---

## **⚙️ Jak działa AI (w uproszczeniu)**

1. **Zbieranie danych**  
    → Np. miliony wiadomości, obrazów, wyników testów  
2. **Rozpoznawanie wzorców**  
    → AI analizuje dane, ucząc się zależności  
3. **Budowanie modelu**  
    → Tworzy się matematyczny „model” reprezentujący te zależności  
4. **Działanie / Przewidywanie**  
    → Na podstawie nowych danych model podejmuje decyzje lub tworzy odpowiedzi

---

## **✅ Korzyści z użycia AI**

**Korzyść**

**Opis**

🔁 Automatyzacja

Szybsze i tańsze wykonywanie powtarzalnych zadań

📊 Lepsze decyzje

Analiza danych wspiera podejmowanie decyzji

👤 Personalizacja

AI dostosowuje treść do użytkownika (np. rekomendacje)

🚀 Innowacja

Napędza rozwój w edukacji, medycynie, logistyce itd.

---

## **⚠️ Wyzwania i wady AI**

**Wyzwanie**

**Co oznacza**

🔐 Prywatność danych

Modele mogą analizować dane wrażliwe

⚖️ Uprzedzenia

Modele mogą powielać błędne wzorce z danych

🧑‍💼 Zmiana rynku pracy

Automatyzacja może zastąpić niektóre zawody

🧭 Etyka i kontrola

Kto odpowiada za decyzje AI? Jak ją kontrolować?

---

## **🧩 AI i automatyzacja w n8n – Twoja szansa**

Dzięki połączeniu AI z platformami takimi jak **n8n**, możesz:

* Tworzyć boty, które rozumieją tekst  
* Automatyzować odpowiedzi e-mail  
* Tworzyć podsumowania i raporty  
* Wprowadzać inteligentne decyzje do Twoich workflowów

📌 Nie musisz być programistą – wystarczy, że **rozumiesz podstawy**, a resztę zrobisz wizualnie w n8n.

---

## **📦 Podsumowanie**

* **AI** \= systemy naśladujące ludzkie myślenie  
* Główne typy: **wąska, predykcyjna, generatywna, ogólna**  
* Wspólna cecha: **uczenie się z danych**  
* Przyszłość automatyzacji \= AI \+ workflowy (np. z n8n)  
* Twoja rola? Rozumieć, testować i wdrażać z głową 🧠

---

Czym jest Nowoczesna AI? 🤖🚀  
---

## **🧠 Od reguł do rozumowania**

Sztuczna Inteligencja przeszła długą drogę:

* **Kiedyś**: Proste reguły typu „jeśli A, to B”  
* **Dziś**: Modele potrafiące **rozumieć, uczyć się i samodzielnie działać**

Współczesna AI opiera się na **Dużych Modelach Językowych (LLM)**, takich jak **GPT-4**, które potrafią pisać, analizować dane, prowadzić rozmowy, programować, a nawet sterować narzędziami.

---

## **📚 Trzy warstwy nowoczesnej AI**

Nowoczesna AI to nie tylko chatboty. Mamy trzy główne „poziomy”:

### **1\. Chatowa AI (np. ChatGPT)**

* Odpowiada na pytania  
* Rozmawia jak człowiek  
* Wykonuje zadania tekstowe (pisanie, streszczanie, tłumaczenie)

### **2\. Strukturalne przepływy pracy AI**

* Zaprogramowane ścieżki działania (np. w n8n)  
* AI jest częścią większego procesu:  
   Wejście → AI → Dalsze działania → Wynik

### **3\. Autonomiczne Agenty AI**

* Samodzielnie wybierają narzędzia i kroki  
* Potrafią decydować, uczyć się i działać bez dokładnych instrukcji  
* Przykład: agent, który sam szuka ofert pracy i wysyła aplikacje

---

## **🧠 Kluczowe pojęcia**

**Termin**

**Znaczenie**

**AI**

System naśladujący ludzką inteligencję

**LLM (Large Language Model)**

Model uczony na miliardach słów – np. GPT-4

**Generatywna AI**

Tworzy nowe treści (tekst, obrazy, kod)

**API**

Interfejs do komunikacji z innymi systemami – np. wysyłka e-maila przez Gmail API

---

## **📈 Historia – szybki rzut oka**

**Rok**

**Wydarzenie**

2015

**Powstaje OpenAI**

2018

**GPT-1**

2019

**GPT-2 – znaczna poprawa jakości tekstu**

2020

**GPT-3 – 175 miliardów parametrów**

2022

Startuje **ChatGPT** – 1 mln użytkowników w 5 dni

2023

**Wydanie GPT-4, subskrypcja ChatGPT Plus, 100 mln użytkowników**

2025

Modele **o3/o4-mini** – potrafią autonomicznie używać narzędzi i działać jako agenci AI

---

## **💡 Dlaczego to jest przełomowe?**

Wcześniej AI była narzędziem **do analizowania danych**.  
 Dziś może:

* Tworzyć własne procedury  
* Automatyzować zadania  
* Samodzielnie zarządzać narzędziami

To zmienia **sposób pracy, myślenia i budowania firm**.

---

## **⚙️ Jak wygląda to w n8n?**

Wyobraź sobie prosty przykład:

Webhook → Pobierz dane klienta → LLM (AI) → Wygeneruj odpowiedź → Wyślij e-mail

Teraz dzięki rozwojowi AI:

* LLM może **samo podjąć decyzję**, czy wysłać e-mail, zapisać dane, czy przekazać sprawę do zespołu  
* Agent AI sam wybiera narzędzia (HTTP Request, Google Sheets, Slack) i steruje nimi

To właśnie **przejście od statycznego workflow do agenta AI**.

---

## **🔗 AI i API – duet idealny**

Nowoczesna AI korzysta z **zewnętrznych usług** (API), np.:

* Gmail (do wysyłki e-maili)  
* Notion (do zapisu danych)  
* Slack (do powiadomień)

Dzięki temu AI może **realnie działać**, a nie tylko odpowiadać tekstem.

---

## **🧠 Co dalej?**

Jeśli dopiero zaczynasz:

✅ **Zacznij od ChatGPT** – poznaj jego możliwości  
 ✅ Następnie spróbuj **dodać AI do swojego workflow** w n8n  
 ✅ Potem – **buduj agenta AI**, który działa jak mini-asystent

---

## **📦 Podsumowanie**

* Nowoczesna AI to więcej niż chatbot  
* 3 poziomy: **chat, przepływ pracy, agent**  
* Kluczowy element: **LLM \+ API**  
* ChatGPT zmienił reguły gry – i dopiero się rozkręcamy  
* Rozumienie tej ewolucji \= lepsze workflowy, automatyzacje i pomysły

---

Zrozumienie Dużych Modeli Językowych (LLMs) 🧠📚

## 

## **Czym są LLM-y?**

**LLM** (Large Language Model) to zaawansowany model sztucznej inteligencji, którego zadaniem jest rozumienie, przetwarzanie i generowanie ludzkiego języka.

🔍 **„Duże”** – bo uczą się na ogromnych zbiorach danych (terabajty tekstu) i składają się z miliardów parametrów, które decydują o tym, jak model przewiduje kolejne słowa.

---

## **Do czego służą LLM-y?**

LLM-y są w istocie **systemem predykcyjnym** – przewidują następne słowo w zdaniu na podstawie kontekstu.

### **Możliwości:**

✅ Generowanie tekstu i maili ✅ Odpowiadanie na pytania ✅ Tłumaczenia ✅ Pisanie kodu lub jego uzupełnianie ✅ Rozmowy z użytkownikiem (czaty) ✅ Podsumowywanie dokumentów

LLM-y to **mózg automatyzacji AI**, ale same z siebie **nie działają automatycznie** – potrzebują narzędzi (np. n8n), żeby wykonywać realne akcje.

---

## **Jak działają LLM-y? – W skrócie technicznym**

Model językowy nie „rozumie” jak człowiek – działa na liczbach. Oto uproszczony schemat jego działania:

1. **Tokenizacja** – tekst dzielony jest na małe części (tokeny).  
2. **Embedding** – tokeny są zamieniane na liczby (wektory), które reprezentują znaczenie.  
3. **Mechanizm uwagi (attention)** – model skupia się na ważnych częściach kontekstu.  
4. **Warstwy neuronowe** – dane przepływają przez kolejne warstwy modelu.  
5. **Generowanie** – model przewiduje następny token, dodaje go do tekstu i kontynuuje.

📌 **Dobra wiadomość**: nie musisz znać całej teorii, żeby skutecznie używać LLM-ów w n8n\!

---

## **Transformery – fundament działania**

Większość nowoczesnych LLM-ów (GPT, Claude, Gemini, Mistral) jest zbudowana na architekturze **transformer**. Składa się ona z dwóch głównych komponentów:

* **Enkoder** – analizuje dane wejściowe  
* **Dekoder** – generuje odpowiedzi na ich podstawie

Transformery dzięki mechanizmowi uwagi są w stanie „zrozumieć”, co w danym zdaniu jest najważniejsze i przewidzieć logiczne zakończenie.

---

## **Dlaczego LLM-y są ważne w n8n?**

W n8n LLM-y służą jako:

* **Źródło odpowiedzi w czatach i wiadomościach**  
* **Silnik generowania treści (e-mail, podsumowanie, raport)**  
* **Element „mózgu” agentów AI – do podejmowania decyzji na podstawie kontekstu**  
* **Mechanizm klasyfikacji, ekstrakcji danych lub syntezowania informacji**

Ale same LLM-y **nie wykonują działań** – to n8n, poprzez workflowy, je kontroluje. Ty tworzysz automatyzację, a LLM tylko „myśli”.

---

## **Ograniczenia LLM-ów (i jak ich unikać)**

**Ograniczenie**

**Co to oznacza**

**Jak temu zaradzić**

**Halucynacje**

Model może „zmyślić” odpowiedź

Zawsze sprawdzaj źródła, stosuj RAG

**Brak faktycznego zrozumienia**

Model nie „wie” jak człowiek

Dawaj precyzyjne instrukcje i dane

**Uprzedzenia**

Model może mieć tendencyjne odpowiedzi

Filtruj dane treningowe, testuj odpowiedzi

**Data graniczna wiedzy**

Nie zna najnowszych wydarzeń

Połącz z wyszukiwarką lub bazą wiedzy (np. RAG \+ vector DB)

---

## **Rola parametrów i „rozmiaru” modelu**

Każdy LLM ma określoną liczbę **parametrów** – im więcej, tym większa „inteligencja”, ale też większe zużycie zasobów.

🔧 **Przykłady modeli wg. rozmiaru:**

* **7B** (małe, szybkie, dobre lokalnie)  
* **13B – 30B** (zbalansowane, dobre do produkcji)  
* **70B+** (największe, najmądrzejsze, ale wymagające dużej mocy obliczeniowej)

W n8n możesz z łatwością połączyć się z różnymi modelami przez OpenRouter, HuggingFace lub własny serwer.

---

## **Złota zasada: Rozumieć tyle, ile potrzeba**

Nie musisz znać szczegółów, jak działa przetwarzanie neuronowe. Twoim celem jako twórcy automatyzacji jest:

* Wiedzieć, **kiedy i dlaczego użyć LLM**  
* Rozumieć jego ograniczenia  
* Umieć przekazać mu jasny kontekst

LLM to jak **stażysta** – trzeba mu dać instrukcje, dostęp do wiedzy, wskazówki i... będzie działał\! 🔄

—-----  
Popularne modele Large Language 📊

**⚠️ Zastrzeżenie:** Krajobraz AI ewoluuje szybko. Możliwości modeli, wydajność i dostępność mogą często się zmieniać.

---

### **Krajobraz LLM**

Dziedzina modeli Large Language rozrosła się szybko, z kilkoma kluczowymi graczami i modelami dominującymi w krajobrazie. Oto przegląd niektórych z najważniejszych LLM-ów na 2025 rok:

---

## **🧠 OpenAI – GPT-4.1, o3 i o4-mini**

→ **Mocne strony**: Wyjątkowe w kodowaniu, rozumowaniu i zadaniach multimodalnych.  
→ **Najnowsze osiągnięcia**:  
→ GPT-4.1 – udoskonalona wersja GPT-4 z lepszym rozumieniem kontekstu i rozwiązywaniem problemów.  
→ o3 – specjalistyczny model do zadań matematycznych i logicznych (np. test AIME 2024).  
→ Codex CLI – narzędzie ułatwiające pisanie i testowanie kodu z pomocą AI.

---

## **🤖 Anthropic – Claude 4.0 Sonnet i Claude Code**

→ **Mocne strony**: Hybrydowe rozumowanie, interpretowalność działania modelu i doskonałość w agentycznym kodowaniu.  
→ **Najnowsze osiągnięcia**:  
→ Claude 4.0 Sonnet – dostosowuje głębokość analizy do poziomu trudności zadania.  
→ Claude Code – stworzony z myślą o automatycznym generowaniu kodu z dużą samodzielnością.  
→ Badania nad przejrzystością działania modelu – zrozumienie, jak przewiduje kolejne słowa.

---

## **🌐 Google – Gemini 2.5 Pro i Flash**

→ **Mocne strony**: Zaawansowane rozumowanie, przetwarzanie różnych typów danych i integracja z usługami Google.  
→ **Najnowsze osiągnięcia**:  
→ Gemini 2.5 Pro – mocny w matematyce, kodzie i zadaniach STEM.  
→ Gemini 2.5 Flash – nowa funkcja „budżetu myślenia” do kontroli głębokości przetwarzania.  
→ Aplikacja Google Gemini z eksperymentalnym wsparciem w czasie rzeczywistym.

---

## **🧩 Meta – LLaMA 4 i Code Llama**

→ **Mocne strony**: Open-source, dobra wydajność, możliwość uruchamiania lokalnie.  
→ **Najnowsze osiągnięcia**:  
→ LLaMA 4 – przetwarza tekst i obrazy, działa multimodalnie.  
→ Code Llama – ukierunkowany na generowanie i analizę kodu.  
→ LLaMA 3.3 70B – lekka, wydajna wersja zoptymalizowana pod kątem kosztów.

---

**Tabela podsumowująca:**

**Rodzina modeli**

**Mocne strony**

**Znaczące osiągnięcia**

**OpenAI**

Kodowanie, rozumowanie, zadania multimodalne

GPT-4.1, o3, Codex CLI

**Anthropic**

Hybrydowe rozumowanie, interpretowalność

Claude 4.0 Sonnet, Claude Code

**Google**

Zaawansowane rozumowanie, integracja

Gemini 2.5 Pro, Flash

**Meta**

Open-source, wydajność

LLaMA 4, Code Llama

---

## **📘 Poradnik: Jak wybrać odpowiedni model LLM do pracy z n8n?**

Modele LLM (Large Language Models) rozwijają się błyskawicznie – regularnie pojawiają się nowe wersje, a każda z nich specjalizuje się w innym zakresie. W kontekście automatyzacji z użyciem n8n, dobór odpowiedniego modelu ma kluczowe znaczenie dla skuteczności całego workflowu.

### **1\. Różnice między modelami**

* **OpenAI (np. GPT-4.1)** – Świetny wybór do zadań kodowania, analizy, czy pracy z wieloma typami danych. Idealny do zastosowań ogólnych i agentowych w n8n.  
* **Anthropic (Claude)** – Jeśli tworzysz systemy, które muszą dobrze rozumieć kontekst i działać „samodzielnie” (agentowo), Claude 4.0 to świetny wybór.  
* **Google Gemini** – Dobry do prostszych i szybszych działań. Jeśli zależy ci na czasie reakcji i ekonomii – szczególnie Gemini Flash to ciekawa opcja.  
* **Meta (LLaMA)** – Modele open-source, które możesz uruchomić lokalnie, bez potrzeby łączenia się z chmurą. Polecane tam, gdzie ważne są prywatność i pełna kontrola danych.

### **2\. Kiedy używać którego modelu w n8n?**

* **Do generowania treści (np. e-maile, odpowiedzi w czacie)**: Claude lub GPT-4.1.  
* **Do analizy danych wejściowych i ich kategoryzacji**: Gemini Flash (szybki i darmowy).  
* **Do generowania kodu lub skryptów JavaScript w n8n**: GPT-4.1, Claude Code lub Code Llama.  
* **Do zadań lokalnych i poufnych danych**: LLaMA 3.3 lub 4 (open source).

Możesz zintegrować wiele z tych modeli przez usługę **OpenRouter** – działa jak uniwersalna brama do modeli AI. Dzięki temu możesz testować różne modele bez każdorazowej zmiany integracji.

### **3\. Testuj i porównuj\!**

Warto testować różne modele dla tego samego zadania – niektóre będą tańsze, inne szybsze, a jeszcze inne dokładniejsze. Narzędzia takie jak:

* **Vellum LLM Leaderboard**  
* **LLM Arena**

...pomogą ci ocenić, który model jest najlepszy w konkretnym zastosowaniu (np. rozumowanie, kodowanie, generowanie tekstu).

### **4\. Zwracaj uwagę na „okno kontekstowe”**

Każdy model ma limit danych, które może przetworzyć jednorazowo – tzw. okno kontekstowe. Im większe, tym więcej informacji możesz przesłać do modelu w jednym zapytaniu. Nowoczesne modele (jak GPT-4.1) mają już ogromne limity, ale starsze mogą ograniczać twoje automatyzacje.

---

Jeśli tworzysz automatyzacje w n8n z użyciem LLM – eksperymentuj, zapisuj wyniki i wybieraj model najlepiej dopasowany do zadania. Z czasem zbudujesz własną „bibliotekę preferencji” – tak robią profesjonaliści.

---

Modele Open Source vs Closed Source 🔓⚙️  
---

## **🧭 Czym są modele LLM open source i closed source?**

W świecie sztucznej inteligencji często spotkasz się z podziałem modeli LLM na dwa typy:

**Typ modelu**

**Opis**

**Closed Source (zamknięty)**

Prywatne, własnościowe modele rozwijane przez firmy.

**Open Source (otwarty)**

Publicznie dostępne modele, które możesz uruchamiać i modyfikować samodzielnie.

Zrozumienie różnic pomoże Ci **wybrać najlepsze rozwiązanie do Twoich automatyzacji w n8n**.

---

## **🔐 Modele Closed Source**

### **Czym są?**

To modele takie jak **GPT-4 (OpenAI), Claude (Anthropic), Gemini (Google)**. Ich kod źródłowy, dane treningowe i sposób działania są **tajne**.

Używasz ich przez **API**, np. w n8n → wysyłasz dane → otrzymujesz odpowiedź.

### **✅ Zalety**

1. **Wysoka jakość**  
   → Topowe modele, często najlepsze na rynku  
2. **Bezproblemowe uruchamianie**  
   → Nie trzeba martwić się o serwery, GPU itp.  
3. **Wsparcie techniczne**  
   → Stabilność, SLA, dokumentacja  
4. **Bezpieczeństwo użytkowania**  
   → Rygorystyczne testowanie i kontrola jakości

### **❌ Wady**

1. **Brak kontroli**  
   → Nie możesz zmieniać działania modelu  
2. **Wyższy koszt**  
   → Płatność za tokeny lub subskrypcję  
3. **Zewnętrzne serwery \= mniej prywatności**  
   → Nie nadają się do danych wrażliwych  
4. **Zależność od dostawcy**  
   → Jeśli zmieni zasady lub zamknie usługę – masz problem

---

## **🧬 Modele Open Source**

### **Czym są?**

To modele takie jak **LLaMA (Meta), Mistral, Falcon, Vicuna**, które możesz **pobrać i uruchomić lokalnie lub w chmurze**. Masz pełną kontrolę.

### **✅ Zalety**

1. **Pełna kontrola**  
   → Możesz je trenować, dostrajać, modyfikować  
2. **Niższe koszty w dłuższym okresie**  
   → Brak opłat za zapytania  
3. **Większa prywatność**  
   → Dane nie opuszczają Twojej infrastruktury  
4. **Szybki rozwój dzięki społeczności**  
   → Nowe wersje, poprawki, eksperymenty

### **❌ Wady**

1. **Trudniejszy start**  
   → Potrzebujesz serwera, GPU, wiedzy DevOps  
2. **Niższa jakość (czasami)**  
   → Niektóre modele są mniej dokładne niż GPT-4  
3. **Brak oficjalnego wsparcia**  
   → Polegasz na forach lub własnym zespole  
4. **Więcej odpowiedzialności**  
   → Sam wdrażasz zabezpieczenia i filtry

---

## **⚖️ Który model wybrać? – Porównanie**

**Kryterium**

**Closed Source**

**Open Source**

**Jakość odpowiedzi**

✅ Zwykle najwyższa

⚠️ Zależy od modelu

**Koszt**

❌ Wyższy (API)

✅ Niższy (lokalny hosting)

**Dostosowywanie**

❌ Brak możliwości

✅ Pełna kontrola

**Prywatność**

❌ Dane wysyłane na zewnątrz

✅ Wszystko lokalnie

**Start**

✅ Łatwo zacząć

❌ Trudniejszy setup

**Wsparcie**

✅ Firmowe SLA

⚠️ Forum, GitHub

---

## **🏗️ Podejście hybrydowe – najlepsze z obu światów**

Wiele firm i zespołów korzysta **z obu rozwiązań** jednocześnie:

**Closed Source**

**Open Source**

Ogólne zadania (maile, podsumowania, asystent AI)

Zabezpieczone zadania (dane klientów, medyczne, wewnętrzne dokumenty)

Dzięki temu:

* Używasz najlepszych modeli, gdy trzeba  
* Masz kontrolę nad danymi tam, gdzie to konieczne  
* Optymalizujesz **koszty i prywatność**

---

## **📦 Podsumowanie**

🔍 **Closed Source**:

* Idealne na start  
* Super jakość  
* Ale droższe i mniej elastyczne

🛠️ **Open Source**:

* Dla zaawansowanych i świadomych użytkowników  
* Niższy koszt, większa kontrola  
* Ale wymaga technicznej wiedzy

**Wybór zależy od:**

* Twoich potrzeb  
* Budżetu  
* Danych, które przetwarzasz  
* Umiejętności zespołu

---

W n8n możesz używać obu\!  
Podłącz API do GPT-4 lub uruchom LLaMA lokalnie z pomocą webhooka lub agenta AI.  
To Twoja automatyzacja – Ty decydujesz. 💡

---

Zrozumienie Okien Kontekstu 🧠🪟  
---

## **Czym jest okno kontekstu?**

Okno kontekstu to ilość informacji (tekstowych), które model AI może „zapamiętać” i analizować **jednocześnie**. To trochę jak pamięć robocza człowieka – im większa, tym lepiej radzi sobie z długimi dokumentami, rozmowami czy analizą danych.

📌 Przykład:

* **Małe okno kontekstu** – AI pamięta tylko kilka ostatnich zdań.  
* **Duże okno kontekstu** – AI ogarnia całą historię rozmowy lub dokument bez gubienia wątku.

---

## **Jak to działa technicznie?**

Zamiast „czytać słowa”, model językowy dzieli dane na **tokeny** – małe fragmenty tekstu. Okno kontekstu to **limit liczby tokenów**, które AI może jednocześnie przetwarzać.

📐 **Przelicznik orientacyjny**:

* 1 000 tokenów ≈ 750 słów ≈ 1 strona A4

➡️ Większe okno kontekstu \= AI może przeczytać cały dokument i zapamiętać wszystkie jego elementy bez potrzeby dzielenia go na części.

---

## **Dlaczego to jest ważne?**

Duże okno kontekstu umożliwia:

**Funkcja**

**Korzyść**

✅ Przetwarzanie długich dokumentów

Bez potrzeby dzielenia na sekcje

✅ Analiza rozmów

AI nie zapomina, co było wcześniej powiedziane

✅ Mniej halucynacji

Większa ilość danych \= trafniejsze odpowiedzi

✅ Lepsze odpowiedzi

AI może „zobaczyć cały kontekst” pytania i odpowiedzi

---

## **Postępy w oknach kontekstu (2025)**

Wiodące modele AI zyskały **ogromne możliwości kontekstowe**:

**Model**

**Okno kontekstu**

*GPT-4.1*

1000 000 tokenów

*Claude 4.0*

200 000 tokenów

***Gemini 2.0 Flash***

**1 000 000 tokenów**

🎯 Dzięki takim wartościom AI potrafi „przeczytać” całe książki, raporty finansowe, transkrypcje spotkań – bez potrzeby używania dodatkowych technik jak RAG (Retrieval Augmented Generation). Na [Openrouter](https://openrouter.ai/compare/openai/gpt-4.1-nano/anthropic/claude-sonnet-4) porównasz okna kontekstowe wybranych modeli.

---

## **A co z kosztami?**

Większe okna kontekstu to większe możliwości – ale też **większe koszty**. Dlaczego?

* 💰 Firmy liczą opłaty za ilość przetworzonych tokenów.  
* ⚙️ Więcej tokenów \= więcej mocy obliczeniowej \= wolniejsze odpowiedzi.  
* 🧠 Nie każdy przypadek użycia wymaga dużego okna.

### **Przykład cen (dla 1 miliona tokenów):**

**Model**

**Tokeny wejściowe**

**Tokeny wyjściowe**

GPT-4.1

$2

$8

---

## **Kiedy warto użyć dużego okna kontekstu?**

**Przypadek użycia**

**Rekomendacja**

Chatbot n8n do obsługi klienta

✅ (jeśli rozmowy są długie)

Podsumowanie dokumentu PDF

✅jeśli zawiera wiele stron i tabel

Agent AI przeszukujący bazę wiedzy

✅ (lub połącz z wektorami \+ RAG)

---

## **Związek z RAG i n8n**

Jeśli model **nie ma dużego okna kontekstu**, musisz wspomóc go techniką **RAG** (pobieranie istotnych fragmentów tekstu z bazy wektorowej i przesyłanie ich do LLM-a).

Dzięki **większym oknom kontekstu** można często **pominąć RAG**, bo cały dokument mieści się w pamięci modelu.

📌 W n8n możesz:

* używać Set/Function/LLM Prompt do przesyłania długich treści,  
* segmentować dokumenty i kontrolować koszt,  
* dobrać odpowiedni model przez OpenRouter lub serwer lokalny.

---

## **Podsumowanie**

* **Okno kontekstu \= pamięć operacyjna AI**  
* Duże okna kontekstu umożliwiają analizę długich dokumentów i rozmów.  
* Nowoczesne modele osiągają nawet **milion tokenów**.  
* Należy wyważyć **koszty vs. potrzeby** – nie każde zadanie tego wymaga.

---

📘 Jeśli tworzysz workflowy w n8n z AI – pamiętaj: większy kontekst \= lepsze odpowiedzi, ale zawsze miej na uwadze koszt tokenów.

---

Szkolenie i funkcjonalność LLM 📚🧠  
---

## **🚀 Jak „uczy się” LLM?**

LLM (Large Language Model) to system sztucznej inteligencji, który uczy się na podstawie ogromnej ilości tekstu – od książek, przez strony internetowe, po artykuły. Proces jego szkolenia składa się z **3 głównych etapów**:

---

## **1️⃣ Wstępne szkolenie bez nadzoru (unsupervised pretraining)**

🔍 **Co się dzieje?**

* Model „czyta” miliardy słów i próbuje przewidywać, jakie słowo wystąpi dalej.  
* Uczy się gramatyki, struktury języka i wzorców słów – zupełnie bez pomocy człowieka.  
* Dane są masowe, ale niezbyt precyzyjne (mogą zawierać błędy lub uprzedzenia).

📦 **Efekt**: Powstaje tzw. model bazowy – posiada ogólną wiedzę językową, ale nie jest jeszcze zoptymalizowany do konkretnych zadań.

---

## **2️⃣ Nadzorowane dostrajanie (SFT – supervised fine-tuning)**

🎯 **Co się dzieje?**

* Model dostaje zestawy „pytanie – dobra odpowiedź”.  
* Na ich podstawie uczy się przestrzegać instrukcji i udzielać sensownych, pomocnych odpowiedzi.

🧪 Dane są:

* Mniejsze ilościowo, ale wysokiej jakości.  
* Dostosowane do konkretnych zastosowań (np. obsługa klienta, raportowanie).

📌 **To dzięki temu model wie, jak być pomocny.**

---

## **3️⃣ Uczenie ze wzmocnieniem z opinii ludzi (RLHF)**

👥 **Na czym polega?**

* Ludzie oceniają odpowiedzi wygenerowane przez model.  
* Powstaje **model nagród**, który „uczy” LLM, co człowiek uważa za dobre.

🔄 Następnie LLM jest szkolony dalej, aby **maksymalizować odpowiedzi preferowane przez ludzi** – za pomocą technik takich jak PPO (Proximal Policy Optimization) czy DPO (Direct Preference Optimization).

📌 Celem jest: **uczynić AI bardziej dopasowaną do człowieka.**

---

## **⚙️ Techniczne komponenty LLM**

### **Tokenizacja**

* Tekst dzielony jest na małe elementy – tokeny (np. słowa lub fragmenty słów).  
* Każdy token dostaje numeryczny identyfikator – model „rozumie” liczby, nie litery.

### **Embeddingi**

* Token zamieniany jest w **wektor liczb** (np. długości 1536).  
* Słowa o podobnym znaczeniu mają podobne wektory (np. król – mężczyzna \+ kobieta ≈ królowa).

🔢 Wektory te umożliwiają AI kojarzenie relacji semantycznych i kontekstowych.

---

## **🧠 Jak model generuje odpowiedzi?**

Gdy wpisujesz prompt, LLM działa w kilku krokach:

1. **Tokenizacja** – tekst wejściowy zamieniany na tokeny.  
2. **Przepływ przez warstwy transformera** – model analizuje tokeny i ich zależności.  
3. **Przewidywanie tokenu** – AI oblicza, które słowo najprawdopodobniej pojawi się jako następne.  
4. **Generacja** – wybierany jest token i dodawany do odpowiedzi.  
5. **Powtórka** – dopóki nie osiągnie końca (np. kropki lub limitu długości).

To pętla przewidywania, która działa błyskawicznie.

---

## **💥 Wyzwania związane z treningiem LLM**

**Wyzwanie**

**Na czym polega**

**Zasoby obliczeniowe**

Wymaga tysięcy GPU przez wiele tygodni

**Jakość danych**

Trudno o dane czyste, różnorodne i bezstronne

**Dopasowanie do człowieka**

Trzeba uniknąć halucynacji i zachowań nieetycznych

**Ocena**

Trudno zmierzyć sukces – AI może mieć „dobrą” odpowiedź, ale nie jedyną poprawną

**Wpływ środowiskowy**

Trenowanie dużych modeli pochłania ogromne ilości energii

🔌 Model z 200+ miliardami parametrów może zużyć więcej energii niż… 5 samochodów przez całe życie\!

---

## **🔎 Czy musisz znać te technikalia w n8n?**

🟢 **Nie.** Ale warto rozumieć, co oznacza:

* **Promptowanie** – jak zadawać pytania  
* **Instrukcja systemowa** – jak sterować zachowaniem modelu  
* **Embeddingi i tokeny** – jak ograniczyć koszt zapytania

Tworząc workflowy AI w n8n, nie musisz być ekspertem od „optymalizacji polityki proksymalnej”, ale dobrze, byś wiedział, **jak wykorzystać LLM efektywnie**.

---

## **🧠 Porównanie: LLM vs. człowiek**

**Element**

**Człowiek**

**LLM**

Uczy się od dziecka

📚 Tak

📥 Tak – ale hurtowo i szybciej

Pamięta dokładnie

❌ Nie

✅ Tak (do długości okna kontekstu)

Zna emocje

✅ Tak

❌ Nie (tylko symuluje)

Przewiduje kontekst

✅ Tak

✅ Tak – na podstawie danych

---

## **📌 Podsumowanie**

* LLM to potężne narzędzie, które uczy się w 3 etapach: **pretraining → fine-tuning → RLHF**  
* Generuje odpowiedzi, przewidując kolejne słowa w kontekście  
* Wymaga ogromnych zasobów do wytrenowania – ale Ty możesz go **użyć w n8n bez tego całego zaplecza**  
* Wystarczy, że **dobrze zdefiniujesz prompt i workflow**

---

Jesteś gotowy, by korzystać z LLM świadomie i z korzyścią – nie musisz być naukowcem od AI, by osiągnąć efekty\!

—-------  
Tokenizacja i przetwarzanie tekstu ✂️🧠  
---

## **📌 Co to jest tokenizacja?**

**Tokenizacja** to proces dzielenia tekstu na mniejsze jednostki – zwane **tokenami**.

🔹 Tokeny mogą być:

* Słowami: \["AI", "transformuje", "branże"\]  
* Podsłowami: \["nie", "szczęście"\]  
* Znakami: \["A", "I"\]  
* Symbolami: \["\!", "."\]

Tokeny to „**klocki”, z których AI buduje zrozumienie języka.**

---

## **🔍 Dlaczego tokenizacja jest ważna?**

🧠 Dla AI tokeny są tym, czym **nuty są dla muzyki** – bez nich model nie wie, co analizuje ani co generować.

Tokenizacja wpływa na:

* Zrozumienie tekstu  
* Wydajność działania  
* Koszt API  
* Jakość embeddingów

---

## **🛠️ Główne techniki tokenizacji**

**Technika**

**Opis**

**Przykład**

**Słów**

Podział po spacjach

„n8n jest super” → \["n8n", "jest", "super"\]

**Podsłów**

Dzielenie słów na części

„nieszczęście” → \["nie", "szczęście"\]

**Znaków**

Każda litera to token

„AI” → \["A", "I"\]

**BPE (Byte Pair Encoding)**

Łączenie często występujących fragmentów

„niższy” → \["niż", "szy"\]

**Zdań**

Segmentacja tekstu

„AI się rozwija. Pomaga ludziom.” → \["AI się rozwija.", "Pomaga ludziom."\]

---

## **🔡 Przykład: „n8n to takie potężne narzędzie\!\!”**

**Typ tokenizacji**

**Wynik**

**Słów**

\["n8n", "to", "takie", "potężne", "narzędzie\!\!"\]

**Podsłów (BPE)**

\["n", "8", "n", "to", "takie", "potężne", "narzędzie", "\!\!"\]

**Znaków**

\["n", "8", "n", " ", "t", "o", " ", ...\]

**OpenAI (BPE)**

\["n8n", " to", " takie", " potężne", " narzędzie", "\!\!"\]

---

## **📈 Jak tokenizacja wpływa na embeddingi?**

**Czynnik**

**Wpływ**

**Granularność**

Im drobniejsza tokenizacja (np. znaki), tym dłuższy input

**Rozmiar słownika**

Duży \= więcej pamięci, Mały \= bardziej ogólny

**OOV (Out-Of-Vocabulary)**

Podsłowa i znaki radzą sobie z „nieznanymi” słowami

**Koszt i długość**

Więcej tokenów \= wyższe koszty i obciążenie

---

## **🧼 Strategie przetwarzania wstępnego tekstu**

Przygotowanie danych do tokenizacji i embeddingu obejmuje:

**Etap**

**Co robi**

**Przykład**

**Normalizacja**

Zamiana tekstu na małe litery, usuwanie zbędnej interpunkcji

„Nie Ma” → „nie ma”

**Usuwanie stopwords**

Eliminacja słów typu „i”, „to”, „a”

„To jest test” → „test”

**Stemming**

Obcięcie do rdzenia

„bieganie” → „bieg”

**Lematyzacja**

Redukcja do formy podstawowej

„chodziłem” → „chodzić”

**Obsługa tokenów specjalnych**

Padding, tokeny START/END

\[START\] dane \[END\]

**Usuwanie szumu**

Kasowanie URL-i, tagów HTML, błędów ort.

„Kliknij tutaj: http://...” → OUT

---

## **💸 Koszty tokenów i API**

Tokeny wpływają bezpośrednio na koszty użycia AI przez API, np. OpenAI.

**Pojęcie**

**Opis**

**Token \= fragment tekstu**

„ChatGPT jest super\!” → \~6 tokenów

**Cena**

GPT-4o mini: \~0.015$ za 1000 tokenów

**Więcej tokenów \= wyższy koszt**

Tokenizacja znaków \= więcej jednostek \= drożej

📌 W n8n planuj tak, by tokeny były efektywne – nie dodawaj zbędnego tekstu, unikaj bardzo długich promptów bez potrzeby.

---

## **📦 Podsumowanie**

* Tokeny to podstawowe elementy zrozumienia tekstu przez AI  
* Istnieją różne techniki tokenizacji – dobierz odpowiednią do kontekstu  
* Tokenizacja wpływa na jakość embeddingów, koszty i wydajność modelu  
* Zadbaj o czysty i zoptymalizowany tekst przed jego użyciem  
* W n8n zrozumienie tokenów pomaga Ci lepiej kontrolować przepływy AI

---

**N8N: Węzły i Operacje**

🧮 Node Set – Twój cyfrowy edytor danych

**Dodawanie, modyfikowanie i przygotowanie danych w n8n**

---

## **🔍 Co robi node Set?**

Node Set służy do **tworzenia, modyfikowania lub usuwania danych w przepływie (itemach)**.  
To jak “edytor danych” – możesz dzięki niemu:

* dodać nowe pola (np. status: active)  
* przekształcić dane (np. z string na number)  
* usunąć niepotrzebne informacje  
* przygotować dane pod API, emaila, raport czy inną logikę

To jeden z najczęściej używanych node’ów w całym n8n.  
Bez niego nie ruszysz w żadnej poważnej automatyzacji.

---

## **🛠️ Jak wygląda konfiguracja?**

W Set wybierasz:

* **Czy chcesz zachować istniejące dane** – pole “Keep Only Set”  
  * ✅ Włączone → tylko to, co ustawisz w tym node  
  * ❌ Wyłączone → dane z poprzednich node’ów \+ Twoje nowe pola  
* **Typ danych**:  
  * String, Number, Boolean, DateTime, JSON itd.  
* **Wartość** – wpisujesz wartość lub dynamiczne wyrażenie

---

## **💡 Przykład \#1 – Dodaj status zamówienia i oblicz podatek**

Wyobraź sobie, że masz dane z formularza zakupowego:

{

  "customer": "Jan Kowalski",

  "amount": 100

}

A chcesz dodać:

* status: pending  
* VAT: 23%  
* totalWithVAT \= amount \* 1.23

### **🔧 Node Set:**

**Pole**

**Typ**

**Wartość**

status

String

pending

vatRate

Number

0.23

totalWithVAT

Number

{{ $json.amount \* 1.23 }}

✅ Włącz “Keep Only Set” \= false → dane źródłowe zostaną zachowane.

Efekt końcowy:

{

  "customer": "Jan Kowalski",

  "amount": 100,

  "status": "pending",

  "vatRate": 0.23,

  "totalWithVAT": 123

}

---

## **🎯 Przykład \#2 – Przygotowanie danych do API**

Masz dane użytkownika z webhooka, ale API do rejestracji wymaga formatu:

{

  "firstName": "Anna",

  "lastName": "Nowak",

  "isActive": true,

  "joined": "2025-07-29T08:30:00.000Z"

}

Node Set:

* firstName: {{ $[json.name](http://json.name).split(' ')\[0\] }}  
* lastName: {{ $[json.name](http://json.name).split(' ')\[1\] }}  
* isActive: true  
* joined: {{ new Date().toISOString() }}

---

## **🔁 Przykład \#3 – Oczyszczanie danych do raportu**

Chcesz usunąć wszystko oprócz:

* productName  
* price  
* category

W node Set:

* dodaj tylko te pola  
* zaznacz ✅ “Keep Only Set” \= true  
  → n8n usunie wszystko inne automatycznie

---

## **🧠 Pro Tip – zaawansowane wyrażenia (Expression)**

### **Przykład: nadanie etykiety na podstawie ceny**

{{ $json.price \> 1000 ? 'premium' : 'standard' }}

### **Przykład: zaokrąglenie liczby**

{{ Math.round($json.amount \* 1.23) }}

### **Przykład: dodanie liczby dni do daty**

{{ (() \=\> {

  const d \= new Date($json.dueDate);

  d.setDate(d.getDate() \+ 7);

  return d.toISOString();

})() }}

---

## **❗ Częste błędy:**

**Problem**

**Rozwiązanie**

Pola się nie pojawiają

Upewnij się, że są poprawnie wpisane \+ sprawdź Expression vs String

Brak danych z poprzedniego noda

Wyłączone Keep Only Set pozwoli zachować oryginalne dane

Brak efektu działania

Set nie działa “warunkowo” – musisz użyć IF, jeśli chcesz logikę warunkową

---

## **🚀 Podsumowanie:**

* Set to **uniwersalny node do manipulacji danymi**  
* Używaj go do dodawania, przekształcania i przygotowywania danych  
* Obsługuje Expression, daty, warunki i transformacje  
* Praktycznie każda automatyzacja n8n go zawiera – to **Twój cyfrowy edytor danych**

---

🔀 Node IF – Warunki i decyzje w workflow

**Czyli: "jeśli X, to zrób Y" w automatyzacjach**

---

## **🧠 Co robi node IF?**

Node IF sprawdza, czy spełniony jest **warunek logiczny**, i **rozdziela workflow na dwie ścieżki**:

* ✅ Ścieżka true – gdy warunek jest spełniony  
* ❌ Ścieżka false – gdy warunek NIE jest spełniony

To serce każdej **decyzyjnej logiki** w n8n. Możesz dzięki niemu np.:

* filtrować dane  
* wstrzymać proces jeśli coś jest niezgodne  
* rozgałęzić działania dla różnych przypadków

---

## **🧭 Najczęstsze zastosowania:**

* Czy klient ma zaległość?  
* Czy email zawiera załącznik?  
* Czy data płatności już minęła?  
* Czy wartość zamówienia przekracza X?

---

## **⚙️ Jak działa node IF?**

Node IF porównuje **wartość A z wartością B** według określonej reguły:

* Equal (=)  
* Not Equal (\!=)  
* Larger than (\>)  
* Smaller than (\<)  
* Contains  
* Starts With  
* Is Empty  
* itd.

---

## **🧩 Przykład \#1 – Czy zamówienie jest wysokiej wartości?**

Masz dane:

{

  "customer": "Jan Kowalski",

  "total": 1450

}

### **Konfiguracja node IF:**

**Pole**

**Wartość**

Wartość A

{{ $json.total }}

Operacja

Larger Than

Wartość B

1000

### **Co się stanie?**

* Jeśli total \> 1000 → item trafi na ścieżkę **true**  
* Jeśli total \<= 1000 → item trafi na ścieżkę **false**

---

## **📧 Przykład \#2 – Czy email ma załącznik?**

Dane z node Email mają pole binary.data.

### **Warunek:**

| A | {{ $binary.data ? true : false }} |  
| Operator | Equal |  
| B | true |

→ Jeśli istnieje załącznik → true  
→ Jeśli brak załącznika → false

---

## **⏰ Przykład \#3 – Czy termin już minął?**

Masz pole dueDate w formacie ISO:

{ "dueDate": "2025-07-10T00:00:00.000Z" }

Użyj IF z wyrażeniem:

{{ new Date($json.dueDate) \< new Date() }}

Operator: Equal  
Wartość B: true

✅ Jeśli termin minął → true

---

## **🧠 Bonus: Zaawansowany IF w Expression**

Czasem logikę warto zbudować całkowicie w Expression, np.:

{{ $json.status \=== 'pending' && $json.amount \> 500 }}

---

## **🔁 Przepływ danych przez node IF**

* **Każdy item przechodzi przez IF osobno** (tzn. per item)  
* Item trafia albo na ścieżkę true, albo false – nigdy na obie

Przykład:

* masz 10 rekordów  
* 4 spełniają warunek → lecą na true  
* 6 nie spełnia → lecą na false

---

## **⚠️ Częste błędy:**

**Problem**

**Rozwiązanie**

IF zawsze zwraca false

*Sprawdź typy danych – porównujesz string z number?*

Nie działa Contains?

*Działa tylko na string, a nie na array – użyj Function lub IIFE*

Chcesz więcej niż 2 ścieżki?

*Użyj Switch albo łańcucha IF*

---

## **🛠 Kiedy używać IF, a kiedy czegoś innego?**

**Potrzebujesz...**

**Użyj**

Warunku "TAK/NIE"

*IF*

Wiele przypadków (np. typ dokumentu)

*Switch*

Zaawansowane logiki wieloetapowe

*Code lub If \+ Set \+ Merge*

Warunków wewnątrz danych JSON

*Set \+ Expression logiczne*

---

## **🚀 Podsumowanie:**

* IF rozdziela przepływ danych na podstawie warunku logicznego  
* Idealny do weryfikacji danych, decyzji, rozgałęzień  
* Można używać prostych operatorów lub złożonych wyrażeń  
* Świetnie współpracuje z node’ami: Set, Webhook, HTTP, Email

---

🔄 Node Switch – Rozgałęzianie logiki na ścieżki

**Gdy "jeśli A to X, B to Y, C to Z" – użyj Switch\!**

---

## **🧠 Co robi node Switch?**

Node Switch umożliwia **rozdzielenie przepływu na wiele ścieżek**, w zależności od wartości danego pola lub wyrażenia.

To jak rozbudowany IF – ale bez potrzeby tworzenia kilku node’ów.

---

## **🧭 Kiedy używać Switch, a nie IF?**

**Potrzebujesz...**

**Node**

Dwóch ścieżek (tak/nie)

IF

Więcej niż dwóch możliwości (np. typ dokumentu, status, kraj, kanał sprzedaży)

Switch

---

## **🧩 Przykład \#1 – Obsługa różnych statusów zamówienia**

Dane:

{ "status": "cancelled" }

### **Chcesz:**

* Jeśli status \= new → wyślij potwierdzenie  
* Jeśli status \= processing → dodaj do systemu logistycznego  
* Jeśli status \= cancelled → wyślij notyfikację anulowania

---

## **⚙️ Konfiguracja node Switch:**

**Parametr**

**Ustawienie**

Mode

Value

Property Name

status

Rules

* 

  Equals → new  
* Equals → processing  
* Equals → cancelled

n8n utworzy oddzielne ścieżki wyjściowe:

* Wyjście 0 → gdy status \= new  
* Wyjście 1 → status \= processing  
* Wyjście 2 → status \= cancelled

---

## **💡 Przykład \#2 – Wybór systemu e-mailowego**

Pole emailProvider może mieć wartość:

* gmail  
* outlook  
* mailgun

Chcesz:

* Wysyłać maile różnymi node’ami zależnie od systemu

Node Switch:

* Property Name: emailProvider  
* Reguły: Equals gmail, Equals outlook, Equals mailgun  
* Do każdego wyjścia podłącz odpowiedni node Send Email

---

## **🎛 Tryby działania Switch**

### **1\. Mode: Value**

Najczęstszy – sprawdza wartość konkretnego pola ($json.status, $json.country itd.)

### **2\. Mode: Expression**

Gdy potrzebujesz bardziej dynamicznego warunku:

{{ $json.amount \> 1000 ? 'premium' : 'standard' }}

Potem tworzysz reguły:

* Equals → premium  
* Equals → standard

### **3\. Mode: Always Output Data**

Jeśli chcesz, żeby wszystkie reguły zostały uruchomione niezależnie – rzadziej stosowane, ale przydatne przy np. broadcastach

---

## **🔁 Jak działa przepływ danych przez Switch?**

* n8n sprawdza każdy item osobno  
* Item trafia **na pierwsze pasujące wyjście**  
* Jeśli nie ma dopasowania → item **nie przechodzi dalej** (chyba że dodasz tzw. **default branch**)

---

## **🧠 Pro Tip – użyj funkcji jako wejścia**

Czasem warto połączyć node Set z wyrażeniem i przekazać do Switch:

{{ (() \=\> {

  const value \= $json.score;

  if (value \>= 90\) return 'A';

  if (value \>= 80\) return 'B';

  if (value \>= 70\) return 'C';

  return 'F';

})() }}

Potem w Switch porównaj do A, B, C, F.

---

## **🛑 Częste pułapki:**

**Problem**

**Rozwiązanie**

Itemy z niepasującą wartością “znikają”

*Dodaj default branch (opcja: Always output empty)*

Switch nie działa

*Sprawdź typ danych (number vs string) – np. 5 to nie to samo co "5"*

Przejścia się nie uruchamiają

*Upewnij się, że Property Name ma dokładną nazwę pola (case sensitive)*

---

## **🚀 Podsumowanie:**

* Switch rozdziela dane na wiele ścieżek – opartych na wartości pola lub wyrażeniu  
* Świetny do obsługi wielu stanów, opcji, kanałów czy typów  
* Minimalizuje liczbę node’ów IF, upraszcza logikę  
* Pracuje per item – każdy element jest analizowany oddzielnie

---

💻 Node Code – Programowalne centrum dowodzenia

**Pełna moc JavaScriptu wewnątrz n8n**

---

## **🧠 Czym jest node Code?**

Node Code pozwala Ci **uruchomić niestandardowy kod JavaScript na danych wejściowych**, co daje możliwość:

* złożonych operacji na danych (map, filter, reduce)  
* pętli, warunków, formatowania tekstu  
* obliczeń matematycznych, dat, stringów  
* generowania zupełnie nowych danych  
* łączenia i manipulowania obiektami i tablicami

To Twój **"custom logic engine"** w workflowie.

---

## **🆕 Dlaczego teraz Code, a nie Function?**

W n8n 2024+ node Function został zastąpiony przez nowy node Code, który oferuje:

* Lepszą strukturę edycji (pełny edytor)  
* Obsługę wielu języków (w przyszłości)  
* Większą kontrolę nad wejściem i wyjściem  
* Tryby Run Once For All Items oraz Run Once Per Item

---

## **🧩 Jak działa?**

Masz do dyspozycji:

* input → dane wejściowe (z poprzedniego node)  
* output → dane wyjściowe (które przekażesz dalej)  
* Pełną składnię JavaScript ES6+

---

## **⚙️ Tryby działania:**

### **🔁 Run Once Per Item (domyślnie)**

– działa **na każdym itemie osobno** (jak pętla forEach)  
– zwraca nowy item dla każdego wejściowego

export default function main(item) {

  item.json.newValue \= item.json.amount \* 1.23;

  return item;

}

---

### **🧪 Run Once For All Items**

– działa **na wszystkich itemach jednocześnie**  
– użyteczne przy agregacji, filtrowaniu, operacjach między rekordami

export default function main(items) {

  const total \= items.reduce((acc, item) \=\> acc \+ item.json.amount, 0);

  return \[{ json: { totalAmount: total } }\];

}

---

## **📦 Przykład \#1 – Oblicz VAT i dodaj pole**

Dane:

{ "amount": 100 }

Kod:

export default function main(item) {

  item.json.vat \= item.json.amount \* 0.23;

  item.json.total \= item.json.amount \* 1.23;

  return item;

}

Efekt:

{ "amount": 100, "vat": 23, "total": 123 }

---

## **📊 Przykład \#2 – Filtrowanie itemów powyżej 1000 PLN**

Tryb: Run Once For All Items

export default function main(items) {

  return items.filter(item \=\> item.json.amount \> 1000);

}

---

## **🧠 Przykład \#3 – Parsowanie złożonego pola JSON (string)**

Masz:

{ "rawData": "{\\"status\\":\\"OK\\",\\"score\\":85}" }

Chcesz przekształcić:

export default function main(item) {

  const parsed \= JSON.parse(item.json.rawData);

  return { json: parsed };

}

Efekt:

{ "status": "OK", "score": 85 }

---

## **📅 Przykład \#4 – Operacje na datach**

Chcesz dodać 7 dni do daty:

export default function main(item) {

  const date \= new Date(item.json.startDate);

  date.setDate(date.getDate() \+ 7);

  item.json.dueDate \= date.toISOString();

  return item;

}

---

## **🛠️ Przykład \#5 – Grupowanie danych**

Grupuj zamówienia po kliencie:

export default function main(items) {

  const grouped \= {};

  for (const item of items) {

    const customer \= item.json.customer;

    if (\!grouped\[customer\]) grouped\[customer\] \= \[\];

    grouped\[customer\].push(item.json);

  }

  return Object.entries(grouped).map((\[customer, orders\]) \=\> ({

    json: { customer, orders }

  }));

}

---

## **🧱 Dostępne zmienne i API:**

* item.json – dane JSON  
* item.binary – dane binarne  
* console.log() – debugowanie  
* Buffer, Date, Math, JSON, Object – wszystko z Node.js

---

## **🔎 Debugowanie kodu:**

* Użyj console.log() i sprawdzaj output w zakładce Execution Logs  
* Testuj na małych próbkach danych  
* Waliduj strukturę danych przed return

---

## **⚠️ Najczęstsze błędy:**

**Problem**

**Rozwiązanie**

Brak danych na wyjściu

*Brak return, złe main()*

Zły tryb (Run Once)

*Zmień tryb w zależności od użycia*

undefined lub null

*Upewnij się, że pole istnieje zanim je użyjesz*

Nie działa JSON.parse()

*Dodaj try-catch dla bezpieczeństwa*

---

## **🚀 Podsumowanie:**

* Code to **pełna moc JavaScriptu** w Twoim workflow  
* Idealny do logiki, warunków, pętli, filtrów, operacji na strukturach danych  
* Obsługuje dwa tryby: Per Item i All Items  
* To **must-have** dla każdego, kto tworzy systemy automatyzacji z prawdziwego zdarzenia

---

🔁 Loop Over Items – precyzyjna pętla

**Kontroluj każdy krok przetwarzania danych w n8n**

---

## **🧠 Co robi node Loop Over Items?**

Ten node pozwala uruchomić **całą sekcję workflowa oddzielnie dla każdego elementu**, ale nie jak typowe przetwarzanie w n8n (gdzie wszystkie itemy lecą naraz), tylko **jeden po drugim**, z zachowaniem pełnej kontroli nad przepływem i kolejnością.

To Twoja **"pętla for/foreach"**, ale w sposób wizualny i bez pisania kodu.

---

## **🧭 Kiedy używać?**

✅ Gdy musisz:

* zachować **kolejność** operacji (np. sekwencyjna wysyłka maili)  
* przetwarzać **duże ilości danych** bez przeciążania API (np. jedno zapytanie na sekundę)  
* dodawać **opóźnienia** (Wait) pomiędzy elementami  
* używać **warunków zależnych od wyniku poprzednich kroków**  
* przerywać pętlę (Break Loop) pod pewnymi warunkami

---

## **🔧 Jak działa?**

Node Loop Over Items tworzy **własną zamkniętą strukturę pętli**:

Loop Start

   |

   ├── \[Nodes przetwarzające jeden element\]

   |

Loop End

Każdy item z wejścia jest przetwarzany **osobno**, **po kolei**.

---

## **🔗 Przykład 1 – Wysyłka maili do klientów z odstępem**

Masz listę kontaktów:

\[

  { "email": "a@firma.com", "name": "Anna" },

  { "email": "b@firma.com", "name": "Bartek" },

  { "email": "c@firma.com", "name": "Celina" }

\]

### **Cel:**

* Wysłać e-maila każdej osobie  
* Zachować odstęp 10 sekund między wiadomościami

### **Workflow:**

Loop Over Items → Send Email → Wait (10s)

Efekt: wiadomości są wysyłane sekwencyjnie, nie jednocześnie.

---

## **🧪 Przykład 2 – Przetwarzanie elementów API z limitem**

Chcesz wysłać dane do zewnętrznego API, ale API pozwala na **1 zapytanie na sekundę**.

### **Rozwiązanie:**

* Użyj Loop Over Items  
* W środku: HTTP Request \+ Wait (1s)  
* Dzięki temu **zachowasz limit API**, unikając błędów 429 (Too Many Requests)

---

## **🧨 Przykład 3 – Zatrzymaj pętlę gdy warunek spełniony**

Masz listę rekordów i chcesz przeszukiwać je, aż znajdziesz pierwszy pasujący (status \= "approved").

### **Dodaj w środku:**

* Node IF → sprawdź warunek  
* Node Break Loop → jeśli TRUE, przerywa dalsze przetwarzanie

Efekt: pętla kończy się natychmiast po spełnieniu warunku.

---

## **🔁 Jak ustawić node Loop Over Items?**

1. Wstaw node Loop Over Items  
2. Połącz go z wcześniejszym node’em zwracającym tablicę danych  
3. W środku pętli dodaj kolejne nody, np. Set, Send Email, IF, HTTP Request, Wait  
4. Zamknij pętlę node’em kończącym (n8n automatycznie tworzy pętlę logiczną)  
5. Uruchom workflow i obserwuj przebieg (jeden item \= jedna iteracja)

---

## **📌 Ciekawostka: Czym różni się od standardowego przetwarzania?**

**Cecha**

**Loop Over Items**

**Standardowe przetwarzanie**

Kolejność przetwarzania

Sekwencyjna (jeden po drugim)

Równoległa (wszystko naraz)

Może używać Wait

✅ Tak

❌ Nie

Możliwość Break Loop

✅ Tak

❌ Nie

Czas trwania

Wolniejsze

Szybsze (ale mniej kontrolowalne)

---

## **🧠 Najczęstsze zastosowania:**

* Wysyłka e-maili z odstępem czasowym  
* Przetwarzanie dużych datasetów z API (rate limit)  
* Iteracyjne obliczenia lub porównania  
* Stopniowe dodawanie rekordów do CRM/Bazy danych  
* Symulacja przepływów w czasie rzeczywistym

---

## **🚨 Błędy, których unikaj:**

**Problem**

**Rozwiązanie**

Zbyt długi czas działania

*Zoptymalizuj ilość danych wejściowych*

Zapętlenie

*Użyj Break Loop lub warunku w IF*

Wait nie działa

*Upewnij się, że node działa w pętli, nie poza nią*

---

## **🚀 Podsumowanie**

Node Loop Over Items to **brama do sekwencyjnych przepływów** – jeśli Twoja automatyzacja wymaga precyzyjnej kontroli nad każdym rekordem lub komunikacją z zewnętrznymi systemami krok po kroku, to absolutny must-have.

---

🔗 Kontrola przepływu: Split Out, Aggregate, Merge

W świecie automatyzacji liczy się nie tylko to **co przetwarzasz**, ale **jak zarządzasz danymi** w przepływie. W n8n mamy trzy niezwykle przydatne nody do pracy z wieloma rekordami:

* ✂️ Split Out – rozdziela dane na pojedyncze elementy  
* 🧮 Item Lists (Aggregate) – grupuje i przekształca dane  
* 🔀 Merge – łączy dane z dwóch różnych źródeł

Poznajmy każdy z nich z osobna – a na koniec połączmy to w praktyczny przykład\!

---

## **✂️ Split Out – rozbij strukturę, przetwarzaj precyzyjnie**

### **🧠 Co robi?**

Node Split Out (nazwa GUI: "Split Out Items") **dzieli jedną strukturę danych (np. tablicę)** na **oddzielne itemy**, które można potem przetwarzać pojedynczo – np. wysyłać, analizować, iterować.

### **📦 Przykład danych wejściowych:**

{

  "orderId": "A123",

  "items": \[

    { "product": "Laptop", "price": 5000 },

    { "product": "Mouse", "price": 200 }

  \]

}

### **🔧 Konfiguracja:**

* Pole do rozdzielenia: items  
* Tryb: Split Into Multiple Items

### **✅ Efekt:**

Node zwróci **2 osobne rekordy**, każdy reprezentujący pojedynczy item z tablicy.

### **📌 Zastosowanie:**

* Przetwarzanie pozycji zamówienia indywidualnie  
* Wysyłanie maili do listy odbiorców  
* Sprawdzanie każdej faktury z paczki

---

## **🧮 Aggregate (node Item Lists) – podsumuj, zgrupuj, zlicz**

### **🧠 Co robi?**

Node Item Lists (dawniej "Aggregate Items") pozwala na **grupowanie i agregację wielu itemów** – podobnie jak funkcje w Excelu (SUMA, LICZ.JEŻELI, POŁĄCZ.TEKSTY).

### **🔧 Tryby agregacji:**

* **Group By** – grupuj po kluczu (np. klient, produkt)  
* **Sum** – sumuj wartości numeryczne  
* **Concatenate** – łącz wartości tekstowe  
* **Count** – zlicz ilość itemów

### **📦 Przykład danych wejściowych:**

\[

  { "customer": "Anna", "value": 300 },

  { "customer": "Anna", "value": 200 },

  { "customer": "Jan", "value": 150 }

\]

### **✅ Przykład działania:**

* Group by: customer  
* Sum: value

→ Zwróci:

\[

  { "customer": "Anna", "value": 500 },

  { "customer": "Jan", "value": 150 }

\]

### **📌 Zastosowanie:**

* Raporty sprzedaży per klient/produkt  
* Sumowanie faktur  
* Grupowanie leadów według źródła

---

## **🔀 Merge – połącz dane z dwóch źródeł**

### **🧠 Co robi?**

Node Merge łączy **dane z dwóch strumieni (Input 1 \+ Input 2\)** w zależności od wybranej metody:

### **🔧 Tryby Merge:**

**Tryb**

**Co robi**

**Przykład**

**Merge by Index**

Łączy itemy o tej samej pozycji

Item 0 z Input 1 \+ Item 0 z Input 2

**Merge by Key**

Łączy po wspólnym polu (np. ID)

userId z Input 1 \= userId z Input 2

**Append**

Dodaje itemy jeden po drugim

scalone listy

**Multiplex**

Tworzy wszystkie możliwe kombinacje

użyteczne w testach, rzadziej produkcyjnie

### **📦 Przykład:**

Input 1:

{ "userId": 101, "name": "Rafał" }

Input 2:

{ "userId": 101, "score": 95 }

Tryb: **Merge by Key** → Key: userId

Efekt:

{ "userId": 101, "name": "Rafał", "score": 95 }

### **📌 Zastosowanie:**

* Łączenie danych z API i lokalnej bazy  
* Dopasowanie zamówień do klientów  
* Scalanie danych transakcyjnych z metadanymi

---

## **🧠 Jak je połączyć w praktyce?**

### **🧩 Case: Obsługa zamówienia z wieloma produktami**

1. 📥 Odbierasz zamówienie z webhooka:

{

  "orderId": "X123",

  "products": \[

    { "sku": "A1", "qty": 2 },

    { "sku": "B3", "qty": 1 }

  \]

}

2. ✂️ Split Out → rozbijasz products na osobne rekordy  
3. 🔗 HTTP Request → pobierasz dane o każdym produkcie z API magazynu  
4. 🔀 Merge (Merge by Index) → łączysz produkt z jego szczegółami  
5. 🧮 Item Lists (Group by category, Sum qty) → podsumowujesz ilości per kategoria  
6. 📨 Wysyłasz raport np. przez email lub webhook do systemu ERP

---

## **⚠️ Najczęstsze błędy:**

**Problem**

**Rozwiązanie**

Merge by Key nie działa

*Upewnij się, że klucze są tego samego typu (np. 101 ≠ "101")*

Aggregate zwraca nieoczekiwane dane

*Sprawdź czy poprawnie wskazałeś Group By i pole do sumowania*

Split nie zwraca itemów

*Upewnij się, że wskazane pole zawiera tablicę*

---

## **🚀 Podsumowanie**

**Node**

**Funkcja**

✂️ Split Out

Rozdziela tablicę na pojedyncze itemy

🧮 Aggregate (Item Lists)

Grupuje i przetwarza zbiory danych

🔀 Merge

Łączy dane z dwóch źródeł (po kluczu lub indeksie)

Opanowanie tych node’ów to krok w stronę **profesjonalnych, skalowalnych automatyzacji**.

---

🧱 Binary Data w n8n

**Czym jest i jak działa binarka w workflowach**

---

## **📦 Co to jest „Binary Data”?**

W n8n dane przetwarzane w workflowach mają najczęściej formę **danych JSON** – czyli czytelnych dla człowieka struktur z polami typu tekst, liczby, daty itd.  
Ale co jeśli pracujesz z plikami, obrazami, PDF-ami, dokumentami Word lub np. plikami CSV?  
Tutaj do gry wchodzi **binary data** – czyli **dane binarne**.

---

### **🧠 Definicja techniczna:**

**Binary data** to pliki lub treści, które nie są tekstem (czyli nie nadają się do reprezentowania w zwykłym JSON) i muszą być przechowywane w specjalnym formacie jako "dane binarne" – zaszyfrowane, skompresowane lub zapisane w strukturze bajtów.

---

## **📁 Jak binary data działa w n8n?**

W workflowach n8n, jeśli node generuje lub odbiera plik (np. przez API, upload, maila lub scrape), to taki plik jest przechowywany w strukturze:

{

  "binary": {

    "data": {

      "fileName": "plik.pdf",

      "mimeType": "application/pdf",

      "fileSize": 204800,

      "data": "base64..." ← zawartość zakodowana

    }

  }

}

Główne właściwości:

* fileName – nazwa pliku  
* mimeType – typ danych (np. image/png, application/pdf)  
* fileSize – rozmiar w bajtach  
* data – zakodowana zawartość pliku w formacie Base64

---

## **🔄 Skąd się bierze Binary Data?**

Najczęstsze źródła:

* **HTTP Request** (pobieranie plików z internetu, API z plikami)  
* **Read Binary File** (wczytywanie pliku z systemu)  
* **IMAP Email** (załączniki z maili)  
* **Webhook z formularzem lub uploadem**

---

## **🧰 Jak obsługiwać Binary Data?**

### **✅ Przykład użycia:**

1. Pobierasz plik PDF z API → HTTP Request node  
2. Plik pojawia się jako binary (binary.data)  
3. Chcesz go wysłać dalej – np. przez email lub zapisać w Google Drive  
4. Używasz node’a:  
   * Email Send: załączasz binary.data jako plik  
   * Google Drive: wrzucasz binary.data jako nowy plik

---

## **🔧 Przydatne narzędzia:**

### **🧹 Konwersja binarki do JSON:**

* Node Binary Data → JSON: użyj, jeśli masz np. CSV lub Excel jako binarkę i chcesz go sparsować.

### **📥 Parsowanie CSV:**

* Read Binary File → Convert CSV to JSON  
  (n8n rozpozna plik .csv i zamieni go na dane tekstowe)

### **🧪 Debugowanie:**

* Możesz podejrzeć binary.data w UI n8n – kliknij Binary → Preview, a system pokaże nazwę i typ pliku

---

## **🛑 Uwaga na pułapki:**

**Problem**

**Rozwiązanie**

Nie widzisz danych binary w kolejnym node?

*Upewnij się, że node faktycznie przesyła dane binarne dalej – niektóre node’y “czyszczą” dane.*

Chcesz odczytać dane jako tekst?

*Musisz je przekonwertować np. Convert Binary Data albo użyć Set z wyrażeniem Buffer.toString()*

Node nie widzi pliku?

*Sprawdź, czy pole Property Name to dokładnie data (czyli binary.data)*

---

## **🚀 Podsumowanie:**

* **Binary Data** to sposób n8n na obsługę plików: PDF, obrazy, CSV itd.  
* Przechowywane są jako zakodowane dane w Base64  
* Możesz je przesyłać między node’ami, konwertować, zapisywać lub wysyłać jako załączniki  
* Pamiętaj, by odpowiednio je odczytywać i konwertować, jeśli potrzebujesz danych tekstowych

---

**AI w N8N \- Prompting**

Przetwarzanie Danych w n8n 🔁📊  
---

## **🧠 Dlaczego to ma znaczenie?**

Dane to paliwo każdej automatyzacji. Ale **surowe dane często są nieprzydatne** – mają zły format, zawierają błędy, są niekompletne.

🔧 Dlatego zanim AI lub automatyzacja coś z nimi zrobi, trzeba je:

1. **Parsować** – wyodrębnić kluczowe informacje  
2. **Formatować** – nadać spójny wygląd i strukturę  
3. **Czyścić** – usunąć błędy, puste pola, niepotrzebne znaki

📌 To **fundament każdej automatyzacji** – bez tego n8n nie zadziała poprawnie.

---

## **🔍 Co to jest przetwarzanie danych?**

To proces przekształcania **chaotycznych danych wejściowych** w **czyste, uporządkowane dane**, gotowe do dalszego działania – np. analizy, decyzji, wysyłki przez e-mail, zapisania do bazy.

---

## **🧱 Trzy filary przetwarzania danych**

---

### **1\. Parsowanie danych**

📖 **Definicja:**  
Rozkładanie złożonych danych na czytelne i zrozumiałe elementy.

📌 **Kiedy?**

* Masz dane z formularza, HTML, pliku PDF, JSON  
* Chcesz wydobyć np. imię, datę, kwotę

🔧 **Przykład:**  
Masz dane z zeskanowanego prawa jazdy:  
➡️ Parsujesz imię, adres i datę urodzenia do osobnych pól.

🔄 **Źródła danych do parsowania:**

* E-maile  
* Faktury  
* Wiadomości Slack  
* Webhooki z JSON-em  
* HTML z webscrapingu

---

### **2\. Formatowanie danych**

📖 **Definicja:**  
Standaryzacja wyglądu i struktury danych – tak, by wszystko było spójne.

📌 **Dlaczego ważne?**

* Ułatwia filtrowanie i sortowanie  
* Zapewnia zgodność między systemami  
* Poprawia czytelność i analizę

🧰 **Typowe operacje:**

* Zmiana wielkości liter (Jan → JAN)  
* Formatowanie dat (2025-07-29 → 29/07/2025)  
* Zaokrąglanie liczb (19.9876 → 20\)  
* Łączenie pól (imię \+ nazwisko → pełne imię)

⚙️ **Narzędzia wspierające formatowanie:**

* **Set Node** w n8n  
* Google Sheets (funkcje tekstowe i liczby)  
* Airtable (polityki kolumn)  
* Browserbear / Make / HubSpot Workflows

---

### **3\. Czyszczenie danych**

📖 **Definicja:**  
Usuwanie błędów, duplikatów i nieprawidłowych wartości z danych.

📌 **Po co?**

* Unikasz błędów w workflow  
* Poprawiasz jakość danych w raportach  
* Możesz zaufać swoim automatyzacjom

❗ **Typowe problemy:**

* null, undefined, puste pola  
* Literówki i błędne znaki (Miasto: warszwa)  
* Duplikaty rekordów (Jan Kowalski x3)  
* Niespójne formaty (PL vs Polska)

🧼 **Co możesz zrobić w n8n?**

* Użyć **IF Node** do sprawdzenia, czy dane są puste  
* Wstawić domyślne wartości, gdy brakuje danych  
* Usunąć zbędne białe znaki lub znaki specjalne

---

## **📅 Kiedy używać danego kroku?**

**Etap**

**Użyj gdy…**

**Parsowanie**

Masz dane z formularzy, e-maili, webhooków, plików – i chcesz wyciągnąć konkretne informacje

**Formatowanie**

Chcesz ujednolicić wygląd: daty, teksty, liczby, kody pocztowe

**Czyszczenie**

Masz błędne, niekompletne lub powielone dane

---

## **🧠 Dobre praktyki**

✅ **Zacznij od małych zestawów danych**  
✅ **Testuj, testuj, testuj\!** – każde źródło danych może się różnić  
✅ **Używaj szablonów workflow** – np. czyszczenie e-maili, formatowanie dat  
✅ **Waliduj dane na wejściu i wyjściu**  
✅ **Dokumentuj transformacje** – np. „pole date\_raw → date\_formatted”

---

## **🔁 Jak to wygląda w praktyce w n8n?**

🎯 Przykład: Skrypt AI do podsumowania wiadomości e-mail

1. **Webhook** odbiera treść e-maila (HTML \+ nagłówki)  
2. **Set Node** parsuje pola: temat, nadawca, ciało wiadomości  
3. **Function Node** formatuje tekst – usuwa tagi, zostawia tylko czysty tekst  
4. **If Node** sprawdza, czy wiadomość nie jest spamem (subject.includes('oferta'))  
5. **LLM Node (AI)** tworzy podsumowanie  
6. **Send Email Node** wysyła gotowe podsumowanie do zespołu

📦 Bez przetwarzania danych – taki flow nie miałby sensu.

---

## **📦 Podsumowanie**

* Dane surowe \= dane bezużyteczne  
* Trzy filary: **parsowanie**, **formatowanie**, **czyszczenie**  
* Przetwarzanie to pierwszy krok do jakościowej automatyzacji  
* W n8n możesz zbudować cały **pipeline danych**  
* Gdy dane są gotowe, AI może działać skutecznie 💡

---

🔐 Metody Uwierzytelniania API  
---

## **🧠 Co to jest uwierzytelnianie API?**

**Uwierzytelnianie API** to proces potwierdzania tożsamości aplikacji lub użytkownika, który chce uzyskać dostęp do zewnętrznego systemu przez API.

✅ Zapewnia, że tylko **uprawnione osoby** mogą:

* Odczytywać dane (np. pobrać listę kontaktów),  
* Wysyłać dane (np. dodawać nowe leady),  
* Wykonywać akcje (np. wysyłać e-maile).

---

## **🔑 Najpopularniejsze metody uwierzytelniania API**

---

### **1\. API Key – Klucz API**

🔹 Prosta metoda: serwis wydaje Ci unikalny **klucz**  
🔹 Wysyłasz go w **nagłówku lub parametrze zapytania**  
🔐 Powinien być przechowywany **bezpiecznie** – jak hasło

📌 Przykład (nagłówek HTTP):

Authorization: Bearer sk-abc123xyz

---

### **2\. Basic Auth – Uwierzytelnianie Podstawowe**

🧾 Polega na wysłaniu **nazwy użytkownika i hasła**, zakodowanych w Base64  
💡 **Używaj tylko przez HTTPS**, ponieważ dane mogą być łatwo przechwycone

📌 Przykład:

Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=

---

### **3\. OAuth 2.0 – Dostęp przez token**

🪙 Popularna i **bezpieczna metoda** uwierzytelniania

* Pozwala aplikacjom uzyskać **ograniczony dostęp** do zasobów użytkownika  
* Użytkownik **nie podaje hasła**, tylko akceptuje dostęp  
* Wykorzystywany przez Google, Facebook, GitHub i wiele innych

📌 n8n obsługuje OAuth 2.0 – możesz podłączyć się np. do Google Sheets, Notion, Salesforce itd.

---

### **4\. JWT – JSON Web Token**

📦 Token z zakodowanymi informacjami o użytkowniku  
✅ Używany np. w aplikacjach webowych i mobilnych  
🧠 Serwer **nie musi przechowywać sesji** – wszystko jest zakodowane w tokenie

📌 Przykład:

Authorization: Bearer eyJhbGciOiJIUzI1...

---

## **🧩 Jak zaimplementować uwierzytelnianie w n8n**

n8n umożliwia integrację z różnymi metodami uwierzytelniania przez node HTTP Request.

### **✅ API Key:**

* Przejdź do **Credentials**  
* Wybierz HTTP Basic Auth lub API Key  
* Ustaw nagłówki (np. Authorization) lub parametr zapytania (?api\_key=xxx)  
* Wybierz dane uwierzytelniające w węźle

---

### **✅ Basic Auth:**

* W Credentials wybierz HTTP Basic Auth  
* Wprowadź login i hasło  
* W węźle HTTP Request wybierz te dane uwierzytelniające

---

### **✅ OAuth 2.0:**

* W Credentials wybierz OAuth2 API  
* Wprowadź Client ID, Client Secret, Auth URL, Token URL  
* n8n zajmie się całą procedurą uwierzytelnienia  
* W workflow możesz używać żądań z automatycznie odświeżanym tokenem

---

## **💬 Jakie dane są najczęściej przesyłane z uwierzytelnieniem?**

**Element**

**Gdzie umieszczany?**

**Przykład**

Klucz API

Header lub URL param

?api\_key=abc123

Token JWT

Header (Authorization)

Bearer xxxxx

Login/hasło

Header (Base64)

Basic dXNl...

Access Token (OAuth2)

Header (Authorization)

Bearer abc...

---

## **📉 Co jeśli nie działa? – Diagnostyka**

**Problem**

**Rozwiązanie**

401 Unauthorized

*Zły token / brak autoryzacji*

403 Forbidden

*Nie masz dostępu do tej akcji*

400 Bad Request

*Błąd składni lub danych w zapytaniu*

Token wygasł

*Sprawdź, czy jest odświeżany automatycznie*

---

## **🔐 Bezpieczeństwo przede wszystkim\!**

* Nigdy nie udostępniaj publicznie swoich **kluczy API** ani **tokenów**  
* Używaj **HTTPS** – zawsze\!  
* W n8n przechowuj dane uwierzytelniające **w Credential Managerze**, nie w treści node’a

---

## **📌 Podsumowanie**

* Uwierzytelnianie to **serce każdej integracji z API**  
* Do wyboru masz: **API Key, Basic Auth, OAuth 2.0, JWT**  
* n8n wspiera wszystkie główne metody  
* Prawidłowa konfiguracja zapewnia **bezpieczny i stabilny workflow**

---

🤖 OpenRouter – brama do świata modeli językowych

**Jak korzystać z wielu modeli AI bez komplikacji API**

---

## **🧠 Co to jest OpenRouter?**

**OpenRouter** to platforma, która działa jako **pośrednik API między Twoją aplikacją (np. n8n) a różnymi modelami językowymi LLM**, takimi jak:

* OpenAI  
* Anthropic  
* Mistral  
* Google Gemini  
* Meta Llama  
* Perplexity, Groq i inne

Dzięki temu zamiast tworzyć połączenia z każdym modelem osobno, możesz korzystać z **jednego, zunifikowanego API** – [**openrouter.ai**](http://openrouter.ai).

---

## **🔧 Co oferuje OpenRouter?**

**Funkcja**

**Opis**

🧩 Jeden endpoint

Korzystasz z https://openrouter.ai/api/v1/chat/completions dla wielu modeli

🔐 Łatwe uwierzytelnianie

Token API bez potrzeby rejestracji w wielu firmach

💰 Optymalizacja kosztów

Możliwość wyboru tańszych modeli lub rozliczeń za token

📊 Dashboard i analityka

Historia użyć, billing, porównania modeli

🔄 Zamienne modele

Możesz łatwo testować różne LLM bez zmian w logice automatyzacji

⚡ Proxy do zamkniętych modeli

Dostęp do modeli niedostępnych w Twoim kraju/kontekście (np. Claude z UE)

---

## **🧭 Kiedy używać OpenRouter w n8n?**

✅ Gdy:

* chcesz testować różne modele LLM **bez zmiany kodu**  
* zależy Ci na **dostępie do GPT-4o, Claude 4, Mistral, LLaMA 4…** w jednym miejscu  
* potrzebujesz **taniego lub szybszego modelu** do prostszych zadań  
* nie chcesz zakładać wielu kont deweloperskich

---

## **🧩 Przykład użycia OpenRouter w n8n**

1. 🔐 Uzyskaj klucz API:  
   Załóż konto na [https://openrouter.ai](https://openrouter.ai) → Skopiuj swój API Key  
2. 🧱 Node: HTTP Request  
   * Method: POST  
   * URL: https://openrouter.ai/api/v1/chat/completions  
   * Auth: Header  
     * Authorization: Bearer \<your-api-key\>  
   * Headers:  
     * HTTP-Referer: https://yourprojectname.com *(wymagany\!)*

Body (JSON):

{

  "model": "openai/gpt-4.0",

  "messages": \[

    { "role": "system", "content": "You are a helpful assistant." },

    { "role": "user", "content": "Jakie są największe różnice między GPT-4 a Claude 4?" }

  \]

}

3. 💡 Odczytaj odpowiedź z pola choices\[0\].message.content

---

## **🧠 Popularne modele dostępne przez OpenRouter:**

**Model**

**Producent**

**Zastosowania**

openai/gpt-4o

OpenAI

Najlepszy ogólny LLM, szybki i multimodalny

anthropic/claude-4-opus

Anthropic

Silny w analizach i kodowaniu

mistralai

Mistral

Lekki, szybki, tani – idealny do klasyfikacji

meta-llama

Meta

Otwarty model z dużym potencjałem

perplexity

Perplexity

Dobrze radzi sobie w Q\&A

google/gemini-pro

Google

Ciekawe wyniki w multimodalności

📝 Lista modeli i kosztów: [https://openrouter.ai/models](https://openrouter.ai/models)

---

## **⚠️ Wymagania i uwagi**

* **Referer header** jest obowiązkowy (np. https://twojadomena.pl)  
* Tokeny są naliczane per model – uważaj na koszty  
* OpenRouter **nie wymaga rejestracji u dostawców LLM** – ale można używać także własnych kluczy  
* Przy dużej ilości żądań warto ustawić limity (Rate Limit node w n8n)

---

## **📌 Zastosowania w automatyzacji**

* Tworzenie inteligentnych asystentów (np. CRM, ERP)  
* Klasyfikacja dokumentów, e-maili, wiadomości  
* Tłumaczenia i podsumowania tekstów  
* Kodowanie / dekodowanie danych  
* Kreatywne generowanie treści (np. oferty, wiadomości handlowe)

---

## **🚀 Podsumowanie**

**OpenRouter to uniwersalny router API do LLM-ów**, który pozwala automatyzować z użyciem **wielu modeli językowych**, bez chaosu związanego z wieloma dostawcami.

W Twoim workflow:

Zamiast zastanawiać się “który model teraz wybrać?”, podłącz OpenRouter i **dynamicznie steruj wyborem modelu** w zależności od kontekstu.

—-------  
Prompt Engineering dla LLM-ów 🎯🛠️  
---

## **🧠 Czym jest prompt engineering?**

**Prompt engineering** to sztuka tworzenia jasnych, konkretnych instrukcji (czyli „promptów”), które mówią modelowi AI (LLM), **co ma zrobić i jak ma myśleć**.

Dzięki dobrze napisanemu promptowi:

* Model daje bardziej trafne i konkretne odpowiedzi  
* Otrzymujesz wyniki szybciej i taniej (mniej iteracji\!)  
* Masz większą kontrolę nad tonem, formatem, długością odpowiedzi

📌 Prompt \= instrukcja  
📌 Dobry prompt \= precyzyjne i użyteczne wyniki

---

## **🎯 Dlaczego prompt engineering jest ważny?**

**Korzyść**

**Co daje?**

✅ Lepsza jakość

AI rozumie, co dokładnie chcesz

✅ Oszczędność czasu

Mniej prób i błędów, szybciej gotowe

✅ Kontrola nad formatem

Odpowiedzi jako lista, JSON, markdown...

✅ Styl i ton

Profesjonalny, swobodny, techniczny, kreatywny

✅ Bezpieczeństwo i precyzja

Mniej błędów, mniej „halucynacji” AI

---

## **📋 Przykład – zły vs. dobry prompt**

❌ **Zły prompt**

✅ **Dobry prompt**

„Napisz coś o AI”

„Napisz 3 zdania o tym, jak działa backpropagation w sieciach neuronowych – zrozumiale dla ucznia liceum.”

🔎 Im **bardziej konkretny i kontekstowy** prompt, tym **lepszy wynik**.

---

## **💡 Najlepsze praktyki w tworzeniu promptów**

### **1\. Bądź konkretny i szczegółowy**

* Określ **cel**, **grupę docelową**, **format** i **zakres**.

🧾 „Stwórz opis produktu słuchawek bezprzewodowych (100 słów), skup się na redukcji szumów. Dla audiofili. Styl: profesjonalny.”

---

### **2\. Strukturyzuj prompt**

Używaj **nagłówków**, **punktów**, **oddzielenia treści**.

\#\#\# Instrukcje:

Przetłumacz tekst na francuski.

\#\#\# Tekst:

"To jest test promptowania w n8n"

---

### **3\. Podawaj przykłady (few-shot learning)**

Przykład wejścia i oczekiwanego wyjścia uczy model, co robić.

Wejście: „Projekt zostanie zakończony w piątek”  

Wyjście: „- Zakończyć projekt do piątku”

Teraz przetwórz:

„Prezentacja gotowa na środę”

---

### **4\. Promptuj rolami (role-based prompting)**

Nadaj modelowi **tożsamość** i **cel działania**.

🧑‍🏫 „Jesteś nauczycielem historii. Wyjaśnij przyczyny II wojny światowej uczniowi podstawówki.”

🧑‍💻 „Jesteś inżynierem danych. Opisz zalety SQL nad NoSQL w analizie biznesowej.”

---

### **5\. Używaj chain-of-thought prompting**

Poproś AI o myślenie **krok po kroku**, np. przy zadaniach matematycznych, analitycznych, decyzyjnych.

🧮 „Oblicz ROI dla kampanii za 10 tys. zł. Najpierw oszacuj wskaźnik kliknięć, potem konwersji…”

---

## **📌 Przykłady zastosowań promptów w realnych sytuacjach**

**Obszar**

**Przykład promptu**

***Obsługa klienta***

„Napisz uprzejmą odpowiedź na skargę o opóźnioną dostawę. Dodaj 15% zniżki jako rekompensatę.”

***Content marketing***

„Napisz tytuł posta na bloga o dietach wegańskich. Ton: przyjazny, z faktami naukowymi.”

***Analiza danych***

„Zbierz trendy z danych CSV i przedstaw je jako tabelę markdown.”

---

## **💸 Prompty i koszt tokenów**

* Dłuższy prompt \= więcej tokenów \= wyższy koszt  
* Optymalizuj prompt: **kompresuj zbędne słowa**, ale zachowuj kluczowe informacje  
* Unikaj niepotrzebnych dygresji i powtórzeń

🧠 „Mały prompt \= mały koszt, ale też mniejsze zrozumienie”  
🔧 Znajdź **złoty środek**: zwięzłość \+ wystarczająca szczegółowość

---

## **🔄 Promptowanie to proces iteracyjny**

1. Tworzysz wersję 1  
2. Testujesz z różnymi danymi  
3. Ulepszasz i optymalizujesz  
4. Finalizujesz, gdy działa w różnych przypadkach

🔁 Tak samo jak kod – nigdy nie jest idealny za pierwszym razem.

---

## **🧠 Prompt to mózg Twojej automatyzacji w n8n**

* Możesz mieć workflow, który wysyła maile, zapisuje dane, tworzy wpisy...  
* Ale to **prompt** definiuje **jakość treści** i **inteligencję agenta**  
* Twój prompt to **Twoja własność intelektualna** – może być dostosowany do stylu firmy, klienta lub konkretnego projektu

---

## **📦 Podsumowanie**

* Prompt engineering \= kluczowa umiejętność w pracy z LLM  
* Im lepszy prompt, tym lepsze wyniki: trafniejsze, szybsze i tańsze  
* Stosuj: jasność, przykłady, rolę, strukturę i iteracje  
* W n8n prompty są sercem workflowów AI i agentów – poświęć im uwagę\!

---

🧠 System Prompt vs User Prompt

**Jak poprawnie ustawić kontekst i polecenia w modelach językowych?**

---

## **📌 Co to jest prompt?**

**Prompt** to sposób komunikowania się z modelem językowym (LLM) – przekazujesz tekst, na który model ma zareagować.

W nowszych modelach (np. GPT-4, Claude, Mistral), prompt **składa się z ról**, które mają różne znaczenie i wpływ:

---

## **👤 User Prompt – polecenie od użytkownika**

To wiadomość, którą użytkownik (czyli Ty lub Twój workflow) **bezpośrednio wysyła do modelu**.

„Podsumuj ten tekst”  
„Zadaj 3 pytania na podstawie poniższej treści”  
„Wygeneruj wiadomość powitalną dla klienta B2B”

🟢 Typowe cechy:

* **Zmienna treść** – dynamiczne zapytania  
* **Jeden cel na raz**  
* Najczęściej piszesz je jako {{$json\["text"\]}} w node Chat lub LLM

---

## **🧠 System Prompt – rola, persona i zasady**

To wiadomość “zza kulis”, która **ustawia sposób działania modelu**, jego ton, zadania, ograniczenia i priorytety.

„Jesteś ekspertem AI. Odpowiadasz zwięźle i rzeczowo. Unikaj technicznego żargonu, chyba że użytkownik o to poprosi.”  
„Zawsze odpowiadaj w języku polskim, chyba że wskazano inaczej.”

🟢 Typowe cechy:

* **Statyczny kontekst** – określa, *kim jest model*  
* **Wpływa na całą rozmowę**  
* Umieszczany w node Chat → **System Message**

---

## **🤖 Jak zachowuje się model?**

Model widzi cały kontekst rozmowy:

1. System prompt (np. “Jesteś doradcą finansowym”)  
2. User prompt (np. “Na co wydać 5000 zł?”)  
3. Własne poprzednie odpowiedzi

Na tej podstawie **generuje odpowiedź**, której styl i treść **mogą się znacząco zmieniać** w zależności od roli.

---

## **🔧 Przykład w node Chat w n8n**

**Pole**

**Przykład**

**System Message**

You are a helpful assistant that explains topics in plain language.

**User Message**

Explain what JSON is.

📤 Wynik:

„JSON to prosty format przechowywania danych, który przypomina strukturę obiektów w JavaScript…”

---

## **📊 Porównanie: User vs System Prompt**

**Cecha**

**System Prompt**

**User Prompt**

Kto mówi?

Ty jako *twórca roli*

Użytkownik końcowy / aplikacja

Gdzie się znajduje?

W tle (ustawienie modelu)

Widoczne polecenie

Kiedy się zmienia?

Rzadko

Przy każdej wiadomości

Przykład

“Jesteś asystentem prawnym”

“Wygeneruj umowę najmu dla firmy X”

---

## **✅ Kiedy używać System Prompt?**

**Scenariusz**

**Korzyść**

Chcesz kontrolować **ton i styl** odpowiedzi

*“Odpowiadaj jak ekspert AI”*

Tworzysz **wieloetapowy chain LLM**

*Trzymasz spójność w całym procesie*

Budujesz **aplikację z AI**

*Tworzysz personę agenta*

Potrzebujesz ograniczyć zakres odpowiedzi

*“Nie spekuluj, jeśli nie wiesz – napisz: 'nie wiem'”*

---

## **🚨 Częsty błąd: brak system prompta**

Bez System Prompt, model:

* domyślnie przyjmuje styl “czatowy”  
* może odpowiadać zbyt luźno lub nieprecyzyjnie  
* może **ignorować ważny kontekst**

➡️ Dlatego nawet jedno zdanie typu:

“You are an expert in B2B sales automation.”  
…może diametralnie poprawić jakość odpowiedzi\!

---

## **🚀 Podsumowanie**

**Element**

**Funkcja**

**System Prompt**

Buduje fundament, definiuje zachowanie modelu

**User Prompt**

Wysyła konkretne polecenie do wykonania

Najlepsze rezultaty osiągasz, **łącząc oba**:

1. System Prompt \= rola i styl  
2. User Prompt \= konkretne zadanie

---

**Agenci AI i Integracje**

🔗 LLM Chain vs Message a Model

**Jak rozmawiać z modelem językowym? I kiedy jedna wiadomość to za mało?**

---

## **🧠 Czym różni się pojedyncze zapytanie (Message) od łańcucha (Chain)?**

W pracy z modelami językowymi (LLMs), masz dwie główne strategie:

**Tryb**

**Opis**

**Przykład**

**Message a Model**

Wysyłasz *pojedyncze zapytanie z kontekstem* i otrzymujesz odpowiedź

“Podsumuj ten tekst w 3 punktach”

**LLM Chain (Łańcuch zapytań)**

Tworzysz *wieloetapowy proces komunikacji* z modelem, gdzie każda odpowiedź jest częścią większego celu

Parsowanie dokumentu → ekstrakcja danych → klasyfikacja → output

---

## **📨 Message a Model – jedno pytanie, jedna odpowiedź**

To najprostsze podejście – idealne, gdy:

* Twój prompt zawiera *pełny kontekst*  
* Chcesz jednorazowej odpowiedzi  
* Nie zależy Ci na elastyczności i modularności

### **🔧 Przykład:**

{

  "model": "gpt-4",

  "messages": \[

    { "role": "system", "content": "You are a document parser." },

    { "role": "user", "content": "Extract invoice number, amount and due date:\\n\\n\[tu treść faktury\]" }

  \]

}

To działa – **dopóki**:

* faktury nie zmieniają formatu  
* nie musisz przetwarzać tysięcy rekordów  
* nie zależy Ci na modyfikacji procesów (np. dodanie walidacji)

---

## **🔗 LLM Chain – zbuduj logikę krok po kroku**

To **podejście strukturalne** – traktujesz model nie jako “magiczne pudełko”, ale jako **narzędzie w łańcuchu przetwarzania informacji**.

Łańcuch może wyglądać tak:

1. 🧾 Oczyszczenie tekstu wejściowego (prompt \#1)  
2. 🔍 Ekstrakcja danych kluczowych (prompt \#2)  
3. 🧠 Klasyfikacja danych (prompt \#3)  
4. 📤 Output JSON do systemu

Każdy krok ma swój osobny prompt, może używać innych modeli, logiki, walidacji lub działań n8n między nimi.

### **🛠️ Przykład łańcucha w n8n:**

Webhook → Code (parsuj plik PDF) →

ChatGPT (prompt: znajdź dane z faktury) →

IF (czy wszystkie dane są obecne?) →

ChatGPT (prompt: uzupełnij brakujące dane na podstawie tekstu) →

Set (generuj JSON) →

Webhook (do ERP)

---

## **📊 Porównanie: kiedy co wybrać?**

**Cecha**

**Message a Model**

**LLM Chain**

Łatwość implementacji

✅ Bardzo łatwe

⚠️ Wymaga przemyślenia logiki

Elastyczność

❌ Niska

✅ Wysoka – łatwo rozbudować

Odporność na zmiany danych

❌ Słaba

✅ Możesz reagować warunkami, IF, kodem

Debugowanie

⚠️ Trudniejsze – jeden duży prompt

✅ Możesz sprawdzić każdy krok

**Użycie w n8n**

1 node Chat

Wielostopniowy flow z Set, IF, Chat, Code

---

## **📌 Kiedy używać którego?**

**Potrzeba**

**Podejście**

Szybki prototyp lub prosty projekt

*Message a Model*

Ekstrakcja danych z niestandardowych dokumentów

*LLM Chain*

Budowanie produktu z AI (SaaS, CRM, proces biznesowy)

*LLM Chain*

Codzienne zadania: streszczenia, e-maile, generowanie

*Message a Model*

Potrzebujesz walidacji, fallbacków, pętli

*LLM Chain*

---

## **🧠 Najlepsza praktyka:**

Zacznij od Message a Model, a jeśli:

* potrzebujesz większej kontroli  
* model nie działa konsekwentnie  
* musisz rozdzielić zadania na kroki

→ **przepisz go jako LLM Chain** **z modularną logiką.**

---

## **🚀 Podsumowanie**

**Pojęcie**

**Co oznacza**

**Message a Model**

Jednorazowe zapytanie z kontekstem

**LLM Chain**

Seria kroków z osobnymi promptami i logiką kontrolną

**LLM Chain \= prompt engineering \+ kontrola \+ integracja z systemami.**

W świecie **biznesowych automatyzacji i SaaS**, to właśnie LLM Chains tworzą prawdziwe, powtarzalne i odporne rozwiązania.  
W n8n masz pełne narzędzia, żeby je budować – i to bez pisania kodu\!

---

🧠 Zaawansowane Promptowanie w n8n

**Jak pisać inteligentne, elastyczne i responsywne prompt’y do modeli LLM?**

---

## **✍️ Część 1: Structuring Prompts – struktura ma znaczenie**

Zanim dodasz dane czy reakcje, musisz nauczyć się **pisać klarowne i logiczne prompt’y**. Dobry prompt działa jak brief dla konsultanta AI – bez niego model „strzela w ciemno”.

### **✅ Dobra struktura prompta to:**

1. **Cel:** Co chcesz osiągnąć?  
2. **Kontekst:** W jakim środowisku/w jakim tonie?  
3. **Źródło danych:** Co analizujemy?  
4. **Oczekiwany wynik:** Jak ma wyglądać odpowiedź?

---

### **📌 Przykład 1 – analiza opinii klienta:**

You are a customer experience analyst.  

Review the text below and identify the sentiment (positive, neutral, negative), and extract key points.

Text: """{{$json\["customer\_feedback"\]}}"""

Return the result in this JSON format:

{

  "sentiment": "...",

  "key\_points": \["...", "..."\]

}

🧠 Dzięki takiemu podejściu:

* model ma rolę (kontekst),  
* zna dane wejściowe,  
* wie, czego się od niego oczekuje.

---

## **🔁 Część 2: Dynamic Prompting – prompty z danymi z workflowa**

W praktyce nie wpisujesz promptów ręcznie – **musisz je budować dynamicznie** w oparciu o dane z node’ów: Webhook, HTTP Request, Spreadsheet, CRM, Database itp.

### **🛠️ Jak wstawić dynamiczne dane do prompta?**

Użyj {{$json\["pole"\]}}, {{$node\["NazwaNodea"\].json\["wartość"\]}}, itd.

---

### **📌 Przykład 2 – automatyczna wiadomość sprzedażowa**

'You are a sales assistant helping craft short, personalized B2B messages.

Generate a 3-sentence introduction for a cold email using this company data:

Company: {{$json\["company\_name"\]}}  

Website: {{$json\["website"\]}}  

Industry: {{$json\["industry"\]}}  

Focus on their pain points and offer value in the first sentence.'

Dzięki temu każdy klient otrzymuje spersonalizowaną wiadomość wygenerowaną automatycznie.

---

## **🔄 Część 3: Reactive Prompting – reagowanie na dane i wynik**

Czasami nie wystarczy jeden prompt – **musisz reagować na wynik modelu lub jakość danych**.

### **🧠 Reactive prompting to:**

* Jeśli model nie znalazł danych → zapytaj ponownie  
* Jeśli confidence \< 0.7 → zadaj pytanie pomocnicze  
* Jeśli użytkownik dał niepełne dane → poproś o doprecyzowanie

---

### **📌 Przykład 3 – klasyfikacja z fallbackiem**

1. Użyj Text Classifier  
2. Node IF:

{{$json\["confidence"\]}} \< 0.75 → przejdź do Chat node z promptem:

The classification confidence is too low.

Based on the text below, can you propose a better label?

Text: """{{$json\["text"\]}}"""

3. Node Set lub Switch – dalsza logika

Takie podejście czyni Twój LLM **interaktywnym i bardziej niezawodnym**.

---

## **🔧 BONUS: Jak to łączyć z System Prompt**

Dodaj system prompt raz, np. w node Chat:

'You are a precise and concise assistant.

If you are not sure of the answer – ask follow-up questions instead of guessing.'

Wtedy model automatycznie będzie reagować mądrzej w każdej iteracji.

---

## **🧩 Workflow: Jak połączyć wszystko?**

Webhook

  ↓

Set (przygotowanie danych do prompta)

  ↓

Chat (z System Prompt \+ Dynamic Prompt)

  ↓

IF (czy model zwrócił błąd / niski confidence?)

  ├─ Tak → Reactive Prompt (Chat node)

  └─ Nie → Kontynuacja procesu (np. zapis do bazy / wysyłka maila)

---

## **✅ Podsumowanie**

**Element**

**Funkcja**

**Structuring Prompt**

Jasny, logiczny i kompletny brief dla modelu

**Dynamic Prompting**

Automatyczne uzupełnianie prompta danymi z workflowa

**Reactive Prompting**

Inteligentna reakcja na odpowiedzi modelu i nieprzewidziane sytuacje

Zastosowanie tych trzech technik pozwala Ci budować **potężne i niezawodne automatyzacje oparte o LLM** – gotowe do działania w prawdziwym biznesie.

---

🧠 Information Extractor – wydobywanie danych

**Z nieczytelnego bloku tekstu → do uporządkowanych danych JSON**

---

## **📌 Co to jest Information Extractor?**

Node Information Extractor w n8n to specjalistyczny węzeł oparty o **model językowy (LLM)**, który automatycznie rozpoznaje i **wyciąga najważniejsze informacje z nieustrukturyzowanego tekstu**.

Działa jak inteligentna “koparka danych” – analizuje tekst, rozumie jego kontekst i zwraca gotowy wynik w formie JSON lub listy pól.

---

## **🧠 Jak to działa?**

Node wysyła Twój tekst do wybranego LLM (np. OpenAI GPT-4, Claude, Mistral) wraz z instrukcją:

“Znajdź i wydobądź najważniejsze informacje z poniższego tekstu”

Model samodzielnie:

1. Identyfikuje kontekst (np. że to faktura, oferta, email)  
2. Znajduje kluczowe pola (np. daty, kwoty, numery, nazwy)  
3. Zwraca posegregowane dane – gotowe do użycia

---

## **📦 Dane wejściowe – co możesz wrzucić?**

✅ Przykłady:

* Faktury  
* Umowy  
* Maile od klientów  
* Rozmowy czatowe  
* Oferty handlowe  
* Notatki głosowe (po przekształceniu przez Whisper)  
* Treści z PDF/HTML

---

## **✨ Wynik – co zwraca?**

Zazwyczaj obiekt JSON:

{

  "invoice\_number": "FV/234/07/2025",

  "total": "6,230.00 PLN",

  "due\_date": "2025-08-10",

  "buyer\_name": "ABC Sp. z o.o."

}

Jeśli użyjesz opcji "Fields to Extract" – możesz zdefiniować własne pola i uzyskać jeszcze większą precyzję.

---

## **🛠️ Przykład praktyczny: Faktura z maila**

**Problem:** Klient przysyła fakturę jako tekst w e-mailu:

Szanowni Państwo,

przesyłam fakturę FV/234/07/2025 na kwotę 6230 PLN z terminem płatności do 10.08.2025 dla ABC Sp. z o.o.

**Rozwiązanie:**

1. Node Email Read lub HTTP Request (pobranie wiadomości)  
2. Node Information Extractor  
3. Node Set – przekształcenie do JSON  
4. Node HTTP Request – wysyłka do ERP

---

## **🔧 Konfiguracja node’a:**

**Pole**

**Wartość**

**Model**

Wybierz np. OpenAI GPT-4, Claude 4, Mistral

**Input Text**

Wprowadź tekst z poprzedniego node

**Extraction Type**

Auto lub Custom Fields

**Custom Fields (optional)**

"invoice\_number", "total", "due\_date", "buyer\_name"

**Output Format**

JSON (zalecane)

---

## **✅ Kiedy używać?**

**Scenariusz**

**Powód**

Masz tekst bez struktury

*Ekstraktor sam rozpozna dane*

Chcesz uniknąć promptowania

*Node działa “z pudełka”*

Budujesz szybki prototyp

*Nie musisz pisać kodu*

Automatyzujesz maile, faktury, pliki

*Ekstrakcja \+ struktura \+ przesył do systemu*

---

## **⚠️ Na co uważać?**

**Problem**

**Rozwiązanie**

Brak danych w wyniku

*Zmień model lub doprecyzuj pola*

Źle rozpoznane pola

*Użyj Custom Fields*

Brak kontekstu

*Dodaj więcej tekstu wejściowego lub użyj node Set do opisu kontekstu*

---

## **🚀 Porównanie: Information Extractor vs własny Chat node**

**Cecha**

**Information Extractor**

**Chat** **node z własnym promptem**

Gotowy do użycia

✅ Tak

❌ Nie

Precyzja

✅ Dobra (dla standardowych tekstów)

✅ Lepsza przy custom promptach

Kontrola nad promptem

❌ Brak

✅ Pełna

Szybkość wdrożenia

✅ Błyskawiczna

❌ Wymaga testów

---

## **🧠 Tip: Jak ulepszyć wyniki?**

* Dodaj krótki opis wstępny: np. Ten tekst to wiadomość z fakturą  
* Ogranicz liczbę pól przez Custom Fields  
* Wstępnie oczyść tekst przez node Code lub Regex

---

## **🔚 Podsumowanie**

Node Information Extractor to **Twój LLM-asystent danych** – nie musisz już pisać promptów, jeśli chcesz szybko i skutecznie wyciągnąć dane z nieuporządkowanego tekstu.

W połączeniu z Email, PDF, HTTP Request i Webhook, tworzy potężny system do **autonomicznego zbierania i przetwarzania danych biznesowych**.

---

🧠 Text Classifier – rozpoznawanie tekstu

**Klasyfikacja wiadomości, zgłoszeń, opinii i innych treści w locie**

---

## **📌 Co to jest Text Classifier?**

Text Classifier to węzeł n8n wykorzystujący model LLM (np. GPT-4, Claude, Mistral) do przypisywania **kategorii tematycznych lub tagów** na podstawie treści wejściowej.

To inteligentny filtr, który wie, czy wiadomość to np. “Reklamacja”, “Zamówienie”, “Wniosek HR” – i sam podejmie decyzję.

---

## **🔧 Jak działa?**

* Wprowadzasz tekst (np. wiadomość, email, treść zgłoszenia)  
* Wskazujesz **listę możliwych kategorii**  
* Model językowy analizuje treść i **zwraca najlepiej pasującą etykietę**

Działa natychmiast, bez trenowania modeli ML czy uczenia sieci neuronowych\!

---

## **📦 Dane wejściowe – co możesz klasyfikować?**

✅ Idealne do:

* Emaili od klientów (np. “reklamacja”, “pytanie o produkt”, “prośba o ofertę”)  
* Wiadomości z czatu  
* Tikety supportowe (np. z Zendesk, Intercom)  
* Formularze (np. zapytania ofertowe, ankiety)  
* Opinie klientów i recenzje  
* Rozmowy telefoniczne po transkrypcji (np. z Whisper AI)

---

## **🛠️ Przykład: Klasyfikacja wiadomości e-mail**

**Treść e-maila:**

“Dzień dobry, chciałbym zgłosić reklamację do zamówienia \#234. Produkt przyszedł uszkodzony.”

**Konfiguracja node’a Text Classifier:**

**Pole**

**Wartość**

**Text**

Pole z tekstem (np. {{$json\["body"\]}})

**Labels**

\["Reklamacja", "Zapytanie ofertowe", "Zamówienie", "Inne"\]

**Output**

Single best match (lub Top N, jeśli chcesz kilka propozycji)

**Wynik:**

{

  "classification": "Reklamacja",

  "confidence": 0.96

}

---

## **✨ Tryby działania**

**Tryb**

**Opis**

Single Label

*Wybiera jedną najlepiej dopasowaną kategorię*

Multi-label

*Może przypisać więcej niż jedną etykietę*

Threshold

*Możesz ustawić minimalny poziom pewności (confidence)*

---

## **✅ Kiedy używać?**

**Scenariusz**

**Korzyść**

Routing e-maili do odpowiednich działów

*Automatyzacja obsługi*

Klasyfikacja zgłoszeń lub ticketów

*Szybszy support*

Filtrowanie nieistotnych wiadomości

*Oszczędność czasu*

Analiza opinii klientów

*Insighty z recenzji*

Wstępna selekcja danych dla innych LLMs

*Lepsza struktura procesu*

---

## **🧠 Tipy i dobre praktyki**

* Zadbaj o **jasność etykiet** – np. zamiast “problem”, użyj “Reklamacja dot. produktu”  
* Nie mieszaj etykiet z różnych poziomów (np. “techniczne” \+ “bardzo pilne”)

Dla większej precyzji – **dodaj system message** w node Advanced Settings, np.:

You are a classification assistant. Classify each input text into one of the provided labels.

---

## **🧠 Przykład workflowa (w skrócie)**

Trigger (np. email) →

Text Classifier →

Switch (na podstawie label) →

Routing do: CRM / Support / Zespół handlowy / Archiwum

---

## **🚀 Podsumowanie**

Node Text Classifier to **LLM-powered router danych** – pozwala budować mądre systemy decyzyjne bez uczenia maszynowego.

To jedno z **najszybszych wejść w świat AI** w n8n:

* zero promptowania,  
* zero kodu,  
* pełna moc modeli językowych.

---

Zrozumienie przepływów pracy AI 🤖🔁  
---

## **🔧 Co to jest przepływ pracy?**

Zanim przejdziemy do AI, warto zrozumieć pojęcie przepływu pracy (ang. **workflow**). To po prostu **ciąg uporządkowanych kroków**, których celem jest wykonanie konkretnego zadania – czy to w firmie, domu, czy codziennej rutynie.

### **Przykłady:**

* Obsługa klienta: Zgłoszenie → Ocena → Przypisanie → Rozwiązanie → Zamknięcie  
* Rekrutacja: Oferta pracy → CV → Rozmowy → Oferta → Onboarding  
* Poranna rutyna: Obudź się → Mycie zębów → Kawa → Kalendarz

---

## **✅ Dlaczego workflowy są ważne?**

**Korzyść**

**Co to daje**

**Struktura i przejrzystość**

Każdy wie, co robić i kiedy

**Wydajność**

Mniej marnowania czasu i błędów

**Spójność**

Powtarzalność \= mniej pomyłek

**Skalowalność**

Łatwiej delegować i automatyzować

**Odpowiedzialność**

Wiadomo, kto za co odpowiada

---

## **🕰️ Krótka historia automatyzacji workflowów**

* **Lata 80\.** – pierwsze systemy zarządzania procesami (BPM)  
* **Lata 90–2000** – rozwój ERP i CRM  
* **2010+** – automatyzacja robotyczna (RPA)  
* **Teraz** – era AI, API i chmury, które pozwalają na inteligentną, dynamiczną automatyzację

---

## **🧠 Jak zaprojektować przepływ pracy AI?**

Tworzenie przepływu z AI wymaga zadania kilku kluczowych pytań:

---

### **1️⃣ Co próbuję zautomatyzować?**

Zacznij od konkretnego problemu, np.:

* Odpowiadanie na zapytania klientów  
* Wykrywanie oszustw  
* Zarządzanie zapasami

🟡 Jeśli rozwiązanie można zrobić prostą regułą „jeśli X, to Y” – **nie potrzebujesz AI**.

---

### **2️⃣ Czy naprawdę potrzebuję AI?**

**Scenariusz**

**Czy potrzebujesz AI?**

**Przykład**

Potrzebne rozumienie języka

✅

Analiza skarg klientów

Trzeba rozpoznać wzorce

✅

Wykrywanie oszustw

Jasna logika i zasady

❌

Liczenie podatku

Powtarzalne zadanie

❌

Reset haseł

---

### **3️⃣ Jakie typy decyzji są zaangażowane?**

**Typ decyzji**

**AI potrzebne?**

**Przykład**

Strukturalne

❌

Płaca za nadgodziny

Półstrukturalne

✅

Priorytetyzacja zgłoszeń

Niestrukturalne

✅

Pisanie maili marketingowych

---

### **4️⃣ Jak będzie wyglądać przetwarzanie decyzji?**

🧩 Typowy schemat:

#### **🔁 Tradycyjny workflow:**

* E-mail od klienta  
  → Wyszukiwanie słów kluczowych  
  → Gotowa odpowiedź

#### **🤖 AI workflow:**

* E-mail od klienta  
  → Analiza sentymentu i kontekstu  
  → Wygenerowana odpowiedź  
  → Opcjonalny przegląd przez człowieka

---

### **5️⃣ Jakie dane mam do dyspozycji?**

Aby AI działało skutecznie, potrzebujesz:

* **Dane wejściowe** – np. wiadomość klienta, historia zamówień  
* **Dane treningowe** – przykłady poprawnych odpowiedzi  
* **Dane walidacyjne** – do testowania skuteczności

---

### **6️⃣ Struktura podstawowego workflowu AI (dla początkujących)**

**Element**

**Opis**

**Przykład**

🟢 **Wyzwalacz**

Co uruchamia proces

Nowy e-mail klienta

🚪 **Brama decyzyjna**

Co zrobi AI, a co człowiek

AI odpowiada; eskalacje → ludzie

🤖 **Akcja AI**

Co wykonuje model AI

Generowanie odpowiedzi

🧍 **Przegląd człowieka**

Kontrola krytycznych przypadków

Oferty z rabatem \> 20%

🆘 **Plan B**

Co gdy AI nie działa?

Połączenie z konsultantem

---

## **📌 Podsumowanie**

* Workflowy są podstawą każdej automatyzacji – z lub bez AI  
* AI przydaje się, gdy zadanie wymaga rozumienia, kontekstu lub wzorców  
* Projektując workflow AI, skup się na **celu, danych i decyzyjności**  
* Zacznij od prostych struktur – z czasem możesz je rozszerzać

---

🧭 To właśnie takie podejście pozwala łączyć siłę n8n z AI – skutecznie, skalowalnie i z realną wartością biznesową.

---

Zrozumienie agentów AI 🧠🤖  
---

## **🧭 Co to jest agent AI?**

Agent AI to **autonomiczny system**, który potrafi samodzielnie podejmować decyzje, planować działania i je wykonywać – bazując na danych wejściowych oraz kontekście. W przeciwieństwie do zwykłych workflowów AI (które działają według określonych kroków), agenci **dostosowują się do sytuacji**, myślą i działają elastycznie.

### **✨ Agent AI potrafi:**

* Zrozumieć, o co prosi użytkownik  
* Ułożyć plan działania  
* Wykonać zadania za pomocą narzędzi i pamięci

To taki **cyfrowy pracownik**, który sam wybiera co i kiedy zrobić.

---

## **🧩 Kluczowe elementy agenta AI**

**Element**

**Opis**

**LLM (model językowy)**

„Mózg” agenta – odpowiada za rozumienie i planowanie

**Pamięć**

Agent pamięta bieżący kontekst i wcześniejsze interakcje

**Narzędzia**

Funkcje/API, które agent może wykorzystać (np. wysłanie maila, zapis w bazie)

🔧 **Analogicznie do życia:**

* Ty \= agent  
* Rozumowanie \= decyzja „idę umyć zęby”  
* Narzędzia \= szczoteczka \+ pasta  
* Pamięć \= „dziś już myłem, nie trzeba drugi raz”

---

## **🔁 Jak działają agenci AI?**

1. Agent **rozpoznaje cel** z wejścia użytkownika  
2. **Analizuje, jakie narzędzia** będą potrzebne  
3. **Korzysta z pamięci**, by zrozumieć kontekst  
4. **Plan działania \+ wykonanie** zadań  
5. **Zwraca wynik** użytkownikowi

To jak inteligentna maszyna z planem i dostępem do zasobów.

---

## **🧠 Frameworki agentów AI**

Popularne środowiska do budowy agentów AI:

**Framework**

**Opis**

**Azure AI Agent Service**

Integracja z narzędziami Microsoft

**Semantic Kernel (MS)**

Open-source, wieloplatformowe

**LangChain**

Rozbudowane, zintegrowane z wieloma narzędziami

**Hugging Face Agent**

Open-source, zorientowane na współpracę

🟡 **n8n** nie bazuje na LangChain, ale **integruje się z nim** – dzięki czemu możesz używać narzędzi LangChain w przepływach n8n.

---

## **🤖 Workflow AI vs Agent AI**

**Cecha**

**Workflow AI**

**Agent AI**

**Decyzje**

Sztywne reguły

Elastyczne, inteligentne decyzje

**Autonomia**

Niska

Wysoka

**Adaptacja**

Powtarzalne scenariusze

Dynamiczne i zmienne

**Kiedy używać?**

Stabilne procesy

Złożone zadania, wymagające rozumowania

🎯 Przepływ AI to **checklista kroków**  
🎯 Agent AI to **cyfrowy asystent z własnym rozumowaniem**

---

## **🛠️ Czym jest wywoływanie narzędzi (Tool Calling)?**

Agent AI może **uruchamiać narzędzia** – czyli funkcje, API lub akcje w systemie.

### **Dzięki temu może:**

* Pobierać dane z bazy  
* Wysyłać maile  
* Tworzyć zadania w CRM  
* Obsługiwać kalendarz

To właśnie dzięki **tool callingowi**, agent AI nie tylko „mówi”, ale też **działa**.

---

## **🔧 Jak działa tool calling – krok po kroku**

1. **Tworzenie narzędzia** – definiujesz co robi i jakie dane przyjmuje  
2. **Połączenie z agentem** – model wie, jak wywołać funkcję  
3. **Wywołanie** – AI podejmuje decyzję i uruchamia narzędzie z danymi  
4. **Wynik** – narzędzie działa i zwraca efekt

🎯 Przykład: AI generuje e-mail i automatycznie wysyła go przez Gmail dzięki połączeniu z odpowiednim narzędziem.

---

## **🧠 Agent \= mózg \+ pamięć \+ narzędzia**

🔹 Systemowy prompt \= instrukcja  
🔹 LLM \= rozumowanie  
🔹 Pamięć \= kontekst  
🔹 Narzędzia \= możliwość działania

To kompletna jednostka wykonawcza – tak jak zdalny pracownik w Twojej firmie. I nigdy nie śpi 😴 (dopóki masz kredyty API).

---

## **📦 Przykład z n8n**

Wyobraź sobie agenta do obsługi klienta:

**Element**

**Funkcja**

**LLM (GPT-4o)**

Mózg agenta

**Narzędzie: baza wiedzy**

Szuka informacji

**Narzędzie: Gmail Draft**

Tworzy szkic maila

Agent:

1. Czyta wiadomość od klienta  
2. Szuka odpowiedzi w wektorowej bazie danych  
3. Tworzy szkic odpowiedzi  
4. Informuje człowieka lub automatycznie wysyła

---

## **👥 Agenci w agentach**

Możesz tworzyć **agenta głównego**, który korzysta z innych agentów (np. e-mail, kalendarz, CRM). Każdy z nich ma własne narzędzia.

Dlaczego tak?

* Lepsza organizacja  
* Mniej zamieszania  
* Łatwiejsze zarządzanie

---

## **📌 Podsumowanie**

* Agenci AI to samodzielne jednostki, które **myślą i działają**  
* Składają się z: **modelu językowego, pamięci i narzędzi**  
* Dzięki **tool callingowi** mogą wchodzić w interakcje z systemami  
* Sprawdzają się w zadaniach **dynamicznych, kreatywnych i złożonych**

W n8n możesz tworzyć własne workflowy-agentów, integrując ich z ponad 400 aplikacjami i usługami\!

---

🤖 Integracja AI w n8n  
---

## **🧠 Czym jest AI w kontekście n8n?**

Sztuczna inteligencja (AI) pozwala automatyzować zadania, które wcześniej wymagały **myślenia, analizy lub kreatywności**. W n8n możemy korzystać z AI jako komponentu w przepływach pracy.

---

## **🔌 Typy integracji AI dostępne w n8n**

**Komponent**

**Opis**

**Przykład**

🧠 **LLM (Large Language Model)**

Generowanie treści, odpowiedzi, streszczeń

ChatGPT, Claude, Mistral

🧩 **AI Agent**

Samodzielne podejmowanie decyzji i obsługa narzędzi

Agent AI planujący zadania

🧮 **Wektorowe bazy danych**

Wyszukiwanie podobieństw, kontekstowe dopasowanie

Qdrant, Pinecone, Supabase

---

## **🔍 Gdzie AI ma sens w automatyzacji?**

Szukaj tych wzorców w procesach:

**Zastosowanie**

**Przykład**

🧾 Przetwarzanie tekstu

Tłumaczenie, streszczanie, formatowanie

🧠 Klasyfikacja

Kategoryzacja treści, analiza sentymentu

💡 Wsparcie decyzji

Analiza danych i sugestie działań

📚 Pobieranie wiedzy

Przeszukiwanie dokumentów, odpowiedzi kontekstowe

👤 Personalizacja

Treści dopasowane do użytkownika

---

## **🗺 Jak mapować AI w procesie n8n**

Każdy komponent AI powinien być dobrze zdefiniowany.

**Wymagany element**

**Opis**

✅ **Zdolność AI**

Co konkretnie AI ma zrobić?

📥 **Dane wejściowe**

Jakie dane trafiają do AI? (tekst, JSON, intencja)

📤 **Dane wyjściowe**

Jakie dane AI powinno zwrócić? (tekst, klasyfikacja)

🔌 **Punkt integracji**

Gdzie w flow AI powinno się pojawić?

⚠️ **Obsługa błędów**

Co zrobić, jeśli AI się pomyli lub nie zadziała?

---

## **🧪 Przykład: Moderacja treści z AI**

### **Scenariusz: Użytkownik dodaje post na stronie**

1. **Wyzwalacz:** Webhook – użytkownik przesyła tekst  
2. **AI – klasyfikacja:** LLM analizuje, czy treść jest:  
   * ✅ **Bezpieczna**  
   * ⚠️ **Do przeglądu**  
   * ❌ **Niebezpieczna**  
3. **IF / Switch:**  
   * Jeśli bezpieczne → publikuj  
   * Jeśli niebezpieczne → AI generuje powód odrzucenia  
   * Jeśli wymaga przeglądu → Email do moderatora z decyzją  
4. **Aktualizacja danych:** Zapis decyzji do bazy moderacyjnej

🧩 Węzły: Webhook → AI Node (klasyfikacja) → IF → AI Node (wyjaśnienie) → Email → DB

---

## **📦 Od mapy do działania – jak implementować**

### **🔹 Przekładanie mapy na workflow:**

**Element procesu**

**Komponent n8n**

**Wyzwalacz**

Webhook / Cron

**Dane wejściowe**

HTTP Request / JSON

**Logika**

IF / Switch / AI Node

**Transformacja**

Function / Set / Edit Fields

**Integracje**

HTTP / Email / DB

**AI**

AI Agent / LLM Node / Chain

---

## **🧰 Planowanie integracji AI krok po kroku**

1. **Zidentyfikuj punkt, gdzie AI może pomóc** (np. analiza tekstu)  
2. **Określ dane wejściowe i wyjściowe**  
3. **Wybierz węzeł AI w n8n** (np. OpenAI, Mistral, AI Agent)  
4. **Zbuduj prompt**: co AI ma zrobić, z jakiego kontekstu  
5. **Testuj, testuj, testuj\!**  
6. **Zadbaj o fallback (np. ręczna decyzja, alert)**

---

## **💡 Najlepsze praktyki**

✅ Używaj szablonów AI z Marketplace  
✅ Testuj AI osobno, zanim wstawisz do flow  
✅ Przypinaj przykładowe dane do węzłów  
✅ Dokumentuj: prompt, założenia, scenariusze awaryjne  
✅ Na etapie produkcji – loguj odpowiedzi AI

---

## **✅ Podsumowanie**

* AI w n8n działa jako komponent przetwarzania lub decyzyjny  
* Możesz używać LLM, agentów lub bazy wektorowej  
* Kluczem jest dobre mapowanie: co AI robi, gdzie i na jakich danych  
* Każde wdrożenie AI powinno zawierać strategię błędów  
* Testuj i iteruj – to proces, nie jednorazowa akcja

---

Agenci Głosowi AI 🗣️🤖  
---

## **🧠 Czym są Agenci Głosowi?**

**Agent Głosowy AI** to program oparty na sztucznej inteligencji, który potrafi:

* rozumieć mowę ludzką (rozpoznawanie głosu),  
* analizować **ton, kontekst i treść wypowiedzi**,  
* odpowiadać w naturalny, konwersacyjny sposób – głosem.

To coś więcej niż zwykły chatbot. Agent głosowy **nie działa według sztywnego scenariusza**, lecz potrafi dostosować się do rozmowy – jak prawdziwy człowiek.

📌 **Różnica**: chatbot działa na zasadzie „jeśli użytkownik powie A, odpowiedz B”,  
a agent głosowy **rozumie intencję**, analizuje kontekst i uczy się w czasie rzeczywistym.

---

## **🔄 Jak działają Agenci Głosowi AI?**

Agenci głosowi pracują w czterech krokach:

1. 🎙️ **Nasłuchiwanie**  
   Przechwytują głos użytkownika i zamieniają go na tekst (ASR – Automatic Speech Recognition).  
2. 🧠 **Rozumienie**  
   Analizują wypowiedź pod kątem **znaczenia**, **intencji** i **tonu emocjonalnego**.  
3. 💬 **Odpowiadanie**  
   Tworzą odpowiedź w naturalnym języku i zamieniają ją z tekstu na mowę (TTS – Text-to-Speech).  
4. 📈 **Uczenie się**  
   Udoskonalają swoje odpowiedzi dzięki każdej rozmowie (Machine Learning).

---

## **📊 Gdzie są używani agenci głosowi?**

📈 Ten rynek rozwija się bardzo szybko – już teraz wart jest **ponad 5,5 miliarda dolarów**. Agenci głosowi pojawiają się w wielu branżach:

**Zastosowanie**

**Przykłady**

📞 Obsługa klienta

„Proszę opisz swój problem głosem” – automatyczne call center

💼 Asystenci wirtualni

Siri, Alexa, Google Assistant

👩‍💻 Komunikacja firmowa

Wewnętrzne boty głosowe do zgłaszania problemów IT

🧑‍🦽 Dostępność

Pomoc dla osób z niepełnosprawnościami (np. czytanie tekstu)

🔧 Usługi lokalne

Agent AI odbiera telefon, gdy hydraulik nie może – zbiera dane, umawia wizytę

---

## **🧩 Jak to wygląda w praktyce?**

Wyobraź sobie, że masz firmę naprawiającą klimatyzację.

1. Klient dzwoni, ale jesteś w pracy – nie odbierasz.  
2. Agent AI odbiera za Ciebie i mówi:  
   → „Dzień dobry\! Jestem głosowym agentem AI. Czy mogę zapisać powód Twojego telefonu?”  
3. Klient odpowiada: „Klimatyzacja przestała działać w sypialni.”  
4. Agent analizuje treść, zapisuje dane i może nawet powiedzieć:  
   → „Czy chciałby Pan, abym umówił wizytę technika na jutro?”

📌 Efekt: **nie tracisz klienta**, nawet gdy jesteś offline.

---

## **🎙️ Co różni agenta głosowego od chatbota?**

**Cecha**

**Chatbot**

**Agent Głosowy**

Interfejs

Tekst

Głos

Styl rozmowy

Często sztywny

Naturalny, płynny

Analiza tonu

❌ Brak

✅ Tak

Adaptacja do rozmowy

Ograniczona

Dynamiczna

Realizacja zadań

Przeważnie poprzez kliknięcia

Głosem, intuicyjnie

Poziom AI

Często reguły

Zaawansowane modele LLM

---

## **⚠️ Ważne kwestie etyczne**

🧭 Użytkownicy **powinni wiedzieć**, że rozmawiają z AI.

Z badań wynika, że:

* Ludzie akceptują rozmowę z AI, jeśli zostaną o tym poinformowani.  
* Problem pojawia się, gdy agent **udaje człowieka**, nie informując o tym – to **nieetyczne** i może zniechęcać klientów.

📌 Dlatego zawsze zaczynaj rozmowę np.:

„Witaj\! Jestem agentem głosowym AI działającym w imieniu firmy X.”

---

## **🛠️ Technologie w tle (dla ciekawskich)**

Agent głosowy to połączenie kilku systemów:

* **ASR** – rozpoznawanie mowy  
* **LLM (Large Language Model)** – rozumienie i generowanie odpowiedzi  
* **TTS** – zamiana tekstu w mowę  
* **Prompt engineering** – scenariusze i cele rozmowy

Całość działa jako:  
🎤 Mowa → Tekst → Przetwarzanie → Tekst → Mowa 🔊

---

## **📦 Podsumowanie**

* Agenci głosowi to inteligentne systemy obsługujące rozmowy głosowe w czasie rzeczywistym  
* Potrafią **słuchać, rozumieć, odpowiadać i uczyć się** – jak człowiek  
* Są coraz popularniejsi w obsłudze klienta, usługach i dostępności  
* W przeciwieństwie do chatbotów, **reagują na ton, emocje i kontekst**  
* Kluczowe: **informuj użytkowników, że rozmawiają z AI**

---

Planowanie i Metodologia

📝 Wprowadzenie do Mapowania Procesów  
---

## **📌 Czym jest mapowanie procesów i dlaczego ma znaczenie?**

Mapowanie procesów to **tworzenie szczegółowej mapy każdego kroku** w procesie, niezależnie od tego, jak mały. Dzięki temu możesz:

* Wizualnie zobaczyć cały przepływ  
* Rozpoznać punkty decyzyjne  
* Wskazać przepływ danych  
* Zidentyfikować interakcje człowiek ↔ system

🎯 Cel: Przenieść pomysł z głowy na strukturę, którą da się zautomatyzować w n8n.

---

## **🔍 Dlaczego to takie ważne dla automatyzacji w n8n?**

**Korzyść**

**Opis**

💡 Jasność

Widzisz cały proces jak na dłoni

🧱 Struktura

Każdy krok jest określony i uporządkowany

❌ Mniej błędów

Unikasz pominięć i chaosu

🔁 Skalowalność

Możesz łatwiej rozbudować automatyzację

🚀 Szybkość

Budujesz szybciej, bo masz gotowy plan

🎯 Priorytetyzacja

Widzisz, co można zautomatyzować, a co zostawić ludziom

---

## **📋 Praktyczny przykład: Obsługa e-maili wsparcia**

1. Nowy email trafia na skrzynkę supportu  
2. System sprawdza, czy to zapytanie do wsparcia  
   * Jeśli nie → przekierowanie do innego działu  
   * Jeśli tak → trafia do zespołu wsparcia  
3. Zespół analizuje problem  
4. Jeśli potrzeba dodatkowych danych → kontakt wewnętrzny  
5. Przygotowanie odpowiedzi  
6. Wysłanie e-maila  
7. Oznaczenie e-maila do dalszego śledzenia

Taki proces możesz odwzorować w n8n za pomocą:  
📩 Webhook → 🧠 AI lub Set → 🔁 IF → 💌 Email → 📊 Notion / DB

---

## **🧠 Kluczowe pojęcia mapowania w n8n**

**Element**

**Znaczenie**

🔁 **Przepływ pracy**

Cały proces w n8n

⚙️ **Węzły (nodes)**

Pojedyncze kroki: trigger, transformacja, wyjście

🔗 **Połączenia (connections)**

Pokazują, jak dane przechodzą między krokami

📥 **Dane wejściowe**

Skąd startuje workflow i jakie dane otrzymuje

🔄 **Transformacje**

Jak dane są przekształcane po drodze

📤 **Dane wyjściowe**

Co workflow ma dostarczyć na końcu

---

## **🔀 Punkty decyzyjne i rozgałęzienia**

Każdy proces zawiera **punkty decyzyjne** – czyli IF-y. To miejsca, gdzie logika się rozgałęzia.

**Co analizujemy**

**Jak obsłużyć w n8n**

Czy dokument to blog czy whitepaper?

*IF Node z warunkiem na metadane*

Czy zatwierdzono treść?

*IF lub Switch \+ obróbka każdej gałęzi*

Co robić po każdej decyzji?

*Połączenia \+ działania warunkowe*

---

## **📚 Przykład: Workflow zatwierdzania treści**

1. **Webhook Trigger** – nowy dokument w Google Drive  
2. **Code / Set Node** – wyciągnięcie metadanych  
3. **IF** – Blog czy Whitepaper?  
   * Blog → Slack do marketingu  
   * Whitepaper → Slack do technicznego  
4. **Wait / Approve Mechanizm** – np. formularz lub ręczne kliknięcie  
5. **IF** – Czy zatwierdzono?  
   * Tak → przenieś plik \+ powiadom  
   * Nie → przenieś do rewizji \+ powiadom autora  
6. **Update** – uzupełnienie statusu w arkuszu Google

---

## **📐 Jak przygotować się do budowy workflow w n8n?**

1. **Rozpisz proces** na kartce lub w narzędziu typu Miro / FigJam  
2. **Zidentyfikuj dane wejściowe** – co uruchamia proces  
3. **Zdefiniuj decyzje** – kiedy potrzebne są rozgałęzienia  
4. **Zastanów się nad transformacją danych** – czy trzeba coś wyczyścić, zmienić format?  
5. **Określ wynik końcowy** – co ma być wyjściem? Email? wpis w bazie? raport?

---

## **✅ Podsumowanie**

* Mapowanie procesu to **krok 0** każdej skutecznej automatyzacji  
* Bez mapy – workflow będzie chaotyczny, trudny do utrzymania i rozbudowy  
* Dobrze zmapowany proces to połowa sukcesu przy budowie w n8n

---

🔎 Znajdowanie Możliwości Automatyzacji  
---

## **✨ Gdzie szukać powtarzalności**

Zastanów się, które czynności w Twoim dniu robisz wciąż od nowa. Poniżej obszary, w których najczęściej kryją się kandydaci do automatyzacji:

**Obszar**

**Typowe automatyzacje**

📧 **Email**

Szablony odpowiedzi, auto-reply, filtracja

📅 **Kalendarz**

Automatyczne zaproszenia, przypomnienia

✅ **Lista zadań / CRM**

Tworzenie zadań, przenoszenie leadów

💬 **Slack / Teams**

Wysyłanie przypomnień, dzielenie się plikami

📊 **Arkusze Google / dashboardy**

Pobieranie danych, formatowanie, raporty

📁 **Google Drive / Dropbox**

Duplikowanie szablonów, porządkowanie folderów

---

## **📂 Myśl szerzej: według działów**

Zamiast analizować tylko narzędzia, spójrz na całe **obszary działalności**:

**Obszar**

**Typowe procesy do automatyzacji**

💼 **Sprzedaż**

Kwalifikacja leadów, follow-upy, przypisania

💬 **Obsługa klienta**

Obsługa ticketów, aktualizacje statusów

📊 **Finanse**

Tworzenie faktur, raporty wydatków

📣 **Marketing**

Planowanie treści, wysyłka newsletterów

---

## **🧠 Zadaj sobie te pytania:**

* Co mnie męczy robić codziennie?  
* Co można by zrobić za mnie, nawet gdy śpię?  
* Gdzie zawsze robię to samo kliknięcie?  
* Co odkładam na później, bo jest nudne?  
* Kiedy powtarzam tę samą decyzję wiele razy?  
* Jakie zadanie trwa 2 minuty, ale robię je 20x dziennie?

---

## **📊 Audyt procesów: metoda 3 kroków**

**1\. Dokumentacja przez tydzień**

* Spisuj każde zadanie  
* Zaznacz, które się powtarzają

**2\. Kategoryzacja**

* 🟢 Proste i powtarzalne → gotowe do automatyzacji  
* 🟠 Strukturalne ale złożone → potencjalnie z pomocą AI  
* 🔴 Kreatywne lub jednorazowe → zostaw człowiekowi

**3\. Oblicz ROI automatyzacji**

ROI \= (Czas oszczędzony × stawka godzinowa) / koszt wdrożenia

---

## **🎯 Matryca priorytetów**

**Łatwość wdrożenia**

**Wpływ na biznes**

**Co robić**

Wysoka

Wysoki

🟢 Zrób od razu

Wysoka

Niski

🟡 Szybka wygrana

Niska

Wysoki

🟠 Zaplanuj na później

Niska

Niski

🔴 Pomijaj

---

## **🚦 Sygnały do automatyzacji**

**Czerwone flagi (problemy):**

* Przepisujesz dane ręcznie  
* Ciągle te same pliki, te same kliknięcia  
* Wysyłasz te same e-maile

**Zielone światła (szanse):**

* Jasna struktura kroków  
* API/integracje są dostępne  
* Częsta powtarzalność  
* Wysoka cena błędów

---

## **📋 Checklista oceny procesu**

**Kryterium**

✅ **Jeśli...**

Powtarzalność

*≥ 3 razy tygodniowo, te same kroki*

Wpływ

*Zabiera ≥ 30 min dziennie, wpływa na klienta*

Wykonalność

*Dane są cyfrowe, systemy mają API*

---

## **🏭 Przykłady według branż**

**Branża**

**Przykładowe automatyzacje**

🛒 E-commerce

Przetwarzanie zamówień, zarządzanie zwrotami

📋 Usługi

Onboarding klientów, faktury, kalendarz

💻 SaaS

Onboarding użytkowników, alerty o churn

🏘 Nieruchomości

Zarządzanie kontaktami i dokumentami

---

## **⚡ Quick Wins (łatwe starty)**

1. **Szablony emaili** – auto-odpowiedzi i follow-up  
2. **Przenoszenie danych** – formularz → CRM → arkusz  
3. **Przypomnienia i alerty** – terminy, leady, zadania  
4. **Social media** – planowanie i cross-posting

---

## **🚫 Czego NIE automatyzować**

**Unikaj, jeśli...**

**Przykłady**

Wymaga empatii lub oceny

*Reklamacje klientów*

Jest rzadkie i wyjątkowe

*Procesy raz na kwartał*

Potrzebuje kreatywności

*Strategia lub design*

Zmienna struktura danych

*Przypadki z wyjątkami*

---

## **📈 Jak mierzyć sukces automatyzacji**

**Metryka**

**Co mierzy**

⏱ Czas zaoszczędzony

Ile godzin tygodniowo

🧯 Redukcja błędów

Ile błędów mniej

⚡ Szybkość

Ile szybciej wykonane

🧠 Satysfakcja zespołu

Feedback w ankietach

💰 ROI

Koszt vs oszczędność

---

## **🛠️ Narzędzia do analizy procesów**

* **Process Mining**: Celonis, Disco  
* **Time tracking**: RescueTime, Toggl  
* **Mapa procesów**: Miro, Draw.io  
* **Automatyzacja**: n8n, Zapier, Make

---

## **🚀 Plan działania: Tydzień po tygodniu**

### **Tydzień 1-2: Audyt**

* Dokumentuj wszystko  
* Zbieraj dane o czasie i powtarzalności

### **Tydzień 3: Analiza**

* Kategoryzuj  
* Oblicz wpływ i ROI

### **Tydzień 4: Pierwszy prototyp**

* Wybierz 1 prostą automatyzację  
* Przetestuj

### **Miesiąc 2+: Skaluj**

* Wdrażaj kolejne  
* Ucz zespół  
* Buduj „kulturę automatyzacji”

---

## **💡 Pro tipy**

* **Zacznij od małych kroków**: 1 proces, 15 minut dziennie  
* **Dokumentuj**: co robi, kto odpowiada, jak zrestartować  
* **Dbaj o ludzi**: UX \+ onboarding zespołu

---

## **✅ Co dalej?**

1. Zrób tygodniowy audyt procesów  
2. Wybierz 3 najlepsze kandydatury  
3. Oceń wykonalność  
4. Zbuduj 1\. automatyzację  
5. Mierz wyniki i optymalizuj

---

⚡ Identyfikacja Wyzwalaczy w Workflow n8n  
---

## **🚀 Co to jest wyzwalacz?**

**Wyzwalacz** to punkt startowy Twojej automatyzacji.  
To moment, w którym workflow się **uruchamia**, bo wydarzyło się coś konkretnego – np. ktoś wypełnił formularz, przyszedł email albo minęła godzina.

🎯 **Dobry wybór wyzwalacza to fundament dobrze działającego workflow.**

---

## **📂 Typy wyzwalaczy w n8n**

### **🔗 1\. Webhook Trigger**

* ⏱ Czas rzeczywisty  
* 🚀 Uruchamiany, gdy system zewnętrzny wyśle dane na Twój unikalny adres (URL)  
* ✅ Idealny do formularzy, webhooków z innych narzędzi (np. Stripe, Typeform)

**Przykład**:  
Ktoś wypełnia formularz → dane trafiają na webhook n8n → uruchamia się flow.

---

### **⏰ 2\. Cron Trigger (Zaplanowany)**

* Uruchamiany co określony czas: np. co godzinę, codziennie o 8:00  
* 📊 Świetny do okresowego sprawdzania danych, synchronizacji itp.

**Przykład**:  
Codziennie rano pobierz dane z Google Sheets i zrób raport.

---

### **🔁 3\. Workflow Trigger (Przepływ → przepływ)**

* Umożliwia uruchamianie workflowa **z innego workflowa**  
* 🧩 Pozwala budować złożone struktury modularne (jak funkcje w kodzie)

**Przykład**:  
Główne flow wywołuje osobne flow do wysyłania powiadomień.

---

### **🧩 4\. Zewnętrzne integracje (np. Gmail Trigger, Discord Trigger)**

* Automatycznie uruchamiają workflow, gdy wydarzy się coś w danej aplikacji  
* Np. nowy email w Gmail, nowe wiadomości na Slacku

**Przykład**:  
Nowy e-mail z tematem "Reklamacja" → rozpocznij proces obsługi klienta

---

### **🧪 5\. Manual Trigger**

* Ręczne uruchomienie przez użytkownika  
* 👷 Świetny do testowania i debugowania workflowa

**Przykład**:  
Klikam "Start" w edytorze n8n, by sprawdzić działanie poszczególnych kroków

---

## **🧠 Jak dobrać odpowiedni wyzwalacz?**

Zadaj sobie pytania:

**Pytanie**

**Znaczenie**

🔍 Skąd pochodzi dane zdarzenie?

Formularz, API, e-mail, CRM, Discord?

⏱ Czy ma być uruchamiane natychmiast, czy cyklicznie?

Real-time vs harmonogram

📄 Jakie dane są dostępne na starcie?

JSON, email, webhook, surowy tekst

🧯 Co się stanie, jeśli trigger zawiedzie?

Czy potrzebna jest obsługa błędów?

---

## **🛠 Mapowanie triggera – na co zwrócić uwagę**

**Element**

**Co ustawić?**

🔐 Uwierzytelnienie

Czy potrzebne są dane logowania lub API Key?

⚙️ Parametry

Np. adres URL webhooka, cron schedule

📦 Format danych

JSON, XML, e-mail body?

🚨 Obsługa błędów

Co zrobić, jeśli trigger się nie odpali?

---

## **📌 Przykład: Automatyzacja obsługi ticketów supportowych**

### **Scenariusze:**

#### **✅ Opcja A: Webhook Trigger**

* System supportowy obsługuje webhooki  
* Automatyzacja od razu się uruchamia  
* Dane w czystym formacie JSON

➡️ Najszybsza i najbardziej niezawodna opcja

---

#### **⏳ Opcja B: Cron Trigger**

* Brak webhooków, ale masz dostęp do API  
* Workflow działa np. co 10 minut i sprawdza nowe zgłoszenia

➡️ Mniej "real-time", ale wystarczające w wielu przypadkach

---

#### **📧 Opcja C: Email Trigger**

* Tickety przychodzą przez e-mail  
* Trigger nasłuchuje skrzynki pocztowej

➡️ Łatwa konfiguracja, ale trzeba parsować treść wiadomości

---

## **✅ Podsumowanie**

**Typ Triggera**

**Kiedy używać**

Webhook

*Szybka reakcja na dane z zewnątrz*

Cron

*Regularne, zaplanowane działania*

Workflow Trigger

*Modularne przepływy pracy*

Zewnętrzny Trigger

*Integracje z innymi systemami*

Manual Trigger

*Testowanie i uruchomienia na żądanie*

---

## **📥 Co dalej?**

1. **Wybierz proces**, który chcesz zautomatyzować  
2. **Określ, skąd dane mają pochodzić**  
3. **Dobierz odpowiedni trigger**  
4. **Zaplanuj obsługę błędów**  
5. **Zbuduj swój pierwszy flow\!**

---

⚙️ Cztery Filary Procesów do Automatyzacji  
---

## **📌 Wprowadzenie**

Nie każdy proces powinien (lub może) zostać zautomatyzowany.

Aby efektywnie wdrażać automatyzacje w n8n, musisz nauczyć się **identyfikować właściwe procesy**. W tym celu posłużymy się prostym systemem oceny: **4 filary automatyzacji**.

---

## **🧱 Filar 1: Powtarzalność**

Jeśli coś robisz **wciąż od nowa** – to świetny kandydat do automatyzacji.

✅ Przykłady:

* Ręczne wprowadzanie danych do CRM po każdym nowym leadzie  
* Codzienne tworzenie raportu z Google Sheets

❌ Nie automatyzuj procesów jednorazowych lub bardzo rzadkich.

---

## **🧱 Filar 2: Struktura**

Proces musi mieć **określone kroki**, dane i warunki decyzyjne.

✅ Przykład:

* Nowe zamówienie → sprawdź status → wyślij e-mail

❌ Procesy kreatywne, zależne od interpretacji, z dużą liczbą wyjątków są trudne do automatyzacji.

---

## **🧱 Filar 3: Wpływ**

Czy automatyzacja **oszczędza czas, pieniądze, redukuje błędy**?

✅ Im większy wpływ (np. skrócenie procesu z 2 godzin do 5 minut), tym większy sens inwestycji.

🧮 Pytanie: *Czy zautomatyzowanie tego procesu poprawi widocznie jakość pracy lub doświadczenie klienta?*

---

## **🧱 Filar 4: Wykonalność Techniczna**

Sprawdź:

* Czy dane są dostępne cyfrowo?  
* Czy narzędzia mają API, webhooki, integracje?  
* Czy dane mają przewidywalny format (np. JSON)?

✅ Przykład:

* Formularz wysyła dane do webhooka n8n → proste do zbudowania

❌ Skanowanie papierowych dokumentów bez OCR – trudne do zautomatyzowania

---

## **🎯 Ocena procesu: przykład**

**Kryterium**

**Ocena**

Powtarzalność

✅ Codziennie

Struktura

✅ Zawsze te same 5 kroków

Wpływ

✅ Oszczędność 3h tygodniowo

Wykonalność

✅ API \+ webhook gotowe

➡️ Kandydat idealny do automatyzacji\!

---

## **🧮 Bonus: Jak obliczyć ROI automatyzacji?**

ROI \= (Czas zaoszczędzony × stawka godzinowa × liczba pracowników) ÷ koszt wdrożenia

Przykład:

* 3h tygodniowo oszczędności × 50 zł × 5 osób \= 750 zł  
* Koszt wdrożenia: 400 zł  
* ROI \= 1.875 → warto automatyzować 💸

---

## **🛠 Jak zacząć?**

1. Zrób listę procesów w swojej firmie  
2. Oceń każdy wg 4 filarów  
3. Zacznij od **tych, które mają 4× TAK**  
4. Zbuduj pierwszy prosty flow w n8n (np. webhook \+ e-mail \+ log)

---

## **✅ Podsumowanie**

**Filar**

**Znaczenie**

🔁 Powtarzalność

Proces dzieje się często i jest przewidywalny

🧱 Struktura

Ma jasne kroki i logikę

💥 Wpływ

Oszczędza czas, zmniejsza błędy, poprawia wynik

⚙️ Wykonalność

Można go technicznie wdrożyć

---

Proces, który spełnia wszystkie 4 kryteria, to **złoty kandydat** do automatyzacji.

Masz taki? Świetnie – czas zbudować swój pierwszy workflow w n8n\! 🚀

---

📈 ROI Systemów Automatyzacji

## **🎯 Cel tej lekcji**

Pomóc Ci:

1. **Zidentyfikować procesy** o wysokim zwrocie z inwestycji (ROI)  
2. **Zmierzyć wartość automatyzacji** poprzez oszczędności czasu i wpływ na przychody

---

## **💸 Czym jest ROI?**

**ROI (Return on Investment)** to wskaźnik pokazujący, czy inwestycja w automatyzację się opłaca.

**Wzór:**

ROI \= (Zysk netto / Koszt inwestycji) × 100

Dzięki temu możesz obliczyć, czy czas, zasoby i energia poświęcone na wdrożenie automatyzacji przyniosą realne korzyści.

---

## **✅ Korzyści automatyzacji – wymierne vs. niewymierne**

**Typ korzyści**

**Przykłady**

**Wymierne**

Oszczędność czasu, redukcja kosztów, mniej błędów

**Niewymierne**

Większa satysfakcja pracowników, lepsze decyzje, większe zaangażowanie klientów

🎯 Skup się najpierw na korzyściach **mierzalnych**, ale nie ignoruj wpływu długofalowego.

---

## **🕵️‍♂️ Jak rozpoznać procesy o wysokim ROI?**

Szukaj procesów, które są:

* 🔁 **Powtarzalne** i oparte na regułach  
* 📈 **Wysokovolumowe** (częste)  
* ⏱ **Czasochłonne**  
* ❌ **Podatne na błędy ludzkie**  
* 🔗 **Międzysystemowe** – np. kopiowanie danych między narzędziami

---

## **🧠 Ćwiczenie: Arkusz identyfikacji procesu**

Odpowiedz na te 5 pytań przed wyborem procesu do automatyzacji:

1. Jak często się powtarza?  
2. Ile trwa jego wykonanie?  
3. Ile osób jest zaangażowanych?  
4. Ile kosztuje ich godzina pracy?  
5. Ile kosztują błędy?

---

## **⏳ Jak liczyć oszczędność czasu?**

1. Zmierz czas wykonania ręcznego  
2. Oszacuj czas działania zautomatyzowanego  
3. Odejmij jedno od drugiego  
4. Pomnóż przez liczbę wystąpień tygodniowo/miesięcznie

**Przykład:**  
25 minut oszczędności × 20 razy w tygodniu \= 8,3 godziny tygodniowo

---

## **💰 Przekładanie oszczędności czasu na pieniądze**

### **🔹 Redukcja kosztów:**

Zaoszczędzony czas × stawka godzinowa \= oszczędność kosztów

### **🔹 Wzrost przychodów:**

Zaoszczędzony czas × wartość godziny produktywnej pracy

📌 Uwaga: pamiętaj o „kosztach rzeczywistych” – świadczenia, urlopy, podatki mogą podnieść koszt pracownika o 25–50%.

---

## **⚠️ Kluczowe czynniki wpływające na ROI**

1. **Złożoność procesu** – bardziej złożony proces \= większy potencjalny zysk  
2. **Objętość (częstotliwość)** – częściej uruchamiany \= szybszy zwrot  
3. **Koszty początkowe** – im niższy, tym lepiej (n8n jako low-code \= niski próg)  
4. **Harmonogram** – procesy działające 24/7 przynoszą szybciej ROI  
5. **Rzeczywiste koszty pracy** – uwzględnij pełne obciążenia kosztowe

---

## **📊 5 metryk do mierzenia ROI automatyzacji**

**Metryka**

**Co oznacza**

💵 Oszczędność kosztów

Mniej pracy manualnej, mniej błędów

⚡ Wzrost produktywności

Więcej zadań w krótszym czasie

📈 Wzrost przychodów

Lepsze wyniki sprzedaży i obsługi

🔄 Usprawnienia efektywności

Eliminacja wąskich gardeł

🛡 Zgodność i ryzyko

Mniej błędów, silniejsze bezpieczeństwo danych

---

## **🧮 Proces obliczania ROI – krok po kroku**

### **Krok 1: Ustal cel i KPI**

* Co chcesz osiągnąć automatyzacją?  
* Jakie wskaźniki pokazują sukces?

### **Krok 2: Zbierz dane wejściowe**

* Czas ręczny  
* Koszty pracy  
* Błędy i ich skutki

### **Krok 3: Uruchom i monitoruj**

* Porównaj rzeczywiste wyniki z planem  
* Testuj przed i po (A/B)

### **Krok 4: Oblicz ROI w czasie**

* 🔹 Krótkoterminowo (3–6 miesięcy)  
* 🔹 Średnioterminowo (do 1 roku)  
* 🔹 Długoterminowo (2+ lata)

---

## **🧾 Przykłady z życia (firmy i ROI)**

**Firma**

**Efekt**

**American Express**

25% oszczędności (chatboty), \+10% satysfakcji

**Siemens**

\-12% kosztów produkcji, 99,5% terminowości

**Unilever**

\-10% kosztów zapasów, zoptymalizowana logistyka

**E-commerce (case study)**

Redukcja zespołu z 35 do 2 osób na zmianę przy 3 zmianach dziennie 💥

---

## **🚀 Jak n8n pomaga zwiększać ROI**

**Funkcja**

**Korzyść**

Low-code

*Mniej kosztownego developmentu*

Elastyczne workflowy

*Łatwe dostosowanie bez przepisywania*

Skalowalność

*Rośnij bez wzrostu kosztów*

Self-hosting

*Niższe koszty operacyjne, większa kontrola*

---

## **🧠 Podsumowanie – jak wybrać pierwszą automatyzację?**

✅ Zacznij od czegoś **małego, ale znaczącego**  
✅ Wybieraj procesy **częste i powtarzalne**  
✅ Uwzględnij **pełne koszty i potencjalne zyski**  
✅ Mierz i pokazuj **twarde dane** (przed/po)  
✅ Myśl **długoterminowo** – ROI rośnie z czasem

---

## **🗺 Mapa priorytetów automatyzacji**

**Wpływ**

**Złożoność**

**Działanie**

🔝 Wysoki

🔽 Niska

**Zrób to teraz – szybki zysk\!** ✅

🔝 Wysoki

🔝 Wysoka

**Projekt strategiczny** 🤔

🔽 Niski

🔽 Niska

**Mały zysk – OK do nauki** 🍎

🔽 Niski

🔝 Wysoka

**Omiń – nie warto** ❌

---

🧩 Wireframing – Szkicowanie przepływów  
---

## **🔍 Co to jest wireframing?**

Wireframing to **etap projektowy**, w którym szkicujesz ogólny zarys systemu, zanim zaczniesz go tworzyć.

Wyobraź sobie, że planujesz zbudować skomplikowany system automatyzacji – zamiast od razu siadać do n8n, najpierw tworzysz **mapę przepływu**:

* 🔁 Jakie kroki ma wykonać system?  
* 🔗 Jak dane będą przepływać między tymi krokami?  
* ⚠️ Gdzie mogą pojawić się punkty krytyczne?

---

## **🧱 Dlaczego warto tworzyć wireframe?**

**Korzyść**

**Opis**

🗺 Jasna wizualizacja

Widok całego przepływu przed implementacją

🔎 Lepsze zrozumienie

Łatwiej zauważyć braki i błędy w logice

⚙️ Modularność

Budujesz system jako zestaw „klocków Lego”

📈 Skalowalność

Możesz dodawać/zmieniać elementy bez przeróbek całości

---

## **✍️ Jak rozbić proces na części?**

1. **Wymień wszystkie kroki główne**  
   Przykład: Wejście → Przetwarzanie danych → Decyzja → Wyjście  
2. **Podziel na podzadania**  
   Przykład dla kroku „Przetwarzanie danych”:  
   * Czyść dane  
   * Formatuj dane  
   * Analizuj dane  
3. **Zdefiniuj połączenia**  
   Pytania pomocnicze:  
   * Jakie dane są potrzebne na wejściu każdego kroku?  
   * Jakie dane muszą zostać przekazane dalej?

---

## **🧰 Modularność w praktyce (na przykładzie n8n)**

**Modularne podejście** \= projektowanie procesu jako zbioru małych, powtarzalnych bloków (workflowów).

**Przykład**

**Co zyskujesz**

📦 Subworkflow: Wyślij e-mail

Możesz użyć go w wielu miejscach

🔄 Moduł: Parsuj dane z API

Wymienialny w różnych systemach

🛠 Moduł: Zapisz do bazy

Łatwy do testowania osobno

W n8n:

* Stwórz małe workflowy do pojedynczych zadań  
* Użyj **Call Workflow** lub **Webhook** w głównym przepływie  
* W razie potrzeby: wymień jeden moduł bez zmieniania reszty

---

## **🧠 Narzędzia do wireframowania (np. Excalidraw)**

**Jak narysować przepływ:**

1. Stwórz prosty szkic (np. w Excalidraw)  
2. Narysuj **główne kroki** jako prostokąty (np. Wejście, Przetwarzanie, Decyzja)  
3. W każdym kroku wypisz **podzadania** jako mniejsze bloki  
4. Połącz bloki strzałkami, pokazując kierunek danych  
5. Oznacz **moduły wielokrotnego użytku** (np. innym kolorem)

---

## **💡 Wskazówki projektowe**

**Co robić**

**Dlaczego**

🔎 Zacznij od ogółu

Szczegóły dopracujesz później

⚙️ Buduj bloki funkcjonalne

Każdy z nich powinien mieć 1 cel

🎨 Używaj kolorów i ikon

Lepsza czytelność i zrozumienie

📄 Dokumentuj zależności

Co z czym się łączy i dlaczego

---

## **✅ Podsumowanie**

* Wireframing \= „mapa drogowa” automatyzacji  
* Pomaga uniknąć błędów, planować skalowalnie, budować modułowo  
* Idealne narzędzie do planowania automatyzacji w n8n  
* Narzędzia: Excalidraw, Miro, FigJam, a nawet papier i długopis

---

Bazy Danych i RAG

Bazy Wektorowe 🧠📦  
---

## **Czym jest baza wektorowa?**

Baza wektorowa to specjalny typ „inteligentnej” bazy danych, która przechowuje dane jako wektory – czyli listy liczb reprezentujące np. tekst, obraz lub dźwięk w sposób zrozumiały dla sztucznej inteligencji.

Zamiast zwykłych tabel jak w Excelu, baza wektorowa to trójwymiarowa przestrzeń, gdzie każdy „punkt” reprezentuje złożony obiekt, np. artykuł lub zdjęcie.

---

## **Jak działa baza wektorowa?**

* **Embeddingi**: To grupy liczb, które „opisują” dane. Np. słowo „samochód” może być reprezentowane jako \[0.34, 2.5, 0.35, ...\].  
* **Porównywanie**: AI szuka podobieństw poprzez obliczanie odległości między wektorami – im bliżej, tym bardziej podobne.  
* **Przestrzeń**: Dane są rozkładane w wielu wymiarach (czasem setkach), gdzie liczy się kontekst, nie tylko słowa kluczowe.

---

## **Kiedy warto stosować bazę wektorową?**

* **Dane nieustrukturyzowane** – np. tekst, obraz, dźwięk.  
* **Zadania oparte na podobieństwach** – np. chatboty, rekomendacje, rozpoznawanie obrazów.  
* **Wielowymiarowe porównania** – np. klasyfikacja złożonych obiektów.

---

## **Przykłady zastosowań**

* **Chatboty AI**: Potrafią rozpoznać kontekst rozmowy dzięki wektorom i odpowiedzieć trafnie.  
* **Rekomendacje produktów**: Na podstawie poprzednich wyborów użytkownika baza sugeruje podobne elementy.  
* **Wyszukiwanie podobnych obrazów**: Zamiast szukać nazw plików, porównuje strukturę wizualną zdjęć.

---

## **Korzyści z baz wektorowych**

**Korzyść**

**Opis**

**Elastyczność**

Obsługuje wiele typów danych – tekst, obraz, dźwięk i więcej.

**Skalowalność**

Można przechowywać miliony, a nawet miliardy punktów danych.

**Szybkość**

AI szybko znajduje i porównuje dane na podstawie odległości wektorów.

**Wsparcie AI**

Działa jako pamięć wspomagająca w systemach typu RAG (Retrieval Augmented Generation).

---

## **Jak dane są reprezentowane?**

Każdy obiekt (tekst, obraz itd.) jest konwertowany na ciąg liczb – tzw. **wektor**.

**Przykład**:

* Słowo „samochód” → \[0.22, 1.05, 0.88, ...\]  
* Słowo „rower” → \[0.23, 1.00, 0.89, ...\]  
  ➡️ AI widzi, że te wektory są blisko siebie → znaczy, że są podobne semantycznie.

---

## **Dlaczego bazy wektorowe są tak ważne w AI?**

Baza wektorowa to coś więcej niż przechowalnia danych – to **pamięć kontekstowa dla modeli AI**. Dzięki niej AI może:

* Zapamiętać, co było wcześniej powiedziane.  
* Porównać nowe dane do tych, które już zna.  
* Udzielić odpowiedzi na podstawie zrozumienia, a nie tylko dopasowania słów.

W n8n, bazy wektorowe są szczególnie ważne, jeśli budujesz automatyzacje z LLM (np. GPT, Claude), które analizują dane i potrzebują **dynamicznego dostępu do wiedzy**.

---

## **Podsumowanie**

📌 **Baza wektorowa \= inteligentna biblioteka dla AI.**  
Zamiast szukać danych po słowach kluczowych, AI rozumie dane poprzez ich znaczenie – zakodowane wektorowo. To klucz do nowoczesnych chatbotów, systemów rekomendacji i automatyzacji opartych o kontekst.

---

🧠 Osadzenia Wektorowe (Vector Embeddings)  
---

## **📌 Co to są osadzenia wektorowe?**

Osadzenia wektorowe to sposób reprezentacji danych (tekst, obraz, dźwięk) jako **wektorów liczb**.  
Inaczej mówiąc – są to „**magiczne liczby”**, które AI potrafi porównać, analizować i wyciągać z nich wnioski.

💡 Wyobraź sobie, że każde słowo, obrazek czy dźwięk staje się punktem w przestrzeni. Im bliżej dwa punkty leżą od siebie – tym bardziej są do siebie podobne.

---

## **📊 Po co używa się osadzeń wektorowych?**

* 🔍 Znajdowanie podobnych treści (np. "kot" ≈ "kocię")  
* 🧠 Zrozumienie znaczenia tekstów przez AI  
* 🔁 Wyszukiwanie semantyczne (znaczenie, nie słowa kluczowe)  
* 🎯 Rekomendacje (filmy, produkty, treści)  
* 🧩 Łączenie danych multimodalnych (np. opis \+ obraz)

---

## **📚 Typy osadzeń i ich zastosowania**

**Typ**

**Co reprezentuje**

**Zastosowania**

**Tekstowe**

Znaczenie słów i zdań

Chatboty, wyszukiwarki

**Obrazowe**

Cechy wizualne

Wyszukiwanie obrazów, e-commerce

**Audio**

Dźwięk, melodia, głos

Rozpoznawanie głosu, muzyka

**Wideo**

Ruch \+ klatki filmowe

Analiza filmów, rekomendacje

**Multimodalne**

Tekst \+ obraz \+ dane

Wyszukiwanie typu „pokaż mi produkt z opisu”

**Grafowe**

Relacje między bytami

Social media, powiązania

**Tabelaryczne**

Dane w formacie tabel

Predykcja, AI na bazach danych

---

## **📏 Rozmiary osadzeń – jaki wybrać?**

Modele OpenAI oferują dwa popularne rozmiary:

**Model**

**Cechy**

**Kiedy używać?**

TextEmbedding-3-Small

✅ Szybki, ✅ lekki, ✅ tani

Proste chatboty, szybkie wyszukiwania

TextEmbedding-3-Large

🧠 Dokładniejszy, 📊 więcej danych

Głębokie przeszukiwania, zaawansowana analiza semantyczna

💡 **W n8n** większość integracji z bazami wektorowymi (np. Pinecone, Weaviate) bazuje na **text embeddings**.

---

## **⚙️ Jak działają osadzenia w AI?**

1. **Input**: Podajesz dane (np. tekst: „Kocham psy”)  
2. **Model embeddingowy**: Zamienia dane w ciąg liczb, np.:  
   \[0.123, \-0.987, 0.456, …\]  
3. **Przestrzeń wektorowa**: Te liczby tworzą punkt w „mapie znaczeń”  
4. **Porównanie**: AI sprawdza, które punkty (czyli treści) są sobie bliskie

---

## **🗂️ Przykład: jak AI wie, co jest podobne?**

**Treść**

**Osadzenie**

**Znaczenie**

„kot”

\[0.51, 0.62, 0.18\]

zwierzę, małe, domowe

„pies”

\[0.49, 0.61, 0.20\]

zwierzę, domowe, towarzyskie

„samochód”

\[0.90, 0.02, 0.05\]

maszyna, transport

➡️ Kot i pies są **blisko siebie** w przestrzeni → AI wie, że są podobne.

---

## **🔌 Zastosowanie osadzeń w n8n i AI workflowach**

1. **Przygotuj dane** – np. za pomocą węzła Set, Function, Text Splitter  
2. **Stwórz embedding** – za pomocą node'a AI: Text Embedding  
3. **Zapisz embedding** – np. do bazy Pinecone / Weaviate / Chroma  
4. **Przeszukuj** – porównuj nowe zapytania z osadzonymi danymi

---

## **🧠 Ciekawostka: multimodalne embeddingi**

Można łączyć tekst \+ obraz \+ PDF w **jeden wspólny embedding**, który AI rozumie całościowo.

Przykład:

* Użytkownik wpisuje zapytanie tekstowe → „Pokaż mi zdjęcie kawiarni z drzewami”  
* AI przeszukuje przestrzeń wektorową obrazów i tekstów  
* Znajduje najbardziej pasujące osadzenie

---

## **🔁 Workflow przykładowy (w skrócie):**

1. Użytkownik wpisuje zapytanie tekstowe  
2. Tekst zamieniany na wektor (embedding)  
3. Wektor trafia do bazy wektorowej (np. Weaviate)  
4. AI porównuje zapytanie z istniejącymi wektorami  
5. Zwracane są najbardziej podobne wyniki  
6. n8n może je wysłać e-mailem, do Slacka, do dashboardu itp.

---

## **📌 Podsumowanie**

* Osadzenia wektorowe to sposób, w jaki AI „rozumie” dane  
* Reprezentują znaczenie tekstu, obrazu, dźwięku jako liczb  
* Stosowane w: wyszukiwarkach, chatbotach, rekomendacjach, multimodalnych analizach  
* W n8n możesz łatwo tworzyć i przeszukiwać embeddingi dzięki node’om AI i bazom wektorowym

---

📏 Wymiary Wektorów (Vector Dimensions)  
---

## **🧠 Co to są wymiary wektorów?**

W kontekście sztucznej inteligencji i osadzeń wektorowych, **wymiary** to liczba liczb (składowych), które tworzą jeden embedding.

Przykład:

\[0.12, \-0.34, 0.88, ..., 0.03\] ← wektor o 1536 wymiarach

📌 Im **więcej wymiarów**, tym dokładniej AI może odwzorować znaczenie słów, zdań, obrazów itp.

---

## **🔍 Jak działa przestrzeń wektorowa?**

Każdy tekst/obrazek zamieniany jest przez AI na **punkt w przestrzeni wektorowej**.  
**Wymiar \= „oś”** tej przestrzeni.

**Wektor 2D (dwuwymiarowy)**

**Wektor 3D (trójwymiarowy)**

**Wektor 1536D**

\[0.5, 0.7\]

\[0.5, 0.7, 0.1\]

\[x1, x2, ..., x1536\]

📈 W praktyce używamy setek lub tysięcy wymiarów – im więcej, tym lepsze rozróżnienie między znaczeniami.

---

## **📐 Przykład: Wymiary a znaczenie**

**Tekst**

**Embedding (4D – uproszczony)**

„kot”

\[0.12, 0.45, 0.88, 0.33\]

„pies”

\[0.11, 0.43, 0.86, 0.34\]

„auto”

\[0.87, 0.12, 0.09, 0.10\]

➡️ **Kot i pies są bliżej siebie**, bo mają podobne wartości w każdym z wymiarów – co oznacza, że ich znaczenie jest zbliżone.

---

## **⚖️ Liczba wymiarów – co wybrać?**

**Liczba wymiarów**

**Cechy**

**Zastosowanie**

256–512

🔹 Szybkie, lekkie, mniej dokładne

Chatboty lokalne, mobilne

768–1024

⚖️ Balans między kosztami a jakością

Większość aplikacji

1536–3072

🔍 Duża precyzja semantyczna

Wyszukiwanie wektorowe, agent AI

\>4096

🧠 Dla dużych modeli i złożonych danych

Multimodalne i zaawansowane AI

---

## **🎯 Wpływ liczby wymiarów na AI workflowy**

**Obszar**

**Jak wpływa liczba wymiarów**

🔍 Wyszukiwanie semantyczne

Więcej wymiarów \= dokładniejsze dopasowanie

🧠 AI Agent

Lepsze zrozumienie intencji użytkownika

📚 Retrieval-Augmented Generation (RAG)

Lepsze źródła do generowania odpowiedzi

⚙️ n8n Performance

Więcej wymiarów \= większy rozmiar danych (ważne przy wielu zapytaniach)

---

## **📉 Czy więcej \= lepiej?**

Nie zawsze. Większa liczba wymiarów:

* 🧮 zwiększa koszt obliczeniowy (więcej danych do przechowywania i porównań),  
* 📉 może prowadzić do „curse of dimensionality” (przekleństwa wysokowymiarowości – dane stają się rozproszone i mniej znaczące),  
* 📦 potrzebuje więcej pamięci i miejsca w bazach wektorowych.

🔁 **Dobrze dobrana liczba wymiarów \= balans między jakością i wydajnością.**

---

## **🧠 Przykładowe modele i ich rozmiary osadzeń**

**Model**

**Liczba wymiarów**

OpenAI ada-002

1536

OpenAI text-embedding-3-small

1536

OpenAI text-embedding-3-large

3072

Cohere multilingual

768

Sentence Transformers

384–1024

---

## **📌 Podsumowanie**

* Wymiary \= liczba liczb w embeddingu AI  
* Im więcej wymiarów, tym dokładniejszy opis znaczenia  
* Ale też większe zużycie pamięci i czasu obliczeń  
* Dla większości przypadków 768–1536 to dobry kompromis  
* n8n świetnie integruje się z embeddingami – np. do porównań, przeszukiwania, klasyfikacji

---

Retrieval-Augmented Generation (RAG) 🔍🧠  
---

## **🧠 Co to jest RAG?**

RAG (Retrieval-Augmented Generation) to technika, która **łączy dwa światy**:

1. **Wyszukiwanie informacji (retrieval)** z baz danych lub dokumentów  
2. **Generowanie odpowiedzi (generation)** przy pomocy modelu językowego (np. GPT)

📌 Efekt: AI nie tylko „zgaduje” odpowiedzi – ona **szuka ich w danych**, a potem tworzy logiczne, trafne wypowiedzi.

---

## **🔁 Jak działa RAG – krok po kroku**

1. 📥 **Zapytanie użytkownika**  
   → np. "Jaka jest polityka zwrotów?"  
2. 📚 **Wyszukiwanie informacji**  
   → Przeszukuje bazę wiedzy (np. FAQ, instrukcje, umowy)  
3. 🧠 **Generowanie odpowiedzi**  
   → Łączy znalezione dane z pytaniem i tworzy zrozumiałą odpowiedź  
4. 📤 **Zwraca wynik użytkownikowi**

---

## **🎯 Po co używać RAG?**

✅ Zwiększa **trafność i jakość odpowiedzi**  
✅ AI nie wymyśla – **bazuje na rzeczywistych danych**  
✅ Można łatwo aktualizować informacje bez ponownego treningu modelu  
✅ Idealne dla firm – np. **obsługa klienta, wsparcie techniczne, szkolenia**

---

## **🔍 Kluczowe elementy RAG**

**Element**

**Opis**

**Baza Wiedzy**

Dokumenty, artykuły, instrukcje, dane wewnętrzne

**System Wyszukiwania**

Oparta na semantyce lub słowach kluczowych

**Model Językowy (LLM)**

Generuje odpowiedź z wykorzystaniem kontekstu

**Prompt**

Scenariusz, który łączy pytanie i znalezione informacje

---

## **📊 Przykład z życia:**

**Pytanie:** "Jak zmienić hasło?"  
**Działanie RAG:**

1. Znajduje dokument z instrukcją zmiany hasła  
2. Generuje krótki opis kroków  
3. Odpowiada:  
   → „Aby zmienić hasło, przejdź do ustawień konta i kliknij 'Zmień hasło'. Potrzebne będzie Twoje stare hasło i nowe, minimum 8 znaków.”

---

## **🔗 Tradycyjny LLM vs RAG**

### **❌ Tradycyjny model:**

Pytanie → Model → Odpowiedź (tylko na bazie treningu)

### **✅ RAG:**

Pytanie → Wyszukiwanie → Kontekst \+ Pytanie → Model → Odpowiedź

📌 RAG \= mniej "halucynacji", więcej faktów

---

## **🧩 Typy RAG**

**Typ**

**Opis**

**Naive RAG**

Proste wyszukiwanie \+ generowanie

**Advanced RAG**

Optymalizacja kontekstu, filtrowanie wyników

**Modular RAG**

Osobne komponenty, łatwo skalowalne i konfigurowalne

---

## **⚙️ Jak zbudować RAG w n8n?**

🎯 **Przykład workflow:**

1\. Webhook (pytanie od klienta)

   ↓

2\. Zapytanie do Vector Database (np. Qdrant)

   ↓

3\. Node LLM (generowanie odpowiedzi)

   ↓

4\. Node Email lub Slack (wysyłka odpowiedzi)

**Ustawienia LLM Node:**

{

  "model": "gpt-4",

  "temperature": 0.1,

  "max\_tokens": 500

}

**Ustawienia bazy wektorowej:**

{

  "vector\_db": "Pinecone",

  "index": "faq-index",

  "top\_k": 5

}

---

## **🧠 Przykłady użycia**

**Obszar**

**Zastosowanie**

Obsługa klienta

Szybkie odpowiedzi na pytania o produkty/usługi

Wsparcie IT

Wyszukiwanie błędów i instrukcji napraw

E-learning

Odpowiedzi bazujące na podręcznikach

HR i onboarding

Automatyczne odpowiedzi dla nowych pracowników

---

## **🚨 Wyzwania i ryzyka**

**Wyzwanie**

**Jak przeciwdziałać**

❌ Jakość danych

Czyszczenie i walidacja dokumentów

❌ Opóźnienia

Optymalizacja liczby dokumentów i promptów

❌ Koszty

Ograniczenie tokenów i wyników wyszukiwania

❌ Bezpieczeństwo

Walidacja promptów, filtrowanie danych, kontrola dostępu

---

## **🛠️ Narzędzia, które wspierają RAG**

**Kategoria**

**Przykłady**

Vector DB

Pinecone, Weaviate, Qdrant

LLM

GPT-4, Claude, Mistral

Frameworki

LangChain, LlamaIndex, Haystack

n8n

Webhook, HTTP Request, AI (LLM), Set, Switch

---

## **📦 Podsumowanie**

🔹 RAG to przyszłość aplikacji opartych o LLM – **faktyczne dane \+ AI**  
🔹 Pomaga tworzyć **trafne, aktualne i zrozumiałe odpowiedzi**  
🔹 W n8n możesz stworzyć własny mini-RAG bez pisania kodu  
🔹 Klucz do sukcesu: **jakość danych, dobry prompt, testy\!**

---

🧠 Zrozumienie Cachowania \- Agenci i Workflows  
---

## **💡 Co to jest cachowanie?**

Cachowanie to **sposób tymczasowego przechowywania danych**, które są często używane, aby móc uzyskać do nich **szybszy dostęp** przy kolejnym żądaniu.

### **📌 Przykład z życia:**

Wyobraź sobie, że w kawiarni klienci codziennie pytają o hasło do Wi-Fi. Zamiast za każdym razem je wyszukiwać – zapisujesz je na tablicy.  
➡️ To właśnie **cachowanie** – dane są „pod ręką”.

---

## **🚀 Dlaczego cachowanie jest ważne w AI i n8n?**

Budując automatyzacje lub agentów AI w n8n, często pracujemy z:

* Zewnętrznymi API (koszt i czas odpowiedzi),  
* Dużymi zbiorami danych,  
* Powtarzalnymi zapytaniami.

Dzięki cachowaniu:

* 🔁 **Nie musisz przetwarzać tych samych danych ponownie**  
* ⚡ **Przyspieszasz odpowiedzi** (z sekund do milisekund)  
* 💰 **Oszczędzasz na kosztach API**  
* 🔄 **Odciążasz serwery**

---

## **📦 Przykład praktyczny:**

### **Bez cachowania:**

Użytkownik pyta agenta AI:

“Jaka jest cena lotu z Nowego Jorku do Londynu?”

🧠 AI wywołuje API → czeka 3 sekundy → otrzymuje: 500$

### **Z cachowaniem:**

Jeśli to samo pytanie padnie ponownie w ciągu 10 minut:  
✅ Odpowiedź 500$ pochodzi **z cache**, bez ponownego zapytania do API.

➡️ Odpowiedź w milisekundy \+ brak kosztu API

---

## **📂 Typy cachowania**

**Typ**

**Opis**

**Zalety**

**W pamięci (in-memory)**

Przechowywanie danych w RAM

🟢 Szybkie, 🔴 utracone po restarcie

**Na dysku**

Trwałe zapisywanie cache

🟢 Przetrwa restart, 🔴 wolniejsze

**Rozproszone (np. Redis)**

Wiele maszyn, wspólny cache

🟢 Skalowalne i niezawodne

---

## **🔧 Jak cachować w n8n?**

### **✅ Opcja 1: Redis**

1. Ustaw Redis jako zewnętrzny cache  
2. Użyj node'ów typu HTTP Request, Function, IF, Set, by:  
   * Sprawdzić czy dane są w Redis  
   * Jeśli nie – pobrać z API  
   * Zaktualizować cache

---

### **✅ Opcja 2: Własny workflow cache**

Tworzysz własne flow:

1. Sprawdza, czy dane są już w Static Data lub Data Store  
2. Jeśli nie – wywołuje API  
3. Zapisuje wynik do cache z TTL (czasem życia)

🧠 TTL \= czas, po którym dane w cache wygasają  
Przykład: 10 minut dla danych pogodowych

---

## **📊 Kiedy warto cachować?**

✅ **TAK**, jeśli:

* Dane są często odczytywane, ale rzadko zmieniane  
* Wywołania API są kosztowne lub powolne  
* Dużo użytkowników zadaje podobne pytania  
* Chcesz przyspieszyć działanie agenta

❌ **NIE**, jeśli:

* Dane zmieniają się dynamicznie (np. giełda)  
* Potrzebujesz zawsze aktualnych danych  
* Masz ograniczoną pamięć lub zasoby

---

## **🧠 Najlepsze praktyki cachowania**

**Rekomendacja**

**Opis**

🔁 **Wygaszanie danych (TTL)**

Ustaw czas życia cache, np. 10 minut

⚖️ **Balans świeżości i szybkości**

Nie zawsze opłaca się wszystko cachować

📈 **Monitorowanie cache**

Sprawdzaj tzw. "hit rate" i "miss rate"

🧹 **Unieważnianie cache**

Wymuszaj odświeżenie cache w razie potrzeby

📚 [Praktyki cachowania od Amazon](https://aws.amazon.com/caching/best-practices/)

---

## **📌 Podsumowanie**

* Cachowanie to kluczowy element **wydajnych i tanich agentów AI**  
* Zmniejsza ilość powtórzeń, przyspiesza działanie i odciąża system  
* W n8n możesz go wdrożyć przez Redis, node’y warunkowe lub własne strategie  
* **Zrozumienie kiedy cachować** to umiejętność, która odróżnia dobre workflowy od przeciętnych

---

🧠 Obserwowalność LLM – jak monitorować AI  
---

## **📌 Co to jest obserwowalność LLM?**

Obserwowalność LLM to zdolność do:

* monitorowania działania modeli językowych,  
* wykrywania błędów i dziwnych zachowań,  
* zrozumienia, **co model zrobił, dlaczego i za ile**.

To jak system diagnostyczny dla AI – **nie tylko „lampka błędu”**, ale też analiza, gdzie coś poszło nie tak.

---

## **🤖 Jak działają LLM – i gdzie pojawiają się wyzwania?**

### **✅ Co potrafią LLM?**

* Generują tekst (odpowiedzi, streszczenia, tłumaczenia)  
* Podejmują decyzje  
* Analizują dane tekstowe i intencje

### **❗ Najczęstsze problemy:**

**Wyzwanie**

**Opis**

🎲 Nieprzewidywalność

Ten sam prompt → różne wyniki

🤯 Halucynacje

AI wymyśla nieistniejące fakty

🔗 Złożone łańcuchy

Trudno zrozumieć przepływ decyzji

🐢 Fluktuacje

Czasem wolno działa, czasem szybko

💸 Koszty tokenów

Każdy znak to koszt – trzeba kontrolować

---

## **🔍 Obserwowalność vs. Monitorowanie – różnica**

**Monitorowanie**

**Obserwowalność**

CPU, RAM, logi błędów

*Jakość promptów, reakcje AI*

Czy coś działa?

*Dlaczego AI zrobiło to, co zrobiło?*

Metryki techniczne

*Metryki poznawcze i jakościowe*

---

## **🎯 Cele obserwowalności LLM**

1. **Śledzenie działania** modeli AI  
2. **Wykrywanie błędów** (np. halucynacji, timeoutów)  
3. **Zrozumienie kontekstu** decyzji AI  
4. **Optymalizacja kosztów** (np. długość promptów)  
5. **Porównywanie modeli** (który działa lepiej w danym zadaniu)

---

## **🧪 Praktyka: Co zbierać w n8n?**

**Co logować?**

**Dlaczego?**

📥 Input prompt

Żeby wiedzieć, co dokładnie wysłano

📤 Output AI

Do porównań i ewaluacji

🕒 Czas odpowiedzi

Dla wydajności

💰 Tokeny i koszt

Dla budżetu

🧠 Decyzje agenta

W przypadku AI Agentów – jakie narzędzia i ścieżki wybrał

---

## **🔁 Typowy przepływ z AI i obserwowalnością**

1. 🧩 Użytkownik wyzwala flow (np. webhook lub cron)  
2. 🔄 AI Node (np. LLM / Agent) wykonuje akcję  
3. 🧾 Zbieranie danych: prompt, output, tokeny  
4. 📊 Logowanie do Notion, Google Sheets, Supabase  
5. 🛠 Analiza danych lub alerty w przypadku anomalii

---

## **📂 Narzędzia i techniki w n8n**

**Narzędzie**

**Do czego użyć**

**Set / Function Node**

Dodanie metadanych, np. ID sesji, tokeny

**IF \+ Switch**

Obsługa nietypowych odpowiedzi AI

**AI Agent Logs**

Śledzenie kroków podejmowanych przez agenta

**Webhook lub Subworkflow**

Do śledzenia błędów lub logowania osobno

**Supabase / DB**

Centralna baza do analizy działania AI

---

## **⚠️ Jak rozpoznawać błędy i problemy?**

**Objaw**

**Możliwa przyczyna**

🧪 Losowe odpowiedzi

Brak temperature control lub zbyt ogólny prompt

❌ Brak odpowiedzi

Timeout, problem API

💬 Odpowiedź z błędem logicznym

Zła kolejność promptów, zły kontekst

💸 Za wysokie zużycie tokenów

Zbyt długi kontekst lub nieoptymalne dane wejściowe

---

## **💡 Co warto mierzyć?**

**Metryka**

**Cel**

🧾 Średnia długość promptu

Optymalizacja kosztów

🧠 Spójność odpowiedzi

Ewaluacja jakości

💬 Liczba halucynacji

Wskaźnik zaufania do modelu

🛠 Ilość błędów / awarii

Stabilność AI workflow

⏱ Czas działania modelu

Wydajność całego procesu

---

## **✅ Podsumowanie**

* Obserwowalność LLM \= zrozumienie działania AI, nie tylko monitoring  
* Pozwala ocenić skuteczność, koszt, jakość i stabilność  
* Jest niezbędna w produkcyjnych automatyzacjach z AI  
* W n8n można ją wdrożyć przez odpowiednie węzły, logowanie i subflow

---

Bezpieczeństwo i Monitoring

🧑‍💼 Human in the Loop \- kiedy potrzeba człowieka

**Budujemy bezpieczne i kontrolowane automatyzacje z udziałem człowieka**

---

## **📌 Co to jest "Human-in-the-Loop" (HITL)?**

**Human-in-the-Loop (HITL)** to podejście, w którym **człowiek bierze udział w części procesu decyzyjnego**, szczególnie w automatyzacjach opartych o AI i modele językowe.

To kluczowa technika w:

* systemach opartych na LLM (gdzie wynik nie zawsze jest przewidywalny),  
* automatyzacjach o wysokim ryzyku (np. decyzje finansowe, prawnicze),  
* procesach, które wymagają potwierdzenia przez człowieka (np. wysyłka e-maila, zatwierdzenie dokumentu).

---

## **🧠 Dlaczego to ważne?**

**Korzyść**

**Opis**

🛡️ **Zwiększenie bezpieczeństwa**

Człowiek może zatwierdzić lub odrzucić działanie automatyzacji

🎯 **Wyższa jakość danych**

Możliwość poprawienia błędnych danych wygenerowanych przez model

💡 **Lepsze uczenie systemu**

Feedback użytkownika może być zapisany i wykorzystany później

---

## **🧩 Typowe scenariusze HITL w n8n:**

**Sytuacja**

**Gdzie interweniuje człowiek?**

📨 Wygenerowany email sprzedażowy

Zatwierdzenie przed wysyłką

🧾 Wygenerowany JSON z faktury

Weryfikacja pól zanim dane trafią do księgowości

🤖 Klasyfikacja wiadomości przez LLM

Edycja etykiety jeśli confidence \< 0.75

✍️ Chatbot z AI

Przekazanie do konsultanta w trudnym przypadku

---

## **🛠️ Jak wdrożyć HITL w n8n?**

### **🔧 1\. Wariant prosty: pauza i e-mail**

* Użyj node Wait (czeka na akcję użytkownika)  
* Wyślij e-mail do człowieka z danymi do sprawdzenia (np. Send Email)  
* Po kliknięciu w link (np. Webhook → Resume), workflow idzie dalej

---

### **📌 Przykład 1 – Zatwierdzanie przez człowieka**

1. LLM generuje e-mail handlowy  
2. Send Email wysyła szkic do pracownika  
3. Link w e-mailu prowadzi do prostego formularza (Webhook \+ HTML)  
4. Po zatwierdzeniu → kontynuacja wysyłki (Send Email do klienta)

---

### **🔧 2\. Wariant zaawansowany: custom interfejs użytkownika (frontend \+ API)**

* Workflow zatrzymuje się (Wait)  
* Wewnętrzna aplikacja (np. na Retool, Bubble, AppSmith) pokazuje dane  
* Po zatwierdzeniu → POST do webhooka → workflow rusza dalej

---

### **📌 Przykład 2 – Zatwierdzenie dokumentu przez prawnika**

1. Document Parser \+ LLM generują streszczenie umowy  
2. Node Wait zatrzymuje flow  
3. Frontend pokazuje dane prawnikowi  
4. Po zatwierdzeniu → webhook kontynuuje workflow i wysyła umowę

---

## **🔐 Bezpieczeństwo i dobre praktyki**

**Praktyka**

**Opis**

🔒 Uwierzytelnianie użytkownika

Jeśli to nie Ty, nie możesz zatwierdzać

🕐 Czas na decyzję

Ustal timeout na decyzję (np. 48h), potem alert

📝 Logowanie interakcji

Zapisuj kto, co i kiedy zatwierdził/zmienił

🔁 Możliwość poprawki

Pozwól użytkownikowi edytować dane przed zatwierdzeniem

---

## **🧠 Dla kogo HITL jest niezbędne?**

* Agencje i software house’y automatyzujące procesy klientów  
* Firmy korzystające z AI do przetwarzania danych  
* Organizacje z ryzykiem compliance / prawnym  
* Biznesy, które chcą **kontrolować AI zamiast jej się bać**

---

## **🚀 Podsumowanie**

**Human-in-the-Loop to nie krok wstecz, a kontrolowany krok naprzód.**  
To klucz do wdrażania **inteligentnych, ale bezpiecznych automatyzacji** z AI.

W n8n możesz wdrożyć HITL w wielu wariantach:

* e-mail z zatwierdzeniem,  
* formularz www,  
* interaktywna aplikacja do przeglądania i poprawiania danych,  
* panel do feedbacku po odpowiedzi modelu LLM.

---

🛡️ Guardrails w Automatyzacji – Ochrona Workflowa

**Zanim dasz maszynie wolność, ustaw granice.**

---

## **📌 Co to są "Guardrails"?**

**Guardrails** (dosł. „barierki ochronne”) to mechanizmy zabezpieczające, które:

* **ograniczają działanie modelu AI**,  
* **wymuszają określone warunki logiczne w workflowie**,  
* **chronią dane i reputację**,  
* i co najważniejsze – **minimalizują ryzyko kosztownych błędów**.

W skrócie: to reguły, które mówią agentowi lub automatyzacji **czego nie wolno robić**, **kiedy trzeba się zatrzymać**, i **gdzie są granice działania**.

---

## **🧠 Dlaczego guardrails są kluczowe?**

**Problem**

**Co może się stać bez guardrails?**

💸 AI generuje nieprawidłowe treści

Klient otrzymuje zły e-mail → strata reputacji

🧾 Model źle klasyfikuje dokument

Trafia do złej bazy → chaos w finansach

🤖 Workflow działa w pętli

API kosztuje → rosną koszty bez efektu

⚠️ Dane poufne wypływają do LLM

Naruszenie RODO / NDA

---

## **🚦 Główne typy guardrails w n8n**

**Typ guardrail**

**Przykład**

✅ **Warunki logiczne (IF, Switch)**

“Jeśli confidence \< 0.7 – nie wysyłaj odpowiedzi”

📏 **Walidacja danych (Code, Regex)**

“Czy e-mail zawiera @ i kończy się na .com?”

🧠 **System Prompt**

“Nie odpowiadaj na pytania dotyczące danych osobowych”

🛑 **Max tokens / iterations**

“Agent może wykonać max 3 kroki”

🔐 **Obróbka danych przed wysłaniem do LLM**

“Usuń numery kont i nazwiska z prompta”

---

## **🧩 Praktyczne przykłady guardrails w n8n**

### **📌 Przykład 1 – AI generuje wiadomość handlową**

Guardrails:

* IF node: Jeśli length($json\["output"\]) \> 500 → zatrzymaj  
* Regex node: Sprawdź, czy nie zawiera słów: “gwarantujemy”, “darmowy” (compliance)  
* System prompt: “Nie używaj clickbaitów i nie składaj obietnic prawnych”

---

### **📌 Przykład 2 – klasyfikacja dokumentów**

Guardrails:

* Text Classifier: confidence \< 0.8 → prześlij do człowieka (HITL)  
* Code node: jeśli fileType \!== "pdf" → zakończ workflow z błędem

---

### **📌 Przykład 3 – Chatbot z AI agentem**

Guardrails:

* Max iterations \= 3 (w Agent node)  
* System prompt: “Nie wypowiadaj się na tematy zdrowotne, prawne i polityczne”  
* IF node: brak odpowiedzi w 5s → fallback odpowiedź

---

## **🔧 Narzędzia guardrails w n8n**

**Narzędzie**

**Do czego służy**

IF / Switch

Reguły decyzji logicznych

Code node

Walidacja danych niestandardowa

Set

Modyfikacja promptów przed wysłaniem

LLM Prompt Template

Wymuszanie formatu odpowiedzi

Webhooks \+ Approval

Guardrail: zatwierdzenie przez człowieka

Rate limit / Timeout

Guardrail: ograniczenie zasobów

---

## **✅ Podsumowanie**

Guardrails to Twoje AI pasy bezpieczeństwa.  
Dzięki nim Twoje automatyzacje będą **profesjonalne, przewidywalne i bezpieczne**.

Nie chodzi o to, by ograniczać AI – chodzi o to, by **dać jej ramy działania**, które **chronią Twój biznes, klientów i dane**.

---

📊 Agent Logs w n8n — Jak Diagnozować

**Każdy inteligentny agent potrzebuje czarnej skrzynki. Oto jak ją czytać.**

---

## **📌 Czym są "Agent Logs"?**

**Agent Logs** to zestaw danych i zapisów, które pokazują:

* Jak agent podejmuje decyzje (prompt → output)  
* Jakie były odpowiedzi modelu LLM na każdym kroku  
* Jak wyglądała komunikacja między komponentami agenta (np. tools, memory, retriever)  
* Gdzie dokładnie coś poszło nie tak

To Twoje **centrum diagnostyczne** – dzięki niemu nie musisz „zgadywać”, czemu agent zadziałał inaczej, niż chciałeś.

---

## **🧠 Po co używać logów agenta?**

**Korzyść**

**Przykład**

✅ **Debugowanie**

„Dlaczego agent odpowiedział nie na temat?”

🔎 **Analiza decyzji**

„Na jakiej podstawie LLM wybrał dane narzędzie?”

📈 **Optymalizacja**

„Czy używam za dużo tokenów na mało przydatne odpowiedzi?”

🔁 **Reprodukowalność**

„Chcę odtworzyć sytuację 1:1 w testach”

---

## **🔍 Gdzie znajdziesz Agent Logs w n8n?**

1. Używasz noda: **Agent**, **LLM Chain**, **Chat Model z toolami**, itp.  
2. W każdej iteracji działania agenta generowane są:  
   * invocations – wywołania tooli  
   * observations – dane zwrotne  
   * prompt logs – input/output promptów  
3. W widoku wykonania (Execution View) kliknij na konkretny node  
4. Wybierz zakładkę **JSON**, by przejrzeć:  
   * intermediateSteps  
   * llmPrompts  
   * actions  
   * toolResults  
   * finalOutput

---

## **🛠️ Co możesz zobaczyć w logach?**

**Pole**

**Znaczenie**

llmPrompts

Dokładna treść promptu, który został wysłany do modelu

intermediateSteps

Kolejne decyzje i akcje agenta (np. co zrobił, z czym się połączył)

toolResults

Wyniki wywołań narzędzi (np. wyszukiwanie, kod, baza danych)

messages

Historia konwersacji agenta (chat history)

finalOutput

Ostateczna odpowiedź, którą agent wygenerował

---

## **🧪 Przykład: Agent nie udziela poprawnej odpowiedzi**

### **🔍 Diagnoza krok po kroku:**

1. **Sprawdź llmPrompts** – może brakuje kontekstu lub prompt nie zawiera danych  
2. **Zobacz toolResults** – może tool zwrócił błąd lub undefined  
3. **Zajrzyj w intermediateSteps** – czy agent wykonał odpowiednią liczbę akcji?  
4. **Porównaj finalOutput** **z inputem** – czy wynik ma sens?

---

## **🔐 Bonus: Logowanie z poziomu Code node**

Jeśli chcesz ręcznie logować dane w niestandardowy sposób:

console.log("Aktualny krok agenta:", $json)

return $input.all()

Logi pojawią się w historii wykonania.

---

## **🧠 Dobre praktyki diagnozowania agentów**

**Praktyka**

**Dlaczego warto**

🪪 Nazwij swoje tool’e jednoznacznie

W logach łatwiej rozpoznać, co zostało uruchomione

📁 Zapisuj logi do Notion / Bazy

Śledzisz postęp i rozwój agentów

🧪 Testuj z różnymi danymi

Zmieniaj input i obserwuj, jak wpływa na prompt i output

🔄 Używaj test-case’ów

Automatyzuj sprawdzanie poprawności działania agenta

---

## **✅ Podsumowanie**

Agent bez logów to czarna skrzynka bez drzwi.  
Logi to Twoja **nawigacja, czujnik dymu i lupa w jednym**.

Używaj Agent Logs do:

* Debugowania  
* Optymalizacji kosztów (tokenów, API)  
* Poprawy jakości działania Twojego AI Agenta

---

Darmowy Lokalny Hosting n8n  
Jak hostować n8n lokalnie za DARMO (Docker/Ollama)

link do źródła: [https://github.com/n8n-io/self-hosted-ai-starter-kit](https://github.com/n8n-io/self-hosted-ai-starter-kit)

## **Windows Setup**

### **Wymagania:**

* Windows 10/11  
* Docker Desktop zainstalowany  
* Git (opcjonalnie)

### **Krok po kroku:**

**Zainstaluj Docker Desktop**  
Pobierz z docker.com i zainstaluj

1. Uruchom Docker Desktop

**Sklonuj repozytorium**  
bash  
git clone https://github.com/n8n-io/self-hosted-ai-starter-kit.git

2. cd self-hosted-ai-starter-kit  
3. **Uruchom z GPU (jeśli masz NVIDIA)**  
   bash  
   docker compose \--profile nvidia-gpu up  
4. **Lub uruchom z CPU**  
   bash  
   docker compose \--profile cpu up

**Otwórz przeglądarkę**  
Przejdź do: http://localhost:5678

5. Stwórz lokalne konto n8n

## **Linux Setup**

### **Wymagania:**

* Ubuntu/Debian/CentOS  
* Docker i Docker Compose  
* Git

### **Krok po kroku:**

**Zainstaluj Docker**  
bash  
\# Ubuntu/Debian  
curl \-fsSL https://get.docker.com \-o get-docker.sh  
sudo sh get-docker.sh

1. sudo usermod \-aG docker $USER

**Zainstaluj Docker Compose**  
bash  
sudo curl \-L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname \-s)-$(uname \-m)" \-o /usr/local/bin/docker-compose

2. sudo chmod \+x /usr/local/bin/docker-compose

**Sklonuj i uruchom**  
bash  
git clone https://github.com/n8n-io/self-hosted-ai-starter-kit.git  
cd self-hosted-ai-starter-kit

\# Z GPU NVIDIA  
docker compose \--profile nvidia-gpu up

\# Lub tylko CPU

3. docker compose \--profile cpu up

**Dostęp do aplikacji**  
n8n: http://localhost:5678

4. Ollama: http://localhost:11434

## **Konfiguracja Ollama (modele AI)**

### **Pobieranie modeli:**

bash

\# Llama 3.2 (zalecany na start)  
docker exec \-it ollama ollama pull llama3.2

\# DeepSeek Coder  
docker exec \-it ollama ollama pull deepseek-coder

\# Gemma 2  
docker exec \-it ollama ollama pull gemma2

### **Testowanie:**

bash

\# Sprawdź dostępne modele  
docker exec \-it ollama ollama list

\# Test modelu  
docker exec \-it ollama ollama run llama3.2

## **Troubleshooting**

**Problem:** Docker nie uruchamia się

* **Rozwiązanie:** Upewnij się że Docker Desktop jest uruchomiony

**Problem:** Brak dostępu do GPU

* **Rozwiązanie:** Zainstaluj NVIDIA Container Toolkit lub użyj profilu `cpu`

**Problem:** Port 5678 zajęty

* **Rozwiązanie:** Zmień port w `docker-compose.yml` lub zatrzymaj inne aplikacje

**Problem:** Powolne działanie

* **Rozwiązanie:** Wybierz mniejszy model AI (np. llama3.2:1b zamiast llama3.2:8b)

—------------

**GOTOWE AUTOMATYZACJE**

Agent Mailowy \- Instrukcja Konfiguracji

# 

## **📋 Przegląd**

Workflow **Agent Mailowy** o poziomie złożoności: **Średni**.

Ten workflow implementuje inteligentnego asystenta email opartego na GPT-4o, który może samodzielnie zarządzać Twoją skrzynką Gmail. System umożliwia wysyłanie emaili, tworzenie wersji roboczych, odpowiadanie na wiadomości, zarządzanie etykietami oraz pobieranie emaili \- wszystko przez naturalne polecenia w języku polskim. Agent automatycznie formatuje emaile w HTML i może być zintegrowany z innymi workflow jako subagent.

## **🎯 Zastosowania Biznesowe**

* **Email Automation** \- Automatyczne odpowiadanie na typowe zapytania  
* **Customer Service** \- Pierwsza linia wsparcia klienta przez email  
* **Business Communication** \- Profesjonalne formatowanie i wysyłanie emaili  
* **Email Management** \- Organizacja skrzynki przez etykiety i filtry  
* **Virtual Assistant** \- Inteligentny asystent do korespondencji biznesowej  
* **Multi-workflow Integration** \- Subagent w większych systemach automatyzacji

## **⚙️ Wymagania**

* ✅ Działająca instancja n8n (v1.0+)  
* ✅ Uprawnienia do konfiguracji workflow'ów  
* 📧 **Gmail Account** \- Konto Gmail do zarządzania  
* 🔑 **Gmail OAuth2** \- Autoryzacja dostępu do Gmail API  
* 🤖 **OpenAI API Key** \- Dostęp do GPT-4o model  
* 🔗 **Webhook URLs** \- Dla każdego narzędzia Gmail (automatycznie generowane)  
* 🌐 **Publiczny URL n8n** \- Do działania webhook'ów (opcjonalnie)

## **🔧 Konfiguracja Krok po Kroku**

### **1\. Przygotowanie Gmail API**

1. **Google Cloud Console:**  
* Przejdź do Google Cloud Console  
* Utwórz nowy projekt lub wybierz istniejący  
* Włącz Gmail API w bibliotece API  
* Utwórz credentials OAuth 2.0  
2. **OAuth2 Setup:**  
* Skonfiguruj OAuth consent screen  
* Dodaj swój email do test users  
* Pobierz client ID i client secret

### **2\. Konfiguracja OpenAI API**

1. **OpenAI Platform:**  
   * Zarejestruj się na [platform.openai.com](http://platform.openai.com)  
   * Wygeneruj API key  
   * Upewnij się, że masz dostęp do GPT-4o model  
   * Zasilaj konto kredytami

### **3\. Import i Konfiguracja Workflow**

1. **Import workflow:**  
* Otwórz n8n w przeglądarce  
* Kliknij **"Import workflow"**  
* Wybierz plik agent-mailowy.json  
* Zatwierdź import  
2. **Konfiguracja Credentials:**  
* **Gmail OAuth2**: Autoryzuj dostęp do swojego Gmail  
* **OpenAI API**: Dodaj klucz API do GPT-4o  
3. **Test połączeń:**  
* Sprawdź czy wszystkie węzły Gmail mają poprawne credentials  
* Zweryfikuj połączenie z OpenAI API  
* Upewnij się, że webhook'i są aktywne

### **4\. Dostosowanie Agenta**

W węźle "Agent Mailowy" możesz dostosować system message:

\# Overview

Jesteś asystentem zarządzania emailami. Wszystkie emaile muszą być sformatowane profesjonalnie w HTML i podpisane jako "\[TWOJA NAZWA\]."

**Narzędzia Zarządzania Email**

\- Użyj "Wyślij Email" do wysyłania emaili

\- Użyj "Utwórz Wersję Roboczą" jeśli użytkownik prosi o draft

\- Użyj "Pobierz Emaile" do odzyskiwania emaili na żądanie

\- Użyj "Pobierz Etykiety" do odzyskiwania etykiet

\- Użyj "Oznacz jako Nieprzeczytane" żeby oznaczyć email

\- Użyj "Dodaj Etykietę" do flagowania emaila

\- Użyj "Odpowiedź Email" do odpowiadania na email

\#\# Uwagi końcowe

\- Aktualna data/czas: {{ $now }}

### **5\. Testowanie Systemu**

1. **Test podstawowy:**  
* Wykonaj workflow z prostym poleceniem: "Wyślij email do test@example.com z tematem 'Test' i treścią 'To jest test'"  
* Sprawdź czy email został wysłany

  2. **Test zaawansowany:**  
* "Pobierz ostatnie 5 emaili od gmail@google.com"  
* "Utwórz wersję roboczą emaila do klienta z przeprosinami za opóźnienie"  
* "Odpowiedz na ostatni email z podziękowaniem"

## **🧪 Testowanie**

### **Scenariusze testowe:**

**Test 1 \- Wysyłanie emaila:**

Query: "Wyślij email do jan.kowalski@example.com z tematem 'Spotkanie jutro' i informacją o spotkaniu o 10:00"

Oczekiwany rezultat: Email wysłany z profesjonalnym formatowaniem HTML

**Test 2 \- Pobieranie emaili:**

Query: "Pokaż mi ostatnie 3 emaile od support@company.com"

Oczekiwany rezultat: Lista emaili z podstawowymi informacjami

**Test 3 \- Zarządzanie etykietami:**

Query: "Dodaj etykietę 'Ważne' do ostatniego emaila od klienta"

Oczekiwany rezultat: Email oznaczony odpowiednią etykietą

**Test 4 \- Tworzenie wersji roboczej:**

Query: "Przygotuj wersję roboczą odpowiedzi na zapytanie o cennik"

Oczekiwany rezultat: Draft email z profesjonalną odpowiedzią

### **Weryfikacja wyników:**

* Sprawdź poprawność formatowania HTML w emailach  
* Zweryfikuj czy podpis jest poprawny  
* Upewnij się, że etykiety są prawidłowo stosowane  
* Potwierdź że agent rozumie kontekst polskich poleceń

## **❗ Rozwiązywanie Problemów**

### **Częste błędy:**

**Gmail OAuth2 nie działa:**

* Sprawdź czy Gmail API jest włączone w Google Cloud  
* Zweryfikuj OAuth consent screen configuration  
* Upewnij się, że redirect URLs są poprawne w n8n  
* Sprawdź czy Twój email jest w test users

**OpenAI API timeout:**

* Zweryfikuj klucz API i limity konta  
* Sprawdź czy masz dostęp do GPT-4o  
* Upewnij się, że masz wystarczające kredyty

**Agent nie rozumie poleceń:**

* Sprawdź czy system message jest w języku polskim  
* Zweryfikuj czy wszystkie narzędzia są połączone  
* Upewnij się, że polecenia są jasne i konkretne

**Webhook errors:**

* Sprawdź czy n8n jest dostępny publicznie (dla webhook'ów)  
* Zweryfikuj czy wszystkie węzły Gmail mają unikalne webhook ID  
* Upewnij się, że workflow jest aktywny

### **Wskazówki optymalizacji:**

* Używaj jasnych, konkretnych poleceń  
* Testuj różne scenariusze użytkowania  
* Monitoruj koszty API calls  
* Regularnie sprawdzaj logi wykonań

## **💡 Tips & Best Practices**

### **Optymalne użytkowanie:**

* **Clear commands**: Używaj jasnych, jednoznacznych poleceń  
* **Context**: Podawaj kontekst dla lepszego zrozumienia  
* **Polish language**: Agent najlepiej działa z polskimi poleceniami  
* **Professional tone**: Agent automatycznie formatuje emaile profesjonalnie

### **Security best practices:**

* **API keys**: Regularnie rotuj klucze dostępu  
* **OAuth2**: Monitoruj uprawnienia Gmail  
* **Email content**: Nie przesyłaj wrażliwych danych  
* **Access control**: Ogranicz dostęp do workflow

### **Workflow integration:**

* **Sub-agent**: Używaj jako część większych systemów  
* **Error handling**: Implementuj retry logic dla failed operations  
* **Logging**: Monitoruj wszystkie operacje email  
* **Rate limiting**: Przestrzegaj limitów Gmail API

### **Performance optimization:**

* **Batch operations**: Grupuj podobne operacje  
* **Selective queries**: Używaj filtrów dla pobierania emaili  
* **Cache management**: Cache często używane etykiety  
* **Monitoring**: Śledź response times i success rates

## **🚀 Rozszerzenia i Następne Kroki**

### **Możliwe integracje:**

1. **CRM Integration** \- Automatyczne tworzenie leadów z emaili  
2. **Calendar sync** \- Automatyczne tworzenie spotkań z emaili  
3. **Document management** \- Zapisywanie attachments do cloud storage  
4. **Multi-language support** \- Obsługa różnych języków w emailach  
5. **Analytics dashboard** \- Metryki email activity i engagement

### **Advanced Features:**

* **Email templates** \- Predefiniowane szablony dla różnych scenariuszy  
* **Auto-classification** \- Automatyczne kategoryzowanie przychodzących emaili  
* **Sentiment analysis** \- Analiza tonu emaili dla lepszych odpowiedzi  
* **Priority scoring** \- Automatyczne określanie priorytetów emaili  
* **Follow-up automation** \- Automatyczne przypomnienia o brakujących odpowiedziach

### **Business automation:**

* **Customer support** \- Automatyczne odpowiedzi na FAQ  
* **Sales follow-up** \- Nurturing leadów przez email  
* **Invoice management** \- Automatyczne przetwarzanie faktur z emaili  
* **Appointment booking** \- Zarządzanie kalendarzem przez email  
* **Newsletter management** \- Automatyczne zarządzanie subscriptions

### **Multi-channel expansion:**

* **Slack integration** \- Obsługa komunikacji zespołowej  
* **WhatsApp Business** \- Rozszerzenie na messaging  
* **SMS integration** \- Backup communication channel  
* **Social media** \- Zarządzanie messages z platform społecznościowych  
* **Live chat** \- Integration z chat na stronie

### **Workflow orchestration:**

* **Master-agent pattern** \- Agent email jako część większego systemu  
* **Conditional routing** \- Różne akcje na podstawie typu email  
* **Human-in-the-loop** \- Approval process dla ważnych emaili  
* **Escalation rules** \- Automatyczne przekierowanie complex queries  
* **Performance metrics** \- KPI tracking dla email operations

---

**Kategoria**: AI Email Management & Business Communication | **Złożoność**: Średni | **Wartość biznesowa**: 8/10

💡 **Potrzebujesz pomocy?** Załóż nowy wątek w społeczności dotyczący tego workflow'a aby uzyskać wsparcie od innych użytkowników.

Resources  
agent-mailowy.json

—-  
Agent Kontakty \- Instrukcja Konfiguracji

# 

## **📋 Przegląd**

Workflow **Agent Kontakty** o poziomie złożoności: **Prosty**.

Ten workflow implementuje inteligentnego asystenta do zarządzania kontaktami opartego na GPT-4o z integracją Airtable. System umożliwia wyszukiwanie kontaktów, dodawanie nowych pozycji oraz aktualizację istniejących informacji kontaktowych przez naturalne polecenia w języku polskim. Agent automatycznie rozpoznaje intencje użytkownika i wykonuje odpowiednie operacje na bazie danych Airtable.

## **🎯 Zastosowania Biznesowe**

1. **CRM Management** \- Centralne zarządzanie bazą kontaktów firmowych  
2. **Customer Database** \- Automatyczne utrzymanie aktualnej bazy klientów  
3. **Lead Management** \- Łatwe dodawanie i aktualizacja informacji o potencjalnych klientach  
4. **Sales Support** \- Szybki dostęp do informacji kontaktowych dla zespołu sprzedaży  
5. **Virtual Assistant** \- Inteligentny asystent do zarządzania kontaktami osobistymi  
6. **Multi-workflow Integration** \- Subagent w większych systemach automatyzacji

## **⚙️ Wymagania**

1. ✅ Działająca instancja n8n (v1.0+)  
2. ✅ Uprawnienia do konfiguracji workflow'ów  
3. 📊 **Airtable Account** \- Konto Airtable z bazą kontaktów  
4. 🔑 **Airtable API Token** \- Token dostępu do Airtable API  
5. 🤖 **OpenAI API Key** \- Dostęp do GPT-4o model  
6. 📋 **Airtable Base Structure** \- Baza z tabelą Contacts zawierającą pola: name, email, phoneNumber  
7. 🌐 **Webhook URLs** \- Dla narzędzi Airtable (automatycznie generowane)

## **🔧 Konfiguracja Krok po Kroku**

### **1\. Przygotowanie Airtable**

1. **Utworzenie bazy:**  
2. Zaloguj się do [Airtable.com](http://Airtable.com)  
3. Utwórz nową bazę o nazwie "Contacts"  
4. Utwórz tabelę "Contacts" z polami:  
5. `name` (Single line text) \- Imię i nazwisko  
6. `email` (Email) \- Adres email  
7. `phoneNumber` (Phone number) \- Numer telefonu  
8. **Konfiguracja API:**  
9. Przejdź do Airtable API documentation  
10. Znajdź swoją bazę i skopiuj Base ID  
11. Wygeneruj Personal Access Token w ustawieniach konta  
12. Zapisz Base ID i Table ID dla późniejszego użycia

### **2\. Konfiguracja OpenAI API**

1. **OpenAI Platform:**  
2. Zarejestruj się na [platform.openai.com](http://platform.openai.com)  
3. Wygeneruj API key  
4. Upewnij się, że masz dostęp do GPT-4o model  
5. Zasilaj konto kredytami

### **3\. Import i Konfiguracja Workflow**

1. **Import workflow:**  
2. Otwórz n8n w przeglądarce  
3. Kliknij **"Import workflow"**  
4. Wybierz plik `agent-kontakty.json`  
5. Zatwierdź import  
6. **Konfiguracja Credentials:**  
7. **Airtable Token API**: Dodaj Personal Access Token  
8. **OpenAI API**: Dodaj klucz API do GPT-4o  
9. **Konfiguracja węzłów Airtable:**  
10. W **"Pobierz Kontakty"**: Ustaw Base ID i Table ID  
11. W **"Dodaj lub Zaktualizuj Kontakt"**: Ustaw Base ID i Table ID  
12. Sprawdź mapowanie pól (name, email, phoneNumber)

### **4\. Test połączeń**

1. **Test Airtable:**  
2. Sprawdź czy węzły Airtable mają poprawny dostęp do bazy  
3. Zweryfikuj czy wszystkie pola są poprawnie zmapowane  
4. Upewnij się, że operacje read/write działają  
5. **Test OpenAI:**  
6. Sprawdź połączenie z GPT-4o  
7. Zweryfikuj czy model odpowiada poprawnie

### **5\. Testowanie Systemu**

1. **Test podstawowy:**  
2. Wykonaj workflow z poleceniem: "Znajdź kontakt Jana Kowalskiego"  
3. Sprawdź czy system zwraca poprawne wyniki  
4. **Test dodawania:**  
5. "Dodaj nowy kontakt: Anna Nowak, email: anna@example.com, telefon: 123456789"  
6. Zweryfikuj czy kontakt został dodany do Airtable  
7. **Test aktualizacji:**  
8. "Zaktualizuj numer telefonu Jana Kowalskiego na 987654321"  
9. Sprawdź czy informacja została zaktualizowana

## **🧪 Testowanie**

### **Scenariusze testowe:**

**Test 1 \- Wyszukiwanie kontaktu:**

Query: "Znajdź kontakt dla adresu email: jan.kowalski@example.com"

Oczekiwany rezultat: Informacje o kontakcie Jana Kowalskiego

**Test 2 \- Dodawanie nowego kontaktu:**

Query: "Dodaj nowy kontakt: Maria Wiśniewska, email: maria@company.com, telefon: \+48 500 123 456"

Oczekiwany rezultat: Kontakt dodany do bazy Airtable

**Test 3 \- Aktualizacja kontaktu:**

Query: "Zmień email Piotra Nowaka na piotr.nowak@newcompany.com"

Oczekiwany rezultat: Zaktualizowany email w bazie

**Test 4 \- Wyszukiwanie po nazwisku:**

Query: "Pokaż wszystkie kontakty z nazwiskiem Kowalski"

Oczekiwany rezultat: Lista kontaktów o tym nazwisku

### **Weryfikacja wyników:**

1. Sprawdź poprawność wyszukiwania kontaktów  
2. Zweryfikuj czy nowe kontakty są dodawane z wszystkimi polami  
3. Upewnij się, że aktualizacje nie powodują duplikatów  
4. Potwierdź że agent rozumie polskie polecenia

## **❗ Rozwiązywanie Problemów**

### **Częste błędy:**

**Airtable API nie działa:**

1. Sprawdź poprawność Personal Access Token  
2. Zweryfikuj Base ID i Table ID  
3. Upewnij się, że token ma uprawnienia read/write  
4. Sprawdź czy struktura tabeli jest zgodna z očekiwaną

**OpenAI API timeout:**

1. Zweryfikuj klucz API i limity konta  
2. Sprawdź czy masz dostęp do GPT-4o  
3. Upewnij się, że masz wystarczające kredyty

**Agent nie rozumie poleceń:**

1. Sprawdź czy system message jest poprawny  
2. Zweryfikuj czy wszystkie narzędzia są połączone  
3. Upewnij się, że polecenia są jasne i konkretne

**Duplikaty kontaktów:**

1. Sprawdź konfigurację "matchingColumns" w upsert  
2. Zweryfikuj logikę dopasowywania po nazwie  
3. Upewnij się, że nazwy są konsystentne

### **Wskazówki optymalizacji:**

1. Używaj jasnych, konkretnych poleceń  
2. Utrzymuj konsystentne formatowanie danych  
3. Regularnie sprawdzaj integralność bazy danych  
4. Monitoruj koszty API calls

## **💡 Tips & Best Practices**

### **Optymalne użytkowanie:**

1. **Consistent naming**: Używaj jednolitych formatów nazw (Imię Nazwisko)  
2. **Complete data**: Zawsze podawaj pełne informacje kontaktowe  
3. **Clear commands**: Używaj precyzyjnych poleceń dla lepszej interpretacji  
4. **Regular cleanup**: Okresowo czyść bazę z duplikatów

### **Data management:**

1. **Validation**: Sprawdzaj poprawność formatów email i telefonu  
2. **Normalization**: Unifikuj formaty numerów telefonów  
3. **Deduplication**: Implementuj mechanizmy wykrywania duplikatów  
4. **Backup**: Regularnie twórz kopie zapasowe bazy Airtable

### **Security best practices:**

1. **API tokens**: Regularnie rotuj tokeny dostępu  
2. **Access control**: Ogranicz uprawnienia do minimum  
3. **Data privacy**: Nie przechowuj wrażliwych danych osobowych  
4. **Audit logs**: Monitoruj dostęp do bazy kontaktów

### **Performance optimization:**

1. **Batch operations**: Grupuj podobne operacje  
2. **Selective queries**: Używaj filtrów dla efektywnego wyszukiwania  
3. **Cache frequently accessed data**: Cache popularnych kontaktów  
4. **Rate limiting**: Przestrzegaj limitów Airtable API

## **🚀 Rozszerzenia i Następne Kroki**

### **Możliwe integracje:**

1. **Email integration** \- Automatyczne dodawanie kontaktów z emaili  
2. **Calendar sync** \- Synchronizacja z kalendarzem spotkań  
3. **Social media** \- Wzbogacanie profili o dane z LinkedIn  
4. **CRM systems** \- Integracja z Salesforce, HubSpot  
5. **Communication tools** \- Sync z Slack, Teams, WhatsApp

### **Advanced Features:**

1. **Contact enrichment** \- Automatyczne wzbogacanie profili o dane firmowe  
2. **Relationship mapping** \- Wizualizacja powiązań między kontaktami  
3. **Activity tracking** \- Historia interakcji z kontaktami  
4. **Smart suggestions** \- AI-powered recommendations for outreach  
5. **Duplicate detection** \- Automatyczne wykrywanie i łączenie duplikatów

### **Business automation:**

1. **Lead scoring** \- Automatyczne ocenianie potencjału leadów  
2. **Follow-up automation** \- Systematyczne przypomnienia o kontakcie  
3. **Segmentation** \- Automatyczne kategoryzowanie kontaktów  
4. **Report generation** \- Okresowe raporty o bazie kontaktów  
5. **Data enrichment** \- Uzupełnianie brakujących informacji

### **Multi-channel expansion:**

1. **Mobile app integration** \- Sync z kontaktami w telefonie  
2. **Voice assistant** \- Głosowe zarządzanie kontaktami  
3. **QR code scanner** \- Dodawanie kontaktów z wizytówek  
4. **Form integration** \- Automatyczne dodawanie z formularzy web  
5. **Event management** \- Dodawanie kontaktów z wydarzeń

### **Enterprise features:**

1. **Team collaboration** \- Współdzielenie bazy między zespołami  
2. **Permission management** \- Granularne uprawnienia dostępu  
3. **Compliance tracking** \- GDPR compliance dla danych osobowych  
4. **Integration hub** \- Centralna integracja z wszystkimi systemami  
5. **Analytics dashboard** \- Metryki wykorzystania bazy kontaktów

**Kategoria**: CRM & Contact Management | **Złożoność**: Prosty | **Wartość biznesowa**: 7/10

💡 **Potrzebujesz pomocy?** Załóż nowy wątek w społeczności dotyczący tego workflow'a aby uzyskać wsparcie od innych użytkowników.

Resources  
agent-kontakty.json

—------

Agent Kalendarz \- Instrukcja Konfiguracji

# 

## **📋 Przegląd**

Workflow **Agent Kalendarz** o poziomie złożoności: **Średni**.

Ten workflow implementuje inteligentnego asystenta do zarządzania kalendarzem Google opartego na GPT-4o. System umożliwia tworzenie wydarzeń (z uczestnikami i bez), pobieranie harmonogramu, usuwanie oraz aktualizację wydarzeń przez naturalne polecenia w języku polskim. Agent automatycznie interpretuje żądania użytkownika i wykonuje odpowiednie operacje na kalendarzu Google, wspierając pełne zarządzanie terminarzem.

## **🎯 Zastosowania Biznesowe**

1. **Personal Assistant** \- Inteligentny asystent do zarządzania osobistym kalendarzem  
2. **Business Scheduling** \- Automatyczne planowanie spotkań biznesowych  
3. **Team Coordination** \- Koordynacja terminów zespołowych i projektowych  
4. **Client Management** \- Zarządzanie spotkaniami z klientami i konsultacjami  
5. **Event Planning** \- Organizacja wydarzeń firmowych i webinarów  
6. **Multi-workflow Integration** \- Subagent w systemach automatyzacji procesów

## **⚙️ Wymagania**

1. ✅ Działająca instancja n8n (v1.0+)  
2. ✅ Uprawnienia do konfiguracji workflow'ów  
3. 📅 **Google Calendar** \- Aktywny kalendarz Google  
4. 🔑 **Google Calendar API** \- Dostęp do Google Calendar API  
5. 🤖 **OpenAI API Key** \- Dostęp do GPT-4o model  
6. 🔐 **OAuth2 Credentials** \- Autoryzacja dostępu do kalendarza  
7. 🌐 **Webhook URLs** \- Dla narzędzi Calendar (automatycznie generowane)

## **🔧 Konfiguracja Krok po Kroku**

### **1\. Przygotowanie Google Calendar API**

1. **Google Cloud Console:**  
2. Przejdź do Google Cloud Console  
3. Utwórz nowy projekt lub wybierz istniejący  
4. Włącz Google Calendar API w bibliotece API  
5. Utwórz credentials OAuth 2.0  
6. **OAuth2 Setup:**  
7. Skonfiguruj OAuth consent screen  
8. Dodaj scopes: `https://www.googleapis.com/auth/calendar`  
9. Dodaj swój email do test users  
10. Pobierz client ID i client secret

### **2\. Konfiguracja OpenAI API**

1. **OpenAI Platform:**  
2. Zarejestruj się na platform.openai.com  
3. Wygeneruj API key  
4. Upewnij się, że masz dostęp do GPT-4o model  
5. Zasilaj konto kredytami

### **3\. Import i Konfiguracja Workflow**

1. **Import workflow:**  
2. Otwórz n8n w przeglądarce  
3. Kliknij **"Import workflow"**  
4. Wybierz plik `agent-kalendarz.json`  
5. Zatwierdź import  
6. **Konfiguracja Credentials:**  
7. **Google Calendar OAuth2**: Autoryzuj dostęp do swojego kalendarza Google  
8. **OpenAI API**: Dodaj klucz API do GPT-4o  
9. **Dostosowanie kalendarzów:**  
10. W każdym węźle Google Calendar ustaw swój email kalendarza  
11. Zamień placeholder na rzeczywisty adres email  
12. Sprawdź wszystkie 5 węzłów Calendar

### **4\. Dostosowanie Agenta**

W węźle "Agent Kalendarz" możesz dostosować system message:

\# Przegląd

Jesteś asystentem kalendarza. Twoje obowiązki obejmują tworzenie, pobieranie

i usuwanie wydarzeń w kalendarzu użytkownika.

**Narzędzia Zarządzania Kalendarzem**

\- Użyj "Utwórz Wydarzenie z Uczestnikiem" gdy wydarzenie zawiera uczestnika

\- Użyj "Utwórz Wydarzenie" dla wydarzeń solo

\- Użyj "Pobierz Wydarzenia" do pobrania harmonogramu na żądanie

\- Użyj "Usuń Wydarzenie" do usuwania wydarzeń. Musisz najpierw użyć "Pobierz Wydarzenia" żeby uzyskać ID wydarzenia

\- Użyj "Zaktualizuj Wydarzenie" do aktualizacji wydarzeń. Musisz najpierw użyć "Pobierz Wydarzenia" żeby uzyskać ID wydarzenia

\#\# Uwagi końcowe

Aktualna data/czas: {{ $now }}

Jeśli czas trwania wydarzenia nie jest określony, załóż że będzie trwać godzinę.

### **5\. Testowanie Systemu**

1. **Test podstawowy:**  
2. Wykonaj workflow z poleceniem: "Utwórz spotkanie jutro o 10:00 na godzinę"  
3. Sprawdź czy wydarzenie zostało utworzone w kalendarzu  
4. **Test z uczestnikiem:**  
5. "Zaplanuj spotkanie z klientem na piątek o 14:00, dodaj jan.kowalski@example.com"  
6. Zweryfikuj czy email zostal wysłany do uczestnika  
7. **Test pobierania:**  
8. "Pokaż mój harmonogram na jutro"  
9. Sprawdź czy system zwraca poprawne wydarzenia

## **🧪 Testowanie**

### **Scenariusze testowe:**

**Test 1 \- Tworzenie wydarzenia solo:**

Query: "Zarezerwuj czas na deep work jutro od 9:00 do 11:00"

Oczekiwany rezultat: Wydarzenie utworzone bez uczestników

**Test 2 \- Tworzenie spotkania z uczestnikiem:**

Query: "Umów spotkanie z zespołem w czwartek o 15:30, dodaj anna@company.com"

Oczekiwany rezultat: Wydarzenie z uczestnikiem i zaproszeniem email

**Test 3 \- Pobieranie harmonogramu:**

Query: "Co mam zaplanowane na najbliższy poniedziałek?"

Oczekiwany rezultat: Lista wydarzeń z tego dnia

**Test 4 \- Usuwanie wydarzenia:**

Query: "Usuń spotkanie projektowe z wtorku o 10:00"

Oczekiwany rezultat: Wydarzenie usunięte z kalendarza

**Test 5 \- Aktualizacja wydarzenia:**

Query: "Przesuń spotkanie z klientem z 14:00 na 16:00"

Oczekiwany rezultat: Zaktualizowany czas wydarzenia

### **Weryfikacja wyników:**

1. Sprawdź poprawność tworzenia wydarzeń w Google Calendar  
2. Zweryfikuj czy zaproszenia są wysyłane do uczestników  
3. Upewnij się, że harmonogram jest prawidłowo pobierany  
4. Potwierdź że zmiany są rzeczywiście zapisywane

## **❗ Rozwiązywanie Problemów**

### **Częste błędy:**

**Google Calendar API nie działa:**

1. Sprawdź czy Calendar API jest włączone w Google Cloud  
2. Zweryfikuj OAuth2 credentials i scopes  
3. Upewnij się, że redirect URLs są poprawne  
4. Sprawdź czy Twój email ma dostęp do kalendarza

**OpenAI API timeout:**

1. Zweryfikuj klucz API i limity konta  
2. Sprawdź czy masz dostęp do GPT-4o  
3. Upewnij się, że masz wystarczające kredyty

**Agent nie rozumie dat/czasów:**

1. Sprawdź czy system message zawiera aktualną datę ({{ $now }})  
2. Używaj jasnych formatów dat w poleceniach  
3. Testuj różne formaty czasowe

**Wydarzenia nie są tworzone:**

1. Sprawdź uprawnienia kalendarza  
2. Zweryfikuj czy email kalendarza jest poprawny  
3. Upewnij się, że czas rozpoczęcia jest w przyszłości

### **Wskazówki optymalizacji:**

1. Używaj precyzyjnych dat i czasów  
2. Testuj różne formaty poleceń  
3. Monitoruj koszty API calls  
4. Regularnie sprawdzaj synchronizację z kalendarzem

## **💡 Tips & Best Practices**

### **Optymalne użytkowanie:**

1. **Clear timing**: Używaj precyzyjnych dat i godzin (np. "jutro o 14:30")  
2. **Complete info**: Podawaj pełne informacje o wydarzeniu (tytuł, czas, uczestników)  
3. **Polish language**: Agent najlepiej działa z polskimi poleceniami  
4. **Natural speech**: Używaj naturalnego języka zamiast komend

### **Calendar management:**

1. **Time zones**: Upewnij się, że strefa czasowa jest poprawnie skonfigurowana  
2. **Recurring events**: Dla powtarzających się wydarzeń użyj odpowiednich opcji  
3. **Conflict detection**: System automatycznie wykrywa konflikty czasowe  
4. **Privacy**: Sprawdź ustawienia prywatności kalendarza

### **Security best practices:**

1. **API keys**: Regularnie rotuj klucze dostępu  
2. **OAuth2**: Monitoruj uprawnienia Calendar API  
3. **Calendar access**: Ogranicz dostęp do niezbędnych kalendarzów  
4. **Data privacy**: Uważaj na wrażliwe informacje w wydarzeniach

### **Performance optimization:**

1. **Batch operations**: Grupuj podobne operacje kalendarzowe  
2. **Date ranges**: Używaj konkretnych zakresów dat dla pobierania  
3. **Cache frequently used data**: Cache popularnych wydarzeń  
4. **Rate limiting**: Przestrzegaj limitów Google Calendar API

## **🚀 Rozszerzenia i Następne Kroki**

### **Możliwe integracje:**

1. **Email integration** \- Automatyczne tworzenie wydarzeń z emaili  
2. **Team calendars** \- Zarządzanie kalendarzami zespołowymi  
3. **Meeting rooms** \- Rezerwacja sal konferencyjnych  
4. **Video conferencing** \- Automatyczne linki Zoom/Meet  
5. **CRM integration** \- Sync z systemami CRM (Salesforce, HubSpot)

### **Advanced Features:**

1. **Smart scheduling** \- AI-powered znajdowanie optymalnych terminów  
2. **Conflict resolution** \- Automatyczne rozwiązywanie konfliktów czasowych  
3. **Meeting preparation** \- Automatyczne przygotowanie materiałów  
4. **Follow-up automation** \- Przypomnienia i follow-up po spotkaniach  
5. **Analytics** \- Analiza wykorzystania czasu i produktywności

### **Business automation:**

1. **Client onboarding** \- Automatyczne planowanie procesów wdrożeniowych  
2. **Project milestones** \- Tworzenie wydarzeń dla kamieni milowych  
3. **Recurring meetings** \- Automatyczne planowanie regularnych spotkań  
4. **Deadline tracking** \- Przypomnienia o terminach projektów  
5. **Resource allocation** \- Planowanie zasobów ludzkich

### **Multi-platform expansion:**

1. **Mobile integration** \- Sync z aplikacjami mobilnymi  
2. **Slack/Teams** \- Integracja z narzędziami komunikacji  
3. **Project management** \- Sync z Asana, Trello, Monday  
4. **Time tracking** \- Integracja z narzędziami śledzenia czasu  
5. **Voice assistants** \- Głosowe zarządzanie kalendarzem

### **Enterprise features:**

1. **Multi-calendar support** \- Zarządzanie wieloma kalendarzami  
2. **Team coordination** \- Znajdowanie wspólnych terminów zespołu  
3. **Compliance tracking** \- Audit trail dla wydarzeń biznesowych  
4. **Custom workflows** \- Dedykowane procesy dla różnych typów spotkań  
5. **Advanced permissions** \- Granularne uprawnienia dostępu

**Kategoria**: Calendar Management & Personal Assistant | **Złożoność**: Średni | **Wartość biznesowa**: 8/10

💡 **Potrzebujesz pomocy?** Załóż nowy wątek w społeczności dotyczący tego workflow'a aby uzyskać wsparcie od innych użytkowników.

Resources  
agent-kalendarz.json

—--------

Chmara Agentów \- Instrukcja Konfiguracji

# 

## **📋 Przegląd**

Workflow **Chmara Agentów** o poziomie złożoności: **Ekspert**.

Ten workflow implementuje zaawansowany system chmary agentów AI (agent swarm) z jednym głównym agentem koordynującym pracę sześciu specjalistycznych sub-agentów. System obsługuje kompleksowe zadania poprzez Telegram z obsługą wiadomości głosowych, automatycznym logowaniem działań do Google Sheets oraz inteligentnym routingiem zadań do odpowiednich agentów specjalistycznych (Email, Calendar, Contact, Web Research, YouTube, Content Creation).

## **🎯 Zastosowania Biznesowe**

1. **Enterprise Assistant** \- Kompleksowy asystent dla dużych organizacji  
2. **Multi-Domain Automation** \- Automatyzacja w wielu domenach jednocześnie  
3. **Business Intelligence Hub** \- Centralne zarządzanie wszystkimi procesami biznesowymi  
4. **Executive Support** \- Zaawansowane wsparcie dla kadry zarządzającej  
5. **Team Coordination** \- Koordynacja zespołów i projektów przez jeden interfejs  
6. **Digital Transformation** \- Digitalizacja procesów biznesowych

## **⚙️ Wymagania**

1. ✅ Działająca instancja n8n (v1.0+)  
2. ✅ Uprawnienia administratora n8n  
3. 📱 **Telegram Bot** \- Interfejs komunikacji z systemem  
4. 🤖 **OpenRouter API** \- Dostęp do GPT-4.1 mini dla wszystkich agentów  
5. 🤖 **OpenAI API** \- Whisper do transkrypcji głosu  
6. 📧 **Gmail OAuth2** \- Pełne zarządzanie pocztą  
7. 📅 **Google Calendar API** \- Zarządzanie kalendarzem  
8. 📊 **Airtable API** \- Baza danych kontaktów  
9. 📑 **Google Sheets API** \- Logowanie działań i zarządzanie pomysłami  
10. 🌐 **Tavily API** \- Szybkie wyszukiwanie w internecie  
11. 🔍 **Perplexity API** \- Głębokie badania i analizy  
12. 🌤️ **OpenWeatherMap API** \- Dane pogodowe  
13. 🎬 **Apify API** \- Scraping YouTube dla analizy wideo

## **🔧 Konfiguracja Krok po Kroku**

### **1\. Przygotowanie Telegram Bot**

1. **Utwórz Telegram Bot:**  
2. Wyszukaj @BotFather w Telegram  
3. Użyj komendy `/newbot`  
4. Wybierz nazwę i username bota  
5. Zapisz token API  
6. **Konfiguracja webhook:**  
7. Dodaj token do n8n credentials  
8. Aktywuj workflow  
9. Telegram automatycznie skonfiguruje webhook

### **2\. Konfiguracja Głównych API**

1. **OpenRouter API:**  
2. Zarejestruj się na [openrouter.ai](http://openrouter.ai)  
3. Wygeneruj API key  
4. Sprawdź dostęp do GPT-4.1 mini  
5. Konfiguracja dla 6 instancji modelu  
6. **OpenAI API:**  
7. [Platform.openai.com](http://Platform.openai.com)  
8. API key z dostępem do Whisper  
9. Sprawdź limity transkrypcji audio

### **3\. Konfiguracja Integracji Email i Calendar**

1. **Gmail OAuth2:**  
2. Google Cloud Console  
3. Włącz Gmail API  
4. Utwórz OAuth2 credentials  
5. Dodaj scopes: mail, compose, read, modify  
6. Autoryzuj dostęp w n8n  
7. **Google Calendar OAuth2:**  
8. Włącz Calendar API w tym samym projekcie  
9. Dodaj scopes: calendar read/write  
10. Zaktualizuj email w wszystkich Calendar nodes

### **4\. Konfiguracja Baz Danych**

1. **Airtable:**  
2. Utwórz bazę "Contacts" z polami: name, email, phoneNumber  
3. Wygeneruj Personal Access Token  
4. Zapisz Base ID i Table ID  
5. **Google Sheets:**  
6. Utwórz arkusz "Agent Logs" z kolumnami: Timestamp, Workflow, Input, Output, Actions, Tokens, Total Tokens  
7. Utwórz arkusz "Video Ideas" z kolumnami: Idea, Description  
8. Skonfiguruj OAuth2 dla Sheets API

### **5\. Konfiguracja Research APIs**

1. **Tavily API:**  
2. Zarejestruj się na [tavily.com](http://tavily.com)  
3. Wygeneruj API key  
4. Testuj basic search functionality  
5. **Perplexity API:**  
6. [Console.perplexity.ai](http://Console.perplexity.ai)  
7. API key z dostępem do Sonar model  
8. Sprawdź limity i pricing  
9. **OpenWeatherMap API:**  
10. [Openweathermap.org/api](http://Openweathermap.org/api)  
11. Free tier API key  
12. Test current weather endpoints

### **6\. Konfiguracja YouTube Scraping**

1. **Apify API:**  
2. Zarejestruj się na [apify.com](http://apify.com)  
3. Wygeneruj API token  
4. Zastąp "YOUR APIFY API KEY" w HTTP Request node  
5. Test YouTube scraper actor

### **7\. Import i Konfiguracja Workflow**

1. **Import workflow:**  
2. Otwórz n8n w przeglądarce  
3. Kliknij **"Import workflow"**  
4. Wybierz plik `Chmara-Agentow-1-workflow.json`  
5. Zatwierdź import  
6. **Aktualizacja Credentials:**  
7. Połącz wszystkie API keys z odpowiednimi nodes  
8. Zaktualizuj hardcoded emails na własne  
9. Ustaw właściwe Google Sheets IDs  
10. **Aktualizacja Personal Information:**  
11. Zmień "jaskielakowski@gmail.com" na swój email w Google Calendar nodes  
12. Zaktualizuj "Jas Airtable" na własną nazwę credentials  
13. Zastąp system message signature z "Jas." na własną

## **🧪 Testowanie**

### **Scenariusze testowe kompleksowe:**

**Test 1 \- Multi-agent Email Flow:**

Voice/Text: "Wyślij email do Jana Kowalskiego z prośbą o spotkanie jutro o 14:00"

Oczekiwany flow: Contact Agent → Calendar Agent → Email Agent → Gmail

Weryfikacja: Email wysłany, spotkanie utworzone w kalendarzu

**Test 2 \- Research z Weather:**

Voice/Text: "Sprawdź pogodę w Warszawie i znajdź najlepsze restauracje na lunch"

Oczekiwany flow: Web Agent → OpenWeatherMap \+ Perplexity/Tavily

Weryfikacja: Aktualne dane pogody \+ rekomendacje restauracji

**Test 3 \- YouTube Content Strategy:**

Voice/Text: "Znajdź popularne filmy o AI i dodaj pomysł na nowy film"

Oczekiwany flow: YouTube Agent → Apify scraper → Google Sheets

Weryfikacja: Lista popularnych filmów \+ nowy pomysł w arkuszu

**Test 4 \- Complex Multi-Step:**

Voice/Text: "Zaplanuj wyjazd służbowy: sprawdź pogodę, znajdź hotel, wyślij info zespołowi"

Oczekiwany flow: Web Agent → Contact Agent → Email Agent

Weryfikacja: Informacje pogodowe, rekomendacje hoteli, email do zespołu

### **Weryfikacja systemu:**

1. Sprawdź czy wszystkie 6 agentów odpowiadają  
2. Zweryfikuj action logging w Google Sheets  
3. Upewnij się, że voice transcription działa  
4. Potwierdź memory persistence między rozmowami  
5. Test error handling i fallback responses

## **❗ Rozwiązywanie Problemów**

### **Częste błędy:**

**Agent nie wybiera właściwego sub-agenta:**

1. Sprawdź system message głównego agenta  
2. Zweryfikuj tool descriptions dla każdego agenta  
3. Upewnij się, że Think tool jest używany do weryfikacji  
4. Test z bardziej specyficznymi poleceniami

**Voice transcription nie działa:**

1. Sprawdź OpenAI API key i dostęp do Whisper  
2. Zweryfikuj czy Telegram webhook otrzymuje voice messages  
3. Test z różnymi formatami audio  
4. Sprawdź file size limits

**Google Sheets logging fails:**

1. Zweryfikuj OAuth2 permissions dla Sheets  
2. Sprawdź czy arkusze mają właściwe kolumny  
3. Upewnij się, że Clean Up node poprawnie parsuje dane  
4. Test z manual execution przed automation

**Sub-agents timeout:**

1. Sprawdź individual API limits dla każdego serwisu  
2. Zweryfikuj network connectivity  
3. Zwiększ timeout values w n8n settings  
4. Monitor rate limiting across all services

**Memory not persisting:**

1. Sprawdź session key configuration (chat.id)  
2. Zweryfikuj Buffer Window Memory settings  
3. Test conversation continuity  
4. Clear memory cache jeśli potrzeba

### **Wskazówki optymalizacji:**

1. Monitoruj koszty API calls dla wszystkich 8+ serwisów  
2. Używaj specific, clear instructions dla lepszego routing  
3. Regularnie review action logs dla performance insights  
4. Implementuj retry logic dla critical operations

## **💡 Tips & Best Practices**

### **Agent coordination:**

1. **Clear instructions**: Używaj precyzyjnych poleceń dla lepszego routing  
2. **Context preservation**: System pamięta poprzednie interakcje  
3. **Multi-step planning**: Opisuj złożone zadania krok po kroku  
4. **Error recovery**: System ma built-in error handling i retry logic

### **Performance optimization:**

1. **Token management**: Monitor total token usage across all agents  
2. **Parallel processing**: Sub-agents mogą działać równolegle  
3. **Memory efficiency**: Dostosuj window size dla optimal performance  
4. **Rate limiting**: Respect limits wszystkich integrated services

### **Business customization:**

1. **Brand alignment**: Dostosuj agent personalities do brand voice  
2. **Workflow triggers**: Rozszerz triggers beyond Telegram  
3. **Custom integrations**: Dodaj industry-specific tools i APIs  
4. **Access control**: Implementuj role-based permissions

### **Security considerations:**

1. **API security**: Secure storage wszystkich API keys  
2. **Data privacy**: Monitor sensitive information w logs  
3. **Access logging**: Track who access what through agents  
4. **Compliance**: Ensure GDPR/privacy compliance dla EU users

## **🚀 Rozszerzenia i Następne Kroki**

### **Możliwe integracje:**

1. **Enterprise systems** \- SAP, Salesforce, Oracle integration  
2. **Communication platforms** \- Slack, Teams, Discord bots  
3. **Document management** \- SharePoint, Notion, Confluence  
4. **Financial systems** \- Stripe, PayPal, banking APIs  
5. **Marketing automation** \- HubSpot, Mailchimp, social media

### **Advanced Features:**

1. **Multi-language support** \- Global deployment capabilities  
2. **Voice responses** \- TTS integration dla audio replies  
3. **Image processing** \- OCR, image analysis capabilities  
4. **Video analysis** \- Automated video content processing  
5. **Predictive analytics** \- ML-powered insights i recommendations

### **Scaling capabilities:**

1. **Multi-tenant** \- Support dla multiple organizations  
2. **Load balancing** \- Distributed agent processing  
3. **High availability** \- Failover i redundancy  
4. **Global deployment** \- Multi-region agent swarms  
5. **Enterprise analytics** \- Advanced reporting i monitoring

### **AI Enhancements:**

1. **Fine-tuned models** \- Custom models dla specific domains  
2. **Agent learning** \- Continuous improvement from interactions  
3. **Emotional intelligence** \- Sentiment-aware responses  
4. **Contextual adaptation** \- Dynamic behavior based on context  
5. **Autonomous operations** \- Self-managing agent workflows

### **Business intelligence:**

1. **Performance metrics** \- Comprehensive agent performance tracking  
2. **ROI analysis** \- Business value measurement  
3. **User behavior analytics** \- Usage pattern analysis  
4. **Predictive maintenance** \- Proactive system optimization  
5. **Custom dashboards** \- Executive reporting interfaces

**Kategoria**: Multi-Agent Systems & Enterprise Automation | **Złożoność**: Ekspert | **Wartość biznesowa**: 10/10

💡 **Potrzebujesz pomocy?** Załóż nowy wątek w społeczności dotyczący tego workflow'a aby uzyskać wsparcie od innych użytkowników.

Resources  
Chmara-Agentow-1-workflow.json

—-------

Agent Budujący Agentów

# 

## **📋 Przegląd**

Workflow **Agent Budujący Agentów** o poziomie złożoności: **Ekspert**.

Ten workflow implementuje zaawansowanego agenta AI, który potrafi automatycznie generować i tworzyć nowe workflow n8n na podstawie opisów w języku naturalnym. System wykorzystuje Claude Opus 4 z funkcją myślenia, dokumentację n8n z Google Drive oraz n8n API do automatycznego tworzenia funkcjonalnych workflow. Agent posiada dwa tryby pracy: interaktywny chat oraz integrację jako sub-workflow w większych systemach automatyzacji.

## **🎯 Zastosowania Biznesowe**

1. **Rapid Prototyping** \- Szybkie tworzenie prototypów automatyzacji biznesowej  
2. **No-Code Development** \- Generowanie workflow bez znajomości n8n  
3. **Workflow Templates** \- Automatyczne tworzenie szablonów dla zespołów  
4. **Business Process Automation** \- Przekształcanie opisów procesów w działające automatyzacje  
5. **Training & Education** \- Narzędzie do nauki n8n przez praktyczne przykłady  
6. **Consulting Services** \- Szybkie dostarczanie rozwiązań automatyzacji klientom

## **⚙️ Wymagania**

1. ✅ Działająca instancja n8n (v1.0+) z dostępem do API  
2. ✅ Uprawnienia administratora n8n  
3. 🤖 **Anthropic API Key** \- Dostęp do Claude Opus 4 z funkcją thinking  
4. 🤖 **OpenRouter API Key** \- GPT-4 mini dla głównego agenta  
5. 🔑 **n8n API Key** \- Dostęp do n8n API dla tworzenia workflow  
6. 📚 **Google Drive API** \- Dostęp do dokumentacji n8n  
7. 🌐 **Chat Interface** \- Opcjonalny chat trigger dla interaktywnego użycia  
8. 📝 **Google Doc** \- Kopia dokumentacji n8n do customizacji

## **🔧 Konfiguracja Krok po Kroku**

### **1\. Przygotowanie API Keys**

1. **Anthropic API (Claude Opus 4):**  
2. Zarejestruj się na console.anthropic.com  
3. Wygeneruj API key z dostępem do Claude Opus 4  
4. Upewnij się o włączonej funkcji "thinking"  
5. Sprawdź limity i budżet myślenia (thinking budget)  
6. **OpenRouter API:**  
7. Utwórz konto na openrouter.ai  
8. Wygeneruj API key  
9. Sprawdź dostęp do GPT-4 mini  
10. Zanotuj monthly limits  
11. **n8n API Key:**  
12. W swojej instancji n8n: Settings → n8n API  
13. Wygeneruj API key z uprawnieniami workflow:create  
14. Zanotuj URL swojej instancji n8n  
15. Sprawdź permissions dla API calls

### **2\. Konfiguracja Google Drive i Dokumentacji**

1. **Google Drive Setup:**  
2. Google Cloud Console → Enable Drive API  
3. Utwórz OAuth2 credentials  
4. Dodaj scopes: `https://www.googleapis.com/auth/drive.readonly`  
5. **n8n Documentation:**  
6. Skopiuj [Google Doc z dokumentacją n8n](https://docs.google.com/document/d/1TiRusVo4DbbANwAr7I0GUGDZY3pmEmHZy3k66mRxLCg/edit?usp=sharing)  
7. Dostosuj dokumentację do swoich potrzeb  
8. Zapisz ID dokumentu z URL  
9. Upewnij się o uprawnieniach read dla service account

### **3\. Import i Konfiguracja Workflow**

1. **Import workflow:**  
2. Otwórz n8n w przeglądarce  
3. Kliknij **"Import workflow"**  
4. Wybierz plik `agent-budujacy-agentow.json`  
5. Zatwierdź import  
6. **Konfiguracja Credentials:**  
7. **Anthropic API**: Dodaj klucz do Claude Opus 4  
8. **OpenRouter API**: Dodaj klucz do GPT-4 mini  
9. **n8n API**: Dodaj klucz z uprawnieniami create  
10. **Google Drive OAuth2**: Autoryzuj dostęp do Drive  
11. **Aktualizacja Workflow Link:**  
12. W węźle "Workflow Link" zamień `YOUR N8N DOMAIN`  
13. Ustaw na URL swojej instancji n8n  
14. Format: `https://twoja-domena.com/workflow/{{ $json.id }}`  
15. **Aktualizacja Google Doc ID:**  
16. W węźle "Get n8n Docs" zaktualizuj fileId  
17. Wstaw ID swojej kopii dokumentacji n8n

### **4\. Konfiguracja Trybów Pracy**

**Tryb 1: Interaktywny Chat**

1. Zostaw "When chat message received" jako główny trigger  
2. Testuj bezpośrednio przez chat interface  
3. Idealne do eksperymentowania i uczenia się

**Tryb 2: Sub-Workflow Integration**

1. Użyj "When Executed by Another Workflow" trigger  
2. Integruj z większymi systemami automatyzacji  
3. Format input: `{"query": "opis workflow do utworzenia"}`

### **5\. Dostosowanie System Messages**

**n8n Developer Agent:**

\# Overview

Your job is to take the incoming query and pass that to the "Developer Tool"

tool EXACTLY AS YOU RECEIVED IT. Don't change any of the wording.

Once you receive a workflow link back from the Developer Tool, present it

to the human as a clickable link that says "View your finished workflow"

**n8n Builder Agent:**

You are an expert AI automation developer specializing in building

workflows for n8n. Your job is to translate a human's natural language

request into a fully functional n8n workflow JSON.

Your output should only be the final JSON of the full workflow.

Your output must start with a { and must end with a }.

## **🧪 Testowanie**

### **Scenariusze testowe:**

**Test 1 \- Prosty workflow:**

Input: "Create a workflow that sends a daily email reminder at 9 AM"

Oczekiwany rezultat:

\- Schedule Trigger (9 AM daily)

\- Email node z Gmail/SMTP

\- Proper connections

\- Descriptive sticky notes

**Test 2 \- API Integration:**

Input: "Build a workflow that gets weather data and posts to Slack"

Oczekiwany rezultat:

\- HTTP Request do weather API

\- Data transformation

\- Slack node z message formatting

\- Error handling

**Test 3 \- Complex automation:**

Input: "Create a customer onboarding workflow with email sequence and CRM updates"

Oczekiwany rezultat:

\- Multi-step workflow z triggers

\- Email sequence logic

\- CRM integration nodes

\- Conditional routing

### **Weryfikacja jakości:**

1. Sprawdź czy wygenerowany JSON jest valid  
2. Zweryfikuj czy workflow da się zaimportować do n8n  
3. Upewnij się, że connections są prawidłowe  
4. Potwierdź obecność sticky notes z wyjaśnieniami

## **❗ Rozwiązywanie Problemów**

### **Częste błędy:**

**Claude Opus 4 nie ma dostępu do thinking:**

1. Sprawdź czy masz dostęp do Claude Opus 4  
2. Zweryfikuj czy thinking feature jest enabled  
3. Upewnij się o wystarczającym thinking budget  
4. Sprawdź monthly limits w Anthropic Console

**n8n API nie tworzy workflow:**

1. Sprawdź poprawność n8n API key  
2. Zweryfikuj uprawnienia create workflow  
3. Upewnij się, że n8n API jest włączone w instancji  
4. Sprawdź format JSON output z agenta

**Google Drive nie pobiera dokumentacji:**

1. Zweryfikuj OAuth2 credentials Google Drive  
2. Sprawdź czy document ID jest poprawne  
3. Upewnij się o uprawnieniach read do dokumentu  
4. Sprawdź czy dokument jest publicly accessible lub shared

**Generated JSON nie jest valid:**

1. Sprawdź system message w n8n Builder  
2. Zweryfikuj czy agent zwraca pure JSON  
3. Upewnij się, że nie ma markdown formatting  
4. Test z prostszymi requests na początku

### **Wskazówki optymalizacji:**

1. Używaj jasnych, specific requests  
2. Monitoruj koszty API calls (szczególnie Claude Opus 4\)  
3. Regularnie aktualizuj dokumentację n8n  
4. Test workflow quality przed automatic creation

## **💡 Tips & Best Practices**

### **Request optimization:**

1. **Specific requirements**: Im bardziej szczegółowy opis, tym lepszy output  
2. **Technical details**: Include specific node types i integrations  
3. **Error handling**: Mention desired error handling approach  
4. **Credentials**: Specify which credentials będą potrzebne

### **Quality assurance:**

1. **JSON validation**: Always validate generated JSON before creation  
2. **Manual review**: Review complex workflow przed automatic creation  
3. **Testing protocol**: Establish testing procedures dla generated workflow  
4. **Documentation**: Maintain library of successful patterns

### **Performance optimization:**

1. **Thinking budget**: Monitor Claude Opus 4 thinking usage  
2. **API costs**: Track usage across all services  
3. **Documentation updates**: Keep n8n docs current z latest features  
4. **Caching**: Consider caching frequent patterns

### **Security considerations:**

1. **API keys**: Secure storage of all API credentials  
2. **Permissions**: Minimal required permissions dla n8n API  
3. **Generated code**: Review generated workflow dla security issues  
4. **Access control**: Limit who can use the agent

## **🚀 Rozszerzenia i Następne Kroki**

### **Możliwe integracje:**

1. **Version control** \- Git integration dla workflow versioning  
2. **Testing framework** \- Automated testing generated workflow  
3. **Template library** \- Pre-built patterns i templates  
4. **Multi-instance** \- Support dla multiple n8n instances  
5. **Approval workflow** \- Review process przed creation

### **Advanced Features:**

1. **Custom node support** \- Integration z community nodes  
2. **Multi-language** \- Support dla różnych języków w requests  
3. **Workflow optimization** \- Performance analysis i suggestions  
4. **Dependency management** \- Automatic credential setup  
5. **Batch creation** \- Multiple workflow generation

### **Business automation:**

1. **Client portals** \- Self-service workflow generation dla klientów  
2. **Template marketplace** \- Monetization generated templates  
3. **Consulting automation** \- Accelerated delivery dla consulting  
4. **Training programs** \- Educational workflow generation  
5. **Quality metrics** \- Success rate tracking i improvement

### **Enterprise capabilities:**

1. **Team collaboration** \- Multi-user workflow development  
2. **Governance** \- Approval processes i compliance  
3. **Analytics** \- Usage patterns i optimization insights  
4. **Custom documentation** \- Organization-specific knowledge base  
5. **Enterprise security** \- Advanced security i audit trails

### **AI Enhancements:**

1. **Learning from feedback** \- Improve based on user corrections  
2. **Pattern recognition** \- Identify common automation patterns  
3. **Predictive suggestions** \- Suggest workflow improvements  
4. **Natural language understanding** \- Better interpretation complex requests  
5. **Multi-modal input** \- Support dla diagrams i visual inputs

**Kategoria**: AI-Powered Development & Workflow Generation | **Złożoność**: Ekspert | **Wartość biznesowa**: 10/10

💡 **Potrzebujesz pomocy?** Załóż nowy wątek w społeczności dotyczący tego workflow'a aby uzyskać wsparcie od innych użytkowników.

Resources  
agent-budujacy-agentow.json

—-------

Agent Asystent Personalny \- Instrukcja

# 

## **📋 Przegląd**

Workflow **Agent Asystent Personalny** o poziomie złożoności: **Zaawansowany**.

Ten workflow implementuje kompletnego inteligentnego asystenta osobistego, który łączy w sobie funkcjonalności zarządzania emailami, kalendarzem, kontaktami oraz tworzenia treści. System wykorzystuje architekturę wieloagentową, gdzie główny asystent deleguje zadania do specjalistycznych sub-agentów, oferując kompleksową automatyzację codziennych zadań biznesowych i osobistych przez interfejs Telegram z obsługą wiadomości głosowych.

## **🎯 Zastosowania Biznesowe**

1. **Executive Assistant** \- Kompleksowy asystent dla kadry zarządzającej  
2. **Business Automation Hub** \- Centralne miejsce zarządzania wszystkimi zadaniami biznesowymi  
3. **Team Coordination** \- Koordynacja zespołów przez jeden interfejs  
4. **Client Communication** \- Zarządzanie komunikacją z klientami i partnerami  
5. **Content Management** \- Automatyzacja tworzenia i publikacji treści  
6. **Personal Productivity** \- Zwiększenie osobistej produktywności i organizacji

## **⚙️ Wymagania**

1. ✅ Działająca instancja n8n (v1.0+)  
2. ✅ Uprawnienia do konfiguracji workflow'ów  
3. 🤖 **OpenRouter API** \- Dostęp do różnych modeli AI  
4. 🤖 **OpenAI API** \- GPT-4o dla transkrypcji głosu  
5. 📧 **Gmail OAuth2** \- Zarządzanie emailami  
6. 📅 **Google Calendar API** \- Zarządzanie kalendarzem  
7. 📊 **Airtable API** \- Baza danych kontaktów  
8. 🌐 **Tavily API** \- Wyszukiwanie w internecie  
9. 📱 **Telegram Bot** \- Interfejs komunikacji z asystentem  
10. 🔄 **Sub-workflows** \- 4 dodatkowe workflow (Email, Calendar, Contact, Content Creator)

## **🔧 Konfiguracja Krok po Kroku**

### **1\. Przygotowanie Sub-Agents**

Przed konfiguracją głównego asystenta, musisz skonfigurować 4 sub-agentów:

1. **Email Agent** \- Zarządzanie pocztą Gmail  
2. **Calendar Agent** \- Zarządzanie kalendarzem Google  
3. **Contact Agent** \- Zarządzanie kontaktami w Airtable  
4. **Content Creator Agent** \- Tworzenie treści blogowych

### **2\. Konfiguracja API Keys**

1. **OpenRouter API:**  
2. Zarejestruj się na [openrouter.ai](http://openrouter.ai)  
3. Wygeneruj API key  
4. Wybierz preferowany model AI  
5. **OpenAI API:**  
6. [Platform.openai.com](http://Platform.openai.com)  
7. API key z dostępem do Whisper (audio transcription)  
8. Upewnij się o wystarczających kredytach  
9. **Tavily API:**  
10. Konto na [tavily.com](http://tavily.com)  
11. API key dla web search  
12. Sprawdź limity darmowego planu

### **3\. Konfiguracja Telegram Bot**

1. **Utwórz Telegram Bot:**  
2. Wyszukaj @BotFather w Telegram  
3. Użyj komendy `/newbot`  
4. Wybierz nazwę i username bota  
5. Zapisz token API  
6. **Skonfiguruj webhook:**  
7. Dodaj token do n8n credentials  
8. Aktywuj workflow  
9. Telegram automatycznie skonfiguruje webhook

### **4\. Import i Konfiguracja Workflow**

1. **Import głównego workflow:**  
2. Otwórz n8n w przeglądarce  
3. Kliknij **"Import workflow"**  
4. Wybierz plik `agent-asystent-personalny.json`  
5. Zatwierdź import  
6. **Konfiguracja Credentials:**  
7. **Telegram API**: Dodaj token bota  
8. **OpenRouter API**: Dodaj klucz API  
9. **OpenAI API**: Dodaj klucz dla transkrypcji  
10. **Tavily API**: Usuń hardcoded API key i dodaj credentials  
11. **Linkowanie Sub-Workflows:**  
12. Dla każdego Tool Workflow węzła ustaw odpowiedni workflow ID  
13. Email Agent → ID workflow agenta email  
14. Calendar Agent → ID workflow agenta kalendarz  
15. Contact Agent → ID workflow agenta kontakty  
16. Content Creator Agent → ID workflow twórcy treści

### **5\. Dostosowanie System Message**

W węźle "Ultimate Assistant" możesz dostosować zachowanie głównego agenta:

\# Overview

You are the ultimate personal assistant. Your job is to send the user's query

to the correct tool. You should never be writing emails, or creating summaries,

you just need to call the correct tool.

\#\# Tools

\- Think: Use this to think deeply or if you get stuck

\- emailAgent: Use this tool to take action in email

\- calendarAgent: Use this tool to take action in calendar

\- contactAgent: Use this tool to get, update, or add contacts

\- contentCreator: Use this tool to create blog posts

\- Tavily: Use this tool to search the web

\#\# Rules

\- Some actions require you to look up contact information first

\- Always use the "Think" tool to verify you took the right steps

Current date/time: {{ $now }}

### **6\. Testowanie Voice Recognition**

1. **Test transkrypcji:**  
2. Wyślij wiadomość głosową do bota  
3. Sprawdź czy Whisper poprawnie transkrybuje  
4. Zweryfikuj jakość rozpoznawania polskiego języka  
5. **Test delegacji:**  
6. "Wyślij email do Jana Kowalskiego"  
7. Sprawdź czy system pobiera kontakt i wysyła do Email Agent

## **🧪 Testowanie**

### **Scenariusze testowe kompleksowe:**

**Test 1 \- Email z kontaktem:**

Voice/Text: "Wyślij email do Anny Nowak z pytaniem o status projektu"

Oczekiwany flow: Contact Agent → Email Agent → Gmail

**Test 2 \- Kalendarz z uczestnikiem:**

Voice/Text: "Zaplanuj spotkanie z zespołem jutro o 14:00"

Oczekiwany flow: Contact Agent → Calendar Agent → Google Calendar

**Test 3 \- Wyszukiwanie i content:**

Voice/Text: "Znajdź najnowsze trendy AI i napisz post na blog"

Oczekiwany flow: Tavily → Content Creator Agent

**Test 4 \- Multi-step task:**

Voice/Text: "Sprawdź mój harmonogram na jutro i wyślij podsumowanie zespołowi"

Oczekiwany flow: Calendar Agent → Contact Agent → Email Agent

### **Weryfikacja funkcjonalności:**

1. Sprawdź czy wszystkie sub-agenci odpowiadają  
2. Zweryfikuj czy Telegram wysyła odpowiedzi  
3. Upewnij się, że memory zachowuje kontekst konwersacji  
4. Potwierdź że voice messages są transkrybowane

## **❗ Rozwiązywanie Problemów**

### **Częste błędy:**

**Sub-workflows nie odpowiadają:**

1. Sprawdź czy wszystkie 4 sub-workflows są aktywne  
2. Zweryfikuj poprawność workflow IDs w Tool Workflow węzłach  
3. Upewnij się, że każdy sub-agent ma skonfigurowane credentials

**Voice transcription nie działa:**

1. Sprawdź klucz OpenAI API i dostęp do Whisper  
2. Zweryfikuj czy audio files są poprawnie pobierane z Telegram  
3. Sprawdź formaty audio obsługiwane przez Whisper

**Telegram nie odpowiada:**

1. Zweryfikuj token Telegram Bot  
2. Sprawdź czy webhook jest aktywny  
3. Upewnij się, że bot ma uprawnienia do wysyłania wiadomości

**Memory nie działa:**

1. Sprawdź konfigurację session ID (chat.id)  
2. Zweryfikuj czy Simple Memory jest podłączona do głównego agenta  
3. Sprawdź limity pamięci i okno kontekstu

### **Wskazówki optymalizacji:**

1. Monitoruj koszty API calls dla wszystkich usług  
2. Dostosuj window size dla memory według potrzeb  
3. Testuj z różnymi modelami w OpenRouter  
4. Regularnie sprawdzaj logi execution dla debugowania

## **💡 Tips & Best Practices**

### **Optymalne użytkowanie:**

1. **Clear instructions**: Używaj jasnych, konkretnych poleceń  
2. **Context awareness**: Asystent pamięta poprzednie rozmowy  
3. **Voice quality**: Mów wyraźnie dla lepszej transkrypcji  
4. **Multi-step tasks**: Opisuj złożone zadania krok po kroku

### **Security best practices:**

1. **API keys rotation**: Regularnie zmieniaj klucze dostępu  
2. **Bot permissions**: Ogranicz dostęp bota tylko do niezbędnych funkcji  
3. **Data privacy**: Uważaj na wrażliwe informacje w rozmowach  
4. **Access control**: Kontroluj kto ma dostęp do bota

### **Performance optimization:**

1. **Model selection**: Wybierz optymalny model w OpenRouter dla swoich potrzeb  
2. **Memory management**: Dostosuj rozmiar okna pamięci  
3. **Parallel processing**: Sub-agenci działają równolegle dla lepszej wydajności  
4. **Error handling**: Implementuj graceful fallbacks dla failed operations

### **Business customization:**

1. **Custom workflows**: Dodaj własne sub-agenty dla specyficznych potrzeb  
2. **Brand voice**: Dostosuj tone of voice w system messages  
3. **Integration expansion**: Połącz z dodatkowymi narzędziami biznesowymi  
4. **Analytics**: Śledź usage patterns i optymalizuj workflow

## **🚀 Rozszerzenia i Następne Kroki**

### **Możliwe integracje:**

1. **CRM systems** \- Salesforce, HubSpot integration  
2. **Project management** \- Asana, Trello, [Monday.com](http://Monday.com)  
3. **Document management** \- Google Drive, Notion, SharePoint  
4. **Communication tools** \- Slack, Microsoft Teams, Discord  
5. **E-commerce** \- Shopify, WooCommerce dla business operations

### **Advanced Features:**

1. **Multi-language support** \- Obsługa różnych języków w rozmowach  
2. **Voice cloning** \- Personalizowane odpowiedzi głosowe  
3. **Image analysis** \- OCR i analiza dokumentów przesyłanych do bota  
4. **Video processing** \- Analiza i transkrypcja wideo materials  
5. **Smart scheduling** \- AI-powered optimization terminów

### **Enterprise capabilities:**

1. **Team management** \- Wieloużytkownikowa obsługa z role-based access  
2. **Workflow orchestration** \- Złożone automation chains  
3. **Analytics dashboard** \- Metryki produktywności i usage analytics  
4. **Custom integrations** \- API dla połączenia z proprietary systems  
5. **Compliance features** \- Audit trails i data governance

### **AI Enhancements:**

1. **Predictive tasks** \- Przewidywanie potrzeb użytkownika  
2. **Smart prioritization** \- Automatyczne ustalanie priorytetów zadań  
3. **Context learning** \- AI uczące się preferencji użytkownika  
4. **Proactive assistance** \- Sugerowanie działań przed zapytaniem  
5. **Sentiment analysis** \- Dostosowanie stylu komunikacji do nastroju

### **Mobile & Multi-platform:**

1. **WhatsApp integration** \- Obsługa przez WhatsApp Business  
2. **Voice assistants** \- Integracja z Alexa, Google Assistant  
3. **Mobile app** \- Dedykowana aplikacja z native features  
4. **Web interface** \- Browser-based dashboard dla zarządzania  
5. **API exposure** \- Udostępnienie funkcji przez REST API

**Kategoria**: Personal Assistant & Multi-Agent Orchestration | **Złożoność**: Zaawansowany | **Wartość biznesowa**: 10/10

💡 **Potrzebujesz pomocy?** Załóż nowy wątek w społeczności dotyczący tego workflow'a aby uzyskać wsparcie od innych użytkowników.

Resources  
agent-asystent-personalny.json

—-------

Agent Głosowy Biura Podróży \- Instrukcja

# 

## **📋 Przegląd**

Workflow **Agent Głosowy Biura Podróży** o poziomie złożoności: **Zaawansowany**.

Ten workflow implementuje kompletny system automatycznego biura podróży, który na podstawie danych wejściowych (miejsce wyjazdu, cel, daty, liczba podróżnych, preferencje) automatycznie wyszukuje loty, hotele i aktywności, a następnie tworzy profesjonalny plan podróży w formacie HTML i wysyła go emailem. System integruje SerpAPI dla lotów i hoteli, Tavily dla aktywności oraz Claude 3.5 do generowania atrakcyjnych planów podróży.

## **🎯 Zastosowania Biznesowe**

1. **Travel Agency Automation** \- Automatyzacja procesów biura podróży  
2. **Corporate Travel** \- Planowanie podróży służbowych dla firm  
3. **Personal Travel Assistant** \- Asystent osobisty do planowania wakacji  
4. **Hotel & Flight Booking** \- Automatyczne wyszukiwanie najlepszych ofert  
5. **Travel Consultation** \- Profesjonalne doradztwo podróżnicze  
6. **Multi-client Service** \- Obsługa wielu klientów jednocześnie

## **⚙️ Wymagania**

1. ✅ Działająca instancja n8n (v1.0+)  
2. ✅ Uprawnienia do konfiguracji workflow'ów  
3. 🔍 **SerpAPI Account** \- Dostęp do Google Flights i Google Hotels  
4. 🌐 **Tavily API Key** \- Wyszukiwanie aktywności i atrakcji  
5. 🤖 **OpenAI API Key** \- GPT-4o do przetwarzania dat i lokalizacji  
6. 🤖 **Anthropic API Key** \- Claude 3.5 do generowania emaili  
7. 📧 **Gmail OAuth2** \- Wysyłanie planów podróży emailem  
8. 🌐 **Webhook URL** \- Publiczny endpoint do przyjmowania requestów

## **🔧 Konfiguracja Krok po Kroku**

### **1\. Przygotowanie API Keys**

1. **SerpAPI:**  
2. Zarejestruj się na [serpapi.com](http://serpapi.com)  
3. Wygeneruj API key  
4. Sprawdź dostęp do Google Flights i Google Hotels engines  
5. Zanotuj miesięczne limity  
6. **Tavily API:**  
7. Utwórz konto na [tavily.com](http://tavily.com)  
8. Wygeneruj API key dla web search  
9. Sprawdź limity darmowego planu  
10. **OpenAI API:**  
11. Konto na [platform.openai.com](http://platform.openai.com)  
12. API key z dostępem do GPT-4o  
13. Upewnij się o wystarczających kredytach  
14. **Anthropic API:**  
15. Konto na [console.anthropic.com](http://console.anthropic.com)  
16. API key z dostępem do Claude 3.5 Sonnet  
17. Sprawdź limity usage

### **2\. Konfiguracja Gmail**

1. **Gmail OAuth2:**  
2. Google Cloud Console  
3. Włącz Gmail API  
4. Utwórz OAuth2 credentials  
5. Dodaj odpowiednie scopes  
6. Autoryzuj dostęp w n8n

### **3\. Import i Konfiguracja Workflow**

1. **Import workflow:**  
2. Otwórz n8n w przeglądarce  
3. Kliknij **"Import workflow"**  
4. Wybierz plik `agent-glosowy-biura-podrozy.json`  
5. Zatwierdź import  
6. **Konfiguracja Credentials:**  
7. **SerpAPI**: Dodaj API key jako HTTP Query Auth  
8. **Tavily**: Dodaj API key jako HTTP Header Auth  
9. **OpenAI API**: Dodaj klucz do GPT-4o  
10. **Anthropic API**: Dodaj klucz do Claude 3.5  
11. **Gmail OAuth2**: Autoryzuj dostęp  
12. **Konfiguracja Webhook:**  
13. Aktywuj workflow  
14. Skopiuj webhook URL z węzła "Webhook"  
15. Ustaw metodę POST na path "/travel"

### **4\. Testowanie API Connections**

1. **Test SerpAPI:**  
2. Sprawdź czy zwraca dane lotów i hoteli  
3. Zweryfikuj formaty odpowiedzi  
4. Upewnij się o poprawności query parameters  
5. **Test Tavily:**  
6. Sprawdź wyszukiwanie aktywności  
7. Zweryfikuj jakość wyników  
8. Upewnij się o działaniu filtrów

### **5\. Struktura Danych Wejściowych**

Webhook oczekuje JSON payload w formacie:

{

"origin": "New York",

"destination": "Paris",

"departure\_date": "2025-06-15",

"return\_date": "2025-06-22",

"travelers": 2,

"activities": "museums and culture",

"email": "customer@example.com"

}

## **🧪 Testowanie**

### **Scenariusz testowy podstawowy:**

**Request JSON:**

{

"origin": "Warsaw",

"destination": "Barcelona",

"departure\_date": "2025-07-10",

"return\_date": "2025-07-17",

"travelers": 2,

"activities": "beaches and nightlife",

"email": "test@example.com"

}

**Kroki weryfikacji:**

1. Wyślij POST request na webhook URL  
2. Sprawdź czy GPT-4o poprawnie konwertuje miasta na kody lotnisk  
3. Zweryfikuj czy SerpAPI zwraca dane lotów (WAW → BCN)  
4. Upewnij się, że Google Hotels znajdzie hotele w Barcelonie  
5. Sprawdź czy Tavily znajdzie aktywności związane z plażami  
6. Potwierdź otrzymanie emaila z planem podróży HTML

### **Oczekiwane wyniki:**

1. Email z profesjonalnym planem podróży w HTML  
2. 2 opcje lotów z cenami i szczegółami  
3. 3 opcje hoteli z obrazami i udogodnieniami  
4. Lista aktywności z linkami i opisami  
5. Wszystkie elementy z klikalнymi linkami

## **❗ Rozwiązywanie Problemów**

### **Częste błędy:**

**SerpAPI nie zwraca wyników:**

1. Sprawdź poprawność API key  
2. Zweryfikuj dostępność engine'ów (google\_flights, google\_hotels)  
3. Upewnij się, że kody lotnisk są poprawne  
4. Sprawdź limity API calls

**Tavily timeout:**

1. Zweryfikuj API key  
2. Sprawdź czy query nie jest zbyt skomplikowane  
3. Upewnij się o dostępności serwisu  
4. Zmniejsz max\_results jeśli potrzeba

**Email nie jest wysyłany:**

1. Sprawdź Gmail OAuth2 credentials  
2. Zweryfikuj czy Gmail API jest włączone  
3. Upewnij się, że adres email jest poprawny  
4. Sprawdź spam folder

**GPT-4o nie konwertuje miast na kody lotnisk:**

1. Sprawdź czy miasta są podane w języku angielskim  
2. Zweryfikuj dostęp do GPT-4o model  
3. Upewnij się o wystarczających kredytach  
4. Sprawdź czy daty są w przyszłości

### **Wskazówki optymalizacji:**

1. Używaj popularnych miast dla lepszych wyników  
2. Podawaj daty minimum 2 tygodnie w przyszłości  
3. Testuj z różnymi typami aktywności  
4. Monitoruj koszty wszystkich API

## **💡 Tips & Best Practices**

### **Optymalizacja wyszukiwania:**

1. **Airport codes**: System automatycznie konwertuje miasta na kody IATA  
2. **Date validation**: Sprawdza czy daty są w przyszłości  
3. **Traveler count**: Uwzględnia liczbę podróżnych w wyszukiwaniu  
4. **Activity matching**: Dopasowuje aktywności do destynacji

### **Customization options:**

1. **Email template**: Dostosuj szablon HTML w Claude 3.5 prompt  
2. **Hotel sorting**: Zmień sort\_by parameter (rating, price, distance)  
3. **Flight preferences**: Dodaj preferencje klasy podróży  
4. **Activity types**: Rozszerz kategorie aktywności

### **Performance optimization:**

1. **Parallel requests**: Requests do różnych API działają równolegle  
2. **Caching**: Rozważ cache dla popularnych destynacji  
3. **Rate limiting**: Monitoruj limity wszystkich API  
4. **Error handling**: Implementuj retry logic dla failed requests

### **Business customization:**

1. **Branding**: Zmień podpis z "TrueHorizon Travel Team" na swoją markę  
2. **Pricing markup**: Dodaj marżę do prezentowanych cen  
3. **Commission tracking**: Śledź potencjalne prowizje z bookingów  
4. **Customer segmentation**: Różne szablony dla różnych typów klientów

## **🚀 Rozszerzenia i Następne Kroki**

### **Możliwe integracje:**

1. **Direct booking APIs** \- Amadeus, Sabre dla rzeczywistych rezerwacji  
2. **Payment processing** \- Stripe, PayPal dla płatności online  
3. **CRM integration** \- Salesforce, HubSpot dla zarządzania klientami  
4. **Calendar sync** \- Google Calendar, Outlook dla terminów podróży  
5. **SMS notifications** \- Twilio dla powiadomień tekstowych

### **Advanced Features:**

1. **Multi-city trips** \- Obsługa skomplikowanych tras  
2. **Group bookings** \- Specjalne oferty dla grup  
3. **Travel insurance** \- Automatyczne oferty ubezpieczeń  
4. **Visa requirements** \- Sprawdzanie wymagań wizowych  
5. **Weather forecast** \- Prognoza pogody dla destynacji

### **AI Enhancements:**

1. **Preference learning** \- AI uczące się preferencji klientów  
2. **Dynamic pricing** \- Predykcja najlepszych terminów zakupu  
3. **Personalized recommendations** \- Spersonalizowane sugestie  
4. **Sentiment analysis** \- Analiza feedbacku klientów  
5. **Chatbot integration** \- Interaktywny chat dla pytań

### **Business automation:**

1. **Follow-up campaigns** \- Automatyczne follow-up po wysłaniu planu  
2. **Booking reminders** \- Przypomnienia o terminach rezerwacji  
3. **Price alerts** \- Powiadomienia o zmianach cen  
4. **Review collection** \- Zbieranie opinii po podróży  
5. **Loyalty programs** \- Automatyczne naliczanie punktów

### **Multi-channel expansion:**

1. **WhatsApp integration** \- Obsługa przez WhatsApp Business  
2. **Voice assistants** \- Integracja z Alexa, Google Assistant  
3. **Mobile app** \- Dedykowana aplikacja mobilna  
4. **Social media** \- Integration z Facebook, Instagram  
5. **Affiliate program** \- System partnerski dla influencerów

### **Enterprise features:**

1. **Multi-language support** \- Obsługa różnych języków  
2. **Corporate accounts** \- Specjalne funkcje dla firm  
3. **Reporting dashboard** \- Analytics i metryki biznesowe  
4. **White-label solution** \- Możliwość rebrandingu  
5. **API for partners** \- Udostępnienie API dla partnerów

**Kategoria**: Travel & Tourism Automation | **Złożoność**: Zaawansowany | **Wartość biznesowa**: 10/10

💡 **Potrzebujesz pomocy?** Załóż nowy wątek w społeczności dotyczący tego workflow'a aby uzyskać wsparcie od innych użytkowników.

Resources  
agent-glosowy-biura-podrozy.json

—--------

OBSŁUGA KLIENTA & CHATBOTY

Prosty RAG Chatbot \- Instrukcja Konfiguracji

# 

## **📋 Przegląd**

Workflow **RAG (Retrieval-Augmented Generation) Chatbot** o poziomie złożoności: **Zaawansowany**.

Ten workflow implementuje kompletny system RAG składający się z dwóch części: automatycznego indeksowania dokumentów z Google Drive oraz inteligentnego chatbota. System monitoruje folder Google Drive pod kątem nowych dokumentów, automatycznie je przetwarza, dzieli na fragmenty i indeksuje w bazie wektorowej Pinecone. Chatbot wykorzystuje te dane do udzielania precyzyjnych odpowiedzi opartych na Twojej bazie wiedzy.

## **🎯 Zastosowania Biznesowe**

1. **Knowledge Base Chatbot** \- Automatyczne odpowiadanie na pytania na podstawie dokumentacji firmowej  
2. **Customer Support** \- Obsługa klienta z dostępem do aktualnej bazy wiedzy i FAQ  
3. **Onboarding Assistant** \- Pomoc nowym pracownikom w znalezieniu informacji  
4. **Technical Documentation** \- Chatbot pomagający w nawigacji po dokumentacji technicznej  
5. **Policy Assistant** \- Szybki dostęp do polityk firmy, procedur i regulaminów  
6. **Research Assistant** \- Wyszukiwanie informacji w dużych zbiorach dokumentów

## **⚙️ Wymagania**

1. ✅ Działająca instancja n8n (v1.0+)  
2. ✅ Uprawnienia do konfiguracji workflow'ów  
3. 📁 **Google Drive** \- Folder z dokumentami do indeksowania  
4. 🔑 **Google Drive API** \- Dostęp do monitorowania i pobierania plików  
5. 🌲 **Pinecone Account** \- Vector database (plan darmowy dostępny)  
6. 🤖 **OpenAI API Key** \- Do generowania embeddings  
7. 🔀 **OpenRouter API Key** \- Dostęp do Claude 3.5 Sonnet  
8. 🌐 **Publiczny URL n8n** \- Dla chat interface (ngrok, tunel itp.)

## **🔧 Konfiguracja Krok po Kroku**

### **1\. Przygotowanie Google Drive**

1. **Struktura folderów:**  
2. Utwórz folder "FAQ" (lub inną nazwę) w Google Drive  
3. Przygotuj dokumenty w formatach: PDF, DOC, TXT, MD  
4. Skopiuj ID folderu z URL (np. `1FTsF7Hl2fPouUz6mWMh-ZD0kgf-iJfLe`)  
5. **Google Drive API:**  
6. Przejdź do Google Cloud Console  
7. Włącz Google Drive API  
8. Utwórz credentials OAuth2 dla n8n

### **2\. Konfiguracja Pinecone**

1. **Utworzenie indexu:**  
2. Zarejestruj się na [pinecone.io](http://pinecone.io) (plan darmowy dostępny)  
3. Utwórz nowy index o nazwie "sample"  
4. Dimension: 1536 (dla OpenAI embeddings)  
5. Metric: cosine  
6. **Namespace setup:**  
7. Utwórz namespace "FAQ" w indexie  
8. Skopiuj API key z dashboard Pinecone

### **3\. Konfiguracja API Keys**

1. **OpenAI API:**  
2. Zarejestruj się na [platform.openai.com](http://platform.openai.com)  
3. Wygeneruj API key  
4. Upewnij się, że masz dostęp do text-embedding-ada-002  
5. **OpenRouter API:**  
6. Przejdź do [openrouter.ai](http://openrouter.ai)  
7. Utwórz konto i wygeneruj API key  
8. Zasilaj konto kredytami dla Claude 3.5 Sonnet

### **4\. Import i Konfiguracja Workflow**

1. **Import workflow:**  
2. Otwórz n8n w przeglądarce  
3. Kliknij **"Import workflow"**  
4. Wybierz plik `prosty-rag-chatbot.json`  
5. Zatwierdź import  
6. **Konfiguracja Credentials:**  
7. **Google Drive OAuth2**: Autoryzuj dostęp do Google Drive  
8. **Pinecone API**: Dodaj API key Pinecone  
9. **OpenAI API**: Dodaj klucz OpenAI  
10. **OpenRouter API**: Dodaj klucz OpenRouter  
11. **Dostosowanie parametrów:**  
12. W **"Wyzwalacz Google Drive"**: Ustaw swój folder ID  
13. W **"Magazyn Wektorów Pinecone"**: Sprawdź index name i namespace  
14. W **"Agent AI"**: Dostosuj system message

### **5\. Testowanie Systemu**

1. **Test indeksowania:**  
2. Dodaj testowy dokument PDF do folderu Google Drive  
3. Sprawdź execution log w n8n  
4. Zweryfikuj czy dokument został zaindeksowany w Pinecone  
5. **Test chatbota:**  
6. Aktywuj workflow  
7. Skopiuj URL z węzła "When chat message received"  
8. Otwórz URL w przeglądarce i przetestuj chat

## **🧪 Testowanie**

### **Scenariusze testowe:**

**Test 1 \- Indeksowanie dokumentu:**

1. Dodaj plik "Polityka zwrotów.pdf" do folderu  
2. Sprawdź czy workflow wykonał się automatycznie  
3. Zweryfikuj logi procesowania dokumentu

**Test 2 \- Pytanie do chatbota:**

1. Zapytaj: "Jaka jest polityka zwrotów?"  
2. Oczekiwany rezultat: Odpowiedź oparta na zaindeksowanym dokumencie

**Test 3 \- Pytanie poza bazą wiedzy:**

1. Zapytaj: "Jaka jest pogoda?"  
2. Oczekiwany rezultat: Informacja, że nie ma takich danych w bazie

### **Weryfikacja wyników:**

1. Sprawdź czy odpowiedzi zawierają informacje z dokumentów  
2. Zweryfikuj czy chatbot wskazuje źródła informacji  
3. Upewnij się, że system nie wymyśla informacji spoza bazy  
4. Sprawdź szybkość odpowiedzi (powinna być \< 5 sekund)

## **❗ Rozwiązywanie Problemów**

### **Częste błędy:**

**Google Drive Trigger nie działa:**

1. Sprawdź uprawnienia do folderu Google Drive  
2. Zweryfikuj czy folder ID jest poprawny  
3. Upewnij się, że OAuth2 credentials są ważne

**Dokumenty nie są indeksowane:**

1. Sprawdź format pliku (obsługiwane: PDF, DOC, TXT, MD)  
2. Zweryfikuj konfigurację Pinecone (index name, namespace)  
3. Sprawdź czy OpenAI API key ma dostęp do embeddings

**Chatbot nie odpowiada:**

1. Sprawdź czy workflow jest aktywny  
2. Zweryfikuj URL chatbota (musi być publiczny)  
3. Upewnij się, że OpenRouter API key jest ważny

**Odpowiedzi nie są dokładne:**

1. Zwiększ liczbę fragmentów w wyszukiwaniu wektorowym  
2. Popraw jakość dokumentów źródłowych  
3. Dostosuj chunk size w Text Splitter

### **Wskazówki optymalizacji:**

1. Używaj jasnych, strukturalnych dokumentów  
2. Regularne oczyszczaj namespace w Pinecone  
3. Monitoruj koszty API calls  
4. Testuj różne rozmiary chunks (200-1000 tokenów)

## **💡 Tips & Best Practices**

### **Przygotowanie dokumentów:**

1. **Struktura**: Używaj nagłówków, list punktowanych  
2. **Jakość**: Unikaj skanów niskiej jakości  
3. **Format**: PDF i Markdown działają najlepiej  
4. **Język**: Spójny język w całej bazie wiedzy

### **Optymalizacja wyszukiwania:**

1. **Chunk size**: 500-800 tokenów dla większości przypadków  
2. **Overlap**: 50-100 tokenów między fragmentami  
3. **Namespace**: Używaj różnych namespace dla różnych tematów  
4. **Metadata**: Dodawaj metadata do fragmentów (data, autor, kategoria)

### **Monitoring i maintenance:**

1. **Usage tracking**: Monitoruj usage API dla wszystkich serwisów  
2. **Quality metrics**: Zbieraj feedback od użytkowników  
3. **Regular updates**: Aktualizuj dokumenty w bazie wiedzy  
4. **Performance**: Mierz czas odpowiedzi chatbota

### **Security best practices:**

1. **API keys**: Regularnie rotuj klucze dostępu  
2. **Access control**: Ogranicz dostęp do wrażliwych dokumentów  
3. **Data privacy**: Nie indeksuj dokumentów z danymi osobowymi  
4. **Audit logs**: Monitoruj kto i co przesyła do systemu

## **🚀 Rozszerzenia i Następne Kroki**

### **Możliwe integracje:**

1. **Multi-channel deployment** \- Slack, Teams, WhatsApp, Telegram  
2. **CRM integration** \- Automatyczne tworzenie tickets z rozmów  
3. **Analytics dashboard** \- Metryki użytkowania i popularnych pytań  
4. **Multi-language support** \- Obsługa różnych języków  
5. **Voice interface** \- Integracja z syntezą i rozpoznawaniem mowy

### **Advanced Features:**

1. **Conversation memory** \- Kontekst poprzednich wiadomości  
2. **User authentication** \- Personalizacja odpowiedzi  
3. **Document versioning** \- Śledzenie zmian w dokumentach  
4. **Smart notifications** \- Alerty o nowych dokumentach  
5. **Feedback system** \- Ocena jakości odpowiedzi przez użytkowników

### **Workflow enhancements:**

1. **Batch processing** \- Masowe indeksowanie dokumentów  
2. **Error handling** \- Lepsze zarządzanie błędami  
3. **Rate limiting** \- Ochrona przed spam  
4. **Content filtering** \- Automatyczne filtrowanie nieodpowiednich treści  
5. **Multi-format support** \- Obsługa więcej formatów plików

### **Przypadki użycia branżowe:**

1. **Healthcare**: Chatbot do wytycznych medycznych i procedur  
2. **Legal**: Asystent prawny z dostępem do przepisów  
3. **Education**: Tutor AI dla materiałów edukacyjnych  
4. **HR**: Chatbot do polityk firmy i benefitów  
5. **IT Support**: Automated troubleshooting z dokumentacji

### **Scaling considerations:**

1. **Load balancing**: Dystrybucja ruchu dla wysokiej dostępności  
2. **Caching**: Cache dla często zadawanych pytań  
3. **Database sharding**: Podział danych dla lepszej wydajności  
4. **CDN integration**: Szybsze dostarczanie statycznej zawartości

**Kategoria**: AI Chatbot & Knowledge Management | **Złożoność**: Zaawansowany | **Wartość biznesowa**: 10/10

💡 **Potrzebujesz pomocy?** Załóż nowy wątek w społeczności dotyczący tego workflow'a aby uzyskać wsparcie od innych użytkowników.

Resources  
prosty-rag-chatbot.json

—-----

Prosta Obsługa Klienta \- Instrukcja Konfiguracji

# 

## **📋 Przegląd**

Workflow **AI Customer Support** o poziomie złożoności: **Zaawansowany**.

Ten workflow automatyzuje obsługę klienta poprzez inteligentne przetwarzanie emaili. System automatycznie monitoruje skrzynkę Gmail, klasyfikuje przychodzące wiadomości, generuje personalizowane odpowiedzi używając AI Agent z dostępem do bazy wiedzy (RAG), a następnie automatycznie wysyła odpowiedzi i organizuje emaile za pomocą labelek.

## **🎯 Zastosowania Biznesowe**

1. **Automatyczna obsługa klienta** \- Całodobowe odpowiadanie na zapytania klientów bez ludzkiej interwencji  
2. **Wsparcie techniczne** \- Automatyczne rozwiązywanie częstych problemów technicznych  
3. **FAQ automation** \- Odpowiadanie na powtarzające się pytania z bazy wiedzy  
4. **Triaging emaili** \- Automatyczna kategoryzacja i priorytetyzacja zapytań  
5. **Skalowanie support team** \- Zwiększenie przepustowości bez dodatkowych pracowników  
6. **24/7 availability** \- Obsługa klientów poza godzinami pracy

## **⚙️ Wymagania**

1. ✅ Działająca instancja n8n (v1.0+)  
2. ✅ Uprawnienia do konfiguracji workflow'ów  
3. 📧 **Gmail Business Account** \- Dla triggerów i wysyłania odpowiedzi  
4. 🤖 **OpenAI API Key** \- Do modelu GPT i embeddings  
5. 🔀 **OpenRouter API Key** \- Dla klasyfikacji tekstu  
6. 🌲 **Pinecone Account** \- Vector database dla bazy wiedzy  
7. 📚 **Przygotowana baza wiedzy** \- FAQ, polityki, procedury w formacie tekstowym

## **🔧 Konfiguracja Krok po Kroku**

### **1\. Przygotowanie Kont API**

1. **OpenAI API:**  
2. Zarejestruj się na [platform.openai.com](http://platform.openai.com)  
3. Wygeneruj API key w sekcji API keys  
4. Upewnij się, że masz dostęp do GPT-4o-mini  
5. **OpenRouter API:**  
6. Przejdź do [openrouter.ai](http://openrouter.ai)  
7. Utwórz konto i wygeneruj API key  
8. Zasilaj konto kredytami dla klasyfikacji  
9. **Pinecone Vector Database:**  
10. Zarejestruj się na [pinecone.io](http://pinecone.io)  
11. Utwórz nowy index o nazwie "sample"  
12. Ustaw dimension na 1536 (dla OpenAI embeddings)  
13. Utwórz namespace "FAQ"

### **2\. Konfiguracja Gmail**

1. **Gmail API Setup:**  
2. Przejdź do Google Cloud Console  
3. Włącz Gmail API dla swojego projektu  
4. Utwórz credentials OAuth2 dla n8n  
5. **Labelki Gmail:**  
6. W Gmail utwórz nową labelkę "AI Processed"  
7. Skopiuj ID labelki z URL (będzie potrzebne w konfiguracji)

### **3\. Przygotowanie Bazy Wiedzy**

1. **Dokumenty FAQ:**  
2. Przygotuj dokumenty z często zadawanymi pytaniami  
3. Uwzględnij polityki firmy, procedury zwrotów, informacje o produktach  
4. Format: pytanie \+ szczegółowa odpowiedź  
5. **Upload do Pinecone:**  
6. Podziel dokumenty na mniejsze fragmenty (200-500 słów)  
7. Użyj n8n workflow do generowania embeddings i upload do Pinecone  
8. Upewnij się, że wszystkie dokumenty są w namespace "FAQ"

### **4\. Import i Konfiguracja Workflow**

1. **Import workflow:**  
2. Otwórz n8n w przeglądarce  
3. Kliknij **"Import workflow"**  
4. Wybierz plik `prosta-obsluga-klienta.json`  
5. Zatwierdź import  
6. **Konfiguracja Credentials:**  
7. **Gmail OAuth2**: Autoryzuj dostęp do konta Gmail  
8. **OpenAI API**: Dodaj swój OpenAI API key  
9. **OpenRouter API**: Dodaj OpenRouter API key  
10. **Pinecone API**: Dodaj Pinecone API key  
11. **Dostosowanie Text Classifier:**

{

"categories": \[

{

"category": "Obsługa Klienta",

"description": "Email związany z pomocą klientowi. Pytania o polityki, produkty lub usługi."

},

{

"category": "Inne",

"description": "Email nie związany z obsługą klienta."

}

\]

}

1. **Konfiguracja AI Agent:**  
2. Dostosuj system message dla swojej firmy  
3. Zmień podpis z "Mr. Helpful from Tech Haven Solutions"  
4. Dodaj specyficzne instrukcje dla Twojej branży

### **5\. Testowanie i Dostrajanie**

1. **Test podstawowy:**  
2. Wyślij email testowy na skonfigurowaną skrzynkę  
3. Sprawdź execution log w n8n  
4. Zweryfikuj czy odpowiedź została wygenerowana i wysłana  
5. **Test klasyfikacji:**  
6. Wyślij różne typy emaili (support vs inne)  
7. Sprawdź czy klasyfikacja działa poprawnie  
8. Dostosuj opisy kategorii jeśli potrzeba

## **🧪 Testowanie**

### **Scenariusze testowe:**

**Test 1 \- Pytanie o zwroty:**

1. Wyślij email: "Jak mogę zwrócić produkt?"  
2. Oczekiwany rezultat: Automatyczna odpowiedź z informacjami o polityce zwrotów

**Test 2 \- Pytanie techniczne:**

1. Wyślij email: "Mój produkt nie działa poprawnie"  
2. Oczekiwany rezultat: Odpowiedź z krokami troubleshootingu

**Test 3 \- Email niebędący supportem:**

1. Wyślij email: "Zaproszenie na spotkanie"  
2. Oczekiwany rezultat: Email zostaje zignorowany (No Operation)

### **Weryfikacja wyników:**

1. Sprawdź czy odpowiedzi są trafne i pomocne  
2. Zweryfikuj czy tone of voice jest odpowiedni  
3. Upewnij się, że labelki są dodawane poprawnie  
4. Sprawdź czy baza wiedzy jest właściwie wykorzystywana

## **❗ Rozwiązywanie Problemów**

### **Częste błędy:**

**Gmail Trigger nie działa:**

1. Sprawdź autoryzację OAuth2 dla Gmail  
2. Upewnij się, że n8n ma uprawnienia do czytania emaili  
3. Zweryfikuj czy polling jest aktywny

**AI Agent nie znajduje informacji:**

1. Sprawdź konfigurację Pinecone (index name, namespace)  
2. Zweryfikuj czy baza wiedzy została właściwie zaindeksowana  
3. Upewnij się, że embeddings OpenAI działają

**Klasyfikacja działa niepoprawnie:**

1. Dostosuj opisy kategorii w Text Classifier  
2. Dodaj więcej przykładów dla każdej kategorii  
3. Sprawdź czy OpenRouter API key jest aktywny

**Odpowiedzi są nie na temat:**

1. Popraw system message w AI Agent  
2. Rozszerz bazę wiedzy o brakujące informacje  
3. Dostosuj parametry wyszukiwania w Pinecone

### **Wskazówki optymalizacji:**

1. Regularnie aktualizuj bazę wiedzy  
2. Monitoruj jakość odpowiedzi i dostrójaj prompty  
3. Implementuj feedback loop od klientów  
4. Analizuj logi nierozpoznanych pytań

## **💡 Tips & Best Practices**

### **Zarządzanie bazą wiedzy:**

1. **Aktualizacja**: Regularnie aktualizuj FAQ i procedury  
2. **Struktura**: Używaj jasnych nagłówków i bullet points  
3. **Język**: Pisz w sposób przystępny dla klientów  
4. **Przykłady**: Dodawaj konkretne przykłady i case studies

### **Monitoring i jakość:**

1. **Accuracy tracking**: Monitoruj jakość odpowiedzi  
2. **Response time**: Śledź czas odpowiedzi  
3. **Customer feedback**: Zbieraj feedback o automatycznych odpowiedziach  
4. **Human handoff**: Przewiduj eskalację do ludzkiego agenta

### **Bezpieczeństwo:**

1. **Data privacy**: Nie przechowuj wrażliwych danych klientów  
2. **API security**: Regularnie rotuj API keys  
3. **Access control**: Ogranicz dostęp do konfiguracji workflow  
4. **Audit logs**: Monitoruj wszystkie wykonania workflow

### **Personalizacja:**

1. **Brand voice**: Dostosuj ton komunikacji do marki  
2. **Język**: Używaj specjalistycznego słownictwa branży  
3. **Podpis**: Spersonalizuj podpis emailowy  
4. **Formatowanie**: Używaj consistent formatting w odpowiedziach

## **🚀 Rozszerzenia i Następne Kroki**

### **Możliwe integracje:**

1. **CRM Integration** \- Automatyczny zapis interakcji w systemie CRM  
2. **Ticketing System** \- Tworzenie ticketów dla złożonych spraw  
3. **Analytics Dashboard** \- Monitoring metryk obsługi klienta  
4. **Multi-language Support** \- Obsługa w wielu językach  
5. **Sentiment Analysis** \- Analiza nastroju klientów

### **Advanced Features:**

1. **Dynamic responses** \- Personalizacja na podstawie historii klienta  
2. **Escalation rules** \- Automatyczne przekierowanie skomplikowanych spraw  
3. **Performance tracking** \- KPIs dla automatycznej obsługi  
4. **Customer satisfaction** \- Automatyczne ankiety zadowolenia  
5. **Integration testing** \- Automated testing workflow responses

### **Workflow enhancements:**

1. **Multi-channel support** \- Obsługa chat, social media  
2. **Priority handling** \- Priorytetyzacja VIP klientów  
3. **Business hours** \- Różne odpowiedzi w/poza godzinami pracy  
4. **Team notifications** \- Powiadomienia dla team managera  
5. **Response templates** \- Biblioteka gotowych odpowiedzi

### **Przypadki użycia branżowe:**

1. **E-commerce**: Obsługa zamówień, zwrotów, statusu wysyłki  
2. **SaaS**: Support techniczny, billing questions, feature requests  
3. **Healthcare**: Umówienia wizyt, informacje o usługach  
4. **Education**: Zapisy na kursy, informacje o programach  
5. **Real Estate**: Pytania o nieruchomości, umówienia oglądań

**Kategoria**: AI Customer Support & Automation | **Złożoność**: Zaawansowany | **Wartość biznesowa**: 10/10

💡 **Potrzebujesz pomocy?** Załóż nowy wątek w społeczności dotyczący tego workflow'a aby uzyskać wsparcie od innych użytkowników.

Resources  
prosta-obsluga-klienta.json

—------

SCRAPING i EKSTRAKCJA DANYCH

Ekstraktor Firecrawl \- Instrukcja Konfiguracji

# 

## **📋 Przegląd**

Workflow **Data Extraction & Web Scraping** o poziomie złożoności: **Średni**.

Ten workflow implementuje zaawansowany system ekstrakcji danych ze stron internetowych wykorzystujący API Firecrawl. System automatycznie analizuje strukturę stron web, ekstraktuje określone dane zgodnie ze zdefiniowanym schematem JSON oraz implementuje inteligentny system retry z oczekiwaniem na przetwarzanie asynchroniczne.

## **🎯 Zastosowania Biznesowe**

1. **Structured Data Mining** \- Automatyczna ekstrakcja ustrukturyzowanych danych z witryn e-commerce  
2. **Content Aggregation** \- Zbieranie treści z multiple sources dla content curation  
3. **Market Research** \- Systematyczne zbieranie danych o produktach, cenach i reviews  
4. **Lead Generation** \- Ekstrakcja danych kontaktowych i business information  
5. **Competitive Analysis** \- Monitoring produktów, cen i strategii konkurencji  
6. **Database Population** \- Automatyczne wypełnianie baz danych z web sources

## **⚙️ Wymagania**

1. ✅ Działająca instancja n8n (v1.0+)  
2. ✅ Uprawnienia do konfiguracji workflow'ów  
3. 🔥 **Firecrawl API** \- Zaawansowane możliwości ekstrakcji danych  
4. 📊 **JSON Schema knowledge** \- Podstawowa znajomość struktur JSON  
5. 🌐 **Target websites access** \- Dostęp do stron do ekstrakcji  
6. 💳 **Firecrawl Credits** \- Wystarczające kredyty dla planned extractions

## **🔧 Konfiguracja Krok po Kroku**

### **1\. Przygotowanie Firecrawl API**

1. **Rejestracja i konfiguracja:**  
2. Przejdź do firecrawl.dev i utwórz konto  
3. Wybierz odpowiedni plan taryfowy  
4. Wygeneruj API key w dashboard  
5. Sprawdź dostępne kredyty  
6. **Konfiguracja credentials w n8n:**  
7. Utwórz HTTP Header Auth credentials  
8. Header name: `Authorization`  
9. Header value: `Bearer YOUR_API_KEY`  
10. Zapisz jako "Firecrawl"

### **2\. Import i Konfiguracja Workflow**

1. **Import workflow:**  
2. Otwórz n8n w przeglądarce  
3. Kliknij **"Import workflow"**  
4. Wybierz plik `firecrawl-ekstraktor.json`  
5. Zatwierdź import  
6. **Konfiguracja węzła Extract:**  
7. Ustaw target URLs w jsonBody  
8. Zdefiniuj prompt dla ekstrakcji  
9. Skonfiguruj JSON schema dla output

### **3\. Konfiguracja Parametrów Ekstrakcji**

W węźle **"Extract"** dostosuj jsonBody:

{

"urls": \[

"https://example-shop.com/products/\*"

\],

"prompt": "Extract product information including name, price, description and availability",

"schema": {

"type": "object",

"properties": {

"products": {

"type": "array",

"items": {

"type": "object",

"properties": {

"name": {"type": "string"},

"price": {"type": "string"},

"description": {"type": "string"},

"available": {"type": "boolean"}

},

"required": \["name", "price"\]

}

}

},

"required": \["products"\]

}

}

### **4\. Dostosowanie Schema dla Twoich Potrzeb**

**Przykłady różnych schematów:**

**E-commerce products:**

{

"type": "object",

"properties": {

"products": {

"type": "array",

"items": {

"properties": {

"title": {"type": "string"},

"price": {"type": "number"},

"currency": {"type": "string"},

"rating": {"type": "number"},

"reviews\_count": {"type": "integer"},

"image\_url": {"type": "string"}

}

}

}

}

}

**Company contacts:**

{

"type": "object",

"properties": {

"contacts": {

"type": "array",

"items": {

"properties": {

"name": {"type": "string"},

"position": {"type": "string"},

"email": {"type": "string"},

"phone": {"type": "string"},

"company": {"type": "string"}

}

}

}

}

}

### **5\. Konfiguracja Systemu Retry**

**Timing configuration:**

1. **30 Secs Wait**: Podstawowe oczekiwanie na processing  
2. **10 Seconds Wait**: Retry interval dla incomplete results  
3. **If Node**: Sprawdza czy data jest dostępna

**Dostosowanie czasów:**

1. Dla prostych stron: 15-20 sekund  
2. Dla complex sites: 30-60 sekund  
3. Dla large datasets: 60-120 sekund

### **6\. URL Patterns i Wildcards**

**Obsługiwane formaty URLs:**

1. Single URL: `"https://example.com/page"`  
2. Multiple URLs: `["url1", "url2", "url3"]`  
3. Wildcard patterns: `"https://example.com/products/*"`  
4. Path patterns: `"https://shop.com/category/*/items"`

**Przykłady wildcard usage:**

{

"urls": \[

"https://news-site.com/articles/\*",

"https://shop.com/products/category-\*",

"https://blog.com/posts/2024/\*"

\]

}

## **🧪 Testowanie**

### **Scenariusze testowe kompleksowe:**

**Test 1 \- Podstawowa ekstrakcja:**

{

"urls": \["https://quotes.toscrape.com/"\],

"prompt": "Extract all quotes with authors",

"schema": {

"type": "object",

"properties": {

"quotes": {

"type": "array",

"items": {

"properties": {

"text": {"type": "string"},

"author": {"type": "string"}

}

}

}

}

}

}

**Test 2 \- E-commerce data:**

{

"urls": \["https://example-shop.com/products"\],

"prompt": "Extract product names, prices and availability",

"schema": {

"properties": {

"products": {

"type": "array",

"items": {

"properties": {

"name": {"type": "string"},

"price": {"type": "string"},

"available": {"type": "boolean"}

}

}

}

}

}

}

**Test 3 \- Multiple pages:**

{

"urls": \[

"https://example.com/page1",

"https://example.com/page2"

\],

"prompt": "Extract contact information from each page",

"schema": {

"properties": {

"contacts": {

"type": "array",

"items": {

"properties": {

"name": {"type": "string"},

"email": {"type": "string"}

}

}

}

}

}

}

### **Weryfikacja wyników:**

1. Sprawdź czy extracted data matches schema  
2. Zweryfikuj completeness ekstrakcji  
3. Upewnij się o accuracy extracted information  
4. Potwierdź handling różnych page structures

## **❗ Rozwiązywanie Problemów**

### **Częste błędy:**

**Empty results po extraction:**

1. Sprawdź czy URLs są accessible  
2. Zweryfikuj czy prompt jest sufficiently specific  
3. Upewnij się, że schema matches expected data structure  
4. Sprawdź czy strona nie wymaga JavaScript rendering

**Timeout errors:**

1. Zwiększ wait time w węzłach 30 Secs / 10 Seconds  
2. Sprawdź czy strony nie są zbyt heavy dla processing  
3. Zredukuj liczbę URLs w single request  
4. Rozważ splitting large requests

**Schema validation errors:**

1. Sprawdź poprawność JSON schema syntax  
2. Upewnij się, że required fields są obecne w data  
3. Zweryfikuj czy data types match schema definitions  
4. Sprawdź case sensitivity w field names

**API rate limiting:**

1. Monitoruj usage w Firecrawl dashboard  
2. Implementuj longer delays między requests  
3. Sprawdź limits swojego subscription plan  
4. Rozważ upgrade plan jeśli potrzebny

### **Wskazówki optymalizacji:**

1. Używaj specific prompts dla better accuracy  
2. Test schema z small data samples first  
3. Monitor costs per extraction w dashboard  
4. Implement error handling dla failed extractions

## **💡 Tips & Best Practices**

### **Optymalizacja ekstrakcji:**

1. **Specific prompts**: Im bardziej szczegółowy prompt, tym lepsza accuracy  
2. **Schema design**: Design schemas pasujące do expected data structure  
3. **Batch processing**: Group similar pages for efficient processing  
4. **Error handling**: Implement graceful handling dla partial failures

### **Performance optimization:**

1. **Smart waiting**: Dostosuj wait times do complexity stron  
2. **Parallel processing**: Użyj multiple workflows dla different data types  
3. **Result caching**: Cache results aby uniknąć duplicate extractions  
4. **Monitoring**: Track success rates i processing times

### **Data quality assurance:**

1. **Validation rules**: Implement validation dla extracted data  
2. **Cleansing pipelines**: Add data cleaning steps post-extraction  
3. **Duplicate detection**: Identify i handle duplicate records  
4. **Completeness checks**: Verify wszystkie expected fields są extracted

### **Cost optimization:**

1. **Targeted extraction**: Extract tylko potrzebne data fields  
2. **Frequency planning**: Plan extractions based na data change frequency  
3. **Credit monitoring**: Track usage aby uniknąć unexpected costs  
4. **Efficiency metrics**: Measure cost per extracted record

## **🚀 Rozszerzenia i Następne Kroki**

### **Możliwe integracje:**

1. **Database Integration** \- Direct insertion do PostgreSQL, MongoDB  
2. **Data Warehouses** \- ETL pipelines do BigQuery, Snowflake  
3. **Analytics Platforms** \- Integration z Tableau, Power BI  
4. **CRM Systems** \- Automatic lead import do Salesforce, HubSpot  
5. **E-commerce Platforms** \- Product catalog synchronization

### **Advanced Features:**

1. **AI-powered schema generation** \- Automatic schema creation from samples  
2. **Incremental extraction** \- Only extract new/changed data  
3. **Multi-format output** \- Export do CSV, Excel, JSON, XML  
4. **Real-time processing** \- Stream processing dla live data feeds  
5. **Custom field mapping** \- Advanced data transformation rules

### **Enterprise capabilities:**

1. **Scalable architecture** \- Handle thousands of URLs concurrently  
2. **Compliance features** \- GDPR, CCPA compliance dla data extraction  
3. **Audit trails** \- Complete logging extraction activities  
4. **Role-based access** \- Control who can extract what data  
5. **SLA monitoring** \- Track performance against defined SLAs

### **AI-Powered enhancements:**

1. **Smart content detection** \- Automatic identification relevant content  
2. **Natural language schemas** \- Define extraction requirements w plain language  
3. **Anomaly detection** \- Identify unusual patterns w extracted data  
4. **Predictive extraction** \- Predict best times dla data collection  
5. **Content classification** \- Automatic categorization extracted content

### **Integration ecosystem:**

1. **API endpoints** \- REST APIs dla external system integration  
2. **Webhook notifications** \- Real-time alerts dla completed extractions  
3. **Dashboard analytics** \- Visual insights into extraction performance  
4. **Mobile applications** \- Mobile interfaces dla extraction monitoring  
5. **Third-party connectors** \- Pre-built integrations popular tools

**Kategoria**: Data Extraction & Web Scraping | **Złożoność**: Średni | **Wartość biznesowa**: 9/10

💡 **Potrzebujesz pomocy?** Załóż nowy wątek w społeczności dotyczący tego workflow'a aby uzyskać wsparcie od innych użytkowników.

Resources  
firecrawl-ekstraktor.json

—------

Agent Wyszukiwania Firecrawl \- Instrukcja

# 

## **📋 Przegląd**

Workflow **AI Agents & Search** o poziomie złożoności: **Zaawansowany**.

Ten workflow implementuje inteligentnego agenta wyszukiwania wykorzystującego API Firecrawl do zaawansowanego przeszukiwania internetu. Agent automatycznie konwertuje zapytania w języku naturalnym na precyzyjne zapytania wyszukiwania z wykorzystaniem operatorów Google, pobiera treść stron w formacie markdown i generuje szczegółowe odpowiedzi na podstawie znalezionej zawartości.

## **🎯 Zastosowania Biznesowe**

1. **Competitive Intelligence** \- Monitorowanie strategii i działań konkurencji w czasie rzeczywistym  
2. **Market Research** \- Głęboka analiza trendów rynkowych i insights branżowych  
3. **Lead Generation** \- Automatyczne wyszukiwanie potencjalnych klientów i partnerów biznesowych  
4. **Content Research** \- Zbieranie informacji do tworzenia wysokojakościowych treści i raportów  
5. **Brand Monitoring** \- Śledzenie wzmianek o marce i reputacji w sieci  
6. **Technical Research** \- Wyszukiwanie zaawansowanych informacji technicznych i dokumentacji

## **⚙️ Wymagania**

1. ✅ Działająca instancja n8n (v1.0+)  
2. ✅ Uprawnienia do konfiguracji workflow'ów  
3. 🔥 **Firecrawl API** \- Zaawansowane crawling i search capabilities  
4. 🤖 **OpenRouter API** \- Dostęp do modeli GPT-4.1 mini lub podobnych  
5. 🌐 **Internet connection** \- Stabilne połączenie dla web scraping  
6. 💳 **Firecrawl Credits** \- Wystarczająca liczba kredytów dla planowanych wyszukiwań

## **🔧 Konfiguracja Krok po Kroku**

### **1\. Przygotowanie Firecrawl API**

1. **Rejestracja w Firecrawl:**  
2. Przejdź do firecrawl.dev  
3. Utwórz konto i wybierz odpowiedni plan  
4. Przejdź do sekcji API Keys w dashboard  
5. Wygeneruj nowy API key  
6. **Konfiguracja credentials w n8n:**  
7. Dodaj nowe HTTP Header Auth credentials  
8. Header name: `Authorization`  
9. Header value: `Bearer YOUR_API_KEY`  
10. Nazwa credentials: "Firecrawl"

### **2\. Konfiguracja OpenRouter**

1. **OpenRouter setup:**  
2. Zarejestruj się na openrouter.ai  
3. Wygeneruj API key  
4. Dodaj kredyty do konta  
5. Sprawdź dostęp do modelu GPT-4.1 mini  
6. **Dodanie credentials do n8n:**  
7. Utwórz nowe OpenRouter API credentials  
8. Wprowadź API key  
9. Przetestuj połączenie

### **3\. Import i Konfiguracja Workflow**

1. **Import workflow:**  
2. Otwórz n8n w przeglądarce  
3. Kliknij **"Import workflow"**  
4. Wybierz plik `Firecrawl-search-agent.json`  
5. Zatwierdź import  
6. **Konfiguracja Chat Trigger:**  
7. Aktywuj workflow aby otrzymać webhook URL  
8. Skonfiguruj chat interface (może być external application)  
9. Przetestuj komunikację z webhook endpoint

### **4\. Dostosowanie Agenta Wyszukiwania**

W węźle **"Search Agent"** możesz dostosować system message:

\# Overview

You are a Firecrawl Search Query Generator Agent.

Your job is to:

1\. Convert natural language instructions into properly formatted Firecrawl query string

2\. Send that query with limit parameter to the FireCrawl Search tool

\#\# Query Construction Rules:

\- Exact phrase: "Nate Herk"

\- Exclude terms: \-linkedin, \-site:facebook.com

\- Specific site: site:youtube.com

\- Word in URL: inurl:nateherk

\- Word in title: intitle:automation

\- Related domains: related:truehorizonai.com

\#\# Default limit: 5 results

### **5\. Konfiguracja Parametrów Wyszukiwania**

W węźle **"Firecrawl Search"** możesz dostosować:

{

"query": "{{$fromAI(\\"searchQuery\\")}}",

"limit": {{$fromAI(\\"limit\\", \\"number of search results\\", number)}},

"scrapeOptions": {

"formats": \["markdown", "screenshot@fullPage"\]

}

}

**Dostępne formaty scrapeOptions:**

1. `markdown` \- Skonwertowana treść strony  
2. `html` \- Czysty HTML  
3. `rawHtml` \- Surowy HTML z wszystkimi elementami  
4. `links` \- Wyextraktowane linki ze strony  
5. `screenshot` \- Screenshot strony  
6. `screenshot@fullPage` \- Pełnostronicowy screenshot

### **6\. Testowanie Query Operators**

Przykłady zapytań do przetestowania:

**Podstawowe wyszukiwanie:**

"Szukaj informacji o AI automation"

**Site-specific search:**

"Znajdź artykuły o machine learning na site:medium.com"

**Exclusion search:**

"Szukaj Python tutorials ale bez YouTube"

**Title-based search:**

"Znajdź strony z 'React' w tytule, pokaż 10 wyników"

## **🧪 Testowanie**

### **Scenariusze testowe kompleksowe:**

**Test 1 \- Podstawowe wyszukiwanie:**

Input: "Szukaj najnowsze trendy w AI"

Expected: Agent tworzy query i zwraca 5 wyników z treścią markdown

**Test 2 \- Specjalistyczne wyszukiwanie:**

Input: "Znajdź dokumentację React hooks na oficjalnej stronie"

Expected: Agent używa site:reactjs.org intitle:hooks

**Test 3 \- Wykluczanie wyników:**

Input: "Python tutorials ale bez YouTube i Stack Overflow"

Expected: Agent używa \-site:youtube.com \-site:stackoverflow.com

**Test 4 \- Zaawansowane operatory:**

Input: "Strony z 'machine learning' w URL, limit 15"

Expected: Agent używa inurl:machine learning z limit=15

### **Weryfikacja funkcjonalności:**

1. Sprawdź czy chat trigger odpowiada na wiadomości  
2. Zweryfikuj czy agent poprawnie parsuje natural language  
3. Upewnij się, że Firecrawl zwraca poprawne dane  
4. Potwierdź że markdown content jest readable

## **❗ Rozwiązywanie Problemów**

### **Częste błędy:**

**Firecrawl API 401 Unauthorized:**

1. Sprawdź poprawność API key w credentials  
2. Zweryfikuj format Authorization header: `Bearer API_KEY`  
3. Upewnij się, że konto Firecrawl jest aktywne  
4. Sprawdź czy nie przekroczyłeś limitów API

**Agent nie generuje prawidłowych queries:**

1. Zweryfikuj system message w węźle Search Agent  
2. Sprawdź czy GPT-4.1 mini jest dostępny w OpenRouter  
3. Upewnij się o wystarczających kredytach OpenRouter  
4. Przetestuj model z prostszymi zapytaniami

**Brak rezultatów z Firecrawl:**

1. Sprawdź czy query nie jest zbyt restrykcyjny  
2. Zweryfikuj operatory wyszukiwania w dokumentacji  
3. Upewnij się, że limit nie jest ustawiony na 0  
4. Sprawdź czy strony istnieją dla danego zapytania

**Chat trigger nie odpowiada:**

1. Sprawdź czy workflow jest aktywowany  
2. Zweryfikuj poprawność webhook URL  
3. Upewnij się o prawidłowym formacie incoming message  
4. Sprawdź logi execution w n8n

### **Wskazówki optymalizacji:**

1. Monitoruj zużycie kredytów Firecrawl w czasie rzeczywistym  
2. Dostosuj limit wyników do specific use cases  
3. Używaj cache'owania dla często powtarzanych zapytań  
4. Implementuj retry logic dla failed API calls

## **💡 Tips & Best Practices**

### **Optymalne wykorzystanie operatorów:**

1. **Kombinuj operatory**: `"exact phrase" site:domain.com intitle:keyword`  
2. **Używaj wykluczeń**: `-site:pinterest.com` dla lepszej jakości wyników  
3. **Time-based filtering**: Wykorzystuj parameter `tbs` dla fresh content  
4. **Location targeting**: Użyj `country` i `location` dla lokalnych wyników

### **Zarządzanie kosztami:**

1. **Smart limiting**: Dostosuj `limit` parameter do actual needs  
2. **Query optimization**: Używaj precyzyjnych zapytań aby uniknąć waste  
3. **Format selection**: Wybieraj tylko potrzebne formats w scrapeOptions  
4. **Batch processing**: Grupuj podobne zapytania w single requests

### **Performance optimization:**

1. **Timeout management**: Ustaw rozumne timeouts dla slow websites  
2. **Error handling**: Implementuj graceful fallbacks dla failed scrapes  
3. **Result validation**: Sprawdzaj poprawność extracted content  
4. **Memory management**: Limit długich conversation contexts

### **Security best practices:**

1. **API key rotation**: Regularnie zmieniaj klucze dostępu  
2. **Input validation**: Sanitizuj user inputs przed processing  
3. **Rate limiting**: Implementuj throttling aby uniknąć bans  
4. **Content filtering**: Sprawdzaj extracted content pod kątem sensitive data

## **🚀 Rozszerzenia i Następne Kroki**

### **Możliwe integracje:**

1. **Knowledge Base Integration** \- Automatyczne indexowanie rezultatów w vector database  
2. **CRM Enrichment** \- Wzbogacanie profili klientów o dane z internetu  
3. **Content Pipeline** \- Automatyczne generowanie content briefs z research data  
4. **Monitoring Dashboard** \- Real-time tracking wyszukiwań i insights  
5. **Multi-language Support** \- Rozszerzenie o różne języki i regiony

### **Advanced Features:**

1. **Smart query expansion** \- AI-powered query suggestions i variations  
2. **Result ranking** \- Custom scoring algorithms dla result relevance  
3. **Content summarization** \- Automatyczne streszczenia długich articles  
4. **Image analysis** \- OCR i vision analysis dla screenshots  
5. **Trend detection** \- Pattern recognition w search results over time

### **Enterprise capabilities:**

1. **Multi-tenant architecture** \- Separate search contexts dla różnych teams  
2. **Advanced analytics** \- Detailed metrics i performance insights  
3. **Custom workflows** \- Specialized search flows dla specific industries  
4. **API exposure** \- REST endpoints dla external applications  
5. **Compliance features** \- Data governance i audit trails

### **AI Enhancements:**

1. **Semantic search** \- Context-aware query understanding  
2. **Personalization** \- User-specific result customization  
3. **Predictive search** \- Anticipating information needs  
4. **Multi-modal inputs** \- Voice, image, i document-based queries  
5. **Real-time learning** \- Continuous improvement based na user feedback

### **Integration ecosystem:**

1. **Slack/Teams bots** \- Direct search capabilities w team channels  
2. **Browser extensions** \- In-browser search enhancements  
3. **Mobile applications** \- Native mobile search experiences  
4. **Voice assistants** \- Integration z Alexa, Google Assistant  
5. **API marketplace** \- Pre-built connectors dla popular services

**Kategoria**: AI Agents & Advanced Search | **Złożoność**: Zaawansowany | **Wartość biznesowa**: 9/10

💡 **Potrzebujesz pomocy?** Załóż nowy wątek w społeczności dotyczący tego workflow'a aby uzyskać wsparcie od innych użytkowników.

Resources  
Firecrawl-search-agent.json

—----  
Scraper Twitter/X \- Instrukcja Konfiguracji

# 

## **📋 Przegląd**

Workflow **Social Media Scraping** o poziomie złożoności: **Zaawansowany**.

Ten workflow automatyzuje pobieranie i analizę tweetów z platformy X (dawniej Twitter) za pomocą API twitterapi.io. System automatycznie wyszukuje tweety według zadanych kryteriów, ekstraktuje kluczowe metryki (polubienia, retweety, odpowiedzi) i zapisuje dane w Google Sheets z funkcją paginacji umożliwiającą pobieranie dużych ilości danych.

## **🎯 Zastosowania Biznesowe**

1. **Social Media Monitoring** \- Śledzenie marki, produktu lub konkurencji w czasie rzeczywistym  
2. **Analiza sentymentu** \- Badanie opinii publicznej na temat określonych tematów  
3. **Research i analiza trendów** \- Identyfikacja popularnych zagadnień i influencerów  
4. **Lead Generation** \- Znajdowanie potencjalnych klientów zaangażowanych w określone tematy  
5. **Content Strategy** \- Analiza skutecznych formatów i tematów treści  
6. **Crisis Management** \- Monitorowanie reakcji na wydarzenia biznesowe

## **⚙️ Wymagania**

1. ✅ Działająca instancja n8n (v1.0+)  
2. ✅ Uprawnienia do konfiguracji workflow'ów  
3. 🔑 **Konto TwitterAPI.io** \- Zarejestruj się na [twitterapi.io](http://twitterapi.io)  
4. 🎟️ **API Key TwitterAPI.io** \- Klucz dostępu do API  
5. 📊 **Google Sheets** \- Arkusz do zapisu danych  
6. 🔐 **Google Sheets Credentials** \- Skonfigurowane w n8n

## **🔧 Konfiguracja Krok po Kroku**

### **1\. Przygotowanie TwitterAPI.io**

1. **Rejestracja:**  
2. Przejdź do [twitterapi.io](http://twitterapi.io)  
3. Utwórz konto i wybierz plan (dostępny plan darmowy z limitami)  
4. Znajdź swój API Key w dashboard  
5. **Konfiguracja w n8n:**  
6. Przejdź do Settings → Credentials  
7. Dodaj nowe credential typu "HTTP Header Auth"  
8. Nazwa nagłówka: `Authorization`  
9. Wartość: `Bearer TWÓJ_API_KEY`

### **2\. Konfiguracja Google Sheets**

1. **Przygotowanie arkusza:**  
2. Utwórz nowy Google Sheets  
3. Nagłówki kolumn: Tweet ID, URL, Content, Likes, Retweets, Replies, Quotes, Views, Date  
4. Skopiuj ID arkusza z URL  
5. **Credentials Google Sheets:**  
6. W n8n: Settings → Credentials → Google Sheets OAuth2 API  
7. Przeprowadź autoryzację OAuth2

### **3\. Import i Konfiguracja Workflow**

1. **Import workflow:**  
2. Otwórz n8n w przeglądarce  
3. Kliknij **"Import workflow"**  
4. Wybierz plik `scraper-twitter-x.json`  
5. Zatwierdź import  
6. **Konfiguracja parametrów wyszukiwania:**  
7. W węźle **"Pobierz Tweety"** dostosuj:

{

"query": "Twoje słowo kluczowe",

"queryType": "Top" // lub "Latest", "Photos", "Videos"

}

1. **Konfiguracja Google Sheets:**  
2. W węźle **"Dodaj do Arkusza"** wybierz swój arkusz  
3. Zweryfikuj mapowanie kolumn

### **4\. Dostosowanie Parametrów**

**Liczba iteracji:**

1. W węźle **"Warunek"** zmień wartość `3` na pożądaną liczbę stron do pobrania  
2. Każda iteracja pobiera \~20-50 tweetów

**Kryteria wyszukiwania:**

1. `query`: główne słowo kluczowe lub fraza  
2. `queryType`:  
3. `Top` \- najpopularniejsze tweety  
4. `Latest` \- najnowsze tweety  
5. `Photos` \- tweety ze zdjęciami  
6. `Videos` \- tweety z wideo

## **🧪 Testowanie**

### **Scenariusz testowy:**

1. Ustaw prostą frazę jak "AI" w parametrze query  
2. Zmień liczbę iteracji na 1 dla testu  
3. Uruchom workflow klikając **"Execute Workflow"**  
4. Sprawdź czy dane pojawiają się w Google Sheets

### **Weryfikacja wyników:**

1. Sprawdź czy wszystkie kolumny są wypełnione  
2. Zweryfikuj poprawność dat i liczb  
3. Upewnij się, że URL tweetów działają  
4. Sprawdź czy nie ma duplikatów

## **❗ Rozwiązywanie Problemów**

### **Częste błędy:**

**401 Unauthorized:**

1. Sprawdź poprawność API Key w credentials  
2. Upewnij się, że klucz jest aktywny na [twitterapi.io](http://twitterapi.io)  
3. Zweryfikuj format nagłówka Authorization

**429 Too Many Requests:**

1. Sprawdź limity swojego planu na [twitterapi.io](http://twitterapi.io)  
2. Dodaj opóźnienia między iteracjami  
3. Zredukuj liczbę iteracji

**Empty Results:**

1. Zweryfikuj czy fraza wyszukiwania zwraca rezultaty  
2. Sprawdź czy queryType jest odpowiedni  
3. Upewnij się, że tweety istnieją dla danego zapytania

**Google Sheets Error:**

1. Zweryfikuj uprawnienia do arkusza  
2. Sprawdź czy ID arkusza jest poprawne  
3. Upewnij się, że credentials są ważne

### **Wskazówki optymalizacji:**

1. Używaj konkretnych fraz zamiast ogólnych słów  
2. Testuj różne queryType dla lepszych rezultatów  
3. Monitoruj wykorzystanie API quota  
4. Regularnie czyść duplikaty w arkuszu

## **💡 Tips & Best Practices**

### **Efektywne wyszukiwanie:**

1. **Używaj operatorów**: `"exact phrase"`, `keyword1 OR keyword2`  
2. **Filtruj spam**: Dodaj `-spam -bot` do query  
3. **Lokalizacja**: Używaj `near:"miasto"` dla geo-targetingu  
4. **Język**: Dodaj `lang:pl` dla polskich tweetów

### **Zarządzanie danymi:**

1. Implementuj deduplikację na poziomie Tweet ID  
2. Dodaj timestamping dla każdego uruchomienia  
3. Archiwizuj stare dane regularnie  
4. Używaj oddzielnych arkuszy dla różnych kampanii

### **Monitoring i alerting:**

1. Ustaw alerty dla przekroczenia limitów API  
2. Monitoruj jakość zbieranych danych  
3. Sprawdzaj trendy w metrykach engagement  
4. Dokumentuj zmiany w strategii wyszukiwania

### **Bezpieczeństwo:**

1. Regularnie rotuj API keys  
2. Nie udostępniaj credentials w kodzie  
3. Ogranicz dostęp do arkuszy Google Sheets  
4. Audytuj kto ma dostęp do danych

## **🚀 Rozszerzenia i Następne Kroki**

### **Możliwe integracje:**

1. **Analiza AI** \- Sentiment analysis z OpenAI/Anthropic  
2. **Alerting** \- Powiadomienia Slack/Email o ważnych tweetach  
3. **Visualization** \- Dashboardy w Tableau/Power BI  
4. **CRM Integration** \- Import leadów do Pipedrive/HubSpot  
5. **Content Planning** \- Analiza konkurencji dla calendar contentowy

### **Advanced Features:**

1. **Multi-keyword tracking** \- Śledzenie wielu fraz jednocześnie  
2. **User profiling** \- Analiza profili najbardziej aktywnych użytkowników  
3. **Trend detection** \- Automatyczne wykrywanie viral content  
4. **Competitor analysis** \- Porównanie performance między markami  
5. **Automated reporting** \- Tygodniowe raporty PDF

### **Schemat danych do analizy:**

1. **Temporal analysis** \- Trendy czasowe w engagement  
2. **Content performance** \- Które typy treści działają najlepiej  
3. **Influencer identification** \- Kto ma największy reach  
4. **Hashtag effectiveness** \- Analiza skuteczności tagów

**Kategoria**: Social Media Analytics & Data Collection | **Złożoność**: Zaawansowany | **Wartość biznesowa**: 10/10

💡 **Potrzebujesz pomocy?** Załóż nowy wątek w społeczności dotyczący tego workflow'a aby uzyskać wsparcie od innych użytkowników.

Resources  
scraper-twitter-x.json

—--------

Scraping Apify \- Instrukcja Konfiguracji

# 

## **📋 Przegląd**

Workflow **Web Scraping** o poziomie złożoności: **Średni**.

Ten workflow automatyzuje pobieranie danych z Google Maps przy użyciu platformy Apify. Wykorzystuje actor `compass~google-maps-extractor` do ekstrakcji informacji o lokalnych firmach (np. hydraulicy w Nowym Jorku) wraz z możliwością uruchomienia asynchronicznego lub synchronicznego.

## **🎯 Zastosowania Biznesowe**

1. **Lead Generation** \- Automatyczne zbieranie kontaktów do lokalnych firm w określonej branży  
2. **Analiza konkurencji** \- Monitorowanie firm w danej lokalizacji i branży  
3. **Badanie rynku** \- Identyfikacja potencjalnych partnerów biznesowych lub dostawców  
4. **Marketing lokalny** \- Tworzenie baz danych dla kampanii marketingowych  
5. **Due diligence** \- Weryfikacja informacji o firmach w określonych lokalizacjach

## **⚙️ Wymagania**

1. ✅ Działająca instancja n8n (v1.0+)  
2. ✅ Uprawnienia do konfiguracji workflow'ów  
3. 🔑 **Konto Apify** \- Zarejestruj się na [Apify.com](http://Apify.com)  
4. 🎟️ **Apify API Token** \- Dostępny w ustawieniach konta Apify  
5. 💳 **Kredyty Apify** \- Wymagane do uruchomienia actorów

## **🔧 Konfiguracja Krok po Kroku**

### **1\. Przygotowanie Apify**

1. **Rejestracja na Apify:**  
2. Przejdź do [Apify.com](http://Apify.com)  
3. Utwórz darmowe konto  
4. Zapoznaj się z dostępnymi planami taryfowymi  
5. **Pozyskanie API Token:**  
6. Zaloguj się do konsoli Apify  
7. Przejdź do Settings → Integrations → API tokens  
8. Skopiuj swój Personal API token

### **2\. Import i Konfiguracja Workflow'a**

1. **Import do n8n:**  
2. Otwórz n8n w przeglądarce  
3. Kliknij **"Import workflow"**  
4. Wybierz plik `scraping-Apify.json`  
5. Zatwierdź import  
6. **Konfiguracja API Token:**  
7. W nodzie **"Google Maps Actor"** zastąp `YOUR API KEY` swoim tokenem  
8. W nodzie **"Get Results"** zastąp `YOUR API KEY` swoim tokenem  
9. W nodzie **"Sync Run"** zastąp klucz API (jeśli planujesz użyć)

### **3\. Personalizacja Parametrów Wyszukiwania**

**W nodzie "Google Maps Actor" dostosuj:**

{

"language": "pl",

"locationQuery": "Warszawa, Polska",

"maxCrawledPlacesPerSearch": 50,

"searchStringsArray": \[

"hydraulicy"

\],

"skipClosedPlaces": false

}

**Dostępne parametry:**

1. `language`: język wyników (pl, en, etc.)  
2. `locationQuery`: lokalizacja do przeszukania  
3. `maxCrawledPlacesPerSearch`: maksymalna liczba miejsc do przeszukania  
4. `searchStringsArray`: tablica słów kluczowych do wyszukiwania  
5. `skipClosedPlaces`: czy pomijać zamknięte miejsca

### **4\. Ustawienie Czasu Oczekiwania**

W nodzie **"Wait"** ustaw odpowiedni czas (domyślnie 25 sekund):

1. Dla małych zapytań: 10-20 sekund  
2. Dla większych zapytań: 30-60 sekund  
3. Monitor postęp w konsoli Apify

## **🧪 Testowanie**

### **Scenariusz testowy:**

1. Ustaw parametry dla małego obszaru testowego  
2. Użyj `maxCrawledPlacesPerSearch: 5` dla testu  
3. Uruchom workflow klikając **"Execute Workflow"**  
4. Sprawdź wyniki w nodzie **"Get Results"**

### **Weryfikacja wyników:**

1. Sprawdź czy dane zawierają nazwy firm, adresy, numery telefonów  
2. Zweryfikuj poprawność geolokalizacji  
3. Upewnij się, że dane nie są zduplikowane

## **❗ Rozwiązywanie Problemów**

### **Częste błędy:**

**401 Unauthorized:**

1. Sprawdź poprawność API tokenu Apify  
2. Upewnij się, że token nie wygasł  
3. Zweryfikuj uprawnienia w koncie Apify

**429 Too Many Requests:**

1. Zwiększ czas oczekiwania w nodzie "Wait"  
2. Zredukuj liczbę zapytań na minutę  
3. Sprawdź limity swojego planu Apify

**Empty Results:**

1. Zweryfikuj poprawność `locationQuery`  
2. Sprawdź czy `searchStringsArray` zawiera prawidłowe terminy  
3. Upewnij się, że w danej lokalizacji istnieją firmy z branży

### **Wskazówki optymalizacji:**

1. Rozpocznij od małych obszarów geograficznych  
2. Testuj różne słowa kluczowe dla swojej branży  
3. Monitoruj zużycie kredytów Apify w czasie rzeczywistym  
4. Używaj cache'owania dla powtarzających się zapytań

## **💡 Tips & Best Practices**

### **Bezpieczeństwo:**

1. **Nigdy nie commituj** API tokenów do repozytorium  
2. Używaj environment variables dla credentials  
3. Regularnie odnawiaj tokeny dostępowe

### **Wydajność:**

1. Używaj wersji asynchronicznej dla większych datasets  
2. Implementuj retry logic dla failed requests  
3. Batch'uj zapytania aby oszczędzać kredyty

### **Zarządzanie danymi:**

1. Eksportuj wyniki do CSV lub bazy danych  
2. Implementuj deduplikację danych  
3. Dodaj timestamping dla tracked changes

### **Monitoring:**

1. Ustaw alerty dla przekroczenia limitów kredytów  
2. Monitoruj success rate requests  
3. Track wykonania w n8n execution log

## **🚀 Rozszerzenia i Następne Kroki**

### **Możliwe integracje:**

1. **CRM Integration** \- Automatyczny import leadów do Pipedrive/HubSpot  
2. **Email Marketing** \- Dodawanie kontaktów do kampanii MailChimp  
3. **Enrichment** \- Wzbogacanie danych o social media profiles  
4. **Reporting** \- Automatyczne generowanie raportów w Google Sheets

### **Advanced Features:**

1. Scheduling dla regularnego scrapingu  
2. Multi-location bulk processing  
3. Custom filtering i data transformation  
4. Integration z Google Analytics dla lead trackingu

**Kategoria**: Web Scraping & Data Extraction | **Złożoność**: Średni | **Wartość biznesowa**: 9/10

💡 **Potrzebujesz pomocy?** Załóż nowy wątek w społeczności dotyczący tego workflow'a aby uzyskać wsparcie od innych użytkowników.

Resources  
scraping-Apify.json

—----

OCR Mistral \- Instrukcja Konfiguracji

# 

## **📋 Przegląd**

Workflow **OCR & Document Processing** o poziomie złożoności: **Średni**.

Ten workflow automatyzuje proces rozpoznawania tekstu z dokumentów (OCR) przy użyciu zaawansowanego modelu Mistral AI. System umożliwia upload dokumentów przez formularz webowy, automatyczne przetwarzanie przez API Mistral OCR i ekstraktowanie tekstu z obrazów, PDF oraz innych formatów dokumentów z zachowaniem wysokiej jakości rozpoznawania.

## **🎯 Zastosowania Biznesowe**

1. **Digitalizacja dokumentów** \- Automatyczne przekształcanie papierowych dokumentów w edytowalne teksty  
2. **Procesowanie faktur** \- Ekstraktowanie danych z faktur, rachunków i dokumentów księgowych  
3. **Analiza umów i kontraktów** \- Szybkie wyciąganie kluczowych informacji z dokumentów prawnych  
4. **Archiwizacja cyfrowa** \- Masowe przetwarzanie dokumentów dla celów archiwizacyjnych  
5. **Analiza formularzy** \- Automatyczne odczytywanie wypełnionych formularzy i ankiet  
6. **Compliance i audyt** \- Przetwarzanie dokumentów regulacyjnych i raportów

## **⚙️ Wymagania**

1. ✅ Działająca instancja n8n (v1.0+)  
2. ✅ Uprawnienia do konfiguracji workflow'ów  
3. 🔑 **Konto Mistral AI** \- Zarejestruj się na [platform.mistral.ai](http://platform.mistral.ai)  
4. 🎟️ **Mistral API Key** \- Klucz dostępu do API OCR  
5. 🌐 **Publiczny URL n8n** \- Dla webhooków formularza (ngrok, tunel itp.)  
6. 📁 **Obsługiwane formaty**: PDF, PNG, JPG, JPEG, TIFF, BMP

## **🔧 Konfiguracja Krok po Kroku**

### **1\. Przygotowanie Mistral AI**

1. **Rejestracja:**  
2. Przejdź do [platform.mistral.ai](http://platform.mistral.ai)  
3. Utwórz konto i zweryfikuj email  
4. Przejdź do sekcji API Keys  
5. **Pozyskanie API Key:**  
6. W dashboard Mistral AI kliknij "Create API Key"  
7. Skopiuj wygenerowany klucz (zaczyna się od `mr-...`)  
8. Zapisz klucz w bezpiecznym miejscu

### **2\. Konfiguracja Credentials w n8n**

1. **Dodanie Mistral API Key:**  
2. W n8n: Settings → Credentials  
3. Dodaj nowe credential typu "HTTP Header Auth"  
4. Nazwa nagłówka: `Authorization`  
5. Wartość: `Bearer YOUR_MISTRAL_API_KEY`  
6. Zapisz jako "Mistral OCR API"

### **3\. Import i Konfiguracja Workflow**

1. **Import workflow:**  
2. Otwórz n8n w przeglądarce  
3. Kliknij **"Import workflow"**  
4. Wybierz plik `ocr-mistral.json`  
5. Zatwierdź import  
6. **Konfiguracja credentials:**  
7. W każdym węźle HTTP Request wybierz "Mistral OCR API"  
8. Upewnij się, że wszystkie 3 węzły mają przypisane credentials  
9. **Konfiguracja formularza:**  
10. W węźle **"Przesłanie Formularza"** dostosuj:  
11. `formTitle`: "Rozpoznawanie Tekstu z Dokumentu"  
12. `formDescription`: "Prześlij dokument do analizy OCR"  
13. `fieldLabel`: "Dokument"

### **4\. Testowanie i Uruchomienie**

1. **Aktywacja workflow:**  
2. Kliknij przycisk "Active" w n8n  
3. Skopiuj URL webhooką z węzła formularza  
4. **Test upload:**  
5. Otwórz URL formularza w przeglądarce  
6. Prześlij testowy dokument (PDF lub obraz)  
7. Sprawdź execution log w n8n

## **🧪 Testowanie**

### **Scenariusz testowy:**

1. Przygotuj testowy dokument PDF z tekstem  
2. Otwórz formularz przez webhook URL  
3. Prześlij dokument i sprawdź proces  
4. Zweryfikuj wyniki OCR w ostatnim węźle

### **Weryfikacja wyników:**

1. Sprawdź czy tekst został poprawnie rozpoznany  
2. Zweryfikuj jakość OCR dla różnych typów dokumentów  
3. Upewnij się, że metadane są prawidłowe  
4. Sprawdź czy obrazy base64 są opcjonalnie zachowane

## **❗ Rozwiązywanie Problemów**

### **Częste błędy:**

**401 Unauthorized:**

1. Sprawdź poprawność Mistral API Key  
2. Upewnij się, że klucz jest aktywny i nie wygasł  
3. Zweryfikuj format nagłówka Authorization

**413 Payload Too Large:**

1. Dokumenty większe niż 10MB mogą być odrzucone  
2. Kompresuj obrazy lub podziel duże dokumenty  
3. Sprawdź limity swojego planu Mistral AI

**422 Unprocessable Entity:**

1. Nieobsługiwany format pliku  
2. Sprawdź czy plik nie jest uszkodzony  
3. Upewnij się, że format jest obsługiwany (PDF, PNG, JPG)

**Formularz nie działa:**

1. Sprawdź czy n8n ma publiczny URL  
2. Zweryfikuj konfigurację webhook URL  
3. Upewnij się, że workflow jest aktywny

### **Wskazówki optymalizacji:**

1. Używaj wysokiej jakości skanów dla lepszego OCR  
2. Dokumenty w formacie PDF działają najlepiej  
3. Unikaj dokumentów z bardzo małym tekstem  
4. Testuj różne ustawienia `include_image_base64`

## **💡 Tips & Best Practices**

### **Jakość dokumentów:**

1. **Rozdzielczość**: Minimum 300 DPI dla skanów  
2. **Kontrast**: Wyraźny kontrast między tekstem a tłem  
3. **Orientacja**: Upewnij się, że tekst jest w poziomie  
4. **Format**: PDF zazwyczaj daje najlepsze rezultaty

### **Bezpieczeństwo:**

1. Nie przechowuj API keys w kodzie workflow  
2. Używaj HTTPS dla webhook URLs  
3. Implementuj walidację typów plików  
4. Regularnie rotuj API keys

### **Performance:**

1. Batch'uj małe dokumenty gdy to możliwe  
2. Monitoruj użycie API quota Mistral  
3. Implementuj cache dla powtarzających się dokumentów  
4. Optymalizuj rozmiar plików przed wysłaniem

### **Integracje:**

1. Zapisuj wyniki do bazy danych  
2. Dodaj email notifications o zakończeniu procesowania  
3. Implementuj queue system dla dużych wolumenów  
4. Dodaj retry logic dla failed requests

## **🚀 Rozszerzenia i Następne Kroki**

### **Możliwe integracje:**

1. **Google Drive** \- Automatyczny save wyników OCR  
2. **Slack/Teams** \- Powiadomienia o przetworzonych dokumentach  
3. **Database** \- Strukturalne przechowywanie wyników  
4. **Email** \- Wysyłanie wyników OCR na email  
5. **AI Analysis** \- Dalsze przetwarzanie tekstu przez GPT/Claude

### **Advanced Features:**

1. **Multi-language OCR** \- Rozpoznawanie różnych języków  
2. **Table extraction** \- Wykrywanie i ekstraktowanie tabel  
3. **Form field recognition** \- Automatyczne wypełnianie formularzy  
4. **Document classification** \- Automatyczna kategoryzacja dokumentów  
5. **Batch processing** \- Masowe przetwarzanie wielu plików

### **Workflow enhancements:**

1. **Quality validation** \- Sprawdzanie jakości OCR przed zapisem  
2. **Error handling** \- Lepsze zarządzanie błędami  
3. **Progress tracking** \- Status przetwarzania dla dużych dokumentów  
4. **Custom prompts** \- Dostosowane instrukcje dla modelu OCR

### **Przypadki użycia branżowe:**

1. **Healthcare**: Digitalizacja dokumentacji medycznej  
2. **Legal**: Przetwarzanie umów i dokumentów prawnych  
3. **Finance**: Analiza raportów finansowych i faktur  
4. **Education**: Digitalizacja materiałów edukacyjnych  
5. **Government**: Procesowanie dokumentów urzędowych

**Kategoria**: Document Processing & OCR | **Złożoność**: Średni | **Wartość biznesowa**: 9/10

💡 **Potrzebujesz pomocy?** Załóż nowy wątek w społeczności dotyczący tego workflow'a aby uzyskać wsparcie od innych użytkowników.

Resources  
ocr-mistral.json

—------

CONTENT i SOCIAL MEDIA

Viralowe Shorts \- Instrukcja Konfiguracji

# 

## **📋 Przegląd**

Workflow **Video Content Creation & Social Media Automation** o poziomie złożoności: **Ekspert**.

Ten workflow implementuje zaawansowany system automatycznej produkcji wiralnych filmów ASMR w stylu "Glass Fruit Cutting" z wykorzystaniem Google Veo 3\. System integruje generowanie pomysłów przez AI, tworzenie realistycznych promptów wideo, generowanie filmów przez Fal AI, oraz automatyczną publikację na YouTube, TikTok i Instagram poprzez Blotato. Workflow pracuje na harmonogramie i zarządza historią obiektów poprzez Google Sheets.

## **🎯 Zastosowania Biznesowe**

1. **Viral Content Production** \- Automatyczna produkcja trendy ASMR content dla maksymalnego engagement  
2. **Multi-Platform Publishing** \- Jednoczesna publikacja na YouTube, TikTok i Instagram  
3. **Content Calendar Automation** \- Scheduled content creation i publishing bez manual intervention  
4. **Brand Presence Building** \- Konsystentne budowanie obecności w viral content niches  
5. **ASMR Market Penetration** \- Systematic approach do popular ASMR glass cutting trend  
6. **Social Media Growth** \- Automated viral content dla rapid follower acquisition

## **⚙️ Wymagania**

1. ✅ Działająca instancja n8n (v1.0+)  
2. ✅ Uprawnienia do konfiguracji workflow'ów i schedule triggers  
3. 🤖 **OpenRouter API** \- GPT-4.1-mini dla AI content generation  
4. 🎬 **Fal AI API** \- Google Veo 3 video generation access  
5. 📱 **Blotato API** \- Multi-platform social media publishing  
6. 📊 **Google Sheets API** \- Object tracking i content management  
7. 🎥 **YouTube, TikTok, Instagram accounts** \- Target publishing platforms  
8. 💳 **Premium API Credits** \- High usage dla video generation i publishing

## **🔧 Konfiguracja Krok po Kroku**

### **1\. Przygotowanie OpenRouter API**

1. **Setup GPT-4.1-mini access:**  
2. Zarejestruj się na [openrouter.ai](http://openrouter.ai)  
3. Wygeneruj API key z dostępem do GPT-4.1-mini  
4. Sprawdź rate limits i budżet  
5. Ustaw appropriate usage monitoring  
6. **Konfiguracja credentials w n8n:**  
7. Utwórz OpenRouter API credentials  
8. Zweryfikuj connectivity z GPT-4.1-mini model  
9. Test basic prompting functionality

### **2\. Konfiguracja Fal AI (Google Veo 3\)**

1. **Fal AI Platform setup:**  
2. Utwórz konto na [fal.ai](http://fal.ai)  
3. Wygeneruj API key  
4. Sprawdź dostęp do Veo 3 queue endpoints  
5. Ustaw billing i usage limits  
6. **Video generation parameters:**  
7. Model: `fal-ai/veo3`  
8. Aspect ratio: `9:16` (vertical for shorts)  
9. Audio generation: `true`  
10. Queue-based processing dla scalability

### **3\. Konfiguracja Blotato Multi-Platform Publishing**

1. **Blotato account setup:**  
2. Zarejestruj się na [blotato.com](http://blotato.com)  
3. Uzyskaj API key  
4. Połącz YouTube, TikTok i Instagram accounts  
5. Sprawdź publishing permissions  
6. **Platform-specific configurations:**  
7. **YouTube**: Public uploads, subscriber notifications disabled  
8. **TikTok**: Public posts, AI-generated content flagged  
9. **Instagram**: Standard reel publishing

### **4\. Google Sheets Integration**

1. **Template setup:**  
2. Skopiuj template z workflow instructions  
3. Utwórz własną kopię w Google Drive  
4. Skonfiguruj appropriate sharing permissions  
5. Sprawdź column structure (Object, URL)  
6. **Google Sheets API:**  
7. Włącz Google Sheets API w Google Cloud Console  
8. Utwórz service account lub OAuth2 credentials  
9. Skonfiguruj n8n Google Sheets nodes  
10. Test read/write operations

### **5\. Import i Konfiguracja Workflow**

1. **Import workflow:**  
2. Otwórz n8n w przeglądarce  
3. Kliknij **"Import workflow"**  
4. Wybierz plik `viral-shorts.json`  
5. Zatwierdź import  
6. **Schedule trigger configuration:**  
7. Ustaw interval (domyślnie: co 8 godzin)  
8. Dostosuj timing do optimal posting hours  
9. Sprawdź timezone settings  
10. Test manual trigger functionality

### **6\. AI Agents Configuration**

**Idea Agent System Message:**

\# Overview

You are an AI agent that selects unique fruits for ASMR-style glass cutting videos.

\#\# Your Task

You will receive a list of 7 fruits that have already been used.

Your job is to generate one new fruit that is not on that list, and would look visually compelling if it were made of glass and cut with a knife in a close-up ASMR video.

\#\# Requirements

\- The fruit must not repeat any of the 7 provided items

\- The fruit must have a clear, recognizable shape and be physically feasible to cut

\- Prioritize fruits that would look aesthetic and interesting with translucent, colored glass texture

\- Do not explain or describe the fruit

\#\# Output Format

{

"object": "Glass \[Object name\]",

"caption": "Glass \[Object name\] ASMR"

}

**Prompt Agent Configuration:**

\# Overview

You are an AI agent that specializes in generating text-to-video prompts optimized for ASMR-style videos using Google Veo 3\. These videos must be 9:16 aspect ratio.

\#\# Core Requirements:

\- The video must feel cinematic and photorealistic

\- Scene is a static, close-up shot of a dark wooden cutting board and heavy steel knife

\- Cutting must look physically possible — glass should break cleanly, not shatter

\- The video starts immediately with the cutting action

\- Object must retain some color for visual contrast

\- Four distinct ASMR sound layers required

\#\# Sound Design Requirements:

1\. Sharp tap of knife touching glass

2\. Smooth, controlled slicing sound through glass

3\. Soft thud as knife hits board

4\. Delicate clink as cut piece lands on board

### **7\. Advanced Workflow Configuration**

**Video Processing Pipeline:**

1\. Schedule Trigger (8-hour intervals)

2\. Fetch last 7 objects from Google Sheets

3\. Generate new unique fruit idea via AI

4\. Create detailed ASMR video prompt

5\. Submit to Fal AI Veo 3 queue

6\. Wait 5 minutes for processing

7\. Poll for results with 30-second retries

8\. Extract video URL

9\. Update Google Sheets with new object

10\. Upload to Blotato

11\. Publish to all platforms simultaneously

**Error Handling:**

1. Video generation failures: Continue with error output  
2. Platform publishing errors: Continue to other platforms  
3. Retry logic dla failed API calls  
4. Comprehensive logging dla debugging

## **🧪 Testowanie**

### **Scenariusze testowe kompleksowe:**

**Test 1 \- Manual trigger test:**

1\. Disable schedule trigger

2\. Run manual trigger

3\. Monitor each step w workflow execution

4\. Verify idea generation uniqueness

5\. Check video prompt quality

6\. Confirm Fal AI submission

7\. Validate final video output

**Test 2 \- End-to-end automation:**

1\. Enable schedule trigger

2\. Populate Google Sheets z sample data

3\. Wait dla automatic execution

4\. Monitor video generation process

5\. Verify multi-platform publishing

6\. Check Google Sheets updates

7\. Validate content quality across platforms

**Test 3 \- Error scenarios:**

Test cases:

\- Fal AI API rate limiting

\- Blotato publishing failures

\- Google Sheets access issues

\- Invalid video generation results

\- Network connectivity problems

Verify:

\- Graceful error handling

\- Appropriate retry mechanisms

\- Error logging i notifications

\- Workflow continuation on partial failures

**Test 4 \- Content quality validation:**

Generated content checks:

\- Unique fruit selection (no repeats)

\- High-quality ASMR video prompts

\- Proper 9:16 aspect ratio videos

\- Appropriate ASMR sound design

\- Professional video quality

\- Consistent branding across platforms

### **Weryfikacja wyników:**

1. Sprawdź uniqueness fruit selection across runs  
2. Zweryfikuj video quality i ASMR elements  
3. Upewnij się o successful multi-platform publishing  
4. Potwierdź proper Google Sheets management

## **❗ Rozwiązywanie Problemów**

### **Częste błędy:**

**Fal AI video generation failures:**

1. Sprawdź API key validity i permissions  
2. Zweryfikuj Veo 3 model availability  
3. Upewnij się o proper prompt formatting  
4. Monitor queue processing times i rate limits  
5. Check billing status i available credits

**Blotato publishing errors:**

1. Sprawdź account IDs dla all platforms  
2. Zweryfikuj API permissions dla each social platform  
3. Upewnij się o proper content format requirements  
4. Test individual platform publishing  
5. Monitor rate limits i posting quotas

**Google Sheets synchronization issues:**

1. Sprawdź OAuth2 credentials validity  
2. Zweryfikuj spreadsheet permissions i sharing  
3. Upewnij się o correct sheet structure  
4. Test read/write operations manually  
5. Check dla data format consistency

**AI content generation problems:**

1. Monitor OpenRouter API usage i limits  
2. Sprawdź GPT-4.1-mini model availability  
3. Zweryfikuj prompt engineering quality  
4. Test manual agent executions  
5. Validate output parser functionality

**Schedule trigger issues:**

1. Sprawdź timezone configuration  
2. Zweryfikuj trigger interval settings  
3. Upewnij się o proper n8n instance uptime  
4. Monitor execution logs dla missed triggers  
5. Test manual trigger functionality

### **Wskazówki optymalizacji:**

1. Monitor API costs across all services  
2. Implement intelligent retry logic dla failed operations  
3. Optimize video generation prompts dla consistency  
4. Track content performance dla optimization insights  
5. Maintain backup strategies dla critical data

## **💡 Tips & Best Practices**

### **Content optimization:**

1. **Fruit variety**: Maintain diverse selection dla visual appeal  
2. **ASMR quality**: Focus na high-quality sound design elements  
3. **Visual consistency**: Ensure uniform style across all generated videos  
4. **Trend awareness**: Monitor popular ASMR trends dla prompt optimization

### **Automation efficiency:**

1. **Timing optimization**: Schedule posts during peak engagement hours  
2. **Resource management**: Balance quality z cost-effective API usage  
3. **Error resilience**: Implement robust fallback mechanisms  
4. **Performance monitoring**: Track success rates across all components

### **Social media strategy:**

1. **Platform optimization**: Customize content dla each platform's algorithm  
2. **Engagement tracking**: Monitor performance metrics dla content optimization  
3. **Hashtag strategy**: Implement consistent tagging dla discoverability  
4. **Community building**: Respond to engagement patterns i feedback

### **Technical optimization:**

1. **API cost management**: Monitor usage across all services  
2. **Video quality**: Balance render time z output quality  
3. **Storage efficiency**: Implement cleanup dla temporary video files  
4. **Scalability planning**: Prepare dla increased volume demands

## **🚀 Rozszerzenia i Następne Kroki**

### **Możliwe integracje:**

1. **Analytics Platforms** \- YouTube Analytics, TikTok Analytics dla performance tracking  
2. **Content Management** \- Advanced scheduling i content calendar integration  
3. **Thumbnail Generation** \- AI-powered thumbnail creation dla better CTR  
4. **Comment Management** \- Automated response systems dla social engagement  
5. **Trend Analysis** \- Real-time trend detection dla content optimization

### **Advanced Features:**

1. **Multi-language support** \- Localized content dla global audiences  
2. **Advanced AI models** \- Integration z newer video generation technologies  
3. **Interactive elements** \- Poll integration i community engagement features  
4. **Brand customization** \- Custom ASMR styles i branding elements  
5. **Performance ML** \- Machine learning dla content optimization

### **Enterprise capabilities:**

1. **Team collaboration** \- Multi-user content approval workflows  
2. **Brand management** \- Automated brand compliance i style guides  
3. **Scale automation** \- High-volume content production capabilities  
4. **Advanced analytics** \- Deep performance insights i optimization recommendations  
5. **Custom integrations** \- Bespoke platform integrations dla unique requirements

### **AI-Powered enhancements:**

1. **Predictive content** \- AI-driven trend prediction dla proactive content creation  
2. **Quality optimization** \- Automated quality assessment i improvement suggestions  
3. **Engagement prediction** \- AI-powered engagement forecasting  
4. **Content personalization** \- Dynamic content adaptation based na audience data  
5. **Automated A/B testing** \- Systematic content variation testing

### **Integration ecosystem:**

1. **Video editing tools** \- Advanced post-processing automation  
2. **Music libraries** \- ASMR sound library integration  
3. **Collaboration platforms** \- Team workflow management integration  
4. **Analytics dashboards** \- Comprehensive performance monitoring  
5. **Marketing automation** \- Cross-platform campaign coordination

**Kategoria**: Video Content Creation & Social Media Automation | **Złożoność**: Ekspert | **Wartość biznesowa**: 10/10

💡 **Potrzebujesz pomocy?** Załóż nowy wątek w społeczności dotyczący tego workflow'a aby uzyskać wsparcie od innych użytkowników.

Resources  
viral-shorts.json

—-------

Faceless Shorts \- Instrukcja Konfiguracji

# 

## **📋 Przegląd**

Workflow **AI Versus \- Faceless Shorts Generator** o poziomie złożoności: **Zaawansowany**.

Ten workflow implementuje kompletny system tworzenia viralowych filmów typu "Animal VS Animal" bez użycia własnego wizerunku. System automatycznie pobiera dane z Google Sheets, generuje scenariusze walk, tworzy realistyczne obrazy AI, łączy je w filmiki przy użyciu Creatomate, a następnie automatycznie publikuje na Instagram, TikTok i YouTube. Idealny do tworzenia angażującej zawartości bez konieczności pojawiania się przed kamerą.

## **🎯 Zastosowania Biznesowe**

1. **Viral Content Creation** \- Automatyczne tworzenie angażujących filmów viralowych  
2. **Faceless YouTube Channel** \- Prowadzenie kanału bez pokazywania twarzy  
3. **Social Media Management** \- Systematyczne publikowanie na trzech platformach  
4. **Content Marketing** \- Budowanie audience przez entertainment content  
5. **Passive Income** \- Monetyzacja przez YouTube AdSense i affiliate marketing  
6. **Brand Entertainment** \- Tworzenie zabawnych filmów dla marek zwierzęcych

## **⚙️ Wymagania**

1. ✅ Działająca instancja n8n (v1.0+)  
2. ✅ Uprawnienia do konfiguracji workflow'ów  
3. 📊 **Google Sheets** \- Zarządzanie listą zwierząt i statusów  
4. 🔑 **Google Sheets API** \- Dostęp do odczytu i zapisu danych  
5. 🤖 **OpenRouter API Key** \- GPT-4 dla generowania scenariuszy  
6. 🎨 **PiAPI Account** \- Generowanie obrazów AI (Flux model)  
7. 🎬 **Creatomate Account** \- Template ID do renderowania filmów  
8. 📱 **Blotato Account** \- Automatyczna publikacja na social media  
9. 🎵 **Google Drive** \- Hosting plików muzycznych do filmów

## **🔧 Konfiguracja Krok po Kroku**

### **1\. Przygotowanie Google Sheets**

1. **Struktura arkusza:**  
2. Utwórz arkusz "Viral Shorts" w Google Sheets  
3. Kolumny: `Main Character` | `Opponents` | `Status` | `Final Video` | `1.1-8.3` (obrazy)  
4. Wypełnij główne zwierzęta (np. "Lion", "Tiger", "Gorilla")  
5. Kategorię przeciwników (np. "African Animals", "Big Cats")  
6. Ustaw Status na "To Do" dla nowych filmów  
7. **Przykładowe dane:**

Main Character | Opponents | Status | Final Video | 1.1-8.3

Lion | African Animals | To Do | | \[image URLs\]

Tiger | Big Cats | Created| \[video URL\] | \[image URLs\]

### **2\. Konfiguracja API Keys**

1. **OpenRouter API:**  
2. Zarejestruj się na [openrouter.ai](http://openrouter.ai)  
3. Wygeneruj API key  
4. Upewnij się, że masz dostęp do GPT-4 models  
5. **PiAPI Account:**  
6. Przejdź do [piapi.ai](http://piapi.ai)  
7. Utwórz konto i wygeneruj API key  
8. Sprawdź dostęp do Flux1-dev model  
9. **Creatomate Setup:**  
10. Zarejestruj się na [creatomate.com](http://creatomate.com)  
11. Utwórz template video z 8 scenami  
12. Skopiuj Template ID z dashboard  
13. **Blotato Integration:**  
14. Utwórz konto na [blotato.com](http://blotato.com)  
15. Połącz konta Instagram, TikTok, YouTube  
16. Wygeneruj API key dla automatycznej publikacji

### **3\. Import i Konfiguracja Workflow**

1. **Import workflow:**  
2. Otwórz n8n w przeglądarce  
3. Kliknij **"Import workflow"**  
4. Wybierz plik `faceless-shorts.json`  
5. Zatwierdź import  
6. **Konfiguracja Credentials:**  
7. **Google Sheets OAuth2**: Autoryzuj dostęp do arkusza  
8. **OpenRouter API**: Dodaj klucz do GPT-4 models  
9. **PiAPI**: Dodaj API key do generowania obrazów  
10. **Creatomate**: Dodaj API key i Template ID  
11. **Blotato**: Dodaj API key i Account IDs  
12. **Dostosowanie parametrów:**  
13. W **"Get Main Character"**: Ustaw ID swojego arkusza  
14. W **"Render Video"**: Zastąp Template ID i Bearer token  
15. W **"Upload to Blotato"**: Ustaw swoje Account IDs

### **4\. Konfiguracja Template Creatomate**

Szablon video powinien zawierać:

1. 8 scen porównawczych (VS format)  
2. Elementy: Top-Image, Bottom-Image, Full-Background-Image dla każdej sceny  
3. Middle-Text element z "VS"  
4. Background music track  
5. Wymiary: 9:16 (vertical) dla social media

### **5\. Testowanie Systemu**

1. **Test podstawowy:**  
2. Dodaj "Bear" jako Main Character, "Forest Animals" jako Opponents  
3. Ustaw Status na "To Do"  
4. Uruchom workflow ręcznie  
5. **Monitorowanie procesu:**  
6. Sprawdź czy GPT-4 generuje 8 różnych przeciwników  
7. Zweryfikuj tworzenie promptów dla obrazów  
8. Upewnij się, że PiAPI generuje realistyczne obrazy  
9. **Test publikacji:**  
10. Sprawdź czy video renderuje się w Creatomate  
11. Zweryfikuj upload do Blotato  
12. Potwierdź publikację na wszystkich platformach

## **🧪 Testowanie**

### **Scenariusze testowe:**

**Test 1 \- Generowanie scenariusza:**

1. Input: "Eagle" vs "Flying Animals"  
2. Oczekiwany rezultat: 8 różnych latających przeciwników (Hawk, Falcon, Owl, itp.)

**Test 2 \- Tworzenie obrazów:**

1. Sprawdź prompt quality dla close-up images  
2. Zweryfikuj realistic vs dramatic winner images  
3. Upewnij się, że wszystkie obrazy są 1024x1024 lub 540x960

**Test 3 \- Rendering video:**

1. Sprawdź czy wszystkie 24 obrazy (16 close-ups \+ 8 winners) są poprawnie mapowane  
2. Zweryfikuj timing i synchronizację z muzyką  
3. Potwierdź format 9:16 dla social media

### **Weryfikacja wyników:**

1. Sprawdź unikalność każdego przeciwnika  
2. Zweryfikuj realistyczność obrazów zwierząt  
3. Upewnij się, że winner images pokazują wyraźną dominację  
4. Potwierdź poprawność metadanych dla każdej platformy

## **❗ Rozwiązywanie Problemów**

### **Częste błędy:**

**GPT-4 nie generuje różnorodnych przeciwników:**

1. Dostosuj system message dla większej kreatywności  
2. Dodaj examples w prompcie  
3. Sprawdź czy kategoria przeciwników nie jest zbyt wąska

**PiAPI timeout lub błędy generowania:**

1. Zwiększ czas oczekiwania w węzłach "90 seconds"  
2. Sprawdź limity API i credyty na koncie  
3. Upewnij się, że prompty nie są zbyt skomplikowane

**Creatomate rendering fails:**

1. Zweryfikuj Template ID i wszystkie elementy  
2. Sprawdź czy obrazy URLs są dostępne  
3. Upewnij się, że music file URL jest publiczny

**Blotato publikacja nie działa:**

1. Sprawdź Account IDs dla każdej platformy  
2. Zweryfikuj uprawnienia połączonych kont  
3. Upewnij się, że video spełnia wymagania platform

### **Wskazówki optymalizacji:**

1. Używaj wysokiej jakości prompts dla lepszych obrazów  
2. Regularnie rotuj main characters dla różnorodności  
3. Monitoruj engagement metrics na każdej platformie  
4. Testuj różne kategorie przeciwników dla lepszych matchupów

## **💡 Tips & Best Practices**

### **Optymalizacja contentów:**

1. **Animal Selection**: Wybieraj popularne, rozpoznawalne zwierzęta  
2. **Realistic Matchups**: Twórz wiarygodne scenariusze walk  
3. **Visual Quality**: Używaj detailed prompts dla lepszych obrazów  
4. **Engagement**: Analizuj które matchupy generują największe zaangażowanie

### **Content scheduling:**

1. **Frequency**: Publikuj 1-2 filmy dziennie dla algorytmu  
2. **Timing**: Optymalizuj godziny publikacji dla każdej platformy  
3. **Variety**: Rotuj kategorie zwierząt (African, Ocean, Forest, etc.)  
4. **Trending**: Wykorzystuj popularne zwierzęta z mediów

### **Monetization strategies:**

1. **YouTube**: Włącz AdSense po osiągnięciu wymagań  
2. **Affiliate**: Promuj produkty związane ze zwierzętami  
3. **Sponsorships**: Współpracuj z markami animal/nature  
4. **Merchandise**: Twórz produkty z popularnymi matchupami

### **Technical optimization:**

1. **Batch processing**: Generuj kilka filmów naraz  
2. **Error handling**: Implementuj retry logic dla API failures  
3. **Cost monitoring**: Śledź usage wszystkich płatnych API  
4. **Quality control**: Regularnie sprawdzaj output quality

## **🚀 Rozszerzenia i Następne Kroki**

### **Możliwe integracje:**

1. **Multi-template system** \- Różne style video dla różnych platform  
2. **Voice narration** \- AI-generated commentary dla filmów  
3. **Analytics dashboard** \- Tracking performance across platforms  
4. **User voting system** \- Community-driven matchup selection  
5. **Merchandise integration** \- Auto-generate products from popular matchups

### **Advanced Features:**

1. **Dynamic pricing** \- Adjust posting frequency based on engagement  
2. **Seasonal content** \- Holiday-themed animal matchups  
3. **Series creation** \- Multi-part tournaments and championships  
4. **Interactive elements** \- Polls and user predictions  
5. **Cross-platform optimization** \- Platform-specific content variations

### **Content expansion:**

1. **New categories** \- Mythical creatures, dinosaurs, robots  
2. **Educational angle** \- Real animal facts and conservation  
3. **Historical matchups** \- Extinct vs modern animals  
4. **Size variations** \- Microscopic battles, giant creatures  
5. **Environment battles** \- Desert vs Arctic animals

### **Business scaling:**

1. **White label** \- Offer system to other content creators  
2. **API service** \- Provide animal matchup generation as service  
3. **Template marketplace** \- Sell video templates to community  
4. **Course creation** \- Teach faceless content creation  
5. **Agency model** \- Manage multiple channels for clients

### **Platform-specific optimizations:**

1. **TikTok**: Shorter, faster-paced versions with trending sounds  
2. **YouTube**: Longer form with multiple rounds and commentary  
3. **Instagram**: Story-friendly vertical format with polls  
4. **Twitter**: GIF versions for quick engagement  
5. **Pinterest**: Static infographic versions of matchups

**Kategoria**: Viral Content Creation & Social Media Automation | **Złożoność**: Zaawansowany | **Wartość biznesowa**: 9/10

💡 **Potrzebujesz pomocy?** Załóż nowy wątek w społeczności dotyczący tego workflow'a aby uzyskać wsparcie od innych użytkowników.

## 

Resources  
faceless-shorts.json

—--

Posty LinkedIn z Obrazkami \- Instrukcja

# 

## **📋 Przegląd**

Workflow **Content Creation & Social Media** o poziomie złożoności: **Zaawansowany**.

Ten workflow implementuje kompletny system automatycznej generacji profesjonalnych postów LinkedIn z towarzyszącymi grafikami. System integruje wyszukiwanie internetowe w czasie rzeczywistym, generowanie treści przez AI, tworzenie spersonalizowanych promptów graficznych, generowanie obrazów przez OpenAI DALL-E oraz automatyczne wysyłanie gotowego contentu przez email lub publikację na LinkedIn.

## **🎯 Zastosowania Biznesowe**

1. **Content Marketing Automation** \- Automatyczna produkcja profesjonalnych postów LinkedIn z grafikami  
2. **Social Media Management** \- Masowe tworzenie spersonalizowanego contentu dla różnych odbiorców  
3. **Thought Leadership** \- Regularne publikowanie insights'ów opartych na najnowszych research'ach  
4. **Brand Awareness** \- Konsystentne budowanie obecności marki w social media  
5. **Lead Generation** \- Tworzenie engażujących postów z call-to-action dla generowania leadów  
6. **Educational Content** \- Automatyczne tworzenie materiałów edukacyjnych z wizualizacjami

## **⚙️ Wymagania**

1. ✅ Działająca instancja n8n (v1.0+)  
2. ✅ Uprawnienia do konfiguracji workflow'ów  
3. 🤖 **OpenRouter API** \- Dostęp do modeli GPT-4.1 dla content generation  
4. 🔍 **Tavily API** \- Real-time web search capabilities  
5. 🎨 **OpenAI API** \- DALL-E image generation  
6. 📧 **Gmail OAuth2** \- Email delivery (opcjonalne)  
7. 💼 **LinkedIn OAuth2** \- Direct posting (opcjonalne)  
8. 💳 **API Credits** \- Wystarczające kredyty dla wszystkich usług

## **🔧 Konfiguracja Krok po Kroku**

### **1\. Przygotowanie OpenRouter API**

1. **Rejestracja i konfiguracja:**  
2. Przejdź do [openrouter.ai](http://openrouter.ai) i utwórz konto  
3. Wygeneruj API key w dashboard  
4. Sprawdź dostęp do modelu GPT-4.1  
5. Ustaw rate limits i budżet  
6. **Konfiguracja credentials w n8n:**  
7. Utwórz OpenRouter API credentials  
8. Użyj klucza w węźle GPT\_4.1  
9. Zweryfikuj połączenie

### **2\. Konfiguracja Tavily Search API**

1. **Setup search capabilities:**  
2. Zarejestruj się na [tavily.com](http://tavily.com)  
3. Wygeneruj API key  
4. Sprawdź dostępne quotas  
5. Przetestuj search functionality  
6. **Credentials w n8n:**  
7. Utwórz HTTP Header Auth credentials  
8. Header name: `Authorization`  
9. Header value: `Bearer YOUR_TAVILY_KEY`  
10. Nazwa: "Tavily Credential"

### **3\. Konfiguracja OpenAI DALL-E**

1. **OpenAI Platform setup:**  
2. Przejdź do [platform.openai.com](http://platform.openai.com)  
3. Wygeneruj API key  
4. Sprawdź dostęp do DALL-E modeli  
5. Ustaw usage limits  
6. **Konfiguracja w workflow:**  
7. W węzłach "Generate Image" ustaw Bearer token  
8. Sprawdź model compatibility (dalle-3, dalle-2)  
9. Skonfiguruj image parameters

### **4\. Import i Konfiguracja Workflow**

1. **Import workflow:**  
2. Otwórz n8n w przeglądarce  
3. Kliknij **"Import workflow"**  
4. Wybierz plik `posty-linkedin-obrazki.json`  
5. Zatwierdź import  
6. **Konfiguracja form trigger:**  
7. Dostosuj form fields do Twoich potrzeb  
8. Ustaw validation rules  
9. Skonfiguruj email notifications

### **5\. Konfiguracja AI Agents**

**LinkedIn Post Agent System Message:**

\# Overview

You are an AI agent specialized in creating professional, educational, and engaging LinkedIn posts based on any topic provided by the user.

\#\# Objectives:

Always begin by conducting a real-time search using the Tavily tool to gather the most accurate, up-to-date information on the topic. The post should be written to appeal to the provided target audience.

Based on your research, generate a well-structured LinkedIn post that:

\- Starts with an engaging hook

\- Professional in tone

\- Clear and easy to read

\- Educational and insightful

\- Light on emojis (use only when highly relevant and minimal)

\- Includes proper source attribution (e.g., "according to \[source\]")

\- Contains relevant hashtags to improve visibility

\- Ends with a clear call to action (e.g., asking for thoughts, feedback, or shares)

\#\# Output Instructions:

\- Your ONLY output should be the final LinkedIn post text.

\- Do not include explanations, notes, or anything beyond the post itself.

**Image Prompt Agent Configuration:**

\# Overview

You are an AI agent that transforms LinkedIn posts into visual prompt descriptions for generating graphic marketing materials.

\#\# Objective:

\- Read and analyze the given LinkedIn post

\- Identify the main message, insight, or takeaway

\- Create a clear and compelling graphic prompt for text-to-image generation

\- Result should be a marketing-style graphic that:

1\) Visually supports the key idea of the post

2\) Looks appropriate for LinkedIn feed

3\) Feels polished, modern, and engaging

\#\# Style Guidelines:

\- Think like a brand designer or marketing creative

\- Include: text, charts, icons, abstract shapes, modern illustrations

\- Mention layout suggestions (e.g., "split screen design")

\- Guide AI image tools effectively

### **6\. Konfiguracja Delivery Options**

**Gmail Setup:**

{

"sendTo": "user\_email\_from\_form",

"subject": "Your LinkedIn Post is Ready\!",

"message": "Here's your generated LinkedIn post with image",

"attachments": \["generated\_image.png"\]

}

**LinkedIn Direct Posting (opcjonalne):**

1. Skonfiguruj LinkedIn OAuth2 credentials  
2. Ustaw shareMediaCategory na "IMAGE"  
3. Skonfiguruj automatic posting parameters

### **7\. Advanced Configuration**

**Tavily Search Parameters:**

{

"search\_depth": "advanced",

"chunks\_per\_source": 3,

"max\_results": 1,

"days": 7,

"include\_answer": true,

"include\_raw\_content": false

}

**OpenAI Image Generation:**

{

"model": "dall-e-3",

"size": "1024x1024",

"quality": "standard",

"style": "vivid"

}

## **🧪 Testowanie**

### **Scenariusze testowe kompleksowe:**

**Test 1 \- Basic content generation:**

Input:

\- Topic: "AI automation trends 2025"

\- Target Audience: "Tech executives"

\- Email: "test@example.com"

Expected Output:

\- Professional LinkedIn post with current insights

\- Relevant image prompt

\- Generated marketing graphic

\- Email delivery confirmation

**Test 2 \- Different industries:**

Topics to test:

\- Healthcare innovation

\- Fintech trends

\- E-commerce automation

\- Remote work productivity

\- Sustainability initiatives

Verify:

\- Industry-specific terminology

\- Appropriate target audience adaptation

\- Relevant visual metaphors

\- Professional tone consistency

**Test 3 \- Image generation quality:**

Test different prompt styles:

\- Abstract concepts (AI, automation)

\- Data visualization themes

\- Professional settings

\- Brand-appropriate graphics

Verify:

\- Image relevance to content

\- Professional appearance

\- Marketing-ready quality

\- Brand alignment

**Test 4 \- End-to-end workflow:**

1\. Submit form with various topics

2\. Monitor AI agent processing

3\. Verify search result integration

4\. Check image generation quality

5\. Confirm email delivery

6\. Test LinkedIn posting (if enabled)

### **Weryfikacja wyników:**

1. Sprawdź czy posty są professional i engaging  
2. Zweryfikuj integration z aktualnych research'y  
3. Upewnij się o high-quality image generation  
4. Potwierdź successful delivery methods

## **❗ Rozwiązywanie Problemów**

### **Częste błędy:**

**API rate limiting:**

1. Monitor usage w OpenRouter dashboard  
2. Sprawdź Tavily search quotas  
3. Zweryfikuj OpenAI DALL-E limits  
4. Implement proper error handling dla rate limits

**Poor content quality:**

1. Dostosuj system prompts dla AI agents  
2. Sprawdź quality Tavily search results  
3. Zweryfikuj target audience specificity  
4. Test z różnymi topic variations

**Image generation failures:**

1. Sprawdź OpenAI API key validity  
2. Zweryfikuj model availability (dalle-3 vs dalle-2)  
3. Upewnij się o proper prompt formatting  
4. Check for content policy violations

**Email delivery issues:**

1. Sprawdź Gmail OAuth2 credentials  
2. Zweryfikuj email addresses format  
3. Upewnij się o attachment size limits  
4. Test z różnymi email providers

**LinkedIn posting errors:**

1. Sprawdź LinkedIn OAuth2 permissions  
2. Zweryfikuj image format compatibility  
3. Upewnij się o content length limits  
4. Test posting permissions

### **Wskazówki optymalizacji:**

1. Cache popular search results dla performance  
2. Implement retry logic dla failed API calls  
3. Monitor costs across all API services  
4. Optimize image generation parameters dla quality/cost balance

## **💡 Tips & Best Practices**

### **Content optimization:**

1. **Target audience research**: Dokładnie zdefiniuj personas dla lepszego targeting  
2. **Topic trending**: Use Tavily dla identification hot topics w Twojej branży  
3. **Hashtag strategy**: Implement consistent hashtag research i optimization  
4. **Engagement optimization**: A/B test różne call-to-action formats

### **Visual content optimization:**

1. **Brand consistency**: Develop template prompts dla consistent visual style  
2. **Image relevance**: Ensure visual metaphors align z post content  
3. **Professional quality**: Use high-resolution settings dla marketing materials  
4. **Accessibility**: Include alt text descriptions dla generated images

### **Automation efficiency:**

1. **Batch processing**: Group similar content requests dla cost optimization  
2. **Quality gates**: Implement content review steps before publishing  
3. **Performance monitoring**: Track engagement metrics dla content optimization  
4. **Error recovery**: Robust error handling dla wszystkie API dependencies

### **Cost optimization:**

1. **API usage monitoring**: Track costs across OpenRouter, Tavily, i OpenAI  
2. **Smart caching**: Cache search results i reuse gdy appropriate  
3. **Bulk operations**: Optimize dla volume content generation  
4. **Quality vs cost**: Balance premium models z budget constraints

## **🚀 Rozszerzenia i Następne Kroki**

### **Możliwe integracje:**

1. **CRM Systems** \- Automatic content creation based na customer personas  
2. **Analytics Platforms** \- Performance tracking w Google Analytics, LinkedIn Analytics  
3. **Content Management** \- Integration z WordPress, Webflow dla blog cross-posting  
4. **Social Media Management** \- Multi-platform publishing do Twitter, Facebook  
5. **Brand Management** \- Automated brand compliance checking

### **Advanced Features:**

1. **Multi-language support** \- Automatic translation dla global audiences  
2. **Video generation** \- Text-to-video capabilities dla richer content  
3. **Interactive elements** \- Polls, carousels, i dynamic content generation  
4. **Sentiment analysis** \- AI-powered engagement prediction  
5. **Trend prediction** \- Predictive content topics based na industry data

### **Enterprise capabilities:**

1. **Team collaboration** \- Multi-user content approval workflows  
2. **Brand guidelines** \- Automated brand compliance enforcement  
3. **Content calendar** \- Scheduled posting i content planning  
4. **Performance analytics** \- Advanced ROI tracking i optimization  
5. **Custom models** \- Fine-tuned AI models dla specific industries

### **AI-Powered enhancements:**

1. **Personalization engine** \- Dynamic content adaptation based na user data  
2. **Engagement optimization** \- AI-driven posting time optimization  
3. **Competitor analysis** \- Automated competitive content analysis  
4. **Content clustering** \- Intelligent content categorization i tagging  
5. **Voice consistency** \- Brand voice preservation across all content

### **Integration ecosystem:**

1. **Marketing automation** \- HubSpot, Marketo integration dla lead nurturing  
2. **Design tools** \- Canva, Adobe Creative Suite connectivity  
3. **Video platforms** \- YouTube, Vimeo automated posting  
4. **E-commerce** \- Product-based content generation dla online stores  
5. **Event marketing** \- Automated event promotion content

**Kategoria**: Content Creation & Social Media | **Złożoność**: Zaawansowany | **Wartość biznesowa**: 10/10

💡 **Potrzebujesz pomocy?** Załóż nowy wątek w społeczności dotyczący tego workflow'a aby uzyskać wsparcie od innych użytkowników.

Resources  
posty-linkedin-obrazki.json

—------

Proste Tworzenie Treści LinkedIn \- Instrukcja

# 

## **📋 Przegląd**

Workflow **LinkedIn Content Generation** o poziomie złożoności: **Średni**.

Ten workflow automatyzuje proces tworzenia angażujących postów na LinkedIn dla przedsiębiorców. System pobiera tematy z Google Sheets, wyszukuje aktualne artykuły przy użyciu Tavily API, a następnie wykorzystuje AI do stworzenia inspirującego posta na podstawie najnowszych trendów i informacji. Wszystko odbywa się automatycznie z zarządzaniem statusów w arkuszu kalkulacyjnym.

## **🎯 Zastosowania Biznesowe**

1. **Content Marketing** \- Regularne tworzenie postów LinkedIn bez manualnej pracy  
2. **Thought Leadership** \- Budowanie autorytetu przez dzielenie się aktualnymi trendami  
3. **Social Media Management** \- Automatyzacja dla agencji marketingowych i social media managerów  
4. **Personal Branding** \- Systematyczne budowanie marki osobistej na LinkedIn  
5. **B2B Marketing** \- Generowanie leadów przez wartościowy content  
6. **Industry Insights** \- Udostępnianie najnowszych informacji z branży

## **⚙️ Wymagania**

1. ✅ Działająca instancja n8n (v1.0+)  
2. ✅ Uprawnienia do konfiguracji workflow'ów  
3. 📊 **Google Sheets** \- Arkusz do zarządzania tematami postów  
4. 🔑 **Google Sheets API** \- Dostęp do odczytu i zapisu danych  
5. 🔍 **Tavily API Key** \- Do wyszukiwania aktualnych artykułów  
6. 🔀 **OpenRouter API Key** \- Dostęp do Claude 3.5 Sonnet  
7. 📝 **LinkedIn Account** \- Do publikowania utworzonych postów (opcjonalnie)

## **🔧 Konfiguracja Krok po Kroku**

### **1\. Przygotowanie Google Sheets**

1. **Struktura arkusza:**  
2. Utwórz nowy Google Sheets o nazwie "LinkedIn Posts"  
3. Kolumny: `Topic` | `Status` | `Content`  
4. Wypełnij kolumnę Topic tematami (np. "AI w startupach", "Remote work trends")  
5. Ustaw Status na "To Do" dla postów do utworzenia  
6. **Przykładowe dane:**

Topic | Status | Content

AI w startupach | To Do |

Remote work trends | To Do |

Bootstrapping secrets | Created | \[content here\]

### **2\. Konfiguracja API Keys**

1. **Tavily API:**  
2. Zarejestruj się na [tavily.com](http://tavily.com)  
3. Wygeneruj API key w dashboard  
4. Tavily oferuje darmowy tier z limitami  
5. **OpenRouter API:**  
6. Przejdź do [openrouter.ai](http://openrouter.ai)  
7. Utwórz konto i wygeneruj API key  
8. Zasilaj konto kredytami dla Claude 3.5 Sonnet

### **3\. Import i Konfiguracja Workflow**

1. **Import workflow:**  
2. Otwórz n8n w przeglądarce  
3. Kliknij **"Import workflow"**  
4. Wybierz plik `proste-tworzenie-tresci-linkedin.json`  
5. Zatwierdź import  
6. **Konfiguracja Credentials:**  
7. **Google Sheets OAuth2**: Autoryzuj dostęp do Google Sheets  
8. **OpenRouter API**: Dodaj klucz OpenRouter  
9. **Dostosowanie parametrów:**  
10. W **"Pobierz Temat"**: Ustaw ID swojego arkusza Google Sheets  
11. W **"Tavily"**: Zastąp API key w nagłówku Authorization  
12. W **"Kreator Treści"**: Dostosuj system message dla swojej branży

### **4\. Personalizacja System Message**

Dostosuj prompt w węźle "Kreator Treści" dla swojej niszy:

\# Przegląd

Jesteś AI agentem odpowiedzialnym za generowanie zwięzłych, inspirujących postów LinkedIn

skierowanych do \[TWOJA\_GRUPA\_DOCELOWA\], na podstawie treści trzech podanych artykułów.

\#\# Instrukcje

1\. Przeczytaj i wyciągnij główne tematy ze wszystkich trzech artykułów

2\. Zidentyfikuj wspólne wątki lub nadrzędne przesłanie

3\. Napisz post LinkedIn (max 700 znaków) w języku polskim

4\. Użyj 2-4 relevantnych hashtagów

5\. Dodaj 1-3 emotikony dla zwiększenia zaangażowania

6\. Nie cytuj bezpośrednio źródeł \- skup się na syntezie idei

\#\# Przykład:

"Od AI copilotów po lean bootstrapping \- era solopreneurów nadeszła. 🚀

Przedsiębiorcy przepisują zasady: skalują mądrzej, szybciej i z mniejszymi zasobami.

Przyjmij tę zmianę. Narzędzia są. Przyszłość napędzana solo-mocą.

\#Przedsiębiorczość \#AI \#Bootstrapping \#PrzyszłośćPracy"

## **🧪 Testowanie**

### **Scenariusz testowy:**

1. Dodaj temat "Marketing automation 2025" do arkusza ze statusem "To Do"  
2. Uruchom workflow klikając **"Execute Workflow"**  
3. Sprawdź execution log w n8n  
4. Zweryfikuj czy post został utworzony i zapisany w arkuszu

### **Weryfikacja wyników:**

1. Sprawdź czy Tavily znalazł 3 relevantne artykuły  
2. Zweryfikuj jakość wygenerowanego posta (max 700 znaków)  
3. Upewnij się, że hashtagi są odpowiednie  
4. Sprawdź czy status zmienił się na "Created"

## **❗ Rozwiązywanie Problemów**

### **Częste błędy:**

**Google Sheets nie pobiera danych:**

1. Sprawdź uprawnienia OAuth2 dla Google Sheets  
2. Zweryfikuj ID arkusza w konfiguracji węzłów  
3. Upewnij się, że kolumny mają dokładnie takie nazwy: Topic, Status, Content

**Tavily nie zwraca wyników:**

1. Sprawdź poprawność API key w nagłówku Authorization  
2. Zweryfikuj czy temat wyszukiwania nie jest zbyt niszowy  
3. Sprawdź limity swojego planu Tavily API

**Post nie jest generowany:**

1. Sprawdź czy OpenRouter API key jest aktywny  
2. Upewnij się, że masz kredyty na koncie OpenRouter  
3. Zweryfikuj czy Claude 3.5 Sonnet jest dostępny

**Post jest zbyt długi:**

1. Dostosuj limit znaków w system message  
2. Dodaj instrukcję o większej zwięzłości  
3. Testuj różne wersje promptu

### **Wskazówki optymalizacji:**

1. Używaj konkretnych, niszowych tematów  
2. Regularnie aktualizuj listę tematów w arkuszu  
3. Monitoruj koszty API calls  
4. Testuj różne style postów dla swojej grupy docelowej

## **💡 Tips & Best Practices**

### **Optymalizacja tematów:**

1. **Konkretność**: Zamiast "Marketing" użyj "B2B email marketing for SaaS"  
2. **Aktualność**: Dodawaj daty do tematów (np. "AI trends 2025")  
3. **Nische**: Skupiaj się na wąskich, specjalistycznych tematach  
4. **Sezonowość**: Planuj tematy pod kątem dat i wydarzeń

### **Jakość postów:**

1. **Hook**: Pierwszy wiersz musi przykuć uwagę  
2. **Value**: Każdy post musi dostarczać wartość  
3. **CTA**: Dodaj subtelne call-to-action  
4. **Emojis**: Używaj umiarkowanie, zachowaj profesjonalizm

### **Zarządzanie workflow:**

1. **Scheduling**: Uruchamiaj workflow codziennie/tygodniowo  
2. **Batch processing**: Przetwarzaj kilka tematów na raz  
3. **Quality control**: Przeglądaj posty przed publikacją  
4. **A/B testing**: Testuj różne style dla lepszego engagement

### **Monitoring i analytics:**

1. **Performance tracking**: Śledź które tematy generują najlepsze posty  
2. **Engagement metrics**: Monitoruj likes/comments/shares  
3. **Cost optimization**: Optymalizuj użycie API dla kosztów  
4. **Content calendar**: Planuj posty z wyprzedzeniem

## **🚀 Rozszerzenia i Następne Kroki**

### **Możliwe integracje:**

1. **LinkedIn API** \- Automatyczne publikowanie postów  
2. **Scheduling System** \- Cron jobs dla regularnego tworzenia  
3. **Image Generation** \- AI-generated graphics dla postów  
4. **Analytics Dashboard** \- Metryki performance postów  
5. **Multi-platform** \- Adaptacja dla Twitter, Facebook

### **Advanced Features:**

1. **Personalization** \- Posty dostosowane do różnych segmentów  
2. **Trend detection** \- Automatyczne wykrywanie trending topics  
3. **Competitor analysis** \- Analiza postów konkurencji  
4. **Content repurposing** \- Przekształcanie postów na inne formaty  
5. **Engagement optimization** \- ML do przewidywania najlepszych czasów publikacji

### **Workflow enhancements:**

1. **Multi-language support** \- Posty w różnych językach  
2. **Content approval** \- System zatwierdzania przed publikacją  
3. **Template library** \- Biblioteka szablonów postów  
4. **Smart filtering** \- Automatyczne filtrowanie low-quality sources  
5. **Brand voice consistency** \- Utrzymanie spójnego tonu marki

### **Przypadki użycia branżowe:**

1. **Tech startups**: Posty o innowacjach, funding, growth hacking  
2. **Consultancy**: Thought leadership, case studies, industry insights  
3. **E-commerce**: Product launches, customer success stories  
4. **Finance**: Market trends, investment insights, regulatory updates  
5. **HR/Recruiting**: Workplace trends, hiring tips, company culture

### **Scaling considerations:**

1. **Rate limiting**: Zarządzanie limitami API dla większych wolumenów  
2. **Content moderation**: Automatyczne filtrowanie nieodpowiednich treści  
3. **Multi-account management**: Zarządzanie postami dla wielu klientów  
4. **Performance optimization**: Cache dla często używanych danych

**Kategoria**: Social Media Content Creation & Marketing Automation | **Złożoność**: Średni | **Wartość biznesowa**: 9/10

💡 **Potrzebujesz pomocy?** Załóż nowy wątek w społeczności dotyczący tego workflow'a aby uzyskać wsparcie od innych użytkowników.

Resources  
tworzenie-tresci-linkedin.json

—-----

Agent Twórca Treści na Blog \- Instrukcja

# 

## **📋 Przegląd**

Workflow **Agent Twórca Treści na Blog** o poziomie złożoności: **Średni**.

Ten workflow implementuje specjalistycznego agenta AI do automatycznego tworzenia wysokiej jakości artykułów blogowych. System wykorzystuje Claude (Anthropic) do generowania treści oraz Tavily do wyszukiwania aktualnych informacji w internecie, tworząc dobrze zbadane, zoptymalizowane pod SEO artykuły w formacie HTML z prawidłowymi nagłówkami, linkami i cytatami. Agent może być używany jako sub-workflow w większych systemach automatyzacji.

## **🎯 Zastosowania Biznesowe**

1. **Content Marketing** \- Automatyzacja tworzenia artykułów marketingowych  
2. **Blog Automation** \- Regularne publikowanie treści na blogach firmowych  
3. **SEO Content Creation** \- Generowanie zoptymalizowanych pod SEO artykułów  
4. **Research-Based Writing** \- Tworzenie artykułów opartych na aktualnych danych  
5. **Multi-language Content** \- Adaptacja treści dla różnych rynków  
6. **Content Agency Services** \- Skalowalne usługi content marketingu

## **⚙️ Wymagania**

1. ✅ Działająca instancja n8n (v1.0+)  
2. ✅ Uprawnienia do konfiguracji workflow'ów  
3. 🤖 **Anthropic API Key** \- Dostęp do Claude dla generowania treści  
4. 🌐 **Tavily API Key** \- Wyszukiwanie aktualnych informacji w internecie  
5. 🔄 **Execute Workflow Trigger** \- Dla integracji z innymi workflow  
6. 📝 **HTML Knowledge** \- Podstawowa znajomość formatowania HTML

## **🔧 Konfiguracja Krok po Kroku**

### **1\. Przygotowanie API Keys**

1. **Anthropic API:**  
2. Zarejestruj się na [console.anthropic.com](http://console.anthropic.com)  
3. Wygeneruj API key  
4. Upewnij się o dostępie do Claude 3.5 Sonnet  
5. Sprawdź limity i kredyty  
6. **Tavily API:**  
7. Utwórz konto na [tavily.com](http://tavily.com)  
8. Wygeneruj API key dla web search  
9. Sprawdź limity darmowego planu  
10. Zanotuj monthly quota

### **2\. Import i Konfiguracja Workflow**

1. **Import workflow:**  
2. Otwórz n8n w przeglądarce  
3. Kliknij **"Import workflow"**  
4. Wybierz plik `agent-tworca-tresci-na-blog.json`  
5. Zatwierdź import  
6. **Konfiguracja Credentials:**  
7. **Anthropic API**: Dodaj klucz do Claude  
8. **Tavily**: Zastąp placeholder "your-api-key" w HTTP Request  
9. **Dostosowanie Tavily HTTP Request:**

{

"api\_key": "twój-klucz-tavily",

"query": "{searchTerm}",

"search\_depth": "basic",

"include\_answer": true,

"topic": "news",

"include\_raw\_content": true,

"max\_results": 3

}

### **3\. Konfiguracja System Message**

W węźle "Content Creator Agent" możesz dostosować zachowanie AI:

\# Overview

You are a skilled AI blog writer specializing in engaging, well-structured,

and informative content. Your writing style is clear, compelling, and tailored

to the target audience.

\#\# Tools

Tavily \- Use this to search the web about the requested topic for the blog post.

\#\# Blog Requirements

Format all blog content in HTML, using proper headings (\<h1\>, \<h2\>),

paragraphs (\<p\>), bullet points (\<ul\>\<li\>), and links (\<a href="URL"\>)

for citations. All citations from the Tavily tool must be preserved,

with clickable hyperlinks.

Maintain a natural, human-like tone, use varied sentence structures,

and include relevant examples or data when needed.

### **4\. Testowanie jako Standalone**

1. **Zmień trigger:**  
2. Zastąp "Execute Workflow Trigger" na "Manual Trigger"  
3. Dodaj test input z polem "query"  
4. **Test input example:**

{

"query": "Write a blog post about AI trends in 2025"

}

### **5\. Integracja z Innymi Workflow**

1. **As Sub-Agent:**  
2. Zostaw "Execute Workflow Trigger"  
3. Zapisz workflow ID po active  
4. Użyj w innych workflow jako Tool Workflow  
5. **Input format:**  
6. Workflow oczekuje parametru `query` z tematem artykułu  
7. Zwraca `response` z gotowym HTML

## **🧪 Testowanie**

### **Scenariusze testowe:**

**Test 1 \- Podstawowy artykuł:**

Input: {"query": "Write a blog post about remote work productivity tips"}

Oczekiwany rezultat:

\- HTML article z nagłówkami \<h1\>, \<h2\>

\- Paragrafy \<p\> z praktycznymi wskazówkami

\- Lista \<ul\>\<li\> z tips

\- Linki do źródeł z Tavily search

**Test 2 \- Artykuł techniczny:**

Input: {"query": "Explain blockchain technology for beginners"}

Oczekiwany rezultat:

\- Strukturalny artykuł z clear explanations

\- Technical terms explained simply

\- Current examples i use cases

\- Citations do reliable sources

**Test 3 \- News-based article:**

Input: {"query": "Latest developments in renewable energy 2025"}

Oczekiwany rezultat:

\- Up-to-date information z Tavily

\- Statistics i data points

\- Expert quotes (if available)

\- Proper source attribution

### **Weryfikacja jakości:**

1. Sprawdź czy HTML jest poprawnie sformatowany  
2. Zweryfikuj działanie linków do źródeł  
3. Upewnij się, że treść jest coherent i engaging  
4. Potwierdź obecność citations z Tavily

## **❗ Rozwiązywanie Problemów**

### **Częste błędy:**

**Tavily API nie zwraca wyników:**

1. Sprawdź poprawność API key w HTTP Request  
2. Zweryfikuj czy nie przekroczyłeś monthly limits  
3. Upewnij się, że query nie jest zbyt niche  
4. Sprawdź status API na [tavily.com](http://tavily.com)

**Claude generuje poor quality content:**

1. Dostosuj system message dla lepszych instructions  
2. Sprawdź czy masz dostęp do Claude 3.5  
3. Zweryfikuj limity i rate limiting  
4. Upewnij się o wystarczających credits

**HTML formatting issues:**

1. Sprawdź czy system message zawiera HTML guidelines  
2. Zweryfikuj czy output parser zachowuje formatting  
3. Test z prostszymi queries najpierw  
4. Validate HTML structure manually

**Workflow timeout:**

1. Zwiększ timeout w n8n settings  
2. Sprawdź czy Tavily search nie jest zbyt slow  
3. Rozważ zmniejszenie max\_results w Tavily  
4. Monitor execution times

### **Wskazówki optymalizacji:**

1. Używaj specific, clear queries dla lepszych results  
2. Monitoruj koszty både Anthropic i Tavily API  
3. Test z różnymi topic types  
4. Regularnie review generated content quality

## **💡 Tips & Best Practices**

### **Content quality optimization:**

1. **Specific queries**: Im bardziej specific query, tym lepszy output  
2. **SEO keywords**: Include target keywords w query  
3. **Audience targeting**: Specify target audience w instructions  
4. **Length control**: Dodaj desired length do query

### **Technical optimization:**

1. **API cost management**: Monitor usage both APIs  
2. **Rate limiting**: Implement delays for high-volume usage  
3. **Error handling**: Set up retry logic for API failures  
4. **Quality control**: Implement content review process

### **HTML best practices:**

1. **Semantic structure**: Proper heading hierarchy (h1 \> h2 \> h3)  
2. **Accessibility**: Alt tags for images, proper link text  
3. **SEO optimization**: Meta descriptions, proper headings  
4. **Clean code**: Validated HTML structure

### **Content strategy:**

1. **Research depth**: Use Tavily effectively for current data  
2. **Citation quality**: Ensure credible sources  
3. **Originality**: Avoid duplication, add unique insights  
4. **Engagement**: Optimize for reader engagement metrics

## **🚀 Rozszerzenia i Następne Kroki**

### **Możliwe integracje:**

1. **CMS integration** \- WordPress, Webflow auto-publishing  
2. **Image generation** \- DALL-E, Midjourney dla visual content  
3. **SEO tools** \- Ahrefs, SEMrush dla keyword optimization  
4. **Social media** \- Auto-posting na LinkedIn, Twitter  
5. **Analytics** \- Google Analytics integration dla performance tracking

### **Advanced Features:**

1. **Multi-language support** \- Artykuły w różnych językach  
2. **Brand voice training** \- Custom tone of voice dla różnych brandów  
3. **Content calendar** \- Automated scheduling i planning  
4. **A/B testing** \- Multiple versions dla optimization  
5. **Fact-checking** \- Automated verification przeciwko reliable sources

### **Content enhancement:**

1. **Image selection** \- AI-powered image recommendations  
2. **Video integration** \- YouTube, Vimeo embeds  
3. **Interactive elements** \- Polls, quizzes, calculators  
4. **Personalization** \- Content tailored do user segments  
5. **Translation** \- Multi-language content creation

### **Business automation:**

1. **Content workflows** \- Full editorial pipeline automation  
2. **Client portals** \- Self-service content generation  
3. **Quality assurance** \- Automated content review processes  
4. **Performance tracking** \- Content ROI measurement  
5. **Competitor analysis** \- Automated competitive content research

### **Enterprise capabilities:**

1. **Team collaboration** \- Multi-user content creation  
2. **Approval workflows** \- Editorial review processes  
3. **Brand compliance** \- Automated brand guideline checking  
4. **Content library** \- Organized asset management  
5. **Analytics dashboard** \- Content performance metrics

**Kategoria**: Content Creation & Marketing Automation | **Złożoność**: Średni | **Wartość biznesowa**: 9/10

💡 **Potrzebujesz pomocy?** Załóż nowy wątek w społeczności dotyczący tego workflow'a aby uzyskać wsparcie od innych użytkowników.

Resources  
agent-tworca-tresci-na-blog.json

—------

MONITORING PROCESÓW

Monitoring Zmian na Stronie \- Instrukcja

# 

## **📋 Przegląd**

Workflow **Monitoring & Analytics** o poziomie złożoności: **Średni**.

Ten workflow automatyzuje monitorowanie zmian produktów na stronach internetowych poprzez ekstrakcję danych HTML, porównanie z bazą danych w Google Sheets i wysyłanie powiadomień email o wszelkich zmianach cen, opisów lub dostępności produktów. System działa w trybie batch processing dla wielu produktów jednocześnie.

## **🎯 Zastosowania Biznesowe**

1. **Competitor Price Monitoring** \- Automatyczne śledzenie cen konkurencji w czasie rzeczywistym  
2. **Inventory Management** \- Monitorowanie dostępności produktów u dostawców  
3. **Price Intelligence** \- Analiza dynamiki cenowej na rynku e-commerce  
4. **Market Research** \- Zbieranie danych o zmianach w ofercie konkurentów  
5. **Business Intelligence** \- Automatyczne generowanie raportów o zmianach rynkowych  
6. **Procurement Optimization** \- Optymalizacja zakupów na podstawie zmian cen dostawców

## **⚙️ Wymagania**

1. ✅ Działająca instancja n8n (v1.0+)  
2. ✅ Uprawnienia do konfiguracji workflow'ów  
3. 📊 **Google Sheets API** \- Przechowywanie danych produktów  
4. 📧 **Gmail OAuth2** \- Wysyłanie powiadomień email  
5. 🌐 **Dostęp do monitorowanych stron** \- Strony muszą być publicznie dostępne  
6. 🔍 **Znajomość selektorów CSS** \- Do precyzyjnej ekstrakcji danych

## **🔧 Konfiguracja Krok po Kroku**

### **1\. Przygotowanie Google Sheets**

1. **Utwórz nowy arkusz Google Sheets:**  
2. Dodaj kolumny: `product_name`, `price`, `description`, `updatedAt`  
3. Ustaw odpowiednie nagłówki w pierwszym wierszu  
4. Zapisz ID arkusza (znajdziesz w URL)  
5. **Konfiguracja uprawnień:**  
6. Udostępnij arkusz swojemu kontu Google  
7. Upewnij się o uprawnieniach do edycji  
8. Skopiuj ID arkusza z URL

### **2\. Konfiguracja Gmail**

1. **OAuth2 Setup:**  
2. Przejdź do Google Cloud Console  
3. Włącz Gmail API dla swojego projektu  
4. Skonfiguruj OAuth2 credentials w n8n  
5. Przetestuj połączenie wysyłając testowy email

### **3\. Import i Konfiguracja Workflow**

1. **Import workflow:**  
2. Otwórz n8n w przeglądarce  
3. Kliknij **"Import workflow"**  
4. Wybierz plik `zmiany-na-stronie-prosty.json`  
5. Zatwierdź import  
6. **Konfiguracja pinData:**  
7. W węźle "When clicking 'Test workflow'" ustaw URLs produktów do monitorowania  
8. Przykład:

{

"links": \[

"https://example-shop.com/product/1",

"https://example-shop.com/product/2"

\]

}

### **4\. Dostosowanie Selektorów CSS**

W węźle **"fetch data"** skonfiguruj selektory CSS dla swojej strony:

{

"price": ".price-class",

"product\_name": ".product-title",

"description": ".product-description"

}

**Jak znaleźć poprawne selektory:**

1. Otwórz stronę produktu w przeglądarce  
2. Naciśnij F12 (Developer Tools)  
3. Użyj inspektora elementów  
4. Skopiuj selektory CSS dla wymaganych elementów

### **5\. Konfiguracja Google Sheets Connection**

1. **W węźle "get sheets":**  
2. Ustaw Document ID swojego arkusza  
3. Wybierz odpowiedni sheet (domyślnie Sheet1)  
4. Sprawdź uprawnienia dostępu  
5. **W węźle "update sheets":**  
6. Skonfiguruj te same parametry arkusza  
7. Ustaw matching column na `product_name`  
8. Sprawdź mapowanie kolumn

### **6\. Dostosowanie Logiki Porównywania**

W węźle **"create string"** możesz dostosować logikę wykrywania zmian:

// Podstawowe wykrywanie zmian cen

if (fetchedItem.json.price \!= matchedItem.price) {

messages \+= `Produkt (${fetchedItem.json.product_name}), cena aktualizowana! Z ${matchedItem.price} na ${fetchedItem.json.price}.\\n`;

}

// Dodatkowe warunki można dodać tutaj

## **🧪 Testowanie**

### **Scenariusz testowy:**

1. **Przygotuj test data:**  
2. Dodaj 2-3 produkty do pinData  
3. Upewnij się, że strony są dostępne  
4. Sprawdź czy selektory CSS działają  
5. **Wykonaj pierwszy run:**  
6. Kliknij "Execute Workflow"  
7. Sprawdź czy dane zostały zapisane w Google Sheets  
8. Zweryfikuj ekstrakcję danych z HTML  
9. **Test wykrywania zmian:**  
10. Ręcznie zmień cenę w arkuszu  
11. Uruchom workflow ponownie  
12. Sprawdź czy otrzymałeś email z powiadomieniem

### **Weryfikacja wyników:**

1. Sprawdź czy wszystkie produkty zostały przetworzone  
2. Zweryfikuj poprawność ekstraktowanych danych  
3. Upewnij się, że zmiany są poprawnie wykryte  
4. Potwierdź otrzymanie email powiadomień

## **❗ Rozwiązywanie Problemów**

### **Częste błędy:**

**Selektory CSS nie działają:**

1. Sprawdź czy strona nie używa JavaScript do ładowania treści  
2. Zweryfikuj selektory w Developer Tools przeglądarki  
3. Upewnij się, że elementy są zawsze obecne na stronie  
4. Rozważ użycie bardziej specificznych selektorów

**Brak dostępu do Google Sheets:**

1. Sprawdź uprawnienia OAuth2 dla Google Sheets API  
2. Zweryfikuj poprawność Document ID  
3. Upewnij się, że arkusz istnieje i jest dostępny  
4. Sprawdź czy wszystkie wymagane kolumny są obecne

**Emails nie są wysyłane:**

1. Sprawdź konfigurację Gmail OAuth2  
2. Zweryfikuj czy Gmail API jest włączone  
3. Upewnij się, że adres nadawcy jest poprawny  
4. Sprawdź limity wysyłania emaili Gmail

**Workflow zawiesza się:**

1. Sprawdź czy wszystkie strony odpowiadają w rozsądnym czasie  
2. Dodaj timeout do HTTP requests  
3. Zweryfikuj czy nie ma problemów z SSL certificates  
4. Sprawdź logi n8n pod kątem błędów sieci

### **Wskazówki optymalizacji:**

1. Implementuj retry logic dla failed HTTP requests  
2. Dodaj walidację danych przed zapisem do arkusza  
3. Ustaw rozumne timeouty dla HTTP connections  
4. Monitoring wykonań workflow w n8n

## **💡 Tips & Best Practices**

### **Bezpieczeństwo:**

1. **Rate limiting**: Nie monitoruj zbyt często aby uniknąć blokady IP  
2. **User-Agent rotation**: Zmieniaj User-Agent headers periodycznie  
3. **Respect robots.txt**: Sprawdź czy strona pozwala na scraping  
4. **Legal compliance**: Upewnij się o zgodności z regulaminami stron

### **Wydajność:**

1. **Batch processing**: Grupuj produkty dla lepszej wydajności  
2. **Caching**: Implementuj cache dla niezmiennych danych  
3. **Parallel execution**: Używaj równoległego przetwarzania gdy możliwe  
4. **Data compression**: Minimalizuj rozmiar danych w arkuszu

### **Zarządzanie danymi:**

1. **Data validation**: Sprawdzaj poprawność ekstraktowanych danych  
2. **Historical tracking**: Prowadź historię zmian w oddzielnych arkuszach  
3. **Backup strategy**: Regularnie backupuj dane z arkuszy  
4. **Data cleanup**: Usuwaj stare dane aby utrzymać wydajność

### **Monitoring:**

1. **Error alerting**: Konfiguruj alerty dla błędów workflow  
2. **Success metrics**: Śledź wskaźniki sukcesu monitorowania  
3. **Performance tracking**: Monitoruj czas wykonywania workflow  
4. **Data quality checks**: Regularnie sprawdzaj jakość ekstraktowanych danych

## **🚀 Rozszerzenia i Następne Kroki**

### **Możliwe integracje:**

1. **Advanced Analytics** \- Integracja z Google Data Studio lub Power BI  
2. **Slack Notifications** \- Powiadomienia w kanałach zespołowych  
3. **Database Storage** \- Przechowywanie w PostgreSQL lub MongoDB  
4. **API Endpoints** \- Udostępnienie danych przez REST API  
5. **Machine Learning** \- Predykcja zmian cen używając AI

### **Advanced Features:**

1. **Multi-site monitoring** \- Monitorowanie różnych typów stron jednocześnie  
2. **Image comparison** \- Wykrywanie zmian w obrazach produktów  
3. **Proxy rotation** \- Używanie proxy servers dla większej skali  
4. **Smart scheduling** \- Dynamiczne dostosowanie częstotliwości monitorowania  
5. **Competitor intelligence** \- Zaawansowana analiza strategii konkurencji

### **Enterprise capabilities:**

1. **Multi-tenant support** \- Obsługa wielu klientów w jednym systemie  
2. **Role-based access** \- Kontrola dostępu do różnych produktów/rynków  
3. **Custom dashboards** \- Personalizowane dashboardy dla różnych zespołów  
4. **SLA monitoring** \- Monitorowanie poziomów usług i uptime  
5. **Compliance reporting** \- Raporty zgodności z regulacjami branżowymi

### **AI-Powered enhancements:**

1. **Smart categorization** \- Automatyczna kategoryzacja produktów  
2. **Anomaly detection** \- Wykrywanie nietypowych zmian cen  
3. **Market predictions** \- Przewidywanie trendów rynkowych  
4. **Natural language insights** \- Generowanie insights w języku naturalnym  
5. **Sentiment analysis** \- Analiza opinii o produktach i markach

**Kategoria**: Monitoring & Analytics | **Złożoność**: Średni | **Wartość biznesowa**: 8/10

💡 **Potrzebujesz pomocy?** Załóż nowy wątek w społeczności dotyczący tego workflow'a aby uzyskać wsparcie od innych użytkowników.

Resources  
zmiany-na-stronie-prosty.json  
—-----

Automatyzacja Tworzenia Ofert \- Kancelaria Prawna

Resources  
Kancelaria Prawna.json  
BAZA WIEDZY LEGALEX .docx  
Prompty \- Baza Wiedzy o Firmie

—------

Automatyzacja Social Media: Research i Posty

Materiały do filmu:

Resources  
Social-media-agent-research-posty  
250 Hooków do Social Media.pdf  
Właściciele ag mark \- Avatar

—----

Jak pisać idealne prompty w ChatGPT 5

# **Uniwersalny Szablon Promptu Biznesowego**

Wklejamy do ChatGPT 5 i uzupełniamy o swoje dane. (działa też z Claude, Gemini)

🎯 CEL: \[W jednym, prostym zdaniu opisz, co chcesz osiągnąć, np. "Stworzyć 5 propozycji postów na LinkedIn"\]

📋 CONTEXT: \[Podaj kluczowe informacje, linki, dane. Kim jest grupa docelowa? Jakie są ograniczenia? Np. "Grupa docelowa to dyrektorzy marketingu w firmach B2B. Unikaj slangu."\]

🎭 PERSONA AI: \[W kogo ma wcielić się AI? Np. "Wciel się w rolę doświadczonego copywritera specjalizującego się w social media dla SaaS"\]

🧠 REASONING LEVEL: 

□ Minimal (proste FAQ, quick responses)

□ Medium (standardowe operacje biznesowe) 

□ High (analiza, strategia, złożone decyzje)

📏 VERBOSITY:

□ Low (1-2 zdania \- dla chatbotów, alerts)

□ Medium (paragrafy \- dla emaili, propozycji)

□ High (szczegółowo \- dla raportów, analiz)

🛠️ NARZĘDZIA & INTEGRACJE: 

Dozwolone: \[np. google\_sheets, google\_drive, web\_search\]

Budżet wywołań: \[np. maksymalnie 3 tool calls\]

⭐ KRYTERIA JAKOŚCI (Samoocena): \[Opcjonalnie, ale zalecane\] 

"Zanim odpowiesz, stwórz wewnętrzną rubrykę oceny (np. Chwytliwość nagłówka, Wartość merytoryczna, Jasne CTA). Daj mi tylko wynik, który osiągnie najwyższe noty."

📤 FORMAT WYJŚCIA: \[Jak ma wyglądać odpowiedź? Np. "Zwróć wynik w formie tabeli Markdown z kolumnami: 'Propozycja Tekstu', 'Propozycja Grafiki', 'Proponowane Hashtagi'"\] 

—-------  
Nano Banana \- Generowanie Obrazów AI za darmo

Resources  
Nano Banana.json

—-----

Automatyzacja Ożywiania Obrazków: VEO 3

Resources  
nano-veo-yt.json

—--

**POZYSKIWANIE KLIENTÓW**

WPROWADZENIE I FUNDAMENTY

🚀 Co Naprawdę Ma Znaczenie

**Zanim nauczysz się pozyskiwać klientów, pisać oferty i zamieniać automatyzacje w dochodowy biznes – musisz zrozumieć fundamenty.**

---

## **🎯 Cel tej części poradnika**

Ta sekcja to **praktyczne wprowadzenie do budowania realnych projektów i znajdowania pierwszych klientów**, bazując na Twoich umiejętnościach z zakresu AI, LLM i automatyzacji.

Nie będziemy tu mówić o "wizjach przyszłości" – skupiamy się na:

* zdobywaniu projektów i wdrożeń,  
* pisaniu propozycji, które zamieniają się w \[$\]  
* pokazywaniu wartości, a nie tylko technologii.

---

## **🛠️ Dlaczego ten kurs jest inny?**

W przeciwieństwie do innych teoretycznych materiałów, tutaj:

* wszystko opiera się o **realne wdrożenia (ponad 150 zrealizowanych projektów)**,  
* uczysz się, **jak sprzedawać wartość automatyzacji**, nie tylko pisać kod,  
* pokazujemy Ci konkretne **workflowy, propozycje, i rozwiązania**.

---

## **🔥 3 Rzeczy, Które Naprawdę Mają Znaczenie**

### **1\. Zawsze pracuj nad realnym projektem**

Bez tego nie przetestujesz niczego w praktyce. Nawet jeśli nie masz klienta – wymyśl use-case i go rozwiń.

### **2\. Pierwszy klient to klucz do wszystkiego**

Zdobędziesz feedback, portfolio i pewność siebie. Nie czekaj, aż będziesz "gotowy". Klient to nie nagroda – to narzędzie nauki.

### **3\. Wartość \> technologia**

Nie chodzi o to, czy używasz Llama czy GPT-4. Klienta interesuje **oszczędność czasu, automatyzacja błędów, ROI.** Twój agent musi **rozwiązywać problem, nie być „fajny”.**

---

## **🤖 Dlaczego AI Agenty Mają Znaczenie?**

* To nie jest hype – **AI agenty zmieniają rynek usług i oprogramowania.**  
* Umożliwiają budowanie **bardziej złożonych, samodzielnych automatyzacji.**  
* Biznesy, które to wdrożą wcześniej – **zdobędą przewagę, ograniczą koszty, skalują się szybciej.**

---

## **🧱 Platformy vs Frameworki – Co wybrać?**

**Typ**

**Plusy**

**Minusy**

**Platformy (np. n8n, make.com)**

Szybsze wdrożenia, łatwe zmiany

Mniejsza elastyczność

**Frameworki (np. LangChain, LlamaIndex \+ Python)**

Kontrola, prywatność, wydajność

Więcej kodu, większy próg wejścia

🔑 **Wniosek**: dobierasz narzędzie **do projektu, nie odwrotnie**. Klient potrzebuje wyniku – nie nazwy frameworka.

---

## **🧠 Jak wybrać odpowiedni model LLM do tworzenia agentów?**

Wybór modelu nie jest kwestią „co najlepsze”, tylko **co najlepiej pasuje do Twojego przypadku użycia i ograniczeń projektu**.

### **🔍 Na co zwrócić uwagę?**

**Kryterium**

**Przykładowy wybór**

💬 Chat i function calling

OpenAI GPT-4, Claude 4 (Anthropic)

🔒 Prywatność danych / self-hosting

Open Source (Mistral, LLaMA, Qwen)

💸 Koszty i API dostępność

Gemini, (OpenRouter)

⚡ Szybkość prototypowania

OpenAI, Claude – dobre SDK, dokumentacja, wsparcie

### **🧠 Co polecam na start?**

Na początek warto skupić się na **stabilnym, dobrze udokumentowanym API**, które:

* pozwala szybko iterować,  
* wspiera function calling / tools,  
* ma dużą społeczność i gotowe SDK.

👉 **Dlatego wiele osób zaczyna od OpenAI lub Claude**, ale równie dobrze możesz wystartować na OpenRouter z dostępem do wielu modeli lub LLM open-source, jeśli prywatność lub kontrola są kluczowe.

🔑 **Pamiętaj**: to nie model decyduje o wartości agenta – tylko to, **czy rozwiązuje konkretny problem biznesowy.**

---

## **✅ Co dalej?**

W kolejnych lekcjach nauczysz się:

* Jak znaleźć pierwszego klienta  
* Jak rozpoznać dobry projekt AI  
* Jak napisać ofertę, która sprzedaje wartość  
* Jak zbudować agenta od MVP do wdrożenia  
* Jak obsłużyć klienta po wdrożeniu

---

🤖 Kim Jest AI Agent Developer

**Nie musisz być doktorem AI ani geniuszem ML – ale musisz rozwiązywać prawdziwe problemy.**

---

## **🧠 Kim Jest Twórca Agentów AI?**

Twórca agentów AI to **nowy typ specjalisty**, który:

* nie jest klasycznym programistą,  
* nie musi znać się na budowaniu modeli AI od zera,  
* **ale potrafi połączyć procesy biznesowe z narzędziami AI**, żeby realnie usprawniać pracę.

To:

* 🔍 **analityk problemów**,  
* 💬 **komunikator między technologią a biznesem**,  
* ⚙️ **budowniczy systemów, które działają w realnym środowisku.**

---

## **🚨 Dlaczego Biznes Potrzebuje Agent Developerów?**

1. **Każdy proces w każdej firmie jest inny.**  
   Nie ma „gotowego agenta”, który pasuje do wszystkich – **trzeba go zaprojektować i wdrożyć.**  
2. **AI się zmienia co miesiąc.**  
   Firmy nie nadążają – **potrzebują kogoś, kto wdraża, testuje i iteruje.**  
3. **Firmy nie chcą tylko technologii – chcą wyników.**  
   Agent to narzędzie, które **oszczędza czas, ogranicza koszty i zwiększa sprzedaż.**  
   Ale najpierw musi ktoś zrozumieć, jak to dostarczyć.

---

## **🔧 Co Robi AI Agent Developer?**

**Zadanie**

**Co to oznacza?**

🧩 **Zbiera wymagania biznesowe**

Rozmawia z właścicielem, identyfikuje problem, proponuje agentowy model

🛠️ **Buduje agenta AI**

Używa n8n, OpenAI, Claude, API, integracji – agent powstaje z gotowych komponentów

🔗 **Integruje narzędzia i dane**

Łączy agenta z CRM, bazą danych, formularzem czy wewnętrzną aplikacją

📊 **Mierzy efekty i iteruje**

Sprawdza, czy agent działa (KPI, czas, ROI), poprawia i rozbudowuje

🤝 **Szuka okazji do skalowania**

Gdy agent działa – proponuje kolejne automatyzacje i value-add’y

---

## **👨‍💻 Czy Trzeba Umieć Programować?**

To pytanie pojawia się zawsze – odpowiedź brzmi:  
**Nie musisz być programistą, ale programowanie Ci pomoże.**

### **🔤 Dlaczego warto znać podstawy kodu:**

* **Ułatwia logiczne myślenie i strukturyzację promptów.**  
* **Pomaga tworzyć zaawansowane agenty** (np. pętle, warunki, obsługa błędów).  
* **Umożliwia użycie code node w n8n, pisanie własnych funkcji i obsługę API.**

Najczęściej używane:

* 🐍 **Python** – analiza danych, generowanie odpowiedzi, API  
* 🧩 **JavaScript (w n8n)** – node Code, Set, If, manipulacja danymi  
* 🌐 **REST API \+ JSON** – absolutny must-have do integracji

---

## **🚀 Jak Zostać AI Agent Developerem?**

1. **Wybierz swoją niszę**  
   Automatyzacja HR? AI w e-commerce? Obsługa klienta?  
   Skup się na jednej dziedzinie – łatwiej uczyć się na realnych problemach.  
2. **Zbuduj pierwszy projekt**  
   Nie teoretyzuj – zbuduj agenta, nawet dla siebie lub znajomego.  
3. **Zacznij rozmawiać z klientami**  
   Feedback z rynku to najlepszy nauczyciel. Pokaż projekt, poproś o opinię.  
4. **Nie bój się prostych rozwiązań**  
   N8N \+ OpenAI \+ formularz to czasem wszystko, czego potrzeba.  
5. **Ucz się przez budowanie, nie przez czytanie**  
   Każdy zbudowany agent to nowa kompetencja, którą możesz sprzedać.

---

## **🎓 Podsumowanie**

**Twórca Agentów AI to praktyk, który buduje realne rozwiązania dla realnych firm.**

Nie chodzi o znajomość najnowszych paperów.  
Chodzi o to, żeby:

* 🧠 Zrozumieć problem,  
* 🛠️ Zbudować agenta,  
* 💼 Dostarczyć wartość klientowi.

👉 **To rola przyszłości, która dzieje się teraz.**

---

AVATAR KLIENTA I STRATEGIA

Prompt Profil Psychograficzny Awatara

### **Jak używać**

1. **Wklej prompt** do swojego narzędzia (ChatGPT, custom agent, itp.). ***UWAGA***: włącz funkcję “deep research”, inaczej nie zadziała\!  
2. **Podaj Persona\_raw** – np. „Właściciel e-commerce 1–5 mln PLN rocznie, 10 pracowników…”.  
3. Agent zapyta o brakujące dane (jeśli trzeba), zrobi research i zwróci raport zaczynający się od \<\<OUTPUT\>\>.

# **\[prompt do wklejenia\]**

# **ROLA**

Jesteś **AIBiznesLab Research Analyst**. Twoim zadaniem jest w ciągu jednej sesji wykonać **głęboki research** (deep dive) i przerobić wstępny opis grupy docelowej w **Strategiczny Profil Persony**  – gotowy do użycia w marketingu, sprzedaży i product-dev.

---

## **WEJŚCIE**

1. **Persona\_raw** – krótki opis klienta/grupy od użytkownika (obowiązkowo).  
2. *(opcjonalnie)* Hasła lub tagi, które użytkownik chce uwzględnić (np. \#SaaS, \#Automatyzacja).

**Jeśli Persona\_raw nie została podana** – zatrzymaj się i poproś użytkownika o jej wklejenie.

---

## **DZIAŁANIE – METODOLOGIA**

1. **Deep Dive**  
   * Przeszukaj publiczne fora, Reddit, grupy FB/Li, YouTube comments, żeby usłyszeć „prawdziwy głos” persony.  
   * Gdy znajdziesz wartościowy cytat, zanotuj go w formacie:  
     \> "Treść cytatu" – forum (MM-YYYY)  
2. **Evidence-First**  
   * Każdy insight poprzyj **min. 1 cytatem**. Brak cytatu → nie włączaj insightu.  
3. **Scope Control**  
   * Jeśli brakuje danych, **zadaj maks. 3 precyzyjne pytania** i poczekaj na odpowiedź.  
4. **Synthesis**  
   * Stwórz spójny psychograficzny obraz: przekonania, bóle, marzenia, narracje, obiekcje.  
5. **Precyzja liczbowa**  
   * Podawaj realne nazwy narzędzi, grup, kanałów, rankingów (np. „Automation Anywhere \#2 w G2 07-2025”).

---

## **WYJŚCIE – FORMAT**

### **\<\>**

**Karta Persony** 

* **Demografia & Psychografia (3-5 zdań)** – kim jest, jak myśli.  
* **Główne pragnienie**  
* **Największy lęk**  
* **Bio (2-3 zdania „o mnie” w 1\. os.)**

**TOP 5 Bólów (z cytatami)**

1. …  
2. …  
   *(pod każdym – ≥ 1 cytat)*

**Cyfrowy Ekosystem**

* **Miejsca online (min 3\)**  
* **Źródła wiedzy (min 3\)**  
* **Narzędzia (min 3\)**

**Sygnały Zakupowe**

* Frazy w Google  
* Zachowania wskazujące gotowość  
* Typowe obiekcje

**Ukryte Narracje & Przekonania**

* …

*(Koniec raportu)*

---

## **INSTRUKCJA STARTOWA DLA AI**

1. **Zapytaj użytkownika:** „Proszę wklej krótki opis persony/grupy docelowej (Persona\_raw).”  
2. Po otrzymaniu Persona\_raw → rozpocznij research i wygeneruj wyjście w sekcji **\<\>**.

—-------

🧠 Agent „Znajdź swoją niszę w automatyzacji"

*\[PROMPT NA ZNALEZIENIE SWOJEJ NISZY \- do wklejenia do ChatGPT/Claude\]*

**Instrukcje dla modelu (LLM):**  
Jesteś ekspertem od automatyzacji procesów biznesowych, projektowania agentów AI i analizy rynkowej.  
Twoim zadaniem jest **(1) przeprowadzić pogłębiony wywiad** z użytkownikiem, a następnie **(2) na podstawie udzielonych odpowiedzi zaproponować najlepiej dopasowaną niszę w branży automatyzacji** wraz z uzasadnieniem i pierwszymi krokami projektowymi.  
Działasz w dwóch etapach opisanych niżej. Stosuj wyłącznie język polski.

---

## **Etap 1 – Pogłębiony wywiad (zadaj wszystkie pytania zanim przejdziesz dalej)**

**Zasady zadawania pytań**

* pytania muszą być numerowane i uporządkowane logicznie (od ogólnych do szczegółowych);  
* proś użytkownika o odpowiedzi możliwie konkretne (liczby, przykłady, narzędzia, budżety, itp.);  
* nie komentuj i nie analizuj odpowiedzi w trakcie zbierania – przejdź do analizy dopiero po otrzymaniu kompletu danych;  
* jeśli użytkownik pominie jakąś odpowiedź, poproś grzecznie o doprecyzowanie.

### **Blok A – Profil kompetencyjny**

1. Jakie masz **twarde umiejętności techniczne** (języki programowania, narzędzia no-code/low-code, doświadczenie z integracjami API, RPA, itp.)?  
2. Jak oceniasz swój poziom kompetencji analitycznych / data science (początkujący, średnio-zaawansowany, ekspert)?  
3. Jakie **branże lub działy** (np. sprzedaż, HR, finanse, obsługa klienta) znasz z praktyki zawodowej?

### **Blok B – Pasje i motywacje**

4. Które aspekty pracy sprawiają Ci największą satysfakcję (np. rozwiązywanie problemów, tworzenie prototypów, praca z ludźmi)?  
5. Jakie **tematy lub trend** w AI / automatyzacji najbardziej Cię ekscytują i dlaczego?

### **Blok C – Obecna sytuacja zawodowa**

6. Jaką rolę zawodową pełnisz obecnie i w jakiej firmie/branży?  
7. Ile czasu tygodniowo możesz przeznaczyć na nowy projekt automatyzacji?  
8. Czy dysponujesz budżetem lub zasobami (np. dostęp do danych, serwerów, licencji) przydatnymi w projekcie?

### **Blok D – Talenty i sieć kontaktów**

9. Jakie **naturalne talenty** (np. komunikacja, sprzedaż, design) odróżniają Cię od innych?  
10. Czy masz dostęp do **sieci biznesowej**, która mogłaby pomóc w pozyskaniu pierwszych klientów / testów (np. znajomi przedsiębiorcy, obecny pracodawca)?

### **Blok E – Preferencje projektowe i biznesowe**

11. Jakie kryteria sukcesu są dla Ciebie najważniejsze (dochód pasywny, portfolio, wpływ społeczny, szybki MVP)?  
12. Jaki **poziom ryzyka** finansowego/czasowego jesteś skłonny zaakceptować?

### **Blok F – Obserwacje rynku**

13. Jakie powtarzalne procesy lub „wąskie gardła” zauważyłeś ostatnio w swojej lub zaprzyjaźnionych firmach?  
14. Czy dostrzegasz **konkretne narzędzia lub usługi** (np. Zapier, Make, LangChain) często pojawiające się w zapytaniach rynkowych?

👉 **Instrukcja dla użytkownika:** odpowiedz na wszystkie pytania numerami (1-14). Jeżeli coś pominiesz, otrzymasz dopytanie.

---

## **Etap 2 – Analiza i rekomendacja (wykonaj dopiero po otrzymaniu wszystkich odpowiedzi)**

1. **Mapowanie kompetencji ↔ problemy biznesowe**  
* Zidentyfikuj procesy, w których kompetencje użytkownika (Blok A & D) są największą przewagą.  
* Sprawdź, czy pasje (Blok B) pokrywają się z zapotrzebowaniem rynkowym (Blok F).  
2. **Ocena atrakcyjności niszy**  
* Użyj prostego wzoru ROI \= (oszczędzony czas \+ nowy przychód) / koszt wdrożenia, estymując wartości na podstawie informacji z Bloków C, E i F.  
* Oceń barierę wejścia (technologia, regulacje, konkurencja).  
* Oceń możliwość pozyskania pierwszych klientów poprzez sieć użytkownika (Blok D).  
3. **Wybór niszy**  
* Zaproponuj **jedną, maksymalnie dwie** nisze z najwyższym ROI i najlepszym dopasowaniem kompetencyjnym.  
* Dla każdej podaj:  
  * główny problem biznesowy, który rozwiązuje nisza,  
  * docelowego klienta (branża, dział, stanowisko decyzyjne),  
  * przykładowy pierwszy projekt/MVP do zrealizowania w 4-6 tygodni,  
  * szacowane korzyści (czas, koszt, przychód).  
4. **Uzasadnienie wyboru**  
* Wyjaśnij krok po kroku, jak odpowiedzi użytkownika wpłynęły na rekomendację (odwołuj się do numerów pytań).  
* Podkreśl, w jaki sposób nisza realizuje priorytety z Bloku E.  
5. **Kolejne kroki**  
* Zaproponuj 2-3 następne działania (np. walidacja problemu z klientem, budowa demo, analiza konkurencji).

**Format odpowiedzi:**

\#\# Rekomendowana nisza

**Nazwa:** …  

**Opis problemu:** …  

**Docelowy klient:** …  

**Proponowany MVP:** …  

**Szacowany ROI:** …  

\#\# Uzasadnienie

\- (odniesienia do pytań 1-14)

\#\# Kolejne kroki

1\. …

2\. …

3\. …

Jeżeli istnieją dwie równie dobre nisze, przedstaw je w osobnych sekcjach.

⚠️ **Nigdy** nie pomijaj żadnego z punktów analizy. Jeśli dane są niekompletne, poproś użytkownika o uzupełnienie brakujących odpowiedzi i wstrzymaj się z rekomendacją.

—----------  
PIERWSZY PROJEKT I DZIAŁANIE

🎯 Jak Znaleźć Swój Pierwszy Projekt Automatyzacji

**Bez projektu nie zbudujesz ani doświadczenia, ani wartości. Ten etap to fundament.**

---

## **📌 Dlaczego Potrzebujesz Projektu?**

Zanim przejdziesz do ofert, klientów i skalowania – **musisz mieć realny projekt.**  
Dlaczego?

* ✅ **Utrwalasz wiedzę** – praktyka łączy teorię w całość.  
* 🧱 **Budujesz portfolio** – masz co pokazać klientom lub społeczności.  
* ⚡ **Utrzymujesz motywację** – każdy etap daje poczucie postępu.

Nie czekaj na idealną okazję. **Twórz kontekst sam.**

---

## **🔍 Jak Znaleźć Pomysł na Pierwszy Projekt?**

1. **Zacznij od siebie**  
   * Jaką masz branżę, doświadczenie, znajomości?  
   * Czy wiesz, jakie procesy są powtarzalne lub ręczne?  
2. **Skontaktuj się z otoczeniem**  
   * Porozmawiaj z właścicielem lokalnego biznesu.  
   * Zapytaj: „*Co zabiera Ci najwięcej czasu każdego tygodnia?”*  
3. **Sprawdź rynek**  
   * Wejdź na Upwork, Fiverr, Google Trends.  
   * Zrób analizę – *jakie problemy zgłaszają klienci?*  
4. **Użyj swoich kontaktów**  
   * Przeanalizuj branżę, którą rozumiesz – tam najszybciej zrozumiesz problemy.  
5. **Obserwuj grupy i ogłoszenia**  
   * Społeczności AI, fora dla małych firm, grupy na FB, LinkedIn.

💡 Wskazówka: pierwszy projekt może być za darmo – **wartość leży w doświadczeniu, nie w wynagrodzeniu.**

---

## **💬 Co Tak Naprawdę Chcą Biznesy?**

Nie „agenta AI”, tylko **rozwiązanie problemu.**  
Twoje podejście powinno skupiać się na 3 poziomach:

**Poziom**

**Przykład**

✅ **Wewnętrzny (czas, koszt, frustracja)**

Automatyzacja 5h tygodniowo w Excelu

💰 **Zewnętrzny (sprzedaż, kontakt z klientem)**

Bot przypominający o niezapłaconych fakturach

🧠 **Filozoficzny (nie nadążam za AI)**

Pomoc w „rozumieniu i wdrożeniu” AI bez chaosu

**Firmy chcą:**

* Oszczędzać czas,  
* Ograniczać koszty,  
* Zwiększać marżę,  
* I nie wypaść z rynku przez brak innowacji.

---

## **🔎 Jak Rozpoznać Szansę Biznesową?**

Użyj metody **Divide & Conquer**:

1. Zbadaj **działy**: sprzedaż, finanse, HR, obsługa klienta.  
2. Sprawdź **role**: kto traci najwięcej czasu na powtarzalne czynności?  
3. Zobacz **SOPy** (Standard Operating Procedures): czy są już zdefiniowane?  
4. Obejrzyj **taski** – co się dzieje krok po kroku?

🎯 Wybierz 1 obszar, gdzie możesz wygenerować wartość – i tam uderzaj z automatyzacją.

---

## **📈 Jak Oszacować Potencjalny Zysk (ROI)?**

Prosty wzór:

(Czas zaoszczędzony x koszt godziny pracy) \- koszt wdrożenia \= ROI

Przykład:

* Oszczędzasz 15h/mies.  
* Pracownik kosztuje 120zł/h.  
* Projekt kosztował 3000zł.  
* ROI \= (15 x 120\) \- 3000 \= 1800 \- 3000 \= **\-1200zł w 1\. miesiącu** → **\+1800zł w każdym kolejnym.**

---

## **🧭 Jak Zakresować Swój Pierwszy Projekt (Scoping)**

1. **Nie definiuj wszystkiego od razu**  
   Zacznij od efektu, nie od narzędzia. Najpierw: *"co ma się zmienić?"*  
2. **Jeden problem \= jeden agent**  
   Nie buduj kombajnów. Rozwiąż 1 rzecz dobrze.  
3. **Użyj gotowych komponentów**  
   Szablony n8n, prompty, open source playbooki – skracają development nawet o 80%.  
4. **Zdefiniuj sukces**  
   Ustal: co mierzymy? Jak wiemy, że agent działa?

---

## **💡 Przykłady Pomysłów Na Pierwszy Projekt**

**Typ agenta**

**Co robi?**

**Gdzie wdrożyć?**

📊 **Agent analizy danych**

Łączy się z bazą danych i wyciąga wnioski

Dla e-commerców, SaaS

🤖 **Onboarding agent**

Automatyzuje zbieranie danych i formularzy

HR, rekrutacja, konsulting

💬 **Obsługa klienta**

Odpowiada na najczęstsze pytania z bazy wiedzy

Sklepy online, usługi lokalne

📢 **Marketing agent**

Publikuje posty, analizuje CTR, generuje content

Małe firmy, agencje

💰 **Sprzedażowy agent**

Przypomina o leadach, tworzy follow-upy

B2B, doradztwo

---

## **✅ Podsumowanie**

Pierwszy projekt to:

* Twój poligon doświadczalny,  
* Twoje portfolio,  
* Twoja najkrótsza droga do pierwszego klienta.

Nie czekaj – **stwórz use-case, zbuduj MVP, przetestuj i pokaż światu.**

---

💸 Jak Zarobić Swoje Pierwsze Pieniądze na AI

## **🎯 Cel lekcji**

Ta lekcja to praktyczny przewodnik, jak zdobyć swojego pierwszego klienta i zarobić pierwsze 1000+ zł (lub $) dzięki tworzeniu AI agentów. Zamiast teoretycznych przykładów, skupiamy się na konkretnych działaniach, które możesz wdrożyć już dziś – nawet bez portfolio.

---

## **🧠 Kluczowe Zmiany w Myśleniu**

Aby zacząć zarabiać na AI, nie musisz być programistą ani ekspertem w ML – musisz za to **zacząć działać**. Oto 3 zasady, które pomogą Ci ruszyć z miejsca:

* **Najpierw działanie, potem nauka:** Ucz się, tworząc prawdziwe projekty – nie czekaj, aż „będziesz gotowy”.  
* **Liczy się efekt biznesowy, nie technologia:** Firmy nie płacą za „sztuczną inteligencję” – płacą za rozwiązania problemów.  
* **AI nie zrobi wszystkiego:** Twoja wartość to zrozumienie biznesu i zaprojektowanie rozwiązania – model AI to tylko narzędzie.

---

## **🧱 Horyzontalne vs. Wertykalne Agenty AI**

**Typ agenta**

**Horyzontalny**

**Wertykalny**

Dla kogo

Jednorazowy klient / projekt

Jedna branża / wiele klientów

Koszt startu

Niski

Wysoki (czas, badania, MVP)

Skalowalność

Ograniczona

Wysoka

Rekomendacja

✅ Zacznij tutaj

🚀 Przejdź, gdy masz doświadczenie

---

## **🔍 Znajdź Swój Niszowy Rynek**

Nie zaczynaj od „dla wszystkich”. Skorzystaj z prostego szablonu, aby określić swoją niszę:

**Pomagam \[typ klienta\] osiągnąć \[efekt\] bez \[problemów\].**

**Przykład:**  
Pomagam małym biurom rachunkowym zautomatyzować proces fakturowania bez kosztownych wdrożeń ERP.

---

## **🤝 Jak Zdobyć Pierwszego Klienta**

Nie potrzebujesz reklamy. Potrzebujesz **30–60 minut dziennie aktywnej pracy** nad pozyskiwaniem klienta:

**Kanał**

**Opis**

🔥 Warm Outreach

Napisz do znajomych, firm, kontaktów

🛠 Freelance

Załóż profile na Fiverr / Upwork

💬 Community

Dołącz do społeczności, np. Discord, Skool

📹 Loom Video

Zrób 1-min. nagranie i pokaż wartość

---

## **🔎 Jak Rozpoznać Problemy Biznesowe**

Nie każda automatyzacja to agent. Rozróżnij:

* **Automatyzacja** \= stałe reguły (np. n8n, cronjoby)  
* **Agent AI** \= dynamiczna logika, interpretacja, dialog

Skup się na:

* obszarach z dużym wolumenem danych lub pytań,  
* punktach styku z klientem (support, onboarding),  
* procesach wymagających decyzji lub kontekstu.

---

## **🛠 Zbuduj MVP – Minimum Viable Agent**

* Nie buduj wszystkiego od zera. Użyj:  
  * **n8n** – do integracji i flow  
  * **Bubble / Webflow** – jeśli potrzebny jest interfejs  
* Iteruj z klientem – wersja 1.0 ma dać **wartość, nie perfekcję**.

---

## **⚙️ Wdrożenie i Integracja**

Zadbaj, aby agent działał tam, gdzie klient faktycznie pracuje:

**Integracja**

**Przykłady**

💬 Chat/Widget

WhatsApp, Intercom, czat na stronie

🧩 System backend

CRM, ERP, API, webhooki

🔁 Automatyzacje

cronjob, harmonogram, fallback

---

## **🔄 Iteracja i Ulepszanie**

Nie porzucaj projektu po wdrożeniu:

* Zbieraj feedback i optymalizuj prompt, funkcje, flow.  
* Użyj narzędzi takich jak **Langfuse, Kura, OpenAI evals**.  
* Rób pomiary efektywności: czas, jakość odpowiedzi, konwersje.

---

## **📈 Skalowanie i Produktyzacja**

Gdy agent działa i masz feedback:

* Stwórz **template** i oferuj go innym firmom z tej samej branży.  
* Zastosuj model **płatność za wynik** lub **abonament**.  
* Zautomatyzuj wdrażanie (np. onboarding form \+ n8n workflow).

---

## **📌 Najważniejsze Wnioski**

✅ Zacznij od prostych, indywidualnych projektów (horyzontalnych)  
✅ Skup się na **rozwiązywaniu problemów**, nie AI jako takiej  
✅ Rób **działania sprzedażowe codziennie**, nawet 30 minut  
✅ Buduj agentów iteracyjnie i opieraj się na feedbacku klienta

---

## **✅ Zadania do Wdrożenia**

* Określ swoją niszę według szablonu  
* Załóż profil na Upwork / Fiverr i uzupełnij go  
* Napisz do 5 potencjalnych klientów z video (np. Loom)  
* Stwórz 1 MVP agenta i zbierz feedback  
* Zautomatyzuj wdrożenie i opisz projekt jako **Case Study**

---

MITY I RZECZYWISTOŚĆ

🧠 Mity, na które tracisz swój czas (i klientów)

## **🌍 Wprowadzenie**

W tej lekcji obalamy najczęściej powtarzane mity na temat agentów AI – bazując na doświadczeniu z ponad 100 firmami. Te błędne przekonania nie tylko opóźniają Twój rozwój, ale też mogą kosztować Cię klientów, czas i pieniądze.

Dowiesz się, kiedy agent to dobre rozwiązanie, kiedy go **nie używać**, oraz jak unikać pułapek hype’u. Ta lekcja to obowiązkowy filtr dla każdego, kto nie chce stracić kilku miesięcy „budując coś, co nigdy nie zadziała”.

---

## **❌ Mit \#1: „Agent AI rozwiąże każdy problem”**

🔍 **Prawda:**  
Nie każdy problem to problem dla agenta AI. Rozróżnij:

* **Automatyzacja** – powtarzalne zadania, bez kontekstu (np. wysyłka maili, parsowanie PDF)  
* **Agent AI** – dynamiczne decyzje, dialog, praca z kontekstem  
* **System AI** – złożone środowiska z logiką, pamięcią, komponentami

---

## **❌ Mit \#2: „Zbuduję nowy biznes tylko na agencie AI”**

📉 **Prawda:**  
Bez realnych, już istniejących procesów biznesowych agent nie ma czego automatyzować. Próba skalowania „od zera” kończy się frustracją i stratą czasu.

---

## **❌ Mit \#3: „Wiem, jakiego agenta i narzędzia potrzebuję”**

🧪 **Prawda:**  
Nie zgaduj. Testuj.  
Sukces w AI to wynik **ciągłych iteracji**. Najlepsze rozwiązania powstają nie z planu, ale z danych i feedbacku.

---

## **❌ Mit \#4: „Muszę wszystko zbudować sam”**

🧰 **Prawda:**  
Zacznij od gotowych narzędzi i frameworków (n8n, OpenRouter, LangChain, Assistants API). Custom development rezerwuj tylko na ostatnie 10% – tam, gdzie wartość ROI jest najwyższa.

---

## **❌ Mit \#5: „Fine-tuning rozwiąże moje problemy”**

🧠 **Prawda:**  
Fine-tuning zmienia **styl wypowiedzi**, nie inteligencję agenta.  
Do personalizacji treści – tak.  
Do zwiększenia trafności odpowiedzi – lepiej użyj dobrego RAG i promptingu.

---

## **❌ Mit \#6: „RAG już nie działa, bo mamy większe konteksty”**

📚 **Prawda:**  
Większy kontekst to nie wszystko.  
**Retrieval-Augmented Generation (RAG)** nadal daje przewagę: niższe koszty, trafniejsze odpowiedzi, lepsza interpretacja danych firmowych.

---

## **❌ Mit \#7: „Poczekam aż AI będzie bardziej dojrzałe”**

🚀 **Prawda:**  
Każdy miesiąc opóźnienia to mniej doświadczenia i mniej projektów w portfolio.  
**Iteruj z tym, co masz.** Zmiana modelu nie wymaga budowy od nowa.

---

## **❌ Mit \#8: „Agenty ogólne są potężniejsze niż niszowe”**

🎯 **Prawda:**  
Nisza \= specjalizacja \= skuteczność.  
Agenty wertykalne (np. dla księgowości, supportu, HR) **zawsze** przewyższają „ogólnego asystenta”.

---

## **❌ Mit \#9: „Research papers pokazują prawdziwą skuteczność modeli”**

🧪 **Prawda:**  
Benchmarki ≠ Rzeczywistość.  
**Tylko testy w Twoim kontekście** (dane, użytkownik, cel) mają wartość.  
Papery to inspiracja, nie decyzja.

---

## **❌ Mit \#10: „Zastąpię połowę zespołu agentami w przyszłym tygodniu”**

📉 **Prawda:**  
Zacznij od jednego procesu z wysokim ROI.  
Automatyzacja to **strategia długofalowa**, nie magiczna różdżka.  
Integracja, adaptacja i testy zajmują czas – ale to jedyna droga do stabilnych wyników.

---

## **📌 Kluczowe Wnioski**

✅ Rozróżniaj: automatyzacja, agent, system  
✅ Automatyzuj to, co już działa w firmie  
✅ Testuj, iteruj, nie zakładaj z góry  
✅ Buduj na gotowych narzędziach – optymalizuj później  
✅ Fine-tuning? Tylko jeśli masz realny use case  
✅ RAG nadal króluje przy pracy z wiedzą firmy  
✅ Wcześni użytkownicy zbierają najwięcej feedbacku i klientów  
✅ Niszowe agenty \> ogólne agenty  
✅ Realne testy \> benchmarki  
✅ Stopniowa integracja \> nagła rewolucja

---

## **🛠 Zadania do Wdrożenia**

* Przeanalizuj swój aktualny projekt – co to: automatyzacja, agent, czy system?  
* Wybierz jedno gotowe narzędzie (np. LangChain, Assistants API, n8n) – i zacznij od niego  
* Zrób listę 3 agentów, które **nie są Ci teraz potrzebne** – odrzuć je  
* Zrób test A/B promptu vs fine-tuning (jeśli się zastanawiasz nad tym drugim)  
* Stwórz prosty agent niszowy i sprawdź, czy rozwiązuje konkretny problem firmy

---

SCHEMAT POZYSKIWANIA

🔁 Schemat Pozyskiwania Klientów dla Agent Devs

Poniżej znajduje się **zoptymalizowany proces krok po kroku:**

---

### **🔨 1\. Stwórz swój profil**

➡️ Wybierz platformę (Upwork, LinkedIn, Fiverr, portfolio online, Youtube)  
➡️ Pokaż umiejętności, efekty, zrozumienie problemów biznesowych  
➡️ Zoptymalizuj bio i tagi pod słowa kluczowe

---

### **💡 2\. Stwórz konkretne oferty**

➡️ Skup się na **problemach biznesowych**, nie technologii  
➡️ Pokaż jasno: “co automatyzuję” i “jaki rezultat dostarczam”  
➡️ Przygotuj wersję darmową/case study na start

**Wskazówka:** Zrównoważ oferty niszowe (np. onboarding klientów w SaaS) i ogólne (np. ekstrakcja danych z PDF)

---

### **🌍 3\. Wybierz kanały pozyskiwania klientów:**

#### **Inbound (klient znajduje Ciebie)**

✅ Posty na LinkedIn, Twitter, YouTube Shorts  
✅ Udostępniaj case study, mini-przewodniki i tutoriale  
✅ Rozwijaj markę osobistą

#### **Outbound (Ty znajdujesz klienta)**

✅ Freelance platforms (Upwork, Fiverr – czas realizacji: **3–14 dni**)  
✅ Warm outreach – napisz do ludzi z Twojej sieci  
✅ Udział w wydarzeniach/meetupach – czas realizacji: **1–5 dni**  
✅ Dołącz do społeczności/forów – czas realizacji: **1–4 tygodnie**

---

### **📣 4\. Publikuj i rozgłaszaj**

➡️ Opublikuj swoje oferty na:

* 🔹 Freelance platforms  
* 🔹 Social media  
* 🔹 Społeczności/Discordy  
* 🔹 Własny landing page/portfolio

**Powtarzaj to regularnie – content się kumuluje.**

---

### **🧠 5\. Zdobądź pierwsze zlecenie** 

🎯 Odpowiadaj na oferty i wiadomości z dopasowanymi rozwiązaniami  
📊 Zbieraj feedback i pytaj o problemy, które można rozwiązać agentami  
🤝 Zadbaj o relację, nie tylko o sprzedaż

---

### **📄 6\. Zbuduj Case Study**

🛠️ Po każdym zleceniu:

* Dokumentuj problem → rozwiązanie → efekt  
* Pokaż użyte narzędzia i podejście  
* Wstaw cytat klienta lub wynik (np. ROI)

🌀 Case study to Twój lejek do kolejnych klientów.

---

Discovery Call \- Jak Przeprowadzić Ro

Jak odkryć prawdziwe potrzeby klienta

Pierwszy klient to dopiero początek \- prawdziwe wyzwanie to przeprowadzenie rozmowy, która odkryje jego największe problemy i pokaże, gdzie AI przyniesie mu największą wartość. Ten przewodnik pomoże Ci przeprowadzić discovery call, który zamieni zainteresowanie w konkretny kontrakt.

## **1\. Przygotowanie \- Zanim włączysz kamerę**

**Cel:** Budowanie zaufania od pierwszej sekundy rozmowy

Zanim zaczniesz zadawać pytania, musisz ustalić odpowiedni klimat. Klient musi poczuć, że rozmawiasz z ekspertem, który rzeczywiście chce mu pomóc, a nie tylko sprzedać usługę.

* **Zbadaj klienta wcześniej** \- 10 minut na LinkedIn/stronie firmy da Ci przewagę nad 90% konkurencji  
* **Przygotuj 2-3 konkretne obserwacje** o jego branży/firmie ("Widzę, że ostatnio rozwijaliście się w kierunku...")  
* **Ustal czas trwania** \- idealnie 30-45 minut, nie więcej  
* **Zapewnij o poufności** \- "Wszystko co usłyszymy pozostaje między nami"

## **2\. Otwarcie rozmowy (5 minut)**

**Cel:** Przełamanie lodów i ustalenie oczekiwań

Pierwsze minuty decydują o całej rozmowie. Zamiast standardowego "opowiedz o firmie", zacznij od ich perspektywy.

* **Rozpocznij od ich sukcesu:** "Co obecnie działa najlepiej w Waszej firmie?"  
* **Ustal agendę wspólnie:** "Przygotowałem kilka obszarów do omówienia, ale co dla Ciebie jest najważniejsze?"  
* **Daj wyraźnej wartości:** "Na koniec tej rozmowy będziesz miał jasny obraz, gdzie automatyzacja może Ci zaoszczędzić najbardziej czasu i pieniędzy"

## **3\. Szybkie mapowanie \+ identyfikacja najdroższych procesów (10 minut)**

**Cel:** *Znalezienie procesów o najwyższym ROI automatyzacji*

### **SZYBKA OCENA BIZNESU:**

* **"Możesz w kilku zdaniach opisać swój biznes i główne źródła przychodu?"**  
* **"Jaki macie średni miesięczny profit?"** \- określ budżet na automatyzację  
* **"Jakie są najdroższa role/stanowiska w firmie?"** \- tu szukaj opportunities

### **SZUKANIE BOTTLENECK (miejsce w procesie, które ogranicza przepustowość całego systemu, "wąskie gardło)**

* **"Co jest Twoim największym bottleneckiem w tej chwili?"**  
* **"Gdzie tracisz najwięcej czasu/pieniędzy?"**  
* **"Co powstrzymuje Cię przed skalowaniem do następnego poziomu?"**

## **4\. Wizualne mapowanie procesu (10 minut)**

**Cel:** Mapowanie na żywo najważniejszego procesu \+ budowanie zaangażowania klienta

**Tym wyróżnisz się z tłumu\!** Zamiast tylko zadawać pytania, otwórz Figma/Miro i mapuj proces na żywo z klientem. To zmienia dynamikę z przesłuchania na współpracę\!

### **Setup mapowania**

* **"Otwórzmy Figma i zmapujmy ten proces krok po kroku"**  
* **"Co konkretnie uruchamia ten proces?"** \- znajdź trigger  
* **"A co się dzieje dalej?"** \- buduj flow step by step

### **Drążenie w szczegóły**

* **"Jakie narzędzia używasz na tym etapie?"**  
* **"Skąd bierzesz te informacje?"**  
* **"Co może się popsuć w tym kroku?"**  
* **"Ile czasu to zajmuje?"**

### **Zbieranie "materiałów" od razu**

* **"Czy możesz mi udostępnić ten formularz Google/szablon/SOP?"**  
* **"Czy mogę zobaczyć przykład tego dokumentu?"**  
* **"Czy nagrywasz te rozmowy? Czy mogę mieć dostęp?"**

### **Technika "Wykrywacz kosztów"**

Podczas mapowania, przy każdym kroku pytaj:

* **"Kto to robi i ile kosztuje jego godzina pracy?"**  
* **"Ile takich procesów macie dziennie/tygodniowo?"**  
* **"Co się dzieje gdy ta osoba jest niedostępna?"**

## **5\. Budowanie momentum i wizji skalowania**

**Cel:** Sprawienie, żeby klient sam zobaczył możliwości i wartość AI

**Najlepszy moment:** Gdy klient mówi "O tym nigdy nie pomyślałem\!" \- wtedy wiesz, że wygrałeś.

### **Technika "Skalowanie wizji"**

* **"Ile takich procesów mógłbyś robić gdyby nie było tego bottlenecku?"**  
* **"Co by się stało gdybyś mógł zwiększyć volume z X do 3X?"**  
* **"Jak wyglądałby Twój biznes gdyby ten proces działał 24/7?"**

### **Gotowce do użycia na tym etapie:**

* **"Teraz automatyzujecie najdroższe zadania pierwsze \- nie te które nie lubicie"**  
* **"AI może skalować w nieskończoność \- jeden człowiek ma swoje limity"**  
* **"Gdy ten proces będzie zautomatyzowany, Twój najdroższy pracownik będzie mógł się skupić na...?"**

## **6\. Pomiar wartości i ROI (5 minut)**

**Cel:** Ustalenie metryk, które udowodnią sukces automatyzacji

Bez jasnych metryk nie ma sprzedaży. Klient musi widzieć liczby.

### **KPI obecne**

* **"Jak dziś mierzysz efektywność tego procesu?"**  
* **"Jaki jest Wasz benchmark dla tej aktywności?"**  
* **"Co by musiało się poprawić, żebyś był zadowolony z inwestycji?"**

### **Wizja sukcesu**

* **"Jak wyglądałby idealny świat dla tego procesu?"**  
* **"Ile czasu chciałbyś zaoszczędzić tygodniowo?"**  
* **"Co byś robił z tym zaoszczędzonym czasem?"** \- pokażesz dodatkową wartość

## **7\. Następne kroki (5)**

Nie kończ bez jasnego planu działania i dostępu do systemów klienta.

* **"Na podstawie tego co widzę, zaczynam od \[konkretny process\]"**  
* **"W ciągu tygodnia pokażę Ci działający prototyp"**  
* **"Kiedy możemy się spotkać na demo tego rozwiązania?"**  
* **"Kto jeszcze musi to zaakceptować w Twojej firmie?"**

## **Czego unikać \- Najczęstsze błędy**

* **Nie mów o technologii za wcześnie** \- klient nie kupuje narzędzia, tylko rozwiązania problemu  
* **Nie zadawaj pytań "tak/nie"** \- nie dowiesz się niczego wartościowego  
* **Nie przerywaj opowieści** \- najlepsze informacje przychodzą po ciszy  
* **Nie sprzedawaj za wcześnie** \- zrozum problem zanim zaproponujesz rozwiązanie  
* **Nie ignoruj emocji** \- frustracja i ból są silniejszymi motywatorami niż efektywność

## **NAJWAŻNIEJSZA LEKCJA\!:**

**Bottleneck w biznesie** \= miejsce w procesie, które ogranicza przepustowość całego systemu, jak najwęższe miejsce w butelce.

**Przykłady:**

* **Jeden pracownik** który musi zatwierdzać wszystkie decyzje  
* **Proces** który zajmuje 5 godzin dziennie i blokuje kolejne kroki  
* **Narzędzie** które może obsłużyć max x transakcji dziennie  
* **Umiejętność** którą ma tylko jedna osoba w zespole

**Dlaczego to ważne dla AI:** Bottlenecki to najlepsze miejsca do automatyzacji, bo:

* Usunięcie bottlenecku \= odblokowanie całego procesu  
* Największy ROI \- jedna zmiana wpływa na cały system  
* Klient od razu widzi wartość \- problem znika

**Pamiętaj:** Discovery call to nie przesłuchanie, to rozmowa biznesowa między profesjonalistami. Twoja ciekawość ich problemów musi być autentyczna \- tylko wtedy klient zaufat Ci swoje najważniejsze wyzwania.

—--

AUTOMATYZACJA OUTREACH I INBOUND \- WORKFLOWS

🚀 Instrukcja Wdrożenia \- Cold Outreach Search

## **✅ Pre-Deployment Checklist**

### **1\. Wymagane Konta i API Keys**

* \[ \] **SerpAPI** \- [serpapi.com](http://serpapi.com) (100 zapytań/miesiąc FREE)  
* \[ \] **Google AI Studio** \- [aistudio.google.com](http://aistudio.google.com) (Gemini API)  
* \[ \] **Mailgun** \- [mailgun.com](http://mailgun.com) (10k emaili/miesiąc FREE tier)  
* \[ \] **Google Sheets** \- arkusz do CRM  
* \[ \] **Slack** \- workspace \+ bot token

### **2\. Przygotowanie Google Sheets CRM 📊**

#### **Arkusz: "Cold Outreach Leads"**

A1: Data | B1: Firma | C1: Miasto | D1: Website | E1: Email | F1: Telefon | 

G1: Status | H1: Kampania | I1: Personalizacja

**Przykład danych:**

2025-01-15 | ABC Księgowość | Warszawa | abc.pl | kontakt@abc.pl | \+48123456789 | Lead dodany | Cold Outreach 2025-01 | Szanowni Państwo z ABC...

### **3\. Konfiguracja Google AI Studio (Gemini) 🤖**

1. Idź do: [https://aistudio.google.com/](https://aistudio.google.com/)  
2. Zaloguj się kontem Google  
3. Kliknij **"Get API Key"** → **"Create API Key"**  
4. Skopiuj wygenerowany klucz  
5. **WAŻNE:** Włącz billing jeśli potrzebujesz więcej niż darmowy limit

### **4\. Konfiguracja Mailgun 📧**

1. Załóż konto na [mailgun.com](http://mailgun.com)  
2. Zweryfikuj domenę (np. mg.twojafirma.pl)  
3. Skonfiguruj DNS records (MX, TXT, CNAME)  
4. Skopiuj API Key i Base URL  
5. **WAŻNE:** Dodaj tracking domains dla click/open tracking

### **5\. SerpAPI Setup 🔍**

1. Załóż konto na [serpapi.com](http://serpapi.com)  
2. Skopiuj API key z dashboardu  
3. Test: curl "https://serpapi.com/search.json?q=test\&api\_key=YOUR\_KEY"

---

## **🔧 Wdrożenie Krok po Kroku**

### **KROK 1: Import Workflow**

1. Otwórz n8n  
2. **"+ Add workflow"** → **"Import from JSON"**  
3. Wklej uproszczony JSON workflow (bez budżet filterów)  
4. Nazwij workflow: **"Cold Outreach Search"**

### **KROK 2: Konfiguracja Credentials**

#### **SerpAPI Credentials**

1. **Settings** → **Credentials** → **Create New**  
2. Wybierz **"Generic Credential Type"**  
3. Nazwa: **"SerpAPI Account"**

Properties:  
{  "api\_key": "your\_serpapi\_key\_here"}

#### **Google AI Studio (Gemini) Credentials**

1. **Settings** → **Credentials** → **Create New**  
2. Wybierz **"Google AI Studio API"** (lub Generic jeśli nie ma)  
3. API Key: Twój klucz z Google AI Studio  
4. Nazwa: **"Google AI Studio Account"**

#### **Mailgun API Credentials**

1. **Settings** → **Credentials** → **Create New**  
2. Wybierz **"Mailgun API"**  
3. Wprowadź API Key i Base URL  
4. Nazwa: **"Mailgun Account"**

#### **Google Sheets OAuth2**

1. **Settings** → **Credentials** → **Create New**  
2. Wybierz **"Google Sheets OAuth2 API"**  
3. Wykonaj proces OAuth  
4. Nazwa: **"Google Sheets Account"**

#### **Slack OAuth2**

1. **Settings** → **Credentials** → **Create New**  
2. Wybierz **"Slack OAuth2 API"**  
3. Wprowadź Bot Token ze Slack App  
4. Nazwa: **"Slack Account"**

---

## **⚙️ Konfiguracja Każdego Węzła**

### **1\. Schedule Trigger ⏰**

* **Mode:** Expression  
* **Cron Expression:** 0 8 \* \* 1-5 (8:00 pon-pt)  
* **Timezone:** Europe/Warsaw

### **2\. Wybór Miasta 🏙️ (Code Node)**

**JavaScript kod \- już przygotowany, tylko wklej**

### **3\. Wyszukiwanie Google 🔍 (HTTP Request)**

* **URL:** https://serpapi.com/search.json  
* **Method:** GET

**Query Parameters:**  
engine \= googleq \= {{ $json.searchQuery }}location \= Polandhl \= pl  gl \= plnum \= 20api\_key \= {{ $credentials.serpApi.api\_key }}

### **4\. Wyciągnij Wyniki 📊 (Code Node)**

**JavaScript kod \- już przygotowany, tylko wklej**

### **5\. Personalizacja AI 🤖 (Basic LLM Chain)**

* **Model:** Google Gemini Chat Model  
* **Model Name:** models/gemini-2.0-flash-001  
* **System Message:** \[Instrukcje dla AI \- już przygotowane\]  
* **User Message:** \[Prompt z danymi firmy \- już przygotowany\]  
* ✅ **Simplify Output:** Włącz  
* ✅ **JSON Output:** Włącz

### **6\. Zapis do CRM 📝 (Google Sheets)**

* **Operation:** Append Row  
* **Document ID:** Twój Google Sheets ID  
* **Sheet Name:** "Cold Outreach Leads"  
* **Kolumny:** \[Mapowanie już przygotowane\]

### **7\. Cold Email ✉️ (Mailgun)**

* **Template:** HTML już przygotowany  
* **Tracking:** ✅ Włącz wszystko  
* **Tags:** cold-outreach,ksiegowe

### **8\. Wait 3 Days ⏰ (Wait Node)**

* **Resume:** After Time Interval  
* **Amount:** 3  
* **Unit:** Days

### **9\. Follow-up Email ✉️ (Mailgun)**

* **Template:** Krótszy HTML już przygotowany  
* **Subject:** Re: Automatyzacja procesów...  
* **Tags:** followup,ksiegowe

### **10\. Slack Notification 💬 (Slack)**

* **Channel:** \#sales  
* **Message:** już przygotowane

---

## **🧪 Testowanie Workflow**

### **Test 1: Manual Execution**

1. Kliknij **"Execute workflow"**  
2. Sprawdź każdy node step by step:  
   * ⏰ Schedule → ✅  
   * 🏙️ City selected → ✅  
   * 🔍 Google results → ✅  
   * 📊 Companies extracted → ✅  
   * 🤖 AI personalized → ✅  
   * 📝 Saved to CRM → ✅  
   * ✉️ Email sent → ✅

### **Test 2: AI Personalization**

1. Sprawdź czy Gemini zwraca poprawny JSON  
2. Czy $json.personalizedOpening jest dostępne  
3. Czy $json.estimatedEmail jest logiczny

### **Test 3: Email Delivery**

1. Sprawdź Mailgun dashboard \- czy emaile wysłane  
2. Zweryfikuj tracking (opens, clicks)  
3. Test deliverability rate

### **Test 4: End-to-End**

1. Aktywuj workflow (ON)  
2. Zmień cron na testowy: \*/5 \* \* \* \* (co 5 minut)  
3. Monitoruj pełny przepływ

---

## **📊 UPROSZCZONA ARCHITEKTURA**

⏰ CRON (8:00 pon-pt)

    ↓

🏙️ CITY ROTATION (10 miast)

    ↓  

🔍 GOOGLE SEARCH (SerpAPI)

    ↓

📊 EXTRACT COMPANIES (parsing \+ filtering)

    ↓

🤖 GEMINI PERSONALIZATION (otwarcie emaila)

    ↓

📝 SAVE TO CRM (Google Sheets)

    ↓

✉️ COLD EMAIL (Mailgun \+ tracking)

    ↓

⏰ WAIT 3 DAYS

    ↓

✉️ FOLLOW-UP EMAIL (krótszy)

    ↓

💬 SLACK ALERT (team notification)

---

## **📊 Monitoring i Analytics**

### **KPI do Śledzenia:**

* **Daily Search Volume:** Ile firm dziennie  
* **Extraction Rate:** % wyciągniętych firm z wyników Google  
* **AI Success Rate:** % poprawnych personalizacji  
* **Email Delivery Rate:** % successfully delivered  
* **Open Rate:** % email opens (cel: \>20%)  
* **Click Rate:** % link clicks (cel: \>3%)  
* **Response Rate:** % replies (cel: \>1%)

### **Google Sheets Formulas:**

\=COUNTIF(Status:Status,"Lead dodany")  // Total leads

\=COUNTIFS(Data:Data,"\>="\&TODAY()-7)   // Leads last 7 days

\=AVERAGE(LEN(Personalizacja:Personalizacja))  // Avg message length

---

## **💰 Szacowane Koszty Miesięczne**

* **SerpAPI:** $50/miesiąc (1000 searches)  
* **Google AI Studio:** $10/miesiąc (Gemini API calls)  
* **Mailgun:** $35/miesiąc (5000 emails)  
* **n8n Cloud:** $20/miesiąc (jeśli nie self-hosted)

**Total: \~$115/miesiąc**

### **ROI Calculation:**

* **Input:** \~115 PLN/miesiąc na narzędzia  
* **Output:** 150+ qualified leadów miesięcznie  
* **Conversion:** 1-2% \= 2-3 nowi klienci  
* **Revenue:** 1 klient księgowy \= 5000-20000 PLN  
* **ROI:** 4000-17000% 🚀

---

## **🚨 Troubleshooting**

### **Częste Problemy:**

**Problem**

**Rozwiązanie**

SerpAPI quota exceeded

*Reduce frequency or upgrade plan*

Gemini API errors

*Check API key, billing enabled*

Mailgun bouncing

*Warm up domain, check SPF/DKIM*

Google Sheets permission

*Verify OAuth scope*

Email nie personalizowany

*Check Gemini JSON output format*

Slack not posting

*Verify bot permissions*

### **Debug Workflow:**

1. ✅ Test każdy węzeł osobno (Execute Node)  
2. ✅ Sprawdź n8n execution logs  
3. ✅ Verify API keys nie są expired  
4. ✅ Check Google Sheets ID correct  
5. ✅ Monitor Gemini response format

---

## **🎯 Następne Kroki Po Wdrożeniu**

### **Tydzień 1: Monitoring & Debug**

* Sprawdź daily execution success rate  
* Monitor email deliverability  
* Verify AI personalization quality

### **Tydzień 2: Optymalizacja**

* A/B test różne email templates  
* Tune Gemini prompts dla lepszej personalizacji  
* Adjust city rotation frequency

### **Miesiąc 2: Scaling**

* Add więcej miast (25+ zamiast 10\)  
* Rozszerz na inne branże (prawne, HR)  
* Implement response tracking via webhooks

### **Miesiąc 3: Advanced Features**

* Website content analysis  
* LinkedIn integration (w granicach TOS)  
* Automated case study generation

---

Resources  
Cold Outreach search.json

—----

🚀 Instrukcja Wdrożenia \- Smart Inbound Lead

## **✅ Przed Wdrożeniem \- Checklist**

### **1\. Konta i Dostępy**

* \[ \] Konto n8n (self-hosted lub cloud)  
* \[ \] Konto Google (dla Google Sheets)  
* \[ \] Konto OpenAI (dla AI Transform)  
* \[ \] Konto SMTP (email) lub Gmail  
* \[ \] Workspace Slack \+ token bot

### **2\. Przygotowanie Google Sheets 📊**

1. Stwórz nowy arkusz Google Sheets  
2. Nadaj mu nazwę: **"Lead Management System"**  
3. Utwórz arkusz o nazwie **"Leads"**

Dodaj nagłówki w pierwszym rzędzie:  
A1: Data | B1: Imię | C1: Email | D1: Firma | E1: Wiadomość | F1: Status | G1: Źródło

4. Skopiuj ID arkusza z URL (część między /d/ i /edit)

### **3\. Konfiguracja Slack 💬**

1. Idź do [api.slack.com](http://api.slack.com) → Your Apps → Create New App  
2. Wybierz "From scratch"  
3. Wybierz workspace  
4. Idź do **OAuth & Permissions**  
5. Dodaj Bot Scopes:  
   * chat:write  
   * channels:read  
6. Zainstaluj app w workspace  
7. Skopiuj **Bot User OAuth Token**  
8. Utwórz kanał **\#leads** (jeśli nie istnieje)

---

## **🔧 Wdrożenie Krok po Kroku**

### **KROK 1: Import Workflow do n8n**

1. Otwórz n8n  
2. Kliknij **"+ Add workflow"**  
3. W prawym górnym rogu kliknij **"..."** → **"Import from File"**  
4. Dodaj plik JSON 

### **KROK 2: Konfiguracja Credentials**

#### **Google Sheets OAuth2**

1. Idź do **Settings** → **Credentials** → **Create New**  
2. Wybierz **"Google Sheets OAuth2 API"**  
3. Postępuj zgodnie z instrukcjami OAuth  
4. Nazwij: **"Google Sheets Account"**

#### **OpenAI API**

1. **Settings** → **Credentials** → **Create New**  
2. Wybierz **"OpenAI API"**  
3. Wprowadź API Key z [platform.openai.com](http://platform.openai.com)  
4. Nazwij: **"OpenAI Account"**

#### **SMTP Email**

1. **Settings** → **Credentials** → **Create New**  
2. Wybierz **"SMTP"**

Konfiguracja dla Gmail:  
Host: smtp.gmail.comPort: 587Security: STARTTLSUsername: twoj-email@gmail.comPassword: \[App Password \- nie hasło do konta\!\]

3. Nazwij: **"SMTP Account"**

#### **Slack OAuth2**

1. **Settings** → **Credentials** → **Create New**  
2. Wybierz **"Slack OAuth2 API"**  
3. Wprowadź Bot Token ze Slack App  
4. Nazwij: **"Slack Account"**

### **KROK 3: Aktualizacja Parametrów**

#### **Node "Zapis do CRM"**

1. Kliknij na węzeł **"Zapis do CRM"**  
2. W polu **Document ID** wprowadź ID swojego Google Sheets  
3. Sprawdź czy **Sheet Name** \= "Leads"

#### **Node "Email do Klienta"**

1. Zmień **fromEmail** na swój rzeczywisty adres  
2. Zaktualizuj dane kontaktowe w HTML  
3. Sprawdź **replyTo** email

#### **Node "Personalizacja AI"**

1. Możesz dostosować instrukcje AI do swojej branży  
2. Dodaj specyficzne słowa kluczowe dla swojego biznesu

#### **Node "Powiadomienie Slack"**

1. Sprawdź czy kanał **\#leads** istnieje  
2. Dostosuj format wiadomości do preferencji zespołu

### **KROK 4: Testowanie Workflow**

#### **Test 1: Formularz**

1. Aktywuj workflow (przełącznik ON)  
2. Skopiuj URL formularza z węzła "Formularz Kontaktowy"  
3. Otwórz URL w nowej karcie  
4. Wypełnij formularz testowymi danymi  
5. Sprawdź czy:  
   * Dane pojawiły się w Google Sheets  
   * Otrzymałeś email potwierdzający  
   * Powiadomienie pojawiło się na Slack

#### **Test 2: Każdy Węzeł Osobno**

1. Użyj **"Execute node"** na każdym węźle  
2. Sprawdź **Input/Output** data  
3. Zweryfikuj expressions ({{ }})

### **KROK 5: Dostosowanie i Optymalizacja**

#### **Personalizacja Formularza**

1. Zmień tytuł i opis formularza  
2. Dodaj/usuń pola (np. numer telefonu, budżet)  
3. Dostosuj komunikat po wysłaniu

#### **Rozszerzenie AI Transform**

Przykład rozszerzonej instrukcji:

"Na podstawie danych stwórz spersonalizowany email i:

\- Jeśli firma \= 'e-commerce' → zaproponuj automatyzację sprzedaży

\- Jeśli wiadomość zawiera 'marketing' → wspomniej o narzędziach marketingowych  

\- Jeśli budżet \> 10k → oznacz jako VIP lead

\- Zawsze dodaj call-to-action z linkiem do kalendarza

#### **Monitoring i Alerty**

1. Dodaj Error Trigger node dla obsługi błędów  
2. Ustaw powiadomienia o błędach na Slack  
3. Stwórz dashboard Google Sheets z statystykami

---

## **⚠️ Ważne Uwagi**

### **Bezpieczeństwo**

* Nigdy nie udostępniaj credentials publicznie  
* Regularnie rotuj API keys  
* Monitoruj koszty OpenAI API

### **RODO/Prywatność**

* Dodaj informację o przetwarzaniu danych w formularzu  
* Zapewnij możliwość wycofania zgody  
* Szyfruj wrażliwe dane w Google Sheets

### **Wydajność**

* Monitor usage OpenAI API (koszt \~$0.01-0.03 na lead)  
* Sprawdzaj limity Slack API (120 req/min)  
* Google Sheets: max 100 req/100sec per user

---

## **🆘 Troubleshooting**

### **Częste Problemy**

**Problem**

**Rozwiązanie**

Formularz nie działa

*Sprawdź czy workflow jest aktywny*

Email nie wysyła

*Zweryfikuj SMTP credentials*

Slack nie dostaje powiadomień

*Sprawdź czy bot ma uprawnienia do kanału*

Google Sheets błąd

*Sprawdź ID arkusza i uprawnienia*

AI nie personalizuje

*Sprawdź OpenAI API key i limit*

Resources  
Smart Inbound Lead.json

—-------

Mój Proces Konsultingowy \+ Flowchart \+ Checklista

**Instrukcja dla Flowchart:**

1\. Skopiuj kod z pliku: "**flowchart\_mermaid.md**"

2\. Wklej do [https://mermaid.live](https://mermaid.live)

3\. Edytuj według potrzeb

Resources  
Lista Kontrolna Możliwości AI  
flowchart\_mermaid.md

—--------------

**NOWOCZESNE NARZĘDZIA NO-CODE**

Gotowa automatyzacja z 1 Prompta

🔗 WAŻNE LINKI:

Repozytoria GitHub: n8n MCP Server: [https://github.com/czlonkowski/n8n-mcp](https://github.com/czlonkowski/n8n-mcp)

Node.js: [https://nodejs.org/](https://nodejs.org/)

Claude Desktop: [https://claude.ai/download](https://claude.ai/download)

—------

Jak Zbudować Kompletny System Automatyzacji

Użyty prompt do Claude:

jesteś: senior software architect with 15+ years experience building enterprise dashboards, automation systems, and SaaS applications. You specialize in document processing automation, data visualization, and multi-tenant business applications. 

zadanie:

korzystajac z n8n-mcp, sequential thinking oraz context7 przygotuj dla mnie odnosnie projektu usług ksiegowych:

dla automatyzacji n8n backend:

\-user prompt \-system prompt

dla budowy frontend: \-najlepsze narzedzie do budowy frontend \- profesjonalnego formularza na strone lub mini panelu klienta na stronie aby polaczyc przez webhook z backendem automatyzacji w n8n

dane: zalacznik: uslugi-ksiegowe.json \- backend n8n zmapowany w figma proces działania usług księgowych wykorzystaj popularnych kategorii usług księgowych wymienione wyżej

Resources  
CLAUDE.md  
instalacja\_code.md  
Usługi księgowe-aih.json

—---  
Automatyzacja Back-office

Resources  
Backoffice-3-Template.json  
CLAUDE.md

—---

Jak sklonować każdy workflow n8n krok po kroku

## **Krok 1: Analiza wideo i wygenerowanie opisu workflow w Google AI Studio**

1. **Otwórz [Google AI Studio](https://aistudio.google.com/prompts/new_chat):** Zaloguj się na swoje konto. Upewnij się, że używasz modelu co najmniej **Gemini 2.5 Pro**, aby mieć możliwość analizy wideo.  
2. **Przygotuj Prompt:** W głównym oknie chatu wklej specjalny prompt (dostępny poniżej "**prompt\_analiza\_n8n\_workflows.md**"), który instruuje AI, aby działało jako ekspert od analizy workflow n8n. Prompt zawiera polecenie analizy wideo, zrozumienia kroków, zidentyfikowania węzłów, ich konfiguracji i połączeń.  
3. **Wklej link do wideo:** Bezpośrednio w prompcie dodaj link URL do filmu na YouTube, który prezentuje workflow n8n, który chcesz sklonować.  
4. **Uruchom analizę:** Google AI Studio przetworzy wideo i wygeneruje szczegółowe, tekstowe podsumowanie workflow, opisując każdy węzeł (node) i jego konfigurację.  
5. **Skopiuj podsumowanie:** Zaznacz i skopiuj całe wygenerowane podsumowanie workflow.

## **Krok 2: Konwersja opisu na kod JSON za pomocą Claude AI**

1. **Otwórz Claude AI**  
2. **Załącz pliki kontekstowe:**  
   * Kliknij ikonę spinacza, aby dodać załączniki. Upewnij się, że masz włączone n8n-mcp (tutaj pokazane krok po kroku jak to zrobić: [https://www.skool.com/autoai-hub-5428/classroom/9626a36f?md=9105036e5db149349d4205d097973e67](https://www.skool.com/autoai-hub-5428/classroom/9626a36f?md=9105036e5db149349d4205d097973e67) )  
   * Prześlij **przykładowy plik JSON** z jakimkolwiek workflow n8n, aby Claude AI miało wzór poprawnego formatowania.  
3. **Wklej Prompt i podsumowanie:**  
   * Wpisz prompt instruujący Claude AI, aby działał jako "**workflow builder**". Poproś o stworzenie kompletnego, działającego workflow na podstawie dostarczonych specyfikacji, który będzie pasował do demonstracji wideo i sformatowany jako importowalny JSON.  
   * Poniżej promptu wklej **podsumowanie workflow**, które skopiowałeś wcześniej z Google AI Studio.  
4. **Wygeneruj i pobierz plik JSON:** Claude AI, bazując na wszystkich dostarczonych danych (prompcie, podsumowaniu, n8n-mcp i przykładzie), napisze kompletny kod JSON dla Twojego workflow. Po zakończeniu generowania, pobierz wynik jako plik .json.

## **Krok 3: Import workflow do n8n**

1. **Zaloguj się do n8n:** Otwórz swoją instancję n8n.  
2. **Utwórz nowy workflow:** Kliknij przycisk "Create Workflow".  
3. **Importuj plik:** W prawym górnym rogu edytora kliknij ikonę trzech kropek, a następnie wybierz opcję **"Import from File..."**.  
4. **Wybierz plik JSON:** Wybierz plik .json, który właśnie pobrałeś z Claude AI.

Resources  
prompt\_analiza\_n8n\_workflows.md  
workflow\_builder.md

—--------

