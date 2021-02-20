;(function (root) {
    const cmdConfig = {
        command: 'branch',
        short: 'bh',
        args: [],
        options: [
            {
                flags: '-k, --key [keyword]',
                required: false,
                optional: true,
                variadic: false,
                mandatory: false,
                short: '-k',
                long: '--key',
                negate: false,
                description: '查询分支的关键词',
                defaultValue: null
            },
            {
                flags: '-r, --remote',
                required: false,
                optional: false,
                variadic: false,
                mandatory: false,
                short: '-r',
                long: '--remote',
                negate: false,
                description: '是否查询远程分支（这个参数不用于删除分支）默认只查询本地',
                defaultValue: false
            },
            {
                flags: '-t, --type [type]',
                required: false,
                optional: true,
                variadic: false,
                mandatory: false,
                short: '-t',
                long: '--type',
                negate: false,
                description: '查询分支的类型，共有3种：feature、bugfix、support，不传则查询全部',
                defaultValue: null
            },
            {
                flags: '-d, --delete [branch]',
                required: false,
                optional: true,
                variadic: false,
                mandatory: false,
                short: '-d',
                long: '--delete',
                negate: false,
                description: '删除分支',
                defaultValue: null
            },
            {
                flags: '-D, --forcedelete [branch]',
                required: false,
                optional: true,
                variadic: false,
                mandatory: false,
                short: '-D',
                long: '--forcedelete',
                negate: false,
                description: '强行删除分支',
                defaultValue: null
            },
            {
                flags: '-u, --upstream [upstream]',
                required: false,
                optional: true,
                variadic: false,
                mandatory: false,
                short: '-u',
                long: '--upstream',
                negate: false,
                description: '设置与远程分支关联'
            }
        ]
    }

    /* istanbul ignore next */
    if (typeof exports === 'object' && typeof module === 'object') module.exports = cmdConfig
    // else if (typeof define === 'function' && define.amd) define(['cmdConfig'], () => cmdConfig)
    else if (typeof exports === 'object') exports['cmdConfig'] = cmdConfig
    else root['cmdConfig'] = cmdConfig
})(typeof window !== 'undefined' ? window : global)
