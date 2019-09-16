//app.js
App({
  onLaunch: function() {
    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        console.log(res);
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
    //封装假数据

    //1234是果蔬
    wx.setStorage({
      key: '1',
      data: {
        prodetail2: {
          price_yh: 45, //价格
          price: 68, //打折前价格
          store: 90999 //库存
        },
        pro: {
          attr_value: false, //不知道干啥用 会跳出来多的一个框
          name: "诸暨66红颜奶油草莓", //名字
          intro: "新鲜现摘牛奶草莓超越丹东九九草莓3斤礼盒装" //副标题
        },
        shu: { //不知道干啥用
          id: 471
        },
        param: [ //标签
          "奶油草莓"
        ],
        bannerItem: [ //图片
          'cloud://a-3f5534.612d-a-3f5534/images/guo/1.jpg'
        ],
        content: '<p><img align="absmiddle" src="https://img.alicdn.com/imgextra/i3/618210080/O1CN01X78bl81CSgA2fs8OI_!!618210080.jpg" style="max-width: 750.0px;"><img align="absmiddle" src="https://img.alicdn.com/imgextra/i3/618210080/O1CN01TlO5IN1CSgA55NHhs_!!618210080.jpg" style="max-width: 750.0px;"><img align="absmiddle" src="https://img.alicdn.com/imgextra/i3/618210080/O1CN01I2fIOQ1CSgA2fuTt1_!!618210080.jpg" class="" style="max-width: 750.0px;" width="790" height="668"><img align="absmiddle" src="https://img.alicdn.com/imgextra/i2/618210080/O1CN013lUZIc1CSgA16RV5L_!!618210080.jpg" class="" style="max-width: 750.0px;" width="790" height="673"><img align="absmiddle" src="https://img.alicdn.com/imgextra/i2/618210080/O1CN01rcNLH61CSgA2fsP2S_!!618210080.jpg" class="" style="max-width: 750.0px;" width="790" height="816" data-spm-anchor-id="2013.1.0.i2.705e495fTniFDQ"><img align="absmiddle" src="https://img.alicdn.com/imgextra/i2/618210080/O1CN01q7neXP1CSgA28GbnW_!!618210080.jpg" class="" style="max-width: 750.0px;" width="790" height="576"><img align="absmiddle" src="https://img.alicdn.com/imgextra/i2/618210080/O1CN01R3x3DM1CSgA3JKWGx_!!618210080.jpg" class="" style="max-width: 750.0px;" width="790" height="549"><img align="absmiddle" src="https://img.alicdn.com/imgextra/i4/618210080/O1CN01qXnEn11CSgA1h0MXZ_!!618210080.jpg" class="" style="max-width: 750.0px;" width="790" height="934"><img align="absmiddle" src="https://img.alicdn.com/imgextra/i3/618210080/O1CN01hvNVe61CSgA1gz9iL_!!618210080.jpg" class="" style="max-width: 750.0px;" width="790" height="774"></p>',
        productId: 1,
      }
    });
    wx.setStorage({
      key: '2',
      data: {
        prodetail2: {
          price_yh: 23.9, //价格
          price: 49, //打折前价格
          store: 90999 //库存
        },
        pro: {
          attr_value: false, //不知道干啥用 会跳出来多的一个框
          name: "新鲜水果浙江上虞特产黄花梨翠冠梨 8至10斤 江浙沪皖包邮", //名字
          intro: "新鲜水果浙江上虞特产黄花梨翠冠梨 8至10斤 江浙沪皖包邮" //副标题
        },
        shu: { //不知道干啥用
          id: 471
        },
        param: [ //标签
          "黄花梨"
        ],
        bannerItem: [ //图片
          'cloud://a-3f5534.612d-a-3f5534/images/guo/2.jpg'
        ],
        content: '<div id="J_DivItemDesc" class="content"><p data-spm-anchor-id="2013.1.0.i2.77dd2c46LCO8i1"><span style="color: #666666;font-family: arial   helvetica   sans-serif;line-height: 28.0px;">谢塘黄花梨是浙江省绍兴市上虞区谢塘镇的特产。谢塘镇黄花梨因其汁多、味甜、皮薄、爽口，深受广大消费者喜欢，产品在市场上十分走俏。 上虞产梨历史悠久，南宋《嘉泰会稽志》就有“虞产青消梨”的记载。电影导演谢晋的故乡——谢塘，地处上虞东北部，杭州湾南岸，土质适合黄花梨生长。</span><br style="color: #666666;font-family: arial   helvetica   sans-serif;line-height: 28.0px;"> <span style="color: #666666;font-family: arial   helvetica   sans-serif;line-height: 28.0px;">&nbsp; &nbsp; “手把明月珠，打落金色梨。”黄褐色的梨子宛如蜜罐，肉白脆嫩，汁多味甜，口味上乘。当北方的砀山梨、莱阳梨、雅梨等尚未上市时，黄花梨已成熟开摘，自然成了百姓家中的时鲜果品。 谢塘镇有近万亩“江南梨园”，其主打品种翠冠梨，皮薄多汁，细嫩甘甜而爽脆，耐贮运，是符合出口标准的早熟梨品种，种植面积达4000多亩。翠冠梨人称“六月雪”，是盛夏解渴的时令佳品，有“百果之宗”的美誉。 谢塘是浙江省最大的黄花梨生产基地，被浙江省林业厅命名为“浙江省黄花梨之乡”；同时被认定为黄花梨省级无公害基地和国家级无公害农产品，2006年获农业厅精品水果金奖。</span><img style="max-width: 750.0px;" src="https://img.alicdn.com/imgextra/i3/2911694309/TB2C4aNEwaTBuNjSszfXXXgfpXa_!!2911694309.jpg" align="absmiddle" data-spm-anchor-id="2013.1.0.i0.77dd2c46LCO8i1"><img style="max-width: 750.0px;" src="https://img.alicdn.com/imgextra/i3/2911694309/TB20SYMEr5YBuNjSspoXXbeNFXa_!!2911694309.jpg" align="absmiddle"> </p></div>',
        productId: 2,
      }
    });
    wx.setStorage({
      key: '3',
      data: {
        prodetail2: {
          price_yh: 21.8, //价格
          price: 50, //打折前价格
          store: 90999 //库存
        },
        pro: {
          attr_value: false, //不知道干啥用 会跳出来多的一个框
          name: "源自江南吐鲁番的水果皇后--上虞野藤葡萄", //名字
          intro: "源自江南吐鲁番的水果皇后--上虞野藤葡萄" //副标题
        },
        shu: { //不知道干啥用
          id: 471
        },
        param: [ //标签
          "野藤葡萄"
        ],
        bannerItem: [ //图片
          'cloud://a-3f5534.612d-a-3f5534/images/guo/3.jpg'
        ],
        content: '<div id="J_DivItemDesc" class="content"><p style="text-align: center;"><span style="color: #00ff00;"><span style="font-size: 48.0px;"><span style=""><strong> 上虞盖北红富士葡萄</strong></span></span></span></p><p><img style="max-width: 750.0px;" src="https://img.alicdn.com/imgextra/i4/683843370/TB2VQ_BHkSWBuNjSszdXXbeSpXa_!!683843370.jpg" align="absmiddle"><img style="max-width: 750.0px;" src="https://img.alicdn.com/imgextra/i4/683843370/TB2kbtqy5OYBuNjSsD4XXbSkFXa_!!683843370.jpg" align="absmiddle"><img style="max-width: 750.0px;" src="https://img.alicdn.com/imgextra/i2/683843370/TB2Wkg3G4SYBuNjSsphXXbGvVXa_!!683843370.jpg" align="absmiddle"><img style="max-width: 750.0px;" src="https://img.alicdn.com/imgextra/i3/683843370/TB2pHmKHkCWBuNjy0FaXXXUlXXa_!!683843370.jpg" align="absmiddle"></p><p><span style="font-size: 24.0px;"><span style=""><strong><span style="color: #ff0000;">由于葡萄是脆皮易过质水果，部分地区快递运输无法直达处将不预发货，在此深感抱歉</span></strong></span></span><img alt="" src="https://assets.alicdn.com/sys/wangwang/smiley/48x48/35.gif" class=""><img alt="" src="https://assets.alicdn.com/sys/wangwang/smiley/48x48/35.gif" class=""><img alt="" src="https://assets.alicdn.com/sys/wangwang/smiley/48x48/35.gif" class=""></p><p><span style="font-size: 18.0px;"><span style=""><span style="color: #9900ff;"><em>葡萄</em></span></span></span></p><span style="font-size: 18.0px;"><span style=""><span style="color: #9900ff;"><em> </em></span></span></span><p><span style="font-size: 18.0px;"><span style=""><span style="color: #9900ff;"><em>【科属】</em></span></span></span></p><span style="font-size: 18.0px;"><span style=""><span style="color: #9900ff;"><em> </em></span></span></span><p><span style="font-size: 18.0px;"><span style=""><span style="color: #9900ff;"><em>&nbsp; &nbsp; 为葡萄科植物葡萄的成熟果实。落叶木质藤本，长12-20米；树皮长片状剥落，幼枝光滑。叶互生，近圆形，长7-15厘米，宽6-14厘米，3-5裂，基部心形，两侧靠拢，边缘粗齿。圆锥花序，花小，黄绿色。花后结浆果，果椭球形，圆球形。著名水果，亦为酿酒制干果的原料。 【特点】葡萄粒大、色艳、肉厚、味甜。葡萄有龙眼、黑鸡心、瓶儿、牛奶、驴奶、西营葡萄、白玛瑙、黑玛瑙、紫玫瑰、白鸡心等品种，引入的品种有粉红太妃、卡拉斯玫瑰、保尔加尔、葡萄园皇后、玫瑰香、无核黑、巨峰、零丹等。<br></em></span></span></span></p><span style="font-size: 18.0px;"><span style=""><span style="color: #9900ff;"><em> </em></span></span></span><p><span style="font-size: 18.0px;"><span style=""><span style="color: #9900ff;"><em>【成熟期】&nbsp; &nbsp; 7月——10月</em></span></span></span></p><span style="font-size: 18.0px;"><span style=""><span style="color: #9900ff;"><em> </em></span></span></span><p><span style="font-size: 18.0px;"><span style=""><span style="color: #9900ff;"><em>【性味归经】性平，味甘酸；入肺、脾、肾经。热量为每100克47卡</em></span></span></span></p><span style="font-size: 18.0px;"><span style=""><span style="color: #9900ff;"><em> </em></span></span></span><p><span style="font-size: 18.0px;"><span style=""><span style="color: #9900ff;"><em>【功效主治】葡萄酒可补气益血，滋阴生津，强筋健骨，通利小便。主治气血虚弱，肺虚久咳，肝肾阴虚，心悸盗汗，腰腿酸痛，筋骨无力，风湿痹痛，面肢浮肿，小便不利等病症。</em></span></span></span></p><span style="font-size: 18.0px;"><span style=""><span style="color: #9900ff;"><em> </em></span></span></span><p><span style="font-size: 18.0px;"><span style=""><span style="color: #9900ff;"><em><br></em></span></span></span></p><span style="font-size: 18.0px;"><span style=""><span style="color: #9900ff;"><em> </em></span></span></span><p><span style="font-size: 18.0px;"><span style=""><span style="color: #9900ff;"><em>吃葡萄好处：</em></span></span></span></p><span style="font-size: 18.0px;"><span style=""><span style="color: #9900ff;"><em> </em></span></span></span><p><span style="font-size: 18.0px;"><span style=""><span style="color: #9900ff;"><em data-spm-anchor-id="2013.1.0.i0.5e9d6dd2oj5EdV">1、能降低人体血清胆固醇水平，降低血小板的凝聚力，对预防心脑血管病有一定作用。<br></em></span></span></span></p><span style="font-size: 18.0px;"><span style=""><span style="color: #9900ff;"><em> </em></span></span></span><p><span style="font-size: 18.0px;"><span style=""><span style="color: #9900ff;"><em>2、每天食用适量的鲜葡萄，不仅会减少心血管疾病的发病风险，还特别有益于那些局部缺血性心脏病和动脉粥样硬化心脏病患者的健康。</em></span></span></span></p><span style="font-size: 18.0px;"><span style=""><span style="color: #9900ff;"><em> </em></span></span></span><p><span style="font-size: 18.0px;"><span style=""><span style="color: #9900ff;"><em>3、鲜葡萄中的黄酮类物质，能“清洗”血液，防止胆固醇斑块的形成。葡萄越呈黑色，含黄酮类物质越多，但若将葡萄皮和葡萄籽一起食用，对心脏的保护作用更佳。</em></span></span></span></p><span style="font-size: 18.0px;"><span style=""><span style="color: #ffd966;"><em> </em></span></span></span><p>&nbsp;</p></div>',
        productId: 3,
      }
    });
    wx.setStorage({
      key: '4',
      data: {
        bannerItem: [ //图片
          'cloud://a-3f5534.612d-a-3f5534/images/guo/4.jpg'
        ],
        param: [ //标签
          "红心猕猴桃"
        ],
        prodetail2: {
          price_yh: 29.8, //价格
          price: 65, //打折前价格
          store: 90999 //库存
        },
        pro: {
          attr_value: false, //不知道干啥用 会跳出来多的一个框
          name: "舜阳红心猕猴桃", //名字
          intro: "浙江上虞章镇舜阳红心猕猴桃新鲜水果超甜多汁大果礼盒装18枚现摘" //副标题
        },
        content: '<div id="J_DivItemDesc" class="content"><p><img align="absmiddle" style="max-width: 750.0px;" src="https://img.alicdn.com/imgextra/i1/396169497/TB24ElqXiERMeJjy0FdXXaIbpXa_!!396169497.jpg"><img align="absmiddle" style="max-width: 750.0px;" src="https://img.alicdn.com/imgextra/i1/396169497/TB2O7FqXgsSMeJjSspeXXa77VXa_!!396169497.jpg"><img align="absmiddle" style="max-width: 750.0px;" src="https://img.alicdn.com/imgextra/i3/396169497/TB2Xv0qXnZRMeJjSsplXXXeqXXa_!!396169497.jpg"><img align="absmiddle" style="max-width: 750.0px;" src="https://img.alicdn.com/imgextra/i4/396169497/TB2C2trXogQMeJjy0FgXXc5dXXa_!!396169497.jpg"><img align="absmiddle" style="max-width: 750.0px;" src="https://img.alicdn.com/imgextra/i2/396169497/TB2i3FqXnZRMeJjSspkXXXGpXXa_!!396169497.png" class=""><img align="absmiddle" style="max-width: 750.0px;" src="https://img.alicdn.com/imgextra/i1/396169497/TB2L5lpXlUSMeJjy1zkXXaWmpXa_!!396169497.jpg" class=""><img align="absmiddle" style="max-width: 750.0px;" src="https://img.alicdn.com/imgextra/i4/396169497/TB29bxpXbsTMeJjy1zbXXchlVXa_!!396169497.jpg" class=""><img align="absmiddle" style="max-width: 750.0px;" src="https://img.alicdn.com/imgextra/i1/396169497/TB25xNpXlUSMeJjy1zjXXc0dXXa_!!396169497.jpg" class="" data-spm-anchor-id="2013.1.0.i1.569c4b95Q0MEnt"><img align="absmiddle" style="max-width: 750.0px;" src="https://img.alicdn.com/imgextra/i3/396169497/TB26HNpXbsTMeJjSszgXXacpFXa_!!396169497.jpg" class=""><img align="absmiddle" style="max-width: 750.0px;" src="https://img.alicdn.com/imgextra/i3/396169497/TB2foJpXgsSMeJjSspbXXberVXa_!!396169497.jpg" class=""><img align="absmiddle" style="max-width: 750.0px;" src="https://img.alicdn.com/imgextra/i2/396169497/TB29BRqXnZRMeJjSspmXXaj1pXa_!!396169497.jpg" class="" data-spm-anchor-id="2013.1.0.i0.569c4b95Q0MEnt"> </p></div>',
        productId: 4,
        shu: { //不知道干啥用
          id: 471
        },
      }
    });
    wx.setStorage({
      key: '5',
      data: {
        bannerItem: [ //图片
          'https://img.alicdn.com/imgextra/i2/2243792033/O1CN01k1Hm8f1Qt9hhLyMNw_!!0-item_pic.jpg_430x430q90.jpg'
        ],
        param: [ //标签
          "常山胡柚"
        ],
        prodetail2: {
          price_yh: 39.80, //价格
          price: 108.00, //打折前价格
          store: 90999 //库存
        },
        pro: {
          attr_value: false, //不知道干啥用 会跳出来多的一个框
          name: "柚子 常山胡柚 新鲜水果 浙江常山特产 20斤装", //名字
          intro: "2018 新鲜上市 新鲜直达" //副标题
        },
        content: '<div class="content ke-post" style="height: auto;"><p><img src="https://img.alicdn.com/imgextra/i4/2243792033/O1CN01ExaYqR1Qt9h9lcxKG_!!2243792033.jpg" align="absmiddle" class="img-ks-lazyload"></p> <p><img align="absmiddle" src="https://img.alicdn.com/imgextra/i3/2243792033/TB2uj9KiWagSKJjy0FbXXa.mVXa_!!2243792033.jpg" class="img-ks-lazyload"><img align="absmiddle" src="https://img.alicdn.com/imgextra/i3/2243792033/TB2WYngiWagSKJjy0FcXXcZeVXa_!!2243792033.jpg" class="img-ks-lazyload"><img align="absmiddle" src="https://img.alicdn.com/imgextra/i4/2243792033/TB2lM1Qi6ihSKJjy0FiXXcuiFXa_!!2243792033.jpg" class="img-ks-lazyload"><img align="absmiddle" src="https://img.alicdn.com/imgextra/i4/2243792033/TB264G_i6qhSKJjSspnXXc79XXa_!!2243792033.jpg" class="img-ks-lazyload"><img align="absmiddle" src="https://img.alicdn.com/imgextra/i4/2243792033/TB2qHwrifNNTKJjSspcXXb4KVXa_!!2243792033.jpg" class="img-ks-lazyload"><img align="absmiddle" src="https://img.alicdn.com/imgextra/i4/2243792033/TB2NoL7mYwTMeJjSszfXXXbtFXa_!!2243792033.jpg" class="img-ks-lazyload"><img align="absmiddle" src="https://img.alicdn.com/imgextra/i1/2243792033/TB2MGz_ifNNTKJjSspfXXbXIFXa_!!2243792033.jpg" class="img-ks-lazyload"><img align="absmiddle" src="https://img.alicdn.com/imgextra/i4/2243792033/TB2cuSOiWmgSKJjSsplXXaICpXa_!!2243792033.jpg" class="img-ks-lazyload"><img align="absmiddle" src="https://img.alicdn.com/imgextra/i1/2243792033/TB2iwesmLBNTKJjSszbXXaFrFXa_!!2243792033.jpg" class="img-ks-lazyload"><img align="absmiddle" src="https://img.alicdn.com/imgextra/i3/2243792033/TB2uU_7mYwTMeJjSszfXXXbtFXa_!!2243792033.jpg" class="img-ks-lazyload"><img align="absmiddle" src="https://img.alicdn.com/imgextra/i3/2243792033/TB2VlP_mYsTMeJjSszgXXacpFXa_!!2243792033.jpg" class="img-ks-lazyload"><img align="absmiddle" src="https://img.alicdn.com/imgextra/i1/2243792033/TB2cijRm3MPMeJjy1XdXXasrXXa_!!2243792033.jpg" class="img-ks-lazyload" data-spm-anchor-id="a220o.1000855.0.i2.261760ec4lmVpc"><img align="absmiddle" src="https://img.alicdn.com/imgextra/i4/2243792033/O1CN01lUWjfL1Qt9h7f45TP_!!2243792033.jpg" class="img-ks-lazyload"><img align="absmiddle" src="https://img.alicdn.com/imgextra/i2/2243792033/TB2N8kXmYsTMeJjSsziXXcdwXXa_!!2243792033.jpg" class="img-ks-lazyload"><img align="absmiddle" src="https://img.alicdn.com/imgextra/i3/2243792033/TB2EivRm3MPMeJjy1XdXXasrXXa_!!2243792033.jpg" class="img-ks-lazyload"><img align="absmiddle" src="https://img.alicdn.com/imgextra/i1/2243792033/TB2i3vai6ihSKJjy0FlXXadEXXa_!!2243792033.jpg" class="img-ks-lazyload"><img align="absmiddle" src="https://img.alicdn.com/imgextra/i2/2243792033/TB2z_IJg7fb_uJjSsrbXXb6bVXa_!!2243792033.jpg" class="img-ks-lazyload"><img align="absmiddle" src="https://img.alicdn.com/imgextra/i4/2243792033/TB2sRAXmYsTMeJjSsziXXcdwXXa_!!2243792033.jpg" class="img-ks-lazyload"></p></div>',
        productId: 5,
        shu: { //不知道干啥用
          id: 471
        },
      }
    });
    wx.setStorage({
      key: '6',
      data: {
        bannerItem: [ //图片
          'https://img.alicdn.com/imgextra/i2/1761186565/O1CN01RrivZh1yMogAkE06R_!!1761186565.jpg_430x430q90.jpg'
        ],
        param: [ //标签
          "枇杷"
        ],
        prodetail2: {
          price_yh: 168.00, //价格
          price: 399.00, //打折前价格
          store: 90999 //库存
        },
        pro: {
          attr_value: false, //不知道干啥用 会跳出来多的一个框
          name: "新鲜白玉枇杷白沙枇杷孕妇水果非苏州东山琵琶宁海塘栖枇杷礼盒装", //名字
          intro: "5月上旬发货，顺丰包邮，礼盒包装" //副标题
        },
        content: '<div class="content ke-post" style="height: auto;"><p><img src="https://img.alicdn.com/imgextra/i4/1761186565/O1CN01AhR2X21yMog5W0Lj7_!!1761186565.jpg" align="absmiddle" class="img-ks-lazyload"><img src="https://img.alicdn.com/imgextra/i4/1761186565/O1CN01CSpG9F1yMog9zC53W_!!1761186565.jpg" align="absmiddle" class="img-ks-lazyload"><img src="https://img.alicdn.com/imgextra/i1/1761186565/O1CN01JwHIGv1yMogDJuwrS_!!1761186565.jpg" align="absmiddle" class="img-ks-lazyload"><img src="https://img.alicdn.com/imgextra/i1/1761186565/O1CN0120nDpf1yMogF1m5VZ_!!1761186565.jpg" align="absmiddle" class="img-ks-lazyload"><img src="https://img.alicdn.com/imgextra/i3/1761186565/O1CN01k4772C1yMogAkLvJ0_!!1761186565.jpg" align="absmiddle" class="img-ks-lazyload"><img src="https://img.alicdn.com/imgextra/i3/1761186565/O1CN01usL1cP1yMogESd1th_!!1761186565.jpg" align="absmiddle" class="img-ks-lazyload"><img src="https://img.alicdn.com/imgextra/i3/1761186565/O1CN01hmd6jo1yMog9zD5TC_!!1761186565.jpg" align="absmiddle" class="img-ks-lazyload"><img src="https://img.alicdn.com/imgextra/i4/1761186565/O1CN01LVyiGx1yMogAkMjCV_!!1761186565.jpg" align="absmiddle" class="img-ks-lazyload"><img src="https://img.alicdn.com/imgextra/i1/1761186565/O1CN017dyJ8w1yMogDJyZQC_!!1761186565.jpg" align="absmiddle" class="img-ks-lazyload"><img src="https://img.alicdn.com/imgextra/i3/1761186565/O1CN01oQB8Yr1yMogDJwlDd_!!1761186565.jpg" align="absmiddle" class="img-ks-lazyload"><img src="https://img.alicdn.com/imgextra/i3/1761186565/O1CN01bq1PIF1yMogCS9dqq_!!1761186565.jpg" align="absmiddle" class="img-ks-lazyload" data-spm-anchor-id="a220o.1000855.0.i7.439129c8H88qTI"><img src="https://img.alicdn.com/imgextra/i1/1761186565/O1CN01TtIHK51yMogDP4AjL_!!1761186565.jpg" align="absmiddle" class="img-ks-lazyload"> </p></div>',
        productId: 6,
        shu: { //不知道干啥用
          id: 471
        },
      }
    });
    wx.setStorage({
      key: '7',
      data: {
        bannerItem: [ //图片
          'https://gd1.alicdn.com/imgextra/i4/403706083/TB2QTnnxlyWBuNkSmFPXXXguVXa_!!403706083.jpg_400x400.jpg'
        ],
        param: [ //标签
          "红提子"
        ],
        prodetail2: {
          price_yh: 79.00, //价格
          price: '', //打折前价格
          store: 90999 //库存
        },
        pro: {
          attr_value: false, //不知道干啥用 会跳出来多的一个框
          name: "【7斤!甜】正宗浙江台州仙居提子新鲜水果超市红提子现摘应季水果", //名字
          intro: "【7斤!甜】正宗浙江台州仙居提子新鲜水果超市红提子现摘应季水果" //副标题
        },
        content: '<div id="J_DivItemDesc" class="content"><p style="text-align: center;"><span style="font-size: 36.0px;"><span style="font-family: simhei;"><span style="color: #cc0000;"><span style="background-color: #ffd966;">没有华丽的图片设置 因为都是农家自己拍摄的,国产红提现在还没用到成熟季节,</span></span></span></span></p><p style="text-align: center;"><span style="font-size: 36.0px;"></span></p><p style="text-align: center;"><span style="font-size: 36.0px;"><span style="font-family: simhei;"><span style="color: #cc0000;"><span style="background-color: #ffd966;">购买之后会在8月开始陆续发货,会第一时间采摘发当天新鲜的</span></span></span></span></p><p style="text-align: center;"><span style="font-size: 36.0px;"><span style="font-family: simhei;"></span></span></p><p style="text-align: center;"><span style="font-size: 36.0px;"><span style="font-family: simhei;"><span style="color: #cc0000;"><span style="background-color: #ffd966;"><span style="background-color: #ffd966;">当前价格为促销价：79</span></span></span></span></span></p><p style="text-align: center;"><span style="font-size: 36.0px;"><span style="font-family: simhei;"><span style="color: #cc0000;"><span style="background-color: #ffd966;"><span style="background-color: #ffd966;">79单价为7斤=3.5公斤=3500G</span></span></span></span></span></p><p style="text-align: center;"><span style="font-size: 36.0px;"><span style="font-family: simhei;"><span style="color: #cc0000;"><span style="background-color: #ffd966;"><span style="background-color: #ffd966;">对比同类产品 亲们需看下每500G的单价</span></span></span></span></span></p><p style="text-align: center;"><span style="font-family: simhei;"><span style="font-size: 24.0px;"></span></span></p><p><span>&nbsp;</span><span>&nbsp;</span><img style="max-width: 750.0px;" src="https://img.alicdn.com/imgextra/i4/403706083/TB2Ld.XFACWBuNjy0FaXXXUlXXa_!!403706083.jpg" align="absmiddle" data-spm-anchor-id="2013.1.0.i2.38912810kGWHCn"><span>&nbsp;</span><span>&nbsp;<img style="max-width: 750.0px;" src="https://img.alicdn.com/imgextra/i2/403706083/TB2qkuQFwaTBuNjSszfXXXgfpXa_!!403706083.jpg" align="absmiddle"><img style="max-width: 750.0px;" src="https://img.alicdn.com/imgextra/i2/403706083/TB2glkrFDlYBeNjSszcXXbwhFXa_!!403706083.jpg" align="absmiddle"></span></p><div style="color: white;">  .......</div></div>',
        productId: 7,
        shu: { //不知道干啥用
          id: 471
        },
      }
    });
    wx.setStorage({
      key: '8',
      data: {
        bannerItem: [ //图片
          'https://gd4.alicdn.com/imgextra/i3/2648702733/TB27erbgC8mpuFjSZFMXXaxpVXa_!!2648702733.jpg_400x400.jpg'
        ],
        param: [ //标签
          "草莓"
        ],
        prodetail2: {
          price_yh: 79.90, //价格
          price: '', //打折前价格
          store: 90999 //库存
        },
        pro: {
          attr_value: false, //不知道干啥用 会跳出来多的一个框
          name: "浙江舟山岱山现摘新鲜水果 红颜奶油草莓 巧克力草莓1000g/2斤装", //名字
          intro: "浙江舟山岱山现摘新鲜水果 红颜奶油草莓 巧克力草莓1000g/2斤装" //副标题
        },
        content: '<div id="J_DivItemDesc" class="content"><p><img alt="" src="https://assets.alicdn.com/sys/wangwang/smiley/48x48/4.gif"><span style="font-size: 36.0px;"><strong><span style="color: #ff0000;"><span style="background-color: #ff9900;">温馨提示：草莓分奶油草莓、巧克力草莓，只限江浙沪发货，需要哪个产品需要给我们留言哦！没有留言我们随机发货的。我们是自己农场基地现摘现发货。产品被评为无公害产品亲们可以放心选购！</span></span></strong></span></p><p><img align="absmiddle" src="https://img.alicdn.com/imgextra/i1/2648702733/TB2x4ccfl8lpuFjy0FnXXcZyXXa_!!2648702733.jpg"><img align="absmiddle" src="https://img.alicdn.com/imgextra/i2/2648702733/TB2iUFvgylnpuFjSZFgXXbi7FXa_!!2648702733.jpg"><img align="absmiddle" src="https://img.alicdn.com/imgextra/i4/2648702733/TB2cVA.fb8kpuFjy0FcXXaUhpXa_!!2648702733.jpg"><img align="absmiddle" src="https://img.alicdn.com/imgextra/i4/2648702733/TB2Fe3Pfl0kpuFjSsziXXa.oVXa_!!2648702733.jpg" class="" width="750" height="600"><img align="absmiddle" src="https://img.alicdn.com/imgextra/i2/2648702733/TB28X78fl0kpuFjy1XaXXaFkVXa_!!2648702733.jpg" class="" width="750" height="600"><img align="absmiddle" src="https://img.alicdn.com/imgextra/i3/2648702733/TB2ZBAAfmBjpuFjy1XdXXaooVXa_!!2648702733.jpg" class="" width="750" height="800"> <img align="absmiddle" src="https://img.alicdn.com/imgextra/i3/2648702733/TB2P1BygstnpuFjSZFvXXbcTpXa_!!2648702733.jpg" class="" width="960" height="1280"><img align="absmiddle" src="https://img.alicdn.com/imgextra/i3/2648702733/TB29V.ja_cCL1FjSZFPXXXZgpXa_!!2648702733.jpg" class="" width="960" height="1280"><img align="absmiddle" src="https://img.alicdn.com/imgextra/i4/2648702733/TB2rX8CgypnpuFjSZFkXXc4ZpXa_!!2648702733.jpg" class="" width="960" height="1280"><img align="absmiddle" src="https://img.alicdn.com/imgextra/i1/2648702733/TB2CXj2fbJkpuFjy1zcXXa5FFXa_!!2648702733.jpg" class="" width="960" height="1280"><img align="absmiddle" src="https://img.alicdn.com/imgextra/i2/2648702733/TB2c2Eafb8kpuFjy0FcXXaUhpXa_!!2648702733.jpg" class="" width="960" height="1280" data-spm-anchor-id="2013.1.0.i1.46cda59cQVmfaP"></p></div>',
        productId: 8,
        shu: { //不知道干啥用
          id: 471
        },
      }
    });
    wx.setStorage({
      key: '9',
      data: {
        bannerItem: [ //图片
          'https://gd4.alicdn.com/imgextra/i1/1128797780/O1CN0127LHqTKiwo9Az0l_!!1128797780.jpg_400x400.jpg'
        ],
        param: [ //标签
          "甘蔗"
        ],
        prodetail2: {
          price_yh: 29.90, //价格
          price: '', //打折前价格
          store: 90999 //库存
        },
        pro: {
          attr_value: false, //不知道干啥用 会跳出来多的一个框
          name: "浙江温州特产陶山甘蔗新鲜水果孕妇当季时令礼盒装5斤", //名字
          intro: "浙江温州特产陶山甘蔗新鲜水果孕妇当季时令礼盒装5斤" //副标题
        },
        content: '<div id="J_DivItemDesc" class="content"><p><a href="https://baoxiang.play.m.jaeapp.com/app/collectionCoupon/index.do?userId=313561&amp;aid=71592" target="_blank"><img style="max-width: 750.0px;" src="https://img.alicdn.com/imgextra/i1/1128797780/O1CN0127LHr5lw8LvuBl3_!!1128797780.jpg" align="absmiddle"><img style="max-width: 750.0px;" src="https://img.alicdn.com/imgextra/i2/1128797780/O1CN0127LHr4zOU7StrLi_!!1128797780.jpg" align="absmiddle"></a><img style="max-width: 750.0px;" src="https://img.alicdn.com/imgextra/i4/1128797780/O1CN0127LHqUP8vYKgTzA_!!1128797780.jpg" align="absmiddle"><a href="https://favorite.taobao.com/popup/add_collection.htm?spm=2013.1.1000126.d22.7d6266bed7aBKT&amp;id=106372329&amp;itemid=106372329&amp;itemtype=0&amp;ownerid=cba3b823b344b08bfbc791c24e4dd56b&amp;scjjc=2&amp;_tb_token_=ede1b7510475b" target="_blank"><img style="max-width: 750.0px;" src="https://img.alicdn.com/imgextra/i3/1128797780/O1CN0127LHqSq2gmgEVbA_!!1128797780.jpg" align="absmiddle"></a><img style="max-width: 750.0px;" src="https://img.alicdn.com/imgextra/i1/1128797780/O1CN0127LHqTKh8UHWelg_!!1128797780.jpg" class="" align="absmiddle" width="790" height="773"><img style="max-width: 750.0px;" src="https://img.alicdn.com/imgextra/i2/1128797780/O1CN0127LHqTQTyJ6TjTf_!!1128797780.jpg" class="" align="absmiddle" width="790" height="580"><img style="max-width: 750.0px;" src="https://img.alicdn.com/imgextra/i1/1128797780/O1CN0127LHqTr2WC8KypN_!!1128797780.jpg" class="" align="absmiddle" width="790" height="408"><img style="max-width: 750.0px;" src="https://img.alicdn.com/imgextra/i4/1128797780/O1CN0127LHqUP8amNVEnU_!!1128797780.jpg" class="" align="absmiddle" width="790" height="292"><img style="max-width: 750.0px;" src="https://img.alicdn.com/imgextra/i4/1128797780/O1CN0127LHqTht0OP72qF_!!1128797780.jpg" class="" align="absmiddle" width="790" height="1005"><img style="max-width: 750.0px;" src="https://img.alicdn.com/imgextra/i3/1128797780/O1CN0127LHqNQW8mz8L8G_!!1128797780.jpg" class="" align="absmiddle" width="790" height="696"><img style="max-width: 750.0px;" src="https://img.alicdn.com/imgextra/i3/1128797780/O1CN0127LHqTQSy0YstCG_!!1128797780.jpg" class="" align="absmiddle" width="790" height="676"><img style="max-width: 750.0px;" src="https://img.alicdn.com/imgextra/i3/1128797780/O1CN0127LHqUP9Wxql5tP_!!1128797780.jpg" class="" align="absmiddle" width="790" height="770"><img style="max-width: 750.0px;" src="https://img.alicdn.com/imgextra/i1/1128797780/O1CN0127LHqT68ZlCsogY_!!1128797780.jpg" class="" align="absmiddle" width="790" height="1379" data-spm-anchor-id="2013.1.0.i1.f31560betA6jur">&nbsp; &nbsp; &nbsp;</p></div>',
        productId: 9,
        shu: { //不知道干啥用
          id: 471
        },
      }
    });
    wx.setStorage({
      key: '10',
      data: {
        bannerItem: [ //图片
          'https://gd3.alicdn.com/imgextra/i2/718051902/TB2kk.msQOWBuNjSsppXXXPgpXa_!!718051902.jpg_400x400.jpg'
        ],
        param: [ //标签
          "杨梅"
        ],
        prodetail2: {
          price_yh: 118.00, //价格
          price: '', //打折前价格
          store: 90999 //库存
        },
        pro: {
          attr_value: false, //不知道干啥用 会跳出来多的一个框
          name: "杨梅新鲜慈溪余姚荸荠种特甜浙江特产精品水果特价包邮5斤", //名字
          intro: "杨梅新鲜慈溪余姚荸荠种特甜浙江特产精品水果特价包邮5斤" //副标题
        },
        content: '<div id="J_DivItemDesc" class="content"><p> 浙江余姚，本地杨梅，自家种的个大，品质口感非常好，当天现摘现发，让您在第一时间吃到正宗的余姚杨梅。</p><p>杨梅预计6月初左右上市，需要的亲们可以提前预定，价格可能要变动。 整箱杨梅5斤左右。</p><p>&nbsp;</p><p>&nbsp;</p><p><img style="max-width: 750.0px;" src="https://img.alicdn.com/imgextra/i3/718051902/TB2i5mMuCtYBeNjSspkXXbU8VXa_!!718051902.jpg" align="absmiddle"><img style="max-width: 750.0px;" src="https://img.alicdn.com/imgextra/i1/718051902/TB2YWJpuuuSBuNjSsziXXbq8pXa_!!718051902.jpg" align="absmiddle"><img style="max-width: 750.0px;" src="https://img.alicdn.com/imgextra/i1/718051902/TB25kwEl98YBeNkSnb4XXaevFXa_!!718051902.jpg" align="absmiddle"><img style="max-width: 750.0px;" src="https://img.alicdn.com/imgextra/i2/718051902/TB2dQNvur5YBuNjSspoXXbeNFXa_!!718051902.jpg" align="absmiddle" data-spm-anchor-id="2013.1.0.i2.66882922tZw7t2"><img style="max-width: 750.0px;" src="https://img.alicdn.com/imgextra/i2/718051902/TB2RSZxl_XYBeNkHFrdXXciuVXa_!!718051902.jpg" class="" align="absmiddle" width="750" height="524"><img style="max-width: 750.0px;" src="https://img.alicdn.com/imgextra/i3/718051902/TB2.d39ubGYBuNjy0FoXXciBFXa_!!718051902.jpg" class="" align="absmiddle" width="750" height="580"><img style="max-width: 750.0px;" src="https://img.alicdn.com/imgextra/i2/718051902/TB2qDZll3KTBuNkSne1XXaJoXXa_!!718051902.jpg" class="" align="absmiddle" width="750" height="708"></p></div>',
        productId: 10,
        shu: { //不知道干啥用
          id: 471
        },
      }
    });



    //nong1 nong2是农庄
    wx.setStorage({
      key: 'nong1',
      data: {
        productId: 101,
        name: "富阳天地生态休闲农庄",
				photo_d: "cloud://a-3f5534.612d-a-3f5534/images/nong/1/1.jpg",
        local: "杭州 杭州富阳区富春街道青云桥村铁坞口",
        tel: "0571-63344798",
        price: 98,
        tag: "实惠",
				content: '农庄为您提供了各种风格不同的居住环境，青瓦白墙，现代徽派风格的建筑群，坐落在原生态的自然群山中，高贵典雅、错落有致。中式的庄园风格，享受着人间仙境。原生态的木屋别墅呈现在半山腰的果园之中，雅致的居住设施仿佛回归大自然的怀抱中，开窗满目果树唾手可得。尽享“枯藤老树昏鸦、小桥流水人家”的世外风情。<br><img src="cloud://a-3f5534.612d-a-3f5534/images/nong/1/2.jpg"><br><img src="cloud://a-3f5534.612d-a-3f5534/images/nong/1/3.jpg">'
      }
    });

    wx.setStorage({
      key: 'nong2',
      data: {
        productId: 102,
        name: "余杭翠羊湾休闲农庄",
				photo_d: "cloud://a-3f5534.612d-a-3f5534/images/nong/2/1.jpg",
        local: "竹园村大禹谷（舟青公路）",
        tel: "0571-88643668",
        price: 128,
        tag: "休闲",
				content: '<img src="cloud://a-3f5534.612d-a-3f5534/images/nong/2/2.jpg">'
      }
    });

    wx.setStorage({
      key: 'nong3',
      data: {
        productId: 103,
        name: "林弘巨野生态休闲农庄",
				photo_d: "cloud://a-3f5534.612d-a-3f5534/images/nong/3/1.jpg",
        local: "杭州 建德市下涯镇春秋村",
        tel: "15858276543",
        price: 79,
        tag: "实惠",
				content: '<img src="cloud://a-3f5534.612d-a-3f5534/images/nong/3/2.jpg">'
      }
    });

    wx.setStorage({
      key: 'nong4',
      data: {
        productId: 104,
        name: "大慈岩农家乐",
				photo_d: "cloud://a-3f5534.612d-a-3f5534/images/nong/4/1.jpg",
        local: "建德市大慈岩镇大慈岩村",
        tel: "13867178418",
        price: 168,
        tag: "风景",
				content: '【慈岩休闲山庄】坐落于大慈岩风景区侧对面，地理位置优越。离大慈岩风景区只有3分钟车程。【慈岩休闲山庄】是一所集【餐饮】【垂钓】【住宿】【野外拓展】等娱乐的农家休闲场所。<br><img src="cloud://a-3f5534.612d-a-3f5534/images/nong/4/2.jpg">'
      }
    });

    wx.setStorage({
      key: 'nong5',
      data: {
        productId: 105,
        name: "千岛湖丽居山庄",
				photo_d: "cloud://a-3f5534.612d-a-3f5534/images/nong/5/1.jpg",
        local: "浙江省杭州市淳安县千岛湖镇金峰乡景山村59号",
        tel: "4008281661;15957194248;18806819867;0571-64816588",
        price: 236,
        tag: "饮食",
				content: '丽居山庄是一家集餐饮、住宿、娱乐为一体的农家乐。座落在美丽的千岛湖畔，周边风景优美，出行便利。拥有湖景标准间、山景标准间和大床房、(大多数房间可以看见湖景)，房间温馨舒适，空调，彩电，淋浴设施齐全，热水二十四小时免费为您开放，并提供千岛湖特色农家菜馆、烧烤、采摘、钓鱼、划船、卡拉OK、登山等一系列休闲娱乐项目，是您休闲度假的理想场所。只要你靠近千岛湖丽居山庄附近，乡村之美便无处不在，让你仿佛进入了一个人间天堂，在这天然氧吧里你不但可与森林共呼吸，并且还能够观赏秀媚的千岛湖大自然景色。<br><img src="cloud://a-3f5534.612d-a-3f5534/images/nong/5/2.jpg">'
      }
    });


		wx.setStorage({
			key: 'nong6',
			data: {
				productId: 106,
				name: "新任溪草莓基地",
				photo_d: "cloud://a-3f5534.612d-a-3f5534/images/nong/6/1.jpg",
				local: "丁宅乡新任溪村",
				tel: "13606571741",
				price: 76,
				tag: "",
				content: '新任溪草莓基地是丁宅最大的一个草莓种植基地，是有许多散户栽种的。种植面积达250余亩，基地内交通便捷，停车位充足，十分适合自驾采摘游。<br>随手撩拨起任意一扇大棚的门，你就会与满棚的草莓清香撞个满怀。绿茵茵的草莓藤低低地平躺在地面上，却依然抑制不住它们散布在空气里成熟的骄傲。 <br>交通：自驾游---沿上虞百章公路，经丰惠过五婆岭隧道，往章镇方向继续行驶约3公里；公交车--张溪（637）、章镇（636）<br><img src="cloud://a-3f5534.612d-a-3f5534/images/nong/6/2.jpg">'
			}
		});



		wx.setStorage({
			key: 'nong7',
			data: {
				productId: 107,
				name: "阿寿哥农庄",
				photo_d: "cloud://a-3f5534.612d-a-3f5534/images/nong/7/1.jpg",
				local: "五婆岭隧道前200米处 ",
				tel: "18758535529",
				price: 58,
				tag: "",
				content: '阿寿哥草莓基地种植面积达10多亩，品种有章姬、红颜、丰香等多个优质草莓，游人可在地里亲手采摘，尽情享受甜香的草莓，体会采摘的乐趣。远远看去，一畦畦 草莓顶着碧绿叶子连成一片，令人陶醉。那些红扑扑的脸蛋娇滴滴地躲在宽大的绿叶下边，如同一颗颗深红色的宝石镶嵌其中。<br>随手撩拨起任意一扇大棚的门，你就会与满棚的草莓清香撞个满怀。绿茵茵的草莓藤低低地平躺在地面上，却依然抑制不住它们散布在空气里成熟的骄傲。 <br>交 通：自驾游---沿上虞百章公路，经丰惠过五婆岭隧道，向前200米左右，加油站对面；公交车---张溪（637）、章镇（636）<br><img src="cloud://a-3f5534.612d-a-3f5534/images/nong/7/2.jpg">'
			}
		});



		wx.setStorage({
			key: 'nong8',
			data: {
				productId: 108,
				name: "丁宅乡庙湾村",
				photo_d: "cloud://a-3f5534.612d-a-3f5534/images/nong/8/1.jpg",
				local: "浙江省杭州市淳安县千岛湖镇金峰乡景山村59号",
				tel: "18967599799",
				price: 50,
				tag: "",
				content: '这里的草莓主要有红颜和章姬两个品种，全都是按照有机标准种植的，草莓口感清甜，香气浓郁，是送人的极好礼盒。采摘完后，去附近的农家乐美美的饱餐一顿，真正体验回“莓”好生活。<br>交 通：公交车---陈溪（655）、太平山（656）下管（652）、丁宅（651）<br><img src="cloud://a-3f5534.612d-a-3f5534/images/nong/8/2.jpg"><br><img src="cloud://a-3f5534.612d-a-3f5534/images/nong/8/3.jpg">'
			}
		});



    //article1 article2是文章
    wx.setStorage({
      key: 'article1',
      data: {

        id: "1", //id
        title: "代餐水果都有哪些减肥法", //标题
        time: "2018-03-19", //时间
        src: "39健康网", //来源
        content: '<div class="art_con" id="contentText">    <center><img src="http://pimg.39.net/PictureLib/A/f76/20171016/org_2160415.jpg">    </center>    <div class="hzh" id="hzh_fitness">        <style>            </style>    </div>    <p></p>    <p>　　代餐水果都有哪些？下面一起来看看吧！</p>    <p>　　水果代餐可以起到<a href="http://zxk.39.net/zx/xiangmu/6960e.html" target="_blank" keycmd="null">减肥</a>作用，但是长期用水果代餐会对身体造成伤害，所以不建议大家使用这种方法减肥。</p>    <p>　　很多人认为水果中的脂肪含量低，能量低，所以吃水果不会发胖，于是就会大量的吃起来。水果之所以是甜的，是因为水果中含有糖分，这种糖分跟饮料、糕点里的糖分一样，摄入过多也会转化成脂肪的。如果在不减少饭菜量的情况下，吃上两个大<a href="http://fitness.39.net/food/2379.html" target="_blank" keycmd="null">苹果</a>，或者吃半个<a href="http://fitness.39.net/food/12602.html" target="_blank" keycmd="null">西瓜</a>，脂肪就会越积越多，不利于正常体重的控制。</p>    <p>　　水果代餐是众多减肥方法中的一种，从供能的角度来讲，水果适合替代主食，因为主食也是靠它所含的糖类（<a href="http://fitness.39.net/food/1646.html" target="_blank" keycmd="null">淀粉</a>）来给我们提供能量的。但是，如果长期用水果去替代其它的食物的话会造成蛋白质的摄入不足，不但不能保持正常的体重，还会对身体造成危害。如果一定要用水果代餐的话，建议代一餐，而且不建议是早餐，其余两餐要正常合理摄入食物。</p>    <p><strong>　　代餐水果都有哪些</strong></p>    <p>　　1、苹果 120g/60kcal</p>    <p>　　早在好几年前，就有人为苹果量身定做出一套减肥来，还曾经引起一阵苹果减肥法的热潮呢！事实上苹果的确是减肥的风云水果，它有丰富的<a href="http://fitness.39.net/food/19006.html" target="_blank" keycmd="null">果胶</a>，可以帮助肠子与毒素做结合，加速排毒功效并降低热量吸收，此外苹果的钾质也多，可以防止腿部水肿。慢慢的咀嚼有点硬度的苹果，将成分释放出来，不仅有饱足感，而且他的卡路里热量也不高。</p>    <p>　　2、<a href="http://fitness.39.net/food/2468.html" target="_blank" keycmd="null">葡萄</a>柚 170g/60kcal</p>    <p>　　<a href="http://fitness.39.net/food/2482.html" target="_blank" keycmd="null">葡萄柚</a>酸性物质可以帮助消化液的增加，藉此促进消化功能，而且营养也容易被吸收。</p>    <p>　　此外为什么葡萄柚减肥时也会被列为必食的风云水果，原因是它含有丰富的维他命C，大约一颗葡萄柚就有100豪克，不仅可以消除疲劳，还可以美化肌肤呢！ 重要的是它的含糖份少，减肥食用来补充维他命C最适合不过了。至于很多女孩害怕的重酸味，建议你，可以滴一点点蜂蜜在葡萄柚上，酸味马上被中和！</p>    <p>　　3、蕃茄 100g/25kcal</p>    <p>　　严格说起来，蕃茄应该是被归在蔬菜类才正确吧！所以在食材中常看到它，而且蕃茄也是属于愈嫩愈吃的一类食物呢！蕃茄含有茄红素，食物纤维及果胶成份可以降低热量摄取，促进肠胃蠕动。</p>    <p>　　而且独特的酸味可以刺激胃液分泌，甚至提升食物的口感，是很好料理健康的食材呢！</p>    <p>　　4、<a href="http://spk.39.net/shipin/shuiguo/zrxg/e0503.html" target="_blank" keycmd="null">凤梨</a> 205g/60kcal</p>    <p>　　有没有听过人家说凤梨很“利”，一定要在饭后吃才不会伤胃的说法。</p>    <p>　　这说法可是有凭据的呦！ 因为凤梨的蛋白分解酵素相当强力，虽然可以帮助肉类的蛋白质消化，但是如果在餐前吃的话，很容易造成胃壁受伤呦！ 因此利用吃凤梨来减肥一定要注意时间问题。</p>    <p>　　5、香蕉&nbsp;75g/60kcal</p>    <p>　　便便出不来的女生都会被建议，试试香蕉吧，所以香蕉减肥也是很不错的方法！ 因为香蕉含有丰富食物纤维，维他命A，钾质等，所以有很棒的整肠、强化肌肉、利尿软便功能。对于常<a href="http://jbk.39.net/bm/" target="_blank" keycmd="bindJbkUi">便秘</a>、肌肤干燥的美眉而言，这是款又瘦又美的水果！</p>    <p><strong>　　水果减肥法三天瘦8斤</strong></p>    <p>　　周一：<a href="http://fitness.39.net/food/12690.html" target="_blank" keycmd="null">木瓜</a>—黄色水果</p>    <p>　　周一，带着一份红色的激情，开始一天的工作，我一定会精力充沛！今晚，我不会亏待自己。忙碌了一整天，哪里顾得上补充什么营养啊，就做一杯“橙色心情”吧。</p>    <p>　　据说郑秀文、 林熙蕾、徐怀钰等众多美女明星都是通过食用木瓜来丰胸和减肥的。</p>    <p>　　减肥原理：木瓜里内含木瓜酵素，这些木瓜酵素不仅可分解蛋白质、糖类，更可分解脂肪 通过分解脂肪可以去除赘肉。</p>    <p>　　周二：蓝莓—蓝色水果</p>    <p>　　蓝莓果富含大量超级的抗氧化物俗称OPC的花青素，被国外专家称为“抗氧化之王”。是一种众所周知的保护视力的水果。</p>    <p>　　除含有常规的糖、酸、维生素C、矿物元素外，蓝莓果实中还含有尼克酸、SOD、黄酮等特殊成分，具有良好的防脑神经老化、强心、抗癌等保健作用。</p>    <p>　　减肥原理：热量低，含丰富果酸，据说对减下半身很有帮助哦。</p>    <p>　　周三：青苹果—青色水果</p>    <div class="hzh_botleft">    </div></div>',
        type: "d" //类型 abcd对应 实时头条 资讯信息 市场动态 科普

      }
    });
    wx.setStorage({
      key: 'article3',
      data: {

        id: "3", //id
        title: "她帮全村卖了300万斤水果，如今成为今日头条“三农合伙人”", //标题
        time: "1月22日", //时间
        src: "财经惠", //来源
        content: '<div id="main_content" class="js_selection_area" data-fid="faecdccee7">                                <!--mainContent begin-->                                <p>“广西四分之一的顺丰荔枝订单都来自你们？这个是真的假的？”</p><p>看到台下观众有些惊讶的表情，短视频平台西瓜视频上的“三农网红”巧妇9妹微笑着给了肯定的答复，“是的，千真万确。”一个农村的“流量明星”竟然能带来这么大的销量和利益？听到巧妇9妹的回答，台下的观众惊讶起来了，会场有些骚动了。</p><p style="text-align:center"><img src="http://p0.ifengimg.com/a/2018_27/aee9905e9f5c741_size799_w553_h369.png" width="553" height="369" alt=""></p><p>这是发生在今日头条三农创作者大会上的一幕。</p><p>7月2日，国内互联网巨头今日头条在广西灵山苏屋塘村召开了首届三农创作者大会，这场充满了乡土气息的发布会被业内认为是“一场距离农村最近的发布会”。</p><p>当天，巧妇9妹作为“山货上头条”的代表，因为帮助乡亲们卖出300万斤水果，带动全村致富，被聘为今日头条“三农合伙人”。</p><p>对于文章开头那个观众的问题，当天就在三农创作者大会现场的今日头条扶贫负责人杨洁也给予了自己的解答。她告诉现场的观众，巧妇9妹有这么大的影响力，最主要的原因是源于她在西瓜视频上的211万粉丝。</p><p>她还透露了另一个数字：依托在西瓜视频上孵化出来的巧妇9妹品牌，如今巧妇9妹通过头条号引流到电商，月流水超过100万元。所以，整个广西有四分之一的顺丰荔枝订单来自他们也就不奇怪了。</p><p style="text-align:center"><img src="http://p0.ifengimg.com/a/2018_27/439cb7a75c6b04c_size799_w553_h369.png" width="553" height="369" alt=""></p><p>2日当天，广西省的顺丰负责人也参与了三农创作者大会，在会场，他对这个数字也给予了证实，“巧妇9妹是我们的重点合作商户。”</p><p>在西瓜视频上爆火，巧妇9妹不仅成就了自己，她现在还在带领全村一起致富——很多同村的村民现在把农产品都交给9妹售卖，整个村子通过巧妇9妹已经卖出了300万斤水果，价值约3000万元。</p><p>人生如戏，命运弄人。</p><p>只不过一年之前，巧妇九妹还是一名整天忙农活、烧饭做菜的农妇，而她命运的改变只不过源于一年之前的一次好奇举动。也许是为了补贴家用、也许只是希望在西瓜短视频平台上分享一下宁静的乡村生活，巧妇九妹在西瓜短视频上注册了一个账号，开始发布自己的一些农村生活视频——没想到，一发不可收拾，人生从此改变。</p><p style="text-align:center"><img src="http://p1.ifengimg.com/a/2018_27/07680a37eccda12_size673_w553_h311.png" width="553" height="311" alt=""></p><p>巧妇九妹的命运改变其实也是时代的缩影。随着农村互联网基础建设的基本成熟，互联网巨头看到了农村市场的巨大潜力，纷纷开始发力入局。在这一波新“农村包围城市”的运动中，今日头条成为了领先者。</p><p>有意思的是，不过就在几年前，农村互联网还处于“刷墙”的阶段。每年到了年末，从大城市回老家的“狗蛋”、“翠花”们都会在朋友圈分享那些有趣又有些雷人的互联网公司的农村“刷墙”广告。这其实也不怪这些互联网公司——在前几年，农村基础设施的不完善，让这个市场还不具备腾飞的基础。</p><p>今年6月28日，上海财经大学发布了一年一度的《2017中国农村互联网应用报告》，这也是他们连续第十年坚持发布同样主题的报告。在今年的报告中，上海财经大学的调查明确指出，4G网络已覆盖88.43%的被调研村庄。</p><p>2017年，国家工信部发布了《信息通信行业发展规划（2016-2020年）》，规划中明确提出，要在“十三五”期末，促进城市和农村地区无线宽带网络的协调发展，实现4G网络深度和广度覆盖。这也预示着，4G网络在不久的将来，将基本覆盖所有农村地区。这也为互联网在农村的发展提供了可能。</p><p>另外，报告中提到了智能手机，认为告别了不方便的PC时代后，随着智能手机的普及，移动互联网应用已经成为农民生活、生产中必不可少的组成部分，约有95.9%的网民使用微信、今日头条等软件。智能手机已经成为中国农村网民上网主要设备，而正是小小的手机，使得一个个小乡村得以连接大世界——在移动互联网时代，农村市场终于开始有了崛起的可能性。</p><p>在大中城市中，互联网巨头们已经杀成了一片红海，而已经悄悄成熟的中国广大农村市场，常住人口达到5.7亿人，约占总人口42%——却还是一片安静的蓝海，等待新主人的到来。巧妇9妹的走红，就很直白地让大家看到了互联网技术和思维在农村产生的化学反应和巨大能量，让人惊讶。</p><p>互联网巨头看到了中国农村的巨大机会，纷纷开始动手，农村淘宝这两年就动作不断，最近先是通过农村淘宝，把中国农村的10万只小龙虾卖到了俄罗斯世界杯的赛场，这两天，又和中国“水稻之父”袁隆平达成协议，在脱贫领域展开全面合作。</p><p>淘宝看到了，今日头条自然也不会错过，作为人工智能信息平台，今日头条有自己的优势。从今日头条成立之初，三农信息就一直是平台上最受欢迎的类别之一。</p><p style="text-align:center"><img src="http://p0.ifengimg.com/a/2018_27/5d278abac348b6f_size799_w553_h369.png" width="553" height="369" alt=""></p><p>作为国内最大的智能内容分发平台，在三农这个垂直领域，今日头条利用自己领先的大数据和人工智能技术优势，促进了三农信息高效、精准的传播，有效地解决了农村长久以来一直无法解决的一个大问题——信息不对称，让农村网友可以零成本地得到各方面的三农信息，有效地提高了农村各方面的效率，同时，也让广大农村可以分享到中国互联网发展的红利。</p><p>现在，今日头条平台内，包括头条号、西瓜视频、微头条、悟空问答等产品，目前已经有3万个三农账号，全面覆盖三农政策、农业技术、农资农机、农贸行情、农产购销、惠农服务等资讯类别。2017年，这3万个账号发布的图文和视频，被阅读了240亿次。</p><p>三农内容，是今日头条上最受欢迎的内容之一。根据现有增长趋势预计，2018年全年，三农创作者将发布约180万篇文章和视频，将获得超过500亿次阅读量和播放量。</p><p>在今日头条及西瓜视频平台上，现在也涌现出了大批三农“流量明星”，这也直接促进了农村的脱贫致富。</p><p>这其中，比较有代表性的有三位。他们代表了三农信息普惠带来的三种价值：一是经济价值，凭借精准的信息分发，今日头条帮助特色农产品找到需要的消费者;二是技术价值，三农专家带动技术下乡出海，让三农用户平等免费获取三农技术和知识;三是人文价值，今日头条提供多样化的创作体裁和便捷的创作工具，助力传播农村美好文化。</p><p>第一位是河南郑州的三农创作者：“付老师种植技术团队”，体现的是技术价值。付老师团队是农业技术专家，专门分享种植经验和高产技术，他们在头条上发表1000字左右的农业技术讲解文章，和两分钟左右的农业技术教学视频。这些实用的些技术帮助到了很多人。有126万人阅读了如何用糖帮助黄瓜高产种植，有59万人观看了如何不用除草剂除草。他们现在的短视频，已经火到了俄罗斯、菲律宾、泰国和非洲，不少海外华人农户向他们“拜师学艺”。</p><p style="text-align:center"><img src="http://p0.ifengimg.com/a/2018_27/fc826d32793384d_size583_w554_h269.png" width="554" height="269" alt=""></p><p>第二位是湖南怀化的三农创作者，“乡野丫头”，她更多地体现的是人文价值。这是一位侗族姑娘，通过西瓜视频、微头条，分享当地特色美食、自然风光和民俗风情。这些新鲜、生动的内容，成为很多人“精神上的农家乐”。很多用户像唠家常一样，在“乡野丫头”的头条号下面留言，聊酸杨梅、蕨菜和面食，还说“欢迎来我们这里做客”。</p><p style="text-align:center"><img src="http://p1.ifengimg.com/a/2018_27/79efddc48e93ca4_size583_w554_h269.png" width="554" height="269" alt=""></p><p>第三位就是广西灵山苏屋塘村的三农创者——“巧妇9妹”，9妹代表了经济价值，帮助农村脱贫致富。9妹以前在广东打工，后来在大学毕业的侄子帮助下，开通了头条号，开始拍摄美食、农活、打理果园的乡村生活视频。她人很质朴，视频很真实，结果在头条平台上大受欢迎。现在，巧妇9妹通过头条号引流到电商，每月流水过百万。</p><p style="text-align:center"><img src="http://p3.ifengimg.com/a/2018_27/73e7574f6d0fb16_size583_w554_h269.png" width="554" height="269" alt=""></p><p>一方面是看到了农村市场的巨大潜力，另一方面也希望给予中国农村更多帮助。在2日的首届三农创作者大会上，今日头条宣布推出“金稻穗计划”，主要包括三方面，1、优质内容扶持。加大对三农创作者的补贴，流量向优质、专业内容倾斜；2、设立金稻穗奖。每年春、秋两季，评选、奖励三农领域优质、专业内容；3、推出“三农合伙人”计划。</p><p>第三点中提到的所谓“三农合伙人”，是指愿意和今日头条一起，推动三农信息普惠，帮助国家脱贫攻坚和乡村振兴战略的志愿者。今日头条扶贫负责人杨洁称，“任何有志于三农信息普惠事业的志愿者”，不论是个人还是机构，只要有意愿、有能力建设服务乡村，都有机会成为今日头条“三农合伙人”。并不局限于今日头条平台，也不只是三农创作者。</p><p style="text-align:center"><img src="http://p3.ifengimg.com/a/2018_27/d3bea318502ed9d_size816_w550_h379.png" width="550" height="379" alt=""></p><p>今日头条将为“三农合伙人”提供技术和流量支持，一同推动三农信息普惠。今日头条现阶段计划招募30位“三农合伙人”，帮助20个国家贫困县打造20款扶贫产品。</p><p>每位“三农合伙人”，在起步阶段就将获得价值100万元的站内流量，用于扶贫。如果业绩突出，流量扶持上不封顶。首批入选“三农合伙人”的是四位今日头条三农创作者：“巧妇9妹”、“付老师种植技术团队”、“乡野丫头”和黑土麦田公益创始人秦玥飞。</p><p>为了“金稻穗计划”，在未来12个月，今日头条将投入5亿元！！！补贴三农创作者，助力三农信息普惠。如果模式证明行之有效，将加大投入，上不封顶。</p><p>广袤农村，用好互联网，农民自己就能脱贫致富——今日头条已经率先下场。<span class="ifengLogo"><a href="http://www.ifeng.com/" target="_blank"><img src="http://p2.ifengimg.com/a/2016/0810/204c433878d5cf9size1_w16_h16.png"></a></span></p>                                <!--mainContent end-->                            </div>',
        type: "a" //类型 abcd对应 实时头条 资讯信息 市场动态 科普

      }
    });
    wx.setStorage({
      key: 'article4',
      data: {

        id: "4", //id
        title: "市场行情 | 夏季水果价格偏乐观", //标题
        time: "2019-03-27", //时间
        src: "中国果品流通协会", //来源
        content: '<div class="content" id="content"><p style="text-indent:28px">近几年由于粮食种植收益持续走低，农民种植果树及其他瓜类情况增加，水果出现供需失衡情况，苹果、柑橘类、枣类出现供应过剩情况。2018年4月初北方的大霜冻，导致苹果、梨、枣类受灾，产量出现下降。枣类由于过去几年面积扩张明显，2019年枣类上市后，价格并未出现明显上涨，而梨和苹果受灾严重，上市后价格显着上涨。2018年4月份北方大霜冻整体推动了北方果木类水果价格上涨，但对田间瓜果类水果影响较小。</p><p style="text-indent:28px">4月份冻害虽然在一定程度上影响了西瓜、甜瓜的生长，但北方早上市的西瓜、甜瓜前期具有薄膜覆盖，冻害影响较少，而中期上市的西瓜、甜瓜4月初正处于刚播种或尚未播种状态，无实际影响。2018年春西瓜、甜瓜播种面积增加，叠加夏季南方的荔枝、龙眼、芒果产量的巨幅增加，价格被压制，华北及华东地区西瓜在7月份田头价格下滑到0.3-0.4元/斤。西瓜种植除前期上市较早可获得较好利润外，部分瓜果并未获得合理利润。</p><p style="text-indent:28px">2019年南方荔枝、龙眼、芒果出现大幅减产，减少了5-7月份的水果替代，5-7月份上市瓜果情况预计价格好于去年同期。西瓜经历2018年的种植盈利难，预计2019年夏季西瓜产量出现下滑，价格较2018年度有较为明显回升。桃子、早熟的梨预计能获得较好价格。</p><p style="text-indent: 28px;">考虑2019年南方的柑橘产量仍继续增加，百香果产量也在爆发性增长，及2018年丰厚的香蕉种植利润，香蕉产量有望显着提升，预计秋季后期及冬季南方水果供应充裕，对全国秋季后期及冬季水果价格形成压力。（布瑞克农业咨询）</p></div>',
        type: "c" //类型 abcd对应 实时头条 资讯信息 市场动态 科普

      }
    });
    wx.setStorage({
      key: 'article5',
      data: {

        id: "5", //id
        title: "近两年，浙江台州、宁波等地出现了很多打着互联网+农产品产地直销的幌子", //标题
        time: "2018-12-11", //时间
        src: "中国水果交易网", //来源
        content: '<div class="news-xianqin">                <p><span style="color:rgb(51,51,51);font-family:"微软雅黑";font-size:14px;">近两年，浙江台州、宁波等地出现了很多打着互联网+农产品产地直销的幌子，专门坑骗农户、农业企业的公司。浙江康联信息科技股份有限公司就是这样一家是骗子公司，其宣称自己在台州当地有线下农产品批发渠道。下面我跟大家说说我是如何被这个无良公司骗的。我在网上发布了销售鲜香菇的信息，浙江康联科技信息有限公司的业务员给我打电话说他们收鲜香菇，叫我过去谈。接待我的业务员跟我说他们公司是做农产品集中配送的，还拿出公司营业执照给我看，交谈中谈到了台州的鲜香菇价格、包装、运输，他们下订单，先交货款后发货等等，并且说他们有专门的冷藏车，只要是全国1400公里以内的都可以由他们直接派车到种植基地拉货。整个交谈过程他们表现的非常专业，很容易让人相信他们有实力。最后他们又说要合作得交13800元的质保金，以保证产品数量和质量，交易额达到30万元是可以退还的。考虑到押金可以退，他们能有这么大的销量，我就交了钱，跟他们签了合同。我回去之后一直催他们拿样品，下订单。这个业务员竟然说她不负责鲜茹，叫另外一个人打电话跟我联系，推拖着根本不拿样品，更没有意向下订单。后来直接把我拉黑了，电话也打不通了。我才意识到被骗了。我当天去了台州报案。但说你有合同就去法院打官司，要么多找一些受骗人一起到刑侦大队报****案。我为什么说浙江康联科技信息有限公司是骗子？1、我已经跟他们签了合同，他们****业务员又通过我在网上发布的信息找到我求合作卖香菇。他们明明已经有了供应商，收了保证金就晾一边，根本不想着跟已有的供应商合作，只想着再去找下一个行骗。2、受骗的不止我一个，他们的固定电话已经被很多人举报为了****电话。百度一下，或者搜一搜QQ群就能搜到很多人被这种骗子公司骗。这种骗子公司向农户、小型农业企业骗取保证金、服务费，却不提供任何服务。</span></p><p><span style="color:rgb(51,51,51);font-family:"微软雅黑";font-size:14px;"><img src="http://image.guo68.com/ueditor/image/20181211/1544518027405102.jpg" title="1544518027405102.jpg" alt="QQ截图20181211164108.jpg"></span></p><p><span style="color:rgb(51,51,51);font-family:"微软雅黑";font-size:14px;">本信息转载自【<span style="font-family:monospace;font-size:medium;white-space:pre-wrap;">猫腻新闻网</span>】http://www.mnxun.com/keji/shuju/2095.html</span></p>            </div>',
        type: "a" //类型 abcd对应 实时头条 资讯信息 市场动态 科普

      }
    });
    wx.setStorage({
      key: 'article6',
      data: {

        id: "6", //id
        title: "布福娜不仅风味独特，营养也非常丰富，在中国贵州苗族地区", //标题
        time: "2018-09-29", //时间
        src: "中国水果交易网", //来源
        content: '<div class="news-xianqin">                <p>布福娜不仅风味独特，营养也非常丰富，在中国贵州苗族地区，布福娜本身就是美容长寿之果的意思，采用现代原子吸收分光光度法测定布福娜中Mn、Fe、Cu、Zn、Mg、Ca等一些人体所需微量元素含量特别高。深受消费者喜欢，布福娜果实的产地批发价5-10元/公斤，种植一亩地，盛产期年收入可达2.5—5万；布福娜果实在 11月份左右成熟，果型有弹性，果皮有胶质，耐贮运，南方可留在树上到春节上市，北方成熟采收后，可室内自然存放3个月，春节前后反季节上市，每公斤达百元；据报道2004年春节在香港市场以120港元/公斤被抢购一空。</p>            </div>',
        type: "a" //类型 abcd对应 实时头条 资讯信息 市场动态 科普

      }
    });
    wx.setStorage({
      key: 'article7',
      data: {

        id: "7", //id
        title: "杏树如何灌水？杏树盛花期、采果后等六个时期的灌水要点", //标题
        time: "2018-09-20", //时间
        src: "中国水果交易网", //来源
        content: '<div class="news-xianqin">       栽种杏树如何灌水？在种植杏树的过程中，灌水也是非常重要的环节之一。杏树在一年生活周期中有6个时期需要灌水，分别是早春发芽前灌大水、盛花期灌水、果实膨大期灌水、采果后灌水、秋后灌水、封冻水，接下来小编就来具体说说这6个时期的灌水要点，希望对大家能有所帮助，同时有兴趣的朋友也可以关注惠农网，学习了解更多农业知识。<img src="http://image.guo68.com/ueditor/image/20180920/1537437303822364.jpg" title="1537437303822364.jpg" alt="1121085604_14966243515551n.jpg">&nbsp; &nbsp;1、早春发芽前灌水：北方干旱地区，早春在杏树发芽之前灌大水，有利于杏树根系生长和花芽分化。这次灌大水要求浸润0.8-1米的土层，灌水后再在树盘内覆上地膜，这样有利于提高地温，保持水分。&nbsp; &nbsp;2、盛花期灌水：如果在杏树花期，土壤比较干旱，空气相对湿度比较小，则要及时灌小水，以防花期霜冻，同时对延长花期有一定作用。<img src="http://image.guo68.com/ueditor/image/20180921/1537493638462908.jpg" title="1537493638462908.jpg" alt="523272759088480671.jpg">&nbsp; &nbsp;3、果实膨大期灌水：果实膨大期灌水有利于减轻或防止裂果，同时还有利于增大果实。&nbsp; &nbsp;4、采果后灌水：采果后要及时灌水，这有利于刺激营养生长，不过需要注意的是，灌水量要小。同时由于这段时期接近雨季，因此要注意不旱不灌。<img src="http://image.guo68.com/ueditor/image/20180920/1537437324488955.jpg" title="1537437324488955.jpg" alt="t018bb515c7ffe873cc.jpg">&nbsp; &nbsp;5、秋后灌水：在9月中下旬，结合秋施基肥灌一次透水，灌水量较大。秋后灌水有利于养分的释放与吸收，增加树体营养储藏。&nbsp; &nbsp;6、封冻水：在杏树封冻前灌一次大水，对冬、春干旱地区的防寒、防旱有积极作用，特别是对幼龄杏树尤为重要。<p><br></p>            </div>',
        type: "a" //类型 abcd对应 实时头条 资讯信息 市场动态 科普

      }
    });
    wx.setStorage({
      key: 'article9',
      data: {

        id: "9", //id
        title: "南果北果都能在这里结出好果，黄冈渐成水果之乡", //标题
        time: "2019-03-08", //时间
        src: "水果资讯网", //来源
        content: '<tr> <td height="300" valign="top" style="font-size:14px; padding:15px 14px 15px 14px;line-height:30px ">　　湖北日报讯（记者王兵、通讯员郭斯）走进塑料大棚，发现里面的火龙果树还覆盖着一层塑料薄膜。“火龙果是南方的水果，在浠水种植，冬天做好保温很重要。”湖北万顺农场的老总张曙明撩开第二层薄膜，记者弯腰进去，身上被滚下的露水打湿。“看！已经有果子长出来。”顺着张曙明的手指看去，果然有一个个红色的火龙果点缀在树上。&nbsp;<br><br>　　刚进入3月，位于黄冈浠水县洗马镇的这座火龙果生产基地就迎来越来越多的采摘客。“从2013年起，我们在洗马镇和绿杨乡流转1000多亩土地种植原产越南的红心火龙果，现在规模在鄂东第一，全国领先。”张曙明介绍，去年产量达到40多万斤，由于干旱比往年略有减产，但销售额增加，“80%以上被游客现场采摘，每斤价格在10元至15元。”&nbsp;<br><br>　　南方水果为啥要北上种植？专家介绍，水果可以跨区域消费，但为了保鲜，在原产地通常六七成熟就要采摘，口感上逊色不少。“农产品消费半径最好不超过500公里。”张曙明说，许多游客品尝现场采摘的火龙果，都会感慨：“比超市买的好吃太多了。”&nbsp;<br><br>　　无独有偶。在比浠水偏南的黄梅县，原产北美的紫玉蓝莓长得正欢。该县南京金智创投创办的湖北紫玉蓝莓科技有限公司，投资5亿元建设蓝莓种植基地，连片种植面积超万亩，规模居华中第一。基地负责人石峰说，公司投资1.5亿元在黄梅大胜关山工业园建设蓝莓加工产业园，达产后鲜果和精加工产品年产值可达30亿元。&nbsp;<br><br>　　农业大市黄冈传统上并不以水果出名，近年来，在市场驱动和产业扶贫推动下，该市加快调整农业结构，水果产量增长迅速。市农业农村局提供的数据显示，仅去年，该市就改造低产茶果桑园20万亩，开发特色水果基地30万亩，蓝莓、杨梅、火龙果、猕猴桃、葡萄、桑葚等果园密布，黄冈正逐渐成为水果之乡。<br></td></tr>',
        type: "b" //类型 abcd对应 实时头条 资讯信息 市场动态 科普

      }
    });
    wx.setStorage({
      key: 'article10',
      data: {

        id: "10", //id
        title: "兰亭村农民种出“幸福果”", //标题
        time: "2019-03-03", //时间
        src: "水果资讯网", //来源
        content: '<tr> <td height="300" valign="top" style="font-size:14px; padding:15px 14px 15px 14px;line-height:30px ">　这几天，在兰亭街道兰亭村，黄家坞水蜜桃专业合作社的凌涛正忙着在水蜜桃种植基地内除草、治虫。他告诉记者，马上要开桃花了，近期再做一下管理防治工作，花开得旺，桃子才能结得好。<br><br>　　兰亭村黄家坞自然村盛产的水蜜桃远近闻名，街道和村里着力打造“美丽果园”，是村民增收的一大来源，也是村里的特色之一。近年来，该村进行环境提档升级、立面改造、增添绿化等项目，“美丽果园”和美丽乡村相得益彰，村民的幸福指数更高了。<br><br>　　黄家坞水蜜桃合作社现有果园320余亩，分别属于村里的30多户人家。一到春天，粉色的桃花漫山遍野，美不胜收，吸引了众多城里人前来踏青赏花。到了七八月份，沉甸甸的果实挂满枝头，摘一个咬一口，如蜜一般的香甜撞击着味蕾，令人陶醉。<br><br>　　一分耕耘一分收获，兰亭村党总支书记俞志刚告诉记者，2013年，兰亭水蜜桃曾获得浙江省精品水果展销会金奖。近年来，村里带领农户进行水蜜桃栽培技术的培训，专程到宁波奉化考察，吸取种植经验。现在，兰亭水蜜桃果子越结越大，甜度越来越高，甚至可以媲美奉化水蜜桃。<br><br>　　去年年底，柯桥区农校果树类的专家专门来到兰亭村，为这里的种植户进行病虫害防治、田间管理、幼苗栽培等培训，令农户受益匪浅。2017年，由兰亭街道组织，在兰亭村举办兰亭水蜜桃节，期间邀请城里人前来采摘游，以桃为媒，带动了乡村农产品销售和旅游。<br><br>　　凌涛告诉记者，黄家坞自然村山岙北面是高山，南面东面是底山丘，西面是水田，可御寒流，可享阳光，排水良好，漫野的黄土壤，极为适宜种植桃树。兰亭水蜜桃种植已有100多年历史，由奉化引种而来，逐年扩种形成生产规模。产品除在绍兴销售外，还经船远销到杭州。上世纪60年代，桃园一度改种杂粮作物，生产进入低潮，近年又逐渐恢复。<br><br>　　如今的兰亭水蜜桃成了俏手货，最高时可以卖到18元一斤，而且不愁卖，一到收获季，买桃子的人会自己找上门。这几年，水蜜桃种植户又将目光瞄准了电商平台，去年印山人家农庄70亩水蜜桃通过市邮政分公司的“邮乐购”农产品进城项目，实现采摘、包装、发运、售后等“一条龙”服务，第一时间将水蜜桃发给客户，实现当天采摘、当天运输、当天到达。<br><br>　　村民口袋鼓了，村里的环境面貌也日新月异。去年，兰亭村新建永和广场，广场上凉亭、健身器材、绿化一应俱全，村民有了散步休闲、跳广场舞的好去处。兰亭村官庄自然村进行了立面改造，绿化提档升级，出入口景观改造，新建篮球场，“美丽果园”和美丽乡村一起增强村民幸福指数。<br></td></tr>',
        type: "b" //类型 abcd对应 实时头条 资讯信息 市场动态 科普

      }
    });
    wx.setStorage({
      key: 'article11',
      data: {

        id: "11", //id
        title: "严查果树种苗质量 维护果农切身利益", //标题
        time: "2019-02-26", //时间
        src: "水果资讯网", //来源
        content: '<tr> <td height="300" valign="top" style="font-size:14px; padding:15px 14px 15px 14px;line-height:30px ">当前正值春耕备耕时节，也是果树种苗销售、种植的旺季。为规范果树苗木销售商的经营行为，维护果树种苗市场经营秩序，确保汶川县特色水果产业的健康发展。2月19日至2月25日，汶川县农业畜牧和水务局组织执法人员对县域内果树种苗市场开展为期一周的执法检查。<br><br>检查中，执法人员详细对果树种苗的来源地、品种、数量、销售情况、苗木销售人身份信息等做详细登记。此次执法检查，共检查果树种苗经销商15家，皆为本县经销商，无山东等地种苗销售。初步统计果树种苗今年在汶川县上市大约10万株，目前已销售2.8万株，上市种苗总量较上年减少三分之二。苗木经销商诚信经营意识和种苗质量较往年有所提高，未发现带病种苗。<br><br>下一步我局将继续组织执法人员加大对全县果树种苗市场和农资市场的执法力度，从源头上保护农业生产安全，为果农致富保驾护航。<br><div>	<br></div></td></tr>',
        type: "c" //类型 abcd对应 实时头条 资讯信息 市场动态 科普

      }
    });
  
    wx.setStorage({
      key: 'article13',
      data: {
        id: "13", //id
        title: "宜宾市场监管部门查获假冒“库尔勒香梨”4550件", //标题
        time: "2019-02-14", //时间
        src: "水果资讯网", //来源
        content: '<tr> <td height="300" valign="top" style="font-size:14px; padding:15px 14px 15px 14px;line-height:30px ">&nbsp;　　“库尔勒香梨”是新疆库尔勒香梨协会申请的注册商标，也是中国国家地理标志，经长期宣传使用已具有重要商标价值。近年来，市场上出现了一批以陕西红香酥假冒库尔勒香梨并肆意使用库尔勒香梨地理标志商标的侵权行为，严重扰乱市场秩序，导致当地商家遭受巨大经济损失。<br>&nbsp;<br>　　结合“春雷行动2019”专项行动，1月21日，宜宾市筠连县工商局联合新疆库尔勒市工商局及香梨协会在该县水果批发集市开展保护“库尔勒香梨”地理标志专项执法行动，对9户涉嫌销售侵权商品的经营户实施行政强制措施，查获假冒“库尔勒香梨”4550件，货值金额14万元，有效地规范了水果销售市场。<br>&nbsp;<br>　　今年1月11日至4月30日，全市市场监管部门将以“整治‘保健’市场乱象”、“食品安全”、“药品放心”、“质量安全”以及“市场治乱”5个执法子行动为主，开展市场集中整治，全力保障人民群众消费安全，净化市场环境，维护公平的市场交易环境。<br></td></tr>',
        type: "c" //类型 abcd对应 实时头条 资讯信息 市场动态 科普
      }
    });
    wx.setStorage({
      key: 'article14',
      data: {
        id: "14", //id
        title: "胶州历时三年培育出“水果萝卜” 市民可现场品尝", //标题
        time: "2018-11-03", //时间
        src: "水果资讯网", //来源
        content: '<tr> <td height="300" valign="top" style="font-size:14px; padding:15px 14px 15px 14px;line-height:30px ">　　11月3日，记者从胶州农业局获悉，由胶州里岔镇政府和胶州大白菜研究所主办的首届萝卜节将正式拉开帷幕。据悉，节会上主要以研发新品富硒“水果萝卜”为主，这些萝卜是农业专家依靠当地老品种历经三年研发而出，它不但口感脆甜适合生吃，营养元素更是比普通萝卜要高出很多。今后，这个萝卜新品将在胶州范围内推广种植。&nbsp;<br><br>　　昨天上午，记者在位于胶州里岔镇安家沟村“水果萝卜”种植基地看到，一名工作人员正在查看地里萝卜长势。记者注意到，基地里的萝卜都已进入收获期，与传统萝卜相比，这些“水果萝卜”除个头偏细外，其形状和普通萝卜并无两样。&nbsp;<br><br>　　“别看模样没什么特别之处，可为了培育它，我们可费了不少更夫。”基地负责人荆世新告诉记者，从三年前开始，他们所里就开始着手对传统胶州大萝卜这个品种进行杂交改良，经过反复实验以及邀请省市一些农业专家前来指导认定，最终培育出了这个新品种。&nbsp;<br><br>　　“胶州本土萝卜口感青涩，还特别辣，不大适合生吃，你再尝尝这个萝卜，口味绝对不一样。”在荆世新提示下，记者随手切了一块萝卜品尝起来，这个新品萝卜不但又脆又甜，汁水还特别多，非常好吃。&nbsp;<br><br>　　“我们这里是沙土质本身非常适合种植萝卜，它好吃原因主要是品种以及好的田间水肥管理，且营养元素也更高。”荆世新说，在种植时间上，“水果萝卜”与普通萝卜一样，每年8月中下旬播种到10月中下旬收获，共两个多月时间。营养价值则每100克水果萝卜含维生素C53毫克、钾400毫克、钙260毫克，相比普通萝卜含量都要高。通过特别技术管理，让它还富含维生素K、硒、锰、锌等多种微量元素。&nbsp;<br><br>　　记者了解到，11月3日胶州举办的首届萝卜节上，市民不但可以品尝到这种新品萝卜，还可以参加拔萝卜和生吃萝卜等趣味比赛。“今年共种了1000多亩这个新品萝卜，前几天有客户前来考察后，他们都觉得品质不错，这不已经订出了四分之一。价格上，这些新品萝卜更加客观，一个重约一斤的萝卜平均能卖到6元钱，要是大面积种收益肯定更好。”荆世新说，目前他已经成立了萝卜合作社，下一步，他会让更多菜户入社以此带动菜农们共同致富。&nbsp;<br></td></tr>',
        type: "d" //类型 abcd对应 实时头条 资讯信息 市场动态 科普
      }
    });
    wx.setStorage({
      key: 'article15',
      data: {

        id: "15", //id
        title: "营养专家：红枣纵有“千般好”，但这些人吃了，反而是坏事", //标题
        time: "2019-03-06", //时间
        src: "水果资讯网", //来源
        content: '<tr> <td height="300" valign="top" style="font-size:14px; padding:15px 14px 15px 14px;line-height:30px ">红枣是日常生活当中大家非常熟悉的一种滋养品，它的外形很漂亮，而且也比较美味，所以有很多人都喜欢吃红枣。如果贫血的话，也可以多吃一些红枣。那么您还知道红枣对我们的身体有哪些好处呢？是不是所有的人都适合吃红枣呢？要了解这些问题，请来阅读本篇文章吧。<br><br>红枣有哪些功效?<br><br>医生表示，“从中医的角度来看，红枣具有补气、提高免疫力的作用，特别是对于一些睡眠不好的人，多吃酸枣仁能起到一定作用。”<br><br>从现代医学的角度来讲，据有关文献报道，红枣富含植物多糖，据统计有十几种，最为重要的是多酚类物质，也叫植物化学物质，通过适当补充此类物质，有助于提高*免疫力。<br><br>此外，红枣也属水果类食物，红枣中所含的维生素C、膳食纤维以及植物多糖等，本身具有抗氧化的效果，对降低血脂、改善肠功能和心血管、抗肿瘤、防衰老等能起到一定作用。医生强调，“但这并不单单只是吃红枣的原因，很多植物化学物质，比如其他新鲜蔬果中所含的膳食纤维、维生素C等，均能起到作用。”<br><br>哪些人不宜吃红枣?<br><br>虽说红枣有很高的营养价值，但并非每个人都适合吃。医生表示，“每个人对食物的耐受都不一样，比如对红枣过敏或不耐受的、或有基础疾病不宜吃红枣的人群等，就不建议吃红枣。”<br><br>由于红枣的含糖量高，糖尿病患者在食用时，需要特别注意分量，避免过食，主要因为红枣血糖生成指数较高，特别是干红枣，易影响血糖变化。<br><br>健康人士在食用红枣时，也要注意分量，建议每次控制在1-2颗左右。新鲜红枣水分多，含糖量较少，每次可控制在四两到七两左右;同时，也要多留意红枣的保质期限。此外，医生也表示，过量吃红枣是否会引起上火，目前为止，也并未有研究证实过。<br><br>最后，医生表示，新鲜红枣富含维生素，但大众通常所吃的是干红枣，干红枣经过处理后，其黄酮类增加，维生素C含量减少，所以，红枣并非是天然的维生素来源，提醒人民群众切勿过分夸大红枣的营养价值。<br><br>红枣当中还有很多的维生素，对于女性朋友来说，如果经常吃红枣的话，不但可以补气养血，而且还能够美容养颜。但是并不是所有的人都适合吃红枣，对于糖尿病人来说，红枣当中的含糖量比较高，如果糖尿病人经常吃红枣的话，会让血糖变得不稳定。<br></td></tr>',
        type: "d" //类型 abcd对应 实时头条 资讯信息 市场动态 科普



      }
    });
    wx.setStorage({
      key: 'article16',
      data: {

        id: "16", //id
        title: "水果“连核吃”会不会闹肚子？果核会对身体有哪些影响？", //标题
        time: "2019-03-02", //时间
        src: "水果资讯网", //来源
        content: '<tr> <td height="300" valign="top" style="font-size:14px; padding:15px 14px 15px 14px;line-height:30px ">　　水果基本上都有“核”这个讨厌的东西，和果皮一样，都是得扔进垃圾桶里面的东西，可是在没有条件的时候，大家往往会选择——吞下去。<br><br>　　可是，水果核到底对我们的身体有没有害？吃进肚子会不会让我们闹肚子？<br><br>　　果核外皮坚硬，难以被消化<br><br>果核<br><br>　　果核<br>　　如果大家手边有苹果、梨、橘子等带着核的水果的话，不妨拿起一个咬开看看，它们的核表皮都挺坚硬的，得用牙用力咬，才能把它们咬碎。<br><br>　　水果的核也是植物的种子，为了能够让种子传播出去、繁衍生息，核的种皮非常坚硬，难以被大多数的动物消化，其中也包括人。再说了，我们的肠胃有的时候连玉米粒、菌菇类都难以消化，更别说这种“有备而来”的果核了。<br><br>　　所以，在不小心吃进去果核的时候，这些果核也会夹杂在其他的食物残渣里面被排出体外，从而完成“传播”过程。<br><br>　　果核被咬碎了，里面的成分会闹肚子吗？<br><br>果核<br><br>　　果核<br>　　就算是果核被咬碎了，里面的成分含量也不足以“闹肚子”。<br><br>　　虽然大多数果核里面都含有“氰苷”这种成分，这种成分进行水解之后，就会形成有毒的“氢氰酸”。但是，氢氰酸要达到2mg/kg的剂量才会让人中毒，拿一个50kg的成年人来举例子的话，需要100mg的氢氰酸才能够中毒，而果核的重量本身就不足几克，里面含有的“氰苷”能水解成氢氰酸的含量又少之又少……<br><br>　　所以，稍微咬碎果核，吃进肚子里也不会让你出现什么大问题。<br><br>　　为啥吃西瓜籽，那么容易拉肚子？<br><br>果核<br<br>　　果核<br>&nbsp;<br>　　在夏天吃西瓜不吐籽的朋友们可能就有相关疑问了，为啥我吃西瓜籽的时候，就特别容易拉肚子啊？<br>&nbsp;<br>　　这很有可能是因为西瓜本人，不是西瓜籽。<br>&nbsp;<br>　　西瓜的水份含量高，而且果糖含量特别高，再加上籽难以被消化，这些都是增加肠蠕动速度、增加肠内容物量的原因，这些原因综合起来，就会让你出现“拉肚子”的症状，籽只是其中的一个小小辅助而已。<br>&nbsp;<br>　　有些果核“氰苷”含量高，必须小心！<br>&nbsp;<br>　　白果、北杏仁、亚麻籽等氰苷物质的含量比较高，在吃果仁的时候需要小心。如果实在爱吃的话也不用担心，摄入微量的氰苷对我们身体没啥影响，它可以在体内被清除代谢掉，不会蓄积在体内。<br>&nbsp;<br>　　氰苷其实也比较容易去除，只要加热果仁，就能让氰苷分解；尤其是煮沸这个操作，能去除90%左右的氰苷，大家可以在食用之前用这种方法，减轻氰苷对身体的危害。<br></td></tr>',
        type: "d" //类型 abcd对应 实时头条 资讯信息 市场动态 科普

      }
    });


  },
  globalData: {
    userInfo: null
  }
})