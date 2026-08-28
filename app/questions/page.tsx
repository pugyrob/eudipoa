import type { Metadata } from "next";
import Link from "next/link";
import Cite from "@/components/Cite";

export const metadata: Metadata = {
  title: "Plain answers",
  description:
    "The questions people actually ask about the digital EU power of attorney, the EU Company Certificate and the EUDI wallet — answered simply, from the law.",
};

// Each answer's `plain` field feeds the FAQPage JSON-LD; the rendered answer
// carries the citations. Both must say the same thing.
const QA: {
  id: string;
  q: string;
  plain: string;
  a: React.ReactNode;
}[] = [
  {
    id: "apostille",
    q: "Do I still need an apostille for EU company documents?",
    plain:
      "For now, yes, where national law requires it. From 31 July 2028, when Member States apply Directive (EU) 2025/25, register-certified company documents, the EU Company Certificate and the digital EU power of attorney are exempt from legalisation and any similar formality, including the apostille, across the EU.",
    a: (
      <>
        <p>
          For now, yes — whatever formalities national law currently requires
          still apply. The change: from <strong>31 July 2028</strong>, when
          Member States apply Directive (EU) 2025/25, register-certified
          company documents, the{" "}
          <Link href="/certificate">EU Company Certificate</Link> and the{" "}
          <Link href="/poa">digital EU power of attorney</Link> are exempt from
          "all forms of legalisation and any similar formality" — which is what
          the apostille is <Cite id="dir-2025-25" pin="Art. 16d(1)–(2) and Art. 4(2)" />
          .
        </p>
      </>
    ),
  },
  {
    id: "what-must-my-company-do",
    q: "What does my company actually have to do, and by when?",
    plain:
      "For most limited companies: very little is obliged. The two real duties, from 31 July 2028 as transposed: file any change to your registered information within at most 15 working days, and keep your register data accurate. Partnerships of the types listed in Annex IIB get a new compulsory disclosure regime. Everything else — the certificate, the digital power of attorney — is a right, not a duty.",
    a: (
      <>
        <p>
          For most limited companies: very little is <em>obliged</em>. The two
          real duties, once your Member State applies the rules (from{" "}
          <strong>31 July 2028</strong>): file any change to your registered
          documents and information within at most{" "}
          <strong>15 working days</strong>{" "}
          <Cite id="dir-2025-25" pin="Art. 15(2)(a) of Dir. (EU) 2017/1132 as replaced" />
          , with penalties for late filing behind it{" "}
          <Cite id="dir-2025-25" pin="recital 22" /> — and keep your register
          data accurate, because everyone else will now rely on it.
          Partnerships listed in Annex IIB get a genuinely new compulsory
          disclosure regime <Cite id="dir-2025-25" pin="Art. 14a" />.
          Everything else is a right, not a duty. The full audience-by-audience
          timeline: <Link href="/comply">What to do, by when</Link>.
        </p>
      </>
    ),
  },
  {
    id: "prove-company-exists",
    q: "How do I prove my company exists in another EU country?",
    plain:
      "Today: with national register extracts, usually plus formalities such as apostilles or certified translations. From 31 July 2028: with the EU Company Certificate, which every Member State must accept as sufficient evidence of incorporation and key register facts, issued by your business register, free at least once per calendar year.",
    a: (
      <>
        <p>
          Today: with an extract from your national business register, plus
          whatever formalities the receiving country demands. From{" "}
          <strong>31 July 2028</strong>: with the{" "}
          <Link href="/certificate">EU Company Certificate</Link> — issued by
          your register, accepted in all Member States "as sufficient evidence,
          at the time of its issuance, of the incorporation of the company" and
          of its key register facts <Cite id="dir-2025-25" pin="Art. 16b(1)" />
          , free of charge at least once per calendar year{" "}
          <Cite id="dir-2025-25" pin="Art. 16b(5)" />.
        </p>
      </>
    ),
  },
  {
    id: "authorise-abroad",
    q: "Can I authorise someone to set up a company or branch for me in another EU country?",
    plain:
      "Yes — today via a national power of attorney with that country's formalities. From 31 July 2028 there is a harmonised digital EU power of attorney for exactly these cross-border company procedures: formation, branches, and cross-border conversions, mergers and divisions. It must be accepted as evidence of the authorised person's entitlement, with no apostille.",
    a: (
      <>
        <p>
          Yes. Today that means a national power of attorney plus the receiving
          country's formalities. From <strong>31 July 2028</strong>, the{" "}
          <Link href="/poa">digital EU power of attorney</Link> exists for
          exactly this: formation of companies, registration or closure of
          branches, and cross-border conversions, mergers and divisions{" "}
          <Cite id="dir-2025-25" pin="Art. 16c(1)" />. It must be accepted as
          evidence of the authorised person's entitlement to represent the
          company <Cite id="dir-2025-25" pin="Art. 16c(2)" />, apostille-free{" "}
          <Cite id="dir-2025-25" pin="Art. 16d(2)" />. How the granting works:{" "}
          <Link href="/poa/how-it-is-granted">step by step here</Link>.
        </p>
      </>
    ),
  },
  {
    id: "when-available",
    q: "When can I actually get a digital EU power of attorney?",
    plain:
      "Not yet. The Commission's template is due by 31 July 2026, Member States must transpose by 31 July 2027, and the rules apply from 31 July 2028. Anything sold as a digital EU power of attorney before national application is something else.",
    a: (
      <>
        <p>
          Not yet. The clocks, from the instrument: Commission template due by{" "}
          <strong>31 July 2026</strong>{" "}
          <Cite id="dir-2025-25" pin="Art. 24(2)(e) insertion" />;
          transposition by <strong>31 July 2027</strong>; application from{" "}
          <strong>31 July 2028</strong>{" "}
          <Cite id="dir-2025-25" pin="Art. 4(1)–(2)" />. Anything sold as a
          "digital EU power of attorney" before your Member State applies its
          transposing law is something else wearing the name.
        </p>
      </>
    ),
  },
  {
    id: "certificate-cost",
    q: "How much does the EU Company Certificate cost?",
    plain:
      "Your own company's certificate in electronic form is free at least once per calendar year in every Member State. Where a price is charged, it may not exceed administrative costs.",
    a: (
      <>
        <p>
          Your own company's certificate in electronic form:{" "}
          <strong>free at least once per calendar year</strong>, in every
          Member State. Where a price is charged — for extra copies, paper, or
          third-party requests — it may not exceed the administrative costs{" "}
          <Cite id="dir-2025-25" pin="Art. 16b(5)" />.
        </p>
      </>
    ),
  },
  {
    id: "mandatory",
    q: "Is the digital EU power of attorney mandatory for companies?",
    plain:
      "No. Companies can use the template; nothing obliges them to. The obligations fall on Member States — to make it available, verify grantors, and accept it.",
    a: (
      <>
        <p>
          No. The instrument says companies "can use" the template{" "}
          <Cite id="dir-2025-25" pin="Art. 16c(1)" /> — the obligations fall on
          Member States, not companies. National powers of attorney also remain
          fully valid <Cite id="dir-2025-25" pin="recital 28" />. More
          misconceptions: <Link href="/poa/what-it-is-not">What it is not</Link>
          .
        </p>
      </>
    ),
  },
  {
    id: "banking-tax",
    q: "Does the digital EU power of attorney work for banking, tax or contracts?",
    plain:
      "No. It covers procedures within the scope of the EU company-law directive: company formation, branches, and cross-border conversions, mergers and divisions. Banking mandates, tax representation and commercial contracts remain governed by national law.",
    a: (
      <>
        <p>
          No. Its scope is procedures under Directive (EU) 2017/1132 —
          formation, branches, cross-border conversions, mergers and divisions{" "}
          <Cite id="dir-2025-25" pin="Art. 16c(1)" />. Authorising someone for
          banking, tax or contracts stays a national-law matter. The wider
          machinery for attested authority is coming from another direction —
          see <Link href="/mandates">organisational mandates</Link>.
        </p>
      </>
    ),
  },
  {
    id: "wallet-deadline",
    q: "What is the EUDI wallet deadline?",
    plain:
      "Each Member State must provide at least one European Digital Identity Wallet within 24 months of the wallet implementing acts entering into force. Those acts entered into force on 24 December 2024, so the deadline is 24 December 2026.",
    a: (
      <>
        <p>
          Each Member State must provide at least one wallet within 24 months
          of the wallet implementing acts entering into force{" "}
          <Cite id="reg-2024-1183" pin="Art. 5a(1) of Reg. 910/2014 as inserted" />
          . Those acts entered into force on 24 December 2024{" "}
          <Cite id="ir-2024-2977" /> <Cite id="ir-2024-2981" />, so the
          deadline is <strong>24 December 2026</strong>. The full chain:{" "}
          <Link href="/poa/wallet">the wallet mapping</Link>.
        </p>
      </>
    ),
  },
  {
    id: "banks-accept-wallet",
    q: "Do banks and large platforms have to accept the EUDI wallet?",
    plain:
      "Where private relying parties (except micro and small enterprises) are required to use strong user authentication — banking, financial services, telecoms and other listed sectors — they must accept EUDI wallets no later than 36 months after the wallet implementing acts entered into force, which is 24 December 2027, and only at the user's voluntary request. Very large online platforms must also accept them for authentication.",
    a: (
      <>
        <p>
          Yes, on a clock. Private relying parties required to use strong user
          authentication — banking, financial services, telecoms and the other
          listed sectors, excluding micro and small enterprises — must accept
          wallets "no later than 36 months" after the wallet implementing acts
          entered into force, and only at the user's voluntary request{" "}
          <Cite id="reg-2024-1183" pin="Art. 5f(2)" />. From the verified
          entry-into-force date of 24 December 2024, that is{" "}
          <strong>24 December 2027</strong>. Very large online platforms must
          also accept wallet authentication{" "}
          <Cite id="reg-2024-1183" pin="Art. 5f(3)" />.
        </p>
      </>
    ),
  },
  {
    id: "business-wallet-law",
    q: "Is the EU Business Wallet law yet?",
    plain:
      "No. It is a Commission proposal — COM(2025)0838, published 19 November 2025, in the ordinary legislative procedure as 2025/0358(COD). As last verified, the European Parliament file shows 'Awaiting committee decision'. Its content can change or fail.",
    a: (
      <>
        <p>
          No. It is a proposal — COM(2025)0838, in the ordinary legislative
          procedure as 2025/0358(COD), last verified at "Awaiting committee
          decision" <Cite id="oeil-2025-0358" />. We track it — clearly
          labelled as a proposal — at{" "}
          <Link href="/eidas/business-wallets">the Business Wallet page</Link>.
        </p>
      </>
    ),
  },
  {
    id: "refusal",
    q: "Can another EU country refuse my company's documents or power of attorney?",
    plain:
      "Only narrowly. For reasonable doubt about authenticity there is a register-to-register check with a 5-working-day reply, and refusal is allowed only if the issuing register does not confirm the document. For suspected abuse or fraud, refusal must be exceptional, case-by-case and justified by public interest, after consulting the issuing register.",
    a: (
      <>
        <p>
          Only through two narrow safeguards. Doubt about{" "}
          <em>authenticity</em>: a contact-point check with the issuing
          register, answered within 5 working days; refusal only if the
          register does not confirm <Cite id="dir-2025-25" pin="Art. 16e" />.
          Suspected <em>abuse or fraud</em>: exceptional, case-by-case refusal,
          justified by public interest, after consulting the issuing register{" "}
          <Cite id="dir-2025-25" pin="Art. 16f" /> — and the recitals warn this
          must never become systematic{" "}
          <Cite id="dir-2025-25" pin="recital 26" />.
        </p>
      </>
    ),
  },
  {
    id: "who-verifies",
    q: "Who verifies that a digital EU power of attorney is genuine?",
    plain:
      "Three layers. At granting: courts, notaries or other competent authorities must verify the grantor's identity, legal capacity and authority to represent the company. In transit: the instrument is authenticated by eIDAS trust services. At reliance: the relying party is responsible for authenticating and validating what is presented.",
    a: (
      <>
        <p>
          Three layers. At granting: courts, notaries or other competent
          authorities verify the grantor's identity, legal capacity and
          authority to represent <Cite id="dir-2025-25" pin="Art. 16c(1)" />.
          In transit: eIDAS trust services authenticate the instrument{" "}
          <Cite id="reg-910-2014" />. At reliance: the relying party carries
          responsibility for authenticating and validating what it is shown{" "}
          <Cite id="reg-2024-1183" pin="Art. 5b(9)" /> — and a signature check
          alone is not an authority check:{" "}
          <Link href="/mandates/agents">valid token ≠ allowed action</Link>.
        </p>
      </>
    ),
  },
];

export default function Questions() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: QA.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.plain },
    })),
  };

  return (
    <div className="prose measure">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <header className="article-header">
        <p className="kicker">Plain answers</p>
        <h1>Your question, answered simply — and cited</h1>
        <p className="standfirst">
          The questions people actually search for, answered in plain English
          with the article numbers attached so you can check us. When an
          answer depends on a date that has not arrived, we say not yet.
        </p>
      </header>
      <ul>
        {QA.map((item) => (
          <li key={item.id}>
            <a href={`#${item.id}`}>{item.q}</a>
          </li>
        ))}
      </ul>
      {QA.map((item) => (
        <section key={item.id} id={item.id}>
          <h2>{item.q}</h2>
          {item.a}
        </section>
      ))}
      <section>
        <h2>Not answered here?</h2>
        <p>
          Ask us — <a href="mailto:hello@eudipoa.com">hello@eudipoa.com</a>.
          Questions that keep arriving get added to this page. We do not give
          legal advice; we explain what the instruments say.
        </p>
      </section>
    </div>
  );
}
