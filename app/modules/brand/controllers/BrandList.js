/**
 * @description BrandList
 * @class BrandList
 * @author yongjin<zjut_wyj@163.com> 2015/2/8
 */
define('BrandList', ['App', 'template/brand_list'], function (require, exports, module) {
  var BrandList, App, template;

  App = require('App');
  template = require('template/brand_list');

  BrandList = function (page) {
    $(page).html(template);
    $(page).find('.btn-back').click(function () {
      App.back('home', function () {
        // back to home
        // page2's and page3's appDestroy events have been called
      });
    });
  }

  module.exports = BrandList;
});