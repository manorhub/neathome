# Amazon Associates Setup — Owner Tasks

Status: NOT COMPLETED. No Associate tag has been invented, no account approval is claimed, and affiliate links are disabled in code.

## Steps for the owner
1. Apply at Amazon.com Associates (not Amazon.in). Each marketplace is separate.
2. Register the exact domain neatapartment.org in Associates Central, under the websites/channels list.
3. Complete the tax interview. Non-US associates may need a W-8BEN-type form. Until tax status is Complete, payment can be held or withheld.
4. Publish at least 10 real, useful posts before relying on approval. New accounts must make 3 qualifying sales within 180 days or the account closes.
5. Supply the real tracking tag to the developer through a secure channel, never in a public chat or committed file.

## Steps for the developer (after owner supplies the tag)
1. Set the real tag in the environment configuration, set affiliateEnabled to true ONLY after domain registration is confirmed, and set domainRegistered to true in src/config/affiliate.ts.
2. For each product, verify live on Amazon.com: product title, URL, dimensions, rating, review count, Prime eligibility, stock status, and last verification date. Record those values in the product data — never invent them.
3. Run src/lib/affiliate-validation.ts checks: reject Amazon.in URLs, require amazon.com + configured tag, flag missing destinations.
4. Rebuild, inspect dist HTML, confirm no placeholder tag appears, and confirm every Amazon button opens the correct product.
5. Keep articles in draft until their products are verified.

## What not to do
- Do not use Amazon.in URLs.
- Do not cloak or shorten Amazon URLs.
- Do not show a fixed price in an article.
- Do not promise stock availability without verification.
- Do not treat a successful build as Associates approval.
