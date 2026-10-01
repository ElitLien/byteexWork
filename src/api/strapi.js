export const STRAPI_URL =
  process.env.REACT_APP_STRAPI_URL || "http://localhost:1337";

export async function strapiGet(endpoint) {
  const res = await fetch(`${STRAPI_URL}/api/${endpoint}`);
  if (!res.ok) throw new Error(`Strapi ${endpoint} -> HTTP ${res.status}`);
  const json = await res.json();
  return json.data;
}

export function mediaUrl(file) {
  if (!file || !file.url) return "";
  return file.url.startsWith("http") ? file.url : `${STRAPI_URL}${file.url}`;
}
