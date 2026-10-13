import type { Metadata } from 'next';
import { SITE } from '@/lib/site';
import { SimplePage } from '@/components/SimplePage';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How Day Spa Gold Coast handles your information.',
  alternates: { canonical: '/privacy' }
};

export default function PrivacyPage() {
  return (
    <SimplePage path="/privacy" name="Privacy" eyebrow="Legal" title="Privacy policy">
      <p>
        This policy explains how {SITE.name} (&ldquo;we&rdquo;) handles information when you use {SITE.url.replace('https://', '')}. We aim to comply with the Australian Privacy Principles under the <em>Privacy Act 1988</em> (Cth).
      </p>
      <h2>What we collect</h2>
      <p>
        We do not require accounts and do not sell personal information. If you email us, we receive your email address and whatever you include in your message, and use it only to reply. Our hosting provider may keep standard server logs (such as IP address, browser type and pages visited) for security and performance.
      </p>
      <h2>Third-party content</h2>
      <p>
        Some pages embed Google Maps, which may set its own cookies under Google&rsquo;s privacy policy. When you follow a link to a spa&rsquo;s website, that site&rsquo;s privacy policy applies.
      </p>
      <h2>Contact</h2>
      <p>
        Questions or requests about your information: <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
      </p>
      <p className="text-sm text-ink-mute">Last updated <time dateTime={SITE.lastUpdatedISO}>{SITE.featureMonth}</time>.</p>
    </SimplePage>
  );
}
