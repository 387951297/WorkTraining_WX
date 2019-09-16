Page({
  data: {
    tabs: ["果蔬商城", "农庄乐园"],
    activeIndex: "0",
    product: [],
    nongzhuang: []
  },
  tabClick: function(e) {
    this.setData({
      activeIndex: e.currentTarget.id
    });
  },
  onLoad(e) {
    var that = this;

    var p = [];
    var num_guo = 10;
    for (var i = 0; i < num_guo; i++) {
      p[i] = wx.getStorageSync(i + 1 + "");
			
    }


    var n = [];
    var num_nong = 5;
    for (var i = 0; i < num_nong; i++) {
      n[i] = wx.getStorageSync("nong" + (i + 1));

    }

    that.setData({
      product: p,
      nongzhuang: n
    });
  }
});