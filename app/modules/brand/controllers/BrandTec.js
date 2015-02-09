/**
 * @description BrandTec
 * @class BrandTec
 * @author yongjin<zjut_wyj@163.com> 2015/2/8
 */
define('BrandTec', ['App', 'template/brand_tec','HandlebarsHelper'], function (require, exports, module) {
  var BrandTec, App, template,HandlebarsHelper;
  App = require('App');
  HandlebarsHelper = require('HandlebarsHelper');

  template = require('template/brand_tec');

  BrandTec = function(page, id, context){
    var tpl = HandlebarsHelper.compile(template);
    App.query('/cmp/factgood/'+id,{
      success:function(result){
        $(page).html(tpl(result));
        seajs.use(['IncludeMessage', 'IncludeHeader'], function (IncludeMessage, IncludeHeader) {
          new IncludeMessage(page, '.message', {
            id: id
          });
          result.header.id = id;
          result.header.icon = 4;
          new IncludeHeader(page, '#include_header', result.header);
        });
      }

    });
    $(page).find('.go-back').click(function(){
      App.back();
    });
  }


  module.exports = BrandTec;
});