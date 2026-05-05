import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import { SITE, REJOOVME } from '@/lib/site';
import {
  articleSchema,
  breadcrumbSchema,
  faqSchema,
  rejoovmeLocalBusinessSchema
} from '@/lib/schema';
import { Header } from '@/components/Header';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Footer } from '@/components/Footer';

const SLUG = '/blog/hens-party-gold-coast-ideas';
const URL = `${SITE.url}${SLUG}`;

export const metadata: Metadata = {
  title: 'Hens Party Gold Coast Ideas 2026: Day Spa, Brunch, Beach & More',
  description:
    'The best hens party Gold Coast ideas for 2026. RejoovMe leads our day spa pick — plus bottomless brunch, cocktail classes, learn-to-surf, hinterland wineries and yacht charters.',
  alternates: { canonical: SLUG },
  openGraph: {
    type: 'article',
    url: URL,
    title: 'Hens Party Gold Coast Ideas 2026',
    description:
      'Plan a hens weekend on the Gold Coast — day spa group bookings at RejoovMe, brunch venues, cocktail classes, surf lessons, hinterland wineries and yacht charters.',
    images: [{ url: '/og/hens-party-gold-coast.jpg', width: 1200, height: 630 }]
  }
};

const faqs = [
  {
    q: 'Where is the best hens party day spa on the Gold Coast?',
    a: 'RejoovMe Skin Clinic & Day Spa in Surfers Paradise runs purpose-built Hens & Group packages for parties of up to twenty guests, with semi-private use of the spa lounge, magnesium spa rotations, steam room access, mini facials and shoulder massage stations. Free unlimited basement parking is included with every booking.'
  },
  {
    q: 'How much does a hens party cost on the Gold Coast?',
    a: 'Budget anywhere from $150 to $400 per guest depending on activities. A day spa hens package typically runs $180–$280 per person. Add bottomless brunch ($75–$95), a cocktail class ($65–$110), a yacht charter ($120–$200 per head for 4 hours), or a private chef dinner ($90–$150) to build a full weekend.'
  },
  {
    q: 'How many people can join a hens party at RejoovMe?',
    a: 'RejoovMe accommodates groups of up to twenty for hens bookings, rotating the party through magnesium spa, steam room, mini facial and massage stations. Smaller intimate parties from four guests upward are also welcome with bespoke packages on request.'
  },
  {
    q: 'What time of year is best for a hens party on the Gold Coast?',
    a: 'Spring (September–November) and early autumn (March–April) are the sweet spots — warm enough for beach activities, cool enough for hinterland wineries, and outside both peak schoolie crowds and summer storms. Winter day spa hens packages are also brilliant value.'
  },
  {
    q: 'Are there hens party activities for non-drinkers on the Gold Coast?',
    a: 'Yes. A day spa morning at RejoovMe, a beach yoga session at Burleigh, learn-to-surf at Currumbin, a hinterland walking circuit at Tamborine Mountain, or a cooking class in Broadbeach all work for alcohol-free hens groups. Most cocktail venues will run mocktail variations on request.'
  },
  {
    q: 'Can you combine a day spa hens with dinner and accommodation?',
    a: 'Absolutely — and it is the most common Gold Coast hens itinerary. A typical weekend runs spa morning at RejoovMe, late lunch in Surfers Paradise or Broadbeach, sunset drinks at the rooftop bar of choice, dinner at a private chef apartment, then breakfast and a beach walk on the Sunday before checkout.'
  },
  {
    q: 'How far in advance should you book a hens party day spa?',
    a: 'For groups of eight or more, book six to eight weeks ahead — particularly for Saturday slots and during wedding season (September through April). Smaller groups of four to six can usually find a slot two to three weeks out. Public holiday weekends sell out months in advance.'
  }
];

type Idea = {
  rank: number;
  title: string;
  vibe: string;
  bestFor: string;
  copy: string[];
  cta?: { label: string; href: string; rel: string; pill?: boolean };
  highlight?: boolean;
};

const ideas: Idea[] = [
  {
    rank: 1,
    title: 'Day Spa hens at RejoovMe — Surfers Paradise',
    vibe: 'A 20-guest spa party with magnesium pool, steam, mini facials and shoulder massage rotations.',
    bestFor: 'The bridal party who wants the calmest, classiest opener to the weekend — and arrives at dinner glowing.',
    highlight: true,
    copy: [
      "RejoovMe is the only Gold Coast venue we've tested that runs hens parties as a properly choreographed experience rather than a stack of back-to-back bookings. The clinic was purpose-built with two double treatment rooms, four single rooms, a magnesium spa and a steam room — so a group of up to twenty can be moving through stations at the same time without any awkward crowding in the lobby.",
      "The Hens & Group package gives you semi-private use of the spa lounge, magnesium spa rotations, steam access, mini organic facials, neck and shoulder massage stations, and herbal tea throughout. Everything is timed by a host, so the bride and her bridesmaids are never left wondering what's next. Free unlimited basement parking is included for every guest — a meaningful saving on the Surfers Paradise strip.",
      "Add-ons that work beautifully: a champagne (or non-alcoholic sparkling) toast on arrival, take-home gift bags styled in your party colours, and a private skin consultation with the clinical team for the bride if she wants pre-wedding guidance. Bespoke packages are quoted on request — talk to the team about timing the spa block before lunch so the rest of the day can flow."
    ],
    cta: { label: 'Book RejoovMe Hens Package', href: REJOOVME.url, rel: 'noopener', pill: true }
  },
  {
    rank: 2,
    title: 'Bottomless brunch in Broadbeach or Burleigh',
    vibe: 'Long, lazy table in the sun with rotating sparkling and a share-style menu.',
    bestFor: 'A late-morning kick-off after the spa, or a stand-alone Saturday for groups who want to keep it simple.',
    copy: [
      "The Gold Coast has quietly become one of Australia's strongest bottomless brunch markets. Broadbeach and Burleigh Heads are the two strongholds — Broadbeach for polish and central convenience, Burleigh for that beach-village vibe and the option to walk the headland afterward.",
      "Look for venues that offer a two- or three-hour package with rotating sparkling, seasonal cocktails and a share-style menu rather than à la carte. Group sizes of eight to sixteen are usually the sweet spot; above that you may need to split tables. Book at least four weeks ahead for Saturdays."
    ],
    cta: {
      label: 'Browse Broadbeach venues',
      href: 'https://www.experiencegoldcoast.com/eat-drink',
      rel: 'nofollow noopener'
    }
  },
  {
    rank: 3,
    title: 'Cocktail or mixology class',
    vibe: 'Hands-on session with a bartender — three signature drinks, a short shake-and-stir lesson and a souvenir glass.',
    bestFor: 'A 90-minute warm-up between spa and dinner, or a full afternoon if you add a tasting flight.',
    copy: [
      "Several Gold Coast bars run private hens classes for groups of six to twenty, typically across ninety minutes to two hours. You get a quick lesson on the classics (gin sour, espresso martini, margarita), each guest builds their own version, and the room scoring is as much about laughs as technique.",
      "Choose a venue with a private mezzanine or function room rather than a public bar block — you want the bridal party to be loud without competing with a Saturday crowd. Cocktail classes pair beautifully after a RejoovMe spa morning: spa, lunch, class, dinner."
    ]
  },
  {
    rank: 4,
    title: 'Learn-to-surf at Currumbin or Coolangatta',
    vibe: 'Two-hour beginner lesson on a soft-top with patient instructors and a beach-side post-mortem afterward.',
    bestFor: 'Active hens groups, tropical weather, brides marrying surfers — and anyone who wants brilliant photos.',
    copy: [
      "The southern Gold Coast — Currumbin Alley, Kirra and Coolangatta — has the best beginner conditions in the state. Several schools run dedicated hens lessons with private instructors, group photos and a post-surf coffee or champagne package.",
      "Plan for a morning slot (the wind is calmer), bring sunscreen and reef-safe everything, and wear bikinis under boardshorts. The standing-up moment is genuinely euphoric, and the photos make the speeches at the wedding two months later. Combines well with a day spa booking the following morning to recover sore shoulders."
    ]
  },
  {
    rank: 5,
    title: 'Hinterland wineries & lunch at Tamborine Mountain',
    vibe: 'A driver-led day trip up the range — three cellar doors, a long lunch at a vineyard restaurant, and a slow drive home.',
    bestFor: 'Bridal parties happy to make the spa morning a different day. Best in spring or autumn.',
    copy: [
      "Tamborine Mountain sits about fifty minutes inland from Surfers Paradise, and the cellar door scene up there has matured into a genuine alternative to the Hunter or the Yarra. A typical hens day-trip itinerary: pickup at 10:00, three cellar doors with cheese boards, a sit-down lunch at one of the vineyard restaurants, and a return to the apartment by 16:00.",
      "Book a private driver or chartered minibus rather than self-driving — designated driver rotations rarely survive the second tasting. Six to fourteen guests fits a standard minibus comfortably. Pair this with a RejoovMe spa morning the next day for the soft landing."
    ]
  },
  {
    rank: 6,
    title: 'Sunset cruise or private yacht charter',
    vibe: 'Three to four hours on the Broadwater with canapés, sparkling and golden-hour light over the skyline.',
    bestFor: 'Photo-driven hens parties, calm-water enthusiasts, and groups who want movement without travel.',
    copy: [
      "The Gold Coast Broadwater is the perfect hens cruise water — calm, sheltered, and lined with the Surfers Paradise skyline for that post-card backdrop. Private charters for ten to twenty guests are widely available; expect to pay $1,500–$3,500 for a four-hour twilight charter with skipper and basic catering.",
      "Tips: confirm whether catering is BYO or in-house, ask about a Bluetooth playlist setup ahead of time, and brief the skipper on the photo moments you want (everyone on the bow, the bride on the prow, the toast). Best from October through May."
    ]
  },
  {
    rank: 7,
    title: 'Private chef dinner at the apartment',
    vibe: 'A three-course tailored menu cooked in your accommodation, with the chef doing all the staging and cleanup.',
    bestFor: 'The Saturday dinner of a full hens weekend — control over noise, music and timing.',
    copy: [
      "After a day of bottomless brunch, surf lessons or a yacht cruise, the last thing a bridal party wants to do is queue at a 9:30 PM restaurant. A private chef solves it: a tailored two- or three-course menu, all the cooking and plating done in your apartment, and a clean kitchen by the time the evening kicks on.",
      "Budget around $90–$150 per guest depending on the menu (seafood and vegetarian options usually price differently). Provide the chef with one no-go ingredient list and one wow factor request. Pair with a Bluetooth speaker and a slow playlist; the night writes itself from there."
    ]
  },
  {
    rank: 8,
    title: 'Beach yoga + photoshoot at Burleigh Heads',
    vibe: 'Sunrise yoga on the headland, a barista coffee at the bottom, and a candid group photo set into the morning.',
    bestFor: 'A slow Sunday morning to close the weekend — gentle, photogenic, and recovery-friendly.',
    copy: [
      "Burleigh Heads at sunrise is one of the great Gold Coast moments. A private group yoga session on the grass at the headland, a coffee run at one of the cafes when you finish, and a roving photographer to capture candid shots is a beautiful close to a weekend that started with brunch and dinner the night before.",
      "Sixty minutes of gentle flow is the right pitch — it is not a fitness session, and most guests will be slightly tender from the day before. Photographers often offer a discounted rate for forty-five minutes of candid coverage if booked alongside a venue. Combines well with checkout-day brunch at Burleigh's main street."
    ]
  }
];

export default function HensPartyPost() {
  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Blog', href: '/blog' },
    { name: 'Hens Party Gold Coast Ideas 2026', href: SLUG }
  ];

  const article = articleSchema({
    headline: 'Hens Party Gold Coast Ideas 2026',
    description:
      'Editorially curated hens party Gold Coast ideas for 2026, led by the RejoovMe Hens & Group day spa package in Surfers Paradise.',
    url: URL,
    image: `${SITE.url}/og/hens-party-gold-coast.jpg`,
    datePublished: '2026-04-10',
    dateModified: SITE.lastUpdatedISO
  });

  const breadcrumb = breadcrumbSchema(
    breadcrumbs.map((b) => ({ name: b.name, url: `${SITE.url}${b.href}` }))
  );
  const faq = faqSchema(faqs);

  return (
    <>
      <Script id="ld-article-hens" type="application/ld+json" strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <Script id="ld-breadcrumb-hens" type="application/ld+json" strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <Script id="ld-faq-hens" type="application/ld+json" strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      <Script id="ld-localbusiness-hens" type="application/ld+json" strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(rejoovmeLocalBusinessSchema) }} />

      <Header />
      <main className="bg-rejoov-glow">
        <Breadcrumbs items={breadcrumbs} />

        <article className="mx-auto max-w-3xl px-5 py-10 md:py-14">
          <p className="inline-flex items-center gap-2 rounded-full bg-rejoov-teal/15 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-rejoov-teal">
            🌴 2026 Hens Party Guide
          </p>
          <h1 className="mt-4 font-display text-3xl font-bold leading-tight text-rejoov-ink sm:text-4xl md:text-5xl">
            Hens Party Gold Coast Ideas 2026
          </h1>
          <p className="mt-3 text-sm text-rejoov-ink/60">
            By {SITE.author.name} · Reviewed by {SITE.reviewer.name} · {SITE.lastUpdatedHuman} · 8 min read
          </p>

          <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-2xl ring-1 ring-rejoov-teal/20">
            <Image
              src="/rejoovmeimage5.jpg"
              alt="Hens party Gold Coast — champagne in the magnesium spa at RejoovMe, Surfers Paradise"
              fill
              priority
              sizes="(min-width: 768px) 768px, 100vw"
              className="object-cover"
            />
          </div>

          <div className="prose-rejoov mt-10 space-y-5 text-base leading-relaxed text-rejoov-ink/85 md:text-[1.05rem]">
            <p>
              The Gold Coast is built for a hens weekend. Within a forty-minute radius you can move from a twenty-guest day spa group booking in Surfers Paradise, to a long bottomless brunch in Broadbeach, to a beginner surf lesson at Currumbin, to a wine-tasting day-trip up Tamborine Mountain — and finish the weekend with sunrise yoga on the Burleigh headland.
            </p>
            <p>
              Below are our eight favourite hens party Gold Coast ideas for 2026, ranked editorially. <a href={REJOOVME.url} rel="noopener" className="text-rejoov-teal underline font-semibold">RejoovMe Skin Clinic &amp; Day Spa</a> opens the list because it is the only venue we have tested that runs hens groups of up to twenty as a properly choreographed experience — not a stack of back-to-back individual bookings.
            </p>
            <p className="text-sm text-rejoov-ink/60">
              Jump to: <a className="underline" href="#idea-1">#1 Day Spa</a> · <a className="underline" href="#idea-2">#2 Brunch</a> · <a className="underline" href="#idea-3">#3 Cocktail class</a> · <a className="underline" href="#idea-4">#4 Surf lesson</a> · <a className="underline" href="#idea-5">#5 Hinterland wineries</a> · <a className="underline" href="#idea-6">#6 Yacht charter</a> · <a className="underline" href="#idea-7">#7 Private chef dinner</a> · <a className="underline" href="#idea-8">#8 Beach yoga</a> · <a className="underline" href="#faq">FAQ</a>
            </p>
          </div>

          <div className="mt-12 space-y-8">
            {ideas.map((it) => (
              <section
                key={it.rank}
                id={`idea-${it.rank}`}
                className={
                  it.highlight
                    ? 'rounded-2xl border border-rejoov-teal/30 bg-white/80 p-6 ring-1 ring-rejoov-teal/15 md:p-8'
                    : 'rounded-2xl bg-white/70 p-6 ring-1 ring-black/5 md:p-8'
                }
              >
                <div className="flex flex-wrap items-baseline gap-2">
                  <span
                    className={
                      it.highlight
                        ? 'text-sm font-bold uppercase tracking-wide text-rejoov-teal'
                        : 'text-xs font-semibold text-rejoov-ink/40'
                    }
                  >
                    #{it.rank}
                  </span>
                  <h2 className="font-display text-xl font-semibold text-rejoov-ink md:text-2xl">
                    {it.title}
                  </h2>
                </div>
                <p className="mt-2 font-display text-base italic text-rejoov-ink/85">{it.vibe}</p>

                <div className="mt-5 space-y-3 text-sm leading-relaxed text-rejoov-ink/85 md:text-base">
                  {it.copy.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>

                <p className="mt-4 text-xs text-rejoov-ink/60">
                  <strong className="font-semibold text-rejoov-ink/80">Best for:</strong> {it.bestFor}
                </p>

                {it.cta && (
                  <div className="mt-5">
                    <a
                      href={it.cta.href}
                      rel={it.cta.rel}
                      className={
                        it.cta.pill
                          ? 'rejoov-pill animate-pulseRing !px-5 !py-2.5 !text-sm md:!px-6 md:!py-3'
                          : 'inline-flex items-center justify-center rounded-full border border-rejoov-ink/15 bg-white px-4 py-2 text-xs font-semibold text-rejoov-ink/70 hover:border-rejoov-teal hover:text-rejoov-teal'
                      }
                    >
                      {it.cta.label}
                    </a>
                  </div>
                )}
              </section>
            ))}
          </div>

          <section className="mt-14 rounded-2xl bg-white/70 p-6 ring-1 ring-black/5 md:p-8">
            <h2 className="font-display text-2xl font-semibold text-rejoov-ink md:text-3xl">
              Sample two-day hens itinerary
            </h2>
            <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm leading-relaxed text-rejoov-ink/85 md:text-base">
              <li><strong>Sat 09:30</strong> — RejoovMe Hens &amp; Group package (magnesium spa, steam, mini facials, massage stations)</li>
              <li><strong>Sat 13:00</strong> — Long bottomless brunch in Broadbeach or Burleigh</li>
              <li><strong>Sat 16:30</strong> — Cocktail or mixology class with a private function space</li>
              <li><strong>Sat 19:30</strong> — Private chef dinner back at the apartment with playlist and speeches</li>
              <li><strong>Sun 06:30</strong> — Sunrise yoga and roving photographer on Burleigh headland</li>
              <li><strong>Sun 09:00</strong> — Casual breakfast on Burleigh main street, then checkout</li>
            </ol>
          </section>

          <section id="faq" className="mt-14">
            <h2 className="font-display text-2xl font-semibold text-rejoov-ink md:text-3xl">
              Hens Party Gold Coast FAQ
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
              Lock in the spa block first
            </h2>
            <p className="mt-2 text-sm text-rejoov-ink/80 md:text-base">
              The RejoovMe Hens &amp; Group package books out 6–8 weeks ahead in wedding season. Reserve the date and build the rest of the weekend around it.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href={REJOOVME.url}
                rel="noopener"
                className="rejoov-pill animate-pulseRing !px-5 !py-3 !text-sm md:!px-7 md:!py-4 md:!text-base"
              >
                Book RejoovMe Hens Package
              </a>
              <Link
                href="/day-spa-gold-coast"
                className="inline-flex items-center justify-center rounded-full border border-rejoov-teal px-5 py-2.5 text-sm font-semibold text-rejoov-teal hover:bg-rejoov-teal/10"
              >
                Read the Day Spa Gold Coast guide →
              </Link>
            </div>
          </section>

          <p className="mt-10 text-xs text-rejoov-ink/55">
            Further reading:{' '}
            <Link href="/blog/top-7-day-spas-gold-coast-2026" className="underline">Top 7 Day Spas on the Gold Coast 2026</Link> ·{' '}
            <Link href="/blog/rejoovme-day-spa-of-the-month-may-2026" className="underline">RejoovMe — Day Spa of the Month, May 2026</Link>
          </p>
        </article>
      </main>
      <Footer />
    </>
  );
}
