/**
 * @description Login
 * @class Login
 * @author yongjin<zjut_wyj@163.com> 2015/2/8
 */
define('Ice8Ctrl', ['App', 'template/ice8'], function (require, exports, module) {
  var Ice8Ctrl, App, template;

  App = require('App');
  template = require('template/ice8');

  Ice8Ctrl = function (page, ctx) {
    debug('【Module】: Call Ice8');
    $(page).html(template);
    $(page).find('.brand .imgs').click(function(){
      var factid = $(this).parent(".brand").attr("data-factid");
      App.load('brand_detail',{id:factid});
    });
    $(page).find('.brand .detailed .yx').click(function(){
      if(!App.isLogin())
      {
        var cntVal = '登录看最牛招商政策';
        App.showConfirm('未登录', cntVal, null, function () {
          //App.setBackPage('brand_detail');
          App.load('login_dealers');
        });
        return;
      }
      else
      {
        var factid = $(this).parent().parent('.brand').attr('data-factid');
        //alert(factid);
        App.query('/cmp/hasCoped/'+factid,{
          success:function(data){
            if(data.msg === 'hasCoped')
            {
              var cntVal = '您与该厂家已有合作!现在查看合作进展情况吗？';
              App.showConfirm("已有合作",cntVal,null,function(){
                App.load("favorite_cooprate");
              })
            }
            else
            {
              App.load('brand_cooperate',{factid:factid});
            }
          }
        })
      }
    });
    $(page).find('.btn-back').click(function () {
      App.back();
    });
  };

  module.exports = Ice8Ctrl;
});