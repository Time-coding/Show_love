Page({
  data: {
    imageSrc: "",
    color: "burlywood",
    colorArray: ["#003366 ", "#ff6666", "#cccc00", "#003300", "#993333", "#ffffcc", "#996600", "#339933",
"#333300",
"#669999",
"#ccff66"]
  },
  // 点击换色
  chooseColor: function (event) {
    var color = event.target.dataset.color;
    this.setData({
      color: color,
      bgimg:""
    })
  },
  chooseImage:function(){
    const self=this;
    wx.chooseImage({
      count:1,
      success:function(res){
        console.log(res)
        const bgimg = res.tempFilePaths[0];
        console.log(bgimg)
        self.setData({
          bgimg: bgimg
        })
      }
    })
  },
  // 关闭
  close: function () {
    console.log(555)
    wx.navigateBack({
      url: '../../pages/index/index'
    })
  },
  //发表
  bindFormSubmit: function (e) {
    console.log(e)
    let text = e.detail.value.textarea;
    let bgcolor = this.data.color;
    let bgimg = this.data.bgimg;
    let nickName = "";
    wx.getUserInfo({
      success: function (res) {
        var userInfo = res.userInfo
        nickName = userInfo.nickName;
        let app=getApp()
        app.msg={
              id:0,
              content: text,
              backColor:bgcolor,
              bgimg: bgimg,
              name: nickName,
              zan:0
        };
        if (typeof app.postList == "undefined") {
          app.postList = {
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
          };
          if ( !(typeof app.msg == "undefined")) {
            app.postList.msglist.unshift(app.msg);
            //修改id
            app.postList.msglist.forEach(function(item,index){
                  item.id=index
            })
            wx.setStorageSync("key", app.postList);
            wx.navigateBack({
              url: '../../pages/logs/logs'
            });
          }
        
        } else {
          let msgList = wx.getStorageSync("key");
          msgList.msglist.unshift(app.msg);
          //修改id
          msgList.msglist.forEach(function (item, index) {
            item.id = index
          })
          wx.setStorageSync("key", msgList);
          wx.navigateBack({
            url: '../../pages/logs/logs'
          });
        }
      }
    });

    
  },
  onLoad:function(){
  let app=getApp();
  },
  //分享
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
  onLogTap: function (event) {
    var postId = event.currentTarget.dataset.postid;
    wx.navigateTo({
      url: '../../pages/logs/logs'
    })
  }
})