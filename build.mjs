import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const root=path.dirname(fileURLToPath(import.meta.url));
const modules=[],seen=new Set();
const pattern=/import\s*\{([\s\S]*?)\}\s*from\s*["']([^"']+)["'];?/g;
const key=p=>path.relative(root,p).split(path.sep).join('/');
function visit(file){
 file=path.resolve(file);if(seen.has(file))return;seen.add(file);
 let source=fs.readFileSync(file,'utf8');
 for(const m of source.matchAll(pattern))visit(path.resolve(path.dirname(file),m[2]));
 source=source.replace(pattern,(_,names,relative)=>`const {${names}} = modules[${JSON.stringify(key(path.resolve(path.dirname(file),relative)))}];`);
 const names=[...source.matchAll(/export\s+(?:async\s+)?(?:function|const|let|class)\s+(\w+)/g)].map(m=>m[1]);
 source=source.replace(/\bexport\s+/g,'');
 modules.push(`modules[${JSON.stringify(key(file))}]=(()=>{\n${source}\nreturn {${names.join(',')}};\n})();`);
}
visit(path.join(root,'js/app.js'));
fs.writeFileSync(path.join(root,'js/demo.bundle.js'),'// Generado con node build.mjs\n(()=>{const modules={};\n'+modules.join('\n')+'\n})();\n');
// Actualizar componentes incrustados: index.html conserva el resto del diseño.
let html=fs.readFileSync(path.join(root,'index.html'),'utf8');
for(const match of [...html.matchAll(/<!-- component:([^ ]+) -->[\s\S]*?<!-- endcomponent -->/g)]){
 const content=fs.readFileSync(path.join(root,match[1]),'utf8');
 html=html.replace(match[0],`<!-- component:${match[1]} -->\n${content}\n<!-- endcomponent -->`);
}
fs.writeFileSync(path.join(root,'index.html'),html);
console.log('DEMO reconstruida: index.html y js/demo.bundle.js.');
