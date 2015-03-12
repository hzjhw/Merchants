/**
 * @description FavoriteCtrl
 * @class FavoriteCtrl
 * @author yongjin<zjut_wyj@163.com> 2015/2/8
 */
define('FavPro', ['App','template/favPro','HandlebarsHelper'], function (require, exports, module) {
  var FavPro, App, template,HandlebarsHelper;

  App = require('App');
  HandlebarsHelper = require('HandlebarsHelper');
  template = require('template/favPro');

  FavPro = function (page) {
    var tpl = HandlebarsHelper.compile(template);
    App.query('/userinfo/collectPro', {
      success: function (result) {
        $(page).html(tpl(result));
        seajs.use(['IncludeBtm'], function (IncludeBtm) {
          new IncludeBtm(page, '.footer_mes');
        });
          $(page).find('.product li a').on('click', function () {
             var id =  $(this).parents('li').attr('fact-id');
             var proid =  $(this).parents('li').attr('pro-id');
            App.load('product_detail', {
              id: id,
              proid: proid
            });
          });
        $(page).find('.btn-back').click(function () {
          App.back();
        });
      }
    });
  };
  module.exports = FavPro;
});