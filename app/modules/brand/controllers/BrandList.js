/**
 * @description BrandList
 * @class BrandList
 * @author yongjin<zjut_wyj@163.com> 2015/2/8
 */
define('BrandList', ['App', 'template/brand_list'], function (require, exports, module) {
  var BrandList, App, template;

  App = require('App');
  template = require('template/brand_list');

  BrandList = function (page, id) {
    $(page).html(template);
    // 返回
    $(page).find('.btn-back').click(function () {
      App.back('home', function () {
        // back to home
        // page2's and page3's appDestroy events have been called
      });
    });

    App.query('/index', {
      cache: true,
      success: function (result) {
        var $container = $('.merchant-cont-container', $(page));
        var template = $container.html();
        $container.empty();

        var $loading = $(page).find('.loading');


        App.infiniteScroll(result.brandList.list, { loading: $loading }, function (callback) {
          if (i >= 40) {
            return null;
          }
          setTimeout(function () {
            var list = [];
            for (var j = 0; j < 12; j++) {
              var $node = $listItem.clone();
              $node.find('span').text(i + j);
              list.push($node);
            }
            i += 12;
            callback(list);
          }, 1200);
        });


        App.render({ render: '.merchant-cont-container', page: page, template: template, data: {
          title: '品牌展示馆',
          list: result.brandList.list
        }});
      }
    });


  }

  module.exports = BrandList;
});