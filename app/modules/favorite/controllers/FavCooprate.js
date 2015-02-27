/**
 * @description FavoriteCtrl
 * @class FavoriteCtrl
 * @author yongjin<zjut_wyj@163.com> 2015/2/8
 */
define('FavCooprate', ['App','template/favCooprate','HandlebarsHelper'], function (require, exports, module) {
  var FavCooprate, App, template,HandlebarsHelper;

  App = require('App');
  HandlebarsHelper = require('HandlebarsHelper');
  template = require('template/favCooprate');

  FavCooprate = function (page, ctx) {
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
  module.exports = FavCooprate;
});