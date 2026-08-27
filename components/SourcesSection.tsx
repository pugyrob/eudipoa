import { getSource, TYPE_LABELS } from "@/lib/sources";

export default function SourcesSection({ ids }: { ids: string[] }) {
  return (
    <section className="sources-section">
      <h2>Sources</h2>
      <ol>
        {ids.map((id) => {
          const s = getSource(id);
          return (
            <li key={id}>
              <span className={`cite-chip cite-chip--${s.type}`}>
                {TYPE_LABELS[s.type]}
              </span>{" "}
              {s.title}
              {s.oj ? ` (${s.oj})` : ""}.{" "}
              <a href={s.url} rel="noopener">
                {s.eli ?? s.url}
              </a>
              . Retrieved {s.last_retrieved}.
            </li>
          );
        })}
      </ol>
    </section>
  );
}
