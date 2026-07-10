import { Nav } from "@/components/Nav";
import { Hero } from "@/components/sections/Hero";
import { TapDemo } from "@/components/sections/TapDemo";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Features } from "@/components/sections/Features";
import { FAQ } from "@/components/sections/FAQ";
import { Download } from "@/components/sections/Download";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex flex-col">
        <Hero />
        <TapDemo />
        <HowItWorks />
        <Features />
        <FAQ />
        <Download />
      </main>
      <Footer />
    </>
  );
}
