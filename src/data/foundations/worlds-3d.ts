import { storyChapter } from '../lesson-builder';
import { worlds3dSeedsA } from './worlds-3d-a';
import { worlds3dSeedsB } from './worlds-3d-b';

export const lessons = [...worlds3dSeedsA, ...worlds3dSeedsB].map(storyChapter);
