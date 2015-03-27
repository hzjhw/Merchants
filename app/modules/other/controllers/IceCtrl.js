/**
 * @description Login
 * @class Login
 * @author yongjin<zjut_wyj@163.com> 2015/2/8
 */
define('IceCtrl', ['App', 'template/ice'], function (require, exports, module) {
  var IceCtrl, App, template;

  App = require('App');
  template = require('template/ice');

  IceCtrl = function (page, ctx) {
    debug('【Module】: Call Ice');
    $(page).html(template);
    $(page).find('.btn-back').click(function () {
      App.back();
    });
  };

  module.exports = IceCtrl;
});