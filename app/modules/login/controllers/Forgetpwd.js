/**
 * @description Login
 * @class Login
 * @author yongjin<zjut_wyj@163.com> 2015/2/8
 */
define('Forgetpwd', ['App', 'template/forgetpwd'], function (require, exports, module) {
  var Forgetpwd, App, template;

  App = require('App');
  template = require('template/forgetpwd');

  Forgetpwd = function (page) {
    debug('【Module】: Call forget passwd');
    $(page).html(template);
  };

  module.exports = Forgetpwd;
});