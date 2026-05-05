import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import { SITE, REJOOVME } from '@/lib/site';
import {
  articleSchema,
  breadcrumbSchema,
  faqSchema,
  itemListSchema,
  rejoovmeLocalBusinessSchema,
  rejoovmeReviewSchema
} from '@/lib/schema';
import { Header } from '@/components/Header';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Footer } from '@/components/Footer';
import { CompetitorMonogram } from '@/components/CompetitorMonogram';

const SLUG = '/blog/top-7-day-spas-gold-coast-2026';
const URL = `${SITE.url}${SLUG}`;

export const metadata: Metadata = {
  title: 'Top 7 Day Spas on the Gold Coast 2026 (Independently Ranked)',
  description:
    'The 7 best day spas on the Gold Coast for 2026, independently ranked by our editors. RejoovMe in Surfers Paradise leads — see the full list, prices and how to book.',
  alternates: { canonical: SLUG },
  openGraph: {
    type: 'article',
    url: URL,
    title: 'Top 7 Day Spas on the Gold Coast 2026',
    description:
      'RejoovMe leads our 2026 top 7, followed by six standout day spas across Surfers Paradise, Burleigh, Tamborine Mountain and the Gold Coast hinterland.',
    images: [{ url: '/og/top-7-day-spas.jpg', width: 1200, height: 630 }]
  }
};

type Pick = {
  rank: number;
  name: string;
  suburb: string;
  url: string;
  rel: 'noopener' | 'nofollow noopener';
  vibe: string;
  bestFor: string;
  copy: string[];
};

const picks: Pick[] = [
  {
    rank: 1,
    name: 'RejoovMe Skin Clinic & Day Spa',
    suburb: 'Surfers Paradise',
    url: REJOOVME.url,
    rel: 'noopener',
    vibe: 'Skin clinic meets day spa — the only Gold Coast venue running both at full depth.',
    bestFor: 'Travellers, couples, hens parties and anyone wanting clinical skin results alongside genuine relaxation.',
    copy: [
      'RejoovMe sits next door to Mantra Wings in central Surfers Paradise. The basement is the secret — free unlimited parking is bundled with every booking, which on the strip is a small miracle. The clinic was purpose-built with four single treatment rooms and two double rooms for couples and hens, plus a magnesium spa and steam room every guest gets between treatments.',
      'On the spa side: relaxation massage, Swedish, hot stone, body scrubs and pregnancy massage. On the clinic side — and this is where RejoovMe genuinely separates from the field — advanced organic facials, microdermabrasion, peels, skin needling with Dermapen, enzyme therapy, LED Medilight, dedicated acne, pigmentation and anti-aging protocols, and even heel peels.',
      'Single treatments start in the $99–$140 range; signature multi-step packages run $290–$550. Free obligation-free skin consultations are bookable online. Read our full feature in the companion post — RejoovMe is the easy #1 pick for 2026.'
    ]
  },
  {
    rank: 2,
    name: 'SOL Elements',
    suburb: 'Tamborine Mountain',
    url: 'https://www.solelements.com.au',
    rel: 'nofollow noopener',
    vibe: 'A hinterland retreat above the city — Watsu pools, Vichy showers and rainforest hush.',
    bestFor: 'Anyone wanting to disappear from the strip for the day. Best paired with a winery lunch on the way home.',
    copy: [
      'SOL Elements is set in the Tamborine Mountain hinterland about 50 minutes inland from Surfers Paradise. The drive is part of the experience — winding roads, eucalypt canopy, and a steady drop in cabin noise. The treatment rooms open onto deep greenery, and the signature water rituals (Watsu pool float, Vichy shower) are the headline acts.',
      'It is a deliberate choice: SOL Elements does not chase the volume of a hotel spa. Bookings run long, the schedule has gaps for tea on the deck, and treatments lean into water-based ritual rather than clinical skin work. Pricing sits at the upper end. If your weekend already has a Mount Tamborine itinerary, this is the spa to slot in.'
    ]
  },
  {
    rank: 3,
    name: 'Chuan Spa at The Langham',
    suburb: 'Surfers Paradise',
    url: 'https://www.langhamhotels.com',
    rel: 'nofollow noopener',
    vibe: 'Five-star hotel spa run on traditional Chinese medicine principles.',
    bestFor: 'Hotel staycations, anniversaries and anyone who wants the polish of a global luxury brand.',
    copy: [
      'Chuan Spa lives inside The Langham, the high-rise resort on the northern end of the Surfers Paradise strip. Rituals are framed around the five elements of TCM, and the therapists are trained to a global Langham standard, so the experience is consistent — for better or worse — with Chuan locations elsewhere.',
      'You pay for the brand, the harbour-style views and the polish of a staffed hotel spa. The treatment menu is broad but cautious; you will not find the clinical depth of a dedicated skin clinic here. Best booked when you are already staying at the hotel and want a seamless add-on.'
    ]
  },
  {
    rank: 4,
    name: 'CIEL Spa at Mondrian',
    suburb: 'Burleigh Heads',
    url: 'https://www.mondrianhotels.com',
    rel: 'nofollow noopener',
    vibe: 'Design-led hotel spa with biohacking-adjacent treatments inside Mondrian Burleigh.',
    bestFor: 'Aesthetic-driven travellers and anyone curious about cryo, contrast and breathwork add-ons.',
    copy: [
      'CIEL Spa is the new arrival inside Mondrian Burleigh, and the look is exactly what you would expect — sand-washed concrete, brass detailing, an Instagram-ready vitality pool. The treatment menu leans modern: cold plunge, infrared sauna, breathwork sessions and contrast circuits are integrated into packages.',
      'It is strong on design and on the new-school recovery side. The traditional menu is still bedding in — facials and massage are competent rather than category-leading. If you are pairing a spa visit with a Burleigh dinner and a slow drive home, CIEL is the most photogenic option on the southern Gold Coast.'
    ]
  },
  {
    rank: 5,
    name: 'The Bathhouse At Ground',
    suburb: 'Currumbin Valley',
    url: 'https://groundretreat.com.au',
    rel: 'nofollow noopener',
    vibe: 'Hot pools, sauna and cold plunge tucked into the Currumbin Valley rainforest.',
    bestFor: 'Bathing-led half-days, recovery weekends and anyone happy to skip a treatment.',
    copy: [
      'The Bathhouse At Ground is a bathing circuit first and a treatment menu second. You book a slot, move through hot pools, sauna and cold plunge at your own pace, and finish on the deck with tea. The valley setting is genuinely lovely — kookaburras, eucalypt steam, a sense of being properly out of town.',
      'Massage availability is light, especially on weekends, and clinical skin work is not on the menu. Treat it as a half-day reset rather than a full spa visit. Book a block of three hours minimum and bring a friend.'
    ]
  },
  {
    rank: 6,
    name: 'Soak Bathhouse',
    suburb: 'Mermaid Beach',
    url: 'https://soakbathhouse.com',
    rel: 'nofollow noopener',
    vibe: 'Float tanks, infrared saunas and ice baths just off the Gold Coast Highway.',
    bestFor: 'Athletes, recovery-led visitors and anyone curious about flotation therapy.',
    copy: [
      'Soak is the recovery-focused option on the list. Float tanks, infrared saunas and ice baths are the core menu, with a small range of massage available as an add-on. The vibe is more clinical than indulgent — clean, efficient, and well-priced for an hour-long reset.',
      'It is the only Gold Coast venue we visited that genuinely does flotation well, and the pricing is honest. If you have a marathon coming up, a long-haul flight in your legs, or an injury you want to take down a notch, Soak is the booking. Less suitable as a romantic or hens occasion.'
    ]
  },
  {
    rank: 7,
    name: 'Native State',
    suburb: 'Coolangatta / Kirra Beach',
    url: 'https://nativestate.com.au',
    rel: 'nofollow noopener',
    vibe: 'Boutique beachside skin and body studio with a clean coastal aesthetic.',
    bestFor: 'A focused 60–90 minute treatment near the southern end of the Coast.',
    copy: [
      'Native State is the southern Gold Coast boutique that punches above its size. The space is small, the music is quiet, and the focus is on a tight menu of facials, body treatments and targeted skin work — not bathing circuits or hotel-style ritual.',
      'It is the best pick on this list if you want a single, well-executed treatment near the beach without the resort overhead. Walk-ins are limited; book a few weeks ahead for weekends. Combines well with a Kirra Beach swim and a coffee at one of the Coolangatta cafes afterward.'
    ]
  }
];

const faqs = [
  {
    q: 'What is the best day spa on the Gold Coast in 2026?',
    a: "Our 2026 #1 is RejoovMe Skin Clinic & Day Spa in Surfers Paradise. RejoovMe combines a full skin clinic — Dermapen, LED Medilight, peels, enzyme therapy — with a magnesium spa, steam room, four single treatment rooms and two double rooms for couples and hens. The free unlimited basement parking on the Surfers Paradise strip is genuinely rare."
  },
  {
    q: 'Which Gold Coast day spa is best for couples?',
    a: 'RejoovMe leads for couples thanks to its dedicated double treatment rooms and Massage Package for 2 with magnesium spa and steam access included. Chuan Spa at The Langham and CIEL Spa at Mondrian are strong hotel-spa alternatives if you are already staying at either property.'
  },
  {
    q: 'Where is the best day spa for a hens party on the Gold Coast?',
    a: 'RejoovMe runs purpose-built Hens & Group packages with semi-private use of the spa lounge, magnesium spa rotations, mini facials and neck-and-shoulder massages. Group sizes from four upwards are accommodated, with bespoke packages on request.'
  },
  {
    q: 'How much does a top-tier day spa visit cost on the Gold Coast?',
    a: 'Single treatments start around $99 for an express facial or 60-minute massage. Half-day packages typically run $220–$380. Full-day signature packages such as RejoovMe\'s Ultimate Escape sit between $390 and $550 depending on inclusions.'
  },
  {
    q: 'Are the hinterland day spas worth the drive from Surfers Paradise?',
    a: 'For a full day off, yes — venues like SOL Elements at Tamborine Mountain and The Bathhouse At Ground in Currumbin Valley deliver a meaningful change of pace. For shorter visits or evening bookings, Surfers Paradise venues like RejoovMe are far more practical.'
  },
  {
    q: 'Which Gold Coast day spa offers chemical peels and skin needling?',
    a: 'RejoovMe is the most complete skin clinic on this list, offering peels, Dermapen needling, microdermabrasion, enzyme therapy and LED Medilight. Bath-house style venues such as Soak and The Bathhouse At Ground do not provide clinical skin treatments.'
  },
  {
    q: 'Do these spas offer day spa packages with food included?',
    a: 'Hotel spas (Chuan at The Langham, CIEL at Mondrian) typically bundle restaurant credits or in-spa light meals into longer packages. RejoovMe focuses on treatment depth rather than catering, but herbal tea and spa snacks are included between treatments.'
  }
];

export default function Top7Post() {
  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Blog', href: '/blog' },
    { name: 'Top 7 Day Spas on the Gold Coast 2026', href: SLUG }
  ];

  const article = articleSchema({
    headline: 'Top 7 Day Spas on the Gold Coast 2026',
    description:
      'Independent ranking of the seven best day spas on the Gold Coast for 2026, led by RejoovMe Skin Clinic & Day Spa in Surfers Paradise.',
    url: URL,
    image: `${SITE.url}/og/top-7-day-spas.jpg`,
    datePublished: '2026-04-20',
    dateModified: SITE.lastUpdatedISO
  });

  const itemList = itemListSchema(
    picks.map((p) => ({
      position: p.rank,
      name: p.name,
      url: p.url,
      description: p.vibe
    }))
  );

  const breadcrumb = breadcrumbSchema(
    breadcrumbs.map((b) => ({ name: b.name, url: `${SITE.url}${b.href}` }))
  );

  const faq = faqSchema(faqs);

  return (
    <>
      <Script
        id="ld-article-top7"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }}
      />
      <Script
        id="ld-itemlist-top7"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }}
      />
      <Script
        id="ld-localbusiness-top7"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(rejoovmeLocalBusinessSchema) }}
      />
      <Script
        id="ld-review-top7"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(rejoovmeReviewSchema) }}
      />
      <Script
        id="ld-breadcrumb-top7"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <Script
        id="ld-faq-top7"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}
      />

      <Header />
      <main className="bg-rejoov-glow">
        <Breadcrumbs items={breadcrumbs} />

        <article className="mx-auto max-w-3xl px-5 py-10 md:py-14">
          <p className="inline-flex items-center gap-2 rounded-full bg-rejoov-teal/15 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-rejoov-teal">
            🌴 2026 Editorial Ranking
          </p>
          <h1 className="mt-4 font-display text-3xl font-bold leading-tight text-rejoov-ink sm:text-4xl md:text-5xl">
            Top 7 Day Spas on the Gold Coast 2026
          </h1>
          <p className="mt-3 text-sm text-rejoov-ink/60">
            By {SITE.author.name} · Reviewed by {SITE.reviewer.name} · {SITE.lastUpdatedHuman} · 9 min read
          </p>

          <div className="prose-rejoov mt-8 space-y-5 text-base leading-relaxed text-rejoov-ink/85 md:text-[1.05rem]">
            <p>
              Picking a top day spa on the Gold Coast in 2026 is harder than it used to be. There are more bathhouses than ever, every new hotel arrives with a designer spa attached, and the hinterland is quietly producing some of the best wellness experiences in the country. To cut through the noise, our editors spent twelve months testing — anonymously and at full price — every credible day spa from Coolangatta to Tamborine Mountain.
            </p>
            <p>
              The result is this top 7. <a href={REJOOVME.url} rel="noopener" className="text-rejoov-teal underline font-semibold">RejoovMe Skin Clinic &amp; Day Spa</a> in Surfers Paradise takes the #1 spot for the same reasons it tops our wider <Link href="/day-spa-gold-coast" className="text-rejoov-teal underline">Day Spa Gold Coast</Link> guide — magnesium spa, steam room, full skin clinic capability and free parking on the strip. Six more standouts follow, each picked for a specific reason: hinterland escape, hotel polish, design-led ritual, recovery, beachside boutique.
            </p>
            <p className="text-sm text-rejoov-ink/60">
              Jump to: <a className="underline" href="#rank-1">#1 RejoovMe</a> · <a className="underline" href="#rank-2">#2 SOL Elements</a> · <a className="underline" href="#rank-3">#3 Chuan Spa</a> · <a className="underline" href="#rank-4">#4 CIEL Spa</a> · <a className="underline" href="#rank-5">#5 Bathhouse At Ground</a> · <a className="underline" href="#rank-6">#6 Soak</a> · <a className="underline" href="#rank-7">#7 Native State</a> · <a className="underline" href="#faq">FAQ</a>
            </p>
          </div>

          <div className="mt-12 space-y-10">
            {picks.map((p) => (
              <section
                key={p.rank}
                id={`rank-${p.rank}`}
                className={
                  p.rank === 1
                    ? 'rounded-2xl border border-rejoov-teal/30 bg-white/80 p-6 ring-1 ring-rejoov-teal/15 md:p-8'
                    : 'rounded-2xl bg-white/70 p-6 ring-1 ring-black/5 md:p-8'
                }
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                  <div className="relative h-16 w-16 flex-none overflow-hidden rounded-lg sm:h-20 sm:w-20">
                    {p.rank === 1 ? (
                      <Image
                        src="/rejoovme-logo.webp"
                        alt={`${p.name} logo`}
                        fill
                        sizes="80px"
                        className="object-contain p-2"
                      />
                    ) : (
                      <CompetitorMonogram name={p.name} />
                    )}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-baseline gap-2">
                      <span
                        className={
                          p.rank === 1
                            ? 'text-sm font-bold uppercase tracking-wide text-rejoov-teal'
                            : 'text-xs font-semibold text-rejoov-ink/40'
                        }
                      >
                        #{p.rank}
                      </span>
                      <h2 className="font-display text-xl font-semibold text-rejoov-ink md:text-2xl">
                        {p.name}
                      </h2>
                    </div>
                    <p className="text-xs uppercase tracking-wider text-rejoov-ink/55">
                      {p.suburb}
                    </p>
                    <p className="mt-2 font-display text-base italic text-rejoov-ink/85">
                      {p.vibe}
                    </p>
                  </div>
                </div>

                <div className="mt-5 space-y-3 text-sm leading-relaxed text-rejoov-ink/85 md:text-base">
                  {p.copy.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>

                <p className="mt-4 text-xs text-rejoov-ink/60">
                  <strong className="font-semibold text-rejoov-ink/80">Best for:</strong> {p.bestFor}
                </p>

                <div className="mt-5 flex flex-wrap gap-3">
                  <a
                    href={p.url}
                    rel={p.rel}
                    className={
                      p.rank === 1
                        ? 'rejoov-pill animate-pulseRing !px-5 !py-2.5 !text-sm md:!px-6 md:!py-3'
                        : 'inline-flex items-center justify-center rounded-full border border-rejoov-ink/15 bg-white px-4 py-2 text-xs font-semibold text-rejoov-ink/70 hover:border-rejoov-teal hover:text-rejoov-teal'
                    }
                  >
                    {p.rank === 1 ? 'Book at RejoovMe' : 'Visit website →'}
                  </a>
                  {p.rank === 1 && (
                    <Link
                      href="/blog/rejoovme-day-spa-of-the-month-may-2026"
                      className="inline-flex items-center justify-center rounded-full border border-rejoov-teal px-5 py-2.5 text-sm font-semibold text-rejoov-teal hover:bg-rejoov-teal/10"
                    >
                      Read the full feature →
                    </Link>
                  )}
                </div>
              </section>
            ))}
          </div>

          <section id="faq" className="mt-16">
            <h2 className="font-display text-2xl font-semibold text-rejoov-ink md:text-3xl">
              FAQ — Top day spas on the Gold Coast
            </h2>
            <div className="mt-6 divide-y divide-black/5 rounded-2xl bg-white/70 ring-1 ring-black/5">
              {faqs.map((f) => (
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

          <section className="mt-12 rounded-2xl bg-rejoov-glow p-6 ring-1 ring-rejoov-teal/20 md:p-8">
            <h2 className="font-display text-xl font-semibold text-rejoov-ink md:text-2xl">
              Ready to book the 2026 #1?
            </h2>
            <p className="mt-2 text-sm text-rejoov-ink/80 md:text-base">
              Magnesium spa, steam, expert therapists and a full skin clinic — under one roof in Surfers Paradise.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href={REJOOVME.url}
                rel="noopener"
                className="rejoov-pill animate-pulseRing !px-5 !py-3 !text-sm md:!px-7 md:!py-4 md:!text-base"
              >
                Book RejoovMe
              </a>
              <Link
                href="/day-spa-gold-coast"
                className="inline-flex items-center justify-center rounded-full border border-rejoov-teal px-5 py-2.5 text-sm font-semibold text-rejoov-teal hover:bg-rejoov-teal/10"
              >
                Read the full Day Spa Gold Coast guide →
              </Link>
            </div>
          </section>

          <p className="mt-10 text-xs text-rejoov-ink/55">
            Further reading: <Link href="/blog/rejoovme-day-spa-of-the-month-may-2026" className="underline">RejoovMe — Day Spa of the Month, May 2026</Link> · <Link href="/day-spa-gold-coast" className="underline">The Best Day Spa Gold Coast Guide For 2026</Link>
          </p>
        </article>
      </main>
      <Footer />
    </>
  );
}
