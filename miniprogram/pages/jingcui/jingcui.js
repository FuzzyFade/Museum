// miniprogram/pages/jingcui/jingcui.js
const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:0,
    h:0,
    name:'',
    cont:[],

  },
  onPageScroll: function (ev) {
    var _this = this;
    //当滚动的top值最大或者最小时，为什么要做这一步是由于在手机实测小程序的时候会发生滚动条回弹，所以为了解决回弹，设置默认最大最小值   
    if (ev.scrollTop <= 0) {
      ev.scrollTop = 0;
    } else if (ev.scrollTop > wx.getSystemInfoSync().windowHeight) {
      ev.scrollTop = wx.getSystemInfoSync().windowHeight;
    }
    //判断浏览器滚动条上下滚动   
    if (ev.scrollTop > this.data.scrollTop || ev.scrollTop == wx.getSystemInfoSync().windowHeight) {
      console.log('向下滚动');
    } else {
      console.log('向上滚动');
    }
    //给scrollTop重新赋值    
    setTimeout(function () {
      _this.setData({
        scrollTop: ev.scrollTop
      })
    }, 0)
  },

  home: function () {

    wx.navigateTo({
      url: '../index/index',
    })

  },
  backward: function () {
    
    wx.navigateTo({
      url: '../cangpin/cangpin',
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
    // for (var i = 0; i < this.data.cont.length; i++) {
    //   var q = "cont[" + i + "].image"
    //   wx.cloud.downloadFile({
    //     fileID: this.data.cont[i].image,
    //     success: res => {
    //       // get temp file path

    //       that.setData({
    //         [q]: res.tempFilePath
    //       })

    //     },
    //   })
    // }
    


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