//index.js  
//获取应用实例  
var app = getApp();
//引入这个插件，使html内容自动转换成wxml内容
var WxParse = require("../../wxParse/wxParse.js");
Page({
  data: {
    //商品信息

    // productId: 2,
    // name: "余杭翠羊湾休闲农庄",
		photo_d:[],
    // photo_d: "../../images/nong/2/1.jpg",
    // local: "竹园村大禹谷（舟青公路）",
    // tel: "0571-88643668",
    // price: "128元/人",
    // tag: "休闲",
    // content: '<img src="../../images/nong/2/2.jpg">'

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
    var a = wx.getStorageSync("nong" + (option.productId-100) + "");
    that.setData({
      productId: option.productId,
      name: a.name,
      "photo_d[0]": a.photo_d,
      local: a.local,
      tel: a.tel,
      price: a.price,
      tag: a.tag,
      content: a.content
    });
    WxParse.wxParse("content", "html", this.data.content, this, 5);
  },

  //立刻购买
  buyNow: function() {
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