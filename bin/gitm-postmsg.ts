#!/usr/bin/env node
const { program } = require('commander')
const { options, args } = require('./conf/postmsg')
const sendGroupMessage = require('./js/sendGroupMessage')
const { createArgs } = require('./js/tools')
const { encodeUnicode } = require('./js/unicode')
/**
 * gitm postmsg
 */
program.name('gitm postmsg').usage('<message> [-u --url [url]]').description('发送群消息消息')
if (args.length > 0) program.arguments(createArgs(args))
options.forEach(o => {
    program.option(o.flags, o.description, o.defaultValue)
})
// .option('-u, --url [url]', '推送消息的api地址', '')
program.action((message, opt) => {
    sendGroupMessage(encodeUnicode(message), { url: opt.url || '' })
})
program.parse(process.argv)
export {}