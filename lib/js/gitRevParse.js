"use strict";require("core-js/modules/es.array.map.js");require("core-js/modules/es.regexp.exec.js");require("core-js/modules/es.string.replace.js");require("core-js/modules/es.string.split.js");require("core-js/modules/es.string.trim.js");function _slicedToArray(arr,i){return _arrayWithHoles(arr)||_iterableToArrayLimit(arr,i)||_unsupportedIterableToArray(arr,i)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(o,minLen){if(!o)return;if(typeof o==="string")return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor)n=o.constructor.name;if(n==="Map"||n==="Set")return Array.from(o);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}function _arrayLikeToArray(arr,len){if(len==null||len>arr.length)len=arr.length;for(var i=0,arr2=new Array(len);i<len;i++){arr2[i]=arr[i]}return arr2}function _iterableToArrayLimit(arr,i){if(typeof Symbol==="undefined"||!(Symbol.iterator in Object(arr)))return;var _arr=[];var _n=true;var _d=false;var _e=undefined;try{for(var _i=arr[Symbol.iterator](),_s;!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break}}catch(err){_d=true;_e=err}finally{try{if(!_n&&_i["return"]!=null)_i["return"]()}finally{if(_d)throw _e}}return _arr}function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}var sh=require("shelljs");var slash=require("slash");function gitRevParse(){var cwd=arguments.length>0&&arguments[0]!==undefined?arguments[0]:process.cwd();var result=sh.exec("git rev-parse --show-toplevel --show-prefix --git-common-dir --absolute-git-dir --show-cdup",{silent:true}).stdout.replace(/[\s]*$/g,"");var _result$split$map$map=result.split("\n").map(function(s){return s.trim()}).map(slash),_result$split$map$map2=_slicedToArray(_result$split$map$map,5),root=_result$split$map$map2[0],prefix=_result$split$map$map2[1],gitCommonDir=_result$split$map$map2[2],gitDir=_result$split$map$map2[3],_result$split$map$map3=_result$split$map$map2[4],cdup=_result$split$map$map3===void 0?"":_result$split$map$map3;return{prefix:prefix||".",gitCommonDir:gitCommonDir,root:root,gitDir:gitDir,gitHookDir:gitDir+"/hooks",cdup:cdup}}module.exports=gitRevParse;