import { SITE } from '../config/site';

export function canonicalUrl(path: string): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return `${SITE.url}${clean}`;
}

export function readingTimeMinutes(text: string): number {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

export function isFuture(date: Date, now = new Date()): boolean {
  return date.getTime() > now.getTime();
}
