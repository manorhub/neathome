# Production Verification Checklist

Use Passed / Failed / Blocked / Not tested for each item. A local build passing is NOT production verification.

## Domain
- [ ] neatapartment.org resolves correctly
- [ ] HTTPS works, no certificate errors
- [ ] Preferred canonical host works, redirects correct
- [ ] Production pages return expected HTTP status codes

## Routes (local build)
- [ ] / (homepage)
- [ ] /kitchen-organization/
- [ ] /pantry-fridge/
- [ ] /small-apartment-storage/
- [ ] /bathroom-organization/
- [ ] /desk-entryway/
- [ ] /about/, /affiliate-disclosure/, /privacy-policy/, /contact/
- [ ] /search/ (published-only index, empty state works)
- [ ] Article routing: drafts excluded, published articles render (none published yet — see build report)
- [ ] Sitemap contains only production URLs, drafts excluded
- [ ] robots.txt correct, sitemap URL present

## Articles
- [ ] Article URL opens, title/description correct, hero image loads with alt/width/height
- [ ] Measure-first box visible
- [ ] Affiliate disclosure visible before first affiliate link and near button (when affiliate enabled)
- [ ] Product information matches verified listing (BLOCKED until live verification)
- [ ] Amazon button opens correct product with correct tag (BLOCKED until tag supplied)
- [ ] No fixed price claims, no invented ratings/dimensions/stock

## Pinterest destination
- [ ] Pin links to specific article, not homepage
- [ ] Destination URL correct, loads without errors
- [ ] Open Graph metadata correct, not a preview URL
- [ ] No affiliate destination hidden behind a redirect

## Compliance
- [ ] Affiliate disclosure near beginning and near button
- [ ] Amazon URLs are Amazon.com only, no Amazon.in
- [ ] No fabricated ratings or product data
- [ ] No placeholder tracking tags in production output
- [ ] No unpublished article presented as live

## Performance and SEO
- [ ] Production HTML valid, canonicals correct (neatapartment.org, never preview host)
- [ ] Article structured data valid, no fake ratings/authors/addresses/social profiles
- [ ] Images optimized, dimensions present, lazy below fold
- [ ] No broken internal links

## Owner-review items
- [ ] Privacy policy legal review (Cloudflare cookies, entity, contact details)
- [ ] Contact email configuration
- [ ] Google Analytics 4 / Search Console IDs (none invented, none activated)
