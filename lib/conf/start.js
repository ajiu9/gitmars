"use strict";function _typeof(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj}}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj}}return _typeof(obj)}(function(root){var cmdConfig={command:"start",short:"st",args:[{required:true,name:"type",variadic:false,description:"分支类型"},{required:true,name:"name",variadic:false,description:"分支名称(不带feature/bugfix前缀)"}],options:[]};if((typeof exports==="undefined"?"undefined":_typeof(exports))==="object"&&(typeof module==="undefined"?"undefined":_typeof(module))==="object")module.exports=cmdConfig;else if((typeof exports==="undefined"?"undefined":_typeof(exports))==="object")exports["cmdConfig"]=cmdConfig;else root["cmdConfig"]=cmdConfig})(typeof window!=="undefined"?window:global);