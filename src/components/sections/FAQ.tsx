import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

const FAQS: { q: string; a: string }[] = [
  {
    q: "Will it work on my Mac?",
    a: "Thump needs a MacBook with Apple Silicon (M1 or later) — the tap sensor is the motion sensor built into those machines. Intel MacBooks and desktop Macs (mini, Studio, iMac) don't have it, so Thump can't run there. Any recent macOS (Sonoma or later) is fine.",
  },
  {
    q: "Does it listen through the microphone?",
    a: "No. Thump never touches the microphone or camera. It reads the accelerometer — it feels the vibration of your tap through the chassis, it doesn't hear it. Sensor data is processed in memory, on-device, and never recorded or transmitted.",
  },
  {
    q: "Won't typing set it off?",
    a: "Typing does vibrate the chassis, so Thump watches for keystrokes and ignores everything the sensor feels while you type (and shortly after). Detection is also tuned to the sharp spike-and-decay signature of a deliberate tap, so ordinary desk bumps and laptop handling are filtered out. A sensitivity dial lets you make it stricter or looser.",
  },
  {
    q: "Why does it need Input Monitoring and Accessibility permissions?",
    a: "macOS gates the motion sensor behind the Input Monitoring permission — that's the only way to read it. Thump also uses it to know that a key was pressed (never which one) for typing suppression. Accessibility is only needed if you map gestures to media keys like play/pause or volume, because pressing those keys on your behalf requires it.",
  },
  {
    q: "Does it drain the battery?",
    a: "The sensor is already running — macOS uses it for things like sudden-motion detection. Thump just reads the stream and does a tiny amount of math per sample, which rounds to a negligible slice of CPU. It's a menu bar app designed to be left on all day.",
  },
  {
    q: "Is it on the App Store?",
    a: "No. The sensor Thump reads isn't available to sandboxed App Store apps, so Thump is distributed directly — signed, notarized by Apple, and kept current with built-in updates.",
  },
  {
    q: "How much does it cost?",
    a: "Thump is free.",
  },
];

export function FAQ() {
  return (
    <Section id="faq" className="border-t border-white/[0.06]">
      <SectionHeading
        title="Questions, answered."
        lead="The things everyone asks before trusting an app that can feel their laptop."
      />

      <div className="mt-12 max-w-3xl">
        {FAQS.map((item, i) => (
          <Reveal key={item.q} delay={i * 40}>
            <details className="group border-b border-white/[0.08]">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-left text-[17px] font-medium text-white/90 transition-colors hover:text-white [&::-webkit-details-marker]:hidden">
                {item.q}
                <span
                  aria-hidden
                  className="relative h-5 w-5 shrink-0 text-white/40 transition-transform duration-300 group-open:rotate-45"
                >
                  <span className="absolute left-1/2 top-1/2 h-px w-3.5 -translate-x-1/2 -translate-y-1/2 bg-current" />
                  <span className="absolute left-1/2 top-1/2 h-3.5 w-px -translate-x-1/2 -translate-y-1/2 bg-current" />
                </span>
              </summary>
              <p className="pb-6 pr-10 leading-relaxed text-[#a3a3ad]">{item.a}</p>
            </details>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
