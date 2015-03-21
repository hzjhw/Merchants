/**
 * @description BrandDetail
 * @class BrandDetail
 * @author yongjin<zjut_wyj@163.com> 2015/2/8
 */
define('BrandDetail', ['App', 'template/brand_detail', 'HandlebarsHelper'], function (require, exports, module) {
  var BrandDetail, App, template, HandlebarsHelper;

  App = require('App');
  HandlebarsHelper = require('HandlebarsHelper');
  template = require('template/brand_detail');

  BrandDetail = function (page, id, context) {
    setTimeout(function () {
      debug('【Module】: Call BrandDetail');
      if(id === 'null')
      {
        console.log('id为空值了!');
        App.load('home');
        return;
      }
      var tpl = HandlebarsHelper.compile(template);
      App.query('/cmp/' + id, {
        cache: true,
        success: function (result) {
          console.log(result.facPhone);
          if (!result.header) {
            result.header = {
              back_img: 'images/no-pic.jpg',
              header_img: 'images/no-pic.jpg',
              logo_img: 'images/no-pic.jpg'
            };
          }
          result.header.id = id;
          if (!result.inxImgs) result.inxImgs = [];
          $(page).html(tpl(result.inxImgs));
          seajs.use(['IncludeHeader'], function (IncludeHeader) {
            result.header.icon = 1;
            result.header.hide = false;
            new IncludeHeader(page, '#include_header', result.header);
          });
          page.facPhone = result.facPhone;
          /*seajs.use(['IncludeDetailBottom'], function (IncludeDetailBottom) {
            new IncludeDetailBottom(page, '.bottombar-ul', {
              isLogin: App.isLogin(),
              facPhone: result.facPhone
            });
          });*/

          $(page).find('.go-back').click(function () {
            App.back(App.getBackPage());
          });
        }
      });
    }, 0);
  };

  module.exports = BrandDetail;
});