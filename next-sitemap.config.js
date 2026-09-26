// Always emit the non-www canonical host, even if SITE_URL is set to www.
const siteUrl = (process.env.SITE_URL || 'https://dayspagoldcoast.com')
  .replace('://www.', '://')
  .replace(/\/$/, '');

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  changefreq: 'weekly',
  priority: 0.8,
  sitemapSize: 5000,
  alternateRefs: [{ href: siteUrl, hreflang: 'en-AU' }],
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
    additionalSitemaps: [`${siteUrl}/sitemap.xml`]
  },
  exclude: ['/server-sitemap.xml']
};
