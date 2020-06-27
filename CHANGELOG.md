# 2020.06.27 v1.2.5更新日志
1. 升级get/save指令，暂存区“绑定”git分支，新增高级用法
2. 修复config指令bug
3. 修复continue指令bug

# 2020.06.16 v1.2.4更新日志
1. 修复在node v14版本下的兼容问题
2. 修复包缺失BUG
3. 代码转ES5发布

# 2020.05.29 v1.2.2更新日志
1. 新增build指令调起Jenkins构建
2. combine和admin publish指令新增--build参数，在合并完代码时调起Jenkins构建
3. 构建配置从远程获取并缓存24小时，过期或者执行gitm clean后会自动重新请求配置
4. 优化代码结构，清理冗余操作，提升性能
5. 修复历史BUG

# 2020.05.21 v1.1.2更新日志
1. 修复permission偶尔判断不准确的问题（重要）

# 2020.05.19 v1.1.1更新日志
1. 增加clean指令用来清除gitmars缓存和配置文件
2. upgrade指令增加version参数支持升级指定版本

# 2020.05.19 v1.1.0更新日志
1. 新增permission指令，用来限制master分支直接提交的错误操作
2. 优化执行逻辑，允许在子目录运行gitm
3. 优化日志功能和执行时的输出信息，不再输出大段乱码

# 2020.05.15 v1.0.20更新日志
1.  修复copy指令BUG

# 2020.05.13 v1.0.19更新日志
1.  update指令新增--use-merge配置
2. admin指令--rebase配置调整为--use-rebase

# 2020.05.11 v1.0.18更新日志
1. copy指令去除关键词限制
2. 版本升级指令优化
3. 指令运行提示优化

# 2020.04.28 v1.0.17更新日志
1. combine指令新增--as-feature配置，bugfix分支特殊情况需要合并到release时，传入--as-feature

# 2020.04.17 v1.0.16更新日志
1. 优化消息提示

# 2020.04.08 v1.0.15更新日志
1. 优化指令
2. 新增支持postmsg的指令

# 2020.04.08 v1.0.14更新日志
1. combine指令合并support类型的分支时允许传入--no-bugfix不合并到bug分支
2. 新增postmsg开关
3. 优化指令执行消息提示

# 2020.04.02 v1.0.13更新日志
1. gitm branch支持设置与远程分支关联
2. 新增upgrade方法

# 2020.03.31 v1.0.12更新日志
1. start指令创建分支自动拉取最新代码

# 2020.03.27 v1.0.11更新日志
1. 更新bugfix和release分支支持强制使用传入代码或当前代码
2. 云之家推送消息支持模板配置。目前支持参数：message、time、project、pwd(执行目录)、user(本地配置的用户名)。默认模板：`${message}；项目：${project}；路径：${pwd}`

# 2020.03.25 v1.0.10更新日志
1. 加入了云之家消息推送
2. 切换分支判断有未加入版本的文件时不再阻止运行
3. admin方法优化

# 2020.03.22 v1.0.9更新日志
1. 调整admin合并策略
2. 修复部分Windows兼容问题

# 2020.03.18 v1.0.8更新日志
1. 新增对support分支支持

# 2020.03.08 v1.0.7更新日志
1. 优化gitm revert功能
2. 优化指令执行提示方式

# 2020.03.04 v1.0.6更新日志
1. admin新增clean指令，用于Jenkins构建时候清理分支
2. 更新readme

# 2020.03.02 v1.0.5更新日志
1. 新增continue和branch方法;
2. 改进执行执行主程序;
3. 加入log;
4. 改进copy功能;
5. 修改部分BUG;
6. 指令执行方法优化;
7. 代码优化;
8. 完善readme;
9. 完善end和start功能;
10. 完善admin功能：update、create、publish