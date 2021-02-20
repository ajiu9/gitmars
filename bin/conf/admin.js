;(function (root) {
    const cmdConfig = {
        command: 'admin',
        short: null,
        create: {
            command: 'create',
            short: null,
            args: [
                {
                    required: true,
                    name: 'type',
                    variadic: false,
                    description: '分支类型'
                }
            ],
            options: []
        },
        publish: {
            command: 'publish',
            short: null,
            args: [
                {
                    required: true,
                    name: 'type',
                    variadic: false,
                    description: '分支类型'
                }
            ],
            options: [
                {
                    flags: '-c, --combine',
                    required: false,
                    optional: false,
                    variadic: false,
                    mandatory: false,
                    short: '-c',
                    long: '--combine',
                    negate: false,
                    description: '是否把release代码同步到bug',
                    defaultValue: false,
                    recommend: false
                },
                {
                    flags: '--use-rebase',
                    required: false,
                    optional: false,
                    variadic: false,
                    mandatory: false,
                    long: '--use-rebase',
                    negate: false,
                    description: '是否使用rebase方式更新，默认merge',
                    defaultValue: false,
                    recommend: false
                },
                {
                    flags: '-p, --prod',
                    required: false,
                    optional: false,
                    variadic: false,
                    mandatory: false,
                    short: '-p',
                    long: '--prod',
                    negate: false,
                    description: '发布bug分支时，是否合并bug到master',
                    defaultValue: false,
                    recommend: false
                },
                {
                    flags: '-b, --build [build]',
                    required: false,
                    optional: true,
                    variadic: false,
                    mandatory: false,
                    short: '-b',
                    long: '--build',
                    negate: false,
                    description: '构建应用',
                    recommend: true
                },
                {
                    flags: '--postmsg',
                    required: false,
                    optional: false,
                    variadic: false,
                    mandatory: false,
                    long: '--postmsg',
                    negate: false,
                    description: '发送消息',
                    defaultValue: false,
                    recommend: false
                }
            ]
        },
        update: {
            command: 'update',
            short: null,
            args: [{ required: true, name: 'type', variadic: false, description: '分支类型' }],
            options: [
                {
                    flags: '--use-rebase',
                    required: false,
                    optional: false,
                    variadic: false,
                    mandatory: false,
                    long: '--use-rebase',
                    negate: false,
                    description: '是否使用rebase方式更新，默认merge',
                    defaultValue: false,
                    recommend: false
                },
                {
                    flags: '-m, --mode [mode]',
                    required: false,
                    optional: true,
                    variadic: false,
                    mandatory: false,
                    short: '-m',
                    long: '--mode',
                    negate: false,
                    description: '出现冲突时，保留传入代码还是保留当前代码；1=采用当前 2=采用传入；默认为 0=手动处理。本参数不可与--use-rebase同时使用',
                    defaultValue: 0,
                    recommend: false
                },
                {
                    flags: '--postmsg',
                    required: false,
                    optional: false,
                    variadic: false,
                    mandatory: false,
                    long: '--postmsg',
                    negate: false,
                    description: '发送消息',
                    defaultValue: false,
                    recommend: false
                }
            ]
        },
        clean: {
            command: 'clean',
            short: null,
            args: [
                {
                    required: true,
                    name: 'type',
                    variadic: false,
                    description: '分支类型'
                }
            ],
            options: []
        }
    }

    /* istanbul ignore next */
    if (typeof exports === 'object' && typeof module === 'object') module.exports = cmdConfig
    // else if (typeof define === 'function' && define.amd) define(['cmdConfig'], () => cmdConfig)
    else if (typeof exports === 'object') exports['cmdConfig'] = cmdConfig
    else root['cmdConfig'] = cmdConfig
})(typeof window !== 'undefined' ? window : global)
