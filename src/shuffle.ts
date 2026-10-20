/** A stable 32-bit hash of a string (FNV-1a). */
export function hashString(text: string): number {
  let hash = 2166136261;
  for (let i = 0; i < text.length; i++) { hash ^= text.charCodeAt(i); hash = Math.imul(hash, 16777619); }
  return hash >>> 0;
}

/**
 * The order to display a question's options in. It is shuffled but stable for a given
 * question ID, so the page never reorders on re-render and saved answers (which store
 * the original option index) still line up.
 */
export function displayOrder(id: string, count: number): number[] {
  const order = Array.from({ length: count }, (_, i) => i);
  let seed = hashString(id) || 1;
  for (let i = count - 1; i > 0; i--) {
    seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0;
    const j = seed % (i + 1);
    [order[i], order[j]] = [order[j], order[i]];
  }
  return order;
}
