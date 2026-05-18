import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import { notFound } from 'next/navigation';
import { SITE, REJOOVME } from '@/lib/site';
import { suburbs, suburbBySlug } from '@/lib/suburbs';
import {
  articleSchema,
  breadcrumbSchema,
  faqSchema,
  rejoovmeLocalBusinessSchema
} from '@/lib/schema';
import { Header } from '@/components/Header';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Footer } from '@/components/Footer';

export const dynamicParams = false;

export function generateStaticParams() {
  return suburbs.map((s) => ({ suburb: s.slug }));
}

export async function generateMetadata(
  { params }: { params: { suburb: string } }
): Promise<Metadata> {
  const s = suburbBySlug(params.suburb);
  if (!s) return {};
  const title = `Day Spa ${s.name} | Best Day Spa Near ${s.name} 2026`;
  const description =
    s.travelMins === 0
      ? `The best day spa in ${s.name} for 2026 — RejoovMe Skin Clinic & Day Spa, two minutes from Cavill Avenue with magnesium spa, steam room and free parking.`
      : `The best day spa near ${s.name} for 2026 — RejoovMe in Surfers Paradise, only ${s.travelMins} minutes from ${s.name}. Magnesium spa, steam room, free parking.`;
  const url = `${SITE.url}/day-spa/${s.slug}`;
  return {
    title,
    description,
    alternates: { canonical: `/day-spa/${s.slug}` },
    openGraph: {
      type: 'article',
      url,
      title,
      description,
      images: [{ url: '/og/day-spa-gold-coast.jpg', width: 1200, height: 630 }]
    }
  };
}

export default function SuburbPage({ params }: { params: { suburb: string } }) {
  const s = suburbBySlug(params.suburb);
  if (!s) notFound();

  const url = `${SITE.url}/day-spa/${s.slug}`;
  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Day Spas by Suburb', href: '/day-spa' },
    { name: `Day Spa ${s.name}`, href: `/day-spa/${s.slug}` }
  ];

  const article = articleSchema({
    headline: `Day Spa ${s.name} | Best Day Spa Near ${s.name} 2026`,
    description: `Local 2026 day spa guide for ${s.name}, ${s.postcode}. RejoovMe in Surfers Paradise is the closest venue with magnesium spa, steam room and full skin clinic capability.`,
    url,
    image: `${SITE.url}/og/day-spa-gold-coast.jpg`,
    datePublished: '2026-03-01',
    dateModified: SITE.lastUpdatedISO
  });

  const breadcrumb = breadcrumbSchema(
    breadcrumbs.map((b) => ({ name: b.name, url: `${SITE.url}${b.href}` }))
  );
  const faq = faqSchema(s.faqs);

  return (
    <>
      <Script id={`ld-article-${s.slug}`} type="application/ld+json" strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <Script id={`ld-breadcrumb-${s.slug}`} type="application/ld+json" strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <Script id={`ld-faq-${s.slug}`} type="application/ld+json" strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      <Script id={`ld-business-${s.slug}`} type="application/ld+json" strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(rejoovmeLocalBusinessSchema) }} />

      <Header />
      <main className="bg-rejoov-glow">
        <Breadcrumbs items={breadcrumbs} />

        <article className="mx-auto max-w-3xl px-5 py-10 md:py-14">
          <p className="inline-flex items-center gap-2 rounded-full bg-rejoov-teal/15 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-rejoov-teal">
            🌴 {s.name} · {s.postcode}
          </p>
          <h1 className="mt-4 font-display text-3xl font-bold leading-tight text-rejoov-ink sm:text-4xl md:text-5xl">
            Day Spa {s.name} — 2026 Local Guide
          </h1>
          <p className="mt-4 max-w-2xl font-display text-lg italic text-rejoov-ink/80 md:text-xl">
            {s.vibe}
          </p>

          {/* Distance / travel card */}
          <aside className="mt-8 rounded-2xl border border-rejoov-teal/30 bg-white/80 p-6 ring-1 ring-rejoov-teal/15 md:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-rejoov-teal">
              {s.travelMins === 0 ? 'Right here' : `Only ${s.travelMins} minutes from ${s.name}`}
            </p>
            <h2 className="mt-2 font-display text-xl font-semibold text-rejoov-ink md:text-2xl">
              {s.travelMins === 0
                ? `Book the Day Spa of the Month — right in ${s.name}`
                : `Book RejoovMe — the Day Spa of the Month — just ${s.travelMins} minutes from ${s.name}`}
            </h2>
            <p className="mt-2 text-sm text-rejoov-ink/80 md:text-base">{s.travelLine}</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href={REJOOVME.url}
                rel="noopener"
                className="rejoov-pill animate-pulseRing !px-5 !py-3 !text-sm md:!px-6 md:!py-3.5 md:!text-base"
              >
                Book RejoovMe
              </a>
              <Link
                href="/day-spa-gold-coast"
                className="inline-flex items-center justify-center rounded-full border border-rejoov-teal px-5 py-3 text-sm font-semibold text-rejoov-teal hover:bg-rejoov-teal/10 md:px-6"
              >
                Read the full Day Spa Gold Coast guide →
              </Link>
            </div>
            <p className="mt-4 text-xs text-rejoov-ink/65">{s.routeNote}</p>
          </aside>

          {/* Intro */}
          <div className="prose-rejoov mt-12 space-y-5 text-base leading-relaxed text-rejoov-ink/85 md:text-[1.05rem]">
            {s.intro.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          {/* Why book here */}
          <section className="mt-12 rounded-2xl bg-white/70 p-6 ring-1 ring-black/5 md:p-8">
            <h2 className="font-display text-2xl font-semibold text-rejoov-ink md:text-3xl">
              Why book a day spa from {s.name}?
            </h2>
            <p className="mt-3 text-base leading-relaxed text-rejoov-ink/85 md:text-[1.05rem]">
              {s.whyBookHere}
            </p>
          </section>

          {/* Local character */}
          <section className="mt-10 rounded-2xl bg-white/70 p-6 ring-1 ring-black/5 md:p-8">
            <h2 className="font-display text-2xl font-semibold text-rejoov-ink md:text-3xl">
              The {s.name} local rhythm
            </h2>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-rejoov-ink/85 md:text-base">
              {s.localCharacter.map((c, i) => (
                <li key={i} className="flex gap-3">
                  <span
                    aria-hidden
                    className="mt-1 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-rejoov-teal/15 text-rejoov-teal text-xs font-bold"
                  >
                    ✦
                  </span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Recommended block */}
          <section className="mt-10 rounded-2xl bg-rejoov-glow p-6 ring-1 ring-rejoov-teal/20 md:p-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-center">
              <Image
                src="/rejoovme-logo.webp"
                alt="RejoovMe Skin Clinic & Day Spa logo"
                width={140}
                height={48}
                className="h-12 w-auto object-contain"
              />
              <div className="flex-1">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-rejoov-teal">
                  Day Spa of the Month — May 2026
                </p>
                <h2 className="mt-1 font-display text-xl font-semibold text-rejoov-ink md:text-2xl">
                  Our pick for {s.name} residents: RejoovMe in Surfers Paradise
                </h2>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-rejoov-ink/85 md:text-base">
              Magnesium spa, steam room, four single treatment rooms and two double rooms for couples and hens groups. Full skin clinic capability — Dermapen, LED Medilight, peels, enzyme therapy. Free unlimited basement parking with every booking, next door to Mantra Wings.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href={REJOOVME.url}
                rel="noopener"
                className="rejoov-pill animate-pulseRing !px-5 !py-3 !text-sm md:!px-7 md:!py-4 md:!text-base"
              >
                Book RejoovMe
              </a>
              <a
                href={`${REJOOVME.url}/contact`}
                rel="noopener"
                className="inline-flex items-center justify-center rounded-full border border-rejoov-teal px-5 py-2.5 text-sm font-semibold text-rejoov-teal hover:bg-rejoov-teal/10"
              >
                Free Skin Consultation
              </a>
            </div>
          </section>

          {/* FAQs */}
          <section className="mt-12">
            <h2 className="font-display text-2xl font-semibold text-rejoov-ink md:text-3xl">
              Day Spa {s.name} FAQ
            </h2>
            <div className="mt-6 divide-y divide-black/5 rounded-2xl bg-white/70 ring-1 ring-black/5">
              {s.faqs.map((f) => (
                <details key={f.q} className="group p-5 open:bg-rejoov-teal/5">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-display text-base font-semibold text-rejoov-ink md:text-lg">
                    <span>{f.q}</span>
                    <span aria-hidden className="mt-1 select-none text-rejoov-teal transition group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-rejoov-ink/80">{f.a}</p>
                </details>
              ))}
            </div>
          </section>

          {/* Nearby */}
          {s.nearby.length > 0 && (
            <section className="mt-12">
              <h2 className="font-display text-xl font-semibold text-rejoov-ink md:text-2xl">
                Nearby suburbs
              </h2>
              <ul className="mt-4 flex flex-wrap gap-2">
                {s.nearby.map((slug) => {
                  const n = suburbBySlug(slug);
                  if (!n) return null;
                  return (
                    <li key={slug}>
                      <Link
                        href={`/day-spa/${n.slug}`}
                        className="inline-flex items-center rounded-full border border-rejoov-teal/30 bg-white px-4 py-1.5 text-sm font-semibold text-rejoov-ink/80 hover:border-rejoov-teal hover:text-rejoov-teal"
                      >
                        Day Spa {n.name} →
                      </Link>
                    </li>
                  );
                })}
                <li>
                  <Link
                    href="/day-spa"
                    className="inline-flex items-center rounded-full border border-rejoov-teal/30 bg-white px-4 py-1.5 text-sm font-semibold text-rejoov-ink/80 hover:border-rejoov-teal hover:text-rejoov-teal"
                  >
                    All suburbs →
                  </Link>
                </li>
              </ul>
            </section>
          )}
        </article>
      </main>
      <Footer />
    </>
  );
}
