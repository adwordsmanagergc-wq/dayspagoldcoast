#!/usr/bin/env node
// Renders the 1200x630 link-preview (Open Graph) card for every page into
// public/og/, in the DESIGN.md system (salt canvas, kelp ink, lagoon accent,
// Newsreader + Geist, arch photo).
//
//   node scripts/og-images.mjs
//
// Needs Playwright with Chromium (`npm i -g playwright` or run via
// `npx -p playwright node scripts/og-images.mjs`). Re-run after adding a page
// or changing SITE.featureMonth.
import { readFileSync, mkdirSync } from 'node:fs';
import { createRequire } from 'node:module';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const require = createRequire(import.meta.url);

let chromium;
try {
  ({ chromium } = require('playwright'));
} catch {
  try {
    ({ chromium } = require('/opt/node22/lib/node_modules/playwright'));
  } catch {
    console.error('Playwright not found. Run: npx -p playwright node scripts/og-images.mjs');
    process.exit(1);
  }
}

const read = (p) => readFileSync(join(root, p));
const b64 = (p) => read(p).toString('base64');
const site = readFileSync(join(root, 'lib/site.ts'), 'utf8');
const month = site.match(/featureMonth: '([^']+)'/)[1];

// Suburbs straight from lib/suburbs.ts so new suburbs get a card automatically.
const suburbSrc = readFileSync(join(root, 'lib/suburbs.ts'), 'utf8');
const suburbs = [...suburbSrc.matchAll(/slug: '([^']+)',\s*name: '([^']+)',\s*postcode: '(\d+)',\s*travelMins: (\d+)/g)].map(
  ([, slug, name, postcode, mins]) => ({ slug, name, postcode, mins: Number(mins) })
);
if (suburbs.length === 0) throw new Error('No suburbs parsed from lib/suburbs.ts');

const cards = [
  { out: 'day-spa-gold-coast.jpg', img: 'rejoovmeimage5.jpg', label: `Updated ${month} · 18 spas tested`, title: 'Day Spa Gold Coast,', accent: 'ranked.', sub: 'The best day spas from Coolangatta to Tamborine Mountain, booked, paid for and scored.' },
  { out: 'day-spa.jpg', img: 'images/hero/gold-coast-hero.jpg', label: 'Local guides', title: 'Find a day spa', accent: 'near you.', sub: `${suburbs.length} Gold Coast suburb guides, by drive time to the #1 spa.` },
  ...suburbs.map((s) => ({
    out: `day-spa-${s.slug}.jpg`,
    img: 'images/hero/gold-coast-hero.jpg',
    label: `Local guide · ${s.name} ${s.postcode}`,
    title: `Day Spa ${s.name}`,
    accent: '',
    sub: s.mins === 0 ? `Home of the #1 day spa on the Gold Coast. Updated ${month}.` : `The best day spa near ${s.name}, ${s.mins} minutes away. Updated ${month}.`
  })),
  { out: 'blog.jpg', img: 'rejoovmeimage3.jpg', label: 'Guides', title: 'The Day Spa', accent: 'Gold Coast blog', sub: 'Rankings, packages and prices, hens party ideas and in-depth reviews.' },
  { out: 'day-spa-packages-gold-coast.jpg', img: 'rejoovmeimage4.jpg', label: `Guide · ${month}`, title: 'Day spa packages,', accent: 'priced.', sub: 'What Gold Coast packages cost, what they include and which to book.' },
  { out: 'hens-party-gold-coast.jpg', img: 'rejoovmeimage3.jpg', label: 'Hens party guide', title: 'Hens party', accent: 'Gold Coast ideas', sub: 'Day spa groups, brunch, surf lessons and hinterland wineries.' },
  { out: 'rejoovme-feature.jpg', img: 'rejoovmeimage2.jpg', label: 'Day Spa of the Month', title: 'RejoovMe,', accent: 'Surfers Paradise', sub: 'Magnesium spa, steam room and a full skin clinic under one roof.' },
  { out: 'top-7-day-spas.jpg', img: 'rejoovmeimage7.jpg', label: 'Editorial ranking', title: 'Top 7 day spas on', accent: 'the Gold Coast', sub: 'Our seven standouts for 2026, led by RejoovMe in Surfers Paradise.' },
  { out: 'about.jpg', img: 'rejoovmeimage2.jpg', label: 'About us', title: 'How we', accent: 'test spas.', sub: 'Who writes the guide, how venues are scored, and our partner disclosure.' },
  { out: 'contact.jpg', img: 'rejoovmeimage6.jpg', label: 'Contact', title: 'Talk to', accent: 'the editors.', sub: 'Suggest a day spa, send a correction or ask about partnerships.' },
  { out: 'privacy.jpg', img: 'rejoovmeimage4.jpg', label: 'Legal', title: 'Privacy', accent: 'policy.', sub: 'How Day Spa Gold Coast handles your information.' }
];

const fonts = `
@font-face { font-family: 'Newsreader'; font-weight: 300; font-style: normal; src: url(data:font/woff2;base64,${b64('node_modules/@fontsource/newsreader/files/newsreader-latin-300-normal.woff2')}) format('woff2'); }
@font-face { font-family: 'Newsreader'; font-weight: 300; font-style: italic; src: url(data:font/woff2;base64,${b64('node_modules/@fontsource/newsreader/files/newsreader-latin-300-italic.woff2')}) format('woff2'); }
@font-face { font-family: 'Newsreader'; font-weight: 400; font-style: italic; src: url(data:font/woff2;base64,${b64('node_modules/@fontsource/newsreader/files/newsreader-latin-400-italic.woff2')}) format('woff2'); }
@font-face { font-family: 'Newsreader'; font-weight: 400; font-style: normal; src: url(data:font/woff2;base64,${b64('node_modules/@fontsource/newsreader/files/newsreader-latin-400-normal.woff2')}) format('woff2'); }
@font-face { font-family: 'Geist'; font-weight: 100 900; src: url(data:font/woff2;base64,${b64('node_modules/geist/dist/fonts/geist-sans/Geist-Variable.woff2')}) format('woff2'); }
`;

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;');

const html = (c) => `<!doctype html><html><head><style>${fonts}
* { margin: 0; box-sizing: border-box; }
body { width: 1200px; height: 630px; background: #F3F1EC; color: #16231F; font-family: Geist, sans-serif; position: relative; overflow: hidden; }
.wordmark { position: absolute; left: 72px; top: 60px; font: 400 30px Newsreader, serif; letter-spacing: -0.01em; }
.wordmark em { color: #1E6F66; }
.copy { position: absolute; left: 72px; top: 150px; width: 640px; }
.label { font-size: 17px; font-weight: 500; letter-spacing: 0.16em; text-transform: uppercase; color: #56625D; }
h1 { margin-top: 22px; font-family: Newsreader, serif; font-weight: 300; line-height: 0.98; letter-spacing: -0.03em; }
h1 em { color: #1E6F66; font-style: italic; }
p { margin-top: 26px; font-size: 25px; line-height: 1.4; color: #56625D; max-width: 560px; }
.foot { position: absolute; left: 72px; right: 72px; bottom: 50px; display: flex; justify-content: space-between; font-size: 18px; color: #56625D; border-top: 1px solid #D9D6CE; padding-top: 20px; width: 640px; }
.arch { position: absolute; right: 72px; top: 56px; width: 360px; height: 518px; border-radius: 999px 999px 22px 22px; overflow: hidden; box-shadow: 0 2px 4px rgba(22,35,31,.06), 0 30px 60px -28px rgba(22,35,31,.45); }
.arch img { width: 100%; height: 100%; object-fit: cover; }
</style></head><body>
<div class="wordmark">Day Spa <em>Gold Coast</em></div>
<div class="copy">
  <div class="label">${esc(c.label)}</div>
  <h1 style="font-size:${c.size}px">${esc(c.title)}${c.accent ? ` <em>${esc(c.accent)}</em>` : ''}</h1>
  <p>${esc(c.sub)}</p>
</div>
<div class="foot"><span>dayspagoldcoast.com</span><span>${esc(month)}</span></div>
<div class="arch"><img src="data:image/jpeg;base64,${b64('public/' + c.img)}"></div>
</body></html>`;

mkdirSync(join(root, 'public/og'), { recursive: true });
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
for (const c of cards) {
  // Fit the headline into at most 3 lines by stepping the size down.
  for (const size of [92, 84, 76, 68, 60]) {
    await page.setContent(html({ ...c, size }), { waitUntil: 'load' });
    await page.evaluate(() => document.fonts.ready);
    const lines = await page.evaluate(() => {
      const h = document.querySelector('h1');
      return Math.round(h.getBoundingClientRect().height / parseFloat(getComputedStyle(h).lineHeight));
    });
    const fits = await page.evaluate(() => document.querySelector('.copy').getBoundingClientRect().bottom < 560);
    if (lines <= 3 && fits) break;
  }
  await page.screenshot({ path: join(root, 'public/og', c.out), type: 'jpeg', quality: 86 });
  console.log('og/' + c.out);
}

// Square logo used by schema and apple-touch-icon.
await page.setViewportSize({ width: 512, height: 512 });
await page.setContent(`<html><body style="margin:0;width:512px;height:512px;background:#F3F1EC;display:flex;align-items:center;justify-content:center"><style>${fonts}</style><div style="font:300 112px/0.95 Newsreader,serif;color:#16231F;text-align:center;letter-spacing:-0.03em">Day Spa<br><em style="color:#1E6F66">Gold Coast</em></div></body></html>`, { waitUntil: 'load' });
await page.evaluate(() => document.fonts.ready);
await page.screenshot({ path: join(root, 'public/og/logo.png') });
console.log('og/logo.png');
await browser.close();
