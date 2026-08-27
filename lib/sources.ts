import fs from "node:fs";
import path from "node:path";
import { parse } from "yaml";

export type SourceType =
  | "law"
  | "official-data"
  | "proposal"
  | "technical-draft"
  | "implementation-note"
  | "commentary";

export interface Source {
  id: string;
  type: SourceType;
  status: string;
  title: string;
  short: string;
  eli?: string;
  url: string;
  oj?: string;
  publisher?: string;
  adopted?: string;
  published?: string;
  last_retrieved: string;
  retrieved_via: string;
  review_cycle_days: number;
}

export const TYPE_LABELS: Record<SourceType, string> = {
  law: "Law",
  "official-data": "Official data",
  proposal: "Proposal",
  "technical-draft": "Technical draft",
  "implementation-note": "Implementation note",
  commentary: "Commentary",
};

let cache: Map<string, Source> | null = null;

export function getRegistry(): Map<string, Source> {
  if (cache) return cache;
  const file = path.join(process.cwd(), "content", "sources", "registry.yaml");
  const doc = parse(fs.readFileSync(file, "utf8")) as { sources: Source[] };
  cache = new Map(doc.sources.map((s) => [s.id, s]));
  return cache;
}

export function getSource(id: string): Source {
  const s = getRegistry().get(id);
  if (!s) {
    throw new Error(
      `Unknown source id "${id}". Add it to content/sources/registry.yaml before citing it.`
    );
  }
  return s;
}

export function allSources(): Source[] {
  return [...getRegistry().values()];
}
