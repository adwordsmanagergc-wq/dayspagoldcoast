import { Fragment } from 'react';
import Image from 'next/image';
import { ArrowRight, ArrowUpRight } from '@phosphor-icons/react/dist/ssr';
import { SITE, REJOOVME } from '@/lib/site';
import { competitors } from '@/lib/data';

/**
 * Split, asymmetric hero. Motion (CSS only, reduced-motion safe): headline
 * words materialise from blur in sequence; the arch photo wipes up like water
 * draining from glass, then the skyline inset follows.
 */
export function Hero() {
  const total = competitors.length + 1;
  const words = ['Day', 'Spa', 'Gold', 'Coast,'];
  return (
    <section className="relative">
      <div className="mx-auto grid max-w-site items-center gap-10 px-5 pb-16 pt-8 md:min-h-[calc(100dvh-73px)] md:grid-cols-12 md:gap-6 md:px-10 md:pb-12 md:pt-6">
        <div className="md:col-span-7 lg:col-span-7">
          <p className="label arrive" style={{ ['--i' as string]: 0 }}>
            {SITE.lastUpdatedHuman} · {total} spas tested
          </p>
          <h1 className="mt-5 text-[clamp(56px,9.2vw,138px)] font-light leading-[0.92] tracking-[-0.035em] text-ink">
            {/* Real spaces between word spans so the heading text reads "Day Spa Gold Coast, ranked." */}
            {words.map((w, i) => (
              <Fragment key={w}>
                <span className="arrive inline-block" style={{ ['--i' as string]: i + 1 }}>
                  {w}
                </span>{' '}
              </Fragment>
            ))}
            <span className="arrive inline-block pb-[0.08em] italic text-lagoon" style={{ ['--i' as string]: 5 }}>
              ranked.
            </span>
          </h1>
          <p className="arrive mt-7 max-w-[30rem] text-lg leading-relaxed text-ink-mute md:text-xl" style={{ ['--i' as string]: 7 }}>
            {total} day spas from Coolangatta to Tamborine Mountain, booked, paid for and scored. Here is where to go this spring.
          </p>
          <div className="arrive mt-9 flex flex-wrap gap-3" style={{ ['--i' as string]: 8 }}>
            <a href="#rankings" className="btn btn-primary">
              See the ranking <ArrowRight size={16} className="btn-arrow" aria-hidden />
            </a>
            <a href={REJOOVME.url} rel="noopener" className="btn btn-ghost">
              Book RejoovMe <ArrowUpRight size={16} className="btn-arrow" aria-hidden />
            </a>
          </div>
        </div>

        <div className="relative md:col-span-5 lg:col-span-5">
          <div className="wipe arch relative ml-auto aspect-[4/5] w-[78%] overflow-hidden shadow-raised md:w-[88%]" style={{ ['--d' as string]: '150ms' }}>
            <Image
              src="/rejoovmeimage5.jpg"
              alt="Guest relaxing in the magnesium spa pool at RejoovMe, Surfers Paradise, the best day spa on the Gold Coast"
              fill
              priority
              sizes="(min-width: 768px) 38vw, 78vw"
              className="object-cover"
            />
          </div>
          <div className="wipe absolute -bottom-6 left-0 aspect-[4/3] w-[48%] overflow-hidden rounded-surface shadow-raised ring-[6px] ring-canvas md:-bottom-8 md:w-[46%]" style={{ ['--d' as string]: '550ms' }}>
            <Image
              src="/images/hero/gold-coast-hero.jpg"
              alt="Surfers Paradise skyline and beach on the Gold Coast"
              fill
              sizes="(min-width: 768px) 20vw, 48vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
