/**
 * Affiliate configuration — SAFE DEFAULTS.
 *
 * affiliateEnabled is FALSE by default and must stay false until:
 *  1. The owner supplies a real Amazon Associates tracking tag, AND
 *  2. neatapartment.org is registered in Amazon Associates Central, AND
 *  3. The owner approves publishing affiliate links.
 *
 * The placeholder value below is NEVER rendered into production HTML.
 * Product components render a disabled state while affiliate mode is off.
 * Do not invent a tag, and do not treat a successful build as approval.
 */
export const AFFILIATE = {
  enabled: false,
  // Placeholder only, read from env at build time if ever enabled.
  // This constant is intentionally not interpolated into any href
  // while `enabled` is false.
  tagPlaceholder: 'YOUR_ASSOCIATE_TAG_HERE',
  domainRegistered: false,
  warning:
    'Affiliate links are currently disabled. Amazon Associates configuration and domain registration are pending owner confirmation.',
} as const;

export function isAffiliateReady(): boolean {
  return AFFILIATE.enabled && AFFILIATE.domainRegistered;
}
