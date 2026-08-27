import { ChangelogEntry } from "@/lib/content";

export default function ChangelogSection({
  entries,
}: {
  entries: ChangelogEntry[];
}) {
  return (
    <section className="changelog-section">
      <h2>Changelog</h2>
      <ul>
        {entries.map((e, i) => (
          <li key={i}>
            <strong>{e.date}</strong> — {e.note}
          </li>
        ))}
      </ul>
    </section>
  );
}
