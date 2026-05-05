import Link from 'next/link';

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-black/5 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/70">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3"
        aria-label="Primary"
      >
        <Link href="/day-spa-gold-coast" className="font-display text-lg font-bold text-rejoov-ink">
          Day Spa <span className="text-rejoov-teal">Gold Coast</span>
        </Link>
        <ul className="hidden items-center gap-7 text-sm font-semibold text-rejoov-ink/80 md:flex">
          <li><a href="#day-spa-of-the-month" className="hover:text-rejoov-teal">Day Spa of the Month</a></li>
          <li><a href="#other-spas" className="hover:text-rejoov-teal">Other Spas</a></li>
          <li><a href="#methodology" className="hover:text-rejoov-teal">Methodology</a></li>
          <li><a href="#faq" className="hover:text-rejoov-teal">FAQ</a></li>
          <li><Link href="/blog/rejoovme-day-spa-of-the-month-may-2026" className="hover:text-rejoov-teal">Blog</Link></li>
        </ul>
        <a
          href="https://rejoovme.com.au"
          rel="noopener"
          className="rejoov-pill animate-pulseRing hidden md:inline-flex"
        >
          Book RejoovMe
        </a>
      </nav>
    </header>
  );
}
