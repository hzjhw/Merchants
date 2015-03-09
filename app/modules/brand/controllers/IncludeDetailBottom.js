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

    // 底部导航
    $(page).find('.bottombar-ul li').off().on('click',function (e) {
      e.preventDefault();
      var urlVal =$(this).attr('data-url');
      if(urlVal.length > 0){
        if(urlVal === 'brand_cooperate')
        {
          if(!App.isLogin())
          {
            var cntVal = '<span style="font-size: 20px"> 对不起,合作前需登录!现在就登录吗?</span>';
            App.showConfirm('未登录', cntVal, null, function () {
              App.setBackPage('brand_detail');
              App.load('login_dealers');
            });
            return;
          }
        }
        App.load(urlVal);
      }
      return false;
    });
  }

  module.exports = IncludeDetailBottom;
});