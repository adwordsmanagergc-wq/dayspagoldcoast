function initials(name: string): string {
  const stop = new Set(['the', 'at', 'of', '&', 'and']);
  const words = name
    .replace(/[^A-Za-z\s&]/g, ' ')
    .split(/\s+/)
    .filter((w) => w && !stop.has(w.toLowerCase()));
  if (words.length === 0) return name.slice(0, 2).toUpperCase();
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
  return (words[0][0] + words[1][0]).toUpperCase();
}

function tone(name: string): { bg: string; ring: string; ink: string } {
  let h = 0;
  for (let i = 0; i < name.length; i++) h = (h * 31 + name.charCodeAt(i)) >>> 0;
  const palette = [
    { bg: '#EAE7E0', ring: '#D9D6CE', ink: '#16231F' },
    { bg: '#DCE8E3', ring: '#B9CFC7', ink: '#175A53' },
    { bg: '#E4E6E0', ring: '#C9CDC3', ink: '#2B3A35' },
    { bg: '#EFEDE7', ring: '#D9D6CE', ink: '#56625D' }
  ];
  return palette[h % palette.length];
}

export function CompetitorMonogram({ name }: { name: string }) {
  const ini = initials(name);
  const { bg, ring, ink } = tone(name);
  return (
    <svg
      viewBox="0 0 96 96"
      aria-hidden="true"
      className="h-full w-full"
    >
      <rect width="96" height="96" rx="12" fill={bg} />
      <rect
        x="4"
        y="4"
        width="88"
        height="88"
        rx="9"
        fill="none"
        stroke={ring}
        strokeWidth="1"
        opacity="0.7"
      />
      <text
        x="50%"
        y="54%"
        textAnchor="middle"
        dominantBaseline="middle"
        fontFamily="Newsreader, Georgia, serif"
        fontWeight="400"
        fontSize={ini.length > 2 ? 28 : 36}
        fill={ink}
        letterSpacing="1"
      >
        {ini}
      </text>
    </svg>
  );
}
