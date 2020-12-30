//index.js
const app = getApp();
const lessonTmplId = 'wts1ASa9WMx4sIYkun_Y_KPVaqe7vW33wXWZAI18c4M';

const formatDate = dateTime => {
  const date = new Date(dateTime);
  return `${date.getFullYear()}-${date.getMonth() +
    1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}`;
};

const lessons = [
  {
    id: 1,
    startTime: new Date().getTime() + 32 * 60 * 1000,
    title: '取快递',
    description: '北湖南路',
  },
  {
    id: 2,
    startTime: new Date().getTime() + 60 * 60 * 1000,
    title: '软工ddl',
    description: '12月31号之前上传文件',
  },
  {
    id: 3,
    title: '毛概论文',
    startTime: new Date().getTime() + 24 * 60 * 60 * 1000,
    description: '不少于2000字',
  },
].map(lesson => ({
  ...lesson,
  startTimeString: formatDate(lesson.startTime),
}));

Page({
  data: {
    lessons,
  },
  onSubscribe: function(e) {
    // 获取课程信息
    const item = e.currentTarget.dataset.item;

    // 调用微信 API 申请发送订阅消息
    wx.requestSubscribeMessage({
      // 传入订阅消息的模板id，模板 id 可在小程序管理后台申请
      tmplIds: [lessonTmplId],
      success(res) {
        // 申请订阅成功
        if (res.errMsg === 'requestSubscribeMessage:ok') {
          // 这里将订阅的课程信息调用云函数存入db
          wx.cloud
            .callFunction({
              name: 'subscribe',
              data: {
                ...item,
                data: {
                  thing1: {value: item.title},
                  time2: {value: item.startTimeString},
                  thing3: {value: item.description},
                },
                templateId: lessonTmplId,
              },
            })
            .then(() => {
              wx.showToast({
                title: '订阅成功',
                icon: 'success',
                duration: 2000,
              });
            })
            .catch(() => {
              wx.showToast({
                title: '订阅失败',
                icon: 'success',
                duration: 2000,
              });
            });
        }
      },
    });
  },
  onUnsubscribe: function(e) {
    // 获取课程信息
    const item = e.currentTarget.dataset.item;

    // 这里将订阅的课程信息调用云函数存入db
    wx.cloud
      .callFunction({
        name: 'unsubscribe',
        data: {
          id: item.id,
          templateId: lessonTmplId,
        },
      })
      .then(() => {
        wx.showToast({
          title: '取消订阅成功',
          icon: 'success',
          duration: 2000,
        });
      })
      .catch(() => {
        wx.showToast({
          title: '取消订阅失败',
          icon: 'success',
          duration: 2000,
        });
      });
  },
});
