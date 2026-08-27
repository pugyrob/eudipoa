import type { MetadataRoute } from "next";
import { allPages } from "@/lib/content";

const BASE = "https://eudipoa.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = [
    "",
    "/about",
    "/methodology",
    "/privacy",
    "/sources",
    "/corrections",
    "/changelog",
    "/contact",
    "/authors/rob-prime",
  ].map((p) => ({ url: `${BASE}${p}` }));

  const contentPaths = allPages().map((p) => ({
    url: `${BASE}/${p.slug.join("/")}`,
    lastModified: p.meta.verified,
  }));

  return [...staticPaths, ...contentPaths];
}
