import {readFile,readdir,writeFile} from 'node:fs/promises';
import {createHash} from 'node:crypto';
const version=JSON.parse(await readFile('package.json','utf8')).version;
const files=['index.html','assets/app.js','assets/editor.css','sw.js','README.md',...(await readdir('dist/models')).filter(n=>n.endsWith('_3n.glb')).map(n=>'models/'+n)];
const results=await Promise.all(files.map(async file=>{
 try{
  const response=await fetch('https://lambadazzz.github.io/primerka/'+file+'?verify='+version+'-'+Date.now(),{cache:'no-store'});
  const remote=Buffer.from(await response.arrayBuffer()),local=await readFile('dist/'+file);
  return {file,status:response.status,match:remote.equals(local),sha256:createHash('sha256').update(remote).digest('hex')};
 }catch(error){return {file,error:error.message};}
}));
await writeFile('../outputs/primerka-'+version+'-public-checksums.json',JSON.stringify(results,null,2));
console.log(JSON.stringify(results.map(({file,status,match,error})=>({file,status,match,error})),null,2));
if(results.some(r=>!r.match))process.exitCode=1;
