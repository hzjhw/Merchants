/**
 * @description controller
 * @class controller
 * @author yongjin<zjut_wyj@163.com> 2015/3/3
 */
seajs.use(['App'], function (App) {
  /*搜藏的产品*/
  App.controller('favorite_product', function (page) {
    App.initLoad(page, { transition: 'slide-left', page: 'favorite_product'}, this);
    seajs.use(['FavPro'], function (FavPro) {
      new FavPro(page);
    });
  });
  /*搜藏的品牌*/
  App.controller('favorite_brand', function (page) {
    App.initLoad(page, { transition: 'slide-left', page: 'favorite_brand'}, this);
    seajs.use(['FavBrand'], function (FavBrand) {
      new FavBrand(page);
    });
  });
  /*我的抵金券*/
  App.controller('favorite_money', function (page) {
    App.initLoad(page, { transition: 'slide-left', page: 'favorite_money'}, this);
    seajs.use(['FavMoney'], function (FavMoney) {
      new FavMoney(page);
    });
  });
  /*我的意向合作*/
  App.controller('favorite_cooprate', function (page) {
    App.initLoad(page, { transition: 'slide-left', page: 'favorite_cooprate'}, this);
    seajs.use(['FavCooprate'], function (FavCooprate) {
      new FavCooprate(page);
    });
  });
  /*我的留言*/
  App.controller('favorite_message', function (page) {
    App.initLoad(page, { transition: 'slide-left', page: 'favorite_message'}, this);
    seajs.use(['FavMessage'], function (FavMessage) {
      new FavMessage(page);
    });
  });
});