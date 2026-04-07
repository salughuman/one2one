---
inclusion: always
---

# One2One — Development Standards

All code written for this project must comply with the following files at all times:

- `design-system.md` — visual language, tokens, components, motion, layout
- `content-intrustions.md` — brand voice, copy rules, forbidden words, CTA language
- `seo-aeo.md` — metadata, schema, AEO summary, robots, sitemap, llms.txt rules

## Non-Negotiable Rules

### Design
- Dark theme only. Background is always #131313. No light surfaces.
- Font stack: Inter (headlines), Manrope (body), Space Grotesk (labels/UI)
- Colors from the Tailwind token map only — no arbitrary hex outside the design system
- font-black (900) only on hero H1 and section H2
- rounded-lg max on cards and buttons. No rounded-xl or larger.
- All animations use CSS only. No JS animation libraries.
- prefers-reduced-motion must be respected on every animation.

### Content
- Never use forbidden words: cheap, bargain, budget, deal, unbeatable, hurry, best in class, monster, insane, beast
- Vehicle pricing: show exact price or "Price on Request" — never invented rates
- Leasing: always described as tailored — never with invented monthly rates
- CTAs: Browse the Collection / View All Inventory / Enquire Now / Request Details / Contact One2One
- Navigation order: Inventory → Heritage → Atelier → Journal

### SEO / AEO
- `AEOHeader` must remain the first child of `<main>` on the homepage — never remove or gate it
- `<link rel="llms">` and `<link rel="llms-full">` must remain in `<head>` on every page
- `/public/llms.txt` and `/public/llms-full.txt` must never be deleted
- All canonical URLs must point to `https://one2one.be`
- robots.ts must always allow GPTBot, ClaudeBot, PerplexityBot, Google-Extended
- Every page must have a unique title (max 60 chars, includes "One2One") and description (max 155 chars)
- JSON-LD schema must remain present and valid on homepage, collection, contact pages
- Visually complex sections must include `sr-only` summaries
- Contact details must remain crawlable as real text — not only icons or images

### When business info changes
Update in the same commit: llms.txt, llms-full.txt, AEOHeader, metadata, schema, sitemap
