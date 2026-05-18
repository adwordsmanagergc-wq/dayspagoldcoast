import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { SITE } from '@/lib/site';
import { suburbs } from '@/lib/suburbs';
import { breadcrumbSchema } from '@/lib/schema';
import { Header } from '@/components/Header';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Footer } from '@/components/Footer';

const SLUG = '/day-spa';
const URL = `${SITE.url}${SLUG}`;

export const metadata: Metadata = {
  title: 'Day Spa by Suburb — Gold Coast 2026 Local Guides',
  description:
    'Day Spa Gold Coast guides for every major suburb — Surfers Paradise, Broadbeach, Burleigh Heads, Mermaid Beach, Palm Beach, Coolangatta and more. Distance, local context, booking.',
  alternates: { canonical: SLUG },
  openGraph: {
    type: 'website',
    url: URL,
    title: 'Day Spa by Suburb — Gold Coast 2026 Local Guides',
    description:
      'Local Day Spa Gold Coast guides for every major Gold Coast suburb, with travel times, local context and booking links.',
    images: [{ url: '/og/day-spa-gold-coast.jpg', width: 1200, height: 630 }]
  }
};

export default function SuburbIndexPage() {
  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Day Spas by Suburb', href: SLUG }
  ];
  const breadcrumb = breadcrumbSchema(
    breadcrumbs.map((b) => ({ name: b.name, url: `${SITE.url}${b.href}` }))
  );

  const sorted = [...suburbs].sort((a, b) => a.travelMins - b.travelMins);

  return (
    <>
      <Script id="ld-breadcrumb-suburbs" type="application/ld+json" strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <Header />
      <main className="bg-rejoov-glow">
        <Breadcrumbs items={breadcrumbs} />

        <section className="mx-auto max-w-5xl px-5 pb-16 pt-10 md:pb-20 md:pt-14">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-rejoov-teal">
            Local Guides
          </p>
          <h1 className="mt-3 font-display text-3xl font-bold leading-tight text-rejoov-ink sm:text-4xl md:text-5xl">
            Day Spa Gold Coast — by suburb
          </h1>
          <p className="mt-3 max-w-2xl text-rejoov-ink/75">
            A dedicated guide for every major Gold Coast suburb — sorted by drive time to the 2026 Day Spa of the Month, RejoovMe in Surfers Paradise.
          </p>

          <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {sorted.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/day-spa/${s.slug}`}
                  className="group flex h-full flex-col justify-between rounded-2xl bg-white/80 p-5 ring-1 ring-black/5 transition hover:ring-rejoov-teal/40"
                >
                  <div>
                    <div className="flex items-baseline gap-2">
                      <h2 className="font-display text-lg font-semibold text-rejoov-ink group-hover:text-rejoov-teal md:text-xl">
                        Day Spa {s.name}
                      </h2>
                      <span className="text-xs text-rejoov-ink/45">{s.postcode}</span>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-rejoov-ink/70">{s.vibe}</p>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="rounded-full bg-rejoov-teal/10 px-3 py-1 text-xs font-semibold text-rejoov-teal">
                      {s.travelMins === 0 ? 'Right here' : `${s.travelMins} min to RejoovMe`}
                    </span>
                    <span className="text-sm font-semibold text-rejoov-teal">Read →</span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>

          <p className="mt-12 text-sm text-rejoov-ink/65">
            Looking for the full ranking? Read{' '}
            <Link href="/day-spa-gold-coast" className="font-semibold text-rejoov-teal underline">
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
