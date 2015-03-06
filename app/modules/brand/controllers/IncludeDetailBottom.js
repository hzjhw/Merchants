/**
 * @description IncludeDetailBottom
 * @class IncludeDetailBottom
 * @author yongjin<zjut_wyj@163.com> 2015/3/6
 */
define('IncludeDetailBottom', ['App', 'template/include_detail_bottom', 'HandlebarsHelper'], function (require, exports, module) {
  var IncludeDetailBottom,  App, template, HandlebarsHelper;
  App = require('App');
  HandlebarsHelper = require('HandlebarsHelper');
  template=require('template/include_detail_bottom');

  IncludeDetailBottom = function(page, render,data){
    var renderObj =$(page).find(render);
    renderObj.html(HandlebarsHelper.compile(template)(data));
    App.initBrandAutoHide(page);
    if(data.isLogin)
    {
     /* renderObj.append('<li class="app-btn"><span class="icon-bg icon-buttombar-login"></span>'+
        '<span class="buttombar-text">退出</span>'+
        '<span class="icon-bg icon-buttombar-sep"></span></li>');*/
    }else
    {
      /*renderObj.append('<li data-url="login_dealers" class="app-btn"><span class="icon-bg icon-buttombar-login"></span>'+
        '<span class="buttombar-text">登录</span>'+
        '<span class="icon-bg icon-buttombar-sep"></span></li>');*/
    }

    // 底部导航
    $(page).find('.bottombar-ul li').off().on('click',function (e) {
      e.preventDefault();
      var urlVal =$(this).attr('data-url');
      if(urlVal.length > 0)
        App.load(urlVal);
      else
      {
        App.query('/loginout',{
          success:function(result){
            if(result.msg == 'success')
            {
              App.LOGIN_CHANGE=false;
              localStorage[App.CELL_PHONE]='';
              App.back('home');
            }
          }
        })
      }
      return false;
    });
  }

  module.exports = IncludeDetailBottom;
});