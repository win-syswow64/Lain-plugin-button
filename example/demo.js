/** 发送 #自定义按钮示例 查看；可以复制到任意 example 子目录后修改。 */
export default class CustomButtonExample {
  constructor () {
    this.plugin = {
      name: '自定义按钮示例',
      priority: 100,
      rule: [{ reg: '^#自定义按钮示例$', fnc: 'buttons' }]
    }
  }

  buttons () {
    return [{ type: 'button', data: [[
      { label: '填写 UID', data: '/绑定' },
      { label: '回调测试', callback: '#回调按钮测试 已点击' },
      { label: '项目主页', link: 'https://github.com/win-syswow64/Lain-plugin' }
    ]] }]
  }
}
