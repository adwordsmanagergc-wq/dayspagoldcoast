import Image from 'next/image';
import { ArrowRight } from '@phosphor-icons/react/dist/ssr';
import { bestFor } from '@/lib/data';

// Bento placement: one cell per pick, three with photography.
const cells: Record<string, { cls: string; img?: string; alt?: string; tint?: boolean }> = {
  overall: { cls: 'md:col-span-2 md:row-span-2', img: '/rejoovmeimage7.jpg', alt: 'Facial massage at RejoovMe, the best day spa on the Gold Coast overall' },
  couples: { cls: '' },
  'luxury-hotel': { cls: '' },
  hens: { cls: 'md:col-span-2', img: '/rejoovmeimage3.jpg', alt: 'Champagne in the magnesium spa, a hens party day spa on the Gold Coast' },
  hinterland: { cls: 'md:row-span-2', tint: true },
  bathhouse: { cls: '' },
  south: { cls: '' },
  skin: { cls: 'md:col-span-2 md:row-span-2', img: '/rejoovmeimage6.jpg', alt: 'Organic clay mask facial at a Gold Coast skin clinic day spa' }
};

const order = ['overall', 'couples', 'luxury-hotel', 'hens', 'hinterland', 'bathhouse', 'skin', 'south'];

export function BestFor() {
  const picks = [...bestFor].sort((a, b) => order.indexOf(a.id) - order.indexOf(b.id));
  return (
    <section id="best-for" className="mx-auto max-w-site px-5 py-24 md:px-10 md:py-32">
      <div className="grid gap-6 md:grid-cols-12 md:items-end">
        <h2 className="reveal text-[clamp(40px,5.5vw,76px)] font-light leading-[1.02] md:col-span-8">
          The right spa for <em className="italic">the day</em> you want
        </h2>
        <p className="reveal text-ink-mute md:col-span-3 md:col-start-10">
          Couples, hens, a hotel splurge or a hinterland reset. Our picks by occasion.
        </p>
      </div>

      <ul className="mt-12 grid auto-rows-[minmax(200px,auto)] gap-4 md:grid-flow-dense md:grid-cols-4">
        {picks.map((b) => {
          const c = cells[b.id] ?? { cls: '' };
          const photo = Boolean(c.img);
          return (
            <li key={b.id} className={`reveal ${c.cls}`}>
              <a
                href={b.href}
                className={`lift group relative flex h-full flex-col justify-end overflow-hidden rounded-surface p-6 ${
                  photo ? 'min-h-[440px] text-canvas md:min-h-[220px]' : c.tint ? 'min-h-[220px] bg-lagoon-wash text-ink' : 'min-h-[220px] bg-surface text-ink shadow-card'
                }`}
              >
                {photo && (
                  <>
                    <Image
                      src={c.img!}
                      alt={c.alt!}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    />
                    <span aria-hidden className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/60 to-ink/10" />
                  </>
                )}
                <span className="relative">
                  <h3 className={`font-body text-xs uppercase tracking-[0.14em] ${photo ? 'text-canvas/90' : 'text-ink-mute'}`}>{b.label}</h3>
                  <span className="mt-3 block font-display text-[26px] font-light leading-tight md:text-[30px]">{b.pick}</span>
                  <span className={`mt-1 block text-sm ${photo ? 'text-canvas/90' : 'text-ink-mute'}`}>{b.where}</span>
                  <span className={`mt-3 block max-w-[46ch] text-[15px] leading-relaxed ${photo ? 'text-canvas/90' : 'text-ink-mute'}`}>{b.why}</span>
                  <ArrowRight size={18} aria-hidden className={`mt-4 transition-transform duration-200 ease-out group-hover:translate-x-1 ${photo ? '' : 'text-lagoon'}`} />
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
