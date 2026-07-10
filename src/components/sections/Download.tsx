import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Meteors } from "@/components/ui/effects/Meteors";

export function Download() {
  return (
    <Section id="download" className="border-t border-white/[0.06]">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.01] px-6 py-20 text-center">
          <span className="border-beam" aria-hidden style={{ animationDuration: "9s" }} />
          {/* glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-0 h-[360px] w-[360px] -translate-x-1/2 rounded-full bg-white/[0.09] blur-[120px]"
          />
          <div aria-hidden className="pointer-events-none absolute inset-0 dot-grid opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
          <Meteors count={4} />

          {/* ripple emblem */}
          <div aria-hidden className="relative z-10 mx-auto mb-8 h-16 w-16">
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="absolute inset-0 rounded-full border border-white/40"
                style={{ animation: `ripple 2.4s cubic-bezier(0.16,1,0.3,1) ${i * 0.8}s infinite` }}
              />
            ))}
            <span className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0_0_18px_rgba(255,255,255,0.9)]" />
          </div>

          <h2 className="relative z-10 text-balance text-4xl font-semibold tracking-tight md:text-6xl">
            Give your Mac a tap.
          </h2>
          <p className="relative z-10 mx-auto mt-5 max-w-md text-pretty text-lg text-[#a3a3ad]">
            Download Thump and map your first gesture in under a minute.
          </p>

          <div className="relative z-10 mt-9 flex justify-center">
            <Button href="#" size="lg">
              Download for Mac
            </Button>
          </div>

          <div className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-mono text-xs text-white/45">
            <span>Free</span>
            <span aria-hidden className="text-white/20">·</span>
            <span>macOS 14 Sonoma or later</span>
            <span aria-hidden className="text-white/20">·</span>
            <span>MacBooks with M1 or later</span>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
