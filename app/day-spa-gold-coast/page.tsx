import type { Metadata } from 'next';
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
import { JsonLd } from '@/components/JsonLd';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { QuickAnswer } from '@/components/QuickAnswer';
import { SpaFinder } from '@/components/SpaFinder';
import { Ritual } from '@/components/Ritual';
import { RejoovReview } from '@/components/RejoovReview';
import { BestFor } from '@/components/BestFor';
import { PriceGuide, ChoosingGuide } from '@/components/PriceGuide';
import { SuburbGrid } from '@/components/SuburbGrid';
import { Methodology } from '@/components/Methodology';
import { FAQ } from '@/components/FAQ';
import { FinalCTA } from '@/components/FinalCTA';
import { Footer } from '@/components/Footer';
import { MobileStickyCTA } from '@/components/MobileStickyCTA';

const PATH = '/day-spa-gold-coast';
const URL = `${SITE.url}${PATH}`;
const TOTAL = competitors.length + 1;
const TITLE = `Day Spa Gold Coast: ${TOTAL} Best Day Spas Ranked (${SITE.featureMonth})`;
const DESCRIPTION = `The best day spa Gold Coast guide, updated ${SITE.featureMonth}. ${TOTAL} spas tested and ranked — prices, packages, couples & hens picks. RejoovMe in Surfers Paradise is #1.`;

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: {
    type: 'article',
    url: URL,
    title: TITLE,
    description: DESCRIPTION,
    publishedTime: '2026-01-15',
    modifiedTime: SITE.lastUpdatedISO,
    images: [{ url: SITE.ogImage, width: 1200, height: 630, alt: TITLE }]
  },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION, images: [SITE.ogImage] }
};

export default function DaySpaGoldCoastPage() {
  const article = articleSchema({
    headline: `Day Spa Gold Coast: The ${TOTAL} Best Day Spas, Tested & Ranked`,
    description: DESCRIPTION,
    url: URL,
    image: `${SITE.url}${SITE.ogImage}`,
    datePublished: '2026-01-15',
    dateModified: SITE.lastUpdatedISO
  });

  const itemList = itemListSchema([
    {
      position: 1,
      name: REJOOVME.name,
      url: REJOOVME.url,
      description: `Day Spa of the Month, ${SITE.featureMonth}. Magnesium spa, steam room and full skin clinic capability in Surfers Paradise.`
    },
    ...competitors.map((c, i) => ({
      position: i + 2,
      name: c.name,
      url: c.url,
      description: c.description
    }))
  ]);

  const breadcrumb = breadcrumbSchema([{ name: 'Day Spa Gold Coast', url: URL }]);

  return (
    <>
      <JsonLd data={article} />
      <JsonLd data={itemList} />
      <JsonLd data={rejoovmeLocalBusinessSchema} />
      <JsonLd data={rejoovmeReviewSchema} />
      <JsonLd data={breadcrumb} />
      <JsonLd data={faqSchema(faqs)} />

      <Header />
      <main id="main">
        <article>
          <Hero />
          <QuickAnswer />
          <SpaFinder />
          <Ritual />
          <RejoovReview />
          <BestFor />
          <PriceGuide />
          <ChoosingGuide />
          <SuburbGrid />
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
