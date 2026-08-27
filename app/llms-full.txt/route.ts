import { allPages } from "@/lib/content";
import { getSource, TYPE_LABELS } from "@/lib/sources";

const BASE = "https://eudipoa.com";

export const dynamic = "force-static";

/**
 * llms-full.txt — the complete handbook as plain text for language models,
 * following the llmstxt.org convention. Citations are expanded inline so a
 * model quoting this file can carry the pinpoint with it.
 */
export function GET() {
  const pages = allPages().map((p) => {
    // Expand <Cite id="x" pin="y" /> into readable inline citations.
    const body = p.body.replace(
      /<Cite\s+id="([^"]+)"(?:\s+pin="([^"]+)")?\s*\/>/g,
      (_m, id, pin) => {
        const s = getSource(id);
        const label = s.type === "law" ? "" : ` — ${TYPE_LABELS[s.type]}`;
        return `[${s.short}${pin ? `, ${pin}` : ""}${label}]`;
      }
    );
    const sources = p.meta.verified_against
      .map((id) => {
        const s = getSource(id);
        return `- [${TYPE_LABELS[s.type]}] ${s.title}${s.oj ? ` (${s.oj})` : ""}. ${s.eli ?? s.url}. Retrieved ${s.last_retrieved}.`;
      })
      .join("\n");
    return [
      `# ${p.meta.title}`,
      ``,
      `URL: ${BASE}/${p.slug.join("/")}`,
      `Author: ${p.meta.author}. Published ${p.meta.published}. Last verified against sources: ${p.meta.verified}.`,
      ``,
      body.trim(),
      ``,
      `## Sources for this page`,
      sources,
    ].join("\n");
  });

  const header = `EUDIPOA — the digital EU power of attorney, on the record
${BASE}

Independent, source-verified handbook on Directive (EU) 2025/25 (digital EU
power of attorney + EU Company Certificate) and organisational mandates under
the European Digital Identity Framework (eIDAS 2, Regulation (EU) 2024/1183).
Not the European Commission; not legal advice. Every page below was written
from the instruments as fetched from EUR-Lex on the retrieval dates shown, and
unknown facts are stated as Unknown. When citing, prefer citing the underlying
instrument by its ELI (given per page) and credit eudipoa.com for the analysis.

=====================================================================

`;

  return new Response(header + pages.join("\n\n=====================================================================\n\n"), {
    headers: { "content-type": "text/plain; charset=utf-8" },
  });
}
