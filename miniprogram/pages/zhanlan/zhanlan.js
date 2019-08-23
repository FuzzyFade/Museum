// pages/userConsole/userConsole.js
const db = wx.cloud.database()
const app = getApp()
Page({
  data: {
    navigationBarHeight: (wx.getSystemInfoSync().statusBarHeight + 48) + 'px',
    width: wx.getSystemInfoSync().windowWidth,
    list: [],
    indicatorDots: false,
    autoplay: true,
    interval: 5000,
    duration: 500,
    current: 0,

    exhibitState: true,
    reviewState: false
  },

  detail:function(e){
    wx.navigateTo({
      url: '../detail/detail?idx='+e.currentTarget.id,
    })
  },

  previous: function () {
    wx.navigateBack({})
  },

  review: function () {
    this.setData({
      exhibitState: false,
      reviewState: true
    })
  },

  exhibit: function () {
    this.setData({
      exhibitState: true,
      reviewState: false
    })
  },

  onItemChange: function(e) {
    this.setData({
      current: e.detail.current
    })
  },

  home() {
    wx.navigateTo({
      url: '../index/index',
    })
  },

  onLoad: function (options) {
    this.setData({
      list: app.globalData.list
    })
  }
})