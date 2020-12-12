// pages/commit_job/commit_job.js
const util = require('../../utils/util.js')
Page({
  
  /**
   * 页面的初始数据
   */
  data: {
      title:"",
      ddl:"",
      time:"",
      value:"",
      time_detail:"",
      urge:"",
      remind:"",
      memoLists:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    var that = this;

    try {
      var value = wx.getStorageSync('memoLists')
      if (value) {
        that.setData({
           memoLists: value
        })
      }
    } catch (e) {}
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
  back:function(){
    wx.navigateBack({ delta:1 })
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

  },
  // 获取备忘录标题
  memotitle: function(e){
    this.setData({
      title: e.detail.value
    })  
  },
  getMemoValue: function(e) {
    this.setData({
      value: e.detail.value
    })
  },
  bindTimeChange: function (e) {
    this.setData({
      time_detail: e.detail.value
    })
  },
  bindDateChange: function (e) {
    this.setData({
      ddl: e.detail.value
    })
  },
  bindchange_0: function (e) {
    this.setData({
      urge: e.detail.value
    })
  },
  bindchange_1: function (e) {
    this.setData({
      remind: e.detail.value
    })
  },
  saveMemo: function(){
    var that = this;
    var stamp = +new Date();  //获取时间戳
    var time = util.format(stamp);  // 转换成标准时间格式
    var title = that.data.title;
    var memo_value = that.data.value;
    var time_detail = that.data.time_detail;
    var ddl = that.data.ddl;
  
    if (title == '' || ddl=='' || time_detail==''||value==''){
      wx.showToast({
        title: '请填写完整信息',
        icon: 'none',
        duration: 1000
      })
    }
    // else if (memo_value == '' ){
    //   wx.showToast({
    //     title: '请输入内容',
    //     icon: 'none',
    //     duration: 1000
    //   })
    // }
    else{

      that.data.memoLists.unshift({ "title": title ,"ddl":ddl,"time_detail":time_detail,"value":value});
      
      try {
        wx.setStorageSync('memoLists', that.data.memoLists)
      } catch (e) {
        wx.showToast({
          title: '保存失败',
          icon: 'error',
          duration: 2000
        })
      }
      wx.redirectTo({
        url: '/pages/index/index'
      })
      
    }
    
  }
})