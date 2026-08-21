import type { NextConfig } from "next";

// GitHub Pages project sites are served from /<repo-name>/, so the base
// path and asset prefix only need to apply during the GitHub Actions build
// (GITHUB_ACTIONS is set automatically on Actions runners) — local `next
// dev` and `next build` stay at the root, no manual toggling required.
const repoName = "portfolio";
const isGithubActions = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: isGithubActions ? `/${repoName}` : "",
  assetPrefix: isGithubActions ? `/${repoName}/` : "",
  // Computed once here (build time) rather than via `new Date()` in a
  // component, so the static HTML and the client bundle always agree —
  // a runtime call would drift and trigger a hydration mismatch.
  env: {
    NEXT_PUBLIC_BUILD_DATE: new Date().toISOString().slice(0, 10),
    // next/image's `unoptimized` mode doesn't auto-prefix basePath, and a
    // bare relative <a href> breaks on nested routes like /work/atlas —
    // both need this to build correct URLs by hand.
    NEXT_PUBLIC_BASE_PATH: isGithubActions ? `/${repoName}` : "",
  },
};

export default nextConfig;
