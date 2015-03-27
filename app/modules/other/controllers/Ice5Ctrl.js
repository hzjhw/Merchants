/**
 * @description Login
 * @class Login
 * @author yongjin<zjut_wyj@163.com> 2015/2/8
 */
define('Ice5Ctrl', ['App', 'template/ice5'], function (require, exports, module) {
  var Ice5Ctrl, App, template;

  App = require('App');
  template = require('template/ice5');

  Ice5Ctrl = function (page, ctx) {
    debug('【Module】: Call Ice5');
    $(page).html(template);
    $(page).find('.btn-back').click(function () {
      App.back();
    });
  };

  module.exports = Ice5Ctrl;
});