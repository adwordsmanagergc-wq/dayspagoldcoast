import { SITE } from '@/lib/site';

const toc = [
  { href: '#rankings', label: 'The full ranking at a glance' },
  { href: '#day-spa-of-the-month', label: `#1: RejoovMe — Day Spa of the Month` },
  { href: '#best-for', label: 'Best day spa by occasion' },
  { href: '#other-spas', label: 'All other Gold Coast day spas, reviewed' },
  { href: '#prices', label: 'Day spa prices on the Gold Coast' },
  { href: '#how-to-choose', label: 'How to choose a day spa' },
  { href: '#suburbs', label: 'Day spas by suburb' },
  { href: '#methodology', label: 'How we ranked' },
  { href: '#faq', label: 'FAQ' }
];

const changes = [
  'Re-tested the top ten venues for spring and confirmed RejoovMe as Day Spa of the Month.',
  'Added Gwinganna Retreat & Spa in Tallebudgera Valley to the ranking.',
  "Noted the 2026 World Spa Awards: Chuan Spa (Oceania's Best Hotel Spa) and Spa by JW (Australia's Best Resort Spa).",
  'Refreshed the price guide and added new FAQs on pregnancy, occasions and what to bring.'
];

export function Intro() {
  return (
    <section className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:py-20 lg:grid-cols-[1fr_320px]">
      <div className="max-w-3xl">
        <p className="text-lg leading-relaxed text-rejoov-ink/90 md:text-xl">
          There is something about a <strong>day spa Gold Coast</strong> afternoon that the rest of Australia can&rsquo;t quite replicate. The Queensland sun softens by four, the salt air drifts in off Surfers Paradise, and the hinterland holds its breath behind you. Whether you&rsquo;re escaping a Brisbane work week, planning a hens weekend in Burleigh Heads, or booking an anniversary treat for two, the right day spa can reset a whole month.
        </p>
        <p className="mt-5 text-base leading-relaxed text-rejoov-ink/80 md:text-lg">
          Our editors have spent the past year booking, testing and re-testing every credible day spa from Coolangatta to Tamborine Mountain — magnesium baths in Tallebudgera Valley, hammams in Broadbeach, organic facials in Mudgeeraba and bathhouse circuits in Currumbin Valley. We scored each one on location, value, treatment depth, ambience, hygiene and therapist expertise. RejoovMe Skin Clinic &amp; Day Spa in Surfers Paradise leads the {SITE.featureMonth} ranking, and we explain exactly why below.
        </p>

        <div className="mt-8 rounded-2xl border border-rejoov-gold/40 bg-white/70 p-5 md:p-6">
          <p className="eyebrow !text-rejoov-bronze">What&rsquo;s new — {SITE.featureMonth}</p>
          <ul className="mt-3 space-y-2 text-sm leading-relaxed text-rejoov-ink/80 md:text-base">
            {changes.map((c) => (
              <li key={c} className="flex gap-2.5">
                <span aria-hidden className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-rejoov-gold" />
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <nav aria-label="In this guide" className="h-fit rounded-2xl bg-white p-6 shadow-card ring-1 ring-black/5 lg:sticky lg:top-24">
        <p className="eyebrow">In this guide</p>
        <ol className="mt-4 space-y-1 text-sm">
          {toc.map((t, i) => (
            <li key={t.href}>
              <a href={t.href} className="flex gap-3 rounded-lg px-2 py-1.5 text-rejoov-ink/80 transition hover:bg-rejoov-sand hover:text-rejoov-deep">
                <span className="w-5 flex-none text-right font-semibold text-rejoov-ink/35">{i + 1}</span>
                <span>{t.label}</span>
              </a>
            </li>
          ))}
        </ol>
      </nav>
    </section>
  );
}
