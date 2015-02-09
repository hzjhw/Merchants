/**
 * @description ProductList
 * @class ProductList
 * @author yongjin<zjut_wyj@163.com> 2015/2/8
 */
define('ProductList', ['App', 'template/product_list', 'HandlebarsHelper'], function (require, exports, module) {
  var ProductList, App, template, HandlebarsHelper;

  App = require('App');
  template = require('template/product_list');
  HandlebarsHelper = require('HandlebarsHelper');

  ProductList = function (page, id, ctx) {

    var tpl = HandlebarsHelper.compile(template);


    if (typeof id === 'undefined') return;
    App.query('/cmp/' + id, {
      success: function (result) {
        if (!result.indexInfo) {
          result.indexInfo = {
            back_img: 'images/no-pic.jpg',
            header_img: 'images/no-pic.jpg',
            logo_img: 'images/no-pic.jpg'
          }
        }
        result.indexInfo.id = id;

        App.query('/cmp/product/'+id,{
          cache:true,
          data: {
            pageSize: 500
          },
          success:function(data){
            result.indexInfo.list = data.proList.list;
            result.indexInfo.firstCats =data.firstCats;
            $(page).html(tpl(result.indexInfo));

            seajs.use(['IncludeMessage', 'IncludeHeader'], function(IncludeMessage, IncludeHeader){
              new IncludeMessage(page, '.message', {
                id: id
              });
              result.indexInfo.icon=3;
              new IncludeHeader(page,'#include_header',result.indexInfo);
            });

            $(page).find('.go-back').click(function () {
              App.back();
            });
            $(page).find('.prolist a').click(function () {
              App.load('brand_list', {
                id: $(this).attr('data-id'),
                title: $(this).attr('data-title'),
                banner: $(this).attr('data-banner')
              });
            });

            $(page).find('.go-back').click(function () {
              App.back('home', function () {

              });
            });
            $(page).find("#factory .header .hall").click(function(){
              $(this).toggleClass("minus");
              $("#factory .prolist").toggleClass("show");
            })

            $(page).find("#factory .search-list-title .icons-largest").click(function(){
              $(this).toggleClass("icons-larger");
              $("#factory .search-list-cont").toggleClass("larger-view");
            })

            $(page).find('.search-list-cont .glitzItem').click(function(){
              App.load('product_detail', {
                id: id,
                proid:$(this).attr('data-id')
              });
            });

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
            var i = 0;
            var listCont = $(page).find('#factory .search-list-cont');
            $(page).find('.icons-list').click(function(){
              if (i === 3){
                i = 0;
              }
              switch(i){
                case 0:
                  $(this).removeClass("icons-largest").addClass("icons-larger");
                  listCont.removeClass("largest-view").addClass('larger-view');break;
                case 1:
                  $(this).removeClass("icons-larger").addClass("icons-list");
                  listCont.removeClass("larger-view").addClass('list-view');break;
                case 2:
                  $(this).removeClass("icons-list").addClass("icons-largest");
                  listCont.removeClass("list-view").addClass('largest-view');break;
              }
              i++;
            });



          }});
      }
    });

  }

  module.exports = ProductList;
});