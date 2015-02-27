/**
 * @description FavoriteCtrl
 * @class FavoriteCtrl
 * @author yongjin<zjut_wyj@163.com> 2015/2/8
 */
define('FavInfo', ['App','template/favInfo'], function (require, exports, module) {
  var FavInfo, App, template;

  App = require('App');
  template = require('template/favInfo');

  FavInfo = function (page, ctx) {
    $(page).html(template);

    $(page).find('.btn-back').click(function () {
      App.back();
    });
  }
  module.exports = FavInfo;
});