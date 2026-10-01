import Link from 'next/link';
import { SITE } from '@/lib/site';

const pillars = [
  { name: 'Location', body: 'How easy it is to reach, park and find.' },
  { name: 'Value', body: 'What is genuinely included for the price.' },
  { name: 'Treatment depth', body: 'Clinical skin capability beyond a relaxation menu.' },
  { name: 'Ambience', body: 'Calm, privacy and how well the timing runs.' },
  { name: 'Hygiene', body: 'Linen, water care and clinical compliance.' },
  { name: 'Expertise', body: 'Qualifications, consultations and consistency.' }
];

export function Methodology() {
  return (
    <section id="methodology" className="mx-auto max-w-6xl px-5 py-16 md:py-24">
      <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <p className="eyebrow">Methodology</p>
          <h2 className="mt-2 font-display text-3xl font-semibold text-rejoov-night md:text-4xl">
            How we ranked the best day spas on the Gold Coast
          </h2>
          <div className="mt-5 space-y-4 leading-relaxed text-rejoov-ink/85">
            <p>
              Our rankings are built on editorial visits — paid, anonymous and unannounced wherever venue policy allowed. Every spa was scored across six pillars, then cross-checked against price, parking on the Surfers Paradise strip, and suitability for couples, hens parties and travelling guests.
            </p>
            <p>
              RejoovMe&rsquo;s combination of free unlimited parking, magnesium spa, steam room, double couples rooms and full skin-clinic capability is what carried it to the top. RejoovMe is our Day Spa of the Month partner; ranking positions are editorial and are re-checked every quarter. Read our full{' '}
              <Link href="/about" className="text-rejoov-deep underline">editorial policy</Link>.
            </p>
            <p>
              Know a venue we should review? <a href={`mailto:${SITE.email}`} className="text-rejoov-deep underline">Tell our editors</a>.
            </p>
          </div>
          <dl className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {pillars.map((p) => (
              <div key={p.name} className="rounded-2xl bg-white p-4 ring-1 ring-black/5">
                <dt className="font-semibold text-rejoov-night">{p.name}</dt>
                <dd className="mt-1 text-xs leading-relaxed text-rejoov-ink/65">{p.body}</dd>
              </div>
            ))}
          </dl>
        </div>

        <aside aria-label="About the authors" className="h-fit space-y-4">
          {[
            { p: SITE.author, label: 'Written by', bio: 'Covers Gold Coast wellness, spas and travel. Leads the venue visits and scoring for this guide.' },
            { p: SITE.reviewer, label: 'Treatment info reviewed by', bio: 'Reviews skin-treatment information (peels, needling, LED) on this page for accuracy and safety.' }
          ].map(({ p, label, bio }) => (
            <div key={p.name} className="flex gap-4 rounded-2xl bg-white p-5 shadow-card ring-1 ring-black/5">
              <span aria-hidden className="inline-flex h-12 w-12 flex-none items-center justify-center rounded-full bg-rejoov-night font-display text-sm font-bold text-rejoov-gold">
                {p.name.replace(/^Dr\.?\s+/, '').split(' ').map((w) => w[0]).join('')}
              </span>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-rejoov-ink/50">{label}</p>
                <p className="font-display text-lg font-semibold text-rejoov-night">{p.name}</p>
                <p className="text-xs text-rejoov-deep">{p.role}</p>
                <p className="mt-2 text-sm leading-relaxed text-rejoov-ink/70">{bio}</p>
              </div>
            </div>
          ))}
          <p className="px-1 text-xs text-rejoov-ink/55">
            Last reviewed <time dateTime={SITE.lastUpdatedISO}>{SITE.featureMonth}</time>. Next scheduled refresh: January {SITE.year + 1}.
          </p>
        </aside>
      </div>
    </section>
  );
}
