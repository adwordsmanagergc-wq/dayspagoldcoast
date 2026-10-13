import Link from 'next/link';
import { SITE, REJOOVME } from '@/lib/site';
import { suburbs } from '@/lib/suburbs';
import { posts } from '@/lib/posts';
import { Wordmark } from './Header';

export function Footer() {
  return (
    <footer className="relative z-[2] bg-canvas-soft pb-28 text-ink md:pb-10">
      <div className="mx-auto grid max-w-site gap-12 px-5 pt-20 md:grid-cols-12 md:px-10">
        <div className="md:col-span-4">
          <p className="max-w-xs text-ink-mute">
            Independent rankings of the best day spas on the Gold Coast, from Surfers Paradise to the hinterland. {SITE.lastUpdatedHuman}.
          </p>
          <a href={`mailto:${SITE.email}`} className="link mt-4 inline-block">{SITE.email}</a>
          <address className="mt-8 not-italic text-sm text-ink-mute">
            Day Spa of the Month: <span className="text-ink">{REJOOVME.name}</span>
            <br />
            {REJOOVME.street}, {REJOOVME.suburb} {REJOOVME.state} {REJOOVME.postcode}
            <br />
            <a href={`tel:${REJOOVME.phone.replace(/\s/g, '')}`} className="hover:text-ink">{REJOOVME.phone}</a>
          </address>
        </div>

        <nav aria-label="The guide" className="md:col-span-2">
          <h2 className="label">The guide</h2>
          <ul className="mt-4 space-y-2.5 text-[15px]">
            <li><Link href="/day-spa-gold-coast" className="hover:text-lagoon">Best day spas {SITE.year}</Link></li>
            <li><Link href="/day-spa-gold-coast#best-for" className="hover:text-lagoon">By occasion</Link></li>
            <li><Link href="/day-spa-gold-coast#prices" className="hover:text-lagoon">Prices</Link></li>
            <li><Link href="/day-spa-gold-coast#faq" className="hover:text-lagoon">FAQ</Link></li>
            <li><Link href="/about" className="hover:text-lagoon">About &amp; editorial policy</Link></li>
            <li><Link href="/contact" className="hover:text-lagoon">Contact</Link></li>
            <li><Link href="/privacy" className="hover:text-lagoon">Privacy</Link></li>
          </ul>
        </nav>

        <nav aria-label="Day spas by suburb" className="md:col-span-3">
          <h2 className="label">By suburb</h2>
          <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5 text-[15px]">
            {suburbs.map((s) => (
              <li key={s.slug}><Link href={`/day-spa/${s.slug}`} className="hover:text-lagoon">{s.name}</Link></li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Guides" className="md:col-span-3">
          <h2 className="label">Guides</h2>
          <ul className="mt-4 space-y-2.5 text-[15px]">
            {posts.map((p) => (
              <li key={p.slug}><Link href={p.slug} className="hover:text-lagoon">{p.title.replace(/\s[, -]\s/g, ': ')}</Link></li>
            ))}
            <li><Link href="/blog" className="link">All guides</Link></li>
          </ul>
        </nav>
      </div>

      <div className="mx-auto mt-16 max-w-site overflow-hidden px-5 md:px-10">
        <p aria-hidden className="select-none whitespace-nowrap text-[clamp(44px,10vw,150px)] leading-none text-ink/90">
          <Wordmark />
        </p>
      </div>

      <div className="mx-auto mt-8 flex max-w-site flex-col gap-2 border-t border-hairline px-5 pt-6 text-xs text-ink-mute md:flex-row md:justify-between md:px-10">
        <p>© {SITE.year} {SITE.name}. Editorial rankings, independently produced. RejoovMe is our Day Spa of the Month partner.</p>
        <p>
          Website created by{' '}
          <a href="https://metatapdigital.com" target="_blank" rel="noopener" className="text-ink hover:text-lagoon">metatapdigital.com</a>
        </p>
      </div>
    </footer>
  );
}
