import { SITE, REJOOVME } from '@/lib/site';
import { competitors } from '@/lib/data';

export function ComparisonTable() {
  const rows = [
    {
      name: REJOOVME.name,
      suburb: REJOOVME.suburb,
      style: 'Skin clinic & day spa',
      bestFor: 'Best overall · couples · hens · facials',
      href: '#day-spa-of-the-month'
    },
    ...competitors.map((c, i) => ({
      name: c.name,
      suburb: c.suburb,
      style: c.style,
      bestFor: c.bestFor,
      href: `#spa-${i + 2}`
    }))
  ];

  return (
    <section id="rankings" className="mx-auto max-w-6xl px-5 pb-6">
      <div className="max-w-3xl">
        <p className="eyebrow">At a glance</p>
        <h2 className="mt-2 font-display text-3xl font-semibold text-rejoov-night md:text-4xl">
          The best day spas on the Gold Coast, ranked ({SITE.featureMonth})
        </h2>
        <p className="mt-3 text-rejoov-ink/70">
          All {rows.length} spas in one table. Tap a name to jump to its review.
        </p>
      </div>

      {/* Phones: compact list. Tablets and up: full table. */}
      <ol className="mt-8 divide-y divide-black/5 rounded-2xl bg-white shadow-card ring-1 ring-black/5 md:hidden">
        {rows.map((r, i) => (
          <li key={r.name}>
            <a href={r.href} className={`flex items-center gap-3 px-4 py-3 ${i === 0 ? 'bg-rejoov-teal/10' : ''}`}>
              <span className={`inline-flex h-8 w-8 flex-none items-center justify-center rounded-full font-display text-sm font-bold ${i === 0 ? 'bg-rejoov-teal text-rejoov-night' : 'bg-rejoov-shell text-rejoov-ink'}`}>
                {i + 1}
              </span>
              <span className="min-w-0 flex-1">
                <span className="block font-semibold leading-snug text-rejoov-night">{r.name}</span>
                <span className="block text-xs text-rejoov-ink/60">{r.suburb} · {r.bestFor}</span>
              </span>
              <span aria-hidden className="text-rejoov-ink/30">›</span>
            </a>
          </li>
        ))}
      </ol>

      <div className="table-scroll mt-8 hidden rounded-2xl bg-white shadow-card ring-1 ring-black/5 md:block">
        <table className="w-full min-w-[640px] text-left text-sm">
          <caption className="sr-only">Day spa Gold Coast rankings — {SITE.featureMonth}</caption>
          <thead className="bg-rejoov-shell text-xs uppercase tracking-wider text-rejoov-ink/60">
            <tr>
              <th scope="col" className="px-4 py-3 font-semibold">Rank</th>
              <th scope="col" className="px-4 py-3 font-semibold">Day spa</th>
              <th scope="col" className="px-4 py-3 font-semibold">Suburb</th>
              <th scope="col" className="px-4 py-3 font-semibold">Style</th>
              <th scope="col" className="px-4 py-3 font-semibold">Best for</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-black/5">
            {rows.map((r, i) => (
              <tr key={r.name} className={i === 0 ? 'bg-rejoov-teal/10' : 'hover:bg-rejoov-sand/60'}>
                <td className="px-4 py-3 font-display text-base font-bold text-rejoov-night">
                  {i === 0 ? <span className="rounded-full bg-rejoov-teal px-2.5 py-0.5 text-rejoov-night">#1</span> : `#${i + 1}`}
                </td>
                <th scope="row" className="px-4 py-3 font-semibold text-rejoov-night">
                  <a href={r.href} className="hover:text-rejoov-deep hover:underline">{r.name}</a>
                  {i === 0 && (
                    <span className="ml-2 whitespace-nowrap rounded-full bg-rejoov-night px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-rejoov-gold">
                      Day Spa of the Month
                    </span>
                  )}
                </th>
                <td className="px-4 py-3 text-rejoov-ink/75">{r.suburb}</td>
                <td className="px-4 py-3 text-rejoov-ink/75">{r.style}</td>
                <td className="px-4 py-3 text-rejoov-ink/75">{r.bestFor}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
