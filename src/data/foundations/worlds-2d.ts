import { storyChapter } from '../lesson-builder';
import { worlds2dSeedsA } from './worlds-2d-a';
import { worlds2dSeedsB } from './worlds-2d-b';

export const lessons = [...worlds2dSeedsA, ...worlds2dSeedsB].map(storyChapter);
