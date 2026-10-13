export const SITE = {
  name: 'Day Spa Gold Coast',
  url: 'https://dayspagoldcoast.com',
  locale: 'en-AU',
  publisher: 'Day Spa Gold Coast Editorial',
  twitter: '@dayspagoldcoast',
  email: 'editorial@dayspagoldcoast.com',
  // "Get your spa included" requests go here (WhatsApp number without +).
  inclusion: {
    whatsapp: '61488898835',
    whatsappDisplay: '+61 488 898 835',
    email: 'aj@metatapdigital.com'
  },
  // Bump these three together every refresh — they drive titles, badges,
  // schema dateModified and sitemap lastmod across the whole site.
  lastUpdatedISO: '2026-10-01',
  lastUpdatedHuman: 'Updated October 2026',
  featureMonth: 'October 2026',
  year: 2026,
  ogImage: '/og/day-spa-gold-coast.jpg',
  author: {
    name: 'Eliza Hartwell',
    role: 'Senior Wellness Editor'
  },
  reviewer: {
    name: 'Dr. Naomi Pillai',
    role: 'Dermal Clinician (BHSc)'
  }
} as const;

export const REJOOVME = {
  name: 'RejoovMe Skin Clinic & Day Spa',
  url: 'https://rejoovme.com.au',
  street: 'Next door to Mantra Wings',
  suburb: 'Surfers Paradise',
  state: 'QLD',
  postcode: '4217',
  country: 'AU',
  phone: '+61 7 5538 1888',
  priceRange: '$$',
  geo: { lat: -28.0023, lng: 153.4145 },
  rating: { value: 4.9, count: 312 }
} as const;
