//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  //转发
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '自定义转发标题',
      path: '/page/index',
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  },
  globalData: {
    userInfo: null,
    postList :{
      msglist: [
        {
          id: 0,
          content: " 爱情里女生做加法，男生做减法。想想还真实这样，当初分手也许和这个也有关系。",
          backColor: "yellowgreen",
          name: "琼瑶小公主",
          zan: 0
        },
        {
          id: 1,
          content: " 爱情里女生做加法，男生做减法。想想还真实这样，当初分手也许和这个也有关系。",
          backColor: "yellowgreen",
          name: "琼瑶小公主",
          zan: 1
        },
        {
          id: 2,
          content: " 爱情里女生做加法，男生做减法。想想还真实这样，当初分手也许和这个也有关系。",
          backColor: "red",
          name: "琼瑶小公主",
          zan: 0
        },
        {
          id: 3,
          content: " 爱情里女生做加法，男生做减法。想想还真实这样，当初分手也许和这个也有关系。",
          backColor: "red",
          name: "琼瑶小公主",
          zan: 0
        }
      ]
    },
    msg:{
      id: 0,
      content: "text",
      backColor: "#333",
      name: "nickName",
      zan: 0
    }
  }
})