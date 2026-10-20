import { storyChapter } from '../lesson-builder';
import { gameSeedsA } from './game-a';
import { gameSeedsB } from './game-b';

export const lessons = [...gameSeedsA, ...gameSeedsB].map(storyChapter);
