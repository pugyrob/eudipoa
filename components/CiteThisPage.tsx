import { PageMeta } from "@/lib/content";

export default function CiteThisPage({
  meta,
  slug,
}: {
  meta: PageMeta;
  slug: string[];
}) {
  const url = `https://eudipoa.com/${slug.join("/")}`;
  return (
    <section className="cite-this">
      <h2>Cite this page</h2>
      <p>
        {meta.author}, &ldquo;{meta.title}&rdquo;, <em>EUDIPOA</em>, published{" "}
        {meta.published}, last verified against its sources {meta.verified},{" "}
        <a href={url}>{url}</a>.
      </p>
      <p>
        Better still, cite the instruments themselves — the Sources list below
        gives each one&rsquo;s ELI, the EU&rsquo;s permanent identifier for
        legislation. This page is a guide to the law, not the law.
      </p>
    </section>
  );
}
