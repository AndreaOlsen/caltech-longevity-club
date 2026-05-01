import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { JetBrains_Mono as FontMono } from "next/font/google";
import "./globals.css";
import { NavBarDemo } from "@/components/NavBarDemo";
import { Footer } from "@/components/Footer";
import { DisclaimerBanner } from "@/components/DisclaimerBanner";
import { HackathonBanner } from "@/components/HackathonBanner";
import { Toaster } from "sonner";
import { MissionMarquee } from "@/components/MissionMarquee";
import { Analytics } from "@vercel/analytics/next";

// Initialize fonts
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Caltech Longevity Club",
  description: "Join a network of driven students, scientists, and industry leaders exploring longevity",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta name='impact-site-verification' content='76812b70-77bd-4f09-a613-f8d941339a1d' />
      </head>
      <body className={`${fontSans.variable} ${fontMono.variable} font-sans antialiased sm:pt-[44px]`}>
        <DisclaimerBanner />
        <NavBarDemo />
        <HackathonBanner />
        {children}
        <MissionMarquee />
        <Footer />
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
