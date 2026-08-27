import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Who writes eudipoa.com, how it is funded, and its relationship to Mandate Rail.",
};

export default function About() {
  return (
    <div className="prose measure">
      <p className="kicker">About</p>
      <h1>What this site is, who writes it, and who pays for it</h1>

      <h2>What this site is</h2>
      <p>
        eudipoa.com is an independent handbook on Directive (EU) 2025/25 — the
        directive that creates the digital EU power of attorney and the EU
        Company Certificate — and on organisational mandates more broadly: how
        organisations authorise people and systems to act for them, and how
        that maps onto the European Digital Identity Framework (eIDAS 2).
      </p>
      <p>
        It is written from the instruments themselves. Before a page about a
        law is published, the law is fetched from EUR-Lex and read; article
        numbers, dates and obligations on this site come from that text, not
        from secondary commentary. Where something is unknown — for example,
        whether a particular Member State has transposed — the site says
        “Unknown” rather than guessing.
      </p>

      <h2>What this site is not</h2>
      <ul>
        <li>
          It is not the European Commission, ENISA, a Member State authority,
          or EUR-Lex, and it has no affiliation with any of them.
        </li>
        <li>
          It is not legal advice, and it is not a substitute for the Official
          Journal of the European Union or for national law.
        </li>
        <li>
          It does not issue wallets, attestations, trust marks, or any
          notified or qualified service.
        </li>
        <li>It is not a general EUDI-wallet explainer; others do that.</li>
      </ul>

      <h2>Who writes it</h2>
      <p>
        The handbook is written by Rob Prime. Rob operates{" "}
        <a href="https://mandate-rail.com" rel="noopener">
          Mandate Rail
        </a>
        , a software product for organisational mandates — the machinery by
        which a company grants, constrains, and revokes the authority of people
        and systems to act in its name. Building that product means reading
        these instruments closely and implementing against them; this handbook
        is the public record of that reading. Rob is a builder working in this
        area, not a lawyer, an academic, or an EU official — and the site never
        claims otherwise.
      </p>
      <p>
        Some pages are labelled <em>implementation notes</em>: lessons from
        building against these rules (for example, why a valid token is not the
        same thing as an allowed action). Those pages describe engineering
        experience, not law, and are labelled so you can tell the difference.
      </p>

      <h2>Funding and independence</h2>
      <p>
        The site is self-funded by the operator of Mandate Rail. There are no
        advertisers, no sponsors, no affiliate links, and no paid placements.
        Mandate Rail is mentioned here and in the site footer, and nowhere
        else; this site does not sell it.
      </p>

      <h2>Corrections</h2>
      <p>
        If anything on this site is wrong, tell us and we will correct it
        publicly: <a href="mailto:hello@eudipoa.com">hello@eudipoa.com</a>.
        Every page carries a changelog, and corrections are recorded there in
        plain language — what was wrong, and what it was corrected to.
      </p>

      <h2>Contact</h2>
      <p>
        Handbook matters: <a href="mailto:hello@eudipoa.com">hello@eudipoa.com</a>
        . Mandate Rail (the product):{" "}
        <a href="mailto:rob@mandate-rail.com">rob@mandate-rail.com</a>.
      </p>
    </div>
  );
}
