One2One — Design System
Single source of truth for the One2One web platform. Every value connects to the Tailwind config. Every token maps to a specific element. Every component is reusable and brand-consistent.

---

1. Foundation

Property | Value
--- | ---
Brand | One2One
Location | Antwerp, Belgium
Theme | Dark Elevation
Framework | Next.js + Tailwind CSS
Font delivery | Google Fonts (Inter, Manrope, Space Grotesk)
JS philosophy | Minimum. JS only for: IntersectionObserver triggers, mobile menu toggle, form validation. Everything else is CSS.
Animation philosophy | CSS @keyframes for all complex animations. IntersectionObserver for scroll-triggered entrances only. No animation libraries.

Principles
- Token-driven — every value from the Tailwind config color map
- Dark-first — background is always #131313, never inverted to light
- Component-based — reusable components for buttons, cards, nav, section headers
- 0px radius default — rounded corners only where explicitly specified (rounded-lg on cards/buttons per design)
- No bold abuse — font-black (900) reserved for hero/display headlines only; body max 500
- Automotive-first visual language — cinematic, restrained, editorial
- Crosshair cursor globally on non-interactive elements

---

2. Fill (Colours)

All tokens map directly to the Tailwind config `colors` object.

Surface Fills
Token | Tailwind | Hex | Used On
--- | --- | --- | ---
surface | bg-surface | #131313 | Page background, default sections
surface-container | bg-surface-container | #20201F | Cards, panels, secondary sections
surface-container-low | bg-surface-container-low | #1C1B1B | Brand banner, media sections, footer
surface-container-high | bg-surface-container-high | #2A2A2A | Higher elevation containers
surface-container-highest | bg-surface-container-highest | #353535 | Highest elevation, hover states
surface-bright | bg-surface-bright | #393939 | Active/focused surfaces
surface-dim | bg-surface-dim | #131313 | Dimmed overlays (same as surface)
surface-container-lowest | bg-surface-container-lowest | #0E0E0E | Deepest background, footer base

Content Fills (Text)
Token | Tailwind | Hex | Used On
--- | --- | --- | ---
on-surface | text-on-surface | #E5E2E1 | Primary body text, nav links
on-background | text-on-background | #E5E2E1 | Headings, primary text (same as on-surface)
on-surface-variant | text-on-surface-variant | #E4BEB4 | Warm accent text, hover states
secondary | text-secondary | #CBC6B8 | Supporting text, muted descriptions
on-secondary-container | text-on-secondary-container | #B9B5A7 | Muted labels on secondary containers
tertiary | text-tertiary | #C8C6C6 | Neutral supporting text
outline | text-outline | #AB8980 | Warm border/divider tone
outline-variant | — | #5B4039 | Subtle warm borders

Accent / Brand Fills
Token | Tailwind | Hex | Used On
--- | --- | --- | ---
primary | text-primary / bg-primary | #FFB5A0 | Surface tint, warm accent
primary-container | bg-primary-container | #FF5724 | Primary CTAs, active nav, badges, newsletter bg
on-primary-container | text-on-primary-container | #541100 | Text on primary-container surfaces
primary-fixed | — | #FFDBD1 | Fixed primary tint
primary-fixed-dim | — | #FFB5A0 | Dimmed primary fixed
inverse-primary | — | #B12E00 | Inverse primary accent
on-primary | text-on-primary | #601500 | Text on primary bg

Secondary / Neutral Fills
Token | Tailwind | Hex | Used On
--- | --- | --- | ---
secondary-container | bg-secondary-container | #49473C | Secondary card backgrounds
on-secondary | text-on-secondary | #323126 | Text on secondary surfaces
secondary-fixed | — | #E7E2D3 | Fixed secondary tint
secondary-fixed-dim | — | #CBC6B8 | Dimmed secondary fixed

Tertiary Fills
Token | Tailwind | Hex | Used On
--- | --- | --- | ---
tertiary-container | bg-tertiary-container | #929090 | Tertiary containers
on-tertiary-container | text-on-tertiary-container | #2A2A2A | Text on tertiary containers
on-tertiary | text-on-tertiary | #303030 | Text on tertiary surfaces

Status / Error Fills
Token | Hex | Used On
--- | --- | ---
error | #FFB4AB | Error states
error-container | #93000A | Error container backgrounds
on-error | #690005 | Text on error
on-error-container | #FFDAD6 | Text on error containers

Overlay / Scrim
Usage | Value
--- | ---
Hero image overlay | bg-black/40 (z-10)
Hero gradient | bg-gradient-to-r from-background via-transparent to-transparent, opacity-80
Card hover gradient | bg-gradient-to-t from-black/60 via-transparent to-transparent
Navbar bg | bg-[#131313]/60 + backdrop-blur-xl
Brand banner opacity | opacity-40 (default), hover removes grayscale

---

3. Typography

Font Stack
Role | Font | Weight Range | Variable | Used On
--- | --- | --- | --- | ---
Headline / Display | Inter | 400–900 | font-headline | Hero H1, section H2, card H3, logo
Body | Manrope | 400–600 | font-body | Paragraphs, descriptions, supporting copy
Label / UI | Space Grotesk | 300–700 | font-label | Nav links, buttons, badges, metadata, captions

Delivery: Google Fonts with `display=swap`. Body default set on `<body>`.

Letter Spacing
Token | Value | Used On
--- | --- | ---
tracking-tighter | -0.05em | Hero H1, logo wordmark
tracking-tight | -0.025em | Section H2 headings
tracking-widest | 0.3em–0.4em | Labels, nav links, buttons, badges (uppercase)
tracking-[0.2em] | 0.2em | Footer links, micro-metadata
tracking-[0.3em] | 0.3em | Section labels, scroll indicator

Type Scale
Class | Font | Size | Weight | Line Height | Tracking | Element
--- | --- | --- | --- | --- | --- | ---
.type-hero | Inter | text-6xl / text-8xl | 900 (font-black) | leading-tight | tracking-tighter | Hero H1
.type-h2 | Inter | fluid-h2 (clamp 2rem–3rem) | 900 (font-black) | leading-none | tracking-tighter | Section headings
.type-h3 | Inter | text-2xl / text-3xl | 700 (font-bold) | 1.2 | default | Card headings, media titles
.type-body | Manrope | text-lg / text-xl | 400 | leading-relaxed | 0 | Hero supporting copy
.type-body-sm | Manrope | base | 400 | leading-relaxed | 0 | Card descriptions, body paragraphs
.type-label | Space Grotesk | text-xs | 400–700 | 1.4 | tracking-widest | Nav, buttons, badges, metadata
.type-micro | Space Grotesk | text-[10px] | 400–700 | 1.4 | tracking-[0.2em]–[0.4em] | Footer, micro-labels, scroll indicator
.type-logo | Inter | text-2xl / text-lg | 900 (font-black) | — | tracking-tighter | Navbar + footer wordmark

Weight Rules
- 900 (font-black) — hero headlines, section H2, logo wordmark only
- 700 (font-bold) — card H3, newsletter H2, CTA button labels
- 600 (font-semibold) — subscribe button, selected emphasis
- 500 (font-medium) — general label weight
- 400 (font-normal) — body, descriptions, supporting copy
- Never use font-bold (700) on body paragraphs

---

4. Layout

Breakpoints
Name | Value | Target
--- | --- | ---
sm | 390px | Mobile
md | 810px | Tablet
lg | 1200px | Desktop
xl | 1920px | Wide (max-w-[1920px] on nav/footer)

Container
Token | Class | Value
--- | --- | ---
layout/container | container mx-auto | Tailwind default, centered
layout/container-padding | px-8 | 32px horizontal padding (all sections)
layout/container-max-wide | max-w-[1920px] mx-auto | Navbar and footer only

Section Spacing
Token | Class | Value
--- | --- | ---
spacing/section-standard | py-32 | 128px top/bottom (Featured Inventory, Media, Newsletter)
spacing/section-compact | py-24 | 96px top/bottom (Newsletter CTA)
spacing/section-banner | py-16 | 64px top/bottom (Brand Banner)
spacing/section-footer | py-16 | 64px top/bottom (Footer)
spacing/nav | py-6 | 24px top/bottom (Navbar)

Hero
- Full viewport: h-screen w-full
- Content grid: grid-cols-1 md:grid-cols-12, content in md:col-span-8 lg:col-span-6
- Headline bottom margin: mb-8
- Supporting copy bottom margin: mb-12
- CTA group: flex flex-wrap gap-6

Card Grid
- Featured Inventory: grid grid-cols-1 md:grid-cols-2 gap-12
- Media / Press: grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16
- Card image: aspect-[16/9] (inventory), aspect-[4/3] (media)

Gap Scale
gap-4 (16px) · gap-6 (24px) · gap-8 (32px) · gap-10 (40px) · gap-12 (48px) · gap-16 (64px)
All on 8px base grid.

---

5. Effects

Radius
Default: 0px everywhere — no rounded corners on any element.
Exception: none. rounded-full and rounded-lg are forbidden.
This is enforced globally in globals.css with border-radius: 0 on *.


Shadows
- Navbar: shadow-2xl shadow-black/20
- Primary CTA button: shadow-xl shadow-primary-container/20
- Media cards: shadow-2xl (on image container)
- Prefer shadow over border on dark surfaces

Blur
- Navbar: backdrop-blur-xl
- Ghost button: backdrop-blur-sm
- No blur on other elements

Grain Overlay
Not present in current design. Do not add unless explicitly requested.

Cursor
- Global: default (not crosshair — dark luxury theme)
- Cards with cursor-pointer: group cursor-pointer
- Interactive elements: cursor-pointer

Image Overlays
- Hero: absolute inset-0 bg-black/40 (base) + gradient-to-r from-background
- Card hover: absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent, opacity-0 → opacity-100 on group-hover
- Brand banner: opacity-40 grayscale, hover:grayscale-0 transition-all duration-1000

---

6. Motion

Entrance Animation (.motion-reveal)
Property | Value
--- | ---
Class | .motion-reveal
Easing | cubic-bezier(0.16, 1, 0.3, 1)
Duration | 600ms
Start | opacity: 0 + translateY(20px) + blur(8px)
End | opacity: 1 + translateY(0) + blur(0)
Trigger | CSS animation (forwards), stagger via delay classes

Stagger Classes
Class | Delay | Used On
--- | --- | ---
.stagger-1 | 80ms | Second element in sequence
.stagger-2 | 160ms | Third element
.stagger-3 | 240ms | Fourth element

Hover — Cards
Property | Value
--- | ---
Image scale | group-hover:scale-105
Duration | duration-1000 (inventory), duration-[1500ms] (media)
Heading color | group-hover:text-orange-500 (inventory), group-hover:text-primary-container (media)
Overlay | opacity-0 → opacity-100, duration-700

Hover — Buttons
Property | Value
--- | ---
Primary CTA | hover:-translate-y-1, transition-all duration-500
Ghost CTA | hover:bg-[#E4DFD0]/10, transition-all duration-500
Nav links | hover:text-[#E4DFD0], transition-colors
Footer links | hover:text-orange-500, transition-colors

Hover — Brand Banner
Property | Value
--- | ---
Default | opacity-40 grayscale
Hover | grayscale-0, transition-all duration-1000

Scale interactions
- Navbar CTA button: scale-95 default, active:scale-90

Fluid Typography
- .fluid-h2: font-size clamp(2rem, 5vw, 3rem) — section H2 headings
- .fluid-quote: font-size clamp(1.125rem, 2vw, 1.25rem) — pull quotes

Reduced Motion
@media (prefers-reduced-motion: reduce) {
  * { animation: none !important; transition: none !important; }
}
Non-negotiable.

GPU Rule
Only animate transform + opacity + filter(blur). Never height, width, top, left.

---

7. Component System

7.1 — Navbar
- Position: fixed top-0 w-full z-50
- Background: bg-[#131313]/60 backdrop-blur-xl shadow-2xl shadow-black/20
- Max width: max-w-[1920px] mx-auto
- Padding: px-8 py-6
- Logo: font-headline font-black text-2xl tracking-tighter text-[#E4DFD0] uppercase
- Nav links: font-label uppercase tracking-widest text-xs, default text-[#E4DFD0]/70, active text-orange-500 border-b-2 border-orange-500 pb-1
- Primary CTA: bg-primary-container text-on-primary-container, font-label uppercase tracking-widest text-xs, px-6 py-3 rounded-lg, scale-95 active:scale-90
- Mobile menu icon: material-symbols-outlined, hover:bg-[#353535]/50 rounded-lg

Nav items (in order): Inventory · Heritage · Atelier · Journal

7.2 — Hero Section
- Layout: h-screen relative, image fills absolute inset-0
- Image: w-full h-full object-cover, fetchpriority="high"
- Overlays: bg-black/40 (z-10) + gradient-to-r from-background (z-20, opacity-80)
- Content: relative z-30, grid md:grid-cols-12
- H1: font-headline font-black text-6xl md:text-8xl text-[#E4DFD0] leading-tight tracking-tighter uppercase
- Supporting copy: font-body text-lg md:text-xl text-[#E4DFD0]/80 max-w-lg leading-relaxed
- Primary CTA: bg-primary-container text-on-primary-container, font-label uppercase tracking-widest px-8 py-4 rounded-lg text-sm, shadow-xl shadow-primary-container/20, hover:-translate-y-1 duration-500
- Ghost CTA: border border-[#E4DFD0]/20 backdrop-blur-sm text-[#E4DFD0], font-label uppercase tracking-widest px-8 py-4 rounded-lg text-sm, hover:bg-[#E4DFD0]/10 duration-500
- Scroll indicator: writing-mode vertical-rl, font-label text-[10px] tracking-[0.3em] text-[#E4DFD0]/40 + gradient line

7.3 — Brand Banner
- Background: bg-surface-container-low py-16 border-y border-[#353535]/10
- Content: flex flex-wrap justify-between items-center gap-12
- Default state: opacity-40 grayscale
- Hover state: hover:grayscale-0 transition-all duration-1000
- Brand names: font-headline font-extrabold text-2xl text-[#E4DFD0] tracking-tighter uppercase
- Brands shown: PORSCHE · FERRARI · LAMBORGHINI · BENTLEY · ASTON MARTIN

7.4 — Section Header (Featured Inventory / Media)
Pattern: label → heading → optional link (right-aligned on md+)

Label: font-label text-orange-600 (inventory) / text-primary-container (media), text-xs uppercase tracking-[0.3em] mb-4 block
H2: font-headline font-black text-5xl text-[#E4DFD0] tracking-tight uppercase (inventory) / text-5xl md:text-6xl tracking-tighter leading-none (media)
View all link: font-label text-xs uppercase tracking-widest border-b border-orange-600 pb-1 text-orange-600

7.5 — Inventory Card
- Container: group cursor-pointer
- Image: aspect-[16/9] overflow-hidden rounded-lg, group-hover:scale-105 duration-1000
- Badge (New Arrival): bg-orange-600 text-white font-label text-[10px] uppercase tracking-widest px-3 py-1 rounded, absolute top-6 left-6
- Badge (Consignment): bg-[#353535]/80 backdrop-blur-md text-white, same sizing
- Title: font-headline font-bold text-2xl text-[#E4DFD0], group-hover:text-orange-500 transition-colors
- Specs row: flex gap-4 text-[#E4DFD0]/50 font-label text-xs uppercase tracking-widest
- Price: text-[#E4DFD0] font-label text-lg
- Layout: flex justify-between items-start (title+specs vs price)

Vehicle spec format: YEAR · BHP · ENGINE (e.g. 2024 · 520 BHP · 4.0L FLAT-6)
Pricing: Show exact price (€284,000) or "Inquire" — never "Price on Request" in card format

7.6 — Media / Press Card
- Container: group, motion-reveal + stagger class
- Image: aspect-[4/3] overflow-hidden rounded-lg shadow-2xl, group-hover:scale-105 duration-[1500ms]
- Hover overlay: absolute inset-0 bg-gradient-to-t from-black/60, opacity-0 → group-hover:opacity-100 duration-700
- Source label: font-label text-[10px] uppercase tracking-[0.2em] text-primary-container font-bold
- Title: font-headline font-bold text-2xl md:text-3xl text-[#E4DFD0], group-hover:text-primary-container duration-300
- Description: font-body text-[#E4DFD0]/60 leading-relaxed max-w-lg

7.7 — Newsletter / CTA Block
- Outer: py-24 bg-surface
- Inner: bg-primary-container rounded-lg p-16, flex flex-col md:flex-row items-center justify-between gap-8, relative overflow-hidden
- H2: font-headline font-black text-4xl text-on-primary-container uppercase
- Body: font-body text-on-primary-container/80
- Input: bg-on-primary-container/10 border-transparent text-on-primary-container placeholder:text-on-primary-container/50, font-label text-xs uppercase tracking-widest px-6 py-4 min-w-[300px] rounded-lg
- Button: bg-on-primary-container text-primary-container font-label text-xs uppercase tracking-widest px-10 py-4 rounded-lg font-bold
- Decorative icon: material-symbols-outlined text-[300px] opacity-10, absolute right-0 top-0 translate-x-1/4 -translate-y-1/4

7.8 — Footer
- Background: bg-[#131313] border-t border-[#353535]/10
- Layout: flex flex-col md:flex-row justify-between items-center px-12 py-16, max-w-[1920px] mx-auto
- Logo: font-headline font-bold text-lg text-[#E4DFD0] uppercase tracking-tighter
- Copyright: font-label text-[10px] uppercase tracking-[0.2em] text-[#E4DFD0]/40
- Links: font-label text-[10px] uppercase tracking-[0.2em] text-[#E4DFD0]/40, hover:text-orange-500 transition-colors
- Social icons: material-symbols-outlined text-[#E4DFD0]/40, hover:text-orange-500 transition-colors

Footer links: Privacy · Terms · Dealer Network · Press Kit

---

8. Section Background Rhythm

Section | Surface Token | Hex | Role
--- | --- | --- | ---
Navbar | bg-[#131313]/60 | #131313 at 60% | Fixed, blurred
Hero | bg-surface | #131313 | Full viewport, image bg
Brand Banner | bg-surface-container-low | #1C1B1B | Subtle lift
Featured Inventory | bg-surface | #131313 | Default
Media / Press | bg-surface-container-low | #1C1B1B | Alternating
Newsletter CTA | bg-surface | #131313 | Default, inner block is primary-container
Footer | bg-[#131313] | #131313 | Base

Rhythm rule: alternate surface ↔ surface-container-low between major sections. Never use light surfaces. The newsletter inner block (bg-primary-container #FF5724) is the only high-contrast accent section.

---

9. Content & Copy Rules (from content-instructions.md)

Navigation order: Inventory → Heritage → Atelier → Journal (maps to: Collection → Leasing → Delivered → Contact)

CTA copy — approved:
- Browse the Collection
- View All Inventory
- Our Heritage
- Inquire Now
- Request Details
- Contact One2One

CTA copy — forbidden:
- Buy Now · Get Discount · Shop Deals · Start Saving · Claim Offer

Heading length limits:
- H1 hero: max 8 words, uppercase, cinematic
- H2 section: max 12 words, uppercase
- Card H3: concise, factual, model-first

Vehicle card copy rules:
- Format: Brand + Model name as H3
- Specs: Year · BHP · Engine config (uppercase, dot-separated)
- Price: exact (€284,000) or "Inquire" — never invented rates
- Badges: "New Arrival" or "Consignment" only — no "Hot Deal", "Reduced", etc.

Forbidden words (never use in any copy):
cheap · bargain · budget · low-cost · deal of the day · unbeatable prices · massive stock · hurry now · best in class · world-class · cutting-edge · disrupt · game-changer · next-level · monster · insane · crazy fast · beast · head-turner

---

10. Accessibility

Requirement | Implementation
--- | ---
Semantic HTML | header, nav, main, section, footer
Landmarks | aria-label on every section and nav
Skip link | First focusable → "Skip to main content"
Focus | outline: 2px solid #FF5724 (primary-container), outline-offset: 2px
Keyboard | All interactive via Tab. No traps.
Contrast | Dark theme: verify on-surface (#E5E2E1) on surface (#131313) ≥ 4.5:1
Forms | Visible label or placeholder on every input (newsletter input uses placeholder)
Images | data-alt attributes present — implement as proper alt text in production
Motion | prefers-reduced-motion kills all animation
Tap targets | ≥44×44px mobile

---

11. Performance

Metric | Target | Floor
--- | --- | ---
Desktop Performance | ≥95 | 90
Mobile Performance | ≥90 | 85
Accessibility | 100 | 100
SEO | 100 | 100
CLS | ≤0.05 | ≤0.1
FCP | ≤1.2s | ≤1.8s
LCP image | loading="eager" fetchpriority="high" | Hero image only
Below fold | loading="lazy" | All other images
Image format | .webp / .avif | No JPEG/PNG in production
Video | Muted autoplay only, poster required | —

---

12. Forbidden UI Patterns

- Light backgrounds or light theme anywhere
- Generic 3-column icon grids
- Rounded corners > rounded-lg (no rounded-xl or rounded-2xl on cards)
- Template-style hero (centred text + stock image + gradient only)
- Carousels without UX justification
- "Read More" links
- Chat widgets or popups in initial build
- Auto-playing video with sound
- font-bold (700) on body text
- Bargain / urgency / discount copy
- Fixed pricing language unless confirmed per vehicle
- Invented leasing rates or monthly payment claims
- Orange (#FF5724 / primary-container) used as a background on full sections — only for CTAs, badges, and the newsletter inner block

---

13. File Structure

src/
├── styles/
│   ├── design-tokens.json     ← all color/spacing values
│   └── global.css             ← base styles, .motion-reveal, .fluid-h2, keyframes
├── components/
│   ├── ui/
│   │   ├── Button.tsx         ← primary, ghost, ghost-dark variants
│   │   ├── Badge.tsx          ← New Arrival, Consignment, Press label
│   │   ├── SectionHeader.tsx  ← label + H2 + optional right-side link
│   │   └── VehicleCard.tsx    ← inventory card (image, badge, title, specs, price)
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── BrandBanner.tsx
│   ├── FeaturedInventory.tsx
│   ├── MediaSection.tsx
│   ├── NewsletterCTA.tsx
│   └── Footer.tsx
├── layouts/
│   └── BaseLayout.tsx
└── pages/
    ├── index.tsx
    ├── inventory/
    │   ├── index.tsx          ← collection listing
    │   └── [slug].tsx         ← vehicle detail
    ├── heritage.tsx
    ├── atelier.tsx
    ├── journal/
    │   └── index.tsx
    └── contact.tsx

---

14. Quality Gate

[ ] Dark theme only — no light surfaces
[ ] All color values from token map — no arbitrary hex outside the table
[ ] font-black (900) only on hero H1 and section H2
[ ] font-body (Manrope) on all paragraphs and descriptions
[ ] font-label (Space Grotesk) on all buttons, nav, badges, metadata
[ ] Images use proper alt text (not data-alt) in production
[ ] Hero image: fetchpriority="high" loading="eager"
[ ] All below-fold images: loading="lazy"
[ ] All sections have aria-label
[ ] prefers-reduced-motion on every animation
[ ] Max one primary CTA per viewport
[ ] No forbidden copy (bargain, discount, urgency language)
[ ] Vehicle pricing: exact price or "Inquire" only
[ ] Badges: "New Arrival" or "Consignment" only
[ ] Border radius 0px everywhere — no rounded-* classes anywhere
[ ] motion-reveal + stagger classes on scroll-triggered sections
[ ] GPU rule: only animate transform + opacity + filter
[ ] Newsletter CTA uses primary-container (#FF5724) inner block only
[ ] Footer and navbar use max-w-[1920px] mx-auto
[ ] Reusable components used (Button, Badge, SectionHeader, VehicleCard)
