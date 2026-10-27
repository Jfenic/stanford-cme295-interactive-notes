// Run: node tests/clase-04.cjs
const fs=require('fs'),vm=require('vm'),assert=require('node:assert/strict');
const html=fs.readFileSync(require('path').join(__dirname,'../clases/clase-04.html'),'utf8');
const nodes=new Map();const node=id=>{if(!nodes.has(id))nodes.set(id,{value:'',textContent:'',innerHTML:''});return nodes.get(id);};
const context={window:{addEventListener(){}},document:{getElementById:node}};vm.createContext(context);
for(const m of html.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/gi))vm.runInContext(m[1],context);
function ppo(rho,adv,expected,flat){node('lab1-rho').value=rho;node('lab1-adv').value=adv;node('lab1-eps').value=.2;context.updateLab1();const out=node('lab1-output').innerHTML;assert(out.includes('>'+expected+'</span>'));assert.equal(out.includes('¡RECORTADO'),flat);}
ppo(1.35,2,'2.40',true);ppo(.7,1.5,'1.05',false);ppo(.65,-2,'-1.60',true);ppo(1.35,-1.5,'-2.03',false);ppo(1,0,'0.00',false);
node('lab2-len1').value=100;node('lab2-len4').value=600;
for(const [mode,coefficient] of [['standard','-0.042'],['drgrpo','-0.025'],['dapo','-0.091']]){node('lab2-norm').value=mode;context.updateLab2();assert(node('lab2-output').innerHTML.includes(coefficient+'×10⁻²'));}
node('lab3-profile').value='mode';node('lab3-twalks').value=.02;context.updateLab3();const kl=node('lab3-output').innerHTML;assert(kl.includes('1.238'));assert(kl.includes('0.582'));assert(kl.includes('no se generan rollouts'));
const qs=vm.runInContext('quizQuestions',context);assert.equal(qs.length,8);assert(new Set(qs.map(q=>q.correct)).size===3);assert(qs.find(q=>q.id==='q3').optsEs[qs.find(q=>q.id==='q3').correct].startsWith('Cero'));assert(qs.find(q=>q.id==='q7').optsEn[qs.find(q=>q.id==='q7').correct].startsWith('ln 2'));
console.log('PASS: PPO positive/negative/zero cases, three normalization modes, numerical KL, and bilingual option permutation.');
