/**
 * @description CategoryCtrl
 * @class CategoryCtrl
 * @author yongjin<zjut_wyj@163.com> 2015/2/8
 */
define('CategoryCtrl', ['App', 'template/category'], function (require, exports, module) {
  var CategoryCtrl, App, template;

  App = require('App');
  template = require('template/category');

  CategoryCtrl = function (page, context) {
    $(page).html(template);
    $(page).find('.category-close').click(function () {
      App.back('home');
    });
    $(page).find('.cate-item').each(function () {
      $(this).click(function () {
        $(this).addClass('current').siblings('.cate-item').removeClass('current');
        $(page).find('.cate-item-sub-' + $(this).index()).addClass('cate-cur').siblings().removeClass('cate-cur');
      });
    });
    $(page).find('.cate-ul li').each(function () {
      $(this).click(function () {
        var id = $(this).attr('data-id');
        App.load('brand_list', {
          id: id
        });
        return false;
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