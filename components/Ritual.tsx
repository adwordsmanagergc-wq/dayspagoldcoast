'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import { ArrowUpRight } from '@phosphor-icons/react';
import { REJOOVME, SITE } from '@/lib/site';

const steps = [
  { img: '/rejoovmeimage2.jpg', alt: 'Calm white reception at RejoovMe day spa, Surfers Paradise', title: 'Arrive', body: 'Free unlimited basement parking next door to Mantra Wings, then a lift straight up into the quiet.' },
  { img: '/rejoovmeimage4.jpg', alt: 'Round magnesium spa pool under a skylight at RejoovMe', title: 'Soak', body: 'Magnesium spa and steam room come with your treatments, to loosen muscles and soften skin first.' },
  { img: '/rejoovmeimage3.jpg', alt: 'Guest with champagne in the magnesium pool, a Gold Coast hens day spa favourite', title: 'Celebrate', body: 'Two double rooms for couples, and hens or group packages for up to 20 guests.' },
  { img: '/rejoovmeimage6.jpg', alt: 'Dermal therapist applying a clay mask during an organic facial at RejoovMe', title: 'Treat', body: 'A free skin consultation, then real clinic work: Dermapen, peels, enzyme therapy, LED Medilight.' },
  { img: '/rejoovmeimage7.jpg', alt: 'Therapist giving a facial massage at RejoovMe Skin Clinic', title: 'Leave glowing', body: 'Finish with massage. You walk out with visible skin results, not just a long nap.' }
];

// Track geometry in vw so the pan distance is exact without measuring.
const PAD = 5, INTRO = 36, PANEL = 52, GAP = 3;
const TRACK = PAD + INTRO + GAP + steps.length * PANEL + (steps.length - 1) * GAP + PAD;
const PAN = TRACK - 100;

function usePinned() {
  const reduce = useReducedMotion();
  const [wide, setWide] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 900px)');
    const on = () => setWide(mq.matches);
    on();
    mq.addEventListener('change', on);
    return () => mq.removeEventListener('change', on);
  }, []);
  return wide && !reduce;
}

/**
 * Storytelling motion: the Day Spa of the Month told as a visit, panning
 * sideways as you scroll. Pinned only on wide screens with motion allowed;
 * otherwise a native swipeable row (no transforms).
 */
export function Ritual() {
  const pinned = usePinned();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });
  const x = useTransform(scrollYProgress, [0, 1], ['0vw', `-${PAN}vw`]);

  const intro = (
    <div className="flex flex-none flex-col justify-center" style={pinned ? { width: `${INTRO}vw` } : undefined}>
      <p className="label">Day Spa of the Month · {SITE.featureMonth}</p>
      <h2 className="mt-5 text-[clamp(40px,4.6vw,72px)] font-light leading-[1.02]">
        RejoovMe, the best day spa on the Gold Coast
      </h2>
      <p className="mt-5 max-w-md text-ink-mute">
        A skin clinic and a true day spa in one, two minutes from Cavill Avenue. Here is how an afternoon unfolds.
      </p>
      <div className="mt-8">
        <a href={REJOOVME.url} rel="noopener" className="btn btn-primary">
          Book RejoovMe <ArrowUpRight size={16} className="btn-arrow" aria-hidden />
        </a>
      </div>
    </div>
  );

  const panels = steps.map((s) => (
    <figure
      key={s.title}
      className={`relative flex-none ${pinned ? '' : 'w-[82vw] snap-start sm:w-[min(60vw,520px)]'}`}
      style={pinned ? { width: `${PANEL}vw` } : undefined}
    >
      <div className={`relative overflow-hidden rounded-surface ${pinned ? 'h-[62vh]' : 'aspect-[4/5]'}`}>
        <Image src={s.img} alt={s.alt} fill sizes="(min-width: 900px) 52vw, (min-width: 640px) 520px, 82vw" className="object-cover" />
      </div>
      <figcaption className="mt-5 grid gap-1 md:grid-cols-[10rem_1fr] md:gap-6">
        <span className="font-display text-[28px] font-light italic leading-tight text-lagoon">{s.title}</span>
        <span className="max-w-md text-ink-mute">{s.body}</span>
      </figcaption>
    </figure>
  ));

  if (!pinned) {
    return (
      <section id="day-spa-of-the-month" ref={ref} className="py-24">
        <div className="mx-auto max-w-site px-5 md:px-10">{intro}</div>
        <div className="mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 [scrollbar-width:none] md:px-10" tabIndex={0} aria-label="The RejoovMe visit, in five steps">
          {panels}
        </div>
      </section>
    );
  }

  return (
    <section id="day-spa-of-the-month" ref={ref} className="relative" style={{ height: `${TRACK}vh` }}>
      <div className="sticky top-[73px] flex h-[calc(100dvh-73px)] items-center overflow-hidden">
        <motion.div className="flex items-center will-change-transform" style={{ x, gap: `${GAP}vw`, paddingInline: `${PAD}vw` }}>
          {intro}
          {panels}
        </motion.div>
      </div>
    </section>
  );
}
