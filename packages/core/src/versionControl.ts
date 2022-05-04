import sh from 'shelljs'
import { green, red } from 'colors'
import { version } from '../package.json'
import getPkgInfo from './utils/getPkgInfo'
import { debug } from './utils/debug'

/**
 * 判断是否需要升级版本
 *
 * @returns isNeedUpgrade 返回是/否
 */
export async function isNeedUpgrade(): Promise<boolean> {
    const { 'dist-tags': tags, versions } = await getPkgInfo()
    debug('tags-versions', tags, versions)
    // let compareVers = []
    if (version.indexOf('1.') === 0) {
        // compareVers = versions.filter(
        //     (item: string) => /^1\./.test(item) && !item.match(/[a-z]+/g)
        // )
        // // 有落后middle以上的版本需要更新版本
        // for (let ver of versions) {
        //     if (/^1\./.test(ver) && parseFloat(ver) > parseFloat(ver)) {
        //         return true
        //     }
        // }
        // return false
        return parseFloat(tags.lite) > parseFloat(version)
    }
    return parseFloat(tags.latest) > parseFloat(version)
}

/**
 * 升级版本提示
 */
export function upgradeGitmars() {
    sh.echo(
        red('检测到你的版本比较古老，为避免版本碎片化问题，请升级之后再使用!') +
            green(
                '\nMac用户升级方法：sudo gitm upgrade latest -m -c npm\nWindows用户使用PowerShell或CMD：gitm upgrade lite -m -c npm.cmd'
            )
    )
    process.exit(1)
}

export default {
    isNeedUpgrade,
    upgradeGitmars
}