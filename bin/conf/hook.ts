import type { GitmarsOptionType } from '../../typings'

const cmdConfig: GitmarsOptionType = {
    command: 'hook',
    short: 'hk',
    args: [
        {
            required: false,
            name: 'command',
            variadic: false
        },
        {
            required: false,
            name: 'args',
            variadic: true
        }
    ],
    options: [
        {
            flags: '--no-verify',
            required: false,
            optional: false,
            variadic: false,
            mandatory: false,
            long: '--no-verify',
            negate: true,
            description: '是否需要跳过校验权限',
            defaultValue: false
        },
        {
            flags: '--latest [latest]',
            required: false,
            optional: false,
            variadic: false,
            mandatory: false,
            short: '',
            long: '--latest',
            negate: false,
            description: '查询在某个时间之后的日志，填写格式：10s/2m/2h/3d/4M/5y',
            defaultValue: '7d'
        },
        {
            flags: '--limit [limit]',
            required: false,
            optional: false,
            variadic: false,
            mandatory: false,
            short: '',
            long: '--limit',
            negate: false,
            description: '最多查询的日志条数',
            defaultValue: 20
        },
        {
            flags: '-t, --type <type>',
            required: true,
            optional: false,
            variadic: false,
            mandatory: false,
            short: '-t',
            long: '--type',
            negate: false,
            description: '检测类型',
            defaultValue: ''
        },
        {
            flags: '--branch [branch]',
            required: false,
            optional: false,
            variadic: false,
            mandatory: false,
            short: '',
            long: '--branch',
            negate: false,
            description: '要查询的分支',
            defaultValue: ''
        }
    ]
}

module.exports = cmdConfig