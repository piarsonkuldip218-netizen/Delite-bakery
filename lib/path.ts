/**
 * Prefixes a public asset path with the configured basePath.
 * next/image (unoptimized) and metadata.icons don't auto-apply basePath,
 * so use asset() for those cases.
 *
 * Usage: asset("/images/cake.jpg")
 */
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function asset(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${BASE_PATH}${normalized}`;
}
