import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { JsonLd } from '@/components/JsonLd';
import { SITE } from '@/lib/site';
import { posts } from '@/lib/posts';
import { breadcrumbSchema } from '@/lib/schema';
import { Header } from '@/components/Header';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Footer } from '@/components/Footer';

const SLUG = '/blog';
const URL = `${SITE.url}${SLUG}`;

export const metadata: Metadata = {
  title: { absolute: 'Day Spa Gold Coast Blog: Rankings, Packages & Hens Guides (2026)' },
  description:
    'Editorial Day Spa Gold Coast features for 2026, monthly rankings, Day Spa of the Month picks, hens party itineraries and in-depth Surfers Paradise spa reviews.',
  alternates: { canonical: SLUG },
  openGraph: {
    type: 'website',
    url: URL,
    title: 'Day Spa Gold Coast Blog: 2026 Rankings & Reviews',
    description:
      'Long-form, independently produced Day Spa Gold Coast features, rankings and Day Spa of the Month picks.',
    images: [{ url: '/og/blog.jpg', width: 1200, height: 630 }]
  }
};

export default function BlogIndexPage() {
  const breadcrumbs = [
    { name: 'Day Spa Gold Coast', href: '/day-spa-gold-coast' },
    { name: 'Blog', href: SLUG }
  ];

  const breadcrumb = breadcrumbSchema(
    breadcrumbs.map((b) => ({ name: b.name, url: `${SITE.url}${b.href}` }))
  );

  const blogList = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Day Spa Gold Coast Editorial',
    url: URL,
    blogPost: posts.map((p) => ({
      '@type': 'BlogPosting',
      headline: p.title,
      url: `${SITE.url}${p.slug}`,
      datePublished: p.datePublished,
      author: { '@type': 'Person', name: SITE.author.name }
    }))
  };

  return (
    <>
      <JsonLd data={breadcrumb} />
      <JsonLd data={blogList} />

      <Header />
      <main id="main" className="bg-rejoov-glow">
        <Breadcrumbs items={breadcrumbs} />

        <section className="mx-auto max-w-5xl px-5 pb-16 pt-10 md:pb-20 md:pt-14">
          <header className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-rejoov-deep">
              Editorial
            </p>
            <h1 className="mt-3 font-display text-3xl font-light leading-tight text-rejoov-ink sm:text-4xl md:text-5xl">
              The Day Spa Gold Coast Blog
            </h1>
            <p className="mt-3 text-rejoov-ink/75">
              Independent features, monthly rankings and our Day Spa of the Month pick. Long-form, locally curated, refreshed every quarter.
            </p>
          </header>

          <ul className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {posts.map((p, idx) => (
              <li key={p.slug}>
                <Link
                  href={p.slug}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white/80 ring-1 ring-black/5 transition hover:ring-rejoov-teal/40"
                >
                  <div className="relative aspect-[16/9] overflow-hidden bg-stone-100">
                    <Image
                      src={p.cover}
                      alt={p.coverAlt}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover transition duration-500 group-hover:scale-[1.03]"
                      priority={idx < 2}
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-5 md:p-6">
                    <div className="flex flex-wrap items-center gap-2 text-xs text-ink-mute">
                      <span className="font-semibold uppercase tracking-wider text-rejoov-deep">
                        {p.tags[0]}
                      </span>
                      <span aria-hidden>·</span>
                      <span>{p.dateHuman}</span>
                      <span aria-hidden>·</span>
                      <span>{p.readingMins} min read</span>
                    </div>
                    <h2 className="mt-3 font-display text-xl font-normal leading-snug text-rejoov-ink group-hover:text-rejoov-deep md:text-2xl">
                      {p.title}
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-rejoov-ink/75 md:text-base">
                      {p.excerpt}
                    </p>
                    <span className="mt-4 inline-flex items-center text-sm font-semibold text-rejoov-deep">
                      Read article →
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>

          <p className="mt-12 text-sm text-ink-mute">
            Looking for the full guide? Read{' '}
            <Link href="/day-spa-gold-coast" className="font-semibold text-rejoov-deep underline">
              The Best Day Spa Gold Coast Guide For 2026
            </Link>
            .
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
