/**
 * @description BrandProduct
 * @class BrandProduct
 * @author yongjin<zjut_wyj@163.com> 2015/2/8
 */
define('BrandProduct', ['App', 'template/brand_product'], function (require, exports, module) {
  var BrandProduct, App, template;

  App = require('App');
  template = require('template/brand_product');

  BrandProduct = function(page, id, context){
    $(page).html(template);
    $(page).find('.btn-back').click(function(){
      App.back();
    });
    seajs.use(['IncludeMessage', 'IncludeHeader'], function (IncludeMessage, IncludeHeader) {
      new IncludeMessage(page, '.message', {
        id: id
      });
      data.header.id = id;
      data.header.icon = 3;
      new IncludeHeader(page, '#include_header', data.header);
    });
    // 底部导航
    $(page).find('.buttombar-ul li').click(function () {
      App.load($(this).attr('data-target'));
    });
  }

  module.exports = BrandProduct;
});