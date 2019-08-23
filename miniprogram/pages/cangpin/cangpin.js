// miniprogram/pages/chuangzuo/chuangzuo.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    zhanpin:[],
    len:0,
    navigationBarHeight: (wx.getSystemInfoSync().statusBarHeight + 48) + 'px',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this
    that.setData({
      zhanpin:app.globalData.zhanpin,
      len:app.globalData.zhanpin.length
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  detail:function(e){
    wx.navigateTo({
      url: '../jingcui/jingcui?idx='+e.currentTarget.id,
    })
  },
  firstDetail:function(e){
    wx.navigateTo({
      url: '../jingcui/jingcui?idx=0',
    })
  },
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