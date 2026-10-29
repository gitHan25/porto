import type { NextConfig } from "next";

/**
 * ---------------------------------------------------------------------------
 * DEPLOY CONFIG — read this before deploying.
 * ---------------------------------------------------------------------------
 * This site is a fully static export (`output: "export"`), so it runs on any
 * static host with no server.
 *
 *   • Vercel / Netlify / any root-domain host:  leave this file as-is.
 *   • GitHub Pages PROJECT site (served from https://<user>.github.io/<repo>/):
 *       uncomment the two lines in the `GITHUB PAGES` block below and set
 *       `repo` to your repository name. That is the ONLY change needed.
 *   • GitHub Pages USER site (https://<user>.github.io/):  leave as-is.
 * ---------------------------------------------------------------------------
 */

// ---- GITHUB PAGES (uncomment the next two lines for a project-page deploy) ----
// const repo = "portonew"; // <-- your GitHub repository name
// const isGithubPages = true;
const repo = "portonew";
const isGithubPages = false;

const nextConfig: NextConfig = {
  // Static HTML export — no Node server required at runtime.
  output: "export",

  // Tailwind v4 is wired through this loader by the scaffold; keep it.
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },

  // next/image can't optimize at runtime on a static host.
  images: { unoptimized: true },

  // Emit each route as a folder with index.html (plays nicely with GitHub Pages).
  trailingSlash: true,

  // Only applied when the GitHub Pages block above is enabled.
  ...(isGithubPages
    ? { basePath: `/${repo}`, assetPrefix: `/${repo}/` }
    : {}),

  // Exposed to the client so plain asset links (cv.pdf, images) resolve
  // under a GitHub Pages sub-path. Use the `asset()` helper in lib/basePath.ts.
  env: {
    NEXT_PUBLIC_BASE_PATH: isGithubPages ? `/${repo}` : "",
  },
};

export default nextConfig;
