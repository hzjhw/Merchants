/**
 * @description Login
 * @class Login
 * @author yongjin<zjut_wyj@163.com> 2015/2/8
 */
define('Login', ['App', 'template/login'], function (require, exports, module) {
  var Login, App, template;

  App = require('App');
  template = require('template/login');

  Login = function (page, ctx) {
    $(page).html(template);
    $(page).find('.btn-back').click(function () {
      App.back();
    });
    $(page).find('#register').click(function(){
      App.load('register_dealers');
    });
    $(page).find('#chgpwd').click(function(){
      App.load('register_dealers');

    });
    $(page).find('#userLogin').click(function () {
      var phoneNum = $("#phoneNum", $(page)).val();
      var passwd = $("#passwd", $(page)).val();
      var reg = /^(1[3|5|8])[\d]{9}$/;
      if ($.trim(phoneNum) == '') {
        alert("手机号码不能为空！");
        return;
      }
      if (!reg.test(phoneNum)) {
        alert("电话号码格式错误!");
        $("#phoneNum", $(page)).focus();
        return;
      }

      if ($.trim(passwd) == '') {
        alert("密码不能为空！");
        return;
      }
      App.query('/login', {
        data: {
          phoneNum: phoneNum,
          passwd: passwd
        },
        success: function (data) {
          if (data.result == 'success') {
            alert("成功登录");
            localStorage[CELL_PHONE]=data.phoneNum;
            LOGIN_CHANGE=true;
            App.load(LOGIN_TYPE);
            //App.back();
          }
          else
          {
             if(data.msg == 'nopasswd')
             {
               alert("密码错误！");
             }
             else if(data.msg == 'nophone')
             {
               var cntVal = '<span style="font-size: 20px"> 该手机号还未注册！立即注册吗?</span>';
               window.showConfirm('未注册',cntVal,null,'register_dealers');
               /*if(window.confirm("该手机号还未注册！立即注册吗?"))
               {
                 App.load('register_dealers');
               }*/
             }
          }
        }
      })
    });
  }

  module.exports = Login;
});