/**
 * @description FavoriteCtrl
 * @class FavoriteCtrl
 * @author yongjin<zjut_wyj@163.com> 2015/2/8
 */
define('FavDealersCtrl', ['App'], function (require, exports, module) {
  var FavDealersCtrl, App, template;

  App = require('App');
  template = require('template/favInfo');

  FavDealersCtrl = function (page, ctx) {
    $(page).html(template);
    $(page).find('.btn-back').click(function () {
      App.back();
    });
  }
  module.exports = FavDealersCtrl;
});