import { SITE, REJOOVME } from '@/lib/site';

const top = [
  { name: 'RejoovMe Skin Clinic & Day Spa', where: 'Surfers Paradise', note: 'Best overall' },
  { name: 'SOL Elements', where: 'Tamborine Mountain', note: 'Best hinterland escape' },
  { name: 'Chuan Spa at The Langham', where: 'Surfers Paradise', note: 'Best hotel spa' }
];

const changes = [
  'Re-tested the top ten for spring; RejoovMe stays Day Spa of the Month.',
  'Added Gwinganna Retreat & Spa in Tallebudgera Valley.',
  "Noted the 2026 World Spa Awards: Chuan Spa (Oceania's Best Hotel Spa) and Spa by JW (Australia's Best Resort Spa).",
  'Refreshed prices and added FAQs on pregnancy, occasions and what to bring.'
];

const jump = [
  ['#rankings', 'Rankings'],
  ['#day-spa-of-the-month', 'Day Spa of the Month'],
  ['#best-for', 'Best for'],
  ['#prices', 'Prices'],
  ['#how-to-choose', 'How to choose'],
  ['#suburbs', 'By suburb'],
  ['#methodology', 'Method'],
  ['#faq', 'FAQ']
];

/** Direct answer for featured snippets / AI overviews, then editorial intro. */
export function QuickAnswer() {
  return (
    <section aria-labelledby="quick-answer" className="mx-auto max-w-site px-5 py-24 md:px-10 md:py-32">
      <div className="grid gap-12 md:grid-cols-12 md:gap-6">
        <div className="md:col-span-4">
          <h2 id="quick-answer" className="reveal text-[clamp(32px,3.6vw,48px)] font-light leading-[1.05]">
            What is the best day spa on the Gold Coast?
          </h2>
          <p className="reveal mt-6 text-sm text-ink-mute">
            By <span className="text-ink">{SITE.author.name}</span>, {SITE.author.role}.
            <br />
            Treatment info reviewed by <span className="text-ink">{SITE.reviewer.name}</span>.
            <br />
            <time dateTime={SITE.lastUpdatedISO}>{SITE.lastUpdatedHuman}</time> · 14 min read
          </p>
        </div>

        <div className="md:col-span-7 md:col-start-6">
          <p className="reveal font-display text-[clamp(24px,2.4vw,32px)] font-light leading-[1.3] text-ink">
            The best day spa on the Gold Coast in {SITE.featureMonth} is{' '}
            <a href="#day-spa-of-the-month" className="italic text-lagoon underline decoration-1 underline-offset-[6px]">{REJOOVME.name}</a>{' '}
            in Surfers Paradise: the only spa we tested with a magnesium spa, steam room, full skin clinic, couples rooms and free parking under one roof.
          </p>

          <ol className="mt-12 divide-y divide-hairline border-y border-hairline">
            {top.map((t, i) => (
              <li key={t.name} className="reveal grid grid-cols-[3rem_1fr] items-baseline gap-2 py-5 md:grid-cols-[4rem_1fr_auto]">
                <span className="font-display text-3xl font-light text-ink-mute">{i + 1}</span>
                <span>
                  <span className="text-lg text-ink">{t.name}</span>
                  <span className="block text-sm text-ink-mute md:inline md:before:content-['_·_']">{t.where}</span>
                </span>
                <span className="col-start-2 text-sm text-lagoon md:col-start-3">{t.note}</span>
              </li>
            ))}
          </ol>

          <div className="mt-12 space-y-5 text-ink-mute">
            <p className="reveal max-w-[62ch]">
              There is something about a <strong className="font-medium text-ink">day spa Gold Coast</strong> afternoon the rest of Australia can&rsquo;t quite copy. The sun softens by four, salt air drifts in off Surfers Paradise and the hinterland holds still behind you. Whether you are escaping a Brisbane work week, planning a hens weekend in Burleigh Heads or booking an anniversary for two, the right spa can reset a whole month.
            </p>
            <p className="reveal max-w-[62ch]">
              Over the past year our editors booked and re-tested every credible day spa from Coolangatta to Tamborine Mountain: magnesium baths in Tallebudgera Valley, hammams in Broadbeach, organic facials in Mudgeeraba and bathhouse circuits in Currumbin Valley. Each was scored on location, value, treatment depth, ambience, hygiene and therapist expertise.
            </p>
          </div>

          <details className="reveal group mt-10 rounded-surface bg-surface p-6 shadow-card">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-ink">
              <span>What changed in {SITE.featureMonth}</span>
              <span aria-hidden className="text-lagoon transition-transform duration-200 ease-out group-open:rotate-45">+</span>
            </summary>
            <ul className="mt-4 space-y-2 text-[15px] text-ink-mute">
              {changes.map((c) => (
                <li key={c} className="flex gap-3"><span aria-hidden className="mt-[0.7em] h-px w-3 flex-none bg-lagoon" />{c}</li>
              ))}
            </ul>
          </details>

          <nav aria-label="In this guide" className="reveal mt-10 flex flex-wrap gap-2">
            {jump.map(([href, label]) => (
              <a key={href} href={href} className="inline-flex min-h-[40px] items-center rounded-full px-4 text-sm text-ink-mute shadow-[inset_0_0_0_1px_var(--hairline)] transition-colors duration-150 hover:bg-surface hover:text-ink">
                {label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </section>
  );
}
