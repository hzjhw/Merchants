/**
 * @description FavoriteCtrl
 * @class FavoriteCtrl
 * @author yongjin<zjut_wyj@163.com> 2015/2/8
 */
define('FavMoney', ['App','template/favMoney'], function (require, exports, module) {
  var FavMoney, App, template;

  App = require('App');
  template = require('template/favMoney');

  FavMoney = function (page, ctx) {
    $(page).html(template);
    $(page).find('.btn-back').click(function () {
      App.back();
    });
  }

  module.exports = FavMoney;
});