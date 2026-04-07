One2One — SEO & AEO Instructions
AI discovery, structured data, metadata, robots, canonical control, and search optimisation rules for the Next.js build. This file is non-negotiable. Every rule here must be maintained regardless of redesigns, refactors, route changes, UI rebuilds, or CMS migrations.

1. AI Discovery Files
Required Files
File	Location	Purpose
llms.txt	/public/llms.txt	Short AI-readable brand summary: who One2One is, where it is based, what it offers, and the key URLs
llms-full.txt	/public/llms-full.txt	Full AI-readable profile: boutique positioning, Antwerp showroom identity, collection, leasing, contact flow, and pricing language
Required Content Rules
Both files must:

be written in the One2One brand voice
use “We” / “One2One” / “Our collection” / “Our team”
describe One2One as a luxury car boutique in Antwerp
mention the curated collection
mention leasing for businesses and individuals
mention that most vehicle pricing is Price On Request
include the most important pages:
homepage
collection
leasing
contact
reflect the live business model at all times
Update Rule
If brand positioning, contact details, collection structure, leasing model, or public pricing language changes, update both llms.txt and llms-full.txt immediately in the same commit.

Deletion Rule
Never delete these files.
Never leave stale business information in them.

2. Head Discovery Links
These link tags must exist in the document head on every page:

Copy<link rel="llms" href="/llms.txt" />
<link rel="llms-full" href="/llms-full.txt" />
Next.js Rule
Because the site is being built in Next.js, these discovery links must be preserved in the root head output used by the App Router. If the root layout or head implementation is rebuilt, these links must be carried forward exactly.

Non-Negotiable Rule
Never remove these tags.
They are required for AI discovery.

3. Homepage AEO Executive Summary
A visually hidden executive summary must appear as the first <section> inside <main> on the homepage. This is the first structured homepage text that AI crawlers and non-visual parsers should encounter.

Required Component
Recommended component name: components/seo/AEOHeader.tsx

Required Placement
homepage only
first child of <main>
always rendered server-side
never gated behind animation, tabs, or client-only logic
Required Example
Copy<section aria-label="Executive Summary" className="sr-only">
  <p>
    <strong>One2One</strong> is a luxury car boutique based in
    <strong> Antwerp</strong>, Belgium, offering a curated collection of
    exceptional vehicles alongside tailored <strong>leasing</strong> solutions
    for both <strong>businesses</strong> and <strong>individuals</strong>.
    From our showroom at <strong>Noorderlaan 121</strong>, we present
    high-end, performance, and collector vehicles with pricing typically
    available on request, supported by direct personal contact and a
    discreet, premium client experience.
  </p>
</section>
Required Highlight Terms
Use <strong> on:

One2One
Antwerp
leasing
businesses
individuals
Noorderlaan 121
Update Rule
If the showroom address, leasing offer, or positioning changes, update this summary in the same commit as the content change.

Removal Rule
Never remove or comment out this section.

4. Metadata Architecture in Next.js
Next.js supports metadata centrally through the App Router using metadata and generateMetadata, with inheritance and merging across layouts and pages. Use that system as the single source of truth for SEO metadata. Next.js

Root Metadata
The root layout must define:

metadataBase = https://one2one.be
default title format
default description fallback
default Open Graph settings
default Twitter card settings
default icons
canonical base behavior
Route-Level Metadata
Each major route must define its own metadata through generateMetadata or route-level metadata exports:

/
/collection-page
/collection-page/Avalaible or its corrected equivalent if renamed
individual vehicle pages
/contact
leasing page if added or separated
Canonical Rule
All canonicals must resolve to: https://one2one.be

Never use:

staging URLs
preview deployment URLs
localhost
duplicate query-string canonicals unless intentionally indexed
Metadata Rules
Every indexable page must have:

unique <title>
unique meta description
canonical URL
Open Graph title
Open Graph description
Open Graph image
Twitter card
correct robots behavior
5. Schema / JSON-LD
Next.js recommends rendering JSON-LD as a native <script type="application/ld+json"> in layouts or pages, with the payload sanitized before output. nextjs.org

Required Implementation
Recommended component: components/seo/Schema.tsx

Use native JSON-LD script output on:

homepage
collection page
contact page
leasing page
every individual vehicle page
Core Schema Strategy
Sitewide / Homepage Schema
Primary top-level type: AutoDealer

Also include:

name: One2One
url: https://one2one.be
image
telephone
email where appropriate
full postal address
addressLocality: Antwerpen / Antwerp
addressCountry: Belgium
areaServed: Belgium + nearby/international service area only if accurate
sameAs only if confirmed social profiles exist
hasOfferCatalog
Required Offer Catalog Structure
Maintain hasOfferCatalog at all times with these top-level groups:

Curated Collection

luxury cars
performance cars
collector vehicles
available cars
delivered cars
Leasing Solutions

private leasing
business leasing
tailored vehicle proposals
Client Contact & Enquiry

showroom enquiries
vehicle detail requests
appointment requests
Do not flatten this structure into a single generic services list.

Pricing Rule in Schema
Because the current site consistently uses Price On Request on collection listings, do not fabricate price, lowPrice, or highPrice values for vehicles unless verified. Source Source

If price is unknown:

omit numeric price fields
keep the offer descriptive
use availability and enquiry intent instead
Vehicle Page Schema
Every individual vehicle detail page should include:

Car or product-equivalent vehicle schema
model name
brand
mileage if shown
transmission
engine / cylinder / power if shown
image
URL
availability status if known
Offer only when the data is real and complete
Contact Page Schema
Include:

AutoDealer
ContactPoint
named contacts only if publicly displayed on the page
address
telephone
email
Validation Rule
All schema must pass:

Schema Markup Validator
Rich Results testing where applicable
Removal Rule
Never remove JSON-LD entirely from the project.

6. Robots and Crawl Directives
Next.js Location
Use: app/robots.ts

Next.js supports generating a robots.txt file from robots.ts in the App Router. nextjs.org

Required Rules
Robots output must allow standard crawling of the public site.

Minimum intent:

allow public pages
allow major AI crawlers
expose sitemap location
Required User Agents
Maintain explicit access for:

*
GPTBot
ClaudeBot
PerplexityBot
Google-Extended
Example Intent
public pages: allowed
admin, preview, internal endpoints: disallowed if they exist
sitemap declared
Sitemap Declaration
Must reference: https://one2one.be/sitemap.xml

Non-Negotiable Rule
Never block AI crawlers by default.
Only add new user agents over time.
Do not remove existing allowed AI agents unless there is a legal or business directive.

7. Sitemap
Next.js Location
Use: app/sitemap.ts

Required Inclusion
The sitemap must include:

homepage
collection page
contact page
leasing page if public
all public vehicle detail pages
any future brand/category pages intended for indexing
Exclusion Rule
Do not include:

preview pages
filtered duplicate URLs
internal-only routes
non-canonical parameterized pages
Freshness Rule
If vehicle detail pages are generated dynamically, the sitemap must stay in sync with live indexable inventory URLs.

8. Meta, Open Graph, and Social Cards
Required Per-Page Metadata
Tag	Requirement
<title>	Max 60 characters, includes “One2One”
description	Max 155 characters, unique, keyword + value
openGraph.title	Same as title or slightly adapted
openGraph.description	Same as description or slightly adapted
openGraph.url	Canonical URL
openGraph.images	Valid 1200×630 image preferred
twitter.card	summary_large_image
alternates.canonical	Full canonical URL
icons	.ico, .svg, and Apple touch icon where available
Title Rules
All titles must include One2One.

Preferred patterns:

Luxury Cars in Antwerp | One2One
Curated Collection | One2One
Contact One2One | Luxury Car Boutique Antwerp
[Vehicle Name] | One2One
Description Rules
Descriptions must:

be unique
mention Antwerp where relevant
reflect boutique / luxury / curated positioning
mention leasing only where relevant
avoid keyword stuffing
OG Image Rules
Every key route needs a valid Open Graph image. If route-specific OG images are created, they must reflect:

premium automotive positioning
clean typography
consistent One2One branding
Never leave broken OG image URLs in metadata.

9. Page-Specific SEO Rules
Homepage
Must target:

luxury cars Antwerp
exclusive car boutique Antwerp
luxury showroom Belgium
Must include:

One2One
Antwerp
curated collection
leasing
contact path
Collection Page
Must target:

curated car collection
luxury cars Antwerp
exotic cars Belgium
available luxury cars
Must clearly differentiate:

collection overview
available vehicles
delivered vehicles if publicly listed
Vehicle Detail Pages
Must target:

brand + model
Antwerp / Belgium context where natural
descriptive factual metadata only
Do not invent:

rarity claims
valuation claims
provenance
“best price” language
Contact Page
Must target:

contact One2One
luxury car showroom Antwerp
vehicle enquiry Antwerp
Must contain crawlable plain-text contact information, not only icons or images. The current contact page includes address, main number, named contacts, and direct emails; this should remain text-readable. Source

Leasing Page
Must target:

car leasing Antwerp
luxury car leasing Belgium
business and private leasing
Must frame leasing as tailored and premium, not discount-led.

10. sr-only Summaries for Visual Sections
Any section that is primarily visual or interaction-led must include a visually hidden summary for AI crawlers, accessibility tools, and text-based indexing.

Required For
image-led showroom carousels
inventory grids
tabbed collection filters
comparison modules
timeline/process sections
map embeds
testimonial sliders
animated metrics
hero sections with image-first storytelling
Example
Copy<p class="sr-only">
  One2One presents a curated collection of luxury, performance, and collector
  vehicles in Antwerp, alongside tailored leasing solutions for private and
  business clients.
</p>
Rule
If the meaning of a section is not obvious from the raw HTML text alone, it needs an sr-only summary.

11. Indexability and URL Rules
Canonical Discipline
Only one canonical URL per content entity.

Duplicate Control
Avoid indexable duplicates caused by:

filtered collection states
query strings
trailing slash inconsistencies
preview URLs
duplicated “available” pages after slug cleanup
Slug Quality
Use short, descriptive, stable slugs for:

vehicle pages
collection routes
leasing pages
editorial pages
If Avalaible is a typo in the current URL structure and you choose to correct it, set a proper 301 redirect to the corrected canonical route and update sitemap, metadata, internal links, and schema in the same release.

12. Internal Linking Rules
Internal links must reinforce the primary search entities:

One2One
Antwerp
collection
leasing
contact
vehicle brands and models
Required Linking Paths
homepage → collection
homepage → leasing
homepage → contact
collection → vehicle detail
vehicle detail → contact / enquiry
vehicle detail → collection
leasing → contact
contact → collection
Anchor Text Rule
Use descriptive anchors:

View Collection
Discover Leasing
Request Details
Contact One2One
Avoid vague anchors like:

Click here
Learn more everywhere
Read more repeated without context
13. Content Freshness Rules
Because the site contains vehicle listings and enquiry-driven commercial content, freshness matters.

Must Update Promptly When Changed
availability status
delivered status
showroom contact details
leasing positioning
collection structure
core brand statement
metadata descriptions for major pages
schema data tied to inventory
Freshness Rule
If a vehicle is no longer public, remove or redirect its page intentionally.
Do not leave stale orphaned vehicle URLs in the sitemap.

14. Technical SEO Guardrails for Next.js
Required Setup
use App Router metadata APIs for central metadata management Next.js
use app/robots.ts for robots generation nextjs.org
use app/sitemap.ts for sitemap generation
render JSON-LD as native script tags in layout/page components nextjs.org
sanitize JSON-LD payload before output to avoid unsafe injection patterns nextjs.org
Do Not
hardcode localhost canonicals
mix staging domain metadata into production
leave empty OG image fields
rely on client-only rendering for critical SEO text
hide core business copy behind animations only
ship duplicate titles/descriptions across key pages
15. Agent Constraints — SEO Specific
These rules apply regardless of visual theme, component system, or future redesign direction:

llms.txt and llms-full.txt must remain discoverable from the document head
the homepage AEO summary must remain the first section inside <main>
all canonical URLs must point to https://one2one.be
robots rules must continue allowing major AI crawlers
sitemap must always reflect live public pages
JSON-LD must remain present and valid
visually complex sections must include sr-only summaries
contact details must remain crawlable as real text
if collection structure, contact details, or positioning changes, update:
llms.txt
llms-full.txt
AEO homepage summary
metadata
schema
sitemap
robots rules if needed
All of the above must be updated in the same commit whenever the underlying business information changes.

16. Recommended File Map for the Next.js Project
A clean implementation structure could look like this:

Copy/public/llms.txt
/public/llms-full.txt
/app/layout.tsx
/app/page.tsx
/app/robots.ts
/app/sitemap.ts
/components/seo/AEOHeader.tsx
/components/seo/Schema.tsx
/lib/seo.ts
/lib/schema.ts
This keeps metadata, schema, and AI discovery maintainable as the site grows.

If you want, I can now do one of these next:

write the actual llms.txt and llms-full.txt content for One2One,
create a Next.js SEO file structure with code examples (layout.tsx, robots.ts, sitemap.ts, Schema.tsx), or
rewrite your homepage/page metadata copy route by route.