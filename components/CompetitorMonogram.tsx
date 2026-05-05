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
    { bg: '#FAF6F0', ring: '#D9C9A8', ink: '#313133' },
    { bg: '#F1EAD9', ring: '#C9B98F', ink: '#3A352A' },
    { bg: '#EAEFEC', ring: '#A7BDB3', ink: '#2C3A36' },
    { bg: '#F2EDE6', ring: '#B9A98A', ink: '#3A3326' },
    { bg: '#E8EDEE', ring: '#9FB1B5', ink: '#2A3438' }
  ];
  return palette[h % palette.length];
}

export function CompetitorMonogram({ name }: { name: string }) {
  const ini = initials(name);
  const { bg, ring, ink } = tone(name);
  return (
    <svg
      viewBox="0 0 96 96"
      role="img"
      aria-label={`${name} monogram`}
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
        fontFamily="Fraunces, Georgia, serif"
        fontWeight="600"
        fontSize={ini.length > 2 ? 28 : 36}
        fill={ink}
        letterSpacing="1"
      >
        {ini}
      </text>
    </svg>
  );
}
