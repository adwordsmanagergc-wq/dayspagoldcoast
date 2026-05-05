import Link from 'next/link';

export function Breadcrumbs({
  items
}: {
  items: { name: string; href: string }[];
}) {
  return (
    <nav aria-label="Breadcrumb" className="mx-auto max-w-5xl px-5 pt-6">
      <ol className="flex flex-wrap items-center gap-2 text-sm text-rejoov-ink/60">
        {items.map((it, i) => (
          <li key={it.href} className="flex items-center gap-2">
            {i > 0 && <span aria-hidden="true">›</span>}
            {i === items.length - 1 ? (
              <span aria-current="page" className="text-rejoov-ink">
                {it.name}
              </span>
            ) : (
              <Link href={it.href} className="hover:text-rejoov-teal">
                {it.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
