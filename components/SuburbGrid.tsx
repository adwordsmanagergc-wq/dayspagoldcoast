import Link from 'next/link';
import { suburbs } from '@/lib/suburbs';

export function SuburbGrid() {
  const sorted = [...suburbs].sort((a, b) => a.travelMins - b.travelMins);
  return (
    <section id="suburbs" className="bg-rejoov-shell py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-3xl">
          <p className="eyebrow">Local guides</p>
          <h2 className="mt-2 font-display text-3xl font-semibold text-rejoov-night md:text-4xl">
            Find a day spa near you on the Gold Coast
          </h2>
          <p className="mt-3 text-rejoov-ink/70">
            Suburb-by-suburb guides with drive times, parking tips and local favourites.
          </p>
        </div>
        <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {sorted.map((s) => (
            <li key={s.slug}>
              <Link
                href={`/day-spa/${s.slug}`}
                className="group flex h-full flex-col rounded-2xl bg-white p-4 ring-1 ring-black/5 transition hover:ring-rejoov-teal/50"
              >
                <span className="font-display font-semibold text-rejoov-night group-hover:text-rejoov-deep">
                  Day Spa {s.name}
                </span>
                <span className="mt-1 text-xs text-rejoov-ink/55">
                  {s.travelMins === 0 ? 'Home of the #1 spa' : `${s.travelMins} min to the #1 spa`}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
