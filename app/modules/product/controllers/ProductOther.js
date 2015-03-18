/**
 * @description ProductSearch
 * @class ProductSearch
 * @author yongjin<zjut_wyj@163.com> 2015/2/8
 */
define('ProductOther', ['App', 'template/product_other', 'HandlebarsHelper'], function (require, exports, module) {
  var ProductOther, App, template, HandlebarsHelper;

  App = require('App');
  HandlebarsHelper = require('HandlebarsHelper');
  template=require('template/product_other');

  ProductOther = function (page, rend,factid,curid) {
    debug('【Module】: Call ProductOther');
    setTimeout(function () {
      var tpl = HandlebarsHelper.compile(template);
      App.query('/cmp/others',{
        cache:true,
        data:{factid:factid,curid:curid,rcmPS:5},
        success:function(result){
          $(page).find(rend).html(tpl(result));
          $(page).find('td img').click(function(){
            App.load('product_detail', {
              id: $(this).attr('fact-id'),
              proid: $(this).attr('pro-id')
            });
          });
        }
      });
    },0);

  };

  module.exports = ProductOther;
});