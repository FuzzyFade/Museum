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
  },

  showDetail: function () {
    this.setData({
      handleDetail: true
    })
  },

  home: function () {
    wx.navigateTo({
      url: '../index/index',
    })
  },

  all: function () {
    wx.navigateTo({
      url: '../cangpin/cangpin',
    })
  },

  handletouchend: function(event) {
    let currentY = event.changedTouches[0].pageY
    if ((currentY - this.data.lastY) < 0){
      console.log('上滑')
      this.showDetail()
    }
    this.setData({
      lastY: currentY
    })
  },

  handletouchtart: function(event) {
    this.setData({
      lastY: event.changedTouches[0].pageY
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      id:options.idx,
      cont:app.globalData.zhanpin,
      h: wx.getSystemInfoSync().windowHeight,
    })
    console.log(this.data.cont)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },
  
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})