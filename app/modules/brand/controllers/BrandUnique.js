/**
 * @description BrandUnique
 * @class BrandUnique
 * @author yongjin<zjut_wyj@163.com> 2015/2/9
 */
define('BrandUnique', ['App', 'template/brand_unique', 'HandlebarsHelper'], function (require, exports, module) {
  var BrandUnique, App, template, HandlebarsHelper;

  App = require('App');
  template = require('template/brand_unique');
  HandlebarsHelper = require('HandlebarsHelper');

  function loadBrand(page, render, id, template) {
    // 列表
    var $loading = $(page).find('.loading'),
      $list = $(page).find(render),
      item = template,
      totalPage = null,
      pageNumber = 1,
      i = 1;
    $loading.remove();
    $(page).find(render).empty();
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

  BrandUnique = function (page, context) {
    $(page).html(template);
    $(page).find('.go-back').click(function () {
      App.back();
    });
    var tpl = $(page).find('.mer-unique-ul').html();

    $(page).find('.mer-nuique-ul li').click(function () {
      $(this).addClass('current').siblings().removeClass('current');
      loadBrand(page, '.mer-unique-ul', $(this).attr('data-id'), tpl);
    });
    loadBrand(page, '.mer-unique-ul', '4531876237', tpl);
  }

  module.exports = BrandUnique;
});