import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { getSource } from "./sources";

export interface ChangelogEntry {
  date: string;
  note: string;
}

export type PageKind = "explainer" | "implementation-note" | "proposal-tracker";

export interface PageMeta {
  title: string;
  description: string;
  author: string;
  published: string;
  verified: string;
  verified_against: string[];
  review_cycle_days: number;
  changelog: ChangelogEntry[];
  kind: PageKind;
}

export interface HandbookPage {
  slug: string[];
  meta: PageMeta;
  body: string;
}

const CONTENT_DIR = path.join(process.cwd(), "content");
// Directories under content/ that are handbook sections (not sources/raw).
const SECTIONS = [
  "poa",
  "certificate",
  "mandates",
  "eidas",
  "eu-inc",
  "roles",
  "reports",
  "glossary",
  "updates",
  "comply",
];

function walk(dir: string): string[] {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) return walk(full);
    return entry.name.endsWith(".mdx") ? [full] : [];
  });
}

export function allPagePaths(): string[][] {
  return SECTIONS.flatMap((section) =>
    walk(path.join(CONTENT_DIR, section)).map((file) => {
      const rel = path.relative(CONTENT_DIR, file).replace(/\\/g, "/");
      const parts = rel.replace(/\.mdx$/, "").split("/");
      if (parts[parts.length - 1] === "index") parts.pop();
      return parts;
    })
  );
}

function toDate(v: unknown, field: string, file: string): string {
  if (v instanceof Date) return v.toISOString().slice(0, 10);
  if (typeof v === "string" && /^\d{4}-\d{2}-\d{2}$/.test(v)) return v;
  throw new Error(`${file}: frontmatter "${field}" must be a YYYY-MM-DD date.`);
}

export function getPage(slug: string[]): HandbookPage | null {
  const base = path.join(CONTENT_DIR, ...slug);
  const candidates = [`${base}.mdx`, path.join(base, "index.mdx")];
  const file = candidates.find((f) => fs.existsSync(f));
  if (!file) return null;

  const raw = fs.readFileSync(file, "utf8");
  const { data, content } = matter(raw);
  const rel = path.relative(process.cwd(), file);

  for (const field of [
    "title",
    "description",
    "author",
    "published",
    "verified",
    "verified_against",
    "review_cycle_days",
    "changelog",
  ]) {
    if (data[field] === undefined) {
      throw new Error(`${rel}: missing required frontmatter field "${field}".`);
    }
  }
  // Every verified_against id must exist in the registry — throws otherwise.
  (data.verified_against as string[]).forEach((id) => getSource(id));

  const meta: PageMeta = {
    title: data.title,
    description: data.description,
    author: data.author,
    published: toDate(data.published, "published", rel),
    verified: toDate(data.verified, "verified", rel),
    verified_against: data.verified_against,
    review_cycle_days: data.review_cycle_days,
    changelog: (data.changelog as { date: unknown; note: string }[]).map(
      (c) => ({ date: toDate(c.date, "changelog.date", rel), note: c.note })
    ),
    kind: (data.kind as PageKind) ?? "explainer",
  };

  return { slug, meta, body: content };
}

export function allPages(): HandbookPage[] {
  return allPagePaths()
    .map((slug) => getPage(slug))
    .filter((p): p is HandbookPage => p !== null);
}

export function verificationOverdue(meta: PageMeta): boolean {
  const verified = new Date(meta.verified + "T00:00:00Z").getTime();
  const ageDays = (Date.now() - verified) / 86_400_000;
  return ageDays > meta.review_cycle_days;
}
