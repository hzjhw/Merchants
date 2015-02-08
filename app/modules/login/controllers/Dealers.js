/**
 * Created by Administrator on 2015/2/8.
 */
define('Dealers', ['App', 'template/dealers'], function (require, exports, module) {
  var Dealers, App, template;

  App = require('App');
  template = require('template/dealers');

  Dealers = function (page, ctx) {
    $(page).html(template);
    $(page).find('.btn-back').click(function () {
      App.back('home', function () {

      });
    });
  }

  module.exports = Dealers;
});