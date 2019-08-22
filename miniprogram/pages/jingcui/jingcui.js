// miniprogram/pages/jingcui/jingcui.js
const app=getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    id: 0,
    cont: [],
    handleDetail: false,
    lastY: 0,
    navigationBarHeight: (wx.getSystemInfoSync().statusBarHeight + 46) + 'px'
  },

  showDetail() {
    this.setData({
      handleDetail: true
    })
  },

  home() {
    wx.navigateTo({
      url: '../index/index',
    })
  },

  all() {
    wx.navigateTo({
      url: '../cangpin/cangpin',
    })
  },

  handletouchend(event) {
    let currentY = event.changedTouches[0].pageY
    if ((currentY - this.data.lastY) < 0){
      console.log('上滑')
      this.showDetail()
    }
    this.setData({
      lastY: currentY
    })
  },

  handletouchtart(event) {
    this.setData({
      lastY: event.changedTouches[0].pageY
    })
  },

  onLoad(options) {
    this.setData({
      id:options.idx,
      cont:app.globalData.zhanpin,
      h: wx.getSystemInfoSync().windowHeight,
    })
    console.log(this.data.cont)
  }
})