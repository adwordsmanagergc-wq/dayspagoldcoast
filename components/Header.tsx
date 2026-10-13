import Link from 'next/link';
import { List, X } from '@phosphor-icons/react/dist/ssr';
import { REJOOVME } from '@/lib/site';

const nav = [
  { href: '/day-spa-gold-coast#rankings', label: 'Rankings' },
  { href: '/day-spa-gold-coast#best-for', label: 'Best For' },
  { href: '/day-spa-gold-coast#prices', label: 'Prices' },
  { href: '/day-spa', label: 'By Suburb' },
  { href: '/blog', label: 'Guides' }
];

export function Wordmark({ className = '' }: { className?: string }) {
  return (
    <span className={`font-display tracking-tight ${className}`}>
      Day Spa <em className="italic text-lagoon">Gold Coast</em>
    </span>
  );
}

export function Header() {
  return (
    <header className="sticky top-0 z-[var(--z-header)] bg-canvas/80 backdrop-blur-md supports-[backdrop-filter]:bg-canvas/70">
      <nav className="mx-auto flex h-[72px] max-w-site items-center justify-between gap-6 px-5 md:px-10" aria-label="Primary">
        <Link href="/day-spa-gold-coast" className="text-[22px] text-ink" aria-label="Day Spa Gold Coast home">
          <Wordmark />
        </Link>

        <ul className="hidden items-center gap-8 text-[15px] text-ink-mute lg:flex">
          {nav.map((n) => (
            <li key={n.href}>
              <Link href={n.href} className="transition-colors duration-150 hover:text-ink">
                {n.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a href={REJOOVME.url} rel="noopener" className="btn btn-primary hidden !min-h-[42px] !px-5 md:inline-flex">
            Book RejoovMe
          </a>
          {/* No-JS mobile menu */}
          <details className="group relative lg:hidden">
            <summary className="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-full text-ink shadow-[inset_0_0_0_1px_var(--hairline)]" aria-label="Menu">
              <List size={20} className="group-open:hidden" aria-hidden />
              <X size={20} className="hidden group-open:block" aria-hidden />
            </summary>
            <ul className="absolute right-0 mt-2 w-64 origin-top-right rounded-surface bg-surface p-2 text-[15px] shadow-raised">
              {[...nav, { href: '/day-spa-gold-coast#faq', label: 'FAQ' }].map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="flex min-h-[44px] items-center rounded-xl px-4 hover:bg-canvas">
                    {n.label}
                  </Link>
                </li>
              ))}
              <li className="p-2">
                <a href={REJOOVME.url} rel="noopener" className="btn btn-primary w-full">Book RejoovMe</a>
              </li>
            </ul>
          </details>
        </div>
      </nav>
      {/* Tide line: reading progress, CSS scroll-driven */}
      <div aria-hidden className="h-px bg-hairline">
        <div className="tide h-px bg-lagoon" />
      </div>
    </header>
  );
}
