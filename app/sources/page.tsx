import type { Metadata } from "next";
import { allSources, TYPE_LABELS } from "@/lib/sources";

export const metadata: Metadata = {
  title: "Sources",
  description:
    "The public source registry behind every citation on eudipoa.com.",
};

export default function Sources() {
  const sources = allSources();
  return (
    <div className="prose measure">
      <p className="kicker">Sources</p>
      <h1>The source registry</h1>
      <p>
        Every citation on this site resolves against this registry. Each entry
        shows what the source is, where the canonical text lives, and when we
        last retrieved it. Entries labelled anything other than <em>Law</em>{" "}
        are not law.
      </p>
      <ol>
        {sources.map((s) => (
          <li key={s.id}>
            <span className={`cite-chip cite-chip--${s.type}`}>
              {TYPE_LABELS[s.type]}
            </span>{" "}
            <strong>{s.short}</strong> — {s.title}
            {s.oj ? ` (${s.oj})` : ""}.{" "}
            <a href={s.url} rel="noopener">
              {s.eli ?? s.url}
            </a>
            <br />
            <small>
              Last retrieved {s.last_retrieved}. {s.retrieved_via}
            </small>
          </li>
        ))}
      </ol>
    </div>
  );
}
