// pages/addFunction/addFunction.js
const app=getApp()
Page({

  data: {
    id:0,
    cont:[],
  },

  onLoad: function (options) {
    this.setData({
      id:options.idx,
      cont:app.globalData.zhanpin,
      h: wx.getSystemInfoSync().windowHeight,
    })
  },

})

