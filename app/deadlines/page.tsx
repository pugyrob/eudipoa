import type { Metadata } from "next";
import DeadlineExplorer from "./DeadlineExplorer";

export const metadata: Metadata = {
  title: "EU digital power of attorney deadlines",
  description: "Filter the binding dates for Directive 2025/25 and the EUDI Wallet by the organisation responsible.",
  alternates: { canonical: "https://eudipoa.com/deadlines" },
};

export default function DeadlinesPage() {
  return (
    <article className="prose measure">
      <header className="article-header">
        <p className="kicker">Deadline explorer</p>
        <h1>What happens when, and who owns it</h1>
        <p className="standfirst">
          Filter the binding dates by audience. Proposed Business Wallet and EU Inc. dates are excluded because neither proposal has been adopted.
        </p>
      </header>
      <p className="kind-banner kind-banner--note">
        Last checked 4 September 2026. Every row links to the page carrying its legal citation.
      </p>
      <DeadlineExplorer />
      <h2>Dates this page does not invent</h2>
      <p>
        There is no confirmed availability date for the European Business Wallet or EU Inc. Both remain proposals. Company procurement plans are also not legal deadlines.
      </p>
    </article>
  );
}
