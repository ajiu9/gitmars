import{g as t}from"./xterm_4.14.1.js.4d8f2388.js";var e=t(Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:{}})),n="function"==typeof Map&&Map.prototype,r=Object.getOwnPropertyDescriptor&&n?Object.getOwnPropertyDescriptor(Map.prototype,"size"):null,o=n&&r&&"function"==typeof r.get?r.get:null,i=n&&Map.prototype.forEach,u="function"==typeof Set&&Set.prototype,f=Object.getOwnPropertyDescriptor&&u?Object.getOwnPropertyDescriptor(Set.prototype,"size"):null,c=u&&f&&"function"==typeof f.get?f.get:null,l=u&&Set.prototype.forEach,a="function"==typeof WeakMap&&WeakMap.prototype?WeakMap.prototype.has:null,p="function"==typeof WeakSet&&WeakSet.prototype?WeakSet.prototype.has:null,y="function"==typeof WeakRef&&WeakRef.prototype?WeakRef.prototype.deref:null,b=Boolean.prototype.valueOf,g=Object.prototype.toString,s=Function.prototype.toString,h=String.prototype.match,S="function"==typeof BigInt?BigInt.prototype.valueOf:null,m=Object.getOwnPropertySymbols,j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?Symbol.prototype.toString:null,d="function"==typeof Symbol&&"object"==typeof Symbol.iterator,v=Object.prototype.propertyIsEnumerable,O=("function"==typeof Reflect?Reflect.getPrototypeOf:Object.getPrototypeOf)||([].__proto__===Array.prototype?function(t){return t.__proto__}:null),w=e.custom,x=w&&E(w)?w:null,k="function"==typeof Symbol&&void 0!==Symbol.toStringTag?Symbol.toStringTag:null,M=function t(e,n,r,u){var f=n||{};if(T(f,"quoteStyle")&&"single"!==f.quoteStyle&&"double"!==f.quoteStyle)throw new TypeError('option "quoteStyle" must be "single" or "double"');if(T(f,"maxStringLength")&&("number"==typeof f.maxStringLength?f.maxStringLength<0&&f.maxStringLength!==1/0:null!==f.maxStringLength))throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');var g=!T(f,"customInspect")||f.customInspect;if("boolean"!=typeof g&&"symbol"!==g)throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");if(T(f,"indent")&&null!==f.indent&&"\t"!==f.indent&&!(parseInt(f.indent,10)===f.indent&&f.indent>0))throw new TypeError('options "indent" must be "\\t", an integer > 0, or `null`');if(void 0===e)return"undefined";if(null===e)return"null";if("boolean"==typeof e)return e?"true":"false";if("string"==typeof e)return P(e,f);if("number"==typeof e)return 0===e?1/0/e>0?"0":"-0":String(e);if("bigint"==typeof e)return String(e)+"n";var m=void 0===f.depth?5:f.depth;if(void 0===r&&(r=0),r>=m&&m>0&&"object"==typeof e)return L(e)?"[Array]":"[Object]";var v=function(t,e){var n;if("\t"===t.indent)n="\t";else{if(!("number"==typeof t.indent&&t.indent>0))return null;n=Array(t.indent+1).join(" ")}return{base:n,prev:Array(e+1).join(n)}}(f,r);if(void 0===u)u=[];else if(N(u,e)>=0)return"[Circular]";function w(e,n,o){if(n&&(u=u.slice()).push(n),o){var i={depth:f.depth};return T(f,"quoteStyle")&&(i.quoteStyle=f.quoteStyle),t(e,i,r+1,u)}return t(e,f,r+1,u)}if("function"==typeof e){var M=function(t){if(t.name)return t.name;var e=h.call(s.call(t),/^function\s*([\w$]+)/);if(e)return e[1];return null}(e),q=B(e,w);return"[Function"+(M?": "+M:" (anonymous)")+"]"+(q.length>0?" { "+q.join(", ")+" }":"")}if(E(e)){var A=d?String(e).replace(/^(Symbol\(.*\))_[^)]*$/,"$1"):j.call(e);return"object"!=typeof e||d?A:R(A)}if(function(t){if(!t||"object"!=typeof t)return!1;if("undefined"!=typeof HTMLElement&&t instanceof HTMLElement)return!0;return"string"==typeof t.nodeName&&"function"==typeof t.getAttribute}(e)){for(var z="<"+String(e.nodeName).toLowerCase(),F=e.attributes||[],H=0;H<F.length;H++)z+=" "+F[H].name+"="+W(_(F[H].value),"double",f);return z+=">",e.childNodes&&e.childNodes.length&&(z+="..."),z+="</"+String(e.nodeName).toLowerCase()+">"}if(L(e)){if(0===e.length)return"[]";var U=B(e,w);return v&&!function(t){for(var e=0;e<t.length;e++)if(N(t[e],"\n")>=0)return!1;return!0}(U)?"["+D(U,v)+"]":"[ "+U.join(", ")+" ]"}if(function(t){return!("[object Error]"!==I(t)||k&&"object"==typeof t&&k in t)}(e)){var G=B(e,w);return 0===G.length?"["+String(e)+"]":"{ ["+String(e)+"] "+G.join(", ")+" }"}if("object"==typeof e&&g){if(x&&"function"==typeof e[x])return e[x]();if("symbol"!==g&&"function"==typeof e.inspect)return e.inspect()}if(function(t){if(!o||!t||"object"!=typeof t)return!1;try{o.call(t);try{c.call(t)}catch(z){return!0}return t instanceof Map}catch(e){}return!1}(e)){var J=[];return i.call(e,(function(t,n){J.push(w(n,e,!0)+" => "+w(t,e))})),C("Map",o.call(e),J,v)}if(function(t){if(!c||!t||"object"!=typeof t)return!1;try{c.call(t);try{o.call(t)}catch(e){return!0}return t instanceof Set}catch(n){}return!1}(e)){var K=[];return l.call(e,(function(t){K.push(w(t,e))})),C("Set",c.call(e),K,v)}if(function(t){if(!a||!t||"object"!=typeof t)return!1;try{a.call(t,a);try{p.call(t,p)}catch(z){return!0}return t instanceof WeakMap}catch(e){}return!1}(e))return $("WeakMap");if(function(t){if(!p||!t||"object"!=typeof t)return!1;try{p.call(t,p);try{a.call(t,a)}catch(z){return!0}return t instanceof WeakSet}catch(e){}return!1}(e))return $("WeakSet");if(function(t){if(!y||!t||"object"!=typeof t)return!1;try{return y.call(t),!0}catch(e){}return!1}(e))return $("WeakRef");if(function(t){return!("[object Number]"!==I(t)||k&&"object"==typeof t&&k in t)}(e))return R(w(Number(e)));if(function(t){if(!t||"object"!=typeof t||!S)return!1;try{return S.call(t),!0}catch(e){}return!1}(e))return R(w(S.call(e)));if(function(t){return!("[object Boolean]"!==I(t)||k&&"object"==typeof t&&k in t)}(e))return R(b.call(e));if(function(t){return!("[object String]"!==I(t)||k&&"object"==typeof t&&k in t)}(e))return R(w(String(e)));if(!function(t){return!("[object Date]"!==I(t)||k&&"object"==typeof t&&k in t)}(e)&&!function(t){return!("[object RegExp]"!==I(t)||k&&"object"==typeof t&&k in t)}(e)){var Q=B(e,w),V=O?O(e)===Object.prototype:e instanceof Object||e.constructor===Object,X=e instanceof Object?"":"null prototype",Y=!V&&k&&Object(e)===e&&k in e?I(e).slice(8,-1):X?"Object":"",Z=(V||"function"!=typeof e.constructor?"":e.constructor.name?e.constructor.name+" ":"")+(Y||X?"["+[].concat(Y||[],X||[]).join(": ")+"] ":"");return 0===Q.length?Z+"{}":v?Z+"{"+D(Q,v)+"}":Z+"{ "+Q.join(", ")+" }"}return String(e)};function W(t,e,n){var r="double"===(n.quoteStyle||e)?'"':"'";return r+t+r}function _(t){return String(t).replace(/"/g,"&quot;")}function L(t){return!("[object Array]"!==I(t)||k&&"object"==typeof t&&k in t)}function E(t){if(d)return t&&"object"==typeof t&&t instanceof Symbol;if("symbol"==typeof t)return!0;if(!t||"object"!=typeof t||!j)return!1;try{return j.call(t),!0}catch(e){}return!1}var q=Object.prototype.hasOwnProperty||function(t){return t in this};function T(t,e){return q.call(t,e)}function I(t){return g.call(t)}function N(t,e){if(t.indexOf)return t.indexOf(e);for(var n=0,r=t.length;n<r;n++)if(t[n]===e)return n;return-1}function P(t,e){if(t.length>e.maxStringLength){var n=t.length-e.maxStringLength,r="... "+n+" more character"+(n>1?"s":"");return P(t.slice(0,e.maxStringLength),e)+r}return W(t.replace(/(['\\])/g,"\\$1").replace(/[\x00-\x1f]/g,A),"single",e)}function A(t){var e=t.charCodeAt(0),n={8:"b",9:"t",10:"n",12:"f",13:"r"}[e];return n?"\\"+n:"\\x"+(e<16?"0":"")+e.toString(16).toUpperCase()}function R(t){return"Object("+t+")"}function $(t){return t+" { ? }"}function C(t,e,n,r){return t+" ("+e+") {"+(r?D(n,r):n.join(", "))+"}"}function D(t,e){if(0===t.length)return"";var n="\n"+e.prev+e.base;return n+t.join(","+n)+"\n"+e.prev}function B(t,e){var n=L(t),r=[];if(n){r.length=t.length;for(var o=0;o<t.length;o++)r[o]=T(t,o)?e(t[o],t):""}var i,u="function"==typeof m?m(t):[];if(d){i={};for(var f=0;f<u.length;f++)i["$"+u[f]]=u[f]}for(var c in t)T(t,c)&&(n&&String(Number(c))===c&&c<t.length||d&&i["$"+c]instanceof Symbol||(/[^\w$]/.test(c)?r.push(e(c,t)+": "+e(t[c],t)):r.push(c+": "+e(t[c],t))));if("function"==typeof m)for(var l=0;l<u.length;l++)v.call(t,u[l])&&r.push("["+e(u[l])+"]: "+e(t[u[l]],t));return r}export{M as o};
