/**
 * @description FavoriteCtrl
 * @class FavoriteCtrl
 * @author yongjin<zjut_wyj@163.com> 2015/2/8
 */
define('IncludeBtm', ['template/includeBtm'], function (require, exports, module) {
  var IncludeBtm, template;

  template = require('template/includeBtm');

  IncludeBtm = function (page, render) {
    $(page).find(render).html(template);
  }
  module.exports = IncludeBtm;
});