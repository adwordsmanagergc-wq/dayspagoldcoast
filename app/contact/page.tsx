import type { Metadata } from 'next';
import { SITE } from '@/lib/site';
import { SimplePage } from '@/components/SimplePage';
import { InclusionButtons } from '@/components/GetListed';

export const metadata: Metadata = {
  title: 'Contact the Editors',
  description: 'Contact the Day Spa Gold Coast editorial team, venue suggestions, corrections and partnership enquiries.',
  alternates: { canonical: '/contact' },
  openGraph: {
    type: 'website',
    url: '/contact',
    title: 'Contact the Day Spa Gold Coast editors',
    description: 'Suggest a day spa, send a correction or ask about partnerships.',
    images: [{ url: '/og/contact.jpg', width: 1200, height: 630 }]
  }
};

export default function ContactPage() {
  return (
    <SimplePage path="/contact" name="Contact" eyebrow="Contact" title="Contact the editors">
      <p>
        The fastest way to reach us is email: <a href={`mailto:${SITE.email}`}><strong>{SITE.email}</strong></a>.
      </p>
      <h2 id="get-listed">Get your day spa included</h2>
      <p>
        Run or know a Gold Coast day spa we should review? Send us the name, suburb and what makes it special, on WhatsApp ({SITE.inclusion.whatsappDisplay}) or by email ({SITE.inclusion.email}). We visit new venues every quarter.
      </p>
      <InclusionButtons />
      <h2>Corrections</h2>
      <p>
        Spotted an out-of-date price, closed venue or factual error? Tell us the page and what has changed, and we will update it.
      </p>
      <h2>Bookings</h2>
      <p>
        We are an editorial guide and cannot take spa bookings. Please book directly with the venue; every review links to the spa&rsquo;s own website.
      </p>
    </SimplePage>
  );
}
