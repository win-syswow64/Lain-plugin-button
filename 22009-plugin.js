// @requiredPlugin 22009-plugin

/** 来自 button/22009dau按钮.js；与 Lain 的 #QQBotDAU 统计入口分开。 */
export default class StatisticsButtons {
  constructor () {
    this.plugin = {
      name: '22009 统计按钮',
      requiredPlugin: '22009-plugin',
      priority: 1000,
      rule: [{ reg: /^#?(功能统计|身份数量|用户数量|dau)$/i, fnc: 'statistics' }]
    }
  }

  statistics () {
    return Bot.Button([[
      { label: '日活', callback: 'dau' },
      { label: '功能统计', callback: '#功能统计' },
      { label: '用户数量', callback: '#用户数量' },
      { label: '身份数量', callback: '#身份数量' }
    ]])
  }
}
