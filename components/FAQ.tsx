import { faqs } from '@/lib/data';

export function FAQ() {
  return (
    <section id="faq" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-5">
        <p className="eyebrow">FAQ</p>
        <h2 className="mt-2 font-display text-3xl font-semibold text-rejoov-night md:text-4xl">
          Day spa Gold Coast FAQ
        </h2>
        <p className="mt-3 text-rejoov-ink/70">What readers ask us most before booking a Gold Coast day spa.</p>
        <div className="mt-8 divide-y divide-black/5 rounded-2xl ring-1 ring-black/5">
          {faqs.map((f, i) => (
            <details key={f.q} className="group p-5 open:bg-rejoov-sand/60" open={i === 0}>
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-display text-lg font-semibold text-rejoov-night">
                <h3 className="text-left text-base md:text-lg">{f.q}</h3>
                <span aria-hidden className="mt-0.5 inline-flex h-7 w-7 flex-none select-none items-center justify-center rounded-full bg-rejoov-shell text-rejoov-deep transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 leading-relaxed text-rejoov-ink/80">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
