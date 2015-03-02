/**
 * @description BrandInfo
 * @class BrandInfo
 * @author yongjin<zjut_wyj@163.com> 2015/2/8
 */
define('BrandInfo', ['App', 'template/brand_info', 'HandlebarsHelper'], function (require, exports, module) {
  var BrandInfo, App, template, HandlebarsHelper;

  App = require('App');
  template = require('template/brand_info');
  HandlebarsHelper = require('HandlebarsHelper');

  BrandInfo = function (page, id, context) {
    setTimeout(function () {

      var tpl = HandlebarsHelper.compile(template);

      App.query('/cmp/factinfo/' + id, {
        success: function (data) {
          if (!data.factInfo) {
            data.factInfo = {}
          }
          data.factInfo.id = id;
          $(page).html(tpl(data.factInfo));
          $(page).find('.icon').removeClass('current');
          $(page).find('.data').addClass('current');
          seajs.use(['IncludeMessage', 'IncludeHeader'], function (IncludeMessage, IncludeHeader) {
            new IncludeMessage(page, '.message', {
              id: id
            });
            data.header.id = id;
            data.header.icon = 2;
            new IncludeHeader(page, '#include_header', data.header);
          });
          $(page).find(".title_general").click(function () {
            var pDiv = $(this).find('p').eq(1);
            var nextDiv = $(this).next();
            if ($(this).hasClass('clicked')) {
              pDiv.text('展开').removeClass('shut').addClass('open');
              nextDiv.show();
              $(this).removeClass('clicked');
            } else {
              pDiv.text('收起').removeClass('open').addClass('shut');
              nextDiv.hide();
              $(this).addClass('clicked');
            }
          })
          $(page).find('.go-back').click(function () {
            if(LOGIN_CHANGE)
            {
              App.load(window.backPage);
              LOGIN_CHANGE=false;
            }
            else
            {
              App.back(window.backPage);
            }
          });
// 底部导航
          $(page).find('.buttombar-ul li').click(function () {
            App.load($(this).attr('data-target'));
          });
        }
      })
      $(page).find('.go-back').click(function () {
        App.back();
      });
    }, 0);
  }

  module.exports = BrandInfo;
});