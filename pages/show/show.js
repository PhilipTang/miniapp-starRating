// pages/show/show.js
Page({
  data:{
    "stars":''
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    
  },
  onReady:function(){
    // 页面渲染完成
    
  },
  onShow:function(){
    // 页面显示
    var that = this;
    var renderData = {
              "stars":that.starCount(0)
            };
    that.setData(renderData)
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  //计算行星显示规则
  starCount:function(originStars){
    //计算星星显示需要的数据，用数组stars存储五个值，分别对应每个位置的星星是全星、半星还是空星
    var starNum = originStars*10/10,stars = [],i = 0;
    do{
      if(starNum>=1){
        stars[i] = 'full';
      }else if(starNum>=0.5){
        stars[i] = 'half';
      }else{
        stars[i] = 'no';
      }
      starNum--;
      i++;
    }while(i<5)
    return stars;
  },
    formSubmit: function(event) {
		var that = this;
    var renderData = {
              "stars":that.starCount(event.detail.value.input)
            };
    that.setData(renderData);
  }
})