type Point={x:number;y:number};

/** Runs `apply` (which must switch the theme synchronously) with an animated reveal. */
export function switchTheme(apply:()=>void,origin?:Point){
 const reduce=window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
 if(reduce){apply();return;}
 if(typeof document.startViewTransition!=='function'){
  // Fallback: briefly cross-fade colors.
  const root=document.documentElement;root.classList.add('theme-fading');apply();
  window.setTimeout(()=>root.classList.remove('theme-fading'),400);return;
 }
 const x=origin?.x??innerWidth-40,y=origin?.y??40;
 const radius=Math.hypot(Math.max(x,innerWidth-x),Math.max(y,innerHeight-y));
 const transition=document.startViewTransition(apply);
 transition.ready.then(()=>{document.documentElement.animate(
  {clipPath:[`circle(0px at ${x}px ${y}px)`,`circle(${radius}px at ${x}px ${y}px)`]},
  {duration:550,easing:'cubic-bezier(.4,0,.2,1)',pseudoElement:'::view-transition-new(root)'});
 }).catch(()=>{});
}
