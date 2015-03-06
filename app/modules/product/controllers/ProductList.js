/**
 * @description ProductList
 * @class ProductList
 * @author yongjin<zjut_wyj@163.com> 2015/2/8
 */
define('ProductList', ['App', 'template/product_list','Est', 'HandlebarsHelper'], function (require, exports, module) {
  var ProductList, App, Est, template, HandlebarsHelper;

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
            cntVal = '<span style="font-size: 20px"> 收藏产品需要账号登录!现在就登录吗?</span>';
            App.showConfirm('未登录', cntVal, null, function(){
              App.load('login_dealers');
            });
          }
          else if(result.msg == 'error')
          {
            cntVal = '<span style="font-size: 20px"> 由于网络等因素,搜藏失败!</span>';
            App.showMsg('收藏失败', cntVal);
          }
          else if(result.msg == 'success')
          {
            cntVal = '<span style="font-size: 20px"> 您成功收藏该产品</span>';
            App.showMsg('收藏成功', cntVal);
          }
          else if(result.msg =='noproid')
          {
            cntVal = '<span style="font-size: 20px"> 无法找到该产品详细信息</span>';
            App.showMsg('收藏错误', cntVal);
          }
          else if(result.msg =='hasCollect')
          {
            cntVal = '<span style="font-size: 20px"> 不能重复收藏该产品!</span>';
            App.showMsg('重复收藏', cntVal);
          }
        }
      });
    });
  }

  ProductList = function (page, id, price, cat, keywords, ctx) {
    setTimeout(function(){
      debug('【Module】: Call ProductList');
      template = require('template/product_list');
      var tpl = HandlebarsHelper.compile(template);
      if (typeof id === 'undefined') return;
      var url = '/cmp/product/' + id;
      if (price || cat || keywords) {
        url = '/product/price/' + price + '-' + cat + (keywords ? ('-' + keywords) : '');
        $('.factory_logo .factory_banner .nav', $(page)).hide();

        $('#include_header', $(page)).hide();
      }

      App.query(url, {
        cache: true,
        data: {
          pageSize: 500
        },
        success: function (data) {
          var colum = 'proList';
          if (price) colum = 'productList';
          else if (cat) colum = 'catList';
          else if (keywords) colum = 'productList';
          else colum = 'proList';
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

          seajs.use(['IncludeHeader'], function (IncludeHeader) {
            if(!data.header){
              data.header = {
                hide: true
              }
            }
            data.header.icon = 3;
            new IncludeHeader(page, '#include_header', data.header);
          });

          $(page).find('.go-back').click(function () {
            App.back(App.getBackPage());
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
          });

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
            App.addLoading();
            var $xiala = null;
            if (price && price !== 'all'){
              $xiala = $('.xiala', $(page));
            } else if(cat && cat !== 'all'){
              $xiala = $('.xiala-price', $(page));
            } else{
              $xiala = $('.xiala-cmp', $(page));
            }
            seajs.use(['dialog'], function (dialog) {
              window.search_dialog = dialog({
                id: 'search_dialog',
                skin: 'clickxiala',
                title: ' ',
                width: $(window).width() - 174,
                fixed: false,
                height: 300,
                content: $xiala.html(),
                onshow: function () {
                  var ctx = this;
                  App.removeLoading();

                  $('.fenlei01,.fenlei01 li').click(function () {
                    ctx.close().remove();
                    $(page).find('.search-list-title .name').text($(this).text());
                    var dataId = $(this).attr('data-id');
                    //TODO 搜索
                    App.addLoading();
                    seajs.use(['Est'], function(Est){
                      var _tempData = Est.cloneDeep(data);
                      if (price && price !== 'all'){
                        // 过滤分类
                        _tempData.list = Est.filter(_tempData.list, {cat_name: dataId});
                        if (dataId === 'all') _tempData = data;
                        $(page).find('.search-list-cont').empty();
                        $(page).find('.search-list-cont').append($(tpl(_tempData)).find('.search-list-cont'));
                      } else if(cat && cat !== 'all'){
                        // 过滤价格
                        _tempData.list = Est.filter(_tempData.list, {price: dataId});
                        if (dataId === 'all') _tempData = data;
                        $(page).find('.search-list-cont').empty();
                        $(page).find('.search-list-cont').append(tpl($(tpl(_tempData)).find('.search-list-cont')));
                      } else {
                        debugger
                        _tempData.list = Est.filter(_tempData.list, {cat_id: dataId});
                        if (dataId === 'all') _tempData = data;
                        $(page).find('.search-list-cont').empty();
                        $(page).find('.search-list-cont').append(tpl($(tpl(_tempData)).find('.search-list-cont')));

                      }
                      App.removeLoading();
                      bindDetail(page,id);
                      bindCollect(page);
                    });
                  });
                  App.Scrollable($('.clickxiala .ui-dialog-content').get(0), false);
                }
              }).showModal();
            });
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
  };

  module.exports = ProductList;
});