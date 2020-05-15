#!/usr/bin/env node
const program = require('commander')
const sh = require('shelljs')
const { error, success, config, configFrom, queue, getStatus, pwd } = require('./index')
/**
 * gitm upgrade
 */
program
	.name('gitm upgrade')
	.description('升级gitmars')
	.option('-m, --mirror', '是否使用淘宝镜像', false)
	.action(opt => {
		let cmd = [
			{
				cmd: `npm install -g gitmars ${opt.mirror ? '--registry=https://registry.npm.taobao.org' : ''}`,
				config: { slient: false, again: true, kill: false, success: '升级成功', fail: '升级失败，请重试' }
			},
			{
				cmd: `gitm -v`,
				config: { slient: true, again: false }
			}
		]
		queue(cmd).then(data => {
			if (data[0].code === 0) {
				sh.echo(data[1].out)
			}
		})
	})
program.parse(process.argv)