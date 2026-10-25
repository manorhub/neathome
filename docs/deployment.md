# Deployment — Cloudflare Pages

Status: NOT DEPLOYED. Do not claim production is live until the steps below are completed and tested directly.

## Prerequisites (owner)
- Domain neatapartment.org purchased or confirmed. Purchase status is currently UNCONFIRMED.
- Cloudflare account access. Access is currently NOT provided.
- Git repository containing this project, or a direct Cloudflare Pages upload approved by the owner.
- Owner approval to publish. Preview deployment first.

## Cloudflare Pages project
1. Create a new Cloudflare Pages project, or select an existing project approved by the owner.
2. Connect the Git repository, or upload a production build only if the owner approves that method.
3. Framework preset: Astro (or None, with manual settings below).
4. Build command: `npm run build`
5. Build output directory: `dist`
6. Node version: 24 (or the version Cloudflare offers that is compatible with Astro 5).
7. Environment variables: Do NOT set a real Amazon tag until Associates registration is confirmed. Keep affiliate mode disabled in code.

## Custom domain
1. In Cloudflare Pages, add custom domain: neatapartment.org
2. If the domain is already in the same Cloudflare account, DNS is usually automatic. If not, add the CNAME record Cloudflare shows, and do not change other DNS records without owner approval.
3. Enable HTTPS and force HTTPS.
4. Test: https://neatapartment.org/ returns 200, canonical URLs use neatapartment.org (never a *.pages.dev preview host), and sitemap is at https://neatapartment.org/sitemap-index.xml

## Preview first
- Deploy to a preview URL first, check all routes in docs/verification-checklist.md, then attach the production domain only after the owner approves.
- A successful local build is NOT production deployment.

## Redirect pages.dev to neatapartment.org (301, preferred)
Cloudflare's official method is Bulk Redirects, not a `_redirects` file (a
`_redirects` rule for pages.dev did not redirect in testing, and the
deployment API with a Pages-only token returns 403 for Bulk Redirects).
In the Cloudflare dashboard: Workers & Pages → Bulk Redirects → create a
redirect list with Source `neat-apartment.pages.dev`, Target
`https://neatapartment.org`, Status `301`, and Preserve query string,
Subpath matching, and Preserve path suffix enabled; then create a bulk
redirect rule using that list. Do NOT enable "Include subdomains" unless
deployment-preview URLs should also redirect.
Until that dashboard rule is set, the site has a client-side redirect in
`src/layouts/BaseLayout.astro` that sends exact
`neat-apartment.pages.dev` visitors to `neatapartment.org` with the same
path and query. It is not a server 301, so curl/no-JS checks will still
see 200 on pages.dev, while real browsers will land on the domain.
