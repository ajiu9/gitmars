"use strict";var t=(t,i,o)=>new Promise(((r,e)=>{var n=t=>{try{c(o.next(t))}catch(t){e(t)}},l=t=>{try{c(o.throw(t))}catch(t){e(t)}},c=t=>t.done?r(t.value):Promise.resolve(t.value).then(n,l);c((o=o.apply(t,i)).next())}));const i=require("shelljs"),o=require("./apollo"),{error:r}=require("./index");module.exports=function(e){return t(this,arguments,(function*(t,e={}){const n=yield o(),{silent:l=!0,url:c}=e;let a=[];n.gitNotificationGroupUrl||c?(c?a=[c]:n.gitNotificationGroupUrl&&(a="string"==typeof n.gitNotificationGroupUrl?[n.gitNotificationGroupUrl]:n.gitNotificationGroupUrl),t=t.replace(/\s/g,""),a.forEach((()=>{i.exec(`curl -i -H "Content-Type: application/json" -X POST -d "{\\"content\\":\\"${t}\\"}" "${c||n.gitNotificationGroupUrl}"`,{silent:l})}))):i.echo(r("没有配置群消息推送地址"))}))};