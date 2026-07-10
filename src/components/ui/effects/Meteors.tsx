/**
 * Monochrome shooting stars (MagicUI-style meteors). Deterministic pseudo-
 * random placement so SSR and client render identically.
 */
export function Meteors({ count = 8 }: { count?: number }) {
  const meteors = Array.from({ length: count }, (_, i) => {
    const r1 = ((i * 7919 + 104729) % 9973) / 9973;
    const r2 = ((i * 6271 + 15485) % 7727) / 7727;
    return {
      left: `${(8 + r1 * 84).toFixed(2)}%`,
      top: `${(r2 * 42).toFixed(2)}%`,
      delay: `${(r1 * 9).toFixed(2)}s`,
      duration: `${(3.4 + r2 * 4).toFixed(2)}s`,
    };
  });

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {meteors.map((m, i) => (
        <span
          key={i}
          className="absolute h-px w-px rounded-full bg-white shadow-[0_0_6px_1px_rgba(255,255,255,0.35)]"
          style={{
            left: m.left,
            top: m.top,
            animation: `meteor ${m.duration} linear ${m.delay} infinite`,
          }}
        >
          {/* tail */}
          <span className="absolute left-0 top-1/2 h-px w-[110px] -translate-y-1/2 bg-gradient-to-r from-white/60 to-transparent" />
        </span>
      ))}
    </div>
  );
}
