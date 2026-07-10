"use client";

import { useState, type MouseEvent, type ReactNode } from "react";

/**
 * Top-down MacBook deck: full US keyboard (function row, inverted-T arrows,
 * proper key widths), speaker grilles, palm rest, and trackpad.
 *
 * Clicking the aluminium (palm rest / around the trackpad) is a "tap".
 * Clicking a key is "typing" — reported separately so the demo can show
 * Thump's typing suppression.
 */

type Key = { label: ReactNode; w: number; id: string; sub?: ReactNode; align?: "left" | "right" };

const u = (id: string, label: ReactNode, w = 1, extra: Partial<Key> = {}): Key => ({
  id,
  label,
  w,
  ...extra,
});

const FN_ROW: Key[] = [
  u("esc", "esc", 1.5, { align: "left" }),
  ...Array.from({ length: 12 }, (_, i) => u(`f${i + 1}`, `F${i + 1}`)),
  u("touchid", <span className="block h-3 w-3 rounded-full border border-white/25" />),
];

const ROW_1: Key[] = [
  u("grave", "`"), u("1", "1"), u("2", "2"), u("3", "3"), u("4", "4"), u("5", "5"),
  u("6", "6"), u("7", "7"), u("8", "8"), u("9", "9"), u("0", "0"), u("minus", "-"),
  u("equal", "="), u("delete", "delete", 1.5, { align: "right" }),
];

const ROW_2: Key[] = [
  u("tab", "tab", 1.5, { align: "left" }),
  u("q", "Q"), u("w", "W"), u("e", "E"), u("r", "R"), u("t", "T"), u("y", "Y"),
  u("u", "U"), u("i", "I"), u("o", "O"), u("p", "P"), u("lbrack", "["), u("rbrack", "]"),
  u("backslash", "\\"),
];

const ROW_3: Key[] = [
  u("caps", "caps lock", 1.75, { align: "left" }),
  u("a", "A"), u("s", "S"), u("d", "D"), u("f", "F"), u("g", "G"), u("h", "H"),
  u("j", "J"), u("k", "K"), u("l", "L"), u("semi", ";"), u("quote", "'"),
  u("return", "return", 1.75, { align: "right" }),
];

const ROW_4: Key[] = [
  u("lshift", "shift", 2.25, { align: "left" }),
  u("z", "Z"), u("x", "X"), u("c", "C"), u("v", "V"), u("b", "B"), u("n", "N"),
  u("m", "M"), u("comma", ","), u("period", "."), u("slash", "/"),
  u("rshift", "shift", 2.25, { align: "right" }),
];

const ROW_5_LEFT: Key[] = [
  u("fn", "fn"),
  u("lctrl", "⌃", 1, { sub: "control" }),
  u("lopt", "⌥", 1, { sub: "option" }),
  u("lcmd", "⌘", 1.25, { sub: "command" }),
];

const ROW_5_RIGHT: Key[] = [
  u("rcmd", "⌘", 1.25, { sub: "command" }),
  u("ropt", "⌥", 1, { sub: "option" }),
];

export function MacKeyboard({
  onTap,
  onType,
}: {
  onTap: (e: MouseEvent<HTMLElement>) => void;
  onType: () => void;
}) {
  const [pressed, setPressed] = useState<string | null>(null);

  const pressKey = (id: string) => (e: MouseEvent) => {
    e.stopPropagation();
    setPressed(id);
    onType();
    setTimeout(() => setPressed((p) => (p === id ? null : p)), 180);
  };

  const keycap = (key: Key, height: string) => (
    <div
      key={key.id}
      onClick={pressKey(key.id)}
      style={{
        flexGrow: key.w,
        flexBasis: 0,
        animation: pressed === key.id ? "key-press 0.18s ease-out" : undefined,
      }}
      className={`relative ${height} min-w-0 cursor-pointer select-none rounded-[5px] border border-white/[0.07] bg-[#101014] shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_1px_2px_rgba(0,0,0,0.6)] transition-colors hover:bg-[#16161b]`}
    >
      <span
        className={`absolute inset-x-1.5 flex text-[min(0.62rem,1.4vw)] font-medium text-white/60 ${
          key.sub
            ? "bottom-1 justify-center"
            : key.align === "left"
              ? "bottom-1 justify-start"
              : key.align === "right"
                ? "bottom-1 justify-end"
                : "inset-y-0 items-center justify-center"
        }`}
      >
        {key.label}
      </span>
      {key.sub ? (
        <span className="absolute inset-x-1.5 top-1 flex justify-center text-[min(0.5rem,1.1vw)] text-white/35">
          {key.sub}
        </span>
      ) : null}
    </div>
  );

  const rowClass = "flex w-full gap-[3px]";
  const keyH = "h-[clamp(1.6rem,3.4vw,2.4rem)]";
  const fnH = "h-[clamp(1rem,2.1vw,1.5rem)]";
  const halfH = "h-[calc(clamp(1.6rem,3.4vw,2.4rem)/2-1px)]";

  return (
    <div
      onClick={onTap}
      role="button"
      aria-label="MacBook deck — click the palm rest to simulate a tap"
      className="group relative w-full cursor-pointer select-none rounded-[24px] border border-white/12 bg-gradient-to-b from-[#1b1b20] to-[#131317] p-[3.5%] pb-0 shadow-[0_30px_80px_rgba(0,0,0,0.55),inset_0_1px_0_rgba(255,255,255,0.09)]"
    >
      {/* keyboard well flanked by speaker grilles */}
      <div className="flex gap-[2.5%]">
        <SpeakerGrille />
        <div className="min-w-0 flex-1 rounded-xl bg-black/45 p-[1.2%] shadow-[inset_0_1px_6px_rgba(0,0,0,0.7)]">
          <div className="flex flex-col gap-[3px]">
            <div className={rowClass}>{FN_ROW.map((k) => keycap(k, fnH))}</div>
            <div className={rowClass}>{ROW_1.map((k) => keycap(k, keyH))}</div>
            <div className={rowClass}>{ROW_2.map((k) => keycap(k, keyH))}</div>
            <div className={rowClass}>{ROW_3.map((k) => keycap(k, keyH))}</div>
            <div className={rowClass}>{ROW_4.map((k) => keycap(k, keyH))}</div>
            {/* bottom row with inverted-T arrows */}
            <div className={rowClass}>
              {ROW_5_LEFT.map((k) => keycap(k, keyH))}
              {keycap(u("space", "", 5), keyH)}
              {ROW_5_RIGHT.map((k) => keycap(k, keyH))}
              <div className="flex min-w-0 items-end gap-[3px]" style={{ flexGrow: 3, flexBasis: 0 }}>
                <div className="flex min-w-0 flex-1 flex-col justify-end">{keycap(u("left", "◀"), halfH)}</div>
                <div className="flex min-w-0 flex-1 flex-col gap-[2px]">
                  {keycap(u("up", "▲"), halfH)}
                  {keycap(u("down", "▼"), halfH)}
                </div>
                <div className="flex min-w-0 flex-1 flex-col justify-end">{keycap(u("right", "▶"), halfH)}</div>
              </div>
            </div>
          </div>
        </div>
        <SpeakerGrille />
      </div>

      {/* palm rest + trackpad */}
      <div className="relative h-[clamp(7rem,16vw,11rem)]">
        <div className="absolute left-1/2 top-[14%] h-[78%] w-[40%] -translate-x-1/2 rounded-[10px] border border-white/10 bg-white/[0.015] shadow-[inset_0_1px_3px_rgba(0,0,0,0.5)]" />
        {/* tap zone hint, right palm rest */}
        <div className="pointer-events-none absolute right-[13%] top-[42%] flex flex-col items-center gap-1.5 text-white/40 transition-opacity duration-300 group-hover:text-white/70">
          <span className="relative flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/50" />
            <span className="relative inline-flex h-3 w-3 rounded-full bg-white/80 shadow-[0_0_12px_rgba(255,255,255,0.8)]" />
          </span>
          <span className="font-mono text-[10px]">tap here</span>
        </div>
      </div>
    </div>
  );
}

function SpeakerGrille() {
  return (
    <div
      aria-hidden
      className="w-[4.5%] shrink-0 self-stretch rounded-md opacity-70"
      style={{
        backgroundImage: "radial-gradient(rgba(0,0,0,0.85) 1px, transparent 1.2px)",
        backgroundSize: "5px 5px",
      }}
    />
  );
}
