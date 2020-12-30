var app = getApp;

//云数据库初始化
const db = wx.cloud.database({});
const cont = db.collection('bwl');


Page({

  /**
   * 页面的初始数据
   */
  data: {
    
    showModalStatus: false,  //下方弹出层 初始值：false
    animationData: '', 
    open: false,   //左侧边菜单栏 初始值:false
    bei:[],
   },

 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this; 
    const db = wx.cloud.database({    
      env: 'note-2g7n6ssj6b1d09fc'
    }) 
    db.collection('bwl').get({   
      success: res => {
        console.log(res.data)    
        this.setData({
          bei: res.data
        })
      }
    })
    },    
  
  /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
  onPullDownRefresh: function () {
    wx.showToast({
      title: '正在刷新数据...',
      icon: 'loading',
      duration: 10
    });
    this.setData({ fabus: [] });//先清空数据
    this.loadIndex();//再重新加载数据
    wx: wx.stopPullDownRefresh();//停止刷新操作
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
