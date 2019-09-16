//index.js  
//获取应用实例  
var app = getApp();
//引入这个插件，使html内容自动转换成wxml内容
var WxParse = require("../../wxParse/wxParse.js");
Page({
  data: {
    //商品信息
    prodetail2: {
      // price_yh: 100, //价格
      // price: 200, //打折前价格
      // store: 90999 //库存
    },
    pro: {
      // attr_value: false, //不知道干啥用 会跳出来多的一个框
      // name: "土豆好吃", //名字
      // intro: "土豆真好吃的说" //副标题
    },
    shu: { //不知道干啥用
      // id: 471
    },
    param: [ //标签
      // "土豆",
      // "洋芋"
    ],
    bannerItem: [ //图片
      // '../../images/1.png',
      // '../../images/1.png'
    ],
    // content: "这里是图文详情",
    // productId: 0,

    buynum: 1, //购买数量
    //以上是商品信息


    itemData: {},
    num: 0,
    num2: 0,
    // 产品图片轮播
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    // 属性选择
    tabArr: {
      curHdIndex: 0,
      curBdIndex: 0
    },
    firstIndex: -1,
    quan: [],
    attrValueList: [],
    hasLocation: false,
    locationAddress: '',
  },

  // 产品数量
  shuxing: function(e) {
    console.log(e);
    var id = e.currentTarget.dataset.id
    var i = true;
    this.setData({
      shuxing: i,
      png: 1,
      id: 1,
    })
    if (id == 1) {
      var i = false;
      this.setData({
        shuxing: i,
        png: 0,
        id: 0,
      })
    }
  },
  // 加减
  changeNum: function(e) {
    var that = this;
    if (e.target.dataset.alphaBeta == 0) {
      if (this.data.buynum <= 1) {
        buynum: 1
      }
      else {
        this.setData({
          buynum: this.data.buynum - 1
        })
      };
    } else {
      this.setData({
        buynum: this.data.buynum + 1
      })
    };
  },

  //启动
  onLoad: function(option) {
    var that = this;
    var a = wx.getStorageSync(option.productId + "");
    that.setData({
      productId: option.productId,
      prodetail2: a.prodetail2,
      pro: a.pro,
      shu: a.shu,
      param: a.param,
      bannerItem: a.bannerItem,
      content: a.content,
      productId: a.productId,
    });
    WxParse.wxParse("content", "html", this.data.content, this, 5);
  },

  //立刻购买
  buyNow: function() {
		if (this.data.buynum > this.data.prodetail2.store) {
      wx.showToast({
				image:"../../images/warning.png",
        title: '库存量不足！',
        duration: 2000
      });
      return false;
    }
    wx.navigateTo({
			url: '../pay/pay?buynum=' + this.data.buynum + '&productId=' + this.data.productId,
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  //加入购物车
  addShopCart: function(e) {
    var that = this;
    var prodetail2 = that.data.prodetail2;
    var buynum = that.data.buynum;
    var store = prodetail2.store;
    if (buynum > store) {
      wx.showToast({
        image: '../../images/warning.png',
        title: '库存不足！',
        duration: 2000
      });
      return false;
    }

    var cartsThis = [{
      pro_name: this.data.pro.name,
      id: this.data.productId,
      selected: false,
      photo_x: this.data.bannerItem[0],
      // attr_name: "attr_name",
      // attr_value: "attr_value",
      // apec_name: "apec_name",
      // apec_value: "apec_value",
      // shop_name: "shop_name",
      price: this.data.prodetail2.price_yh,
      num: buynum
    }];
    var carts = wx.getStorageSync("carts");

    if (carts != '') {
      var flag = true;
      for (var i in carts) {
        if (carts[i].id == cartsThis[0].id) {
          carts[i].num += cartsThis[0].num;
          flag = false;
          break;
        }
      }
      if (flag)
        carts = carts.concat(cartsThis);
      wx.setStorage({
        key: 'carts',
        data: carts
      });
    } else {
      wx.setStorage({
        key: 'carts',
        data: cartsThis
      });
    }
    wx.showToast({
      title: '加入购物车成功',
      icon: "success"
    });

  },

  //去购物车
  gouCart: function() {
    wx.navigateTo({
      url: '../cart/cart',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
});