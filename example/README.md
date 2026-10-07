# 自定义按钮

这里可以放任何符合 Lain-plugin 按钮接口的自定义扩展，也可以创建子目录。
加载器递归加载 example 下的 `.js` 文件，新增、修改、删除均会热更新。
隐藏目录、隐藏文件和 node_modules 不会被加载。

复制 demo.js，修改 plugin.rule 的匹配命令及按钮方法即可。
每个文件须默认导出一个类，类实例须包含 plugin.rule、数字 priority，
以及每条规则 fnc 对应的方法。可选 requiredPlugin 声明所需插件。
data 是输入按钮，callback 是回调按钮，link 是网页按钮。

个人文件默认被按钮仓库的 .gitignore 排除，本体更新和按钮 git pull 都不会覆盖它们。
需要发布自己的扩展时，可在本仓库中使用 git add -f example/你的文件.js，
或在 example 子目录创建另一个独立 Git 仓库。

这些是按钮扩展文件，不是 YunZai 消息插件：执行消息命令的插件仍安装到 YunZai/plugins。
发送 #自定义按钮示例，匹配 demo.js 并显示底部按钮；回复由已有消息插件提供。
