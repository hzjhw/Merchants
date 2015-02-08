/**
 * @description CategoryCtrl
 * @class CategoryCtrl
 * @author yongjin<zjut_wyj@163.com> 2015/2/8
 */
define('CategoryCtrl', ['App'], function (require, exports, module) {
  var CategoryCtrl, App;

  App = require('App');

  CategoryCtrl = function (page, context) {
    $(page).find('.cate-item').each(function () {
      $(this).click(function () {
        $(this).addClass('current').siblings('.cate-item').removeClass('current');
        $(page).find('.cate-item-sub-' + $(this).index()).addClass('cate-cur').siblings().removeClass('cate-cur');
      });
    });
    App.query('/product/price', {
      cache: true,
      success: function (result) {
        var $container = $('.cate-pro-ul', $(page));
        var template = $container.html();
        App.render({ render: '.cate-pro-ul', page: page, template: template, empty: true, data: {
          list: result.catList
        }});
      }
    });
  }

  module.exports = CategoryCtrl;
});