import { PageMeta, verificationOverdue } from "@/lib/content";
import { getSource } from "@/lib/sources";

export default function VerificationBox({ meta }: { meta: PageMeta }) {
  const overdue = verificationOverdue(meta);
  return (
    <aside className="verification" aria-label="Verification record">
      <p>
        <strong>{meta.author}</strong> · Published {meta.published} · Last
        verified {meta.verified}
        {overdue ? (
          <span className="badge badge--overdue">Verification overdue</span>
        ) : null}
      </p>
      <p className="verification-against">
        Verified against:{" "}
        {meta.verified_against.map((id, i) => {
          const s = getSource(id);
          return (
            <span key={id}>
              {i > 0 ? "; " : ""}
              <a href={s.url} rel="noopener">
                {s.short}
              </a>{" "}
              (retrieved {s.last_retrieved})
            </span>
          );
        })}
      </p>
      {overdue ? (
        <p className="verification-warning">
          This page has not been re-checked against its sources within its{" "}
          {meta.review_cycle_days}-day review cycle. Treat dates and details
          with extra care until it is re-verified.
        </p>
      ) : null}
    </aside>
  );
}
