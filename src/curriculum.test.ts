import { describe, expect, it } from 'vitest';
import { catalog, courses, loadLessons, metaById } from './data/catalog';
import { concepts, conceptById } from './data/concepts';
import { projects } from './data/projects';
import { mechanics, mechanicById } from './data/mechanics';
import { genres, genreById } from './data/genres';
import { tools, toolById } from './data/tools';
import { displayOrder } from './shuffle';
import { completeLesson, courseProgress, DAY, dueConcepts, freshProgress, loadProgress, parseProgress, reviewConcept, STORAGE_KEY } from './progress';
import { findPath } from './geometry';
import type { Lesson } from './types';

const words=(text:string)=>text.split(/\s+/).filter(Boolean).length;
async function foundationLessons():Promise<Lesson[]>{return (await Promise.all(courses.filter(c=>c.track==='foundations').map(c=>loadLessons(c.id)))).flat();}

describe('curriculum integrity',()=>{
 it('has unique IDs and valid cross-links',()=>{
  expect(new Set(catalog.map(l=>l.id)).size).toBe(catalog.length);
  expect(new Set(concepts.map(c=>c.id)).size).toBe(concepts.length);
  for(const course of courses){const lessonIds=course.modules.flatMap(m=>m.lessonIds);expect(lessonIds.length).toBeGreaterThan(0);expect(new Set(lessonIds).size).toBe(lessonIds.length);for(const id of lessonIds){expect(metaById[id].courseId).toBe(course.id);expect(catalog.filter(l=>l.id===id)).toHaveLength(1);}}
  for(const l of catalog){l.concepts.forEach(id=>expect(conceptById[id],`${l.id} → ${id}`).toBeDefined());l.prerequisites.forEach(id=>expect(metaById[id]).toBeDefined());}
  for(const c of concepts)c.related.forEach(id=>expect(conceptById[id]).toBeDefined());
  for(const p of projects){expect(courses.some(c=>c.id===p.courseId)).toBe(true);p.concepts.forEach(id=>expect(conceptById[id]).toBeDefined());p.milestones.flatMap(m=>m.lessonIds).forEach(id=>expect(metaById[id]).toBeDefined());}
 });

 it('places every course on a track, and ladder courses on the shared 1–5 scale',()=>{
  for(const c of courses){
   if(c.track==='ladder'){expect(c.engine).toBeDefined();expect(c.dimension).toBeDefined();expect(c.availability).toBe('planned');if(c.level!==undefined)expect([1,2,3,4,5]).toContain(c.level);}
   if(c.track==='foundations'){expect(c.availability).toBe('available');expect(c.level).toBeUndefined();}
  }
  expect(courses.filter(c=>c.track==='foundations')).toHaveLength(4);
  for(const level of [1,2,3,4,5])expect(courses.some(c=>c.level===level),`level ${level}`).toBe(true);
 });

 it('writes every foundations chapter as a story with media, real games, an activity, an AI path, and a quick check',async()=>{
  const lessons=await foundationLessons();
  const expected=catalog.filter(l=>courses.find(c=>c.id===l.courseId)?.track==='foundations');
  expect(lessons).toHaveLength(expected.length);
  for(const course of courses.filter(c=>c.track==='foundations'))expect(lessons.filter(l=>l.courseId===course.id).length,course.id).toBeGreaterThanOrEqual(10);
  for(const lesson of lessons){
   const id=lesson.id;const types=lesson.blocks.map(b=>b.type);
   expect(lesson.status).toBe('complete');expect(lesson.outcome.length).toBeGreaterThan(30);
   expect(types[0],id).toBe('story');
   expect(types.filter(t=>t==='media').length,id).toBeGreaterThanOrEqual(1);
   expect(types,id).not.toContain('code');
   expect(types,id).toContain('go-deeper');
   const games=lesson.blocks.find(b=>b.type==='games');expect(games?.type==='games'?games.games.length:0,id).toBeGreaterThanOrEqual(2);
   const exercise=lesson.blocks.find(b=>b.type==='exercise');expect(exercise?.type==='exercise'?exercise.steps.length:0,id).toBeGreaterThanOrEqual(3);
   const ai=lesson.blocks.find(b=>b.type==='ai-fit');expect(ai?.type==='ai-fit'?ai.toolIds.length:0,id).toBeGreaterThanOrEqual(1);
   const prose=lesson.blocks.flatMap(b=>b.type==='prose'||b.type==='story'?b.paragraphs:[]).join(' ');
   expect(words(prose),id).toBeGreaterThanOrEqual(370);
   expect(words(JSON.stringify(lesson.blocks)),id).toBeGreaterThanOrEqual(900);
   expect(lesson.review.length,id).toBeGreaterThanOrEqual(2);
   for(const q of lesson.review){
    expect(q.id).toMatch(/-retrieve$/);expect(q.answer).toBeLessThan(q.options.length);expect(q.options.length).toBeGreaterThanOrEqual(3);
    expect(new Set(q.options).size).toBe(q.options.length);expect(q.explanation.length).toBeGreaterThan(40);expect(conceptById[q.concept]).toBeDefined();
   }
   expect(lesson.summary.length).toBeGreaterThanOrEqual(3);
   expect(JSON.stringify(lesson)).not.toMatch(/lorem ipsum|TODO|coming soon/i);
  }
 });

 it('gives every media slot a unique ID, a description, alt text, and a prompt',async()=>{
  const slots=(await foundationLessons()).flatMap(l=>l.blocks.flatMap(b=>b.type==='media'?[b.media]:[]));
  expect(slots.length).toBeGreaterThanOrEqual(55);
  expect(new Set(slots.map(s=>s.id)).size).toBe(slots.length);
  for(const s of slots){expect(s.description.length,s.id).toBeGreaterThan(30);expect(s.alt.length,s.id).toBeGreaterThan(10);expect(s.prompt?.length??0,s.id).toBeGreaterThan(30);}
 });

 it('resolves every tool, mechanic, and genre reference',async()=>{
  for(const lesson of await foundationLessons()){
   (lesson.mechanics||[]).forEach(id=>expect(mechanicById[id],`${lesson.id} → ${id}`).toBeDefined());
   (lesson.genres||[]).forEach(id=>expect(genreById[id],`${lesson.id} → ${id}`).toBeDefined());
   for(const b of lesson.blocks){
    if(b.type==='ai-fit')b.toolIds.forEach(id=>expect(toolById[id],`${lesson.id} → ${id}`).toBeDefined());
    if(b.type==='go-deeper')b.items.forEach(i=>{if(i.toolId)expect(toolById[i.toolId]).toBeDefined();if(i.url)expect(i.url).toMatch(/^https:\/\//);});
   }
  }
  expect(mechanics.length).toBeGreaterThanOrEqual(80);expect(new Set(mechanics.map(m=>m.id)).size).toBe(mechanics.length);
  for(const m of mechanics){expect(m.examples.length,m.id).toBeGreaterThanOrEqual(2);m.genres.forEach(id=>expect(genreById[id],`${m.id} → ${id}`).toBeDefined());}
  expect(genres.length).toBeGreaterThanOrEqual(20);expect(new Set(genres.map(g=>g.id)).size).toBe(genres.length);
  for(const g of genres){g.mechanics.forEach(id=>expect(mechanicById[id],`${g.id} → ${id}`).toBeDefined());if(g.parent)expect(genreById[g.parent]).toBeDefined();expect(g.landmarks.length).toBeGreaterThanOrEqual(2);}
  expect(new Set(tools.map(t=>t.id)).size).toBe(tools.length);
  for(const t of tools){expect(t.url,t.id).toMatch(/^https:\/\//);expect(t.checked).toMatch(/^\d{4}-\d{2}$/);}
 });

 it('shows correct answers in varied positions after the stable shuffle',async()=>{
  const questions=(await foundationLessons()).flatMap(l=>l.review);const counts=[0,0,0,0];
  for(const q of questions){
   const order=displayOrder(q.id,q.options.length);
   expect([...order].sort()).toEqual(q.options.map((_,i)=>i));
   expect(displayOrder(q.id,q.options.length)).toEqual(order);
   counts[order.indexOf(q.answer)]++;
  }
  for(const c of counts)expect(c/questions.length).toBeLessThan(.5);
 });

 it('keeps the classic Godot course fully authored',async()=>{
  const lessons=await loadLessons('godot');
  expect(lessons).toHaveLength(catalog.filter(l=>l.courseId==='godot').length);expect(lessons.length).toBeGreaterThanOrEqual(50);
  for(const lesson of lessons){expect(lesson.status).toBe('complete');expect(lesson.blocks.some(b=>b.type==='code')).toBe(true);expect(lesson.review.length).toBeGreaterThan(0);}
 });

 it('publishes planned ladder courses only as outlines',async()=>{
  for(const c of courses.filter(c=>c.availability==='planned')){const lessons=await loadLessons(c.id);expect(lessons.length).toBeGreaterThan(0);expect(lessons.every(l=>l.status==='preview'&&l.review.length===0)).toBe(true);}
 });
});

describe('durable local progress',()=>{
 it('enrolls concepts once and rejects preview completion',()=>{let p=freshProgress();p=completeLesson(p,'fg-what-is-a-game',1000);expect(p.completed).toEqual(['fg-what-is-a-game']);expect(p.review.state.due).toBe(1000+DAY);const again=completeLesson(p,'fg-what-is-a-game',2000);expect(again).toBe(p);expect(completeLesson(p,'b1-workbench',2000)).toBe(p);expect(courseProgress(p,'f-game')).toEqual({done:1,total:18});});
 it('schedules growing intervals and prioritizes missed concepts',()=>{let p=freshProgress();p=reviewConcept(p,'signals',true,1000);expect(p.review.signals.interval).toBe(1);p=reviewConcept(p,'signals',true,2000);expect(p.review.signals.interval).toBe(3);p=reviewConcept(p,'signals',false,3000);expect(p.review.signals.due).toBe(303000);expect(p.review.signals.interval).toBe(0);expect(dueConcepts(p,302999)).toEqual([]);expect(dueConcepts(p,303000)).toEqual(['signals']);expect(p.review.signals.attempts).toBe(3);expect(p.review.signals.correct).toBe(2);});
 it('round-trips a real export and filters retired references',()=>{const p=completeLesson({...freshProgress(),resume:'g-editor',currentProject:'godot-adventure',milestones:['godot-adventure-1'],theme:'light'},'g-signals',2000);expect(parseProgress(JSON.stringify(p))).toEqual(p);const retired={...p,completed:[...p.completed,'retired','what-is-a-game']};expect(parseProgress(JSON.stringify(retired)).completed).toEqual(['g-signals']);});
 it('rejects malformed, future, and poisoned data',()=>{expect(()=>parseProgress('{')).toThrow();expect(()=>parseProgress(JSON.stringify({...freshProgress(),version:2}))).toThrow();expect(()=>parseProgress(JSON.stringify({...freshProgress(),review:{signals:{due:-1}}}))).toThrow();const poisoned={...freshProgress(),review:JSON.parse('{"__proto__":{"due":1,"interval":1,"attempts":1,"correct":1,"lastReviewed":1}}'),currentProject:'__proto__'};expect(parseProgress(JSON.stringify(poisoned)).review).toEqual({});expect(parseProgress(JSON.stringify(poisoned)).currentProject).toBeNull();});
 it('recovers when storage is corrupt or inaccessible',()=>{expect(loadProgress({getItem:()=>'{'}).warning).toBeTruthy();expect(loadProgress({getItem:()=>{throw new Error('denied');}}).progress).toEqual(freshProgress());expect(loadProgress({getItem:key=>key===STORAGE_KEY?null:''}).warning).toBeNull();});
});

describe('navigation model',()=>{
 it('routes around obstacles and never enters blocked cells',()=>{const blocked=new Set(['2,0','2,1','2,2']);const path=findPath([0,0],[4,0],blocked,5);expect(path[0]).toEqual([0,0]);expect(path.at(-1)).toEqual([4,0]);expect(path.every(p=>!blocked.has(p.join(',')))).toBe(true);for(let i=1;i<path.length;i++)expect(Math.abs(path[i][0]-path[i-1][0])+Math.abs(path[i][1]-path[i-1][1])).toBe(1);});
 it('handles blocked, invalid, and unreachable destinations',()=>{expect(findPath([0,0],[2,2],new Set(['2,2']),3)).toEqual([]);expect(findPath([0,0],[9,9],new Set(),3)).toEqual([]);expect(findPath([0,0],[2,2],new Set(['0,1','1,0']),3)).toEqual([]);});
});
