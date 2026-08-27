import type { Metadata } from "next";
import { Source_Serif_4, Inter } from "next/font/google";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import "./globals.css";

const serif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-serif",
});
const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: {
    default: "EUDIPOA — the digital EU power of attorney, explained",
    template: "%s · EUDIPOA",
  },
  description:
    "An independent, source-verified handbook on Directive (EU) 2025/25, the digital EU power of attorney, the EU Company Certificate, and organisational mandates under eIDAS 2.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB" className={`${serif.variable} ${sans.variable}`}>
      <body>
        <SiteHeader />
        <main className="mx-auto max-w-3xl px-5 py-10">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
