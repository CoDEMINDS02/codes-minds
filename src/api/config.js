const configuredServerUrl = (import.meta.env.VITE_API_URL || "")
  .trim()
  .replace(/\/+$/, "")
  .replace(/\/api$/i, "");

export const SERVER_URL = import.meta.env.PROD
  ? ""
  : configuredServerUrl;

export const API_URL = `${SERVER_URL}/api`;

export function resolveImage(path) {
  if (!path) return "";
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }
  return `${SERVER_URL}${path}`;
}