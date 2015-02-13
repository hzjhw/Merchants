/**
 * @description FavoriteCtrl
 * @class FavoriteCtrl
 * @author yongjin<zjut_wyj@163.com> 2015/2/8
 */
define('FavMessage', ['App','template/favMessage'], function (require, exports, module) {
  var FavMessage, App, template;

  App = require('App');
  template = require('template/favMessage');

  FavMessage = function (page, ctx) {
    $(page).html(template);
    $(page).find('.btn-back').click(function () {
      App.back();
    });
  }
  module.exports = FavMessage;
});