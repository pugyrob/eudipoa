import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Methodology",
  description:
    "How eudipoa.com verifies claims: source hierarchy, verification cycles, labels, and the corrections policy.",
};

export default function Methodology() {
  return (
    <div className="prose measure">
      <p className="kicker">Methodology</p>
      <h1>How this site is written and verified</h1>

      <p className="answer-first">
        Every legal claim on this site traces to a source in a public registry,
        fetched and dated. If we have not read it, we do not state it. If it is
        unknown, we say “Unknown”.
      </p>

      <h2>The source registry</h2>
      <p>
        The site keeps a single registry of sources
        (<code>content/sources/registry.yaml</code> in the site&rsquo;s{" "}
        <a href="https://github.com/pugyrob/eudipoa" rel="noopener">
          public repository
        </a>
        ). Each entry records the instrument&rsquo;s full title, its
        ELI identifier, the canonical URL, its Official Journal reference, and
        the date we last retrieved it. Inline citations resolve against this
        registry; a citation to an unregistered source fails the site&rsquo;s
        build. The full registry is published at{" "}
        <a href="/sources">/sources</a>.
      </p>

      <h2>Source hierarchy and labels</h2>
      <p>
        Claims are labelled by the strength of what supports them, in this
        order:
      </p>
      <ol>
        <li>
          <strong>Law</strong> — text published in the Official Journal
          (directives, regulations, implementing acts), read on EUR-Lex.
        </li>
        <li>
          <strong>Proposal</strong> — Commission proposals and policy pages.
          Not law. May change or fail. Always labelled.
        </li>
        <li>
          <strong>Technical draft</strong> — specifications such as the EUDI
          Wallet Architecture and Reference Framework. Not law, and revised
          without an OJ publication.
        </li>
        <li>
          <strong>Implementation note</strong> — engineering experience from
          building against these rules. Clearly ours, clearly not law.
        </li>
        <li>
          <strong>Commentary</strong> — everything else, including our own
          analysis. Never the sole support for a date or an obligation.
        </li>
      </ol>
      <p>
        Two standing rules follow from this. A law firm&rsquo;s blog post is
        never the only support for a date. And the word “must” appears on this
        site only where an instrument imposes the obligation.
      </p>

      <h2>Verification cycle</h2>
      <p>
        Every explainer records when it was published, when it was last
        verified, and against which retrievals. Each page has a review cycle
        (typically 30 days). If a page has not been re-checked within its
        cycle, it displays a “Verification overdue” notice — automatically,
        because a stale page that admits it is stale is safer than one that
        does not. A weekly source pass re-fetches the key instruments; if
        nothing changed, retrieval dates are bumped, and if something did
        change, the affected pages are edited and their changelogs record what
        changed in the law.
      </p>

      <h2>What we do not do</h2>
      <ul>
        <li>
          We do not state article numbers, dates, or transposition statuses
          from memory or from secondary sources.
        </li>
        <li>
          We do not mark a Member State as having transposed until we have
          seen the measure in that country&rsquo;s official gazette.
        </li>
        <li>
          We do not give legal advice, and we do not tailor content to
          advertisers — there are none.
        </li>
      </ul>

      <h2>Corrections</h2>
      <p>
        Errors are corrected publicly. The correction is recorded in the
        page&rsquo;s changelog stating what was wrong and what it was corrected
        to. To report an error:{" "}
        <a href="mailto:hello@eudipoa.com">hello@eudipoa.com</a>.
      </p>
    </div>
  );
}
