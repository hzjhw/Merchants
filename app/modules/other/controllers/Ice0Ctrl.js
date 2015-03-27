/**
 * @description Login
 * @class Login
 * @author yongjin<zjut_wyj@163.com> 2015/2/8
 */
define('Ice0Ctrl', ['App', 'template/ice0'], function (require, exports, module) {
  var Ice0Ctrl, App, template;

  App = require('App');
  template = require('template/ice0');

  Ice0Ctrl = function (page, ctx) {
    debug('【Module】: Call Ice5');
    $(page).html(template);
    $(page).find('.btn-back').click(function () {
      App.back();
    });
  };

  module.exports = Ice0Ctrl;
});