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
        var $loading = $(page).find('.loading'),
          $list = $(page).find('.app-list'),
          $listItem = $(page).find('.app-list li'),
          totalPage = null,
          page = 1,
          i = 1;




        var $loading = $(page).find('.loading'),
          $listItem = $(page).find('.merchant-content-ul li'),
          totalPage = null,
          page = 1,
          i = 1;

        $loading.remove();
        $listItem.remove();
        App.infiniteScroll($list, { loading: $loading }, function (callback) {
          if (totalPage && (page > totalPage)) return null;
          var query = '/tester/index';
          App.query(query, {pageSize: 10, pageNumber: 1}, function (result) {
            totalPage = result.totalPage;
            setTimeout(function () {
              var list = [];
              for (var j = 0; j < result.list.length; j++) {
                var $node = $listItem.clone();
                $node.find('span').text(i + j);
                list.push($node);
              }
              i += 10;
              page += 1;
              callback(list);
            }, 1200);
          });
        });
      });


      }
    });


  }

  module.exports = BrandList;
});