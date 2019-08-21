// miniprogram/pages/share/share.js
var util = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    time:'',
    h:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  home: function () {

    wx.navigateTo({
      url: '../index/index',
    })

  },
  backward: function () {
    
    wx.navigateTo({
      url: '../journey/journey',
    })

  },
  onLoad: function (options) {
      this.setData({
        
          h: wx.getSystemInfoSync().windowHeight,
        
        time:util.formatTime(new Date())
      })
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
    return {
      title: "探索中原",
      
     
    }
  }
})