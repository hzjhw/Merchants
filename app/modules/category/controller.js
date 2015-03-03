/**
 * @description controller
 * @class controller
 * @author yongjin<zjut_wyj@163.com> 2015/3/3
 */
seajs.use(['App'], function (App) {
  App.controller('category', function (page) {
    App.initLoad(page, { transition: 'slideon-down', page: 'category'}, this);
    seajs.use(['CategoryCtrl'], function (CategoryCtrl) {
      new CategoryCtrl(page, this);
    });
  });
});