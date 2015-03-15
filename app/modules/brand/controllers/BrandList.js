/**
 * @description BrandList
 * @class BrandList
 * @author yongjin<zjut_wyj@163.com> 2015/2/8
 */
define('BrandList', ['App', 'template/brand_list', 'HandlebarsHelper'], function (require, exports, module) {
  var BrandList, App, template, HandlebarsHelper;

  App = require('App');
  HandlebarsHelper = require('HandlebarsHelper');

  BrandList = function (page, id, title, banner, area) {
    setTimeout(function () {
      debug('【Module】: Call BrandList');
      template = require('template/brand_list');
      $(page).html(template);
      // 初始化标题与banner
      $(page).find('.topbar-title').html('3.30' + title);
      $(page).find('.merchant-t-m').html(title);
      $(page).find('.app-banner img').attr('src', 'images/' + banner + '.jpg');
      // 返回
      $(page).find('.go-back').click(function () {
        App.back('home');
      });
      // 分类
      $(page).find('.btn-category').click(function () {
        App.load('category');
      });
      // 底部导航
      $(page).find('.bottombar-ul li').click(function () {
        App.load($(this).attr('data-url'));
      });

      // 列表
      var $list = $(page).find('.merchant-content-ul'),
        item = HandlebarsHelper.compile($(page).find('.merchant-content-ul').html()),
        totalPage = null,
        pageNumber = 1,
        i = 1;

      $(page).find('.merchant-content-ul').empty();
      App.infiniteScroll($list, { loading: App.getLoading()}, function (callback) {
        if (totalPage && (pageNumber > totalPage)) return null;
        App.query(area ? '/brand/schArea/' + encodeURIComponent(area) : '/brand/' + id, {
          cache: true,
          data: {
            pageSize: 10,
            pageNumber: pageNumber
          },
          success: function (result) {
            var colum = area ? 'areaList' : 'brandList';
            totalPage = result[colum].totalPage;
            var list = [];
            for (var j = 0; j < result[colum].list.length; j++) {
              var $node = $(item(result[colum].list[j]));
              $node.find('img').click(function () {
                App.setBackPage('brand_list');
                App.addLoading();
                App.load('brand_detail', {
                  id: $(this).parents('li').attr('data-id')
                });
              });
              //收藏品牌
              $node.find('.collection').click(function(){
                if(App.isLogin()){
                  var factid = $(this).parents('li').attr('data-id');
                  App.query('/userinfo/saveBrand/'+factid,{
                    success:function(data){
                      if(data.msg === 'success'){
                        var cntVal = '<span style="font-size: 20px"> 成功收藏该企业!</span>';
                        App.showMsg('收藏成功',cntVal);
                      }else if(data.msg === 'noproid'){
                        var cntVal = '<span style="font-size: 20px"> 无法找到企业相关信息!</span>';
                        App.showMsg('收藏错误', cntVal);
                      }else if(data.msg === 'hasCollect'){
                        var cntVal = '<span style="font-size: 20px"> 您已收藏过该企业,不能重复搜藏!</span>';
                        App.showMsg('重复收藏', cntVal);
                      }
                    }
                  })
                }
                else
                {
                  var cntVal = '<span style="font-size: 20px"> 收藏品牌需要账号登录!现在就登录吗?</span>';
                  App.showConfirm('未登录', cntVal, null, function () {
                    App.load('login_dealers');
                  });
                }
              });

              $node.find('.intention').click(function(){
                if(App.isLogin()){
                  var factid = $(this).parents('li').attr('data-id');
                  App.query('/cmp/hasCoped/'+factid,{
                    success:function(data){
                      if(data.msg === 'hasCoped'){
                        var cntVal = '<span style="font-size: 20px"> 您与该厂家已有合作!现在查看合作进展情况吗？</span>';
                        App.showConfirm("已有合作",cntVal,null,function(){
                          App.load("favorite_cooprate");
                        })
                      }
                      else{
                        App.load("brand_cooperate",{factid:factid});
                      }
                    }
                  })
                }
                else{
                  var cntVal = '<span style="font-size: 20px"> 与企业合作需账号登录!现在就登录吗?</span>';
                  App.showConfirm('未登录', cntVal, null, function () {
                     App.load('login_dealers');
                  });
                }
              });
              list.push($node);
            }
            i += 10;
            pageNumber += 1;
            callback(list);
          }
        });
      });
    }, 0);
    console.log('over');
  };

  module.exports = BrandList;
})
;