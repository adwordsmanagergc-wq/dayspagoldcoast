import { faqs } from '@/lib/data';

export function FAQ() {
  return (
    <section id="faq" className="mx-auto max-w-site px-5 py-24 md:px-10 md:py-32">
      <div className="grid gap-10 md:grid-cols-12">
        <h2 className="reveal text-[clamp(40px,5.5vw,76px)] font-light leading-[1.02] md:col-span-12">
          Day spa Gold Coast <em className="italic">questions</em>
        </h2>
        <div className="border-t border-hairline md:col-span-9 md:col-start-4">
          {faqs.map((f, i) => (
            <details key={f.q} className="group border-b border-hairline" open={i === 0}>
              <summary className="flex min-h-[64px] cursor-pointer list-none items-center justify-between gap-6 py-4">
                <h3 className="text-[20px] leading-snug md:text-[24px] md:font-light">{f.q}</h3>
                <span aria-hidden className="flex h-9 w-9 flex-none items-center justify-center rounded-full text-lagoon shadow-[inset_0_0_0_1px_var(--hairline)] transition-transform duration-200 ease-out group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="max-w-[64ch] pb-6 text-ink-mute">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
