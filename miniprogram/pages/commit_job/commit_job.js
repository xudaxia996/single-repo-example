// pages/databaseGuide/databaseGuide.js

var app = getApp()

Page({
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

  onAdd: function () {
     const db = wx.cloud.database()
     db.collection('bwl').add({
      data:{
          title:this.data.title,
 
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