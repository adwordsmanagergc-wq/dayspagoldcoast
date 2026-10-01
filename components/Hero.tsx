import Image from 'next/image';
import { SITE } from '@/lib/site';
import { competitors } from '@/lib/data';

function Initials({ name, tone }: { name: string; tone: string }) {
  const ini = name.replace(/^Dr\.?\s+/, '').split(' ').map((w) => w[0]).slice(0, 2).join('');
  return (
    <span className={`inline-flex h-8 w-8 items-center justify-center rounded-full text-[11px] font-bold ring-2 ring-white/80 ${tone}`} aria-hidden>
      {ini}
    </span>
  );
}

export function Hero({ readingMins }: { readingMins: number }) {
  const total = competitors.length + 1;
  return (
    <section className="relative isolate overflow-hidden bg-rejoov-night">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero/gold-coast-hero.jpg"
          alt="Gold Coast skyline and beach at golden hour — day spa Gold Coast guide"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-rejoov-night/70 via-rejoov-night/55 to-rejoov-night/95" />
      </div>

      <div className="mx-auto max-w-5xl px-5 pb-28 pt-16 text-center md:pb-36 md:pt-24">
        <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-rejoov-gold ring-1 ring-white/15 backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-rejoov-neon" aria-hidden />
          {SITE.lastUpdatedHuman} · {total} spas tested
        </p>
        <h1 className="mx-auto mt-6 max-w-4xl font-display text-[2.15rem] font-bold leading-[1.08] text-white sm:text-5xl md:text-[4rem]">
          Day Spa Gold Coast: The {total} Best Day Spas, Tested &amp; Ranked
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg md:text-xl">
          Salt air, hinterland calm and Surfers Paradise polish. We booked, paid for and reviewed every credible day spa from Coolangatta to Tamborine Mountain — here is where to go in spring {SITE.year}.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a href="#day-spa-of-the-month" className="rejoov-pill animate-pulseRing">
            See the #1 day spa
          </a>
          <a
            href="#rankings"
            className="rounded-full border border-white/40 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
          >
            Compare all {total} spas
          </a>
        </div>

        <div className="mt-9 flex items-center justify-center gap-3 text-left text-xs text-white/80">
          <div className="flex -space-x-2">
            <Initials name={SITE.author.name} tone="bg-rejoov-teal text-rejoov-night" />
            <Initials name={SITE.reviewer.name} tone="bg-rejoov-gold text-rejoov-night" />
          </div>
          <p>
            By <strong className="text-white">{SITE.author.name}</strong> · Reviewed by{' '}
            <strong className="text-white">{SITE.reviewer.name}</strong>
            <br />
            <time dateTime={SITE.lastUpdatedISO}>{SITE.lastUpdatedHuman}</time> · {readingMins} min read
          </p>
        </div>
      </div>
    </section>
  );
}
