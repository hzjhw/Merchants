/**
 * @description Login
 * @class Login
 * @author yongjin<zjut_wyj@163.com> 2015/2/8
 */
define('Login', ['App', 'template/login'], function (require, exports, module) {
  var Login, App, template;

  App = require('App');
  template = require('template/login');

  Login = function (page, ctx) {
    $(page).html(template);
    $(page).find('.btn-back').click(function () {
      App.back('home', function () {
      });
    });
  }

  module.exports = Login;
});