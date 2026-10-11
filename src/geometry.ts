export function findPath(start:[number,number],end:[number,number],blocked:Set<string>,size:number):[number,number][] {
 const key=(p:[number,number])=>p.join(',');const valid=(p:[number,number])=>p[0]>=0&&p[1]>=0&&p[0]<size&&p[1]<size&&!blocked.has(key(p));
 if(!valid(start)||!valid(end))return[];
 const queue:[number,number][]=[start];const visited=new Set([key(start)]);const previous=new Map<string,[number,number]>();
 for(let index=0;index<queue.length;index++){
  const p=queue[index];if(key(p)===key(end)){const path:[number,number][]=[p];let current=p;while(key(current)!==key(start)){current=previous.get(key(current))!;path.unshift(current);}return path;}
  for(const [dx,dy] of [[1,0],[-1,0],[0,1],[0,-1]]){const next:[number,number]=[p[0]+dx,p[1]+dy];if(valid(next)&&!visited.has(key(next))){visited.add(key(next));previous.set(key(next),p);queue.push(next);}}
 }return[];
}
