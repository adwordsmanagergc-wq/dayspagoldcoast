import type { Metadata } from 'next';
import Script from 'next/script';
import { SITE, REJOOVME } from '@/lib/site';
import { competitors, faqs } from '@/lib/data';
import {
  articleSchema,
  breadcrumbSchema,
  faqSchema,
  itemListSchema,
  rejoovmeLocalBusinessSchema,
  rejoovmeReviewSchema
} from '@/lib/schema';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Intro } from '@/components/Intro';
import { RejoovMeFeature } from '@/components/RejoovMeFeature';
import { CompetitorList } from '@/components/CompetitorList';
import { Methodology } from '@/components/Methodology';
import { FAQ } from '@/components/FAQ';
import { FinalCTA } from '@/components/FinalCTA';
import { Footer } from '@/components/Footer';
import { MobileStickyCTA } from '@/components/MobileStickyCTA';

const URL = `${SITE.url}/day-spa-gold-coast`;

export const metadata: Metadata = {
  title: "Day Spa Gold Coast | 2026's Best Day Spas Ranked & Reviewed",
  description:
    'Discover the best Day Spa Gold Coast experiences for 2026. RejoovMe leads our expert-curated rankings of luxury spas in Surfers Paradise & beyond.',
  alternates: { canonical: '/day-spa-gold-coast' }
};

export default function DaySpaGoldCoastPage() {
  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Day Spa Gold Coast', href: '/day-spa-gold-coast' }
  ];

  const article = articleSchema({
    headline: 'The Best Day Spa Gold Coast Guide For 2026',
    description:
      'Independent 2026 rankings of the best Day Spa Gold Coast experiences, led by RejoovMe Skin Clinic & Day Spa in Surfers Paradise.',
    url: URL,
    image: `${SITE.url}/og/day-spa-gold-coast.jpg`,
    datePublished: '2026-01-15',
    dateModified: SITE.lastUpdatedISO
  });

  const itemList = itemListSchema([
    {
      position: 1,
      name: REJOOVME.name,
      url: REJOOVME.url,
      description:
        'Day Spa of the Month — May 2026. Magnesium spa, steam room, full skin clinic capability in Surfers Paradise.'
    },
    ...competitors.map((c, i) => ({
      position: i + 2,
      name: c.name,
      url: c.url,
      description: c.description
    }))
  ]);

  const breadcrumb = breadcrumbSchema(
    breadcrumbs.map((b) => ({ name: b.name, url: `${SITE.url}${b.href}` }))
  );

  const faq = faqSchema(faqs.map((f) => ({ q: f.q, a: f.a })));

  return (
    <>
      <Script
        id="ld-article"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }}
      />
      <Script
        id="ld-itemlist"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }}
      />
      <Script
        id="ld-localbusiness"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(rejoovmeLocalBusinessSchema) }}
      />
      <Script
        id="ld-review"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(rejoovmeReviewSchema) }}
      />
      <Script
        id="ld-breadcrumb"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <Script
        id="ld-faq"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}
      />

      <Header />
      <main>
        <article>
          <Hero readingMins={12} />
          <Breadcrumbs items={breadcrumbs} />
          <Intro />
          <RejoovMeFeature />
          <CompetitorList />
          <Methodology />
          <FAQ />
          <FinalCTA />
        </article>
      </main>
      <Footer />
      <MobileStickyCTA />
    </>
  );
}
