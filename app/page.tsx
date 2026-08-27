import Link from "next/link";
import Cite from "@/components/Cite";
import { allPages } from "@/lib/content";

const START_CARDS = [
  {
    href: "/poa",
    label: "Start here",
    title: "The digital EU power of attorney",
    desc: "What it is, who it is for, and where the rules stand today.",
  },
  {
    href: "/questions",
    label: "Plain answers",
    title: "Your question, answered simply",
    desc: "Apostilles, deadlines, costs, acceptance — the questions people actually ask, answered from the law.",
  },
  {
    href: "/poa/directive-2025-25",
    label: "The instrument",
    title: "Directive (EU) 2025/25, taken apart",
    desc: "The inserted Articles 16b–16g and every date that matters.",
  },
  {
    href: "/poa/what-it-is-not",
    label: "Misconceptions",
    title: "What it is not",
    desc: "Ten misreadings to clear up before you build, advise or buy anything.",
  },
  {
    href: "/certificate",
    label: "The other instrument",
    title: "The EU Company Certificate",
    desc: "Register-grade proof of what a company is — accepted in all Member States, apostille-free.",
  },
  {
    href: "/mandates",
    label: "The deep end",
    title: "Organisational mandates",
    desc: "Who may act for a company, what relying parties must do, and notes from building on these rules.",
  },
  {
    href: "/eidas/attestation-of-attributes",
    label: "The rails",
    title: "The eIDAS 2 layer",
    desc: "Wallets, attestations of attributes, relying-party registration — and the Business Wallet proposal, labelled as one.",
  },
  {
    href: "/poa/member-states",
    label: "Country by country",
    title: "Transposition, all 27 Member States",
    desc: "Every row Unknown until we have read that country's gazette. Honest beats fast.",
  },
];

const KEY_DATES = [
  { date: "10 Jan 2025", what: "Directive (EU) 2025/25 published in the Official Journal" },
  { date: "30 Jan 2025", what: "Entry into force (Art. 5)" },
  { date: "by 31 Jul 2026", what: "Commission implementing acts due, including the power of attorney template (Art. 24(2))" },
  { date: "24 Dec 2026", what: "Member State EUDI wallets due; wallet-relying-party registration applies" },
  { date: "by 31 Jul 2027", what: "Member States adopt and publish transposing measures (Art. 4(1))" },
  { date: "from 31 Jul 2028", what: "Member States apply the measures — the instrument becomes usable (Art. 4(2))" },
];

export default function Home() {
  const updates = allPages()
    .filter((p) => p.slug[0] === "updates")
    .sort((a, b) => (a.meta.published < b.meta.published ? 1 : -1))
    .slice(0, 3);

  return (
    <div>
      <div className="hero measure">
        <p className="kicker">The record, kept honestly</p>
        <h1>The digital EU power of attorney, explained from the instrument</h1>
        <p className="standfirst">
          Directive (EU) 2025/25 creates a digital power of attorney and a
          company certificate that work across all 27 Member States — no
          apostilles, no translation rounds. This handbook explains what the
          law actually says, article by article, with every claim cited to the
          text it comes from. Where something is unknown, we say so.
        </p>
      </div>

      <div className="prose measure">
        <p>
          There are plenty of sites explaining the EUDI wallet in general. This
          is not one of them. EUDIPOA covers one thing deeply: how
          organisations authorise people — and increasingly systems — to act
          for them under the new EU rules{" "}
          <Cite id="dir-2025-25" pin="Art. 2" />{" "}
          <Cite id="reg-2024-1183" />, and what companies, notaries, registers
          and relying parties have to do about it.
        </p>
      </div>

      <h2 className="section-heading">Where the law stands</h2>
      <div className="dates-strip measure">
        {KEY_DATES.map((d) => (
          <div className="date-row" key={d.date + d.what}>
            <span className="date">{d.date}</span>
            <span className="date-what">{d.what}</span>
          </div>
        ))}
      </div>
      <div className="prose measure">
        <p>
          Every date above comes from the instruments, not from commentary —
          the full chains are on the{" "}
          <Link href="/poa/directive-2025-25">Directive 2025/25 page</Link> and
          the <Link href="/poa/wallet">wallet mapping</Link>.
        </p>
      </div>

      <h2 className="section-heading">The handbook</h2>
      <div className="card-grid">
        {START_CARDS.map((c) => (
          <Link href={c.href} key={c.href} className="card">
            <span className="card-label">{c.label}</span>
            <span className="card-title block">{c.title}</span>
            <p className="card-desc">{c.desc}</p>
          </Link>
        ))}
      </div>

      {updates.length > 0 ? (
        <>
          <h2 className="section-heading">Latest updates</h2>
          <ul className="update-list measure">
            {updates.map((u) => (
              <li key={u.slug.join("/")}>
                <span className="update-date">{u.meta.published}</span>
                <span>
                  <Link href={"/" + u.slug.join("/")}>{u.meta.title}</Link>
                </span>
              </li>
            ))}
          </ul>
          <p className="prose measure" style={{ marginTop: "0.75rem" }}>
            <Link href="/updates">All updates →</Link>
          </p>
        </>
      ) : null}

      <h2 className="section-heading">How this site earns trust</h2>
      <div className="prose measure">
        <p>
          Every explainer carries a byline, a published date, a last-verified
          date, the exact sources it was verified against (with retrieval
          dates), and a changelog. Claims are labelled <em>Law</em>,{" "}
          <em>Proposal</em>, <em>Technical draft</em>,{" "}
          <em>Implementation note</em> or <em>Commentary</em> — because a
          Commission policy page is not law, and pretending otherwise is how
          bad advice spreads. The method is public:{" "}
          <Link href="/methodology">Methodology</Link>. The mistakes are too:{" "}
          <Link href="/corrections">Corrections</Link>.
        </p>
      </div>
    </div>
  );
}
