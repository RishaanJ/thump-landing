import Link from "next/link";
import { Meteors } from "@/components/ui/effects/Meteors";

/**
 * Planetary footer: a huge glowing planet rises from the bottom edge, with a
 * giant sunken wordmark behind the horizon, an orbiting satellite, meteors,
 * and the footer content floating in the sky above.
 */
export function Footer() {
  return (
    <footer className="relative mt-10 overflow-hidden pt-24">
      {/* sky */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <Stars />
        <Meteors count={6} />
      </div>

      {/* content in the sky */}
      <div className="relative z-20 mx-auto flex w-full max-w-6xl flex-col items-center px-6 text-center">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10">
            <span aria-hidden className="block h-3 w-3 rounded-full bg-white shadow-[0_0_14px_rgba(255,255,255,0.8)]" />
          </span>
          <span className="text-lg font-semibold tracking-tight">Thump</span>
        </Link>

        <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/45">
          Control your Mac with a tap. Made for Apple Silicon MacBooks — your
          taps are processed on-device, and sensor data never leaves your
          machine.
        </p>

        <nav className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-white/60">
          <a href="/#how" className="transition-colors hover:text-white">How it works</a>
          <a href="/#features" className="transition-colors hover:text-white">Features</a>
          <a href="/#faq" className="transition-colors hover:text-white">FAQ</a>
          <a href="/#download" className="transition-colors hover:text-white">Download</a>
          <a href="https://github.com" className="transition-colors hover:text-white">GitHub</a>
          <Link href="/privacy" className="transition-colors hover:text-white">Privacy</Link>
          <Link href="/terms" className="transition-colors hover:text-white">Terms</Link>
        </nav>
      </div>

      {/* planet system */}
      <div aria-hidden className="pointer-events-none relative mt-16 h-[340px] overflow-hidden md:h-[420px]">
        {/* sunken giant wordmark, peeking above the horizon */}
        <div className="absolute inset-x-0 top-[8%] flex justify-center">
          <span className="select-none bg-clip-text text-[22vw] font-bold leading-none tracking-tight text-white/[0.045] md:text-[18vw]">
            THUMP
          </span>
        </div>

        {/* orbit ring + satellite */}
        <div className="absolute left-1/2 top-[46%] h-[1400px] w-[1400px] -translate-x-1/2 md:h-[1700px] md:w-[1700px]">
          <div className="absolute inset-[-60px] rounded-full border border-white/[0.07]" />
          <div
            className="absolute inset-[-60px]"
            style={{ animation: "orbit-spin 40s linear infinite" }}
          >
            <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0_0_12px_rgba(255,255,255,0.9)]" />
          </div>

          {/* the planet */}
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background:
                "radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.14), rgba(255,255,255,0.04) 18%, #08080b 42%)",
              boxShadow:
                "0 -1px 0 rgba(255,255,255,0.35), 0 -12px 48px rgba(255,255,255,0.16), 0 -48px 140px rgba(255,255,255,0.07)",
            }}
          />
        </div>

        {/* small print sitting on the planet surface */}
        <div className="absolute inset-x-0 bottom-6 z-10 flex flex-col items-center gap-2 px-6 text-xs text-white/35">
          <span>© {new Date().getFullYear()} Thump. All rights reserved.</span>
          <span className="font-mono">tap · tap · tap</span>
        </div>
      </div>
    </footer>
  );
}

function Stars() {
  const stars = Array.from({ length: 48 }, (_, i) => {
    const r1 = ((i * 9301 + 49297) % 233280) / 233280;
    const r2 = ((i * 4021 + 3571) % 6151) / 6151;
    return {
      left: `${(r1 * 100).toFixed(2)}%`,
      top: `${(r2 * 72).toFixed(2)}%`,
      size: r1 > 0.88 ? 2 : 1,
      delay: `${(r2 * 4).toFixed(2)}s`,
      duration: `${(2 + r1 * 3).toFixed(2)}s`,
    };
  });
  return (
    <>
      {stars.map((s, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            left: s.left,
            top: s.top,
            width: s.size,
            height: s.size,
            animation: `twinkle ${s.duration} ease-in-out ${s.delay} infinite`,
          }}
        />
      ))}
    </>
  );
}
