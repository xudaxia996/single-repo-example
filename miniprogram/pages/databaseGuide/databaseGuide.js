// pages/databaseGuide/databaseGuide.js

var app = getApp()

Page({

  data: {
    countId: '',
    openid: '',
    num: null,
    queryResult: '',
  },
  
/*
  bindKeyInput:function(e){
    this.setData({
     num: e.detail.value
    })
   },
*/
  onLoad: function (options) {
    if (app.globalData.openid) {
      this.setData({
        openid: app.globalData.openid
      })
    }
    
},

  onAdd: function () {
     const db = wx.cloud.database()
     db.collection('infor').add({ //括号里的是目标数据库的集合名
       data: {
        countId: res._id,
        num: e.detail.value
       },
       
     })
  },

  onQuery: function() {
    // const db = wx.cloud.database()
    // // 查询当前用户所有的 counters
    // db.collection('counters').where({
    //   _openid: this.data.openid
    // }).get({
    //   success: res => {
    //     this.setData({
    //       queryResult: JSON.stringify(res.data, null, 2)
    //     })
    //     console.log('[数据库] [查询记录] 成功: ', res)
    //   },
    //   fail: err => {
    //     wx.showToast({
    //       icon: 'none',
    //       title: '查询记录失败'
    //     })
    //     console.error('[数据库] [查询记录] 失败：', err)
    //   }
    // })
  },

  onCounterInc: function() {
    // const db = wx.cloud.database()
    // const newCount = this.data.count + 1
    // db.collection('counters').doc(this.data.counterId).update({
    //   data: {
    //     count: newCount
    //   },
    //   success: res => {
    //     this.setData({
    //       count: newCount
    //     })
    //   },
    //   fail: err => {
    //     icon: 'none',
    //     console.error('[数据库] [更新记录] 失败：', err)
    //   }
    // })
  },

  onCounterDec: function() {
    // const db = wx.cloud.database()
    // const newCount = this.data.count - 1
    // db.collection('counters').doc(this.data.counterId).update({
    //   data: {
    //     count: newCount
    //   },
    //   success: res => {
    //     this.setData({
    //       count: newCount
    //     })
    //   },
    //   fail: err => {
    //     icon: 'none',
    //     console.error('[数据库] [更新记录] 失败：', err)
    //   }
    // })
  },

  onRemove: function() {
    // if (this.data.counterId) {
    //   const db = wx.cloud.database()
    //   db.collection('counters').doc(this.data.counterId).remove({
    //     success: res => {
    //       wx.showToast({
    //         title: '删除成功',
    //       })
    //       this.setData({
    //         counterId: '',
    //         count: null,
    //       })
    //     },
    //     fail: err => {
    //       wx.showToast({
    //         icon: 'none',
    //         title: '删除失败',
    //       })
    //       console.error('[数据库] [删除记录] 失败：', err)
    //     }
    //   })
    // } else {
    //   wx.showToast({
    //     title: '无记录可删，请见创建一个记录',
    //   })
    // }
  },

  nextStep: function () {
    // 在第一步，需检查是否有 openid，如无需获取
    if (!this.data.openid) {
      wx.cloud.callFunction({
        name: 'login',
        data: {},
        success: res => {
          app.globalData.openid = res.result.openid
          this.setData({
            openid: res.result.openid
          })
        },
        fail: err => {
          wx.showToast({
            icon: 'none',
            title: '获取 openid 失败，请检查是否有部署 login 云函数',
          })
          console.log('[云函数] [login] 获取 openid 失败，请检查是否有部署云函数，错误信息：', err)
        }
      })
    } else {
      const callback = this.data.step !== 6 ? function() {} : function() {
        console.group('数据库文档')
        console.log('https://developers.weixin.qq.com/miniprogram/dev/wxcloud/guide/database.html')
        console.groupEnd()
      }

      this.setData({
      }, callback)
    }

    if(app.globalData.openid){
      //this.data.value
      //app.globalData.openid
       wx.redirectTo({
        url: '../databaseGuide'
       })

  }
  },

  prevStep: function () {
    this.setData({
      step: this.data.step - 1
    })
  },

  goHome: function() {
    const pages = getCurrentPages()
    if (pages.length === 2) {
      wx.navigateBack()
    } else if (pages.length === 1) {
      wx.redirectTo({
        url: '../index/index',
      })
    } else {
      wx.reLaunch({
        url: '../index/index',
      })
    }
  }

})



///////////////wxml中暂时没用的//////////////
/*

<view class="container">


<!-- 导航 -->
<view class="list">
  <view class="list-item">
    <text class="request-text">数据库指引</text>
  </view>
  <view class="list-item">
    <text class="request-text" wx:for="{{7}}" style="color: {{step === index + 1 ? 'red': 'black'}}">{{index + 1}}</text>
  </view>
  <view class="list-item" wx:if="{{openid}}">
    <text class="request-text">openid：{{openid}}</text>
  </view>
  <view class="list-item" wx:if="{{counterId}}">
    <text class="request-text">当前记录 ID：{{counterId}}</text>
  </view>
</view>

<!-- 快速操作数据库指引 -->

<!-- 简介 -->
<view class="guide" wx:if="{{step === 1}}">
  <text class="headline">示例介绍</text>
  <text class="p">1. 以计数器为例，在此演示如何操作数据库</text>
  <text class="p">2. 数据库操作大多需要用户 openid，需先配置好 login 云函数，如已配置好，点击下一步，获取用户 openid 并开始我们的指引</text>
  <div class="nav">
    <button class="next" size="mini" type="default" bindtap="nextStep">下一步</button>
  </div>
</view>

<!-- 新建集合 -->
<view class="guide" wx:if="{{step === 2}}">
  <text class="headline">新建集合</text>
  <text class="p">1. 打开云开发控制台，进入到数据库管理页</text>
  <image class="image1" src="../../images/console-entrance.png" mode="aspectFit"></image>
  <text class="p">2. 选择添加集合，集合名为 counters</text>
  <image class="flat-image" src="../../images/create-collection.png" mode="aspectFit"></image>
  <text class="p">3. 可以看到 counters 集合出现在左侧集合列表中</text>
  <text class="p">注：集合必须在云开发控制台中创建</text>

  <div class="nav">
    <button class="prev" size="mini" type="default" bindtap="prevStep">上一步</button>
    <button class="next" size="mini" type="default" bindtap="nextStep">下一步</button>
  </div>
</view>

<!-- 新增记录 -->
<view class="guide" wx:if="{{step === 3}}">
  <text class="headline">新增记录</text>
  <text class="p">1. 打开 pages/databaseGuide/databaseGuide.js 文件，定位到 onAdd 方法</text>
  <text class="p">2. 把注释掉的代码解除注释</text>
  <image class="code-image" src="../../images/code-db-onAdd.png" mode="aspectFit"></image>
  <text class="p">3. onAdd 方法会往 counters 集合新增一个记录，新增如下格式的一个 JSON 记录</text>
  <text class="code">
  {
    "_id": "数据库自动生成记录 ID 字段",
    "_openid": "数据库自动插入记录创建者的 openid",
    "count": 1
  }
  </text>
  <text class="p">4. 点击按钮</text>
  <button size="mini" type="default" bindtap="onAdd">新增记录</button>
  <text class="p" wx:if="{{counterId}}">新增的记录 _id 为：{{counterId}}</text>
  <text class="p">5. 在云开发 -> 数据库 -> counters 集合中可以看到新增的记录</text>

  <div class="nav">
    <button class="prev" size="mini" type="default" bindtap="prevStep">上一步</button>
    <button class="next" size="mini" type="default" bindtap="nextStep" wx:if="{{counterId}}">下一步</button>
  </div>
</view>

<!-- 查询记录 -->
<view class="guide" wx:if="{{step === 4}}">
  <text class="headline">查询记录</text>
  <text class="p">1. 打开 pages/databaseGuide/databaseGuide.js 文件，定位到 onQuery 方法</text>
  <text class="p">2. 把注释掉的代码解除注释，onQuery 方法会在下方按钮被点击时触发</text>
  <image class="code-image" src="../../images/code-db-onQuery.png" mode="aspectFit"></image>
  <text class="p">3. 点击按钮</text>
  <button size="mini" type="default" bindtap="onQuery">查询记录</button>
  <text class="code" wx:if="{{queryResult}}">{{queryResult}}</text>

  <div class="nav">
    <button class="prev" size="mini" type="default" bindtap="prevStep">上一步</button>
    <button class="next" size="mini" type="default" bindtap="nextStep">下一步</button>
  </div>
</view>

<!-- 更新记录 -->
<view class="guide" wx:if="{{step === 5}}">
  <text class="headline">更新记录</text>
  <text class="p">1. 打开 pages/databaseGuide/databaseGuide.js 文件，定位到 onCounterInc 和 onCounterDec 方法</text>
  <text class="p">2. 把注释掉的代码解除注释</text>
  <image class="code-image" src="../../images/code-db-inc-dec.png" mode="aspectFit"></image>
  <text class="p">3. 点击下方按钮更新计数器</text>
  <div class="counter">
    <button class="minus" size="mini" type="default" bindtap="onCounterDec">-</button>
    <text class="p">{{count}}</text>
    <button class="plus" size="mini" type="default" bindtap="onCounterInc">+</button>
  </div>

  <div class="nav">
    <button class="prev" size="mini" type="default" bindtap="prevStep">上一步</button>
    <button class="next" size="mini" type="default" bindtap="nextStep">下一步</button>
  </div>
</view>

<!-- 删除记录 -->
<view class="guide" wx:if="{{step === 6}}">
  <text class="headline">删除记录</text>
  <text class="p">1. 打开 pages/databaseGuide/databaseGuide.js 文件，定位到 onRemove 方法</text>
  <text class="p">2. 把注释掉的代码解除注释</text>
  <image class="code-image" src="../../images/code-db-onRemove.png" mode="aspectFit"></image>
  <text class="p">3. 点击下方按钮删除计数器</text>
  <button size="mini" type="default" bindtap="onRemove">删除记录</button>

  <div class="nav">
    <button class="prev" size="mini" type="default" bindtap="prevStep" wx:if="{{counterId}}">上一步</button>
    <button class="next" size="mini" type="default" bindtap="nextStep">下一步</button>
  </div>
</view>

<!-- 结语 -->
<view class="guide" wx:if="{{step === 7}}">
  <text class="headline">完成指引 !</text>
  <text class="p">恭喜你，至此已完成数据库操作入门基础，可以点击调试器中的链接，查看详尽的数据库文档</text>

  <div class="nav">
    <button class="prev" size="mini" type="default" bindtap="prevStep">上一步</button>
    <button class="next" size="mini" type="default" bindtap="goHome">回到首页</button>
  </div>
</view>

</view>
*/