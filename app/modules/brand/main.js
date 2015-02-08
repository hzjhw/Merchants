/**
 * @description main
 * @class main
 * @author yongjin<zjut_wyj@163.com> 2015/2/8
 */
App.addModule('BrandCtrl', 'modules/brand/controllers/BrandCtrl.js');
App.addTemplate('template/brand_detail', function (require, exports, module) {
  module.exports = require('modules/brand/views/brand_detail.html');
});