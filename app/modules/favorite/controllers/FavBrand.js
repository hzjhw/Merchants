/**
 * @description FavoriteCtrl
 * @class FavoriteCtrl
 * @author yongjin<zjut_wyj@163.com> 2015/2/8
 */
define('FavBrand', ['App','template/favBrand','HandlebarsHelper'], function (require, exports, module) {
  var FavBrand, App, template,HandlebarsHelper;

  App = require('App');
  HandlebarsHelper = require('HandlebarsHelper');
  template = require('template/favBrand');

  FavBrand = function (page) {
    var tpl = HandlebarsHelper.compile(template);
    App.query('/userinfo/collectBrand', {
      cache: true,
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
  module.exports = FavBrand;
});