/**
 * @description IncludeDetailBottom
 * @class IncludeDetailBottom
 * @author yongjin<zjut_wyj@163.com> 2015/3/6
 */
define('IncludeDetailBottom', ['App', 'template/include_detail_bottom', 'HandlebarsHelper'], function (require, exports, module) {
  var IncludeDetailBottom,  App, template, HandlebarsHelper;
  App = require('App');
  HandlebarsHelper = require('HandlebarsHelper');
  template=require('template/include_detail_bottom');

  IncludeDetailBottom = function(page, render,data){
    var renderObj =$(page).find(render);
    renderObj.html(HandlebarsHelper.compile(template)(data));
    App.initBrandAutoHide(page);
    window.stopCall = false;
    // 底部导航
    $(page).find('.bottombar-ul li.page-load').off().on('click', function () {
      try{
        var urlVal =$(this).attr('data-url');
        if(urlVal.length > 0){
          if(urlVal !== 'brand_cooperate')
          {
            App.load(urlVal);
          }
          else
          {
            if(!App.isLogin())
            {
              var cntVal = '<span style="font-size: 20px"> 对不起,合作前需登录!现在就登录吗?</span>';
              App.showConfirm('未登录', cntVal, null, function () {
                //App.setBackPage('brand_detail');
                App.load('login_dealers');
              });
              return;
            }
            else
            {
              var factid = localStorage['brand_fact_id'];
              App.query('/cmp/hasCoped/'+factid,{
                success:function(data){
                  if(data.msg === 'hasCoped')
                  {
                    var cntVal = '<span style="font-size: 20px"> 您与该厂家已有合作!现在查看合作进展情况吗？</span>';
                    App.showConfirm("已有合作",cntVal,null,function(){
                      App.load("favorite_cooprate");
                    })
                  }
                  else
                  {
                    App.load(urlVal,{factid:factid});
                  }
                }
              })
            }
          }

        }
      }catch(e){
        console.log(e);
      }
      return false;
    });
  }

  module.exports = IncludeDetailBottom;
});