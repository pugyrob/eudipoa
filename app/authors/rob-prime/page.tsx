import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Rob Prime",
  description:
    "Author of eudipoa.com. Builds Mandate Rail, a product for organisational mandates.",
};

export default function Author() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Rob Prime",
    url: "https://eudipoa.com/authors/rob-prime",
    email: "mailto:rob@mandate-rail.com",
    jobTitle: "Operator, Mandate Rail",
    knowsAbout: [
      "Directive (EU) 2025/25",
      "digital EU power of attorney",
      "organisational mandates",
      "eIDAS 2",
      "EU Company Certificate",
    ],
  };
  return (
    <div className="prose measure">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <p className="kicker">Author</p>
      <h1>Rob Prime</h1>
      <p>
        Rob Prime writes eudipoa.com and operates{" "}
        <a href="https://mandate-rail.com" rel="noopener">
          Mandate Rail
        </a>
        , a software product for organisational mandates — the machinery by
        which a company grants, constrains and revokes authority to act in its
        name. Building that product means reading Directive (EU) 2025/25,
        Regulation (EU) 2024/1183 and their implementing acts closely, and
        implementing against them; this handbook is the public record of that
        reading.
      </p>
      <p>
        Rob is a builder working in this area — not a lawyer, an academic, or
        an EU official, and this site never claims otherwise. Pages labelled{" "}
        <em>implementation note</em> describe engineering experience from that
        work; everything else is written from the instruments, under the
        site&rsquo;s <Link href="/methodology">methodology</Link>.
      </p>
      <p>
        Contact about the handbook:{" "}
        <a href="mailto:hello@eudipoa.com">hello@eudipoa.com</a>. About Mandate
        Rail: <a href="mailto:rob@mandate-rail.com">rob@mandate-rail.com</a>.
      </p>
    </div>
  );
}
