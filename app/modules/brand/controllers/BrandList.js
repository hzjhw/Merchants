/**
 * @description BrandList
 * @class BrandList
 * @author yongjin<zjut_wyj@163.com> 2015/2/8
 */
define('BrandList', ['App', 'template/brand_list', 'HandlebarsHelper'], function (require, exports, module) {
  var BrandList, App, template, HandlebarsHelper;

  App = require('App');
  HandlebarsHelper = require('HandlebarsHelper');

  BrandList = function (page, id, title, banner, area) {
    setTimeout(function () {
      debug('【Module】: Call BrandList');
      template = require('template/brand_list');
      $(page).html(template);
      // 初始化标题与banner
      $(page).find('.topbar-title').html('3.30' + title);
      $(page).find('.merchant-t-m').html(title);
      $(page).find('.app-banner img').attr('src', 'images/' + banner + '.jpg');
      // 返回
      $(page).find('.go-back').click(function () {
        App.back('home');
      });
      // 分类
      $(page).find('.btn-category').click(function () {
        App.load('category');
      });
      // 底部导航
      $(page).find('.bottombar-ul li').click(function () {
        App.load($(this).attr('data-url'));
      });

      // 列表
      var $list = $(page).find('.merchant-content-ul'),
        item = HandlebarsHelper.compile($(page).find('.merchant-content-ul').html()),
        totalPage = null,
        pageNumber = 1,
        i = 1;

      $(page).find('.merchant-content-ul').empty();
      App.infiniteScroll($list, { loading: App.getLoading()}, function (callback) {
        if (totalPage && (pageNumber > totalPage)) return null;
        App.query(area ? '/brand/schArea/' + encodeURIComponent(area) : '/brand/' + id, {
          cache: true,
          data: {
            pageSize: 10,
            pageNumber: pageNumber
          },
          success: function (result) {
            var colum = area ? 'areaList' : 'brandList';
            totalPage = result[colum].totalPage;
            var list = [];
            for (var j = 0; j < result[colum].list.length; j++) {
              var $node = $(item(result[colum].list[j]));
              $node.click(function () {
                App.setBackPage('brand_list');
                App.addLoading();
                App.load('brand_detail', {
                  id: $(this).attr('data-id')
                });
              });
              list.push($node);
            }
            i += 10;
            pageNumber += 1;
            callback(list);
          }
        });
      });
    }, 0);
    console.log('over');
  };

  module.exports = BrandList;
})
;