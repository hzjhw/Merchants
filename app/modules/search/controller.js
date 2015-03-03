/**
 * @description controller
 * @class controller
 * @author yongjin<zjut_wyj@163.com> 2015/3/3
 */
seajs.use(['App'], function (App) {
  /*搜索页面*/
  App.controller('search', function (page) {
    var ctx = this;
    App.initLoad(page, { transition: 'fade', page: 'search'}, ctx);
    seajs.use(['SearchIndex'], function (SearchIndex) {
      new SearchIndex(page, ctx);
    });
  });
});