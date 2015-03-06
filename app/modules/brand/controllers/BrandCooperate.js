/**
 * @description BrandCooperate
 * @class BrandCooperate
 * @author yongjin<zjut_wyj@163.com> 2015/3/6
 */
define('BrandCooperate', ['App', 'HandlebarsHelper', 'template/brand_cooperate'], function (require, exports, module) {
  var BrandCooprate, App, HandlebarsHelper, template;

  App = require('App');
  HandlebarsHelper = require('HandlebarsHelper');
  template = require('template/brand_cooperate');

  BrandCooperate = function (page, id) {
    setTimeout(function(){
      var tpl = HandlebarsHelper.compile(template);
      $(page).html(tpl({}));
    },0);
  }

  module.exports = BrandCooperate;
});