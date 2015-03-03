/**
 * @description controller
 * @class controller
 * @author yongjin<zjut_wyj@163.com> 2015/3/3
 */
seajs.use(['App'], function (App) {
  /*登录页面*/
  App.controller('login_dealers', function (page) {
    var ctx = this;
    App.initLoad(page, { transition: 'slide-left', page: 'login_dealers'}, ctx);
    seajs.use(['Login'], function (Login) {
      new Login(page, ctx);
    });
  });
  /*经销商*/
  App.controller('favorite_info', function (page) {
    App.initLoad(page, { transition: 'slide-left', page: 'favorite_info'}, this);
    seajs.use(['FavInfo'], function (FavInfo) {
      new FavInfo(page);
    });
  });
});