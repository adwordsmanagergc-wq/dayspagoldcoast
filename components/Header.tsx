import Link from 'next/link';
import { SITE } from '@/lib/site';

const nav = [
  { href: '/day-spa-gold-coast#rankings', label: 'Rankings' },
  { href: '/day-spa-gold-coast#best-for', label: 'Best For' },
  { href: '/day-spa-gold-coast#prices', label: 'Prices' },
  { href: '/day-spa', label: 'By Suburb' },
  { href: '/blog', label: 'Guides' }
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-black/5 bg-rejoov-sand/85 backdrop-blur-md supports-[backdrop-filter]:bg-rejoov-sand/75">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3" aria-label="Primary">
        <Link href="/day-spa-gold-coast" className="flex items-center gap-2.5 font-display text-lg font-bold text-rejoov-night">
          <svg viewBox="0 0 64 64" className="h-8 w-8" aria-hidden="true">
            <rect width="64" height="64" rx="14" fill="#0F2A2B" />
            <path d="M32 14c-6 8-9 14-9 19a9 9 0 0 0 18 0c0-5-3-11-9-19z" fill="#4FD1C5" />
            <path d="M14 44c6-4 12-4 18 0s12 4 18 0" stroke="#D4AF7A" strokeWidth="3" fill="none" strokeLinecap="round" />
          </svg>
          <span>
            Day Spa <span className="text-rejoov-deep">Gold Coast</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-6 text-sm font-semibold text-rejoov-ink/75 lg:flex">
          {nav.map((n) => (
            <li key={n.href}>
              <Link href={n.href} className="transition hover:text-rejoov-deep">
                {n.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <span className="hidden rounded-full bg-white px-3 py-1 text-xs font-semibold text-rejoov-ink/70 ring-1 ring-black/5 sm:inline">
            {SITE.lastUpdatedHuman}
          </span>
          {/* No-JS mobile menu */}
          <details className="group relative lg:hidden">
            <summary
              className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-full bg-white ring-1 ring-black/10"
              aria-label="Open menu"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5 group-open:hidden" aria-hidden="true">
                <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <svg viewBox="0 0 24 24" className="hidden h-5 w-5 group-open:block" aria-hidden="true">
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </summary>
            <ul className="absolute right-0 mt-2 w-60 rounded-2xl bg-white p-2 text-sm font-semibold text-rejoov-ink shadow-card ring-1 ring-black/5">
              {nav.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="block rounded-xl px-4 py-3 hover:bg-rejoov-sand">
                    {n.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/day-spa-gold-coast#faq" className="block rounded-xl px-4 py-3 hover:bg-rejoov-sand">
                  FAQ
                </Link>
              </li>
            </ul>
          </details>
        </div>
      </nav>
    </header>
  );
}
