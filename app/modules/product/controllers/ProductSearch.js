/**
 * @description ProductSearch
 * @class ProductSearch
 * @author yongjin<zjut_wyj@163.com> 2015/2/8
 */
define('ProductSearch', ['App', 'template/product_search'], function (require, exports, module) {
  var ProductSearch, App, template;

  App = require('App');
  template = require('template/product_search');

  ProductSearch = function (page, ctx) {
    $(page).html(template);
    $(page).find('.go-back').click(function () {
      App.back('home', function () {

      });
    });
  }

  module.exports = ProductSearch;
});