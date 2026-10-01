import { priceGuide, choosingTips } from '@/lib/data';
import { SITE } from '@/lib/site';

export function PriceGuide() {
  return (
    <section id="prices" className="bg-white py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <p className="eyebrow">Prices · {SITE.featureMonth}</p>
          <h2 className="mt-2 font-display text-3xl font-semibold text-rejoov-night md:text-4xl">
            How much does a day spa on the Gold Coast cost?
          </h2>
          <p className="mt-4 leading-relaxed text-rejoov-ink/80">
            Expect to pay around <strong>$99–$150 for a 60-minute massage</strong>, <strong>$220–$380 for a half-day package</strong> and <strong>$390–$550 for a full-day signature package</strong> at a Gold Coast day spa. Hotel spas sit at the top of the range; bathhouse circuits are the most affordable way in, from about $45.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-rejoov-ink/65">
            Ranges are typical prices observed across the spas in this guide. Weekend, public-holiday and December rates can be higher. Always confirm current pricing with the venue.
          </p>
        </div>
        <div className="table-scroll rounded-2xl ring-1 ring-black/5">
          <table className="w-full text-left text-sm">
            <caption className="sr-only">Typical Gold Coast day spa prices, {SITE.featureMonth}</caption>
            <thead className="bg-rejoov-shell text-xs uppercase tracking-wider text-rejoov-ink/60">
              <tr>
                <th scope="col" className="px-5 py-3 font-semibold">Treatment</th>
                <th scope="col" className="px-5 py-3 text-right font-semibold">Typical price (AUD)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-black/5">
              {priceGuide.map((p) => (
                <tr key={p.item}>
                  <th scope="row" className="px-5 py-3.5 font-normal text-rejoov-ink/85">{p.item}</th>
                  <td className="whitespace-nowrap px-5 py-3.5 text-right font-semibold text-rejoov-night">{p.range}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export function ChoosingGuide() {
  return (
    <section id="how-to-choose" className="mx-auto max-w-6xl px-5 py-16 md:py-24">
      <div className="max-w-3xl">
        <p className="eyebrow">Buyer&rsquo;s guide</p>
        <h2 className="mt-2 font-display text-3xl font-semibold text-rejoov-night md:text-4xl">
          How to choose the right day spa on the Gold Coast
        </h2>
        <p className="mt-3 text-rejoov-ink/70">Six things our editors check before booking anywhere.</p>
      </div>
      <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {choosingTips.map((t, i) => (
          <li key={t.title} className="rounded-2xl bg-white p-6 shadow-card ring-1 ring-black/5">
            <span className="font-display text-3xl font-bold text-rejoov-gold">{String(i + 1).padStart(2, '0')}</span>
            <h3 className="mt-2 font-display text-lg font-semibold text-rejoov-night">{t.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-rejoov-ink/75">{t.body}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
