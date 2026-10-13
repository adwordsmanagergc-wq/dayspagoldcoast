import Image from 'next/image';
import { ArrowUpRight } from '@phosphor-icons/react/dist/ssr';
import { REJOOVME, SITE } from '@/lib/site';

export function FinalCTA() {
  return (
    <section className="mx-auto max-w-site px-5 pb-24 md:px-10 md:pb-32">
      <div className="reveal-wipe relative isolate flex min-h-[520px] items-end overflow-hidden rounded-surface p-8 md:min-h-[600px] md:p-14">
        <Image src="/rejoovmeimage4.jpg" alt="The magnesium spa pool at RejoovMe in Surfers Paradise" fill sizes="(min-width: 1320px) 1240px, 100vw" className="-z-10 object-cover" />
        <span aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-t from-ink/85 via-ink/40 to-ink/5" />
        <div className="max-w-2xl text-canvas">
          <p className="text-sm text-canvas/90">Day Spa of the Month · {SITE.featureMonth}</p>
          <h2 className="mt-4 text-[clamp(40px,6vw,88px)] font-light leading-[1]">
            Your afternoon, <em className="italic">sorted.</em>
          </h2>
          <p className="mt-5 max-w-md text-canvas/90">
            Magnesium spa, steam, expert therapists and a full skin clinic in Surfers Paradise, with free parking.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={REJOOVME.url} rel="noopener" className="btn bg-canvas text-ink hover:bg-surface">
              Book RejoovMe <ArrowUpRight size={16} className="btn-arrow" aria-hidden />
            </a>
            <a href={`tel:${REJOOVME.phone.replace(/\s/g, '')}`} className="btn text-canvas shadow-[inset_0_0_0_1px_rgba(243,241,236,0.5)] hover:bg-canvas/10">
              Call {REJOOVME.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
