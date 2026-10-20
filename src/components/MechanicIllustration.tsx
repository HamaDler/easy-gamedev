import { useEffect, useState } from 'react';
import { mechanicArtworkById } from '../data/mechanic-artwork';

export function MechanicIllustration({ id }: { id: string }) {
  const artwork = mechanicArtworkById[id];
  const [playing, setPlaying] = useState(() => !window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setPlaying(!preference.matches);
    preference.addEventListener('change', update);
    return () => preference.removeEventListener('change', update);
  }, []);
  if (!artwork) return null;
  return <figure className="mechanic-illustration">
    <img src={`${import.meta.env.BASE_URL}${playing && artwork.animationSrc ? artwork.animationSrc : artwork.src}`} alt={artwork.alt} width="960" height="540"/>
    {artwork.animationSrc && <figcaption><button className="text-button" onClick={() => setPlaying(value => !value)}>{playing ? 'Pause animation' : 'Play animation'}</button></figcaption>}
  </figure>;
}
