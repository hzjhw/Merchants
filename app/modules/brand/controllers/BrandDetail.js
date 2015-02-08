/**
 * @description BrandDetail
 * @class BrandDetail
 * @author yongjin<zjut_wyj@163.com> 2015/2/8
 */
define('BrandDetail', ['App', 'template/brand_detail'], function (require, exports, module) {
  var BrandDetail, App, template;

  App = require('App');
  template = require('template/brand_detail');

  BrandDetail = function (page, id, context) {
    $(page).html(template);
    $(page).find('.btn-back').click(function () {
      App.back();
    })
  }

  module.exports = BrandDetail;
});