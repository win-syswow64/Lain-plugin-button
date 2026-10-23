// @requiredPlugin earth-k-plugin
export default class Button {
    constructor () {
      this.plugin = {
      requiredPlugin: 'earth-k-plugin',
        name: '土块点歌',
        dsc: '土块点歌',
        priority: 1102,
        rule: [
            {
                reg: /^(?:#?(?:点歌|播放)\s*.*|#?听\s*\d+|\d+)$/,
                fnc: 'shareMusic'
            },
        ]
      }
    }
    shareMusic (e) {
    const button = [
      [
        { label: `点歌`, data: `/点歌`, style: 1  },
        { label: `听`, data: `/听`, style: 4  },
      ]
    ]
    return Bot.Button(button)
  }
}
