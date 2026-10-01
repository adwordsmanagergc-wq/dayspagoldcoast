import { competitors } from '@/lib/data';
import { CompetitorMonogram } from './CompetitorMonogram';

export function CompetitorList() {
  return (
    <section id="other-spas" className="mx-auto max-w-6xl px-5 py-16 md:py-24">
      <div className="mb-10 max-w-3xl">
        <p className="eyebrow">Ranked #2 – #{competitors.length + 1}</p>
        <h2 className="mt-2 font-display text-3xl font-semibold text-rejoov-night md:text-4xl">
          The other best day spas on the Gold Coast
        </h2>
        <p className="mt-3 text-rejoov-ink/70">
          Strong runners-up worth a booking. None match RejoovMe&rsquo;s combined skin-clinic and bathing depth, but each has its moment depending on what you&rsquo;re after.
        </p>
      </div>

      <ol className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {competitors.map((s, idx) => (
          <li
            key={s.name}
            id={`spa-${idx + 2}`}
            className="flex gap-4 rounded-2xl bg-white p-5 shadow-card ring-1 ring-black/5 transition hover:ring-rejoov-teal/40"
          >
            <div className="relative h-16 w-16 flex-none overflow-hidden rounded-xl sm:h-20 sm:w-20">
              <CompetitorMonogram name={s.name} />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-xs font-bold text-rejoov-ink/40">#{idx + 2}</p>
              <h3 className="font-display text-lg font-semibold leading-snug text-rejoov-night">{s.name}</h3>
              <p className="text-xs text-rejoov-ink/60">{s.suburb}</p>
              <div className="mt-2 flex flex-wrap gap-1.5">
                <span className="rounded-full bg-rejoov-shell px-2.5 py-0.5 text-[11px] font-semibold text-rejoov-ink/75">{s.style}</span>
                <span className="rounded-full bg-rejoov-teal/15 px-2.5 py-0.5 text-[11px] font-semibold text-rejoov-deep">Best for: {s.bestFor}</span>
              </div>
              <p className="mt-2.5 break-words text-sm leading-relaxed text-rejoov-ink/75">{s.description}</p>
              <a
                href={s.url}
                rel="nofollow noopener"
                target="_blank"
                className="mt-2 inline-block text-xs font-semibold text-rejoov-ink/60 underline decoration-dotted hover:text-rejoov-deep"
              >
                Visit website<span className="sr-only"> for {s.name}</span> →
              </a>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
