import Link from 'next/link';
import { SITE } from '@/lib/site';

const pillars = [
  ['Location', 'How easy it is to reach, park and find.'],
  ['Value', 'What is genuinely included for the price.'],
  ['Treatment depth', 'Clinical skin capability beyond a relaxation menu.'],
  ['Ambience', 'Calm, privacy and how well the timing runs.'],
  ['Hygiene', 'Linen, water care and clinical compliance.'],
  ['Expertise', 'Qualifications, consultations and consistency.']
];

const initials = (n: string) => n.replace(/^Dr\.?\s+/, '').split(' ').map((w) => w[0]).join('');

export function Methodology() {
  return (
    <section id="methodology" className="mx-auto max-w-3xl px-5 py-24 md:py-32">
      <h2 className="reveal text-center text-[clamp(32px,3.6vw,48px)] font-light leading-[1.05]">
        How we ranked them
      </h2>
      <p className="reveal mx-auto mt-6 max-w-[62ch] text-center text-ink-mute">
        Editorial visits, paid and anonymous wherever venue policy allowed. Every spa was scored on six pillars, then checked against price, parking and fit for couples, groups and travellers. RejoovMe is our Day Spa of the Month partner; positions are editorial and re-checked every quarter. Read the full{' '}
        <Link href="/about" className="link">editorial policy</Link>.
      </p>

      <dl className="mt-14 grid gap-x-10 gap-y-8 border-t border-hairline pt-10 sm:grid-cols-2 md:grid-cols-3">
        {pillars.map(([k, v]) => (
          <div key={k} className="reveal">
            <dt className="font-display text-[22px] font-light italic text-lagoon">{k}</dt>
            <dd className="mt-1 text-[15px] text-ink-mute">{v}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-14 grid gap-6 border-t border-hairline pt-10 sm:grid-cols-2">
        {[
          { p: SITE.author, label: 'Written by', bio: 'Covers Gold Coast wellness and travel; leads the venue visits and scoring.' },
          { p: SITE.reviewer, label: 'Treatment info reviewed by', bio: 'Checks skin-treatment information on this page for accuracy and safety.' }
        ].map(({ p, label, bio }) => (
          <div key={p.name} className="reveal flex gap-4">
            <span aria-hidden className="inline-flex h-12 w-12 flex-none items-center justify-center rounded-full bg-lagoon-wash font-display text-lagoon-press">
              {initials(p.name)}
            </span>
            <div>
              <p className="text-xs text-ink-mute">{label}</p>
              <p className="font-display text-[20px]">{p.name}</p>
              <p className="text-sm text-ink-mute">{p.role}. {bio}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="mt-10 text-center text-sm text-ink-mute">
        Run a spa we should review? <a href="#get-listed" className="link">Request to be included</a>. Last reviewed <time dateTime={SITE.lastUpdatedISO}>{SITE.featureMonth}</time>.
      </p>
    </section>
  );
}
