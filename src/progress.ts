import type { Progress, ReviewRecord } from './types';
import { catalog, metaById } from './data/catalog';
import { conceptById } from './data/concepts';
import { projectById, projects } from './data/projects';
export const STORAGE_KEY='vibe-coding-games:v1';
export const DAY=86_400_000;
export function freshProgress(theme:Progress['theme']='light'):Progress{return{version:1,completed:[],attempts:{},milestones:[],review:{},theme,resume:null,currentProject:null,reviewDays:[]};}
const milestoneIds=new Set(projects.flatMap(p=>p.milestones.map(m=>m.id)));
function plain(x:unknown):x is Record<string,unknown>{return typeof x==='object'&&x!==null&&!Array.isArray(x);}
function strings(x:unknown):x is string[]{return Array.isArray(x)&&x.every(v=>typeof v==='string');}
function finite(x:unknown):x is number{return typeof x==='number'&&Number.isFinite(x)&&x>=0;}
export function parseProgress(raw:string):Progress {
 const x:unknown=JSON.parse(raw);
 if(!plain(x)||x.version!==1||!strings(x.completed)||!strings(x.milestones)||!strings(x.reviewDays)||!plain(x.attempts)||!plain(x.review)||(x.theme!=='dark'&&x.theme!=='light')||(x.resume!==null&&typeof x.resume!=='string')||(x.currentProject!==null&&typeof x.currentProject!=='string')) throw new Error('This file is not a valid ez gamedev progress export.');
 const p=freshProgress();
 p.completed=[...new Set(x.completed.filter(id=>metaById[id]?.status==='complete'))];
 p.milestones=[...new Set(x.milestones.filter(id=>milestoneIds.has(id)))];
 p.theme=x.theme;p.resume=x.resume&&metaById[x.resume]?x.resume:null;p.currentProject=x.currentProject&&projectById[x.currentProject]?x.currentProject:null;
 p.reviewDays=[...new Set(x.reviewDays.filter(d=>/^\d{4}-\d{2}-\d{2}$/.test(d)))];
 for(const [id,r] of Object.entries(x.review)){
  if(!conceptById[id])continue;
  if(!plain(r)||!finite(r.due)||!finite(r.interval)||!finite(r.attempts)||!finite(r.correct)||!finite(r.lastReviewed)||r.correct>r.attempts)throw new Error('The review history contains invalid values.');
  p.review[id]={due:r.due,interval:r.interval,attempts:r.attempts,correct:r.correct,lastReviewed:r.lastReviewed};
 }
 for(const [id,a] of Object.entries(x.attempts)){
  if(!/^(pre-|[a-z0-9-]+-retrieve|concept-)/.test(id))continue;
  if(!plain(a)||!finite(a.answer)||!Number.isInteger(a.answer)||typeof a.correct!=='boolean'||!finite(a.count)||!Number.isInteger(a.count))throw new Error('The quiz history contains invalid values.');
  p.attempts[id]={answer:a.answer,correct:a.correct,count:a.count};
 }
 return p;
}
export function loadProgress(storage:Pick<Storage,'getItem'>,defaultTheme:Progress['theme']='light'):{progress:Progress;warning:string|null}{
 try{const raw=storage.getItem(STORAGE_KEY);return{progress:raw?parseProgress(raw):freshProgress(defaultTheme),warning:null};}catch{return{progress:freshProgress(defaultTheme),warning:'Your saved progress could not be read. You can continue locally or import a previous export.'};}
}
export function completeLesson(p:Progress,id:string,now=Date.now()):Progress{
 const lesson=metaById[id];if(!lesson||lesson.status!=='complete'||p.completed.includes(id))return p;
 const review={...p.review};for(const concept of lesson.concepts){if(!review[concept])review[concept]={due:now+DAY,interval:0,attempts:0,correct:0,lastReviewed:0};}
 return{...p,completed:[...p.completed,id],review};
}
export function reviewConcept(p:Progress,id:string,correct:boolean,now=Date.now()):Progress{
 if(!conceptById[id])return p;
 const old=p.review[id]||{due:now,interval:0,attempts:0,correct:0,lastReviewed:0};
 const sequence=[1,3,7,14,30];const interval=correct?sequence.find(d=>d>old.interval)||30:0;
 const record:ReviewRecord={due:now+(correct?interval*DAY:5*60_000),interval,attempts:old.attempts+1,correct:old.correct+Number(correct),lastReviewed:now};
 const date=new Date(now);const today=`${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,'0')}-${String(date.getDate()).padStart(2,'0')}`;
 return{...p,review:{...p.review,[id]:record},reviewDays:[...new Set([...p.reviewDays,today])]};
}
export function dueConcepts(p:Progress,now=Date.now()):string[]{return Object.entries(p.review).filter(([,r])=>r.due<=now).sort((a,b)=>a[1].due-b[1].due||a[1].correct-b[1].correct).map(([id])=>id);}
export function courseProgress(p:Progress,id:string){const full=catalog.filter(l=>l.courseId===id&&l.status==='complete');return{done:full.filter(l=>p.completed.includes(l.id)).length,total:full.length};}
