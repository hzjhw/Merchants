/**
 * @description BrandBlank
 * @class BrandBlank
 * @author yongjin<zjut_wyj@163.com> 2015/2/8
 */
define('BrandBlank', ['App', 'template/brand_blank'], function (require, exports, module) {
  var BrandBlank, App, template;

  App = require('App');
  template = require('template/brand_blank');

  BrandBlank = function (page, id, context) {
    $(page).html(template);
    $(page).find('.go-back').click(function () {
      App.back();
    });

      $("#factory .header .hall").click(function(){
          $(this).toggleClass("minus");
          $("#factory .prolist").toggleClass("show");
      })
  }

  module.exports = BrandBlank;
});