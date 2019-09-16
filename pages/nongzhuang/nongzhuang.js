Page({
	data: {
		inputShowed: false,
		inputVal: "",
		tabs: ["果蔬商城", "采摘预约"],
		activeIndex: "0",
		nz:[]
	},
	// 搜索
	showInput: function () {
		this.setData({
			inputShowed: true
		});
	},
	hideInput: function () {
		this.setData({
			inputVal: "",
			inputShowed: false
		});
	},
	clearInput: function () {
		this.setData({
			inputVal: ""
		});
	},
	inputTyping: function (e) {
		this.setData({
			inputVal: e.detail.value
		});
	},
	// tab
	tabClick: function (e) {
		this.setData({
			activeIndex: e.currentTarget.id
		});
	},

	onLoad(e) {
		var that = this;

		var n = [];
		var num_nong = 5;
		for (var i = 0; i < num_nong; i++) {
			n[i] = wx.getStorageSync("nong" + (i + 1));
			console.log(n[i]);
		}
		that.setData({
			nz: n
		});
	}
});