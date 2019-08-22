//index.js
//获取应用实例
const app = getApp()
const db = wx.cloud.database()
Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    logo:'',
    h:0,
  },


  //事件处理函数
  chuangzuo: function () {
    wx.navigateTo({
      url: '../chuangzuo/chuangzuo'
    })
  },
  zhanlan: function () {
    wx.navigateTo({
      url: '../zhanlan/zhanlan'
    })
  },
  onLoad: function () {
    db.collection("cangbaoge").get({
      success:res => {
        app.globalData.zhanpin = res.data
      }
    })
    var that =this
    this.setData({
      h: wx.getSystemInfoSync().windowHeight
    })

    wx.cloud.downloadFile({
      fileID: 'cloud://henanmuseum-y6gep.6865-henanmuseum-y6gep/logo.png',
      success:function(res){
        that.setData({
          logo:res.tempFilePath
        })
      }
    })
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  cangbao:function(e){
    wx.navigateTo({
      url: '../jingcui/jingcui?idx=0',
    })
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  onShareAppMessage:function(){
    
  }
})
