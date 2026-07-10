import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#060608]";

const sizes = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-[15px]",
};

const variants: Record<Variant, string> = {
  primary:
    "bg-white text-black shadow-[0_0_28px_rgba(255,255,255,0.22)] hover:shadow-[0_0_44px_rgba(255,255,255,0.4)] hover:-translate-y-0.5 active:translate-y-0",
  ghost:
    "text-white/85 hover:text-white bg-white/[0.06] hover:bg-white/[0.1] border border-white/12 hover:border-white/25",
};

type Props = {
  variant?: Variant;
  size?: keyof typeof sizes;
  children: ReactNode;
} & ComponentProps<typeof Link>;

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}: Props) {
  return (
    <Link
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}
