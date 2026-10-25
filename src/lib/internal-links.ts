import { getCollection } from 'astro:content';

/** Resolve related slugs to published posts only. Drafts, future posts, and unknown slugs are dropped. */
export async function resolveRelatedPosts(slugs: string[]) {
  const all = await getCollection('posts', ({ data }) => {
    const now = new Date();
    return !data.draft && data.pubDate.getTime() <= now.getTime();
  });
  const bySlug = new Map(all.map((p) => [p.id.replace(/\.md$/, ''), p]));
  const out: typeof all = [];
  for (const slug of slugs) {
    const post = bySlug.get(slug);
    if (post && !out.includes(post)) out.push(post);
  }
  return out.slice(0, 3);
}

export async function publishedPosts() {
  const now = new Date();
  const all = await getCollection('posts', ({ data }) => {
    return !data.draft && data.pubDate.getTime() <= now.getTime();
  });
  return [...all].sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());
}
