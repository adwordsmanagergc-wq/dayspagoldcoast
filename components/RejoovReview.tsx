import Image from 'next/image';
import { Check, ArrowUpRight } from '@phosphor-icons/react/dist/ssr';
import { REJOOVME, SITE } from '@/lib/site';

const reasons = [
  'Central Surfers Paradise, free unlimited basement parking',
  'Magnesium spa and steam room included with treatments',
  '4 treatment rooms plus 2 double rooms for couples and groups',
  'Full skin clinic: Dermapen, LED, peels, enzyme therapy',
  'Free skin consultations before any clinical treatment',
  'Organic, results-driven products'
];

const packages = [
  'Ultimate Escape', 'Refresh Package', 'Relax Package', 'Re-Energize', 'Get Fresh',
  'Winter Warmer', 'Pamper Me', 'Massage Package for 2', 'Hens / Group', 'Design Your Own'
];

export function RejoovReview() {
  return (
    <section aria-labelledby="rejoovme-review" className="pb-24 md:pb-32">
      {/* The page's single marquee: signature packages. Pauses on hover/focus; static with reduced motion. */}
      <div className="marquee overflow-hidden border-y border-hairline py-6" aria-label="RejoovMe signature packages">
        <ul className="marquee-track flex w-max gap-12 whitespace-nowrap font-display text-[clamp(28px,3.4vw,48px)] font-light italic text-ink">
          {[...packages, ...packages].map((p, i) => (
            <li key={i} className={`flex items-center gap-12 ${i >= packages.length ? 'marquee-dup' : ''}`} aria-hidden={i >= packages.length}>
              {p}
              <span aria-hidden className="h-2 w-2 rounded-full bg-lagoon" />
            </li>
          ))}
        </ul>
      </div>

      <div className="mx-auto mt-24 grid max-w-site gap-12 px-5 md:grid-cols-12 md:gap-6 md:px-10">
        <aside className="md:col-span-4">
          <div className="md:sticky md:top-28">
            <h2 id="rejoovme-review" className="reveal text-[clamp(32px,3.6vw,48px)] font-light leading-[1.05]">
              Why RejoovMe ranks #1 in {SITE.featureMonth}
            </h2>
            <ul className="mt-8 space-y-4">
              {reasons.map((r) => (
                <li key={r} className="reveal flex gap-3 text-[15px] text-ink">
                  <Check size={18} weight="bold" className="mt-0.5 flex-none text-lagoon" aria-hidden />
                  {r}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={REJOOVME.url} rel="noopener" className="btn btn-primary">
                Book RejoovMe <ArrowUpRight size={16} className="btn-arrow" aria-hidden />
              </a>
              <a href={`${REJOOVME.url}/contact`} rel="noopener" className="btn btn-ghost">Free skin consult</a>
            </div>
          </div>
        </aside>

        <div className="space-y-6 text-ink-mute md:col-span-7 md:col-start-6 md:text-[18px]">
          <p className="reveal">
            RejoovMe sits in one of the most underrated spots on the Gold Coast: a discreet entry next door to Mantra Wings, three minutes from Cavill Avenue and a few more from the beach. The genius of the site is the basement. Free unlimited parking comes with every booking, which on the Surfers Paradise strip is close to a unicorn.
          </p>
          <p className="reveal">
            The space is purpose-built: four single rooms for facials, peels and bodywork, and two double rooms so couples and hens groups can be treated side by side. Between treatments every guest uses the magnesium spa and steam room, sequenced on purpose to relax muscles and soften skin before the work that follows. Most Gold Coast venues offer one or the other. RejoovMe gives you both.
          </p>
          <div className="reveal-wipe relative aspect-[16/10] overflow-hidden rounded-surface">
            <Image src="/rejoovmeimage4.jpg" alt="Magnesium spa pool at RejoovMe, day spa Gold Coast" fill sizes="(min-width: 768px) 55vw, 100vw" className="object-cover" />
          </div>
          <p className="reveal">
            The menu is unusually deep for a venue this size. On the spa side: relaxation, Swedish and hot stone massage, body scrubs and mums-to-be massage. On the clinic side, where RejoovMe really separates from the field: advanced organic facials, microdermabrasion, peels, Dermapen skin needling, enzyme therapy, LED Medilight, and dedicated acne, pigmentation and anti-ageing protocols. The free skin consultation is an actual diagnostic, not a sales pitch.
          </p>
          <p className="reveal">
            A typical Ultimate Escape starts with magnesium spa and steam, moves into a full-body massage, then closes with an advanced organic facial matched to your consultation. It feels indulgent and earned: you leave with the skin clarity you usually only get after a course of clinical treatment.
          </p>
          <p className="reveal">
            Pricing is honest for what is included. Single treatments start around $99 to $140; signature packages run $290 to $550. Weighed against the parking, bathing access and depth of the skin menu, RejoovMe is the best value day spa on the Gold Coast for locals and visitors alike.
          </p>
          <div className="reveal overflow-hidden rounded-surface bg-surface shadow-card">
            <iframe
              title="Map: RejoovMe Skin Clinic & Day Spa, next to Mantra Wings, Surfers Paradise"
              loading="lazy"
              width="100%"
              height="280"
              className="block grayscale-[40%]"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=Mantra+Wings+Surfers+Paradise&output=embed"
            />
            <p className="px-5 py-4 text-sm text-ink-mute">
              {REJOOVME.street}, {REJOOVME.suburb} {REJOOVME.state} {REJOOVME.postcode} ·{' '}
              <a href={`tel:${REJOOVME.phone.replace(/\s/g, '')}`} className="text-ink underline underline-offset-4 hover:text-lagoon">{REJOOVME.phone}</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
