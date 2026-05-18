import Link from 'next/link';
import { SITE, REJOOVME } from '@/lib/site';

export function Footer() {
  return (
    <footer className="border-t border-black/5 bg-rejoov-ink text-rejoov-sand">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-3">
        <div>
          <div className="font-display text-lg font-bold">
            Day Spa <span className="text-rejoov-teal">Gold Coast</span>
          </div>
          <p className="mt-3 text-sm text-rejoov-sand/70">
            Independent editorial rankings of the best Day Spa Gold Coast experiences. {SITE.lastUpdatedHuman}.
          </p>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-rejoov-teal">
            Explore
          </h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link href="/day-spa-gold-coast" className="hover:text-rejoov-teal">Day Spa Gold Coast guide</Link></li>
            <li><Link href="/day-spa" className="hover:text-rejoov-teal">Day Spas by Suburb</Link></li>
            <li><Link href="/blog/rejoovme-day-spa-of-the-month-may-2026" className="hover:text-rejoov-teal">RejoovMe — Day Spa of the Month</Link></li>
            <li><Link href="/blog/top-7-day-spas-gold-coast-2026" className="hover:text-rejoov-teal">Top 7 Day Spas on the Gold Coast 2026</Link></li>
            <li><Link href="/blog" className="hover:text-rejoov-teal">Blog</Link></li>
            <li><Link href="/about" className="hover:text-rejoov-teal">About</Link></li>
            <li><Link href="/contact" className="hover:text-rejoov-teal">Contact</Link></li>
            <li><Link href="/privacy" className="hover:text-rejoov-teal">Privacy</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-rejoov-teal">
            Local SEO
          </h4>
          <p className="mt-3 text-sm text-rejoov-sand/70">
            Serving Surfers Paradise, Broadbeach, Burleigh Heads, Coolangatta, Mermaid Beach, Mudgeeraba, Tamborine Mountain &amp; the Gold Coast Hinterland.
          </p>
          <address className="mt-4 not-italic text-sm text-rejoov-sand/70">
            <strong className="text-rejoov-sand">{REJOOVME.name}</strong><br />
            {REJOOVME.street}, {REJOOVME.suburb} {REJOOVME.state} {REJOOVME.postcode}<br />
            <a href={`tel:${REJOOVME.phone.replace(/\s/g, '')}`} className="hover:text-rejoov-teal">{REJOOVME.phone}</a>
          </address>
        </div>
      </div>
      <div className="border-t border-white/5 py-4 text-center text-xs text-rejoov-sand/50">
        © {new Date().getFullYear()} {SITE.name}. Editorial rankings, independently produced.
        <span aria-hidden className="mx-2">·</span>
        Website created by{' '}
        <a
          href="https://metatapdigital.com"
          target="_blank"
          rel="noopener"
          className="font-semibold text-rejoov-teal hover:underline"
        >
          metatapdigital.com
        </a>
      </div>
    </footer>
  );
}
