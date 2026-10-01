import { SITE, REJOOVME } from './site';

export const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${SITE.url}/#organization`,
  name: SITE.name,
  url: SITE.url,
  email: SITE.email,
  logo: `${SITE.url}/og/logo.png`,
  areaServed: { '@type': 'City', name: 'Gold Coast, Queensland, Australia' }
};

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE.url}/#website`,
  name: SITE.name,
  url: SITE.url,
  inLanguage: SITE.locale,
  publisher: { '@id': `${SITE.url}/#organization` }
};

export const breadcrumbSchema = (
  items: { name: string; url: string }[]
) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((it, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: it.name,
    item: it.url
  }))
});

export const articleSchema = (opts: {
  headline: string;
  description: string;
  url: string;
  image: string;
  datePublished: string;
  dateModified: string;
  author?: { name: string; role: string };
  reviewer?: { name: string; role: string };
}) => {
  const author = opts.author ?? SITE.author;
  const reviewer = opts.reviewer ?? SITE.reviewer;
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: opts.headline,
    description: opts.description,
    mainEntityOfPage: opts.url,
    inLanguage: SITE.locale,
    image: [opts.image],
    datePublished: opts.datePublished,
    dateModified: opts.dateModified,
    author: { '@type': 'Person', name: author.name, jobTitle: author.role },
    reviewedBy: { '@type': 'Person', name: reviewer.name, jobTitle: reviewer.role },
    publisher: {
      '@type': 'Organization',
      '@id': `${SITE.url}/#organization`,
      name: SITE.name,
      logo: { '@type': 'ImageObject', url: `${SITE.url}/og/logo.png` }
    }
  };
};

export const itemListSchema = (
  items: { position: number; name: string; url: string; description?: string }[]
) => ({
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  numberOfItems: items.length,
  itemListOrder: 'https://schema.org/ItemListOrderAscending',
  itemListElement: items.map((it) => ({
    '@type': 'ListItem',
    position: it.position,
    name: it.name,
    url: it.url,
    ...(it.description ? { description: it.description } : {})
  }))
});

export const rejoovmeLocalBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'HealthAndBeautyBusiness',
  name: REJOOVME.name,
  url: REJOOVME.url,
  telephone: REJOOVME.phone,
  priceRange: REJOOVME.priceRange,
  image: `${SITE.url}/rejoovmeimage2.jpg`,
  address: {
    '@type': 'PostalAddress',
    streetAddress: REJOOVME.street,
    addressLocality: REJOOVME.suburb,
    addressRegion: REJOOVME.state,
    postalCode: REJOOVME.postcode,
    addressCountry: REJOOVME.country
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: REJOOVME.geo.lat,
    longitude: REJOOVME.geo.lng
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '18:00'
    }
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: REJOOVME.rating.value,
    reviewCount: REJOOVME.rating.count
  }
};

export const rejoovmeReviewSchema = {
  '@context': 'https://schema.org',
  '@type': 'Review',
  itemReviewed: {
    '@type': 'HealthAndBeautyBusiness',
    name: REJOOVME.name,
    url: REJOOVME.url,
    address: {
      '@type': 'PostalAddress',
      addressLocality: REJOOVME.suburb,
      addressRegion: REJOOVME.state,
      addressCountry: REJOOVME.country
    }
  },
  reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
  author: { '@type': 'Person', name: SITE.author.name },
  reviewBody:
    'RejoovMe is the most complete day spa experience on the Gold Coast — magnesium spa, steam room and a full skin clinic capability under one roof in Surfers Paradise.',
  publisher: { '@type': 'Organization', name: SITE.name }
};

export const faqSchema = (
  faqs: { q: string; a: string }[]
) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a }
  }))
});
