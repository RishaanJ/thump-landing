import Link from "next/link";
import { Button } from "@/components/ui/Button";

export function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto mt-4 flex w-[calc(100%-2rem)] max-w-6xl items-center justify-between rounded-full border border-white/10 bg-black/40 px-4 py-2.5 backdrop-blur-xl">
        <Link href="/" className="flex items-center gap-2.5 pl-1">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/10 text-sm">
            <span aria-hidden className="block h-2.5 w-2.5 rounded-full bg-white shadow-[0_0_12px_rgba(255,255,255,0.7)]" />
          </span>
          <span className="text-[15px] font-semibold tracking-tight">Thump</span>
        </Link>

        <nav className="hidden items-center gap-7 text-sm text-white/65 md:flex">
          <a href="/#how" className="transition-colors hover:text-white">How it works</a>
          <a href="/#features" className="transition-colors hover:text-white">Features</a>
          <a href="/#faq" className="transition-colors hover:text-white">FAQ</a>
        </nav>

        <Button href="/#download" size="md">Download</Button>
      </div>
    </header>
  );
}
