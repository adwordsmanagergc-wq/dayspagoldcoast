import { WhatsappLogo, EnvelopeSimple } from '@phosphor-icons/react/dist/ssr';
import { SITE } from '@/lib/site';

const message =
  "Hi, I'd like my day spa to be considered for Day Spa Gold Coast.\n\nSpa name:\nSuburb:\nWebsite:\nWhat makes it special:";

export const whatsappHref = `https://wa.me/${SITE.inclusion.whatsapp}?text=${encodeURIComponent(message)}`;
export const emailHref = `mailto:${SITE.inclusion.email}?subject=${encodeURIComponent(
  'Day spa inclusion request: dayspagoldcoast.com'
)}&body=${encodeURIComponent(message)}`;

export function InclusionButtons() {
  return (
    <span className="not-prose flex flex-col gap-3 sm:flex-row">
      <a href={whatsappHref} target="_blank" rel="noopener" className="btn btn-primary !no-underline">
        <WhatsappLogo size={20} aria-hidden />
        WhatsApp us
      </a>
      <a href={emailHref} className="btn btn-ghost !text-ink !no-underline">
        <EnvelopeSimple size={20} aria-hidden />
        Email us
      </a>
    </span>
  );
}

/** "Get your spa included" request block: WhatsApp or email, pre-filled. */
export function GetListed({ className = '' }: { className?: string }) {
  return (
    <section id="get-listed" aria-labelledby="get-listed-title" className={`mx-auto max-w-site px-5 md:px-10 ${className}`}>
      <div className="reveal grid gap-8 rounded-surface bg-lagoon-wash p-8 md:grid-cols-12 md:items-center md:gap-6 md:p-14">
        <div className="md:col-span-7">
          <h2 id="get-listed-title" className="text-[clamp(32px,4vw,56px)] font-light leading-[1.05] text-ink">
            Run a Gold Coast day spa? <em className="italic text-lagoon">Get reviewed.</em>
          </h2>
          <p className="mt-4 max-w-[52ch] text-ink-mute">
            Request to be included and we will add your venue to our next round of visits. Rankings stay editorial.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row md:col-span-5 md:justify-end">
          <a href={whatsappHref} target="_blank" rel="noopener" className="btn btn-primary">
            <WhatsappLogo size={20} aria-hidden />
            WhatsApp us
          </a>
          <a href={emailHref} className="btn btn-ghost bg-surface/60">
            <EnvelopeSimple size={20} aria-hidden />
            Email us
          </a>
        </div>
        <p className="text-sm text-ink-mute md:col-span-12">
          WhatsApp <a href={whatsappHref} target="_blank" rel="noopener" className="link">{SITE.inclusion.whatsappDisplay}</a> or email{' '}
          <a href={emailHref} className="link">{SITE.inclusion.email}</a>
        </p>
      </div>
    </section>
  );
}
