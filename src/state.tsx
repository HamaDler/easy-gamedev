import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import type { Progress, Question } from './types';
import { completeLesson, freshProgress, loadProgress, parseProgress, reviewConcept, STORAGE_KEY } from './progress';
type Store={progress:Progress;warning:string|null;clearWarning:()=>void;complete:(id:string)=>void;attempt:(q:Question,answer:number,review?:boolean)=>void;milestone:(id:string)=>void;setResume:(id:string)=>void;setProject:(id:string)=>void;toggleTheme:()=>void;importData:(raw:string)=>void;reset:()=>void};
const Context=createContext<Store|null>(null);
export function ProgressProvider({children}:{children:ReactNode}){
 const [initial]=useState(()=>{try{return loadProgress(window.localStorage);}catch{return{progress:freshProgress(),warning:'Browser storage is unavailable. Progress will last for this session; export it to keep a copy.'};}});
 const [progress,setProgress]=useState(initial.progress);const [warning,setWarning]=useState(initial.warning);
 useEffect(()=>{document.documentElement.dataset.theme=progress.theme;try{localStorage.setItem(STORAGE_KEY,JSON.stringify(progress));}catch{setWarning('Browser storage is unavailable or full. Export your progress to keep it.');}},[progress]);
 const value:Store={progress,warning,clearWarning:()=>setWarning(null),complete:id=>setProgress(p=>completeLesson(p,id)),attempt:(q,answer,isReview=false)=>setProgress(p=>{
  const correct=q.answer===answer;const old=p.attempts[q.id];let next={...p,attempts:{...p.attempts,[q.id]:{answer,correct,count:(old?.count||0)+1}}};
  if(isReview||(!correct&&!q.id.startsWith('pre-')))next=reviewConcept(next,q.concept,correct);return next;
 }),milestone:id=>setProgress(p=>({...p,milestones:p.milestones.includes(id)?p.milestones.filter(x=>x!==id):[...p.milestones,id]})),setResume:id=>setProgress(p=>p.resume===id?p:{...p,resume:id}),setProject:id=>setProgress(p=>({...p,currentProject:id})),toggleTheme:()=>setProgress(p=>({...p,theme:p.theme==='dark'?'light':'dark'})),importData:raw=>{setProgress(parseProgress(raw));setWarning(null);},reset:()=>{setProgress(freshProgress());setWarning(null);}};
 return <Context.Provider value={value}>{children}</Context.Provider>;
}
export function useProgress(){const context=useContext(Context);if(!context)throw new Error('Missing progress provider');return context;}
