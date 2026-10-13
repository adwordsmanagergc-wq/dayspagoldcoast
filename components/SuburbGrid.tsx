import Link from 'next/link';
import { suburbs } from '@/lib/suburbs';

const SPAN = 40; // minutes shown on the ruler
const LEVELS = [88, 64, 40, 16]; // stem heights (%), cycled so close suburbs never collide

/** Drive-time line: every suburb guide plotted by minutes to the #1 spa. */
export function SuburbGrid() {
  const sorted = [...suburbs].sort((a, b) => a.travelMins - b.travelMins);
  return (
    <section id="suburbs" className="bg-canvas-soft py-24 md:py-32">
      <div className="mx-auto max-w-site px-5 md:px-10">
        <div className="grid gap-6 md:grid-cols-12 md:items-end">
          <h2 className="reveal text-[clamp(40px,5.5vw,76px)] font-light leading-[1.02] md:col-span-7">
            Find a day spa near you
          </h2>
          <p className="reveal text-ink-mute md:col-span-4 md:col-start-9">
            Twelve local guides, plotted by drive time to the #1 spa in Surfers Paradise.
          </p>
        </div>

        {/* Wide screens: plotted ruler */}
        <div className="relative mt-16 hidden h-[340px] md:block" role="list" aria-label="Suburb guides by drive time">
          <div aria-hidden className="absolute inset-x-0 bottom-0 border-t border-ink/30">
            {[0, 10, 20, 30, 40].map((m) => (
              <span key={m} className="absolute top-2 -translate-x-1/2 text-xs text-ink-mute" style={{ left: `${(m / SPAN) * 100}%` }}>
                {m} min
              </span>
            ))}
          </div>
          {sorted.map((s, i) => {
            const left = `${Math.max(1.5, (s.travelMins / SPAN) * 100)}%`;
            const h = LEVELS[i % LEVELS.length];
            const flip = s.travelMins / SPAN > 0.7; // keep labels inside the ruler
            return (
              <div key={s.slug} role="listitem" className="absolute bottom-0" style={{ left, height: `${h}%` }}>
                <span aria-hidden className="reveal absolute bottom-0 left-0 block h-full w-px origin-bottom bg-ink/25" />
                <span aria-hidden className="absolute -bottom-[5px] -left-[5px] h-[11px] w-[11px] rounded-full bg-lagoon-mark ring-4 ring-canvas-soft" />
                <Link
                  href={`/day-spa/${s.slug}`}
                  className={`group absolute top-0 -translate-y-1/2 whitespace-nowrap ${flip ? 'right-3 text-right' : 'left-3'}`}
                >
                  <span className="font-display text-[22px] font-light text-ink transition-colors duration-150 group-hover:text-lagoon">
                    {s.name}
                  </span>
                  <span className="ml-2 text-xs text-ink-mute">{s.travelMins === 0 ? 'home of #1' : `${s.travelMins} min`}</span>
                </Link>
              </div>
            );
          })}
        </div>

        {/* Phones: same data as a list */}
        <ul className="mt-10 divide-y divide-hairline border-y border-hairline md:hidden">
          {sorted.map((s) => (
            <li key={s.slug}>
              <Link href={`/day-spa/${s.slug}`} className="flex min-h-[52px] items-center justify-between gap-4">
                <span className="font-display text-[20px] font-light">Day Spa {s.name}</span>
                <span className="text-sm text-ink-mute">{s.travelMins === 0 ? 'Home of #1' : `${s.travelMins} min`}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
