// miniprogram/pages/chuangzuo/chuangzuo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pic:"../images/资源 4.png",
    h:0
  },
  backward: function () {
    
    wx.navigateTo({
      url: '../index/index',
    })

  },
  /**
   * 生命周期函数--监听页面加载
   */
  start:function(){
    wx.navigateTo({
      url: '../journey/journey?pic='+this.data.pic,
    })
  },
  takePic:function(){
    var that = this
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        // tempFilePath可以作为img标签的src属性显示图片
        that.setData({
          pic: res.tempFilePaths[0]
        })
       
      }
      
    })
  },
  onLoad: function (options) {
    wx.showToast({
      title: '点击中间图片选择你的作品',
      icon: 'none',
      duration:3000
    })
    this.setData({
      h: wx.getSystemInfoSync().windowHeight
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

  }
})