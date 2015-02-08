/**
 * @description ProductList
 * @class ProductList
 * @author yongjin<zjut_wyj@163.com> 2015/2/8
 */
define('ProductList', ['App', 'template/product_list'], function (require, exports, module) {
  var ProductList, App, template;

  App = require('App');
  template = require('template/product_list');

  ProductList = function (page, ctx) {
    $(page).html(template);
    $(page).find('.btn-back').click(function () {
      App.back('home', function () {

      });
    });
  }

  module.exports = ProductList;
});