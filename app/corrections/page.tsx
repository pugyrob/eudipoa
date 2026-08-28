import type { Metadata } from "next";
import Link from "next/link";
import { allPages } from "@/lib/content";

export const metadata: Metadata = {
  title: "Corrections",
  description:
    "Public record of corrections made to eudipoa.com, and how to report an error.",
};

export default function Corrections() {
  const corrections = allPages()
    .flatMap((p) =>
      p.meta.changelog
        .filter((c) => c.note.toLowerCase().startsWith("correction"))
        .map((c) => ({
          date: c.date,
          note: c.note,
          title: p.meta.title,
          href: "/" + p.slug.join("/"),
        }))
    )
    .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));

  return (
    <div className="prose measure">
      <p className="kicker">Corrections</p>
      <h1>Corrections</h1>
      <p>
        When something published here turns out to be wrong, we correct the
        page and record the correction in that page&rsquo;s changelog, stating
        what was wrong and what it was corrected to. Every such entry also
        appears below. An error-free record is not the claim; a public
        correction trail is.
      </p>
      <p>
        Spotted an error? Write to{" "}
        <a href="mailto:hello@eudipoa.com">hello@eudipoa.com</a> — ideally with
        the source that shows the correct position.
      </p>
      <h2>Correction log</h2>
      {corrections.length === 0 ? (
        <p>
          No corrections recorded yet. The site was first published on 27
          August 2026.
        </p>
      ) : (
        <ul>
          {corrections.map((e, i) => (
            <li key={i}>
              <strong>{e.date}</strong> — <Link href={e.href}>{e.title}</Link>:{" "}
              {e.note}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
