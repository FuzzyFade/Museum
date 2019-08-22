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
    lastX: 0,
    navigationBarHeight: (wx.getSystemInfoSync().statusBarHeight + 46) + 'px'
  },

  showDetail() {
    this.setData({
      handleDetail: true
    })
  },

  closeDetail() {
    this.setData({
      handleDetail: false
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

  next() {
    const id = parseInt(this.data.id)
    id <= 13 ?
    wx.navigateTo({
      url: `../jingcui/jingcui?idx=${id + 1}`,
    }) :
    wx.navigateTo({
      url: `../jingcui/jingcui?idx=0`,
    })
  },

  back() {
    const id = parseInt(this.data.id)
    id > 0 ?
    wx.navigateTo({
      url: `../jingcui/jingcui?idx=${id - 1}`,
    }) :
    wx.navigateTo({
      url: `../jingcui/jingcui?idx=14`,
    })
  },

  handletouchend(event) {
    let currentX = event.changedTouches[0].pageX
    let currentY = event.changedTouches[0].pageY
    let xc = currentX - this.data.lastX
    let yc = currentY - this.data.lastY
    if (Math.abs(xc) > Math.abs(yc)){
      if (xc < 0){
        this.next()
      }
      if (xc > 0){
        this.back()
      }
    }else{
      if (yc < 0){
        this.showDetail()
      }
    }
    this.setData({
      lastX: currentX,
      lastY: currentY
    })
  },

  handletouchtart(event) {
    this.setData({
      lastX: event.changedTouches[0].pageX,
      lastY: event.changedTouches[0].pageY
    })
  },

  onLoad(options) {
    this.setData({
      id:options.idx,
      cont:app.globalData.zhanpin,
      h: wx.getSystemInfoSync().windowHeight,
    })
  }
})