import type { Metadata } from "next";
import { LegalPage, H2, P } from "@/components/Legal";

export const metadata: Metadata = {
  title: "Terms of Use — Thump",
  description: "The terms for using the Thump app and website.",
};

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Use" updated="July 10, 2026">
      <P>
        These terms apply to the Thump macOS application and this website. By
        downloading or using Thump, you agree to them.
      </P>

      <H2>License</H2>
      <P>
        Thump is licensed to you for personal use on Macs you own or control.
        You may not redistribute the app as your own, sell it, or misrepresent
        its origin.
      </P>

      <H2>What Thump does</H2>
      <P>
        Thump reads your MacBook&rsquo;s built-in motion sensor and performs
        actions you configure (such as controlling media, launching apps, or
        running Shortcuts). It requires the macOS permissions it requests to do
        this, and it relies on an undocumented sensor interface that Apple may
        change in future macOS releases.
      </P>

      <H2>No warranty</H2>
      <P>
        Thump is provided &ldquo;as is,&rdquo; without warranty of any kind.
        Tap detection is inherently probabilistic: gestures may occasionally
        misfire or fail to fire. Do not bind gestures to destructive or
        irreversible actions.
      </P>

      <H2>Limitation of liability</H2>
      <P>
        To the maximum extent permitted by law, the developer is not liable for
        any damages arising from the use of, or inability to use, Thump or this
        website.
      </P>

      <H2>Updates</H2>
      <P>
        The app can check for and install updates via the Sparkle framework.
        Update behavior can be adjusted in the app&rsquo;s settings.
      </P>

      <H2>Changes</H2>
      <P>
        These terms may be revised over time; the date above reflects the
        latest revision. Continued use after a change constitutes acceptance.
      </P>

      <H2>Contact</H2>
      <P>thegreenninja101@gmail.com</P>
    </LegalPage>
  );
}
