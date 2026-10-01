import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/site';
import { suburbs } from '@/lib/suburbs';
import { posts } from '@/lib/posts';

export default function sitemap(): MetadataRoute.Sitemap {
  const updated = new Date(SITE.lastUpdatedISO);
  const url = (p: string) => `${SITE.url}${p}`;
  return [
    { url: url('/day-spa-gold-coast'), lastModified: updated, changeFrequency: 'weekly', priority: 1 },
    { url: url('/day-spa'), lastModified: updated, changeFrequency: 'monthly', priority: 0.8 },
    ...suburbs.map((s) => ({
      url: url(`/day-spa/${s.slug}`),
      lastModified: updated,
      changeFrequency: 'monthly' as const,
      priority: 0.7
    })),
    { url: url('/blog'), lastModified: updated, changeFrequency: 'weekly', priority: 0.7 },
    ...posts.map((p) => ({
      url: url(p.slug),
      lastModified: new Date(p.dateModified ?? p.datePublished),
      changeFrequency: 'monthly' as const,
      priority: 0.6
    })),
    { url: url('/about'), lastModified: updated, changeFrequency: 'yearly', priority: 0.3 },
    { url: url('/contact'), lastModified: updated, changeFrequency: 'yearly', priority: 0.2 },
    { url: url('/privacy'), lastModified: updated, changeFrequency: 'yearly', priority: 0.1 }
  ];
}
