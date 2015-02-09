/**
 * @description main
 * @class main
 * @author yongjin<zjut_wyj@163.com> 2015/2/8
 */
App.addModule('BrandList', 'modules/brand/controllers/BrandList.js');
App.addModule('BrandDetail', 'modules/brand/controllers/BrandDetail.js');
App.addModule('BrandInfo', 'modules/brand/controllers/BrandInfo.js');
App.addModule('BrandProduct', 'modules/brand/controllers/BrandProduct.js');
App.addModule('BrandTec', 'modules/brand/controllers/BrandTec.js');
App.addModule('BrandBlank', 'modules/brand/controllers/BrandBlank.js');

App.addTemplate('template/brand_detail', function (require, exports, module) {
  module.exports = require('modules/brand/views/brand_detail.html');
});
App.addTemplate('template/brand_list', function (require, exports, module) {
  module.exports = require('modules/brand/views/brand_list.html')
});
App.addTemplate('template/brand_info', function (require, exports, module) {
  module.exports = require('modules/brand/views/brand_info.html');
});
App.addTemplate('template/brand_product', function (require, exports, module) {
  module.exports = require('modules/brand/views/brand_product.html');
});
App.addTemplate('template/brand_tec', function (require, exports, module) {
  module.exports = require('modules/brand/views/brand_tec.html');
});
App.addTemplate('template/brand_blank', function (require, exports, module) {
  module.exports = require('modules/brand/views/brand_blank.html');
});