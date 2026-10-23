# Lain-plugin-button

Lain-plugin 的独立 QQBot 按钮仓库，安装位置为 Lain-plugin/plugins/button。
每个目标插件对应一个顶层扩展文件；个人自定义扩展放在 example/，支持子目录和热更新。
未安装 requiredPlugin 指定的插件时跳过对应扩展。

远程仓库：https://github.com/win-syswow64/Lain-plugin-button

本目录有自己的 Git 历史，Lain-plugin 本体不跟踪这里的文件。
修改按钮不会阻塞本体更新，两个仓库分别提交、分别更新。
首次启动时，本体使用 resources/button.bundle 初始化按钮仓库，不依赖联网。
已有按钮仓库不会被本体更新或启动时的初始化覆盖。

```bash
# 在 Lain-plugin 目录查看或提交按钮改动
 git -C plugins/button status
 git -C plugins/button add 你的按钮.js
 git -C plugins/button commit -m "修改按钮"

# 单独更新按钮库（保留个人改动；有已跟踪文件冲突时由 Git 提示）
 git -C plugins/button pull --ff-only

# 如需使用自己的按钮分支，修改独立仓库的远程
 git -C plugins/button remote set-url origin <你的按钮仓库Git地址>
```

新按钮文件在顶层默认被忽略，可使用 git add -f 文件名.js 发布。
example 中个人文件默认忽略，详见 example/README.md。
完整接口和示例见 Lain-plugin/docs/QQBot-Buttons.md。

## 合入参考按钮

已将本地 `button/` 参考仓库中缺少的按钮与适用改进整理到本仓库，详情见 [合并说明](MERGE-NOTES.md)。按钮按功能所属插件归入已有文件，不重复加载一套同名规则。

- `22009-plugin.js`：日活、功能统计、用户数量和身份数量；未安装 `22009-plugin` 时跳过。
- `archive-earth-k-plugin.js`：点歌、播放、听歌及数字选曲；未安装 `earth-k-plugin` 时跳过。
- `xiaoyao-cvs-plugin.js`：社区签到改为全部游戏签到，账号与刷新 CD 页补充原神、星铁抽卡更新入口；清理重复方法并修正带空格参数的规则。
- `miao-plugin.js`：帮助按钮明确按行排列，保留目标库原有的动态面板角色读取及 `*` 前缀支持。
- `example.js`：为 `YunZai/plugins/example/QQbot禁言.js` 提供群禁言输入按钮。缺少该脚本或在私聊中时不显示；禁言、解禁按钮限制管理员点击。它只提供按钮，不安装或执行禁言功能。

`example/repeat-command.js.example` 是整理后的通用“+1”模板，默认不加载。如需启用，复制为 `example/repeat-command.js`，它只会在更高优先级的按钮均未返回结果时提供命令重试按钮；不会把原来“底线按钮”返回的 `true` 当成有效键盘。自定义副本仍被 Git 忽略。
