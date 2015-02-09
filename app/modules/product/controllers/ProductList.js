/**
 * @description ProductList
 * @class ProductList
 * @author yongjin<zjut_wyj@163.com> 2015/2/8
 */
define('ProductList', ['App', 'template/product_list'], function (require, exports, module) {
  var ProductList, App, template;

  App = require('App');
  template = require('template/product_list');

  ProductList = function (page, ctx) {
    $(page).html(template);
    $(page).find('.go-back').click(function () {
      App.back('home', function () {

      });
    });
      $("#factory .header .hall").click(function(){
          $(this).toggleClass("minus");
          $("#factory .prolist").toggleClass("show");
      })

      $("#factory .search-list-title .icons-largest").click(function(){
          $(this).toggleClass("icons-larger");
          $("#factory .search-list-cont").toggleClass("larger-view");
      })
// 筛选弹窗
      $(page).find('#factory .search-list-title .titlename').click(function () {
          var $dom = $(this).get(0);
          seajs.use(['dialog'], function (dialog) {
              window.dialog = dialog({
                  id: '330dialog',
                  skin: 'clickxiala',
                  title: ' ',
                  width: WINDOW_WIDTH - 74,
                  height:$('.xiala').height(),
                  content: $('.xiala', $(page)).html(),
                  onshow: function () {
                      var ctx = this;
                      $('.ul-my li').click(function () {
                          ctx.close().remove();
                          App.load($(this).attr('data-target'));
                      });
                  }
              }).showModal($dom);
          })
      });
  }

  module.exports = ProductList;
});