// pages/userConsole/userConsole.js
Page({

  data: {
    openid: '',
    imgs: [
      {
        url: '../images/玻璃艺术封面.jpg',
        index: 0,
        name: "欧洲玻璃艺术史珍品展",
        time: "2019年3月26日-6月14日",
        location: "河南省博物院西配楼"
      },

      {
        url: '../images/金猪拱福.png',
        index: 1,
        name: "金猪拱福-己亥猪年新春生肖文物图片联展",
        time: "2018年1月29日-3月20日",
        location: "河南省博物院东临展厅"
      },
      {
        url: '../images/骏犬啸天封面.jpg',
        index: 2,
        name: "骏犬啸天-戊戌狗年新春生肖文物图片联展",
        time: "2019年1月29日-3月20日",
        location: "河南省博物院东临展厅"
      }
    ],
    indicatorDots: false,
    autoplay: true,
    interval: 5000,
    duration: 500,
    current: 0,

    exhibitState: true,
    reviewState: false
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

  onLoad: function (options) {
    this.setData({
      openid: getApp().globalData.openid
    });
    wx.loadFontFace({
      family: 'SerifSC',
      source: 'url("https://fonts.googleapis.com/css?family=Noto+Serif+SC&display=swap&subset=chinese-simplified")'
    })
  }
})