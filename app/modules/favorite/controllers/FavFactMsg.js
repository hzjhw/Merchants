/**
 * @description FavoriteCtrl
 * @class FavoriteCtrl
 * @author yongjin<zjut_wyj@163.com> 2015/2/8
 */
define('FavFactMsg', ['App','template/favFactMsg','HandlebarsHelper'], function (require, exports, module) {
  var FavFactMsg, App, template,HandlebarsHelper;

  App = require('App');
  HandlebarsHelper = require('HandlebarsHelper');
  template = require('template/favFactMsg');

  FavFactMsg = function (page) {
    var tpl = HandlebarsHelper.compile(template);
    $(page).html(template);
    App.query('/userinfo/leaveMsg', {
      success: function (result) {
        $(page).html(tpl(result));
        seajs.use(['IncludeBtm'], function (IncludeBtm) {
          new IncludeBtm(page, '.footer_mes');
        });
        $(page).find('.btn-back').click(function () {
          App.back();
        });
      }
    });
  };
  module.exports = FavFactMsg;
});