//app.js
App({
  onLaunch: function () {
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        env: 'note-2g7n6ssj6b1d09fc',
        traceUser: true,
      })
    }

    this.globalData = {}
  }
}),

{
  "pages": [
    "pages/index/index",
    "pages/logs/logs",
    "pages/rili/rili",
    "pages/kebiao/kebiao",
    "pages/user/user",
    "pages/indexcloud/indexcloud",
    "pages/userConsole/userConsole",
    "pages/storageConsole/storageConsole",
    "pages/databaseGuide/databaseGuide",
    "pages/addFunction/addFunction",
    "pages/deployFunctions/deployFunctions",
    "pages/chooseLib/chooseLib",
    "pages/openapi/openapi",
    "pages/openapi/serverapi/serverapi",
    "pages/openapi/callback/callback",
    "pages/openapi/cloudid/cloudid",
    "pages/im/im",
    "pages/im/room/room"
  ],
  "window":{
    "backgroundTextStyle":"light",
    "navigationBarBackgroundColor":"#1296db",
    "navigationBarTitleText": "备忘录",
    "navigationBarTextStyle":"white"
  },
  "style": "v2",
  "sitemapLocation": "sitemap.json",

"tabBar": {
   "color": "#a9b7b7",
   "selectedColor": "#1296db",
   "borderStyle": "black",
   "list":[
     {
      "selectedIconPath":"image/home_true.png",
      "iconPath":"image/home.png",
      "pagePath":"pages/index/index",
      "text":"首页"},

     {
       "selectedIconPath":"image/rili_true.png",
       "iconPath":"image/rili.png",
       "pagePath":"pages/rili/rili",
       "text":"日程表"},
      
      {"selectedIconPath": "image/shuben_true.png",
        "iconPath": "image/shuben.png",
        "pagePath": "pages/kebiao/kebiao",
        "text": "课程表"
      },

      {
        "selectedIconPath": "image/user_true.png",
        "iconPath": "image/user.png",
        "pagePath": "pages/user/user",
        "text": "用户"
      }
   ]
  }
}
   