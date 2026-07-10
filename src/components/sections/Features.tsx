import type { ReactNode } from "react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { GlowCard } from "@/components/ui/effects/GlowCard";

export function Features() {
  return (
    <Section id="features" className="border-t border-white/[0.06]">
      <SectionHeading
        title="Small app. Big reach."
        lead="Thump lives in your menu bar and turns three simple gestures into control over your whole Mac."
      />

      <div className="mt-14 grid auto-rows-fr gap-4 md:grid-cols-3">
        {/* Works anywhere — wide */}
        <Tile className="md:col-span-2">
          <TileTitle>Works anywhere on the chassis</TileTitle>
          <TileBody>
            Palm rest, beside the trackpad, the deck, the lid. There is no button
            to find — the whole laptop is the button.
          </TileBody>
          <div aria-hidden className="pointer-events-none mt-6 flex items-center gap-1.5">
            {[0, 1, 2, 3, 4].map((i) => (
              <span
                key={i}
                className="h-8 rounded-full bg-white/70"
                style={{ width: 3, opacity: 0.25 + i * 0.15 }}
              />
            ))}
            <span className="ml-3 font-mono text-xs text-white/40">tap detected</span>
          </div>
        </Tile>

        {/* Private */}
        <Tile>
          <TileTitle>Private by design</TileTitle>
          <TileBody>
            No microphone, no camera. Taps are read from the motion sensor
            entirely on-device — sensor data never leaves your Mac.
          </TileBody>
        </Tile>

        {/* Actions */}
        <Tile>
          <TileTitle>A tap for everything</TileTitle>
          <TileBody>Media, volume, apps, Shortcuts, screenshots, Mission Control, and more.</TileBody>
          <div className="mt-5 flex flex-wrap gap-2">
            {["Play/Pause", "Volume", "Open app", "Shortcut", "Screenshot"].map((a) => (
              <span
                key={a}
                className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs text-white/65"
              >
                {a}
              </span>
            ))}
          </div>
        </Tile>

        {/* Customizable */}
        <Tile>
          <TileTitle>Make it yours</TileTitle>
          <TileBody>Map single, double, and triple taps to anything you like.</TileBody>
          <div className="mt-5 space-y-2 font-mono text-sm">
            {[
              ["×1", "Play / Pause"],
              ["×2", "Mission Control"],
              ["×3", "Screenshot"],
            ].map(([g, a]) => (
              <div key={g} className="flex items-center justify-between text-white/60">
                <span className="text-white/40">{g}</span>
                <span>{a}</span>
              </div>
            ))}
          </div>
        </Tile>

        {/* Apple Silicon */}
        <Tile>
          <TileTitle>Apple Silicon native</TileTitle>
          <TileBody>
            Built for the M-series sensor. Featherweight, and it sips power in the
            background.
          </TileBody>
        </Tile>

        {/* Onboarding — wide */}
        <Tile className="md:col-span-2">
          <TileTitle>A setup you will actually enjoy</TileTitle>
          <TileBody>
            Thump tunes its sensitivity with a playful onboarding — keep a ball
            in the air with your taps — so it is dialled in before you do a thing.
          </TileBody>
          <div aria-hidden className="pointer-events-none relative mt-6 h-10">
            <span className="absolute left-0 top-1 h-8 w-8 rounded-full bg-white shadow-[0_0_20px_rgba(255,255,255,0.6)]" />
            <span
              className="absolute left-0 top-1 h-8 w-8 rounded-full border border-white/30"
              style={{ animation: "ripple 2.4s cubic-bezier(0.16,1,0.3,1) infinite" }}
            />
          </div>
        </Tile>

        {/* Menu bar */}
        <Tile>
          <TileTitle>Out of your way</TileTitle>
          <TileBody>
            Lives in the menu bar with snooze, a live signal view, and one-tap
            testing. No Dock clutter.
          </TileBody>
        </Tile>
      </div>
    </Section>
  );
}

function Tile({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <Reveal className={className}>
      <GlowCard>{children}</GlowCard>
    </Reveal>
  );
}

function TileTitle({ children }: { children: ReactNode }) {
  return <h3 className="text-lg font-semibold tracking-tight">{children}</h3>;
}

function TileBody({ children }: { children: ReactNode }) {
  return <p className="mt-2 text-sm leading-relaxed text-[#a3a3ad]">{children}</p>;
}
