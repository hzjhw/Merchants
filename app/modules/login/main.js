/**
 * @description main
 * @class main
 * @author yongjin<zjut_wyj@163.com> 2015/2/8
 */
App.addModule('Login', 'modules/login/controllers/Login.js');
App.addTemplate('template/login', function (require, exports, module) {
  module.exports = require('modules/login/views/login.html');
});