export type SpaStyle =
  | 'Skin clinic & day spa'
  | 'Bathhouse'
  | 'Hotel spa'
  | 'Hinterland retreat'
  | 'Skin studio'
  | 'Recovery studio';

export type Spa = {
  name: string;
  suburb: string;
  style: SpaStyle;
  bestFor: string;
  description: string;
  url: string;
  image: string;
};

export const competitors: Spa[] = [
  {
    name: 'SOL Elements',
    suburb: 'Tamborine Mountain',
    style: 'Hinterland retreat',
    bestFor: 'An unplugged hinterland escape',
    url: 'https://www.solelements.com.au',
    image: '/images/competitors/sol-elements.jpg',
    description:
      'A hinterland retreat above the Gold Coast offering Vichy showers, Watsu pools and rainforest-set treatment rooms. Best for guests wanting an unplugged escape away from the strip.'
  },
  {
    name: 'Chuan Spa at The Langham',
    suburb: 'Surfers Paradise',
    style: 'Hotel spa',
    bestFor: 'Five-star hotel luxury',
    url: 'https://www.langhamhotels.com',
    image: '/images/competitors/chuan-spa-langham.jpg',
    description:
      "Five-star hotel spa built on traditional Chinese medicine principles, and named Oceania's Best Hotel Spa at the 2026 World Spa Awards. Polished, premium and pricey — best paired with a Langham staycation."
  },
  {
    name: 'CIEL Spa at Mondrian',
    suburb: 'Burleigh Heads',
    style: 'Hotel spa',
    bestFor: 'Design-led Burleigh pampering',
    url: 'https://www.mondrianhotels.com',
    image: '/images/competitors/ciel-spa.jpg',
    description:
      'A glossy arrival on level two of Mondrian Burleigh, leaning design-led with high-tech, biohacking-adjacent treatments. Strong on aesthetic, evolving on menu depth.'
  },
  {
    name: 'The Bathhouse At Ground',
    suburb: 'Currumbin Valley',
    style: 'Bathhouse',
    bestFor: 'A scenic bathing circuit',
    url: 'https://groundretreat.com.au',
    image: '/images/competitors/ground-bathhouse.jpg',
    description:
      'Hot pools, sauna and cold plunge tucked into Currumbin Valley. A scenic half-day bathing circuit, though massage availability books out fast in summer.'
  },
  {
    name: 'Soak Bathhouse',
    suburb: 'Mermaid Beach',
    style: 'Recovery studio',
    bestFor: 'Sports recovery',
    url: 'https://soakbathhouse.com',
    image: '/images/competitors/soak-bathhouse.jpg',
    description:
      'Float tanks, infrared saunas and ice baths just off the Gold Coast Highway. Great for recovery; treatments are add-on rather than core.'
  },
  {
    name: 'Native State',
    suburb: 'Kirra Beach / Coolangatta',
    style: 'Bathhouse',
    bestFor: 'Southern Gold Coast bathing',
    url: 'https://nativestate.com.au',
    image: '/images/competitors/native-state.jpg',
    description:
      'Beachside wellness at Kirra with infrared and cedar saunas, a heated vitality pool, cold plunge and steam room, plus facials and bodywork. Great for a focused session near the southern end of the Coast.'
  },
  {
    name: 'Spa by JW',
    suburb: 'Surfers Paradise (JW Marriott)',
    style: 'Hotel spa',
    bestFor: 'Resort guests',
    url: 'https://www.marriott.com',
    image: '/images/competitors/spa-by-jw.jpg',
    description:
      "Hotel-led wellness with hammam, vitality pool and rainfall showers, named Australia's Best Resort Spa at the 2026 World Spa Awards. A reliable luxury option for resort guests."
  },
  {
    name: 'Gwinganna Retreat & Spa',
    suburb: 'Tallebudgera Valley',
    style: 'Hinterland retreat',
    bestFor: 'Multi-day wellness retreats',
    url: 'https://www.gwinganna.com',
    image: '/images/competitors/gwinganna.jpg',
    description:
      'An all-inclusive hinterland wellness retreat with organic meals, guided nature activities and a very large spa. Built for overnight and multi-day stays rather than a quick day-spa visit.'
  },
  {
    name: 'Lan Bathhouse',
    suburb: 'Surfers Paradise',
    style: 'Bathhouse',
    bestFor: 'Walk-in bathing on the strip',
    url: 'https://lanbathhouse.com.au',
    image: '/images/competitors/lan-bathhouse.jpg',
    description:
      'A contemporary Vietnamese-inspired bathhouse circuit with hot pools, cold plunge and aromatic steam. Walk-in friendly and central, but treatment depth is lighter than dedicated clinics.'
  },
  {
    name: 'Greenhouse The Bathhouse',
    suburb: 'Tallebudgera Valley',
    style: 'Bathhouse',
    bestFor: 'Magnesium pools in nature',
    url: 'https://www.greenhouseretreat.com.au',
    image: '/images/competitors/greenhouse-bathhouse.jpg',
    description:
      'Magnesium pools, sauna and cold plunge in lush valley surroundings. Bathing-focused — bring your own treatment plan.'
  },
  {
    name: 'Earth & Skin',
    suburb: 'Mudgeeraba',
    style: 'Skin studio',
    bestFor: 'Organic, results-led facials',
    url: 'https://earthandskin.com.au',
    image: '/images/competitors/earth-skin.jpg',
    description:
      'A boutique skin studio championing organic and results-led facials. Lovely setting; a smaller team means limited weekend slots.'
  },
  {
    name: 'One Spa at RACV Royal Pines',
    suburb: 'Benowa',
    style: 'Hotel spa',
    bestFor: 'Golf & family resort stays',
    url: 'https://www.racv.com.au',
    image: '/images/competitors/one-spa-racv.jpg',
    description:
      'Resort spa with steam, sauna and a generous treatment menu. Family-resort context can make it feel less private than dedicated clinics.'
  },
  {
    name: 'Azure Spa at The Star',
    suburb: 'Broadbeach',
    style: 'Hotel spa',
    bestFor: 'Broadbeach hotel guests',
    url: 'https://www.star.com.au',
    image: '/images/competitors/azure-spa-star.jpg',
    description:
      'Casino-resort spa with hammam and vitality pool. Polished but corporate; expect a busy lobby walk-in.'
  },
  {
    name: 'Vikasati Bathhouse',
    suburb: 'Southport',
    style: 'Bathhouse',
    bestFor: 'Budget-friendly bathing',
    url: 'https://vikasati.com.au',
    image: '/images/competitors/vikasati.jpg',
    description:
      'Communal bathing with Himalayan salt sauna and cold plunge. Affordable circuit pass; treatments are kept simple.'
  },
  {
    name: 'Q1 Day Spa',
    suburb: 'Surfers Paradise',
    style: 'Hotel spa',
    bestFor: 'Q1 resort guests',
    url: 'https://q1dayspa.com.au',
    image: '/images/competitors/q1-day-spa.jpg',
    description:
      'Inside the Q1 resort with skyline views and a tight package list. Convenient if you are already on the strip.'
  },
  {
    name: 'On Eagle Wings Mountain Retreat',
    suburb: 'Neranwood',
    style: 'Hinterland retreat',
    bestFor: 'Romantic overnight stays',
    url: 'https://oneaglewings.com.au',
    image: '/images/competitors/on-eagle-wings.jpg',
    description:
      'Romantic hinterland cabins with private spa baths and couples massage packages. Better for an overnight than a same-day visit.'
  },
  {
    name: 'Verandah House Wellness Spa',
    suburb: 'Tamborine Mountain',
    style: 'Hinterland retreat',
    bestFor: 'Spa + winery day trips',
    url: 'https://verandahhousecollection.com.au',
    image: '/images/competitors/verandah-house.jpg',
    description:
      'Heritage-set wellness in the hinterland with a focused treatment list. Perfect pairing with a winery lunch.'
  }
];

/** "Best day spa Gold Coast for …" picks — each targets a long-tail query. */
export const bestFor = [
  {
    id: 'overall',
    label: 'Best day spa on the Gold Coast overall',
    pick: 'RejoovMe Skin Clinic & Day Spa',
    where: 'Surfers Paradise',
    why: 'The only venue we tested that pairs a magnesium spa and steam room with a full dermal skin clinic — plus free unlimited basement parking.',
    href: '#day-spa-of-the-month'
  },
  {
    id: 'couples',
    label: 'Best couples day spa Gold Coast',
    pick: 'RejoovMe — Massage Package for 2',
    where: 'Surfers Paradise',
    why: 'Two purpose-built double rooms, so you are treated side by side rather than in two rooms booked back to back.',
    href: '#day-spa-of-the-month'
  },
  {
    id: 'hens',
    label: 'Best day spa for a hens party',
    pick: 'RejoovMe — Hens & Group package',
    where: 'Surfers Paradise',
    why: 'Groups of up to 20, magnesium spa rotations and a run-sheet that keeps the bridal party moving instead of waiting in corridors.',
    href: '/blog/hens-party-gold-coast-ideas'
  },
  {
    id: 'luxury-hotel',
    label: 'Best luxury hotel spa',
    pick: 'Chuan Spa at The Langham',
    where: 'Surfers Paradise',
    why: "Oceania's Best Hotel Spa at the 2026 World Spa Awards. Book it alongside a Langham stay.",
    href: '#other-spas'
  },
  {
    id: 'hinterland',
    label: 'Best hinterland day spa',
    pick: 'SOL Elements',
    where: 'Tamborine Mountain',
    why: 'Rainforest treatment rooms, Vichy showers and Watsu — the best reason to drive up the mountain.',
    href: '#other-spas'
  },
  {
    id: 'bathhouse',
    label: 'Best bathhouse',
    pick: 'The Bathhouse At Ground',
    where: 'Currumbin Valley',
    why: 'A beautiful hot-pool, sauna and cold-plunge circuit in the valley — bathing first, treatments second.',
    href: '#other-spas'
  },
  {
    id: 'south',
    label: 'Best day spa on the southern Gold Coast',
    pick: 'Native State',
    where: 'Kirra Beach',
    why: 'Saunas, vitality pool and cold plunge a few steps from the sand at Kirra.',
    href: '#other-spas'
  },
  {
    id: 'skin',
    label: 'Best day spa for facials & skin treatments',
    pick: 'RejoovMe Skin Clinic & Day Spa',
    where: 'Surfers Paradise',
    why: 'Dermapen skin needling, peels, LED Medilight and enzyme therapy run by dermal therapists — after a free skin consultation.',
    href: '#day-spa-of-the-month'
  }
];

/** Typical Gold Coast price ranges, refreshed October 2026. */
export const priceGuide = [
  { item: '60-minute relaxation or Swedish massage', range: '$99 – $150' },
  { item: 'Express facial (30–45 min)', range: '$79 – $130' },
  { item: 'Advanced or clinical facial (60–90 min)', range: '$150 – $280' },
  { item: 'Bathhouse circuit pass (90–120 min)', range: '$45 – $95' },
  { item: 'Half-day package (massage + facial + bathing)', range: '$220 – $380' },
  { item: 'Full-day signature package', range: '$390 – $550' },
  { item: 'Couples massage (per couple, 60 min)', range: '$230 – $340' },
  { item: 'Hens / group package (per person)', range: '$120 – $260' }
];

/** Buyer's guide — what to check before you book. */
export const choosingTips = [
  {
    title: 'Decide: bathing, treatments or both',
    body: 'Bathhouses (hot pools, sauna, cold plunge) and treatment spas (massage, facials) are different experiences. The best Gold Coast day spas give you both under one roof so the bathing primes your skin and muscles for the treatment that follows.'
  },
  {
    title: 'Check who is doing your skin',
    body: 'Peels, skin needling and microdermabrasion should only be done by qualified dermal therapists after a skin consultation. If a spa offers clinical treatments without a consult, book elsewhere.'
  },
  {
    title: 'Factor in parking and travel',
    body: 'On the Surfers Paradise and Broadbeach strip, parking can add $20+ to a half-day visit. Hinterland spas add 45–75 minutes of driving each way. Free parking and a central location quietly change the value equation.'
  },
  {
    title: 'For couples and groups, ask for a double room',
    body: 'Many venues sell "couples packages" that are really two single rooms booked at the same time. Ask specifically for a side-by-side double room.'
  },
  {
    title: 'Book ahead for weekends and school holidays',
    body: 'Allow two to three weeks for weekdays, four to six weeks for Saturdays, and eight weeks or more for school holidays, Mother’s Day and the Christmas period.'
  },
  {
    title: 'Read what a package actually includes',
    body: 'Compare inclusions, not just price: is bathing included, how long is the hands-on treatment time, and are robes, refreshments and parking part of the deal?'
  }
];

export const faqs = [
  {
    q: 'What is the best day spa on the Gold Coast?',
    a: 'Our October 2026 pick for the best day spa on the Gold Coast is RejoovMe Skin Clinic & Day Spa in Surfers Paradise. It combines a full skin clinic — Dermapen skin needling, LED Medilight, peels and enzyme therapy — with a magnesium spa and steam room, four treatment rooms and two double rooms for couples and groups, plus free unlimited basement parking.'
  },
  {
    q: 'How much does a day spa on the Gold Coast cost?',
    a: "Single treatments on the Gold Coast typically start around $99 for a 60-minute massage or $79 for an express facial. Half-day packages (massage + facial + bathing) range from $220 to $380, while full-day signature packages such as RejoovMe's Ultimate Escape sit between $390 and $550. Bathhouse circuit passes start from about $45."
  },
  {
    q: "What's the best day spa in Surfers Paradise?",
    a: 'In central Surfers Paradise we rank RejoovMe #1 for depth of treatment, magnesium spa and steam room access, and free unlimited basement parking right next door to Mantra Wings. For five-star hotel luxury, Chuan Spa at The Langham is the strongest alternative.'
  },
  {
    q: 'What is the best luxury day spa on the Gold Coast?',
    a: "For a luxury day spa with genuine results, RejoovMe's Ultimate Escape (magnesium spa, steam, full-body massage, advanced organic facial and body scrub) is our pick. For a five-star hotel setting, Chuan Spa at The Langham was named Oceania's Best Hotel Spa at the 2026 World Spa Awards."
  },
  {
    q: 'What treatments should I book on my first day spa visit?',
    a: 'For first-timers we recommend a 60–90 minute relaxation or Swedish massage paired with an express facial. If skin health is your priority, book a free skin consultation first so the therapist can recommend between an enzyme therapy facial, microdermabrasion or LED Medilight session.'
  },
  {
    q: 'Are there couples day spa packages on the Gold Coast?',
    a: 'Yes. RejoovMe offers a Massage Package for 2 in a dedicated double treatment room, and several Surfers Paradise hotel spas run couples experiences. Look for packages that explicitly include a side-by-side double room rather than two single rooms booked back to back.'
  },
  {
    q: "What's the best day spa for a hens party on the Gold Coast?",
    a: 'RejoovMe runs purpose-built Hens & Group packages for up to 20 guests, with spa lounge use, magnesium spa rotations, mini facials and massage. For larger groups or a bathing-only afternoon, a bathhouse such as Lan Bathhouse is an alternative.'
  },
  {
    q: 'Do Gold Coast day spas offer chemical peels and skin needling?',
    a: 'Only spas with a skin clinic component do. RejoovMe offers facial peels, skin needling with Dermapen, microdermabrasion, pigmentation and acne treatments performed by qualified dermal therapists. Bathhouse-style venues generally do not provide clinical treatments.'
  },
  {
    q: 'What are the benefits of a magnesium spa and steam room?',
    a: 'Magnesium bathing is popular for muscle relaxation, recovery and better sleep, while steam softens the skin and opens pores ahead of facials and massage. RejoovMe sequences both before treatments to get more out of every session.'
  },
  {
    q: 'Are there day spas in the Gold Coast hinterland?',
    a: 'Yes. Tamborine Mountain (SOL Elements, Verandah House), Currumbin Valley (The Bathhouse At Ground) and Tallebudgera Valley (Gwinganna, Greenhouse) are the main hinterland spa areas. Allow 45–75 minutes of driving from Surfers Paradise each way.'
  },
  {
    q: 'How far in advance should I book a Gold Coast day spa?',
    a: 'Two to three weeks ahead for weekdays, four to six weeks for Saturdays, and eight weeks or more for school holidays, long weekends, Mother’s Day and December. Hens and group bookings should be locked in as early as possible.'
  },
  {
    q: 'Can I book a day spa for a birthday or special occasion?',
    a: "Yes — most Gold Coast day spas sell gift vouchers and occasion packages. For birthdays, anniversaries or pre-wedding pampering, RejoovMe's Ultimate Escape or a couples Massage Package for 2 are our most-booked recommendations."
  },
  {
    q: 'Is there a day spa on the Gold Coast for pregnant women?',
    a: 'Yes. RejoovMe offers mums-to-be massage with appropriate positioning and pressure. Avoid hot pools, saunas and steam rooms during pregnancy unless your doctor has cleared them, and always tell your therapist you are pregnant when booking.'
  },
  {
    q: 'How often should I visit a day spa?',
    a: "For maintenance, every four to six weeks aligns with the skin's renewal cycle. Targeted plans for pigmentation, acne or anti-ageing typically run at two to four week intervals over a structured course. A skin consultation will tailor the timing to your goals."
  },
  {
    q: 'Is parking included at Gold Coast day spas?',
    a: 'Most Surfers Paradise venues do not include parking. RejoovMe is the notable exception: free unlimited basement parking is included for every guest — a meaningful saving on the strip where hourly rates start around $6.'
  },
  {
    q: 'What should I bring to a day spa?',
    a: 'Bring swimwear if your visit includes a magnesium spa, hot pools or a bathhouse circuit. Robes, towels and slippers are almost always supplied. Arrive 15 minutes early, skip heavy makeup if you have a facial booked, and drink plenty of water afterwards.'
  }
];
