# Content Workflow

## Adding a new article
1. Create a Markdown file in src/content/posts/<slug>.md with all required frontmatter fields (see src/content.config.ts).
2. Set draft: true until the article is fully written, checked, and, if affiliate content, product-verified.
3. Write in US English, with a measure-first box handled by the article layout, editorial guidance before product recommendations, an FAQ where suitable, and a final editorial note handled by the layout.
4. Set relatedPosts to slugs of published articles only. Unknown, draft, or future slugs are filtered out at build time and will not create broken links.
5. Run `npm run check` and `npm run build`. Inspect the generated page.
6. Only set draft: false when the article is ready, and only enable affiliate buttons after Associates configuration is confirmed.

## Daily publishing (PENDING)
- Daily posting has NOT started. The owner will provide a separate daily-post prompt later. Do not start daily posting until that prompt arrives, and do not invent it.
- Once that prompt arrives, the daily workflow is: write 1 post following the template → deploy to Cloudflare Pages (only with owner approval for production) → create a matching Pinterest pin linking to the post → verify post, pin, Amazon button, and disclosure.

## Slug changes
- Do not change a slug silently. If a slug must change, flag the need for a redirect and update all relatedPosts references and any pin destinations.

## Product verification workflow
- Check the live Amazon.com listing, record title, URL, ASIN if available, dimensions, material, rating, review count, Prime eligibility, stock status, and verification date.
- If any required field cannot be verified, keep the article in draft. Never invent a value to fill a field.
