/**
 * @description ProductSearch
 * @class ProductSearch
 * @author yongjin<zjut_wyj@163.com> 2015/2/8
 */
define('ProductDetail', ['App', 'template/product_detail', 'HandlebarsHelper'], function (require, exports, module) {
  var ProductDetail, App, template, HandlebarsHelper;

  App = require('App');
  HandlebarsHelper = require('HandlebarsHelper');

  ProductDetail = function (page, id,proid, ctx) {
    setTimeout(function(){
      debug('【Module】: Call ProductDetail');
      template = require('template/product_detail');
      var tpl = HandlebarsHelper.compile(template);

      App.query('/cmp/proDetail/' + id, {
        cache: true,
        data:{proid:proid},
        success: function(result){
          $(page).html(tpl(result));
          $(page).find('.category-close').click(function () {
            App.back();
          });
          var $sub = $(page).find('.cate-item-sub');
          $(page).find('.cate-item').each(function (index) {
            $(this).click(function () {
              $(this).addClass('current').siblings('.cate-item').removeClass('current');
              $sub.eq(index).addClass('cate-cur').siblings().removeClass('cate-cur');
            });
          });
        }
      });
    }, 0);
  };

  module.exports = ProductDetail;
});