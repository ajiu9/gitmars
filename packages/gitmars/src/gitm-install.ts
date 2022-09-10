#!/usr/bin/env ts-node
import { program } from 'commander'
import ora from 'ora'
import chalk from 'chalk'
import { createArgs } from '@gitmars/core/lib/utils/command'
import { spawnSync } from '@gitmars/core/lib/spawn'
import echo from '@gitmars/core/lib/utils/echo'
import type { GitmarsOptionOptionsType, PackageVersionTag } from '../typings'
import installConfig from '#lib/conf/install'
import i18n from '#lib/locales/index'

const { green, red } = chalk
const { args, options } = installConfig

interface GitmBuildOption {
    mirror?: boolean
    client?: 'npm' | 'yarn' | 'pnpm' | 'cnpm' | string
    registry?: string
}

/**
 * gitm install
 */
program
    .name('gitm install')
    .usage(
        '<pluginName> [version] [-m --mirror] [-c --client [client]] [-r --registry <registry>]'
    )
    .description(i18n.__('Installing plugins, e.g. @gitmars/ui'))
if (args.length > 0) program.arguments(createArgs(args))
options.forEach((o: GitmarsOptionOptionsType) => {
    program.option(o.flags, o.description, o.defaultValue)
})
// .option('-m, --mirror', i18n.__('Whether to use Taobao Mirror'), false)
// .option('-c, --client [client]', i18n.__('The name of the client used to load the package'), 'npm')
// .option('-r, --registry <registry>', i18n.__('Use mirror address'), '')
program.action(
    (
        pluginName: string,
        version: PackageVersionTag | string,
        opt: GitmBuildOption
    ) => {
        if (!pluginName) {
            echo(red(i18n.__('Please enter the plugin name')))
            process.exit(1)
        }
        const spinner = ora()
        if (version) {
            const match = version.match(/[0-9.]+$/)
            if (match) version = match[0]
            else if (
                ![
                    'alpha',
                    'lite',
                    'beta',
                    'release',
                    'latest',
                    'next'
                ].includes(version)
            ) {
                console.error(
                    i18n.__(
                        'Incorrect version number entered, only supported: alpha, lite, beta, release, latest, next'
                    )
                )
                process.exit(0)
            }
        } else {
            version = 'latest'
        }
        let cmdAdd: [GitmBuildOption['client'], string[]]
        switch (opt.client) {
            case 'yarn':
                cmdAdd = [
                    opt.client,
                    ['global', 'add', `${pluginName}@${version}`]
                ]
                break
            case 'pnpm':
                cmdAdd = [opt.client, ['add', '-g', `${pluginName}@${version}`]]
                break
            default:
                // default npm or cnpm
                cmdAdd = [
                    opt.client,
                    ['install', '-g', `${pluginName}@${version}`]
                ]
                break
        }
        // 这一行后面准备删掉
        if (!opt.registry && opt.mirror) {
            opt.registry = 'https://registry.npmmirror.com'
        }
        if (opt.registry) {
            cmdAdd[1] = cmdAdd[1].concat(['-registry', opt.registry])
        }
        spinner.start(green(i18n.__('Installing')))
        const install = spawnSync(...cmdAdd, {
            stdio: 'ignore',
            shell: process.platform === 'win32'
        })
        if (install.status === 0) {
            spinner.succeed(green(i18n.__('Installation complete')))
        } else {
            spinner.fail(
                red(
                    i18n.__(
                        'There was an installation error, please contact the administrator'
                    )
                )
            )
        }
        spinner.stop()
        process.exit(0)
    }
)
program.parse(process.argv)
export {}
