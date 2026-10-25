export const SITE = {
  name: 'Neat Apartment',
  tagline: 'Practical organization ideas and space-saving products for small kitchens, apartments, and rental homes.',
  url: 'https://neatapartment.org',
  locale: 'en-US',
  language: 'en-US',
  description:
    'Practical organization ideas, small-kitchen solutions, and renter-friendly storage tips to help you create a home that works better.',
} as const;

export type CategorySlug =
  | 'kitchen-organization'
  | 'pantry-fridge'
  | 'small-apartment-storage'
  | 'bathroom-organization'
  | 'desk-entryway';

export interface Category {
  slug: CategorySlug;
  title: string;
  short: string;
  description: string;
  intro: string;
  image: string;
  imageAlt: string;
}

export const CATEGORIES: Category[] = [
  {
    slug: 'kitchen-organization',
    title: 'Kitchen Organization',
    short: 'Small kitchens, sorted.',
    description:
      'Practical kitchen organization ideas for small kitchens, limited cabinets, and rental kitchens.',
    intro:
      'Small kitchens work best when every cabinet, drawer, and shelf has a job. These guides focus on measuring first, using vertical space, and choosing organizers that fit your actual kitchen, not a showroom kitchen.',
    image: '/images/category-kitchen.svg',
    imageAlt: 'Illustration of an organized small kitchen with shelves and storage bins',
  },
  {
    slug: 'pantry-fridge',
    title: 'Pantry & Fridge',
    short: 'A pantry you can actually use.',
    description:
      'Pantry and refrigerator organization ideas that stay tidy, including bins, labels, and zones.',
    intro:
      'A tidy pantry is not about matching containers for a photo. It is about zones you can reach, labels you can read, and food you can find before it expires.',
    image: '/images/category-pantry.svg',
    imageAlt: 'Illustration of an organized pantry with labeled bins and shelves',
  },
  {
    slug: 'small-apartment-storage',
    title: 'Small Apartment Storage',
    short: 'More room, same apartment.',
    description:
      'Small apartment storage ideas for bedrooms, closets, entryways, and narrow spaces.',
    intro:
      'Small apartments reward vertical storage, under-bed space, over-door space, and furniture that does two jobs. These guides start with what you already own and what your lease allows.',
    image: '/images/category-apartment.svg',
    imageAlt: 'Illustration of a small apartment with vertical shelving and under-bed storage',
  },
  {
    slug: 'bathroom-organization',
    title: 'Bathroom Organization',
    short: 'Small bathrooms, less clutter.',
    description:
      'Bathroom organization ideas for renters, including under-sink storage and no-drill solutions.',
    intro:
      'Bathrooms are small, damp, and shared. Good bathroom organization keeps daily items reachable, cleaning supplies contained, and surfaces clear without drilling into tile you do not own.',
    image: '/images/category-bathroom.svg',
    imageAlt: 'Illustration of an organized bathroom with under-sink storage',
  },
  {
    slug: 'desk-entryway',
    title: 'Desk & Entryway',
    short: 'A clear desk, a calm entry.',
    description:
      'Desk and entryway organization ideas for work-from-home spaces and small entryways.',
    intro:
      'A desk works when cables, paper, and chargers have a home. An entryway works when keys, bags, and shoes stop piling up by the door. Both need small, repeatable systems, not a full remodel.',
    image: '/images/category-desk.svg',
    imageAlt: 'Illustration of an organized desk and entryway with shelves and hooks',
  },
];

export const categoryBySlug = (slug: string): Category | undefined =>
  CATEGORIES.find((c) => c.slug === slug);
