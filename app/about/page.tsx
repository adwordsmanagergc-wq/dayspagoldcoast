import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE } from '@/lib/site';
import { SimplePage } from '@/components/SimplePage';

export const metadata: Metadata = {
  title: 'About Us & Editorial Policy',
  description:
    'Who writes Day Spa Gold Coast, how we test and rank Gold Coast day spas, and how our Day Spa of the Month partnership works.',
  alternates: { canonical: '/about' },
  openGraph: {
    type: 'website',
    url: '/about',
    title: 'About Day Spa Gold Coast & our editorial policy',
    description: 'Who writes Day Spa Gold Coast, how we test and rank Gold Coast day spas, and how our Day Spa of the Month partnership works.',
    images: [{ url: '/og/about.jpg', width: 1200, height: 630 }]
  }
};

export default function AboutPage() {
  return (
    <SimplePage path="/about" name="About" eyebrow="About us" title="About Day Spa Gold Coast">
      <p>
        Day Spa Gold Coast is an independent guide to the best day spas, bathhouses and wellness retreats on the Gold Coast, Queensland, from Surfers Paradise and Broadbeach to Burleigh Heads, Coolangatta and the hinterland. Our goal is simple: help you book the right spa for the day you want, without wading through sponsored lists.
      </p>

      <h2>Who writes the guide</h2>
      <p>
        The main ranking is written by <strong>{SITE.author.name}</strong>, {SITE.author.role}, with skin-treatment information reviewed by <strong>{SITE.reviewer.name}</strong>, {SITE.reviewer.role}. Individual guides list their own author and reviewer.
      </p>

      <h2>How we test</h2>
      <p>
        Wherever venue policy allows, our editors book and pay for treatments anonymously, like any other guest. Each spa is scored on six pillars: location, value, treatment depth, ambience, hygiene and therapist expertise. The full method is on the{' '}
        <Link href="/day-spa-gold-coast#methodology">Day Spa Gold Coast ranking</Link>.
      </p>

      <h2>Day Spa of the Month &amp; partnerships</h2>
      <p>
        RejoovMe Skin Clinic &amp; Day Spa in Surfers Paradise is our featured Day Spa of the Month partner, and links to RejoovMe may be promotional. Links to other venues are marked <code>nofollow</code> and are never paid. We disclose partnerships on the pages where they appear.
      </p>

      <h2>Keeping it current</h2>
      <p>
        Spas change menus, prices and staff often. We re-check the full ranking every quarter and update prices and FAQs as they move. This guide was last updated in <time dateTime={SITE.lastUpdatedISO}>{SITE.featureMonth}</time>.
      </p>

      <h2>Corrections</h2>
      <p>
        If something is out of date or wrong, email <a href={`mailto:${SITE.email}`}>{SITE.email}</a> and we will review it within five business days.
      </p>
    </SimplePage>
  );
}
