import type { Metadata } from "next";
import Link from "next/link";
import { allPages } from "@/lib/content";

export const metadata: Metadata = {
  title: "Updates",
  description:
    "Dated briefs on developments in the digital EU power of attorney landscape — implementing acts, transpositions, proposals — written from the sources as they change.",
};

export default function Updates() {
  const updates = allPages()
    .filter((p) => p.slug[0] === "updates" && p.slug.length > 1)
    .sort((a, b) => (a.meta.published < b.meta.published ? 1 : -1));

  return (
    <div className="prose measure">
      <header className="article-header">
        <p className="kicker">Updates</p>
        <h1>Developments, as they happen</h1>
        <p className="standfirst">
          Dated briefs on what has actually changed — an implementing act
          adopted, a Member State transposing, a proposal moving. Each brief is
          verified against its sources like every other page here. The weekly
          source pass keeps this current; if nothing moved, nothing is
          published, because manufacturing news is how sites stop being
          trustworthy. Also available as{" "}
          <a href="/feed.xml">an RSS feed</a>.
        </p>
      </header>
      {updates.length === 0 ? (
        <p>No update briefs yet.</p>
      ) : (
        <ul className="update-list">
          {updates.map((u) => (
            <li key={u.slug.join("/")}>
              <span className="update-date">{u.meta.published}</span>
              <span>
                <Link href={"/" + u.slug.join("/")}>{u.meta.title}</Link>
                <br />
                <small>{u.meta.description}</small>
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
