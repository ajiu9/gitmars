import { statSync } from 'fs'
import { cosmiconfigSync } from 'cosmiconfig'
import type { GitmarsConfigType } from '../typings'
import getGitRevParse from '#lib/git/getGitRevParse'
import { debug } from '#lib/utils/debug'
import echo from '#lib/utils/echo'
import i18n from '#lib/locales/index'

const defaults = {
    master: 'master',
    develop: 'dev',
    release: 'release',
    bugfix: 'bug',
    support: 'support',
    user: '',
    email: '',
    nameValidator: '',
    descriptionValidator: '',
    msgTemplate: i18n.__('${message}; project: ${project}; path: ${pwd}'),
    msgUrl: '',
    apolloConfig: '',
    hooks: '',
    api: '',
    gitHost: '',
    gitID: ''
}

/**
 * 读取配置
 *
 * @param pathName - 可传入目录或者文件，传入文件时，直接读取文件
 * @param moduleName - 包名称
 * @returns config - 返回配置对象
 */
function getConfig(
    pathName?: string,
    moduleName = 'gitmars'
): GitmarsConfigType {
    let info
    if (!pathName) {
        const { root } = getGitRevParse()
        if (!root) {
            echo('当前目录不是git项目目录')
            process.exit(1)
        }
        try {
            pathName = root + '/gitmarsconfig.json'
            info = statSync(pathName)
        } catch (err) {
            pathName = root
        }
    }
    debug('getConfig', pathName, info)
    const defaultSet = {
        skipCI: true
    }
    const explorer = cosmiconfigSync(moduleName)
    if (!info) info = statSync(pathName)
    if (info.isDirectory()) {
        // Importing a directory
        const { config = {}, filepath = '' } = explorer.search(pathName) || {}
        debug('getConfig-config', config, filepath)
        return Object.assign({}, defaults, defaultSet, config, { filepath })
    } else {
        // Importing a file
        const { config = {}, filepath = '' } = explorer.load(pathName) || {}
        debug('getConfig-config', config, filepath)
        return Object.assign({}, defaults, defaultSet, config, { filepath })
    }
}

export default getConfig
