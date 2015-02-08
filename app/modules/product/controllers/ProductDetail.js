/**
 * @description ProductDetail
 * @class ProductDetail
 * @author yongjin<zjut_wyj@163.com> 2015/2/8
 */
define('ProductDetail', ['App', 'template/product_detail'], function (require, exports, module) {
  var ProductDetail, App, template;

  App = require('App');
  template = require('template/product_detail');

  ProductDetail = function (page, ctx) {
    $(page).html(template);
    $(page).find('.btn-back').click(function () {
      App.back('home', function () {

      });
    });
  }

  module.exports = ProductDetail;
});