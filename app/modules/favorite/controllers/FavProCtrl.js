/**
 * @description FavoriteCtrl
 * @class FavoriteCtrl
 * @author yongjin<zjut_wyj@163.com> 2015/2/8
 */
define('FavProCtrl', [], function (require, exports, module) {
  var FavProCtrl, App, template;

  App = require('App');
  template = require('template/favPro');

  FavProCtrl = function (page, ctx) {
    $(page).html(template);
    $(page).find('.btn-back').click(function () {
      App.back();
    });
  }

  module.exports = FavProCtrl;
});