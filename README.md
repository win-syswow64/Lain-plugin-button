# Lain-plugin-button

Lain-plugin 的独立 QQBot 按钮仓库，安装位置为 Lain-plugin/plugins/button。
每个目标插件对应一个顶层扩展文件；个人自定义扩展放在 example/，支持子目录和热更新。
未安装 requiredPlugin 指定的插件时跳过对应扩展。

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

