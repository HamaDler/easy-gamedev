export type DemoKind = 'coordinates' | 'loop' | 'velocity' | 'collision' | 'states' | 'tree' | 'signals' | 'feel' | 'transforms' | 'camera' | 'raycast' | 'navigation';
export type Question = { id: string; prompt: string; options: string[]; answer: number; explanation: string; concept: string };
export type LessonBlock =
  | { type: 'prose'; title: string; paragraphs: string[] }
  | { type: 'diagram'; title: string; nodes: string[]; note?: string }
  | { type: 'code'; title: string; language: 'gdscript' | 'javascript' | 'text'; code: string; explanation: string }
  | { type: 'demo'; kind: DemoKind }
  | { type: 'quiz'; question: Question }
  | { type: 'exercise'; title: string; task: string; steps: string[]; hints: string[]; checks: string[] }
  | { type: 'prompt'; title: string; text: string; why: string }
  | { type: 'callout'; title: string; text: string; level: 'core' | 'optional' | 'deep-dive' | 'reference' };
export type Lesson = { id: string; courseId: string; moduleId: string; title: string; outcome: string; minutes: number; status: 'complete' | 'preview'; difficulty: 'Beginner' | 'Intermediate' | 'Advanced'; concepts: string[]; prerequisites: string[]; blocks: LessonBlock[]; summary: string[]; review: Question[]; source?: string };
export type Module = { id: string; title: string; description: string; optional?: boolean; lessonIds: string[] };
export type Course = { id: string; number: string; title: string; shortTitle: string; subtitle: string; description: string; difficulty: string; audience: string; prerequisites: string[]; notRequired: string[]; outcomes: string[]; modules: Module[]; selfCheck: Question[]; projectIds: string[] };
export type Concept = { id: string; title: string; definition: string; why: string; model: string[]; example: string; usage: string; related: string[]; demo?: DemoKind };
export type Project = { id: string; courseId: string; title: string; description: string; difficulty: string; outcome: string; concepts: string[]; milestones: { id: string; title: string; task: string; checks: string[]; lessonIds: string[] }[]; hints: string[]; prompt: string; mistakes: string[]; enhancements: string[] };
export type ReviewRecord = { due: number; interval: number; attempts: number; correct: number; lastReviewed: number };
export type Progress = { version: 1; completed: string[]; attempts: Record<string, { answer: number; correct: boolean; count: number }>; milestones: string[]; review: Record<string, ReviewRecord>; theme: 'dark' | 'light'; resume: string | null; currentProject: string | null; reviewDays: string[] };
