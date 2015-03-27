Ice5Ctrl.js/**
 * @description Login
 * @class Login
 * @author yongjin<zjut_wyj@163.com> 2015/2/8
 */
define('Ice6Ctrl', ['App', 'template/ice6'], function (require, exports, module) {
  var Ice6Ctrl, App, template;

  App = require('App');
  template = require('template/ice6');

  Ice6Ctrl = function (page, ctx) {
    debug('【Module】: Call Ice6');
    $(page).html(template);
    $(page).find('.btn-back').click(function () {
      App.back();
    });
  };

  module.exports = Ice6Ctrl;
});