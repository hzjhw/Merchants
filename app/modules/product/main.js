/**
 * @description main
 * @class main
 * @author yongjin<zjut_wyj@163.com> 2015/2/8
 */
App.addModule('ProductList', 'modules/product/controllers/ProductList.js');
App.addTemplate('template/product_list', function (require, exports, module) {
  module.exports = require('modules/product/views/product_list.html');
});