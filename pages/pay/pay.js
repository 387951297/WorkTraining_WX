var app = getApp();
// pages/order/downline.js
Page({
  data: {
    //显示内容
    productData: [
      // 	{
      //   photo_x: "../../images/1.png", //图片
      //   name: "1123", //名称
      //   price: 999, //价格
      //   num: 22 //数量
      // }
    ],
    address: {
			name: "小寻", //收货人
      tel: "123****123", //电话
			address_xq: "寻园归农工作室" //地址
    },
    // total: 999,
    

    itemData: {},
    supplierId: 0,
    vid: 0,
    productId: 0, //proId
    buyCount: 0,
    paytype: 0, //0线下1微信
    remark: '',
    cartId: 0,
    addrId: 122, //收货地址//测试--
    btnDisabled: false,
    hui: false,
    one: 0
  },


  onLoad: function(options) {
    try {

      var cart_id = options.productId;
      var num = options.buynum;

      if (cart_id > 100) {
        var a = wx.getStorageSync("nong" + (cart_id - 100) + "");
        this.setData({
          productData: [{
            photo_x: a.photo_d,
            name: a.name,
            price: a.price,
            num: num
          }],
          total: num * a.price
        });
      } else {
        var a = wx.getStorageSync(cart_id + "");
        this.setData({
          productData: [{
            photo_x: a.bannerItem[0],
            name: a.pro.name,
            price: a.prodetail2.price_yh,
            num: num
          }],
          total: num * a.prodetail2.price_yh
        });

      }
    } catch (e) {
      var cart_id = options.productId.split(",");
      var num = options.buynum.split(",");
      var productData = new Array();
      var total = 0;
      for (var i = 0; i < cart_id.length; i++) {
        var a = wx.getStorageSync(cart_id[i] + "");
        productData.push({
          photo_x: a.bannerItem[0],
          name: a.pro.name,
          price: a.prodetail2.price_yh,
          num: num[i]
        });
        total += a.prodetail2.price_yh * num[i];
      }

      this.setData({
        productData: productData,
        total: total
      });
    }
  },


});