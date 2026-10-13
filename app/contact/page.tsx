import type { Metadata } from 'next';
import { SITE } from '@/lib/site';
import { SimplePage } from '@/components/SimplePage';

export const metadata: Metadata = {
  title: 'Contact the Editors',
  description: 'Contact the Day Spa Gold Coast editorial team, venue suggestions, corrections and partnership enquiries.',
  alternates: { canonical: '/contact' }
};

export default function ContactPage() {
  return (
    <SimplePage path="/contact" name="Contact" eyebrow="Contact" title="Contact the editors">
      <p>
        The fastest way to reach us is email: <a href={`mailto:${SITE.email}`}><strong>{SITE.email}</strong></a>.
      </p>
      <h2>Suggest a day spa</h2>
      <p>
        Know a Gold Coast day spa we should review? Send us the name, suburb and what makes it special. We visit new venues every quarter.
      </p>
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
