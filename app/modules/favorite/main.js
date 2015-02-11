/**
 * @description main
 * @class main
 * @author yongjin<zjut_wyj@163.com> 2015/2/8
 */

App.addTemplate('template/favBrand', function (require, exports, module) {
  module.exports = require('modules/favorite/views/favorite_brand.html');
});
App.addTemplate('template/favPro', function (require, exports, module) {
  module.exports = require('modules/favorite/views/favorite_product.html')
});
App.addTemplate('template/favInfo', function (require, exports, module) {
  module.exports = require('modules/favorite/views/favorite_info.html')
});
App.addTemplate('template/favCooprate', function (require, exports, module) {
  module.exports = require('modules/favorite/views/favorite_cooprate.html')
});
App.addTemplate('template/favMoney', function (require, exports, module) {
  module.exports = require('modules/favorite/views/favorite_money.html')
});
App.addTemplate('template/favMessage', function (require, exports, module) {
  module.exports = require('modules/favorite/views/favorite_message.html')
});
App.addModule('FavBrand', 'modules/favorite/controllers/FavBrandCtrl.js');
App.addModule('FavPro', 'modules/favorite/controllers/FavProCtrl.js');
App.addModule('FavInfo', 'modules/favorite/controllers/FavInfoCtrl.js');
App.addModule('FavMessage', 'modules/favorite/controllers/FavMessageCtrl.js');
App.addModule('FavMoney', 'modules/favorite/controllers/FavMoneyCtrl.js');
App.addModule('FavCooprate', 'modules/favorite/controllers/FavCooprateCtrl.js');