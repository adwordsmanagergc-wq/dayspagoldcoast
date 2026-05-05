import type { Metadata, Viewport } from 'next';
import { Fraunces, Nunito_Sans } from 'next/font/google';
import Script from 'next/script';
import { SITE } from '@/lib/site';
import { orgSchema } from '@/lib/schema';
import './globals.css';

const display = Fraunces({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['400', '600', '700']
});

const body = Nunito_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
  weight: ['300', '400', '600', '700']
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Day Spa Gold Coast | 2026's Best Day Spas Ranked & Reviewed",
    template: '%s | Day Spa Gold Coast'
  },
  description:
    'Discover the best Day Spa Gold Coast experiences for 2026. RejoovMe leads our expert-curated rankings of luxury spas in Surfers Paradise & beyond.',
  applicationName: SITE.name,
  alternates: {
    canonical: '/day-spa-gold-coast',
    languages: { 'en-AU': '/day-spa-gold-coast' }
  },
  openGraph: {
    type: 'article',
    locale: 'en_AU',
    siteName: SITE.name,
    title: "Day Spa Gold Coast | 2026's Best Day Spas Ranked & Reviewed",
    description:
      'Expert-curated rankings of the best Day Spa Gold Coast experiences for 2026, led by RejoovMe in Surfers Paradise.',
    url: `${SITE.url}/day-spa-gold-coast`,
    images: [
      {
        url: '/og/day-spa-gold-coast.jpg',
        width: 1200,
        height: 630,
        alt: 'Day Spa Gold Coast — 2026 ranked guide'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: SITE.twitter,
    creator: SITE.twitter,
    title: "Day Spa Gold Coast | 2026's Best Day Spas Ranked & Reviewed",
    description:
      'RejoovMe leads our 2026 rankings of the best Day Spa Gold Coast experiences in Surfers Paradise & beyond.',
    images: ['/og/day-spa-gold-coast.jpg']
  },
  robots: { index: true, follow: true, 'max-image-preview': 'large' }
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#4FD1C5'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-AU" className={`${display.variable} ${body.variable}`}>
      <head>
        <link
          rel="preload"
          as="image"
          href="/images/hero/gold-coast-hero.jpg"
          fetchPriority="high"
        />
        <Script
          id="ld-org"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </head>
      <body className="bg-rejoov-sand text-rejoov-ink antialiased">
        {children}
      </body>
    </html>
  );
}
