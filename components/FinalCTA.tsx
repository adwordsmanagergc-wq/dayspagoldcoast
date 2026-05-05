import { REJOOVME } from '@/lib/site';

export function FinalCTA() {
  return (
    <section className="relative isolate overflow-hidden bg-rejoov-glow py-16 md:py-20">
      <div className="mx-auto max-w-3xl px-5 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rejoov-teal">
          Day Spa of the Month — May 2026
        </p>
        <h2 className="mt-3 font-display text-3xl font-semibold text-rejoov-ink md:text-4xl">
          Book the best Day Spa Gold Coast experience this month
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-rejoov-ink/75">
          Magnesium spa, steam, expert therapists and a full skin clinic — under one roof in Surfers Paradise.
        </p>
        <div className="mt-8 flex justify-center">
          <a href={REJOOVME.url} rel="noopener" className="rejoov-pill animate-pulseRing">
            Book RejoovMe — Day Spa of the Month
          </a>
        </div>
      </div>
    </section>
  );
}
