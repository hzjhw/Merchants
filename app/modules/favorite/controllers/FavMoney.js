/**
 * @description FavoriteCtrl
 * @class FavoriteCtrl
 * @author yongjin<zjut_wyj@163.com> 2015/2/8
 */
define('FavMoney', ['App','template/favMoney','HandlebarsHelper'], function (require, exports, module) {
  var FavMoney, App, template,HandlebarsHelper;

  App = require('App');
  HandlebarsHelper = require('HandlebarsHelper');
  template = require('template/favMoney');

  FavMoney = function (page, ctx) {
    var tpl = HandlebarsHelper.compile(template);
    App.query('/userinfo', {
      success: function (result) {
        $(page).html(tpl(result.info));

        $(page).find('.btn-back').click(function () {
          App.back();
        });

      }
    })
  }
  module.exports = FavMoney;
});