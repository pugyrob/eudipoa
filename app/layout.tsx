import type { Metadata } from "next";
import { Source_Serif_4, Inter, Fraunces } from "next/font/google";
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
const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  axes: ["opsz"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://eudipoa.com"),
  title: {
    default: "EUDIPOA — the digital EU power of attorney, explained",
    template: "%s · EUDIPOA",
  },
  description:
    "An independent, source-verified handbook on Directive (EU) 2025/25, the digital EU power of attorney, the EU Company Certificate, and organisational mandates under eIDAS 2.",
  openGraph: {
    siteName: "EUDIPOA",
    type: "website",
    locale: "en_GB",
  },
  alternates: {
    types: {
      "application/rss+xml": [
        { url: "/feed.xml", title: "EUDIPOA — Updates" },
      ],
    },
  },
};

const SITE_JSONLD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://eudipoa.com/#org",
      name: "EUDIPOA",
      url: "https://eudipoa.com",
      description:
        "Independent, source-verified handbook on the digital EU power of attorney (Directive (EU) 2025/25) and organisational mandates under the European Digital Identity Framework.",
      email: "hello@eudipoa.com",
      founder: {
        "@type": "Person",
        name: "Rob Prime",
        url: "https://eudipoa.com/authors/rob-prime",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://eudipoa.com/#site",
      name: "EUDIPOA",
      url: "https://eudipoa.com",
      publisher: { "@id": "https://eudipoa.com/#org" },
      inLanguage: "en-GB",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en-GB"
      className={`${serif.variable} ${sans.variable} ${display.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(SITE_JSONLD) }}
        />
        <SiteHeader />
        <main className="mx-auto max-w-3xl px-5 py-10">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
