/**
 * @description BrandTec
 * @class BrandTec
 * @author yongjin<zjut_wyj@163.com> 2015/2/8
 */
define('BrandTec', ['App', 'template/brand_tec'], function (require, exports, module) {
  var BrandTec, App, template;

  App = require('App');
  template = require('template/brand_tec');

  BrandTec = function(page, id, context){
    $(page).html(template);
    $(page).find('.btn-back').click(function(){
      App.back();
    });
  }


  module.exports = BrandTec;
});