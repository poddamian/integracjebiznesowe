// n8n – węzeł Code „Złóż wpis” (Run Once for All Items, JavaScript)
// Wejścia (nazwy węzłów dopasuj do swoich):
//   'Plan'            – wiersz z Arkusza Google (pola: data, slug, cta_url ...)
//   'AI'              – odpowiedź modelu (JSON opisany w prompcie)
//   'Szablon'         – GitHub › File › Get: n8n/szablon-wpisu.html
//   'Pobierz blog'    – GitHub › File › Get: assets/blog.html
//   'Pobierz sitemap' – GitHub › File › Get: assets/sitemap.xml
//   'Pobierz llms'    – GitHub › File › Get: assets/llms.txt
// W węzłach GitHub „Get” wyłącz „As Binary Property”, wtedy treść przychodzi jako base64 w polu content.

const b64 = (s) => Buffer.from(s, 'base64').toString('utf8');
const esc = (s) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const plan = $('Plan').first().json;
const raw = $('AI').first().json;
const txt = raw.message?.content ?? raw.output ?? raw.text ?? raw.content ?? raw;
const p = typeof txt === 'string' ? JSON.parse(txt.replace(/^```json\s*|\s*```$/g, '')) : txt;

// --- walidacja ---------------------------------------------------------
const required = ['slug', 'title', 'description', 'og_description', 'keywords', 'tag', 'emoji', 'excerpt', 'read_min', 'content_html', 'faq', 'cta'];
for (const k of required) if (p[k] === undefined || p[k] === '') throw new Error(`Brak pola z AI: ${k}`);
if (/<(script|style|iframe|h1|form)\b/i.test(p.content_html)) throw new Error('content_html zawiera niedozwolony tag');
if (!/^[a-z0-9-]{3,80}$/.test(p.slug)) throw new Error('Zły slug: ' + p.slug);
const blogHtml = b64($('Pobierz blog').first().json.content);
if (blogHtml.includes(`blog/${p.slug}"`)) throw new Error('Wpis o tym slugu już istnieje: ' + p.slug);

// --- daty ----------------------------------------------------------------
const iso = String(plan.data_iso || plan.data).slice(0, 10);          // RRRR-MM-DD
const [Y, M, D] = iso.split('-').map(Number);
const miesiace = ['stycznia', 'lutego', 'marca', 'kwietnia', 'maja', 'czerwca', 'lipca', 'sierpnia', 'września', 'października', 'listopada', 'grudnia'];
const dateHuman = `${D} ${miesiace[M - 1]} ${Y}`;

// --- FAQ i dane strukturalne -------------------------------------------
const faqHtml = p.faq.map(f => `
      <div class="faq-item">
        <div class="faq-q">${esc(f.q)}</div>
        <div class="faq-a">${esc(f.a)}</div>
      </div>`).join('\n');

const url = `https://integracjebiznesowe.pl/blog/${p.slug}`;
const jsonld = JSON.stringify({
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BlogPosting',
      headline: p.title,
      description: p.description,
      datePublished: iso,
      dateModified: iso,
      author: { '@type': 'Person', name: 'Damian Podbielski' },
      publisher: { '@type': 'Organization', name: 'Integracje Biznesowe', url: 'https://integracjebiznesowe.pl/' },
      mainEntityOfPage: url,
      keywords: p.keywords.join(', '),
      inLanguage: 'pl-PL'
    },
    {
      '@type': 'FAQPage',
      mainEntity: p.faq.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } }))
    }
  ]
}, null, 2);

// --- wpis z szablonu ----------------------------------------------------
const ctaUrl = plan.cta_url ? (plan.cta_url.startsWith('http') ? plan.cta_url : '..' + (plan.cta_url.startsWith('/') ? '' : '/') + plan.cta_url) : '../ksef';
const map = {
  DESCRIPTION: esc(p.description),
  KEYWORDS: esc(p.keywords.join(', ')),
  TITLE: esc(p.title),
  OG_DESCRIPTION: esc(p.og_description),
  SLUG: p.slug,
  JSONLD: jsonld,
  TAG: esc(p.tag),
  DATE_HUMAN: dateHuman,
  READ_MIN: String(p.read_min),
  CONTENT: p.content_html,
  CTA_HEADING: esc(p.cta.heading),
  CTA_TEXT: esc(p.cta.text),
  CTA_BUTTON: esc(p.cta.button),
  CTA_URL: esc(ctaUrl),
  FAQ_HTML: faqHtml
};
let html = b64($('Szablon').first().json.content);
for (const [k, v] of Object.entries(map)) html = html.split(`{{${k}}}`).join(v);
if (/\{\{[A-Z_]+\}\}/.test(html)) throw new Error('Nie wszystkie pola szablonu zostały wypełnione');

// --- karta na liście bloga (nowa na górze) -----------------------------
const card = `    <a href="blog/${p.slug}" class="post-card">
      <div class="post-thumb">${esc(p.emoji)}</div>
      <div>
        <div class="post-meta">${dateHuman} · ${p.read_min} min czytania</div>
        <div class="post-title">${esc(p.title)}</div>
        <div class="post-excerpt">${esc(p.excerpt)}</div>
        <div class="post-link">Czytaj artykuł →</div>
      </div>
    </a>
`;
const anchor = '<section id="posts">\n  <div class="container">\n';
if (!blogHtml.includes(anchor)) throw new Error('Nie znaleziono miejsca na kartę w blog.html');
const newBlog = blogHtml.replace(anchor, anchor + card);

// --- sitemap -------------------------------------------------------------
const sitemap = b64($('Pobierz sitemap').first().json.content);
const smEntry = `  <url>\n    <loc>${url}</loc>\n    <lastmod>${iso}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.7</priority>\n  </url>\n`;
const newSitemap = sitemap.replace('</urlset>', smEntry + '</urlset>');

// --- llms.txt (pod nagłówkiem ## Blog, po linku do listy) --------------
const llms = b64($('Pobierz llms').first().json.content);
const llmsLine = `- [${p.title}](${url}): ${p.excerpt}`;
const newLlms = llms.replace('- [Blog](https://integracjebiznesowe.pl/blog)\n', `- [Blog](https://integracjebiznesowe.pl/blog)\n${llmsLine}\n`);

const todo = Array.isArray(p.todo) ? p.todo : [];
return [{
  json: {
    slug: p.slug,
    title: p.title,
    branch: `wpis/${p.slug}`,
    needsReview: todo.length > 0 || /\[(DO UZUPEŁNIENIA|SPRAWDŹ)/.test(p.content_html),
    todo,
    files: {
      [`assets/blog/${p.slug}.html`]: html,
      'assets/blog.html': newBlog,
      'assets/sitemap.xml': newSitemap,
      'assets/llms.txt': newLlms
    }
  }
}];
