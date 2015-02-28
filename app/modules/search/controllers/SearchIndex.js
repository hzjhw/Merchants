/**
 * @description SearchIndex
 * @class SearchIndex
 * @author yongjin<zjut_wyj@163.com> 2015/2/28
 */
define('SearchIndex', ['App', 'template/search_index'], function (require, exports, module) {
  var SearchIndex, App, template;

  App = require('App');
  template = require('template/search_index');

  SearchIndex = function(page, context,  data){
    setTimeout(function () {
      $(page).html(template);

      var $sub = $(page).find('.cate-item-sub');
      $(page).find('.cate-item').each(function (index) {
        $(this).click(function () {
          $(this).addClass('current').siblings('.cate-item').removeClass('current');
          $sub.eq(index).addClass('cate-cur').siblings().removeClass('cate-cur');
        });
      });
      App.query('/product/price', {
        cache: true,
        success: function (result) {
          var $container = $('.search-price-ul', $(page));
          var template = $container.html();
          App.render({ render: '.search-price-ul', page: page, template: template, empty: true, data: {
            list: result.priceList
          }});
        }
      });


      $(page).find('.go-back').click(function () {
        App.back();
      });


    }, 0)
  }

  module.exports = SearchIndex;
});