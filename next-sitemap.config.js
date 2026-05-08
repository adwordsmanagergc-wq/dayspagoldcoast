/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://dayspagoldcoast.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  changefreq: 'weekly',
  priority: 0.8,
  sitemapSize: 5000,
  alternateRefs: [{ href: 'https://dayspagoldcoast.com', hreflang: 'en-AU' }],
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
    additionalSitemaps: ['https://dayspagoldcoast.com/sitemap.xml']
  },
  exclude: ['/server-sitemap.xml']
};
