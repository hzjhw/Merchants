/**
 * @description BrandInfo
 * @class BrandInfo
 * @author yongjin<zjut_wyj@163.com> 2015/2/8
 */
define('BrandInfo', ['App', 'template/brand_info', 'HandlebarsHelper'], function (require, exports, module) {
  var BrandInfo, App, template, HandlebarsHelper;

  App = require('App');
  template = require('template/brand_info');
  HandlebarsHelper = require('HandlebarsHelper');

  BrandInfo = function (page, id, context) {
    var tpl = HandlebarsHelper.compile(template);

    App.query('/cmp/factinfo/' + id, {
      cache: true,
      success: function (data) {
        if (!data.factInfo) {
          data.factInfo = {}
        }
        data.factInfo.id = id;
        $(page).html(tpl(data.factInfo));

        seajs.use(['BrandMessage', 'IncludeHeader'], function(BrandMessage, IncludeHeader){
          new BrandMessage(page, '.message', {
            id: id
          });
          new IncludeHeader(page,'#include_header',data.header);
        });

        $(page).find('.go-back').click(function () {
          App.back();
        });

        $(page).find('.nav ul li').click(function () {
          App.load($(this).attr('data-target'), {
            id: $(this).attr('data-id')
          });
        });

      }

    })


    $(page).find('.go-back').click(function () {
      App.back();
    });


  }

  module.exports = BrandInfo;
});