//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: [],
    postList:[],
    num:0,
    mount:0
  },
  // 点赞
  Num:function(event){
    const id = event.target.dataset.id;
    let list = this.data.postList;
    list.forEach(function(item,index){
          if(index==id){
            const haha=item.zan++;
          }
    });
    this.setData({
      postList:list
    })
  },
  onShow: function () {
    let that=this;
    let app=getApp();
    // console.log(app.msg)
    // wx.request({
    //   url:"http://newstore.sy-lab.com/test/postlist.json",
    //   success:function(res){
    //       console.log(res)
    //   }
    // })

    let msglist = wx.getStorageSync("key");
    if(msglist){
      that.setData({
        postList: msglist.msglist
      })

    }else{
      msglist= app.globalData.postList;
      that.setData({
        postList: msglist.msglist
      })
    }
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
  onPostTap: function (event) {
    var postId = event.currentTarget.dataset.postid;
    wx.navigateTo({
      url: '../../pages/persion/persion'
    })
  },
})
