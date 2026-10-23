// @requiredPlugin example
import fs from 'node:fs'

// 原按钮依赖 YunZai/plugins/example/QQbot禁言.js，不是 Lain 的禁言测试命令。
const mutePlugin = new URL('../../../example/QQbot禁言.js', import.meta.url)
const number = String.raw`[零一壹二两三四五六七八九十百千万亿\d]+`
const unit = '(?:分钟|小时|星期|秒|分|时|天|日|周|月|年)'

export default class ExamplePluginButtons {
  constructor () {
    this.plugin = {
      name: 'example 群禁言按钮',
      requiredPlugin: 'example',
      priority: 1102,
      rule: [
        { reg: new RegExp(String.raw`^#?禁言\s*(${number})?个?${unit}?$`), fnc: 'mute' },
        { reg: /^#?解禁(\d+)?$/, fnc: 'mute' },
        { reg: /^#?全(体|员)(禁言|解禁)$/, fnc: 'mute' },
        { reg: /^#?(获取|查看)?禁言列表$/, fnc: 'mute' },
        { reg: /^#?解除全部禁言$/, fnc: 'mute' },
        { reg: new RegExp(`^#?我要(自闭|禅定)(${number})?个?${unit}?$`), fnc: 'mute' }
      ]
    }
  }

  mute (e) {
    // example 目录通常一直存在，还需确认实际处理这些命令的脚本已安装。
    if (!e.group_id || !fs.existsSync(mutePlugin)) return false
    return Bot.Button([
      [
        { label: '禁言', data: '/禁言', admin: true },
        { label: '解禁', data: '/解禁', admin: true }
      ],
      [{ label: '我要自闭', data: '/我要自闭' }]
    ])
  }
}
