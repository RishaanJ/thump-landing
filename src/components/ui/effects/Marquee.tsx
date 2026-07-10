import type { ReactNode } from "react";

/**
 * Infinite horizontal marquee with edge fade. Children are rendered twice;
 * the track animates -50% for a seamless loop.
 */
export function Marquee({
  children,
  duration = 36,
  className = "",
}: {
  children: ReactNode;
  duration?: number;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)] ${className}`}
    >
      <div
        className="flex w-max items-center gap-4"
        style={{ animation: `marquee-x ${duration}s linear infinite` }}
      >
        {children}
        {children}
      </div>
    </div>
  );
}
