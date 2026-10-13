import { Drop, UserCheck, Car, UsersThree, CalendarCheck, ListChecks } from '@phosphor-icons/react/dist/ssr';
import { priceGuide, choosingTips } from '@/lib/data';
import { SITE } from '@/lib/site';

const MAX = 600;
const ticks = [0, 100, 200, 300, 400, 500, 600];
const pct = (v: number) => `${(v / MAX) * 100}%`;

/** Floating range bars: one series (no legend), value labels at the tip, table view below. */
export function PriceGuide() {
  return (
    <section id="prices" className="bg-canvas-soft py-24 md:py-32">
      <div className="mx-auto max-w-site px-5 md:px-10">
        <div className="grid gap-6 md:grid-cols-12 md:items-end">
          <h2 className="reveal text-[clamp(40px,5.5vw,76px)] font-light leading-[1.02] md:col-span-7">
            What a Gold Coast day spa costs
          </h2>
          <p className="reveal text-ink-mute md:col-span-4 md:col-start-9">
            Expect <strong className="font-medium text-ink">$99 to $150</strong> for a 60 minute massage, <strong className="font-medium text-ink">$220 to $380</strong> for a half day and <strong className="font-medium text-ink">$390 to $550</strong> for a full day.
          </p>
        </div>

        <figure className="mt-14">
          <figcaption className="text-sm text-ink-mute">Typical price range in AUD, {SITE.featureMonth}</figcaption>
          <div className="relative mt-6">
            {/* recessive grid */}
            <div aria-hidden className="pointer-events-none absolute inset-y-0 left-0 right-0 md:left-[34%]">
              {ticks.map((t) => (
                <span key={t} className="absolute inset-y-0 border-l border-hairline" style={{ left: pct(t) }}>
                  <span className="absolute -bottom-7 -translate-x-1/2 text-xs text-ink-mute">${t}</span>
                </span>
              ))}
            </div>
            <ul className="relative space-y-5 pb-10 md:space-y-4">
              {priceGuide.map((p) => (
                <li key={p.item} className="group grid items-center gap-2 md:grid-cols-[34%_1fr] md:gap-0">
                  <span className="text-[15px] text-ink md:pr-6">{p.item}</span>
                  <span className="relative block h-9">
                    <span className="absolute top-1/2 block h-[14px] -translate-y-1/2" style={{ left: pct(p.min), width: pct(p.max - p.min) }}>
                      <span className="grow-x block h-full rounded-[4px] bg-lagoon-mark transition-opacity duration-150 group-hover:opacity-80" />
                    </span>
                    <span
                      className={`absolute top-1/2 -translate-y-1/2 text-sm text-ink ${p.max / MAX > 0.7 ? '-translate-x-full pr-3' : 'pl-3'}`}
                      style={{ left: p.max / MAX > 0.7 ? pct(p.min) : pct(p.max) }}
                    >
                      <span className="whitespace-nowrap">${p.min} to ${p.max}</span>
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <details className="mt-6 text-sm">
            <summary className="inline-flex min-h-[44px] cursor-pointer list-none items-center text-lagoon underline underline-offset-4">Show as a table</summary>
            <table className="mt-4 w-full max-w-xl text-left">
              <caption className="sr-only">Typical Gold Coast day spa prices, {SITE.featureMonth}</caption>
              <thead className="text-ink-mute"><tr><th scope="col" className="py-2 font-medium">Treatment</th><th scope="col" className="py-2 text-right font-medium">Typical price</th></tr></thead>
              <tbody className="divide-y divide-hairline">
                {priceGuide.map((p) => (
                  <tr key={p.item}><th scope="row" className="py-2 font-normal">{p.item}</th><td className="py-2 text-right">{p.range}</td></tr>
                ))}
              </tbody>
            </table>
          </details>
          <p className="mt-6 max-w-[62ch] text-sm text-ink-mute">
            Ranges are typical prices across the spas in this guide. Weekends, public holidays and December can cost more; always confirm with the venue.
          </p>
        </figure>
      </div>
    </section>
  );
}

const icons = [Drop, UserCheck, Car, UsersThree, CalendarCheck, ListChecks];

export function ChoosingGuide() {
  return (
    <section id="how-to-choose" className="mx-auto max-w-site px-5 py-24 md:px-10 md:py-32">
      <div className="grid gap-12 md:grid-cols-12 md:gap-6">
        <div className="md:col-span-4">
          <h2 className="reveal text-[clamp(32px,3.6vw,48px)] font-light leading-[1.05] md:sticky md:top-28">
            How to choose a day spa on the Gold Coast
          </h2>
        </div>
        <ul className="divide-y divide-hairline border-t border-hairline md:col-span-7 md:col-start-6">
          {choosingTips.map((t, i) => {
            const Icon = icons[i % icons.length];
            return (
              <li key={t.title} className="reveal grid grid-cols-[2.5rem_1fr] gap-4 py-8">
                <Icon size={24} className="mt-1 text-lagoon" aria-hidden />
                <div>
                  <h3 className="text-[24px] font-light leading-snug">{t.title}</h3>
                  <p className="mt-2 max-w-[60ch] text-ink-mute">{t.body}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
