#!/usr/bin/env node
/**
 * One-off generator for the 27 country pages under content/poa/member-states/.
 * Output is checked into git and then maintained BY HAND — a country page is
 * edited (not regenerated) when facts land. Re-running this script will
 * REFUSE to overwrite a page whose changelog has more than the initial entry.
 */
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const TODAY = "2026-08-27";
const OUT = path.join(process.cwd(), "content", "poa", "member-states");
fs.mkdirSync(OUT, { recursive: true });

const COUNTRIES = [
  "Austria","Belgium","Bulgaria","Croatia","Cyprus","Czechia","Denmark",
  "Estonia","Finland","France","Germany","Greece","Hungary","Ireland","Italy",
  "Latvia","Lithuania","Luxembourg","Malta","Netherlands","Poland","Portugal",
  "Romania","Slovakia","Slovenia","Spain","Sweden",
];

const slugOf = (name) => name.toLowerCase().replace(/\s+/g, "-");

const czechiaStatus = `**Status: measures notified to the Commission — not yet verified by us in the national gazette.** On the EUR-Lex national-transposition record, Czechia is the only Member State showing communicated measures for Directive (EU) 2025/25: fourteen of them <Cite id="nim-2025-25" />. Every one is a pre-existing statute — the newest, Act No. 162/2024 Sb. on conversions of companies, was published on 19 June 2024, before the Directive itself appeared in the Official Journal. In plain terms: Czechia has told the Commission that existing Czech law (the Civil Code, the Business Corporations Act, the Public Registers Act, the Notarial Code and others, all published in the Sbírka zákonů) already covers ground the Directive occupies. That is a notification, not proof of complete transposition — the Commission's completeness check is expressly reserved, and we have not yet read these acts against Articles 14a, 15 and 16b–16g. Until we have, this page stays at "notified, unverified".`;

const defaultStatus = `**Status: Unknown — nothing notified, nothing verified.** On the EUR-Lex national-transposition record, {NAME} shows no communicated measures for Directive (EU) 2025/25 as of our last check <Cite id="nim-2025-25" />, and we have not found or verified any transposing measure in the national official gazette. Unknown means unchecked or not yet existing — not "nothing is happening". Ministries draft before gazettes publish.`;

for (const name of COUNTRIES) {
  const slug = slugOf(name);
  const file = path.join(OUT, `${slug}.mdx`);
  if (fs.existsSync(file)) {
    const { data } = matter(fs.readFileSync(file, "utf8"));
    if ((data.changelog ?? []).length > 1) {
      console.log(`skip (hand-edited): ${slug}`);
      continue;
    }
  }
  const isCz = name === "Czechia";
  const status = isCz ? czechiaStatus : defaultStatus.replaceAll("{NAME}", name);

  const body = `---
title: "Directive (EU) 2025/25 in ${name}: transposition status"
description: "Where ${name} stands on transposing the digital EU power of attorney and EU Company Certificate rules — what is verified, what applies regardless, and what companies in ${name} should do."
author: Rob Prime
published: ${TODAY}
verified: ${TODAY}
verified_against: [dir-2025-25, nim-2025-25]
review_cycle_days: 30
changelog:
  - date: ${TODAY}
    note: "First published. Status from the EUR-Lex national-transposition record retrieved ${TODAY}; no national gazette verification yet."
---

${status}

## The dates that bind ${name} regardless

These come from the Directive itself and do not depend on national action:

| Date | What | Basis |
| --- | --- | --- |
| by 31 July 2027 | ${name} must adopt and publish its transposing measures | <Cite id="dir-2025-25" pin="Art. 4(1)" /> |
| from 31 July 2028 | ${name} must apply them: EU Company Certificate issuance, digital EU power of attorney, no apostille on in-scope documents, the 15-working-day filing rule, partnership disclosure | Arts. 16b–16d, 15, 14a insertions; Art. 4(2) |
| 1 August 2028 / 2029 | Later dates for group-of-companies information via the register interconnection | <Cite id="dir-2025-25" pin="Art. 4(3)" /> |

National law must cite the Directive when the transposing measure is officially published <Cite id="dir-2025-25" pin="Art. 4(4)" /> — which is how this page will catch it.

## What companies in ${name} should do

Nothing is obliged yet. What is worth doing now — checking your register entries, mapping who may act for you, ignoring premature "compliance" offers — is the same in every Member State and is set out plainly in [What to do, by when](/comply). The EU-wide instruments themselves are covered in [the power of attorney explainer](/poa) and [the certificate explainer](/certificate).

## How this page gets updated

The weekly source pass re-checks the EUR-Lex transposition record (updated weekly by the Publications Office) <Cite id="nim-2025-25" />. When ${name} notifies measures, this page reports it within days — and moves to "verified" only once we have read the measure in the national official gazette. If you know of a published ${name} measure we have missed, send the gazette reference to [hello@eudipoa.com](mailto:hello@eudipoa.com). The full 27-country picture: [the transposition table](/poa/member-states).
`;
  fs.writeFileSync(file, body);
  console.log(`wrote: ${slug}`);
}
console.log("done");
