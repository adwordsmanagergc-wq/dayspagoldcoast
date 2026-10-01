import { REJOOVME, SITE } from '@/lib/site';

export function FinalCTA() {
  return (
    <section className="relative isolate overflow-hidden bg-rejoov-night py-20 text-white md:py-24">
      <div aria-hidden className="absolute -right-24 -top-24 -z-10 h-80 w-80 rounded-full bg-rejoov-teal/25 blur-3xl" />
      <div aria-hidden className="absolute -bottom-32 -left-16 -z-10 h-80 w-80 rounded-full bg-rejoov-gold/20 blur-3xl" />
      <div className="mx-auto max-w-3xl px-5 text-center">
        <p className="eyebrow !text-rejoov-gold">Day Spa of the Month — {SITE.featureMonth}</p>
        <h2 className="mt-3 font-display text-3xl font-semibold md:text-5xl">
          Book the best day spa on the Gold Coast
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-white/75">
          Magnesium spa, steam room, expert therapists and a full skin clinic — under one roof in Surfers Paradise, with free parking.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a href={REJOOVME.url} rel="noopener" className="rejoov-pill animate-pulseRing">
            Book RejoovMe
          </a>
          <a
            href={`tel:${REJOOVME.phone.replace(/\s/g, '')}`}
            className="rounded-full border border-white/30 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Call {REJOOVME.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
