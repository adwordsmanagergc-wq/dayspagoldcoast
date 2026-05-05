import { faqs } from '@/lib/data';

export function FAQ() {
  return (
    <section id="faq" className="mx-auto max-w-3xl px-5 py-16 md:py-20">
      <h2 className="font-display text-3xl font-semibold text-rejoov-ink md:text-4xl">
        Day Spa Gold Coast FAQ
      </h2>
      <p className="mt-3 text-rejoov-ink/70">
        Everything our readers ask before booking a Day Spa Gold Coast experience.
      </p>
      <div className="mt-8 divide-y divide-black/5 rounded-2xl bg-white/70 ring-1 ring-black/5">
        {faqs.map((f) => (
          <details key={f.q} className="group p-5 open:bg-rejoov-teal/5">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-display text-lg font-semibold text-rejoov-ink">
              <span>{f.q}</span>
              <span
                aria-hidden
                className="mt-1 select-none text-rejoov-teal transition group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-rejoov-ink/80">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
