import { Button } from "@/components/ui/Button";
import { Meteors } from "@/components/ui/effects/Meteors";
import { Marquee } from "@/components/ui/effects/Marquee";

const MARQUEE_ACTIONS = [
  "Play / Pause",
  "Mission Control",
  "Screenshot",
  "Run Shortcut",
  "Next Track",
  "Open App",
  "Volume",
  "Show Desktop",
  "Lock Screen",
  "Mute",
];

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-32 pb-10 text-center"
    >
      {/* Ambient backdrop */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 dot-grid opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
        <div className="absolute left-1/2 top-[16%] h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-white/[0.07] blur-[130px]" />
        <div className="absolute left-[12%] top-[55%] h-[360px] w-[360px] rounded-full bg-white/[0.03] blur-[120px]" />
        <Twinkles />
        <Meteors count={7} />
      </div>

      {/* Kicker */}
      <div className="relative z-10 mb-8 inline-flex items-center gap-2 overflow-hidden rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-xs text-white/70">
        <span className="border-beam" aria-hidden />
        <span className="h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
        For Apple Silicon MacBooks
      </div>

      <h1 className="relative z-10 max-w-4xl text-balance text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl md:text-7xl">
        Tap your Mac.
        <br />
        <span className="glow-text">It listens.</span>
      </h1>

      <p className="relative z-10 mt-7 max-w-xl text-pretty text-lg leading-relaxed text-[#a3a3ad]">
        Thump turns a tap on the side of your MacBook into anything — play music,
        launch apps, run shortcuts. No extra hardware. It just feels the tap.
      </p>

      <div className="relative z-10 mt-10 flex flex-col items-center gap-3 sm:flex-row">
        <Button href="https://github.com/RishaanJ/thump/releases/download/v1.1/Thump-1.1.dmg" size="lg">
          Download for Mac
        </Button>
        <Button href="#demo" size="lg" variant="ghost">
          Try a tap
        </Button>
      </div>

      <p className="relative z-10 mt-5 font-mono text-xs text-white/40">
        Free · macOS 14+ · Apple Silicon
      </p>

      {/* One tap away from anything: actions marquee */}
      <div className="relative z-10 mt-20 w-full max-w-4xl">
        <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.2em] text-white/35">
          one tap away
        </p>
        <Marquee duration={30}>
          {MARQUEE_ACTIONS.map((a) => (
            <span
              key={a}
              className="flex items-center gap-2.5 whitespace-nowrap rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/70"
            >
              <span className="h-1 w-1 rounded-full bg-white/60" />
              {a}
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
}

function Twinkles() {
  const stars = Array.from({ length: 36 }, (_, i) => {
    const seed = (i * 9301 + 49297) % 233280;
    const rand = seed / 233280;
    const rand2 = ((i * 4021 + 3571) % 6151) / 6151;
    return {
      left: `${(rand * 100).toFixed(2)}%`,
      top: `${(rand2 * 100).toFixed(2)}%`,
      size: rand > 0.85 ? 2 : 1,
      delay: `${(rand2 * 3).toFixed(2)}s`,
      duration: `${(2 + rand * 2).toFixed(2)}s`,
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
