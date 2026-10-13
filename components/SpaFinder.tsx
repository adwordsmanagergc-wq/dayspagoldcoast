'use client';

import { useState } from 'react';
import { AnimatePresence, LayoutGroup, MotionConfig, motion } from 'motion/react';
import { ArrowUpRight } from '@phosphor-icons/react';
import { competitors, occasions, type Occasion } from '@/lib/data';
import { REJOOVME, SITE } from '@/lib/site';
import { CompetitorMonogram } from './CompetitorMonogram';

type Row = {
  rank: number;
  name: string;
  suburb: string;
  style: string;
  bestFor: string;
  description: string;
  url: string;
  tags: Occasion[];
};

const rows: Row[] = [
  {
    rank: 1,
    name: REJOOVME.name,
    suburb: REJOOVME.suburb,
    style: 'Skin clinic & day spa',
    bestFor: 'Best overall',
    description:
      'Magnesium spa, steam room, four treatment rooms and two double rooms, plus a full dermal skin clinic and free unlimited basement parking next door to Mantra Wings.',
    url: '#day-spa-of-the-month',
    tags: ['couples', 'groups', 'skin']
  },
  ...competitors.map((c, i) => ({ rank: i + 2, ...c }))
];

// Spring with no bounce for layout; exits quicker and subtler than enters.
const layoutT = { type: 'spring' as const, duration: 0.45, bounce: 0 };

/**
 * Filterable ranking. Every row is server-rendered (all spas in the HTML for
 * crawlers); filtering is progressive enhancement.
 */
export function SpaFinder() {
  const [active, setActive] = useState<Occasion | 'all'>('all');
  const visible = rows.filter((r) => active === 'all' || r.tags.includes(active));

  return (
    <MotionConfig reducedMotion="user">
      <section id="rankings" className="mx-auto max-w-site px-5 py-24 md:px-10 md:py-32">
        <div className="grid gap-8 md:grid-cols-12 md:items-end">
          <h2 className="reveal text-[clamp(40px,5.5vw,76px)] font-light leading-[1.02] md:col-span-7">
            The best day spas on the Gold Coast, <em className="italic">ranked</em>
          </h2>
          <p className="reveal text-ink-mute md:col-span-4 md:col-start-9">
            All {rows.length} spas we tested for {SITE.featureMonth}. Filter by the day you want; rank stays editorial.
          </p>
        </div>

        <div role="group" aria-label="Filter spas by occasion" className="mt-10 flex flex-wrap gap-2">
          {occasions.map((o) => {
            const on = o.id === active;
            return (
              <button
                key={o.id}
                type="button"
                aria-pressed={on}
                onClick={() => setActive(o.id)}
                className={`relative inline-flex min-h-[44px] items-center rounded-full px-5 text-sm transition-colors duration-150 ${
                  on ? 'text-canvas' : 'text-ink-mute shadow-[inset_0_0_0_1px_var(--hairline)] hover:text-ink'
                } active:scale-[0.97]`}
              >
                {on && (
                  <motion.span
                    layoutId="chip"
                    className="absolute inset-0 rounded-full bg-ink"
                    transition={{ type: 'spring', duration: 0.35, bounce: 0 }}
                  />
                )}
                <span className="relative">{o.label}</span>
              </button>
            );
          })}
        </div>
        <p className="sr-only" aria-live="polite">
          Showing {visible.length} of {rows.length} spas
        </p>

        <LayoutGroup>
          <motion.ol layout className="mt-10 grid gap-4 md:grid-cols-2">
            <AnimatePresence mode="popLayout" initial={false}>
              {visible.map((r) => {
                const featured = r.rank === 1;
                return (
                  <motion.li
                    key={r.name}
                    id={featured ? undefined : `spa-${r.rank}`}
                    layout
                    initial={{ opacity: 0, y: 8, filter: 'blur(4px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)', transition: layoutT }}
                    exit={{ opacity: 0, scale: 0.98, transition: { duration: 0.15, ease: [0.7, 0, 0.84, 0] } }}
                    transition={layoutT}
                    className={`lift group relative flex gap-5 rounded-surface p-5 md:p-6 ${
                      featured ? 'bg-lagoon text-canvas md:col-span-2 md:p-8' : 'bg-surface shadow-card'
                    }`}
                  >
                    <span
                      className={`font-display font-light leading-none ${featured ? 'text-[64px] md:text-[96px]' : 'text-[40px] text-ink-mute'}`}
                      aria-label={`Rank ${r.rank}`}
                    >
                      {r.rank}
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className={`font-display leading-tight ${featured ? 'text-[28px] md:text-[40px] font-light' : 'text-[22px]'}`}>
                            {r.name}
                          </h3>
                          <p className={`mt-1 text-sm ${featured ? 'text-canvas/90' : 'text-ink-mute'}`}>
                            {r.suburb} · {r.style}
                          </p>
                        </div>
                        {!featured && (
                          <div className="hidden h-14 w-14 flex-none overflow-hidden rounded-xl sm:block">
                            <CompetitorMonogram name={r.name} />
                          </div>
                        )}
                      </div>
                      <p className={`mt-4 max-w-[62ch] text-[15px] leading-relaxed ${featured ? 'text-canvas/90 md:text-[17px]' : 'text-ink-mute'}`}>
                        {r.description}
                      </p>
                      <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
                        <span className={`rounded-full px-3 py-1 text-xs ${featured ? 'bg-lagoon-press text-canvas' : 'bg-lagoon-wash text-lagoon-press'}`}>
                          {featured ? `Day Spa of the Month · ${SITE.featureMonth}` : `Best for: ${r.bestFor}`}
                        </span>
                        {featured ? (
                          <a href={REJOOVME.url} rel="noopener" className="btn bg-canvas text-ink hover:bg-surface">
                            Book RejoovMe <ArrowUpRight size={16} className="btn-arrow" aria-hidden />
                          </a>
                        ) : (
                          <a
                            href={r.url}
                            rel="nofollow noopener"
                            target="_blank"
                            className="inline-flex min-h-[44px] items-center gap-1 text-sm text-ink-mute hover:text-ink"
                          >
                            Website<span className="sr-only"> for {r.name}</span>
                            <ArrowUpRight size={14} aria-hidden />
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.li>
                );
              })}
            </AnimatePresence>
          </motion.ol>
        </LayoutGroup>
      </section>
    </MotionConfig>
  );
}
