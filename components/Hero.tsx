import Image from 'next/image';
import { SITE } from '@/lib/site';

export function Hero({ readingMins }: { readingMins: number }) {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero/gold-coast-day-spa-hero.svg"
          alt="Golden-hour Gold Coast horizon with palm silhouettes — best Day Spa Gold Coast 2026 guide"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-rejoov-sand" />
      </div>
      <div className="mx-auto max-w-5xl px-5 pt-20 pb-28 text-center md:pt-28 md:pb-32">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-rejoov-gold drop-shadow-sm">
          Independently reviewed · {SITE.lastUpdatedHuman} · Locally curated
        </p>
        <h1 className="mx-auto max-w-4xl font-display text-3xl font-bold leading-[1.1] text-white drop-shadow sm:text-4xl md:text-6xl">
          The Best Day Spa Gold Coast Guide For 2026
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base text-white/90 sm:text-lg md:text-xl">
          Salt air, hinterland calm and Surfers Paradise polish — our editors ranked every Day Spa Gold Coast experience worth your weekend.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
          <a
            href="#day-spa-of-the-month"
            className="rejoov-pill animate-pulseRing !px-4 !py-2.5 !text-sm md:!px-7 md:!py-4 md:!text-base"
          >
            <span className="md:hidden">Book RejoovMe</span>
            <span className="hidden md:inline">Book the Day Spa of the Month — RejoovMe</span>
          </a>
          <a
            href="#methodology"
            className="rounded-full border border-white/60 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur hover:bg-white/20 md:px-6 md:py-3"
          >
            How we ranked
          </a>
        </div>
        <p className="mt-6 text-xs text-white/80">
          By {SITE.author.name} · Reviewed by {SITE.reviewer.name} · {readingMins} min read
        </p>
      </div>
      <div className="wave-divider" aria-hidden="true" />
    </section>
  );
}
