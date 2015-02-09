/**
 * @description ProductSearch
 * @class ProductSearch
 * @author yongjin<zjut_wyj@163.com> 2015/2/8
 */
define('ProductDetail', ['App', 'template/product_detail'], function (require, exports, module) {
  var ProductSearch, App, template;

  App = require('App');
  template = require('template/product_detail');

  ProductDetail = function (page, ctx) {
    $(page).html(template);
    $(page).find('.btn-back').click(function () {
      App.back('home', function () {

      });
    });
    var $sub = $(page).find('.cate-item-sub');
    $(page).find('.cate-item').each(function (index) {
      $(this).click(function () {
        $(this).addClass('current').siblings('.cate-item').removeClass('current');
        $sub.eq(index).addClass('cate-cur').siblings().removeClass('cate-cur');
      });
    });


  }

  module.exports = ProductDetail;
});