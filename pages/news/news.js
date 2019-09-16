Page({
  data: {
    tabs: ["时事头条", "资讯信息", "市场动态", "科普"],
    activeIndex: "0",
    articleA: [],
    articleB: [],
    articleC: [],
    articleD: [],
  },
	//tab
  tabClick: function(e) {
    this.setData({
      activeIndex: e.currentTarget.id
    });
  },
  onLoad(e) {
    var that = this;

    var a = that.data.articleA;
    var b = that.data.articleB;
    var c = that.data.articleC;
    var d = that.data.articleD;
    for (var i = 1; i < 100; i++) {
      var str = "article" + i;
      var article = wx.getStorageSync(str);
      if (article.type == "a") a.push(article);
      else if (article.type == "b") b.push(article);
      else if (article.type == "c") c.push(article);
      else if (article.type == "d") d.push(article);
      else continue;
    }

    that.setData({
      articleA: a,
      articleB: b,
      articleC: c,
      articleD: d,
    });

  }
});