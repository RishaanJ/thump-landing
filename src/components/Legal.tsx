import type { ReactNode } from "react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/sections/Footer";

/** Shared shell + typography for legal pages (privacy, terms). */
export function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <>
      <Nav />
      <main className="relative px-6 pb-24 pt-40">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[560px] -translate-x-1/2 rounded-full bg-white/[0.05] blur-[130px]"
        />
        <article className="relative mx-auto w-full max-w-2xl">
          <h1 className="text-balance text-4xl font-semibold tracking-tight md:text-5xl">
            {title}
          </h1>
          <p className="mt-3 font-mono text-xs text-white/40">Last updated: {updated}</p>
          <div className="mt-10 space-y-4">{children}</div>
        </article>
      </main>
      <Footer />
    </>
  );
}

export function H2({ children }: { children: ReactNode }) {
  return <h2 className="pt-6 text-xl font-semibold tracking-tight">{children}</h2>;
}

export function P({ children }: { children: ReactNode }) {
  return <p className="leading-relaxed text-[#b6b6bf]">{children}</p>;
}

export function UL({ children }: { children: ReactNode }) {
  return (
    <ul className="list-disc space-y-2 pl-5 leading-relaxed text-[#b6b6bf] marker:text-white/35">
      {children}
    </ul>
  );
}

/** Highlighted summary box. */
export function Summary({ children }: { children: ReactNode }) {
  return (
    <div className="surface my-2 p-5 text-[15px] leading-relaxed text-white/85">
      {children}
    </div>
  );
}
