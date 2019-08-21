// components/navigationBar/navigationBar.js
const app = getApp()

Component({
  properties: {
    text: {
      type: String,
      value: 'Wechat'
    },
    back: {
      type: Boolean,
      value: false
    },
  },
  data: {
    statusBarHeight: wx.getSystemInfoSync().statusBarHeight + 'px',
    navigationBarHeight: (wx.getSystemInfoSync().statusBarHeight + 46) + 'px'
  },

  methods: {
    back: function () {
      wx.navigateBack({
        delta: 1
      })
    }
  }
})