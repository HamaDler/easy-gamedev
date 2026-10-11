import http from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import path from 'node:path';
const root=path.resolve('dist');
const port=Number(process.argv[2] || 5189);
const types={'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.svg':'image/svg+xml','.png':'image/png','.zip':'application/zip'};
export function createServer(){return http.createServer(async(request,response)=>{
 try{
  let pathname=decodeURIComponent(new URL(request.url,'http://localhost').pathname);
  const base=process.env.VITE_BASE_PATH;
  if(base&&base!=='./'&&pathname.startsWith(base))pathname='/'+pathname.slice(base.length);
  let file=path.resolve(root,'.'+pathname);
  if(file!==root&&!file.startsWith(root+path.sep)){response.writeHead(403);response.end();return;}
  if((await stat(file)).isDirectory())file=path.join(file,'index.html');
  const data=await readFile(file);
  response.writeHead(200,{'Content-Type':types[path.extname(file)] || 'application/octet-stream'});response.end(data);
 }catch{response.writeHead(404);response.end('File not found');}
});}
if(process.argv[1]&&path.resolve(process.argv[1])===path.resolve('scripts/serve.mjs'))createServer().listen(port,'127.0.0.1',()=>console.log(`Static preview: http://127.0.0.1:${port}/`));
