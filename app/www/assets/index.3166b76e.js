import{_ as r,T as a}from"./index.d55b3ad4.js";import{r as e,j as t,d as s,J as n,x as d,y as i,B as o}from"./vendor/vue_3.2.20.js.843b181b.js";const m={class:"terminal",ref:"terminal"},p=["id"];var l=r({name:"Xterm",components:{},props:{id:String,path:String},setup(r){const d=e(null),{getTerminal:i,fitAddon:o}=t(a),m=i(r.id,r.path);return s((()=>{m.term.open(d.value),m.term.focus()})),n((()=>{})),{termWrap:d}}},[["render",function(r,a,e,t,s,n){return d(),i("div",m,[o("div",{ref:"termWrap",id:e.id,class:"terminal-pane"},null,8,p)],512)}],["__scopeId","data-v-028cbdbf"]]);export{l as X};