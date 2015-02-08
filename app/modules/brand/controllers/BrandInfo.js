/**
 * @description BrandInfo
 * @class BrandInfo
 * @author yongjin<zjut_wyj@163.com> 2015/2/8
 */
define('BrandInfo', ['App', 'template/brand_info'], function (require, exports, module) {
  var BrandInfo, App, template;

  App = require('App');
  template = require('template/brand_info');

  BrandInfo = function (page, id, context) {
    $(page).html(template);
    $(page).find('.go-back').click(function () {
      App.back();
    });
  }

  module.exports = BrandInfo;
});