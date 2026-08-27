import type { NextConfig } from "next";

// Satellite domains 308 into their matching deep page on eudipoa.com.
const SATELLITES: [string, string][] = [
  ["eucompanycert.com", "/certificate"],
  ["www.eucompanycert.com", "/certificate"],
  ["companypoa.com", "/poa"],
  ["www.companypoa.com", "/poa"],
  ["businesspoa.com", "/mandates"],
  ["www.businesspoa.com", "/mandates"],
  ["www.eudipoa.com", "/"],
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return SATELLITES.map(([host, path]) => ({
      source: "/:path*",
      has: [{ type: "host" as const, value: host }],
      destination: `https://eudipoa.com${path === "/" ? "/:path*" : path}`,
      permanent: true,
    }));
  },
};

export default nextConfig;
