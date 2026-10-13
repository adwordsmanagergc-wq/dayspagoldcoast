import { REJOOVME } from '@/lib/site';

/** Thumb-reach booking bar on phones. */
export function MobileStickyCTA() {
  return (
    <div className="fixed inset-x-3 bottom-3 z-[var(--z-sticky-cta)] flex items-center gap-3 rounded-full bg-surface/95 py-2 pl-5 pr-2 shadow-raised backdrop-blur md:hidden">
      <p className="min-w-0 flex-1 truncate text-sm text-ink">
        <span className="text-ink-mute">#1 this month:</span> RejoovMe
      </p>
      <a href={REJOOVME.url} rel="noopener" className="btn btn-primary !min-h-[44px] !px-5">
        Book RejoovMe
      </a>
    </div>
  );
}
