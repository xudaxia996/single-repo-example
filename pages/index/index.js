var app = getApp
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
    showModalStatus: false,  //下方弹出层 初始值：false
    animationData: '', 
    open: false,   //左侧边菜单栏 初始值:false
    bei: [
      {
        title: '去北湖南路拿快递',
        recordtime: '12月2日',
        remindtime: '12月5日 12：00',
        isCollect: false, // 备忘录收藏功能：默认没有收藏
      },
      {
        title: '完成金工实习报告',
        recordtime: '12月2日',
        remindtime: '12月4日 20：00',
        isCollect: false, // 备忘录收藏功能：默认没有收藏
      },
      {
        title: '完成毛概论文',
        recordtime: '12月5日',
        remindtime: '12月31日 20：00',
        isCollect: false, // 备忘录收藏功能：默认没有收藏
      },

    ],


   },


 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {

    },

  // 左侧菜单栏事件
  onChange(e) {
    var that = this;
    that.setData({
      open: !that.data.open
    })
  },

  // 点击收藏事件
  toCollect: function (res) {
    var fav_id = res.currentTarget.dataset.index; //获取备忘录定位
    var bol = this.data.bei[fav_id].isCollect;

    this.setData({
      [`bei[${fav_id}].isCollect`]: !bol  // 改变状态
    })

  },

   // 显示遮罩层
  showModal: function () {
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "ease-in-out",
      delay: 0
    })
    this.animation = animation
    animation.translateY(500).step()
    this.setData({
      animationData: animation.export(),
      showModalStatus: true
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationData: animation.export()
      })
    }.bind(this), 200)
  },

  // 隐藏弹出层
  hideModal: function () {
    this.setData({
      showModalStatus: false,
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
    
  },

})