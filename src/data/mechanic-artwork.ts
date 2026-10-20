export type MechanicArtwork = { src: string; animationSrc?: string; alt: string };

/** Add each mechanic's distinct artwork here as its illustration is completed. */
export const mechanicArtworkById: Record<string, MechanicArtwork> = {
  jump: {
    src: 'assets/mechanics/jump.jpg',
    animationSrc: 'assets/mechanics/jump.gif',
    alt: 'A terracotta character jumps along a curved arc between two sage platforms, with faint silhouettes marking takeoff and landing.',
  },
};
