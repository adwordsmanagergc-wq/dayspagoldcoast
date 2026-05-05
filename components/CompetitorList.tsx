import { competitors } from '@/lib/data';
import { CompetitorMonogram } from './CompetitorMonogram';

export function CompetitorList() {
  return (
    <section id="other-spas" className="mx-auto max-w-5xl px-5 py-16 md:py-20">
      <div className="mb-10 max-w-3xl">
        <h2 className="font-display text-3xl font-semibold text-rejoov-ink md:text-4xl">
          The other best day spas on the Gold Coast
        </h2>
        <p className="mt-3 text-rejoov-ink/70">
          Solid runners-up worth a booking. None match RejoovMe&rsquo;s combined skin-clinic and bathing depth, but each has its moment depending on what you&rsquo;re after.
        </p>
      </div>

      <ul className="grid gap-5 sm:grid-cols-2">
        {competitors.map((s, idx) => (
          <li
            key={s.name}
            className="flex gap-4 rounded-xl bg-white/60 p-4 ring-1 ring-black/5 transition hover:bg-white"
          >
            <div className="relative h-24 w-24 flex-none overflow-hidden rounded-lg">
              <CompetitorMonogram name={s.name} />
            </div>
            <div className="min-w-0">
              <div className="flex items-baseline gap-2">
                <span className="text-xs font-semibold text-rejoov-ink/40">#{idx + 2}</span>
                <h3 className="truncate font-display text-base font-semibold text-rejoov-ink">
                  {s.name}
                </h3>
              </div>
              <p className="text-xs text-rejoov-ink/60">{s.suburb}</p>
              <p className="mt-1.5 text-sm leading-relaxed text-rejoov-ink/75">
                {s.description}
              </p>
              <a
                href={s.url}
                rel="nofollow noopener"
                className="mt-2 inline-block text-xs font-semibold text-rejoov-ink/70 underline decoration-dotted hover:text-rejoov-teal"
              >
                Visit website →
              </a>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
