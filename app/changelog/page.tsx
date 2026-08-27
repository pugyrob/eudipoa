import type { Metadata } from "next";
import Link from "next/link";
import { allPages } from "@/lib/content";

export const metadata: Metadata = {
  title: "Changelog",
  description:
    "Every dated change to every explainer on eudipoa.com, in one place.",
};

export default function Changelog() {
  const entries = allPages()
    .flatMap((p) =>
      p.meta.changelog.map((c) => ({
        date: c.date,
        note: c.note,
        title: p.meta.title,
        href: "/" + p.slug.join("/"),
      }))
    )
    .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));

  return (
    <div className="prose measure">
      <p className="kicker">Changelog</p>
      <h1>What changed, when, and why</h1>
      <p>
        This page aggregates the changelog of every explainer. Entries describe
        what changed in the law or in our verification of it — never
        &ldquo;updated for SEO&rdquo;.
      </p>
      <ul>
        {entries.map((e, i) => (
          <li key={i}>
            <strong>{e.date}</strong> — <Link href={e.href}>{e.title}</Link>:{" "}
            {e.note}
          </li>
        ))}
      </ul>
    </div>
  );
}
