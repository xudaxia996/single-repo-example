//index.js
//获取应用实例
/*import plugin from '../../wx_calendar-master/src/component/v2/plugins/index.js'
import todo from '../../wx_calendar-master/src/component/v2/plugins/todo.js'
import selectable from '../../wx_calendar-master/src/component/v2/plugins/selectable.js'
import solarLunar from '../../wx_calendar-master/src/component/v2/plugins/solarLunar/index.js'
plugin
  .use(todo)
  .use(solarLunar)
  .use(selectable)
const app = getApp()


Page({
  clickme02: function() { 
    wx.navigateTo({ url:'../commit_job/commit_job' })
  },
  
  data: {
    time: (new Date()).toString(),
    array:[1,2,3],
    inputShowed: false,
    inputVal: "",
    motto: 'Yukee',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  showInput: function () {
    this.setData({
        inputShowed: true
    });
},
hideInput: function () {
    this.setData({
        inputVal: "",
        inputShowed: false
    });
},
clearInput: function () {
    this.setData({
        inputVal: ""
    });
},
inputTyping: function (e) {
    this.setData({
        inputVal: e.detail.value
    });
},
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
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
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})*/


var app = getApp()
Page({
  data:{
    addtel : ''
  },
  onShow:function(){
  var that = this;
  wx.getStorage({
   key: 'addTel',
   success: function(res) {
     console.log(res.data)
     that.setData({
      addtel:res.data
     })
   } 
  })
 }
}) 