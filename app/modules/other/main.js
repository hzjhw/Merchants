/**
 * @description main
 * @class main
 * @author yongjin<zjut_wyj@163.com> 2015/2/8
 */
App.addModule('IceCtrl', 'modules/other/controllers/IceCtrl.js');
App.addTemplate('template/ice', function (require, exports, module) {
  module.exports = require('modules/other/views/ice.html');
});