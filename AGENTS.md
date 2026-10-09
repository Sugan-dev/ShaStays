# SHA Stays — guide for AI agents

Marketing website for **SHA Stays**, a six-room boutique stay in Rameshwaram, Tamil Nadu, India (live at https://shastays.com). There is no backend, database, payments or booking engine: every "booking" is an enquiry handed off to WhatsApp (falling back to email).

## Stack

- Next.js 15 App Router, React 19, TypeScript (strict), Tailwind CSS v4 (CSS-first config, no `tailwind.config`).
- **Static export** (`output: "export"`, `trailingSlash: true` in `next.config.ts`). The build emits plain HTML into `out/`, which is deployed to Cloudflare Workers as static assets (see Deployment).
- Only runtime dependencies are `next`, `react`, `react-dom`. `sharp` is a dev dependency used by the image script.
- Path alias: `@/*` → `src/*`.
- Node 22 is what the project is developed with.

## Commands

```bash
npm run dev      # local dev server
npm run build    # static export to out/ (also typechecks and lints)
npm run lint     # next lint (deprecated in Next 16 but works today)
npx tsc --noEmit # typecheck only
npm run images   # regenerate public/images from assets/images (see Images)
```

There is no test suite. Verify changes with `npm run build` and, for UI work, by checking pages in `npm run dev`.

**Never run `npm run build` while a dev server is running.** Both write to `.next/`, and the build corrupts the dev server's output (pages start failing with `Cannot find module './vendor-chunks/...'` or `'./<number>.js'`). Use `npx tsc --noEmit` and `npm run lint` for checks while dev is running. To recover: stop the dev server, `rm -rf .next`, restart it.

The owner runs the dev server with `yarn dev`, but the lockfile is `package-lock.json`; use npm for installing packages. `yarn.lock` is in `.gitignore` and must never be committed: if it is in the repo, Cloudflare builds with Yarn 4, which refuses the Yarn 1 lockfile (`YN0028 The lockfile would have been modified`) and the deploy fails.

To run a production build while the dev server is up, build a copy instead: `rsync -a --exclude node_modules --exclude .next --exclude out --exclude Images --exclude .git ./ /tmp/shastays-build/`, symlink `node_modules` into it, run `npx next build` there and serve its `out/` (e.g. `python3 -m http.server`). Delete the copy afterwards.

## Deployment

Cloudflare Workers Builds, connected to the GitHub repo. Build command `npm run build`, deploy command `npx wrangler deploy`.

- `wrangler.jsonc` deploys `out/` as **static assets only** (no Worker script). It must exist: without it, `wrangler deploy` auto-detects Next.js and tries to set up the OpenNext server adapter, which fails on a static export (`ENOENT ... .next/standalone/.next/server/pages-manifest.json`). Do not add OpenNext or `@opennextjs/cloudflare`.
- Routing: `html_handling: "auto-trailing-slash"` serves `rooms/index.html` at `/rooms/` (and redirects `/rooms` → `/rooms/`); `not_found_handling: "404-page"` serves `out/404.html`.
- `public/_headers` sets the security headers and long-term caching for `/_next/static/*`. Cloudflare ignores `public/.htaccess` (kept for Apache hosting); `public/.assetsignore` stops it from being uploaded.
- Test locally like production: stop the dev server, `npm run build`, then `npx wrangler dev` (serves `out/` on port 8787). Afterwards `rm -rf .next` before restarting `yarn dev`.
- Build variables (Workers & Pages → shastays → Settings → Build → Variables and secrets, **not** the runtime variables): `NEXT_PUBLIC_GA_ID` is set. Variables are read at build time, so changing one needs a redeploy.
- Configured in the Cloudflare dashboard, not in code: **Always Use HTTPS** (SSL/TLS → Edge Certificates) and a Redirect Rule `http*://www.shastays.com/*` → `https://shastays.com/${2}` (301, preserve query string). `http://`, `www` and `http://www` all 301 to `https://shastays.com/`. The `www` and apex DNS records are Worker records and must stay proxied.
- DNS also holds the Google Search Console verification TXT record (the site is verified at the domain level); don't delete it. A DMARC record (`_dmarc` TXT `v=DMARC1; p=none;`) is recommended for the Gmail-based email.

## Layout

```
src/
  app/                 Routes. Each page.tsx is a server component exporting `metadata = pageMeta(...)`.
    layout.tsx         Root: header, footer, mobile action bar, skip link, font preloads, site-wide JSON-LD.
    page.tsx           Home → renders components/HomePage.tsx, preloads hero AVIF.
                       Home order: Hero, TrustBar, Intro, Rooms, PrivateStay, WhySha, Explore, DayAtSha,
                       GalleryPreview, Reviews, Faq, FinalCta (all sections live in HomePage.tsx).
    rooms/, rooms/[slug]/  Room list and per-room pages (generateStaticParams from `rooms`).
    private-resort/    "Private Stay" — book the whole property; renders components/PrivateResortPage.tsx.
    book/, contact/    Both embed <InquiryForm />.
    location/          "Stay near the Abdul Kalam Memorial": address, directions, parking, arrival.
    experience/        "Places to visit in Rameshwaram" (renders `places` with their `details`).
    about/, gallery/, not-found.tsx
    sitemap.ts, robots.ts, manifest.ts   Static (`dynamic = "force-static"`).
    globals.css        Tailwind import + @theme tokens + @font-face + fallbacks + `eyebrow` utility + animations.
  components/          Presentational components. Shared building blocks: `Icon` (inline SVG icon set),
                       `ButtonLink`/`buttonClass`/`TextLink`, `SectionIntro` (eyebrow + h2 + text),
                       `RoomCard` (layout "stack" | "row"), `AmenityList`, `PhotoGrid` (mosaic),
                       `Reviews` (renders `reviews` or an empty state), `FinalCta`, `MobileActionBar`,
                       `Analytics` (GA4 loader + click tracking).
  lib/
    site.ts            SINGLE SOURCE OF TRUTH for content: name, contact, nav, trustBar, reasons, rooms
                       (with `priceFrom`, `maxGuests`), `sharedAmenities` (in every room), `propertyAmenities`
                       (property-wide), `roomSize`, `maxGroupSize`, `languages`, `formatRupees()`, `roomFacts()`,
                       places, dayPlan, reviews, FAQs, galleryPhotos/galleryGroups/homeGallery, photo credits.
    private-resort.ts  Content for the /private-resort page (benefits, steps, package, add-ons, FAQs, vehicle types).
    links.ts           `cx()` classname helper, tel:/wa.me link builders, prefilled WhatsApp messages.
    seo.ts             `pageMeta()` per-page metadata, schema.org graphs (`siteGraph`: WebSite + LodgingBusiness
                       with a HotelRoom per room; `faqGraph`; `breadcrumbGraph`).
    analytics.ts       `gaId`, `trackEvent()` and `linkEvent()` (maps a clicked href to a GA4 event name).
    image-loader.ts    Custom next/image loader that maps widths to pre-generated files.
    image-widths.json  GENERATED by `npm run images`. Do not hand-edit.
assets/images/         Master photos (source of truth for the image pipeline).
public/images/         GENERATED web images (committed, because the host serves `out/` as-is).
public/fonts/          Self-hosted Cormorant Garamond + DM Sans (declared via @font-face in globals.css).
public/llms.txt        Facts for AI crawlers; keep in sync with content (see Content rules).
Images/                Raw, uncurated photos from the owner. Not used by the build; pick from here, edit/crop, then put the result in assets/images.
scripts/optimize-images.mjs   The image pipeline.
```

Client components (`"use client"`) are only: `SiteHeader` (mobile menu, scrolled shadow), `MobileActionBar`, `InquiryForm`, `PrivateStayForm`, `LazyImage`, `Analytics`. Keep everything else as server components.

Navigation labels: Home, Rooms, Private Stay (`/private-resort`), Rameshwaram (`/experience`), Gallery, Contact, plus a "Book Now" button. The `/private-resort` and `/experience` URLs are kept for SEO stability; only the labels changed.

## How things work

### Content
Almost all copy and data lives in `src/lib/site.ts` and `src/lib/private-resort.ts`. Pages and components import from there; change content in those files rather than in JSX. Room pages, the booking form's room dropdown, JSON-LD and FAQs all derive from the same arrays.

### Enquiry forms (no backend)
`InquiryForm` (rooms, used on /book and /contact) and `PrivateStayForm` (/private-resort) build a plain-text message and:
1. open `https://wa.me/<number>?text=...` in a new tab if `contact.whatsapp` is set,
2. else open a `mailto:` if `contact.email` is set,
3. else show the message with a "Copy enquiry" button.

Prefilled WhatsApp messages live in `links.ts`: `whatsappAvailability` (general), `whatsappRoom(name)` (room pages), `whatsappPrivateStay` (group/private stay). Always build links with `whatsappHref(message)`, which URL-encodes the text and uses `contact.whatsapp`.

`MobileActionBar` is a fixed "Book Now | WhatsApp" bar below `lg`. It is hidden on /book and /contact, appears after scrolling past the hero on / and /private-resort, switches to "Get a Quote" on the private stay page and to the room's booking link/message on room pages. The footer has bottom padding on mobile so it is never covered. Because of this bar, the header "Book Now" button only shows from `lg` up (below that it is in the mobile menu); the hero keeps "Book Your Stay" since the bar is hidden over the hero.

`InquiryForm` pre-selects a room from `?room=<slug>` (read on the client in `useEffect`, because static export cannot read search params at build time) and resets itself after the user returns from WhatsApp/email (visibilitychange + bfcache `pageshow`). Every form states that an enquiry does not reserve a room — keep that wording.

### Images
- Add or replace a master in `assets/images/` (any of jpg/png/webp, subfolders allowed), then run `npm run images`. It writes `public/images/<name>.webp` (max 1600px) plus `<name>-640/960/1280.webp` variants smaller than the source, and rewrites `src/lib/image-widths.json`.
- Reference images in code by the **base** path, e.g. `/images/rooms/king-room.webp`. The custom loader picks the right `-<width>` file.
- `WIDTHS` in the script must equal `images.deviceSizes` in `next.config.ts`.
- `assets/images/hero-banner.jpg` is special: it produces `hero-800/1600.avif|webp` for the home and private-resort heroes (rendered with a raw `<picture>`, not next/image) and a 1200px `public/images/hero-banner.jpg` used as the Open Graph image.
- Below-the-fold photos use `LazyImage` (IntersectionObserver wrapper around `next/image` with `fill`; parent must be `relative` with a fixed aspect ratio). Above-the-fold images use `next/image` with `priority`.
- Every image needs a descriptive, factual `alt`. Third-party photos (Wikimedia) need a `credit` entry in `photos` in `site.ts`; credits are listed in the footer.

### SEO
- Every page exports `metadata = pageMeta({ title, description, path })`. `path` is used for the canonical URL (trailing slash is added). `pageMeta` appends " | SHA Stays", so don't put the brand in `title`. The root layout deliberately sets no canonical (it would be inherited by the 404 page).
- One descriptive H1 per page that names the page's subject and "Rameshwaram". On the home and private-stay heroes the small eyebrow line is the H1 and the big tagline ("Stay Close. Feel at Home.", "Your Group. Your Stay. Your SHA.") is a `<p>`; keep it that way.
- Search intent per page: `/` rooms and family stays in Rameshwaram; `/rooms` rooms; `/private-resort` private group stay; `/location` stay near the Abdul Kalam Memorial (address, directions, parking); `/experience` places to visit in Rameshwaram. Strengthen these pages rather than adding near-duplicate landing pages.
- `layout.tsx` injects the site-wide graph: `WebSite` + `LodgingBusiness` (address, geo, phones, `sameAs` incl. Instagram, amenities from `sharedAmenities` + `propertyAmenities`, `priceRange` from the lowest `priceFrom`, `knowsLanguage`) containing one `HotelRoom` per room (`@id` `/rooms/<slug>/#room`, bed, `occupancy` from `maxGuests`, `floorSize` from `roomSize`). `Breadcrumbs` injects a `BreadcrumbList`; home and /private-resort inject `FAQPage` graphs from their visible FAQs. Everything is generated from `site.ts`, so updating a fact there updates the JSON-LD.
- `sitemap.ts` lists static paths by hand, derives room URLs from `rooms`, includes image entries, and has a hardcoded `lastModified` (bump it when content changes).
- `LazyImage` also renders a `<noscript>` image so crawlers that don't run JavaScript still find photos.

### Analytics and verification (optional, build-time env vars)
- `NEXT_PUBLIC_GA_ID` (GA4 measurement ID): when set, `Analytics` loads gtag.js and tracks `whatsapp_click`, `phone_click`, `email_click`, `directions_click`, `booking_cta_click` (link clicks) and `generate_lead` (enquiry form submits, via `trackEvent` in `lib/analytics.ts`). When unset, nothing loads.
- `GOOGLE_SITE_VERIFICATION`: when set, adds the Search Console `google-site-verification` meta tag. **Not needed today**: Search Console is verified through a DNS TXT record (a Domain property covering http/https and www), so leave it unset.
- Status: GA4 is live (`NEXT_PUBLIC_GA_ID` is set as a Cloudflare **build** variable, see Deployment). Google Tag Manager is not used and isn't needed; add it only if a non-developer must manage tags.
- Click events are only counted for real user clicks (`event.isTrusted`), so the forms' programmatic WhatsApp/email opens are counted once, as `generate_lead`. Mark `generate_lead` as a key event in GA4 (Admin → Events) to see enquiries as conversions.
- Never hardcode IDs, and never send names, phone numbers, emails, dates or free text to analytics.

### Styling
Full brand, colour and typography guide (logo usage, palette roles, contrast rules, voice): **`BRANDING.md`**. Summary:

- Tailwind v4 utilities with design tokens defined in `@theme` in `globals.css`: colours `forest`, `forest-deep`, `forest-soft`, `sand`, `sand-deep`, `ivory`, `paper`, `terracotta`, `terracotta-deep`, `terracotta-ink`, `charcoal`, `muted`, `line`; fonts `font-serif` (Cormorant Garamond, headings) and `font-sans` (DM Sans, body).
- Semantic aliases also exist (`primary`, `secondary`, `background`, `surface`, `text`, `border`) plus `rounded-card` (1rem), `rounded-panel` (1.25rem), `shadow-soft` and `shadow-lift`. Use these instead of arbitrary `rounded-[…]`/`shadow-[…]` values.
- Recurring patterns: pill buttons via `ButtonLink` variants (with optional `icon`), the `eyebrow` utility (uppercase tracked label, add a colour such as `text-terracotta-deep`), `SectionIntro` for section headings, `Container` for page width, `PageHero` for inner-page headers, `FinalCta` at the bottom of most pages, icons from `Icon` (never emoji).
- Fonts are declared with `@font-face` in `globals.css` (`font-display: swap`) and the two main files are preloaded in `layout.tsx`; metric-matched Arial fallbacks avoid layout shift. Don't switch to `next/font` without a reason.
- Animations: `.rise` (hero entrance), `.hero-settle` (hero image scale only, so LCP isn't delayed), `.reveal` (scroll-driven fade-up via `animation-timeline: view()`, progressive enhancement). All are disabled under `prefers-reduced-motion`.
- Accessibility is taken seriously: skip link, `aria-current`, labelled icon links, "(opens in a new tab)" sr-only text on external links. Keep it that way.

## Content rules (important)

This is a real business; inaccurate claims are a problem. From `public/llms.txt` and the code comments:

- Facts: 6 rooms = 2 SHA King Rooms + 4 SHA Queen Rooms. Near the Dr. A.P.J. Abdul Kalam Memorial, about 5 km from Ramanathaswamy Temple. Check-in 12:00 PM, check-out 11:00 AM. Free parking for about 4–5 cars. Extra mattress on request, subject to availability. Rooms are 110–120 sq ft. Queen Room from ₹1,800/night and sleeps up to 4; King Room from ₹2,500/night and sleeps up to 5 (both with extra mattresses). Private stay: up to 21 guests. Staff speak Tamil and English. Rooms have power backup; the property has 24-hour CCTV (`propertyAmenities`; never present CCTV as an in-room amenity). These live in `site.ts` (`priceFrom`, `maxGuests`, `roomSize`, `maxGroupSize`, `languages`); change them there.
- **Do not** describe it as beachfront, sea-view or walking distance to the temple. **Do not** invent a pool, restaurant, included meals, reviews, ratings, or prices beyond the confirmed "from" rates. No `Offer` markup for rooms (no live booking engine).
- The private stay package is "price on enquiry"; never show or estimate a price. Meals, sightseeing, transport and late checkout are only "can be discussed/requested". In copy, say "entire property" or "private stay", never "resort". Groups arriving by car or 15–21 seater van are a key audience.
- Reviews: `reviews` in `site.ts` is empty on purpose. Only add genuine guest reviews (with source); `Reviews` then renders them, otherwise it shows "Your stay could be our next story." Never add ratings/reviews to JSON-LD.
- Avoid the words cheap, budget, small rooms, basic, best hotel, luxury resort. Don't oversell.
- Only use photos that are actually of SHA Stays for the property. Leave a field blank rather than guessing: empty contact fields fall back to `/contact` links or placeholder text (`links.ts`), a room without `image` shows a coloured panel, and `privateGallery` slots without `src` render as placeholders.
- Spelling: "Rameshwaram" (site copy), Indian English (`en-IN`).

## Checklists

**Adding a page:** create `src/app/<route>/page.tsx` exporting `metadata = pageMeta(...)`; use `PageHero` (which renders breadcrumbs); add to `nav`/`footerNav` in `site.ts` if it should be linked; add to `sitemap.ts`; add a line to `public/llms.txt`.

**Adding a room type:** add to `rooms` in `site.ts` (slug, photos, confirmed `priceFrom` and `maxGuests`, etc.; `sitemap.ts` and JSON-LD pick it up automatically); add its URL to `llms.txt`; update counts in copy (`trustBar`, `reasons`, `stayFacts`, the homepage Rooms/Private Stay copy in `HomePage.tsx`, gallery text, `numberOfRooms` in `seo.ts`, `llms.txt`). Note the layout assumes two room types: `rooms/[slug]/page.tsx` links to a single "Also at SHA Stays" room, and `RoomCard` / the room page alternate forest vs sand panels via `room.number === "01"`.

**Changing contact details:** edit `contact` in `site.ts`; also update `seo.ts` (address/geo are duplicated there) and `public/llms.txt`.

**Changing prices, occupancy, room size or group size:** edit `priceFrom` / `maxGuests` on the room, `roomSize` or `maxGroupSize` in `site.ts` (room cards, room pages, the private stay page/form and JSON-LD follow). These spots repeat the numbers as plain text and must be edited by hand: the price, families and whole-property answers in `faqs` (`site.ts`), the "Groups of up to 21 guests" highlight in `HomePage.tsx`, the `description`s in `app/rooms/page.tsx` and `app/private-resort/page.tsx`, the group line in `app/rooms/page.tsx`, and `public/llms.txt`. Then bump `lastModified` in `sitemap.ts`.

**Adding an amenity:** in-room items go in `sharedAmenities`, property-wide ones (parking, CCTV, seating) in `propertyAmenities`; add an `Icon` name if needed. Both feed the rooms pages and `amenityFeature` in JSON-LD. Update the amenity lines in `public/llms.txt`.

**Adding photos:** master into `assets/images/...` → `npm run images` → reference `/images/...webp` with good `alt` → commit both `assets/` and the generated `public/images/` + `image-widths.json`.

## Known gaps / TODOs

- No genuine reviews yet (`reviews` is empty).
- `privateGallery` in `private-resort.ts` has placeholder slots without `src` (van arrival, group at entrance, parking, group relaxing) awaiting real group photos.
- `propertyPhotos.entrance` and `propertyPhotos.greenery` in `site.ts` are empty.
- `next lint` is deprecated; migrate to the ESLint CLI before upgrading to Next 16.
- `InquiryForm` accepts an `initialRoom` prop that no caller passes (the `?room=` query param is used instead).
- Off-site, not code: submit `https://shastays.com/sitemap.xml` in Search Console, complete the Google Business Profile with the same name/address/phone, website and photos, and ask past guests for genuine Google reviews.

## Git conventions

Single `main` branch, remote on GitHub (`Sugan-dev/ShaStays`). Commit messages are imperative, sentence-case summaries (e.g. "Add Private Stay page for booking the entire resort") with an optional body explaining what and why. `out/`, `.next/`, `node_modules/` and `yarn.lock` are ignored; generated `public/images/` is committed. Every push to `main` triggers a Cloudflare build and deploy.
