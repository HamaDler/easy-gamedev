import { storyChapter } from '../lesson-builder';
import { historySeedsA } from './history-a';
import { historySeedsB } from './history-b';

export const lessons = [...historySeedsA, ...historySeedsB].map(storyChapter);
