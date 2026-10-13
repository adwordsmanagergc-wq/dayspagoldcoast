import type { Metadata, Viewport } from 'next';
import { Newsreader } from 'next/font/google';
import { GeistSans } from 'geist/font/sans';
import { Analytics } from '@vercel/analytics/next';
import { SITE } from '@/lib/site';
import { orgSchema, websiteSchema } from '@/lib/schema';
import { JsonLd } from '@/components/JsonLd';
import './globals.css';

const display = Newsreader({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['300', '400'],
  style: ['normal', 'italic']
});

const TITLE = `Day Spa Gold Coast: 18 Best Day Spas Ranked (${SITE.featureMonth})`;
const DESCRIPTION =
  'The best day spa Gold Coast guide, updated October 2026. 18 spas tested and ranked — prices, packages, couples & hens picks. RejoovMe in Surfers Paradise is #1.';

// Note: no sitewide canonical here — each route declares its own, so pages
// never inherit the main guide's canonical by accident.
export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: TITLE,
    template: '%s | Day Spa Gold Coast'
  },
  description: DESCRIPTION,
  applicationName: SITE.name,
  authors: [{ name: SITE.author.name }],
  creator: SITE.publisher,
  publisher: SITE.publisher,
  formatDetection: { telephone: false },
  // Each page sets its own og:title/description/image; these are only defaults.
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    siteName: SITE.name,
    images: [{ url: SITE.ogImage, width: 1200, height: 630, alt: 'Day Spa Gold Coast' }]
  },
  twitter: {
    card: 'summary_large_image',
    site: SITE.twitter,
    creator: SITE.twitter
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 }
  },
  icons: { icon: '/icon.svg', apple: '/og/logo.png' },
  other: { 'geo.region': 'AU-QLD', 'geo.placename': 'Gold Coast' }
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#F3F1EC'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-AU" className={`${display.variable} ${GeistSans.variable}`}>
      <head>
        <JsonLd data={orgSchema} />
        <JsonLd data={websiteSchema} />
      </head>
      <body className="grain bg-canvas text-ink antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[var(--z-skip)] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-canvas"
        >
          Skip to content
        </a>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
