import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { allPagePaths, getPage } from "@/lib/content";
import Cite from "@/components/Cite";
import VerificationBox from "@/components/VerificationBox";
import SourcesSection from "@/components/SourcesSection";
import ChangelogSection from "@/components/ChangelogSection";

export const dynamicParams = false;

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
  return { title: page.meta.title, description: page.meta.description };
}

export default async function HandbookPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const page = getPage(slug);
  if (!page) notFound();

  return (
    <article className="prose measure">
      <h1>{page.meta.title}</h1>
      <VerificationBox meta={page.meta} />
      <MDXRemote
        source={page.body}
        components={{ Cite }}
        options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
      />
      <SourcesSection ids={page.meta.verified_against} />
      <ChangelogSection entries={page.meta.changelog} />
    </article>
  );
}
