import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Thump — Control your Mac with taps",
  description:
    "Tap the side of your MacBook to play music, launch apps, run shortcuts, and more. Thump reads the hidden accelerometer in Apple Silicon MacBooks — no extra hardware.",
  metadataBase: new URL("https://trythump.app"),
  openGraph: {
    title: "Thump — Control your Mac with taps",
    description:
      "Tap the side of your MacBook to control it. No extra hardware, works anywhere on the chassis.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
