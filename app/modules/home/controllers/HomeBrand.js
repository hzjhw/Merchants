/**
 * @description HomeBrand
 * @class HomeBrand
 * @author yongjin<zjut_wyj@163.com> 2015/2/28
 */
define('HomeBrand', ['App', 'template/home_brand'], function (require, exports, module) {
  var HomeBrand, App, template;

  App = require('App');
  template = require('template/home_brand');
  function bindBrandDetail(dom) {
    $('.merchant-content-ul li', dom).click(function () {
      window.backPage = 'home';
      App.addLoading();
      App.load('brand_detail', {
        id: $(this).attr('data-id')
      });
    });
  }

  HomeBrand = function (page, context) {
    setTimeout(function () {
      App.query('/index', {
        success: function (result) {
          App.render({ render: '#merchants-show', page: page, template: template, data: {
            title: '品牌展示馆',
            list: result.brandList.list
          }, callback: bindBrandDetail});
          App.render({ render: '#merchants-show', page: page, template: template, data: {
            title: '铝合金门馆',
            list: result.lvhejinList.list
          }, callback: bindBrandDetail});
          App.render({ render: '#merchants-show', page: page, template: template, data: {
            title: '生态木门/强化门馆',
            list: result.shengtaiList.list
          }, callback: bindBrandDetail});
          App.render({ render: '#merchants-show', page: page, template: template, data: {
            title: '防火门馆',
            list: result.fanghuoList.list
          }, callback: bindBrandDetail});
          App.render({ render: '#merchants-show', page: page, template: template, data: {
            title: '非标门馆',
            list: result.feibiaoList.list
          }, callback: bindBrandDetail});
          App.render({ render: '#merchants-show', page: page, template: template, data: {
            title: '防盗门馆',
            list: result.fangdaoList.list
          }, callback: bindBrandDetail});
          App.render({ render: '#merchants-show', page: page, template: template, data: {
            title: '不锈钢门馆',
            list: result.buxiugangList.list
          }, callback: bindBrandDetail});
          App.render({ render: '#merchants-show', page: page, template: template, data: {
            title: '钢木门馆',
            list: result.gangmuList.list
          }, callback: bindBrandDetail});
          App.render({ render: '#merchants-show', page: page, template: template, data: {
            title: '木门馆',
            list: result.mumenList.list
          }, callback: bindBrandDetail});
        }
      });
    }, 0);
  }

  module.exports = HomeBrand;
});