/**
 * @description Register
 * @class Register
 * @author yongjin<zjut_wyj@163.com> 2015/2/8
 */
define('Register', ['App', 'template/register'], function (require, exports, module) {
  var Register, App, template;

  App = require('App');
  template = require('template/register');

  Register = function (page, ctx) {
    $(page).html(template);
    $(page).find('.btn-back').click(function () {
      App.back('home', function () {

      })
    });
  }

  module.exports = Register;
});