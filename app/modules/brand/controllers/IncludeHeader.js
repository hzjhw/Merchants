/**
 * @description IncludeHeader
 * @class IncludeHeader
 * @author yongjin<zjut_wyj@163.com> 2015/2/8
 */
define('IncludeHeader', ['App', 'template/include_header', 'HandlebarsHelper'], function (require, exports, module) {
  var IncludeHeader, App, template, HandlebarsHelper;

    var tpl = HandlebarsHelper.compile(template);
      App = require('App');
      template = require('template/include_header');
      HandlebarsHelper = require('HandlebarsHelper');

      IncludeHeader = function (page, render, data) {
    $(page).find(render).html(tpl(data));
    $(page).find('.nav ul li').click(function () {
      App.load($(this).attr('data-target'), {
        id: $(this).attr('data-id')
      });
    });
  }
  module.exports = IncludeHeader;
});