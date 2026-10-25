/** Affiliate URL validation. Pure functions, no credentials. */

export function isAmazonComUrl(url: string): boolean {
  try {
    const u = new URL(url);
    return (
      (u.hostname === 'amazon.com' || u.hostname.endsWith('.amazon.com')) &&
      !u.hostname.includes('amazon.in')
    );
  } catch {
    return false;
  }
}

export function isAmazonInUrl(url: string): boolean {
  try {
    const u = new URL(url);
    return u.hostname === 'amazon.in' || u.hostname.endsWith('.amazon.in');
  } catch {
    return false;
  }
}

export type AffiliateValidation =
  | { ok: true }
  | { ok: false; reason: string };

export function validateAffiliateUrl(
  url: string | undefined,
  tag: string | undefined,
  enabled: boolean,
): AffiliateValidation {
  if (!enabled) return { ok: false, reason: 'Affiliate mode is disabled.' };
  if (!url) return { ok: false, reason: 'Missing affiliate destination.' };
  if (isAmazonInUrl(url)) {
    return { ok: false, reason: 'Amazon.in URLs are not allowed. Use Amazon.com only.' };
  }
  if (!isAmazonComUrl(url)) {
    return { ok: false, reason: 'Affiliate URL must be an Amazon.com URL.' };
  }
  if (!tag || tag === 'YOUR_ASSOCIATE_TAG_HERE') {
    return { ok: false, reason: 'Missing or placeholder Associate tracking tag.' };
  }
  let parsed: URL;
  try {
    parsed = new URL(url);
  } catch {
    return { ok: false, reason: 'Affiliate URL is not a valid URL.' };
  }
  if (parsed.searchParams.get('tag') !== tag) {
    return { ok: false, reason: 'Affiliate URL does not use the configured tracking tag.' };
  }
  return { ok: true };
}
