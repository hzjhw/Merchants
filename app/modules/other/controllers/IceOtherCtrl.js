/**
 * @description Login
 * @class Login
 * @author yongjin<zjut_wyj@163.com> 2015/2/8
 */
define('IceOtherCtrl', ['App', 'template/ice_other'], function (require, exports, module) {
  var IceOtherCtrl, App, template;

  App = require('App');
  template = require('template/ice_other');

  IceOtherCtrl = function (page, ctx) {
    debug('【Module】: Call Ice8');
    $(page).html(template);
    $(page).find('.btn-back').click(function () {
      App.back();
    });
  };

  module.exports = IceOtherCtrl;
});