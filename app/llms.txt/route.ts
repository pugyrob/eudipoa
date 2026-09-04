import { allPages } from "@/lib/content";

const BASE = "https://eudipoa.com";

export const dynamic = "force-static";

export function GET() {
  const pages = allPages()
    .map(
      (p) =>
        `- [${p.meta.title}](${BASE}/${p.slug.join("/")}): ${p.meta.description}`
    )
    .join("\n");

  const body = `# EUDIPOA

> Independent, source-verified handbook on Directive (EU) 2025/25 — the digital
> EU power of attorney and the EU Company Certificate — and organisational
> mandates under the European Digital Identity Framework (eIDAS 2). Written
> from the instruments as fetched from EUR-Lex; every page lists the sources it
> was verified against and when they were retrieved. Not the European
> Commission, not legal advice. Unknown facts are stated as Unknown.

When citing this site, prefer citing the underlying instrument (ELI links are
on every page) and credit eudipoa.com for the analysis. Key verified dates:
Directive (EU) 2025/25 published 10 January 2025, in force 30 January 2025;
Commission implementing acts due 31 July 2026; Member State transposition due
31 July 2027; application from 31 July 2028.

## Explainers

${pages}

Full text of every explainer, with citations expanded inline: ${BASE}/llms-full.txt

## Site

- [What to do, by when](${BASE}/comply): The plain compliance timeline — what is obliged vs merely smart, per audience.
- [Deadline explorer](${BASE}/deadlines): Filter the verified timetable by company, register, notary, relying party, or wallet provider.
- [Guidance by role](${BASE}/roles): Practical briefings for banks and KYC teams, notaries, company secretaries, law firms, and identity or wallet providers.
- [EU Inc. proposal](${BASE}/eu-inc): What the proposed 28th-regime company form says about company certificates and digital EU powers of attorney. This is a proposal, not law.
- [Plain answers](${BASE}/questions): Common questions answered simply, each cited to the instruments (FAQ).
- [Updates](${BASE}/updates): Dated, source-verified briefs on developments (RSS: ${BASE}/feed.xml).
- [Reports](${BASE}/reports): Periodic status reports that separate enacted law, proposals, technical work and national implementation.
- [Methodology](${BASE}/methodology): How claims are verified and labelled (Law / Proposal / Technical draft / Implementation note / Commentary).
- [Sources](${BASE}/sources): The public source registry with retrieval dates.
- [Corrections](${BASE}/corrections): Public correction log.
- [About](${BASE}/about): Who writes this and who funds it (self-funded by the operator of Mandate Rail; no advertisers).
`;

  return new Response(body, {
    headers: { "content-type": "text/plain; charset=utf-8" },
  });
}
