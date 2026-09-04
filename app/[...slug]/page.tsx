import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { allPagePaths, getPage } from "@/lib/content";
import Cite from "@/components/Cite";
import VerificationBox from "@/components/VerificationBox";
import SourcesSection from "@/components/SourcesSection";
import ChangelogSection from "@/components/ChangelogSection";
import CiteThisPage from "@/components/CiteThisPage";

export const dynamicParams = false;

const SECTION_KICKERS: Record<string, string> = {
  poa: "The power of attorney",
  certificate: "The EU Company Certificate",
  mandates: "Organisational mandates",
  eidas: "The eIDAS 2 layer",
  "eu-inc": "EU Inc. · proposal",
  roles: "By role",
  reports: "Monthly state report",
  glossary: "Reference",
  updates: "Update",
  comply: "What to do, by when",
};

export function generateStaticParams() {
  return allPagePaths().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const page = getPage(slug);
  if (!page) return {};
  const url = `https://eudipoa.com/${slug.join("/")}`;
  return {
    title: page.meta.title,
    description: page.meta.description,
    alternates: { canonical: url },
    openGraph: {
      title: page.meta.title,
      description: page.meta.description,
      url,
      siteName: "EUDIPOA",
      type: "article",
      publishedTime: page.meta.published,
      modifiedTime: page.meta.verified,
      authors: ["https://eudipoa.com/authors/rob-prime"],
    },
    twitter: {
      card: "summary",
      title: page.meta.title,
      description: page.meta.description,
    },
  };
}

export default async function HandbookPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const page = getPage(slug);
  if (!page) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: page.meta.title,
    description: page.meta.description,
    datePublished: page.meta.published,
    dateModified: page.meta.verified,
    inLanguage: "en-GB",
    author: {
      "@type": "Person",
      name: page.meta.author,
      url: "https://eudipoa.com/authors/rob-prime",
    },
  };

  return (
    <article className="prose measure">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <header className="article-header">
        <p className="kicker">{SECTION_KICKERS[slug[0]] ?? "Handbook"}</p>
        <h1>{page.meta.title}</h1>
        <p className="standfirst">{page.meta.description}</p>
      </header>
      {page.meta.kind === "implementation-note" ? (
        <p className="kind-banner kind-banner--note">
          Implementation note — engineering experience from building against
          these rules. This page describes practice, not law.
        </p>
      ) : null}
      {page.meta.kind === "proposal-tracker" ? (
        <p className="kind-banner kind-banner--proposal">
          Proposal — the instrument this page describes is not adopted law. It
          can change or fail entirely.
        </p>
      ) : null}
      <VerificationBox meta={page.meta} />
      <MDXRemote
        source={page.body}
        components={{ Cite }}
        options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
      />
      <SourcesSection ids={page.meta.verified_against} />
      <CiteThisPage meta={page.meta} slug={slug} />
      <ChangelogSection entries={page.meta.changelog} />
    </article>
  );
}
