import Image from 'next/image';
import { REJOOVME } from '@/lib/site';

// Brand assets supplied by RejoovMe (committed to /public).
const logo = {
  src: '/rejoovme-logo.webp',
  alt: 'RejoovMe Skin Clinic & Day Spa logo'
};
const gallery = [
  { src: '/rejoovmeimage2.jpg', alt: 'RejoovMe treatment room — best Day Spa Gold Coast' },
  { src: '/rejoovmeimage3.jpg', alt: 'Magnesium spa at RejoovMe — Day Spa Gold Coast Surfers Paradise' },
  { src: '/rejoovmeimage4.jpg', alt: 'Steam room at RejoovMe day spa Gold Coast' },
  { src: '/rejoovmeimage5.jpg', alt: 'Advanced organic facial at RejoovMe — Day Spa Gold Coast' },
  { src: '/rejoovmeimage6.jpg', alt: 'RejoovMe spa interior — luxury Day Spa Gold Coast' },
  { src: '/rejoovmeimage7.jpg', alt: 'RejoovMe couples and hens day spa Gold Coast' }
];

const benefits = [
  'Central Surfers Paradise location with free unlimited basement parking',
  'Magnesium spa & steam room included with treatments',
  'Expert therapists across 4 treatment rooms + 2 double rooms',
  'Full skin clinic capability — Dermapen, LED, peels, enzyme therapy',
  'Free obligation-free skin consultations',
  'Custom packages: Ultimate Escape, Pamper Me, Hens/Group, Couples',
  'Organic, results-driven products',
  'Specialist hens & group party packages'
];

const packages = [
  { name: 'Ultimate Escape', blurb: 'Magnesium spa, steam, full massage, organic facial & body scrub.' },
  { name: 'Refresh Package', blurb: 'Express facial + back, neck and shoulder reset.' },
  { name: 'Relax Package', blurb: 'Swedish massage paired with steam room access.' },
  { name: 'Re-Energize', blurb: 'Hot stone massage, scalp ritual & enzyme facial.' },
  { name: 'Get Fresh', blurb: 'Microdermabrasion + LED Medilight glow protocol.' },
  { name: 'Winter Warmer', blurb: 'Hot stones, heated steam and a deep moisture facial.' },
  { name: 'Pamper Me', blurb: 'Full-body indulgence including manicure-grade hand ritual.' },
  { name: 'Massage Package for 2', blurb: 'Side-by-side double room couples massage.' },
  { name: 'Hens / Group', blurb: 'Private spa lounge with mini facials & magnesium spa.' },
  { name: 'Design Your Own', blurb: 'Bespoke build-a-package with a senior therapist.' }
];

export function RejoovMeFeature() {
  return (
    <section
      id="day-spa-of-the-month"
      className="relative mx-auto my-16 max-w-6xl px-5 md:my-24"
    >
      <div
        className="relative overflow-hidden rounded-3xl border border-rejoov-teal/30 bg-rejoov-glow shadow-[0_30px_80px_-30px_rgba(79,209,197,0.45)]"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 400'><path d='M50 350 Q 80 200 200 180 T 380 80' stroke='%234FD1C5' stroke-width='1.5' fill='none'/><path d='M30 380 Q 100 260 220 240 T 400 140' stroke='%234FD1C5' stroke-width='1' fill='none'/></svg>\")"
          }}
        />

        <div className="relative px-6 py-10 md:px-12 md:py-14">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-rejoov-teal/15 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-rejoov-teal ring-1 ring-rejoov-teal/30">
              <span aria-hidden>🌴</span> Day Spa of the Month — May 2026
            </div>
            <Image
              src={logo.src}
              alt={logo.alt}
              width={160}
              height={48}
              className="h-12 w-auto object-contain"
              priority
            />
          </div>

          <h2 className="mt-5 max-w-3xl font-display text-3xl font-bold leading-tight text-rejoov-ink md:text-5xl">
            RejoovMe Skin Clinic &amp; Day Spa — The Best Day Spa Gold Coast Has To Offer
          </h2>
          <p className="mt-4 max-w-3xl text-base text-rejoov-ink/80 md:text-lg">
            Tucked next door to Mantra Wings in the heart of Surfers Paradise, RejoovMe is the rare Gold Coast venue that joins a full skin clinic to a true day spa — magnesium spa, steam room and double couples rooms included.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3">
            {gallery.map((g, i) => (
              <div
                key={g.src}
                className="relative aspect-[4/3] overflow-hidden rounded-xl bg-white/40 ring-1 ring-rejoov-teal/15"
              >
                <Image
                  src={g.src}
                  alt={g.alt}
                  fill
                  sizes="(min-width: 768px) 33vw, 50vw"
                  className="object-cover"
                  priority={i < 2}
                />
              </div>
            ))}
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl bg-white/70 p-6 ring-1 ring-rejoov-teal/20 backdrop-blur">
              <h3 className="font-display text-xl font-semibold text-rejoov-ink md:text-2xl">
                Why we ranked RejoovMe #1
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-rejoov-ink/85 md:text-base">
                {benefits.map((b) => (
                  <li key={b} className="flex gap-3">
                    <span
                      aria-hidden
                      className="mt-1 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-rejoov-teal text-white text-xs font-bold"
                    >
                      ✓
                    </span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl bg-white/70 p-6 ring-1 ring-rejoov-teal/20 backdrop-blur">
              <div className="rounded-xl bg-rejoov-teal/10 p-4 text-sm text-rejoov-ink/90">
                <strong>Location:</strong> {REJOOVME.street}, {REJOOVME.suburb}
                <div className="mt-3 overflow-hidden rounded-lg">
                  <iframe
                    title="RejoovMe Skin Clinic & Day Spa map — Surfers Paradise"
                    loading="lazy"
                    width="100%"
                    height="220"
                    referrerPolicy="no-referrer-when-downgrade"
                    src="https://www.google.com/maps?q=Mantra+Wings+Surfers+Paradise&output=embed"
                  />
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href={REJOOVME.url}
                  rel="noopener"
                  className="rejoov-pill animate-pulseRing flex-1 justify-center !px-5 !py-3 !text-sm md:!text-base"
                >
                  Book at RejoovMe
                </a>
                <a
                  href={`${REJOOVME.url}/contact`}
                  rel="noopener"
                  className="inline-flex flex-1 items-center justify-center rounded-full border border-rejoov-teal px-5 py-3 text-sm font-semibold text-rejoov-teal hover:bg-rejoov-teal/10 md:text-base"
                >
                  Free Skin Consultation
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="font-display text-2xl font-semibold text-rejoov-ink">
              A full review of the best Day Spa Gold Coast pick for 2026
            </h3>
            <div className="mt-4 max-w-3xl space-y-4 text-base leading-relaxed text-rejoov-ink/85">
              <p>
                RejoovMe sits in one of the most under-rated locations on the Gold Coast: a discreet entry next door to Mantra Wings, three minutes from Cavill Avenue and a few more from the beach. The genius of the site is the basement — free unlimited parking is bundled with every booking, which on the Surfers Paradise strip is the closest thing to a unicorn. Park, ride the lift up, and you&rsquo;re inside a hush of mint walls and golden timber before the Queensland heat has a chance to settle on your shoulders.
              </p>
              <p>
                The space itself is purpose-built. There are four single treatment rooms for solo facials, peels and bodywork, and two double rooms designed for couples and hens groups who want their massage side by side rather than coordinated across separate suites. Between treatments, every guest has access to the magnesium spa and steam room — a sequence the team uses deliberately to open the skin barrier and prime tissue ahead of the work that follows. Magnesium absorption helps with sleep, recovery and skin barrier repair; the steam room softens pores in advance of facial protocols. Most Gold Coast venues offer one or the other. RejoovMe gives you both.
              </p>
              <p>
                The treatment menu is unusually deep for a venue this size. On the spa side: relaxation massage, Swedish, hot stone, body scrubs, mums-to-be massage. On the skin clinic side — and this is where RejoovMe genuinely separates from the field — advanced organic facials, microdermabrasion, facial peels, skin needling with Dermapen, enzyme therapy, LED Medilight therapy, dedicated acne, pigmentation and anti-aging protocols, and even heel peels for the runners and walkers among us. The dermal therapists are clinic-trained, which means a free obligation-free skin consultation isn&rsquo;t a sales pitch — it&rsquo;s an actual diagnostic before any active treatment.
              </p>
              <p>
                Where most Gold Coast spas force you to choose between bath-house bathing and clinical skin work, RejoovMe layers them. A typical Ultimate Escape begins with magnesium spa and steam, transitions into a full-body massage, then closes with an advanced organic facial calibrated to your consultation. The result is a half-day that feels both indulgent and earned — you leave with that distinct post-treatment skin clarity you usually only get after a course of medical-grade work.
              </p>
              <p>
                Group bookings are RejoovMe&rsquo;s other quiet specialty. The Hens &amp; Group package gives you semi-private use of the spa lounge, magnesium spa rotations, mini facials, neck and shoulder massage and a clear ritual flow so the bridal party isn&rsquo;t milling in a corridor. We&rsquo;ve tested half a dozen hens-friendly venues across the Coast; RejoovMe is the only one that runs the experience like a director rather than a receptionist.
              </p>
              <p>
                Pricing is honest for the inclusions. Single treatments start in the $99–$140 range; signature multi-step packages run $290–$550 depending on inclusions. When you weight that against the included parking, magnesium spa and steam access, and the depth of the skin menu, RejoovMe is — by a clear margin — the best value Day Spa Gold Coast experience for travellers and locals alike.
              </p>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="font-display text-2xl font-semibold text-rejoov-ink">Signature packages</h3>
            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {packages.map((p) => (
                <div
                  key={p.name}
                  className="rounded-xl bg-white/80 p-4 ring-1 ring-rejoov-teal/15 transition hover:ring-rejoov-teal/40"
                >
                  <div className="font-display text-base font-semibold text-rejoov-ink">{p.name}</div>
                  <p className="mt-1 text-xs leading-relaxed text-rejoov-ink/70">{p.blurb}</p>
                </div>
              ))}
            </div>
          </div>

          <figure className="mt-12 rounded-2xl border-l-4 border-rejoov-teal bg-white/70 p-6 italic text-rejoov-teal md:p-8">
            <blockquote className="font-display text-xl leading-relaxed md:text-2xl">
              &ldquo;Magnesium spa, steam, a Swedish massage and an organic facial in one afternoon — RejoovMe is the only Surfers Paradise day spa that delivered actual visible skin results, not just a relaxing nap.&rdquo;
            </blockquote>
            <figcaption className="mt-3 text-sm not-italic text-rejoov-ink/70">
              — Verified guest, Ultimate Escape package
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
