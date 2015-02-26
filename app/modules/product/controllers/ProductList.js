/**
 * @description ProductList
 * @class ProductList
 * @author yongjin<zjut_wyj@163.com> 2015/2/8
 */
define('ProductList', ['App', 'template/product_list','template/pro_partlist','Est', 'HandlebarsHelper'], function (require, exports, module) {
  var ProductList, App,Est, template, HandlebarsHelper,partTemplate;

  App = require('App');
  Est = require('Est');
  template = require('template/product_list');
  partTemplate = require('template/pro_partlist');
  HandlebarsHelper = require('HandlebarsHelper');

  ProductList = function (page, id, ctx) {

    var tpl = HandlebarsHelper.compile(template);
    var proHtml = HandlebarsHelper.compile(partTemplate);
    if (typeof id === 'undefined') return;

        App.query('/cmp/product/' + id, {
          cache: true,
          data: {
            pageSize: 500
          },
<<<<<<< Updated upstream
          success:function(data){
            data.list = data.proList.list;

            data.allCats = Est.bulidTreeNode(data.allCats, 'up_cat_id', 'root', {
              categoryId: 'cat_id',// 分类ＩＤ
              belongId: 'up_cat_id',// 父类ＩＤ
              childTag: 'children', // 子分类集的字段名称
              callback: function (item) {
              }
            });

            $(page).html(tpl(data));
=======
          success: function (data) {
            result.indexInfo.list = data.proList.list;
            result.indexInfo.firstCats = data.firstCats;
            $(page).html(tpl(result.indexInfo));
>>>>>>> Stashed changes

            seajs.use(['IncludeMessage', 'IncludeHeader'], function (IncludeMessage, IncludeHeader) {
              new IncludeMessage(page, '.message', {
                id: id
              });
<<<<<<< Updated upstream
              data.header.id = id;
              data.header.icon=3;
              new IncludeHeader(page,'#include_header',data.header);
=======
              result.indexInfo.icon = 3;
              new IncludeHeader(page, '#include_header', result.indexInfo);
>>>>>>> Stashed changes
            });

            $(page).find('.go-back').click(function () {
              App.back();
            });
<<<<<<< Updated upstream

           /* $(page).find('.prolist a').click(function () {
              App.load('brand_list', {
                id: $(this).attr('data-id'),
                title: $(this).attr('data-title'),
                banner: $(this).attr('data-banner')
              });
            });*/

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

=======
            $(page).find("#factory .search-list-title .icons-largest").click(function () {
              $(this).toggleClass("icons-larger");
              $("#factory .search-list-cont").toggleClass("larger-view");
            })
>>>>>>> Stashed changes
            // 筛选弹窗
            $(page).find('#factory .search-list-title .titlename').click(function () {
              var $dom = $(this).get(0);
              seajs.use(['dialog'], function (dialog) {
                window.dialog = dialog({
                  id: '330dialog',
                  skin: 'clickxiala',
                  title: ' ',
                  width: WINDOW_WIDTH - 74,
                  height: $('.xiala').height(),
                  content: $('.xiala', $(page)).html(),
                  onshow: function () {
                    var ctx = this;
                    $('.ul-my li').click(function () {
                      ctx.close().remove();
                      App.load($(this).attr('data-target'));
                    });

                    $('.fenlei01,.fenlei01 li').click(function(){
                      ctx.close().remove();
                      $(page).find('.search-list-title .name').text($(this).text());
                      App.query('/cmp/catPros',{
                        data:{factid:id,catid:$(this).attr('data-id')},
                        success:function(result){
                          $(page).find('.search-list-cont').empty();
                          $(page).find('.search-list-cont').html(proHtml(result.proList));
                        }
                      })
                    });
                  }
                }).showModal($dom);
              })
            });

            //样式切换
            var i = 0;
            var listCont = $(page).find('#factory .search-list-cont');
            $(page).find('.icons-list').click(function () {
              if (i === 3) {
                i = 0;
              }
              switch (i) {
                case 0:
                  $(this).removeClass("icons-largest").addClass("icons-larger");
                  listCont.removeClass("largest-view").addClass('larger-view');
                  break;
                case 1:
                  $(this).removeClass("icons-larger").addClass("icons-list");
                  listCont.removeClass("larger-view").addClass('list-view');
                  break;
                case 2:
                  $(this).removeClass("icons-list").addClass("icons-largest");
                  listCont.removeClass("list-view").addClass('largest-view');
                  break;
              }
              i++;
            });


<<<<<<< Updated upstream
=======
          }});
>>>>>>> Stashed changes
      }
    });

  }

  module.exports = ProductList;
});