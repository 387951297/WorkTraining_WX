// pages/zhongzhi/zhongzhi.js
Page({

  /**
   * 页面的初始数据
   */
  data: {},

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

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})