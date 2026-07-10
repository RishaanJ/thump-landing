import type { ReactNode } from "react";

type Props = {
  id?: string;
  className?: string;
  children: ReactNode;
};

/** Consistent vertical rhythm + max width for every page section. */
export function Section({ id, className = "", children }: Props) {
  return (
    <section id={id} className={`relative w-full px-6 py-24 md:py-32 ${className}`}>
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}

/** Eyebrow-free section label pattern: a kicker used deliberately, sparingly. */
export function SectionHeading({
  title,
  lead,
  className = "",
}: {
  title: ReactNode;
  lead?: ReactNode;
  className?: string;
}) {
  return (
    <div className={`max-w-2xl ${className}`}>
      <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-balance">
        {title}
      </h2>
      {lead ? (
        <p className="mt-5 text-lg text-[#a3a3ad] leading-relaxed text-pretty">
          {lead}
        </p>
      ) : null}
    </div>
  );
}
