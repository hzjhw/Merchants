/**
 * @description BrandList
 * @class BrandList
 * @author yongjin<zjut_wyj@163.com> 2015/2/8
 */
define('BrandList', ['App', 'template/brand_list', 'HandlebarsHelper'], function (require, exports, module) {
  var BrandList, App, template, HandlebarsHelper;

  App = require('App');
  HandlebarsHelper = require('HandlebarsHelper');

  BrandList = function (page, id) {
    template = require('template/brand_list');
    $(page).html(template);
    $(page).find('.btn-back').click(function () {
      App.back();
    });
    var $loading = $(page).find('.loading'),
      $list = $(page).find('.merchant-content-ul'),
      item = $(page).find('.merchant-content-ul').html(),
      totalPage = null,
      pageNumber = 1,
      i = 1;
    $loading.remove();
    $(page).find('.merchant-content-ul').empty();
    item = HandlebarsHelper.compile(item);
    App.infiniteScroll($list, { loading: $loading }, function (callback) {
      if (totalPage && (pageNumber > totalPage)) return null;
      App.query('/brand/' + id, {
        cache: true,
        data: {
          pageSize: 10,
          pageNumber: pageNumber
        },
        success: function (result) {
          totalPage = result.brandList.totalPage;
          var list = [];
          for (var j = 0; j < result.brandList.list.length; j++) {
            var $node = $(item(result.brandList.list[j]));
            $node.click(function () {
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
      })
    });
  }

  module.exports = BrandList;
})
;