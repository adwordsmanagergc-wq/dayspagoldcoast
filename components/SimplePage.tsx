import { SITE } from '@/lib/site';
import { breadcrumbSchema } from '@/lib/schema';
import { JsonLd } from './JsonLd';
import { Header } from './Header';
import { Breadcrumbs } from './Breadcrumbs';
import { Footer } from './Footer';

/** Shared shell for plain editorial pages (about, contact, privacy). */
export function SimplePage({
  path,
  name,
  eyebrow,
  title,
  children
}: {
  path: string;
  name: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  const crumbs = [
    { name: 'Day Spa Gold Coast', href: '/day-spa-gold-coast' },
    { name, href: path }
  ];
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs.map((c) => ({ name: c.name, url: `${SITE.url}${c.href}` })))} />
      <Header />
      <main id="main">
        <Breadcrumbs items={crumbs} />
        <article className="mx-auto max-w-3xl px-5 py-12 md:py-16">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="mt-3 font-display text-4xl font-bold leading-tight text-rejoov-night md:text-5xl">{title}</h1>
          <div className="prose-rejoov mt-8 space-y-5 leading-relaxed text-rejoov-ink/85 [&_h2]:mt-10 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-rejoov-night">
            {children}
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
