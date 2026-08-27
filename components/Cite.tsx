import { getSource, TYPE_LABELS } from "@/lib/sources";

/**
 * Inline citation. Resolves against content/sources/registry.yaml and fails
 * the build on an unknown id. `pin` is the article/recital pinpoint, quoted
 * exactly as the instrument numbers it, e.g. pin="Art. 16c(2)".
 */
export default function Cite({ id, pin }: { id: string; pin?: string }) {
  const s = getSource(id);
  const label = TYPE_LABELS[s.type];
  return (
    <span className="cite">
      [
      <a href={s.url} rel="noopener">
        {s.short}
        {pin ? `, ${pin}` : ""}
      </a>
      {s.type !== "law" ? (
        <span className={`cite-chip cite-chip--${s.type}`}>{label}</span>
      ) : null}
      ]
    </span>
  );
}
