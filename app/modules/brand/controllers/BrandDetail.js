/**
 * @description BrandDetail
 * @class BrandDetail
 * @author yongjin<zjut_wyj@163.com> 2015/2/8
 */
define('BrandDetail', ['App', 'template/brand_detail', 'HandlebarsHelper'], function (require, exports, module) {
  var BrandDetail, App, template, HandlebarsHelper;

  App = require('App');
  template = require('template/brand_detail');
  HandlebarsHelper = require('HandlebarsHelper');

  BrandDetail = function (page, id, context) {
    var tpl = HandlebarsHelper.compile(template);

    App.query('/cmp/' + id, {
      cache: true,
      success: function (result) {
        if (!result.indexInfo) {
          result.indexInfo = {
            back_img: 'images/no-pic.jpg',
            header_img: 'images/no-pic.jpg',
            logo_img: 'images/no-pic.jpg'
          }
        }
        result.indexInfo.id = id;
        $(page).html(tpl(result.indexInfo));

          seajs.use(['IncludeMessage', 'IncludeHeader'], function(IncludeMessage, IncludeHeader){
              new IncludeMessage(page, '.message', {
                id: id
              });
            result.indexInfo.icon=1;
            new IncludeHeader(page,'#include_header',result.indexInfo);
          });

        $(page).find('.go-back').click(function () {
          App.back();
        });
      }
    });
  }

  module.exports = BrandDetail;
});