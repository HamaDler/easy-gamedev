import { useState } from 'react';
import type { DeeperItem, LessonBlock, MediaSlot as MediaSlotData, Question } from '../types';
import { useProgress } from '../state';
import { displayOrder } from '../shuffle';
import { costNames, toolById } from '../data/tools';
import { Demo } from './Demos';

export function Diagram({title,nodes,note}:{title:string;nodes:string[];note?:string}){return <figure className="mental-model"><figcaption className="eyebrow">{title}</figcaption><ol>{nodes.map((node,i)=><li key={i}><span>{node}</span>{i<nodes.length-1&&<b aria-hidden="true">→</b>}</li>)}</ol>{note&&<p className="fine">{note}</p>}</figure>;}

export function QuestionCard({question,review=false,onCheck}:{question:Question;review?:boolean;onCheck?:()=>void}){
 const {progress,attempt}=useProgress();const saved=review?undefined:progress.attempts[question.id];const [selected,setSelected]=useState<number|null>(saved?.answer??null);const [submitted,setSubmitted]=useState(saved!==undefined);const correct=selected===question.answer;
 // Self-check questions keep their authored order; everything else is shuffled stably per question.
 const order=question.id.startsWith('pre-')?question.options.map((_,i)=>i):displayOrder(question.id,question.options.length);
 const eyebrow=question.id.startsWith('pre-')?'SELF-CHECK':review?'RETRIEVE BEFORE YOU REVEAL':'QUICK CHECK';
 return <section className="question-panel"><span className="eyebrow">{eyebrow}</span><h3>{question.prompt}</h3><fieldset><legend className="sr-only">Choose an answer</legend>{order.map(i=>{const option=question.options[i];return <label key={option} className={`answer-option ${submitted&&i===question.answer?'correct':''} ${submitted&&selected===i&&!correct?'incorrect':''}`}><input type="radio" name={question.id} value={i} checked={selected===i} disabled={submitted} onChange={()=>setSelected(i)}/><span>{option}</span>{submitted&&i===question.answer&&<span aria-label="Correct answer">✓</span>}</label>;})}</fieldset>{submitted?<div className="answer-feedback" aria-live="polite"><strong>{correct?'That’s it.':'A useful distinction.'}</strong><p>{question.explanation}</p>{!review&&<button className="text-button" onClick={()=>{setSubmitted(false);setSelected(null);}}>Try again</button>}</div>:<button className="button small" disabled={selected===null} onClick={()=>{if(selected===null)return;attempt(question,selected,review);setSubmitted(true);onCheck?.();}}>Check reasoning</button>}</section>;
}

async function copyText(text:string){try{await navigator.clipboard.writeText(text);return true;}catch{return false;}}
export function PromptCard({title,text,why,eyebrow='CODING AGENT PROMPT'}:{title:string;text:string;why:string;eyebrow?:string}){const [value,setValue]=useState(text);const [message,setMessage]=useState('');return <section className="prompt-panel"><div className="section-heading"><span className="eyebrow">{eyebrow}</span><button className="text-button" onClick={async()=>setMessage(await copyText(value)?'Copied':'Select the prompt text and copy it manually.')}>Copy prompt</button></div><h3>{title}</h3><textarea aria-label={`${title}: editable prompt`} value={value} rows={6} onChange={e=>setValue(e.target.value)}/><p className="fine">{why}</p><span className="fine" role="status">{message}</span></section>;}

export function Exercise({block}:{block:Extract<LessonBlock,{type:'exercise'}>}){const [hints,setHints]=useState(0);const [checked,setChecked]=useState<string[]>([]);return <section className="exercise-panel"><span className="eyebrow">PRACTICE CHECKPOINT</span><h3>{block.title}</h3><p>{block.task}</p><ol className="steps">{block.steps.map(step=><li key={step}>{step}</li>)}</ol><div className="hints">{block.hints.slice(0,hints).map((hint,i)=><p key={hint}><span className="tiny-label">HINT {i+1}</span> {hint}</p>)}{hints<block.hints.length&&<button className="text-button" onClick={()=>setHints(v=>v+1)}>Reveal {hints?'next':'first'} hint</button>}</div><h4>Check it yourself</h4>{block.checks.map(check=><label className="check-label verification" key={check}><input type="checkbox" checked={checked.includes(check)} onChange={()=>setChecked(v=>v.includes(check)?v.filter(x=>x!==check):[...v,check])}/>{check}</label>)}</section>;}

export function CodeBlock({block}:{block:Extract<LessonBlock,{type:'code'}>}){const [copied,setCopied]=useState(false);return <figure className="code-block"><figcaption><span>{block.title}</span><button className="text-button" onClick={async()=>setCopied(await copyText(block.code))}>{copied?'Copied':'Copy'}</button></figcaption><pre tabIndex={0}><code>{block.code}</code></pre><p>{block.explanation}</p></figure>;}

const mediaKindNames:Record<MediaSlotData['kind'],string>={image:'Image',video:'Video',gif:'Animation',diagram:'Diagram'};
/** Shows the finished image or video when `src` is set, otherwise a described placeholder with a copyable generation prompt. */
export function MediaSlot({media}:{media:MediaSlotData}){
 const [message,setMessage]=useState('');const ratio=media.aspect.replace(':',' / ');
 if(media.src){const url=`${import.meta.env.BASE_URL}${media.src}`;const isVideo=media.kind==='video'||/\.(mp4|webm)$/i.test(media.src);return <figure className="media-figure">{isVideo?<video src={url} aria-label={media.alt} autoPlay muted loop playsInline style={{aspectRatio:ratio}}/>:<img src={url} alt={media.alt} loading="lazy" style={{aspectRatio:ratio}}/>}{media.credit&&<figcaption className="fine">{media.credit}</figcaption>}</figure>;}
 return <figure className="media-slot" aria-label={`Media placeholder: ${media.alt}`}><div className="media-frame" style={{aspectRatio:ratio}}><span className="media-kind">{mediaKindNames[media.kind]} · {media.aspect}</span><p>{media.description}</p><code className="media-id">{media.id}</code></div>{media.prompt&&<details className="media-prompt"><summary>Generation prompt</summary><p>{media.prompt}</p><button className="text-button" onClick={async()=>setMessage(await copyText(media.prompt||'')?'Copied':'Select the text and copy it manually.')}>Copy prompt</button><span className="fine" role="status"> {message}</span></details>}</figure>;
}

export function ToolChips({ids}:{ids:string[]}){return <div className="tool-chips">{ids.map(id=>{const tool=toolById[id];if(!tool)return null;return <a key={id} href={tool.url} target="_blank" rel="noreferrer" className={`tool-chip path-${tool.path}`}><strong>{tool.name}</strong><span>{costNames[tool.cost]}</span></a>;})}</div>;}
function DeeperLink({item}:{item:DeeperItem}){const tool=item.toolId?toolById[item.toolId]:undefined;const url=item.url||tool?.url;return <li><strong>{url?<a href={url} target="_blank" rel="noreferrer">{item.label} ↗</a>:item.label}</strong>{tool&&<span className="tag">{costNames[tool.cost]}</span>}<p>{item.detail}</p></li>;}

export function RenderBlock({block}:{block:LessonBlock}){switch(block.type){
 case 'prose':return <section className="prose-section"><h2>{block.title}</h2>{block.paragraphs.map((p,i)=><p key={i}>{p}</p>)}</section>;
 case 'story':return <section className="story-opener" aria-label="Story">{block.paragraphs.map((p,i)=><p key={i}>{p}</p>)}</section>;
 case 'media':return <MediaSlot media={block.media}/>;
 case 'games':return <section className="game-cards"><h2>{block.title}</h2><div>{block.games.map(g=><article key={g.title+g.year}><span className="eyebrow">{g.year} · {g.platform}</span><h3>{g.title}</h3><p>{g.note}</p></article>)}</div></section>;
 case 'timeline':return <section className="timeline"><span className="eyebrow">{block.title}</span><ol>{block.events.map(e=><li key={e.year+e.title}><span className="timeline-year">{e.year}</span><div><h3>{e.title}</h3><p>{e.text}</p></div></li>)}</ol></section>;
 case 'compare':return <figure className="compare-table"><figcaption className="eyebrow">{block.title}</figcaption><div className="table-scroll" tabIndex={0}><table><thead><tr>{block.columns.map(c=><th key={c} scope="col">{c}</th>)}</tr></thead><tbody>{block.rows.map(r=><tr key={r.join('|')}>{r.map((cell,i)=>i===0?<th key={i} scope="row">{cell}</th>:<td key={i}>{cell}</td>)}</tr>)}</tbody></table></div>{block.note&&<p className="fine">{block.note}</p>}</figure>;
 case 'ai-fit':return <section className="ai-fit"><span className="eyebrow">THE EASY PATH · WHERE AI FITS</span><h2>Build it with your AI crew</h2><p>{block.text}</p><ToolChips ids={block.toolIds}/>{block.prompt&&<PromptCard title="Try this prompt" text={block.prompt} why="Replace the bracketed parts with your own game. Read the answer before using it, and keep a saved copy of your project first." eyebrow="AI PROMPT"/>}</section>;
 case 'go-deeper':return <details className="disclosure go-deeper"><summary><span className="tag deep-dive">do it yourself</span>Go deeper, without AI</summary><p>{block.text}</p><ul>{block.items.map(item=><DeeperLink key={item.label} item={item}/>)}</ul></details>;
 case 'diagram':return <Diagram {...block}/>;
 case 'code':return <CodeBlock block={block}/>;
 case 'demo':return <Demo kind={block.kind}/>;
 case 'quiz':return <QuestionCard question={block.question}/>;
 case 'prompt':return <PromptCard {...block}/>;
 case 'exercise':return <Exercise block={block}/>;
 case 'callout':return <details className="disclosure"><summary><span className={`tag ${block.level}`}>{block.level.replace('-',' ')}</span>{block.title}</summary><p>{block.text}</p></details>;
}}
