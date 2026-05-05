import { REJOOVME } from '@/lib/site';

export function MobileStickyCTA() {
  return (
    <div className="fixed inset-x-3 bottom-3 z-50 md:hidden">
      <a
        href={REJOOVME.url}
        rel="noopener"
        className="rejoov-pill animate-pulseRing flex w-full justify-center text-center"
      >
        Book RejoovMe — Day Spa of the Month
      </a>
    </div>
  );
}
