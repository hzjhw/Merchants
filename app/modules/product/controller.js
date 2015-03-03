/**
 * @description controller
 * @class controller
 * @author yongjin<zjut_wyj@163.com> 2015/3/3
 */
seajs.use(['App'], function (App) {
  /*产品列表*/
  App.controller('product_list', function (page) {
    var ctx = this;
    App.initLoad(page, { transition: 'fade', page: 'product_list'}, ctx);
    if (!ctx.args.id) ctx.args.id = localStorage['product_list_args_id'];
    localStorage['product_list_args_id'] = ctx.args.id;
    seajs.use(['ProductList'], function (ProductList) {
      new ProductList(page, ctx.args.id, ctx.args.price, ctx);
    });
  });

  /*产品详细*/
  App.controller('product_detail', function (page) {
    var ctx = this;
    App.initLoad(page, { transition: 'fade', page: 'product_detail'}, ctx);
    if (!ctx.args.id) ctx.args.id = localStorage['product_detail_args_id'];
    if (!ctx.args.id) ctx.args.proid = localStorage['product_detail_args_proid'];
    localStorage['product_detail_args_id'] = ctx.args.id;
    localStorage['product_detail_args_proid'] = ctx.args.proid;
    seajs.use(['ProductDetail'], function (ProductDetail) {
      new ProductDetail(page, ctx.args.id, ctx.args.proid, ctx);
    });
  });
  App.controller('product_search', function (page) {
    var ctx = this;
    App.initLoad(page, { transition: 'fade', page: 'product_search'}, ctx);
    seajs.use(['ProductSearch'], function (ProductSearch) {
      new ProductSearch(page, ctx);
    });
  });
});