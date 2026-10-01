import { bestFor } from '@/lib/data';
import { SITE } from '@/lib/site';

export function BestFor() {
  return (
    <section id="best-for" className="bg-rejoov-night py-16 text-white md:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-3xl">
          <p className="eyebrow !text-rejoov-gold">Our picks</p>
          <h2 className="mt-2 font-display text-3xl font-semibold md:text-4xl">
            Best day spa Gold Coast for every occasion
          </h2>
          <p className="mt-3 text-white/70">
            Couples, hens, a hotel splurge or a hinterland reset — the right spa depends on the day you want. Here are our {SITE.featureMonth} picks.
          </p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {bestFor.map((b) => (
            <a
              key={b.id}
              href={b.href}
              className="group flex flex-col rounded-2xl bg-white/[0.06] p-5 ring-1 ring-white/10 transition hover:bg-white/[0.1] hover:ring-rejoov-teal/50"
            >
              <h3 className="text-[11px] font-bold uppercase tracking-[0.16em] text-rejoov-gold">{b.label}</h3>
              <p className="mt-3 font-display text-lg font-semibold leading-snug">{b.pick}</p>
              <p className="text-xs text-white/55">{b.where}</p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-white/75">{b.why}</p>
              <span className="mt-4 text-sm font-semibold text-rejoov-teal group-hover:underline">Read more →</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
