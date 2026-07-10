import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

const STEPS = [
  {
    n: "01",
    title: "You tap the chassis",
    body: "Beside the trackpad, on the palm rest, the lid — anywhere on the aluminium. A normal, gentle tap.",
  },
  {
    n: "02",
    title: "The sensor feels it",
    body: "Every Apple Silicon MacBook hides a motion sensor. Your tap sends a sharp vibration spike through the whole body, and Thump reads it in real time.",
  },
  {
    n: "03",
    title: "Your action runs",
    body: "Thump groups spikes into single, double, and triple taps — filtering out typing and desk bumps — then fires whatever you mapped.",
  },
];

export function HowItWorks() {
  return (
    <Section id="how" className="border-t border-white/[0.06]">
      <SectionHeading
        title="It feels the tap, not hears it."
        lead="No microphone, no camera, no accessory. Just the accelerometer already inside your Mac, read on-device."
      />

      <Reveal className="mt-14">
        <Waveform />
      </Reveal>

      <ol className="mt-14 grid gap-6 md:grid-cols-3">
        {STEPS.map((step, i) => (
          <Reveal key={step.n} delay={i * 90}>
            <li className="surface h-full p-6">
              <span className="font-mono text-sm text-white/40">{step.n}</span>
              <h3 className="mt-4 text-xl font-semibold">{step.title}</h3>
              <p className="mt-2 leading-relaxed text-[#a3a3ad]">{step.body}</p>
            </li>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}

/** A stylized accelerometer trace: quiet baseline with three tap spikes
    crossing a dashed threshold — the app's "signal is the hero" motif. */
function Waveform() {
  const width = 1000;
  const height = 200;
  const mid = height / 2;
  const threshold = mid - 46;

  // Baseline noise with three sharp spikes.
  const points: string[] = [];
  for (let x = 0; x <= width; x += 8) {
    let y = mid + Math.sin(x / 14) * 3 + Math.sin(x / 5) * 1.5;
    for (const sx of [260, 500, 740]) {
      const d = x - sx;
      y -= Math.exp(-(d * d) / 120) * 78;
    }
    points.push(`${x},${y.toFixed(1)}`);
  }

  return (
    <div className="surface relative overflow-hidden p-4">
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="h-[180px] w-full"
        preserveAspectRatio="none"
        aria-hidden
      >
        <line
          x1="0"
          y1={threshold}
          x2={width}
          y2={threshold}
          stroke="rgba(255,255,255,0.35)"
          strokeWidth="1"
          strokeDasharray="5 5"
        />
        <polyline
          points={points.join(" ")}
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinejoin="round"
          style={{ filter: "drop-shadow(0 0 6px rgba(255,255,255,0.6))" }}
        />
      </svg>
      <div className="pointer-events-none absolute left-4 top-4 flex gap-2 font-mono text-[11px] text-white/40">
        <span>tap threshold</span>
      </div>
      <div className="pointer-events-none absolute bottom-3 right-4 flex gap-6 font-mono text-[11px] text-white/50">
        <span>×1</span>
        <span>×2</span>
        <span>×3</span>
      </div>
    </div>
  );
}
