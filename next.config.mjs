/** @type {import('next').NextConfig} */

// GitHub Pages serves the site from /<repo-name> unless a custom domain is used.
// We toggle basePath/assetPrefix via env vars so local dev and custom-domain
// deployments stay clean.
const isGithubPages = process.env.GITHUB_PAGES === "true";
const isCustomDomain = process.env.CUSTOM_DOMAIN === "true";
const repoName = "Delite-bakery";

const usePrefix = isGithubPages && !isCustomDomain;

const nextConfig = {
  output: "export",
  reactStrictMode: true,
  trailingSlash: true,
  basePath: usePrefix ? `/${repoName}` : "",
  assetPrefix: usePrefix ? `/${repoName}/` : "",
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: usePrefix ? `/${repoName}` : "",
  },
};

export default nextConfig;
