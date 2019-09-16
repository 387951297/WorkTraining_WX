//index.js
//获取应用实例
const app = getApp()
Page({
  data: { //初始化 参数声明
    inputShowed: false,
    inputVal: "",
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    //采摘+购买
    cai: [],
    //农家乐
    nong: [],

    imgUrls: [{ //首页几张图 
      photo: "../../pictures/index/brand_text.jpg"
    }, {
      photo: "../../pictures/index/1.jpg"
    }, {
      photo: "../../pictures/index/2.jpg"
    }, {
      photo: "../../pictures/index/3.jpg"
    }],
    classify: [{ //picture
      id: 1,
      index: 10,
			bz_1: "../../pictures/zzty.png",
      name: "种植体验"
    }, {
      id: 2,
      index: 10,
				bz_1: "../../pictures/gscz.png",
      name: "果蔬采摘"
    }, {
      id: 3,
      index: 10,
				bz_1: "../../pictures/nzly.png",
      name: "农庄乐园"
    }],
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  //载入
  onLoad: function() {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
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
    //读数据
    var a = wx.getStorageSync("1");
    var b = wx.getStorageSync("2");
    var c = wx.getStorageSync("nong1");
    var d = wx.getStorageSync("nong2");
    try {
      this.setData({
        "cai[0]": {
          id: a.productId,
          photo_d: a.bannerItem[0],
          tag: a.param[0],
          price: a.prodetail2.price_yh,
          renqi: a.prodetail2.store,
          name: a.pro.name,
          intro: a.pro.intro
        },
        "cai[1]": {
          id: b.productId,
          photo_d: b.bannerItem[0],
          tag: b.param[0],
          price: b.prodetail2.price_yh,
          renqi: b.prodetail2.store,
          name: b.pro.name,
          intro: b.pro.intro
        },
        "nong[0]": {
          id: c.productId,
					photo_d: c.photo_d,
					tag: c.tag,
					price: c.price,
          renqi: 668,
          name: c.name,
          intro: ''
        },
        "nong[1]": {
          id: d.productId,
					photo_d: d.photo_d,
					tag: d.tag,
					price: d.price,
          renqi: 546,
          name: d.name,
          intro: ''
        }
      });
    } catch (e) {
      console.log(e);
    }
  },
  //搜索
  showInput: function() {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function() {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
  },
  clearInput: function() {
    this.setData({
      inputVal: ""
    });
  },
  inputTyping: function(e) {
    this.setData({
      inputVal: e.detail.value
    });
  },
  //分类跳转
  classify: function(e) {
    var ops = e.currentTarget.dataset.id;
    console.log(ops);
    if (ops == 1) {
      wx.navigateTo({
        url: '../zhongzhi/zhongzhi'
      })
    } else if (ops == 2) {
      wx.navigateTo({
        url: '../guoshu/guoshu'
      })
    } else if (ops == 3) {
      wx.navigateTo({
        url: '../nongzhuang/nongzhuang'
      })
    }

  },

  //5个toast
  chucao: function(e) {
    wx.showToast({
      title: '除草成功',
      icon: 'success',
      duration: 3000
    });
  },
  shifei: function(e) {
    wx.showToast({
      title: '施肥成功',
      icon: 'success',
      duration: 3000
    });
  },
  fandi: function(e) {
    wx.showToast({
      title: '翻地成功',
      icon: 'success',
      duration: 3000
    });
  },
  bozhong: function(e) {
    wx.showToast({
      title: '播种成功',
      icon: 'success',
      duration: 3000
    });
  },
  kuaidi: function(e) {
    wx.showToast({
      title: '快递成功',
      icon: 'success',
      duration: 3000
    });
  },

  //获得用户数据
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
});