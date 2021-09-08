const fs = require('fs')
const gitRevParse = require('./gitRevParse')
const { cosmiconfigSync } = require('cosmiconfig')
const { defaults } = require('./global')

import type { GitmarsConfigType } from 'typings'

/**
 * getConfig
 * @description 读取配置
 * @param {String} pathName 可传入目录或者文件，传入文件时，直接读取文件
 * @returns {Object} arr 返回配置对象
 */
export default function getConfig(pathName?: string, moduleName: string = 'gitmars'): GitmarsConfigType {
    let info
    if (!pathName) {
        let { root } = gitRevParse()
        try {
            pathName = root + '/gitmarsconfig.json'
            info = fs.statSync(pathName)
        } catch (err) {
            pathName = root
        }
    }
    const defaultSet = {
        skipCI: true
    }
    const explorer = cosmiconfigSync(moduleName)
    if (!info) info = fs.statSync(pathName)
    if (info.isDirectory()) {
        // 传入目录
        const { config = {}, filepath = '' } = explorer.search(pathName) || {}
        return Object.assign({}, defaults, defaultSet, config, { filepath })
    } else {
        // 传入文件
        const { config = {}, filepath = '' } = explorer.load(pathName) || {}
        return Object.assign({}, defaults, defaultSet, config, { filepath })
    }
}
