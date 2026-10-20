import type { MediaSlot } from '../../types';

/**
 * Shared art direction for every illustration slot, so images made later with an
 * image model look like one set. Edit this line to restyle every generation prompt.
 * Slots describe original artwork; they never ask for screenshots of real games.
 */
export const MEDIA_STYLE = 'Warm editorial illustration with flat shapes and subtle paper grain, terracotta, sage green, cream, and charcoal palette, soft directional light, gentle sense of humor, no text, no logos, no real game characters.';

export function image(id: string, description: string, alt: string, subject: string, aspect: MediaSlot['aspect'] = '16:9'): MediaSlot {
  return { id, kind: 'image', aspect, description, alt, prompt: `${subject}. ${MEDIA_STYLE}` };
}
export function clip(id: string, description: string, alt: string, subject: string, aspect: MediaSlot['aspect'] = '16:9'): MediaSlot {
  return { id, kind: 'gif', aspect, description, alt, prompt: `A short seamless looping animation: ${subject}. ${MEDIA_STYLE}` };
}
export function chart(id: string, description: string, alt: string, subject: string, aspect: MediaSlot['aspect'] = '16:9'): MediaSlot {
  return { id, kind: 'diagram', aspect, description, alt, prompt: `A clean explanatory diagram: ${subject}. Minimal labels drawn as simple icons. ${MEDIA_STYLE}` };
}
