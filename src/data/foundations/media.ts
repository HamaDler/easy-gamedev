import type { MediaSlot } from '../../types';
import generatedMedia from './generated-media.json';

const generatedSources: Record<string, string> = generatedMedia;

function artwork(id: string): Pick<MediaSlot, 'src'> {
  return generatedSources[id] ? { src: generatedSources[id] } : {};
}

export function image(id: string, description: string, alt: string, aspect: MediaSlot['aspect'] = '16:9'): MediaSlot {
  return { id, kind: 'image', aspect, description, alt, ...artwork(id) };
}
export function clip(id: string, description: string, alt: string, aspect: MediaSlot['aspect'] = '16:9'): MediaSlot {
  const generated = artwork(id);
  return { id, kind: generated.src ? 'image' : 'gif', aspect, description, alt, ...generated };
}
export function chart(id: string, description: string, alt: string, aspect: MediaSlot['aspect'] = '16:9'): MediaSlot {
  return { id, kind: 'diagram', aspect, description, alt, ...artwork(id) };
}
