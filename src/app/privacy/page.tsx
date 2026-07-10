import type { Metadata } from "next";
import { LegalPage, H2, P, UL, Summary } from "@/components/Legal";

export const metadata: Metadata = {
  title: "Privacy Policy — Thump",
  description: "How Thump handles your data: sensor readings stay on your Mac, telemetry is anonymous and optional.",
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="July 10, 2026">
      <Summary>
        The short version: your taps are processed entirely on your Mac.
        Accelerometer readings and keystrokes are never recorded, stored, or
        transmitted. The app may send anonymous usage statistics (which you can
        turn off), and this website may use privacy-respecting analytics. We
        never sell data. There are no ads.
      </Summary>

      <P>
        This policy covers the Thump macOS app and this website. Thump is built
        by an independent developer; questions about anything below are welcome
        at thegreenninja101@gmail.com.
      </P>

      <H2>The sensor</H2>
      <P>
        Thump works by reading the motion sensor (accelerometer) built into
        Apple Silicon MacBooks and looking for the vibration pattern of a tap.
        All of this happens in real time, in memory, on your Mac. Sensor
        readings are never recorded to disk, never leave your device, and are
        discarded the moment they have been checked for a tap.
      </P>

      <H2>Permissions Thump asks for</H2>
      <UL>
        <li>
          <strong className="text-white">Input Monitoring</strong> — macOS
          gates access to the motion sensor behind this permission. Thump also
          uses it to notice <em>that</em> a key was pressed, so taps can be
          ignored while you type. Which keys you press is never inspected,
          logged, or transmitted. Thump is not a keylogger and contains no
          keystroke recording of any kind.
        </li>
        <li>
          <strong className="text-white">Accessibility</strong> — used solely to
          press the media keys (play/pause, volume, mute) you assign to
          gestures. Nothing is read through this permission.
        </li>
      </UL>

      <H2>What the app stores</H2>
      <P>
        Your settings — gesture assignments, sensitivity, preferences — are
        stored locally on your Mac in the standard user defaults system. They
        stay there.
      </P>

      <H2>Usage analytics (telemetry)</H2>
      <P>
        To understand which features are used and catch crashes, the app may
        send anonymous usage events through a privacy-focused service such as
        TelemetryDeck or PostHog. When enabled, an event looks like &ldquo;a
        double-tap gesture ran&rdquo; or &ldquo;onboarding completed,&rdquo;
        together with the app version, macOS version, and device model.
      </P>
      <UL>
        <li>No names, emails, or account identifiers — there are no accounts.</li>
        <li>No accelerometer readings, ever.</li>
        <li>No keystrokes or key contents, ever.</li>
        <li>No advertising identifiers and no cross-app tracking.</li>
        <li>You can turn telemetry off in Thump&rsquo;s settings at any time.</li>
      </UL>

      <H2>Software updates</H2>
      <P>
        Thump checks for updates using the open-source Sparkle framework. An
        update check is an ordinary web request to our update feed, which — like
        any web request — includes your IP address and the app version. Update
        checks contain no personal information and can be limited to manual
        checking in settings.
      </P>

      <H2>This website</H2>
      <P>
        The site is static. Our hosting provider keeps standard server logs
        (IP address, page requested, browser). We may use a privacy-respecting
        analytics tool such as PostHog to count page views and see which
        sections people read — configured without advertising cookies and
        without selling or sharing data with data brokers.
      </P>

      <H2>Who we share data with</H2>
      <P>
        Nobody, except the service providers needed to run the things described
        above (hosting, the update feed, and the analytics service if enabled).
        Each receives only what is necessary to provide its function. We never
        sell personal data.
      </P>

      <H2>Children</H2>
      <P>Thump is not directed at children under 13 and collects no personal information from anyone.</P>

      <H2>Changes</H2>
      <P>
        If this policy changes materially, the date above will be updated and
        significant changes will be noted in the app&rsquo;s release notes.
      </P>

      <H2>Contact</H2>
      <P>thegreenninja101@gmail.com</P>
    </LegalPage>
  );
}
