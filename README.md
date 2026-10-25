# Neat Apartment

Practical organization ideas and space-saving products for small kitchens, apartments, and rental homes in the United States.

- Domain: https://neatapartment.org
- Stack: Astro.js (static output), TypeScript, Tailwind CSS v4, Markdown content collections
- Hosting target: Cloudflare Pages (not deployed — see docs/deployment.md)
- Business model: Pinterest Pin → Article on neatapartment.org → Amazon.com product page

## Status — read before using

- All 10 initial articles are DRAFTS. They are not published, and no product recommendations, ratings, prices, dimensions, review counts, or stock claims are included.
- Affiliate links are DISABLED by default (src/config/affiliate.ts). No Associate tag has been invented, and no Amazon approval is claimed.
- Production deployment, DNS changes, Pinterest pins, and daily publishing require explicit owner approval and owner-supplied credentials/configuration. Daily-post prompt is pending from the owner.

## Scripts

```bash
npm install
npm run dev      # local development server
npm run build    # production static build to dist/
npm run preview  # preview the production build locally
npm run check    # Astro + TypeScript checks
```

## Project structure

- `src/pages/` — homepage, 5 category pages, legal pages, search page, article `[slug]` route
- `src/content/posts/` — Markdown articles (all 10 initial articles are drafts)
- `src/components/` — Header, Footer, ArticleCard, CategoryCard, Breadcrumbs, AffiliateDisclosure, ProductCard, ProductComparison, RelatedArticles, MeasureFirstBox, SEOHead
- `src/layouts/` — BaseLayout, ArticleLayout
- `src/config/` — site.ts, affiliate.ts (disabled by default)
- `src/lib/` — SEO helpers, affiliate URL validation, internal-link resolution
- `docs/` — deployment, Amazon Associates setup, Pinterest setup, content workflow, verification checklist, content planning

## Before production

See docs/verification-checklist.md. In particular, the owner must confirm:
1. neatapartment.org purchase status and registrar
2. Cloudflare account access and approval to deploy (preview first)
3. Amazon.com Associates tag and domain registration in Associates Central
4. Pinterest account handover
5. Daily-post prompt (to be supplied later)
