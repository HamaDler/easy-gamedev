import { describe, expect, it } from 'vitest';
import { catalog, courses, loadLessons, metaById } from './data/catalog';
import { concepts, conceptById } from './data/concepts';
import { projects } from './data/projects';
import { completeLesson, courseProgress, DAY, dueConcepts, freshProgress, loadProgress, parseProgress, reviewConcept, STORAGE_KEY } from './progress';
import { findPath } from './geometry';

describe('curriculum integrity',()=>{
 it('has unique IDs and valid cross-links',()=>{
  expect(new Set(catalog.map(l=>l.id)).size).toBe(catalog.length);
  expect(new Set(concepts.map(c=>c.id)).size).toBe(concepts.length);
  for(const course of courses){const lessonIds=course.modules.flatMap(m=>m.lessonIds);expect(new Set(lessonIds).size).toBe(lessonIds.length);for(const id of lessonIds){expect(metaById[id].courseId).toBe(course.id);expect(catalog.filter(l=>l.id===id)).toHaveLength(1);}}
  for(const l of catalog){l.concepts.forEach(id=>expect(conceptById[id]).toBeDefined());l.prerequisites.forEach(id=>expect(metaById[id]).toBeDefined());}
  for(const c of concepts)c.related.forEach(id=>expect(conceptById[id]).toBeDefined());
  for(const p of projects){expect(courses.some(c=>c.id===p.courseId)).toBe(true);p.concepts.forEach(id=>expect(conceptById[id]).toBeDefined());p.milestones.flatMap(m=>m.lessonIds).forEach(id=>expect(metaById[id]).toBeDefined());}
 });
 it('fully authors every Godot lesson with teaching and verifiable practice',async()=>{
  const lessons=await loadLessons('godot');const expected=catalog.filter(l=>l.courseId==='godot');expect(lessons).toHaveLength(expected.length);expect(lessons.length).toBeGreaterThanOrEqual(50);
  for(const lesson of lessons){expect(lesson.status).toBe('complete');expect(lesson.outcome.length).toBeGreaterThan(30);const prose=lesson.blocks.filter(b=>b.type==='prose').flatMap(b=>b.type==='prose'?b.paragraphs:[]).join(' ');expect(prose.split(/\s+/).length,lesson.id).toBeGreaterThan(120);expect(lesson.blocks.some(b=>b.type==='code')).toBe(true);expect(lesson.blocks.some(b=>b.type==='diagram'||b.type==='demo')).toBe(true);const exercise=lesson.blocks.find(b=>b.type==='exercise');expect(exercise?.type).toBe('exercise');if(exercise?.type==='exercise'){expect(exercise.steps.length).toBeGreaterThanOrEqual(3);expect(exercise.checks.length).toBeGreaterThanOrEqual(2);expect(exercise.hints.length).toBeGreaterThanOrEqual(1);}expect(lesson.review.length).toBeGreaterThan(0);for(const q of lesson.review){expect(q.answer).toBeLessThan(q.options.length);expect(q.explanation.length).toBeGreaterThan(40);expect(conceptById[q.concept]).toBeDefined();}expect(lesson.summary.length).toBeGreaterThanOrEqual(3);expect(JSON.stringify(lesson)).not.toMatch(/lorem ipsum|TODO|coming soon/i);}
 });
 it('publishes exactly three representative lessons in each introductory course',async()=>{for(const id of ['foundations','browser']){const lessons=await loadLessons(id);expect(lessons.filter(l=>l.status==='complete')).toHaveLength(3);expect(lessons.filter(l=>l.status==='preview').every(l=>l.review.length===0)).toBe(true);}});
});
describe('durable local progress',()=>{
 it('enrolls concepts once and rejects preview completion',()=>{let p=freshProgress();p=completeLesson(p,'what-is-a-game',1000);expect(p.completed).toEqual(['what-is-a-game']);expect(p.review.state.due).toBe(1000+DAY);const again=completeLesson(p,'what-is-a-game',2000);expect(again).toBe(p);expect(completeLesson(p,'entities',2000)).toBe(p);expect(courseProgress(p,'foundations')).toEqual({done:1,total:3});});
 it('schedules growing intervals and prioritizes missed concepts',()=>{let p=freshProgress();p=reviewConcept(p,'signals',true,1000);expect(p.review.signals.interval).toBe(1);p=reviewConcept(p,'signals',true,2000);expect(p.review.signals.interval).toBe(3);p=reviewConcept(p,'signals',false,3000);expect(p.review.signals.due).toBe(303000);expect(p.review.signals.interval).toBe(0);expect(dueConcepts(p,302999)).toEqual([]);expect(dueConcepts(p,303000)).toEqual(['signals']);expect(p.review.signals.attempts).toBe(3);expect(p.review.signals.correct).toBe(2);});
 it('round-trips a real export and filters retired references',()=>{const p=completeLesson({...freshProgress(),resume:'g-editor',currentProject:'godot-adventure',milestones:['godot-adventure-1'],theme:'light'},'g-signals',2000);expect(parseProgress(JSON.stringify(p))).toEqual(p);const retired={...p,completed:[...p.completed,'retired','entities']};expect(parseProgress(JSON.stringify(retired)).completed).toEqual(['g-signals']);});
 it('rejects malformed, future, and poisoned data',()=>{expect(()=>parseProgress('{')).toThrow();expect(()=>parseProgress(JSON.stringify({...freshProgress(),version:2}))).toThrow();expect(()=>parseProgress(JSON.stringify({...freshProgress(),review:{signals:{due:-1}}}))).toThrow();const poisoned={...freshProgress(),review:JSON.parse('{"__proto__":{"due":1,"interval":1,"attempts":1,"correct":1,"lastReviewed":1}}'),currentProject:'__proto__'};expect(parseProgress(JSON.stringify(poisoned)).review).toEqual({});expect(parseProgress(JSON.stringify(poisoned)).currentProject).toBeNull();});
 it('recovers when storage is corrupt or inaccessible',()=>{expect(loadProgress({getItem:()=>'{'}).warning).toBeTruthy();expect(loadProgress({getItem:()=>{throw new Error('denied');}}).progress).toEqual(freshProgress());expect(loadProgress({getItem:key=>key===STORAGE_KEY?null:''}).warning).toBeNull();});
});
describe('navigation model',()=>{
 it('routes around obstacles and never enters blocked cells',()=>{const blocked=new Set(['2,0','2,1','2,2']);const path=findPath([0,0],[4,0],blocked,5);expect(path[0]).toEqual([0,0]);expect(path.at(-1)).toEqual([4,0]);expect(path.every(p=>!blocked.has(p.join(',')))).toBe(true);for(let i=1;i<path.length;i++)expect(Math.abs(path[i][0]-path[i-1][0])+Math.abs(path[i][1]-path[i-1][1])).toBe(1);});
 it('handles blocked, invalid, and unreachable destinations',()=>{expect(findPath([0,0],[2,2],new Set(['2,2']),3)).toEqual([]);expect(findPath([0,0],[9,9],new Set(),3)).toEqual([]);expect(findPath([0,0],[2,2],new Set(['0,1','1,0']),3)).toEqual([]);});
});
