// pages/databaseGuide/databaseGuide.js

var app = getApp()

Page({
  data: {
    openid:'',
    title:'',
    ddl:"",
    time:"",
    value:"",
    time_detail:"",
    urge:"",
    remind:"",
    memoLists:[]
},

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


  onLoad: function (options) {
    if (app.globalData.openid) {
      this.setData({
        openid: app.globalData.openid,
      })
    }
},

  saveMemo: function () {
  if (app.globalData.openid) {
          this.setData({
            openid: app.globalData.openid,
          })
        }
     const db = wx.cloud.database()
     db.collection('bwl').add({
      data:{
          title:this.data.title,
  ddl:this.data.ddl,
  time:this.data.time,
  value:this.data.value,
  time_detail:this.data.time_detail,
  urge:this.data.urge,
  remind:this.data.remind,
  memoLists:this.data.memoLists
 
      },
      success:res=>{
        console.log(res);
      },
      fail:err=>{
        console.log(err);
      }
    })
  },


})