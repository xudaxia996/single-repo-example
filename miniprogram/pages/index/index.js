var app = getApp
Page({

  /**
   * 页面的初始数据
   */
  data: {
   },
 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {

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

//订阅消息授权//
Page({//获取授权的点击事件
  shouquan(){
    wx.requestSubscribeMessage({
      tmplIds:['JS4RkICmld_neTq4_GpIBbAxK-uFTtfmAbAh_Ec8cI0'],
      success(res){
        console.log('授权成功',res)
      },
      fail(res){
        console.log('授权失败',res)
      }
    })
  }
})

//获取用户的openid
getOpenid();{
  wx.cloud.callFunction({
    name:"getopenid"
  }).then(res=>{
    let openid=res.result.openid
    console.log("获取用户openid成功",openid)
    this.send(openid)
  }).catch(res=>{
    console.log("获取openID失败",res)
  })
}
//发送模板消息到指定用户，推送之前要先获得用户的openid
send(openid);{
  wx.cloud.callFunction({
    name:"sendMsg",
    data:{
      openid:openid
    }
  }).then(res=>{
    console.log("推送消息成功",res)
  }).catch(res=>{
    console.log("推送消息失败",res)
  })
}
})