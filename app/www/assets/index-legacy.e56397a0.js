!function(){var e=document.createElement("style");e.innerHTML=".terminal[data-v-028cbdbf]{overflow:hidden;height:100%}\n",document.head.appendChild(e),System.register(["./index-legacy.a53a249d.js","./vendor-legacy.c44ab313.js"],(function(e){"use strict";var n,t,r,a,i,d,c,o,u;return{setters:[function(e){n=e._,t=e.T},function(e){r=e.b,a=e.N,i=e.K,d=e.ar,c=e.o,o=e.q,u=e.p}],execute:function(){var l={class:"terminal",ref:"terminal"},s=["id"];e("X",n({name:"Xterm",components:{},props:{id:String,path:String},setup:function(e){var n=r(null),c=a(t),o=c.getTerminal,u=(c.fitAddon,o(e.id,e.path));return i((function(){u.term.open(n.value),u.term.focus()})),d((function(){})),{termWrap:n}}},[["render",function(e,n,t,r,a,i){return c(),o("div",l,[u("div",{ref:"termWrap",id:t.id,class:"terminal-pane"},null,8,s)],512)}],["__scopeId","data-v-028cbdbf"]]))}}}))}();