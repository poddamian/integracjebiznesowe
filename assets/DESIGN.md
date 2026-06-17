# Integracje Biznesowe — Style Reference
> light command center — white canvas, electric lime pulse, deep navy type

**Theme:** light

Integracje Biznesowe operates in a clean-light, professional visual register: a pure white base canvas with cool-grey layered surfaces create depth without photography, with a single electric lime (#c8f135) as the only chromatic accent in an otherwise cool-navy world. Typography pairs Plus Jakarta Sans for display and heading authority with Inter for body and UI text — tight negative tracking at display sizes and fluid clamp scaling create headlines that feel precise and friendly. Lime is used as a **background accent only** (badges, buttons, hover glows); text uses `--lime-text` (#4d6a00), a dark olive-green that retains brand identity while remaining legible on white. The aesthetic borrows from modern SaaS products: a fixed glass-blur nav, surface layering through subtle grey steps, pill-shaped section badges, and a persistent grid overlay that hints at technical infrastructure.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| White | `#ffffff` | `--bg` | Deepest page background — the base canvas all content sits on |
| Light Grey | `#f4f6fb` | `--bg2` | Secondary section background — used for Process and Contact sections to create alternating rhythm |
| Surface | `#f0f3fa` | `--surface` | Card backgrounds, service cards, post cards, info boxes |
| Surface Raised | `#e8edf7` | `--surface2` | Hover states, secondary button background, elevated surfaces |
| Border Subtle | `rgba(0,0,0,0.08)` | `--border` | Default card and section borders — barely visible structural lines |
| Border Strong | `rgba(0,0,0,0.13)` | `--border2` | Secondary button border, stronger dividers |
| Electric Lime | `#c8f135` | `--lime` | Primary accent — logo mark, all CTA backgrounds, badge backgrounds, hover glows |
| Lime Dim | `rgba(200,241,53,0.28)` | `--lime-dim` | Lime at medium opacity — badge backgrounds, service icon backgrounds |
| Lime Text | `#4d6a00` | `--lime-text` | Dark olive-green for all lime-coloured **text** — readable on white; replaces raw `--lime` for text uses |
| Text Primary | `#141623` | `--text` | Primary body and heading text — near-black with a slight blue tint |
| Text Secondary | `#4a5577` | `--text2` | Descriptions, subtitles, secondary content |
| Text Muted | `#8896b8` | `--text3` | Meta labels, dates, footer links, tertiary information |

## Tokens — Typography

### Plus Jakarta Sans — Primary display and heading typeface for all titles, section headers, and logo text. Used at fluid clamp sizes with negative letter-spacing (-0.02em) and line-heights between 1.1–1.15. Weights 500–800. · `--font-display`
- **Source:** Google Fonts (`Plus Jakarta Sans`)
- **Weights:** 400, 500, 600, 700, 800
- **Sizes:** 13px (step numbers), 15px (footer logo), 16px (step titles), 18px (service titles), 19px (nav logo), 20px (post titles), clamp(28px–42px) (section titles), clamp(28px–48px) (hero title)
- **Line height:** 1.18 (hero), 1.15 (section titles), 1.3 (post titles)
- **Letter spacing:** -0.02em on all display/heading sizes
- **Role:** All display, heading, logo, and structural label text. Friendly rounded letterforms make the brand feel approachable without sacrificing authority.

### Inter — Body and UI typeface for all descriptive text, buttons, navigation links, and metadata. Weights 400–700. · `--font-body`
- **Source:** Google Fonts (`Inter`)
- **Weights:** 400, 500, 600, 700
- **Sizes:** 11px (sec-tag), 12px (meta, footer links, btn-nav), 13px (step desc, post-link, blog note, footer copyright), 14px (nav-link, service-desc, post-excerpt), 15px (btn-primary/secondary, sec-sub), 17px (hero-sub)
- **Line height:** 1.7–1.75 (body descriptions), 1.0 (buttons)
- **Letter spacing:** 0.08em (hero eyebrow), 0.10em (step numbers), 0.12em (sec-tag) — uppercase labels only
- **Role:** All body text, buttons, navigation, descriptions, and UI labels. The heavier weights (600–700) are used for buttons and emphasis; 500 for nav links; 400 for body copy.

### Type Scale

| Role | Font | Size | Weight | Line Height | Letter Spacing |
|------|------|------|--------|-------------|----------------|
| hero-title | Plus Jakarta Sans | clamp(28px, 4.5vw, 48px) | 700 | 1.18 | -0.02em |
| sec-title | Plus Jakarta Sans | clamp(28px, 4vw, 42px) | 700 | 1.15 | -0.02em |
| service-title | Plus Jakarta Sans | 18px | 600 | — | — |
| post-title | Plus Jakarta Sans | 20px | 600 | 1.3 | — |
| step-title | Plus Jakarta Sans | 16px | 600 | — | — |
| nav-logo | Plus Jakarta Sans | 19px | 700 | — | — |
| footer-logo | Plus Jakarta Sans | 15px | 700 | — | — |
| hero-sub | Inter | 17px | 400 | 1.75 | — |
| sec-sub | Inter | 15px | 400 | 1.7 | — |
| service-desc | Inter | 14px | 400 | 1.7 | — |
| step-desc | Inter | 13px | 400 | 1.7 | — |
| post-excerpt | Inter | 14px | 400 | 1.7 | — |
| btn-primary | Inter | 15px | 700 | — | — |
| btn-secondary | Inter | 15px | 600 | — | — |
| btn-nav | Inter | 13px | 700 | — | — |
| nav-link | Inter | 14px | 500 | — | — |
| sec-tag | Inter | 11px | 700 | — | 0.12em |
| hero-eyebrow | Inter | 12px | 700 | — | 0.08em |
| step-num | Plus Jakarta Sans | 13px | 700 | — | 0.10em |
| post-meta | Inter | 12px | 400 | — | — |
| post-link | Inter | 13px | 700 | — | — |
| footer-link | Inter | 12px | 400 | — | — |
| footer-copyright | Inter | 12px | 400 | — | — |

## Tokens — Spacing & Shapes

**Base unit:** 4px (practical: 8px)

**Density:** comfortable

### Spacing Scale

| Role | Value |
|------|-------|
| Element gap (grids) | 20px |
| Element gap (small) | 8px, 14px |
| Card padding (service) | 28px |
| Card padding (post) | 28px |
| Card gap (post grid) | 28px |
| Button padding (primary) | 15px 30px |
| Button padding (secondary) | 15px 28px |
| Button padding (nav) | 10px 22px |
| Section padding | 80px 0 |
| Hero padding | 140px 0 80px |
| Footer padding | 36px 0 |
| Section header margin-bottom | 44px |
| Hero title margin-bottom | 22px |
| Hero sub margin-bottom | 36px |
| CTA group gap | 14px |
| Nav logo margin-right | 32px |
| Nav link padding | 8px 14px |
| Container padding | 0 24px |

### Border Radius

| Element | Value | Token |
|---------|-------|-------|
| standard (cards, buttons, inputs) | 14px | `--radius` |
| small (service icon, logo dot, nav link hover) | 8px | `--radius-sm` |
| large (service cards, post cards) | 20px | `--radius-lg` |
| pill (badges, sec-tag, eyebrow, mobile links) | 100px | — |
| service icon | 11px | — |
| nav logo dot | 8px | — |
| post thumb | 14px | — |

### Layout

- **Page max-width:** 1000px
- **Section padding:** 80px 0
- **Container padding:** 0 24px
- **Services grid:** 3 columns, 20px gap (1 column on mobile ≤760px)
- **Steps grid:** 4 columns, 20px gap (2 columns ≤900px, 1 column ≤560px)
- **Post card grid:** 160px thumbnail + 1fr content, 28px gap (1 column ≤600px)

## Components

### Fixed Glass Navigation
**Role:** Primary site navigation, always visible

Fixed top bar, height 68px, semi-transparent white background (`rgba(255,255,255,0.88)`) with `backdrop-filter: blur(20px) saturate(180%)` and a 1px `--border` bottom edge. On scroll past 0px the background solidifies to `rgba(255,255,255,0.98)` via `.scrolled` class. Contains logo on the left, nav links centered, and a CTA button on the right. Collapses to hamburger menu at ≤760px (links hidden, btn-nav hidden, hamburger shown). Mobile menu: white `rgba(255,255,255,0.98)` full-screen overlay.

### Logo Mark
**Role:** Brand identity anchor in nav and footer

Two-part: a lime square dot (28×28px, 8px border-radius, `--lime` background, contains ⚡ emoji at 15px) followed by wordmark in Plus Jakarta Sans 19px weight 700. The second brand word is colored `--lime-text`; the first word stays `--text`. Footer variant is 15px, same structure.

### Primary CTA Button (`btn-primary`)
**Role:** Main page action — contact, key conversion

Electric Lime (`--lime`) filled button with near-black (`#141623`) text, 14px border-radius, 15px × 30px padding, Inter 15px weight 700. Hover: `translateY(-2px)` + `box-shadow: 0 12px 40px rgba(200,241,53,0.3)`. Always inline-flex with 8px gap for icon + label layout.

### Secondary Button (`btn-secondary`)
**Role:** Supporting action — blog link, secondary navigation

Surface Raised (`--surface2`) background, `--text` color, `--border2` border (1px), 14px border-radius, 15px × 28px padding, Inter 15px weight 600. Hover: border darkens slightly. Paired with `→` arrow suffix in text.

### Nav CTA Button (`btn-nav`)
**Role:** Compact conversion button in top navigation

Same lime fill as btn-primary but compact: 8px border-radius, 10px × 22px padding, Inter 13px weight 700, `#141623` text. Hover: `translateY(-1px)` + lime glow shadow. Hidden on mobile ≤760px.

### Section Badge (`sec-tag`)
**Role:** Section category label above every section title

Inline-flex pill, `--lime-dim` background, 1px `rgba(200,241,53,0.2)` border, `--lime-text` text, 11px Inter weight 700, letter-spacing 0.12em, uppercase, 5px × 14px padding, 100px border-radius. Margin-bottom 18px before sec-title.

### Hero Eyebrow Badge
**Role:** Above-the-fold context label in hero section

Same structure as sec-tag but slightly larger: 12px Inter weight 700, letter-spacing 0.08em, 7px × 16px padding, 100px border-radius. Margin-bottom 28px. Content: tool names separated by `·` (e.g. `n8n · Make.com · automatyzacja procesów`).

### Service Card
**Role:** Feature/service showcase in 3-column grid

`--surface` background, `--border` border (1px), 20px border-radius, 28px padding. Hover: `border-color: rgba(200,241,53,0.25)` transition 0.2s. Contains: icon box (44×44px, 11px radius, `--lime-dim` bg, 20px emoji, 18px margin-bottom) → service title (Plus Jakarta Sans 18px weight 600, 10px margin-bottom) → description (Inter 14px `--text2` 1.7 line-height).

### Steps Grid
**Role:** 4-step process visualization

4-column grid (responsive: 2-col at ≤900px, 1-col at ≤560px), 20px gap. Each step: step number (Plus Jakarta Sans 13px weight 700, `--lime-text`, letter-spacing 0.1em, 10px margin-bottom) → step title (Plus Jakarta Sans 16px weight 600, 8px margin-bottom) → step description (Inter 13px `--text2` 1.7 line-height). No cards — bare text on section background (`--bg2`).

### Blog Post Card
**Role:** Article preview in blog teaser and blog index

Grid layout: 160px thumbnail + 1fr content area, 28px gap, `--surface` background, `--border` border (1px), 20px border-radius, 28px padding, `text-decoration:none`, inherits text color. Hover: `border-color: rgba(200,241,53,0.25)` + `translateY(-2px)` transition 0.25s. Contains: thumbnail (120px height, `linear-gradient(135deg,#dde3f5,#c8d5f0)` bg, 14px radius, centered emoji 40px) + content column with meta / title / excerpt / link.

### Info/Note Box (`services-note`)
**Role:** Supplementary callout below service grid

`--surface` background, `--border` border (1px), 14px border-radius, 20px × 24px padding, Inter 14px `--text2` 1.7 line-height. `strong` elements inside use `--lime-text` color to highlight key terms.

### Background Grid Overlay
**Role:** Ambient technical texture across full page

Fixed to viewport (`position:fixed; inset:0; z-index:0; pointer-events:none`). Double linear-gradient creating 80×80px grid lines at 4% black opacity. Masked with `radial-gradient(ellipse 100% 60% at 50% 0%, black, transparent)` so the grid fades out in the lower half — visible primarily at the top of the page.

### Reveal Animation
**Role:** Scroll-triggered entrance for all major elements

Initial state: `opacity:0; transform:translateY(20px)`. Visible state: `opacity:1; transform:translateY(0)`. Transition: `0.6s ease` on both properties. Triggered by IntersectionObserver at `threshold:0.1`. Applied via `.reveal` / `.reveal.visible` classes to all section headers, cards, and content blocks. Once visible, observer disconnects.

## Do's and Don'ts

### Do
- Use Electric Lime `#c8f135` **as background only** — CTA buttons, badges, icon boxes, hover borders, logo dot, and glow box-shadows.
- Use `--lime-text` (`#4d6a00`) for all lime-coloured text — badges labels, accent words in titles, step numbers, post links. Never use raw `#c8f135` as text on a white/light background.
- Layer surfaces in strict order: `--bg` (page) → `--bg2` (alternate sections) → `--surface` (cards) → `--surface2` (hover/raised). Never skip layers or mix the order.
- Apply `--radius-lg` (20px) to all cards (service, post). Apply `--radius` (14px) to all buttons and small containers. Apply 100px pill radius only to badge/tag/eyebrow elements.
- Use Plus Jakarta Sans for all headings and structural labels (step numbers, logo). Use Inter for all body text, buttons, and nav links.
- Set section padding consistently at 80px 0. Do not compress below this.
- Alternate section backgrounds between `--bg` (Hero, Services, Blog, Footer) and `--bg2` (Process, Contact).
- Always add the `reveal` class + IntersectionObserver to new content blocks so they animate in on scroll.

### Don't
- Do not introduce a second accent color. The entire chromatic system is one lime. No blues, purples, or oranges as interactive colors.
- Do not remove `backdrop-filter: blur(20px) saturate(180%)` from the nav.
- Do not use raw `--lime` (`#c8f135`) as a text color — it fails contrast on light backgrounds. Always use `--lime-text` for text.
- Do not set button text to `var(--bg)` — on a white background this produces invisible white text. Use `#141623` explicitly for text on lime buttons.
- Do not reduce section padding below 80px 0.
- Do not apply `--border` or card surfaces to the Steps section — steps sit as bare text on `--bg2` without container boxes.
- Do not use Plus Jakarta Sans for body descriptions or paragraphs — that role belongs strictly to Inter.

## Surfaces

| Level | Name | Value | Purpose |
|-------|------|-------|---------|
| 0 | Page Canvas | `#ffffff` | Base page background — the deepest (lightest) layer |
| 0.5 | Section Alt | `#f4f6fb` | Alternate sections (Process, Contact) — creates rhythm without borders |
| 1 | Card Surface | `#f0f3fa` | Service cards, post cards, note boxes |
| 2 | Raised Surface | `#e8edf7` | Secondary button bg, hover state surfaces |
| accent | Lime Dim | `rgba(200,241,53,0.28)` | Badge and icon backgrounds — lime at 28% opacity |

## Elevation

The design is deliberately flat. No drop shadows appear on cards or surfaces in resting state. Depth is communicated through surface color steps (canvas → section → card → raised) and through the `--border` lines separating elements. Hover states use `translateY(-2px)` micro-lift and a lime `box-shadow` glow on buttons — never a traditional elevation shadow. The nav blur creates the only true depth effect via `backdrop-filter`.

## Layout

The page follows a light-stack rhythm: full-height hero on `--bg` with centered single-column content → 3-column services grid on `--bg` → 4-column steps on `--bg2` (with top/bottom border) → single blog post card on `--bg` → centered contact CTA on `--bg2` → footer strip. Navigation is a fixed full-width glass bar at the top. All content is constrained to `max-width: 1000px` centered with `padding: 0 24px`. The background grid overlay is the only element that breaks the container — it fills the entire viewport at fixed position.

## Agent Prompt Guide

**Quick Color Reference**
- background: `#ffffff` (canvas), `#f4f6fb` (alt sections)
- surface: `#f0f3fa` (cards), `#e8edf7` (raised/hover)
- text: `#141623` (primary), `#4a5577` (secondary), `#8896b8` (muted)
- border: `rgba(0,0,0,0.08)` (subtle), `rgba(0,0,0,0.13)` (strong)
- accent bg: `#c8f135` (Electric Lime — buttons, badges, glow only)
- accent text: `#4d6a00` (Lime Text — all lime-coloured text on light bg)
- accent-dim: `rgba(200,241,53,0.28)` (lime at 28% opacity)

**Example Component Prompts**

1. **Hero section**: White canvas (`#ffffff`). Eyebrow badge: `rgba(200,241,53,0.28)` background, 1px `rgba(200,241,53,0.2)` border, `#4d6a00` text, 12px Inter weight 700 uppercase, letter-spacing 0.08em, 100px border-radius, 7px × 16px padding. Title: Plus Jakarta Sans `clamp(28px,4.5vw,48px)` weight 700 `#141623`, line-height 1.18, letter-spacing -0.02em, with one `<span class="accent">` word in `#4d6a00`. Sub: Inter 17px `#4a5577` line-height 1.75. Two buttons: primary (lime fill `#c8f135`, dark text `#141623`, 14px radius, 15px × 30px) + secondary (`#e8edf7` bg, `#141623` text, `rgba(0,0,0,0.13)` border, 14px radius, 15px × 28px).

2. **Service card**: `#f0f3fa` background, 1px `rgba(0,0,0,0.08)` border, 20px border-radius, 28px padding. Icon box: 44×44px, 11px radius, `rgba(200,241,53,0.28)` bg, 20px emoji, 18px margin-bottom. Title: Plus Jakarta Sans 18px weight 600 `#141623`. Description: Inter 14px `#4a5577` line-height 1.7. Hover: border-color `rgba(200,241,53,0.25)`.

3. **Section badge + title**: Badge: inline-flex, `rgba(200,241,53,0.28)` bg, 1px `rgba(200,241,53,0.2)` border, `#4d6a00` text, 11px Inter weight 700 uppercase, letter-spacing 0.12em, 5px × 14px padding, 100px radius, 18px margin-bottom. Title: Plus Jakarta Sans `clamp(28px,4vw,42px)` weight 700 `#141623`, letter-spacing -0.02em, line-height 1.15, with `<em style="color:#4d6a00;font-style:normal">` for the lime accent phrase.

4. **4-step process block**: Light alt surface `#f4f6fb`, top+bottom 1px `rgba(0,0,0,0.08)` borders, 80px 0 padding. 4-column grid, 20px gap. Each step: step number in Plus Jakarta Sans 13px weight 700 `#4d6a00` letter-spacing 0.1em uppercase, 10px margin-bottom. Step title: Plus Jakarta Sans 16px weight 600 `#141623`, 8px margin-bottom. Description: Inter 13px `#4a5577` line-height 1.7. No card containers — bare text.

5. **Background grid**: `position:fixed; inset:0; z-index:0; pointer-events:none`. `background-image: linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)`. `background-size: 80px 80px`. `mask-image: radial-gradient(ellipse 100% 60% at 50% 0%, black, transparent)`.

## Animations

**Library:** [Motion.dev](https://motion.dev) — loaded via ESM CDN (`https://cdn.jsdelivr.net/npm/motion@latest/+esm`). Uses `animate`, `stagger`, `inView`.

**Shared easing:** `[0.22, 1, 0.36, 1]` — a fast-out cubic-bezier used across all animations for a snappy, premium feel.

### Load Sequence (on page mount)

| Element | Effect | Delay | Duration |
|---------|--------|-------|----------|
| `#navbar` | slide down from -24px + fade in | 0s | 0.55s |
| `.hero-eyebrow` | slide from left (-20px) + fade | 0.15s | 0.5s |
| `.hero-title .char` | each letter rises from `110%` (mask reveal) | stagger 0.022s, start 0.28s | 0.65s |
| `.hero-sub` | slide up 18px + fade | 1.55s | 0.6s |
| `.hero-ctas > *` | stagger slide up 18px + fade | stagger 0.1s, start 1.75s | 0.5s |
| `.nav-logo-dot` | heartbeat scale 1→1.12→1, repeating | 3s | 2s loop |

### Scroll Animations (inView, fire once)

| Element | Effect | Stagger |
|---------|--------|---------|
| `.service-card` | slide up 44px + fade + scale 0.94→1 | 0.13s between cards |
| `.service-icon` | scale 0.4→1.3→1 + rotate 0→18°→0 | 0.13s, starts 0.35s after cards |
| `.steps-grid > div` | slide in from left 32px + fade | 0.1s between steps |
| `.reveal` (sec-headers, note box) | slide up 28px + fade | individual |
| `.contact-box` | slide up 28px + fade + starts CTA glow loop | — |
| `.post-card` | slide up 28px + fade, inline transform cleared on finish | — |
| `footer` | slide up 14px + fade | — |

### Looping Animations

| Element | Effect | Duration |
|---------|--------|----------|
| `.nav-logo-dot` | scale heartbeat 1→1.12→1 | 2s, infinite |
| `.contact-box .btn-primary` | `boxShadow` lime glow pulse (0 → 55px → 20px) | 2.8s, infinite, starts 0.7s after contact reveals |

### Letter Split System

Hero title is split into individual letter spans at runtime by `splitLetters()`. Structure produced:

```html
<!-- Input -->
<h1 class="hero-title">Tekst <span class="accent">słowo</span></h1>

<!-- Output after splitLetters() -->
<h1 class="hero-title">
  <span class="char-wrap"><span class="char">T</span></span>
  <span class="char-wrap"><span class="char">e</span></span>
  <!-- spaces stay as text nodes -->
  <span class="accent">
    <span class="char-wrap"><span class="char">s</span></span>
    ...
  </span>
</h1>
```

`.char-wrap` has `overflow: hidden` — clips the `.char` when it's at `y: 110%`, creating the mask-reveal effect. `padding-bottom: 0.12em; margin-bottom: -0.12em` prevents descender clipping (ę, g, y, etc.).

### CSS :hover Transform Compatibility

Motion.dev persists final animation values as inline styles. Elements with CSS `:hover` transforms need their inline `transform` cleared after animation to avoid specificity conflicts:

```js
animate(el, { y: [28, 0], opacity: [0, 1] }, options)
  .then(() => { el.style.transform = ''; });
```

Applied to: `.post-card` (hover: `translateY(-2px)`), `.hero-ctas > *` (hover on buttons).

### Initial Hidden States (CSS)

Elements hidden via CSS before Motion.dev fires — prevents flash of unstyled content:

```css
#navbar { opacity: 0; }
.hero-eyebrow, .hero-sub, .hero-ctas { opacity: 0; }
.reveal { opacity: 0; }
.service-card { opacity: 0; }
.steps-grid > div { opacity: 0; }
footer { opacity: 0; }
```

Motion.dev overrides these via WAAPI fill (persists final keyframe value above CSS cascade).

## Quick Start

### CSS Custom Properties

```css
:root {
  /* Colors */
  --bg: #ffffff;
  --bg2: #f4f6fb;
  --surface: #f0f3fa;
  --surface2: #e8edf7;
  --border: rgba(0, 0, 0, 0.08);
  --border2: rgba(0, 0, 0, 0.13);
  --lime: #c8f135;
  --lime-dim: rgba(200, 241, 53, 0.28);
  --lime-text: #4d6a00;
  --text: #141623;
  --text2: #4a5577;
  --text3: #8896b8;

  /* Typography */
  --font-display: 'Plus Jakarta Sans', sans-serif;
  --font-body: 'Inter', sans-serif;

  /* Border Radius */
  --radius: 14px;
  --radius-sm: 8px;
  --radius-lg: 20px;
  --radius-pill: 100px;

  /* Layout */
  --page-max-width: 1000px;
  --section-padding: 80px;
  --container-padding: 0 24px;
}
```

### Google Fonts Import

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
```

### Button Templates

```html
<!-- Primary -->
<a href="#kontakt" class="btn-primary">✉️ Napisz do mnie</a>

<!-- Secondary -->
<a href="blog.html" class="btn-secondary">Przeczytaj bloga →</a>

<!-- Nav CTA -->
<a href="#kontakt" class="btn-nav">Napisz do mnie</a>
```

```css
.btn-primary {
  background: var(--lime);
  color: #141623;          /* NEVER use var(--bg) — it's white on white */
  border: none;
  border-radius: var(--radius);
  padding: 15px 30px;
  font-family: var(--font-body);
  font-size: 15px;
  font-weight: 700;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  transition: all .25s;
}
.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 40px rgba(200, 241, 53, .3);
}

.btn-secondary {
  background: var(--surface2);
  color: var(--text);
  border: 1px solid var(--border2);
  border-radius: var(--radius);
  padding: 15px 28px;
  font-family: var(--font-body);
  font-size: 15px;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  transition: all .25s;
}
```

### Section Badge + Title Template

```html
<div class="sec-tag">Czym się zajmuję</div>
<h2 class="sec-title">Automatyzacja procesów <em>krok po kroku</em></h2>
<p class="sec-sub">Opis sekcji...</p>
```

```css
.sec-tag {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: var(--lime-dim);
  border: 1px solid rgba(200, 241, 53, .2);
  color: var(--lime-text);     /* dark olive, readable on white */
  font-size: 11px;
  font-weight: 700;
  letter-spacing: .12em;
  text-transform: uppercase;
  padding: 5px 14px;
  border-radius: 100px;
  margin-bottom: 18px;
}
.sec-title {
  font-family: var(--font-display);
  font-size: clamp(28px, 4vw, 42px);
  font-weight: 700;
  letter-spacing: -.02em;
  line-height: 1.15;
  margin-bottom: 14px;
}
.sec-title em {
  font-style: normal;
  color: var(--lime-text);
}
```

### Reveal Animation

```css
.reveal {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity .6s ease, transform .6s ease;
}
.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}
```

```js
const revealObs = new IntersectionObserver(
  entries => entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      revealObs.unobserve(e.target);
    }
  }),
  { threshold: 0.1 }
);
document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));
```
