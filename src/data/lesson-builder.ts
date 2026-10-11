import type { DemoKind, Lesson, Question } from '../types';
import { metaById } from './catalog';

export type LessonSeed = { id:string; goal:string; why:string; teach:string[]; model:string[]; code:string; codeTitle?:string; explanation:string; demo?:DemoKind; task:string; steps:string[]; hints:string[]; checks:string[]; question:[string,string[],number,string]; prompt?:string; caution?:string; source?:string; minutes?:number; summary:string[] };
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
