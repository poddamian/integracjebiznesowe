import { useState } from "react";

// ─── WORKFLOW DATA ───────────────────────────────────────────────────────────

const WORKFLOWS = [
  {
    id: "abandoned-cart",
    num: "01",
    title: "Porzucony koszyk + AI email",
    platform: ["Shopify", "WooCommerce"],
    color: "#f43f5e",
    icon: "🛒",
    problem: "Średnio 70% koszyków jest porzucanych. Właściciel traci pieniądze bo nie ma czasu wysyłać przypomnień ręcznie.",
    roi: "Odzysk 5–15% porzuconych koszyków = realna dodatkowa sprzedaż",
    time: "Wdrożenie: 3–4h",
    price: "1 500–2 500 zł",
    steps: [
      { icon: "🛍️", node: "Shopify Trigger", desc: "Webhook uruchamia się gdy klient porzuca koszyk (checkout abandoned)" },
      { icon: "⏳", node: "Wait 1h", desc: "Czekamy godzinę — może klient sam wróci i dokończy zakup" },
      { icon: "🔍", node: "IF: nadal porzucony?", desc: "Sprawdzamy przez API Shopify czy koszyk nadal nie jest opłacony" },
      { icon: "🤖", node: "HTTP → Claude API", desc: "AI generuje spersonalizowany email z imieniem klienta i nazwą produktów" },
      { icon: "✂️", node: "Set: wyciągnij temat+treść", desc: "Parsujemy odpowiedź AI — oddzielamy temat od treści emaila" },
      { icon: "📧", node: "Gmail: wyślij email", desc: "Email leci do klienta z jego imieniem, produktami i kodem 10% zniżki" },
      { icon: "📊", node: "Google Sheets: zapisz log", desc: "Logujemy: klient, email, produkty, wartość, data wysyłki" },
    ],
    keywords: [
      "automatyzacja porzuconego koszyka shopify n8n",
      "jak odzyskać porzucony koszyk shopify automatycznie",
      "n8n shopify abandoned cart email po polsku",
      "automatyczny email po porzuceniu koszyka sklep internetowy",
      "integracja shopify n8n odzyskiwanie klientów",
      "workflow n8n porzucony koszyk claude ai",
      "automatyzacja e-commerce odzyskiwanie sprzedaży n8n",
      "shopify webhook n8n porzucony koszyk wdrożenie",
    ],
    json: `{
  "name": "Shopify – Porzucony Koszyk AI Email",
  "nodes": [
    {
      "id": "node-1",
      "name": "Shopify: Porzucony koszyk",
      "type": "n8n-nodes-base.shopifyTrigger",
      "position": [240, 300],
      "typeVersion": 1,
      "parameters": {
        "topic": "checkouts/create",
        "options": {}
      },
      "webhookId": "ZMIEN_NA_WLASNY_UUID"
    },
    {
      "id": "node-2",
      "name": "Czekaj 1 godzinę",
      "type": "n8n-nodes-base.wait",
      "position": [460, 300],
      "typeVersion": 1,
      "parameters": {
        "resume": "timeInterval",
        "amount": 1,
        "unit": "hours"
      }
    },
    {
      "id": "node-3",
      "name": "Sprawdź: nadal porzucony?",
      "type": "n8n-nodes-base.if",
      "position": [680, 300],
      "typeVersion": 2,
      "parameters": {
        "conditions": {
          "options": { "caseSensitive": true, "leftValue": "", "typeValidation": "strict" },
          "conditions": [
            {
              "id": "cond-1",
              "leftValue": "={{ $json.completed_at }}",
              "rightValue": "",
              "operator": { "type": "string", "operation": "empty" }
            }
          ],
          "combinator": "and"
        }
      }
    },
    {
      "id": "node-4",
      "name": "Claude AI: Generuj email",
      "type": "n8n-nodes-base.httpRequest",
      "position": [900, 220],
      "typeVersion": 4,
      "parameters": {
        "method": "POST",
        "url": "https://api.anthropic.com/v1/messages",
        "sendHeaders": true,
        "headerParameters": {
          "parameters": [
            { "name": "x-api-key", "value": "TWOJ_KLUCZ_ANTHROPIC" },
            { "name": "anthropic-version", "value": "2023-06-01" },
            { "name": "content-type", "value": "application/json" }
          ]
        },
        "sendBody": true,
        "contentType": "raw",
        "body": "={{ JSON.stringify({ model: 'claude-sonnet-4-20250514', max_tokens: 400, messages: [{ role: 'user', content: 'Napisz krótki email po polsku do ' + $('Shopify: Porzucony koszyk').item.json.customer?.first_name + ', który zostawił w koszyku: ' + $('Shopify: Porzucony koszyk').item.json.line_items?.map(i => i.title).join(', ') + '. Wartość koszyka: ' + $('Shopify: Porzucony koszyk').item.json.total_price + ' zł. Zaproponuj 10% zniżkę z kodem WRÓĆ10. Napisz Subject: na początku, potem treść. Max 100 słów, ciepły ton.' }] }) }}"
      }
    },
    {
      "id": "node-5",
      "name": "Wyciągnij temat i treść",
      "type": "n8n-nodes-base.set",
      "position": [1120, 220],
      "typeVersion": 3,
      "parameters": {
        "assignments": {
          "assignments": [
            {
              "id": "assign-1",
              "name": "emailSubject",
              "value": "={{ $json.content[0].text.match(/Subject:\\s*(.+)/)?.[1]?.trim() ?? 'Twój koszyk czeka! 🛒' }}",
              "type": "string"
            },
            {
              "id": "assign-2",
              "name": "emailBody",
              "value": "={{ $json.content[0].text.replace(/Subject:\\s*.+\\n?/, '').trim() }}",
              "type": "string"
            },
            {
              "id": "assign-3",
              "name": "customerEmail",
              "value": "={{ $('Shopify: Porzucony koszyk').item.json.email }}",
              "type": "string"
            }
          ]
        }
      }
    },
    {
      "id": "node-6",
      "name": "Gmail: wyślij email",
      "type": "n8n-nodes-base.gmail",
      "position": [1340, 220],
      "typeVersion": 2,
      "parameters": {
        "operation": "send",
        "sendTo": "={{ $json.customerEmail }}",
        "subject": "={{ $json.emailSubject }}",
        "emailType": "text",
        "message": "={{ $json.emailBody }}",
        "options": {}
      }
    },
    {
      "id": "node-7",
      "name": "Google Sheets: log",
      "type": "n8n-nodes-base.googleSheets",
      "position": [1560, 220],
      "typeVersion": 4,
      "parameters": {
        "operation": "append",
        "documentId": { "mode": "id", "value": "TWOJ_SPREADSHEET_ID" },
        "sheetName": { "mode": "name", "value": "Porzucone koszyki" },
        "columns": {
          "mappingMode": "defineBelow",
          "value": {
            "email": "={{ $('Wyciągnij temat i treść').item.json.customerEmail }}",
            "wartosc_koszyka": "={{ $('Shopify: Porzucony koszyk').item.json.total_price }}",
            "produkty": "={{ $('Shopify: Porzucony koszyk').item.json.line_items?.map(i => i.title).join(', ') }}",
            "data_wysylki": "={{ new Date().toISOString() }}",
            "status": "email wysłany"
          }
        }
      }
    }
  ],
  "connections": {
    "Shopify: Porzucony koszyk": { "main": [[{ "node": "Czekaj 1 godzinę", "type": "main", "index": 0 }]] },
    "Czekaj 1 godzinę": { "main": [[{ "node": "Sprawdź: nadal porzucony?", "type": "main", "index": 0 }]] },
    "Sprawdź: nadal porzucony?": {
      "main": [
        [{ "node": "Claude AI: Generuj email", "type": "main", "index": 0 }],
        []
      ]
    },
    "Claude AI: Generuj email": { "main": [[{ "node": "Wyciągnij temat i treść", "type": "main", "index": 0 }]] },
    "Wyciągnij temat i treść": { "main": [[{ "node": "Gmail: wyślij email", "type": "main", "index": 0 }]] },
    "Gmail: wyślij email": { "main": [[{ "node": "Google Sheets: log", "type": "main", "index": 0 }]] }
  },
  "settings": { "executionOrder": "v1" }
}`,
  },

  {
    id: "review-request",
    num: "02",
    title: "Prośba o recenzję po dostawie",
    platform: ["Shopify", "WooCommerce"],
    color: "#f59e0b",
    icon: "⭐",
    problem: "Właściciele sklepów mają mało recenzji, bo zapominają prosić o nie. Recenzje to kluczowy czynnik zakupowy dla 93% klientów.",
    roi: "+20–40% więcej recenzji = lepsza konwersja i pozycja w Google",
    time: "Wdrożenie: 2–3h",
    price: "1 000–1 800 zł",
    steps: [
      { icon: "📦", node: "Shopify Trigger: order fulfilled", desc: "Webhook uruchamia się gdy zamówienie jest oznaczone jako wysłane/dostarczone" },
      { icon: "⏳", node: "Wait 7 dni", desc: "Czekamy 7 dni — klient zdążył otrzymać paczką i używać produktu" },
      { icon: "🤖", node: "Claude AI: generuj prośbę", desc: "AI pisze personalną prośbę o recenzję z nazwą produktu i imieniem klienta" },
      { icon: "✂️", node: "Set: parsuj email", desc: "Wyciągamy temat i treść z odpowiedzi AI" },
      { icon: "📧", node: "Gmail: wyślij prośbę", desc: "Email leci do klienta z linkiem do recenzji w Shopify/Google" },
      { icon: "📊", node: "Google Sheets: log", desc: "Zapisujemy: klient, produkt, data wysyłki prośby" },
    ],
    keywords: [
      "automatyczna prośba o recenzję shopify n8n",
      "jak zbierać recenzje w sklepie shopify automatycznie",
      "automatyzacja review request woocommerce n8n",
      "email po zakupie prośba o opinię automation",
      "n8n workflow recenzja klient po dostawie",
      "shopify zbieranie opinii klientów automatycznie",
      "automatyczne emaile po zamówieniu woocommerce",
      "jak zwiększyć liczbę recenzji w sklepie online",
    ],
    json: `{
  "name": "Shopify – Prośba o recenzję 7 dni po dostawie",
  "nodes": [
    {
      "id": "node-1",
      "name": "Shopify: Zamówienie wysłane",
      "type": "n8n-nodes-base.shopifyTrigger",
      "position": [240, 300],
      "typeVersion": 1,
      "parameters": {
        "topic": "orders/fulfilled",
        "options": {}
      },
      "webhookId": "ZMIEN_NA_WLASNY_UUID"
    },
    {
      "id": "node-2",
      "name": "Czekaj 7 dni",
      "type": "n8n-nodes-base.wait",
      "position": [460, 300],
      "typeVersion": 1,
      "parameters": {
        "resume": "timeInterval",
        "amount": 7,
        "unit": "days"
      }
    },
    {
      "id": "node-3",
      "name": "Claude AI: Generuj prośbę o recenzję",
      "type": "n8n-nodes-base.httpRequest",
      "position": [680, 300],
      "typeVersion": 4,
      "parameters": {
        "method": "POST",
        "url": "https://api.anthropic.com/v1/messages",
        "sendHeaders": true,
        "headerParameters": {
          "parameters": [
            { "name": "x-api-key", "value": "TWOJ_KLUCZ_ANTHROPIC" },
            { "name": "anthropic-version", "value": "2023-06-01" },
            { "name": "content-type", "value": "application/json" }
          ]
        },
        "sendBody": true,
        "contentType": "raw",
        "body": "={{ JSON.stringify({ model: 'claude-sonnet-4-20250514', max_tokens: 350, messages: [{ role: 'user', content: 'Napisz po polsku krótką, ciepłą prośbę o recenzję do ' + $json.customer?.first_name + ', który kupił: ' + $json.line_items?.map(i => i.title).join(', ') + '. Link do recenzji: https://TWOJ_SKLEP.pl/recenzja. Zacznij od Subject:. Max 80 słów. Nie bądź natarczywy.' }] }) }}"
      }
    },
    {
      "id": "node-4",
      "name": "Parsuj odpowiedź AI",
      "type": "n8n-nodes-base.set",
      "position": [900, 300],
      "typeVersion": 3,
      "parameters": {
        "assignments": {
          "assignments": [
            {
              "id": "a1",
              "name": "emailSubject",
              "value": "={{ $json.content[0].text.match(/Subject:\\s*(.+)/)?.[1]?.trim() ?? 'Jak podoba Ci się zakup? ⭐' }}",
              "type": "string"
            },
            {
              "id": "a2",
              "name": "emailBody",
              "value": "={{ $json.content[0].text.replace(/Subject:\\s*.+\\n?/, '').trim() }}",
              "type": "string"
            }
          ]
        }
      }
    },
    {
      "id": "node-5",
      "name": "Gmail: wyślij prośbę",
      "type": "n8n-nodes-base.gmail",
      "position": [1120, 300],
      "typeVersion": 2,
      "parameters": {
        "operation": "send",
        "sendTo": "={{ $('Shopify: Zamówienie wysłane').item.json.email }}",
        "subject": "={{ $json.emailSubject }}",
        "emailType": "text",
        "message": "={{ $json.emailBody }}",
        "options": {}
      }
    },
    {
      "id": "node-6",
      "name": "Google Sheets: log recenzji",
      "type": "n8n-nodes-base.googleSheets",
      "position": [1340, 300],
      "typeVersion": 4,
      "parameters": {
        "operation": "append",
        "documentId": { "mode": "id", "value": "TWOJ_SPREADSHEET_ID" },
        "sheetName": { "mode": "name", "value": "Prośby o recenzje" },
        "columns": {
          "mappingMode": "defineBelow",
          "value": {
            "email": "={{ $('Shopify: Zamówienie wysłane').item.json.email }}",
            "imie": "={{ $('Shopify: Zamówienie wysłane').item.json.customer?.first_name }}",
            "produkt": "={{ $('Shopify: Zamówienie wysłane').item.json.line_items?.map(i => i.title).join(', ') }}",
            "data_prosby": "={{ new Date().toISOString() }}"
          }
        }
      }
    }
  ],
  "connections": {
    "Shopify: Zamówienie wysłane": { "main": [[{ "node": "Czekaj 7 dni", "type": "main", "index": 0 }]] },
    "Czekaj 7 dni": { "main": [[{ "node": "Claude AI: Generuj prośbę o recenzję", "type": "main", "index": 0 }]] },
    "Claude AI: Generuj prośbę o recenzję": { "main": [[{ "node": "Parsuj odpowiedź AI", "type": "main", "index": 0 }]] },
    "Parsuj odpowiedź AI": { "main": [[{ "node": "Gmail: wyślij prośbę", "type": "main", "index": 0 }]] },
    "Gmail: wyślij prośbę": { "main": [[{ "node": "Google Sheets: log recenzji", "type": "main", "index": 0 }]] }
  },
  "settings": { "executionOrder": "v1" }
}`,
  },

  {
    id: "low-stock",
    num: "03",
    title: "Alert niski stan magazynu",
    platform: ["Shopify", "WooCommerce"],
    color: "#f97316",
    icon: "📦",
    problem: "Właściciele dowiadują się że produkt się skończył... gdy klient już złożył zamówienie. Zwroty, niezadowolenie, utrata zaufania.",
    roi: "Eliminacja braków magazynowych = brak zwrotów + ciągłość sprzedaży",
    time: "Wdrożenie: 2h",
    price: "800–1 500 zł",
    steps: [
      { icon: "⏰", node: "Schedule Trigger: co 6h", desc: "Workflow uruchamia się automatycznie co 6 godzin przez całą dobę" },
      { icon: "🌐", node: "HTTP: pobierz inventory Shopify", desc: "Przez Shopify Admin API pobieramy stan wszystkich produktów i wariantów" },
      { icon: "💻", node: "Code: filtruj niskie stany", desc: "JavaScript filtruje produkty poniżej progu (np. < 5 sztuk)" },
      { icon: "🔍", node: "IF: czy są braki?", desc: "Sprawdzamy czy lista produktów z niskim stanem jest niepusta" },
      { icon: "🤖", node: "Claude AI: generuj raport", desc: "AI tworzy czytelny raport z listą produktów do zamówienia i sugestią ilości" },
      { icon: "📱", node: "Telegram: wyślij alert", desc: "Wiadomość na Telegram (telefon właściciela) z listą produktów do uzupełnienia" },
      { icon: "📊", node: "Google Sheets: log stanów", desc: "Zapisujemy historię stanów magazynowych dla każdego produktu" },
    ],
    keywords: [
      "automatyczny alert niski stan magazynu shopify n8n",
      "powiadomienie telegram brak produktu shopify",
      "automatyzacja zarządzania magazynem shopify woocommerce",
      "n8n workflow inventory alert sklep internetowy",
      "jak monitorować stany magazynowe shopify automatycznie",
      "woocommerce alert niski stan produktu n8n telegram",
      "automatyczne uzupełnianie magazynu e-commerce workflow",
      "shopify inventory management automatyzacja n8n",
    ],
    json: `{
  "name": "Shopify – Alert Niski Stan Magazynu",
  "nodes": [
    {
      "id": "node-1",
      "name": "Co 6 godzin",
      "type": "n8n-nodes-base.scheduleTrigger",
      "position": [240, 300],
      "typeVersion": 1,
      "parameters": {
        "rule": {
          "interval": [{ "field": "hours", "hoursInterval": 6 }]
        }
      }
    },
    {
      "id": "node-2",
      "name": "Shopify API: pobierz produkty",
      "type": "n8n-nodes-base.httpRequest",
      "position": [460, 300],
      "typeVersion": 4,
      "parameters": {
        "method": "GET",
        "url": "https://TWOJ_SKLEP.myshopify.com/admin/api/2024-01/products.json?limit=250&fields=id,title,variants",
        "sendHeaders": true,
        "headerParameters": {
          "parameters": [
            { "name": "X-Shopify-Access-Token", "value": "TWOJ_SHOPIFY_TOKEN" }
          ]
        }
      }
    },
    {
      "id": "node-3",
      "name": "Filtruj niskie stany (< 5 szt)",
      "type": "n8n-nodes-base.code",
      "position": [680, 300],
      "typeVersion": 2,
      "parameters": {
        "jsCode": "const products = $input.first().json.products || [];\\nconst LOW_STOCK_THRESHOLD = 5;\\n\\nconst lowStock = [];\\nfor (const product of products) {\\n  for (const variant of product.variants || []) {\\n    if (variant.inventory_quantity !== null && variant.inventory_quantity < LOW_STOCK_THRESHOLD) {\\n      lowStock.push({\\n        product_title: product.title,\\n        variant_title: variant.title,\\n        inventory: variant.inventory_quantity,\\n        sku: variant.sku\\n      });\\n    }\\n  }\\n}\\n\\nreturn [{ json: { lowStockItems: lowStock, count: lowStock.length } }];"
      }
    },
    {
      "id": "node-4",
      "name": "Czy są braki?",
      "type": "n8n-nodes-base.if",
      "position": [900, 300],
      "typeVersion": 2,
      "parameters": {
        "conditions": {
          "conditions": [
            {
              "id": "c1",
              "leftValue": "={{ $json.count }}",
              "rightValue": 0,
              "operator": { "type": "number", "operation": "gt" }
            }
          ],
          "combinator": "and"
        }
      }
    },
    {
      "id": "node-5",
      "name": "Claude AI: generuj raport",
      "type": "n8n-nodes-base.httpRequest",
      "position": [1120, 220],
      "typeVersion": 4,
      "parameters": {
        "method": "POST",
        "url": "https://api.anthropic.com/v1/messages",
        "sendHeaders": true,
        "headerParameters": {
          "parameters": [
            { "name": "x-api-key", "value": "TWOJ_KLUCZ_ANTHROPIC" },
            { "name": "anthropic-version", "value": "2023-06-01" },
            { "name": "content-type", "value": "application/json" }
          ]
        },
        "sendBody": true,
        "contentType": "raw",
        "body": "={{ JSON.stringify({ model: 'claude-sonnet-4-20250514', max_tokens: 300, messages: [{ role: 'user', content: 'Napisz krótki alert po polsku dla właściciela sklepu. Produkty z niskim stanem: ' + JSON.stringify($json.lowStockItems) + '. Wymień je czytelnie z emoji ⚠️, podaj co zamówić. Max 150 słów.' }] }) }}"
      }
    },
    {
      "id": "node-6",
      "name": "Telegram: wyślij alert",
      "type": "n8n-nodes-base.telegram",
      "position": [1340, 220],
      "typeVersion": 1,
      "parameters": {
        "chatId": "TWOJ_TELEGRAM_CHAT_ID",
        "text": "={{ '🚨 ALERT MAGAZYN\\n\\n' + $json.content[0].text }}",
        "additionalFields": {}
      }
    },
    {
      "id": "node-7",
      "name": "Google Sheets: log stanów",
      "type": "n8n-nodes-base.googleSheets",
      "position": [1560, 220],
      "typeVersion": 4,
      "parameters": {
        "operation": "append",
        "documentId": { "mode": "id", "value": "TWOJ_SPREADSHEET_ID" },
        "sheetName": { "mode": "name", "value": "Stany magazynowe" },
        "columns": {
          "mappingMode": "defineBelow",
          "value": {
            "data": "={{ new Date().toISOString() }}",
            "produkty_braki": "={{ $('Filtruj niskie stany (< 5 szt)').item.json.lowStockItems.map(i => i.product_title + ' (' + i.inventory + ' szt)').join('; ') }}",
            "liczba_brakow": "={{ $('Filtruj niskie stany (< 5 szt)').item.json.count }}"
          }
        }
      }
    }
  ],
  "connections": {
    "Co 6 godzin": { "main": [[{ "node": "Shopify API: pobierz produkty", "type": "main", "index": 0 }]] },
    "Shopify API: pobierz produkty": { "main": [[{ "node": "Filtruj niskie stany (< 5 szt)", "type": "main", "index": 0 }]] },
    "Filtruj niskie stany (< 5 szt)": { "main": [[{ "node": "Czy są braki?", "type": "main", "index": 0 }]] },
    "Czy są braki?": {
      "main": [
        [{ "node": "Claude AI: generuj raport", "type": "main", "index": 0 }],
        []
      ]
    },
    "Claude AI: generuj raport": { "main": [[{ "node": "Telegram: wyślij alert", "type": "main", "index": 0 }]] },
    "Telegram: wyślij alert": { "main": [[{ "node": "Google Sheets: log stanów", "type": "main", "index": 0 }]] }
  },
  "settings": { "executionOrder": "v1" }
}`,
  },

  {
    id: "weekly-report",
    num: "04",
    title: "Tygodniowy raport AI",
    platform: ["Shopify", "WooCommerce"],
    color: "#8b5cf6",
    icon: "📊",
    problem: "Właściciele sklepów nie mają czasu analizować danych. Nie wiedzą co działa, co nie i co zrobić w następnym tygodniu.",
    roi: "Decyzje oparte na danych = 10–30% lepsza efektywność sprzedaży",
    time: "Wdrożenie: 3h",
    price: "1 200–2 000 zł",
    steps: [
      { icon: "⏰", node: "Schedule: poniedziałek 8:00", desc: "Workflow uruchamia się każdy poniedziałek o 8 rano" },
      { icon: "🌐", node: "HTTP: pobierz zamówienia 7 dni", desc: "Shopify API zwraca wszystkie zamówienia z ostatnich 7 dni" },
      { icon: "💻", node: "Code: oblicz statystyki", desc: "JS liczy: przychód, liczbę zamówień, średnią wartość, top produkty" },
      { icon: "🌐", node: "HTTP: pobierz dane poprzedniego tygodnia", desc: "Porównujemy z poprzednim tygodniem dla % zmiany" },
      { icon: "🤖", node: "Claude AI: napisz raport", desc: "AI tworzy raport z analizą trendów i 3 konkretnymi rekomendacjami" },
      { icon: "📧", node: "Gmail: wyślij raport", desc: "Właściciel dostaje raport na email o 8 rano w poniedziałek" },
      { icon: "📱", node: "Telegram: wyślij skrót", desc: "Krótkie podsumowanie (3 zdania) na Telegram dla szybkiego przeglądu" },
    ],
    keywords: [
      "automatyczny raport sprzedaży shopify n8n tygodniowy",
      "raport e-commerce ai każdy poniedziałek automatycznie",
      "n8n workflow raport sprzedaży woocommerce email",
      "jak zautomatyzować raporty w sklepie shopify",
      "automatyczna analiza sprzedaży ai shopify n8n",
      "tygodniowy raport sklepu internetowego automatyzacja",
      "shopify analytics raport automatyczny claude ai",
      "n8n raport sprzedaży telegram email właściciel sklepu",
    ],
    json: `{
  "name": "Shopify – Tygodniowy Raport Sprzedaży AI",
  "nodes": [
    {
      "id": "node-1",
      "name": "Poniedziałek 8:00",
      "type": "n8n-nodes-base.scheduleTrigger",
      "position": [240, 300],
      "typeVersion": 1,
      "parameters": {
        "rule": {
          "interval": [{
            "field": "cronExpression",
            "expression": "0 8 * * 1"
          }]
        }
      }
    },
    {
      "id": "node-2",
      "name": "Shopify: zamówienia ostatnie 7 dni",
      "type": "n8n-nodes-base.httpRequest",
      "position": [460, 300],
      "typeVersion": 4,
      "parameters": {
        "method": "GET",
        "url": "={{ 'https://TWOJ_SKLEP.myshopify.com/admin/api/2024-01/orders.json?status=any&created_at_min=' + new Date(Date.now() - 7*24*60*60*1000).toISOString() + '&limit=250&fields=id,total_price,line_items,created_at,financial_status' }}",
        "sendHeaders": true,
        "headerParameters": {
          "parameters": [
            { "name": "X-Shopify-Access-Token", "value": "TWOJ_SHOPIFY_TOKEN" }
          ]
        }
      }
    },
    {
      "id": "node-3",
      "name": "Oblicz statystyki tygodnia",
      "type": "n8n-nodes-base.code",
      "position": [680, 300],
      "typeVersion": 2,
      "parameters": {
        "jsCode": "const orders = $input.first().json.orders || [];\\nconst paid = orders.filter(o => o.financial_status === 'paid');\\nconst totalRevenue = paid.reduce((s, o) => s + parseFloat(o.total_price || 0), 0);\\nconst avgOrder = paid.length > 0 ? totalRevenue / paid.length : 0;\\n\\nconst productCount = {};\\nfor (const order of paid) {\\n  for (const item of order.line_items || []) {\\n    productCount[item.title] = (productCount[item.title] || 0) + item.quantity;\\n  }\\n}\\nconst topProducts = Object.entries(productCount)\\n  .sort((a, b) => b[1] - a[1])\\n  .slice(0, 5)\\n  .map(([title, qty]) => ({ title, qty }));\\n\\nreturn [{\\n  json: {\\n    totalRevenue: totalRevenue.toFixed(2),\\n    orderCount: paid.length,\\n    avgOrderValue: avgOrder.toFixed(2),\\n    topProducts,\\n    allOrders: orders.length\\n  }\\n}];"
      }
    },
    {
      "id": "node-4",
      "name": "Claude AI: napisz raport",
      "type": "n8n-nodes-base.httpRequest",
      "position": [900, 300],
      "typeVersion": 4,
      "parameters": {
        "method": "POST",
        "url": "https://api.anthropic.com/v1/messages",
        "sendHeaders": true,
        "headerParameters": {
          "parameters": [
            { "name": "x-api-key", "value": "TWOJ_KLUCZ_ANTHROPIC" },
            { "name": "anthropic-version", "value": "2023-06-01" },
            { "name": "content-type", "value": "application/json" }
          ]
        },
        "sendBody": true,
        "contentType": "raw",
        "body": "={{ JSON.stringify({ model: 'claude-sonnet-4-20250514', max_tokens: 600, messages: [{ role: 'user', content: 'Napisz tygodniowy raport dla właściciela sklepu po polsku. Dane: przychód ' + $json.totalRevenue + ' zł, zamówień: ' + $json.orderCount + ', średnia wartość: ' + $json.avgOrderValue + ' zł, top produkty: ' + JSON.stringify($json.topProducts) + '. Raport musi zawierać: 1) Podsumowanie wyników 2) Co szło dobrze 3) Trzy konkretne rekomendacje na ten tydzień. Bądź konkretny jak doradca biznesowy. Max 300 słów.' }] }) }}"
      }
    },
    {
      "id": "node-5",
      "name": "Gmail: wyślij raport",
      "type": "n8n-nodes-base.gmail",
      "position": [1120, 260],
      "typeVersion": 2,
      "parameters": {
        "operation": "send",
        "sendTo": "TWOJ_EMAIL@gmail.com",
        "subject": "={{ '📊 Raport tygodniowy sklepu — ' + new Date().toLocaleDateString('pl-PL') }}",
        "emailType": "text",
        "message": "={{ $json.content[0].text }}",
        "options": {}
      }
    },
    {
      "id": "node-6",
      "name": "Telegram: skrót raportu",
      "type": "n8n-nodes-base.telegram",
      "position": [1120, 360],
      "typeVersion": 1,
      "parameters": {
        "chatId": "TWOJ_TELEGRAM_CHAT_ID",
        "text": "={{ '📊 Raport tygodniowy\\n\\n💰 Przychód: ' + $('Oblicz statystyki tygodnia').item.json.totalRevenue + ' zł\\n📦 Zamówień: ' + $('Oblicz statystyki tygodnia').item.json.orderCount + '\\n📈 Śr. wartość: ' + $('Oblicz statystyki tygodnia').item.json.avgOrderValue + ' zł\\n\\nPełny raport na email ✉️' }}"
      }
    }
  ],
  "connections": {
    "Poniedziałek 8:00": { "main": [[{ "node": "Shopify: zamówienia ostatnie 7 dni", "type": "main", "index": 0 }]] },
    "Shopify: zamówienia ostatnie 7 dni": { "main": [[{ "node": "Oblicz statystyki tygodnia", "type": "main", "index": 0 }]] },
    "Oblicz statystyki tygodnia": { "main": [[{ "node": "Claude AI: napisz raport", "type": "main", "index": 0 }]] },
    "Claude AI: napisz raport": {
      "main": [[
        { "node": "Gmail: wyślij raport", "type": "main", "index": 0 },
        { "node": "Telegram: skrót raportu", "type": "main", "index": 0 }
      ]]
    }
  },
  "settings": { "executionOrder": "v1" }
}`,
  },

  {
    id: "reactivation",
    num: "05",
    title: "Reaktywacja śpiących klientów",
    platform: ["Shopify", "WooCommerce"],
    color: "#06b6d4",
    icon: "💤",
    problem: "Klienci którzy kupili raz — przestają wracać. Właściciel nie ma czasu ich przypominać. Retencja to najtańszy sposób na wzrost.",
    roi: "Reaktywacja 5% klientów = +25% przychodów (Bain & Company)",
    time: "Wdrożenie: 3–4h",
    price: "1 500–2 500 zł",
    steps: [
      { icon: "⏰", node: "Schedule: co niedziela 10:00", desc: "Workflow odpala się raz w tygodniu i szuka klientów bez aktywności" },
      { icon: "🌐", node: "Shopify: klienci bez zakupu 60 dni", desc: "API zwraca listę klientów którzy ostatni raz kupili 60–90 dni temu" },
      { icon: "💻", node: "Code: filtruj i segmentuj", desc: "JS filtruje klientów po wartości (VIP vs zwykły) i datach zakupu" },
      { icon: "🔁", node: "Loop: dla każdego klienta", desc: "SplitInBatches przetwarza każdego klienta osobno" },
      { icon: "🤖", node: "Claude AI: personalny email", desc: "AI generuje unikalny email dla każdego klienta z jego historią zakupów" },
      { icon: "📧", node: "Gmail: wyślij email reaktywacji", desc: "Email z kodem rabatowym i spersonalizowaną ofertą" },
      { icon: "📊", node: "Google Sheets: log kampanii", desc: "Zapisujemy kto dostał email, kiedy i z jakim kodem" },
    ],
    keywords: [
      "reaktywacja klientów shopify automatyzacja n8n",
      "win-back campaign woocommerce n8n automatyczny email",
      "jak odzyskać klientów którzy przestali kupować shopify",
      "automatyzacja retencji klientów e-commerce n8n",
      "email do śpiących klientów sklep internetowy automatycznie",
      "shopify klienci bez zakupu 60 dni automatyczny email n8n",
      "woocommerce win-back automation claude ai email",
      "jak zwiększyć retencję klientów w sklepie online automatyzacja",
    ],
    json: `{
  "name": "Shopify – Reaktywacja Śpiących Klientów",
  "nodes": [
    {
      "id": "node-1",
      "name": "Co niedziela 10:00",
      "type": "n8n-nodes-base.scheduleTrigger",
      "position": [240, 300],
      "typeVersion": 1,
      "parameters": {
        "rule": {
          "interval": [{ "field": "cronExpression", "expression": "0 10 * * 0" }]
        }
      }
    },
    {
      "id": "node-2",
      "name": "Shopify: klienci 60-90 dni bez zakupu",
      "type": "n8n-nodes-base.httpRequest",
      "position": [460, 300],
      "typeVersion": 4,
      "parameters": {
        "method": "GET",
        "url": "={{ 'https://TWOJ_SKLEP.myshopify.com/admin/api/2024-01/customers.json?updated_at_max=' + new Date(Date.now() - 60*24*60*60*1000).toISOString() + '&updated_at_min=' + new Date(Date.now() - 90*24*60*60*1000).toISOString() + '&limit=50&fields=id,email,first_name,last_name,orders_count,total_spent,last_order_date' }}",
        "sendHeaders": true,
        "headerParameters": {
          "parameters": [
            { "name": "X-Shopify-Access-Token", "value": "TWOJ_SHOPIFY_TOKEN" }
          ]
        }
      }
    },
    {
      "id": "node-3",
      "name": "Filtruj: min 1 zakup",
      "type": "n8n-nodes-base.code",
      "position": [680, 300],
      "typeVersion": 2,
      "parameters": {
        "jsCode": "const customers = $input.first().json.customers || [];\\nconst eligible = customers.filter(c => c.orders_count >= 1 && c.email);\\nreturn eligible.map(c => ({ json: c }));"
      }
    },
    {
      "id": "node-4",
      "name": "Przetwarzaj po jednym",
      "type": "n8n-nodes-base.splitInBatches",
      "position": [900, 300],
      "typeVersion": 3,
      "parameters": {
        "batchSize": 1,
        "options": {}
      }
    },
    {
      "id": "node-5",
      "name": "Claude AI: personalny email reaktywacji",
      "type": "n8n-nodes-base.httpRequest",
      "position": [1120, 300],
      "typeVersion": 4,
      "parameters": {
        "method": "POST",
        "url": "https://api.anthropic.com/v1/messages",
        "sendHeaders": true,
        "headerParameters": {
          "parameters": [
            { "name": "x-api-key", "value": "TWOJ_KLUCZ_ANTHROPIC" },
            { "name": "anthropic-version", "value": "2023-06-01" },
            { "name": "content-type", "value": "application/json" }
          ]
        },
        "sendBody": true,
        "contentType": "raw",
        "body": "={{ JSON.stringify({ model: 'claude-sonnet-4-20250514', max_tokens: 350, messages: [{ role: 'user', content: 'Napisz ciepły email reaktywacyjny po polsku do ' + $json.first_name + ', który wydał u nas ' + $json.total_spent + ' zł w ' + $json.orders_count + ' zamówieniach, ale nie kupował od 60+ dni. Zaproponuj kod rabatowy WROC15 (15% zniżki). Zacznij od Subject:. Max 100 słów. Nie bądź nachalny, bądź szczery.' }] }) }}"
      }
    },
    {
      "id": "node-6",
      "name": "Parsuj email",
      "type": "n8n-nodes-base.set",
      "position": [1340, 300],
      "typeVersion": 3,
      "parameters": {
        "assignments": {
          "assignments": [
            {
              "id": "a1",
              "name": "subject",
              "value": "={{ $json.content[0].text.match(/Subject:\\s*(.+)/)?.[1]?.trim() ?? 'Tęsknimy za Tobą! 💙' }}",
              "type": "string"
            },
            {
              "id": "a2",
              "name": "body",
              "value": "={{ $json.content[0].text.replace(/Subject:\\s*.+\\n?/, '').trim() }}",
              "type": "string"
            },
            {
              "id": "a3",
              "name": "customerEmail",
              "value": "={{ $('Filtruj: min 1 zakup').item.json.email }}",
              "type": "string"
            }
          ]
        }
      }
    },
    {
      "id": "node-7",
      "name": "Gmail: wyślij email",
      "type": "n8n-nodes-base.gmail",
      "position": [1560, 300],
      "typeVersion": 2,
      "parameters": {
        "operation": "send",
        "sendTo": "={{ $json.customerEmail }}",
        "subject": "={{ $json.subject }}",
        "emailType": "text",
        "message": "={{ $json.body }}",
        "options": {}
      }
    }
  ],
  "connections": {
    "Co niedziela 10:00": { "main": [[{ "node": "Shopify: klienci 60-90 dni bez zakupu", "type": "main", "index": 0 }]] },
    "Shopify: klienci 60-90 dni bez zakupu": { "main": [[{ "node": "Filtruj: min 1 zakup", "type": "main", "index": 0 }]] },
    "Filtruj: min 1 zakup": { "main": [[{ "node": "Przetwarzaj po jednym", "type": "main", "index": 0 }]] },
    "Przetwarzaj po jednym": { "main": [[{ "node": "Claude AI: personalny email reaktywacji", "type": "main", "index": 0 }]] },
    "Claude AI: personalny email reaktywacji": { "main": [[{ "node": "Parsuj email", "type": "main", "index": 0 }]] },
    "Parsuj email": { "main": [[{ "node": "Gmail: wyślij email", "type": "main", "index": 0 }]] }
  },
  "settings": { "executionOrder": "v1" }
}`,
  },

  {
    id: "review-response",
    num: "06",
    title: "AI odpowiada na recenzje",
    platform: ["Shopify", "WooCommerce"],
    color: "#10b981",
    icon: "💬",
    problem: "Właściciel nie ma czasu odpowiadać na recenzje. Brak odpowiedzi = zły sygnał dla nowych klientów. Google premiuje sklepy które odpowiadają.",
    roi: "Odpowiedzi na 100% recenzji = +15% konwersja nowych klientów",
    time: "Wdrożenie: 2–3h",
    price: "1 000–1 800 zł",
    steps: [
      { icon: "⏰", node: "Schedule: co 2h", desc: "Workflow sprawdza nowe recenzje co 2 godziny przez cały dzień" },
      { icon: "🌐", node: "HTTP: pobierz nowe recenzje", desc: "Shopify API lub Judge.me API zwraca recenzje bez odpowiedzi" },
      { icon: "💻", node: "Code: filtruj bez odpowiedzi", desc: "JS filtruje tylko te recenzje które jeszcze nie mają odpowiedzi sklepu" },
      { icon: "🔁", node: "Loop: każda recenzja osobno", desc: "Przetwarzamy każdą recenzję indywidualnie dla lepszej personalizacji" },
      { icon: "🔍", node: "IF: ocena < 3 gwiazdek?", desc: "Negatywne recenzje traktujemy priorytetowo i informujemy właściciela" },
      { icon: "🤖", node: "Claude AI: generuj odpowiedź", desc: "Różne prompty dla pozytywnych i negatywnych recenzji" },
      { icon: "🌐", node: "HTTP: opublikuj odpowiedź", desc: "Przez API wstawiamy odpowiedź pod recenzją w sklepie" },
    ],
    keywords: [
      "automatyczna odpowiedź na recenzje shopify n8n ai",
      "ai odpowiada na opinie klientów sklep internetowy",
      "automatyzacja obsługi recenzji woocommerce n8n claude",
      "jak automatycznie odpowiadać na recenzje google shopify",
      "n8n workflow odpowiedź recenzja e-commerce",
      "shopify review response automation claude ai po polsku",
      "automatyczne zarządzanie recenzjami sklep online n8n",
      "ai management opinii klientów woocommerce shopify",
    ],
    json: `{
  "name": "Shopify – AI Odpowiada na Recenzje",
  "nodes": [
    {
      "id": "node-1",
      "name": "Co 2 godziny",
      "type": "n8n-nodes-base.scheduleTrigger",
      "position": [240, 300],
      "typeVersion": 1,
      "parameters": {
        "rule": {
          "interval": [{ "field": "hours", "hoursInterval": 2 }]
        }
      }
    },
    {
      "id": "node-2",
      "name": "Judge.me: pobierz nowe recenzje",
      "type": "n8n-nodes-base.httpRequest",
      "position": [460, 300],
      "typeVersion": 4,
      "parameters": {
        "method": "GET",
        "url": "https://judge.me/api/v1/reviews?api_token=TWOJ_JUDGE_ME_TOKEN&shop_domain=TWOJ_SKLEP.myshopify.com&per_page=20&page=1",
        "sendHeaders": false
      }
    },
    {
      "id": "node-3",
      "name": "Filtruj: bez odpowiedzi",
      "type": "n8n-nodes-base.code",
      "position": [680, 300],
      "typeVersion": 2,
      "parameters": {
        "jsCode": "const reviews = $input.first().json.reviews || [];\\nconst unanswered = reviews.filter(r => !r.shop_reply && r.published);\\nreturn unanswered.map(r => ({ json: r }));"
      }
    },
    {
      "id": "node-4",
      "name": "Każda recenzja osobno",
      "type": "n8n-nodes-base.splitInBatches",
      "position": [900, 300],
      "typeVersion": 3,
      "parameters": { "batchSize": 1, "options": {} }
    },
    {
      "id": "node-5",
      "name": "Negatywna recenzja?",
      "type": "n8n-nodes-base.if",
      "position": [1120, 300],
      "typeVersion": 2,
      "parameters": {
        "conditions": {
          "conditions": [
            {
              "id": "c1",
              "leftValue": "={{ $json.rating }}",
              "rightValue": 3,
              "operator": { "type": "number", "operation": "lt" }
            }
          ],
          "combinator": "and"
        }
      }
    },
    {
      "id": "node-6",
      "name": "Claude: odpowiedź negatywna",
      "type": "n8n-nodes-base.httpRequest",
      "position": [1340, 200],
      "typeVersion": 4,
      "parameters": {
        "method": "POST",
        "url": "https://api.anthropic.com/v1/messages",
        "sendHeaders": true,
        "headerParameters": {
          "parameters": [
            { "name": "x-api-key", "value": "TWOJ_KLUCZ_ANTHROPIC" },
            { "name": "anthropic-version", "value": "2023-06-01" },
            { "name": "content-type", "value": "application/json" }
          ]
        },
        "sendBody": true,
        "contentType": "raw",
        "body": "={{ JSON.stringify({ model: 'claude-sonnet-4-20250514', max_tokens: 250, messages: [{ role: 'user', content: 'Napisz profesjonalną odpowiedź po polsku na negatywną recenzję (ocena ' + $json.rating + '/5): \"' + $json.body + '\". Przeproś, zaproponuj kontakt na email, pokaż że zależy nam na kliencie. Max 80 słów.' }] }) }}"
      }
    },
    {
      "id": "node-7",
      "name": "Claude: odpowiedź pozytywna",
      "type": "n8n-nodes-base.httpRequest",
      "position": [1340, 400],
      "typeVersion": 4,
      "parameters": {
        "method": "POST",
        "url": "https://api.anthropic.com/v1/messages",
        "sendHeaders": true,
        "headerParameters": {
          "parameters": [
            { "name": "x-api-key", "value": "TWOJ_KLUCZ_ANTHROPIC" },
            { "name": "anthropic-version", "value": "2023-06-01" },
            { "name": "content-type", "value": "application/json" }
          ]
        },
        "sendBody": true,
        "contentType": "raw",
        "body": "={{ JSON.stringify({ model: 'claude-sonnet-4-20250514', max_tokens: 200, messages: [{ role: 'user', content: 'Napisz ciepłą odpowiedź po polsku na pozytywną recenzję (ocena ' + $json.rating + '/5): \"' + $json.body + '\". Dziękuj szczerze, bądź autentyczny. Max 60 słów.' }] }) }}"
      }
    },
    {
      "id": "node-8",
      "name": "Alert Telegram: negatywna!",
      "type": "n8n-nodes-base.telegram",
      "position": [1560, 200],
      "typeVersion": 1,
      "parameters": {
        "chatId": "TWOJ_TELEGRAM_CHAT_ID",
        "text": "={{ '⚠️ NEGATYWNA RECENZJA (' + $('Każda recenzja osobno').item.json.rating + '★)\\n\\n\"' + $('Każda recenzja osobno').item.json.body?.substring(0, 200) + '\"\\n\\nAI już odpowiedziało — sprawdź w sklepie.' }}"
      }
    }
  ],
  "connections": {
    "Co 2 godziny": { "main": [[{ "node": "Judge.me: pobierz nowe recenzje", "type": "main", "index": 0 }]] },
    "Judge.me: pobierz nowe recenzje": { "main": [[{ "node": "Filtruj: bez odpowiedzi", "type": "main", "index": 0 }]] },
    "Filtruj: bez odpowiedzi": { "main": [[{ "node": "Każda recenzja osobno", "type": "main", "index": 0 }]] },
    "Każda recenzja osobno": { "main": [[{ "node": "Negatywna recenzja?", "type": "main", "index": 0 }]] },
    "Negatywna recenzja?": {
      "main": [
        [{ "node": "Claude: odpowiedź negatywna", "type": "main", "index": 0 }],
        [{ "node": "Claude: odpowiedź pozytywna", "type": "main", "index": 0 }]
      ]
    },
    "Claude: odpowiedź negatywna": { "main": [[{ "node": "Alert Telegram: negatywna!", "type": "main", "index": 0 }]] }
  },
  "settings": { "executionOrder": "v1" }
}`,
  },
];

// ─── COMPONENT ────────────────────────────────────────────────────────────────

export default function App() {
  const [active, setActive] = useState(0);
  const [tab, setTab] = useState("steps");
  const [copied, setCopied] = useState(false);
  const [showAllKw, setShowAllKw] = useState(false);

  const wf = WORKFLOWS[active];

  function copyJson() {
    navigator.clipboard.writeText(wf.json);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div style={s.root}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        @keyframes fadeUp { from{opacity:0;transform:translateY(6px)} to{opacity:1;transform:translateY(0)} }
        button { cursor: pointer; font-family: inherit; }
        pre { white-space: pre-wrap; word-break: break-word; }
      `}</style>

      {/* ── HEADER ── */}
      <div style={s.header}>
        <div style={s.headerTop}>
          <div>
            <div style={s.headerTag}>6 Gotowych Automatyzacji n8n</div>
            <h1 style={s.headline}>Shopify & WooCommerce<br /><span style={s.accent}>Wdróż u klienta dziś.</span></h1>
          </div>
          <div style={s.statsRow}>
            {[["6", "Workflows"], ["JSON", "Do importu"], ["PL", "Język"]].map(([v, l]) => (
              <div key={l} style={s.stat}><div style={s.statVal}>{v}</div><div style={s.statLab}>{l}</div></div>
            ))}
          </div>
        </div>
        <p style={s.headerSub}>Każda automatyzacja zawiera: gotowy JSON do n8n, opis krok po kroku i słowa kluczowe long-tail SEO.</p>
      </div>

      <div style={s.layout}>
        {/* ── SIDEBAR ── */}
        <div style={s.sidebar}>
          <div style={s.sidebarLabel}>Automatyzacje</div>
          {WORKFLOWS.map((wf, i) => (
            <button key={wf.id} onClick={() => { setActive(i); setTab("steps"); setShowAllKw(false); }}
              style={{ ...s.sideItem, ...(active === i ? { ...s.sideItemActive, borderColor: wf.color, background: wf.color + "12" } : {}) }}>
              <span style={{ ...s.sideNum, color: active === i ? wf.color : "#2a3a4a" }}>{wf.num}</span>
              <div style={s.sideBody}>
                <div style={{ ...s.sideTitle, color: active === i ? "#e8f0f8" : "#6a7a8a" }}>
                  {wf.icon} {wf.title}
                </div>
                <div style={s.sidePlatform}>{wf.platform.join(" · ")}</div>
              </div>
            </button>
          ))}
        </div>

        {/* ── MAIN ── */}
        <div style={s.main} key={wf.id}>

          {/* Workflow header */}
          <div style={{ ...s.wfHeader, borderLeft: `4px solid ${wf.color}` }}>
            <div style={s.wfIcon}>{wf.icon}</div>
            <div style={s.wfMeta}>
              <div style={s.wfNum}>{wf.num} / 06</div>
              <h2 style={s.wfTitle}>{wf.title}</h2>
              <div style={s.wfPlatformRow}>
                {wf.platform.map(p => (
                  <span key={p} style={{ ...s.platformTag, borderColor: wf.color + "50", color: wf.color }}>{p}</span>
                ))}
                <span style={s.timeTag}>⏱ {wf.time}</span>
                <span style={{ ...s.priceTag, color: wf.color }}>💰 {wf.price}</span>
              </div>
            </div>
          </div>

          {/* Problem + ROI */}
          <div style={s.problemRow}>
            <div style={s.problemCard}>
              <div style={s.problemLabel}>🔥 Problem klienta</div>
              <div style={s.problemText}>{wf.problem}</div>
            </div>
            <div style={{ ...s.roiCard, background: wf.color + "10", border: `1px solid ${wf.color}30` }}>
              <div style={{ ...s.roiLabel, color: wf.color }}>📈 ROI dla klienta</div>
              <div style={s.roiText}>{wf.roi}</div>
            </div>
          </div>

          {/* Tabs */}
          <div style={s.tabsRow}>
            {[["steps", "⚙️ Jak działa"], ["json", "{ } JSON"], ["keywords", "🔍 Słowa kluczowe"]].map(([id, label]) => (
              <button key={id} onClick={() => setTab(id)}
                style={{ ...s.tabBtn, ...(tab === id ? { ...s.tabBtnActive, borderColor: wf.color, color: wf.color, background: wf.color + "12" } : {}) }}>
                {label}
              </button>
            ))}
          </div>

          {/* ─ STEPS ─ */}
          {tab === "steps" && (
            <div style={s.stepsWrap}>
              {wf.steps.map((step, i) => (
                <div key={i} style={{ ...s.stepCard, animation: `fadeUp 0.15s ease ${i * 0.04}s both` }}>
                  <div style={s.stepLeft}>
                    <div style={{ ...s.stepNum, background: wf.color }}>{i + 1}</div>
                    {i < wf.steps.length - 1 && <div style={{ ...s.stepLine, background: wf.color + "30" }} />}
                  </div>
                  <div style={s.stepRight}>
                    <div style={s.stepNodeRow}>
                      <span style={s.stepIcon}>{step.icon}</span>
                      <span style={{ ...s.stepNode, color: wf.color }}>{step.node}</span>
                    </div>
                    <div style={s.stepDesc}>{step.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* ─ JSON ─ */}
          {tab === "json" && (
            <div style={s.jsonWrap}>
              <div style={s.jsonHeader}>
                <div style={s.jsonTitle}>
                  <span style={{ color: wf.color }}>{ }</span> n8n Workflow JSON — importuj przez File → Import
                </div>
                <button onClick={copyJson} style={{ ...s.copyBtn, borderColor: wf.color, color: copied ? "#10b981" : wf.color }}>
                  {copied ? "✓ Skopiowano!" : "📋 Kopiuj JSON"}
                </button>
              </div>
              <div style={s.jsonNote}>
                ⚡ Zamień: <code style={{ color: wf.color }}>TWOJ_SKLEP</code> · <code style={{ color: wf.color }}>TWOJ_SHOPIFY_TOKEN</code> · <code style={{ color: wf.color }}>TWOJ_KLUCZ_ANTHROPIC</code> · <code style={{ color: wf.color }}>TWOJ_SPREADSHEET_ID</code> · <code style={{ color: wf.color }}>TWOJ_TELEGRAM_CHAT_ID</code>
              </div>
              <pre style={s.jsonCode}>{wf.json}</pre>
            </div>
          )}

          {/* ─ KEYWORDS ─ */}
          {tab === "keywords" && (
            <div style={s.kwWrap}>
              <div style={s.kwHeader}>
                <div style={s.kwTitle}>Long-tail keywords — wklej do meta description, tytułów blogów lub H2 na stronie</div>
              </div>
              <div style={s.kwGrid}>
                {(showAllKw ? wf.keywords : wf.keywords.slice(0, 6)).map((kw, i) => (
                  <div key={i} style={{ ...s.kwCard, animation: `fadeUp 0.15s ease ${i * 0.05}s both` }}>
                    <span style={{ color: wf.color }}>🔍</span>
                    <span style={s.kwText}>{kw}</span>
                  </div>
                ))}
              </div>
              <div style={s.kwHint}>
                <div style={s.kwHintTitle}>💡 Jak użyć tych słów kluczowych?</div>
                <div style={s.kwHintList}>
                  {[
                    "Tytuł wpisu blogowego: użyj 1 keyword jako H1",
                    "Meta description strony usługi: wpleć 2-3 naturalne",
                    "Nagłówki H2 w opisie usługi na stronie",
                    "Google Ads: skopiuj do broad match keywords",
                    "LinkedIn post: wpleć naturalnie w treść",
                  ].map((hint, i) => (
                    <div key={i} style={s.kwHintItem}>
                      <span style={{ color: wf.color, fontWeight: 700, marginRight: 8 }}>{i + 1}.</span>
                      {hint}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── STYLES ──────────────────────────────────────────────────────────────────
const s = {
  root: { minHeight: "100vh", background: "#05080c", color: "#dde4ec", fontFamily: "'Space Grotesk', sans-serif", padding: "24px 16px" },
  header: { maxWidth: 1060, margin: "0 auto 24px", paddingBottom: 20, borderBottom: "1px solid rgba(255,255,255,0.06)" },
  headerTop: { display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 16, flexWrap: "wrap", marginBottom: 12 },
  headerTag: { display: "inline-block", background: "rgba(139,92,246,0.1)", border: "1px solid rgba(139,92,246,0.25)", color: "#a78bfa", fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", padding: "4px 12px", borderRadius: 20, marginBottom: 10 },
  headline: { fontSize: "clamp(20px, 3.5vw, 30px)", fontWeight: 700, color: "#f0f4f8", lineHeight: 1.2 },
  accent: { color: "#a78bfa" },
  statsRow: { display: "flex", gap: 12 },
  stat: { textAlign: "center", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 10, padding: "10px 16px" },
  statVal: { fontSize: 20, fontWeight: 700, color: "#f0f4f8" },
  statLab: { fontSize: 10, color: "#3a4a5a", fontWeight: 600, textTransform: "uppercase", marginTop: 2 },
  headerSub: { fontSize: 13, color: "#3a4a5a", lineHeight: 1.6 },
  layout: { maxWidth: 1060, margin: "0 auto", display: "flex", gap: 20, alignItems: "flex-start" },
  sidebar: { width: 210, flexShrink: 0, display: "flex", flexDirection: "column", gap: 4 },
  sidebarLabel: { fontSize: 10, color: "#2a3a4a", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", padding: "0 8px", marginBottom: 6 },
  sideItem: { display: "flex", alignItems: "center", gap: 10, padding: "10px 10px", borderRadius: 10, border: "1px solid transparent", background: "transparent", textAlign: "left", transition: "all 0.15s" },
  sideItemActive: {},
  sideNum: { fontFamily: "'JetBrains Mono', monospace", fontSize: 11, fontWeight: 700, flexShrink: 0, width: 22 },
  sideBody: { flex: 1, minWidth: 0 },
  sideTitle: { fontSize: 12, fontWeight: 600, lineHeight: 1.3 },
  sidePlatform: { fontSize: 10, color: "#2a3a4a", marginTop: 2 },
  main: { flex: 1, display: "flex", flexDirection: "column", gap: 16, animation: "fadeUp 0.2s ease", minWidth: 0 },
  wfHeader: { display: "flex", gap: 16, alignItems: "flex-start", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 14, padding: "18px 20px", paddingLeft: 16 },
  wfIcon: { fontSize: 32, flexShrink: 0 },
  wfMeta: { flex: 1 },
  wfNum: { fontSize: 10, color: "#3a4a5a", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 4 },
  wfTitle: { fontSize: 18, fontWeight: 700, color: "#f0f4f8", marginBottom: 10 },
  wfPlatformRow: { display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" },
  platformTag: { fontSize: 11, fontWeight: 700, padding: "3px 10px", border: "1px solid", borderRadius: 6 },
  timeTag: { fontSize: 11, color: "#4a5a6a", fontWeight: 600, background: "rgba(255,255,255,0.04)", padding: "3px 8px", borderRadius: 6 },
  priceTag: { fontSize: 11, fontWeight: 700, background: "rgba(255,255,255,0.04)", padding: "3px 8px", borderRadius: 6 },
  problemRow: { display: "flex", gap: 12, flexWrap: "wrap" },
  problemCard: { flex: 1, minWidth: 220, background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 12, padding: 16 },
  problemLabel: { fontSize: 11, fontWeight: 700, color: "#4a5a6a", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 8 },
  problemText: { fontSize: 13, color: "#8090a0", lineHeight: 1.6 },
  roiCard: { flex: 1, minWidth: 220, borderRadius: 12, padding: 16 },
  roiLabel: { fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 8 },
  roiText: { fontSize: 13, color: "#c0ccd8", lineHeight: 1.6, fontWeight: 500 },
  tabsRow: { display: "flex", gap: 8 },
  tabBtn: { padding: "8px 14px", borderRadius: 8, border: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.03)", color: "#5a6a7a", fontSize: 12, fontWeight: 600, transition: "all 0.15s" },
  tabBtnActive: {},
  stepsWrap: { display: "flex", flexDirection: "column" },
  stepCard: { display: "flex", gap: 0 },
  stepLeft: { display: "flex", flexDirection: "column", alignItems: "center", width: 36, flexShrink: 0 },
  stepNum: { width: 28, height: 28, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, color: "#fff", flexShrink: 0, zIndex: 1 },
  stepLine: { width: 2, flex: 1, minHeight: 16, margin: "4px 0" },
  stepRight: { flex: 1, paddingLeft: 12, paddingBottom: 16, paddingTop: 3 },
  stepNodeRow: { display: "flex", alignItems: "center", gap: 8, marginBottom: 4 },
  stepIcon: { fontSize: 14 },
  stepNode: { fontFamily: "'JetBrains Mono', monospace", fontSize: 12, fontWeight: 600 },
  stepDesc: { fontSize: 13, color: "#6a7a8a", lineHeight: 1.5 },
  jsonWrap: { background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 14, overflow: "hidden" },
  jsonHeader: { display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 16px", borderBottom: "1px solid rgba(255,255,255,0.06)", flexWrap: "wrap", gap: 8 },
  jsonTitle: { fontSize: 12, color: "#5a6a7a", fontWeight: 600 },
  copyBtn: { padding: "6px 14px", borderRadius: 8, border: "1px solid", background: "transparent", fontSize: 12, fontWeight: 700, transition: "all 0.15s" },
  jsonNote: { padding: "10px 16px", background: "rgba(255,200,0,0.04)", borderBottom: "1px solid rgba(255,255,255,0.05)", fontSize: 11, color: "#6a7a8a", lineHeight: 1.6 },
  jsonCode: { padding: 16, fontSize: 11, fontFamily: "'JetBrains Mono', monospace", color: "#8090a0", lineHeight: 1.6, maxHeight: 420, overflowY: "auto" },
  kwWrap: { display: "flex", flexDirection: "column", gap: 16 },
  kwHeader: { marginBottom: -4 },
  kwTitle: { fontSize: 12, color: "#4a5a6a", fontWeight: 600 },
  kwGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 8 },
  kwCard: { display: "flex", alignItems: "flex-start", gap: 8, background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 10, padding: "10px 12px" },
  kwText: { fontSize: 12, color: "#8090a0", lineHeight: 1.4, fontFamily: "'JetBrains Mono', monospace" },
  kwHint: { background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: 12, padding: 16 },
  kwHintTitle: { fontSize: 13, fontWeight: 700, color: "#c0ccd8", marginBottom: 12 },
  kwHintList: { display: "flex", flexDirection: "column", gap: 8 },
  kwHintItem: { fontSize: 12, color: "#5a6a7a", lineHeight: 1.4 },
};
