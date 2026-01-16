export function normalizeTag(tag: string) {
  return tag.toLowerCase().trim().replace(/\s+/g, "-");
}
