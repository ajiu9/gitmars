#!/usr/bin/env node
const path = require('path')
const program = require('commander')
const sh = require('shelljs')
const { success, warning } = require('./js/index')
const { root, gitDir } = require('./js/gitRevParse')()
const cacheDir = path.join(__dirname, '../cache')

/**
 * gitm clean
 */
program
    .name('gitm clean')
    .description('清理gitmars缓存')
    .option('-f, --force', '强制清理', false)
    .action(opt => {
        sh.rm(gitDir + '/.gitmarscommands', gitDir + '/.gitmarslog', cacheDir + '/buildConfig.json', cacheDir + '/buildConfig.txt')
        if (opt.force) {
            sh.echo(warning('您输入了--force，将同时清理本地gitmars配置文件'))
            sh.rm(root + '/gitmarsconfig.json', root + '/.gitmarsrc')
        }
        sh.echo(success('清理完毕'))
    })
program.parse(process.argv)
