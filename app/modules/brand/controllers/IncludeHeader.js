/**
 * @description IncludeHeader
 * @class IncludeHeader
 * @author yongjin<zjut_wyj@163.com> 2015/2/8
 */
define('IncludeHeader', ['App', 'template/include_header', 'HandlebarsHelper'], function (require, exports, module) {
  var IncludeHeader, App, template, HandlebarsHelper;


  App = require('App');
  template = require('template/include_header');
  HandlebarsHelper = require('HandlebarsHelper');

  IncludeHeader = function (page, render, data) {
    var tpl = HandlebarsHelper.compile(template);
    $(page).find(render).html(tpl(data || {
      logo_img: null
    }));
    /*$(page).find('.nav ul li').click(function () {
      App.load($(this).attr('data-target'), {
        id: $(this).attr('data-id')
      });
      return false;
    });*/
    $(page).find('.logo').click(function(){
      App.load('home');
    })
    $(page).find("#factory .header .hall").on('click', function () {
      $(this).toggleClass("minus");
      $("#factory .prolist").toggleClass("show");
    });
    $(page).find('.prolist a').click(function () {
      App.load('brand_list', {
        id: $(this).attr('data-id'),
        title: $(this).attr('data-title'),
        banner: $(this).attr('data-banner')
      });
    });
  }
  module.exports = IncludeHeader;
});