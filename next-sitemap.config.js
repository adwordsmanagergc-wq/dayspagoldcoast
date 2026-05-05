/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://dayspagoldcoast.com.au',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.8,
  sitemapSize: 5000,
  alternateRefs: [{ href: 'https://dayspagoldcoast.com.au', hreflang: 'en-AU' }],
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }]
  },
  exclude: ['/server-sitemap.xml']
};
