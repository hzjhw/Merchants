/**
 * @description FavoriteCtrl
 * @class FavoriteCtrl
 * @author yongjin<zjut_wyj@163.com> 2015/2/8
 */
define('FavInfo', ['App','template/favInfo','HandlebarsHelper'], function (require, exports, module) {
  var FavInfo, App, template,HandlebarsHelper;

  App = require('App');
  HandlebarsHelper = require('HandlebarsHelper');
  template = require('template/favInfo');

  FavInfo = function (page) {
    var tpl = HandlebarsHelper.compile(template);
    App.query('/userinfo', {
      success: function (result) {
        $(page).html(tpl(result.info));
      }
    });

    var name = $('.name',$("page")).val();
    $(page).find('#form1').bind('submit',function(){
        if($.trim(name) == '')
        {
          alert('姓名不能为空!');
          return;
        }
    });

    $(page).find('.btn-back').click(function () {
      App.back();
    });
  }
  module.exports = FavInfo;
});