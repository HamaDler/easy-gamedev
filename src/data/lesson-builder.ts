import type { DeeperItem, DemoKind, GameExample, Lesson, LessonBlock, MediaSlot, Question, TimelineEvent } from '../types';
import { metaById } from './catalog';

export type LessonSeed = { id:string; goal:string; why:string; teach:string[]; model:string[]; code:string; codeTitle?:string; explanation:string; demo?:DemoKind; task:string; steps:string[]; hints:string[]; checks:string[]; question:[string,string[],number,string]; prompt?:string; caution?:string; source?:string; minutes?:number; summary:string[] };
/** Builds a lesson for the classic, code-first Godot course. */
export function authored(s:LessonSeed):Lesson {
 const meta = metaById[s.id];
 if(!meta) throw new Error(`Unknown lesson ${s.id}`);
 const question:Question={id:`${s.id}-retrieve`,prompt:s.question[0],options:s.question[1],answer:s.question[2],explanation:s.question[3],concept:meta.concepts[0]};
 return {...meta,minutes:s.minutes||meta.minutes,outcome:s.goal,source:s.source,blocks:[
  {type:'prose',title:'Why this matters',paragraphs:[s.why]},
  {type:'prose',title:'Build the mental model',paragraphs:s.teach},
  {type:'diagram',title:'See the system',nodes:s.model},
  ...(s.demo?[{type:'demo' as const,kind:s.demo}]:[]),
  {type:'code',title:s.codeTitle||'A worked example',language:meta.courseId==='godot'?'gdscript':'javascript',code:s.code,explanation:s.explanation},
  {type:'quiz',question},
  {type:'exercise',title:'Put it to work',task:s.task,steps:s.steps,hints:s.hints,checks:s.checks},
  ...(s.prompt?[{type:'prompt' as const,title:'Try this with your coding agent',text:s.prompt,why:'This prompt supplies context, keeps the change observable, and asks for verification. Replace the bracketed details with your actual project; inspect the response before applying it.'}]:[]),
  ...(s.caution?[{type:'callout' as const,level:'deep-dive' as const,title:'A useful boundary',text:s.caution}]:[]),
 ],summary:s.summary,review:[question]};
}

/** One teaching section of a story chapter, with optional visuals placed after its text. */
export type ChapterSection = {
 title:string; paragraphs:string[];
 media?:MediaSlot; demo?:DemoKind; diagram?:{title:string;nodes:string[];note?:string};
 compare?:{title:string;columns:string[];rows:string[][];note?:string};
 timeline?:{title:string;events:TimelineEvent[]};
};
export type ChapterSeed = {
 id:string; goal:string; minutes?:number;
 story:string[]; hero:MediaSlot; sections:ChapterSection[];
 gamesTitle?:string; games:GameExample[];
 activity:{title:string;task:string;steps:string[];hints:string[];checks:string[]};
 ai:{text:string;toolIds:string[];prompt?:string};
 deeper:{text:string;items:DeeperItem[]};
 questions:[prompt:string,options:string[],answer:number,explanation:string][];
 summary:string[]; teaser?:string; mechanics?:string[]; genres?:string[];
};
/** Builds a narrated foundations chapter: story → idea → real games → activity → AI → go deeper → quick check. */
export function storyChapter(s:ChapterSeed):Lesson {
 const meta = metaById[s.id];
 if(!meta) throw new Error(`Unknown chapter ${s.id}`);
 const review:Question[] = s.questions.map(([prompt,options,answer,explanation],i)=>({id:`${s.id}-${i+1}-retrieve`,prompt,options,answer,explanation,concept:meta.concepts[i%meta.concepts.length]}));
 const blocks:LessonBlock[] = [{type:'story',paragraphs:s.story},{type:'media',media:s.hero}];
 for(const section of s.sections){
  blocks.push({type:'prose',title:section.title,paragraphs:section.paragraphs});
  if(section.diagram) blocks.push({type:'diagram',...section.diagram});
  if(section.compare) blocks.push({type:'compare',...section.compare});
  if(section.timeline) blocks.push({type:'timeline',...section.timeline});
  if(section.media) blocks.push({type:'media',media:section.media});
  if(section.demo) blocks.push({type:'demo',kind:section.demo});
 }
 blocks.push(
  {type:'games',title:s.gamesTitle||'Seen in real games',games:s.games},
  {type:'exercise',...s.activity},
  {type:'ai-fit',...s.ai},
  {type:'go-deeper',...s.deeper},
  ...review.map(question=>({type:'quiz' as const,question})),
 );
 return {...meta,minutes:s.minutes||meta.minutes,outcome:s.goal,blocks,summary:s.summary,review,mechanics:s.mechanics,genres:s.genres,teaser:s.teaser};
}
