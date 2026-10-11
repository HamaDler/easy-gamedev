import { createServer } from './scripts/serve.mjs';
export default async function setup(config){
 const port=Number(new URL(config.projects[0].use.baseURL).port);
 const server=createServer();
 await new Promise((resolve,reject)=>{server.once('error',reject);server.listen(port,'127.0.0.1',resolve);});
 return async()=>{server.closeAllConnections();await new Promise((resolve,reject)=>server.close(error=>error?reject(error):resolve()));};
}
