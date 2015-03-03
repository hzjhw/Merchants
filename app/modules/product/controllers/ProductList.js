/**
 * @description ProductList
 * @class ProductList
 * @author yongjin<zjut_wyj@163.com> 2015/2/8
 */
define('ProductList', ['App', 'template/product_list', 'template/pro_partlist', 'Est', 'HandlebarsHelper'], function (require, exports, module) {
  var ProductList, App, Est, template, HandlebarsHelper, partTemplate;

  App = require('App');
  HandlebarsHelper = require('HandlebarsHelper');
  function bindDetail(page,id)
  {
    $(page).find('.search-list-cont .glitzItem .btn-pro-detail').on('click',function () {
      App.load('product_detail', {
        id: id,
        proid: $(this).parents('.glitzItem').attr('data-id')
      });
    });
  }

  function bindCollect(page)
  {
    $(page).find('.search-list-cont .price .collect').click(function () {
      var proid = $(this).parents('.glitzItem').attr('data-id');
      App.query("/userinfo/savePro/"+proid,{
        success:function(result){
          if(result.msg == 'nologin')
          {
            var cntVal = '<span style="font-size: 20px"> 收藏产品需要账号登录!现在就登录吗?</span>';
            showConfirm('未登录', cntVal, null, 'login_dealers');
          }
          else if(result.msg == 'error')
          {
            var cntVal = '<span style="font-size: 20px"> 由于网络等因素,搜藏失败!</span>';
            showMsg('收藏失败', cntVal);
          }
          else if(result.msg == 'success')
          {
            var cntVal = '<span style="font-size: 20px"> 您成功收藏该产品</span>';
            showMsg('收藏成功', cntVal);
          }
          else if(result.msg =='noproid')
          {
            var cntVal = '<span style="font-size: 20px"> 无法找到该产品详细信息</span>';
            showMsg('收藏错误', cntVal);
          }
        }
      })
    });
  }

  ProductList = function (page, id, price, ctx) {

    setTimeout(function(){
      template = require('template/product_list');
      var tpl = HandlebarsHelper.compile(template);
      partTemplate = require('template/pro_partlist');
      var proHtml = HandlebarsHelper.compile(partTemplate);
      if (typeof id === 'undefined') return;
      var url = '/cmp/product/' + id;
      if (price) {
        url = '/product/price/' + price;
      }
      App.query(url, {
        cache: true,
        data: {
          pageSize: 500
        },
        success: function (data) {
          var colum = price ? 'productList' : 'proList';
          data.list = data[colum].list;
          Est = require('Est');
          data.allCats = Est.bulidTreeNode(data.allCats, 'up_cat_id', 'root', {
            categoryId: 'cat_id',// 分类ＩＤ
            belongId: 'up_cat_id',// 父类ＩＤ
            childTag: 'children', // 子分类集的字段名称
            callback: function (item) {
            }
          });
          $(page).html(tpl(data));
          seajs.use(['IncludeMessage', 'IncludeHeader'], function (IncludeMessage, IncludeHeader) {
            if(data.header){
              data.header.id = id;
              data.header.icon = 3;
            }
            new IncludeHeader(page, '#include_header', data.header);
            if (typeof price === 'undefined') {
              new IncludeMessage(page, '.message', {
                id: id
              });
            }
          });


          $(page).find('.go-back').click(function () {
            App.back(window.backPage);
          });


          /* $(page).find('.prolist a').click(function () {
           App.load('brand_list', {
           id: $(this).attr('data-id'),
           title: $(this).attr('data-title'),
           banner: $(this).attr('data-banner')
           });
           });*/

          $(page).find("#factory .search-list-title .icons-largest").click(function () {
            $(this).toggleClass("icons-larger");
            $("#factory .search-list-cont").toggleClass("larger-view");
          })

          /*$(page).find('.search-list-cont .glitzItem .btn-pro-detail').on('click',function () {
            App.load('product_detail', {
              id: id,
              proid: $(this).parents('.glitzItem').attr('data-id')
            });
          });*/
          bindDetail(page,id);
          bindCollect(page);
          // 筛选弹窗
          $(page).find('#factory .search-list-title .titlename').click(function () {
            var $dom = $(this).get(0);
            seajs.use(['dialog'], function (dialog) {
              window.search_dialog = dialog({
                id: 'search_dialog',
                skin: 'clickxiala',
                title: ' ',
                width: WINDOW_WIDTH - 74,
                fixed: false,
                height: $('.xiala').height(),
                content: $('.xiala', $(page)).html(),
                onshow: function () {
                  var ctx = this;
                  $('.ul-my li').click(function () {
                    ctx.close().remove();
                    App.load($(this).attr('data-target'));
                  });

                  $('.fenlei01,.fenlei01 li').click(function () {
                    ctx.close().remove();
                    $(page).find('.search-list-title .name').text($(this).text());
                    App.query('/cmp/catPros', {
                      data: {factid: id, catid: $(this).attr('data-id')},
                      success: function (result) {
                        $(page).find('.search-list-cont').empty();
                        $(page).find('.search-list-cont').html(proHtml(result.proList));
                        bindDetail(page,id);
                        bindCollect(page);
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
                $(this).removeClass("icons-list").addClass("icons-larger");
                listCont.removeClass("list-view").addClass('larger-view');
                break;
              case 1:
                $(this).removeClass("icons-larger").addClass("icons-largest");
                listCont.removeClass("larger-view").addClass('largest-view');
                break;
              case 2:
                $(this).removeClass("icons-largest").addClass("icons-list");
                listCont.removeClass("largest-view").addClass('list-view');
                break;
            }
            i++;
          });
        }
      });
    }, 0);
  }

  module.exports = ProductList;
});