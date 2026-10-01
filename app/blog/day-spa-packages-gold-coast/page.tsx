import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { JsonLd } from '@/components/JsonLd';
import { SITE, REJOOVME } from '@/lib/site';
import { posts } from '@/lib/posts';
import { priceGuide } from '@/lib/data';
import { articleSchema, breadcrumbSchema, faqSchema } from '@/lib/schema';
import { Header } from '@/components/Header';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Footer } from '@/components/Footer';
import { MobileStickyCTA } from '@/components/MobileStickyCTA';

const SLUG = '/blog/day-spa-packages-gold-coast';
const URL = `${SITE.url}${SLUG}`;
const TITLE = 'Day Spa Packages Gold Coast: Prices & What’s Included (2026)';
const DESCRIPTION =
  'Gold Coast day spa packages compared for October 2026 — typical prices, what should be included, and the best packages for couples, groups, a full day or a quick reset.';

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: SLUG },
  openGraph: {
    type: 'article',
    url: URL,
    title: TITLE,
    description: DESCRIPTION,
    publishedTime: '2026-10-01',
    images: [{ url: '/og/day-spa-packages-gold-coast.jpg', width: 1200, height: 630 }]
  }
};

const packageTypes = [
  {
    id: 'express',
    name: 'Express reset (1–1.5 hours)',
    price: '$150 – $230',
    includes: 'One hero treatment — usually a 60-minute massage or a facial — plus robe, tea and, at better venues, bathing access before you start.',
    bestFor: 'Lunch-break escapes, first-timers and pre-event glow-ups.',
    pick: 'RejoovMe’s Refresh Package (express facial plus back, neck and shoulder massage) or Relax Package (Swedish massage with steam room access).'
  },
  {
    id: 'half-day',
    name: 'Half-day package (2.5–3.5 hours)',
    price: '$220 – $380',
    includes: 'Bathing (magnesium pool, steam or sauna), a full massage and a facial, with a rest period between treatments.',
    bestFor: 'Birthdays, a proper day off, and anyone who wants visible skin results as well as relaxation.',
    pick: 'RejoovMe’s Re-Energize (hot stone massage, scalp ritual and enzyme facial) or Get Fresh (microdermabrasion plus LED Medilight).'
  },
  {
    id: 'full-day',
    name: 'Full-day signature package (4–6 hours)',
    price: '$390 – $550',
    includes: 'Everything in a half day plus a body scrub or wrap, longer treatment times, and usually a light lunch or refreshments.',
    bestFor: 'Anniversaries, pre-wedding pampering and big-occasion gifts.',
    pick: 'RejoovMe’s Ultimate Escape — magnesium spa, steam, full-body massage, advanced organic facial and body scrub.'
  },
  {
    id: 'couples',
    name: 'Couples package',
    price: '$230 – $340 per couple for 60 minutes; more for multi-treatment packages',
    includes: 'Side-by-side treatments in a shared double room, often with bathing access before or after.',
    bestFor: 'Date days, anniversaries and babymoons (check pregnancy-safe options).',
    pick: 'RejoovMe’s Massage Package for 2, booked in one of its two purpose-built double rooms.'
  },
  {
    id: 'group',
    name: 'Hens & group package',
    price: '$120 – $260 per person',
    includes: 'Exclusive or semi-private use of a lounge, rotations through bathing and mini treatments, and a run-sheet so nobody waits around.',
    bestFor: 'Hens parties, birthdays and corporate wellness afternoons.',
    pick: 'RejoovMe’s Hens / Group package for up to 20 guests. See our hens party ideas guide for the full weekend.'
  }
];

const checklist = [
  'Total hands-on treatment time (not just the total visit length)',
  'Whether bathing — magnesium pool, steam or sauna — is included or extra',
  'A skin consultation before any peel, needling or microdermabrasion',
  'Double room vs. two single rooms for couples bookings',
  'Parking costs — central Surfers Paradise parking can add $20+',
  'Robes, towels, refreshments and shower facilities',
  'Cancellation, reschedule and gift voucher expiry terms'
];

const faqs = [
  {
    q: 'How much is a day spa package on the Gold Coast?',
    a: 'Gold Coast day spa packages typically cost $150–$230 for an express package, $220–$380 for a half day and $390–$550 for a full-day signature package. Couples packages usually start around $230 per couple, and hens or group packages run about $120–$260 per person.'
  },
  {
    q: 'What is usually included in a day spa package?',
    a: 'Most packages combine two or more treatments — typically a massage and a facial — with use of the spa facilities such as a magnesium pool, steam room or sauna. Longer packages add body scrubs, wraps and refreshments. Always check the hands-on treatment time and whether bathing is included.'
  },
  {
    q: 'What is the best day spa package on the Gold Coast?',
    a: 'Our pick for October 2026 is the Ultimate Escape at RejoovMe Skin Clinic & Day Spa in Surfers Paradise: magnesium spa, steam room, full-body massage, advanced organic facial and body scrub, with free unlimited basement parking.'
  },
  {
    q: 'Can I buy a Gold Coast day spa package as a gift?',
    a: 'Yes. Most Gold Coast day spas, including RejoovMe, sell gift vouchers for specific packages or a dollar amount. Check the expiry date and whether the voucher can be used on weekends and public holidays.'
  }
];

export default function PackagesPost() {
  const post = posts.find((p) => p.slug === SLUG)!;
  const breadcrumbs = [
    { name: 'Day Spa Gold Coast', href: '/day-spa-gold-coast' },
    { name: 'Blog', href: '/blog' },
    { name: 'Day Spa Packages Gold Coast', href: SLUG }
  ];

  return (
    <>
      <JsonLd
        data={articleSchema({
          headline: TITLE,
          description: DESCRIPTION,
          url: URL,
          image: `${SITE.url}/og/day-spa-packages-gold-coast.jpg`,
          datePublished: post.datePublished,
          dateModified: post.dateModified ?? post.datePublished,
          author: post.author,
          reviewer: post.reviewer
        })}
      />
      <JsonLd data={breadcrumbSchema(breadcrumbs.map((b) => ({ name: b.name, url: `${SITE.url}${b.href}` })))} />
      <JsonLd data={faqSchema(faqs)} />

      <Header />
      <main id="main">
        <Breadcrumbs items={breadcrumbs} />

        <article className="mx-auto max-w-3xl px-5 py-10 md:py-14">
          <p className="eyebrow">Guide · {post.dateHuman}</p>
          <h1 className="mt-3 font-display text-3xl font-bold leading-tight text-rejoov-night sm:text-4xl md:text-5xl">
            Day Spa Packages on the Gold Coast: Prices &amp; What&rsquo;s Included
          </h1>
          <p className="mt-3 text-sm text-rejoov-ink/60">
            By {post.author.name} · Reviewed by {post.reviewer.name} · <time dateTime={post.datePublished}>{post.dateHuman}</time> · {post.readingMins} min read
          </p>

          <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-2xl ring-1 ring-black/5">
            <Image src={post.cover} alt={post.coverAlt} fill priority sizes="(min-width: 768px) 768px, 100vw" className="object-cover" />
          </div>

          <div className="mt-8 rounded-2xl bg-white p-6 shadow-card ring-1 ring-black/5">
            <p className="eyebrow">Quick answer</p>
            <p className="mt-2 leading-relaxed text-rejoov-ink/85">
              A Gold Coast day spa package costs about <strong>$150–$230 for an express reset</strong>, <strong>$220–$380 for a half day</strong> and <strong>$390–$550 for a full day</strong>. The best value packages include bathing (magnesium pool or steam), at least two hands-on treatments and free parking. Our top pick is the <strong>Ultimate Escape at RejoovMe</strong> in Surfers Paradise.
            </p>
          </div>

          <div className="prose-rejoov mt-10 space-y-5 text-base leading-relaxed text-rejoov-ink/85 md:text-[1.05rem]">
            <p>
              &ldquo;Package&rdquo; is the most overused word on Gold Coast spa menus. Two venues can sell a &ldquo;three-hour indulgence&rdquo; at the same price while one includes ninety minutes of hands-on treatment and the other includes forty, padded out with time in a relaxation lounge. This guide breaks down what each type of <strong>day spa package on the Gold Coast</strong> should include, what you should expect to pay in spring {SITE.year}, and which packages our editors would book again.
            </p>
            <p>
              Looking for the overall ranking instead? Start with our <Link href="/day-spa-gold-coast">best day spa Gold Coast guide</Link>.
            </p>
          </div>

          <h2 className="mt-12 font-display text-2xl font-semibold text-rejoov-night md:text-3xl">
            Types of day spa packages (and what they cost)
          </h2>
          <div className="mt-6 space-y-5">
            {packageTypes.map((p) => (
              <section key={p.id} id={p.id} className="rounded-2xl bg-white p-6 ring-1 ring-black/5">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-xl font-semibold text-rejoov-night">{p.name}</h3>
                  <span className="rounded-full bg-rejoov-teal/15 px-3 py-1 text-sm font-semibold text-rejoov-deep">{p.price}</span>
                </div>
                <dl className="mt-3 space-y-2 text-sm leading-relaxed text-rejoov-ink/80 md:text-base">
                  <div><dt className="inline font-semibold text-rejoov-night">Usually includes: </dt><dd className="inline">{p.includes}</dd></div>
                  <div><dt className="inline font-semibold text-rejoov-night">Best for: </dt><dd className="inline">{p.bestFor}</dd></div>
                  <div><dt className="inline font-semibold text-rejoov-night">Our pick: </dt><dd className="inline">{p.pick}</dd></div>
                </dl>
              </section>
            ))}
          </div>

          <h2 className="mt-12 font-display text-2xl font-semibold text-rejoov-night md:text-3xl">
            Gold Coast day spa price guide
          </h2>
          <div className="table-scroll mt-6 rounded-2xl bg-white ring-1 ring-black/5">
            <table className="w-full text-left text-sm">
              <thead className="bg-rejoov-shell text-xs uppercase tracking-wider text-rejoov-ink/60">
                <tr>
                  <th scope="col" className="px-5 py-3">Treatment</th>
                  <th scope="col" className="px-5 py-3 text-right">Typical price</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-black/5">
                {priceGuide.map((p) => (
                  <tr key={p.item}>
                    <th scope="row" className="px-5 py-3 font-normal">{p.item}</th>
                    <td className="whitespace-nowrap px-5 py-3 text-right font-semibold">{p.range}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="mt-12 font-display text-2xl font-semibold text-rejoov-night md:text-3xl">
            What to check before you book a package
          </h2>
          <ul className="mt-5 space-y-3">
            {checklist.map((c) => (
              <li key={c} className="flex gap-3 text-rejoov-ink/85">
                <span aria-hidden className="mt-1 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-rejoov-teal text-xs font-bold text-rejoov-night">✓</span>
                <span>{c}</span>
              </li>
            ))}
          </ul>

          <div className="prose-rejoov mt-10 space-y-5 text-base leading-relaxed text-rejoov-ink/85 md:text-[1.05rem]">
            <h2 className="font-display text-2xl font-semibold text-rejoov-night md:text-3xl">Why bathing access matters</h2>
            <p>
              The single biggest difference between a good package and a great one is whether it starts with bathing. Twenty minutes in a magnesium pool and steam room warms the muscles before massage and softens the skin before a facial, so your therapist gets further in the same treatment time. RejoovMe builds this into its packages; many central Gold Coast spas charge extra or don&rsquo;t offer it at all.
            </p>
            <h2 className="font-display text-2xl font-semibold text-rejoov-night md:text-3xl">Packages with clinical skin treatments</h2>
            <p>
              If you want results you can see — brighter skin, help with pigmentation or congestion — choose a package that includes a skin consultation followed by microdermabrasion, an enzyme peel or LED therapy. These treatments should be carried out by qualified dermal therapists. Bathhouse-style venues rarely offer them; skin-clinic day spas such as RejoovMe do.
            </p>
            <p>
              Planning a group celebration? Read our <Link href="/blog/hens-party-gold-coast-ideas">hens party Gold Coast ideas</Link>, or find a spa close to home in our <Link href="/day-spa">day spas by suburb</Link> guides.
            </p>
          </div>

          <aside className="mt-12 rounded-3xl bg-rejoov-night p-6 text-white md:p-8">
            <p className="eyebrow !text-rejoov-gold">Day Spa of the Month · {SITE.featureMonth}</p>
            <h2 className="mt-2 font-display text-2xl font-semibold">Book the Ultimate Escape at RejoovMe</h2>
            <p className="mt-2 text-white/75">
              Magnesium spa, steam, full-body massage, advanced organic facial and body scrub — next door to Mantra Wings, Surfers Paradise, with free parking.
            </p>
            <a href={REJOOVME.url} rel="noopener" className="rejoov-pill mt-5">Book RejoovMe</a>
          </aside>

          <section id="faq" className="mt-12">
            <h2 className="font-display text-2xl font-semibold text-rejoov-night md:text-3xl">Day spa packages FAQ</h2>
            <div className="mt-6 divide-y divide-black/5 rounded-2xl bg-white ring-1 ring-black/5">
              {faqs.map((f) => (
                <details key={f.q} className="group p-5">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-display text-base font-semibold text-rejoov-night md:text-lg">
                    <h3>{f.q}</h3>
                    <span aria-hidden className="text-rejoov-deep transition group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 leading-relaxed text-rejoov-ink/80">{f.a}</p>
                </details>
              ))}
            </div>
          </section>
        </article>
      </main>
      <Footer />
      <MobileStickyCTA />
    </>
  );
}
