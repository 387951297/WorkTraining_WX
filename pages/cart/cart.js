var app = getApp();
// pages/cart/cart.js
Page({
  data: {
    page: 1,
    minusStatuses: ['disabled', 'disabled', 'normal', 'normal', 'disabled'],
    total: 0,
    selectedAllStatus: false,
    carts: [],
  },

  bindMinus: function(e) {
    var that = this;
    var index = parseInt(e.currentTarget.dataset.index);
    var carts = that.data.carts;
    var num = that.data.carts[index].num;
    if (num == 1) return false;
    if (num > 1) {
      carts[index].num--;
      wx.setStorageSync("carts", carts);
      that.onLoad();
    }
  },

  bindPlus: function(e) {
    var that = this;
    var index = parseInt(e.currentTarget.dataset.index);
    var carts = that.data.carts;
    var num = that.data.carts[index].num;
    carts[index].num++;
    wx.setStorageSync("carts", carts);
    that.onLoad();
  },

  bindCheckbox: function(e) {
    /*绑定点击事件，将checkbox样式改变为选中与非选中*/
    //拿到下标值，以在carts作遍历指示用
    var index = parseInt(e.currentTarget.dataset.index);
    //原始的icon状态
    var selected = this.data.carts[index].selected;
    var carts = this.data.carts;
    // 对勾选状态取反
    carts[index].selected = !selected;
    // 写回经点击修改后的数组
    wx.setStorageSync("carts", carts);
    this.onLoad();
  },

  bindSelectAll: function() {
    // 环境中目前已选状态
    var selectedAllStatus = this.data.selectedAllStatus;
    // 取反操作
    selectedAllStatus = !selectedAllStatus;
    // 购物车数据，关键是处理selected值
    var carts = this.data.carts;
    // 遍历
    for (var i = 0; i < carts.length; i++) {
      carts[i].selected = selectedAllStatus;
    }
    wx.setStorageSync("carts", carts);
    this.onLoad();

  },

  bindCheckout: function() {
    var that = this;
    // 初始化toastStr字符串
    var num = '';
    var toastStr = '';
    // 遍历取出已勾选的cid
    if (0 < this.data.carts.length && this.data.carts[0].selected) {
      toastStr += this.data.carts[0].id;
      num += this.data.carts[0].num;
    }
    for (var i = 1; i < this.data.carts.length; i++) {
      if (this.data.carts[i].selected) {
        num += ',';
        num += this.data.carts[0].num;
        toastStr += ',';
        toastStr += this.data.carts[i].id;
      }
    }
    if (toastStr == '') {
      wx.showToast({
        image: "../../images/warning.png",
        title: '请选择商品！',
        duration: 2000
      });
      return false;
    }
    wx.navigateTo({
      url: '../pay/pay?productId=' + toastStr + '&buynum=' + num,
    });
  },

  bindToastChange: function() {
    this.setData({
      toastHidden: true
    });
  },

  sum: function() {
    var that = this;
    var carts = this.data.carts;
    // 计算总金额
    var total = 0;
    var selectedAllStatus = true;
    for (var i = 0; i < carts.length; i++) {
      if (carts[i].selected) {
        total += carts[i].num * carts[i].price;
        selectedAllStatus = false;
      }
    }
    that.setData({
      selectedAllStatus: !selectedAllStatus,
      total: '¥ ' + total
    });
  },

  onLoad: function(options) {
    this.loadProductData();
    this.sum();
  },

  onShow: function() {
    this.loadProductData();
    this.sum();
  },

  //去掉购物车的一项
  removeShopCard: function(e) {
    var that = this;
    var carts = that.data.carts;
    var index = parseInt(e.currentTarget.dataset.index);
    wx.showModal({
      title: '提示',
      content: '你确认移除吗',
      success: function(res) {
        if (res.cancel) {
          //点击取消,默认隐藏弹框
        } else {
          carts.splice(index, 1);
          wx.setStorageSync('carts', carts);
          that.onLoad();
        }
      },
    });

  },

  // 购物车刷新
  loadProductData: function() {
    var carts = wx.getStorageSync("carts");
    this.setData({
      carts: carts
    });
  },



})