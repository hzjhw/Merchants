/**
 * @description main
 * @class main
 * @author yongjin<zjut_wyj@163.com> 2015/2/8
 */
App.addModule('BrandList', 'modules/brand/controllers/BrandList.js');
App.addModule('BrandDetail', 'modules/brand/controllers/BrandDetail.js');
App.addTemplate('template/brand_detail', function (require, exports, module) {
  module.exports = require('modules/brand/views/brand_detail.html');
});
App.addTemplate('template/brand_list', function (require, exports, module) {
  module.exports = require('modules/brand/views/brand_list.html')
});
App.addModule('BrandInfo', 'modules/brand/controllers/BrandInfo.js');
App.addTemplate('template/brand_info', function (require, exports, module) {
  module.exports = require('modules/brand/views/brand_info.html');
});