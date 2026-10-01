import Link from 'next/link';
import { SITE, REJOOVME } from '@/lib/site';
import { suburbs } from '@/lib/suburbs';
import { posts } from '@/lib/posts';

export function Footer() {
  return (
    <footer className="bg-rejoov-night pb-24 text-rejoov-sand md:pb-0">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="font-display text-xl font-bold">
            Day Spa <span className="text-rejoov-teal">Gold Coast</span>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-rejoov-sand/70">
            Independent, locally written rankings of the best day spas on the Gold Coast — from Surfers Paradise to the hinterland. {SITE.lastUpdatedHuman}.
          </p>
          <p className="mt-4 text-sm">
            <a href={`mailto:${SITE.email}`} className="text-rejoov-teal hover:underline">{SITE.email}</a>
          </p>
        </div>

        <div>
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-rejoov-gold">The guide</h2>
          <ul className="mt-4 space-y-2.5 text-sm text-rejoov-sand/80">
            <li><Link href="/day-spa-gold-coast" className="hover:text-rejoov-teal">Best Day Spa Gold Coast {SITE.year}</Link></li>
            <li><Link href="/day-spa-gold-coast#best-for" className="hover:text-rejoov-teal">Best day spa by occasion</Link></li>
            <li><Link href="/day-spa-gold-coast#prices" className="hover:text-rejoov-teal">Gold Coast day spa prices</Link></li>
            <li><Link href="/day-spa-gold-coast#faq" className="hover:text-rejoov-teal">Day spa FAQ</Link></li>
            <li><Link href="/about" className="hover:text-rejoov-teal">About &amp; editorial policy</Link></li>
            <li><Link href="/contact" className="hover:text-rejoov-teal">Contact</Link></li>
            <li><Link href="/privacy" className="hover:text-rejoov-teal">Privacy</Link></li>
          </ul>
        </div>

        <div>
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-rejoov-gold">Day spas by suburb</h2>
          <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5 text-sm text-rejoov-sand/80">
            {suburbs.map((s) => (
              <li key={s.slug}>
                <Link href={`/day-spa/${s.slug}`} className="hover:text-rejoov-teal">{s.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-rejoov-gold">Latest guides</h2>
          <ul className="mt-4 space-y-2.5 text-sm text-rejoov-sand/80">
            {posts.map((p) => (
              <li key={p.slug}>
                <Link href={p.slug} className="hover:text-rejoov-teal">{p.title}</Link>
              </li>
            ))}
            <li><Link href="/blog" className="font-semibold text-rejoov-teal hover:underline">All guides →</Link></li>
          </ul>
          <address className="mt-6 not-italic text-sm text-rejoov-sand/70">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-rejoov-gold">Day Spa of the Month</span><br />
            <strong className="text-rejoov-sand">{REJOOVME.name}</strong><br />
            {REJOOVME.street}, {REJOOVME.suburb} {REJOOVME.state} {REJOOVME.postcode}<br />
            <a href={`tel:${REJOOVME.phone.replace(/\s/g, '')}`} className="hover:text-rejoov-teal">{REJOOVME.phone}</a>
          </address>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-5 text-center text-xs text-rejoov-sand/55">
        © {SITE.year} {SITE.name}. Editorial rankings, independently produced. RejoovMe is our featured Day Spa of the Month partner.
        <span aria-hidden className="mx-2">·</span>
        Website created by{' '}
        <a href="https://metatapdigital.com" target="_blank" rel="noopener" className="font-semibold text-rejoov-teal hover:underline">
          metatapdigital.com
        </a>
      </div>
    </footer>
  );
}
