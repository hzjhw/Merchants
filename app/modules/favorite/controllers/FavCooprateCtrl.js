/**
 * @description FavoriteCtrl
 * @class FavoriteCtrl
 * @author yongjin<zjut_wyj@163.com> 2015/2/8
 */
define('FavCooprateCtrl', ['App'], function (require, exports, module) {
  var FavCooprateCtrl, App, template;

  App = require('App');
  template = require('template/favCooprate');

  FavCooprateCtrl = function (page, ctx) {
    $(page).html(template);
    $(page).find('.btn-back').click(function () {
      App.back();
    });
  }
  module.exports = FavCooprateCtrl;
});