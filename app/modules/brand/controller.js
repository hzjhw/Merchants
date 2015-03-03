/**
 * @description controller
 * @class controller
 * @author yongjin<zjut_wyj@163.com> 2015/3/3
 */
seajs.use(['App'], function (App) {
  /*品牌列表*/
  App.controller('brand_list', function (page) {
    var ctx = this;
    App.initLoad(page, { transition: 'slide-left', page: 'brand_list'}, this);

    this.transition = 'slide-left';

    this.transition = 'slide-left';

    if (!ctx.args.id) ctx.args.id = localStorage['brand_list_args_id'];
    if (!ctx.args.title) ctx.args.title = localStorage['brand_list_args_title'];
    if (!ctx.args.banner) ctx.args.banner = localStorage['brand_list_args_banner'];

    localStorage['brand_list_args_id'] = ctx.args.id;
    localStorage['brand_list_args_title'] = ctx.args.title;
    localStorage['brand_list_args_banner'] = ctx.args.banner;

    seajs.use(['BrandList'], function (BrandList) {
      new BrandList(page, ctx.args.id, ctx.args.title, ctx.args.banner, ctx.args.area);
    });
  });
  /*品牌详细*/
  App.controller('brand_detail', function (page) {
    var ctx = this;
    LOGIN_TYPE = 'brand_detail';
    App.initLoad(page, { transition: 'fade', page: 'brand_detail'}, ctx);
    if (!ctx.args.id) ctx.args.id = localStorage['brand_detail_args_id'];
    localStorage['brand_detail_args_id'] = ctx.args.id;
    seajs.use(['BrandDetail'], function (BrandDetail) {
      new BrandDetail(page, ctx.args.id, ctx);
    })
  });
  /*厂家信息*/
  App.controller('brand_info', function (page) {
    var ctx = this;
    LOGIN_TYPE = 'brand_info';
    App.initLoad(page, { transition: 'fade', page: 'brand_info'}, ctx);
    if (!ctx.args.id) ctx.args.id = localStorage['brand_info_args_id'];
    localStorage['brand_info_args_id'] = ctx.args.id;
    seajs.use(['BrandInfo'], function (BrandInfo) {
      new BrandInfo(page, ctx.args.id, ctx);
    });
  });
  /*厂家产品*/
  App.controller('brand_product', function (page) {
    var ctx = this;
    LOGIN_TYPE = 'brand_product';
    App.initLoad(page, { transition: 'fade', page: 'brand_product'}, ctx);
    if (!ctx.args.id) ctx.args.id = localStorage['brand_product_args_id'];
    localStorage['brand_product_args_id'] = ctx.args.id;
    seajs.use(['BrandProduct'], function (BrandProduct) {
      new BrandProduct(page, ctx.args.id, ctx);
    });
  });
  /*厂家实力*/
  App.controller('brand_tec', function (page) {
    var ctx = this;
    LOGIN_TYPE = 'brand_tec';
    App.initLoad(page, { transition: 'fade', page: 'brand_tec'}, ctx);
    if (!ctx.args.id) ctx.args.id = localStorage['brand_tec_args_id'];
    localStorage['brand_tec_args_id'] = ctx.args.id;
    seajs.use(['BrandTec'], function (BrandTec) {
      new BrandTec(page, ctx.args.id, ctx);
    });
  });
  /*空白区域*/
  App.controller('brand_blank', function (page) {
    var ctx = this;
    LOGIN_TYPE = 'brand_blank';
    App.initLoad(page, { transition: 'fade', page: 'brand_blank'}, ctx);
    if (!ctx.args.id) ctx.args.id = localStorage['brand_blank_args_id'];
    localStorage['brand_blank_args_id'] = ctx.args.id;
    seajs.use(['BrandBlank'], function (BrandBlank) {
      new BrandBlank(page, ctx.args.id, ctx);
    });
  });
  /*特色门馆*/
  App.controller('brand_unique', function (page) {
    var ctx = this;
    App.initLoad(page, { transition: 'fade', page: 'brand_unique'}, ctx);
    seajs.use(['BrandUnique'], function (BrandUnique) {
      new BrandUnique(page, ctx);
    });
  });
});