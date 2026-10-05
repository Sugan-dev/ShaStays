# SHA Stays — brand and colour guide

How the SHA Stays brand looks and sounds on the website, and the rules for extending it. Everything here is taken from the code as it ships today; where the code and this guide disagree, fix one of them.

## Identity

| | |
|---|---|
| Name | **SHA Stays** (always "SHA" in capitals, "Stays" in title case; never "Sha Stays" or "SHA STAYS" in body copy) |
| Tagline | **Stay Close. Feel at Home.** |
| Descriptor | A Peaceful Stay in Rameshwaram |
| Supporting line | A peaceful boutique stay for your Rameshwaram journey. |
| Positioning | A small, personal, six-room boutique stay — calm, clean and comfortable, near the Abdul Kalam Memorial. Not a big hotel, not a luxury resort. |
| Room names | **SHA King Room**, **SHA Queen Room** (the "SHA" prefix is part of the name) |

Source of truth for these strings: `site` in `src/lib/site.ts`.

### Brand pillars
Peace (a calmer place to stay), Location (convenient for exploring Rameshwaram), Comfort (simple, comfortable, welcoming). Defined as `pillars` in `site.ts`.

### Voice and tone
- **Calm, warm, honest, unhurried.** Short sentences. Plain words. Speak like a host, not a booking engine.
- Understated claims: "comfortable", "peaceful", "thoughtfully prepared", "kept simple". Avoid superlatives and hype ("luxurious", "world-class", "best").
- Never overpromise. Optional extras are "can be discussed" or "subject to availability". Enquiries "do not reserve a room until SHA Stays confirms".
- Indian/British English spelling: *enquiry, cosy, travellers, personalised, colour*. Use "Rameshwaram".
- Headline style: short, declarative pairs with full stops — "Stay Close. Feel at Home.", "Simple Rooms. Comfortable Stays.", "Comfort, kept simple." Large marketing headings and button labels use Title Case ("Book Your Stay", "WhatsApp Us", "Explore Rooms"); small section headings can be sentence case ("A closer look", "Plan the stay").
- Factual limits (no beachfront, pool, restaurant, prices, ratings…) are listed in `AGENTS.md` → Content rules.

## Logo

![SHA Stays logo](public/images/logo.png)

- **File:** `public/images/logo.png` — 175×104 PNG with a transparent background. `Images/Logo.png` is the same artwork on a light background (owner's original).
- **Artwork:** "SHA" in a dark green serif with a palm tree and birds over the "A", and "STAYS" in spaced gold capitals with a wave underneath.
- **Logo colours** (sampled from the file, not site tokens): green ≈ `#23361D`, gold ≈ `#A48748`. These are a slightly warmer, more olive green than the site's `forest`, and a gold that does not appear anywhere else on the site. Don't use them for UI; use the palette below.
- **Component:** `<Logo />` in `src/components/Logo.tsx`, rendered at `h-11` (44px tall), linking home.
  - `tone="forest"` (default): logo directly on light backgrounds (header).
  - `tone="ivory"`: logo inside an ivory rounded tile, for dark backgrounds (footer on `forest-deep`). The logo's dark green does not read on dark green, so always use the tile on dark surfaces.
- **Gap:** only this small raster exists. There is no vector (SVG) or high-resolution version, so the logo can't be scaled up for print, social banners or large hero placements. Ask the owner for a vector file before using it larger than ~2× its current size.

### App icon / favicon
`src/app/icon.svg` and `public/favicon.svg` (identical): a `forest` rounded square with two nested arches — an outer ivory arch and an inner terracotta arch, suggesting a doorway/home. This is a site-made mark, separate from the logo. Keep both files in sync.

## Colour palette

Defined once as Tailwind v4 theme tokens in `src/app/globals.css` (`@theme inline`) and used as utilities (`bg-forest`, `text-muted`, `border-line`, …).

### Greens — primary brand colour
| Token | Hex | Role |
|---|---|---|
| `forest` | `#183C35` | **Primary brand colour.** Headings, primary text links, dark sections (`FinalCta`), top announcement bar, room card panel, browser theme colour. Most-used token on the site. |
| `forest-deep` | `#102822` | Darkest surface: footer, hero background, hero image overlays, `ghost` button fill. |
| `forest-soft` | `#24564B` | Hover state for `forest` buttons only. |

### Neutrals — backgrounds and text
| Token | Hex | Role |
|---|---|---|
| `ivory` | `#F8F5EF` | **Default page background** (`body`). Header background, text on dark green, manifest background colour. |
| `paper` | `#FFFDFB` | Raised surfaces on ivory: cards, forms, page-hero bands. Almost white, never pure `#FFF`. |
| `sand` | `#E8DCC8` | Warm accent surface: info panels (`bg-sand/70`), selected form options, status messages, text-selection highlight, eyebrow/label text on dark green. |
| `sand-deep` | `#D9CBB3` | Hover state for `sand` buttons. |
| `line` | `#E5DCCB` | Borders, dividers, input outlines. |
| `charcoal` | `#252525` | Body text. |
| `muted` | `#5C574F` | Secondary text: descriptions, captions, breadcrumbs, helper text. |

### Terracotta — accent and call to action
| Token | Hex | Role |
|---|---|---|
| `terracotta` | `#B86F52` | **Decorative only:** bullet dots, focus outline (`:focus-visible`), the inner arch in the icon. Not for text or button fills (fails contrast, see below). |
| `terracotta-deep` | `#9A5A41` | **Primary call-to-action colour** ("Book Now", "Book Your Stay", form submit buttons), eyebrow labels, large step/reason numbers, active nav item, icons. |
| `terracotta-ink` | `#7A4634` | Hover state for CTA buttons; small text on `sand` (error messages, labels). |

### Contrast (WCAG 2.1)
AA requires 4.5:1 for normal text and 3:1 for large text (≥24px, or ≥18.7px bold).

| Foreground on background | Ratio | Use |
|---|---|---|
| `charcoal` on `ivory` | 14.1 | ✅ body text |
| `forest` on `paper` / `ivory` | 11.9 / 11.1 | ✅ headings, links |
| `ivory` / `sand` on `forest` | 11.1 / 8.9 | ✅ text on dark sections |
| `sand` on `forest-deep` | 11.5 | ✅ footer text |
| `muted` on `paper` / `ivory` / `sand` | 7.1 / 6.6 / 5.3 | ✅ secondary text |
| white on `terracotta-deep` | 5.4 | ✅ CTA buttons |
| `terracotta-deep` on `paper` / `ivory` | 5.3 / 4.9 | ✅ eyebrows, accents |
| `terracotta-ink` on `sand` | 5.6 | ✅ small text on sand |
| white on `terracotta` | 3.9 | ❌ normal text — large text only |
| `terracotta` on `ivory` | 3.6 | ❌ normal text — large text only |

**Rule:** use `terracotta-deep` (or `terracotta-ink`) whenever terracotta carries text or is a button fill. Plain `terracotta` is for dots, outlines and other non-text decoration.

### Surfaces and pairings
- **Light page:** `ivory` background → `paper` cards/forms (with `ring-1 ring-black/5` and a soft forest-tinted shadow) → `charcoal`/`muted` text → `forest` headings → `terracotta-deep` eyebrow and CTA.
- **Inner page header (`PageHero`):** `paper` band with a `line` bottom border.
- **Dark section (`FinalCta`, room panels, private package card):** `forest` background, white/`ivory` headings, `sand` eyebrow and body text, `terracotta` CTA + `ghost` secondary button.
- **Footer:** `forest-deep` background, `sand` text, `ivory` headings, logo in ivory tile, `border-white/10` divider.
- **Photo heroes (home, private resort):** photo + left-to-right `forest-deep` gradient (90% → ~12% opacity) and a bottom-up `forest-deep` fade, white headline with a soft dark text-shadow, `sand` eyebrow.
- **Alternating panels:** room cards and room pages alternate `forest` (room "01") and `sand` (room "02") panels.

### Colours that live outside the tokens
These repeat token values as raw hex/rgba and must be updated by hand if the palette changes:
- `src/app/layout.tsx` (`themeColor`) and `src/app/manifest.ts` (`theme_color`, `background_color`): `#183C35`, `#F8F5EF`.
- `src/app/icon.svg`, `public/favicon.svg`: `#183C35`, `#F8F5EF`, `#B86F52`.
- `src/app/globals.css`: `::selection` (`#e8dcc8` / `#183c35`) and `:focus-visible` (`#b86f52`) use hex instead of the variables.
- Shadows: `rgba(24,60,53, 0.05–0.16)` (= `forest`). Hero overlays and `ghost` button: `rgba(16,40,34,…)` / `#102822` (= `forest-deep`). Text shadow: `rgba(8,20,17,0.55)`.

When adding UI, use tokens (`bg-forest-deep/80`, `shadow-forest/10`) rather than adding more raw values.

## Typography

| Role | Font | Weights available | Tailwind |
|---|---|---|---|
| Headings, display, large numbers, tagline | **Cormorant Garamond** (elegant high-contrast serif) | 500, 600, plus italic 500/600 | `font-serif` |
| Body, UI, buttons, labels | **DM Sans** (clean geometric sans) | 400, 500, 600 | `font-sans` (default on `body`) |

- Self-hosted in `public/fonts/` and declared in `public/fonts.css`. Loaded ~3 seconds after page load by `DeferredFonts`; until then, metric-matched Arial fallbacks ("… Fallback" faces in `globals.css`) prevent layout shift. Expect plain-looking headings for the first few seconds — that's intentional.
- Only the weights above exist. Don't use `font-bold`/`font-light` etc. on serif headings; they will be synthesised by the browser.

### Type scale and patterns
- **Hero headline:** `font-serif`, fluid `text-[clamp(3.4rem,8vw,7rem)]`, `leading-[0.92]`, white.
- **Page H1 / big section H2:** `font-serif text-5xl md:text-7xl leading-[1.02] text-forest`.
- **Section H2:** `font-serif text-4xl` (often `md:text-5xl`) `text-forest`.
- **Eyebrow label** (above most headings): `text-xs font-medium uppercase tracking-[0.22em] text-terracotta-deep` (on dark: `text-sand`). Letter-spacing ranges 0.14–0.24em; 0.22em is the default.
- **Lead paragraph:** `text-lg leading-relaxed text-muted`, max width `max-w-xl`/`max-w-2xl`.
- **Numbers as decoration** ("01", "02"): large `font-serif` in `terracotta-deep`, or translucent white/forest on panels.

## Shape, depth and layout

- **Radius:** generous and soft. Cards, forms, images, panels: `rounded-[1.75rem]` (main) or `rounded-[1.5rem]` (smaller cards, gallery photos). Inputs: `rounded-2xl`. Buttons, chips and icon buttons: `rounded-full` (pills/circles). No sharp corners on content blocks.
- **Shadows:** very soft, large and green-tinted — `shadow-[0_18px_50px_rgba(24,60,53,0.06)]` plus `ring-1 ring-black/5`. Never harsh grey drop shadows.
- **Width:** content is centred in `Container` (`max-w-6xl`); generous vertical rhythm (`py-16 md:py-20`, CTA sections `py-20 md:py-28`).
- **Photos:** mostly 4:3 frames with `object-cover`; use `focus`/`fit` classes to keep the subject in frame.

## Buttons and links

`ButtonLink` in `src/components/Buttons.tsx` — pill shape, min height 48px, `font-medium tracking-wide`.

| Variant | Look | Use |
|---|---|---|
| `terracotta` (default) | `terracotta-deep` fill, white text → `terracotta-ink` on hover | Primary action: book / enquire. One per view. |
| `forest` | `forest` fill, ivory text → `forest-soft` | Strong secondary on light backgrounds. |
| `outline` | Transparent with faint forest border → fills `forest` on hover | Secondary on light backgrounds (e.g. "WhatsApp Us" next to "Book Your Stay"). |
| `ghost` | White border, translucent `forest-deep` fill → white on hover | Secondary over photos and dark sections. |
| `ivory` / `sand` | Light fills with forest text | Actions on dark or sand panels. |

`TextLink`: forest (or `sand` when `light`) text with an arrow (→) and an underline that fades in on hover. Header "Book Now" is uppercase with wide tracking. Focus is always visible as a 2px `terracotta` outline.

## Imagery

- Property photos must be **real photos of SHA Stays** (rooms, garden, walkway, night lighting, the sugar gliders). Warm, natural, honest; no stock photos passed off as the property.
- Landmark photos (temple, Kalam Memorial, Pamban Bridge, Dhanushkodi) come from Wikimedia Commons with credits in the footer, and are labelled as showing Rameshwaram, not the stay.
- The hero image is the garden entrance and walkway — the brand's signature visual.
- Write factual, specific `alt` text.
- Technical pipeline (sizes, formats, `npm run images`): see `AGENTS.md` → Images.

## Motion

Minimal and gentle: hero text fades up with `.rise` (+ `rise-delay-1..3`), cards lift slightly on hover (`motion-safe:hover:-translate-y-1`), smooth scrolling. All motion is disabled under `prefers-reduced-motion`. Don't add parallax, carousels or attention-grabbing animation.

## Changing the theme — checklist

1. Edit the token in `@theme inline` in `src/app/globals.css`.
2. Update the raw copies listed in "Colours that live outside the tokens" (theme colour, manifest, icons, selection/focus, shadow/overlay rgba).
3. Re-check contrast for any pair in the table above that you changed.
4. Check the home page, a room page, `/private-resort` and the footer in `npm run dev` (light, dark and photo surfaces all appear there).
