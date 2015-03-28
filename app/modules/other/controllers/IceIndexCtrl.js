/**
 * @description Login
 * @class Login
 * @author yongjin<zjut_wyj@163.com> 2015/2/8
 */
define('IceIndexCtrl', ['App', 'template/ice_index'], function (require, exports, module) {
  var IceIndexCtrl, App, template;

  App = require('App');
  template = require('template/ice_index');

  IceIndexCtrl = function (page, ctx) {
    debug('【Module】: Call Ice8');
    $(page).html(template);

    $(page).find('.detailed li').click(function(){
      var ids = $(this).attr('data-id');
      App.load(ids,ctx);
    });
    $(page).find('.btn-back').click(function () {
      App.back();
    });
  };

  module.exports = IceIndexCtrl;
});