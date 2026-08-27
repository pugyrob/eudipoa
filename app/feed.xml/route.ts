import { allPages } from "@/lib/content";

const BASE = "https://eudipoa.com";

export const dynamic = "force-static";

function esc(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function GET() {
  const updates = allPages()
    .filter((p) => p.slug[0] === "updates" && p.slug.length > 1)
    .sort((a, b) => (a.meta.published < b.meta.published ? 1 : -1));

  const items = updates
    .map((u) => {
      const url = `${BASE}/${u.slug.join("/")}`;
      return `    <item>
      <title>${esc(u.meta.title)}</title>
      <link>${url}</link>
      <guid>${url}</guid>
      <pubDate>${new Date(u.meta.published + "T09:00:00Z").toUTCString()}</pubDate>
      <description>${esc(u.meta.description)}</description>
    </item>`;
    })
    .join("\n");

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>EUDIPOA — Updates</title>
    <link>${BASE}/updates</link>
    <description>Dated, source-verified briefs on developments in the digital EU power of attorney and organisational-mandate landscape.</description>
    <language>en-gb</language>
${items}
  </channel>
</rss>`;

  return new Response(body, {
    headers: { "content-type": "application/rss+xml; charset=utf-8" },
  });
}
