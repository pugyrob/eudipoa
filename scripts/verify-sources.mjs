#!/usr/bin/env node
/**
 * verify-sources — the citation gate.
 *
 * Always:
 *   1. registry.yaml parses and every entry has the required fields.
 *   2. Every <Cite id="..."> in content/ and app/ resolves to a registry id.
 *   3. Every MDX file has the required frontmatter, and every
 *      verified_against id resolves to a registry id.
 *   4. Warns (does not fail) when a page's `verified` date is older than its
 *      review_cycle_days — the site shows "Verification overdue" for these.
 *
 * With --network:
 *   5. Requests every registry URL. A 404 or 410 fails the build.
 *      Other non-2xx statuses are warnings only, because EUR-Lex answers
 *      plain HTTP clients with 202 (bot challenge) even when the page exists.
 */
import fs from "node:fs";
import path from "node:path";
import { parse } from "yaml";
import matter from "gray-matter";

const ROOT = process.cwd();
const NETWORK = process.argv.includes("--network");
const errors = [];
const warnings = [];

// 1. Registry
const registryFile = path.join(ROOT, "content", "sources", "registry.yaml");
const registry = parse(fs.readFileSync(registryFile, "utf8"));
const ids = new Set();
const REQUIRED = ["id", "type", "title", "short", "url", "last_retrieved", "retrieved_via", "review_cycle_days"];
const TYPES = ["law", "proposal", "technical-draft", "implementation-note", "commentary"];
for (const s of registry.sources ?? []) {
  for (const f of REQUIRED) {
    if (s[f] === undefined) errors.push(`registry: source "${s.id ?? "?"}" missing field "${f}"`);
  }
  if (s.type && !TYPES.includes(s.type)) errors.push(`registry: source "${s.id}" has unknown type "${s.type}"`);
  if (ids.has(s.id)) errors.push(`registry: duplicate id "${s.id}"`);
  ids.add(s.id);
}

// Collect files
function walk(dir, exts) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      if (e.name === "node_modules" || e.name === ".next" || e.name === "raw") return [];
      return walk(full, exts);
    }
    return exts.some((x) => e.name.endsWith(x)) ? [full] : [];
  });
}

// 2. Cite ids everywhere
const citeFiles = [...walk(path.join(ROOT, "content"), [".mdx"]), ...walk(path.join(ROOT, "app"), [".tsx"])];
for (const file of citeFiles) {
  const text = fs.readFileSync(file, "utf8");
  const rel = path.relative(ROOT, file);
  for (const m of text.matchAll(/<Cite\s+id="([^"]+)"/g)) {
    if (!ids.has(m[1])) errors.push(`${rel}: <Cite id="${m[1]}"> not in registry`);
  }
}

// 3 + 4. Frontmatter
const FRONT = ["title", "description", "author", "published", "verified", "verified_against", "review_cycle_days", "changelog"];
for (const file of walk(path.join(ROOT, "content"), [".mdx"])) {
  const rel = path.relative(ROOT, file);
  const { data } = matter(fs.readFileSync(file, "utf8"));
  for (const f of FRONT) {
    if (data[f] === undefined) errors.push(`${rel}: missing frontmatter "${f}"`);
  }
  for (const id of data.verified_against ?? []) {
    if (!ids.has(id)) errors.push(`${rel}: verified_against id "${id}" not in registry`);
  }
  if (data.verified && data.review_cycle_days) {
    const ageDays = (Date.now() - new Date(data.verified).getTime()) / 86_400_000;
    if (ageDays > data.review_cycle_days) {
      warnings.push(`${rel}: verification overdue (verified ${String(data.verified).slice(0, 10)}, cycle ${data.review_cycle_days}d)`);
    }
  }
}

// 5. Network checks
if (NETWORK) {
  for (const s of registry.sources ?? []) {
    try {
      const res = await fetch(s.url, {
        method: "GET",
        redirect: "follow",
        headers: { "user-agent": "Mozilla/5.0 (compatible; eudipoa-verify/1.0; +https://eudipoa.com)" },
        signal: AbortSignal.timeout(30_000),
      });
      if (res.status === 404 || res.status === 410) {
        errors.push(`network: ${s.id} -> HTTP ${res.status} for ${s.url}`);
      } else if (!res.ok) {
        warnings.push(`network: ${s.id} -> HTTP ${res.status} for ${s.url} (not failing; EUR-Lex bot-challenges plain clients)`);
      } else {
        console.log(`ok      ${s.id} -> ${res.status}`);
      }
    } catch (e) {
      warnings.push(`network: ${s.id} -> ${e.message} for ${s.url}`);
    }
  }
}

for (const w of warnings) console.warn(`WARN    ${w}`);
for (const e of errors) console.error(`ERROR   ${e}`);
console.log(`\nverify-sources: ${errors.length} error(s), ${warnings.length} warning(s), ${ids.size} sources, ${citeFiles.length} files scanned.`);
process.exit(errors.length ? 1 : 0);
