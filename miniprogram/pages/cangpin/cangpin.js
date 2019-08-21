// miniprogram/pages/chuangzuo/chuangzuo.js
const db = wx.cloud.database()
const app =getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    zhanpin:[],
    len:0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this
    that.setData({
      h: wx.getSystemInfoSync().windowHeight,
      
    })
    db.collection("cangbaoge").get({
      success:res=>{
        that.setData({
          zhanpin:res.data,
          len:res.data.length
        })
        
        
        for (var i =0;i<res.data.length;i++){
          var q="zhanpin["+i+"].image"
          wx.cloud.downloadFile({
            fileID:res.data[i].image,
            success: res => {
              // get temp file path
              
              that.setData({
                [q]:res.tempFilePath
              })
              
            },
          })

        }
        app.globalData.zhanpin = that.data.zhanpin
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  
  detail:function(e){
    var that=this
    wx.navigateTo({
      url: '../jingcui/jingcui?idx='+e.currentTarget.id,
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