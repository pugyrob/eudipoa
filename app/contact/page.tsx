import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "How to reach the people behind eudipoa.com.",
};

export default function Contact() {
  return (
    <div className="prose measure">
      <p className="kicker">Contact</p>
      <h1>Contact</h1>
      <p>
        Handbook matters — errors, sources, national transposition measures
        we have missed, requests for coverage:{" "}
        <a href="mailto:hello@eudipoa.com">hello@eudipoa.com</a>.
      </p>
      <p>
        Mandate Rail (the product this site&rsquo;s operator builds):{" "}
        <a href="mailto:rob@mandate-rail.com">rob@mandate-rail.com</a>.
      </p>
      <p>
        We especially welcome gazette references for national measures
        transposing Directive (EU) 2025/25 — that is what moves rows on the{" "}
        <a href="/poa/member-states">transposition table</a> off Unknown.
      </p>
      <p>
        We do not give legal advice, and we do not respond to requests for it.
      </p>
    </div>
  );
}
