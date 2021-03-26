#!/usr/bin/env node
"use strict";require("core-js/modules/es.symbol.js");require("core-js/modules/es.symbol.description.js");require("core-js/modules/es.array.for-each.js");require("core-js/modules/es.function.name.js");require("core-js/modules/es.object.to-string.js");require("core-js/modules/es.promise.js");require("core-js/modules/es.regexp.flags.js");require("core-js/modules/web.dom-collections.for-each.js");require("regenerator-runtime/runtime.js");function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg);var value=info.value}catch(error){reject(error);return}if(info.done){resolve(value)}else{Promise.resolve(value).then(_next,_throw)}}function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise(function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(undefined)})}}var program=require("commander");var sh=require("shelljs");var inquirer=require("inquirer");var _require=require("./conf/go"),options=_require.options,args=_require.args;var _require2=require("./js/go"),combine=_require2.combine,end=_require2.end,update=_require2.update,build=_require2.build,start=_require2.start,admin=_require2.admin,branch=_require2.branch,copy=_require2.copy,get=_require2.get,save=_require2.save,revert=_require2.revert;var _require3=require("./js/index"),success=_require3.success,getCurrent=_require3.getCurrent,createArgs=_require3.createArgs;var config=require("./js/getConfig")();program.name("gitm go").usage("[command]").description("智能猜测你要执行的动作");if(args.length>0)program.arguments(createArgs(args));options.forEach(function(o){program.option(o.flags,o.description,o.defaultValue)});program.action(function(){var _ref=_asyncToGenerator(regeneratorRuntime.mark(function _callee(command,opt){var current;return regeneratorRuntime.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:current=getCurrent();sh.echo(success("当前分支".concat(current,"，系统猜测你可能想做以下操作：")));inquirer.prompt({type:"list",name:"command",message:"请选择你想要的操作?",default:"combine",choices:[new inquirer.Separator(" === 1. Gitmars工作流 === "),"combine","end","update","build","start","admin.publish",new inquirer.Separator(" === 2. 高级工具 === "),"branch","copy","get","save","revert",new inquirer.Separator(" === 退出 === "),"exit",new inquirer.Separator],filter:function filter(val){return val}}).then(function(answers){if(answers.command==="exit"){sh.echo(success("已退出"));sh.exit(0)}sh.echo(success("你选择了".concat(answers.command,"指令")));if(answers.command==="combine"){combine()}else if(answers.command==="end"){sh.echo("注意end指令会在执行合并代码到dev和预发之后删除分支");end()}else if(answers.command==="update"){update()}else if(answers.command==="build"){build()}else if(answers.command==="start"){start()}else if(answers.command==="admin.publish"){admin.publish()}else if(answers.command==="branch"){branch()}else if(answers.command==="copy"){copy()}else if(answers.command==="get"){get()}else if(answers.command==="save"){save()}else if(answers.command==="revert"){revert()}});case 3:case"end":return _context.stop()}}},_callee)}));return function(_x,_x2){return _ref.apply(this,arguments)}}());program.parse(process.argv);