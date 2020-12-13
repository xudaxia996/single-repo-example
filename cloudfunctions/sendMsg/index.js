const cloud=require('wx-server-sdk')
cloud.init()
exports.main=async(event,context)=>{
  try{const result=await cloud.openapi.subscribeMessage.send({
    touser:event.openid,//要推送给那个用户
    page:'pages/index/index',//要跳转到那个小程序页面
    data:{//推送的内容
      time2:{
        value:'中午十二点'
    },
  thing1:{
        value:'拿快递'
  },
  thing3:{
    value:'北湖南路'
  },
  thing4:{
    value:'及时签收'
  }
  },
templateId:'JS4RkICmld_neTq4_GpIBbAxK-uFTtfmAbAh_Ec8cI0'//模板id
  })
  console.log(result)
  return result}
  catch(err){console.log(err)
    return err
  }
}