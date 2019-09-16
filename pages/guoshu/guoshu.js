Page({
  data: {
    inputShowed: false,
    inputVal: "",
    tabs: ["果蔬商城", "采摘预约"],
    activeIndex: "0",
    product: [],
    yuyue: []
  },
  // 搜索
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
  // tab
  tabClick: function(e) {
    this.setData({
      activeIndex: e.currentTarget.id
    });
  },

  onLoad(e) {
    var that = this;
		var a = wx.getStorageSync("1");
		var b = wx.getStorageSync("2");
		var c = wx.getStorageSync("3");
		var d = wx.getStorageSync("4");
		var e = wx.getStorageSync("5");
		var f = wx.getStorageSync("6");
		var g = wx.getStorageSync("7");
		var h = wx.getStorageSync("8");
		var i = wx.getStorageSync("9");
		var j = wx.getStorageSync("10");


    var k = wx.getStorageSync("nong6");
    var l = wx.getStorageSync("nong7");
		var m = wx.getStorageSync("nong8");

    that.setData({
			product: [a, b, c, d, e, f, g, h, i, j],
       yuyue: [k, l,m]
    });
  }
});