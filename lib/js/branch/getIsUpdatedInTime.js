"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const{getCurrent:e,getLogs:t}=require("../index");function r({lastet:r,limit:s,branch:i}){let o=!1;const n=e(),a=[],c=[],l=t({lastet:r,limit:s,branches:i}),u=t({lastet:r,limit:s,branches:n});l.forEach((e=>{a.push(e["%H"])})),u.forEach((e=>{(e["%P"]?e["%P"].split(" "):[]).forEach((e=>{c.push(e)}))}));e:for(const e of a)if(c.includes(e)){o=!0;break e}return o}exports.default=r,exports.getIsUpdatedInTime=r;