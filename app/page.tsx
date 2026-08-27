import Link from "next/link";
import Cite from "@/components/Cite";

export default function Home() {
  return (
    <div className="prose measure">
      <p className="kicker">The record, kept honestly</p>
      <h1>The digital EU power of attorney, explained from the instrument</h1>

      <p className="answer-first">
        Directive (EU) 2025/25 creates a digital EU power of attorney and an EU
        Company Certificate for cross-border company procedures. Member States
        must adopt their transposing laws by 31 July 2027 and apply them from
        31 July 2028 <Cite id="dir-2025-25" pin="Art. 4(1)–(2)" />. This
        handbook explains what the instrument actually says — article by
        article, with every claim cited to the text it comes from.
      </p>

      <p>
        There are plenty of sites explaining the EUDI wallet in general. This is
        not one of them. EUDIPOA covers one thing deeply: how organisations
        authorise people (and systems) to act for them under the new EU rules —
        the digital EU power of attorney inserted as Article 16c of Directive
        (EU) 2017/1132 <Cite id="dir-2025-25" pin="Art. 2" />, the EU Company
        Certificate (Article 16b), how both map onto the European Digital
        Identity Framework <Cite id="reg-2024-1183" />, and what relying
        parties, notaries and registers have to do about it.
      </p>

      <h2>Start here</h2>
      <ul>
        <li>
          <Link href="/poa">The digital EU power of attorney</Link> — the hub:
          what it is, who it is for, and where the rules stand today.
        </li>
        <li>
          <Link href="/poa/directive-2025-25">Directive (EU) 2025/25</Link> —
          the instrument itself: structure, the inserted Articles 16b–16g, and
          every date that matters.
        </li>
        <li>
          <Link href="/poa/what-it-is-not">
            What the digital EU power of attorney is not
          </Link>{" "}
          — the misreadings to avoid before you build or advise on anything.
        </li>
      </ul>

      <h2>Then go deeper</h2>
      <ul>
        <li>
          <Link href="/poa/how-it-is-granted">How it is granted</Link> and{" "}
          <Link href="/poa/revocation">how it is revoked</Link> — the national
          verification floor, and the revocation-visibility problem the law
          leaves open.
        </li>
        <li>
          <Link href="/poa/wallet">The wallet mapping</Link> — how the
          instrument rides the EUDI wallet, and why the two run on different
          clocks.
        </li>
        <li>
          <Link href="/certificate">The EU Company Certificate</Link> — the
          other instrument in the Directive: what a company is, register-grade
          and apostille-free.
        </li>
        <li>
          <Link href="/mandates">Organisational mandates</Link> — who may act
          for a company, what relying parties must do, and two implementation
          notes from building on these rules.
        </li>
        <li>
          <Link href="/eidas/attestation-of-attributes">
            The eIDAS 2 layer
          </Link>{" "}
          — attestations of attributes,{" "}
          <Link href="/eidas/relying-party-registration">
            relying-party registration
          </Link>
          , and the{" "}
          <Link href="/eidas/business-wallets">
            Business Wallet proposal
          </Link>{" "}
          (which is a proposal, and labelled as one).
        </li>
        <li>
          <Link href="/poa/member-states">
            Transposition, all 27 Member States
          </Link>{" "}
          — every row Unknown until we have read that country&rsquo;s gazette.
        </li>
        <li>
          <Link href="/glossary">Glossary</Link> — the terms, defined from the
          instruments.
        </li>
      </ul>

      <h2>Where the law stands</h2>
      <table>
        <thead>
          <tr>
            <th>Step</th>
            <th>Date</th>
            <th>Basis</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Directive (EU) 2025/25 published in the OJ</td>
            <td>10 January 2025</td>
            <td>OJ L, 2025/25</td>
          </tr>
          <tr>
            <td>Entry into force (20th day after publication)</td>
            <td>30 January 2025</td>
            <td>Art. 5</td>
          </tr>
          <tr>
            <td>
              Commission implementing acts, including the power of attorney
              template
            </td>
            <td>by 31 July 2026</td>
            <td>Art. 2, inserting Art. 24(2) of Dir. (EU) 2017/1132</td>
          </tr>
          <tr>
            <td>Member States adopt and publish transposing measures</td>
            <td>by 31 July 2027</td>
            <td>Art. 4(1)</td>
          </tr>
          <tr>
            <td>Member States apply the measures</td>
            <td>from 31 July 2028</td>
            <td>Art. 4(2)</td>
          </tr>
        </tbody>
      </table>
      <p>
        Full detail, including the later dates for group-of-companies
        information, is on the{" "}
        <Link href="/poa/directive-2025-25">Directive 2025/25 page</Link>. The{" "}
        <Link href="/poa/member-states">27-country transposition table</Link>{" "}
        currently reads “Unknown” in every row — we have not yet verified any
        national measure in an official gazette, and a table filled from press
        releases is worse than no table.
      </p>

      <h2>How this site earns trust</h2>
      <p>
        Every explainer carries a byline, a published date, a last-verified
        date, the exact sources it was verified against (with retrieval dates),
        and a changelog. Claims are labelled <em>Law</em>, <em>Proposal</em>,{" "}
        <em>Technical draft</em>, <em>Implementation note</em> or{" "}
        <em>Commentary</em> — because a Commission policy page is not law, and
        pretending otherwise is how bad advice spreads. The method is public:{" "}
        <Link href="/methodology">Methodology</Link>.
      </p>
    </div>
  );
}
