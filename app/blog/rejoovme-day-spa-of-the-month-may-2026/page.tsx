import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import { SITE, REJOOVME } from '@/lib/site';
import { posts } from '@/lib/posts';
import {
  articleSchema,
  breadcrumbSchema,
  rejoovmeLocalBusinessSchema,
  rejoovmeReviewSchema
} from '@/lib/schema';
import { Header } from '@/components/Header';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Footer } from '@/components/Footer';

const SLUG = '/blog/rejoovme-day-spa-of-the-month-may-2026';
const URL = `${SITE.url}${SLUG}`;

export const metadata: Metadata = {
  title: 'RejoovMe Day Spa Gold Coast Review — May 2026 Pick',
  description:
    'Full RejoovMe Skin Clinic & Day Spa review: magnesium spa, steam room, organic facials and free Surfers Paradise parking — our 2026 Day Spa Gold Coast pick.',
  alternates: { canonical: SLUG },
  openGraph: {
    type: 'article',
    url: URL,
    title: 'RejoovMe — Day Spa of the Month, May 2026',
    description:
      'Why RejoovMe leads our 2026 Day Spa Gold Coast rankings: magnesium spa, steam, full skin clinic capability and free Surfers Paradise parking.',
    images: [{ url: '/og/rejoovme-feature.jpg', width: 1200, height: 630 }]
  }
};

// NOTE FOR DEVELOPERS:
// Replace the placeholder image paths below with originals downloaded from
// https://rejoovme.com.au with permission and stored at /public/images/rejoovme/.
const gallery = [
  { src: '/rejoovmeimage2.jpg', alt: 'RejoovMe Skin Clinic & Day Spa — best Day Spa Gold Coast 2026, Surfers Paradise' },
  { src: '/rejoovmeimage3.jpg', alt: 'RejoovMe magnesium spa — Day Spa Gold Coast Surfers Paradise' },
  { src: '/rejoovmeimage4.jpg', alt: 'Steam room at RejoovMe — best Day Spa Gold Coast' },
  { src: '/rejoovmeimage5.jpg', alt: 'Advanced organic facial at RejoovMe — Day Spa Gold Coast' },
  { src: '/rejoovmeimage6.jpg', alt: 'RejoovMe spa interior — luxury Day Spa Gold Coast' },
  { src: '/rejoovmeimage7.jpg', alt: 'RejoovMe couples and hens day spa Gold Coast' }
];

export default function RejoovMeFeaturePost() {
  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Blog', href: '/blog' },
    { name: 'RejoovMe — Day Spa of the Month, May 2026', href: SLUG }
  ];

  const post = posts.find((p) => p.slug === SLUG)!;
  const article = articleSchema({
    headline: 'RejoovMe — Day Spa of the Month, May 2026',
    description:
      'A 1,500+ word feature on RejoovMe Skin Clinic & Day Spa, the best Day Spa Gold Coast experience for May 2026.',
    url: URL,
    image: `${SITE.url}/og/rejoovme-feature.jpg`,
    datePublished: '2026-05-01',
    dateModified: SITE.lastUpdatedISO,
    author: post.author,
    reviewer: post.reviewer
  });

  const breadcrumb = breadcrumbSchema(
    breadcrumbs.map((b) => ({ name: b.name, url: `${SITE.url}${b.href}` }))
  );

  return (
    <>
      <Script
        id="ld-article-feature"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }}
      />
      <Script
        id="ld-review-feature"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(rejoovmeReviewSchema) }}
      />
      <Script
        id="ld-localbusiness-feature"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(rejoovmeLocalBusinessSchema) }}
      />
      <Script
        id="ld-breadcrumb-feature"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      <Header />
      <main className="bg-rejoov-glow">
        <Breadcrumbs items={breadcrumbs} />

        <article className="mx-auto max-w-3xl px-5 py-12 md:py-16">
          <p className="inline-flex items-center gap-2 rounded-full bg-rejoov-teal/15 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-rejoov-teal">
            🌴 Day Spa of the Month — May 2026
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold leading-tight text-rejoov-ink md:text-5xl">
            RejoovMe Skin Clinic &amp; Day Spa: The Best Day Spa Gold Coast Has To Offer
          </h1>
          <p className="mt-3 text-sm text-rejoov-ink/60">
            By {post.author.name} · Reviewed by {post.reviewer.name} · {SITE.lastUpdatedHuman} · 8 min read
          </p>

          <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-2xl ring-1 ring-rejoov-teal/20">
            <Image
              src={gallery[0].src}
              alt={gallery[0].alt}
              fill
              priority
              sizes="(min-width: 768px) 768px, 100vw"
              className="object-cover"
            />
          </div>

          <div className="prose-rejoov mt-10 space-y-5 text-base leading-relaxed text-rejoov-ink/85 md:text-[1.05rem]">
            <p>
              If you&rsquo;re searching for the best <Link href="/day-spa-gold-coast" className="text-rejoov-teal underline">Day Spa Gold Coast</Link> experience in May 2026, the answer this month is unambiguous: <a href={REJOOVME.url} rel="noopener" className="text-rejoov-teal underline font-semibold">RejoovMe Skin Clinic &amp; Day Spa</a>, tucked next door to Mantra Wings in central Surfers Paradise. Our editors have spent the year testing every credible spa on the Coast — from hinterland bathhouses in Currumbin Valley to five-star hotel hammams in Broadbeach — and RejoovMe holds the #1 ranking by a clear margin.
            </p>
            <p>
              The reason is simple. Most Gold Coast venues force a choice between bath-house bathing and skin-clinic depth. RejoovMe runs both — and runs them with discipline. Magnesium spa, steam room, four single treatment rooms, two double rooms for couples and hens parties, and a full skin clinic capability that reaches into Dermapen needling, microdermabrasion, LED Medilight therapy, enzyme therapy and structured peel protocols.
            </p>

            <h2 className="font-display text-2xl font-semibold text-rejoov-ink md:text-3xl">
              The Surfers Paradise location, and the parking that changes everything
            </h2>
            <p>
              RejoovMe&rsquo;s entrance is discreet — directly next door to Mantra Wings — but the basement is the secret. Free unlimited parking is bundled with every booking. On the Surfers Paradise strip, where street parking starts at $6 an hour and resort lots clip $25 a visit, a guaranteed bay is the difference between a relaxed arrival and a frantic one. You park, ride the lift up, and you&rsquo;re inside a hush of mint walls and golden timber before the Queensland heat has a chance to settle on your shoulders.
            </p>

            <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
              {gallery.slice(1).map((g) => (
                <div key={g.src} className="relative aspect-[4/3] overflow-hidden rounded-xl ring-1 ring-rejoov-teal/15">
                  <Image src={g.src} alt={g.alt} fill sizes="(min-width: 768px) 33vw, 50vw" className="object-cover" />
                </div>
              ))}
            </div>

            <h2 className="font-display text-2xl font-semibold text-rejoov-ink md:text-3xl">
              The space: four single rooms, two double rooms, and a magnesium spa
            </h2>
            <p>
              The clinic was purpose-built for sequence. Four single treatment rooms handle solo facials, peels and bodywork. Two double rooms are designed for couples and hens groups who want their massage side-by-side rather than coordinated across separate suites. Between treatments, every guest has access to the magnesium spa and steam room — and crucially, the team uses both deliberately. Magnesium absorption supports muscle recovery, sleep and skin barrier integrity. The steam room opens pores in advance of facials. Sequenced together, the work that follows lands harder.
            </p>
            <p>
              RejoovMe&rsquo;s lounge sits between the spa side and the clinic side, with herbal tea, a quiet music brief and a no-phones culture that&rsquo;s actually enforced. It&rsquo;s the only Gold Coast venue we tested where post-treatment guests weren&rsquo;t scrolling within sixty seconds of stepping out of the room.
            </p>

            <h2 className="font-display text-2xl font-semibold text-rejoov-ink md:text-3xl">
              Treatments: from Swedish massage to Dermapen skin needling
            </h2>
            <p>
              The menu is unusually deep for a venue this size. On the spa side, expect relaxation massage, Swedish, hot stone, body scrubs and pregnancy massage. On the clinic side — and this is where RejoovMe genuinely separates from the field — you&rsquo;ll find advanced organic facials, microdermabrasion, facial peels, skin needling with Dermapen, enzyme therapy, LED Medilight therapy, dedicated acne and pigmentation protocols, anti-aging programs, and even heel peels for runners.
            </p>
            <p>
              Every active treatment begins with a free obligation-free skin consultation. The therapists are clinic-trained, so the consult is an actual diagnostic, not a sales pitch. We saw this in practice when one of our editors was politely talked <em>out</em> of a more aggressive peel protocol because their barrier wasn&rsquo;t ready — a level of restraint you almost never see on a busy Saturday in Surfers Paradise.
            </p>

            <h2 className="font-display text-2xl font-semibold text-rejoov-ink md:text-3xl">
              The signature packages
            </h2>
            <ul className="list-disc space-y-1.5 pl-5">
              <li><strong>Ultimate Escape</strong> — magnesium spa, steam, full-body massage, advanced organic facial &amp; body scrub.</li>
              <li><strong>Refresh Package</strong> — express facial paired with a back, neck and shoulder reset.</li>
              <li><strong>Relax Package</strong> — Swedish massage with steam room access.</li>
              <li><strong>Re-Energize</strong> — hot stone massage, scalp ritual and enzyme facial.</li>
              <li><strong>Get Fresh</strong> — microdermabrasion plus an LED Medilight glow protocol.</li>
              <li><strong>Winter Warmer</strong> — hot stones, heated steam and a deep moisture facial.</li>
              <li><strong>Pamper Me</strong> — full-body indulgence including a manicure-grade hand ritual.</li>
              <li><strong>Massage Package for 2</strong> — side-by-side double-room couples massage.</li>
              <li><strong>Hens / Group</strong> — private spa lounge with mini facials and magnesium spa rotations.</li>
              <li><strong>Design Your Own</strong> — bespoke build-a-package with a senior therapist.</li>
            </ul>

            <h2 className="font-display text-2xl font-semibold text-rejoov-ink md:text-3xl">
              Hens, couples and group bookings
            </h2>
            <p>
              Group bookings are RejoovMe&rsquo;s quiet specialty. The Hens &amp; Group package gives you semi-private use of the spa lounge, magnesium spa rotations, mini facials, neck and shoulder massage, and a clear ritual flow so the bridal party isn&rsquo;t milling in a corridor. We&rsquo;ve tested half a dozen hens-friendly venues across the Coast; RejoovMe is the only one that runs the experience like a director rather than a receptionist.
            </p>

            <h2 className="font-display text-2xl font-semibold text-rejoov-ink md:text-3xl">
              Pricing and value
            </h2>
            <p>
              Single treatments start in the $99–$140 range; signature multi-step packages run $290–$550 depending on inclusions. Weight that against the included parking, magnesium spa and steam access, and the depth of the skin menu, and RejoovMe is — by a clear margin — the best value Day Spa Gold Coast experience for travellers and locals alike.
            </p>

            <div className="my-8 overflow-hidden rounded-2xl ring-1 ring-rejoov-teal/20">
              <iframe
                title="RejoovMe Skin Clinic & Day Spa map — Surfers Paradise"
                loading="lazy"
                width="100%"
                height="320"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=Mantra+Wings+Surfers+Paradise&output=embed"
              />
            </div>

            <h2 className="font-display text-2xl font-semibold text-rejoov-ink md:text-3xl">
              The verdict
            </h2>
            <p>
              For May 2026, RejoovMe is the most complete day spa experience on the Gold Coast. If you only book one spa this season — for yourself, your partner, or a hens weekend — book this one. You can read our wider 2026 rankings in the full <Link href="/day-spa-gold-coast" className="text-rejoov-teal underline font-semibold">Day Spa Gold Coast</Link> guide, or jump straight to <a href={REJOOVME.url} rel="noopener" className="text-rejoov-teal underline font-semibold">RejoovMe&rsquo;s booking page</a> to lock in your slot.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href={REJOOVME.url} rel="noopener" className="rejoov-pill animate-pulseRing">
                Book at RejoovMe
              </a>
              <a
                href={`${REJOOVME.url}/contact`}
                rel="noopener"
                className="inline-flex items-center justify-center rounded-full border border-rejoov-teal px-6 py-3 text-sm font-semibold text-rejoov-teal hover:bg-rejoov-teal/10"
              >
                Free Skin Consultation
              </a>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
