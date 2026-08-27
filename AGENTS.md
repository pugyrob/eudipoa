# AGENTS.md — how to work on eudipoa.com

This file is for the next agent (human or model) touching this repo. The
site's credibility is its only asset. These rules are not style preferences.

## Non-negotiables

1. **No invented law.** Never state an article number, a date, a deadline, or
   a "Member State X has transposed" from memory or from a blog. Fetch the
   instrument (EUR-Lex) first; write from what you fetched. If you cannot
   fetch it, do not write the page.
2. **Unknown is allowed. Guessing is not.** Member-state rows stay "Unknown"
   until the national measure has been seen in that country's official
   gazette.
3. **Labels.** Every supporting source is one of: Law / Proposal / Technical
   draft / Implementation note / Commentary. The EU Business Wallet is a
   PROPOSAL — never present it as law. A law-firm blog is never the sole
   support for a date. "Must" only where the instrument obliges.
4. **Identity.** The footer disclaimer (not the Commission / ENISA / a Member
   State / EUR-Lex; no EU emblem; not legal advice) stays on every page.
   Mandate Rail is mentioned in the footer and `/about` only. No "Buy" CTAs,
   no fake quotes, no invented endorsements.
5. **UK English. No hype.** Forbidden words: seamless, unlock, leverage,
   "experts agree".

## Fetching EUR-Lex

EUR-Lex answers plain HTTP clients (curl, fetch) with **HTTP 202** (bot
challenge). Use a real browser (the Claude Code browser pane works) to fetch
the ELI page, then save the page text under `content/sources/raw/`. The full
text of Directive (EU) 2025/25 is already there.

## Adding a page

1. Fetch the instrument(s) the page relies on; save raw text under
   `content/sources/raw/`; add or update entries in
   `content/sources/registry.yaml` (`last_retrieved` = today).
2. Write the MDX under `content/<section>/`. URL = file path
   (`content/poa/revocation.mdx` → `/poa/revocation`;
   `index.mdx` → the section root). Sections are listed in `lib/content.ts`
   (`SECTIONS`) — add new top-level sections there.
3. Follow the page recipe, in order: one-sentence answer (bold, first
   paragraph) → who it is for → what the law says, with `<Cite/>` pinpoints →
   what it does not say → dates (table) → common confusions. Sources and
   changelog render automatically from frontmatter.
4. Frontmatter: `title`, `description`, `author`, `published`, `verified`
   (today), `verified_against` (every registry id the page relies on),
   `review_cycle_days` (30 for live instruments), `changelog`.
5. Run `pnpm verify-sources` and `pnpm build`. Both must pass. Render the page
   and look at it before calling it done.

## The weekly source pass (Monday cron opens the issue)

For each registry entry: re-fetch. Then:

- **Nothing changed** → bump `last_retrieved` in the registry; bump
  `verified` on any page you actually re-checked against the source.
- **Something changed** → edit the affected MDX to match the law, add a
  changelog entry describing **what changed in the law** (never "updated for
  SEO"), AND write a dated brief in `content/updates/` (frontmatter like any
  page; filename `YYYY-MM-slug.mdx`). The brief states what changed, cites
  the new text, and links the rewritten pages. It flows automatically to
  /updates, the home page, llms.txt, sitemap and /feed.xml.
- **Nothing moved → no update brief.** Manufacturing news kills trust.
- Never auto-rewrite legal content unsupervised. The cron opens an issue; a
  person (or a supervised session) does the pass.

Watchlist: Dir (EU) 2025/25 · Reg (EU) 2024/1183 · IR (EU) 2025/848 ·
the missing Art. 24(2) template implementing acts (search EUR-Lex legal acts
for "digital EU power of attorney" — as of 2026-08-27 only the Directive
itself exists) · eudi.dev (ARF releases) · Business Wallets policy page ·
OEIL procedure 2025/0358 · national gazettes once transposition starts
(rows in /poa/member-states move only on a gazette read).

## Plain answers (/questions)

`app/questions/page.tsx` holds the search-facing FAQ. Each entry has a
`plain` field (feeds FAQPage JSON-LD) and a rendered answer with `<Cite/>`
pinpoints — both must say the same thing. Add questions readers actually ask
(inbox, search consoles), answered from instruments only. Same rules as
everywhere: no invented dates, "not yet" instead of "soon".

## Corrections

If a published claim was wrong: fix it, and record in the page changelog what
was wrong and what it was corrected to. Corrections are public by design.
