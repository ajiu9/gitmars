!function(){function t(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function e(e){for(var o=1;o<arguments.length;o++){var r=null!=arguments[o]?arguments[o]:{};o%2?t(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):t(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function n(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var o=document.createElement("style");o.innerHTML=".project-list .content[data-v-af31e448]{padding:30px;width:800px;margin:0 auto}.project-list .content h2[data-v-af31e448]{color:#6a8bad;font-size:16px;line-height:50px}.project-list .content .flex[data-v-af31e448]{display:flex;padding:20px 10px;margin-bottom:10px;align-items:center;justify-content:center;cursor:pointer}.project-list .content .flex.active[data-v-af31e448],.project-list .content .flex[data-v-af31e448]:hover,.project-list .content .flex[data-v-af31e448]:active{background:rgba(66,185,131,.05)}.project-list .content .flex .ttl[data-v-af31e448]{flex:1}.project-list .content .flex .ttl span[data-v-af31e448]{font-weight:bold}.project-list .content .flex .ttl span .tg[data-v-af31e448]{display:inline-block;padding:4px;border-radius:50%;background:#3a5169;margin-left:10px}.project-list .content .flex .ttl p[data-v-af31e448]{color:#6a8bad}.project-list .content .flex .iconfont[data-v-af31e448]{background:#3a5169;font-size:18px;border-radius:2px;margin:0 10px;width:32px;height:32px;line-height:32px;text-align:center}\n",document.head.appendChild(o),System.register(["./vendor-legacy.391855a7.js","./use-current-instance-legacy.3fbf3d7e.js","./index-legacy.02e744ca.js"],(function(t){"use strict";var n,o,r,a,c,i,l,s,u,f,p,d,v,g,x,j,b,h;return{setters:[function(t){n=t.R,o=t.af,r=t.ag,a=t.r,c=t.ah,i=t.o,l=t.p,s=t.m,u=t.F,f=t.ai,p=t.v,d=t.x,v=t.Q,g=t.u,x=t.z,j=t.A},function(t){b=t.u},function(t){h=t._}],execute:function(){var m=function(t){return x("data-v-af31e448"),t=t(),j(),t},y={class:"project-list"},O={class:"content"},k=m((function(){return s("h2",null,"项目列表",-1)})),P=["onClick"],w=m((function(){return s("span",{class:"iconfont icon-star-fill",title:"收藏"},null,-1)})),C={class:"ttl"},D=m((function(){return s("span",{class:"tg"},null,-1)})),z=["onClick"],E=["onClick"];var S=n(e(e({},{name:"ProjectList"}),{},{setup:function(t,e){var n=e.expose,x=b().globalProperties.$axios,j=o();r();var h=a({list:[]});c((function(){m()}));var m=function(){x({url:"/common/project/list",data:{}}).then((function(t){var e=t.data;h.list=[].concat(e)}))},S=function(t){var e=t.name;console.log(e)},_=function(t){var e=t.id;j.push("/control?id=".concat(e))},L=function(t){var e=t.id;x({url:"/common/project/del",type:"post",data:{id:e}}).then((function(){m()}))};return n({data:h,open:S,goProject:_,del:L}),function(t,e){return i(),l("div",y,[s("div",O,[k,s("ul",null,[(i(!0),l(u,null,f(g(h).list,(function(t){return i(),l("li",{key:t.id,class:"flex",onClick:function(e){return _(t)}},[w,s("div",C,[s("span",null,[p(d(t.name)+" ",1),D]),s("p",null,d(t.path),1)]),s("span",{class:"iconfont icon-link",onClick:v((function(e){return S(t)}),["stop"]),title:"进入项目首页"},null,8,z),s("span",{class:"iconfont icon-close-circle",onClick:v((function(e){return L(t)}),["stop"]),title:"删除"},null,8,E)],8,P)})),128))])])])}}}));t("default",h(S,[["__scopeId","data-v-af31e448"]]))}}}))}();
