"use strict";require("core-js/modules/es.array.join.js");require("core-js/modules/es.regexp.exec.js");require("core-js/modules/es.string.replace.js");var fs=require("fs");var path=require("path");var readPkg=require("../readPkg");var getHookComment=require("./getHookComment");function getHookShell(){var pkg=readPkg();var hookShell=fs.readFileSync(path.join(__dirname,"../../sh/gitmars.sh"),"utf-8").replace('gitmarsVersion="0.0.0"','gitmarsVersion="'.concat(pkg.version,'"'));return[getHookComment(),"",hookShell].join("\n")}module.exports=getHookShell;