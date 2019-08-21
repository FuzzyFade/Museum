// miniprogram/pages/journey/journey.js
const ctx = wx.createCanvasContext('canv')
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
    itemList: [{ id: 1, image: '1.png',//图片地址            
    top: 100,//初始图片的位置             
    left: 100,            
    x: 155, //初始圆心位置，可再downImg之后又宽高和初始的图片位置得出            
    y: 155,            
    scale: 1,//缩放比例  1为不缩放            
    angle: 0,//旋转角度            
    active: false //判定点击状态        
    }, {            
      id: 2,            
      image: '2.png',            
      top: 50,            
      left: 50,            
      x: 155,            
      y: 155,            
      scale: 1,            
      angle: 0,            
      active: false        
    }],
    start:true,
    cur: "",
    pic:"",
    tiezhi: [],
    h:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  finish:function(){
    ctx.drawImage(this.data.image,0,0,750,440)
    ctx.drawImage(this.data.cur, 0, 10, 200, 200)
    
    wx.navigateTo({
      url: '../share/share',
    })
  },
  del:function(){
    this.setData({
      cur:"",
      start:true
    })
  },
  onLoad: function (options) {
    this.setData({
      pic:options.pic,
        h: wx.getSystemInfoSync().windowHeight
   
    })
    var that = this
    var tmp=[]
    for (var i = 1; i <= 8; i++) {
          
          wx.cloud.downloadFile({
            fileID: 'cloud://henanmuseum-y6gep.6865-henanmuseum-y6gep/tie/'+i+'.png',
            success: res => {
              // get temp file path

              tmp.push(res.tempFilePath)
              that.setData({
                tiezhi: tmp
              })
              console.log(that.data.tiezhi)
            },
          })
          
        }
      
    
  },
  backward:function(){
    wx.navigateTo({
      url: '../chuangzuo/chuangzuo',
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  detail:function(e){
    this.setData({
      cur:e.currentTarget.id,
      start:false
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