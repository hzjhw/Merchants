/**
 * Created by Administrator on 2015/2/9.
 */
define('IncludeListBottom', ['App', 'template/include_list_bottom', 'HandlebarsHelper'], function (require, exports, module) {
  var IncludeListBottom, App, template, HandlebarsHelper;

  App = require('App');
  HandlebarsHelper = require('HandlebarsHelper');
  template=require('template/include_list_bottom');

  IncludeListBottom = function (page, render,data) {
    var renderObj =$(page).find(render);
    renderObj.html(HandlebarsHelper.compile(template));
    if(data.isLogin)
    {
      renderObj.append('<li class="app-btn"><span class="icon-bg icon-buttombar-login"></span>'+
      '<span class="buttombar-text">退出</span>'+
      '<span class="icon-bg icon-buttombar-sep"></span></li>');
    }else
    {
      renderObj.append('<li data-url="login_dealers" class="app-btn"><span class="icon-bg icon-buttombar-login"></span>'+
      '<span class="buttombar-text">登录</span>'+
      '<span class="icon-bg icon-buttombar-sep"></span></li>');
    }

    // 底部导航
    $(page).find('.buttombar-ul li').off().on('click',function () {
      var urlVal =$(this).attr('data-url');
      if(urlVal)
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
    });
  };
  module.exports = IncludeListBottom;
});