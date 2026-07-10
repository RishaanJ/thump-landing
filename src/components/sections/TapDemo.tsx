"use client";

import { useCallback, useRef, useState, type MouseEvent } from "react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { MacKeyboard } from "@/components/MacKeyboard";

type Ripple = { id: number; x: number; y: number };

const ACTIONS: Record<number, { name: string; hint: string }> = {
  1: { name: "Play / Pause", hint: "single tap" },
  2: { name: "Mission Control", hint: "double tap" },
  3: { name: "Screenshot", hint: "triple tap" },
};

export function TapDemo() {
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const [pending, setPending] = useState(0);
  const [result, setResult] = useState<{ count: number } | null>(null);
  const [typing, setTyping] = useState(false);
  const rid = useRef(0);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const typingTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const wrap = useRef<HTMLDivElement>(null);

  const tap = useCallback((e: MouseEvent<HTMLElement>) => {
    const rect = wrap.current?.getBoundingClientRect();
    if (rect) {
      const id = rid.current++;
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setRipples((r) => [...r, { id, x, y }]);
      setTimeout(() => setRipples((r) => r.filter((rp) => rp.id !== id)), 700);
    }

    setTyping(false);
    setResult(null);
    setPending((p) => {
      const next = Math.min(p + 1, 3);
      if (timer.current) clearTimeout(timer.current);
      timer.current = setTimeout(() => {
        setResult({ count: next });
        setPending(0);
      }, 480);
      return next;
    });
  }, []);

  // Clicking a key = typing → Thump suppresses taps, just like the real app.
  const type = useCallback(() => {
    if (timer.current) clearTimeout(timer.current);
    if (typingTimer.current) clearTimeout(typingTimer.current);
    setPending(0);
    setResult(null);
    setTyping(true);
    typingTimer.current = setTimeout(() => setTyping(false), 1600);
  }, []);

  const active = result?.count ?? pending;

  return (
    <Section id="demo">
      <SectionHeading
        title="Try a tap right here"
        lead="Click the palm rest the way you'd tap your MacBook — one, two, or three times. Then try a key: Thump ignores taps while you type."
      />

      <div className="mt-14 grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:items-start">
        {/* Deck */}
        <div ref={wrap} className="relative [perspective:2000px]">
          <div className="[transform:rotateX(14deg)] [transform-style:preserve-3d]">
            <MacKeyboard onTap={tap} onType={type} />
          </div>
          {ripples.map((r) => (
            <span
              key={r.id}
              className="pointer-events-none absolute z-10 h-24 w-24 rounded-full border border-white/60"
              style={{
                left: r.x - 48,
                top: r.y - 48,
                animation: "ripple 0.7s cubic-bezier(0.16,1,0.3,1) forwards",
              }}
            />
          ))}
        </div>

        {/* Read-out */}
        <div className="surface relative overflow-hidden p-6">
          <span className="border-beam" aria-hidden />

          <p className="font-mono text-[11px] uppercase tracking-[0.18em] tracking-widest text-white/40">
            Live detection
          </p>

          <div className="mt-4 flex items-center gap-3">
            {[1, 2, 3].map((n) => (
              <span
                key={n}
                className={`flex h-9 w-11 items-center justify-center rounded-lg font-mono text-sm font-bold transition-all duration-200 ${
                  !typing && active >= n
                    ? "bg-white text-black shadow-[0_0_18px_rgba(255,255,255,0.5)]"
                    : "bg-white/[0.06] text-white/40"
                }`}
              >
                ×{n}
              </span>
            ))}
          </div>

          <div className="mt-6 min-h-[64px]">
            {typing ? (
              <div style={{ animation: "rise-fade 0.4s cubic-bezier(0.16,1,0.3,1)" }}>
                <p className="font-mono text-xs uppercase tracking-widest text-white/45">
                  keystroke detected
                </p>
                <p className="mt-1 text-2xl font-semibold text-white/85">
                  Taps suppressed
                </p>
                <p className="mt-1 text-sm text-white/45">
                  Typing vibrates the chassis too — Thump filters it out.
                </p>
              </div>
            ) : result ? (
              <div style={{ animation: "rise-fade 0.4s cubic-bezier(0.16,1,0.3,1)" }}>
                <p className="font-mono text-xs uppercase tracking-widest text-white/45">
                  {ACTIONS[result.count].hint}
                </p>
                <p className="mt-1 text-2xl font-semibold">{ACTIONS[result.count].name}</p>
              </div>
            ) : (
              <p className="text-[#a3a3ad]">
                {pending > 0 ? "Listening…" : "Tap the palm rest to fire a gesture."}
              </p>
            )}
          </div>

          <div className="mt-6 border-t border-white/8 pt-5">
            <ul className="space-y-2 text-sm text-white/60">
              {[1, 2, 3].map((n) => (
                <li key={n} className="flex items-center justify-between">
                  <span className="font-mono text-white/45">×{n}</span>
                  <span>{ACTIONS[n].name}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-white/35">
              In the app, every gesture is yours to reassign.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
