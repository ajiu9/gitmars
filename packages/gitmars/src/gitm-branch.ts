#!/usr/bin/env ts-node
import { program } from 'commander'
import sh from 'shelljs'
import chalk from 'chalk'
import { queue } from '@gitmars/core/lib/queue'
import searchBranches from '@gitmars/core/lib/git/searchBranches'
import getIsGitProject from '@gitmars/core/lib/git/getIsGitProject'
import getIsBranchOrCommitExist from '@gitmars/core/lib/git/getIsBranchOrCommitExist'
import { createArgs } from '@gitmars/core/lib/utils/command'
import type {
    CommandType,
    GitmarsBranchType,
    GitmarsOptionOptionsType
} from '../typings'
import branchConfig from '#lib/conf/branch'
import i18n from '#lib/locales/index'

const { green, red } = chalk
const { args, options } = branchConfig

if (!getIsGitProject()) {
    sh.echo(
        red(i18n.__('The current directory is not a git project directory'))
    )
    process.exit(1)
}

interface GitmBuildOption {
    key?: string
    exclude?: string
    include?: string
    remote?: boolean
    type?: GitmarsBranchType
    delete?: string | null
    forcedelete?: string | null
    upstream?: string
}

/**
 * gitm branch
 */
program
    .name('gitm branch')
    .usage(
        '[-k --key [keyword]] [-t --type [type]] [-d --delete [branch]] [--exclude [exclude]] [--include [include]] [-r --remote [remote]] [-D --forcedelete [branch]] [-u --upstream [upstream]]'
    )
    .description(
        i18n.__(
            'Branch query, delete (note that this command is not used to create a branch, if you want to create a branch please go through the start process)'
        )
    )
if (args.length > 0) program.arguments(createArgs(args))
options.forEach((o: GitmarsOptionOptionsType) => {
    program.option(o.flags, o.description, o.defaultValue)
})
// .option('-k, --key [keyword]', i18n.__('Query branch for keywords'), null)
// .option('--exclude [exclude]', i18n.__('Exclude keywords'), '')
// .option('--include [include]', i18n.__('Include keywords'), '')
// .option('-r, --remote', i18n.__('Whether to query remote branches (change to delete remote branches in deletes mode) Default is local only'), false)
// .option('-t, --type [type]', i18n.__('The type of branch to query, there are 3 types: feature, bugfix, support, if not pass then query all'), null)
// .option('-d, --delete [branch]', i18n.__('Delete branch'), null)
// .option('-D, --forcedelete [branch]', i18n.__('Force branch deletion'), null)
// .option('-u, --upstream [upstream]', i18n.__('Set association with remote branches'))
program.action((opt: GitmBuildOption): void => {
    const cmd: Array<CommandType | string> = []
    const isBranchExist = getIsBranchOrCommitExist(opt.delete)
    if (opt.delete) {
        // 删除分支
        if (isBranchExist) cmd.push(`git branch -d ${opt.delete}`)
        if (opt.remote) cmd.push(`git push origin --delete ${opt.delete}`)
        cmd.push({
            cmd: 'git remote prune origin',
            config: {
                again: true,
                success: i18n.__('Cleanup of remote branch was successful'),
                fail: i18n.__(
                    'Failed to clean up remote branch, please follow the prompts'
                )
            }
        })
    } else if (opt.forcedelete) {
        // 强行删除分支
        if (isBranchExist) cmd.push(`git branch -D ${opt.forcedelete}`)
        if (opt.remote) cmd.push(`git push origin --delete ${opt.delete}`)
        cmd.push({
            cmd: 'git remote prune origin',
            config: {
                again: true,
                success: i18n.__('Cleanup of remote branch was successful'),
                fail: i18n.__(
                    'Failed to clean up remote branch, please follow the prompts'
                )
            }
        })
    } else if (opt.upstream) {
        if (typeof opt.upstream === 'string') {
            // 与远程分支关联
            cmd.push(`git branch --set-upstream-to origin/${opt.upstream}`)
        } else {
            // 取消远程分支关联
            cmd.push('git branch --unset-upstream')
        }
    } else {
        // 分支查询
        const branches = searchBranches({
            remote: opt.remote,
            type: opt.type,
            key: opt.key,
            exclude: opt.exclude,
            include: opt.include
        })
        sh.echo(green(branches.join('\n')))
        return
    }
    queue(cmd)
})
program.parse(process.argv)
export {}
