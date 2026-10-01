import { REJOOVME, SITE } from '@/lib/site';

/** Thumb-reach booking bar on small screens. Pages render it once, after <Footer />. */
export function MobileStickyCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-black/5 bg-white/95 px-4 py-3 shadow-[0_-8px_24px_-12px_rgba(15,42,43,0.25)] backdrop-blur md:hidden">
      <div className="flex items-center gap-3">
        <div className="min-w-0 flex-1">
          <p className="truncate text-[11px] font-bold uppercase tracking-[0.16em] text-rejoov-deep">
            Day Spa of the Month · {SITE.featureMonth}
          </p>
          <p className="truncate text-sm font-semibold text-rejoov-night">RejoovMe, Surfers Paradise</p>
        </div>
        <a href={REJOOVME.url} rel="noopener" className="rejoov-pill !px-5 !py-2.5 !text-sm">
          Book now
        </a>
      </div>
    </div>
  );
}
