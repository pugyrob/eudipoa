# eudipoa.com

An independent, source-verified handbook on Directive (EU) 2025/25 — the
digital EU power of attorney and the EU Company Certificate — and on
organisational mandates under the European Digital Identity Framework.

**This site is the record. It is not the European Commission, not legal
advice, and not a marketing site for anything.** Read `/about` and
`/methodology` on the site itself; they are binding on contributors.

## Stack

Next.js (App Router) · TypeScript · MDX (`next-mdx-remote`) · Tailwind v4 ·
pnpm · Vercel. Git is the CMS — there is no database and no admin panel.

## Run it

```bash
pnpm install
pnpm dev            # http://localhost:3000
pnpm build          # production build (also validates every citation)
pnpm verify-sources # citation/frontmatter gate, no network
pnpm verify-sources:network # + checks registry URLs; 404/410 fails
```

## How content works

- `content/sources/registry.yaml` — the source registry. Every citation on
  the site resolves against it; unknown ids fail the build.
- `content/sources/raw/` — raw fetched instrument text (e.g. the full text of
  Directive (EU) 2025/25 as retrieved from EUR-Lex), kept so claims can be
  re-verified without re-fetching.
- `content/poa/*.mdx` etc. — explainers. Frontmatter **must** include
  `title`, `description`, `author`, `published`, `verified`,
  `verified_against` (registry ids), `review_cycle_days`, `changelog`.
- `<Cite id="dir-2025-25" pin="Art. 16c(2)" />` renders an inline citation.
- Pages older than their `review_cycle_days` show **Verification overdue**
  automatically.

See `AGENTS.md` for the rules on adding a page and running the weekly source
pass. The one-sentence version: **fetch the instrument before writing about
it, and never invent an article number, a date, or a transposition status.**
