/**
 * @description BrandTec
 * @class BrandTec
 * @author yongjin<zjut_wyj@163.com> 2015/2/8
 */
define('BrandTec', ['App', 'template/brand_tec', 'HandlebarsHelper'], function (require, exports, module) {
  var BrandTec, App, template, HandlebarsHelper;
  App = require('App');
  HandlebarsHelper = require('HandlebarsHelper');

  template = require('template/brand_tec');

  BrandTec = function (page, id, context) {
    setTimeout(function(){
      var tpl = HandlebarsHelper.compile(template);
      App.query('/cmp/factgood/' + id, {
        success: function (result) {
          $(page).html(tpl(result));
          seajs.use(['IncludeMessage', 'IncludeHeader'], function (IncludeMessage, IncludeHeader) {
            new IncludeMessage(page, '.message', {
              id: id,
              loginType:'brand_tec'
            });
            result.header.id = id;
            result.header.icon = 4;
            new IncludeHeader(page, '#include_header', result.header);
          });

          // 底部导航
          $(page).find('.buttombar-ul li').click(function () {
            App.load($(this).attr('data-target'));
          });
          $(page).find('.go-back').click(function () {
            if(LOGIN_CHANGE)
            {
              App.load(window.backPage);
            }
            else
            {
              App.back(window.backPage);
            }
          });
        }
      });
    }, 0);
  }


  module.exports = BrandTec;
});