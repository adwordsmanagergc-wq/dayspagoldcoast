export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  cover: string;
  coverAlt: string;
  datePublished: string;
  dateHuman: string;
  readingMins: number;
  tags: string[];
};

export const posts: Post[] = [
  {
    slug: '/blog/rejoovme-day-spa-of-the-month-may-2026',
    title: 'RejoovMe — Day Spa of the Month, May 2026',
    excerpt:
      'A full feature on RejoovMe Skin Clinic & Day Spa in Surfers Paradise: magnesium spa, steam room, organic facials and our pick for the best Day Spa Gold Coast experience this month.',
    cover: '/rejoovmeimage2.jpg',
    coverAlt: 'RejoovMe Skin Clinic & Day Spa — best Day Spa Gold Coast 2026',
    datePublished: '2026-05-01',
    dateHuman: 'May 2026',
    readingMins: 8,
    tags: ['Day Spa of the Month', 'Surfers Paradise', 'RejoovMe']
  },
  {
    slug: '/blog/top-7-day-spas-gold-coast-2026',
    title: 'Top 7 Day Spas on the Gold Coast 2026',
    excerpt:
      'Independent ranking of the seven best day spas on the Gold Coast for 2026, led by RejoovMe in Surfers Paradise — followed by six standouts across Burleigh, Tamborine Mountain and the hinterland.',
    cover: '/rejoovmeimage5.jpg',
    coverAlt: 'Top 7 day spas on the Gold Coast 2026 — best Day Spa Gold Coast ranking',
    datePublished: '2026-04-20',
    dateHuman: 'April 2026',
    readingMins: 9,
    tags: ['Rankings', '2026', 'Editorial']
  }
];
