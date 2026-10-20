export type DemoKind = 'coordinates' | 'loop' | 'velocity' | 'collision' | 'states' | 'tree' | 'signals' | 'feel' | 'transforms' | 'camera' | 'raycast' | 'navigation' | 'isometric' | 'parallax';
export type Question = { id: string; prompt: string; options: string[]; answer: number; explanation: string; concept: string };

/** A picture or clip that belongs in a chapter. Without `src` it renders as a described placeholder. */
export type MediaSlot = { id: string; kind: 'image' | 'video' | 'gif' | 'diagram'; aspect: '16:9' | '4:3' | '3:2' | '1:1' | '21:9'; description: string; alt: string; src?: string; credit?: string };
export type GameExample = { title: string; year: number; platform: string; note: string };
export type TimelineEvent = { year: number; title: string; text: string };
export type DeeperItem = { label: string; detail: string; url?: string; toolId?: string };

export type LessonBlock =
  | { type: 'prose'; title: string; paragraphs: string[] }
  | { type: 'story'; paragraphs: string[] }
  | { type: 'media'; media: MediaSlot }
  | { type: 'games'; title: string; games: GameExample[] }
  | { type: 'timeline'; title: string; events: TimelineEvent[] }
  | { type: 'compare'; title: string; columns: string[]; rows: string[][]; note?: string }
  | { type: 'ai-fit'; text: string; toolIds: string[]; prompt?: string }
  | { type: 'go-deeper'; text: string; items: DeeperItem[] }
  | { type: 'diagram'; title: string; nodes: string[]; note?: string }
  | { type: 'code'; title: string; language: 'gdscript' | 'javascript' | 'text'; code: string; explanation: string }
  | { type: 'demo'; kind: DemoKind }
  | { type: 'quiz'; question: Question }
  | { type: 'exercise'; title: string; task: string; steps: string[]; hints: string[]; checks: string[] }
  | { type: 'prompt'; title: string; text: string; why: string }
  | { type: 'callout'; title: string; text: string; level: 'core' | 'optional' | 'deep-dive' | 'reference' };

export type Lesson = { id: string; courseId: string; moduleId: string; title: string; outcome: string; minutes: number; status: 'complete' | 'preview'; difficulty: 'Beginner' | 'Intermediate' | 'Advanced'; concepts: string[]; prerequisites: string[]; blocks: LessonBlock[]; summary: string[]; review: Question[]; source?: string; mechanics?: string[]; genres?: string[]; teaser?: string };
export type Module = { id: string; title: string; description: string; optional?: boolean; lessonIds: string[] };
export type Engine = 'browser' | 'godot' | 'unity' | 'unreal';
export type Course = {
  id: string; number: string; title: string; shortTitle: string; subtitle: string; description: string; difficulty: string; audience: string;
  prerequisites: string[]; notRequired: string[]; outcomes: string[]; modules: Module[]; selfCheck: Question[]; projectIds: string[];
  /** foundations = story courses; ladder = hands-on courses on the 1–5 scale; classic = the original code-first Godot course. */
  track: 'foundations' | 'ladder' | 'classic'; availability: 'available' | 'planned';
  engine?: Engine; dimension?: '2d' | '3d' | '2d-3d'; level?: 1 | 2 | 3 | 4 | 5; builds?: string;
};
export type Concept = { id: string; title: string; definition: string; why: string; model: string[]; example: string; usage: string; related: string[]; demo?: DemoKind };
export type Project = { id: string; courseId: string; title: string; description: string; difficulty: string; outcome: string; concepts: string[]; milestones: { id: string; title: string; task: string; checks: string[]; lessonIds: string[] }[]; hints: string[]; prompt: string; mistakes: string[]; enhancements: string[] };

export type MechanicCategory = 'movement' | 'combat' | 'resources' | 'progression' | 'puzzle' | 'stealth' | 'building' | 'social' | 'narrative' | 'chance' | 'time' | 'camera' | 'world';
export type Mechanic = { id: string; name: string; category: MechanicCategory; description: string; why: string; genres: string[]; examples: string[] };
export type Genre = { id: string; name: string; parent?: string; summary: string; origin: string; mechanics: string[]; landmarks: string[]; story: string };
export type ToolCategory = 'engine' | 'coding-agent' | 'mcp' | 'ai-image' | 'ai-3d' | 'ai-audio' | 'asset-library' | 'art-tool' | '3d-tool' | 'level-tool' | 'audio-tool' | 'hosting';
export type Tool = { id: string; name: string; category: ToolCategory; path: 'ai' | 'library' | 'manual'; cost: 'free' | 'open-source' | 'free-tier' | 'paid'; url: string; summary: string; bestFor: string; license?: string; checked: string };

export type ReviewRecord = { due: number; interval: number; attempts: number; correct: number; lastReviewed: number };
export type Progress = { version: 1; completed: string[]; attempts: Record<string, { answer: number; correct: boolean; count: number }>; milestones: string[]; review: Record<string, ReviewRecord>; theme: 'dark' | 'light'; resume: string | null; currentProject: string | null; reviewDays: string[] };
