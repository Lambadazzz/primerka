// The Pages repository stores shared models/fonts at its root, beside source/.
import {access,mkdir,cp,readdir} from 'node:fs/promises';
const target=new URL('../public/',import.meta.url),root=new URL('../../',import.meta.url);
try{await access(new URL('models/',target));process.exit(0)}catch{}
await access(new URL('models/',root));
await mkdir(target,{recursive:true});
for(const name of ['models','.nojekyll','apple-touch-icon.png','icon-192.png','icon-512.png','icon-maskable-512.png','icon.svg','manifest.webmanifest'])await cp(new URL(name,root),new URL(name,target),{recursive:true});
await mkdir(new URL('assets/',target),{recursive:true});
for(const name of await readdir(new URL('assets/',root))){
 if(name==='app.js'||name==='editor.css')continue;
 await cp(new URL('assets/'+name,root),new URL('assets/'+name,target));
}
console.log('Shared public assets restored.');
