/**
 * Server-rendered JSON-LD. Unlike next/script (afterInteractive), this is in
 * the initial HTML, so crawlers see structured data without executing JS.
 */
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, '\\u003c')
      }}
    />
  );
}
