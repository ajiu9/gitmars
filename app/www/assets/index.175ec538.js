import{_ as e,T as r}from"./index.ce2e2f46.js";import{r as a,l as s,d as t,R as n,s as i,v as d,J as o}from"./vendor/vue_3.2.23.js.9f5d2e7e.js";const m={class:"terminal",ref:"terminal"},p=["id"];var l=e({name:"Xterm",components:{},props:{id:String,path:String},setup(e){const i=a(null),{getTerminal:d,fitAddon:o}=s(r),m=d(e.id,e.path);return t((()=>{m.term.open(i.value),m.term.focus()})),n((()=>{})),{termWrap:i}}},[["render",function(e,r,a,s,t,n){return i(),d("div",m,[o("div",{ref:"termWrap",id:a.id,class:"terminal-pane"},null,8,p)],512)}],["__scopeId","data-v-028cbdbf"]]);export{l as X};